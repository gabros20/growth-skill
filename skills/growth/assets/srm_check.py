#!/usr/bin/env python3
"""
srm_check.py -- Sample Ratio Mismatch (SRM) chi-square check for growth-skill.

SRM: the observed traffic split across arms deviates from the configured
allocation ratio by more than chance would produce. It is a data-quality alarm,
not an experiment-decision test -- trust nothing else from the experiment's
readout until it clears (Kohavi's "fever" framing). The full validity-mechanics
teaching (why SRM happens, assignment integrity, the PlanOut model) belongs to
data's experiment-measurement-foundations.md; this tool is the executable check,
not a re-teaching of the mechanics.

Detection: Pearson's chi-square goodness-of-fit test, observed per-arm counts
against the configured allocation.

Alarm threshold vs. decision threshold: GrowthBook and Eppo both flag SRM at
alpha=0.001, not the conventional 0.05 -- deliberately stricter, because a false
SRM alarm wastes an investigation while a missed one silently invalidates the
whole experiment. (Eppo reference is historical: Eppo was acquired by Datadog,
announced 2025-05-05/06, and now ships as "Datadog Experiments," GA 2026-04-02 --
this cites Eppo's pre-acquisition docs, not the current product.) The alarm
threshold and the experiment's own significance threshold are two different
numbers answering two different questions; this script defaults to 0.001 and
lets --alpha override it.

Self-test anchor: Fabijan, Gupchup, Gupta, Omhover, Qin, Vermeer, Dmitriev
(KDD 2019), Sec 2.3.1 -- a 50/50-designed split observed as 821,588 vs. 815,482
users (1,637,070 total) is already p < 1-in-500,000.
"""
import argparse
import math


def chi2_sf(x, df):
    """Survival function P(X > x) for a chi-square distribution with df degrees
    of freedom, via the regularized incomplete gamma function (series expansion
    below a+1, continued fraction above -- the standard split). Stdlib-only, no
    scipy dependency."""
    if x <= 0:
        return 1.0
    a = df / 2.0
    xx = x / 2.0
    if xx < a + 1:
        return 1.0 - _gammap_series(a, xx)
    return _gammaq_cf(a, xx)


def _gammap_series(a, x):
    gln = math.lgamma(a)
    ap = a
    total = 1.0 / a
    delta = total
    for _ in range(1000):
        ap += 1
        delta *= x / ap
        total += delta
        if abs(delta) < abs(total) * 1e-16:
            break
    return total * math.exp(-x + a * math.log(x) - gln)


def _gammaq_cf(a, x):
    gln = math.lgamma(a)
    tiny = 1e-300
    b = x + 1.0 - a
    c = 1.0 / tiny
    d = 1.0 / b
    h = d
    for i in range(1, 1000):
        an = -i * (i - a)
        b += 2.0
        d = an * d + b
        if abs(d) < tiny:
            d = tiny
        c = b + an / c
        if abs(c) < tiny:
            c = tiny
        d = 1.0 / d
        delta = d * c
        h *= delta
        if abs(delta - 1.0) < 1e-16:
            break
    return math.exp(-x + a * math.log(x) - gln) * h


def srm_check(observed, expected_ratio=None):
    """observed: list/tuple of per-arm counts. expected_ratio: list of the same
    length summing to 1 (defaults to equal allocation across all arms)."""
    k = len(observed)
    if k < 2:
        raise ValueError("need at least two arms")
    total = sum(observed)
    if expected_ratio is None:
        expected_ratio = [1.0 / k] * k
    if len(expected_ratio) != k:
        raise ValueError("expected_ratio must have the same length as observed")
    if abs(sum(expected_ratio) - 1.0) > 1e-9:
        raise ValueError("expected_ratio must sum to 1")
    expected = [total * r for r in expected_ratio]
    stat = sum((o - e) ** 2 / e for o, e in zip(observed, expected))
    df = k - 1
    p = chi2_sf(stat, df)
    return {"chi2": stat, "df": df, "p_value": p, "total": total,
            "observed": list(observed), "expected": expected}


def _self_test():
    r = srm_check([821588, 815482])
    assert r["p_value"] < 1 / 500_000, (
        f"Fabijan anchor failed: p={r['p_value']:.3e}, expected < 1/500,000")
    print(f"self-test PASS: Fabijan et al. (KDD 2019) worked example reproduced -- "
          f"chi2={r['chi2']:.3f}, p={r['p_value']:.3e} (< 1/500,000).")


def main():
    _self_test()
    p = argparse.ArgumentParser(description="Sample Ratio Mismatch chi-square check.")
    p.add_argument("counts", nargs="*", type=int,
                    help="observed per-arm counts, e.g. 821588 815482 "
                         "(default: the Fabijan et al. worked example)")
    p.add_argument("--ratio", nargs="*", type=float,
                    help="expected allocation ratio, same length as counts, "
                         "summing to 1 (default: equal split)")
    p.add_argument("--alpha", type=float, default=0.001,
                    help="alarm threshold (default 0.001 -- the GrowthBook/Eppo "
                         "(Eppo now Datadog Experiments) data-quality-alarm convention, "
                         "not the 0.05 decision threshold)")
    args = p.parse_args()

    counts = args.counts or [821588, 815482]
    r = srm_check(counts, args.ratio)
    print(f"observed: {r['observed']}  expected: {[round(e, 1) for e in r['expected']]}  "
          f"(total={r['total']:,})")
    print(f"chi2={r['chi2']:.4f}  df={r['df']}  p={r['p_value']:.6e}")
    if r["p_value"] < args.alpha:
        print(f"ALARM: p < alarm threshold ({args.alpha}) -- do not trust this experiment's "
              f"readout until the split is explained. This is a data-quality alarm, distinct "
              f"from the experiment's own significance threshold.")
    else:
        print(f"No SRM detected at alarm threshold {args.alpha}.")


if __name__ == "__main__":
    main()
