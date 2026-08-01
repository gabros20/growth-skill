#!/usr/bin/env python3
"""
power_calc.py -- two-proportion sample size / power calculator for growth-skill.

Two-sample test of proportions (H0: p1 = p2 vs H1: p1 != p2, or one-sided).
Implements the standard normal-approximation formula in two variance modes:

  --unpooled (default): n_per_arm = (z_a + z_b)^2 * [p1(1-p1) + p2(1-p2)] / (p2-p1)^2
      The exact two-sample formula. Matches Booking.com's own open-source
      calculator exactly at its shipped default state (see self-test).

  --pooled: n_per_arm = 2 * (z_a + z_b)^2 * p1(1-p1) / (p2-p1)^2
      Assumes p1 ~= p2 (a fair approximation only for small relative MDEs). This
      is the convention behind the "16*variance/d^2" shorthand vendors publish --
      PostHog's own worked example reproduces exactly under this mode (see
      self-test), using the exact constant 2*(z.975+z.80)^2 = 15.6978 rather than
      the rounded "16". It understates required n as the relative MDE grows;
      prefer --unpooled unless you are specifically checking a vendor's table.

Sample-ratio-mismatch and CUPED variance reduction are validity mechanics owned
by data's experiment-measurement-foundations.md -- this tool and its siblings
(srm_check.py, peeking_table.py) are the executable half of growth's design and
feasibility ownership, not a re-teaching of that reference.

Self-test anchors (run automatically before any calculation, every invocation):
  - PostHog's worked example (10% baseline, 20% relative MDE, pooled mode)
    -> 3,532 per arm (their own docs round this to 3,600 using the "16" shorthand)
  - Booking.com's shipped calculator.js default state (10% baseline, 2% relative
    MDE, alpha=0.10 two-sided, power=0.80, unpooled mode) -> 561,364 total
"""
import argparse
import math
from statistics import NormalDist


def z(p):
    """Inverse standard normal CDF (stdlib-only, no scipy dependency)."""
    return NormalDist().inv_cdf(p)


def two_proportion_n(baseline, mde_rel=None, mde_abs=None, alpha=0.05, power=0.80,
                      sides=2, pooled=False):
    """Per-arm and total sample size for a two-proportion test.

    baseline: control conversion rate p1, in (0, 1).
    mde_rel: relative minimum detectable effect (e.g. 0.20 for +20%). Mutually
      exclusive with mde_abs.
    mde_abs: absolute minimum detectable effect (e.g. 0.02 for +2 points).
    alpha: significance level (total, split across both tails if sides=2).
    power: 1 - beta.
    sides: 1 or 2.
    pooled: use the pooled/baseline-variance approximation (matches vendor
      tables built on "16*var/d^2"); default False uses the exact unpooled
      two-sample formula.
    """
    if (mde_rel is None) == (mde_abs is None):
        raise ValueError("supply exactly one of mde_rel or mde_abs")
    if not 0 < baseline < 1:
        raise ValueError("baseline must be in (0, 1)")
    treatment = baseline * (1 + mde_rel) if mde_rel is not None else baseline + mde_abs
    if not 0 < treatment < 1:
        raise ValueError(f"treatment rate {treatment:.4f} is outside (0, 1) -- MDE too large for this baseline")
    d = treatment - baseline
    if d == 0:
        raise ValueError("MDE is zero")
    tail_alpha = alpha / 2 if sides == 2 else alpha
    za = z(1 - tail_alpha)
    zb = z(power)
    if pooled:
        variance = 2 * baseline * (1 - baseline)
    else:
        variance = baseline * (1 - baseline) + treatment * (1 - treatment)
    n_per_arm = (za + zb) ** 2 * variance / d ** 2
    return {
        "baseline": baseline, "treatment": treatment, "mde_abs": d,
        "alpha": alpha, "sides": sides, "power": power, "pooled": pooled,
        "z_alpha": za, "z_beta": zb,
        "n_per_arm": math.ceil(n_per_arm), "n_total": math.ceil(n_per_arm) * 2,
    }


def _self_test():
    # PostHog docs: N = (16*variance)/d^2, worked example 10% baseline / 20%
    # relative MDE -> vendor states 3,600/variant. Re-derived with the exact
    # constant 2*(z.975+z.80)^2 = 15.6978 (not the rounded "16"): 3,532/arm.
    r = two_proportion_n(baseline=0.10, mde_rel=0.20, alpha=0.05, power=0.80, pooled=True)
    assert r["n_per_arm"] == 3532, f"PostHog anchor failed: got {r['n_per_arm']}, expected 3532"

    # Booking.com's shipped calculator.js default state (math.js):
    # baseRate=0.10, relativeImpact=0.02, falsePositiveRate=0.10 (two-sided),
    # targetPower=0.80 -> sample: 561364 (reproduced independently to the digit).
    r = two_proportion_n(baseline=0.10, mde_rel=0.02, alpha=0.10, power=0.80, pooled=False)
    assert r["n_total"] == 561364, f"Booking anchor failed: got {r['n_total']}, expected 561364"

    print("self-test PASS: PostHog pooled anchor (3,532/arm) and "
          "Booking unpooled anchor (561,364 total) reproduced exactly.")


def main():
    _self_test()
    p = argparse.ArgumentParser(description="Two-proportion sample-size / power calculator.")
    p.add_argument("--baseline", type=float, default=0.10, help="control conversion rate, e.g. 0.10")
    g = p.add_mutually_exclusive_group()
    g.add_argument("--mde-rel", type=float, help="relative MDE, e.g. 0.20 for +20%%")
    g.add_argument("--mde-abs", type=float, help="absolute MDE, e.g. 0.02 for +2 points")
    p.add_argument("--alpha", type=float, default=0.05)
    p.add_argument("--power", type=float, default=0.80)
    p.add_argument("--sides", type=int, choices=[1, 2], default=2)
    p.add_argument("--pooled", action="store_true",
                    help="use the pooled/baseline-variance approximation instead of the exact unpooled formula")
    args = p.parse_args()

    mde_rel = args.mde_rel
    mde_abs = args.mde_abs
    if mde_rel is None and mde_abs is None:
        mde_rel = 0.20  # demo default when run with no MDE flag

    r = two_proportion_n(args.baseline, mde_rel=mde_rel, mde_abs=mde_abs,
                          alpha=args.alpha, power=args.power, sides=args.sides,
                          pooled=args.pooled)
    print(f"assumptions: baseline={r['baseline']:.4f}  treatment={r['treatment']:.4f}  "
          f"abs MDE={r['mde_abs']:.4f}  alpha={r['alpha']} ({r['sides']}-sided)  "
          f"power={r['power']}  variance={'pooled' if r['pooled'] else 'unpooled (exact)'}")
    print(f"z_alpha={r['z_alpha']:.4f}  z_beta={r['z_beta']:.4f}")
    print(f"required sample size: {r['n_per_arm']:,} per arm  ({r['n_total']:,} total)")


if __name__ == "__main__":
    main()
