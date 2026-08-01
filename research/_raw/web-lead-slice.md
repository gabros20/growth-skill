# Web channel — LEAD SLICE (grw-web, opus sub-orchestrator)

As-of date for every fetch in this file: **2026-08-01**. All figures below were fetched and
arithmetic-checked by the lead, not by a worker. Where I computed something myself it is
labelled **[DERIVED]** and the script is reproduced so it can be re-run.

Two territories, neither assigned to a worker:

1. **Vendor-stated traffic floors** — what the experimentation platforms' *own* docs and
   calculators admit about minimum traffic. (Direct analogue of what Meridian/Robyn's stated
   data minimums did for the marketing pack's scale-gating.)
2. **Family seam audit** — what `data` and `marketing` have ALREADY SHIPPED on
   experimentation, read from the shipped reference files on disk. This materially changes
   what growth's flagship can be. Read section 6 before designing the pack.

---

## 1. The arithmetic core, derived and cross-checked

Everything in this channel rests on one formula, so I derived it independently rather than
trusting any vendor's rendering of it.

Per-arm sample size for a two-proportion test, two-sided α = 0.05, power = 0.80:

```
n_per_arm = 2 · (z_{1-α/2} + z_{1-β})² · p(1-p) / d²      where d = (relative MDE) × p
```

**[DERIVED]** exact constants (computed with Python `statistics.NormalDist`):

| quantity | value |
|---|---|
| z_{0.975} | 1.9600 |
| z_{0.95} (one-sided) | 1.6449 |
| z_{0.80} | 0.8416 |
| **two-sided constant** 2(z_{0.975}+z_{0.80})² | **15.6978** |
| one-sided constant 2(z_{0.95}+z_{0.80})² | 12.3651 |

So the famous **16σ²/δ²** rule of thumb is the two-sided/80%-power constant rounded up from
15.6978. That is where the 16 comes from — it is not arbitrary and it is not a fudge factor.
Anyone using 16 is implicitly committing to α=.05 two-sided and 80% power.

### 1.1 [DERIVED] Per-arm n table — the table the pack should ship

Two-sided α=.05, power=.80, pooled-variance form. **Read down a column: halving the effect
you want to detect quadruples the traffic you need.**

| baseline CR | +2% rel | +5% rel | +10% rel | +20% rel | +50% rel |
|---|---|---|---|---|---|
| 1.0% | 3,885,195 | 621,631 | 155,408 | 38,852 | 6,216 |
| 2.0% | 1,922,976 | 307,676 | 76,919 | 19,230 | 3,077 |
| 3.0% | 1,268,902 | 203,024 | 50,756 | 12,689 | 2,030 |
| 5.0% | 745,644 | 119,303 | 29,826 | 7,456 | 1,193 |
| 10.0% | 353,200 | 56,512 | 14,128 | 3,532 | 565 |
| 20.0% | 156,978 | 25,116 | 6,279 | 1,570 | 251 |
| 30.0% | 91,570 | 14,651 | 3,663 | 916 | 147 |

Exact separate-variance version (slightly larger; use if the pack wants to be unimpeachable):

| baseline CR | +2% rel | +5% rel | +10% rel | +20% rel | +50% rel |
|---|---|---|---|---|---|
| 1.0% | 3,923,647 | 637,007 | 163,092 | 42,690 | 7,747 |
| 2.0% | 1,941,805 | 315,203 | 80,679 | 21,106 | 3,822 |
| 3.0% | 1,281,191 | 207,935 | 53,208 | 13,911 | 2,514 |
| 5.0% | 752,700 | 122,121 | 31,231 | 8,155 | 1,468 |
| 10.0% | 356,331 | 57,760 | 14,748 | 3,838 | 683 |
| 20.0% | 158,147 | 25,579 | 6,507 | 1,680 | 290 |
| 30.0% | 92,086 | 14,853 | 3,760 | 960 | 160 |

Reproduction script: `scratchpad/power.py` (also inlined at the end of this file).

**Why this is the wedge and not a footnote:** these numbers are *per arm*, and they are
**exposures, not sessions and not pageviews**. A 3%-converting checkout page wanting to detect
a 5% relative lift needs **203,024 exposures per arm** — 406,048 total. A site with 10,000
monthly visitors reaching that page cannot run this test in a human timeframe, at any budget,
with any vendor. This is a property of arithmetic, not of tooling. It is the exact structural
analogue of Lewis & Rao for on-site product experiments (see §6.2 for the consistency rule).

---

## 2. Vendor-stated floors — the platforms' own numbers

Ordered by how damaging the admission is to the vendor. All quotes verbatim.

### 2.1 PostHog — publishes the formula AND a worked example
`https://posthog.com/docs/experiments/sample-size-running-time` (fetched 2026-08-01)

> "N = (16 × variance) / d²"

> "with a 10% conversion rate (p = 0.1) and 20% MDE: Variance = 0.1 × 0.9 = 0.09; Absolute
> effect d = 0.2 × 0.1 = 0.02; Sample size per variant = (16 × 0.09) / 0.02² = 3,600; For a
> 2-variant experiment: 7,200 total exposures needed"

Also, on their automatic mode: > "at least 1 day of runtime and 100 exposures before estimates appear."

**[DERIVED] cross-check:** my exact two-sided computation gives **3,532** per variant for the
same inputs; PostHog's 3,600 is the same calculation with 16 substituted for 15.6978. ✅ The
doc is arithmetically sound. Rung 1 for the formula (it is just the standard formula), rung 1
for PostHog's own product behaviour.

*Note: no explicit low-traffic warning appears on the page. The formula is presented without
the observation that most readers fail it.*

### 2.2 Optimizely's own calculator — 13,000 per variation
`https://www.optimizely.com/sample-size-calculator/` (fetched 2026-08-01)

The calculator rendered **"13,000"** sample size per variation for its default inputs.

> "95% is an accepted standard for statistical significance, although Optimizely allows you to
> set your own threshold for significance based on your risk tolerance."

**[DERIVED] back-solve:** 12,689 is the exact per-arm n for **baseline 3%, MDE 20% relative,
two-sided α=.05, power .80**. Optimizely's displayed 13,000 matches this to within rounding,
so the calculator's defaults are almost certainly 3% / 20%. ✅ Their tool agrees with the
standard formula.

**The teaching point for the pack:** Optimizely's *default* scenario — an unambitious 20%
relative MDE on a typical 3% conversion rate — already demands **26,000 exposures** across two
arms. That is the vendor's own optimistic default, not a pessimistic edge case.

### 2.3 Statsig — the single most quotable vendor floor
`https://docs.statsig.com/experiments-plus/power-analysis` (fetched 2026-08-01)

> "After 1 week, the expected user count per group is 5,200 with an MDE of 21.6%. By week 4,
> the user count per group increases to approximately 48,000 and the MDE drops to 7%."

This is a vendor showing, in its own documentation, that **~48,000 users per group buys you a
7% MDE** — and that at 5,200 per group you can only detect a 21.6% effect. Rung 1 (vendor
documenting its own platform's power analysis).

Caveat they state themselves, which the pack must carry:
> "When an experiment includes only a biased subset of users, the MDE and duration from the
> power analysis may not be a reliable estimate."
> "This calculation relies on statistics computed across the entire user base of the project.
> It doesn't account for experiments that target only a subset of users."

**[DERIVED] care note:** do NOT assert a baseline conversion rate behind Statsig's 48,000 —
their MDE formula is generic across metric types and the example's metric type is not stated.
For a binary metric, 48,000/group at 7% relative MDE would imply a baseline near 5-10%
(my table: 5% baseline needs 60,869; 10% baseline needs 28,833). **Quote their sentence;
do not reverse-engineer their metric.** Flagged because this is exactly the kind of inference
that ships a wrong number.

### 2.4 GrowthBook — honest about noise, no hard floor
`https://docs.growthbook.io/statistics/power` and `/statistics/overview` (fetched 2026-08-01)

> "The biggest cost to running a low-powered experiment is that your results will be noisy.
> This usually leads to ambiguity in the rollout decision."

> "Running an experiment with less than 80% power can still help your business. The purpose of
> an experiment is to learn about your business, not simply to roll out features that achieve
> statistically significant improvement."

> "If you see `N/A` in your MDE results, this means that you need to increase your number of
> weekly users."

> "Minimum Data Thresholds so you aren't drawing conclusions too early (e.g. when it's 5 vs 2
> conversions)"

On peeking (important, and *softer* than data-skill's shipped line — see §6.3):
> "Bayesian results are still valid even if you stop an experiment early. While they can suffer
> from the same 'peeking' problems as frequentist statistics, at least the main probabilities
> and statistical results that you see are not invalidated by stopping early."

On SRM: > "SRM detects when the traffic split doesn't match what you are expecting (e.g. a
48/52 split when you expect it to be 50/50)" — **no threshold stated on this page** (data-skill
readers should not assume one).

GrowthBook is the most intellectually honest vendor in this sweep: it is the only one that
tells you a low-powered experiment is still worth running *and says why*, rather than either
hiding the problem or pretending a workaround removes it.

### 2.5 Eppo — CUPED preconditions stated plainly, no percentage claimed
`https://docs.geteppo.com/statistics/cuped/` (fetched 2026-08-01)

> "CUPED works best for experiments with long-time users for whom many pre-experiment data
> points exist."
> "It is generally less effective for newer users; if you are running an experiment on a change
> in the onboarding flow for new users, there is no prior data to leverage."
> "In the worst case scenario, it does equally well as the standard approach"

**Eppo claims NO variance-reduction percentage.** Recorded deliberately: several secondhand
sources attribute percentage claims to Eppo. Their own CUPED doc does not make one.

**High-value finding for the pack:** the single most common growth experiment a small team
runs is an **onboarding/activation change**, tested on **new users** — precisely the population
where CUPED, the field's main variance-reduction tool, **does not work**. Two independent
vendors state this (Eppo above; Statsig below). So the small-sample problem cannot be
variance-reduced away in exactly the place growth teams need it most.

### 2.6 Statsig on CUPED — corroborates the new-user limitation
`https://www.statsig.com/blog/cuped` (published **2024-09-15**, fetched 2026-08-01)

> "New Users won't have pre-experiment data. An experiment with no pre-experiment data won't be
> able to leverage CUPED."
> "For new users experiments, stratification or other covariates like demographics can be
> useful, but you won't be able to leverage as rich of a covariate."
> "CUPED is most effective on existing user experiments where you have access to user's
> historical data."

Their worked illustration: > "the standard error (and accordingly p-value) went down from 4.73
to 2.13" — **note: this is a running-mile-times toy example, NOT a product metric and NOT a
variance-reduction percentage.** Do not convert it into a "Statsig reports X% variance
reduction" claim; that would be a fabrication. **NEVER-SHIP as a magnitude.**

Contains a secondhand magnitude the pack must not repeat: > "A 0.1% increase to revenue at
Facebook is worth upwards of $100 million per year!" — **UNTRACED**, no source given in the
post. Never-ship candidate.

---

## 3. The vendor-blog contradiction — a falsification strip found inside single domains

The strongest finding of this slice. **On the same domain, the calculator and the blog
disagree**, and the disagreement runs in the direction of the vendor's commercial interest.

| Vendor | What the calculator/docs say | What the low-traffic blog post says |
|---|---|---|
| Optimizely | 13,000 per variation for a 3%/20% default | "Testing macro conversions, such as order completions, risks requiring more time to reach the required number of visitors or conversions, **making it unrealistic for a website with lower traffic**." |
| AB Tasty | (no floor published) | "Just because your website has low traffic, it does not mean you should forget about A/B testing – **on the contrary!**" |
| VWO | 7-day minimum duration only | "The problem with small traffic sites is that running split tests on them **seems futile**." |

**Optimizely, `/hc/en-us/articles/4410283325325-Test-tips-for-low-traffic-sites`** (fetched
2026-08-01) — the most candid vendor admission found:
> "Testing macro conversions, such as order completions, risks requiring more time to reach the
> required number of visitors or conversions, making it unrealistic for a website with lower
> traffic."
> "if your website has only a few conversions a week, determining the winner takes more time"

Their recommended workarounds, verbatim: test high-impact changes ("Focusing your tests around
areas of your site or application that visitors consider important can impact conversion rates
more than testing small modifications on niche pages"); use micro-conversions ("Testing
conversions on the micro level ... helps you call your results more quickly"); widen targeting
("Avoid testing areas of your site or applications that get few hits"); skip multivariate
("Testing multiple variations requires more traffic"); and **lower the significance threshold**
— which they concede increases false positives.

⚠️ **Three of these five workarounds trade validity for speed, and only one is stated as such.**
Micro-conversions change *what question you are answering* (you learn about clicks, not
revenue) — Optimizely presents this as a pure win. Lowering α is presented with its cost.
This asymmetry is itself the finding.

**VWO, `/blog/ab-split-testing-low-traffic-sites/`** — author **Smriti Chawla**, page states
last updated **2026-07-22** (fetched 2026-08-01). Quotes two named practitioners:
> Bryan Eisenberg: "if your website gets less than 5-10 conversions per week, you have a
> low-traffic website"
> Rich Page: "a site getting 1,000 unique visitors per week or less is a low-traffic website"

And concedes the arithmetic:
> "you have an existing conversion rate of 5%, and the expected percentage increase in
> conversions is 10%. If you're testing 4 variations, you might have to wait for **months or
> even years** to get conclusive results (95% confidence level)"

**[DERIVED] check of VWO's own example:** 5% baseline, 10% relative MDE → **29,826 per arm**
(my table). With 4 variations that is ~119,000 exposures. VWO's "months or even years" is
**correct and if anything understated** for a site at their own stated low-traffic definition
of ≤1,000 unique visitors/week. ✅ Vendor's qualitative claim survives arithmetic check.

Their listed workaround #6 is notable for its honesty: > "Try Sequential Testing" — described
in the post as **"not as scientific or accurate as split testing."**

**AB Tasty, `/blog/six-techniques-for-getting-started-with-ab-testing-low-traffic/`** — author
**Anthony Brebion**, dated **2014-07-17** (fetched 2026-08-01). The least honest of the three:
> "Just because your website has low traffic, it does not mean you should forget about A/B
> testing – on the contrary!"
> "a few hundred visits per month" — offered as the threshold below which one should wait
> "the reliability index needs to be over 95%. Below 95%, the data are not deemed reliable"

Both numeric claims are **stated bare, with no source**. "A few hundred visits per month" as a
testing threshold is off by roughly **three orders of magnitude** from the same industry's own
calculators. Rung 4. **Strong falsification-strip target.**

---

## 4. Folklore floors — traced, and one caught being wrong

### 4.1 mida.so — the arithmetic catch
`https://www.mida.so/blog/how-much-traffic-ab-testing`, author **Donald Ng**, dated
**2025-12-05** (fetched 2026-08-01). Its stated tiers, all bare/unsourced:

| claim | sourced? |
|---|---|
| "1,000–2,000 conversions per variant" (to detect 10–20% lift at 2–5% baseline) | no |
| "60,000 visitors PER VARIATION" (10% uplift, 2% baseline) | references an external calculator |
| <10,000 monthly visitors → "Too small for reliable A/B testing" | no |
| 10k–100k/mo → "Challenging, but possible" | no |
| 100k–1M/mo → "Ideal range" | no |
| 1M+/mo → "A/B testing playground" | no |

**[DERIVED] catch — this is the kind of error the run exists to prevent.** For 2% baseline and
10% relative uplift my computation gives:
- **two-sided** α=.05, power .80 → **76,919 per variation**
- **one-sided** α=.05, power .80 → **60,589 per variation**

The article's **60,000 silently assumes a one-sided test.** That is a weaker evidentiary
standard than the 95% two-sided convention the same article invokes, and it **understates the
required traffic by ~22%**. The number is not fabricated — it is a real calculation under an
undisclosed and weaker assumption. **Never-ship. And a perfect worked example for the pack:
"a traffic floor is meaningless without its α, its power, and its sidedness."**

### 4.2 The "100 conversions per variation" family
Search surfaced the folklore cluster: "at least a few thousand monthly visits and 100
conversions per version"; "at least 5,000 visitors per week"; "500 conversions per week for a
simple A/B test (250 per test version)". None traced to a primary source in this slice —
handing to **D4**, whose brief owns the "100 conversions per variant" provenance hunt. Recorded
here so the chain isn't lost. Rung 4 pending D4.

**[DERIVED] why the whole family is wrong in kind, not just in degree:** a conversions-per-arm
constant *cannot* be a valid rule, because required n depends on the **relative effect size you
want to detect**, which the rule never mentions. At a 10% baseline, 100 conversions/arm ≈ 1,000
exposures/arm, which my table shows is powered for roughly a **+50% relative effect** (565/arm)
but nowhere near a +20% one (3,532/arm). The rule is not a floor; it is a floor *for detecting
enormous effects only*, with the qualifier stripped off. That is falsification by arithmetic —
the strongest evidence class available, and it needs no citation.

---

## 5. Evan Miller — the peeking anchor (lead re-verification)

I verified this one personally because it is the most-cited peeking source on the open web and
the whole "small-sample honesty" story leans on it.

`https://www.evanmiller.org/how-not-to-run-an-ab-test.html`, published **2010-04-18** (fetched
2026-08-01). Rung 3 (named practitioner, simulation-based, not peer-reviewed) — **label it as
such; it is not a paper.**

> "If you run A/B tests on your website and regularly check ongoing experiments for significant
> results, you might be falling prey to what statisticians call repeated significance testing
> errors."

The headline figure, verbatim:
> "Try 26.1% – more than five times what you probably thought the significance level was."

(i.e. stopping at first significance with a 150-observation maximum yields a ~26.1% false
positive rate against a nominal 5%.)

His correction schedule:

| peeks | reported significance level needed |
|---|---|
| 1 | 2.9% |
| 2 | 2.2% |
| 3 | 1.8% |
| 5 | 1.4% |
| 10 | 1.0% |

His fix, verbatim:
> "Decide on a sample size in advance and wait until the experiment is over before you start
> believing the 'chance of beating original' figures."

And he states the same sample-size rule: **n = 16σ²/δ²**.

**Convergence worth flagging:** the 16σ²/δ² constant appears in three independent places in
this channel — Evan Miller (2010), PostHog's docs (2026), and my own derivation (§1) — and
Optimizely's calculator back-solves to it. Three independent renderings plus a first-principles
derivation is about as solid as a quantitative claim in this field gets.

🔴 **CORRECTION (lead, self-caught 2026-08-01).** An earlier draft of this file listed Kohavi's
"Seven Rules of Thumb for Web Site Experimenters" (KDD 2014) as a fourth source for 16σ²/δ².
**That is wrong.** I pulled the actual PDF (see §9) and read Rule #7 in full: the paper does
**not** state 16σ²/δ². It states a *different* rule (355 × skewness², for normality, not power)
and refers to power formulas only by citation. This was my own trained-knowledge assumption and
it did not survive contact with the primary source — logged here as an instance of exactly the
failure mode the run's re-verification step exists to catch. **Do not attribute 16σ²/δ² to the
Seven Rules paper.**

⚠️ **Scope limit the pack must respect:** the 26.1% is from *Miller's specific simulation* (150
observations max, continuous monitoring, stopping at first significance). It is NOT a universal
"peeking gives you 26% false positives" constant. Any restatement must carry the setup. D1 has
the Johari et al. peer-reviewed treatment; **prefer D1's paper figures for anything load-bearing
and use Miller as the accessible illustration.**

---

## 6. FAMILY SEAM AUDIT — read this before designing the pack

I read the siblings' shipped reference files directly on disk. This is the highest-consequence
part of my slice, and it was not assigned to anyone.

### 6.1 `data` has already shipped most of the "experimentation validity" canon

File: `/Users/tamas/Documents/Personal/Projects/data-skill/skills/data/references/experiment-measurement-foundations.md` (189 lines, shipped)

Its scope guard, verbatim from lines 3-9:
> "this reference owns measurement **validity** — whether an experiment's underlying data can be
> trusted at all: assignment integrity, sample ratio, variance reduction, peeking safety. It
> does **not** own experiment **design** (what to test, how to size a rollout) or
> **interpretation** (what a validated result means for a decision) — both belong to `growth`."

**Already shipped by data — growth MUST NOT re-teach these:**
- SRM-before-trust, incl. Kohavi's "fever" framing and the hard rule that no result is read
  before SRM passes
- Deterministic assignment / the PlanOut model (hash-based, namespaces, self-logging)
- Assignment vs exposure + dilution correction
- CUPED, incl. a non-applicability list and a **14-day default lookback**
- Peek-safe sequential testing — a three-vendor table (GrowthBook ACS / Statsig mSPRT / Eppo
  confidence sequences)
- Twyman's Law
- OEC + guardrail metrics
- Simpson's paradox in gradual rollouts, bot traffic, survivorship bias, multiple comparisons
- GrowthBook license: "bulk MIT; `packages/{back-end/src,front-end,shared/src}/enterprise`
  carve-out = GrowthBook Enterprise License (commercial)" — **verified 2026-07-25, do not
  re-litigate or contradict**

🔴 **Implication for the wedge.** The obvious flagship — "trustworthy experimentation: SRM,
CUPED, peeking" — **is taken by a sibling that shipped it a week ago.** Building growth's
flagship there would be the family's first genuine duplication. The controller-canon's wedge
hypothesis #1 (small-sample honesty) survives this audit; a generic "experimentation validity"
flagship does not.

🟢 **What data explicitly leaves open, in its own words:** experiment **design** ("what to test,
how to size a rollout"), **interpretation** ("what a validated result means for a decision"),
and — critically — **there is no power, MDE, sample-size, or feasibility content anywhere in
data's file.** Its only mention of power calculators is listing them as a feature of
`spotify/confidence`. The **feasibility gate is genuinely unclaimed**, and §§1-4 of this file
are exactly the material to fill it.

**Data's shipped CUPED magnitudes, which growth must stay consistent with** (data flags them as
vendor-reported and not independently verified, sourced to docs.growthbook.io/statistics/cuped,
2026-07-25):
> "Netflix (2016) ~40% variance reduction; Microsoft (2022) ~equivalent to 20% more traffic"

If **D1** traces the primary Deng/Xu/Kohavi/Walker (WSDM 2013) figures and they differ, growth
should cite the **primary** and note the vendor-reported figures are a separate, weaker claim —
**not** contradict data's file, which correctly labelled its own sourcing.

### 6.2 `marketing` cedes sample-size planning to growth — explicitly and twice

File: `.../marketing-skill/skills/marketing/references/attribution-and-measurement.md`
> line 17-18: "The question is experiment design, sample-size planning, or a growth funnel test
> — that is `growth`'s territory; this file only tells you what attribution and MMM can support."
> line 227-228: "The question turns into experiment design or sample-size planning for a growth
> test — that decision belongs to `growth`; this file stops at 'here is what your scale can
> support.'"

And `landing-pages-and-conversion.md` cedes CRO's *experimental* half twice:
> line 16: "The question is which A/B variant of a brief-satisfying page wins → `growth`."
> line 197: "The question is which variant of an already-compliant brief converts better → `growth`."

**Marketing's shipped Lewis & Rao claim — cite, never re-derive** (verbatim, §3 "Why almost
nobody can run a valid lift test"):
> "Lewis & Rao (*QJE* 130(4), 2015) analyzed 25 large field experiments at major US retailers
> and brokerages ... an informative advertising experiment 'can easily require more than 10
> million person-weeks' ... Concretely, the median campaign in their dataset would need to be
> **9× larger to distinguish a genuine +50% ROI from breakeven, and 62× larger to resolve a 10%
> ROI difference.**"

**Consistency rule for growth (important, and easy to get wrong):** marketing's claim is about
**advertising lift**, where the outcome is *total sales* and the ad effect is a tiny fraction of
an enormous baseline variance. Growth's on-site experiments have a **structurally better
signal-to-noise ratio** — the outcome is a specific funnel step, the baseline variance is
binomial and bounded, and the treatment reaches 100% of the assigned arm. So growth may
legitimately say **on-site product experiments are far more measurable than ad-lift
experiments** — but §1's table shows growth's floors are *still* out of reach for small
products. The honest family line is: **"marketing's scale problem is worse; growth's is not
solved."** Do not let the pack imply that on-site testing escapes the power problem.

**Marketing already killed color psychology** (`landing-pages-and-conversion.md` §8):
> "'Blue means trust, red means urgency' is folklore, not a briefable rule ... Brief **contrast
> and isolation** instead ... color choice as a brand/visual decision stays with design."

⚠️ So growth's button-color falsification strip must be a **different claim**. Marketing killed
*color-to-emotion semantics*. Growth's target is the *experimental artifact*: the famous
button-color case studies are undenominated, unreplicated, and (per §1's table) almost
certainly underpowered for the effects they report. Adjacent, not duplicate. **D4 should be
told this** — its brief sends it at the button-color studies without knowing marketing already
occupies half that ground.

Also already shipped by marketing (don't re-derive): the eBay field experiment (Blake, Nosko &
Tadelis, *Econometrica*) with its **"over 1,400%"** overstatement figure.

### 6.3 One live inconsistency to watch

Data's shipped file states the binary rule:
> "'peek occasionally without a sequential method and without a fixed horizon' is not a valid
> third option, it's the failure mode both of these exist to prevent."

GrowthBook's docs (§2.4) are softer, saying Bayesian results "are still valid even if you stop
an experiment early" while conceding they "can suffer from the same 'peeking' problems."
These are not flatly contradictory — data's rule is about frequentist error control, and
GrowthBook is making a narrower claim about which quantities remain interpretable — but a
careless growth reference could look like it contradicts its own family. **Route any Bayesian
optional-stopping discussion through D1's primary treatment; do not resolve it from vendor
docs.** Flagged for the controller.

### 6.4 Growth-vs-operate disposition (Tamas's special question), from this slice
- **Power/MDE/feasibility gating** → unambiguously **growth**. It is about whether a *question*
  can be answered, not about system health. Nothing in operate's territory.
- **Vendor traffic floors** → **growth**, same reason.
- **Minimum-data-thresholds / "5 vs 2 conversions" guards (GrowthBook)** → **data** (measurement
  validity), already covered by data's file.
- **The "lower your significance threshold" workaround** → **growth**, as a *decision-quality*
  question (how much false-positive risk this decision can carry), which is exactly the
  design/interpretation half data disclaimed.
- No monitoring/alerting/rollout material surfaced in this slice, so no operate pivot required
  from it.

---

## 7. Never-ship candidates from this slice

| figure | source | date | why it must not ship |
|---|---|---|---|
| "60,000 visitors per variation" (2% baseline, 10% uplift) | mida.so / Donald Ng | 2025-12-05 | Silently one-sided; two-sided answer is 76,919. Understates by ~22%. |
| "<10,000 monthly visitors is too small", the whole 4-tier table | mida.so | 2025-12-05 | Bare, unsourced, no α/power/MDE stated. |
| "a few hundred visits per month" as a testing threshold | AB Tasty / Anthony Brebion | 2014-07-17 | Unsourced; ~3 orders of magnitude off the same industry's calculators. |
| "5-10 conversions per week = low traffic" | Bryan Eisenberg via VWO | undated quote | Practitioner opinion, no derivation. Rung 4. |
| "1,000 unique visitors/week or less = low traffic" | Rich Page via VWO | undated quote | Same. Rung 4. |
| "at least 5,000 visitors per week" / "100 conversions per version" / "500 conversions per week" | search aggregate | n/d | Untraced folklore cluster; falsified in kind by §4.2 arithmetic. → D4. |
| "0.1% revenue increase at Facebook = $100M+/yr" | statsig.com/blog/cuped | 2024-09-15 | UNTRACED, no source in post. |
| SE "went down from 4.73 to 2.13" | statsig.com/blog/cuped | 2024-09-15 | Toy running-times example, not a product metric; must never become "Statsig reports X% variance reduction." |
| Statsig's 48,000/group ⇒ any implied baseline CR | derived inference | — | Metric type unstated. Quote the sentence, never the inference. |

## 8. Traced-figure ledger from this slice

| figure | source | rung | status |
|---|---|---|---|
| 16σ²/δ² = the two-sided α.05/power.80 constant (exactly 15.6978) | [DERIVED] + Evan Miller 2010 + PostHog docs | 1 | ✅ verified 4 ways |
| 3,600/variant @ 10% baseline, 20% MDE | posthog.com docs | 1 | ✅ matches my 3,532 (16 vs 15.6978) |
| 13,000/variation, Optimizely calculator default | optimizely.com | 1 | ✅ back-solves to 3% baseline / 20% MDE (12,689) |
| 5,200/group → MDE 21.6%; 48,000/group → MDE 7% | docs.statsig.com | 1 | ✅ quoted verbatim, no inference drawn |
| 26.1% false-positive rate under continuous monitoring (150-obs sim) | evanmiller.org, 2010-04-18 | 3 | ✅ verbatim; scope-limited |
| Peek-correction schedule 2.9/2.2/1.8/1.4/1.0% at 1/2/3/5/10 peeks | evanmiller.org, 2010-04-18 | 3 | ✅ verbatim |
| CUPED fails on new users | docs.geteppo.com + statsig.com/blog/cuped | 1 | ✅ two independent vendors |
| Optimizely: macro-conversion testing "unrealistic for a website with lower traffic" | support.optimizely.com | 1 | ✅ verbatim |
| VWO: 5% baseline/10% lift/4 variants = "months or even years" | vwo.com, upd. 2026-07-22 | 3 | ✅ arithmetic-confirmed (29,826/arm) |

---

## 9. PRIMARY SOURCE, read in full by the lead: Kohavi et al., *Seven Rules of Thumb for Web
## Site Experimenters* (KDD 2014)

I pulled and read the actual PDF rather than trusting any summary of it. This section overlaps
D1's assignment by design — the brief instructed me to re-verify the most flagship-critical
claims directly, and these are the most flagship-critical claims in the run. Where D1's file
disagrees with this section, **this section wins**, because it is a full-text read.

**Retrieval:** `curl -sL -A "<Chrome UA>" https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf`
→ HTTP 200, 803,389 bytes, PDF 1.5, 11 pages. Text extracted with `pdftotext -layout`.
Header line on every page: "Appeared in KDD 2014. Paper available at http://bit.ly/expRulesOfThumb".
**Authors:** Ron Kohavi (Microsoft), Alex Deng (Microsoft), Roger Longbotham (SW Jiaotong
University), Ya Xu (LinkedIn). **Rung 1** (peer-reviewed industrial track + first-party data).

Data basis, verbatim from §2:
> "Sample sizes for the experiments are at least in the hundreds of thousands of users, with
> most experiments involving millions of users (numbers are shared in the specific examples)
> after bot removal, providing statistical power to detect small differences with high
> statistical significance."

⚠️ **Carry this caveat with every figure below.** The canon's rules of thumb were derived on
experiments with hundreds of thousands to millions of users. That is the scale-gating fact the
pack's wedge rests on, stated by the canon about itself.

The seven rules, as titled in the paper:
1. Small Changes can have a Big Impact
2. Changes Rarely have a Big Positive Impact to Key Metrics
3. Your Mileage WILL Vary
4. Speed Matters a LOT
5. Reducing Abandonment is Hard, [most experiments just shift clicks around]
6. Avoid Complex Designs: Iterate
7. Have Enough Users

### 9.1 🏆 THE WIN-RATE FIGURES — traced, and they are TWO DIFFERENT NUMBERS

My brief to D1 warned against blending these. The paper puts both in one section, distinctly:

> "As Al Pacino says in the movie Any Given Sunday, winning is done inch by inch. For web sites
> like Bing, where thousands of experiments are being run annually, **most fail, and those that
> succeed improve key metrics by 0.1% to 1.0%, once diluted to overall impact.** While small
> changes with big positive impact discussed in Rule #1 do happen, they are the exception."

> "Using 𝛼 = 0.05, 𝛽 = 0.20, if we have **a prior probability of success of 1/3, which is what
> we reported is the average across multiple experiments at Microsoft [7]**, then the posterior
> probability for a true positive result given a statistically significant experiment is 89%.
> However, if breakthrough results noted in Rule #1 are one in 500, then the posterior
> probability drops to 3.1%."

> "**If our success rate on ideas at Bing is about 10-20%, in line with other search engines**,
> the success rate of experiments from the set of features that the competition has tested and
> deployed to all users is higher."

**So, precisely:**

| figure | scope | attribution in this paper | status |
|---|---|---|---|
| **1/3 success rate** | "average across multiple experiments **at Microsoft**" | cited to ref **[7]** = Kohavi, Crook & Longbotham, *Online Experimentation at Microsoft*, Third Workshop on Data Mining Case Studies and Practice Prize, **2009** | ✅ traced one hop; **[7] is the true primary — D1 should fetch it** |
| **10-20% success rate** | "**at Bing** ... in line with other search engines" | stated as the authors' own figure, no citation | ✅ traced to this paper |
| **0.1% to 1.0%** | improvement of key metrics by *successful* Bing experiments, **"once diluted to overall impact"** | authors' own | ✅ traced |
| **one in 500** | rate of *breakthrough* results | offered hypothetically ("if ... are one in 500"), **not asserted as measured** | ⚠️ **illustrative, not a measurement — never ship as a statistic** |

🔴 **The pack must never say "Kohavi found that 1/3 of experiments win" without saying
*at Microsoft*, and must never apply the 1/3 figure to Bing, where the same authors say
10-20%.** These are different products at different maturity, in the same paragraph.

### 9.2 🏆 THE BAYES CALCULATION — the best flagship candidate in the entire channel

The paper gives the formula verbatim:
> "if 𝛼 is the statistical significance level (usually 0.05) and 𝛽 is the type-II error level
> (normally 0.2 for 80% power), 𝜋 is the prior probability that the alternative hypothesis is
> true ... P(TP|SS) = (1−β)π / [(1−β)π + α(1−π)]"

And its context, verbatim:
> "Results with borderline statistically significant results should be viewed as tentative and
> rerun to replicate the results [11]. ... If the probability of a true positive effect is low,
> i.e., most ideas fail to move key metrics in a positive direction, then the probability of a
> true effect when the p-value is close to 0.05 is still low."

**[DERIVED] I re-computed both of the paper's numbers and they are exactly right:**

| prior π | paper says | I compute |
|---|---|---|
| 1/3 (Microsoft average) | 89% | **88.9%** ✅ |
| 1/500 (breakthroughs) | 3.1% | **3.11%** ✅ |

**[DERIVED] extension the paper does not make, using the paper's own Bing figure:**

| prior π (your real hit rate) | P(true positive \| p<0.05) |
|---|---|
| 50% | 94.1% |
| 1/3 — Microsoft average | 88.9% |
| 20% — Bing, high end | 80.0% |
| 10% — Bing, low end | **64.0%** |
| 5% | **45.7%** |
| 1/500 — breakthrough ideas | 3.1% |

**Why this is the flagship.** It is *interpretation* — explicitly the half of experimentation
that `data` disclaimed and handed to growth (§6.1). It is fully traced to a rung-1 primary
source, and it is re-derivable from four numbers, so it can never go stale. And it says
something the tactic-list incumbents do not: **a "statistically significant winner" is not a
fact, it is a posterior — and its trustworthiness is set by your hit rate, which you knew
before you ran the test.** At Bing's own stated 10% hit rate, a third of your significant wins
are false. For a team swinging at ambitious redesigns, most of them are.

This pairs exactly with the small-sample wedge: small teams are pushed toward *bigger* bets
(the only ones their traffic can detect, per §1), and bigger bets have *lower* priors — so the
two effects compound rather than cancel. That compounding is, as far as this channel found, an
unmade argument.

### 9.3 🏆 Rule #7 "Have Enough Users" — Kohavi corrects a named traffic-floor rule of thumb

Directly on the wedge, verbatim:
> "Our advice in previous articles [11] is that you need 'thousands' of users in an experiment;
> **Neil Patel [29] suggests 10,000 monthly visitors, but the guidance should be refined to the
> metrics of interest.**"

And — critically — the canon stating that the standard power formula is only a *floor*:
> "**Formulas for minimum sample size given the metric's variance and sensitivity (the amount of
> change one wants to detect) provide one lower bound [16], but these assume that the
> distribution of the mean is normal.** Our experience is that many metrics of interest in
> online experiments are skewed which may require a higher lower bound before you can assume
> normality."

The paper's own rule, verbatim:
> "Our rule of thumb for the minimum number of independent and identically distributed
> observations needed for the mean to have a normal distribution is **355 × 𝑠²** for each
> variant, where 𝑠 is the skewness coefficient of the distribution of the variable X"
> "We recommend the use of this rule when the |skewness| > 1."
> "This rule was derived from the work of **Boos and Hughes-Oliver [43]**."

**The Bing table, verbatim** ("the sensitivity (% change detectible at 80% power) such a sample
size provides"):

| Metric | \|Skewness\| | Sample Size | Sensitivity |
|---|---|---|---|
| Revenue/User | 17.9 | 114k | 4.4% |
| Revenue/User (Capped) | 5.2 | 9.7k | 10.5% |
| Sessions/User | 3.6 | 4.70k | 5.4% |
| Time To Success | 2.1 | 1.55k | 12.3% |

And the commerce datapoint:
> "At a commerce site, the skewness for purchases/customer was >10 and for revenue/customer >30."

**[DERIVED] arithmetic check of the table against the paper's own 355 × s² rule:**

| metric | s | 355·s² | paper | verdict |
|---|---|---|---|---|
| Revenue/User | 17.9 | 113,746 | 114k | ✅ |
| Revenue/User (Capped) | 5.2 | 9,599 | 9.7k | ✅ |
| Sessions/User | 3.6 | 4,601 | 4.70k | ✅ |
| Time To Success | 2.1 | 1,566 | 1.55k | ✅ |
| commerce revenue/customer | >30 | **>319,500** | — | [DERIVED] |
| commerce purchases/customer | >10 | **>35,500** | — | [DERIVED] |

⚠️ **Internal discrepancy in the primary source, flagged so nobody ships the wrong one.** The
table gives Revenue/User skewness **17.9**, but the body text says:
> "In the table above, we found Revenue/User had a skewness of **18.2** and therefore 114k users
> were needed."

355 × 17.9² = 113,746 ≈ 114k ✅ — consistent. 355 × 18.2² = 117,590 ≈ 118k ✗ — inconsistent
with the stated 114k. **The table's 17.9 is the internally consistent value; the text's 18.2 is
the typo.** Cite 17.9. (A nice, real, checkable instance of Twyman's law applied to the canon
itself.)

**What this licenses — and it is a lot.** The teaching is not "you need 114k users." It is
**the required sample depends on the metric's shape, and revenue-type metrics are the worst
case.** A solo founder's instinct — "I'll just measure revenue per user, it's what matters" —
picks the single hardest metric in the table: **114k users per arm at Bing, and >319,500 per
arm at the commerce site**, before any power consideration, purely to make the mean normal.
Meanwhile *Time To Success* needed 1,550. **Metric choice moves the feasibility threshold by
two orders of magnitude** — and that is a design decision, i.e. growth's, not data's.

**What it does NOT license:** these are Bing's and one commerce site's skewness values.
Skewness is product-specific. The pack must teach *measure your own skewness and apply
355 × s²*, not "revenue needs 114k."

### 9.4 Other durable extracts

Twyman's law, verbatim — ✅ **matches data-skill's shipped wording, no family conflict:**
> "When results are exceptionally strong, we learned to call out Twyman's law [27]: Any figure
> that looks interesting or different is usually wrong!"

The psychological asymmetry behind it (a good addition to the family's Twyman material, which
currently ships the rule but not the mechanism):
> "Human reaction is naturally different to results in different directions. We are inclined to
> resist and question negative results to our great new feature that is being tried, so we drill
> deeper to find the cause. However, when the effect is positive, the inclination is to
> celebrate rather than drill deeper and look for anomalies."

On experiment duration and novelty effects:
> "which is why we recommend running experiments for two weeks and looking for such effects. In
> practice, novelty and primacy effects are uncommon [11; 18]."

⚠️ Note that the canon calls novelty/primacy effects **uncommon** — this cuts against the very
common practitioner claim that novelty effects routinely explain away early wins. Falsification
candidate; hand to **D4**.

On replication (Rule #3, "Your Mileage WILL Vary"), from the Summary:
> "The third rule warns about claimed results 'in the wild,' which we learned to be cautious
> about. **Make sure to replicate ideas, as they may not have the same effect (or even a
> positive effect).**"

🔥 **This is the canon's own endorsement of the CRO-case-study falsification strip.** Kohavi is
explicitly warning against transplanting published case-study results. **D4 should cite Rule #3
as its rung-1 evidence class against agency case studies.**

On simple designs over MVT:
> "While the literature on Multi-Variable Testing (MVT) is rich, and commercial products tout
> their MVT capabilities, we usually find it more beneficial to run simple uni-variable (e.g.,
> A/B/C/D variant of a feature) or bi-variable designs."
> "Complicated MVTs that rely on a lot of new code tend to be invalid because bugs are found in
> the code for at least one of the variables."

### 9.5 Growth-vs-operate disposition — a clean instance from the canon

The paper uses experiments for **exposure control**, and says so:
> "We encourage our engineering teams to deploy new code quickly and use experiments to provide
> a form of **exposure control**: start with small 1% treatments, then ramp up if there are no
> egregious declines in key metrics."
> "without exposure control provided through controlled experiments, you run the risk of
> repeating a deployment like the one Knight Capital did, which in Aug 2012 caused a **$440
> million loss and erased 75% of Knight's equity value**."

**Disposition: this is `operate`, not `growth`** — and it is the sharpest illustration yet of
Tamas's seam. Identical machinery (a 1% treatment behind a flag), but the *intent* is risk
containment, and the *decision rule* is inverted: a ramp asks **"has anything broken?"** and
proceeds on the null, whereas an experiment asks **"did this help?"** and proceeds on a
rejected null. Growth should cite this as the canonical worked example of the seam and route
the ramp mechanics to `operate`.

⚠️ The **Knight Capital $440M / 75% equity** figures are secondhand in this paper (no citation
given) and are a 2012 finance-industry anecdote, not a growth magnitude. **Never-ship.**

### 9.6 Corrections this section forces on my earlier sections

- §5's claim that Seven Rules states 16σ²/δ² — **withdrawn**, see the correction in §5.
- §1's table should be presented with Rule #7's caveat attached: for skewed metrics
  (|skewness| > 1) the power-based n in my table is a **lower bound only**, and the binding
  constraint may be 355 × s². For a low-baseline binary conversion metric the table stands;
  for revenue-per-user it does not.

---

## 10. 🏆 THE TRUE PRIMARY FOR "ONLY 1/3 OF EXPERIMENTS WIN" — traced to the end of the chain

The single most-repeated number in the experimentation field. §9.1 traced it one hop, to
reference [7]. I then fetched [7] itself and found the original sentence. **The chain now
terminates at a primary source.**

**Citation:** Ron Kohavi, Thomas Crook, Roger Longbotham (all Microsoft, Experimentation
Platform), *"Online Experimentation at Microsoft"*, Third Workshop on Data Mining Case Studies
and Practice Prize, **2009**. Paper's own header: "This paper won 3rd place at the Third
Workshop on Data Mining Case Studies and Practice Prize / See http://exp-platform.com/expMicrosoft.aspx".
**Retrieval:** `curl -sL -A "<Chrome UA>" https://exp-platform.com/Documents/ExP_DMCaseStudies.pdf`
→ HTTP 200, 911,418 bytes, 11 pages, `pdftotext -layout`. **Rung 1.** Full text read.

### 10.1 The sentence itself, verbatim (Section 5, "Most Ideas Fail to Show Value")

> "When we first shared some of the above statistics at Microsoft, many people dismissed them.
> Now that we have run many experiments, we can report that Microsoft is no different.
> **Evaluating well-designed and executed experiments that were designed to improve a key
> metric, only about one-third were successful at improving the key metric!**"

Corroborated by the paper's own complement, in Section 7:
> "metrics they were supposed to improve, or hurting them, and **at Microsoft, these two cases
> account for 66% of experiments.**"

(66% failing ↔ ~1/3 succeeding — internally consistent. ✅)

### 10.2 🔴 THE SCOPE CONDITIONS EVERYONE DROPS — and the missing denominator

Four qualifiers sit in that one sentence, and the popular restatement drops all four:

1. **"well-designed and executed"** — the denominator is *good* experiments. Botched ones are
   excluded, so this is **not** "1/3 of ideas work"; it is "1/3 of *competently tested* ideas
   work." The popular version inflates the failure rate's apparent scope.
2. **"designed to improve a key metric"** — restricted to experiments with that stated intent.
3. **"successful at improving the key metric"** — success is judged against *the metric it
   targeted*, not against any metric that happened to move.
4. **"at Microsoft"** — one company, ~2009, across "over a dozen Microsoft properties."

🔴 **And the finding that matters most: the paper states NO SAMPLE SIZE for this statistic.**
There is no N, no date range, and no per-property breakdown attached to the one-third claim.
The most-cited quantitative fact in the experimentation field **has no published denominator in
its own primary source.** That is not a reason to discard it — it is first-party reporting by
the team that ran the platform, which is genuinely rung 1 — but the pack must present it as
**"Microsoft's reported experience, ~2009, denominator not published,"** never as a measured
industry rate. This is a textbook never-ship-without-its-scope figure.

### 10.3 The full genealogy of "most experiments fail" — every ancestor, in one place

Section 5 assembles the entire folklore lineage, which means **this one page is the origin of
most of the win-rate numbers circulating today.** All of the following are **secondhand within
this paper** — Kohavi et al. are quoting others. Anyone citing these *via* Kohavi is at two
removes. Verbatim:

| claim | who | how it reaches us | rung |
|---|---|---|---|
| "80% of the time you/we are wrong about what a customer wants." | Avinash Kaushik, *Experimentation and Testing primer* (Kaushik, 2006) | quoted by Kohavi et al. | 4 — practitioner assertion, no method |
| "the author writes that **Netflix considers 90% of what they try to be wrong**" | Moran, *Do It Wrong Quickly* (2007), p. 240 | Kohavi et al. quoting Moran **characterizing Netflix** | 4 — **two removes from Netflix; Netflix never says this in first person here** |
| "in the five years I've been running tests, I'm only about as correct in guessing the results as a major league baseball player is in hitting the ball. That's right - I've been doing this for 5 years, and I can only 'guess' the outcome of a test about **33%** of the time!" | Regis Hadiaris, Quicken Loans, via (Moran, 2008) | quoted by Kohavi et al. | 3 — named practitioner, but it measures *his forecasting accuracy*, **not an experiment win rate** |
| QualPro "tested **150,000** business improvement ideas over **22 years** and reported that **75 percent** of important business decisions and business improvement ideas either have no impact on performance or actually hurt performance" | Holland et al., 2005 | quoted by Kohavi et al. | 3 — **has a real denominator**; offline multivariate consulting, not web |
| "false theories melt away like snowflakes in the sun... One quickly loses his conceit by learning how often his judgment errs--**often nine times in ten**." | mail-order advertising quotation | quoted by Kohavi et al. | 4 — early-20th-c. aphorism |

🔥 **Two high-value corrections the pack can make, both checkable:**

- **The "Netflix says 90% of what they try is wrong" stat is not a Netflix claim.** Its earliest
  traceable form here is a 2007 *book author's characterization* of Netflix, re-quoted by
  Kohavi in 2009, and repeated ever since as if Netflix had published it. **Falsification-strip
  material.** (**D2** should check whether Netflix's own TechBlog ever states a win rate in
  first person — if it does not, that closes the strip.)
- **The Hadiaris 33% is not a win rate.** It is one person's accuracy at *predicting* test
  outcomes, which is a different quantity from the fraction of experiments that win. Its
  numerical coincidence with Microsoft's one-third is almost certainly why the two get conflated.
  **Anyone citing "33%" should be asked which of the two they mean.**

### 10.4 What this licenses the pack to say

✅ Licensed: *"Microsoft reported that among well-designed, well-executed experiments intended
to improve a key metric, only about one-third did (Kohavi, Crook & Longbotham, 2009); the same
authors later reported a 10-20% success rate at Bing (Kohavi et al., KDD 2014). Neither figure
carries a published denominator."*

❌ Not licensed: "one third of A/B tests win" (drops all four qualifiers and the company);
"Netflix says 90% of their ideas fail" (not a Netflix statement); "the industry win rate is
33%" (one company, ~2009, no N); any use of the 1/3 prior for a product that is not Microsoft —
though the **structure** of the Bayes argument in §9.2 transfers to *any* prior, which is
exactly why the pack should teach the formula and make the reader supply their own π.

### 10.5 Disposition note

This whole section is **interpretation** — what a result *means* given what you knew before you
ran it. Per data-skill's own scope guard (§6.1), interpretation is explicitly growth's. Nothing
here belongs to `operate`.

---

## 11. CONTROLLER-REQUESTED VERIFICATIONS (2026-08-01, second pass)

### 11.1 🏆 The peeking / repeated-significance inflation table — CONTESTED CLAIM RESOLVED

**The dispute.** A skill repo (RBraga01) claims α inflates to **0.23 at 5 interim checks**.
Channel A's lead held **~0.14 at 5 and ~0.25 at 20**, from memory of Armitage, McPherson & Rowe
(1969). Flagship-critical; neither shippable unverified.

**Primary citation, confirmed:** P. Armitage, C. K. McPherson, B. C. Rowe, *"Repeated
Significance Tests on Accumulating Data"*, **Journal of the Royal Statistical Society, Series A
(General), 132(2), 235–244, 1969**, DOI 10.2307/2343787. Abstract verbatim (fetched from Oxford
Academic, 2026-08-01):

> "If significance tests at a fixed level are repeated at stages during the accumulation of data
> the probability of obtaining a significant result when the null hypothesis is true rises above
> the nominal significance level. Numerical results are presented for repeated tests on
> cumulative series of binomial, normal and exponential observations."

The paper's Table 2 is behind a paywall. **Two independent published anchor points** were
obtained from Daniël Lakens, *Improving Your Statistical Inferences*, ch.10 (open-access
textbook, lakens.github.io, fetched 2026-08-01), which cites Armitage et al. (1969) by full
citation:

> "with equally spaced looks, the alpha level inflates to **0.142 after 5 looks, 0.374 after 100
> looks, and 0.530 after 1000 looks**."

**[DERIVED] I then computed the whole table myself** rather than ship two anchors and guesswork.
The method is fully specified in the literature — Lan & DeMets (1994) describe it as *"a
recursive density function, evaluated by numerical integration as described by Armitage et al."*
Setup: K equally sized groups; cumulative statistic Z_k = S_k/√k; a **two-sided test at a
constant nominal α = 0.05 at every look**; stop and reject the first time |Z_k| > 1.96. Propagate
the sub-density of S_k through the continuation region, convolving with the N(0,1) increment.
Script: `scratchpad/armitage.py`.

| K looks | overall Type I error |
|---|---|
| 1 | **0.0500** ← exact, validates the method |
| 2 | 0.0833 |
| 3 | 0.1075 |
| 4 | 0.1265 |
| **5** | **0.1418** |
| 6 | 0.1551 |
| 8 | 0.1765 |
| 10 | 0.1934 |
| 15 | 0.2252 |
| **20** | **0.2480** |
| 25 | 0.2659 |
| 50 | 0.3207 |
| 100 | **0.3737** |

✅ **Validation — the computation reproduces both published anchors exactly:** K=5 → 0.1418 vs
Lakens/Armitage **0.142**; K=100 → 0.3737 vs **0.374**. And K=1 → 0.0500 exactly, which is the
strongest possible sanity check (one look must return the nominal level). Converged: at grid
steps h = .01/.005/.002/.001 the K=20 value moves only 0.24817 → 0.24798.

🔴 **VERDICT.**
- **Channel A's lead is CORRECT.** 0.142 at 5 looks, 0.248 at 20 looks.
- **RBraga01's "0.23 at 5 checks" is WRONG.** 0.23 is the value at **~16 looks**, not 5. The
  claim overstates the inflation at 5 looks by a factor of about 1.6, or equivalently misplaces
  the number of looks by ~3×. **Do not ship it. It is also a good specimen for the incumbent-
  quality argument: a confidently stated, uncited, wrong number in a shipped skill.**
- Not explainable as a one-sided variant either: the one-sided-per-tail analogue gives 0.2595 at
  K=5, which is not 0.23 and is a different setup anyway.

🔥 **The reconciliation the pack needs — these are all the same curve, not competing claims.**
The literature's three headline peeking numbers look inconsistent and are not:

| Source | Number | Setup | Where it sits on the curve |
|---|---|---|---|
| Armitage et al. 1969 | 0.142 | **5 discrete equally spaced looks**, constant nominal α | K=5 |
| Evan Miller 2010 (rung 3) | 0.261 | continuous monitoring, 150-obs max, stop at first significance | ≈ K=25 (0.266) — **an excellent match** |
| Johari et al. KDD 2017 (rung 2) | "inflated by **5-10x**" at 10,000 samples → 25–50% | continuous monitoring | the many-looks region |
| Johari et al. KDD 2017 | → **100%** | continuous monitoring, unbounded | K→∞ limit |

**Continuous monitoring is the K→∞ limit of the Armitage table.** That is why Miller's 26% and
Johari's 25–50% are far above Armitage's 5-look 14%, and it is why the table climbs without
bound. Teaching them as one curve — *"how many times did you look?"* — is both correct and far
more useful than quoting one number.

⚠️ **Scope discipline for whichever number ships:** the Armitage figures assume a **constant
nominal threshold at equally spaced looks**. They do **not** apply to a group-sequential design
with alpha-spending (O'Brien-Fleming/Pocock), which exists precisely to hold the overall rate at
0.05. Always state K, the nominal α, and two-sidedness.

### 11.2 CUPED company sources — traced past GrowthBook to the primaries, and one correction

The controller asked for the Netflix/Microsoft primary URLs so the pack can cite the companies
directly rather than via GrowthBook. Both are real; **one is selectively cited.**

GrowthBook's CUPED doc (`docs.growthbook.io/statistics/cuped`, fetched 2026-08-01) states:
> "In 2016, Netflix reported that CUPED reduced variance by roughly ~40% for some key engagement
> metrics" → cites https://www.kdd.org/kdd2016/papers/files/adp0945-xieA.pdf
> "In 2022, Microsoft reported that, for one product team, CUPED was akin to adding 20% more
> traffic to analysis of a majority of metrics" → cites
> https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/deep-dive-into-variance-reduction/

#### 11.2a 🔒 Netflix — VERIFIED at primary, and it hands us a major finding

**Citation:** Huizhi Xie, Juliette Aurisset (Netflix), *"Improving the Sensitivity of Online
Controlled Experiments: Case Studies at Netflix"*, **KDD 2016**. PDF fetched and read.

> "For existing users, we have the flexibility of correcting streaming thresholds with the same
> metric prior to the experiment. Hence the amount of variance reduction is **consistently
> around 40%** for all the streaming thresholds."
> "For streaming thresholds, the variance reduction for existing users **can be up to 40%**
> because we included pre-experiment streaming activity as a stratification dimension or in the
> post-assignment correction."

✅ GrowthBook's rendering of Netflix is **fair**. Scope: **existing users, streaming-threshold
metrics.**

🔥 **But the paper's adjacent sentences are worth more to us than the 40%:**

> "For **new users**, the amount of variance reduction achieved is **very low** regardless of the
> metric or the variance reduction technique used. This is due to the lack of covariates highly
> correlated with the business metrics for these users at the time of cell assignment. Indeed,
> the Pearson correlation between the covariates and business metrics ranges from **0.2 to 0.4**
> for new users."

> "For **retention**, while the amount of variance reduction is **small for both new and existing
> users**, it is higher for new users."

**This is the fourth independent source on the new-user limitation** (after the CUPED primary,
Eppo, and Statsig) — and the **first source on the retention limitation**, which nobody else in
this corpus states. Note the two are separate failures: new users lack covariates; **retention
resists variance reduction even for existing users with full history.**

🔥 **Sharpened seam finding.** CUPED — the field's main answer to "my sample is too small" —
performs worst on **exactly the two things a growth pack is about**: *activation* (new users) and
*retention*. Netflix, with hundreds of millions of users, says so in its own KDD paper. The
small-sample problem cannot be variance-reduced away where growth lives. This upgrades §1.5 of
the channel report from a three-source to a **four-source finding with a second, distinct
mechanism**.

#### 11.2b 🔴 Microsoft — the figure is REAL but GrowthBook cites only the favourable half

**Citation:** Laura Cosgrove, Jen Townsend, Jonathan Litz, *"Deep Dive into Variance Reduction"*,
Microsoft Experimentation Platform (ExP), **2022-11-15**. Data basis: *"12-week sample of
week-long experiments."*

The article reports **two product surfaces with opposite outcomes**:

| Surface | Reported result |
|---|---|
| Surface 1 | **">68% of metrics have effective traffic multiplier ≤1.05x"** — i.e. for most metrics, CUPED bought essentially **nothing** |
| Surface 2 | **">55% of metrics have effective traffic multiplier >1.2x"** — the 20%+ figure |

And a separate **simulated** figure, which is not an empirical result:
> "From a simulated total R² of 0.4, the median effective traffic multiplier is **1.66** in
> simulations. This translates to a power gain of **22%**."

⚠️ **Three cautions, all live:**
1. **GrowthBook cites Surface 2 and omits Surface 1.** Its sentence ("for one product team… a
   majority of metrics") is *literally* defensible but drops the companion surface where >68% of
   metrics got ≤5%. **The article's actual thesis is that CUPED efficacy varies enormously
   between products** — *"The effectiveness of CUPED-VR is influenced by various attributes of
   the product, telemetry, experiment, and metric."* **Cite Microsoft directly, not via
   GrowthBook.**
2. **Two different ~20% numbers are in the article and they mean different things** — a *22%
   power gain* from a **simulated** 1.66× multiplier, versus an empirical **>1.2× traffic
   multiplier** on Surface 2. Do not merge them, and never present the simulated one as measured.
3. "1.66× traffic" and "20% more traffic" are **not the same quantity**; anyone compressing this
   article to a single number will get it wrong.

**Family consistency:** data-skill ships these two figures sourced to GrowthBook and correctly
labelled *"vendor-reported, not independently verified."* That labelling was right, and this pass
now supplies the primaries. Growth should cite **Xie & Aurisset (KDD 2016)** and **Cosgrove/
Townsend/Litz (Microsoft ExP, 2022-11-15)** directly, and **must carry Surface 1** whenever it
carries the Microsoft number. This does not contradict data's file; it completes it.

---

## Appendix — reproduction script

```python
from statistics import NormalDist
nd = NormalDist(); z = nd.inv_cdf
za2, za1, zb = z(0.975), z(0.95), z(0.80)
def n_pooled(p, rel, za=za2, zb=zb):
    d = rel * p
    return 2*(za+zb)**2 * p*(1-p) / d**2
def n_exact(p, rel, za=za2, zb=zb):
    p1, p2 = p, p*(1+rel); d = p2-p1
    return (za+zb)**2 * (p1*(1-p1)+p2*(1-p2)) / d**2
# n_pooled(0.10, 0.20) -> 3532   (PostHog says 3,600 using 16)
# n_pooled(0.03, 0.20) -> 12689  (Optimizely calculator shows 13,000)
# n_pooled(0.02, 0.10) -> 76919 two-sided; with za=za1 -> 60589 (mida.so says 60,000)
```
