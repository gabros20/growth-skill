# GitHub research: GrowthBook, Statsig, Eppo — experimentation platform docs goldmine

Worker: C1 (grw-github sub-orchestrator's worker) · Date: 2026-08-01 · Channel: C (GitHub)
Scope: GrowthBook (priority), Statsig, Eppo — licenses, teaching content (stats methodology),
acquisition status, flags-vs-experiments framing.
Method: shallow-cloned growthbook/growthbook (`git clone --depth 1`) to scratchpad and read
docs/docs/* directly from the filesystem; `gh api` for repo metadata (stars/license/archived/
pushed_at — cross-checked against LICENSE file text per charter rule); WebFetch/curl for
Statsig/Eppo docs sites and acquisition announcements (WebSearch budget: reserved, used
sparingly per channel-C cap of ≤15).

---

## 1. GrowthBook (growthbook/growthbook)

### 1.1 Identity

- Repo: https://github.com/growthbook/growthbook
- `gh api /repos/growthbook/growthbook` (as of 2026-08-01): stars **8,082**, archived: **false**,
  pushed_at: **2026-08-01T18:45:52Z** (actively maintained, pushed same day as this research),
  API `license.spdx_id` = **"NOASSERTION"** — confirms the charter's warning that the GitHub
  API license field is unreliable for repos with mixed/per-directory licensing; do not cite it.
- Description (API): "Open Source Feature Flags, Experimentation, and Product Analytics" — note
  GrowthBook's own positioning bundles flags + experimentation + product analytics as one
  product surface.

### 1.2 LICENSE VERDICT — every license file found, read directly (not via API)

`find . -iname "LICENSE*" -not -path "./.git/*"` inside the cloned repo returned **4 LICENSE
files** (plus non-license files matching "license" in filename, e.g. test files, excluded):

| # | Path | Exact license name (from file text) | Coverage |
|---|------|---------------------------------------|----------|
| 1 | `/LICENSE` (repo root) | Root file is a **dispatcher**: states copyright (c) 2025 GrowthBook Inc, then declares that content under `packages/back-end/src/enterprise`, `packages/front-end/enterprise`, `packages/shared/src/enterprise` is licensed under the "GrowthBook Enterprise License" (defined in the LICENSE file in those dirs); third-party components keep their own original licenses; **everything else in the repo is "MIT Expat"** (the MIT text is reproduced in full below the dispatcher clause) | Governs the whole repo's license architecture |
| 2 | `packages/stats/LICENSE` | **MIT License**, Copyright (c) 2024, GrowthBook, Inc. — plain, unqualified MIT text | The stats engine package (`packages/stats` — Python/stats-ts sibling) — this is the package most likely to contain the citable methodology/code |
| 3 | `packages/front-end/enterprise/LICENSE` | **"The GrowthBook Enterprise License"** (proprietary source-available, NOT open source) — verbatim: *"This software... may only be used in production, if you... have agreed to, and are in compliance with, the GrowthBook Subscription Terms of Service... or... have a valid GrowthBook Enterprise or Pro license for the correct number of user seats... you may copy and modify the Software for development and testing purposes, without requiring a subscription... it is forbidden to copy, merge, publish, distribute, sublicense, and/or sell the Software."* | Front-end enterprise features directory |
| 4 | `packages/shared/src/enterprise/LICENSE` | Identical "GrowthBook Enterprise License" text to #3 | Shared enterprise code |
| 5 | `packages/back-end/src/enterprise/LICENSE` | Identical "GrowthBook Enterprise License" text to #3 | Back-end enterprise code |

**Verdict**: GrowthBook is **not pure MIT**. It is a classic **open-core** repo: MIT for the
core product (including the entire `packages/stats` statistics engine — good news for
citability) and a **proprietary "source-available, not open-source" Enterprise License** for
three specific `enterprise/` subdirectories (front-end, shared, back-end). The Enterprise
License is a BSL-style "fair source" license: you can read/modify it for dev/test, but
production use requires a paid Pro/Enterprise subscription, and redistribution is forbidden.
This is exactly the "per-directory commercial/enterprise license" pattern the brief warned to
watch for. As-of: 2026-08-01, read directly from cloned repo files, not GitHub API.

### 1.3 Teaches-vs-sells summary

GrowthBook's **docs are freely public and teach real methodology** (the stats engine's math,
sequential testing, CUPED, SRM, metric design) independent of the product — this is the
"stats textbook" the brief flagged. What they **sell** is the managed/enterprise layer: SSO,
audit logs, custom roles, multi-org, and — per docs — some advanced experimentation UI/analysis
conveniences. The core Bayesian/frequentist stats engine and running experiments via SDKs is
open source (MIT) and self-hostable for free. Confirmed from `docs/docs/self-host/` existing
as a first-class doc section (self-hosting is a supported, not crippled, path).

---

## 2. THE TEACHING GOLDMINE — GrowthBook docs, extracted with file pointers

Docs root in the clone: `docs/docs/` (Docusaurus site source). Relevant top-level dirs found:
`account, bandits, contextual-bandits, event-trackers, experimentation-analysis, features,
guide, integrations, kb, kb/experiments, kb/metrics, lib, metrics, product-analytics,
running-experiments, self-host, statistics, tools, using, visual-editor, warehouses, webhooks`.

The **`statistics/`** and **`experimentation-analysis/`** directories are the primary teaching
payload, plus `kb/experiments/`, `metrics/`, `running-experiments/`, `bandits/`,
`features/`, and `using/`. All content below read directly from the cloned repo files listed
above (no WebFetch used for GrowthBook — filesystem read only). As-of: 2026-08-01.

### 2.1 Bayesian vs frequentist: how GrowthBook explains the difference and what they default to

File: `docs/docs/statistics/overview.mdx`

> "GrowthBook provides both Bayesian and frequentist approaches to experiment analysis. We
> default to Bayesian statistics because they provide a more intuitive framework for decision
> making for most customers... You can choose between the two statistics engines at the
> Organization or Project level."

Three stated advantages of Bayesian (verbatim, `overview.mdx` lines ~16-30):
1. **More intuitive results** — "you get probabilities and distributions of likely outcomes,"
   e.g. "there's a 95% chance this new button is better and a 5% chance it's worse," which "there
   is no direct analog" for in frequentist framing.
2. **Encodes prior knowledge** — priors "ensure that you do not over-interpret small sample
   sizes."
3. **Robustness to early stopping** — "Bayesian results are still valid even if you stop an
   experiment early... at least the main probabilities and statistical results that you see are
   not invalidated by stopping early." BUT GrowthBook immediately self-qualifies: *"this is
   something of a difference without a distinction, as the decision to stop an experiment early
   can still result in inflated false positive rates."* This is a rare, honest vendor
   self-correction — worth citing directly as it undercuts the naive "Bayesian solves peeking"
   folklore.

**Default prior** (`statistics/details.mdx` + `overview.mdx`): improper/uninformative by
default (no effect on results). If a user enables "Proper Prior," GrowthBook's own recommended
default is $N(0, 0.3^2)$ on the relative-lift scale — "implies that about 68% of effects are
between -30% and 30%, 95% of effects are between -60% and 60%." GrowthBook states this choice
"corresponds roughly to the distribution of effects that we have actually observed on
GrowthBook" (i.e., derived from their own aggregate customer data — an interesting, if
unaudited, empirical claim about typical effect-size distributions across real experiments).

**Interpreting "Chance to Win" vs p-value**: `statistics/details.mdx` gives the exact formula —
Chance to Win = $100\% \times (1-\Phi_{posterior}(0))$, the % of the posterior mass favoring
the treatment. GrowthBook's own UI guidance: "You typically want to wait until this reaches 95%
(or 5% if it's worse)." Relative Uplift is shown as a full violin-plot posterior rather than a
single point + CI, because (their claim, UNTRACED/qualitative) "we have found this tends to
lead to more accurate interpretations" — people read "17% better, but there's a lot of
uncertainty" instead of just "17% better."

**Frequentist engine**: "computes two-sample t-tests for relative percent change" (Welch-
Satterthwaite d.o.f. approximation for the t-distribution), with CUPED for variance reduction
and sequential testing for peeking. GrowthBook's own framing of why frequentist still matters
despite defaulting Bayesian: *"[frequentist's] widespread adoption has spurred important
developments in variance reduction, heterogeneous treatment effect detection, and indeed
corrections to peeking issues (e.g. sequential testing) that make frequentist statistics less
problematic and, at times, more valuable."* (`overview.mdx`)

Full closed-form math for both engines (posterior mean/variance combination formula, p-value
formula, CI formula, and per-metric-type variance estimators for mean/proportion/ratio/quantile
metrics) is in `docs/docs/statistics/details.mdx` — this is genuinely a stats-textbook-grade
page with the delta-method variance derivations spelled out for every GrowthBook metric type.
References cited by GrowthBook at the bottom of that page (all standard, all verifiable):
Delta Method, Bayesian Inference, Posterior Predictive Distribution, Truncated Normal
Distribution, Credible Interval, P-value, Welch–Satterthwaite Equation — all Wikipedia links
(i.e., GrowthBook points to textbook-level tertiary sources, not primary papers, for the core
inferential math).

### 2.2 Sequential testing

File: `docs/docs/statistics/sequential.mdx` (Commercial/Enterprise-gated feature — see
`<CommercialFeature feature="sequential-testing" />` tag in the source; only implemented for
the **frequentist** engine, explicitly noted: "Sequential Testing is only implemented for the
Frequentist statistics engine.")

**Method**: GrowthBook implements **Asymptotic Confidence Sequences** from
[Waudby-Smith et al. (2023), arXiv:2103.06476v7](https://arxiv.org/pdf/2103.06476v7.pdf).
Their own framing: "these are very similar to the Generalized Anytime Valid Inference
confidence sequences described by Spotify in [this post](https://engineering.atspotify.com/2023/03/choosing-sequential-testing-framework-comparisons-and-discussions/)
and introduced by [Howard et al. (2022), arXiv:1810.08240](https://arxiv.org/pdf/1810.08240.pdf),
although the Waudby-Smith et al. approach more transparently applies to our setting." So
GrowthBook = mSPRT-family / always-valid-inference lineage, explicitly citing the Spotify
engineering blog as their comparison source (a rung-1 first-party engineering post, already on
the D-channel's target list per the charter — cite, don't re-derive).

**Cost in power** (exact, quantified, GrowthBook's own claim): "Enabling sequential testing
does not affect the mean $\hat\Delta$, but it inflates the standard error" and produces
"uniformly wider confidence intervals" than fixed-horizon CIs — confirmed both in
`sequential.mdx` and independently in `statistics/power.mdx` ("Enabling sequential testing
reduces power"). The width-inflation is tunable via a parameter $N^*$ ("tuning parameter"):
default is **5,000** total observations across both arms (`sequential.mdx`), and the CI-width
penalty is minimized when actual sample size ≈ $N^*$ (shown in their own figure,
`sequential-tuning.png`). For a 3-variation experiment, GrowthBook's own worked example: if you
expect to decide at 3,000 users/arm, set $N^*=6{,}000$ (i.e., use the per-pairwise-comparison
sample size, not the grand total).

**Formula** (verbatim from `sequential.mdx`):
$$\left(\hat{\mu} \pm \hat{\sigma}\sqrt{N}\sqrt{\frac{2(N\rho^2+1)}{N^2\rho^2}\log\left(\frac{\sqrt{N\rho^2+1}}{\alpha}\right)}\right),\quad \rho=\sqrt{\frac{-2\log(\alpha)+\log(-2\log(\alpha)+1)}{N^*}}$$

**When to use it (their guidance)**: framed as "the frequentist solution to the peeking
problem" — "allows you to look at your experiment results as many times as you like while
still keeping the number of false positives below the expected rate," and claims it "can also
increase the velocity of experimentation" because decisions can be made "as soon as
significance is reached" rather than waiting for a pre-determined fixed sample size.

**Also used operationally, not just for learning-experiments**: Safe Rollouts (§2.9 below) use
"frequentist sequential testing" for guardrail-regression detection — same math, different
intent (see growth-vs-operate section).

### 2.3 SRM (Sample Ratio Mismatch)

**Threshold, TRACED to two independent file locations**:
- `docs/docs/experimentation-analysis/experiment-results.mdx:132` — *"We only show this warning
  if the p-value is less than `0.001` (customizable in your Organization Settings), which means
  it's extremely unlikely to occur by chance."*
- `docs/docs/running-experiments/url-redirects.mdx:131` — same threshold restated: "GrowthBook
  only shows SRM warnings if the p-value is less than 0.001... This p-value threshold is
  customizable in Settings → General → Experiment Settings."

**Test**: "a standard chi-squared test for Sample Ratio Mismatch, which compares the
distribution of observed units to the expected units" (`experiment-results.mdx:138`).

**What to do when it fires**: "you shouldn't trust the results since they are likely
misleading. Instead, find and fix the source of the bug and restart the experiment." A full
dedicated troubleshooting doc exists (`kb/experiments/troubleshooting-experiments.mdx`) listing
5 root causes with fixes: (1) decoupled assignment/tracking (their #1, "most common and severe
cause" — recommend firing exposure events server-side, immediately on assignment, not
client-side, because bots + ad blockers can cause 30-50%+ differential drop-off), (2)
conditional trackingCallback logic, (3) biased Activation Metrics, (4) hash-attribute/identifier
mismatch, (5) mid-experiment targeting changes without re-randomization.

**GrowthBook's own SRM-adjacent innovation — the "Pre-Exposure Bias Check"**
(`experiment-results.mdx:140-157`): distinct from SRM, this flags when baseline-vs-treatment
groups differ *before* the experiment even started on a goal/guardrail metric. Uses a two-sample
t-test on pre-exposure means, **also thresholded at p<0.001**, with a Bonferroni correction
across all goal+guardrail metric-variation pairs (explicit worked example: 3 arms × (2 goal +
2 guardrail metrics) × 2 test arms = 8 tests corrected). This convergence — both SRM and the
pre-exposure-bias check independently landing on **p<0.001** as GrowthBook's "something is
badly wrong" threshold — is a real internal-consistency data point, not an accident.

**Multiple Exposures**: separate check, default tolerance "1 percent of units... without
raising a warning" (`troubleshooting-experiments.mdx:131`), customizable.

### 2.4 CUPED / variance reduction

Files: `docs/docs/statistics/cuped.mdx` (concept + config), `cuped-technical.mdx` (full delta-
method derivation for mean/binomial/ratio metrics, `unlisted: true` in frontmatter — i.e. a
"hidden" but still public page), `post-stratification.mdx` (the combined CUPEDps math).
Commercial-feature-gated (`<CommercialFeature feature="regression-adjustment" />` and
`post-stratification`).

**What GrowthBook calls it**: "CUPEDps" = CUPED + post-stratification, their proprietary
combination. Standard CUPED estimator: $\bar{Y}_{adjusted} = \bar{Y} - \theta\bar{X}$ where
$\theta = \text{Cov}(Y,X)/\text{Var}(X)$ (the OLS-optimal coefficient, same as Deng et al. 2013
Appendix B — GrowthBook explicitly says "This is the same $\theta$ as is presented in Appendix
B of (Deng et al. 2013)").

**Covariates used**: (1) the metric's own pre-experiment value — "for each metric you analyze,
we use the metric itself from the pre-exposure period as the correlated data" — default
**lookback window of 14 days** pre-exposure (customizable at org/metric/experiment level); (2)
via post-stratification, user *attributes/dimensions* (e.g. country) used to reweight
strata-specific lifts, which additionally corrects for traffic-split imbalance within strata.

**Variance reduction magnitudes cited by GrowthBook (with THEIR sources, not GrowthBook's own
measurement)** — `cuped.mdx`:
> "In the right conditions, CUPEDps can equate to getting 20% or more traffic during your
> experiment!"
> - "In 2016, Netflix reported that CUPED reduced variance by roughly ~40% for some key
>   engagement metrics ([Xie & Aurisset, KDD 2016](https://www.kdd.org/kdd2016/papers/files/adp0945-xieA.pdf))."
> - "In 2022, Microsoft reported that, for one product team, CUPED was akin to adding 20% more
>   traffic to analysis of a majority of metrics ([Microsoft ExP blog](https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/deep-dive-into-variance-reduction/))."

These are TRACED to primary/first-party sources (Netflix KDD paper, Microsoft ExP blog) but are
*not* GrowthBook's own measured results — GrowthBook is citing others' numbers to justify their
own feature. The "20% or more traffic" headline claim is GrowthBook's own marketing framing of
those two borrowed data points, not independently verified for GrowthBook's own CUPEDps
implementation. Flag as: TRACED (to Netflix/MS) but the GrowthBook-specific magnitude is
UNQUANTIFIED (no GrowthBook-measured %).

**CUPED unavailable for**: ratio-metric bandit goal metrics, quantile metrics, legacy
(non-fact) ratio metrics, legacy metrics with custom aggregations, Mixpanel data sources
(`cuped.mdx`, "Availability" section).

**Post-stratification math** (`post-stratification.mdx`, unlisted page): a full 4-step
regression-based combination algorithm (per-cell regression → cell moments → combining cell
estimates via a weighted-multinomial covariance correction → delta method for the final
lift/ratio). Technical citation: Xie & Aurisset (2016) Equation 15, again.

### 2.5 Power / sample-size / MDE guidance

File: `docs/docs/statistics/power.mdx` (concept) + `power-technical.mdx` (closed-form math,
also `unlisted: true`).

**Definitions**: Power = "the probability of observing a statistically significant result,
given your feature has some effect on your metric." MDE = "the smallest effect size for which
your power will be at least 80%." **GrowthBook's power target is 80%**, explicitly justified by
analogy to clinical trials: "In clinical trials, the standard is 80%... if you were to run your
clinical trial 100 times with different patients and different randomizations each time, then
you would observe statistically significant results in at least roughly 80 of those trials."
(This 80%-standard-from-clinical-trials framing is itself folklore/convention, stated without a
specific clinical-trials citation — worth flagging as an unsourced convention-transfer claim,
common across the whole industry, not GrowthBook-specific.)

**Assumptions baked into their frequentist power formula** (`power.mdx`, explicit list): (1)
equal sample sizes control/treatment — if unequal, use the smaller (conservative); (2) equal
variance across arms; (3) i.i.d. observations; (4) finite variance; (5) *assumes a two-sample
t-test — "If in practice you use CUPED, your power will be higher. Use CUPED!"* (their own
imperative aside).

**Worked example numbers from their own docs** (`power.mdx`, using GrowthBook's own product
telemetry as the example dataset): ~2,195 users/week, 14.41% baseline conversion on a binomial
metric, 20% expected effect size input → 3 weeks to reach 80% power; Week-1 power = 41%, Week-1
MDE = 34.5% (MDE shrinks as more weeks accrue).

**Bayesian power**: defined as "the probability that the $(1-\alpha)$ credible interval does
not contain 0" — a full formula is given (`power.mdx` eq. under "Bayesian implementation");
MDE under Bayesian power is "not well defined in Bayesian literature" per GrowthBook's own
admission, so they compute it via grid search over $\Delta$.

**Effect-size selection guidance** (qualitative, no magnitude): "run power analysis for
multiple effect sizes," anchored by 3 questions — best guess, optimistic case, pessimistic
case.

### 2.6 Metric definitions, capping, windows

File: `docs/docs/metrics/metrics.mdx`. Six metric types: **Proportion, Retention, Daily
Participation, Mean, Ratio, Quantile**. Ratio metrics use "the Delta Method to accurately
determine the variance" (their words). Retention metrics have a "retention window" +
"conversion window" pair. Daily Participation is their DAU-in-an-experiment-context metric:
`(matching days) / (eligible days)`, averaged across users.

**Capping/winsorization** — two mechanisms, both explicit: **Absolute capping** (hard $ ceiling
per user) and **Percentile capping** (e.g. cap at the experiment's own 95th percentile of
per-user aggregate, recomputed per-analysis). Their own framing of the tradeoff: "you are
slightly biasing your results by truncating large values, but you are reducing variance to
prevent the outsized effect of outliers."

**Metric windows** — three types, explicitly contrasted: **None** (all data from exposure to
experiment end), **Conversion Window** (fixed-length window after first exposure — "reduce the
noise from user behavior not related to an experiment," risk: "if you set the window too short,
you may not capture users that return a few days later"), **Lookback Window** (last N days of
the experiment only — explicitly framed as the novelty-effect mitigation tool: "you may just
want to look at the last 14 days of an experiment" to let novelty wear off, and as the tool
"[l]arger companies who measure long run logged in behavior" rely on).

**Metric Delay** (including *negative* delays) — a subtle, less commonly documented technique:
setting a negative delay (e.g. -0.5 hours) includes some pre-exposure data in the "post"
window, reducing the variance penalty from mixing "0 seconds since exposure" users with "55
seconds since exposure" users in a continuous-duration metric. GrowthBook's own framing: this
answers a *different* question than the direct "how much longer do people stay after viewing
the experiment" — a nuance worth carrying into a growth-skill reference on metric-window design.

### 2.7 Guardrails, multiple-testing correction, dimensional slicing

File: `docs/docs/statistics/multiple-corrections.mdx` (frequentist-only feature).

**Corrections offered**: **Holm-Bonferroni** (controls Family-Wise Error Rate — "does just as
well as the Bonferroni method to control the FWER, but it is less conservative") and
**Benjamini-Hochberg** (controls False Discovery Rate — chosen over the more conservative
Benjamini-Yekutieli "to provide a reasonably powered approach... and to select an approach that
has widespread adoption"). **Family definition**: corrects across all **Goal** metrics ×
variations (× dimension-levels if slicing) in one result view — explicitly **excludes**
Secondary and Guardrail metrics from the correction family (`multiple-corrections.mdx:80-84`,
a load-bearing scope decision worth carrying forward: only your stated "goal" metrics compete
for false-discovery budget, guardrails are checked separately/unconditionally).

**Dimensional slicing caveat, GrowthBook's own words** (`statistics/overview.mdx`): "too much
slicing and dicing of data can lead to what is known as the Multiple Testing Problem. If you
look at the data in enough ways, one of them will look significant just by random chance." They
mitigate with automatic Top-20-country-style grouping plus per-dimension minimum-data
guardrails, "a good trade-off between false positives and false negatives" (their own,
unquantified, characterization).

**Guardrail metrics generally**: "help ensure an experiment isn't inadvertently hurting core
metrics like error rate or page load time," customizable per-metric strictness (e.g. "stricter
quality checks for revenue than... less important metrics").

### 2.8 Multi-armed bandits and contextual bandits

File: `docs/docs/bandits/overview.mdx` (Commercial: `<CommercialFeature feature="multi-armed-bandits" />`; Bayesian-only — "Currently Bandits are available only under the Bayesian engine").

**Algorithm**: Thompson sampling — "allocates traffic proportionally to the probability that an
arm is best," balancing exploration/exploitation; **minimum 1% traffic floor per variation
always maintained** ("in case your user behavior changes over time"). Requires a single
**Decision Metric**.

**When to use vs standard experiment** — explicit comparison table in the doc
(`bandits/overview.mdx`): experiments win on "obtaining accurate effects and learning about
customer behavior," multiple goal metrics, 2-4 variations; bandits win on "reducing cost of
experimentation," 5+ variations. Bandits **can perform worse** at finding the best variation
with only 2 arms (their own admission: "a standard Experiment can evenly split traffic between
the two arms, which is best for reducing variance"). Cites bias literature:
[arXiv:1905.11397](https://arxiv.org/abs/1905.11397) for bandit estimation bias.

**Frequentist-to-Bayesian threshold translation rule of thumb (GrowthBook's own FAQ answer,
unTRACED to any paper)**: "adjust your settings so that your Bayesian chance to win (default is
95%) is equal to 1 minus half of your p-value threshold" — i.e. p<0.05 two-sided ≈ CTW>97.5%.
Flag as an internal GrowthBook heuristic, not an established statistical equivalence.

### 2.9 Safe Rollouts, ramp schedules — the growth-vs-operate seam, in GrowthBook's OWN words

File: `docs/docs/features/safe-rollouts.mdx` (Commercial feature). This is the single clearest
piece of evidence for the charter's growth-vs-operate seam question, because GrowthBook
explicitly names the distinction:

> "Safe Rollouts use the same analysis engine as GrowthBook experiments but are designed for
> **operational decision-making, not learning**. The primary goal is to ensure a safe release,
> not to measure long-term impact."

> "Safe Rollouts bias towards **action**. If you're more uncertain about a feature and want to
> **learn about its impact**, run a regular Experiment instead."

Mechanically: a Safe Rollout = a Ramp Schedule (1% → 5% → 10% → 25% → 50% → 100%, each step
50/50 split between rollout/control) + guardrail monitoring, using **frequentist sequential
testing** for guardrail-regression detection ("allowing you to roll back as soon as statistical
significance is reached without fear of false positives"). The pass/fail threshold is
structurally different from a normal experiment's decision framework: "The threshold for when
a metric is considered failing... is always set to zero — as soon as there's statistical
certainty that a metric is being harmed **at all** (even by very small amounts), the safe
rollout is marked as failing." That is a strict "do no harm" / risk-containment decision rule,
contrasted against normal experiments' target-MDE-based decision framework which tolerates
ambiguity zones. If inconclusive at the end of the monitoring duration: **"ship — there's no
clear evidence that the feature is harmful."** This inverts the experimentation default (where
"inconclusive" usually means "don't act") — a distinctive, quotable design decision for the
growth-vs-operate seam.

**Feature Flags overview page** (`features/index.mdx`) states the general dual-purpose framing
up front: "Feature flags decouple deploys from releases. Release code more frequently and with
less risk by launching to a subset of users, ramping up gradually, **or turning any change into
an experiment**." — i.e., GrowthBook's own top-level mental model is that flags are the shared
infrastructure and "experiment" vs "rollout" are two different *uses* layered on the same
mechanism, exactly matching the charter's "same flag infra, opposite intent" framing.

### 2.10 Holdouts

Files: `docs/docs/kb/experiments/holdouts.mdx` (concept) + `docs/docs/running-experiments/running-holdouts.mdx` (implementation, Commercial-gated).

**Why holdouts, in GrowthBook's words**: "Holdouts expose users to a combined set of features
over a long period of time, naturally measuring their interactions (positive and negative) and
serving as a back-test that deals with the **selection bias issue in summing up shipped
experiments**. For this reason, they are the gold standard for measuring cumulative, long-run
impact." They explicitly critique the common alternative practice — summing individual
experiment effects and shrinking the total — as understating/overstating true impact, citing
[Airbnb's "Selection bias in online experimentation"](https://medium.com/airbnb-engineering/selection-bias-in-online-experimentation-c3d67795cceb)
(a first-party engineering post, matches the D-channel's Airbnb target).

**Implementation numbers**: default holdout size **5%** of traffic; the same 5% is mirrored as
the measurement sample from the general population (not the full 95%) — their stated reasoning:
"the statistical power of a test is mostly limited by the size of the smaller group... adding a
ton of additional tracking events and ballooning the holdout sample... will cause more events to
fire and queries to run longer, often without a meaningful reduction in uncertainty." Analysis
period recommended: "2-4 weeks to capture delayed effects and reduce statistical noise" after
freezing new additions to the holdout.

### 2.11 The experimentation-folklore / pitfalls taxonomy (a near-complete falsification-strip target list, already assembled by GrowthBook)

File: `docs/docs/using/experimentation-problems.mdx` — "Where Experimentation goes wrong." This
page is functionally a pre-built falsification-strip candidate list; GrowthBook names and
explains each of the following (verbatim definitions available at the file path above):
**Multiple Testing Problem** (worked example: 20 metrics at α=0.05 independent → ~64% chance of
≥1 false positive by chance, "This math assumes that the metrics are independent... in most
cases for a digital application there will be some interaction between metrics" — a rare
explicit vendor caveat about their own worked example's assumption), **Texas Sharpshooter
Fallacy**, **P-Hacking**, **Peeking**, **Client-side flickering** (with the specific,
counter-intuitive claim: "flickering may have a positive effect on the results, sometimes the
flashing may draw a users attention to that variation, and cause an inflation in the effect" —
UNTRACED, presented as folklore/observation not a cited study), **Redirect-test SEO/latency
risks**, **Semmelweis Effect**, **Confirmation Bias**, **HiPPOs** ("highest paid person's
opinion"), **Trustworthiness** (A/A tests as the trust-building mechanism), **Twyman's Law**
(quoted: *"Any data or figure that looks interesting or different is usually wrong"* —
**CAUTION**: GrowthBook's own attribution text says "named after the British statistician
Maurice G. Kendall Twyman" — this conflates two different people (Maurice Kendall and A.L.
Twyman are not the same statistician); this looks like an attribution error in GrowthBook's own
docs and should NOT be repeated without independent verification of Twyman's actual identity),
**Goodhart's Law** (with a growth-specific example: "items added to cart being used as a proxy
for purchases... pressing hard on the proxy may have no effect on the goal metric, or might
actually cause the correlation to break"), **Simpson's Paradox** (using the classic 1973 UC
Berkeley admissions case, and citing a LinkedIn engineering post on inclusive A/B testing:
[engineering.linkedin.com/blog/2020/building-inclusive-products-through-a-b-testing](https://engineering.linkedin.com/blog/2020/building-inclusive-products-through-a-b-testing)),
and an **Ethical considerations** section explicitly naming dark patterns ("relying solely on
short-term metrics can encourage dark patterns in A/B testing, where you inadvertently exploit
user trust to boost numbers temporarily at the expense of long-term retention," linking their
own blog: [blog.growthbook.io/dark-patterns-a-b-testing](https://blog.growthbook.io/dark-patterns-a-b-testing/)).

### 2.12 A/A testing and carryover bias

Files: `kb/experiments/aa-tests.mdx`, `kb/experiments/carryover-bias.mdx`.

**A/A false-positive-rate arithmetic, exact and TRACED to GrowthBook's own doc** (not a
citation to an external source, but internally consistent, correct math): "If you run an A/A
test with one Metric and use GrowthBook's default 95% and 5% thresholds, you have a **10%**
chance of seeing a 'statistically significant' result even when there is no real difference...
Furthermore... with 2 unrelated Metrics in your A/A test, your chance of getting at least one
false positive is **19%**, and with 5 unrelated Metrics, it's **41%**!" (This is the standard
$1-(1-\alpha_{two-tailed})^n$ compounding — correct arithmetic, worth carrying forward as a
canonical "why you need multiple-testing correction" illustration, distinct from the ~64%/20-
metric example in §2.11.)

**Carryover bias**: what happens when you restart an experiment phase *without* re-
randomizing — returning users keep their old-phase assignment, so if a bug caused higher churn
in variation B during phase 1, fewer phase-1-B users survive to return in phase 2, silently
skewing phase-2 sample composition. GrowthBook's own warning: this "can unpredictably affect
your results" and "can be hard to detect" — SRM sometimes catches it, sometimes doesn't (if the
imbalance is too small, or if the bias comes from behavioral differences rather than raw
return-rate differences). Fix: always re-randomize on restart, or use a metric-level lookback/
delay window instead of an experiment-level "Phase" to slice recent data.

### 2.13 A/B testing fundamentals glossary and the "1/3 win rate" folklore figure

File: `docs/docs/using/fundamentals.mdx`.

> "Industry wide average success rates are only about 33%. ⅓ of the time our experiments are
> successful in improving the metrics we intended to improve, ⅓ of the time we have no effect,
> and ⅓ of the time we hurt those metrics."

**This is stated as a flat, unsourced claim in GrowthBook's own docs — no citation given.** It
aligns directionally with the Kohavi/Microsoft ~1/3-win-rate figure the controller-canon
already expects to re-verify from the Kohavi book/papers (channel D's job), but GrowthBook does
not cite Kohavi, Microsoft, or any study here — mark as **UNTRACED-BY-GROWTHBOOK**, a repeated
industry folklore figure that happens to match the canon number but is not independently
sourced in this location. Do not treat GrowthBook's repetition as a second independent
confirmation of the Kohavi number — it is very likely the *same* folklore chain, not an
independent replication.

Also in this file: standard Type I/Type II error matrix (control/shut-down/ship × inconclusive/
lost/won, 3×3 table with color coding) and the standard novelty/primacy effects section, mostly
textbook-standard content, not distinctively GrowthBook.

### 2.14 Experimentation best practices — sample-size and duration folklore

File: `docs/docs/using/experimentation-best-practices.mdx`.

**"100 conversions per variation" rule of thumb** — GrowthBook's own words, presented as a rule
of thumb, not derived: *"Typical rule of thumb for the lowest number of samples required is
that you want at least 100 conversion events per variation."* Worked example given: 10%
baseline conversion, 2 arms → "expose the experiment to at least 2,000 people (1000 per
variation)." **This is exactly the kind of folklore magnitude the charter's wedge-hypothesis #2
(CRO folklore falsification) flags as a target** — it's presented with zero statistical
derivation (no MDE, no baseline-rate sensitivity, no power target stated) despite GrowthBook
elsewhere (§2.5) having a full closed-form power/MDE framework that would give a *different*
answer depending on baseline rate and desired MDE. Mark as **UNTRACED / internally
inconsistent with GrowthBook's own power-analysis math** — a genuine, citable "vendor's own
docs contradict their own more rigorous docs" finding.

**Test duration folklore**: "Typical test durations are 1 to 2 weeks, and usually care needs to
be taken over holidays" — again presented as convention/rule-of-thumb, not derived, alongside
correct qualitative reasoning about weekday/weekend traffic mix effects.

**Interaction effects — GrowthBook's contrarian-to-caution position**: "meaningful interactions
are actually quite rare, and keeping a higher rate of experimentation is usually more
beneficial" — an explicit stance AGAINST the common practice of running tests serially to avoid
interaction risk. UNTRACED (no cited study of interaction-effect prevalence), presented as
GrowthBook's house opinion.

### 2.15 Notable absence: no quasi-experimental methods taught

Grepped the full `docs/docs/` tree for "quasi-experiment," "diff-in-diff"/"difference-in-
differences," "switchback," "interleaving," "synthetic control," "regression discontinuity" —
**zero matches**. GrowthBook's entire teaching corpus is scoped to randomized online controlled
experiments (plus bandits and holdouts, which are still randomization-based). This is a real
finding, not a null result to discard: GrowthBook does not teach the quasi-experimental toolkit
(diff-in-diff, synthetic control, geo-experiments, switchbacks) that channel D is independently
covering via Google's matched-markets/Trimmed Match papers and the marketplace-interference
literature — confirms that territory is NOT already covered by this vendor's docs, so channel
D's coverage is non-duplicative.

### 2.16 GrowthBook vs Statsig — GrowthBook's own competitive framing (migration guide)

File: `docs/docs/guide/migrate-from-statsig.mdx`. GrowthBook ships a dedicated Statsig-to-
GrowthBook migration tool (import wizard + an AI-powered Claude Code subagent for SDK-code
migration, distributed as its own repo:
[github.com/growthbook/claude-statsig-to-growthbook-sdk-migrator](https://github.com/growthbook/claude-statsig-to-growthbook-sdk-migrator)).
Terminology mapping table given: Statsig "Segments" = GrowthBook "Saved Groups"; Statsig
"Feature Gates" and "Dynamic Configs" both map to GrowthBook "Features." This confirms Statsig
is GrowthBook's most salient competitor in their own eyes (dedicated migration tooling, not
built for Eppo, Optimizely, VWO, etc. — though a LaunchDarkly migration path also exists
per the docs tree, `guide/` doesn't have one but the org's broader ecosystem does per the repo
listing below).

---

## 3. Statsig

### 3.1 Identity

GitHub org: `statsig-io`. Statsig is a **commercial SaaS platform**; unlike GrowthBook there is
no single flagship "platform" repo — only individual open-source **SDKs** (client/server
libraries), while the core analytics/experimentation platform itself is closed-source
(consistent with the brief's expectation). Star counts (`gh api /repos/statsig-io/<name>`,
as-of 2026-08-01; note the `/orgs/.../repos?sort=stars` API param does NOT reliably sort by
stars server-side — verified by cross-checking individual repos):

| Repo | Stars | License (API, cross-check against file) | Notes |
|---|---|---|---|
| `ios-sdk` | 37 | ISC (confirmed: raw LICENSE file text = "ISC License (ISC), Copyright (c) 2022, Statsig, Inc.") | client iOS SDK |
| `node-js-server-sdk` | 26 | ISC (confirmed via raw file, same text, copyright 2022) | server Node SDK |
| `statsig-server-core` | 23 | ISC (API-reported; not independently opened) | shared Rust core powering multiple SDKs |
| `js-client-monorepo` | 17 | ISC | |
| `go-sdk` | 17 | ISC | |
| `java-server-sdk` | 16 | ISC | |
| `dart-sdk` | 9 | ISC (confirmed via raw file, copyright 2021) | |
| `python-sdk` | 9 | ISC | |
| `ruby-sdk` | 9 | ISC | |
| `react-sdk` | 7 | ISC | |
| `terraform-provider-statsig` | 5 | ISC | |
| `erlang-sdk` | 5 | ISC | |

Note: `statuspage` shows 769 stars in the org listing but is confirmed (`gh api`, `fork: false`,
description "A simple, zero-dependency, pure js/html status page based on GitHub Pages and
Actions") to be an unrelated internal-tooling repo, NOT an experimentation/growth product — do
not cite it as evidence of Statsig's OSS traction.

**LICENSE VERDICT**: every Statsig SDK repo checked (node-js-server-sdk, dart-sdk) uses the
**ISC License** — read directly from raw.githubusercontent.com LICENSE files, not the GitHub
API (though in this case the API's `license.spdx_id` field happened to agree — still verified
independently per the charter rule). ISC is a permissive, near-MIT-equivalent license
(simplified wording, same substantive grant). No enterprise/commercial LICENSE files found in
any checked repo — because the commercial product (the actual experimentation platform,
dashboard, stats engine) is simply not open-sourced at all; only the client/server SDKs that
talk to Statsig's hosted API are public. This is a *stricter* open-core pattern than GrowthBook
(GrowthBook open-sources its entire stats engine + self-hostable server; Statsig does not
open-source its stats engine or server — only the thin SDK layer).

### 3.2 Teaches-vs-sells

Statsig's docs (docs.statsig.com) DO teach real methodology (see §4 below — sequential testing/
mSPRT, CUPED-style variance reduction, stratified sampling, Bayesian framework) similarly to
GrowthBook, but the underlying stats-engine *implementation* is not inspectable (closed-source
SaaS), so claims cannot be cross-checked against source code the way GrowthBook's can (GrowthBook's
`packages/stats` MIT package lets you literally read the `gbstats` Python implementation; Statsig's
docs describe formulas but the actual engine is opaque).

### 3.3 Acquisition status — OpenAI, VERIFIED from primary sources

**Confirmed, primary source, dated**: Statsig's own blog post
([statsig.com/blog/openai-acquisition](https://www.statsig.com/blog/openai-acquisition)),
fetched 2026-08-01: announcement dated **Tuesday, September 2, 2025**. Statsig's founder/CEO
**Vijaye Raji** becomes **CTO of Applications at OpenAI** (confirmed via search result title:
"Vijaye Raji to become CTO of Applications with acquisition of Statsig | OpenAI," URL
`openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig/` — this
specific OpenAI page returned an HTTP 403/Cloudflare-challenge on WebFetch, so the OpenAI-side
primary text could not be directly quoted, only corroborated via the WebSearch snippet: "OpenAI
is acquiring Statsig, one of the most trusted experimentation platforms in the industry—powering
A/B testing, feature flagging, and real-time decisioning for companies including OpenAI").

**What Statsig says happens to the product** (direct quote from their own blog, fetched
2026-08-01): *"Statsig will continue to provide our services and invest in our core products.
Our customers will remain a top priority."* The announcement also states the deal is *"subject
to customary closing conditions, including regulatory approval"* as of the Sept 2 2025 post —
i.e., not yet fully closed at announcement time.

**What is explicitly NOT addressed in the primary source** (a finding in itself — flag as an
open question, do not fabricate an answer): whether Statsig remains available/sold to companies
that compete with OpenAI; any pricing changes; any change to open-source SDK status. As of this
research date (2026-08-01, ~11 months after the announcement), Statsig's SDKs remain live on
GitHub with recent commits (e.g. `statsig-server-core` pushed 2026-07-23, `node-js-server-sdk`
pushed 2026-05-01) — i.e., the SDK layer is still being actively maintained, consistent with
"business as usual" continuation. No repos found archived as a result of the acquisition.

### 3.4 Teaching content extracted from docs.statsig.com

Fetched via WebFetch (curl was blocked by Cloudflare bot-challenge on the openai.com side but
docs.statsig.com pages worked directly). Correct URL pattern discovered by trial:
`docs.statsig.com/experiments/advanced-setup/<slug>` (no `/en/` prefix needed, contrary to
what the page's own rendered nav text suggested — `/en/` prefixed URLs 404'd).

**Sequential testing** — `docs.statsig.com/experiments/advanced-setup/sequential-testing`:
Method = **mSPRT** (modified Sequential Probability Ratio Test), explicitly citing "the
approach that Zhao et al. propose in [their] paper" (Statsig's own words, paper not further
identified in the fetched excerpt — flag as a citation to trace further if needed, likely
Zhao/Liu/Deng or a similar named mSPRT paper in the Ramesh Johari / Optimizely lineage).
Formula given: $Z^*_{\alpha/2} = \sqrt{[(V+\tau)/\tau] \times [-2\ln(\alpha/2) - \ln(V/(V+\tau))]}$
where V = variance of the delta between means, τ = a mixing parameter (function of sample size
and variance). **Cost in power, Statsig's own words**: "Early decision-making often results in
underpowered lift estimates with a high degree of uncertainty" — and their recommendation is
that when precise measurement matters, prefer waiting for the pre-computed power target over
early sequential stopping. **When to use it (Statsig's explicit guidance)**: (1) "unexpected
regressions" — catching bugs/severe harm early; (2) "opportunity cost scenarios" — when delay
itself is costly (e.g. shipping before a major event). Explicit caveat: "an early stat-sig
result for certain metrics doesn't guarantee sufficient power to detect regressions in **other**
metrics" — i.e. sequential validity is per-metric, not experiment-wide.

**Also offers classical SPRT** (distinct page,
`docs.statsig.com/experiments/advanced-setup/sprt`): framed as having "no penalties for
peeking; there is no need for sequential testing plans, alpha spending, or CI-penalties because
SPRT is a sequential test methodology from the start." Decision rule: compare a Likelihood
Ratio against upper/lower boundaries (accept alternative if LR > upper bound, accept null if LR
< lower bound). Statsig's own suggested plain-language reporting: *"With an LR of 3.5, it's
3.5x more likely that the feature worked"* — a genuinely distinctive communication pattern
worth citing (LR-as-intuitive-odds framing, contrasted with GrowthBook's Bayesian
chance-to-win framing and frequentist p-values).

**Bayesian framework** — `docs.statsig.com/experiments/advanced-setup/bayesian`: **Statsig
defaults to FREQUENTIST, not Bayesian** — direct quote: *"Experiments are frequentist by
default; to switch to Bayesian mode, go to Advanced Settings."* This is the OPPOSITE default
from GrowthBook (Bayesian-by-default) — a genuine, citable platform-divergence data point for
the "how does the industry actually split on this" question. Statsig's own justification for
offering Bayesian at all: "non-technical audiences often find these terms more intuitive than
the p-values that frequentist analysis uses by default" (nearly identical rationale to
GrowthBook's, despite the opposite default). Their own glossary: **Chance to Beat Control** =
"the probability that the test is better than control"; **Expected Loss** = "the average
potential risk if you ship the test variant"; **Credible Interval** = "the interval that
contains the true parameter at the given probability." Explicit caution on informed priors:
organizations "must understand what influence the priors have over your experimental results."

**Variance reduction / CUPED** —
`docs.statsig.com/experiments/statistical-methods/variance-reduction`: Statsig's own CUPED
implementation uses a **7-day pre-exposure lookback window PER USER** (i.e., 7 days before each
individual user's own exposure timestamp), explicitly contrasted with "a fixed window before
the experiment starts for all users" (i.e., Statsig's window floats per-user; GrowthBook's
14-day CUPED window is a fixed calendar lookback — a real implementation difference worth
noting). Statsig auto-applies CUPED to "experiments and topline results on key metrics," and
uses **stratification to handle users lacking pre-experiment data** (grouping users into strata
by data-availability, estimating within-stratum, then aggregating) — structurally similar to
GrowthBook's post-stratification approach but framed as solving a different problem (missing
pre-period data vs. imbalanced traffic splits). **Variance reduction magnitude: NOT
quantified** — Statsig's own text: CUPED "produces significant variance reduction for the large
majority of metrics where Statsig can apply it," with **no percentage given**. Mark as
UNTRACED/qualitative-only, in contrast to GrowthBook which at least cites Netflix's ~40% and
Microsoft's ~20%-traffic-equivalent numbers (themselves borrowed, see §2.4) — Statsig's own
docs give even less quantitative grounding than GrowthBook's borrowed citations.

**Stratified sampling** —
`docs.statsig.com/experiments/advanced-setup/stratified-sampling`: mechanism = try up to 100
different randomization salts, pick the one that best balances a target metric/attribute across
arms ("tries n different salts (100 by default) and evaluates how balanced your groups are").
Recommended for "B2B scenarios and other relatively low-volume or high-variance scenarios," or
when you expect "whales" (heterogeneous high-value users) to skew results. **Magnitude claim,
UNTRACED / self-reported simulation**: *"In Statsig's simulations, this approach produced
around a 50% decrease in the variance of reported results."* This is Statsig's own internal
simulation, not an audited or peer-reviewed study, not tied to a specific dataset or published
methodology in the fetched excerpt — flag with the standard self-selected-vendor-benchmark
caveat. Explicit trade-off disclosed: "time and compute cost that scales with the number of
units and adds steps before starting an experiment," and Statsig's own default-path guidance:
"If you don't expect meaningful imbalance, Statsig generally recommends a standard random
split" (i.e., they recommend AGAINST using their own advanced feature by default — a good-faith
signal worth citing).

**Multiple testing correction / SRM specifics**: attempted to fetch dedicated Statsig pages
(`reducing-false-positives`, `health-checks`) at several URL variants — all returned HTTP 404
despite being named in the site's own rendered navigation sidebar (possible stale-nav / JS-
routing artifact, or the pages have been renamed/removed since the nav was cached). **Dead
end, logged as an open question** — Statsig's specific SRM p-value threshold and multiple-
testing-correction method were NOT independently obtained (unlike GrowthBook's p<0.001 and
Eppo's α=0.001, both confirmed). Do not assume Statsig uses the same threshold without
verification.

### 3.5 Warehouse-native mode

Not independently confirmed via a fetched Statsig doc page in this pass (time/budget
constraint) — GrowthBook's own fundamentals doc (`using/fundamentals.mdx`) mentions Statsig-
adjacent framing only implicitly ("AB testing systems either are 'warehouse native' (like
GrowthBook) ... or they require you to send event data to them" — GrowthBook self-identifies
as warehouse-native but does not explicitly classify Statsig either way in that passage).
Flag as an open question for channel D/B to fill if they encounter a direct Statsig statement
on warehouse-native mode.

---

## 4. Eppo

### 4.1 Identity

GitHub org: `Eppo-exp`. Like Statsig, Eppo is commercial-SaaS-with-open-SDKs (no flagship
open-source platform repo). Star counts (`gh api`, as-of 2026-08-01):

| Repo | Stars | License (verified via raw file where checked) |
|---|---|---|
| `js-sdk-common` | 11 | MIT |
| `eppo-docs` | 11 | (docs source repo — not independently license-checked, likely internal) |
| `android-sdk` | 9 | MIT |
| `js-client-sdk` | 10 | MIT |
| `node-server-sdk` | 9 | MIT |
| `dot-net-server-sdk` | 8 | MIT |
| `java-server-sdk` | 8 | MIT |
| `php-sdk` | 8 | MIT |
| `golang-sdk` | 7 | MIT |
| `eppo-ios-sdk` | 5 | MIT |
| `eppo-multiplatform` | 5 | MIT (confirmed via raw LICENSE file: "MIT License, Copyright (c) 2024 Eppo") |
| `python-sdk` | 12 | MIT (repo **archived**: true) |
| `ruby-sdk` | 3 | MIT (repo **archived**: true) |

**LICENSE VERDICT**: every Eppo SDK repo checked uses **MIT**, confirmed independently via raw
LICENSE file text on `eppo-multiplatform` (not just the API field). No commercial/enterprise
LICENSE subdirectory pattern found (unlike GrowthBook) — consistent with Eppo, like Statsig,
keeping the actual experimentation-analysis engine and dashboard entirely closed-source and
only open-sourcing the client/server SDK layer.

**Notable finding — organizational evidence of the Datadog acquisition inside GitHub itself**:
the `Eppo-exp` org contains a repo named `datadog-documentation`, confirmed via `gh api` to be
`"fork": true, "source": "DataDog/documentation"` — i.e., someone with `Eppo-exp` org
permissions has forked Datadog's own internal documentation-site source repo. This is
circumstantial (not a primary announcement) but strong supporting evidence of org-level GitHub
integration between the two companies, consistent with the primary-sourced acquisition below.
Also of note: `python-sdk` (12 stars, the single most-starred Eppo SDK found) and `ruby-sdk`
are both marked **archived: true** — worth flagging as a possible post-acquisition
consolidation signal, though this is inference, not confirmed cause (repos can be archived for
many reasons; do not assert the acquisition caused this without further evidence).

### 4.2 Acquisition status — Datadog, VERIFIED from primary source

**Confirmed, primary source, dated**: fetched `datadoghq.com/blog/datadog-acquires-eppo/`
directly (2026-08-01). **Announcement date: May 6, 2025.** Direct quotes: *"Eppo will continue
supporting existing customers and bringing on new customers as part of Eppo by Datadog."* and
*"By integrating Eppo's capabilities into Datadog Product Analytics, Real User Monitoring, and
Session Replay, teams can test changes, analyze user behavior, and measure business impact of
code releases at scale."* Deal terms not disclosed in the announcement. Team/docs/SDK
continuation not explicitly addressed at announcement time ("Stay tuned for future updates on
our progress as we work to bring Eppo's features into Datadog").

**Current status as of 2026-08-01 (this research date), from Eppo's own live site**
(`geteppo.com`, fetched today): the branding has moved **past** "Eppo by Datadog" — the site
now states **"Eppo is now Datadog Experiments"** and explicitly: "acquired by Datadog," with a
banner linking to founder Che Sharma's blog post about the acquisition and a footer pointing to
"the Datadog blog" for updates. **This is a material update beyond the controller-canon's
pre-research assumption** — the product has been rebranded/folded into the Datadog product
family under the name "Datadog Experiments," not merely operated as a semi-independent
"Eppo by Datadog" sub-brand as the May 2025 press release framing might have suggested. SDKs
remain live and actively pushed as of 2026-08-01 (e.g. `js-sdk-common` pushed 2026-07-20,
`android-sdk` pushed 2026-07-24, `eppo-multiplatform` pushed 2026-07-27) — the SDK/docs layer
is still maintained under the Eppo-exp GitHub org name even though the product brand has
changed.

### 4.3 Teaching content extracted from docs.geteppo.com

Fetched via WebFetch, 2026-08-01. Docs structure: `/statistics/` is the dedicated methodology
section — its own tagline: *"Learn about the nitty-gritty details of how Eppo's statistical
engine works, including confidence interval methods, CUPED++, sample size calculation, and
more."*

**CUPED++** — `docs.geteppo.com/statistics/cuped/`: Eppo's distinctive claim is that CUPED++
extends standard CUPED by using **two covariate types simultaneously**: (1) the metric's own
pre-experiment value over a **30-day default lookback window** (vs. GrowthBook's 14-day
default and Statsig's 7-day-per-user default — three different vendor defaults for the same
concept, worth noting as a spread), and (2) **categorical assignment properties** (attributes
with ≤100 distinct values, e.g. country or browser) from the assignment table — even when no
pre-experiment analogue of the metric itself exists. Implementation: **ridge regression**,
computed separately per variation, per metric, updated **daily** (manual refresh available
after control-arm changes or new-metric additions). Excludes retention/conversion metrics and
subject-filtered metrics from CUPED eligibility; scope-limited to the metrics-overview page only
(no CUPED on filtered/segmented views or explores). **Variance reduction magnitude: NOT
quantified** — Eppo's own text describes the mechanism only ("the variance of these estimates
[is] proportional to the mean square error of the predictions... the improvement in the
confidence intervals is directly related to how well the pre-experiment data can predict
experiment outcomes") without giving a percentage. Same pattern as Statsig: qualitative-only,
no magnitude, in contrast to GrowthBook's (borrowed) Netflix/Microsoft numbers.

**Sample Ratio Mismatch** — `docs.geteppo.com/statistics/sample-ratio-mismatch/`: **Test:
Pearson's chi-squared, threshold α = 0.001** — direct quote: *"We run this traffic imbalance
test by running a Pearson's chi-squared test with α=0.001 on active variations, using the
assignment weights for each variant."* **This threshold is numerically identical to
GrowthBook's p<0.001** (independently implemented, independently documented — a genuine
convergent finding across two unrelated commercial platforms on the same vendor-chosen
threshold; worth flagging as an industry-standard-by-convergence data point in the magnitudes
table). Eppo gives an unusually explicit statistical justification for choosing such a strict
threshold (three reasons, direct quotes): (1) *"The SRM diagnostic is performed every time
experiment results are updated, yet the test is not sequentially valid"* — i.e., they
acknowledge SRM-checking-on-every-refresh is itself a repeated/peeking test and needs a stricter
per-look threshold to compensate; (2) *"False positives are expensive: they can lead to
wasteful investigations... or cast doubt on experiment results more generally"*; (3) *"Sample
ratio mismatch tests have very high power in typical settings... Whenever a ratio mismatch is
present, it will be detected with probability near 100%"* — i.e., real SRM is easy to detect
even at a strict threshold, so the strictness mainly trades away false positives, not true-
positive sensitivity. This three-reason justification is more explicit/rigorous than either
GrowthBook's or Statsig's stated reasoning for their own thresholds — worth citing as the
best-explained version of "why 0.001."

**Multiple testing correction** — `docs.geteppo.com/statistics/multiple-testing/`: Eppo's
distinctive method is a **"Preferential Bonferroni"** — a weighted-alpha-spending variant of
classical Bonferroni that gives the primary/goal metric a larger alpha share (γα/k) than
secondary metrics ((1−γ)α/[k(m−1)]), where k = number of treatment variants, m = number of
metrics. Their own stated advantage over plain Bonferroni: *"the power to detect changes in the
primary metric does not depend on how many other metrics are added"* — i.e., adding more
secondary/exploratory metrics to an experiment does NOT cost power on the metric you actually
care about, solving the classic "don't add too many metrics or you'll dilute your primary
test's power" problem that plain Bonferroni creates. Worked motivating example given: with 20
independently-computed 95% CIs, "we can expect one of these to fail its coverage" purely by
chance (the FWER framing). Not available in Bayesian mode — "the setting is unavailable for
Bayesian analysis, which handles multiple comparisons differently" (unelaborated in the fetched
excerpt).

**Bayesian vs frequentist framing** —
`docs.geteppo.com/statistics/confidence-intervals/`: Eppo is unusually precise/pedantic about
terminology, direct quote: *"the very term 'confidence interval' is only used in the
frequentist framework, while Bayesian methods use 'credible interval' to describe a similar
(though distinct!) concept"* — despite this, Eppo says it uses "confidence interval"
throughout its own docs/UI for simplicity (a documented terminology-simplification choice,
worth noting for a growth-skill glossary section on how vendors deliberately blur this
distinction for UX reasons). Distinctive caution about Bayesian lift specifically: *"the
estimated lift might be quite different from the naive calculation, because the prior can
influence the estimate a lot, particularly if the sample size is not large"* — tied to a
dedicated guide titled "Why Bayesian lift doesn't match (Treatment − Control) / Control" (title
only fetched, content not read in this pass — flag as a follow-up if channel needs the full
explanation of prior-shrinkage-vs-naive-difference divergence).

**Switchback experiments** — `docs.geteppo.com/switchback-quickstart/`: Eppo has first-class
switchback support (randomizing by cluster — e.g. city — with independently scheduled
assignment per cluster, auto-generating a "Switchback Assignment Logging Table" in the
customer's warehouse). Named practitioner reference cited in their own docs: a webinar titled
**"How Delivery Hero Uses Switchbacks to Drive Marketplace Innovation"** — a named-company case
study (rung 3, vendor-hosted webinar, not independently verified — flag as vendor-hosted
practitioner testimony, not audited). This directly matches the controller-canon's expected
"switchback designs (DoorDash/Lyft)" marketplace-interference topic, giving a second named
company (Delivery Hero) beyond the canon's DoorDash/Lyft examples — worth passing to channel D
if they haven't already found Delivery Hero's own switchback writeups independently.

**Sample size calculator, global lift, interaction detection**: page URLs identified
(`/statistics/sample-size-calculator/`, `/statistics/global-lift/`,
`/statistics/interaction-detection/`) but NOT fetched in this pass due to time budget — flag as
unexplored, a worthwhile follow-up if another worker has spare capacity, particularly
"interaction-detection" which may bear on the growth-skill's "should I worry about running
tests in parallel" question (GrowthBook takes the "interactions are rare" position in §2.14;
worth checking if Eppo's dedicated interaction-detection tooling implies they take the opposite
view — i.e. their existence as a *product feature* might reveal a different house position than
GrowthBook's "don't worry about it" stance).

### 4.4 Flags-vs-experiments framing — Eppo does NOT draw the growth/operate distinction explicitly

Checked `docs.geteppo.com/feature-flagging/` (fetched 2026-08-01) specifically for
growth-vs-operate framing language. **Finding: absent.** The page describes flags broadly as
supporting "toggle features on and off, conduct A/B/n testing, gradually roll out new
functionality, and personalize user experiences" and lists "Feature gates," "Progressive
rollouts," "Kill switches" alongside "Experiment assignment" as parallel use cases **without**
GrowthBook's explicit learning-vs-operational-decision-making distinction (contrast directly
with §2.9's Safe Rollouts language). This is a genuine platform-level difference worth carrying
into the growth-skill: **GrowthBook explicitly theorizes and names the growth/operate seam in
its own product docs; Eppo bundles flags and experiments as "complementary applications of the
same infrastructure" without naming the distinction.** Statsig not independently checked for
this framing in this pass (open question, §3.5 territory for a follow-up worker).

---

## 5. Candidate magnitudes table (controller gate)

Every volatile/quantitative claim surfaced above, collected in one place per the charter's
"never-ship candidates" rule. TRACED = independently verified against a primary-source file or
page; UNTRACED = stated without a checkable citation at the point of use, even if it might be
correct.

| # | Claim | Exact source | As-of | Status | Caveat |
|---|---|---|---|---|---|
| 1 | GrowthBook SRM threshold: p < 0.001 (chi-squared) | `docs/docs/experimentation-analysis/experiment-results.mdx:132` + `running-experiments/url-redirects.mdx:131` (cloned repo) | 2026-08-01 | TRACED | Customizable by org; two independent file locations agree |
| 2 | GrowthBook Pre-Exposure Bias Check: same p<0.001 threshold, Bonferroni-corrected across goal+guardrail metric-variation pairs | `experimentation-analysis/experiment-results.mdx:140-157` | 2026-08-01 | TRACED | Internal-consistency data point, not an external citation |
| 3 | Eppo SRM threshold: α = 0.001 (Pearson's chi-squared) | `docs.geteppo.com/statistics/sample-ratio-mismatch/` | 2026-08-01 | TRACED | Independently implemented/documented; numerically matches GrowthBook — convergent finding across 2 vendors |
| 4 | Statsig SRM threshold | not obtained — dedicated pages 404'd despite appearing in site nav | 2026-08-01 | **UNTRACED / dead end** | Do not assume it matches GrowthBook/Eppo's 0.001 without verification |
| 5 | CUPED variance reduction ~40% (Netflix, key engagement metrics, 2016) | Netflix KDD 2016 paper (Xie & Aurisset), as cited in GrowthBook `docs/docs/statistics/cuped.mdx` | GrowthBook doc as-of 2026-08-01; Netflix claim dated 2016 | TRACED (to Netflix's own KDD paper, via GrowthBook's citation — not independently re-verified against the KDD paper itself in this pass) | Netflix's own metric selection ("some key engagement metrics") — not a general guarantee |
| 6 | CUPED ≈ +20% traffic equivalent (Microsoft, one product team, majority of metrics, 2022) | Microsoft ExP blog, as cited in GrowthBook `cuped.mdx` | GrowthBook doc as-of 2026-08-01; MS claim dated 2022 | TRACED (to Microsoft's own blog, via GrowthBook's citation — not independently re-verified against the MS post itself in this pass) | "One product team" — small, unspecified sample; not a company-wide figure |
| 7 | GrowthBook's own CUPEDps magnitude: "20% or more traffic" | GrowthBook `cuped.mdx`, GrowthBook's own marketing framing built on claims #5+#6 | 2026-08-01 | **UNTRACED as a GrowthBook-specific measurement** | This is GrowthBook borrowing others' numbers to market its own (structurally similar but not identical) implementation — do not present as a GrowthBook-measured result |
| 8 | Statsig CUPED variance reduction | `docs.statsig.com/experiments/statistical-methods/variance-reduction` | 2026-08-01 | **UNTRACED** | Statsig's own text gives no percentage at all — weaker grounding than GrowthBook's (borrowed) numbers |
| 9 | Eppo CUPED++ variance reduction | `docs.geteppo.com/statistics/cuped/` | 2026-08-01 | **UNTRACED** | Same pattern — mechanism described, no percentage given |
| 10 | Statsig stratified sampling: "~50% decrease in variance of reported results" | `docs.statsig.com/experiments/advanced-setup/stratified-sampling` | 2026-08-01 | **UNTRACED / self-selected vendor simulation** | Explicitly "Statsig's simulations" — not an audited or published study, no dataset/methodology given |
| 11 | GrowthBook: "Industry wide average success rates are only about 33%" (1/3 win, 1/3 flat, 1/3 lose) | GrowthBook `docs/docs/using/fundamentals.mdx` | 2026-08-01 | **UNTRACED-BY-GROWTHBOOK** | No citation given in GrowthBook's doc; aligns with but is NOT independent confirmation of the Kohavi/Microsoft ~1/3 figure the controller-canon already expects re-verified via channel D — likely the same folklore chain, do not double-count as corroboration |
| 12 | GrowthBook: "at least 100 conversion events per variation" rule of thumb for minimum sample size | GrowthBook `docs/docs/using/experimentation-best-practices.mdx` | 2026-08-01 | **UNTRACED / folklore, and arguably inconsistent with GrowthBook's own power-analysis framework (§2.5)**, which makes required-n a function of baseline rate + desired MDE, not a flat constant | Prime candidate for the wedge hypothesis's CRO-folklore falsification strip |
| 13 | GrowthBook sequential-testing default tuning parameter N* = 5,000 | `docs/docs/statistics/sequential.mdx` | 2026-08-01 | TRACED (to GrowthBook's own documented default) | A GrowthBook product default, not an external/universal constant |
| 14 | GrowthBook power target: 80%, "clinical trial standard" | `docs/docs/statistics/power.mdx` | 2026-08-01 | TRACED as GrowthBook's stated convention; **UNTRACED as a clinical-trials citation** (no specific clinical-trials source given) | Industry-wide convention, not GrowthBook-specific; worth a channel-D cross-check for the actual clinical-trials-standard provenance |
| 15 | GrowthBook A/A false-positive compounding: 10% (1 metric), 19% (2 metrics), 41% (5 metrics) at 95%/5% two-tailed thresholds | GrowthBook `kb/experiments/aa-tests.mdx` | 2026-08-01 | TRACED (correct, verifiable arithmetic: $1-(0.90)^n$ for n independent two-tailed 5% tests — internally correct, not sourced to an external paper because it doesn't need to be) | Good illustrative example to carry forward as-is |
| 16 | GrowthBook multiple-testing worked example: 20 metrics @ α=0.05 independent → ~64% chance of ≥1 false positive | GrowthBook `docs/docs/using/experimentation-problems.mdx` | 2026-08-01 | TRACED (correct arithmetic: $1-(0.95)^{20}\approx0.64$) | GrowthBook itself flags the independence assumption as unrealistic for real product metrics |
| 17 | Eppo/Statsig CUPED lookback-window defaults differ: GrowthBook 14 days (fixed calendar) vs Statsig 7 days (per-user floating) vs Eppo 30 days (fixed calendar) | GrowthBook `cuped.mdx`; Statsig `variance-reduction` page; Eppo `cuped/` page | 2026-08-01 | TRACED (three independent vendor defaults, all directly quoted from each vendor's own docs) | Not a "correct answer" — a genuine spread across vendors, useful as evidence there's no settled convention |
| 18 | GrowthBook default Bayesian prior when enabled: N(0, 0.3²) — 68% of effects in [-30%,+30%], 95% in [-60%,+60%] | GrowthBook `statistics/overview.mdx` + `statistics/details.mdx` | 2026-08-01 | TRACED (GrowthBook's own stated default + their own justification "corresponds roughly to the distribution of effects we have actually observed on GrowthBook") | The "observed distribution" justification is GrowthBook's own unaudited aggregate-customer-data claim — do not treat as an externally validated prior |
| 19 | GrowthBook Bayesian-CTW-to-frequentist-p-value rule of thumb: CTW = 1 − p/2 | GrowthBook `bandits/overview.mdx` FAQ | 2026-08-01 | **UNTRACED / GrowthBook house heuristic** | Not a formal statistical equivalence — GrowthBook itself frames it as an informal translation for practitioners |
| 20 | Statsig/OpenAI acquisition announced Sept 2, 2025 | `statsig.com/blog/openai-acquisition` (WebFetch, direct quote extracted) | fetched 2026-08-01 | TRACED (primary source, Statsig's own blog) | OpenAI-side page (openai.com) blocked by Cloudflare challenge — corroborated only via WebSearch snippet, not directly quoted from openai.com |
| 21 | Datadog/Eppo acquisition announced May 6, 2025; product now branded "Datadog Experiments" as of 2026-08-01 | `datadoghq.com/blog/datadog-acquires-eppo/` (announcement) + `geteppo.com` live site (current branding) | announcement 2025-05-06; branding-check fetched 2026-08-01 | TRACED (both primary sources, both directly quoted) | Branding has moved beyond the original "Eppo by Datadog" framing — a real change since announcement, not assumed |

## 6. Acquisition status — summary

**Statsig → OpenAI**: CONFIRMED via Statsig's own blog (`statsig.com/blog/openai-acquisition`),
announced 2025-09-02, deal was "subject to customary closing conditions, including regulatory
approval" at announcement time. Founder Vijaye Raji becomes OpenAI's CTO of Applications.
Statsig states it "will continue to provide our services and invest in our core products."
SDKs remain actively maintained on GitHub as of 2026-08-01 (most recent commits within days of
this research date). Pricing/competitor-availability/open-source-status changes: not addressed
in the primary source found — explicitly flag as unknown, do not guess.

**Eppo → Datadog**: CONFIRMED via Datadog's own blog (`datadoghq.com/blog/datadog-acquires-eppo/`),
announced 2025-05-06, framed at the time as "Eppo by Datadog" continuing to serve existing +
new customers, with capabilities being integrated into Datadog Product Analytics/RUM/Session
Replay. **As of this research date (2026-08-01), the product has been further rebranded to
"Datadog Experiments"** per Eppo's own live site — a finding beyond what the announcement
alone would suggest, and worth flagging to the sub-orchestrator as a "verify-dated" fact since
branding could shift again. SDKs (Eppo-exp GitHub org) remain actively maintained; two
(`python-sdk`, `ruby-sdk`) are archived, which may or may not be acquisition-related
(unconfirmed — logged as inference only, not asserted as fact).

## 7. Flags-vs-experiments framing — comparative summary (growth vs operate seam)

Per the charter's special question, here is what each vendor's OWN docs say, gathered directly:

- **GrowthBook**: explicitly names and theorizes the distinction. Safe Rollouts are stated to
  be "designed for operational decision-making, not learning" with a "bias towards action" and
  a strict always-zero failure threshold; standard Experiments are for learning, with a
  target-MDE-based decision framework that tolerates ambiguity. Both mechanisms share the same
  underlying feature-flag/targeting/analysis infrastructure — GrowthBook's own words: flags let
  you "launch to a subset of users, ramping up gradually, or turning any change into an
  experiment" — i.e., GrowthBook's product architecture IS the "same infra, opposite intent"
  pattern the charter describes, and their docs say so explicitly. This is the strongest, most
  directly quotable primary-source evidence for the growth/operate seam found across any of the
  three platforms.
- **Eppo**: does NOT draw this distinction in its feature-flagging docs — presents flags,
  rollouts, kill switches, and experiment assignment as parallel/complementary uses of one
  infrastructure without naming a learning-vs-operational split.
- **Statsig**: not independently checked for this specific framing in this pass — an open
  question for a follow-up worker or for channel B/D if they encounter Statsig commentary on
  this distinction.

**Disposition recommendation for the growth-skill controller**: GrowthBook's Safe-Rollouts-vs-
Experiments language (§2.9) is directly citable as first-party vendor evidence that the
industry itself (not just the charter's own framing) recognizes canary/rollout monitoring as
OPERATE territory and A/B experimentation as GROWTH territory, using literally the same
underlying flag/targeting engine. This is a strong, ready-to-use piece of evidence for the
family's growth/operate boundary documentation.

## 8. Open questions / dead ends

1. **Statsig SRM threshold and multiple-testing-correction method**: pages named in Statsig's
   own site navigation (`reducing-false-positives`, `health-checks`) 404'd on every URL
   variant tried (`/experiments/advanced-setup/...`, `/en/experiments/advanced-setup/...`).
   Possible stale-nav-cache or recently reorganized docs. Needs a fresh attempt, ideally via a
   direct Google-cache or sitemap lookup rather than guessing slugs.
2. **Statsig warehouse-native mode**: not independently confirmed from a direct Statsig
   statement in this pass — only GrowthBook's own (self-serving) framing of itself as
   warehouse-native was found, mentioning Statsig only by omission/contrast.
3. **Eppo interaction-detection, sample-size-calculator, global-lift pages**: URLs identified
   (`docs.geteppo.com/statistics/interaction-detection/`, `/sample-size-calculator/`,
   `/global-lift/`) but not fetched — time-budget triage decision. Interaction-detection in
   particular could reveal whether Eppo's house view on parallel-testing interaction risk
   differs from GrowthBook's explicit "interactions are rare, don't worry" position (§2.14) —
   worth a follow-up fetch if another worker has spare capacity.
4. **Zhao et al. mSPRT paper** (cited by Statsig's sequential-testing page as their method's
   origin) was not further identified/tracked to an exact arXiv/DOI in this pass — the fetched
   excerpt only said "the approach that Zhao et al. propose in this paper" without a link
   surviving into the WebFetch summary. Worth a dedicated follow-up if the growth-skill wants a
   full citation.
5. **GrowthBook's Twyman's Law attribution ("Maurice G. Kendall Twyman")** appears to conflate
   two different statisticians (Maurice Kendall and the actual Twyman, believed to be A.L.
   Twyman) — flagged in §2.11 as a likely error in GrowthBook's own docs. Do not repeat this
   attribution without independent verification of who "Twyman" actually was; channel D/B may
   be better positioned to resolve this from primary statistics-history sources.
6. **OpenAI-side acquisition page** (`openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig/`)
   was blocked by a Cloudflare JS challenge on both WebFetch and curl — the OpenAI-side
   framing/quotes were only obtained secondhand via a WebSearch result snippet, not directly
   read. If an exact OpenAI-side quote is needed for the shipped skill, this page needs a
   browser-based fetch (e.g. via claude-in-chrome) rather than WebFetch/curl.
7. **GrowthBook stats-engine Python package (`packages/stats`, MIT)**: identified as the most
   directly liftable/citable artifact (open-source implementation of everything described in
   §2.1-2.7) but the actual Python source code inside `packages/stats/` was not read line-by-
   line in this pass — only the docs describing its behavior. If the growth-skill wants to
   verify GrowthBook's documented formulas against their actual shipped implementation (the
   strongest possible verification), that would require reading `packages/stats/gbstats/`
   directly — flagged as a high-value follow-up, not attempted here due to scope/time.
8. **No quasi-experimental methods found in GrowthBook's docs** (§2.15) — confirmed via
   exhaustive grep across the entire cloned `docs/docs/` tree. This is a genuine "this territory
   is NOT covered by this vendor" finding, not a missed search — pass this to the
   sub-orchestrator as confirmation that channel D's independent quasi-experimental-methods
   coverage (Google matched-markets/Trimmed Match, diff-in-diff, etc.) is non-duplicative of
   anything in this GitHub-sourced corpus.

