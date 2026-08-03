---
name: growth
description: >-
  Improve acquisition-to-revenue conversion through honest experimentation — the feasibility gate
  (can this be answered at your scale), experiment design and prioritization, funnel diagnosis, activation,
  conversion optimization, retention, referral loops, pricing tests, and product-led growth. Use
  to size a test, diagnose a funnel drop, or design/read out an experiment. Not measurement
  validity/SRM/CUPED (→ data), demand/channels (→ marketing), pricing tiers/roadmap (→ product),
  rollout ramps/flags (→ operate), page composition (→ design), cold outbound (→ sales),
  onboarding comms (→ success).
---

# Growth

## Mission and boundary

**Define and evaluate the experiment.** Improve acquisition, activation, retention, referral, and
revenue by deciding what's worth testing, whether it can be answered at your scale, and what a
result actually means once it exists. Growth owns the feasibility gate, the design, and the
interpretation — not the measurement machinery underneath it and not the demand that fills the
top of the funnel.

The scope is funnel-wide: funnel and cohort diagnosis, opportunity prioritization, experiment
design and feasibility, experiment readout, activation and onboarding, conversion optimization,
retention and resurrection, referral and product loops, monetization and pricing experiments,
product-led growth, and quasi-experimental methods for when randomization isn't available.

**What makes this pack different: it says what a significant result is actually worth.** The
incumbent genre either teaches statistical rigor with no growth surface attached, or teaches the
growth surface — activation, retention, loops, PLG — with no validity layer underneath it. The
two have never been in the same pack. Nowhere in that genre does anyone tell an underpowered
reader anything but "gather more data" or "redesign" — a refusal, not a redirect. This pack's
flagship, [experiment-design-and-feasibility](references/experiment-design-and-feasibility.md)
⭐, answers the question the rest of the field avoids for the small-scale reader: *can this
question be answered at your scale, and what does "significant" mean given what you knew before
you ran it?* Often the honest answer changes the test, not just the result — and saying so is the
job.

**The default reader runs a self-serve product with real but limited traffic** — enough to test
something, rarely enough to power a standard conversion-rate experiment the way a 200,000-visit
playbook assumes. What remains at that scale is real: bolder tests, upstream metrics, and honest
acceptance of a higher false-positive rate — never "you can't test."

`growth` writes experiment designs, feasibility verdicts, readouts, and requirements — **no
production code**; see "Not this skill" below.

Operate independently when invoked alone. When compatible upstream artifacts are provided
(a marketing hypothesis, a product-picked metric, a certified measurement pipeline), use them
without silently overriding established decisions. Recommend adjacent skills when useful; do not
invoke them automatically unless the user explicitly requested a composition workflow.

## Route before acting

1. Identify the **one primary job** and the **one base surface**. Read one of each. **If the
   request names no business model, do not stall** — assume the default surface (self-serve SaaS)
   and say which you assumed.
2. Add **additive overlays on top of** a base surface, never instead of one:
   [overlay-small-sample](references/overlay-small-sample.md) when traffic or users are too small
   for standard power, and [overlay-agentic](references/overlay-agentic.md) when a model designs,
   runs, or reads an experiment.
3. Read [growth-model-and-loops](references/growth-model-and-loops.md) whenever a claim invokes a
   named growth-model figure (Balfour, Winters, Kwok, Verna, Eyal, McClure), the AARRR split, or
   "loops" — it grades and attributes them so the other references need not re-derive it.
4. **Never re-teach `data`'s validity mechanics.** SRM, CUPED, and peek-safe method selection are
   certified by `data`'s `experiment-measurement-foundations.md` — cite it by name; this pack
   owns design and interpretation on top of a validated pipeline, not the pipeline itself.
5. **Re-verify any benchmark before using it.** Provenance — source, sample, method, date,
   caveat — travels with every figure; an unsourced number is folklore even if it's popular.
6. Read every selected reference completely before producing the affected artifact.
7. Do not load unrelated references.

### Jobs

| User intent | Read | Contribution |
|---|---|---|
| Understand growth as a system before touching a single funnel stage — loops, funnels, and the family's AARRR split | [growth-model-and-loops](references/growth-model-and-loops.md) | Loops vs funnels (Balfour/Winters/Kwok/Chen, 2018) and the Racecar frame (Hockenmaier + Rachitsky, **not** Balfour); Verna's Five Laws and 3×3 motions×levers matrix, dated; the loop math the ecosystem never built — K-factor, cycle time, compounding arithmetic; the "loops" vocabulary trap; reciprocates marketing's AARRR split |
| Diagnose where a funnel is actually leaking, or which cohort definition to trust | [funnel-and-cohort-diagnosis](references/funnel-and-cohort-diagnosis.md) | The 3-way retention definition — N-day, rolling, survival — and which question each one actually answers |
| Decide what to work on next across a backlog of growth ideas | [opportunity-and-prioritization](references/opportunity-and-prioritization.md) | ICE read skeptically as throughput tooling, not evidence; Verna's combinatorial counter to single-lever prioritization |
| Decide whether a test can be answered at your scale, and what a significant result would actually mean ⭐ | [experiment-design-and-feasibility](references/experiment-design-and-feasibility.md) | **Flagship.** The feasibility gate; the Bayes posterior on a "significant" winner; the derived power table against vendor floors; the metric-skew rule; the three levers plus the winner's-curse haircut; where CUPED fails |
| Read out a finished experiment, or decide whether a "significant" result is safe to act on | [experiment-readout-and-learning](references/experiment-readout-and-learning.md) | The one-curve peeking reconciliation; the haircut applied at readout; guardrails-before-shipping-a-win; the learning ledger; Twyman's law as a Bayesian prior |
| Improve activation or onboarding, or evaluate a claimed "aha moment" | [activation-and-onboarding](references/activation-and-onboarding.md) | Why CUPED fails for new users — load-bearing for every onboarding test's power math; "aha moment" labeled a folklore term with no traceable origin |
| Run or brief a conversion-rate test on a page, form, or button | [conversion-optimization](references/conversion-optimization.md) | The red-button-on-blue-page external-validity lesson; the copy→placement→color test-order rule; form-field-count as a variable, not a rule; the Trustworthy A/B Patterns project; the winner's-curse haircut at CRO scale |
| Reduce churn, or design a resurrection or win-back approach | [retention-and-resurrection](references/retention-and-resurrection.md) | The Duolingo streak specimen as a fully worked, resolvable example; Sarah Tavel's retention framing; a habit-ethics pointer into monetization's ethics section, not restated here |
| Design a referral program, or diagnose a growth loop's own math | [referral-and-product-loops](references/referral-and-product-loops.md) | The loop math the ecosystem lacks entirely, applied to a live referral design; "loops" fully disambiguated |
| Test a price, a plan structure, or a packaging change | [monetization-and-pricing-experiments](references/monetization-and-pricing-experiments.md) | Booking's own pricing-test refusal; Van Westendorp's provenance and its stated-preference critique; the subscription dark-patterns section built on peer-reviewed measurement (Mathur CSCW 2019) plus the FTC 2022 enforcement pattern; the IAP-vs-web guardrail worked example |
| Evaluate or benchmark a product-led-growth motion | [product-led-growth](references/product-led-growth.md) | Five-field benchmark-provenance discipline (source, sample, method, date, caveat); the Sean Ellis 40% test with the creator's own generalizability caveat |
| Answer a causal question when randomization isn't available | [quasi-experiments](references/quasi-experiments.md) | Precondition checklists in place of numeric floors; Abadie's own warning that a large pre-period can't fix a bad fit; the staggered-DiD structural-invalidity warning; diagnose-the-mechanism-first for interference |

### Surfaces

| Surface | Read | When |
|---|---|---|
| Self-serve SaaS — anyone can sign up or trial without talking to a human | [surface-selfserve](references/surface-selfserve.md) | **Default** |
| B2B sales-assisted — a rep, demo, or procurement gates the deal | [surface-b2b-sales-assisted](references/surface-b2b-sales-assisted.md) | A human conversation gates activation or expansion |
| Mobile-app subscription | [surface-mobile-subscription](references/surface-mobile-subscription.md) | IAP economics; the RevenueCat-layer dataset — high-N, low-external-validity, vendor+edition required |
| Marketplace or network product | [surface-marketplace-network](references/surface-marketplace-network.md) | Interference/SUTVA risk; diagnose the mechanism before picking a design |
| **Small-sample (additive overlay)** | [overlay-small-sample](references/overlay-small-sample.md) | **Stacks on a base surface.** Traffic or users too small for standard power |
| **Agentic (additive overlay)** | [overlay-agentic](references/overlay-agentic.md) | **Stacks on a base surface.** A model designs, runs, or reads an experiment |

Emitting for downstream work → [handoff](references/handoff.md).

## Not this skill

| Ask | Goes to |
|---|---|
| Measurement validity — SRM, CUPED mechanics, assignment integrity, peek-safe monitoring-method selection | `data`. Growth designs and interprets the experiment; `data`'s `experiment-measurement-foundations.md` guarantees the numbers underneath it are trustworthy, and cedes design and interpretation to `growth` in its own scope guard |
| Positioning, channels, demand creation, launch, SEO/AI-search, content, paid, lifecycle email | `marketing`. Marketing proposes the hypothesis growth tests — a qualified hypothesis, never a finding it reports as its own |
| Pricing tiers, the roadmap, JTBD discovery, which metric a strategy optimizes for | `product`. Product picks the metric and the pricing hypothesis; growth moves the metric and tests the hypothesis, never sets either |
| Rollout ramps, feature-flag lifecycle and debt, a standing production threshold | `operate`. A standing threshold on the live system is `operate`'s; the same metric bound to one tested change's decision is `growth`'s — a ramp proceeds on the null, an experiment proceeds on a rejected null |
| Page composition, layout, visual hierarchy, in-product voice | `design`. Growth defines and evaluates the variant; design composes it |
| Implementing the winning variant in production code | `frontend` · `backend` · `ai`. Growth ships a spec and a readout, never code |
| Pipeline, CRM stages, cold outbound and prospecting | `sales` — this seam is provisional; see [handoff.md](references/handoff.md) |
| Onboarding education content, retention communications, churn-save messaging as sent | `success` — provisional, per the AARRR split below |
| Verification, defect triage, the ship/no-ship gate on functional or accessibility grounds | `quality`. Quality itself declines "design or read out an experiment" and routes it here |
| A model's prompts, retrieval, or evaluation of its own output | `ai`. The agentic overlay owns only the deterministic envelope around an experiment a model runs |

**The AARRR note.** A practitioner who knows Acquisition → Activation → Retention → Referral →
Revenue will notice this pack starts at Activation, not Acquisition — a deliberate seam, not a
gap. **AARRR spans three packs**: `marketing` owns acquisition channels, `growth` owns the
experiments that improve conversion across the funnel — including referral loops and retention
experimentation — `success` owns retention execution, the communications a growth test showed
were worth sending. See [growth-model-and-loops.md](references/growth-model-and-loops.md) for the
full reciprocation.

## Universal invariants

- **Say "open at scale," never "empty."** The niche is unclaimed at scale, not unexplored —
  competent prior art exists (rampstack, GrowthBook, PostHog, coreyhaines31's incumbent) and is
  cited respectfully; the gap is that the growth surface and the validity layer have never
  shared a repo.
- **Cite `data`'s validity mechanics by name; never re-teach them.** SRM, CUPED's derivation, and
  peek-safe method selection live in `data`'s `experiment-measurement-foundations.md`. Growth's
  job is the other half of a seam `data` already drew in writing.
- **Small-sample is a redirect, never a refusal.** Teach the three levers and the skip-the-test
  decision rule; label validity trade-offs honestly — switching to a proxy metric answers a
  different question, not a free win.
- **Win rates never blend.** Only Microsoft's ~1/3 (with all four qualifiers, no published
  denominator) and Bing's 10–20% are first-party citable; every other famous win-rate figure is
  never-ship.
- **Peeking is one curve.** State how many looks (K), the nominal α, and sidedness every time; a
  reconciled Armitage-to-Johari curve, never a bare percentage.
- **CUPED always travels with the primary and the family's own vendor figure together.** Lead
  with Deng/Xu/Kohavi/Walker's 45/52/49%; carry `data`'s honestly-labeled Microsoft Surface-1
  figure alongside it, never contradict it.
- **The growth-vs-operate line is crisp.** A standing threshold on the live system is `operate`'s;
  the same metric bound to a single tested change's decision is `growth`'s.
- **Calculators are executable and unit-validated against published anchors**, never a prose
  formula or a hand-built lookup table — two of three incumbent treatments checked this run were
  wrong, in opposite directions.
- **A disclaimed figure is still a figure.** Never name a never-ship number in order to forbid
  it — state the mechanism and point at the primary source instead.

## Core workflow

1. Establish the one primary job and the base surface; add an overlay only if it applies. State
   any surface you assumed.
2. Name what's actually being decided and who owns that decision once the result exists.
3. Run the feasibility gate before designing anything further — can this question be answered at
   your scale, and what would a significant result actually be worth.
4. Grade every benchmark, win rate, or "best practice" relied on, and state where its evidence
   stops.
5. Design the experiment (or the quasi-experimental substitute) with the OEC and guardrails named
   up front, on top of a measurement pipeline `data` has certified — never invent that guarantee.
6. Produce the artifact — design, feasibility verdict, readout, or requirements spec — with a
   named proof source behind every claim.
7. State the decision rule before the result exists, and the haircut to apply once it does.
8. Emit a compact handoff when downstream work is expected.

## Artifact contract

A growth artifact is incomplete unless it carries: the metric and who picked it · the feasibility
verdict and what it assumes about scale · every claim with a named proof source and its evidence
tier · the OEC and guardrails, if an experiment is being designed · the decision rule, committed
to before the result exists · what the result **cannot** answer · and the sibling packs it hands
to or depends on.

Designs, verdicts, and readouts are delivered as documents. Neither is delivered as production
code.

## Completion and handoff

Before completion:

- Confirm every requested artifact exists and every claim in it has a proof source — an
  unsourced "significant" is not a finished line.
- Confirm no benchmark travels without its five-field provenance (source, sample, method, date,
  caveat).
- Distinguish what was independently verified from what is vendor-reported, self-selected, or
  folklore labeled on purpose.
- State plainly what this experiment will and will not be able to prove, given its scale.
- When downstream work is expected, provide artifact paths, owners, residual risk, and a
  recommended next skill — typically `data` to certify the measurement, `design`/`frontend` to
  build the variant, or `operate` when a winning test becomes a rollout.

## Resources

The routing tables above link all 19 references. Assets are runnable, self-tested calculators:
[power_calc.py](assets/power_calc.py) · [srm_check.py](assets/srm_check.py) ·
[peeking_table.py](assets/peeking_table.py) · [skew_check.py](assets/skew_check.py) — each
validated against a published anchor at import time. Eval suites live in the repository's
`evals/` directory.

Attribution, licences, and what this pack claims for itself — `SOURCES.md` at the repository root.

## Artifact home

Deliverables this skill produces default to `digital-product/growth/` at the working repository's
root, with cross-skill state in `digital-product/LEDGER.md` — created on first use and committed
with the repo. The `digital-product` composer skill owns this convention; solo use writes to the
same place. Never write into `.orchestrate/` — that folder belongs to an orchestration run's
execution state, not to this family's deliverables.
