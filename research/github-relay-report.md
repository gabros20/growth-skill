# Channel C (GitHub) — synthesis report

**Sub-orchestrator**: grw-github (opus) · **Workers**: C1–C4 (sonnet) · **Date**: 2026-08-01
**All figures as-of 2026-08-01** unless a different date is stated inline.

## How to read this file

This is a synthesis with pointers into the raw corpus. Nothing here is a summary-of-a-summary:
every number below was **re-verified by me** (`gh api` / `curl` against the actual file) before
being repeated, per the charter's re-verification rule. Where a worker's figure and mine
disagreed, both are shown and the resolution is stated.

Raw files (all under `research/growth/_raw/`):

| File | Owner | Contents |
|---|---|---|
| `github-growthbook-statsig.md` (79 KB) | C1 | GrowthBook docs extraction, Statsig, Eppo, acquisitions, 21-row magnitudes table |
| `github-flags-lineage.md` (63 KB) | C2 | Flag tier, OpenFeature spec, PlanOut lineage, rollout-vs-learning quote bank |
| `github-analysis-libs.md` (57 KB) | C3 | 30+ stats/causal libraries, encoded assumptions, folklore-in-code |
| `github-skill-repos.md` (67 KB) | C4 | Skill repos, awesome-lists, folklore harvest, Mozilla handbook |
| `github-lead-slice.md` (43 KB) | me | Independent license verification, PostHog skill suite, Booking calculator, acquisitions, `gbstats` |

**Verification result: zero worker figures were found wrong.** I spot-checked 14 repos' star
counts, archive flags, push dates and license fields directly, plus four load-bearing quotes.
All matched. Two workers' *interpretations* needed correction (§7.2, §8.3), and one of my own
did (§7.2) — those are flagged in place.

**Budget**: WebSearch 3 of ≤15 used (all three on acquisition verification, §6). Everything else
came from `gh api`, `git clone --depth 1`, `curl`, and WebFetch. Crawl4AI never touched.

---

## 0. The five findings that should change the controller's thinking

Ordered by how much they move the wedge, not by topic.

1. **Wedge hypothesis 3 is false as written, and the true version is sharper.** The canon
   guessed incumbents "bundle ab-testing/CRO/churn as tactic lists **without** the validity
   layer." We deepwalked. The validity layer *exists* and is *good* in at least four independent
   places (PostHog's shipped skill suite, GrowthBook's shipped skill suite, `rampstackco/claude-skills`,
   Mozilla's Nimbus docs). What does **not** exist anywhere is a pack that unifies
   experiment validity **with** retention, referral, pricing and PLG. The gap is
   **integration across the canonical 17, not absence of rigor**. §8.
2. **The small-sample wedge now has an arithmetic-only flagship illustration, derived from
   Booking.com's own shipped defaults.** Their open-source calculator's default scenario needs
   **561,364 visitors**; I reproduced that number exactly from their source. At 500 visitors/day
   that is **3.1 years**. No benchmark, no vendor sample, nothing to go stale. §5.1.
3. **The growth/operate seam is contested in the market — and an observability vendor is
   actively absorbing experimentation.** Datadog bought Eppo and shipped it as
   *"statistical methods with **real-time observability guardrails**… ship with confidence…
   reduce risk."* That is the operate framing applied to experimentation. Meanwhile Optimizely
   sells the two sides as **separately branded products** on one SDK. §7.
4. **Three commercial platforms independently converge on p < 0.001 for SRM; Mozilla uses
   p < 0.01 with softer semantics.** A genuine convergent standard *and* a principled dissent,
   both first-party sourced. §3.3.
5. **A licensing rule the family does not yet have.** GeoLift declares **MIT** in `LICENSE.md`
   and **GPL (>= 2)** in its R `DESCRIPTION`. "Open every LICENSE file" was not enough to catch
   it. The rule needs a package-ecosystem-metadata clause. §9.2.

---

## 1. Platform landscape

Every star count, archive flag and push date below re-verified by me via `gh api`.
**Every license read from the file's own text.** The API's `license.spdx_id` is shown only to
document how often it lies — **7 of the repos below return `NOASSERTION` or `null` despite having
perfectly readable license files.**

| Repo | Stars | Archived | Last push | API says | **Truth from file** | Teaches vs sells |
|---|---|---|---|---|---|---|
| PostHog/posthog | 37,425 | No | 2026-08-01 | `NOASSERTION` | **MIT Expat + `ee/` proprietary** (8 license files) | Both. Teaches heavily, free; sells hosting + `ee/` |
| Unleash/unleash | 13,705 | No | 2026-08-01 | AGPL-3.0 | **AGPL-3.0** ✓ | Sells enterprise (closed, not in repo). Teaches nothing about experiments |
| growthbook/growthbook | 8,082 | No | 2026-08-01 | `NOASSERTION` | **MIT Expat + 3 enterprise dirs; `packages/stats` separately MIT** (5 license files) | **Teaches the most of anyone**; sells enterprise + Pro seats |
| Flagsmith/flagsmith | 6,480 | No | 2026-07-31 | BSD-3-Clause | **BSD-3-Clause** ✓ | Sells; teaches almost nothing |
| flipt-io/flipt | 4,867 | No | 2026-08-01 | `NOASSERTION` | **FCL-1.0-MIT** (Fair Core, delayed-open) + MIT sub-pkgs | Sells; rollout-only framing |
| open-feature/spec | 1,221 | No | 2026-07-31 | Apache-2.0 | **Apache-2.0** ✓ | Standard. Deliberately silent on experiments |
| facebookarchive/planout | 1,689 | **Yes** | 2021-03-19 | `NOASSERTION` | **BSD (2014, Facebook)** | Historical; taught assignment-as-a-language |
| intuit/wasabi | 1,140 | No\* | 2023-05-26 | Apache-2.0 | **Apache-2.0** ✓ | Dead (\*README says so; flag never flipped) |
| bucketeer-io/bucketeer | 477 | No | 2026-08-01 | Apache-2.0 | **Apache-2.0** ✓ | Gives away what others gate; fuses rollout+experiment |
| zalando/expan | 344 | No\* | 2023-04-11 | MIT | **MIT (2016 Zalando SE)** | Dead\*; methodologically serious analysis library |
| mozilla/experimenter | 145 | No | 2026-08-01 | MPL-2.0 | **MPL-2.0** ✓ | **Teaches, sells nothing** — the purest teaching source found |
| Statsig SDKs (`statsig-io/*`) | ≤37 each | No | 2026-07 | ISC | **ISC** (verified on 3 repos) | Sells the engine (closed); teaches via docs |
| Eppo SDKs (`Eppo-exp/*`) | ≤12 each | 2 archived | 2026-07 | MIT | **MIT** (verified on `eppo-multiplatform`) | Same pattern; now Datadog Experiments (§6.2) |
| Optimizely SDKs | ~31 each | No | 2026-07-29 | Apache-2.0 | **Apache-2.0** ✓ | Sells; **Stats Engine never open-sourced** |

\* **"archived: false" is not a liveness signal.** Wasabi's own description says it "is no longer
under active development or being supported"; ExpAn has no commits since 2023. I hit the same
pattern independently on `bookingcom/powercalculator`, whose README says *"This project is
archived and no further development will be done here"* while GitHub's flag reads false and it
was pushed 2026-02-12. **Three independent instances — cite the README, not the flag.**

### 1.1 The open-core license pattern, and the one repo that matters

GrowthBook and PostHog ship near-identical "Enterprise License" texts (both: *"may only be used
in production, if you… have a valid … Enterprise license for the correct number of user seats"*)
— clearly descended from a shared open-core template. The carve-outs differ in shape:

- **PostHog**: exactly **one** directory, `ee/`. Everything else, including the entire
  `products/experiments/` product and its stats engines, is **MIT**. Only holdouts and saved
  metrics (`ee/clickhouse/views/experiment_holdouts.py`, `…experiment_saved_metrics.py`) are gated.
- **GrowthBook**: **three** enterprise directories — and critically, **`packages/stats/` carries
  its own plain, unqualified MIT license file.**

**`packages/stats/` (the `gbstats` PyPI package) is the single cleanest liftable artifact in the
entire landscape.** I verified it contains the real engine, not a wrapper: `gbstats.py` (55 KB),
`models/tests.py` (56 KB), `frequentist/tests.py` incl. always-valid sequential intervals,
`bayesian/tests.py`, `bayesian/bandits.py`, `power/midexperimentpower.py`, and
`tests/frequentist/test_post_strat.py` (**77 KB — the largest file in the package**, meaning
post-stratification is the most heavily exercised behavior). Detail: `_raw/github-lead-slice.md` §5.

**Caveat the pack must not miss:** the *code* being MIT and the *feature* being commercially
gated are different facts. C1 found GrowthBook's docs mark sequential testing with
`<CommercialFeature feature="sequential-testing" />`. The math is MIT and readable; the hosted
product gates the button.

---

## 2. The teaching goldmine

Full extraction in `_raw/github-growthbook-statsig.md` §2 (GrowthBook, ~15 subsections with
file:line pointers), §3.4 (Statsig), §4.3 (Eppo).

**GrowthBook's docs are the stats textbook the brief predicted**, and they are unusually honest
against their own commercial interest. The three most citable passages:

- **They debunk the "Bayesian solves peeking" folklore themselves.** After listing robustness to
  early stopping as a Bayesian advantage, they add: *"this is something of a difference without a
  distinction, as the decision to stop an experiment early can still result in inflated false
  positive rates."* (`statistics/overview.mdx`)
- **A/A false-positive compounding, with correct arithmetic**: 1 metric → 10%, 2 → 19%, 5 → 41%
  at their 95%/5% defaults (`kb/experiments/aa-tests.mdx`). Verified: 1−0.9ⁿ.
- **A pre-built falsification-target list.** `using/experimentation-problems.mdx` names the
  Multiple Testing Problem (20 metrics → ~64%, verified 1−0.95²⁰), Texas Sharpshooter, P-Hacking,
  Peeking, Semmelweis Effect, Twyman's Law, Goodhart's Law, Simpson's Paradox, HiPPOs, and a
  dark-patterns ethics section.

**Two things in GrowthBook's own docs are falsification-strip targets, not citations:**

- **"at least 100 conversion events per variation"** (`using/experimentation-best-practices.mdx`)
  — stated with no derivation, and **inconsistent with GrowthBook's own closed-form power
  framework** in `statistics/power.mdx`, which makes required *n* a function of baseline rate and
  MDE. A vendor contradicting its own more rigorous page is a gift to the strip.
- **"Industry wide average success rates are only about 33%"** (`using/fundamentals.mdx`) —
  **no citation given.** It matches the Kohavi/Microsoft ~⅓ figure the canon expects channel D to
  trace, but **do not count it as independent corroboration** — it is almost certainly the same
  folklore chain, not a replication.

**One attribution error to quarantine.** GrowthBook attributes Twyman's Law to *"the British
statistician Maurice G. Kendall Twyman"*, which conflates two different people. C1 caught it.
**Do not repeat GrowthBook's attribution.** Channel D should establish who Twyman was.

### 2.1 Vendor divergence is the finding, not vendor consensus

Where the three platforms disagree is more useful than where they agree, because it proves there
is no settled answer for the pack to defer to:

| Question | GrowthBook | Statsig | Eppo |
|---|---|---|---|
| Default engine | **Bayesian** | **Frequentist** | offers both, pedantic about terminology |
| Sequential method | Asymptotic Confidence Sequences (Waudby-Smith et al., arXiv:2103.06476) | **mSPRT** | — |
| CUPED lookback | **14 days** (fixed calendar) | **7 days** (floating per-user) | **30 days** (fixed) |
| Multiple testing | Holm-Bonferroni / Benjamini-Hochberg, **goal metrics only** | not obtained (docs 404'd) | **"Preferential Bonferroni"** — weighted α, primary metric's power independent of metric count |

Two opposite defaults (Bayesian vs frequentist) and a **4× spread on the CUPED window** across
three serious teams. Eppo's Preferential Bonferroni is genuinely novel and solves a real problem
(adding exploratory metrics stops costing you power on the primary).

**Best-explained threshold in the corpus**: Eppo justifies α=0.001 for SRM with three reasons,
including the self-aware *"The SRM diagnostic is performed every time experiment results are
updated, yet the test is not sequentially valid"* — i.e. they acknowledge their own health check
is a repeated test and compensate.

**Notable absence, grep-verified**: C1 searched GrowthBook's entire `docs/docs/` tree for
"quasi-experiment", "diff-in-diff", "switchback", "interleaving", "synthetic control",
"regression discontinuity" → **zero matches**. GrowthBook teaches randomized experiments only.
Channel D's quasi-experimental coverage is confirmed non-duplicative.

---

## 3. Analysis libraries and their encoded assumptions

Full inventory (30+ libraries): `_raw/github-analysis-libs.md`.

The controller's question was "what does the code *encode*". The answer that matters most:

### 3.1 The defaults are permissive, and three teams disagree about correction

| System | Multiple-comparison correction | Evidence |
|---|---|---|
| **PostHog** | **None at all** — and documents it | *"PostHog **does not** apply multiple-comparisons correction"* |
| **GrowthBook** | Available, **off by default** | `p_value_corrected: bool = False` |
| **Booking.com** | **Šidák, built in** | `get_alpha_sidaks_correction()` = `1−(1−α)^(1/variants)` |
| **ExpAn** (2016) | Both Bonferroni **and** Benjamini-Hochberg | `expan/core/correction.py` |

A reader running five metrics on GrowthBook's defaults faces roughly the ~23% any-false-positive
rate that PostHog documents — with no warning from either tool. **This is adjudication territory:
the pack's job is not to pick a vendor but to tell the reader the knob exists, is usually off, and
what it costs.**

### 3.2 Other encoded assumptions worth teaching

- **GrowthBook's sequential tuning parameter defaults to 5,000** (`SequentialConfig`), confirmed
  independently in code (me) and docs (C1). In this family of confidence sequences that constant
  is *the sample size at which the sequence is tightest*. **Always-valid does not mean
  assumption-free — the assumption moved into a tuning constant**, and nothing surfaces it.
  Why 5,000 specifically remains **UNTRACED** in both code comments and docs.
- **GrowthBook's Bayesian prior is improper by default**: `GaussianPrior(..., proper: bool = False)`.
  C3's verdict is fair: *"Bayesian in name, near-frequentist by default."*
- **`MidExperimentPower` returns `upper_bound_achieved: bool`** alongside `additional_users` —
  a machine-checkable "this is not reachable" verdict. This is the honesty gate the wedge argues
  for, already existing in MIT code and surfaced by nobody's UI.
- **α = 0.10, not 0.05, in two independent small-N tools**: Booking's calculator
  (`falsePositiveRate: 0.1`) and Meta's GeoLift (`alpha = 0.1` throughout `R/pre_test_power.R`).
  Both operate where units are scarce. A sourced counter-example to "α is always 5%".
- **`statsmodels` refuses to assume**: its solvers require `alpha` explicitly and never default
  `power=0.8`. A clean contrast with calculators that hardcode both.
- **Booking's `tTest` path uses the normal distribution throughout** (`jstat.normal.*`, no
  t-distribution in the file) and assumes **equal variance** (`variance = 2*sd²`) — while PostHog
  explicitly uses **Welch's** t-test to handle unequal variance. Same nominal test, different
  assumptions.

### 3.3 SRM thresholds — a real convergence with a principled dissent

Four independent platforms, all first-party sourced, all re-verified:

| Platform | Threshold | Semantics |
|---|---|---|
| GrowthBook | **p < 0.001** (customizable) | shows warning; two separate doc files agree |
| Eppo | **α = 0.001** | Pearson chi-squared, with a 3-reason justification |
| PostHog | **p < 0.001** | chi-squared once exposures ≥ 100; **I verified verbatim** |
| **Mozilla** | **p < 0.01**, sustained | *"a sustained period of enrollment for which the p-value is less than 0.01… cause for further **investigation**"* |

Three commercial platforms converge on 0.001 as an automatic flag. Mozilla — non-commercial,
publishing its reasoning openly — uses a looser threshold **and softer semantics** (investigate,
not invalidate) plus a duration requirement. Report it as **convergence-with-a-dissent**, not as
a universal constant. The dissent is arguably the better-reasoned position.

### 3.4 Two structural negatives

- **Retention/cohort analysis has no canonical open-source library.** C3's searches returned only
  sub-10-star tutorial notebooks. Unlike CUPED or sequential testing, retention never converged on
  shared tooling — it remains ad-hoc SQL per shop. This *supports* (does not prove) the thesis that
  retention **definition** is under-taught rather than over-tooled.
- **A third retention definition exists in code.** `lifelines` (MIT, 2,600★) frames retention as
  **survival analysis with censoring** — distinct from both N-day and rolling retention, and it
  handles "hasn't churned yet" correctly rather than forcing a fixed window. The teachable split is
  **three-way**: N-day (binary, fixed window) · rolling/bracketed (any activity in window) ·
  survival (censored time-to-churn).

### 3.5 Geo-experiments: the hard part is design, not estimation

In GeoLift, `R/pre_test_power.R` is **77 KB** against `post_test_analysis.R` at **27 KB**. Power
analysis and market selection are ~3× the estimator. This inverts the naive assumption that the
estimator is the clever part, and it is a teaching point in its own right. Google's
`trimmed_match` states the problem in its own README: *"in GeoX, the number of geos is usually
small; moreover, there is often severe heterogeneity across geos, which makes traditional
regression adjustment less reliable."*

Both `google/matched_markets` and `google/trimmed_match` carry *"This is not an officially
supported Google product. For research purposes only."* — preserve that if either is cited.

---

## 4. Lineage: PlanOut → the modern tier

Detail: `_raw/github-flags-lineage.md` §6.

**PlanOut** (`facebookarchive/planout`, 1,689★, **archived**, last push 2021-03-19, **BSD**) was
an experiment-assignment **language**, backed by a real paper (Bakshy, Eckles, Bernstein,
*"Designing and Deploying Online Field Experiments"*, WWW 2014, arXiv:1409.3174) cited in its own
README. What it established, and what happened to each idea:

| PlanOut concept | Fate |
|---|---|
| **Deterministic hashing on unit id + salt** | **Survived universally.** Every modern tool does it. OpenFeature renamed it **"Fractional Evaluation"** and dropped the word "salt" entirely |
| **Automatic exposure logging as a runtime obligation** | **Survived, relocated.** `log_exposure()` became "exposure events" — moved from the assignment *language* into the analytics *product* |
| **Namespaces / orthogonal experiment slots** | **Largely died.** No modern OSS tool surveyed offers general-purpose orthogonal slot partitioning. PostHog's holdouts are narrower and `ee/`-gated |
| **The DSL-with-a-compiler idea** | **Genuinely abandoned.** Everyone uses JSON/YAML or UI rule builders now |

**The namespace regression is a candidate wedge.** Managing interaction between *concurrent*
experiments was a first-class primitive in 2014 and is not a documented first-class feature in any
modern OSS tool surveyed. Note the tension with GrowthBook's house position that *"meaningful
interactions are actually quite rare"* (UNTRACED, no study cited) — the industry may have dropped
the primitive because the problem is rare, or it may have dropped it and stopped checking. Worth
resolving rather than asserting.

**The graveyard, with a methodological warning.** `intuit/wasabi` (1,140★, Apache-2.0) and
`zalando/expan` (344★, MIT) both read `archived: false` while being unambiguously dead.

**ExpAn deserves rescue from the graveyard.** C3 read its source: it implements **O'Brien-Fleming
alpha-spending group-sequential testing**, a Bayesian early-stopping path via `pystan`, delta-method
ratio metrics, bootstrap CIs, explicit `estimate_sample_size(x, mde, r, alpha, beta)`, chi-squared
for SRM, **and** both Bonferroni and Benjamini-Hochberg. A 2016 MIT library that anticipated most
of what 2026 platforms ship — and it predates the CUPED-everywhere era.

**One clear survivor**: `splitrb/split` (2,709★, MIT) still actively pushed 2026-07-27.

**Optimizely's Stats Engine — the landmark peeking fix — was never open-sourced.** C2 checked all
40 `optimizely/*` repos: every one is a client SDK, demo, or unrelated tooling. **The paper is
public; the production implementation is not.**

---

## 5. Small-sample honesty: the strongest evidence in this channel

### 5.1 Booking.com's own defaults, reproduced exactly

`bookingcom/powercalculator` (91★, **MIT**, single root `LICENSE`) — Booking's own experiment
runtime calculator, math in the open at `src/js/math.js` and `src/store/modules/calculator.js`.

Shipped default state: `baseRate: 0.1`, `falsePositiveRate: 0.1`, `targetPower: 0.8`,
`runtime: 14`, `visitorsPerDay: 40098`, `relativeImpact: 0.02`, **`sample: 561364`**.

I re-implemented their `sample_size_calculation` and computed the requirement independently:
variance 0.181596, mean_diff 0.002, z(0.8)=0.8416, z(0.05)=1.6449, per group 280,682 →
**total 561,364**. **Exact match to the shipped constant**, which confirms every parameter reading
(including that α is 0.10 two-sided and `beta` is the type-II rate). Their defaults are internally
consistent: 40,098 × 14 = 561,372.

**Booking's own default question — detect a 2% relative lift on a 10% conversion rate, at 80%
power and a *permissive* α=0.10 — costs 561,364 visitors:**

| Visitors/day | Days to power Booking's default scenario |
|---|---|
| 40,098 (Booking's default) | **14 days** |
| 5,000 | 112 days |
| 1,000 | 561 days (1.5 years) |
| 500 | **1,123 days (3.1 years)** |

Three properties make this exceptionally shippable: it is **pure arithmetic from published
defaults** (nothing to go stale, no vendor sample, no benchmark); it is **an incumbent testifying
against the reader's interest**; and it **generalises the right way** — not "don't experiment" but
"at your traffic a 2%-relative question is unanswerable, so ask a bigger one."

Corroborating scale marker from a completely different source: Mozilla's own SRM documentation
screenshot is captioned *"Daily active population is 2.152m control, 2.150m treatment."* The canon
is written by people with millions of users per arm.

### 5.2 And the incumbents have no branch for readers who can't wait

PostHog's suite, the best incumbent found, advises *"wait. Run longer or increase rollout."* For a
reader who can do neither, there is no path. Its `creating-experiments` flow goes hypothesis → flag
→ metrics with **no sample-size or MDE step**; the running-time calculator appears only later, in
the *diagnostic* path, as something you should already have used. **The honest n=small toolkit
remains uncontested.**

### 5.3 The traffic-floor folklore contradicts itself by 25×

Two rules of thumb for the same question, from two good sources:

- GrowthBook's agent skill: **"≥ 200 conversions per variation"** for proportion metrics
- `rampstackco/claude-skills` `cro-optimization`: **"under ~5,000 monthly conversions per variant"**
  is the floor below which you shouldn't test

**~25× apart**, both uncited, both about "do I have enough traffic." Neither is wrong-in-principle;
both are incomplete, because the true answer is a function of baseline rate and MDE. **Any single
number the pack cites must carry its assumptions or it becomes the next entry in this table.**

---

## 6. Acquisitions — re-verified from primary sources

I did this myself rather than inherit it; both are load-bearing and easy to ship wrong.

### 6.1 Statsig → OpenAI: confirmed, **2025-09-02**

Primary: Statsig's own blog, `statsig.com/blog/openai-acquisition`, dated **Tuesday, September 2,
2025**: *"we've signed a definitive agreement for Statsig to join OpenAI"* — a **signed agreement**,
not a completed close, and C1 found it was *"subject to customary closing conditions, including
regulatory approval."* Vijaye Raji becomes **CTO of Applications** at OpenAI. Statsig: *"will
continue to provide our services and invest in our core products."* SDKs still actively pushed
(2026-07). **The canon's "~Sept 2025" was correct.**

OpenAI's own page (`openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig/`)
**403s to WebFetch and to curl-with-browser-UA** — cited as existing, never quoted. Both C1 and I
hit this independently. A browser-based fetch would be needed for an OpenAI-side quote.

> **Methodology warning.** My first WebSearch summary asserted the acquisition was announced in
> **December 2025**. The primary source says **September 2**. The summary was wrong by three
> months. Separately, my first attempt at Statsig's blog used a guessed slug, 404'd, and led me to
> a **false negative** — I briefly concluded there was no acquisition, reinforced by statsig.com
> still marketing OpenAI as a *customer* ("Trusted by thousands of companies, from OpenAI to
> series A startups"). The continuity arrangement explains that copy. **Two different failure
> modes on one fact; only the primary source settled it.**

### 6.2 Eppo → Datadog: confirmed, **2025-05-05/06**, and now rebranded

C1 dated this 2025-05-06; I had 2025-05-05. **Both are right** — different artifacts:

- **Press release** *"Datadog Acquires Eppo…"*: **May 5, 2025** — *"has **acquired** Eppo"*
  (completed, unlike Statsig's signed-agreement language). No terms disclosed.
- **Blog post** *"Datadog acquires Eppo"*: **published May 6, 2025**.

**Material update the canon lacked**: Eppo now ships as **Datadog Experiments**, *"now generally
available"* per a Datadog press release dated **April 2, 2026**. geteppo.com states *"Eppo is now
Datadog Experiments."* **Any reference to Eppo as a current independent product is stale.**

---

## 7. Growth vs operate — Tamás's question, answered with evidence

Quote bank: `_raw/github-flags-lineage.md` §4 and §7; vendor docs in `_raw/github-growthbook-statsig.md` §2.9.

### 7.1 The seam is real at the extremes, and the market erases it in the middle

**Cleanest separation found anywhere — Optimizely, by product name, on one SDK:**

> *"Optimizely **Feature Experimentation** is an A/B testing and feature management tool… that
> enables you to **experiment at every step**."* … *"Optimizely **Rollouts** is free feature flags…
> You can easily roll out and roll back features… **mitigating risk** for every feature on your
> roadmap."*

A vendor independently arrived at, and branded, exactly the charter's seam.

**GrowthBook names it in doctrine, which is even better for citation** (`features/safe-rollouts.mdx`):

> *"Safe Rollouts use the same analysis engine as GrowthBook experiments but are designed for
> **operational decision-making, not learning**. The primary goal is to ensure a safe release, not
> to measure long-term impact."*
> *"Safe Rollouts bias towards **action**. If you're more uncertain about a feature and want to
> **learn about its impact**, run a regular Experiment instead."*

And the decision rules genuinely differ: a Safe Rollout's failure threshold *"is always set to
zero — as soon as there's statistical certainty that a metric is being harmed **at all**"*, and if
inconclusive at the end, **ship** (*"there's no clear evidence that the feature is harmful"*).
**That inverts the experiment default, where inconclusive means don't act.** This is the single
best doctrinal statement of the seam in the corpus.

**The purists never borrow the other side's vocabulary.** Unleash's README contains **zero**
occurrences of "experiment", "A/B", "hypothesis" or "statistical" (grep-verified). Wasabi and
PlanOut contain no "canary" or "kill switch". The seam is legible where tools commit.

**The middle actively fuses them.** GO Feature Flag taxonomises A/B testing *as a kind of rollout*
— *"**Experimentation rollout** — serve your feature only for a determined time (perfect for A/B
testing)"* — listed beside "scheduled rollout". Bucketeer sells the continuum: *"Seamlessly
transition from experiment to full rollout."* Neither treats the fusion as a hazard.

**And now an observability vendor is absorbing experimentation outright.** Datadog Experiments:

> *"pairs best-in-class statistical methods with **real-time observability guardrails** so
> companies can test what matters, move quickly and **ship with confidence**."*
> *"Built-in guardrails, real-time feedback and shared standards help teams **catch issues early,
> protect users** and keep experiments valid."*
> *"By tying experiments to **RUM, Product Analytics, APM and logs**… **reduce risk** without
> slowing innovation."*

Read the verbs: *ship with confidence · catch issues early · protect users · reduce risk*. **That
is the operate framing applied to experimentation.** The vendor's commercial position, not the
underlying method, determines the framing.

**Nobody arbitrates.** OpenFeature — the CNCF vendor-neutral spec, the one body positioned to
settle this — resolves it **by scope exclusion**. Its glossary has no entry for experiment,
hypothesis, randomization guarantee, sample size, significance, or assignment. Its closest concept,
**Fractional Evaluation**, is defined as bare mechanics: *"Pseudorandomly resolve flag values using
a context property… based on a configured proportion or percentage (ie: 50/50)"* — no salt, no
namespaces, no exposure-logging obligation. Its only nod to experimentation is a `track()` hook
marked **experimental status**. **There is no vendor-neutral contract for what "experiment" means
at the infrastructure layer.**

### 7.2 Structural evidence, independent of marketing

Two companies that do both at scale built them as **separate things**: PostHog separates
`products/experiments/` from `products/feature_flags/` (learning-flavoured skills vs hygiene
skills: `cleaning-up-stale-feature-flags`, `finding-deleted-feature-flags`); Booking.com
open-sourced its canary tool (`shipper`, 729★) and its experiment calculator (`powercalculator`)
as unrelated projects sharing no vocabulary. One vendor that sells observability merged them.

> **Correction to my own reading.** I initially cited PostHog's directory split as clean seam
> evidence. C2 is right to complicate it: within PostHog's product model, "rollout" is a
> *sub-parameter of an experiment* (traffic share and split), not an opposed concept — and two
> WebFetch probes found **no** "when to use a rollout vs an experiment" doc section anywhere in
> PostHog's docs. The split is architectural, not doctrinal. I have kept the structural point
> because it stands on its own, but it is weaker than GrowthBook's explicit doctrine.

### 7.3 "Canary" collides across three meanings

C2 found PostHog uses "canary" **twice, for neither of the usual meanings** — both are SRE-style
synthetic self-checks on PostHog's own pipeline (`canary_logic.py`: *"detects broken or unstable
precomputed experiment results in production"*). If the pack or `/operate` uses "canary" as a term
of art, disambiguate: (a) canary **release** / progressive rollout (operate-canonical),
(b) canary **monitor** / synthetic self-check (also operate, different mechanism), (c) a
canary-sized **experiment** (small-percentage A/B test — growth).

### 7.4 The seam statement the evidence supports

"A canary is risk containment; an A/B test is learning" is correct but **incomplete** — the newest
products deliberately do both at once, and the market is merging them further. The honest teaching
is about **which question you are entitled to answer from a given setup**, not which tool you
opened. The pack can state plainly what the ecosystem does not: *a flag rollout is not an
experiment unless it has a pre-registered hypothesis, randomized assignment, a defined metric
readout, and a validity check.* No source in this corpus says that in one place.

Two flag taxonomies converged on this independently — `rampstackco/claude-skills`'s
`feature-flagging` skill names five flag types (release / **experiment** / **operational** /
permission / configuration) with the rule *"mixing flag types is the root cause of most flag
mess… create a new flag and migrate. Do not overload an existing one"*, and GrowthBook's agent
skills draw the same line. Both likely descend from **Pete Hodgson's "Feature Toggles"** on
martinfowler.com — **channel D should trace that ur-source rather than trusting either paraphrase.**

---

## 8. Skill-repo findings — the incumbent question, answered

Detail: `_raw/github-skill-repos.md` §2–§3; PostHog suite in `_raw/github-lead-slice.md` §2.

### 8.1 A vendor pattern nobody was looking for: shipped agent skills inside product repos

I found PostHog ships **71+ `SKILL.md` files** under `.agents/skills/` plus per-product
`products/*/skills/` — same architecture as this family (frontmatter with TRIGGER / DO NOT TRIGGER,
plus `references/`). I redirected C4 to widen its search accordingly, and **C4 confirmed a second
vendor**: GrowthBook ships its own suite at `packages/back-end/src/agent/skills/{experiments,feature-flags}/`.

**Both are MIT** (both sit outside their repos' enterprise carve-outs).

Two grades of negative here, and they must not be conflated:

- **Genuine negatives** — `Unleash/unleash` and `Flagsmith/flagsmith` were checked properly (real
  repos, full recursive trees enumerated) and ship **no** agent-skill directory. That is a real
  finding: the pattern is not universal among flag vendors.
- **Unexplored, not absent** — Statsig, Optimizely, LaunchDarkly, Amplitude, Mixpanel, Heap,
  Braze, Customer.io, Pendo and Iterable returned 404/empty under one or two **guessed** org/repo
  names each. Repo-name guessing is unreliable, so this is **not** evidence of absence. Closing it
  needs a code search scoped per vendor org (`gh search code ".agents/skills" org:<vendor>`), which
  C4 deprioritised in favour of the folklore harvest.

So the defensible claim is: **two vendors confirmed shipping in-repo experimentation skill suites,
two flag vendors confirmed not to, and ten vendors genuinely unchecked.**

### 8.2 The incumbents carry a real validity layer

PostHog's `diagnosing-experiment-results/references/interpretation.md` is an 11-item taxonomy:
peeking · low-volume variance · A/A significance · multiple comparisons · Bayesian traps ·
frequentist traps · Bayesian-vs-frequentist confusion · inconclusive-but-trending · "significance
reached" is not a ship signal · ship-variant default ignores metrics · external calculator
disagrees. Quality samples:

> *"Watching results live and ending the experiment the moment it looks significant **inflates
> false positives** — you're giving randomness more chances to look significant."*
> *"**'96% chance to win'** is about *direction*… **not** the magnitude of the lift."*
> *"**Overlapping confidence intervals do not imply non-significance in Bayesian.**"*
> *"with 5 independent metrics, the chance of at least one false-positive is ~23%; with 10, ~40%."*
> — arithmetic **independently verified**: 1−0.95⁵=0.2262, 1−0.95¹⁰=0.4013.

It also warns against **its own UI**: the end-experiment modal pre-fills the first non-control
variant with *"no significance check, no primary-metric direction check, and no guardrail check"*,
and notes this *"matters most for sophisticated users who set guardrails for a reason — they are
exactly the population the default will mislead."*

GrowthBook's skill adds a point found nowhere else: *"Activation metrics downstream of variation
differences silently bias results **without tripping SRM**"* — i.e. **SRM can pass while the
experiment is biased**, because the activation metric defining the analysis population is itself
treatment-affected. Its `experiment-analyze.md` runs six data-quality checks *before* any
interpretation is permitted.

**Borrowable mechanism (the idea, not the text):** PostHog tags every diagnostic `[HIGH]`/
`[MEDIUM]`/`[LOW]` by verification strength — *"`[HIGH]` is verified directly in PostHog code…
Treat `[LOW]` items as hypotheses to test, not facts to assert."* A confidence-tagging convention
for skill content, directly relevant to this family's never-ship discipline.

### 8.3 The strongest standalone competitor, and its hard gaps

`rampstackco/claude-skills` — **508★, MIT** (verified), 103 skills, pushed 2026-07-21. Its
6-skill experimentation cluster (`experiment-design`, `experimentation-analytics`,
`feature-flagging`, `experimentation-platform-orchestrator`, `data-warehouse-experimentation`,
`cro-optimization`) genuinely clears the validity bar: MDE/power, **what NOT to A/B test**,
SUTVA/switchbacks, sequential testing, delta method, pre-commitment vs p-hacking, and the
blended-attribution trap.

**But C4 enumerated the full tree: no retention, no churn, no referral/viral, no
pricing/monetization, no PLG.** It is 6 of 103 skills in a *website-lifecycle* pack.

### 8.4 The corrected wedge

> Wedge hypothesis 3 as written — "incumbents lack the validity layer" — is **false**, and the
> pack must not claim it. Four independent sources carry real rigor.
>
> The true, falsifiable statement: **nobody has unified experiment validity with retention,
> referral, pricing and PLG under one coherent growth pack.** The validity layer exists in
> scattered pockets; the *integration across the canonical 17* does not exist anywhere. C4's
> falsifiable absence claim lists 12 exact search queries backing this.

This is a **narrower and better-evidenced** wedge than the canon assumed — and it is the same
shape as quality-skill's justified narrow wedge. It also means the pack must treat PostHog,
GrowthBook and rampstack **respectfully and cite them**, as the marketing pack did with its
42.5k★ incumbent.

### 8.5 Awesome-lists: folklore density confirmed, and six empty namespaces

| Repo | Stars | Last push | License (from file) | Verdict |
|---|---|---|---|---|
| `matteocourthoud/awesome-causal-inference` | 1,185 | 2026-04-21 | **MIT** | Best in sweep — curated, fresh, 9 categorized files |
| `bekatom/awesome-growth-hacking` | 520 | 2024-05-09 | **CC BY 4.0** (content licence) | **Near-100% vendor/listicle spam. Zero validity content.** |
| `dojinkimm/awesome-ab-testing` | 38 | 2023-08-19 | **NO LICENSE = all rights reserved** | High-signal *pointers* (see §10), stale |
| `pheature-flags/awesome-feature-flags` | 5 | 2026-05-04 | **Unlicense** | Tiny, but points at the Fowler/Hodgson ur-source |

**Star count and content quality are inversely related here**: the 520★ growth-hacking list is the
weakest content in the table; the 38★ A/B list is the most useful.

**Six namespaces the charter asked about are literally or functionally empty on GitHub** (zero
results, falsifiable): `awesome-experimentation` (a 0★ 2019 placeholder),
`awesome-conversion-rate-optimization`, `awesome-product-analytics`, `awesome-plg`,
`awesome-retention`, `awesome-referral-marketing`.

### 8.6 Folklore harvest — the falsification-strip shortlist

Full catalogue: `_raw/github-analysis-libs.md` §8 and `_raw/github-skill-repos.md` §5.

**The strongest find: "100 conversions per variant", repeated verbatim across nine unrelated
repos**, none citing a paper, a power calculation, an MDE, or an alpha — `TheCraigHewitt/seomachine`,
`LeoYeAI/openclaw-master-skills`, `adcontextprotocol/adcp`, `borghei/Claude-Skills`,
`ominou5/funnel-architect-plugin`, `seb1n/awesome-ai-agent-skills`, `Vrooli/Vrooli`,
`clawic/skills`, `majiayu000/claude-skill-registry`. Almost all are LLM-agent skill packages —
**this folklore is propagating through generated and copy-pasted "best practices" content.** It is
directly falsifiable with the power libraries in the same corpus.

| Claim | Where | Independent sources | Status |
|---|---|---|---|
| "100 conversions per variant" | 9 skill repos (above) | **9** | UNTRACED — prime target |
| "≥200 conversions per variation" | GrowthBook agent skill | 1 (attributed to own docs) | Traceable chain; re-verify at primary doc |
| "under ~5,000 monthly conversions per variant" | rampstack `cro-optimization` | 1 | UNTRACED — and 25× from the above |
| "daily peeking on a 28-day test → FPR can exceed 30%" | rampstack, **twice in one repo** | **1** (self-repetition, not corroboration) | UNTRACED — channel D to trace |
| CUPED "30–50% narrower CIs" | rampstack | 1 | UNTRACED at primary-paper level. **Not stated by ANY of the 3 CUPED implementations read** (gbstats, tea-tasting, meterstick) — all defer to the paper |
| "Industry success rate ~33%" | GrowthBook docs | 1 | UNTRACED **by GrowthBook**; do not double-count with Kohavi |
| "run for 2 weeks" | 1 repo; also **Booking's `runtime: 14` default** | weak | Under-corroborated in code; note the engineering default exists |
| "rollouts under 4 hours are too fast"; "50 flags ≤ 5ms" | rampstack `feature-flagging` | 1 each | UNTRACED |

**Two named-source traceables worth keeping**: Netflix ~40% CUPED variance reduction (Xie &
Aurisset, KDD 2016) and Microsoft ≈+20% traffic equivalent (ExP blog, 2022) — both cited *by*
GrowthBook, neither GrowthBook's own measurement. GrowthBook's own headline *"20% or more
traffic"* is **its marketing framing of others' numbers** — do not present it as a GrowthBook
result.

**Also catalogued**: `dojinkimm/awesome-ab-testing` still lists **Google Optimize** as a live tool
(sunset 2023) — a concrete illustration of how a frozen awesome-list silently accumulates dead
recommendations. And `pricing-strategy` skills name-drop **Van Westendorp** as a trigger keyword
with **zero methodology** in the body — the name-dropping-without-substance pattern, alongside the
numeric folklore.

---

## 9. Licenses master list

**Read from the file's own text.** Grouped by what the pack may do with them.

### 9.1 Safe to cite and lift (permissive, verified)

| Repo | License | File(s) |
|---|---|---|
| growthbook/growthbook **`packages/stats/`** | **MIT** (own file) | `packages/stats/LICENSE` |
| PostHog/posthog (**everything outside `ee/`**) | **MIT Expat** | `LICENSE` + 5 MIT sub-files |
| bookingcom/powercalculator | **MIT** | `LICENSE` |
| rampstackco/claude-skills | **MIT** | `LICENSE` |
| matteocourthoud/awesome-causal-inference | **MIT** | `LICENSE` |
| zalando/expan · splitrb/split · e10v/tea-tasting · py-why/dowhy · py-why/EconML · lifelines | **MIT** | verified per repo |
| uber/causalml · google/CausalImpact · google/matched_markets · google/trimmed_match · bucketeer-io/bucketeer · open-feature/spec | **Apache-2.0** | verified per repo |
| Statsig SDKs | **ISC** | verified on 3 repos |
| Eppo SDKs | **MIT** | verified on `eppo-multiplatform` |
| facebookarchive/planout | **BSD (2014)** | `LICENSE` |
| mozilla/experimenter · mozilla/jetstream | **MPL-2.0** | `LICENSE` (jetstream: API-only, minor gap) |
| pheature-flags/awesome-feature-flags | **Unlicense** | `LICENSE.md` |

### 9.2 Do NOT treat as permissive

| Repo / path | Status |
|---|---|
| **facebookincubator/GeoLift** | **CONTRADICTORY — `LICENSE.md` says MIT, `DESCRIPTION` says `GPL (>= 2)`.** See below. |
| growthbook `packages/{back-end/src,front-end,shared/src}/enterprise` | **GrowthBook Enterprise License** — proprietary, production use requires paid seats, redistribution forbidden |
| PostHog `ee/` | **PostHog Enterprise License** — same shape |
| flipt-io/flipt (core) | **FCL-1.0-MIT** — Fair Core, not OSI-approved, converts to MIT after a delay |
| Unleash/unleash | **AGPL-3.0** — copyleft; network use triggers obligations |
| **dojinkimm/awesome-ab-testing** | **NO LICENSE FILE** → all rights reserved |
| **mozilla/experimenter-docs** | **NO LICENSE** → all rights reserved, *despite being the best teaching content found* |
| bekatom/awesome-growth-hacking | **CC BY 4.0** — a *content* licence, requires attribution |
| majiayu000/claude-skill-registry | **Unchecked** — a 64k-entry scrape-mirror; trace to origin repos, never cite the aggregator |

### 9.3 The GeoLift finding — and a rule the family is missing

GeoLift declares its license **twice, contradictorily**:

- `LICENSE.md` (root): **MIT**, "Copyright (c) Meta Platforms, Inc. and its affiliates"
- `DESCRIPTION` (R package metadata, v2.7.5): **`License: GPL (>= 2)`**

For an R package, `DESCRIPTION` is what R's own tooling and CRAN treat as authoritative. C3
hypothesised the GPL propagated from the `augsynth`/`gsynth` dependencies; **I tested that and
falsified it** — both are `License: MIT + file LICENSE`. The contradiction is unexplained.

**Verdict: GeoLift's license is AMBIGUOUS. Do not call it MIT or "safe to lift."** Citable as a
source of method; not vendorable without resolving this with Meta. (No `PATENTS` file exists —
that part of my original read holds.)

> **Proposed rule change.** The family's licensing discipline is "open every LICENSE file." That
> was **insufficient here**. It needs a clause: **also read the package-ecosystem manifest** —
> `DESCRIPTION` (R), `package.json` (Node), `pyproject.toml`/`setup.cfg` (Python), `Cargo.toml`
> (Rust). A repo can satisfy "every LICENSE file says MIT" and still ship different terms to its
> ecosystem.

**Tally on the API-lies rule: 7 repos returned `NOASSERTION`/`null` with readable license files**
(PostHog, GrowthBook, Flipt, LaunchDarkly js-client-sdk, PlanOut, awesome-growth-hacking,
Tencent/fast-causal-inference), plus `dojinkimm/awesome-ab-testing` returning `null` because there
genuinely is none. And GeoLift shows the API can be **confidently right about the wrong file**.

---

## 10. Handed to other channels

- **Channel D (web/papers)** — trace and close: the **"33%" success rate** (GrowthBook cites
  nobody); **CUPED 30–50%** to Deng/Xu/Kohavi/Walker 2013 directly (no library asserts it);
  **peeking "30% FPR"**; the **80%-power "clinical trials standard"** (GrowthBook gives no
  clinical citation); **Twyman's actual identity** (GrowthBook's attribution is wrong);
  **Pete Hodgson's "Feature Toggles"** as the flag-taxonomy ur-source; and
  **`matteocourthoud/awesome-causal-inference`** (MIT, fresh, 9 categorized files) as the single
  highest-value unopened resource for quasi-experimental papers.
- **A genuinely fresh, non-Kohavi-orbit primary-source cluster**: `dojinkimm/awesome-ab-testing`
  links **eight Korean tech-company experimentation engineering blogs** — Karrot, Bank Salad
  ("Birth of a Genuine Experiment Organization"), Devsisters, Bucketplace, Hyperconnect ("ABzar",
  a *fair* A/B test system), Hackle, Mathpresso ("QXP"), Woowa Brothers. Under-cited in English
  corpora. Titles and URLs are in `_raw/github-skill-repos.md` §7.
- **Booking's interference paper**: `bookingcom/uplift-interference-simulator` names
  *"Qini curve estimation under clustered network interference"* (Karlsson, van den Akker, Moraes,
  Proença, Krijthe) — a named-author primary source for the SUTVA/interference section.
- **Eppo names Delivery Hero** on switchbacks, a second named company beyond DoorDash/Lyft.
- **Spotify: negative result.** `gh search repos --owner=spotify experiment` → `[]`. Their
  experimentation content (salted sequential testing, "we don't peek") is blog-only — channel D's,
  not GitHub's. Recorded so it is not re-searched. (`spotify/confidence`, 294★, Apache-2.0, exists
  but is a stats-convenience library, not their platform.)
- **GitLab handbook: dead end.** The historical repo path 404s and
  `handbook.gitlab.com/handbook/product/growth/` returns 404. Unresolved.

## 11. Open questions

1. **Statsig's SRM threshold and multiple-testing method** — docs pages named in Statsig's own nav
   404'd on every slug tried. **Do not assume it matches the 0.001 convergence.**
2. **Why 5,000** for GrowthBook's sequential tuning parameter — UNTRACED in both code and docs.
3. **GeoLift's license contradiction** — unresolved; needs Meta.
4. **Whether orthogonal experiment-slot management survives in commercial platforms** (it died in
   OSS, §4) — checkable via Statsig/Eppo docs, outside GitHub scope.
5. **The vendor `.agents/skills/` sweep is incomplete** — absence for Statsig, Optimizely,
   LaunchDarkly, Amplitude, Mixpanel et al. rests on repo-name guessing, not a proper code search.
6. **PostHog's `ee/` boundary is a live-repo fact, not a historical one** — spot-check before
   shipping any claim that its experiments product is MIT.
