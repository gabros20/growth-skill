# Opportunity and Prioritization

Purpose: Rank competing growth ideas honestly — what a scoring framework like ICE or RICE is
actually good for (forcing a conversation, creating throughput), what it can't give you (a
validated estimate of anything), and why "pick the highest score" is often the wrong shape for a
growth strategy in the first place.

Read when:
- A backlog of growth ideas needs ranking before a team can commit to what to build or test next.
- A stakeholder presents an ICE or RICE score as if it were evidence rather than a discussion
  structure.
- Deciding whether to run one experiment at a time (a single "winning" priority) or pursue several
  loops and levers together.
- Sizing an experiment's expected value before committing engineering time to it.

Skip when:
- The question is whether a specific idea, once chosen, can actually be tested at your traffic →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐.
- The question is reading an experiment's result once it has run →
  [experiment-readout-and-learning](experiment-readout-and-learning.md).
- The question is which growth loop or funnel stage an idea belongs to, before it's even
  prioritized → [growth-model-and-loops](growth-model-and-loops.md).

Inputs: a list of candidate ideas or experiments, whatever scoring inputs exist for each (reach,
impact, confidence, effort, or equivalents), and — if available — each idea's prior evidence
(a related published result, a related past test's outcome, none at all).

Produces: a ranked backlog with each score's inputs shown (never a bare number), an explicit note
on which ideas are being sequenced together rather than chosen instead of each other, and an
honest statement of how much the ranking itself should be trusted.

## Contents
- [1. What ICE and RICE are actually for](#1-what-ice-and-rice-are-actually-for)
- [2. Verna's combinatorial counter — sequencing, not picking](#2-vernas-combinatorial-counter--sequencing-not-picking)
- [3. A ranked score is not a validated estimate — and ranking on it has the same bias experiments do](#3-a-ranked-score-is-not-a-validated-estimate--and-ranking-on-it-has-the-same-bias-experiments-do)
- [4. Expected-value prioritization, done honestly](#4-expected-value-prioritization-done-honestly)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. What ICE and RICE are actually for

ICE (Impact, Confidence, Ease) and RICE (Reach, Impact, Confidence, Effort) are the two
most-taught prioritization frameworks in the growth ecosystem, and they deserve a precise verdict:
**widely taught, weakly evidenced — treat them as folklore-adjacent process tooling, useful for
throughput, not truth.** Neither framework has been validated against outcomes in any located
study; what they demonstrably do is force a team to state its assumptions in the same shape,
compare ideas on the same axes, and move a backlog conversation forward instead of stalling on
unstructured debate. That's a real, legitimate use — a forcing function for a decision that
otherwise happens by whoever argues loudest — and a completely different claim from "this score
predicts which idea will actually win." Use ICE/RICE to structure the conversation and create a
first-pass order; never present the resulting number as if it carries the evidentiary weight of a
measured result, because it doesn't have any evidence behind it at all — it's a structured guess,
multiplied.

The inputs themselves are the tell: "confidence" and "impact" are typically filled in by the same
people proposing the idea, with no external check, no prior track record consulted, and no
calibration against how often past confident-and-high-impact ideas actually panned out. A score
built from ungrounded inputs produces an ungrounded ranking, however precise the arithmetic looks.

## 2. Verna's combinatorial counter — sequencing, not picking

The sharpest challenge to "rank ideas and pick the top one" doesn't come from a statistics
critique — it comes from a structural one, made repeatedly and consistently by growth
practitioner Elena Verna across several years and framings. Her 3×3 growth-motions-by-levers
matrix (2022-07-01): *"If you are not leveraging all of the growth [motion × lever] combos below in
your growth model, you will be disrupted by competition who will. Strategy is not about which 3x3
option to pick, but rather when and how to sequence them all."* Her go-to-market "9 squares"
framing makes the identical structural claim about channel choice: *"It's not a question about
which one you should pick. It is a question about which one should prioritise and how the rest of
them will be sequenced."* And her Five Laws of Growth open with the same logic applied to loops
over funnels — build multiple compounding mechanisms, don't chase one.

The through-line across all three, independently stated over multiple years: **growth strategy is
a combinatorial sequencing problem, not a single-lever-selection problem.** A prioritization
framework that outputs one ranked list and asks "what's #1" is the wrong shape for that reality —
it forces a portfolio decision into a single-pick decision. The practical consequence: use
ICE/RICE-style scoring to decide **order and pacing** across a set of ideas you intend to pursue
in combination — which loop or lever to invest in first, second, and in parallel — rather than to
select one winner and discard the rest. A backlog that survives contact with this counter-argument
names which ideas are sequenced together, not just which one is "highest."

## 3. A ranked score is not a validated estimate — and ranking on it has the same bias experiments do

[experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐ teaches that every
estimate from a *winning* statistical test is biased upward, purely from having been selected on
significance — the haircut. The same structural bias applies one step earlier, at prioritization:
when several ideas are scored by an estimate of their impact and the highest-scored idea is chosen
to build, that top score is disproportionately likely to be an overestimate — not because anyone
lied, but because picking the maximum of several noisy guesses systematically selects for the
guesses that happened to run high, exactly as picking the "winning" arm of an experiment selects
for the arm that happened to run high. The fix is the same posture the experimentation flagship
teaches for test results: treat a prioritization score as a starting estimate to be revised down,
not a validated prediction, and expect the built idea to underperform its own backlog score on
average, especially when the score was assigned by the same person proposing the idea.

## 4. Expected-value prioritization, done honestly

A more defensible alternative to a bare ICE/RICE score is explicit expected-value math: **prior
probability the idea works** × **expected effect size if it does** × **value of that effect**,
weighed against implementation cost. This is a real improvement over ICE/RICE in one specific way
— it forces the prior to be stated as a number instead of hidden inside a vague "confidence"
rating — but it inherits every honesty requirement
[experiment-design-and-feasibility](experiment-design-and-feasibility.md) already teaches for the
Bayesian posterior on a significant result: the prior has to come from somewhere real (a related
past test, a comparable published result with its scope stated), not from the same gut feeling
ICE's "confidence" column was hiding. An expected-value prioritization exercise that plugs in an
invented prior has changed the packaging without changing the honesty problem in §1. Route the
actual math — the posterior calculation, the prior sources, how to size what a "significant"
result would need to look like — to
[experiment-design-and-feasibility](experiment-design-and-feasibility.md); this file's job is
recognizing when a backlog is ready for that math and when it's still at the "structure the
conversation" stage §1 describes.

## Validation
- Every ICE/RICE score in the output shows its component inputs (reach, impact, confidence,
  effort/ease) — never a bare final number with no visible arithmetic behind it.
- The backlog states explicitly which ideas are being sequenced together versus which are
  mutually exclusive — a single "here's #1" ranking is checked against §2 before being presented
  as the plan.
- A prioritization score is never described as validated, measured, or evidence-backed — only as
  a structured estimate, with the expectation (§3) that it runs high.
- Any expected-value calculation states where its prior probability came from; an invented prior
  is named as invented, not dressed as a calculation.

## Failure modes and handoff
- **The backlog exercise is being used to justify committing to exactly one idea and discarding
  the rest** → surface Verna's combinatorial counter (§2) before finalizing; ask whether several
  ideas should be sequenced instead.
- **A high ICE/RICE score is being treated as if it predicts the idea will work** → it doesn't;
  redirect to §3 and to the haircut logic in
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md).
- **The idea has been chosen and now needs to become an actual test** →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) for sizing and
  design.
- **The question is which funnel stage or loop the idea targets, not how to rank it** →
  [growth-model-and-loops](growth-model-and-loops.md).
