# Surface: B2B Sales-Assisted

Purpose: State how growth's jobs reshape when a human sales conversation and a multi-week or
multi-month cycle gate the deal — where the feasibility gate bites hardest of any surface in this
pack, what's still testable, and where growth's honest answer is "not with an A/B test."

Read when:
- Deals close through a rep, a demo call, or a procurement process, even if a self-serve trial
  exists alongside it (see [surface-selfserve](surface-selfserve.md)'s transition zone for
  products that straddle both).
- A stakeholder wants to A/B test something in the sales-assisted part of the funnel (a demo
  script, a proposal template, a late-stage nurture sequence) and the volume needs an honest
  check before that request becomes a commitment.
- The funnel being diagnosed spans deal stages (MQL → SQL → opportunity → closed-won), not page
  views or signups.

Skip when:
- No sales conversation gates the purchase → [surface-selfserve](surface-selfserve.md) is the
  default surface and the standard feasibility gate applies without this file's adjustments.
- The question is the qualified-lead definition itself, demand-gen strategy, or the
  marketing→sales handoff → `marketing`'s own `surface-b2b-sales-assisted.md` — that pack owns
  this surface's demand side; this file owns the experimental side once a hypothesis exists.

Inputs: whichever growth job from [SKILL.md](../SKILL.md)'s router is in scope, deal volume per
month or quarter (the number that actually determines feasibility on this surface), and where in
the funnel the proposed change sits (self-serve-shaped top-of-funnel vs. sales-conversation
late-funnel).

Produces: a feasibility verdict scoped explicitly to deal volume rather than page-visit volume, a
named redirect (upstream metric, qualitative signal, or accepted low power) when late-funnel
volume can't support a real test, and an explicit flag on the marketing/sales seam this surface
depends on.

## Contents
- [1. Why the feasibility gate bites hardest here](#1-why-the-feasibility-gate-bites-hardest-here)
- [2. What's still testable, and what isn't](#2-whats-still-testable-and-what-isnt)
- [3. Randomization gets harder, not just smaller](#3-randomization-gets-harder-not-just-smaller)
- [4. The three levers, applied doubly hard](#4-the-three-levers-applied-doubly-hard)
- [5. The marketing seam](#5-the-marketing-seam)
- [6. Retention means the account, not the user](#6-retention-means-the-account-not-the-user)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Why the feasibility gate bites hardest here

[experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐ teaches that sample
size is the question before every other question, and every surface in this pack inherits that
gate — but B2B sales-assisted compounds it in two independent ways that other surfaces don't
combine. **Volume**: a self-serve top-of-funnel test draws on daily visitor traffic; a late-funnel
B2B test draws on deals, and a deal-stage transition (demo booked, proposal sent, contract signed)
happens to tens or low hundreds of accounts a quarter for most companies at this pack's default
scale, not thousands a day. **Cycle length**: a self-serve conversion resolves in minutes; a
sales-assisted deal resolves over weeks or months, so even a company with enough deal volume to
hypothetically power a test has to wait a full cycle length per exposed cohort before a result
exists — the calendar cost compounds the sample-size cost instead of trading against it. The
combination means the honest default assumption on this surface is that a late-funnel test is
underpowered until proven otherwise, not the reverse.

## 2. What's still testable, and what isn't

Not everything on this surface inherits the same low n. The **top of a B2B funnel** — the landing
page, the demo-request form, the pricing page's message — behaves like self-serve traffic even
when the deal itself is sales-assisted, because visitor and form-fill volume is usually orders of
magnitude larger than closed-deal volume. [conversion-optimization](conversion-optimization.md)'s
methods apply there without modification. The **bottom of the funnel** — a demo script variant, a
proposal template, how a rep frames pricing on a call — is where volume collapses to deal count,
and it is exactly where a stakeholder is most likely to propose an A/B test precisely because
that's where the highest-stakes conversation happens. Growth's job is naming that mismatch plainly:
the highest-stakes stage is also the lowest-power stage, and no amount of wanting a rigorous answer
changes the arithmetic.

## 3. Randomization gets harder, not just smaller

Even where deal volume were sufficient, B2B sales-assisted introduces an assignment problem
self-serve doesn't have: a rep, not a system, often decides in practice who sees which script or
which proposal structure, which threatens clean random assignment unless the test is deliberately
built to force it (e.g., system-assigned proposal templates, not rep discretion). And because
sales attention itself is a scarce, human resource, withholding a treatment from a "control"
account can carry a real relationship cost in a way a page-variant test never does — an ethical and
practical constraint self-serve testing doesn't face. Where true randomization isn't available or
isn't acceptable, this is exactly the situation
[quasi-experiments](quasi-experiments.md) exists for — read it for the precondition checklists and
the honest limits of drawing a causal claim without a controlled random split; this file doesn't
re-teach that method, only names when this surface needs it.

## 4. The three levers, applied doubly hard

[experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s three levers for
underpowered situations apply here with extra force, because B2B sales-assisted starts from a
worse position than most surfaces that reach for them:

- **Swing for the fences** — a late-funnel B2B test that can only detect a huge effect should only
  be run on changes hypothesized to produce a huge effect; a marginal proposal-copy tweak is not
  a candidate for a formal test on this surface at all.
- **Move upstream** — MQL-to-SQL or demo-booked conversion has far more volume than closed-won and
  is measurable in weeks, not a full sales cycle; test there and treat the closed-won relationship
  as a hypothesis carried forward, not as something this surface can validate directly.
- **Consciously accept the tradeoff, or don't test at all** — for genuinely low-volume, long-cycle
  stages, the honest answer is frequently that a formal test isn't available at this account
  volume, and the decision should be made on qualitative signal (rep feedback, win/loss interviews)
  with that limitation stated, not on an underpowered test dressed up as rigorous. Naming "we
  can't test this reliably at this volume" is this pack's answer, not a failure to produce one.

## 5. The marketing seam

Marketing's B2B surface file states the 95-5 reality — most of a B2B category isn't in-market this
quarter, so demand-gen activity is largely memory-building, and a program judged purely on
this-quarter pipeline undercounts its own value. That reality changes what growth is being asked
to test: a hypothesis handed from marketing to growth on this surface ("does this landing-page
change increase demo requests") is usually answerable with normal top-of-funnel volume even when
the deals those demos eventually produce are not. Marketing hands growth a qualified hypothesis for
a funnel experiment; growth reads back a result scoped to the funnel stage it could actually power,
and does not extend that result's confidence to a deal-stage outcome it didn't test.

## 6. Retention means the account, not the user

The three retention definitions in
[funnel-and-cohort-diagnosis §3](funnel-and-cohort-diagnosis.md#3-retention-is-three-different-definitions-not-one)
(N-day, rolling, survival) are built for a user on a day-granularity clock. On this surface
they're the wrong instrument: an annual-contract, sales-assisted account doesn't have a "day 7"
the way a self-serve signup does, and applying a user-level window to a handful of named accounts
on annual cycles measures noise, not the thing anyone actually wants to know.

**The unit of analysis here is the account.** Read retention as **logo retention** — did the
account renew, a binary per contract cycle — and **revenue retention**, gross and net (NRR),
which nets expansion and contraction within the surviving account base against what churned out
of it. Neither is a user-level window scaled up; both are counted at the account, not the seat.
Diagnosing *why* a given account is at risk still routes back to
[funnel-and-cohort-diagnosis §3](funnel-and-cohort-diagnosis.md#3-retention-is-three-different-definitions-not-one)
and its stripe-pattern reading (§2 there) once the unit is correctly set to account rather than
user — this file's job is naming the switch, not re-deriving retention mechanics for a second
unit.

The seam with `success` (family ruling, 2026-08-03): `growth` reads whether retention *moved* —
the trend and cohort diagnosis, at whatever unit of analysis the surface demands. The NRR/GRR
*figure* that read produces keeps `success`'s definitional discipline:
`success/references/renewals-and-expansion.md` audits four circulating NRR definitions that are
not one metric and forbids any comparison that crosses definitions — state which definition the
figure uses and cite that file rather than re-deriving the audit here. The renewal motion itself,
and reporting the figure to a customer or a board, are `success`'s to operate.

## Failure modes and handoff
- **A late-funnel sales artifact (demo script, proposal template) is proposed as an A/B test at
  typical B2B deal volume** → apply §1's arithmetic before agreeing; redirect to §4's levers,
  most often "move upstream" or "don't test formally."
- **A rep or a manager is effectively deciding assignment** → this isn't a clean experiment; route
  to [quasi-experiments](quasi-experiments.md) for what a defensible non-randomized read requires.
- **A retention question on this surface is answered with an N-day, rolling, or survival window**
  → apply §6; the unit is the account, not the user.
- **The question is the qualified-lead definition, ABM strategy, or the marketing/sales handoff
  itself** → `marketing`'s surface-b2b-sales-assisted.md and, for prospecting/outbound/pipeline,
  `sales` — growth does not own either.
- **The seam between growth and sales on this surface is being treated as settled** → it is not;
  this surface's boundary is drawn provisionally, the same posture marketing used for its own B2B
  surface, and should be flagged as such in any handoff.
