# Agent guide — `growth` (Growth)

This repository is the released `growth-skill`: an installable agent skill for improving
acquisition-to-revenue conversion through honest experimentation. The runtime skill lives under
`skills/growth/`; the repository and Codex plugin use the `-skill` suffix. Read this before editing.

## Ownership boundary (non-negotiable)

`growth` owns the feasibility gate (can this question be answered at your scale at all), experiment
design and prioritization, funnel and cohort diagnosis, experiment readout and interpretation,
activation, conversion optimization, retention and resurrection experimentation, referral and
product loops, monetization and pricing experiments, product-led growth, and quasi-experimental
methods for when randomization isn't available. It writes experiment designs, feasibility
verdicts, readouts, and requirements — **no production code**, and no number without its
provenance. It does **not** own:

- measurement validity — SRM, CUPED mechanics, peek-safe method certification → **data** (growth
  designs and interprets on top of a validated pipeline; it never re-teaches the pipeline)
- demand creation, channels, positioning, lifecycle email → **marketing**
- pricing-tier design, the commercial-lifecycle model, roadmap → **product** (growth runs pricing
  *tests*; product designs the tiers)
- rollout ramps, feature flags, deploy mechanics → **operate** (a rollout that is also an
  experiment: operate owns the flag's lifecycle, growth owns the readout)
- page composition and visual design → **design**
- cold outbound and deal mechanics → **sales** (growth hedges *where* the funnel/deal line sits,
  never *whether* deal mechanics are sales's)
- retention *execution* — the validated motion run as an ongoing part of the customer
  relationship → **success**; and, per the 2026-08-03 family ruling, growth reads whether
  retention is *improving* (trend/cohort diagnosis at any unit of analysis, including
  account-level logo/NRR reads) while **success** owns the reported NRR/GRR figure's definition
  (its four audited definitions, never compared across) and the renewal motion itself
- implementing any of it in production code → **frontend** / **backend** / **ai**

`growth` consumes upstream artifacts (a marketing hypothesis, a product-picked metric, data's
certified measurement pipeline) when they exist, works standalone when they don't, recommends
siblings for work it doesn't own, and never silently invokes them.

## Non-negotiable invariants

1. **The feasibility gate comes first.** Before designing any test, answer whether the question is
   answerable at the reader's scale — and when it isn't, redirect (bolder test, upstream metric,
   stated higher false-positive tolerance), never refuse with "gather more data."
2. **Provenance travels with every figure** — source, sample, method, date, caveat. An unsourced
   benchmark is folklore even when it is popular; re-verify before use.
3. **Never re-teach `data`'s validity mechanics.** Cite `data`'s
   `experiment-measurement-foundations.md` by name for SRM/CUPED/peeking machinery.
4. **A "significant" result gets its posterior and its winner's-curse haircut** before it is acted
   on; surprising results get Twyman's law (data first, story second).
5. **Every reported retention number states its definition** (N-day, rolling, survival — or
   logo/NRR at the account level); on sales-assisted annual-contract B2B the unit of analysis is
   the account, never the user.
6. **Assets stay self-testing.** The calculators validate against their published anchors at import
   time; a change that breaks an anchor check is a defect, not a formatting issue.
7. **In working prose, never name a never-ship figure in order to forbid it** — state the mechanism
   and point at the primary source. The never-ship eval fixtures are the recognized exception,
   since their job is recognition.

## Required behavior

1. Run `scripts/check-sync` (and `scripts/lint-skill`) before any release; never replace the
   generic gate with domain-only checks.
2. Keep runtime frontmatter to `name` and `description`. Versions/metadata live in
   `.codex-plugin/plugin.json`, `CHANGELOG.md`, tags, and releases — never in `SKILL.md`.
3. Keep `SKILL.md` the direct router: one primary job × one base surface + additive overlays
   (small-sample, agentic), plus the decline table. References are flat, directly linked,
   self-describing, loaded only when their conditions apply.
4. Every reference begins with `Purpose / Read when / Skip when / Inputs / Produces`; add a
   `## Contents` when it exceeds ~100 lines.
5. Keep repository docs, eval fixtures, research, and site assets outside `skills/growth/`.
6. Release through matching plugin version, changelog entry, tag, and GitHub Release; set the
   GitHub About area (family-style description, canonical site alias as homepage, base + domain
   topics).

Do not mark the repository complete because structural lint passes. Routing, stats-cases, and
never-ship evaluations must show the skill changes agent behavior usefully.
