# Product-Led Growth

Purpose: Grade the PLG benchmark literature honestly — this genre fails provenance more often than
it passes, and the pack's job is teaching the check, not repeating the number. Ships the field's
most-cited falsification anchor (the Sean Ellis test) with the creator's own caveat attached, and
the standing exhibit for citation laundering in this literature.

Read when:
- Evaluating a PLG or activation benchmark (free-to-paid conversion, activation rate, PQL scoring,
  NRR) before it's used to set a target or judge a result.
- Deciding whether a "product qualified lead" or self-serve funnel metric is measuring what it
  claims to measure.
- A stakeholder cites the Sean Ellis 40% test, or a named PLG benchmark report, as settled.

Skip when:
- The question is the loop mechanics themselves (viral coefficient, k-factor, compounding) — that's
  [growth-model-and-loops](growth-model-and-loops.md); this file does not re-teach loop math.
- The question is a specific pricing or packaging test — that's
  [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md); this file only
  covers the PLG-adjacent benchmark literature, not test design.
- The question is what counts as an "aha moment" or activation event — that's
  [activation-and-onboarding](activation-and-onboarding.md), which labels the term's own folklore
  status; this file does not re-teach it.
- The population is a mobile subscription app specifically — the RevenueCat SDK-population figures
  live in [surface-mobile-subscription](surface-mobile-subscription.md), not here.

Inputs: a benchmark figure or claim in circulation, and — critically — whatever the source actually
discloses about its sample, method, and date (often nothing).

Produces: a provenance grade for the benchmark (pass/fail on five fields), a decision on whether it's
safe to cite at all, and — where the field passes — the strip that shows the correct answer alongside
the one in circulation.

## Contents

1. [Five-field provenance is mandatory](#1-five-field-provenance-is-mandatory)
2. [The Sean Ellis test strip](#2-the-sean-ellis-test-strip)
3. [ChartMogul ≡ Growth Unhinged: the standing citation-laundering exhibit](#3-chartmogul--growth-unhinged-the-standing-citation-laundering-exhibit)
4. [OpenView: the staleness specimen](#4-openview-the-staleness-specimen)
5. [Structural sampling bias in retention vendors](#5-structural-sampling-bias-in-retention-vendors)
6. [PQL and other correlational-to-causal slips](#6-pql-and-other-correlational-to-causal-slips)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Five-field provenance is mandatory

Every PLG benchmark claim carries five fields before it's usable: **source, sample, method, date,
caveat.** In this literature almost nothing clears all five — the finding *is* the failure rate.
Treat a benchmark missing any field as a directional specimen at best, never a target to hold a team
to. This is the discipline the rest of this file demonstrates against real, named examples rather
than asserting in the abstract.

## 2. The Sean Ellis test strip

The 40% "very disappointed without this product" PMF threshold is the field's most-repeated number,
and its provenance is thin in a specific, documentable way. Every secondary source repeats "40%" and
"nearly 100 startups" — sources disagree even on the sample size ("nearly 100" vs. "hundreds") — and
not one names a company list, year range, or methodology. Ellis's own archive does not contain the
original post; visible content stops in January 2013.

**The strongest anchor is Ellis's own caveat, in his own words, three years after the test's
publication:** *"Probably the '40% very disappointed without metric.' Though now I'm just trying to
get it less dependent on my 'hands on' [involvement]"*
([@SeanEllis, 2013-12-24](https://x.com/SeanEllis/status/415285251569508352)). The creator of the
test names, unprompted, that its validity has depended on
his own personal application of it — a first-party generalizability caveat, not an outside critique.
That is the strongest possible falsification-strip anchor available: cite it *with* the number, every
time the number is used.

Pair it with the field's best independent critique: Lewis & Sauro, MeasuringU, 2022-03-15 — *"there
is little compelling evidence to support its promotion for use in practice"*; the threshold *"sounds
authoritative and precise, but it's based on the intuition of its originator."* Their arithmetic
closes the loop: **at the commonly-suggested survey size of n=50, the 95% margin of error around a
40% estimate spans roughly ±13 points (a plausible range of ~27–53%)**, against ±3 points at
n=1,000 — most teams running this survey cannot tell which side of the threshold they're actually
on. A documented false positive exists too: Kromatic/StartupSquare scored above 40% and had no PMF.

Ellis himself also names the survey's most credible refinement in his own words: he credits Rahul
Vohra (Superhuman) with having "taken it to the next level" in how the survey was applied
([2019-07-03](https://x.com/SeanEllis/status/1146436376537124865)) — treat "Sean Ellis test" and "Superhuman's PMF Engine" as
related but distinct instruments, not interchangeable names for the same method.

**Both weaknesses share one root**: see
[monetization-and-pricing-experiments](monetization-and-pricing-experiments.md#2-van-westendorp-and-the-stated-preference-problem)
for the parallel critique of Van Westendorp pricing surveys — a hypothetical question answered
in the survey does not reliably predict real behavior, and that single mechanism explains why both
of the field's most-used survey instruments carry the same caveat.

## 3. ChartMogul ≡ Growth Unhinged: the standing citation-laundering exhibit

The strongest single piece of evidence that this literature has fewer independent sources than it
appears to: **ChartMogul's 2026 benchmark report and Kyle Poyar's *Growth Unhinged* newsletter are
the same underlying survey (200 products, January 2026) republished under two separate brands.**
Treat this as the standing exhibit whenever two "independent" PLG benchmark reports agree suspiciously
well — check whether they're the same sample before citing the agreement as corroboration. A second
figure in circulation is a self-report from a research firm, not a study: ProductLed publishes nine
figures to high apparent precision from "600+ SaaS businesses," with zero disclosed recruitment
method and zero response rate.

## 4. OpenView: the staleness specimen

OpenView wound down as a firm around December 2023, and its site still serves the 2021, 2022, and
2023 benchmark editions live — full report pages, not a parked domain — with nobody left at the
firm to correct or retire them; only the 2019 and 2020 editions have gone dark and require
archive.org. A report can outlive the organization that produced it and keep circulating as an
uninspected, un-updated, permanently-citable artifact. Date every PLG-benchmark citation, and check
whether the publisher still exists before treating a figure as current practice rather than a
historical snapshot. OpenView's own reports also carry a structural conflict worth naming on sight: a footnote
in its material discloses that some benchmarked companies were **its own venture portfolio** — a
VC's benchmark of its own portfolio measures its portfolio, not the market.

## 5. Structural sampling bias in retention vendors

Mobile-retention and analytics vendors (AppsFlyer, Adjust, GameAnalytics, and similar) sample only
apps that installed that vendor's SDK — a selection mechanism that systematically excludes the
least-resourced apps, which is precisely the population most readers of this pack belong to. This is
a different caveat class from the self-selected-survey problem in §2–3: it is not that respondents
opted in, it is that the population itself is pre-filtered by a commercial relationship before any
survey happens. Both caveat classes must be named explicitly and separately — collapsing them into
one generic "small sample" warning loses the distinction between who answered and who was even in
the sampling frame.

## 6. PQL and other correlational-to-causal slips

"Product-qualified lead" tracking is a legitimate self-serve motion, but the benchmark literature
around it repeats the same slip: a correlational, self-reported finding stated in causal language.
OpenView's own claim that PQL tracking "increased likelihood of fast growth by 61%" (OpenView ×
Pendo, 2023 Product Benchmarks Report; n≈1,000 self-reported respondents, no disclosed response
rate or sampling frame; some benchmarked companies are OpenView's own portfolio, per §4) is a
correlational self-report stated in causal language from the same portfolio-contaminated source
named in §4 — never repeat it without this parenthetical, and never as a causal or
population-level result. Casey Winters' give-it-away-vs-charge-by-lever framework is
the more durable, non-benchmark contribution from this literature: tie the decision to give a
feature away or charge for it to which growth lever it serves — virality, activation, retention, or
LTV expansion — rather than to a benchmark conversion rate; see
[monetization-and-pricing-experiments](monetization-and-pricing-experiments.md) once that framing
turns into an actual price or packaging test.

## Validation

- Every PLG benchmark figure carries its five fields (§1) or is flagged as failing one before it's
  used to set a target.
- The Sean Ellis 40% figure never ships without Ellis's own 2013 caveat and the MeasuringU
  ±13%-at-n=50 arithmetic attached in the same breath.
- Two benchmark reports that appear to corroborate each other are checked against §3's pattern
  before the agreement is cited as independent confirmation.
- A vendor's report is date-checked against whether the publisher still exists (§4) before being
  treated as reflecting current practice.
- A "PQL" or similar scoring claim is checked for correlational-vs-causal framing (§6) before it's
  repeated as a growth mechanism rather than a self-report.

## Failure modes and handoff

- **A stakeholder cites "the Sean Ellis 40% test says we have PMF"** — surface the creator's own
  caveat (§2) before agreeing or disagreeing with the number.
- **Two PLG reports are cited as agreeing, therefore corroborating each other** — check for the
  ChartMogul/Growth Unhinged pattern (§3) before accepting the agreement as evidence.
- **A benchmark is being used to set a hard internal target** ("we need 40% activation because the
  industry average is X") — that conflates a noisy, provenance-thin external number with an internal
  standard; redirect to a self-measured baseline and a feasibility check
  ([experiment-design-and-feasibility](experiment-design-and-feasibility.md)) instead.
- **The question turns into loop mechanics or viral coefficient math** — hand off to
  [growth-model-and-loops](growth-model-and-loops.md).
- **The question turns into an actual pricing or packaging test** — hand off to
  [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md).
