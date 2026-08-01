# Handoff

Purpose: Map every seam between `growth` and the rest of the Digital Product Skills family from
growth's side — what growth produces for each sibling, what it consumes, and where a
practitioner's AARRR mental model crosses boundaries this family draws deliberately.

Read when:
- Downstream or upstream work is expected: a sibling pack will act on an experiment growth
  designed or read out, or growth needs an artifact a sibling pack owns (a measurement guarantee,
  a picked metric, a rollout).
- A request looks like it belongs partly to growth and partly to another pack, and the boundary
  needs to be named rather than assumed.
- Someone reads this pack's job list and expects Acquisition and Retention execution to sit
  inside it, per AARRR — see the note below before treating that as a gap.

Skip when:
- The request is fully inside one job with no downstream consumer in view — do the work in the
  relevant job reference and stop; a seam map nobody needs is clutter.

Inputs: whichever job produced the artifact in question (an experiment design, a feasibility
verdict, a readout), and which sibling pack is named as the next consumer or the prior producer.

Produces: a named handoff — artifact, owner, and the specific boundary this pack does not cross —
not a restatement of the artifact itself.

## Contents
- The seam map
- The AARRR note
- Failure modes

## The seam map

| Sibling | What growth hands it | What growth consumes from it | The line growth does not cross |
|---|---|---|---|
| `data` | An experiment design that names its assignment population, exposure logic, and OEC/guardrails for `data` to certify | Measurement-validity guarantees — SRM check, assignment integrity, exposure logging, CUPED implementation — "the floor an experiment design can trust" (`experiment-measurement-foundations.md` handoff, line 81) | Growth does not re-teach or re-implement SRM, CUPED mechanics, or peek-safe method selection. `experiment-measurement-foundations.md` cedes experiment **design** ("what to test, how to size a rollout") and **interpretation** ("what a validated result means for a decision") to growth explicitly, at lines 5–7 — growth cites that file by name rather than re-deriving its mechanics |
| `marketing` | Experiment readouts and results on a hypothesis marketing proposed | A qualified hypothesis for a funnel experiment (e.g., "this landing-page variant should convert better because…") | Marketing cedes this territory three times, in writing: `attribution-and-measurement.md:17` and `:227` name "sample-size planning" and the scale-support decision as growth's; `landing-pages-and-conversion.md:16` and `:197` cede which A/B variant wins to growth; `positioning-and-messaging.md:136` states plainly, "growth's territory: experiment design, sample-size math, and readout are its job, not this pack's." Growth does not create demand, choose channels, or write positioning — it evaluates the experiments marketing's hypotheses generate, and never reports a growth readout as marketing's own finding |
| `product` | Experiment readouts against the metric product picked, and a pricing-experiment result against the pricing hypothesis product framed | The metric a strategy or PRD optimizes for — `metrics.md:13–14` states plainly the ask is growth's "execution layer; this reference picks the metric, growth moves it," reinforced at `:80` ("that execution work is `growth`'s job — recommend, don't build it"); the pricing *hypothesis*, not its execution, per `business-model.md:16` | Growth does not set the roadmap, the pricing tiers, or which metric matters — it runs and reads the experiments that move the metric or test the hypothesis product named |
| `operate` | The evidence-class scope of a rollout that is also an experiment, and the readout once it concludes | A standing production threshold, and the flag's lifecycle, debt, and deployment safety once a winning variant is ready to ship | `operate`'s own handoff states the seam precisely: "`growth` is a lateral consumer, not upstream/downstream: when a rollout is also an experiment (not just a delivery ramp), `operate` owns the flag's lifecycle and debt while `growth` owns the readout" (`handoff.md:54–55`). The crisp rule: a standing threshold on the live system is `operate`'s; the same metric bound to one tested change's decision is `growth`'s — a ramp proceeds on the null, an experiment proceeds on a rejected null |
| `design` | A qualified hypothesis for a variant to compose, and the readout once it's tested | The variant's actual composition — layout, visual hierarchy, copy placement, in-product voice | Growth does not compose the page or the interaction; it defines what's being tested and evaluates the result once design has built it |
| `frontend` / `backend` / `ai` | A spec for the winning variant to productionize | The variant as actually shipped, and any model behavior an agentic experiment ran against | Growth ships no production code; a winning test is a spec and a readout, never an implementation |
| `quality` | Nothing produced for direct consumption — quality's verification is a precondition growth assumes, not an input it requests | Nothing directly; quality declines "design or read out an experiment" and routes it here itself (`SKILL.md:84`), and states explicitly in its web-app surface reference: "No production-truth for conversion rate at verification time. Verification can show the path completes; it cannot show users take it, or take it at the rate the business needs — that is a `growth` question, not this skill's" (`surface-web-app-and-site.md:84–86`) | Growth does not verify functional correctness or accessibility — it assumes the variant under test already passed quality's gate before an experiment runs on it |
| `sales` (provisional) | An experiment readout on a funnel stage that touches a sales-assisted deal | Pipeline and qualification signal that shapes which stage of a sales-assisted funnel is worth testing | This seam is drawn provisionally, the way marketing drew its own — cold outbound, CRM stages, and deal mechanics stay `sales`'s regardless of which funnel stage an experiment touches |
| `success` (provisional) | An experiment readout on a retention or resurrection mechanic | Retention and churn signal that surfaces what's worth testing next | `growth` owns retention *experimentation* — does a resurrection nudge work; `success` owns retention *execution* — sending the message a growth test validated. See the AARRR note below |

## The AARRR note

AARRR spans three packs in this family: `marketing` owns Acquisition — channels, positioning,
demand; `growth` owns the experiments that improve conversion across the whole funnel —
Activation, Referral loop design and math, and Retention *experimentation*; `success` owns
Retention *execution* — the onboarding education and retention communications a growth test
showed were worth sending. See [growth-model-and-loops.md](growth-model-and-loops.md) for the
full reciprocation of marketing's shipped AARRR note, and marketing's own `SKILL.md` for the
mirror image from its side.

## Failure modes

- Treating a marketing-proposed hypothesis as growth's own idea, or reporting a favorable readout
  as marketing's finding once it lands — the causal claim about a test result stays growth's
  regardless of who proposed testing it.
- Growth assuming a measurement guarantee `data` never actually built — state explicitly which of
  SRM, assignment integrity, and exposure logging are certified before designing anything on top
  of them, mirroring `data`'s own warning at its `handoff.md:143–144`.
- Confusing a standing production threshold (`operate`'s) with an experiment-bound metric
  (`growth`'s) — the proceeds-on-null vs. rejected-null test resolves it every time a rollout and
  an experiment start to look alike.
- Reading this pack's absence of `acquisition` and `retention-execution` jobs as an oversight
  instead of the AARRR seam stated above.
- Silently invoking `frontend`, `backend`, `design`, `data`, `marketing`, `product`, `operate`,
  `sales`, or `success` instead of naming the actual sibling and the specific artifact it owns.
