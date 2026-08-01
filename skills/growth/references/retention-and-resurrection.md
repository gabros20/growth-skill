# Retention and Resurrection

Purpose: Design and read retention and win-back experiments honestly — knowing that variance
reduction barely helps here even for users with a full history, that viral retention claims are a
documented failure mode with a resolvable worked example, and that habit mechanics sit on the same
ethics line as any other persuasion tactic.

Read when:
- Choosing a retention metric or defining what "retained" means for a specific decision.
- Designing or reading a retention, re-engagement, or win-back test.
- A retention claim (a streak effect, a viral "negative retention" post, an NPS-retention link) is
  circulating and needs a provenance check before it's used.
- A habit or streak mechanic is being proposed and someone needs to know whether it crosses into
  dark-pattern territory.

Skip when:
- The question is which of the three retention definitions to use, or how to read a cohort chart
  → [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md) — cite it, don't re-derive the definitions here.
- The question is whether the underlying data can be trusted → `data`'s
  `experiment-measurement-foundations.md`.
- The symptom looks like retention but the real leak is upstream, at first value → [activation-and-onboarding](activation-and-onboarding.md),
  per Casey Winters's "my retention sucks is often an activation problem" observation cited there.
- The ethics question is about pricing, dark patterns generally, or churn framing → [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md)'s
  ethics section — this file points there rather than re-adjudicating.
- The question is sizing or feasibility of a retention test → [experiment-design-and-feasibility](experiment-design-and-feasibility.md).

Inputs: a retention definition already chosen per [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md), a proposed
retention or resurrection mechanic, and (if relevant) a circulating retention claim that needs
checking before use.

Produces: a retention/resurrection test plan with its CUPED limits stated, a worked procedure for
checking a viral retention claim before shipping it, and a habit-mechanic ethics pointer rather
than an ad-hoc ruling.

## Contents

- [1. Retention before growth](#1-retention-before-growth)
- [2. CUPED barely helps retention — even for existing users](#2-cuped-barely-helps-retention--even-for-existing-users)
- [3. The Duolingo streak contradiction — a worked example](#3-the-duolingo-streak-contradiction--a-worked-example)
- [4. Habit and streak mechanics: the ethics pointer](#4-habit-and-streak-mechanics-the-ethics-pointer)
- [5. NPS is a weak retention instrument, from two directions](#5-nps-is-a-weak-retention-instrument-from-two-directions)
- [6. Metrics theater and the guardrail-before-shipping instinct](#6-metrics-theater-and-the-guardrail-before-shipping-instinct)
- [7. Resurrection and the growth-vs-operate seam](#7-resurrection-and-the-growth-vs-operate-seam)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Retention before growth

**Sarah Tavel**: "It's tempting to use growth to make up for churn. Total # of MAUs still goes up!
Feels good. Until it doesn't... focus 1st on getting cohort retention to hit asymptote. Then pour
gas on fire." Her **Hierarchy of Engagement** frames this as a sequencing rule, not a one-time
observation: acquisition work layered on top of leaky retention hides the leak in a rising
top-line number until it doesn't. Before treating an acquisition win as validated growth, check
whether cohort retention has actually reached a stable asymptote — if it hasn't, the acquisition
number is compounding a problem, not solving one. This is the frame this file's tests should serve:
a retention test that moves the asymptote is worth more than an acquisition test that moves the
top line while retention keeps leaking.

## 2. CUPED barely helps retention — even for existing users

[activation-and-onboarding](activation-and-onboarding.md) covers CUPED's failure for **new** users. Retention has a second,
separate failure mode that isn't about newness at all: Netflix's own KDD 2016 case study (Xie &
Aurisset), studying real product data, found variance reduction for retention metrics **small for
both new and existing users** — CUPED's usual escape hatch doesn't rescue a retention test even
when the population has full pre-period history to draw a covariate from. (The same source found
the effect, small as it is, runs slightly
higher for new users than existing ones on this specific metric — the opposite ordering from most
other metrics, worth noting so it isn't silently assumed away.) Cite `data`'s
`experiment-measurement-foundations.md` for CUPED's mechanics; the point this file adds, which that
reference does not cover, is that **retention resists variance reduction structurally, independent
of the new-user problem** — a retention test's feasibility estimate should not assume a CUPED
discount any more than an activation test's should.

## 3. The Duolingo streak contradiction — a worked example

This is the complete failure mode, worked end to end, because every step of it is checkable:

1. **The growth claim.** A high-reach practitioner (408k followers) states streaks are "the single
   biggest driver" of Duolingo's growth to a multi-billion-dollar business.
2. **The viral counter-claim.** A separate, much smaller account states Duolingo has "research
   showing that 'streaks' are a negative retention feature... they quit when they break them" —
   with no link, no paper, no Duolingo source attached. It gains a second named amplifier within 24
   hours, who frames it as users "subconsciously rebel against artificial 'carrot and stick'
   motivators."
3. **The check.** Pulling the thread on the counter-claim finds it cites nothing. Zero primary
   sources. Two amplifiers, one uncited origin.
4. **The resolution, from Duolingo's own first-party blog.** The Streak Wager test produced
   statistically significant increases in Day-1, Day-7, and Day-14 retention, with Day-7 showing
   the largest improvement at **+14%**. A **Weekend Amulet** — a safety valve letting users skip a
   weekend without breaking their streak — made users measurably more likely to return the
   following week and measurably less likely to lose their streak. Corroborating scale from the
   company itself: over ten million people hold streaks longer than a year.

The real finding is **opposite in sign and subtler in shape** than the viral claim: streaks
increase retention, *and* all-or-nothing rigidity is a real abandonment risk — which is exactly why
Duolingo shipped a flexibility valve rather than abandoning the mechanic. The viral post inverted
"breaking a streak causes churn" into "streaks cause churn," and it spread on zero citations.

**Use this as the template for checking any circulating retention claim**: an uncited assertion
about a company's private research, however many amplifiers it picks up, gets checked against that
company's own first-party publications before it enters a brief. It is resolvable with one fetch of
a primary source — the failure mode is not that the truth was hard to find, it's that nobody looked
before repeating it.

## 4. Habit and streak mechanics: the ethics pointer

A streak or habit mechanic is not automatically a dark pattern — the worked example above shows
Duolingo's own first-party data supporting a real retention lift from one. But the same mechanism
without an escape valve — no equivalent of the Weekend Amulet, no honest way to miss a day without
losing everything — moves toward forced-continuity territory: the user stays engaged not because
the product delivers value but because the cost of stopping has been made artificially high. This
pack does not re-adjudicate that line here; [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md)'s ethics section
carries the peer-reviewed anchor (Mathur et al., CSCW 2019) and the FTC enforcement pattern this
family's ethics table is built on. Route a specific habit-mechanic judgment call there rather than
deciding it ad hoc in a retention brief.

## 5. NPS is a weak retention instrument, from two directions

Two named authorities, arriving from opposite professional backgrounds, reach the same conclusion
independently. From the CRO/analytics-tooling side: **Hiten Shah**, founder of two analytics
companies, states plainly that a high Net Promoter Score does not correlate to high retention
(2019). From the statistics side: **Kohavi**'s independent finding is that detecting a real 5-point
NPS delta requires several thousand survey responses — a bar most retention decisions never clear
before acting on an NPS movement. A CRO practitioner and an experimentation statistician landing on
"NPS is a weak instrument" from unrelated starting points is stronger evidence than either claim
alone. Do not use an NPS delta as a retention experiment's primary metric; if NPS is tracked at
all, treat it as a secondary signal, not the read.

## 6. Metrics theater and the guardrail-before-shipping instinct

**Shreyas Doshi**'s "Exotic Metrics" critique applies directly to retention dashboards, which are
where finely segmented, hard-to-game-because-nobody-understands-them metrics tend to proliferate
once a team can't move the metrics it actually controls. His dashboard-purpose insight is the
practical test: a dashboard built to understand usage, inform a decision, track a target, or reward
performance comes out differently depending on which of those four purposes is ranked first — name
the purpose before building the dashboard, or the same numbers get read four different ways by
different audiences.

Pair this with a concrete vignette: an experiment raised signups by a double-digit percentage and
was *not* shipped, because that cohort went on to churn worse than control. When someone later
proposed reviving it, a qualitative check — interviewing users from that cohort — surfaced the
reason: they hadn't actually intended to create an account. Primary metric up, retention guardrail
down, qualitative interview explaining why. No statistical test caught this; a guardrail metric and
a conversation did. Treat this as the standing argument for shipping retention as a guardrail on
every acquisition or activation win, not just as its own standalone metric.

## 7. Resurrection and the growth-vs-operate seam

The family's crisp rule applies directly to win-back and resurrection work: **a standing threshold
on the live system is operate's; the same metric bound to a single tested change's decision is
growth's.** (See [experiment-design-and-feasibility.md §1](experiment-design-and-feasibility.md#1-the-gate-can-this-question-be-answered-here)
for the doctrinal evidence behind this line.) An always-on inactivity-triggered win-back sequence, running at a fixed cadence with a
fixed trigger, is a standing mechanism — its operation and reliability are outside this file's
scope. A specific proposed change to that sequence (a new trigger window, new copy, a new incentive)
that needs a decision on whether it actually improves resurrection is growth's experiment to design
and read. This file stops at the test; who authors and sends the resulting message is an execution
detail outside this pack.

## Validation

- Every retention test's feasibility estimate is computed without assuming a CUPED discount, per
  §2.
- A circulating retention claim is traced to a first-party source before it is used in a brief, per
  the §3 procedure.
- A proposed habit/streak mechanic is checked against [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md)'s
  ethics section rather than ruled on ad hoc.
- NPS never stands alone as a retention experiment's primary metric.
- A retention or resurrection mechanic is classified as operate's (standing) or growth's
  (experiment-bound) before work starts, per §7.

## Failure modes and handoff

- **An uncited "research shows X causes churn" claim is repeated without checking the company's own
  publications** — apply the §3 procedure before it ships.
- **A retention test is sized assuming a CUPED-sized sample discount** — it doesn't apply; re-size
  with [experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s uncorrected power table.
- **A habit mechanic is approved or rejected without a stated ethics rationale** — route to
  [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md)'s ethics section.
- **NPS movement alone is used to justify shipping or killing a retention change** — treat as a
  weak instrument per §5; require a corroborating metric.
- **A standing win-back automation's ongoing operation is being redesigned as if it were an
  experiment** (or vice versa) — apply the §7 seam rule before proceeding.
