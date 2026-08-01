# Surface: Agentic (Additive Overlay)

Purpose: Add what changes when an agent designs, launches, monitors, or reads out an experiment
without a human approving each step. **This is an overlay** — it stacks on
[experiment-design-and-feasibility](experiment-design-and-feasibility.md) and
[experiment-readout-and-learning](experiment-readout-and-learning.md), and never replaces either.
The feasibility gate and the interpretation rules do not relax because a model is running the
loop; if anything, an agent that can launch experiments faster than a human can review them makes
the gate more load-bearing, not less.

Read when:
- A model decides which experiment to run next, sizes it, or launches it — not a human drafting
  a hypothesis that a person still reviews before it ships.
- A model monitors a running experiment's dashboard and can act on what it sees (extend, stop,
  ship, roll back) without a human in that specific decision.
- An agent is operating a growth loop itself — sending referral prompts, triggering lifecycle
  sends, adjusting an onboarding sequence — as an ongoing process, not a one-off tool call a human
  reviews per instance.

Skip when:
- A model drafts a single experiment brief or hypothesis that a human reviews before it launches —
  that is a bounded tool call inside the base job's normal workflow, not this overlay.
- The question is the model's own prompt, retrieval, or evaluation quality — that is `ai`'s
  ground; this overlay only owns the deterministic envelope around an experimentation action, the
  same split `automation`'s own agentic overlay draws for workflow steps.
- The question is measurement validity mechanics (SRM, CUPED, peek-safe sequential testing) at any
  scale — that's data's `experiment-measurement-foundations.md`, agent-run or not.

Inputs: the feasibility gate and stopping rule already defined for the experiment in question
(from experiment-design-and-feasibility.md), and an inventory of which steps in the experimentation
lifecycle — design, launch, monitoring, stop/ship decision — are model-decided rather than
human-approved per instance.

Produces: a pre-committed, structurally-enforced stopping rule for every agent-run experiment; a
named exposure/spend ceiling for agent-launched tests; and confirmation that the SRM check, the
feasibility gate, and the peeking-inflation table were applied to the agent's decision, not
silently skipped because no human was watching in real time.

## Contents
- [Experiment configs as code do not skip the gate](#experiment-configs-as-code-do-not-skip-the-gate)
- [Never let an agent stop a test on an interim peek](#never-let-an-agent-stop-a-test-on-an-interim-peek)
- [Guardrails for autonomous experimentation](#guardrails-for-autonomous-experimentation)
- [Agent-run growth loops](#agent-run-growth-loops)
- [Disambiguating "guardrail" here](#disambiguating-guardrail-here)
- [Failure modes](#failure-modes)

## Experiment configs as code do not skip the gate

Defining experiments as code — a config object an agent generates and a flagging platform
executes — is a mechanical convenience, not a validity shortcut. An agent that can write and
launch an experiment config in seconds can just as easily generate one that never clears
[experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s power calculation, and
nothing about the config format catches that on its own. Treat "the agent wrote a valid config" and
"the agent wrote a powered, feasible experiment" as two different, both-required checks — run
[power_calc.py](../assets/power_calc.py) against the agent's stated baseline, MDE, and available
traffic as a pre-launch gate, not a courtesy the agent may or may not have applied to itself. An
agent operating below the family's default small-sample readership inherits
[overlay-small-sample.md](overlay-small-sample.md) exactly as a human would — the redirect to a
bolder MDE, an upstream metric, or skip-the-test applies regardless of who authored the config.

## Never let an agent stop a test on an interim peek

This is the sharpest version of the peeking problem this pack teaches
(experiment-readout-and-learning.md), operationalized: an agent that watches a live dashboard and
can act on what it sees is, by construction, capable of checking a p-value after every new data
point and stopping the moment it crosses a threshold — exactly the behavior that inflates a
nominal 5% false-positive rate toward 100% as looks accumulate (the K→∞ limit on
[peeking_table.py](../assets/peeking_table.py)'s curve). A human who peeks occasionally is already
a hazard; an agent that can poll continuously and act instantly is a worse version of the same
hazard, automated. **An agent may monitor a running experiment. It may not have the authority to
stop, ship, or extend it on an interim result unless the experiment was designed with a peek-safe
method from the start** — a pre-committed group-sequential schedule with alpha-spending, or a
genuinely always-valid method (mSPRT). Absent one of those, the stop/ship decision requires either
a human, or a structural constraint that makes early stopping unavailable to the agent at all (the
decision-window mechanism below).

## Guardrails for autonomous experimentation

Where a model decides when to launch, extend, or stop an experiment rather than a human approving
each instance, this pack adopts the same independence move `automation`'s agentic overlay names for
any unbounded agentic step: **pre-commit the rule before the run, and enforce it structurally, not
by instruction.** Concretely, for experimentation specifically:

- **A fixed decision window, enforced outside the agent's own loop.** If the design is
  fixed-horizon, the agent should not be able to query the readout, let alone act on it, before the
  pre-registered sample size or date is reached — this is the same "wall-clock or volume deadline
  independent of whether the model believes it is still making progress" move `automation`'s
  overlay teaches for any agentic step, applied to a stopping decision specifically.
- **An exposure/spend ceiling on how many users an agent may enroll**, set in the experimentation
  platform's own allocation controls, not in a prompt asking the agent to stay within a target
  sample size.
- **A kill switch independent of the agent's own reasoning** — the same mechanism `automation`'s
  overlay requires for any agent-run process, here scoped to pulling an experiment's traffic
  allocation to zero from outside the agent's own decision loop.
- **The SRM check runs automatically before any agent-authored readout is trusted.** Wire
  [srm_check.py](../assets/srm_check.py) into the pipeline between "experiment ends" and "agent may
  summarize the result" — an agent should no more be allowed to read out a split-mismatched
  experiment than a human analyst should.

## Agent-run growth loops

An agent operating a referral loop, a lifecycle email sequence, or an onboarding nudge as an
ongoing process — not a single reviewed send — inherits the same failure mode `automation`'s
overlay documents for any unbounded agentic step: **it fails by continuing, not by erroring.** A
referral-loop agent that keeps sending invites past the point a human would call the campaign
exhausted, or a lifecycle agent that keeps adjusting send cadence based on noisy day-to-day
metrics, is the growth-specific instance of that same pattern. The fix is the same envelope
`automation`'s overlay teaches for any agentic step (spend/volume ceiling in the platform's own
cap, a kill switch outside the agent's loop) — this overlay does not re-derive that mechanism, it
applies it to a growth-loop agent specifically.

## Disambiguating "guardrail" here

This file uses "guardrail" in the `automation`-overlay sense — a deterministic ceiling on an
agentic step (spend, exposure, wall-clock, kill switch). That is a different sense from an
experiment's **guardrail metric** (a metric that must not regress even if the primary metric wins,
owned by data's OEC+guardrails teaching in `experiment-measurement-foundations.md`) and different
again from a product-safety rail. An agent-run experiment needs both senses satisfied
independently: the automation-envelope ceilings above, and the experiment's own guardrail metrics
checked before a win ships — neither substitutes for the other.

## Failure modes

- An agent-generated experiment config that clears platform validation but never ran
  power_calc.py against its own baseline and traffic — a syntactically valid config is not a
  powered one.
- An agent with dashboard-read access being granted stop/ship authority on a fixed-horizon test
  with no peek-safe method configured — this is the single highest-consequence gap this overlay
  exists to close.
- A referral or lifecycle agent with no spend/volume ceiling enforced outside its own reasoning —
  the ceiling has to live in the platform's own cap, not in an instruction the agent could reason
  around.
- Treating "the agent flagged no SRM issue" as sufficient without confirming srm_check.py (or
  equivalent) actually ran against the agent's own launch — an agent skipping its own validity
  check is not a hypothetical; it is the default absent a wired-in step.
- Using "guardrail" without specifying which of the three senses is meant, in a document an agent
  or a human might act on differently depending on which one it is.
