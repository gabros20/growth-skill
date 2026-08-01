# Lead slice — grw-github (channel C sub-orchestrator, opus)

As-of date for every figure below: **2026-08-01**. Method: `gh api` (repo metadata + full recursive
git-tree enumeration) and `curl` against `raw.githubusercontent.com` for license and content files.
No WebFetch, no WebSearch consumed in this section. Every license verdict below was read from the
**license file's own text**, not from the GitHub license API.

This file holds the sub-orchestrator's own research, done while workers C1–C4 ran. It deliberately
overlaps the three strategic license questions assigned to workers so the report can carry an
**independent cross-check** rather than an unverified restatement.

---

## 1. The three strategic license verdicts (read from file, independently)

### 1.1 Headline: the GitHub license API lies exactly as the charter warned

| Repo | GitHub API `license.spdx_id` | Truth from the LICENSE file |
|---|---|---|
| growthbook/growthbook | `NOASSERTION` ("Other") | MIT Expat core + 3 dirs under a proprietary GrowthBook Enterprise License; stats engine separately MIT |
| PostHog/posthog | `NOASSERTION` ("Other") | MIT Expat core + `ee/` under proprietary PostHog Enterprise License |
| facebookincubator/GeoLift | `MIT` | MIT (Meta Platforms) — API correct here, but the file is `LICENSE.md`, not `LICENSE` |

Two of the three return `NOASSERTION`. **Never quote the API's license field in the pack.**

Note the asymmetry: the API being *right* about GeoLift is not evidence the API can be trusted — it
is right by luck of a single-license repo. The rule stands: open the file.

### 1.2 GrowthBook — richer than the canon assumed (FIVE license files, not one)

Repo: `growthbook/growthbook` · 8,082 stars · 807 forks · not archived · created 2021-05-07 ·
last push 2026-08-01 (actively developed, same day as this research).
Description (verbatim): "Open Source Feature Flags, Experimentation, and Product Analytics".

Every license file in the tree (full recursive enumeration, excluding `.ts`/`.test.ts` source files
whose names merely contain "license"):

| Path | License (from the file's own text) |
|---|---|
| `LICENSE` | Umbrella: MIT Expat, **with carve-outs** (see below). Copyright (c) 2025 GrowthBook, Inc. |
| `packages/back-end/src/enterprise/LICENSE` | GrowthBook Enterprise License (proprietary) |
| `packages/front-end/enterprise/LICENSE` | GrowthBook Enterprise License (proprietary) |
| `packages/shared/src/enterprise/LICENSE` | GrowthBook Enterprise License (proprietary) |
| `packages/stats/LICENSE` | **plain MIT** (Copyright (c) 2024, GrowthBook, Inc.) |

The root `LICENSE` states the carve-out verbatim:

> "All content that resides under the following directories of this repository are licensed under
> the GrowthBook Enterprise License, which is defined in the LICENSE file contained in the
> directories.
>   - packages/back-end/src/enterprise
>   - packages/front-end/enterprise
>   - packages/shared/src/enterprise"

and that everything outside those directories is "MIT Expat".

The Enterprise License text is a production-use-requires-a-paid-seat license, not a source-available
copyleft. Key restriction, verbatim:

> "This software and associated documentation files (the "Software") may only be used in production,
> if you (and any entity that you represent) have agreed to, and are in compliance with, the
> GrowthBook Subscription Terms of Service … and otherwise have a valid GrowthBook Enterprise or Pro
> license for the correct number of user seats."

and

> "Subject to the foregoing, it is forbidden to copy, merge, publish, distribute, sublicense, and/or
> sell the Software."

It does carve out development/testing: "you may copy and modify the Software for development and
testing purposes, without requiring a subscription."

**STRATEGIC FINDING — the statistics engine is separately, plainly MIT.** `packages/stats/` carries
its own unqualified MIT license file and sits outside all three enterprise directories. This is the
package that implements GrowthBook's Bayesian and frequentist engines. For a skill pack that wants
to cite or teach from a real, production statistics implementation, **`packages/stats/` is the
cleanest liftable artifact in the entire experimentation-platform landscape** — MIT, self-contained,
and explicitly licensed twice over (once by falling outside the carve-out, once by its own file).
Worker C1 is extracting its teaching content; this license verdict is what makes that extraction
usable.

### 1.3 PostHog — the canonical multi-license case, confirmed exactly

Repo: `PostHog/posthog` · 37,425 stars · 3,122 forks · not archived · created 2020-01-23 ·
last push 2026-08-01.

Every license file in the tree:

| Path | License (from file text) | Note |
|---|---|---|
| `LICENSE` | MIT Expat with an `ee/` carve-out. Copyright (c) 2020-2026 PostHog Inc. | umbrella |
| `ee/LICENSE` | **PostHog Enterprise License (proprietary)** | the carve-out |
| `rust/LICENSE` | MIT (Copyright (c) 2023 PostHog) | |
| `packages/quill/LICENSE` | MIT (Copyright (c) 2026 PostHog Inc.) | |
| `products/desktop/LICENSE` | MIT (Copyright (c) 2026 PostHog Inc.) | |
| `tools/hogli/LICENSE` | MIT (Copyright (c) 2026 PostHog Inc.) | |
| `.github/actions/paths-filter/LICENSE` | third-party vendored | not PostHog's |
| `products/desktop/packages/electron-trpc/src/vendor/unpromise/LICENSE` | third-party vendored | not PostHog's |

Root `LICENSE`, verbatim:

> "All content that resides under the "ee/" directory of this repository, if that directory exists,
> is licensed under the license defined in "ee/LICENSE"."

The `ee/LICENSE` text is structurally the same paid-seat production license as GrowthBook's (both
are descendants of the same "Enterprise License" template that circulated among open-core companies
— the wording tracks near-identically, including "may only be used in production, if you … have a
valid … Enterprise license for the correct number of user seats").

**The carve-out is narrow: exactly one directory, `ee/`.** Everything under `products/` — including
the entire experimentation product and the agent skills discussed in §2 — is **MIT Expat**.

### 1.4 GeoLift (Meta) — **CORRECTED: the licence is CONTRADICTORY, not clean MIT**

> **Correction notice.** My first pass (below) concluded "plain MIT". That was **wrong — incomplete,
> not false**. Worker C3 found a second licence declaration I had not looked at, and on
> re-verification it contradicts the first. I then tested C3's proposed explanation and **falsified
> it**. The corrected verdict is in §1.4.0; the original single-file read follows it and remains
> accurate as far as it goes.

#### 1.4.0 The contradiction (verified by me, 2026-08-01)

GeoLift declares its licence in **two places that disagree**:

| File | Declared licence |
|---|---|
| `LICENSE.md` (repo root) | **MIT License**, "Copyright (c) Meta Platforms, Inc. and its affiliates." |
| `DESCRIPTION` (R package metadata, v2.7.5) | **`License: GPL (>= 2)`** |

Both read directly from `raw.githubusercontent.com`, 2026-08-01. This is not a subtle difference:
MIT is permissive, GPL-2+ is strong copyleft. For an R package, `DESCRIPTION`'s `License:` field is
the one R's own tooling (`R CMD check`, CRAN, `packageDescription()`) treats as authoritative, so a
downstream user who reads only the root `LICENSE.md` could reasonably believe they have MIT terms
while R's ecosystem metadata says otherwise.

**C3's proposed explanation is falsified.** C3 reasonably hypothesised that the GPL came from
GeoLift's `Imports:` of the synthetic-control packages `augsynth` and `gsynth` propagating a copyleft
obligation. I checked both directly:

- `ebenmichael/augsynth` → `DESCRIPTION`: `License: MIT + file LICENSE`
- `xuyiqing/gsynth` → `DESCRIPTION`: `License: MIT + file LICENSE`

**Both are MIT.** So the two named dependencies do not explain the GPL declaration. The contradiction
is unexplained by the dependency theory and appears to be an unreconciled inconsistency inside Meta's
own repo. (GeoLift imports 18 packages in total; I did not license-audit the remaining ones, so a
copyleft obligation could still arrive from another import — but the specific, plausible-sounding
explanation on offer is not the answer.)

**Verdict for the pack: GeoLift's licence status is AMBIGUOUS. Do not describe it as "MIT" or as
"safe to lift."** It is citable as a *source of method and documentation* (citing a public repo is
not a licence-triggering use), but any lifting of GeoLift code or vendoring of the package needs the
contradiction resolved with Meta first. This supersedes anything in §1.1's table, which listed
GeoLift as MIT on the strength of the root file alone.

This is also a methodology finding worth carrying: **the family's licensing rule needs a clause for
ecosystem-specific metadata.** "Open every LICENSE file" was not sufficient here — the
authoritative declaration for an R package lives in `DESCRIPTION`, for a Node package in
`package.json`, for Python in `pyproject.toml`/`setup.cfg`. A repo can satisfy "every LICENSE file
says MIT" and still ship a different licence to its actual package ecosystem.

#### 1.4.1 Original single-file read (accurate, but incomplete — see above)

Repo: `facebookincubator/GeoLift` · 261 stars · 77 forks · not archived · created 2021-09-15 ·
last push 2026-06-30.

- Single license file: `LICENSE.md` (note the `.md` extension — a `find`/glob for exactly `LICENSE`
  would miss it).
- Text: standard **MIT License, "Copyright (c) Meta Platforms, Inc. and its affiliates."**
- **No `PATENTS` file anywhere in the tree.** I enumerated the full recursive tree for
  `PATENT|NOTICE|CLA|CODE_OF_CONDUCT|CONTRIBUTING` and got back only `CODE_OF_CONDUCT.md` and
  `CONTRIBUTING.md`. This matters because Meta's older open-source releases (the React/BSD+Patents
  era, pre-2017) carried an additional patent grant that created adoption friction. GeoLift does
  not. It is plain MIT.
- Trivia worth knowing if anyone diffs the file: `LICENSE.md` ends with a stray `}` character after
  "…OTHER DEALINGS IN THE SOFTWARE." — a typo in Meta's file, not a license term.

GeoLift repo structure worth flagging to whoever writes the geo-experiment content — the methodology
content is in-repo and MIT:
- `vignettes/GeoLift_Walkthrough.md` (41 KB) and `.Rmd` (30 KB)
- `vignettes/GeoLift_MultiCell_Walkthrough.md` (37 KB)
- `vignettes/Confidence_Interval_Explanation.Rmd` (26 KB)
- `vignettes/Incorporating_CommutingZones.md`
- `R/pre_test_power.R` (**77 KB — the largest file in the package**; power analysis and market
  selection is the bulk of GeoLift's actual intellectual content, not the estimator)
- `R/MultiCell.R` (43 KB), `R/plots.R` (39 KB), `R/post_test_analysis.R` (27 KB),
  `R/pre_processing_data.R` (21 KB)
- `Whitepapers/MMM Calibration` — **listed in the tree but 0 bytes via the contents API**; it is a
  directory, not a file. Anyone chasing the MMM-calibration whitepaper needs to descend into it.

That `pre_test_power.R` is 77 KB against a 27 KB post-test analysis file is itself a finding: in
geo-experimentation the hard problem is *design and power*, not estimation. That inverts the naive
assumption that the estimator is the clever part, and it is a teaching point the pack can make.

---

## 2. HEADLINE FINDING — PostHog ships a production experimentation **agent-skill suite**, MIT-licensed

This was not on anyone's assignment sheet. I found it while enumerating PostHog's license files: the
tree contains `.agents/skills/` and per-product `products/*/skills/` directories using **exactly the
architecture this family uses** — `SKILL.md` with YAML frontmatter (`name`, `description` with
TRIGGER / DO NOT TRIGGER clauses) plus a `references/` directory of on-demand deep-dive files, plus
`scripts/`.

**Scale: 71 `SKILL.md` files under `.agents/skills/` alone**, plus a further set under
`products/*/skills/`.

**License: MIT Expat.** All of these live under `.agents/` or `products/`, both outside the sole
`ee/` carve-out, and there is no license file in `products/experiments/`. So the entire suite is MIT.

### 2.1 The experimentation-relevant inventory

`products/experiments/skills/`:
- `creating-experiments/SKILL.md`
- `diagnosing-experiment-results/SKILL.md` + references: `bias-and-skew.md`, `interpretation.md`,
  `empty-experiment.md`, `mid-run-changes.md`, `numbers-vs-sql.md`, `diagnostic-snapshot.md`
- `configuring-experiment-analytics/SKILL.md` + references: `interpreting-results.md`,
  `metric-configuration.md.j2`
- `configuring-experiment-rollout/SKILL.md` + `references/changing-distribution-after-launch.md`
- `managing-experiment-lifecycle/SKILL.md`, `finding-experiments/SKILL.md`,
  `analyzing-experiment-session-replays/SKILL.md`

`products/posthog_ai/skills/auditing-experiments-flags/` + references: `experiment-checks.md`,
`flag-checks.md.j2`, `finding-taxonomy.md`, `remediation-actions.md`, `synthesis-patterns.md`

`products/product_analytics/skills/investigate-metric/` + references: `funnel-playbook.md`,
`retention-playbook.md`, `lifecycle-playbook.md`, `stickiness-playbook.md`, `paths-playbook.md`,
`trend-playbook.md`, `box-plot-playbook.md`, `common-causes.md`, `shared-patterns.md`
+ scripts: `breakdown_attribution.py`, `compare_to_prior_periods.py`

`products/feature_flags/skills/`: `cleaning-up-stale-feature-flags`, `copying-flags-across-projects`,
`finding-deleted-feature-flags`
`products/growth/skills/diagnosing-sdk-health` (note: PostHog has a product literally named "growth")
`products/metrics/skills/investigating-metric-anomalies`
`products/signals/skills/`: `signals-scout-experiments`, `signals-scout-feature-flags`,
`signals-scout-surveys`
`products/surveys/skills/debugging-surveys`

### 2.2 Why this matters: it **carries the validity layer**, contradicting wedge hypothesis 3

Controller-canon §5.3 hypothesised that incumbents "likely bundle ab-testing/CRO/churn as tactic
lists **without** the validity layer (SRM, peeking, power) — verify by deepwalk, don't assume." I
deepwalked. **For PostHog, the hypothesis is false.** The validity layer is present and it is good.

`diagnosing-experiment-results/references/interpretation.md` has an eleven-item taxonomy:
C1 peeking/early stopping · C2 low-volume variance · C3 A/A showing significance · C4 multiple
comparisons · C5 Bayesian traps · C6 frequentist traps · C7 Bayesian-vs-frequentist confusion ·
C8 inconclusive-but-trending · C9 "significance reached" is not a green light · C10 ship-variant
default ignores metrics · C11 external calculator disagrees.

Quality samples, verbatim:

> **C1**: "Watching results live and ending the experiment the moment it looks significant
> **inflates false positives** — you're giving randomness more chances to look significant."

> **C4**: "PostHog **does not** apply multiple-comparisons correction… Concrete math at α=0.05 (the
> default): with 5 independent metrics, the chance of at least one false-positive is ~23%; with 10
> metrics, ~40%."

> **C5**: "**"96% chance to win"** is about _direction_ (test is better than control), **not** the
> magnitude of the lift. Read the **credible interval** alongside it."

> **C7**: "**Overlapping confidence intervals do not imply non-significance in Bayesian.**
> Overlapping intervals are a _frequentist_ heuristic."

I **verified the C4 arithmetic independently**: 1 − 0.95^5 = 0.2262 (~23% ✓) and 1 − 0.95^10 =
0.4013 (~40% ✓). Their numbers are correct. This is a rare case of a vendor doc stating the
multiple-comparisons penalty of its own product honestly, with correct math, against its own
interest.

Also notable — an **epistemic-honesty mechanism inside the skill itself**, verbatim from
`diagnosing-experiment-results/SKILL.md`:

> "Each diagnostic in the reference files is tagged `[HIGH]`, `[MEDIUM]`, or `[LOW]` based on how
> strongly it's verified — `[HIGH]` is verified directly in PostHog code, `[MEDIUM]` is partially or
> team-source verified, `[LOW]` describes SDK/external behavior that wasn't verified here. Treat
> `[LOW]` items as hypotheses to test, not facts to assert."

That is a confidence-tagging convention for skill content, and it is directly relevant to how this
family handles never-ship magnitudes. Worth considering as a borrowable pattern (the idea, not the
text).

And a genuine anti-pattern warning against its own UI, verbatim from C10:

> "The End-experiment modal pre-fills the "Variant to keep" selector with the **first non-control
> variant**… There is no significance check, no primary-metric direction check, and no guardrail
> check feeding that default."
> "…the safe move is to keep control rather than ship the position-default. This matters most for
> sophisticated users who set guardrails for a reason — they are exactly the population the default
> will mislead."

### 2.3 The seam that survives — where PostHog's suite stops

The incumbent is real, but it is **product-support-scoped, not growth-scoped**. Every diagnostic
resolves to a PostHog config field (`exposure_criteria.multiple_variant_handling`, `stats_config`,
`parameters.feature_flag_variants[].rollout_percentage`), a PostHog MCP tool (`experiment-get`,
`experiment-results-get`, `experiment-timeseries-results`), or a PostHog source path. It answers
"my PostHog experiment looks wrong" extremely well. It does not address, anywhere I found:

- **Whether to run an experiment at all** — no power-first triage, no "you cannot detect this lift
  at your traffic" gate. The suite assumes you already have exposures. `creating-experiments` goes
  hypothesis → flag → metrics with **no sample-size or MDE step in the creation flow**; the running-
  time calculator appears only later, in the diagnostic path, as something you should have used.
- **Small-sample honesty** — the closest it comes is C2's validity floors (`np > 5`, `n(1−p) > 5`,
  ≥5 conversions per variant, ≥100 exposures per variant in the legacy module) and its advice is
  "wait. Run longer or increase rollout." For a reader who *cannot* run longer or increase rollout —
  the solo/small-team case this family repeatedly serves — there is no branch. This is the
  small-sample-honesty wedge (canon §5.1) surviving intact against the strongest incumbent found.
- **Growth as a discipline** — no growth-model construction, funnel strategy, activation design,
  retention/resurrection strategy, referral or viral loops, pricing/packaging experiments,
  monetization, PLG, or experiment prioritization. `investigate-metric` has funnel/retention/
  stickiness *playbooks*, but they are "why did this PostHog chart move", i.e. diagnosis of a metric,
  not construction of a growth model.
- **When not to test** — no qualitative-vs-quantitative routing, no "this is a one-way door, don't
  test it, decide it" guidance.

So the adjudication verdict is: **PostHog is a strong, respectable incumbent on experiment-readout
validity inside its own product, and the pack should say so and cite it (MIT permits it). The
uncontested ground is experiment *design under real-world sample constraints* and growth as a
cross-functional discipline.** That is a narrower and better-evidenced wedge than "incumbents lack
the validity layer", which I can now show is false for at least one serious incumbent.

### 2.4 Growth-vs-operate evidence from the same source

PostHog's own directory structure splits `products/experiments/` from `products/feature_flags/` —
the same infrastructure, separated by intent, which is precisely the seam Tamas asked about. The
flag-side skills are pure operate-flavoured hygiene: `cleaning-up-stale-feature-flags`,
`finding-deleted-feature-flags`, `copying-flags-across-projects`. The experiment-side skills are
learning-flavoured: hypothesis, metrics, significance, interpretation.

The boundary is not clean, though, and the impurity is instructive: `configuring-experiment-rollout`
and `references/changing-distribution-after-launch.md` sit on the **experiment** side while being
about rollout mechanics, and `diagnosing-experiment-results` group E treats mid-run rollout changes
as a *validity* problem ("adding metrics mid-run is p-hacking", "changing the variant split is an
anti-pattern"). That is the seam stated from the other direction: **a rollout change is an operate
action with a growth consequence.** Verbatim from the SKILL.md dispatch: "Increasing rollout is safe;
decreasing is caution; changing the variant split is an anti-pattern."

That single line is the best compressed statement of the growth/operate seam I found on GitHub: the
same knob is safe, cautionary, or invalidating depending on whether you are containing risk or
preserving inference.

---

## 3. Booking.com's power calculator — encoded assumptions, and a fully-verified wedge illustration

Found during the company-handbook sweep. `bookingcom/powercalculator` — "Calculator to define runtime
of experiments" · 91 stars · 20 forks · created 2017-11-20 · last push 2026-02-12 ·
**MIT** (single `LICENSE` file at root; API says MIT and the file agrees) ·
live at https://bookingcom.github.io/powercalculator/

**Status discrepancy worth recording:** the README says "**This project is archived and no further
development will be done here**" but GitHub's `archived` flag is `false` and it was pushed
2026-02-12. Self-declared dead, mechanically alive. Cite the README's own words, not the flag.

Why it matters: Booking.com is one of the two or three most experiment-mature companies in the
industry, and this is their runtime calculator with the math in the open. Source of truth for
everything below: `src/js/math.js` (9.8 KB) and `src/store/modules/calculator.js` (30 KB).

### 3.1 Encoded assumptions (read from source)

| Assumption | Evidence (`src/js/math.js` unless noted) |
|---|---|
| **Šidák multiple-comparison correction is built in** | `get_alpha_sidaks_correction(alpha, variants)` returns `1 - (1-alpha)^(1/variants)`, exported as `getCorrectedAlpha` |
| Normal approximation everywhere — **including the function named `tTest`** | every call is `jstat.normal.inv` / `jstat.normal.cdf`; there is no t-distribution anywhere in the file |
| t-test path assumes **equal variance across arms** | `solveforpower_Ttest`: `data.variance = 2 * sd_rate ** 2` (i.e. σ²+σ², two equal arms) |
| Proportion path sums the two arms' own variances (not a pooled proportion) | `solveforsample_Gtest`: `variance = base_rate*(1-base_rate) + mean_var*(1-mean_var)` |
| Equal allocation across control + all variants | `sample_size = total_sample_size / (1 + variants)`; total = `(1 + variants) * Math.ceil(sample_one_group)` |
| **Non-inferiority testing is first-class**, not an afterthought | `mu` (the non-inferiority margin) threads through every solver; `alternative` ∈ `two-sided`/`greater`/`lower`; dedicated test files `tests/samplesizefornoninferiority.test.js`, `tests/store/non-inferiority-gTest-sample.js`, `non-inferiority-tTest-sample.js` |
| Runtime-in-days is a first-class output, not just abstract *n* | `opts.type == 'absolutePerDay'` mode solves for `days` or `visitorsPerDay`, incl. a quadratic solver `solve_quadratic_for_sample` |
| Flipping to non-inferiority **halves alpha** (and un-flipping doubles it) | `calculator.js` `SET_IS_NON_INFERIORITY`: `state.falsePositiveRate = flag ? rate/2 : rate*2` |

**Shipped default state** (`calculator.js`, `calculator.state`):

```js
baseRate: 0.1,            falsePositiveRate: 0.1,   targetPower: 0.8,
runtime: 14,              visitorsPerDay: 40098,    sample: 561364,
standardDeviation: 10,    variants: 1, // A/A = 0, A/B = 1...
relativeImpact: 0.02,     isNonInferiority: false,  testType: 'gTest' (binomial)
```

Two defaults are genuinely notable:

1. **α = 0.10, not 0.05.** Almost every calculator and vendor in this landscape defaults to 0.05
   (PostHog does — see §2). Booking ships 0.10. Read fairly, this is *coherent rather than sloppy*:
   two-sided α=0.10 puts **5% in the tail you care about**, and the non-inferiority toggle halves it
   to a one-sided 0.05 — preserving that same 5% single-tail rate across both modes. Their internal
   convention appears to be "5% in the direction of interest", consistently applied. But it does mean
   a Booking-default two-sided test is **2× more permissive** than a conventional α=0.05 two-sided
   test. Anyone copying this calculator inherits that.
2. **`runtime: 14` — a hardcoded two-week default.** The "run your test for two full weeks" rule of
   thumb, which the folklore harvest will find repeated all over the CRO literature, is sitting as a
   literal default in a mature company's shipped calculator. Worth pairing with whatever C4 finds:
   the same number appears as folklore in blog posts *and* as an engineering default here. That does
   not make the folklore true, but it does mean the falsification strip must engage it seriously
   rather than dismissing it.

### 3.2 I reproduced their default scenario exactly — and it is the small-sample wedge

I re-implemented `sample_size_calculation` from `math.js` against the shipped default state and
computed the required sample independently:

- variance = 0.181596 · mean_diff = 0.002 · z(power 0.8) = 0.8416 · z(α/2 = 0.05) = 1.6449
- per group = 280,682 → **total = 561,364**

The shipped default state hardcodes `sample: 561364`. **My independent computation matches it
exactly.** That confirms every parameter reading above — in particular that `beta` is passed as the
type-II error rate (0.2), and that α is 0.10 two-sided. It also confirms the defaults are internally
consistent: 40,098 visitors/day × 14 days = 561,372 ≈ the 561,364 sample.

**The teaching payload.** Booking's *own default example* — detect a **2% relative** lift on a
**10% base conversion rate**, at 80% power and a permissive α=0.10 — requires **561,364 visitors**.
At Booking's default traffic that is 14 days. At traffic the family's actual readers have:

| Visitors/day | Days to power Booking's default scenario |
|---|---|
| 40,098 (Booking's default) | 14 days |
| 5,000 | 112 days |
| 1,000 | 561 days (1.5 years) |
| 500 | 1,123 days (**3.1 years**) |

This is the strongest evidence I found anywhere for canon §5.1 (**small-sample honesty**), and it has
three properties that make it exceptionally shippable:

- It is **pure arithmetic from published defaults** — no benchmark, no vendor sample, no self-selected
  survey, nothing to go stale. The only inputs are Booking's own numbers and the standard power
  formula their own code implements.
- It is **an incumbent testifying against the reader's interest**: the most experiment-mature company
  in travel ships a default that quietly assumes 40k visitors/day.
- It **generalises the right way** — it doesn't say "don't experiment", it says "at your traffic, a
  2%-relative question is unanswerable; ask a bigger question." That is the honest-toolkit framing,
  not a nihilistic one.

Recommend the controller treat this as a candidate flagship illustration. It needs no as-of gating
because it is arithmetic, though the repo metadata (stars, push date) is as-of 2026-08-01.

### 3.3 Other Booking.com growth-relevant open source

Swept `--owner=bookingcom` (36 repos returned). Growth-relevant:

- `bookingcom/upliftml` — 334 stars, "UpliftML: A Python Package for Scalable Uplift Modeling".
  Uplift/heterogeneous-treatment-effect modelling = who to target, which is growth-adjacent
  (targeting, not testing). Worker C3 owns the uplift tier; flagging so it isn't missed.
- `bookingcom/uplift-interference-simulator` — 4 stars, but the description names a real paper:
  "Qini curve estimation under clustered network interference — Rickard K.A. Karlsson, Bram van den
  Akker, Felipe Moraes, Hugo Proença, Jesse H. Krijthe". **Interference/SUTVA violation** is on the
  canon's list (§1) and this is a primary source with named authors. Worth chasing.
- `bookingcom/uplift-modeling-for-marketing-personalization-tutorial` — 6 stars, tutorial form.
- Not growth: `shipper` (729★, k8s canary/blue-green — this is **operate**, and it is a clean example
  of the seam: Booking's canary tooling lives nowhere near its experimentation tooling),
  `perfsuite-*`, `carbonapi`, `nanotube`, the Bazel rules.

Note for the seam question: Booking open-sourced **`shipper` (canary/blue-green rollouts)** and
**`powercalculator` (experiment runtime)** as entirely separate projects with no shared vocabulary.
A company that does both at scale did not build them as one thing. That is organisational evidence
for the growth/operate split, independent of any doc's framing.

### 3.4 Company-handbook sweep — negative and positive results

- **Spotify**: `gh search repos --owner=spotify experiment` returned `[]`. No public experimentation
  repo under the `spotify` org. Their experimentation content (salted sequential testing, the
  "we don't peek" posts) lives on engineering.atspotify.com, not GitHub — that is **channel D's**
  territory, not mine. Recording the negative so it isn't re-searched.
- **Booking.com**: positive, see above — `powercalculator` is the find.
- **Mozilla**: `mozilla/experimenter` — 145 stars, **MPL-2.0** (per API; file not yet independently
  read), not archived, last push 2026-08-01 (actively developed). "A web application for managing
  user experiments for Mozilla Firefox." This is a real open experimentation *platform* with a public
  design/analysis process (Nimbus, jetstream). It is explicitly in **worker C4's** brief, so I left
  the deep read to them rather than duplicating — noting the metadata here so it is not lost.

---

## 4. Acquisition status — re-verified against primary sources (lead duty)

The canon (§3) flags both of these as "verify". They are the kind of strategic fact that ships wrong,
so I verified them myself rather than inheriting a worker's read. Both are **confirmed**, one with a
correction to the canon and one with a material update the canon did not have.

### 4.1 Statsig → OpenAI: CONFIRMED, announced 2025-09-02

**Primary source: Statsig's own blog**, https://www.statsig.com/blog/openai-acquisition,
**dated Tuesday, September 2, 2025**. Verbatim:

> "Today, I am excited to share that we've signed a definitive agreement for Statsig to join OpenAI."

and on continuity:

> "[Statsig] will continue to provide our services and invest in our core products. Our customers
> will remain a top priority."

Note the structure: a **definitive agreement signed**, i.e. announced-not-necessarily-closed as of
that date. Vijaye Raji (Statsig founder/CEO) becomes **CTO of Applications** at OpenAI. OpenAI's
corresponding page exists at
`openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig/` but
**returned HTTP 403 to both WebFetch and curl-with-browser-UA**, so it is cited as existing, not
quoted. The Statsig first-party post is sufficient.

**The canon's "~Sept 2025" was right.** Statsig continues to operate and sell — which is why
statsig.com's homepage still reads "Trusted by thousands of companies, **from OpenAI to** series A
startups", i.e. OpenAI framed as a customer. That framing initially led me toward a false negative;
the continuity arrangement explains it.

> **Methodology warning worth carrying into the report.** My first WebSearch returned a summary
> asserting the acquisition was "announced in **December 2025**". The primary source says
> **September 2, 2025**. The search-engine summary was wrong by three months. This is the same class
> of error the family already logged in the ai-skill build ("never trust WebFetch/search-extracted
> claims"). Dates in this section come from the announcement pages themselves.

### 4.2 Eppo → Datadog: CONFIRMED, press release 2025-05-05 — and now rebranded

**Primary source: Datadog press release**, "Datadog Acquires Eppo to Expand Its AI, Product
Analytics, Experimentation and Feature Flag Capabilities", **dated May 5, 2025**. Verbatim:

> "Datadog, Inc. (NASDAQ: DDOG)…today announced it has **acquired** Eppo, a feature flagging and
> experimentation platform."

> "Eppo will continue supporting existing customers and bringing on new customers as part of
> **Eppo by Datadog**."

No financial terms disclosed. Note the verb: "has acquired" (completed), unlike Statsig's "signed a
definitive agreement".

**Material update the canon did not have:** Eppo has since been folded into a rebranded product.
Second primary source: Datadog press release "Datadog Experiments Launches to Help Teams Connect
Every Product Change to Business Outcomes", **dated April 2, 2026**:

> "**Datadog Experiments is now generally available.**"

So the correct present-tense statement as of 2026-08-01 is: *Eppo was acquired by Datadog (announced
2025-05-05) and its technology now ships as **Datadog Experiments**, GA since 2026-04-02.* Anything
in the pack that refers to "Eppo" as a current independent product would be stale. geteppo.com now
redirects the brand ("Eppo is now Datadog Experiments").

### 4.3 STRATEGIC FINDING — the market is actively merging experimentation INTO observability

This is the single most important thing I found for Tamas's growth-vs-operate question, and it came
from the Eppo verification rather than from any repo.

An **observability company bought an experimentation company and shipped it as an
observability-integrated product**. The Datadog Experiments launch release, verbatim:

> "Powered by Datadog's acquisition of Eppo, Datadog Experiments pairs best-in-class statistical
> methods with **real-time observability guardrails** so companies can test what matters, move
> quickly and ship with confidence."

> "**Built-in guardrails, real-time feedback and shared standards help teams catch issues early,
> protect users and keep experiments valid.**"

> "By tying experiments to **Real User Monitoring (RUM), Product Analytics, APM and logs**,
> organizations can measure both business impact and performance implications to **reduce risk
> without slowing innovation**."

Read the verb choices. Datadog's framing of experimentation is: *ship with confidence · catch issues
early · protect users · reduce risk*. That is **the operate framing applied to experimentation.**
Compare it to PostHog's and Booking's framing of the same activity — hypothesis, significance,
interpretation, what did we learn.

The synthesis this supports:

- **The growth/operate seam is genuinely contested in the market, not a pedantic distinction we
  invented.** The same infrastructure (flags + metrics + a statistical readout) is sold as *learning*
  by product-analytics vendors and as *risk containment* by an observability vendor. The vendor's
  commercial position, not the underlying method, determines the framing.
- That makes drawing the seam explicitly a real value-add for the pack rather than a taxonomy
  exercise. A reader arriving from Datadog's world will have been taught that an experiment is a
  safety mechanism; a reader arriving from PostHog's world will have been taught it is an inference
  mechanism. Both are half right, and the pack can say which half applies when.
- It also sharpens the canonical seam statement. "A canary is risk containment; an A/B test is
  learning" is correct but incomplete — **the market's newest products deliberately do both at once**,
  and the honest teaching is about *which question you are entitled to answer* from a given setup, not
  about which tool you happened to open.

Corroborating structural evidence, independent of any vendor's marketing (see §2.4 and §3.3):
PostHog separates `products/experiments/` from `products/feature_flags/` in its own repo, and
Booking.com open-sourced its canary tool (`shipper`) and its experiment runtime calculator
(`powercalculator`) as unrelated projects with no shared vocabulary. Two companies that do both at
scale built them as separate things; one vendor that sells observability merged them. That contrast
is the finding.

---

## 5. `gbstats` — what the MIT licence actually covers, and its encoded defaults

I claimed in §1.2 that GrowthBook's `packages/stats/` is the cleanest liftable artifact in the
landscape. That claim is only worth anything if the directory contains the real engine, so I verified
it. It does. Worker C1 owns GrowthBook's *documentation*; this section covers the *licensed code* and
its defaults, which is a different question and my licence lane.

`packages/stats/` is the **`gbstats` Python package** (published to PyPI as `gbstats` — README:
"The stats engine for GrowthBook, the open source A/B testing platform"). Substantive files:

| Size | Path | What it is |
|---|---|---|
| 76.8 KB | `tests/frequentist/test_post_strat.py` | **post-stratification tests — the largest file in the package** |
| 59.2 KB | `tests/test_gbstats.py` | main engine tests |
| 56.4 KB | `gbstats/models/tests.py` | test models |
| 54.7 KB | `gbstats/gbstats.py` | the engine entry point |
| 22.2 KB | `gbstats/models/statistics.py` | metric/statistic types |
| 15.3 KB | `gbstats/frequentist/tests.py` | t-tests + **sequential (always-valid) intervals** |
| 15.0 KB | `gbstats/devtools/simulation.py` | simulation tooling |
| 14.3 KB | `gbstats/bayesian/bandits.py` | **multi-armed bandits** |
| 10.5 KB | `gbstats/power/midexperimentpower.py` | **mid-experiment power** |
| 8.2 KB | `gbstats/bayesian/tests.py` | Bayesian tests |

So the MIT grant covers: the Bayesian engine, the frequentist engine, sequential/always-valid
intervals, bandits, post-stratification, and power analysis. That is the whole methodological core.
The proprietary Enterprise carve-out (§1.2) contains none of it.

### 5.1 The sequential (always-valid) implementation and its tuning parameter

`gbstats/frequentist/tests.py` implements an asymptotic confidence sequence, not a fixed-horizon
test, via `sequential_rho()` / `sequential_interval_halfwidth()` / `sequential_interval_halfwidth_one_sided()`,
consumed by `class SequentialTTest(TTest)`. The half-width formula has the mSPRT/confidence-sequence
shape (a `sqrt( 2(n·ρ²+1)/(n·ρ)² · log( sqrt(n·ρ²+1)/α ) )` term).

**The encoded assumption to flag:** `class SequentialConfig(FrequentistConfig)` sets

```python
sequential_tuning_parameter: float = 5000
rho: Optional[float] = None
```

ρ is derived from α and that tuning parameter when not supplied. In this family of confidence
sequences the tuning parameter is **the sample size at which the sequence is tightest** — the
sequence is valid at every n, but it is *optimised* for one. GrowthBook ships that dial preset to
**5,000**. A reader running an experiment with a few hundred users, or with a few million, gets an
interval wider than it needed to be, and nothing in the UI says so. That is a textbook
"what-does-the-code-assume" finding and it is directly usable: **always-valid does not mean
assumption-free; it means the assumption moved into a tuning constant.**

There is also a guard worth noting — a one-sided sequential test with α ≥ 0.5 raises
`ALPHA_GREATER_THAN_0.5_FOR_SEQUENTIAL_ONE_SIDED_TEST`.

### 5.2 `MidExperimentPower` — a machine-checkable version of the honesty gate

`gbstats/power/midexperimentpower.py` computes, mid-flight, how much more data an experiment needs.
Its result type is the interesting part:

```python
@dataclass
class AdditionalSampleSizeNeededResult:
    additional_users: Optional[float]
    scaling_factor: Optional[float]
    upper_bound_achieved: bool
    update_message: str
    error: Optional[str] = None
    target_power: float = 0.8
```

`additional_users` answers "how many more?", and **`upper_bound_achieved`** answers "or is this
simply not reachable?" That is, in code, the gate the small-sample-honesty wedge argues for: a
system that will tell you the answer is unobtainable rather than inviting you to keep waiting. It is
strong evidence that the wedge is *real and under-surfaced* rather than invented — the capability
exists in an MIT-licensed engine, and neither PostHog's skill suite nor Booking's calculator exposes
an equivalent "this is unachievable" verdict.

### 5.3 Defaults — and a three-way contrast on multiple-comparison correction

`MidExperimentPowerConfig` defaults:

```python
target_power: float = 0.8          # conventional
target_mde: float = 0.01           # 1% RELATIVE — even more ambitious than Booking's 2% default
num_goal_metrics: int = 1
num_variations: int = 2
p_value_corrected: bool = False    # multiple-comparison correction OFF by default
sequential: bool = False           # sequential testing OFF by default
sequential_tuning_parameter: float = 5000
```

Two defaults are opt-out-shaped in a way that matters: **peeking protection (`sequential`) is off by
default**, and **multiple-comparison correction (`p_value_corrected`) is off by default**. The
engine *can* do the right thing; the default is the permissive thing.

That completes a clean three-way contrast across three independently-built production systems, all
verified from source in this file:

| System | Multiple-comparison correction | Evidence |
|---|---|---|
| **PostHog** | **None at all**, and says so honestly | "PostHog **does not** apply multiple-comparisons correction… across variants… across metrics" (§2.2) |
| **GrowthBook** | Available, **off by default** | `p_value_corrected: bool = False` |
| **Booking.com** | **Šidák, built into the calculator** | `get_alpha_sidaks_correction()` = `1-(1-α)^(1/variants)` (§3.1) |

Three serious teams, three different answers to the same statistical question. This is exactly the
kind of **adjudication** the marketing pack established as a value-add: the pack's job is not to
pick a vendor but to tell the reader that this knob exists, that it is usually off, and what it
costs them. A reader who runs five metrics on GrowthBook's defaults is exposed to roughly the ~23%
any-false-positive rate PostHog documents (§2.2, arithmetic independently verified) with no warning
from either tool.

---

## 6. Cross-check notes for the report

- Worker C1 owns GrowthBook's license; my independent read is above. If C1 reports fewer than five
  license files or misses that `packages/stats/` is separately MIT, prefer this section.
- Worker C2 owns PostHog's license anatomy; my independent read is above. The carve-out is exactly
  one directory (`ee/`).
- Worker C3 owns GeoLift's license; mine says plain MIT via `LICENSE.md`, no patent grant.
- Worker C4 owns skill repos. **I have covered PostHog's in-repo skill suite here** so C4 does not
  duplicate it — C4 was messaged to that effect and redirected to standalone skill repos and
  awesome-lists.
