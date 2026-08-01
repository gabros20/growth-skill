# Activation and Onboarding

Purpose: Turn a proposed onboarding or first-value change into a hypothesis growth can actually
test — and carry the one caveat that makes activation testing structurally harder than most other
growth tests: variance-reduction techniques largely don't work here.

Read when:
- Deciding what "activated" means for a specific decision, or testing a change to the path that
  gets a new user to first value.
- Someone proposes an onboarding A/B test and needs a feasibility-aware plan, not just a coin flip
  between two flows.
- An activation benchmark ("X% of users activate") is about to be cited and needs a hygiene check.
- The term "aha moment" appears in a brief or spec and needs sourcing discipline.

Skip when:
- The question is the onboarding flow's design — screens, empty states, progressive disclosure,
  wizard structure → `design`'s `journeys.md`, which already owns onboarding's UX patterns and
  vocabulary; this file starts once a specific change to that flow needs to become a test.
- The question is whether the underlying data can be trusted (assignment, SRM) → `data`'s
  `experiment-measurement-foundations.md`.
- The question is how big a test needs to be, or how to size it → [experiment-design-and-feasibility](experiment-design-and-feasibility.md).
- The question is retention after activation, not getting to first value → [retention-and-resurrection](retention-and-resurrection.md).
- The question is converting a visitor before signup → [conversion-optimization](conversion-optimization.md) or marketing's
  landing-page work.

Inputs: `design`'s journey map and its named activation vocabulary (activation rate,
time-to-activation, D7/D30 retention), a proposed change to the onboarding path, and the decision
the activation definition needs to serve.

Produces: an activation definition tied to a decision (not a borrowed dashboard default), a
feasibility-aware test plan for the proposed change, and an explicit CUPED caveat carried into any
new-user test's power estimate.

## Contents

- [1. The seam with design](#1-the-seam-with-design)
- [2. "Aha moment" is a folklore term — use it, but label it](#2-aha-moment-is-a-folklore-term--use-it-but-label-it)
- [3. Activation and retention are linked but distinct diagnoses](#3-activation-and-retention-are-linked-but-distinct-diagnoses)
- [4. CUPED fails for new users — the load-bearing constraint](#4-cuped-fails-for-new-users--the-load-bearing-constraint)
- [5. Benchmark hygiene for activation numbers](#5-benchmark-hygiene-for-activation-numbers)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. The seam with design

`design`'s `journeys.md` already ships the onboarding vocabulary this file assumes: activation
rate, time-to-activation, completion, drop-off by step, D7/D30 retention — named there as
onboarding's goal metrics, with the explicit instruction to "name the aha moment explicitly."
Design never mentions experiments; it maps the journey and names what good looks like
descriptively. **The seam, drawn from growth's side**: design owns the journey map and its
vocabulary; growth owns turning a proposed change to that journey into a tested hypothesis and
reading the result. If a request is "what should the onboarding flow look like," that's design's.
If it's "will changing step 3 actually move activation, and can we tell," that's this file's.

## 2. "Aha moment" is a folklore term — use it, but label it

The term is used across the growth-practitioner corpus as if its origin were common knowledge. It
is not: even **Samuel Hulick**, who runs an activation-teardown business built on the concept,
publicly asked in 2023 who coined it and got no confirmed answer. No primary attribution exists.
Design's `journeys.md` uses the term as an unadorned instruction ("name the aha moment
explicitly") — that's fine for a journey map, which isn't making a provenance claim. When this
pack uses the term, or when a brief asks to attribute it to a named source, the honest answer is:
it's a working label for "the moment a new user experiences the product's core value," with no
traceable coinage — use it descriptively, never cite an origin for it.

## 3. Activation and retention are linked but distinct diagnoses

**Casey Winters**: "'my retention sucks' is often an activation problem." The observation matters
because it cuts against the instinct to treat retention and activation as one metric with two
names — they're causally linked (a user who never reaches first value has nothing to retain) but
they take different fixes. A retention problem that's actually an activation problem gets worse if
treated with retention tactics (re-engagement nudges, win-back campaigns) instead of fixing the
path to first value. Before proposing a retention intervention, check whether the real leak is
upstream, in activation — [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md) is where
that check happens; this file is where the fix, if it's an activation fix, gets designed and
tested.

## 4. CUPED fails for new users — the load-bearing constraint

CUPED, the field's primary answer to underpowered tests, needs a correlated pre-experiment
covariate to work — and a brand-new user has no pre-experiment history to correlate against. The
CUPED paper itself says so directly, and it is independently confirmed by two vendors on opposite
sides of the market: one notes CUPED is "generally less effective for newer users" with no prior
data to leverage on an onboarding-flow change; the other states plainly that new users won't have
pre-experiment data. Netflix's own KDD 2016 case study (Xie & Aurisset), studying real product
data, adds the number: variance reduction for new users comes out "very low" regardless of which
metric or technique is used, because the correlation between available covariates and business
metrics for new users lands in the 0.2–0.4 range — far too weak to buy back much power.

This is the single fact that makes activation testing structurally harder than most other growth
tests, not just anecdotally harder: **the variance-reduction escape hatch that rescues
underpowered tests elsewhere does not exist for the population this file is about.** An onboarding
or first-value test cannot assume a CUPED-sized sample discount when estimating feasibility — cite
[experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s power-table and three-levers material for what to do about
an underpowered test (bigger swing, move the metric upstream, or consciously accept the tradeoff);
this file's job is to make sure that reference gets consulted with the CUPED discount already
removed, not silently assumed.

## 5. Benchmark hygiene for activation numbers

The most-cited activation figures in circulation trace to one self-selected reader survey (a few
hundred respondents, recruited from one practitioner's own audience) — traced to a named source,
but not to anything resembling a population sample; category mix and response bias are undisclosed.
Treat any activation percentile or "good/great" band the same way: it describes where a respondent
sits within that self-selected sample, not an external or causal benchmark for your product.
Before citing any activation number, apply the same five-field discipline the pack uses everywhere
else — source, sample, method, date, caveat — and if any field is missing, the number doesn't ship
bare. A widely-repeated engagement-ratio "good/exceptional" split (the kind attributed to a famous
tech company with no locatable primary source) belongs in this same untraced category — do not
cite a specific figure for it under any framing, including as a warning.

## Validation

- Every activation definition used in a test states the decision it serves, rather than being
  inherited from a dashboard default.
- Any onboarding/activation test's feasibility estimate is computed **without** assuming a CUPED
  variance-reduction discount.
- "Aha moment" is used descriptively only — no origin or authority is attributed to it.
- Every activation benchmark citation carries source, sample, method, date, and caveat, or it
  doesn't ship.

## Failure modes and handoff

- **An onboarding A/B test is sized using a CUPED-adjusted sample estimate** — that discount does
  not apply to new users; re-size using [experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s uncorrected power
  table.
- **A retention symptom is treated with a retention fix without checking whether it's really an
  activation leak** — check [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md) first; the fix differs depending on
  which layer is actually broken.
- **"Aha moment" is used with an attributed origin** ("as X first defined it...") — no such
  attribution is traceable; strip it.
- **A bare activation percentage is cited with no source/sample/date** — that's a benchmark-hygiene
  failure per §5; get the missing fields or drop the number.
- **The request is actually about journey/flow design**, not testing a change → `design`'s
  `journeys.md`.
