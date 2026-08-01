# growth — Growth

**Visual guide:** [growthskill.vercel.app](https://growthskill.vercel.app)

Improve acquisition-to-revenue conversion through honest experimentation — the feasibility gate
(can this be answered at your scale), experiment design, funnel diagnosis, activation, conversion
optimization, retention, referral loops, pricing tests, and product-led growth.

It spans funnel and cohort diagnosis, opportunity prioritization, experiment design and
feasibility, experiment readout, activation and onboarding, conversion optimization, retention and
resurrection, referral and product loops, monetization and pricing experiments, product-led
growth, and quasi-experimental methods for when randomization isn't available — across self-serve
SaaS, B2B sales-assisted, mobile-subscription, and marketplace/network surfaces, with additive
overlays for small-sample traffic and agentic execution.

What makes it different: the incumbent genre either teaches statistical rigor with no growth
surface attached, or teaches the growth surface — activation, retention, loops, PLG — with no
validity layer underneath it. The two have never been in the same pack. Nowhere in that genre does
anyone tell an underpowered reader anything but "gather more data" or "redesign" — a refusal, not a
redirect. This pack's flagship,
[experiment-design-and-feasibility](skills/growth/references/experiment-design-and-feasibility.md)
⭐, answers the question the rest of the field avoids for the small-scale reader: **can this
question be answered at your scale, and what does "significant" mean given what you knew before
you ran it?** Often the honest answer changes the test, not just the result — and saying so is the
job. Family-boundary detail is at the bottom of this document, not the top.

## Install

```bash
npx skills add gabros20/growth-skill -g -y
```

Or use it in Codex with `$growth`. Manual copy also works — copy `skills/growth/` into your
client's skills directory.

## Examples

```text
$growth is a 3% lift on our signup form worth testing, given we get 400 signups a month

$growth diagnose why activation drops between signup and first value

$growth design a referral program and tell me if the loop math actually compounds

$growth read out this A/B test — we peeked at it four times, is the result safe to ship

$growth we can't hit standard sample-size floors, what's actually worth testing at our scale

$growth grade this "40% would be very disappointed" PMF claim before we act on it
```

## What it does

A **faceted router**: pick one primary job × one base surface, then stack an additive overlay when
it applies.

**Primary jobs** — **experiment-design-and-feasibility ⭐** · growth-model-and-loops ·
funnel-and-cohort-diagnosis · opportunity-and-prioritization · experiment-readout-and-learning ·
activation-and-onboarding · conversion-optimization · retention-and-resurrection ·
referral-and-product-loops · monetization-and-pricing-experiments · product-led-growth ·
quasi-experiments.

**Surfaces** — self-serve SaaS (default) · B2B sales-assisted · mobile-app subscription ·
marketplace/network · **small-sample (additive)** · **agentic (additive)**.

## Route by job

| User intent | Reads | Contribution |
|---|---|---|
| Understand growth as a system before touching a single funnel stage — loops, funnels, and the family's AARRR split | [growth-model-and-loops](skills/growth/references/growth-model-and-loops.md) | Loops vs funnels (Balfour/Winters/Kwok/Chen); Verna's Five Laws and 3×3 motions×levers matrix, dated; the loop math the ecosystem never built — K-factor, cycle time, compounding arithmetic; reciprocates marketing's AARRR split |
| Diagnose where a funnel is actually leaking, or which cohort definition to trust | [funnel-and-cohort-diagnosis](skills/growth/references/funnel-and-cohort-diagnosis.md) | The 3-way retention definition — N-day, rolling, survival — and which question each one actually answers |
| Decide what to work on next across a backlog of growth ideas | [opportunity-and-prioritization](skills/growth/references/opportunity-and-prioritization.md) | ICE read skeptically as throughput tooling, not evidence; Verna's combinatorial counter to single-lever prioritization |
| Decide whether a test can be answered at your scale, and what a significant result would actually mean ⭐ | [experiment-design-and-feasibility](skills/growth/references/experiment-design-and-feasibility.md) | **Flagship.** The feasibility gate; the Bayes posterior on a "significant" winner; the derived power table against vendor floors; the metric-skew rule; the three levers plus the winner's-curse haircut |
| Read out a finished experiment, or decide whether a "significant" result is safe to act on | [experiment-readout-and-learning](skills/growth/references/experiment-readout-and-learning.md) | The one-curve peeking reconciliation; the haircut applied at readout; guardrails-before-shipping-a-win; the learning ledger; Twyman's law as a Bayesian prior |
| Improve activation or onboarding, or evaluate a claimed "aha moment" | [activation-and-onboarding](skills/growth/references/activation-and-onboarding.md) | Why CUPED fails for new users; "aha moment" labeled a folklore term with no traceable origin |
| Run or brief a conversion-rate test on a page, form, or button | [conversion-optimization](skills/growth/references/conversion-optimization.md) | The red-button-on-blue-page external-validity lesson; the copy→placement→color test-order rule; the Trustworthy A/B Patterns project; the winner's-curse haircut at CRO scale |
| Reduce churn, or design a resurrection or win-back approach | [retention-and-resurrection](skills/growth/references/retention-and-resurrection.md) | The Duolingo streak specimen as a fully worked, resolvable example; Sarah Tavel's retention framing |
| Design a referral program, or diagnose a growth loop's own math | [referral-and-product-loops](skills/growth/references/referral-and-product-loops.md) | The loop math the ecosystem lacks entirely, applied to a live referral design; "loops" fully disambiguated |
| Test a price, a plan structure, or a packaging change | [monetization-and-pricing-experiments](skills/growth/references/monetization-and-pricing-experiments.md) | Booking's own pricing-test refusal; Van Westendorp's provenance and its stated-preference critique; the subscription dark-patterns section on Mathur CSCW 2019 plus FTC 2022 enforcement; the IAP-vs-web guardrail worked example |
| Evaluate or benchmark a product-led-growth motion | [product-led-growth](skills/growth/references/product-led-growth.md) | Five-field benchmark-provenance discipline; the Sean Ellis 40% test with the creator's own generalizability caveat |
| Answer a causal question when randomization isn't available | [quasi-experiments](skills/growth/references/quasi-experiments.md) | Precondition checklists in place of numeric floors; Abadie's own warning that a large pre-period can't fix a bad fit; the staggered-DiD structural-invalidity warning |

## Surfaces

| Surface | Reads | When |
|---|---|---|
| Self-serve SaaS — anyone can sign up or trial without talking to a human | [surface-selfserve](skills/growth/references/surface-selfserve.md) | **Default** |
| B2B sales-assisted — a rep, demo, or procurement gates the deal | [surface-b2b-sales-assisted](skills/growth/references/surface-b2b-sales-assisted.md) | A human conversation gates activation or expansion |
| Mobile-app subscription | [surface-mobile-subscription](skills/growth/references/surface-mobile-subscription.md) | IAP economics; the RevenueCat-layer dataset — high-N, low-external-validity, vendor+edition required |
| Marketplace or network product | [surface-marketplace-network](skills/growth/references/surface-marketplace-network.md) | Interference/SUTVA risk; diagnose the mechanism before picking a design |
| **Small-sample (additive overlay)** | [overlay-small-sample](skills/growth/references/overlay-small-sample.md) | **Stacks on a base surface.** Traffic or users too small for standard power |
| **Agentic (additive overlay)** | [overlay-agentic](skills/growth/references/overlay-agentic.md) | **Stacks on a base surface.** A model designs, runs, or reads an experiment |

Plus [handoff](skills/growth/references/handoff.md) — the seam map to the rest of the family, for
when a sibling pack will act on what growth produced, or growth needs an artifact a sibling owns.

## What this pack does differently

**It puts the growth surface and the validity layer in the same repo — nowhere else does.** The
incumbent genre splits cleanly: statistical-rigor packs with no growth surface, or growth-surface
packs (activation, retention, loops, PLG) with no validity layer underneath. This pack's unclaimed
core is the feasibility gate, design, and interpretation that `data`'s own
`experiment-measurement-foundations.md` explicitly cedes in its scope guard — the niche is **open
at scale, not unexplored**: competent prior art exists (PostHog, GrowthBook, rampstack) and is
cited respectfully throughout.

**It answers "can this be tested at all," not just "how do I test it."** The genre's usual answer
to an underpowered reader is "gather more data" or "redesign" — a refusal. This pack's flagship,
[experiment-design-and-feasibility.md](skills/growth/references/experiment-design-and-feasibility.md),
derives the power table against vendor floors, applies Kohavi's metric-skew rule, and lands on
three concrete levers plus a skip-the-test decision rule — a redirect, never a refusal.

**Calculators are executable and unit-validated against published anchors, never a prose formula.**
Two of three incumbent treatments checked during research were wrong, in opposite directions.
[power_calc.py](skills/growth/assets/power_calc.py),
[srm_check.py](skills/growth/assets/srm_check.py),
[peeking_table.py](skills/growth/assets/peeking_table.py), and
[skew_check.py](skills/growth/assets/skew_check.py) each self-test against a published anchor
(PostHog's 3,532/arm, Booking's 561,364-visitor default, Fabijan et al.'s SRM worked example, the
Armitage sequential-testing curve, Bing's post-erratum skewness table) at run time.

**Peeking is one curve, and a disclaimed figure is still a figure.** State the number of looks (K),
the nominal α, and sidedness every time — never a bare percentage. A never-ship win-rate or benchmark
number is never named in order to forbid it; the pack points at the mechanism and the primary
source instead.

**Seams are declared, not assumed.** `data` owns measurement validity (SRM, CUPED mechanics,
peek-safe method selection) and is cited by name, never re-taught. `marketing` owns demand and
proposes the hypothesis growth tests. `product` owns pricing tiers and the roadmap. `operate` owns
standing rollout thresholds — growth owns the metric bound to one tested change's decision. The
full seam map is in [handoff.md](skills/growth/references/handoff.md).

## Outputs

A growth artifact carries: the metric and who picked it · the feasibility verdict and what it
assumes about scale · every claim with a named proof source and its evidence tier · the OEC and
guardrails, if an experiment is being designed · the decision rule, committed to before the result
exists · what the result **cannot** answer · and the sibling packs it hands to or depends on.

Designs, verdicts, and readouts are delivered as documents — never as production code.

## Digital Product lifecycle

`growth` sits at the **Launch** stage of the Digital Product Skills family, alongside `marketing`:
the peer that turns live traffic into a tested, honest improvement in acquisition-to-revenue
conversion. It does not own demand creation or channels (`marketing`), pricing tiers or roadmap
(`product`), measurement validity or the analytics pipeline (`data`), rollout ramps or feature-flag
lifecycle (`operate`), page composition or in-product voice (`design`), or implementing the winning
variant in production code (`frontend` / `backend` / `ai`). It consumes upstream artifacts — a
marketing hypothesis, a product-picked metric, a certified measurement pipeline — when they're
supplied, works standalone when they aren't, and hands off a compact artifact, typically to `data`
to certify the measurement, `design` / `frontend` to build the winning variant, or `operate` when a
winning test becomes a rollout.

## The family

| Skill | Stage | Repository |
|---|---|---|
| `product` | Shape | [gabros20/product-skill](https://github.com/gabros20/product-skill) |
| `design` | Shape | [gabros20/design-skill](https://github.com/gabros20/design-skill) |
| `architecture` | Shape | [gabros20/architecture-skill](https://github.com/gabros20/architecture-skill) |
| `frontend` | Build | [gabros20/frontend-skill](https://github.com/gabros20/frontend-skill) |
| `backend` | Build | [gabros20/backend-skill](https://github.com/gabros20/backend-skill) |
| `data` | Build | [gabros20/data-skill](https://github.com/gabros20/data-skill) |
| `ai` | Build | [gabros20/ai-skill](https://github.com/gabros20/ai-skill) |
| `automation` | Build | [gabros20/automation-skill](https://github.com/gabros20/automation-skill) |
| `quality` | Verify | [gabros20/quality-skill](https://github.com/gabros20/quality-skill) |
| `operate` | Run | [gabros20/operate-skill](https://github.com/gabros20/operate-skill) |
| `marketing` | Launch | [gabros20/marketing-skill](https://github.com/gabros20/marketing-skill) |
| `growth` | Launch | this repository |

## Reference and asset library

19 references under `skills/growth/references/` (12 primary jobs, 4 base surfaces, 2 additive
overlays, 1 handoff contract) and 4 runnable, self-testing calculators under `skills/growth/assets/`:

- **Assets:** `power_calc.py` (sample-size / power, validated against PostHog and Booking
  anchors) · `srm_check.py` (sample-ratio-mismatch chi-square, validated against Fabijan et al.) ·
  `peeking_table.py` (sequential-testing inflated-alpha curve, validated against the Armitage
  table) · `skew_check.py` (Kohavi's 355·s² normality floor, validated against Bing's post-erratum
  table)
- **Eval suites:** `skills/growth/evals/routing/` · `skills/growth/evals/stats-cases/` ·
  `skills/growth/evals/never-ship/`

## Repository layout

```text
skills/growth/       runtime skill (SKILL.md + 19 references + 4 self-testing assets + evals)
research/            multi-channel research corpora + build-gate synthesis
```

## Documentation & releases

- [SOURCES.md](SOURCES.md) — source attribution and license posture, including the licensing rule
  this skill follows and the numbers it refuses to ship

## License

MIT — see [LICENSE](LICENSE).
