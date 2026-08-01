#!/usr/bin/env python3
"""
peeking_table.py -- Armitage recursive-integration peeking-inflation table for
growth-skill.

Answers one question: if you look at a fixed-horizon test's p-value K times and
stop the first time |Z| crosses the nominal two-sided alpha=0.05 boundary at
every look, what is your ACTUAL false-positive rate?

Method: Armitage, McPherson & Rowe (1969, JRSS-A 132(2), 235-244) -- recursive
numerical integration of the boundary-crossing density (Lan & DeMets describe it
as "a recursive density function, evaluated by numerical integration"). Setup: K
equally spaced looks, Z_k = S_k/sqrt(k), a constant nominal two-sided alpha=0.05
at every look (|Z_k| > 1.96), stop at first crossing.

This is the SAME curve continuous monitoring approaches in the limit -- Evan
Miller's 26.1% (continuous monitoring, 150-observation cap) sits near K=25 on
this table, and Johari et al.'s "approaches 100%" is the K -> infinity limit.
Always state K, the nominal alpha, and sidedness alongside any peeking-inflation
number -- never quote a bare figure (see experiment-readout-and-learning.md for
the one-curve reconciliation across all three sources).

This does not re-teach peek-SAFE methods (always-valid inference, alpha-spending
boundaries, mSPRT) -- those are data's ground (experiment-measurement-
foundations.md). This script quantifies the cost of not using one of them.

Self-test anchors (Lakens, citing Armitage et al.; tolerance 0.001):
  K=1   -> 0.0500
  K=5   -> 0.1418
  K=100 -> 0.3737
"""
import argparse
import math
from statistics import NormalDist

try:
    import numpy as np
except ImportError as e:
    raise SystemExit("peeking_table.py requires numpy (pip install numpy)") from e

SQRT2PI = math.sqrt(2 * math.pi)


def _phi(x):
    return np.exp(-0.5 * x * x) / SQRT2PI


def _simpson_weights(n_intervals, h):
    w = np.ones(n_intervals + 1)
    w[1:-1:2] = 4
    w[2:-1:2] = 2
    return w * h / 3.0


def armitage_type1_error(K, c=1.959964, n_per_unit=80):
    """Cumulative Type I error after K equally spaced looks at constant nominal
    critical value c (default 1.959964 = z for alpha=0.05, two-sided).

    Recursion: g_1 is the density of S_1 restricted to the look-1 continuation
    region [-c, c]. At each subsequent look, convolve the surviving density with
    a standard normal increment (Simpson's rule over the previous grid), then
    restrict to the new, wider continuation region [-c*sqrt(k), c*sqrt(k)]. The
    cumulative Type I error is 1 minus the total surviving mass after K looks.

    n_per_unit controls grid resolution (points per unit on the Z-scale); 80 is
    tight enough to match all published anchors within 0.001 and fast enough to
    self-test on every run.
    """
    bound = c * math.sqrt(1)
    n = int(2 * bound * n_per_unit)
    n += n % 2  # even interval count, required for Simpson's rule
    x_prev = np.linspace(-bound, bound, n + 1)
    g_prev = _phi(x_prev)

    for k in range(2, K + 1):
        bound_k = c * math.sqrt(k)
        nk = int(2 * bound_k * n_per_unit)
        nk += nk % 2
        y = np.linspace(-bound_k, bound_k, nk + 1)

        m = len(x_prev) - 1
        h = (x_prev[-1] - x_prev[0]) / m
        weights = _simpson_weights(m, h)

        kernel = _phi(y[:, None] - x_prev[None, :])
        g_prev = kernel @ (g_prev * weights)
        x_prev = y

    m = len(x_prev) - 1
    h = (x_prev[-1] - x_prev[0]) / m
    weights = _simpson_weights(m, h)
    survival = float(np.sum(g_prev * weights))
    return 1.0 - survival


ANCHORS = {1: 0.0500, 5: 0.1418, 100: 0.3737}


def _self_test():
    for k, expected in ANCHORS.items():
        got = armitage_type1_error(k)
        diff = abs(got - expected)
        assert diff < 0.001, f"K={k}: got {got:.4f}, expected {expected:.4f} (diff {diff:.4f} > 0.001)"
    print("self-test PASS: Armitage table reproduces published anchors within 0.001 "
          f"({', '.join(f'K={k}->{v:.4f}' for k, v in ANCHORS.items())}).")


def main():
    _self_test()
    p = argparse.ArgumentParser(description="Armitage peeking-inflation table.")
    p.add_argument("--looks", nargs="*", type=int,
                    default=[1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100],
                    help="K values to compute (default matches the published table)")
    p.add_argument("--alpha", type=float, default=0.05, help="nominal alpha per look (two-sided)")
    args = p.parse_args()

    crit = NormalDist().inv_cdf(1 - args.alpha / 2)

    print(f"nominal alpha={args.alpha} (two-sided) at every look, critical value z={crit:.4f}")
    print(f"{'K':>5}  {'actual alpha':>12}")
    for k in args.looks:
        val = armitage_type1_error(k, c=crit)
        print(f"{k:>5}  {val:>12.4f}")


if __name__ == "__main__":
    main()
