# Experiment design and feasibility

Purpose: Decide, before anything is designed or shipped, whether a question can be answered at
your actual traffic — and once it can, size the test honestly and know in advance what a
"significant" result will actually be worth. This is the pack's flagship: every other growth
reference that proposes running a test assumes this file's gate has already been cleared.

Read when:
- Before committing to an A/B test, to check whether the question is answerable at your traffic
  and a duration you're willing to wait, not just whether the answer would be nice to know.
- Choosing which metric to test on, when more than one candidate metric is available.
- Deciding how many treatment arms to run, what significance threshold to use, and how often
  you intend to look at the result before a planned end date.
- The instinct is "we don't have enough traffic to test this" — before accepting that, check
  whether a different metric or a bigger bet changes the answer.

Skip when:
- The test is already running or has ended and you're reading the result — →
  [experiment-readout-and-learning.md](experiment-readout-and-learning.md).
- The question is whether the experiment's *underlying numbers* can be trusted once it's running
  — assignment integrity, SRM, CUPED's mechanics, or which peek-safe monitoring method to
  implement. That is `data`'s `experiment-measurement-foundations.md`, whose own scope guard
  states it plainly: it owns measurement **validity**, not **design** (what to test, how to size
  a rollout) or **interpretation** (what a validated result means for a decision) — both of
  those are this file's job. Decline and route to `data` when the request is "can this
  experiment's numbers be trusted"; use this file when the request is "should we run this test."
- Randomization isn't possible at all — a pricing change everyone sees at once, a single market,
  a marketplace with spillover between arms — → [quasi-experiments.md](quasi-experiments.md).
- The question is domain tactics for a specific funnel stage rather than whether or how to size
  a test on it — see the relevant job or surface file; this file is the statistical gate
  underneath all of them.

Inputs: current traffic/conversion volume at the funnel step in question, the metric you were
about to default to, how many treatment arms and how often you intend to check the result before
a planned end date, and — if you have any honest read on it — your own historical hit rate on
this kind of change.

Produces: a yes/no on whether the question is answerable at your scale; if yes, a required
sample size, duration, and a stated K/α/sidedness discipline for reading the result; if no, a
specific redirect — a bigger effect, an upstream metric, or a documented decision to skip the
test — never a bare "you can't test this."

## Contents
- 1. The gate: can this question be answered here
- 2. The power table, and where "16" comes from
- 3. Metric choice moves the gate by two orders of magnitude
- 4. A significant result is a posterior, not a fact
- 5. The Ambition Tax
- 6. CUPED will not rescue you here
- 7. When the gate says no
- Validation
- Failure modes and handoff

---

## 1. The gate: can this question be answered here

*If you're here to size a test, jump to §2.*

Before a hypothesis gets written down or a flag gets created, answer one question: at your
traffic, over a duration you're actually willing to wait, can this specific comparison reach a
power you'd trust? Skip this and you inherit the ecosystem's most common failure mode — even
careful incumbent suites go straight from hypothesis to flag to metrics with no sample-size or
MDE step in between, leaving the power calculator to appear later, in the diagnostic path, as
something you should already have used. That gap is real and worth naming respectfully: the
validity layer these tools ship (SRM checks, sequential-testing math, guardrail metrics) is
genuinely good. What's missing everywhere is the feasibility question asked *first*.

This is also where the growth-vs-operate boundary gets decided, not discovered after the fact.
The same machinery — a percentage of traffic behind a flag — serves two different intents, and
the intent decides the decision rule: **a standing threshold on the live system is operate's
concern; the same metric bound to a single tested change's decision is growth's.** A gradual
rollout asks "has anything broken?" and proceeds on the null; an experiment asks "did this
help?" and proceeds only on a rejected null. The canon's own worked example makes this concrete:
"deploy new code quickly and use experiments to provide a form of exposure control: start with
small 1% treatments, then ramp up if there are no egregious declines in key metrics" (Kohavi,
Deng, Frasca, Walker, Xu, Pohlmann, *Seven Rules of Thumb*, KDD 2014) — identical infrastructure
to an A/B test, but that 1% ramp is operate's risk containment, not growth's learning. If what
you're building is a threshold gating a release, this file doesn't apply; if it's a question
with a rejected-null decision at the end, keep reading.

This isn't just the pack's own inference — the ecosystem draws the same line in its own words,
with one honest counter-trend. GrowthBook's own doctrine states its Safe Rollouts are "designed
for operational decision-making, not learning. The primary goal is to ensure a safe release, not
to measure long-term impact," and that they "bias towards action" — if inconclusive at the end,
ship, because "there's no clear evidence that the feature is harmful" (`features/safe-rollouts.mdx`)
— inverting the experiment default, where inconclusive means don't act. Optimizely brands the
identical split as two separate products on one SDK: **Feature Experimentation** ("experiment at
every step") versus **Rollouts**, free feature flags for "mitigating risk." Kohavi argues the
rule from the learning side: don't reach for a cautious risk-ramp when the actual goal is an
answer — "if you need 100K users in the treatment... it will take you five weeks when allocating
10%... you're better off running at 50% and getting the answer five times faster" (2025-02-17,
[@ronnyk, status/1891629899573756152](https://x.com/ronnyk/status/1891629899573756152)). Counter-trend,
stated honestly: Datadog Experiments applies the operate framing to experimentation
commercially — its own copy reads "ship with confidence... catch issues early... protect
users... reduce risk" — and OpenFeature, the vendor-neutral flag spec, declines to define
"experiment" at all; no infrastructure-layer contract exists to settle this seam.

The same machinery produces one more collision worth naming on sight: "canary" carries three
distinct meanings. A **canary release** / progressive rollout is operate's, in the sense above. A
**canary monitor** — a synthetic self-check, e.g. detecting a broken or unstable precomputed
result in a pipeline — is also operate's, but a different mechanism entirely, not risk-mitigated
traffic exposure. A **canary-sized experiment** — a small-percentage A/B test — is growth's, and
per Kohavi's argument above is usually a power mistake when the actual intent is learning rather
than containment.

## 2. The power table, and where "16" comes from

For a standard two-proportion test at α=.05 two-sided and 80% power, the sample size per arm is
governed by a constant: 2(z₀.₉₇₅ + z₀.₈₀)² = **15.6978** — anyone rounding this to "16" is
implicitly committing to exactly these assumptions, and moving either one moves the constant.

| baseline CR | +2% rel. | +5% rel. | +10% rel. | +20% rel. | +50% rel. |
|---|---|---|---|---|---|
| 1% | 3,885,196 | 621,632 | 155,408 | 38,852 | 6,217 |
| 2% | 1,922,976 | 307,677 | 76,920 | 19,230 | 3,077 |
| 3% | 1,268,903 | 203,025 | 50,757 | 12,690 | 2,031 |
| 5% | 745,644 | 119,303 | 29,826 | 7,457 | 1,194 |
| 10% | 353,200 | 56,512 | 14,128 | 3,532 | 566 |
| 20% | 156,978 | 25,117 | 6,280 | 1,570 | 252 |
| 30% | 91,571 | 14,652 | 3,663 | 916 | 147 |

Figures are exposures per arm, not sessions or pageviews. **Halving the effect you want to
detect quadruples the traffic you need** — the single most useful sentence in this file for a
reader deciding whether to keep reading.

This table is computed in **pooled-variance mode** — 2(z₀.₉₇₅+z₀.₈₀)² × baseline-variance / d²,
the same approximation behind the "16×variance/d²" vendor shorthand — and every cell is
ceiling-rounded to a whole exposure via `assets/power_calc.py --pooled`, not hand-computed. The
shipped calculator **defaults to unpooled** (the exact two-sample formula; its own docstring
states the preference), because pooled assumes the treatment rate stays close to the baseline
rate — a fair approximation at small MDEs, a worse one as the bet gets bolder. At this table's
boldest column the two modes diverge by up to **~25% more required exposures under unpooled**
(1% baseline, +50% relative: 6,217 pooled vs. 7,747 unpooled); at the table's smallest MDEs they
agree to within a percent or two. **Trust the calculator for an actual sizing decision; trust
this table for the order of magnitude and for checking a vendor's own stated floor**, which is
what §2's vendor comparisons below are doing.

Vendors' own stated floors corroborate the table rather than contradict it, worth citing
respectfully as competent prior art:

- **PostHog**: N = 16 × variance / d², worked example 10% baseline, 20% relative MDE → 3,600
  per variant (this table, at 15.6978: 3,532 — the gap is the 16-vs-15.6978 rounding above).
- **Optimizely**'s calculator renders 13,000 per variation on its own defaults, which back-solve
  to 3% baseline / 20% relative MDE (this table: 12,690) — the vendor's own optimistic default
  already demands 26,000 total exposures.
- **Statsig**: after one week the expected count per group is 5,200 at a 21.6% MDE; by week
  four that grows to roughly 48,000 per group as the detectable MDE falls to 7%. Same law,
  restated as a time series instead of a table.
- **Booking.com**'s own open-source calculator (`bookingcom/powercalculator`, MIT) ships a
  default scenario — 10% baseline conversion, a 2% *relative* lift, 80% power, and a
  deliberately permissive α=0.10 — that requires **561,364 total visitors**. At their own
  default traffic (40,098/day) that's 14 days; at 500/day it's 1,123 days, **3.1 years**.
  Nothing here is a benchmark; it's arithmetic from a shipped default, reproducible by anyone.

Note the α=0.10 in Booking's own defaults: "significance is always 5%" is a knob, not a law —
one both Booking and Meta's GeoLift (see [quasi-experiments.md](quasi-experiments.md)) move
deliberately, at a stated cost in false positives, because units are scarce for them too.

## 3. Metric choice moves the gate by two orders of magnitude

The power table in §2 assumes a normal sampling distribution. It's a lower bound, not a
guarantee: *"many metrics of interest in online experiments are skewed, which may require a
higher lower bound before you can assume normality"* (*Seven Rules of Thumb*, KDD 2014). The
paper's own rule, derived from Boos and Hughes-Oliver: when |skewness| > 1, the binding sample
size is **355 × s²** per variant, not the table above.

Bing's own post-erratum table shows what that means in practice, on metrics from one real site:

| Metric | \|Skewness\| | Sample size needed |
|---|---|---|
| Revenue/User | 17.9 | ~114,000 |
| Revenue/User (capped) | 5.2 | ~9,700 |
| Sessions/User | 3.6 | ~4,700 |
| Time To Success | 2.1 | ~1,550 |

**Don't transplant these numbers — they belong to Bing's own metric distributions.** The
teaching is the *shape*: choosing revenue-per-user over time-to-success as a success metric can
move the required sample by roughly two orders of magnitude on the same underlying change, and
that choice is a design decision that belongs here, not a measurement detail downstream. A
founder's instinct — "I'll measure revenue per user, it's what matters" — routinely selects the
single hardest metric available. Measure your own skewness before trusting §2's table for
anything revenue-shaped — `assets/skew_check.py` computes it from a metric sample and applies
this rule directly, rather than eyeballing a distribution; a site with purchase or revenue skew
above 10 or 30 respectively can need normality samples in the tens or hundreds of thousands
before that table even applies.

## 4. A significant result is a posterior, not a fact

*Seven Rules of Thumb*'s Rule #2, stated in full and worth re-deriving rather than trusting
secondhand:

> P(TP|SS) = (1−β)π / [(1−β)π + α(1−π)]

where α is your significance level, β is your type-II error rate, and π is your **real prior
probability that the change you're testing actually works** — not the probability the test
returns "significant," the probability you were right before you ran it. At α=0.05, β=0.20 (80%
power), the paper's own worked numbers: a 1/3 prior yields an 89% posterior that a significant
result is a true positive; a 1-in-500 prior — offered by the paper as a hypothetical for
"breakthrough" ideas, never as a measured rate — drops that posterior to 3.1%.

Extending the same formula with real, sourced hit rates rather than round numbers:

| your real prior hit rate | P(true positive \| p<0.05) |
|---|---|
| 50% | 94.1% |
| 1/3 — Microsoft's reported average (2009, no published denominator) | 88.9% |
| 20% — Bing's high end (KDD 2014) | 80.0% |
| 10% — Bing's low end | 64.0% |
| 5% | 45.7% |

**A "statistically significant winner" is not a fact — it is a posterior, and its
trustworthiness is set entirely by a hit rate you knew before you ran the test.** Two
experiments can produce the identical p-value and mean completely different things, because
they came from different priors. This is the half of experimentation that measurement-validity
checks cannot give you: a clean SRM check tells you the *numbers* are trustworthy; this table
tells you what a clean, significant number is actually worth.

A dramatic, surprising result is exactly the kind of claim you'd assign a *low* prior — which
this same formula says makes it *less* trustworthy at an identical p-value, not more impressive.
See [experiment-readout-and-learning.md](experiment-readout-and-learning.md) for that idea
connected to Twyman's Law at the point you'd actually need it: staring at a result, not planning
a test.

## 5. The Ambition Tax

Two facts compound in exactly the wrong direction for a small operator.

**Fact one — winning estimates are biased upward, and the bias has a name and a size.** Picking
a statistically significant result inflates the estimated effect: 13% at 80% power with one
treatment arm, 21% with two, 25% with three — and counterintuitively **30% if you
Bonferroni-correct to hold the family-wise error rate**, because a stricter threshold selects
even more extreme draws from the noise (Kohavi, 2024-10-26). Apply this haircut to every winning
number before acting on it. A live worked example: a caching speedup measured +0.36% revenue per
user; after a sequential-inference haircut the reported, trusted figure was ~0.3% (Talabat /
Delivery Hero, 2025).

**Fact two — small samples force the bets you can detect to be bigger, and bigger bets carry
lower priors.** From §2, detecting a 2% relative lift needs roughly 4–20× the traffic of
detecting a 20% relative lift, at every baseline. A team without traffic for a 2% test is
mechanically pushed toward testing 20%+ swings instead — the only effect sizes their sample can
resolve at all. But per §4, a bigger, bolder change is exactly the kind of idea a reasonable
person assigns a *lower* prior probability of success. **The two effects don't cancel, they
multiply: the smaller your sample, the more ambitious your test must be, and the more ambitious
your test, the less a significant result on it actually means.** Call this the **Ambition Tax** —
every small-sample team pays it twice, once in the bet size the traffic forces and once in the
posterior that bet size implies, and no amount of careful analysis on the back end removes it.

This isn't a contrarian position — it's Kohavi's own, stated with the toolkit attached rather
than as a refusal. For e-commerce conversion work he states a floor of roughly 200,000 users for
adequate power, and adds directly: *"the statistics do not support A/B tests with 5,000 users
under common goals and assumptions"* (2024-10-30). He then names three levers rather than
stopping at "you can't test":

- **Swing for the fences.** Only chase changes large enough to matter at your power — "in
  medicine, vaccines need to be 50%+ effective" to be worth testing at plausible trial sizes.
- **Move upstream.** A metric measured earlier in the funnel — click-through at the point of
  change rather than final conversion — needs fewer users to detect the same relative effect
  (see §3 for exactly how much fewer, on your own metrics).
- **Consciously accept a high false-positive rate**, as a stated trade rather than an accidental
  one — know, from §4's table, roughly what posterior you're actually buying.

The equipment here exists; what's missing across the ecosystem is teaching it as equipping an
existing practice rather than converting a skeptic — see
[overlay-small-sample.md](overlay-small-sample.md) for the fuller small-N operating model.

## 6. CUPED will not rescue you here

CUPED (variance reduction using a correlated pre-period covariate) is the field's most-cited
answer to "my sample is too small" — and its mechanics belong to `data`'s
`experiment-measurement-foundations.md`, not here; this file does not re-teach how it
works. What belongs here is what it's worth, because that's a feasibility input: how much does
variance reduction actually shrink the sample size in §2's table before you commit to a test.

Lead with the primary result, not the marketing framing: three real experiments at Microsoft
showed 45%, 52%, and 49% variance reduction with one week of pre-experiment data — but the same
paper's own §5.2.3 reports **revenue-per-user reduced by less than 5%**, "due to the low
correlation" between the covariate and the metric (Deng, Xu, Kohavi, Walker, WSDM 2013). CUPED's
payoff is metric-dependent; a blanket "CUPED halves your variance" is contradicted by its own
source paper.

**It fails hardest exactly where growth spends most of its effort.** Four independent sources
agree there is no pre-experiment data to leverage for new users at all — the CUPED paper itself,
Eppo's docs, Statsig's docs, and Netflix's own KDD 2016 case study (Xie & Aurisset), which adds
that the covariate-metric correlation for new users runs 0.2–0.4, versus consistently ~40% for
existing streaming users. (Eppo's docs are cited here as a historical source: Eppo was acquired
by Datadog — announced 2025-05-05/06 — and the product now ships as "Datadog Experiments," GA
2026-04-02; this citation is to the pre-acquisition documentation, not a claim about the current
product.) That same Netflix paper is the only source found on a second, distinct
failure: **for retention, variance reduction is small for both new and existing users** — full
history doesn't rescue it. Two separate failure modes, and both land on exactly the funnel
stages — activation and retention — this pack is about. **The small-sample problem cannot be
variance-reduced away precisely where growth lives.**

One more discipline point, because a vendor number travels here often: any Microsoft CUPED
figure must always carry its companion. The same ExP team's 2022 deep dive reports two surfaces
with opposite outcomes — one where over 55% of metrics see an effective traffic multiplier above
1.2× (the source of the "~20% more traffic" figure), and **Surface 1, where over 68% of metrics
see a multiplier of 1.05× or less — essentially nothing.** Citing only the first surface
misrepresents the article's own thesis: that CUPED's efficacy varies enormously between
products. Carry Surface 1 with the number, every time.

Sequential monitoring doesn't buy back what CUPED can't, either: it changes *when* you find out,
not *how much data the question needs* — see
[experiment-readout-and-learning.md](experiment-readout-and-learning.md) for why "sequential
testing costs you power" is itself a folk claim worth correcting. Which method to implement is
`data`'s call; that the choice doesn't rescue an underpowered question is this file's.

## 7. When the gate says no

In order of cheapest validity trade to most expensive:

1. **Move upstream** (§5) — but label the trade honestly. Switching to a proxy metric answers a
   *different question*; a platform presenting it as a pure win without that caveat is
   understating its cost. State what you're now measuring and what you're no longer measuring.
2. **Swing for a bigger effect** (§5) — re-scope the change itself, not just the analysis.
3. **Skip the test.** Not every small-reversible change needs a hypothesis test. One incumbent
   pack states the rule cleanly and it's worth crediting directly: if a change is small but
   cheap and reversible, ship without testing; if it's small and expensive to maintain, don't
   ship it (`rampstackco/claude-skills`, `cro-optimization` skill). This is a legitimate third
   option alongside "test" and "guess" — decide deliberately, don't default into it.
4. **Randomization genuinely isn't available** — a pricing change visible to your whole market
   at once, a single geographic market, a marketplace where treatment leaks into control. Move
   to [quasi-experiments.md](quasi-experiments.md), which teaches the precondition checklists
   for that case; there is no numeric floor to substitute for the one this file just failed.

## Validation

- The sample-size/duration check happened *before* a hypothesis or flag was written, not after.
- The metric was checked against its own skewness (§3), not assumed to behave like a
  low-baseline binary conversion rate.
- Any significant result reported upward carries its haircut (§5) and states the real prior it
  was read against (§4), not a bare p-value.
- Any CUPED claim used to justify a smaller sample checks the new-user and retention
  exceptions (§6) against the metric in question first.
- If the gate said no, the response is one of §7's named redirects, not a bare "underpowered."

## Failure modes and handoff

- **The reader wants a single portable floor number instead of computing their own** — give the
  table (§2) and the skewness check (§3); every incumbent number in this space that travels
  without its assumptions has turned out wrong or contradicted by a peer's equally uncited one.
- **The ask turns into "can these numbers be trusted" once the test is live** — → `data`'s
  `experiment-measurement-foundations.md`.
- **The ask turns into reading a result that already happened** — →
  [experiment-readout-and-learning.md](experiment-readout-and-learning.md).
- **Randomization isn't available at all** — → [quasi-experiments.md](quasi-experiments.md).
- **What's actually being asked for is a standing release-safety threshold, not a test** — →
  `operate`'s ramp/rollout territory (§1); that decision rule proceeds on the null, not a
  rejected one.
