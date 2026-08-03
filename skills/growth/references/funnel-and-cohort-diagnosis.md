# Funnel and Cohort Diagnosis

Purpose: Read a funnel or cohort chart correctly before touching it — name where users actually
leak, choose a retention definition that matches the decision it will serve, and rule out "the
data is wrong" before crediting or blaming a real behavior change.

Read when:
- A funnel or cohort chart needs a diagnosis: where is the leak, and is it real.
- Someone asks "what's our retention" and the answer depends on a definition nobody has stated.
- A metric moved and the first instinct is to explain it rather than check it.

Skip when:
- The underlying event data's trustworthiness itself is in question (assignment, SRM, tracking
  correctness) → `data`'s `experiment-measurement-foundations.md` and its event-taxonomy
  reference — this file assumes the data already passed that gate.
- The question is what to do about a diagnosed leak, and in what order → [opportunity-and-prioritization](opportunity-and-prioritization.md).
- The question is whether a proposed fix can be tested at your traffic → [experiment-design-and-feasibility](experiment-design-and-feasibility.md).
- The leak is specifically in onboarding/first-value, or a retention/resurrection intervention is
  being designed → [activation-and-onboarding](activation-and-onboarding.md) or
  [retention-and-resurrection](retention-and-resurrection.md) — diagnose here, then hand off.

Inputs: a funnel or cohort chart already backed by validated event data; the decision the
retention number needs to serve (a dashboard, a rollout gate, a churn model); a metric that moved
and a proposed explanation for why.

Produces: a named leak point in the funnel with its diagnosis (real behavior vs. data artifact); a
retention definition matched to the decision, stated explicitly rather than assumed; a first
hypothesis that checks the data before it credits a story.

## Contents

- [1. Diagnose before you prescribe](#1-diagnose-before-you-prescribe)
- [2. Reading a cohort chart](#2-reading-a-cohort-chart)
- [3. Retention is three different definitions, not one — and a unit-of-analysis switch for B2B](#3-retention-is-three-different-definitions-not-one)
- [4. Twyman's Law: check the data before you believe the story](#4-twymans-law-check-the-data-before-you-believe-the-story)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Diagnose before you prescribe

This file answers "where is the leak and is it real" — a distinct job from "what do we do about
it" ([opportunity-and-prioritization](opportunity-and-prioritization.md)) and "can we test a fix"
([experiment-design-and-feasibility](experiment-design-and-feasibility.md)). Collapsing diagnosis
into prescription is the most common failure in a funnel review: a team sees a drop-off step and
jumps straight to "let's A/B test a redesign" before establishing that the drop-off is a real
behavioral leak rather than a tracking gap, a seasonal cohort effect, or a step that was never
supposed to convert at 100%. Diagnosis produces a named, evidenced leak point; prescription and
testing are separate, later jobs.

## 2. Reading a cohort chart

A retention cohort table (rows = signup cohort, columns = period since signup) is read for shape,
not just the headline number. **Crystal Widjaja's** diagonal/horizontal/vertical stripe framework
names what each pattern means: a vertical stripe (one column low across every cohort) points at a
product-wide event in that period, not a cohort problem; a horizontal stripe (one cohort low across
every column) points at something specific to how that cohort was acquired or onboarded, not a
product-wide regression; a diagonal stripe (a period-over-period pattern moving across cohorts)
points at a calendar or seasonal effect. Naming which stripe you're looking at is a cheaper and
more durable diagnostic than reaching for a benchmark number, and it survives longer than any
particular retention percentage does.

## 3. Retention is three different definitions, not one

Unlike variance reduction or sequential testing, retention analysis never converged on shared
tooling — a survey of the open-source landscape found no canonical retention library, only
scattered low-adoption tutorial notebooks; retention stays ad-hoc SQL per shop. That gap is a
signal that the **definition**, not the tooling, is where teams are under-taught. Three distinct
definitions are all called "retention," and picking the wrong one for the decision at hand is a
silent error:

- **N-day retention** — binary, fixed window: did the user return on exactly day N? Sensitive to
  a single day's noise; cheap to compute; the definition most dashboards default to without saying
  so.
- **Rolling (bracketed) retention** — any activity within a window (e.g., "active in days 1–7"):
  smooths single-day noise, changes what "retained" means from "came back on that day" to "was
  active at some point in that stretch."
- **Survival retention (with censoring)** — time-to-churn, treating users who haven't churned yet
  as censored observations rather than forcing them into a fixed window. The `lifelines` library
  (MIT-licensed) is the clean, liftable open-source implementation of this framing.

These are not interchangeable, and a reported "retention" number is unfinished until it states
which of the three it is. N-day answers "did this specific day matter"; rolling answers "was the
user active in this stretch"; survival answers "how long until this user is gone, accounting for
the users we haven't lost yet." A churn model wants survival; a feature-launch dashboard usually
wants N-day or rolling. State the choice, don't inherit it from whatever the last dashboard used.

All three definitions also share an assumption worth stating explicitly: the unit of retention is
the individual **user**, on a day-granularity clock. That's correct for self-serve and
consumer-shaped products — this pack's default surface — but it isn't universal. **For
sales-assisted, annual-contract B2B, the unit of analysis switches from user to account.** What's
retained or lost there is a whole account's contract, on a cycle measured in months or years, not
a user's day-7 or day-30 return — the right instruments are **logo retention** (did the account
renew, a binary per contract cycle) and **revenue retention**, gross and net (NRR), computed
across the account base. Applying an N-day, rolling, or survival window built for daily user
behavior to a handful of named accounts on annual cycles measures noise, not the thing anyone
actually wants to know. See
[surface-b2b-sales-assisted](surface-b2b-sales-assisted.md#6-retention-means-the-account-not-the-user)
for the concrete treatment on that surface — this file's job is naming the switch, not re-deriving
account-level retention math for a second unit. An NRR/GRR figure produced by that read keeps
`success`'s definitional discipline — four audited definitions that are not one metric, no
comparison across them (`success/references/renewals-and-expansion.md`; family ruling 2026-08-03:
growth reads the trend, success owns the figure's definition and the renewal motion).

## 4. Twyman's Law: check the data before you believe the story

When a funnel or cohort number looks surprisingly good or surprisingly bad, the first hypothesis
should be that something is wrong with the data, not that something remarkable happened in user
behavior — Twyman's Law, and Kohavi's canon states it as a standing rule. A growth practitioner
converges on the identical instinct independently: **Fareed Mosavat**'s "there's a bug in the
data" as the first response to a surprising result is the same rule arrived at from the operating
side rather than the statistics side — two independent lines of reasoning landing on the same
check. Apply it before opening a diagnosis with a causal story: verify the event actually fired
correctly, verify the cohort boundary is what you think it is, verify nothing changed in
instrumentation on the date the number moved — cite `data`'s foundations reference for the
validity mechanics rather than re-deriving them here. Only once the data itself is cleared does a
behavioral explanation earn consideration.

Twyman's Law has a second edge this pack draws out at readout time:
[experiment-readout-and-learning](experiment-readout-and-learning.md)'s **Twyman-as-Bayes**
section shows that a result surprising enough to trigger this check is also, by construction, a
low-prior result — which makes it *less* trustworthy at an identical p-value, on grounds
independent of data quality. Use this section's check while diagnosing; use that one when a
number is being acted on.

## Validation

- Every reported retention number states which of the three definitions (N-day, rolling, survival)
  it is — never left implicit.
- A retention question on a sales-assisted, annual-contract B2B product is read at the account
  level (logo retention, gross/net revenue retention) — never with a user-level N-day, rolling, or
  survival window.
- A cohort-chart read names the stripe pattern (vertical/horizontal/diagonal) before proposing a
  cause.
- A surprising metric move is checked against Twyman's Law (data first, story second) before it is
  presented as a finding.
- The diagnosis stops at "here is the leak and here is the evidence it's real" — it does not
  silently become a prescription or a test design.

## Failure modes and handoff

- **A retention number is quoted with no stated definition** — stop and ask N-day, rolling, or
  survival; the three answer different questions and are not substitutable.
- **A user-level retention window is applied to a sales-assisted, annual-contract B2B account
  base** — the unit is wrong; switch to logo retention / NRR at the account level and hand off to
  [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md#6-retention-means-the-account-not-the-user).
- **A surprising cohort result is explained with a story before the data is checked** — apply
  Twyman's Law first; route to `data`'s validity reference if the check requires pipeline access
  this file doesn't cover.
- **The diagnosis turns into "let's just test a fix"** — that's a separate job; hand off to
  [opportunity-and-prioritization](opportunity-and-prioritization.md) for what to do next, or
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) for whether it's
  testable at your scale.
- **The leak is specifically at first-value or in the days after signup** → hand to
  [activation-and-onboarding](activation-and-onboarding.md).
- **The leak is a longer-horizon fall-off after activation** → hand to
  [retention-and-resurrection](retention-and-resurrection.md).
