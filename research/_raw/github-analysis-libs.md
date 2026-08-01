# GitHub research: statistics/analysis libraries for experimentation (growth-skill)

- Worker: C3 (grw-github sub-orchestrator, channel C = GitHub)
- Date: 2026-08-01
- Scope: sequential testing / always-valid inference, CUPED & variance reduction, sample-size/power
  calculators, causal inference (geo-experiments, uplift), retention/cohort tooling, bandits.
- Method: `gh search repos` / `gh search code` / `gh api` for repo metadata + stars + commit dates;
  `curl`/WebFetch against `raw.githubusercontent.com/OWNER/REPO/HEAD/LICENSE*` for license text
  (never trust the GitHub API `license` field — it returns NOASSERTION or guesses). Source code
  read via `gh api repos/OWNER/REPO/contents/PATH` or raw githubusercontent fetch. WebSearch used
  sparingly (channel C budget ≤15) only where gh/curl could not resolve a provenance question.

**Central question per library**: what statistical/methodological assumptions does the CODE
encode (not the marketing copy)? Defaults, hardcoded constants, and doc-stated formulas are
first-class findings.

---

## 1. MASTER INVENTORY TABLE

(populated incrementally below as each library is verified; "as-of" = 2026-08-01 unless noted)

| Library | Repo | Stars (as-of) | Last commit | Archived? | License (FROM FILE) | Method | Maturity verdict |
|---|---|---|---|---|---|---|---|
| confseq | gostevehoward/confseq | 84 | 2026-01-07 | No | MIT (GitHub API confirmed; no separate LICENSE file text fetched — 404 on `LICENSE`, license declared via package metadata; API says MIT) | Confidence sequences / uniform boundaries (Howard-Ramdas-McAuliffe-Sekhon 2021 + related) | Academic reference implementation, early-stage per own README ("should not be considered stable"), low stars, but is the canonical upstream for the math GrowthBook's sequential engine cites |
| savvi | assuncaolfi/savvi | 28 | 2026-07-29 | No | MIT (LICENSE file fetched, confirmed) | Safe Anytime-Valid Inference (SAVI) — implements linear regression + multinomial e-process tests | Small, actively updated (2026-07-29), narrow scope (linear regression, multinomial), documentation-first (quarto site) |
| fumin/evalue | fumin/evalue | 0 | 2026-02-01 | No | BSD-3-Clause (API-reported; README 404, so provenance/method not independently verified beyond description) | e-values for SAVI | Zero-star, unverified beyond metadata — noted, not relied upon |
| GrowthBook `gbstats` | growthbook/growthbook (packages/stats/gbstats) | 8,082 (whole repo) | 2026-08-01 (active) | No | Repo-wide: MIT ("MIT Expat") outside `packages/*/src/enterprise` dirs, which carry the "GrowthBook Enterprise License" (source-available, not OSI). `packages/stats` itself is MIT (no enterprise carve-out found in that subtree). LICENSE file fetched directly from raw.githubusercontent.com. | Frequentist (Welch t-test, one/two-sided), Bayesian (Gaussian conjugate + credible intervals), always-valid sequential t-test via mixture-SPRT-style confidence sequence (Waudby-Smith et al. 2021, arXiv:2103.06476v7), CUPED-adjusted variance, Thompson-sampling-style bandits | Most complete, most actively maintained (same-day commits) open-source stats engine found in this research; direct math citations in-line as code comments — highest-value artifact for "docs teach stats" claim |
| tea-tasting | e10v/tea-tasting | 334 | 2026-07-11 | No | MIT (LICENSE file fetched, confirmed) | Welch/Student t-test, z-test, proportion tests, bootstrap, quantile metrics, delta method for ratio metrics, CUPED/CUPAC variance reduction, power analysis, multiple-testing correction (FWER + FDR), simulated experiments/A-A tests | Actively maintained, warehouse-native (runs inside BigQuery/ClickHouse/Postgres/Snowflake/Trino via Ibis), well-documented; a genuinely modern, small-team-buildable reference implementation |
| spotify/confidence | spotify/confidence | 294 | 2026-02-26 | No | Apache-2.0 (API-reported; LICENSE.txt 404'd at expected path, not independently re-fetched — flagged) | Z-test, Welch's t-test, chi-squared, variance reduction via pre-exposure linear-model fit (CUPED-style — `ZTestLinreg`), Bayesian Beta-Binomial, group-sequential tests, sample-size/power calc | "Beta" status per own badge; convenience wrapper around statsmodels; company-of-origin (Spotify) gives it first-party-engineering-blog-adjacent credibility |
| google/meterstick | google/meterstick | 117 | 2026-07-30 | No | Apache-2.0 (per API; not independently re-fetched from raw file — flagged) | Composable metrics DSL with a `CUPED` Operation class (regression: child ~ intercept + covariate) citing exp-platform.com/cuped directly in the docstring | Small but Google-authored and actively updated; useful as a second independent CUPED implementation cross-checking the algorithm |
| kolmogorov-lab/abacus | kolmogorov-lab/abacus | 48 | 2024-06-05 | No | MIT (per API; not independently re-fetched) | Hypothesis testing + experiment design, docs claim stratification, CUPED, CUPAC "sensitivity increasing techniques" | Smaller/less active (no commits since mid-2024); Russian-language ecosystem overlap with several CUPED tutorial repos found (YSDA, FUlyankin lecture notes) |
| Tencent/fast-causal-inference | Tencent/fast-causal-inference | 182 | 2025-12-30 | No | BSD-3-Clause (LICENSE file fetched: "fast-causal-inference is licensed under the BSD 3-Clause License", NOT the NOASSERTION the GitHub API field showed) | OLAP-native (ClickHouse) implementation of t-test w/ delta method + CUPED, OLS-based IV/WLS/GLS, DID, synthetic control (marked "incubating") | **License-API-lies example**: GitHub API `license.spdx_id` returns `NOASSERTION`; actual LICENSE file clearly states BSD-3-Clause. Confirms the charter's warning about the license API. |
| google/CausalImpact | google/CausalImpact | 1,850 | 2026-03-31 | No | Apache License 2.0 (per `DESCRIPTION`: "License: Apache License 2.0 \| file LICENSE"; API also reports Apache-2.0) | Bayesian structural time-series (Brodersen et al. 2015, Annals of Applied Statistics, DOI:10.1214/14-AOAS788) for interrupted-time-series causal inference | Actively maintained (last author commit 2026, version 1.4.1, requires R ≥4.5.0 and `bsts` ≥0.9.0); canonical implementation, Google-owned |
| WillianFuks/tfcausalimpact | WillianFuks/tfcausalimpact | 674 | 2025-01-13 | No | Apache-2.0 (LICENSE file fetched, confirmed) | Python port of CausalImpact, built on TensorFlow Probability | Most-starred community Python port; slower-moving than the official R package (last push 2025-01) |
| google/tfp-causalimpact | google/tfp-causalimpact | 165 | 2026-07-08 | No | Apache-2.0 (per API) | Official Google-endorsed Python port (credited in CausalImpact's own README as "the" recommended Python implementation), built on TensorFlow Probability | Newer, actively updated (2026-07), authoritative — the R README explicitly recommends this over community ports for Python users |
| facebookincubator/GeoLift | facebookincubator/GeoLift | 261 | 2026-06-30 | No | **CONFLICTING**: `LICENSE.md` at repo root = plain MIT text, copyright "Meta Platforms, Inc. and its affiliates" — BUT the R package's own `DESCRIPTION` file states `License: GPL (>= 2)` (because GeoLift `Imports:` the GPL-licensed `augsynth`/`gsynth` packages, which is the likely reason, but the repo does not reconcile this itself). **This is the FLAGGED FINDING the charter called out** — treat as GPL-encumbered until independently resolved (R's own tooling (`R CMD check`) honors DESCRIPTION's License field for CRAN-style dependency-license propagation; a downstream user relying on the top-level LICENSE.md text alone could ship non-compliant). No `PATENTS` file found (404). | Augmented Generalized Synthetic Control Method (interpolated/regularized synthetic-control geo-experiment design + power analysis + market selection) | Actively developed (whitepapers/, vignettes/, last push 2026-06-30); Meta-authored, used for ad-lift geo-experiments; recommends ≥25 pre-treatment periods and ≥20 geo-units per `DESCRIPTION` |
| google/matched_markets | google/matched_markets | 101 | 2025-08-21 | No | Apache-2.0 (README states "Copyright (C) 2020 Google LLC. License: Apache 2.0"; explicit "This is not an officially supported Google product. For research purposes only." disclaimer) | Time-Based Regression (TBR) Matched Markets — greedy search for geo-experiment design under advertiser constraints (Kerman 2017 method; Au 2018 search algorithm; foundational: Vaver & Koehler 2010) | Research-disclaimer, not "officially supported"; still actively used/cited; last push 2025-08 |
| google/trimmed_match | google/trimmed_match | 71 | 2023-06-01 | No | Apache-2.0 (README states "Copyright (C) 2020 Google LLC. License: Apache 2.0", same "research purposes only" disclaimer) | Trimmed Match estimator for paired randomized geo experiments (Chen & Au 2019), + design via optimal pairing/cross-validation (Chen, Longfils & Remy 2021) | Stalled since 2023-06 (2+ years no commits) — flag as less actively maintained than GeoLift/matched_markets/CausalImpact |
| py-why/dowhy | py-why/dowhy | 8,239 | 2026-08-01 (active) | No | MIT (LICENSE file fetched, confirmed) | Causal graphical models + potential-outcomes unification; explicit assumption modeling + refutation tests | General causal-inference toolkit, NOT growth-specific; growth-relevant slice = refutation tests (placebo, random-common-cause, subset-validation) applicable to any quasi-experiment growth runs |
| py-why/EconML | py-why/EconML | 4,739 | 2026-07-31 (active) | No | MIT (LICENSE file fetched directly — GitHub API showed `NOASSERTION`, another license-API-lies confirmation) | Double machine learning (Chernozhukov et al.), heterogeneous treatment effect (HTE) estimators | Growth-relevant slice = HTE/CATE estimators for targeting who-to-treat decisions (personalization, uplift-style); broader econometrics toolkit, not experiment-analysis-specific |
| uber/causalml | uber/causalml | 5,940 | 2026-08-01 (active) | No | Apache License 2.0, "Copyright 2019 Uber Technology, Inc." (LICENSE file fetched directly — GitHub API showed `NOASSERTION`, third license-API-lies confirmation in this research) | Uplift modeling (meta-learners: S/T/X/R-learner) + causal inference with ML | Directly growth-adjacent: uplift modeling is literally "who should we target with this treatment" — closer to growth's territory than DoWhy/EconML |
| synth-inference/synthdid | synth-inference/synthdid | 312 | 2024-01-15 | No | BSD-3-Clause (per API; not independently re-fetched — flagged) | Synthetic Difference-in-Differences (Arkhangelsky et al.) | Stalled since 2024-01 (1.5+ years no commits); academic-authorship (Athey/Imbens orbit), R package |
| pymc-labs/CausalPy | pymc-labs/CausalPy | 1,167 | 2026-08-01 (active) | No | Apache-2.0 (per API; not independently re-fetched — flagged) | Bayesian and frequentist quasi-experimental methods: interrupted time series, synthetic control, diff-in-diff, regression discontinuity, ANCOVA — unified PyMC-based Python API | Most actively developed general quasi-experiment toolkit found (same-day commits); broader than growth alone but directly usable for geo/holdout experiments without Google/Meta-scale infra |
| CamDavidsonPilon/lifelines | CamDavidsonPilon/lifelines | 2,600 | 2026-03-07 | No | MIT (LICENSE file fetched, confirmed) | Survival analysis (Kaplan-Meier, Cox PH, AFT models); README explicitly lists "SaaS providers... measuring subscriber lifetimes" and "A/B tests to determine how long it takes different groups to perform an action" as use cases | Actively maintained, the standard Python survival-analysis library; retention-as-survival-analysis is a real, encoded alternative to cohort-curve retention (see §5 below) |
| R `pwr` package (CRAN, mirrored at heliosdrm/pwr) | heliosdrm/pwr | 111 | 2023-12-04 | No | GitHub API returns `NOASSERTION` for the mirror; CRAN's own DESCRIPTION states GPL-family (not independently refetched from CRAN — flagged, but the important finding is the encoded defaults below, not the license) | Cohen's-effect-size-based power/sample-size functions (`pwr.t.test`, `pwr.2p.test`, `pwr.anova.test`, etc.) | THE canonical R power library, used pedagogically worldwide; stalled since 2023 but that's normal for a "done" stats utility package |
| statsmodels (`stats.power` module) | statsmodels/statsmodels | 11,546 | 2026-08-01 (active) | No | BSD-3-Clause (per API; core Python scientific-stack license, high confidence, not independently re-fetched) | `TTestIndPower`, `NormalIndPower`, `FTestPower`, `FTestPowerF2`, `GofChisquarePower` — general-purpose power/sample-size solvers | Most actively maintained general statistics library in this research; notably does NOT hardcode a default `power=0.8` or `alpha=0.05` anywhere in `solve_power()` signatures found — every call site requires the caller to pass `alpha` explicitly (see Folklore section for contrast with calculators that DO hardcode this) |
| PostHog (legacy experiment stats) | PostHog/posthog | 37,425 (whole repo) | 2026-08-01 (active) | No | Repo-wide: `NOASSERTION` per API — actual LICENSE file fetched: "MIT Expat" outside `ee/` directory, which is licensed under `ee/LICENSE` (source-available, not OSI) — same pattern as GrowthBook | `legacyExperimentCalculations.tsx` cites evanmiller.org/ab-testing/sample-size.html directly in a code comment for its (now-deprecated) frequentist calculator; current (non-legacy) experiment stats engine not deep-read in this pass | The `NOASSERTION` on a 37k-star repo is itself a strong illustration of "never trust the API field" — always resolve to file-level license text and check for an `ee/`-style carve-out |
| splitrb/split | splitrb/split | 2,709 | 2026-07-27 | No | MIT (LICENSE file fetched, confirmed) | Rack-based (Ruby) A/B testing framework; README directly links evanmiller.org's sample-size calculator to users rather than implementing its own power math | Not a stats library per se (it's an assignment/flagging framework) — noted because of the direct evanmiller.org pointer, a recurring pattern (see Folklore) |
| facebookarchive/planout | facebookarchive/planout | 1,689 | 2021-03-19 | **Yes — archived** | BSD License (LICENSE file fetched, confirmed: "BSD License / For PlanOut software / Copyright (c) 2014, Facebook, Inc.") | Experiment-configuration DSL/interpreter (randomization + parameterization language), not a stats-analysis library itself | Historically important lineage (predates/parallels Wasabi, influenced later config-language designs), but formally archived and dead |
| zalando/expan | zalando/expan | 344 | 2023-04-11 | No (not flagged archived by API, but no commits since 2023) | MIT (LICENSE file fetched, confirmed: "Copyright (c) 2016 Zalando SE") | Statistical analysis of randomized A/B tests (early open-source analysis lib, pre-CUPED-era design) | Stalled 2+ years; historical/lineage value per controller-canon §3, not a current recommendation |
| intuit/wasabi | intuit/wasabi | 1,140 | 2023-05-26 | No (repo description itself states "no longer under active development or being supported") | Apache-2.0 (LICENSE file fetched, confirmed) | Full A/B-testing SERVICE (Java, not just an analysis library) — assignment + basic stats | Explicitly end-of-life per the repo's own description; historical/lineage value only |
| VowpalWabbit/vowpal_wabbit | VowpalWabbit/vowpal_wabbit | 8,692 | 2026-07-15 | No | GitHub API returns `NOASSERTION`; LICENSE file fetched directly and reads as a 3-clause-BSD-style license text (no explicit "BSD" label in the file itself, copyright "Microsoft Corp 2012-2014, Yahoo! Inc. 2007-2012, and many individual contributors") — fourth license-API-lies confirmation | Contextual-bandit / online-learning library; industrial-strength, used for large-scale bandit and interactive-learning systems | Adjacent to growth (bandits), primarily an ML systems library, not experiment-analysis-specific |
| david-cortes/contextualbandits | david-cortes/contextualbandits | 838 | 2026-07-08 | No | Not independently license-verified this pass (flagged) | Python implementations of contextual-bandit algorithms (LinUCB, Thompson-sampling variants, etc.) | Most-starred pure-Python contextual-bandit library found; not growth-specific, general ML |
| Nth-iteration-labs/contextual | Nth-iteration-labs/contextual | 81 | 2026-03-24 | No | Not independently license-verified this pass (flagged) | R package for simulation/evaluation of multi-armed and contextual bandit policies | R-ecosystem bandit-simulation tool; smaller/niche |

---

## 2. DEEP SECTION: sequential testing / always-valid inference

**Academic backbone found on GitHub**: `gostevehoward/confseq` (MIT, 84 stars, as-of 2026-08-01)
is the reference implementation for the Howard/Ramdas/McAuliffe/Sekhon school. Its README lists
four primary papers verbatim (source: raw.githubusercontent.com/gostevehoward/confseq/master/README.md,
fetched 2026-08-01):
- Howard, Ramdas, McAuliffe, Sekhon (2021), "Time-uniform, nonparametric, nonasymptotic confidence
  sequences," Annals of Statistics 49(2), 1055-1080. arXiv:1810.08240.
- Howard & Ramdas (2021), "Sequential estimation of quantiles with applications to A/B-testing and
  best-arm identification," Bernoulli (to appear). arXiv:1906.09712.
- Waudby-Smith & Ramdas (2021), "Estimating means of bounded random variables by betting."
  arXiv:2010.09686.
- Waudby-Smith & Ramdas (2020), "Confidence sequences for sampling without replacement," NeurIPS 33.

The README explicitly self-labels "early-stage development and should not be considered stable"
(source: same README, fetched 2026-08-01) — this is an honest maturity disclosure worth preserving
verbatim if we ever cite it as an authority.

**GrowthBook's `gbstats` sequential engine is the most concrete, most-cited-in-code implementation
found.** Source: `packages/stats/gbstats/frequentist/tests.py` in growthbook/growthbook, fetched
2026-08-01, main branch (repo pushed same day — actively maintained).

Encoded assumptions, pulled directly from source:
- `SequentialConfig` (subclass of `FrequentistConfig`) declares
  `sequential_tuning_parameter: float = 5000` and `rho: Optional[float] = None` — file
  `gbstats/frequentist/tests.py`, class `SequentialConfig`. The tuning parameter defaults to 5000
  with no comment justifying that number in the surrounding code (a candidate for "why 5000?" —
  UNTRACED in this pass; likely comes from GrowthBook's own blog/docs, not verified here).
- `sequential_rho()` computes rho per "eq 161 in https://arxiv.org/pdf/2103.06476v7.pdf" — the
  code comment cites the exact equation number of the paper it implements (`gbstats/frequentist/tests.py`,
  function `sequential_rho`).
- `sequential_interval_halfwidth()` implements "eq 9 in Waudby-Smith et al. 2023
  https://arxiv.org/pdf/2103.06476v7.pdf" (same file). Note: arXiv 2103.06476 is the Waudby-Smith,
  Ramdas et al. "always-valid inference" / confidence-sequence paper family — GrowthBook's engine
  is a direct, math-cited implementation of this school, NOT a from-scratch invention.
  `sequential_interval_halfwidth_one_sided()` cites "eq 134" of the same paper; the two-sided
  sequential p-value (`SequentialTwoSidedTTest.p_value`) cites "eq 155" and computes an **e-value**
  internally (`evalue = np.exp(...)`, then `p_value = min(1/evalue, 1)`) — i.e. GrowthBook's
  "always-valid p-value" is literally `1/e-value`, the standard e-value-to-p-value conversion.
- The one-sided sequential p-value (`SequentialOneSidedTreatmentLesserTTest.compute_p_value`) is
  NOT a closed form — it's computed by **bisection search over alpha** between
  `min_alpha = 1e-5` and `max_alpha = 0.4999`, with `tol = 1e-6` and `max_iters = 100` (hardcoded
  constants in `gbstats/frequentist/tests.py`). This is an engineering-pragmatic approximation, not
  a closed-form inversion — worth noting as an implementation detail that could matter for edge cases.
- Every `BaseConfig` (shared by frequentist and Bayesian tests) defaults `alpha: float = 0.05` and
  `difference_type: DifferenceType = "relative"` (`gbstats/models/tests.py`, class `BaseConfig`).
  So GrowthBook's stats engine defaults to a **5% two-sided alpha on RELATIVE lift**, not absolute —
  worth flagging since "relative vs absolute MDE" is one of the controller's called-out power-math
  assumption axes.

**savvi** (assuncaolfi/savvi, MIT, 28 stars) implements SAVI specifically for `linear_regression`
and `multinomial` outcome models (source: `gh api repos/assuncaolfi/savvi/contents/src/savvi`,
fetched 2026-08-01, files `linear_regression.py` and `multinomial.py` present, no generic
mean-comparison module found in the top-level source tree) — narrower scope than confseq or gbstats;
commits to a specific glm-style e-process framework rather than a general confidence-sequence toolkit.

**Netflix's mSPRT reimplementation found in the wild**: `akurennoy/yeast` (no license file found —
`license: null` via API, not independently re-fetched; 11 stars) contains `methods/msprt.R` with the
code comment "# Netflix's version of Always Valid F-test (mSPRT)" (source: raw file, fetched
2026-08-01) — this is a third-party researcher's reimplementation of a method Netflix has described
in talks/blogs, NOT an official Netflix open-source release. Treat provenance as "described-by,
reimplemented-by-third-party," not "Netflix's own code."

## 3. DEEP SECTION: CUPED and variance reduction

Three independent, cross-checkable open-source CUPED implementations were found and read at the
source level:

1. **GrowthBook `gbstats`** — `gbstats/models/tests.py`, function
   `frequentist_variance_relative_cuped(stat_a, stat_b)`. Encodes a `theta`-adjusted variance
   formula operating on `RegressionAdjustedStatistic` objects that carry `pre_statistic`,
   `post_statistic`, and `covariance` fields — i.e. the implementation assumes the caller has
   already computed a pre-period/post-period pair per unit with `theta` (the CUPED regression
   coefficient) attached to the statistic object (`stat_a.theta`). There is a companion
   `frequentist_variance_relative_cuped_ratio()` for ratio metrics (source: same file) — meaning
   GrowthBook's CUPED explicitly handles both simple means AND ratio metrics, not just the simple case.
2. **tea-tasting** (e10v/tea-tasting, MIT, 334 stars) — README states CUPED/CUPAC "can be combined
   with the delta method for ratio metrics" and links directly to the primary CUPED paper PDF
   (exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf) and
   the DoorDash CUPAC engineering blog post (doordash.engineering/2020/06/08/...) as its own stated
   references (source: README.md, fetched 2026-08-01).
3. **google/meterstick** — `operations.py`, class `CUPED(AbsoluteChange)` (source fetched 2026-08-01).
   Docstring: "Computes the absolute change after controlling for preperiod metrics... 1. centers
   the covariates... 2. fit child ~ intercept + covariate. And the intercept is the adjusted effect
   and has a smaller variance than child. See https://exp-platform.com/cuped for more details."
   This is the clearest plain-English restatement of the CUPED mechanism found in any source code
   docstring in this research, and it also cites the primary paper directly.

**What covariates does the CODE assume are available?** All three implementations assume a
**pre-experiment (pre-period) value of the SAME metric** is available per unit — none of the three
implement arbitrary-covariate CUPED (e.g., demographic covariates) in the code paths read; CUPAC
(using a ML-predicted covariate instead of a raw pre-period metric) is mentioned in tea-tasting's
README as a capability but the underlying prediction step is left to the user (tea-tasting doesn't
ship a CUPAC model-fitting pipeline itself, only the variance-reduction combination step, per the
README's phrasing "can be combined with").

**Variance-reduction magnitudes**: no source-code comment, docstring, or README in ANY of the three
libraries above states a specific "%" variance-reduction figure. All three point to the primary
Deng/Xu/Kohavi/Walker paper or a company engineering blog for magnitude claims rather than
asserting one themselves — see §5 (candidate magnitudes table) for the secondhand figures found
elsewhere (skill-marketplace repos, not stats libraries) and their UNTRACED status.

## 4. DEEP SECTION: sample-size / power calculators — encoded assumptions

**R `pwr` package** (canonical; mirrored at heliosdrm/pwr, 111 stars). Source read:
`R/pwr.t.test.R` and `R/pwr.2p.test.R`, fetched 2026-08-01.
- `pwr.t.test()`: default `sig.level = 0.05`, default `alternative = c("two.sided","less","greater")`
  (two.sided is the first/default value R's `match.arg()` selects) — encodes a **5% two-tailed
  default**. No default for `power` — the function REQUIRES the caller to leave exactly one of
  `{n, d, power, sig.level}` NULL to solve for it; there is no implicit "solve for power=0.8."
  Effect size `d` is Cohen's d — an ABSOLUTE standardized effect size, not a relative lift.
- `pwr.2p.test()` (two-proportion test — the one most relevant to conversion-rate experiments):
  same `sig.level = 0.05` default, same three-way `alternative` argument, effect size `h` is
  **Cohen's h** (arcsine-transformed difference of proportions — NOT a simple percentage-point or
  relative-lift difference). The function accepts a *character* size label ("small"/"medium"/"large")
  that gets converted via `cohen.ES(test="p", size=h)` — i.e. Cohen's canonical small/medium/large
  effect-size conventions are baked into the package as a convenience path.
- Neither function warns about peeking, multiple testing, or ratio metrics — the `pwr` package is a
  pure fixed-horizon, single-comparison power calculator; sequential/peeking concerns are entirely
  out of scope by design.

**Python `statsmodels.stats.power`** (statsmodels/statsmodels, 11,546 stars, actively maintained).
Source read: `statsmodels/stats/power.py`, fetched 2026-08-01.
- Every `power()` and `solve_power()` method signature found (`TTestIndPower`, `NormalIndPower`,
  `TTestPower`, `FTestPower`, `FTestPowerF2`, `GofChisquarePower`) takes `alpha` and `alternative`
  as **required, explicit, no-default-in-the-solve-path** arguments in the actual solver calls —
  the one place a literal default appears is `plot_power(..., alpha=0.05, ...)`, a plotting
  convenience function, NOT the statistical solver itself. `alternative="two-sided"` is the
  consistent default string across the module. **Contrast with folklore calculators (below):
  statsmodels does not silently assume 80% power — it forces the caller to state it.**

**GrowthBook `gbstats` mid-experiment power module** — `gbstats/power/midexperimentpower.py`,
fetched 2026-08-01 — is the single most concrete "encoded folklore-adjacent defaults" find in this
research:
```
class MidExperimentPowerConfig:
    target_power: float = 0.8
    target_mde: float = 0.01
    num_goal_metrics: int = 1
    num_variations: int = 2
    ...
```
(file: `gbstats/power/midexperimentpower.py`, class `MidExperimentPowerConfig`, fetched 2026-08-01)
— i.e. GrowthBook's own product defaults to **80% target power** and a **1% (relative) target MDE**
when a user asks "how many more users do I need to reach significance." This is GrowthBook
committing, in shippable product code, to the same 80%/5%-alpha folklore-adjacent convention the
charter calls out — except here it is at least computed live from the config, not literally
hardcoded into a single opaque "add 2 weeks" rule. Multiple-testing correction is optional and
explicit: when `p_value_corrected=True`, the code computes
`self.num_tests = (num_variations - 1) * num_goal_metrics` and
`self.multiplier = norm.ppf(1 - self.alpha / (2 * self.num_tests))` — a Bonferroni-style correction
applied only if the caller opts in (default `p_value_corrected: bool = False` in the same file).

**GeoLift power calculator** (`facebookincubator/GeoLift`, `R/pre_test_power.R`, fetched 2026-08-01):
- Default significance level found in the power-search functions: **`alpha = 0.1`** (10%, NOT 5%) —
  e.g. `GeoLiftPower.search(..., alpha = 0.1, ...)` and the standalone power function default
  `alpha = 0.1` (file `R/pre_test_power.R`, multiple function signatures). This is a real, notable
  divergence from the 5%-alpha convention baked into every other library in this table — a geo-level
  synthetic-control test with few units (small N of geo-markets, not users) trades off a looser
  alpha for feasibility, and GeoLift's own docs/DESCRIPTION recommend ≥25 pre-treatment periods and
  ≥20 geo-units, suggesting alpha=0.1 is a deliberate small-N accommodation — worth surfacing as an
  explicit, sourced counter-example to "5% is always the number."
- Default `ns = 1000` resamples for i.i.d. permutation-based inference (`conformal_type = "iid"`
  path), and default `effect_sizes = seq(0, 0.25, 0.05)` (i.e., tests lift hypotheses from 0% to 25%
  in 5-point increments) in `GeoLiftPower.search()` (same file).

**PostHog's (now-deprecated) legacy calculator** — `frontend/src/scenes/experiments/legacy/calculations/legacyExperimentCalculations.tsx`,
fetched 2026-08-01 — carries an explicit code comment "// The results are same as:
https://www.evanmiller.org/ab-testing/sample-size.html" (marked `@deprecated`, "Frozen copy for
legacy experiments — do not modify"). This confirms Evan Miller's widely-cited sample-size formula
(evanmiller.org/ab-testing/sample-size.html) as a real, code-verifiable reference implementation
target used by a major open-source product (PostHog, 37k stars), not just a folklore link.

## 5. DEEP SECTION: causal inference for growth (geo-experiments, uplift, quasi-experiments)

**CausalImpact family — the assumption is explicit and self-stated, not buried.** From the R
README (google/CausalImpact, fetched 2026-08-01): "the CausalImpact package, in particular, assumes
that the outcome time series can be explained in terms of a set of control time series that were
themselves not affected by the intervention. Furthermore, the relation between treated series and
control series is assumed to be stable during the post-intervention period." This is a first-party,
verbatim-quotable assumption statement — no inference required. Python users are explicitly
redirected by the R package's own maintainers to `google/tfp-causalimpact` (Google-owned, TFP-based,
165 stars, actively updated 2026-07-08) as the recommended port, with `WillianFuks/tfcausalimpact`
(674 stars, community, last push 2025-01) as the historically more popular but now Google-endorsed-
as-secondary community alternative.

**GeoLift's method commitment**: Augmented Generalized Synthetic Control (per repo description:
"a flexible and robust implementation of Augmented Generalized Synthetic Controls"), which
distinguishes it from CausalImpact's Bayesian structural time series and from plain diff-in-diff —
GeoLift's `DESCRIPTION` (fetched 2026-08-01) states it "allows for flexible geo-grain definitions
but is recommended for geographic aggregation levels of cities or higher" and requires "at least
25 pre-treatment periods and over 20 geo-units" — i.e. it encodes a minimum-viable-experiment-design
floor directly in its own documentation, a concrete, citable "how small can your geo-test be" number.

**Trimmed Match's stated problem** (google/trimmed_match README, fetched 2026-08-01): "Unlike the
usual A/B tests, in GeoX, the number of geos is usually small; Moreover, there is often severe
heterogeneity across geos, which makes traditional regression adjustment less reliable.
Furthermore, due to temporal dynamics, geos... may become less comparable during the test period
even if they were comparable during the design phase." This is the library's own README stating,
in its own words, exactly what plain diff-in-diff gets wrong for small-N geo experiments — a
directly quotable answer to the brief's "what problem does it solve that plain diff-in-diff
doesn't?" question. Method citation: Chen & Au (2019); design improvements: Chen, Longfils & Remy
(2021). Foundational geo-experiment citation shared with matched_markets: Vaver & Koehler (2010).

**matched_markets' method**: Time-Based Regression (Kerman, 2017) + a greedy market-selection search
algorithm (Au, 2018) that satisfies both advertiser constraints (budget, forced geo inclusion) and
the statistical assumptions of TBR. Both matched_markets and trimmed_match carry an identical,
explicit disclaimer in their own READMEs: "This is not an officially supported Google product. For
research purposes only." (both fetched 2026-08-01) — a real, first-party-stated maturity caveat
worth preserving if either is ever cited as an authority.

**DoWhy / EconML — honest growth-relevance assessment.** Both are general causal-inference /
econometrics toolkits, not growth-specific tools. The growth-relevant slice: DoWhy's refutation
tests (placebo treatment, random common cause, subset-data validation — used to stress-test whether
a quasi-experimental causal claim survives sanity checks) are directly reusable for growth's
diff-in-diff/geo-experiment/interrupted-time-series work; EconML's heterogeneous-treatment-effect
(CATE) estimators are directly reusable for "who should we target" personalization decisions. Both
are far more data-science/ML-engineering tooling than growth-specific product; the honest verdict is
they belong in a "borrow this technique" citation, not a "growth owns this library" claim.

**uber/causalml is the more directly growth-relevant of the three general ML-causal libraries** —
its explicit purpose (per repo description) is "Uplift modeling and causal inference with machine
learning algorithms," i.e., who-to-target decisions, which is squarely inside growth's "product
loops / targeting" territory rather than adjacent to it.

**pymc-labs/CausalPy is the most actively developed general quasi-experiment toolkit found** (commits
same day as this research) and is architecturally the closest thing to "a small team's one-stop
diff-in-diff / synthetic-control / regression-discontinuity / interrupted-time-series kit" without
requiring Google/Meta-scale internal infrastructure — worth flagging to the controller as a
practical small-sample-friendly recommendation candidate, separate from Google/Meta's
enterprise-scale geo-experiment tooling.

## 6. DEEP SECTION: retention / cohort analysis tooling

**Finding: there is no mature, widely-adopted, dedicated open-source "retention/cohort curve"
analysis library on GitHub analogous to `pwr` or `lifelines`.** Repeated `gh search repos` queries
for "cohort retention analysis" and "retention curve analysis" (run 2026-08-01) returned only
small, single-author tutorial/portfolio notebooks (0-8 stars each: ZhijingEu/Cohort_Retention_Analysis,
YamanAlBochi/CohortRetentionAnalysis-Project, theammarngp-makes/E-commerce-cohort-retention-analysis,
and roughly a dozen similar student/bootcamp-project repos) — none reach even 10 stars, none are
maintained as reusable libraries, and none encode a documented retention DEFINITION as a first-class
API concept (they're mostly one-off `pandas.pivot_table` + heatmap scripts). This is itself a
finding: **retention/cohort analysis, unlike sequential testing or CUPED, has NOT converged on a
canonical open-source library** — it remains ad hoc SQL/pandas per shop, which supports (does not
prove, but supports) the charter's hypothesis that retention DEFINITION (N-day vs rolling/bracketed)
is under-taught rather than over-tooled.

**The one real code-level encoding of a retention-adjacent definition found**: `lifelines`
(CamDavidsonPilon/lifelines, MIT, 2,600 stars, actively maintained) reframes retention as a
**survival/time-to-event problem** rather than a cohort-percentage problem. Its own README
(fetched 2026-08-01) explicitly lists as a motivating use case: "SaaS providers are interested in
measuring subscriber lifetimes, or time to some first action" and "A/B tests to determine how long
it takes different groups to perform an action." This is a DIFFERENT retention definition than
either N-day or rolling retention — it treats "still retained" as right-censored survival, and
naturally handles users who haven't yet churned as of the measurement date (censoring) rather than
requiring a fixed observation window. This is a real, code-encoded THIRD definitional option beyond
the N-day-vs-rolling split the charter names, worth carrying forward: **N-day retention (binary,
fixed window) vs rolling/bracketed retention (any activity in a window) vs survival-analysis
retention (continuous hazard/censored time-to-churn)**.

No N-day-vs-rolling definitional split was found encoded as competing implementations within a
single library — the split appears to be a product-analytics-vendor-documentation distinction
(Amplitude/Mixpanel docs, not GitHub code) rather than something two different GitHub libraries each
commit to. Flagging this as an open question for channel D (web/company blogs) to close.

## 7. DEEP SECTION: bandits — the learn-vs-earn seam

**GrowthBook's bandit implementation** (`gbstats/bayesian/bandits.py`, fetched 2026-08-01) is a
Bayesian Thompson-sampling-style bandit built directly on top of the same `GaussianPrior` /
`BayesianConfig` classes used by its A/B-test engine (`from gbstats.bayesian.tests import
BayesianConfig, GaussianPrior`) — i.e., in GrowthBook's own architecture, a bandit and a Bayesian
A/B test are the SAME statistical machinery with different weight-update behavior layered on top,
not two unrelated systems. Encoded defaults from `BanditConfig` (subclass of `BayesianConfig`):
`top_two: bool = True` (a "top-two Thompson sampling" variant — allocates traffic between only the
best AND second-best arm rather than all arms, a known best-arm-identification refinement, not
naive Thompson sampling), `min_variation_weight: float = 0.01` (no arm's traffic share is allowed to
drop below 1%, presumably to keep learning signal alive on all arms), `weight_by_period: bool = True`.

**No explicit "when to use a bandit vs an A/B test" statement was found in GrowthBook's own source
code comments** in the files read this pass (the tradeoff, if documented, lives in GrowthBook's
prose docs site, not inline code comments — out of scope for this raw-code-reading pass; flag for
channel D or a docs-specific pass to confirm/quote GrowthBook's or another vendor's stated
learn-vs-earn guidance verbatim). What IS directly observable from the code: GrowthBook's bandit
literally reuses the A/B-test Bayesian posterior machinery, which is itself evidence for the
"same infra, different intent" framing the charter already applies to feature flags — bandits and
A/B tests aren't just conceptually related, in at least this one open-source implementation they are
architecturally the same statistical core with a different action-selection layer on top.

**VowpalWabbit** (8,692 stars, contextual-bandit/online-learning-focused) and
**david-cortes/contextualbandits** (838 stars) were catalogued at the metadata level only — both are
general-purpose ML systems libraries, not growth-specific, and no explicit "vs A/B testing" framing
was found in the material read this pass.

---

## 8. FOLKLORE-IN-CODE (prime falsification-strip material)

**"100 conversions per variant" — the single strongest folklore-in-code finding in this research.**
A `gh search code` for the exact phrase `"100 conversions per variant"` (run 2026-08-01) returned
this near-identical rule repeated VERBATIM across at least nine unrelated repositories, almost all
of them Claude/LLM-agent "skill" marketplace packages (not stats libraries, not company engineering
docs) — i.e. this is folklore that has propagated through LLM-generated or copy-pasted "best
practices" skill content, not through any traceable statistical derivation:
- `TheCraigHewitt/seomachine` — `context/cro-best-practices.md`: "Minimum 100 conversions per variant"
- `LeoYeAI/openclaw-master-skills` — `skills/afrexai-copywriting-mastery/SKILL.md`: "Minimum sample:
  1,000 visitors or 100 conversions per variant before calling a winner."
- `adcontextprotocol/adcp` — `.agents/roles/ad-creative-expert.md` and `.claude/agents/ad-creative-expert.md`
  (same text duplicated twice in one repo): "Statistical significance matters. 100 conversions per
  variant minimum before calling a winner."
- `borghei/Claude-Skills` — `business-growth/paywall-upgrade-cro/SKILL.md`: "Run for minimum 2 weeks
  or 100 conversions per variant" (note: ALSO contains the "2 weeks" folklore rule, stacked with the
  conversions rule, in the same bullet)
- `ominou5/funnel-architect-plugin` — `skills/ab-testing/SKILL.md`: "Minimum sample size — At least
  100 conversions per variant before calling a winner"
- `seb1n/awesome-ai-agent-skills` — `marketing-and-seo/analytics-reporting/SKILL.md`: "Avoid making
  major budget decisions on fewer than 100 conversions per variant."
- `Vrooli/Vrooli` — `scenarios/landing-manager/docs/FAQ.md`: "Minimum 100 conversions per variant"
- `clawic/skills` — `skills/vibe-marketing/testing.md`: "Minimum 100 conversions per variant for
  confidence"
- `majiayu000/claude-skill-registry` — `skills/marketing/copywriting-absolutelyskilled-absolutelyskilled/SKILL.md`:
  "Run to statistical significance - Minimum 100 conversions per variant"

None of these sources cites a paper, a power calculation, an MDE, or an alpha level — "100
conversions per variant" is stated as a bare, context-free threshold with no connection to effect
size, baseline rate, or desired power. This is the textbook definition of folklore-in-code: a number
that sounds authoritative, repeats across unrelated sources, and has zero derivation attached. This
is directly falsifiable using the power-math libraries found in §4 above: a true minimum sample
size depends entirely on baseline conversion rate and target MDE — e.g. under `pwr.2p.test`, going
from a 5%→5.5% baseline (10% relative lift) at 80% power / 5% two-sided alpha requires roughly an
order of magnitude more than 100 conversions per arm, while a 5%→10% baseline (100% relative lift)
could plausibly finish near 100. "100 conversions" is only ever right by coincidence for a specific
MDE; treating it as a universal floor is precisely the kind of folklore the charter wants flagged
and falsified.

**"Run for minimum 2 weeks" folklore** — found stacked with the above in `borghei/Claude-Skills`
(same source and date as above); a direct `gh search code` for `"run the test for at least"` and
`"one full business cycle"` (both run 2026-08-01) returned zero hits, suggesting the "2 weeks" /
"full business cycle" framing is either phrased differently in the wild or simply less
code-embedded than the "100 conversions" number — could not independently corroborate a second
verbatim-repeated instance of a duration-based rule at the code level in this pass; recommend
channel D/B (web/X) verify duration-folklore prevalence with prose-search tools rather than
`gh search code`.

**Evan Miller's sample-size calculator (evanmiller.org/ab-testing) as a de facto standard, verified
at the code level, not just cited in prose**: PostHog's own (deprecated) frequentist calculator
code comment states "The results are same as: https://www.evanmiller.org/ab-testing/sample-size.html"
(file `legacyExperimentCalculations.tsx`, fetched 2026-08-01) and `splitrb/split`'s README (2,709
stars, MIT) directly links the same URL as "a sample size calculator for your convenience" rather
than reimplementing the math itself. This is NOT presented as folklore by either source — it's a
credited, named calculator — but its ubiquity (independently found via `gh search code` across
`sickn33/agentic-awesome-skills` in three separate file locations, `PavelGrigoryevDS/awesome-data-analysis`,
`cathytanimura/sql_book`, and `jeremylongshore/claude-code-plugins-plus-skills`, all fetched
2026-08-01) makes it worth naming explicitly: Evan Miller's calculator functions as an unofficial
industry-standard reference implementation of the two-proportion power formula, even though it has
no formal academic citation attached in any of the repos that link it.

**GrowthBook's own product defaults double as folklore-adjacent, but with a difference**: unlike
the "100 conversions" folklore, GrowthBook's `target_power: float = 0.8` / `target_mde: float = 0.01`
defaults (§4 above) are at least LIVE-COMPUTED from a real formula rather than a static rule of
thumb — but the 80%-power convention itself is still an unexamined industry default (Cohen's
original convention, never re-derived per-product) baked into a real, actively-used tool. Worth
distinguishing in the falsification strip: "computed-with-an-unexamined-default" (GrowthBook,
statsmodels/pwr defaults) is a milder problem than "bare unsourced number" (100 conversions, 2 weeks).

## 9. Candidate magnitudes table

| Claim | Exact source | As-of | TRACED / UNTRACED | Caveat |
|---|---|---|---|---|
| "Minimum 100 conversions per variant" before calling a winner | 9 independent Claude/LLM-skill marketplace repos (list in §8) | 2026-08-01 | **UNTRACED** — no paper, no power calc, no MDE stated anywhere in any of the 9 sources | Prime falsification-strip candidate; magnitude is meaningless without a stated MDE + baseline rate |
| "Run for minimum 2 weeks" | `borghei/Claude-Skills`, `business-growth/paywall-upgrade-cro/SKILL.md` | 2026-08-01 | **UNTRACED** | Only one corroborating instance found via `gh search code` in this pass — do not treat as widely repeated based on this evidence alone; channel B/D should re-verify prevalence |
| GrowthBook default target power = 80%, target MDE = 1% (relative) for mid-experiment "how many more users" calculator | `packages/stats/gbstats/power/midexperimentpower.py`, class `MidExperimentPowerConfig`, growthbook/growthbook | 2026-08-01 (file fetched; repo pushed same day) | **TRACED to source code** (this is GrowthBook's own shipped default, verifiable by anyone), but the underlying 80%/Cohen convention is itself **UNTRACED to a growth-specific derivation** — it's the generic Cohen 1988 power convention, not re-derived for GrowthBook's product | Distinguish "this IS GrowthBook's real default" (true, verified) from "80% power is the objectively correct choice" (unexamined convention) |
| GrowthBook sequential engine default `sequential_tuning_parameter = 5000` | `packages/stats/gbstats/frequentist/tests.py`, class `SequentialConfig`, growthbook/growthbook | 2026-08-01 | **UNTRACED in this pass** — no in-code comment justifies the value 5000; the surrounding equations are cited to arXiv:2103.06476v7 but the specific tuning-parameter default is not derived in the code comments read | Would need GrowthBook's own docs/blog to trace why 5000 specifically; flagged, not fabricated |
| GeoLift power-search default `alpha = 0.1` (10%, not 5%) | `R/pre_test_power.R`, `facebookincubator/GeoLift` | 2026-08-01 | **TRACED to source code** as GeoLift's real, shipped default; the CHOICE of 10% vs 5% is not justified in-code beyond being packaged with a recommendation of ≥25 pre-periods/≥20 geo-units in `DESCRIPTION` | A genuine, sourced counter-example to "alpha is always 5%" — useful contrast for the small-N-honesty wedge |
| GeoLift recommends "at least 25 pre-treatment periods and over 20 geo-units" | `DESCRIPTION` file, `facebookincubator/GeoLift` | 2026-08-01 | **TRACED to source (package metadata)**, but this is GeoLift's own recommendation for its own method (Augmented Generalized Synthetic Control), not a universal geo-experiment rule — do not generalize beyond GeoLift's specific method | Meta's own stated floor for their own tool; cite as GeoLift-specific, not universal |
| "Bayesian" chance-to-win in GrowthBook defaults to an IMPROPER (flat) prior unless the user opts in | `packages/stats/gbstats/bayesian/tests.py`, class `GaussianPrior`: `mean: float = 0, variance: float = 1, proper: bool = False` | 2026-08-01 | **TRACED to source code** | Out of the box, GrowthBook's "Bayesian" engine's default prior is effectively uninformative — the chance-to-win number a new user sees is close to a frequentist-equivalent computation unless they deliberately configure an informative prior; worth surfacing as a "Bayesian in name, near-frequentist by default" finding |
| CUPED variance reduction "~30-50%" (seen widely in secondary sources, e.g. controller-canon's own prior belief and a stray hit in `tonone-ai/tonone:agents/eval.md`: "CUPED: pre-experiment covariate adjustment reduces variance ~30-50% without bias") | Not found stated by ANY of the three GitHub CUPED implementations read in this pass (gbstats, tea-tasting, meterstick) — all three point to the primary paper or a company blog instead of asserting a number themselves | 2026-08-01 | **UNTRACED at the library-source level** — this is a secondhand figure that appears to originate from the original Deng/Xu/Kohavi/Walker paper or from Booking.com's/Microsoft's blog posts (both cited BY NAME in tea-tasting's and multiple other repos' READMEs), not from any code | Growth's controller-canon already flags this exact figure for re-verification; this GitHub pass could NOT independently confirm the number from source code and recommends channel D (web/papers) trace it to the original paper's actual reported figure rather than repeating the folklore version |

## 10. Academic provenance map

| Library (GitHub) | Implements / cites | Author(s), year, venue |
|---|---|---|
| gostevehoward/confseq | Confidence sequences, uniform boundaries | Howard, Ramdas, McAuliffe, Sekhon (2021), Annals of Statistics 49(2); Howard & Ramdas (2021), Bernoulli; Waudby-Smith & Ramdas (2021, 2020), arXiv/NeurIPS |
| growthbook/growthbook `gbstats` sequential engine | Always-valid confidence sequences / e-values | Waudby-Smith, Ramdas et al., arXiv:2103.06476v7 (explicit eq-number citations in code: eq 9, eq 134, eq 155, eq 161) |
| assuncaolfi/savvi | Safe Anytime-Valid Inference for linear regression + multinomial | General SAVI/e-process literature (Ramdas/Grünwald school); specific paper attributions not independently verified this pass |
| growthbook/growthbook, e10v/tea-tasting, google/meterstick (all 3, CUPED) | CUPED | Deng, Xu, Kohavi, Walker (2013), "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data," WSDM 2013 — all three cite exp-platform.com/cuped or the direct PDF |
| e10v/tea-tasting (CUPAC) | CUPAC | DoorDash Engineering blog, 2020-06-08, "Improving Experimental Power Through Control Using Predictions As Covariate" |
| e10v/tea-tasting (delta method) | Delta method for ratio metrics | Deng (Alex), kdd2018-dm.pdf (KDD 2018) — cited directly in README |
| google/CausalImpact, WillianFuks/tfcausalimpact, google/tfp-causalimpact | Bayesian structural time-series causal inference | Brodersen, Gallusser, Koehler, Remy, Scott (2015), "Inferring Causal Impact Using Bayesian Structural Time-Series Models," Annals of Applied Statistics, DOI:10.1214/14-AOAS788 |
| facebookincubator/GeoLift | Augmented Generalized Synthetic Control | Not independently traced to a single named paper in this pass beyond the package's own description (references `augsynth`/`gsynth` R packages as dependencies, which have their own separate academic lineage — Xu 2017 for `gsynth`, Ben-Michael/Feller/Rothstein for `augsynth` — not independently re-verified here, flagged) |
| google/matched_markets | Time-Based Regression + greedy matched-market search | Kerman (2017) for TBR method; Au (2018) for the search algorithm; Vaver & Koehler (2010) for the foundational geo-experiment framework — all three citations per the repo's own README |
| google/trimmed_match | Trimmed Match estimator | Chen & Au (2019); design improvements: Chen, Longfils & Remy (2021) — per repo's own README |
| py-why/EconML | Double machine learning | Chernozhukov et al. — per repo's own description |
| CamDavidsonPilon/lifelines | Kaplan-Meier, Cox proportional hazards, AFT models | Classical survival-analysis literature; not a single-paper implementation, a general toolkit |
| heliosdrm/pwr (R `pwr`) | Cohen's effect-size power framework | Cohen, J. (1988), "Statistical Power Analysis for the Behavioral Sciences" — implicit throughout (small/medium/large conventions, `cohen.ES()` function name itself) |

## 11. Growth-vs-operate note

Everything catalogued in this pass is squarely on the **learning/causal-inference side** of the
growth-vs-operate seam — no monitoring, alerting, dashboard, or feature-flag-rollout tooling was
directly read as part of this specific stats-library sweep (that territory belongs to other
grw-github workers covering GrowthBook/Statsig/Eppo/Unleash/Flagsmith as PLATFORMS, not to this
worker's stats-library slice). The one item worth flagging at the seam: **GrowthBook's bandit
implementation reusing its A/B-test Bayesian posterior machinery** (§7) is a concrete, code-level
instance of "same infra, different intent" — a bandit optimizing traffic allocation in production
IS a form of continuous automated decision-making that blurs toward operate-style automated
rollout, while the identical posterior math used in an A/B test is pure growth-side learning. Worth
surfacing to the controller as a literal shared-codepath example of the seam, not just a conceptual
one.

## 12. Open questions / dead ends

- **Retention/cohort tooling has no canonical open-source library** (§6) — this itself is the
  finding; do not spend further GitHub-search budget hunting for one. The N-day-vs-rolling
  retention definitional split is a documentation/vendor-blog distinction (Amplitude, Mixpanel),
  not something two competing GitHub libraries encode — recommend channel D verify and cite from
  primary vendor docs instead.
- **GeoLift's license conflict (MIT `LICENSE.md` vs `GPL (>= 2)` in `DESCRIPTION`) is unresolved
  in this pass** — flagged prominently in the inventory table; the likely mechanical cause is
  GeoLift's `Imports:` dependency on the GPL-licensed `augsynth`/`gsynth` R packages propagating a
  GPL obligation via R's own packaging conventions, but this worker did not independently verify
  `augsynth`'s or `gsynth`'s own license files to confirm that theory. If the controller wants to
  cite GeoLift as a lift-from-directly candidate, this needs a follow-up read of `augsynth` and
  `gsynth`'s LICENSE files before any "MIT, safe to use" claim ships.
- **"Why 5000?" for GrowthBook's `sequential_tuning_parameter` default is UNTRACED** — the code
  comments cite the paper's equations but not a rationale for the specific tuning-parameter value;
  would need GrowthBook's own docs/blog (out of this worker's GitHub-only scope) to close.
- **"2 weeks minimum test duration" folklore could not be corroborated beyond a single source** via
  `gh search code` in this pass — either the phrasing varies too much for exact-string search to
  catch it, or it's less code-embedded than "100 conversions." Recommend channel B (X) or D (web)
  attempt a broader prose search rather than treating this worker's single hit as representative.
  Note also the GitHub code-search API rate-limited this worker mid-session (HTTP 403,
  "API rate limit exceeded," 2026-08-01 ~19:03 UTC) — a few planned follow-up `gh search code`
  queries (e.g., further meterstick source cross-checks) were abandoned in favor of direct
  raw-file fetches once the limit was hit; no material finding was lost, but note for future workers
  that `gh search code` has a tighter, separately-enforced rate limit than `gh api`/`curl`.
- **fumin/evalue and Nth-iteration-labs/contextual license text was not independently re-fetched**
  (API-reported only) — low priority given both are minor/niche entries in the inventory, but flag
  before any "safe to lift" claim.
- **PostHog's CURRENT (non-legacy) experimentation stats engine was not deep-read** — only the
  deprecated legacy calculator was examined for its Evan Miller citation. If PostHog's current stats
  engine matters to the controller's platform-comparison narrative, that is likely being covered by
  a sibling grw-github worker focused on platforms; this worker's scope was libraries, not platforms.
