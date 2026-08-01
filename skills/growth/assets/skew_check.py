#!/usr/bin/env python3
"""
skew_check.py -- sample skewness + Kohavi's 355*s^2 normality-floor check for
growth-skill.

Seven Rules of Thumb (Kohavi, Deng, Frasca, Walker, Xu, Pohlmann, KDD 2014)
states the power table's normal-approximation sample size (see power_calc.py)
is a lower bound only: "many metrics of interest in online experiments are
skewed, which may require a higher lower bound before you can assume
normality." The paper's own rule, derived from Boos and Hughes-Oliver: when
|skewness| > 1, the BINDING sample-size floor is 355 * s^2 per variant, not
the power-table figure -- and this floor sits ON TOP OF the power requirement,
not instead of it; whichever number is larger governs.

This tool computes a sample's own skewness (Fisher-Pearson standardized third
moment, population convention: g1 = m3 / m2^1.5), reports the normality floor
per Kohavi's rule when it applies, and points at the paper's own remedy --
capping the metric -- rather than treating the floor as fixed. Never
transplant a metric's skewness or floor from one product to another
(experiment-design-and-feasibility.md §3): measure your own.

Self-test anchors (Bing's own post-erratum table, cited in this pack's
experiment-design-and-feasibility.md §3):
  355 * 17.9^2 = 113,746  (Revenue/User, uncapped)
  355 * 5.2^2  = 9,599    (Revenue/User, capped -- the paper's own remedy)
plus a synthetic-sample sanity check: [1,1,1,1,10] has an exactly
hand-derivable population skewness of 1.5.
"""
import argparse
import csv
import sys


def skewness(values):
    """Population (Fisher-Pearson) skewness: g1 = m3 / m2^1.5, where m_k is
    the k-th central moment (sum((x-mean)^k)/n). This is the 'standardized
    third moment' convention Boos and Hughes-Oliver's 355*s^2 rule is built
    on."""
    n = len(values)
    if n < 3:
        raise ValueError("need at least 3 values to compute skewness")
    mean = sum(values) / n
    m2 = sum((x - mean) ** 2 for x in values) / n
    m3 = sum((x - mean) ** 3 for x in values) / n
    if m2 == 0:
        raise ValueError("zero variance -- skewness is undefined")
    return m3 / (m2 ** 1.5)


def normality_floor(skew):
    """Kohavi's 355*s^2 rule, applied only when |skewness| > 1 per the
    paper -- below that threshold the normal-approximation power table
    (power_calc.py) already governs and this floor doesn't apply."""
    if abs(skew) <= 1:
        return None
    return round(355 * skew ** 2)


def _self_test():
    # Bing's own post-erratum table (experiment-design-and-feasibility.md §3).
    # Nearest-integer rounding, not ceiling -- matches the paper's own published
    # cells exactly (355 * 5.2^2 = 9,599.2, which the paper states as 9,599).
    r1 = round(355 * 17.9 ** 2)
    assert r1 == 113746, f"Revenue/User anchor failed: got {r1}, expected 113746"
    r2 = round(355 * 5.2 ** 2)
    assert r2 == 9599, f"Revenue/User (capped) anchor failed: got {r2}, expected 9599"

    # Synthetic sanity check: [1,1,1,1,10] has an exactly hand-derivable
    # population skewness of 1.5 (mean=2.8, m2=12.96=3.6^2, m3=69.984,
    # skew = 69.984 / 3.6^3 = 1.5 exactly).
    s = skewness([1, 1, 1, 1, 10])
    assert abs(s - 1.5) < 1e-9, f"synthetic sanity check failed: got {s}, expected 1.5"

    print("self-test PASS: Bing anchors (113,746 uncapped / 9,599 capped) and "
          "synthetic skewness sanity check ([1,1,1,1,10] -> 1.5) reproduced exactly.")


def _read_values(args):
    if args.csv:
        with open(args.csv, newline="") as f:
            reader = csv.DictReader(f)
            fieldnames = reader.fieldnames or []
            key = fieldnames[int(args.column)] if args.column.isdigit() else args.column
            return [float(row[key]) for row in reader]
    # stdin: whitespace/comma/newline-separated numbers
    raw = sys.stdin.read()
    tokens = raw.replace(",", " ").split()
    return [float(t) for t in tokens]


def main():
    _self_test()
    p = argparse.ArgumentParser(
        description="Sample skewness + Kohavi's 355*s^2 normality-floor check.")
    p.add_argument("--csv", help="path to a CSV file (default: read numbers from stdin)")
    p.add_argument("--column", default="0",
                    help="CSV column name, or 0-based column index (default: 0, first column)")
    args = p.parse_args()

    if not args.csv and sys.stdin.isatty():
        print("no --csv given and stdin is a terminal -- pipe numbers in, e.g. "
              "`cat sample.txt | skew_check.py`, or pass --csv path --column name")
        return

    values = _read_values(args)
    if len(values) < 3:
        raise SystemExit(f"need at least 3 values, got {len(values)}")

    s = skewness(values)
    n = len(values)
    print(f"n={n}  skewness={s:.4f}")

    floor = normality_floor(s)
    if floor is None:
        print("|skewness| <= 1 -- Kohavi's 355*s^2 normality floor does not apply; "
              "the power-table sample size (power_calc.py) governs on its own.")
    else:
        print(f"|skewness| > 1 -- Kohavi's normality floor: 355 * {s:.4f}^2 = {floor:,} "
              f"per variant.")
        print("This floor sits ON TOP OF the power requirement (power_calc.py), not "
              "instead of it -- whichever number is larger governs. It belongs to THIS "
              "metric's own distribution, never a portable number "
              "(experiment-design-and-feasibility.md §3).")
        print("The paper's own remedy is capping the metric: Bing's own Revenue/User "
              "example dropped from skewness 17.9 (floor 113,746) to 5.2 (floor 9,599) "
              "once capped -- see experiment-design-and-feasibility.md §3.")


if __name__ == "__main__":
    main()
