# Conversion Optimization

Purpose: Decide whether a conversion-rate claim about a page, form, or flow is something you can
actually test at your scale, and read the result of a CRO test honestly — including recognizing
when a "winning" pattern from someone else's page won't transfer to yours.

Read when:
- A page, form, or flow change is proposed as a CRO win and needs sizing before it becomes a test.
- A stakeholder wants to import a published button-color case study as a decision rule.
- Deciding which of several proposed changes (copy, placement, color) to test first.
- A signup or intake form's field count is being treated as a lever, not just a UX preference.

Skip when:
- The question is what the page should claim, what proof backs it, or its section composition →
  `marketing`'s `landing-pages-and-conversion.md` (the requirements brief) and `design`'s
  page-anatomy vocabulary. This file owns **which variant wins and whether you can know that** —
  never what the page says.
- The question is whether the test is even sizeable, or how to size it →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐ — read that first;
  this file assumes a feasible test already exists and focuses it on the conversion surface.
- The question is SRM, CUPED, or peek-safe analysis mechanics → data's
  `experiment-measurement-foundations.md` — cited by name, never re-taught here.
- The question is activation flow design (onboarding steps, aha-moment framing) →
  [activation-and-onboarding](activation-and-onboarding.md).

Inputs: the proposed change (copy, placement, color, field count, page structure), any published
case study or benchmark being cited as justification, and current traffic/conversion volume for
the page or flow (feeds the feasibility gate).

Produces: a ranked test-order recommendation, a named falsification note for any imported case
study or magnitude, and — when volume doesn't support a real test — a redirect per
[experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s three levers rather
than a refusal.

## Contents
- [1. The CRO seam with marketing](#1-the-cro-seam-with-marketing)
- [2. The external-validity lesson: why "red beats blue" doesn't transfer](#2-the-external-validity-lesson-why-red-beats-blue-doesnt-transfer)
- [3. Test order: copy → placement → color](#3-test-order-copy--placement--color)
- [4. Form field count as a conversion variable](#4-form-field-count-as-a-conversion-variable)
- [5. Trustworthy A/B Patterns — live falsification infrastructure](#5-trustworthy-ab-patterns--live-falsification-infrastructure)
- [6. The winner's-curse haircut, applied to CRO case studies](#6-the-winners-curse-haircut-applied-to-cro-case-studies)
- [7. The guardrail-metric taxonomy](#7-the-guardrail-metric-taxonomy)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. The CRO seam with marketing

Marketing writes the requirements brief a page must satisfy — the claim, the proof, the section
order — and cedes the experimental half explicitly, twice, in `landing-pages-and-conversion.md`:
*"The question is which A/B variant of a brief-satisfying page wins → `growth`"* and *"The
question is which variant of an already-compliant brief converts better → `growth`."*
Growth's job starts one step later: given a page marketing has already briefed, which variant
actually wins, and can that question be answered at the traffic this page gets. Never propose a
claim, a proof device, or a section reorder here — that is marketing's artifact. Growth proposes
**which already-composed variant to run**, sizes the test, and reads the result.

## 2. The external-validity lesson: why "red beats blue" doesn't transfer

The single most-repeated CRO folklore artifact is a button-color test. The correct diagnosis of
why it doesn't generalize: a red button beat a blue button because it stood out **against that
specific page's palette**, not because red carries some property blue lacks. What was real in the
original context — contrast — is absent in a different one, because the moderating variable (the
surrounding palette) was never named when the result got repeated as a rule. That is an
**external-validity failure**, not a false result: the effect existed exactly once, on exactly one
page, and the "lesson" that survived is the wrong one.

The transferable rule: **before importing anyone's test result, name the variable their context
held constant that yours does not.** Apply it constructively — pick a CTA color for maximum
contrast against its actual surroundings (≥4.5:1, which is also the accessibility floor), and use
color for hierarchy and brand distinctiveness. Never cite "blue means trust" or any fixed
color-emotion mapping as a testable claim; that half of the folklore is not an external-validity
problem, it's just false, and marketing already ships the kill (§6 below).

## 3. Test order: copy → placement → color

When several variable classes are candidates on the same element, test **copy before placement
before color** — not because copy has the largest true effect (that's an unearned justification
you'll hear), but because of what each variable class actually changes: **copy changes the
message; placement changes when the message is seen; color changes only how loudly it's
announced.** A copy test answers a question about what the visitor wants. A color test answers a
question about where the eye goes — a question §2's contrast doctrine has usually already
answered without a test. Ship the ordering with this mechanism attached, not as a folk ranking:
**test the variables that change what is being offered before the variables that change how
loudly it is offered.**

Handle any specific magnitude attached to this rule with tongs. A commonly repeated range for
first-person vs. second-person CTA copy spans nearly an order of magnitude and traces to a single
content-marketing source with no denominator — that range is never-ship as a number; the ordering
logic above is what's defensible, not the size of the effect.

## 4. Form field count as a conversion variable

Field count is a real, testable variable — and a specimen of mixed evidence quality worth teaching
deliberately rather than flattening. Three claims of very different rungs commonly travel
together:

- "3–5 fields max" — a bare rule of thumb, no study behind it.
- "Drop the name field where it correlates with lower conversion" — conditional and
  evidence-referencing, but not itself a citable study.
- **A form step holds at most ≈4 fields before it starts to feel like work** — anchored to
  working-memory research: Miller's classic 7±2 span, revised down by **Cowan (2001)** to roughly
  four chunks. This is the one claim in the set that traces to a real, findable paper.

Teach the gradient, not just the number: notice which claim in a stack of "best practices" is
load-bearing research and which is a repeated rule of thumb, and don't cite them at the same
confidence level just because they sit in the same paragraph. Field count belongs to growth as a
**conversion variable with a testable consequence** — activation and intake-flow *design* (which
fields, what order, what copy) stays with `design`'s onboarding-journey work and `frontend`'s
implementation; growth's question is narrower: does removing this field move the conversion rate,
and is that question answerable at this form's volume.

## 5. Trustworthy A/B Patterns — live falsification infrastructure

**Trustworthy A/B Patterns** (Kohavi, Vermeer, Linowski; started June 2024) is a named, dated,
ongoing project that re-runs stock CRO "patterns" at genuinely high power — a **median 2.2M users
per experiment, 80% power, pre-selected MDEs of 0.3%–2.2%**, across ten replications of four
patterns including rounded buttons, page performance, a coupon-code field, and a sticky CTA. Its
first three replications of the rounded-vs-square-button claim **"confirmed that the initial
results were highly exaggerated"**; Kohavi has separately called the underlying studies "flawed
experiments" (2024-04-29). It also applies its own discipline to itself: a 2025-11-20 disclosure
reported that the project's own home-page experiment had an SRM on its first run, was re-run, and
reported the clean result (+0.3% revenue) against a wildly implausible initial +55% CTR reading.

Cite this project as **live, joinable, falsification infrastructure**, not a one-time debunking —
it is the mechanism by which CRO folklore keeps getting checked, not a closed case. It is the
strongest available counter-example whenever someone proposes importing a small-sample CRO case
study as settled.

## 6. The winner's-curse haircut, applied to CRO case studies

Every published "winning" test result is biased upward, and CRO case studies are the genre that
never applies the correction. The quantified version: selecting on statistical significance biases
the reported effect **13% high at 80% power with one treatment arm; 21% with two; 25% with three**
— and, counterintuitively, **30%** if you Bonferroni-correct to control for testing three arms at
once, because a stricter significance bar selects harder on the same noisy estimates. Bonferroni
protects the false-positive rate; it does not protect the size of the winning effect, and it makes
the haircut *bigger*, not smaller.

Apply this before repeating anyone's CRO case-study percentage, including your own: whatever
"lift" got reported is a biased-high estimate of the true effect, by construction, purely from
being the number that cleared the bar. A vendor-published CRO case study that reports one round of
testing with no replication and no denominator carries this bias with nothing to correct it —
that's the deeper reason §5's replication project matters, not just a nice-to-have.

**On color specifically**, do not re-run marketing's kill. Marketing's
`landing-pages-and-conversion.md` already dismantles "blue means trust, red means urgency" as an unsupported color-emotion mapping — that
strip and this one are complementary, not duplicative: marketing's attacks the *claim*
(color-to-emotion causation), this section attacks the *experimental validity* of the case studies
that produced the famous button-color numbers (no denominators, no replication, underpowered,
median sample sizes nowhere near §5's 2.2M). Cite marketing's kill for the semantics; use this
section's haircut and §2's external-validity lesson for why the case study itself shouldn't be
trusted even before the semantics question comes up.

## 7. The guardrail-metric taxonomy

A pattern worth naming explicitly before any conversion test ships: **the conversion event is
rarely the whole outcome.** Optimizing a single primary metric — signups, form completions,
click-throughs — can win the test and still produce a worse business, because a downstream quality
metric moved the opposite direction and nobody was watching it. Concretely: a healthcare intake
form optimized for volume alone can degrade *lead quality*; a real-estate search flow optimized
for lead capture alone can shorten *time spent in search*, which correlates with match quality.
Name the downstream quality metric as a guardrail **before** the test runs, not after a surprising
result forces you to go looking for what broke. This is the same discipline data's file teaches
as "OEC + guardrail metrics" (`experiment-measurement-foundations.md`) — this section is the CRO
reader's reminder to actually apply it to a form or page test, not a new mechanic.

## Validation
- Any imported case study carries the external-validity check from §2 before it's used to justify
  a change: what did their context hold constant that yours doesn't?
- Any specific percentage attached to the copy→placement→color ordering, or to field-count advice,
  is either dropped or explicitly labeled with its real source and range — never repeated as a
  clean number.
- A winning CRO result is reported with its haircut applied (§6), not as the raw observed lift.
- A conversion test that touches a form, intake flow, or lead-capture page has a named guardrail
  metric before it ships, per §7.
- The test itself has been sized against
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) before it's called a
  test rather than a guess.

## Failure modes and handoff
- **The ask is what the page should claim or how it's composed** → that's marketing's brief and
  design's composition; this file only decides which already-composed variant wins.
- **A stakeholder cites a specific CRO percentage from a blog or vendor case study as justification
  for skipping a test** → apply §2's external-validity check and §6's haircut before accepting it;
  do not let a case study substitute for your own test.
- **The traffic doesn't support a real test on this page** →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s three levers and
  [overlay-small-sample](overlay-small-sample.md), not a refusal.
- **The question turns out to be about SRM, CUPED, or peeking mechanics mid-test** → data's
  `experiment-measurement-foundations.md`; do not re-derive it here.
