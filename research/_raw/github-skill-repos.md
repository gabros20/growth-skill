# GitHub — Skill/Prompt Repos, Awesome-Lists & Open Experimentation Handbooks (Worker C4)

Worker: C4 (grw-github sub-orchestrator, channel C)
Date (as-of): 2026-08-01
Scope: the competitive/prior-art layer on GitHub for a GROWTH skill pack — agent-skill repos,
awesome-lists, and open experimentation handbooks. NOT the skills-marketplace ecosystem or
coreyhaines31/marketingskills (channel A owns that deep-read).

## Method

All primary discovery via `gh search repos`, `gh search code`, `gh api`, and `git clone --depth 1`
into scratchpad, followed by direct file reads (raw.githubusercontent.com or local clone) for
license verification and content quality assessment. WebFetch used sparingly for docs sites
backed by repos (Mozilla Nimbus/Experimenter docs, GitLab handbook). WebSearch budget: 0-3 calls
max, reserved for cases gh/WebFetch can't resolve (e.g. confirming a repo's canonical org name).

### Search queries run (verbatim, for falsifiability)

- `gh search repos "claude skills" --limit 50`
- `gh search repos "claude-code skills" --limit 30`
- `gh search repos "agent skills" --limit 30`
- `gh search repos "awesome claude code" --limit 30`
- `gh search repos "claude subagents" --limit 30`
- `gh search repos "agents collection" --limit 30`
- `gh search repos "cursor rules growth" --limit 30`
- `gh search code "SKILL.md" experimentation --limit 30`
- `gh search code "SKILL.md" growth --limit 30`
- `gh search code "SKILL.md" "a/b testing" --limit 30`
- `gh search code "conversion rate optimization" agent --limit 30`
- `gh search code "growth" subagent --limit 30`
- `gh search code "retention" skill.md --limit 30`
- `gh search code "pricing" skill.md --limit 30`
- `gh search code "churn" skill.md --limit 30`
- `gh search code "activation" skill.md --limit 30`
- `gh search code "experiment" SKILL.md --limit 30`
- `gh search code "north star metric" prompt --limit 30`
- `gh search repos "awesome ab testing" --limit 20`
- `gh search repos "awesome growth" --limit 20`
- `gh search repos "awesome experimentation" --limit 20`
- `gh search repos "awesome feature flags" --limit 20`
- `gh search repos "awesome causal inference" --limit 20`
- `gh search repos "awesome conversion rate optimization" --limit 20`
- `gh search repos "awesome product analytics" --limit 20`
- `gh search repos "awesome saas growth" --limit 20`
- `gh search repos "experimentation handbook" --limit 20`
- `gh search repos "experiment guide" --limit 20`
- `gh search code "experiment review" path:handbook --limit 20`
- `gh search repos mozilla experimenter --limit 10`
- `gh search repos "ab testing course" --limit 20`
- `gh search repos "experimentation 101" --limit 20`
- `gh search repos "causal inference course" --limit 20`

(Full raw outputs logged inline per-section below as findings land; this file is written
incrementally.)

Additional targeted `gh api` calls used to trace origin repos and pull raw file trees (recorded
inline next to the findings they produced): `gh api repos/<owner>/<repo>`, `gh api
repos/<owner>/<repo>/git/trees/main?recursive=1`, `curl raw.githubusercontent.com/.../LICENSE`.

---

## 2. Skill/prompt-repo inventory

### 2.0 THE HEADLINE FIND: rampstackco/claude-skills

**repo**: `rampstackco/claude-skills` — "Stack-agnostic Claude Skills covering the full website
lifecycle: brand, design, content, SEO, dev, ops, growth, and research. Build, ship, audit,
optimize." As-of 2026-08-01: **508 stars**, `pushed_at: 2026-07-21`, **103 skills total**.
License: **MIT** (verified from `LICENSE` file at
`raw.githubusercontent.com/rampstackco/claude-skills/main/LICENSE`, copyright "RampStack Co.
2026" — this is a real, current license file, not a NOASSERTION). Featured in
`ComposioHQ/awesome-claude-skills` under "Business & Marketing" per its own README.

This is not a *dedicated* growth/experimentation pack (it spans brand/design/content/SEO/dev/ops
too), but it contains the single best validity-layer experimentation cluster found anywhere in
this sweep — genuinely rivaling Kohavi-canon quality in places. It self-organizes skills into
explicit categories including a literal `category: growth` and `category: growth-tooling` in each
skill's YAML frontmatter, plus growth-adjacent skills tagged `category: product`.

**The experimentation core cluster** (all `category: product`, cross-linking each other by name
in their own text — a genuinely well-architected set, not a loose pile):

| skill | path | what it teaches | verdict |
|---|---|---|---|
| `experiment-design` | `skills/experiment-design/SKILL.md` | Full pre-experiment discipline: hypothesis (cause/effect/magnitude/mechanism), sample size & MDE ("detecting a 1% lift requires ~100x the sample needed to detect a 10% lift"), duration (novelty/primacy effects, holdouts, max 4-6 weeks), **what NOT to A/B test** (UX bugs, legal-required changes, brand/philosophy questions, pre-decided things, undesignable tests), segment analysis & multiple comparisons, interaction effects/mutex, ratio metrics & delta method, network effects/SUTVA/switchback/cluster randomization, peeking & sequential testing (states false-positive rate "can exceed 30%" under daily peeking on a 28-day test — UNTRACED, no citation given in the skill text), pre-commitment vs p-hacking (explicit inventory of p-hacking moves), 3-bucket decision framework (win/loss/inconclusive) | **VALIDITY LAYER** — this is the real thing |
| `experimentation-analytics` | `skills/experimentation-analytics/SKILL.md` | Result-panel literacy: CI-reading rules (5 decision rules ranked by CI position relative to zero), p-value semantics (explicitly debunks "96% chance treatment works" misreading), multiple-testing corrections (Bonferroni vs Benjamini-Hochberg, named correctly), sequential testing math (mSPRT, group-sequential, anytime-valid CIs), **CUPED** (correctly explains mechanism, claims "often 30% to 50% narrower" CI — same order of magnitude as controller-canon's prior, still UNTRACED/no citation in-skill), heterogeneous treatment effects & pre-registration discipline, ratio metrics/delta method again with a worked numeric example, Bayesian vs frequentist panel comparison, **SUTVA violation** patterns (marketplace/social/supply-constrained/notification), dashboard-vs-experiment reconciliation (the "blended attribution trap" — multiplying a subset lift by the whole user base), long-term effect estimation (holdouts/geo/diff-in-diff) | **VALIDITY LAYER** — companion piece, equally strong |
| `feature-flagging` | `skills/feature-flagging/SKILL.md` | **Directly answers the charter's growth-vs-operate seam question without being asked to.** Names five flag types explicitly: release (short-lived, ships-then-dies), **experiment** (variant assignment + conversion measurement — this is growth), **operational** (kill switch/circuit breaker, long-lived, "usually never removed" — this is operate), permission (plan-tier gating), configuration (contractual/tenant). States plainly: "mixing flag types is the root cause of most flag mess... create a new flag and migrate, do not overload an existing one." Also covers naming conventions, 5-phase lifecycle (birth/adolescence/launch/maturity/death), rollout strategies (percentage/cohort/geo/time-based, with a "ramp and watch" rule — 1 peak hour per step, "rollouts that complete in under four hours are usually rolling too fast" — UNTRACED heuristic), stale-flag quarterly cleanup cadence, governance/permission tiers, performance budget ("5ms for fifty flag checks" — UNTRACED), rollback discipline | **VALIDITY LAYER**, and it is literally the pre-drawn growth/operate seam artifact |
| `experimentation-platform-orchestrator` | `skills/experimentation-platform-orchestrator/SKILL.md` | Platform-selection framework across Statsig/PostHog/GrowthBook/Optimizely/Amplitude/Eppo/Kameleoon: 7 considerations (data architecture — vendor-native vs product-suite vs warehouse-native taxonomy; statistical rigor — "ask what variance estimator do you use for ratio metrics, and do you support always-valid p-values" as a due-diligence question), migration planning | Decision framework, not tactic list — genuinely useful vendor-neutral content |
| `data-warehouse-experimentation` | `skills/data-warehouse-experimentation/SKILL.md` | Warehouse-native experimentation (assignment in code/flags, exposure events to warehouse, metrics as dbt models, stats in SQL/Python): when this beats a platform, exposure-logging discipline, CUPED/sequential-testing implemented in SQL, "build vs buy" tradeoffs | Real engineering-depth content; explicitly cross-links `experiment-design` for methodology and `experimentation-analytics` for interpretation — clean separation of concerns |
| `analytics-strategy` | `skills/analytics-strategy/SKILL.md` (category: **growth**) | Measurement frameworks, KPI hierarchy, dashboard architecture, attribution models, event taxonomy | Not fully read line-by-line; frontmatter + README summary only |
| `cro-optimization` | `skills/cro-optimization/SKILL.md` (category: **growth**) | 4-phase framework: audit (quant: funnel/segmentation/perf/search; qual: session replay, heatmaps, interviews, form analytics, support tickets; heuristic: 5-second value prop, single CTA, form length, trust signals) → hypothesis (structured template: "Because [observation], we believe [change] will produce [outcome] for [segment], because [reason]") → test → decide. States a concrete "when NOT to use" floor: **"without sufficient traffic to test (under ~5,000 monthly conversions per variant)"** — a volatile magnitude, UNTRACED/no citation, flagged per evidence discipline as a never-ship-as-is number but a genuinely useful order-of-magnitude heuristic | Tactic-list audit checklist WRAPPED in a hypothesis-discipline validity layer — hybrid, better than pure tactic lists |
| `product-analytics-setup` | `skills/product-analytics-setup/SKILL.md` (category: product) | Event taxonomy, property design, naming conventions, schema versioning, identity stitching, funnel design, retention cohorts, North Star metric selection, dashboard hygiene, "instrumentation debt" | Not fully read; frontmatter strong, overlaps with the family's `data` pack territory (event tracking/tracking plans) — a seam note for the controller |

**The "growth-tooling" cluster** (12 skills, `category: growth-tooling`, explicitly framed as
"interactive web tools that turn visitors into leads"; `funnel-flow-architecture` is the stated
orchestrator over the other 11): `lead-magnet-design`, `calculator-design`,
`quiz-and-assessment-design`, `multi-step-form-design`, `chatbot-flow-design`,
`funnel-flow-architecture`, `onboarding-wizard-design`, `interactive-product-tour`,
`upgrade-flow-design`, `scheduler-and-booking-design`, `comparison-tool-design`,
`product-configurator-design`. Notable pattern repeated across every single one of these: each
skill names a **three-way honesty taxonomy** (a bad-cheap pattern / a bad-expensive pattern / the
good pattern) in its own description — e.g. `lead-magnet-design`: thin-bait (overpromises,
underdelivers) vs kitchen-sink-resource (everything, helps nothing) vs earned-value-magnet
(delivers standalone value while qualifying the lead); `upgrade-flow-design`: paywall-everywhere
vs free-forever-trap vs value-triggered-upgrade; `funnel-flow-architecture`: silo-funnels vs
kitchen-sink-funnels vs matched-funnels. This is a consistent authorial voice/pattern across the
whole repo (also seen in `beta-program-management`: soft-launch vs kitchen-sink vs structured-beta;
`okr-design`: sandbagged vs aspirational-fantasy vs stretch-OKRs) — worth noting as a *rhetorical
device* competitors use to signal "not a tactic list" even where the underlying content is design
guidance rather than statistical validity content. `funnel-flow-architecture` is CRO/growth-loop
territory but is about lead-gen tool architecture, not experimentation.

**What this repo does NOT have** (checked directly against the full recursive tree, 100% of
`skills/*/SKILL.md` paths enumerated via `gh api repos/rampstackco/claude-skills/git/trees/main?recursive=1`):
no skill named or centrally about **retention**, **churn**, **referral/viral loops**,
**pricing/monetization experiments** (pricing appears nowhere in the skill list — no
`pricing-strategy`, no `monetization` skill exists in this repo, unlike the majiayu000 aggregator
which mirrors many *other* repos' pricing skills), or **PLG** as such. `okr-design`,
`jtbd-framing`, `feature-launch-playbook`, `roadmap-planning`, `pm-spec-writing`,
`beta-program-management` are product-process skills that touch growth adjacently but are not
growth-canon content. **This is a real gap-finding**: even the single best experimentation cluster
found in this entire sweep is silent on retention/churn/referral/pricing — exactly the territory
the charter's 17-item canonical definition requires and that channel D/B are covering from
papers/blogs/X. No repo found anywhere in this sweep unifies experimentation validity + retention +
referral + pricing under one growth banner (see §3, the incumbent question).

Full growth/growth-tooling inventory transcribed from `README.md`'s own category tables (as-of
2026-08-01, `pushed_at: 2026-07-21`):
- Growth (2): `analytics-strategy`, `cro-optimization`
- Growth tooling (12): `lead-magnet-design`, `calculator-design`, `quiz-and-assessment-design`,
  `multi-step-form-design`, `chatbot-flow-design`, `funnel-flow-architecture`,
  `onboarding-wizard-design`, `interactive-product-tour`, `upgrade-flow-design`,
  `scheduler-and-booking-design`, `comparison-tool-design`, `product-configurator-design`
- Adjacent, category: product: `experiment-design`, `feature-flagging`,
  `experimentation-analytics`, `experimentation-platform-orchestrator`,
  `data-warehouse-experimentation`, `product-analytics-setup`, `beta-program-management`,
  `okr-design`, `jtbd-framing`, `feature-launch-playbook`, `roadmap-planning`, `pm-spec-writing`
- Adjacent, category: marketing: `ads-performance-analytics` (attribution models, ROAS vs LTV
  horizon traps, incrementality testing, geo holdout, MMM/MTA — growth/marketing seam territory,
  channel A/marketing already owns attribution per the family)
- Adjacent, category: research: `journey-mapping`, `usability-testing`, `ux-research`,
  `discovery-research-synthesis`

**Quoted passages** (strongest, illustrating the validity-layer bar):
> "The math. With one analysis, false positive rate is 5 percent (at alpha equals 0.05). With
> three analyses spread across the test, false positive rate climbs toward 14 percent. With daily
> peeking on a 28-day test, false positive rate can exceed 30 percent." — `experiment-design/SKILL.md`
> (no citation given; matches the canon's qualitative claim, magnitude UNTRACED)

> "A common confusion: 'CUPED made our lift smaller, so we should ship the unadjusted version.'
> This is wrong. CUPED reduces variance, not point estimates." — `experimentation-analytics/SKILL.md`

> "The 'blended attribution' trap is the most common reconciliation failure. PM takes the
> experiment lift (say +2% revenue per user) and multiplies by the total user base for a
> company-wide impact estimate ('$10M in incremental revenue'). This is wrong twice over."
> — `experimentation-analytics/SKILL.md`

> "Mixing flag types is the root cause of most flag mess... When the flag's purpose changes,
> create a new flag and migrate. Do not overload an existing one." — `feature-flagging/SKILL.md`

Weakest passage (the one place this repo drifts toward folklore-without-citation): the "~5,000
monthly conversions per variant" floor in `cro-optimization/SKILL.md`'s "When NOT to use" section,
and the "under four hours is rolling too fast" / "5ms for fifty flag checks" heuristics in
`feature-flagging` — all stated as flat assertions with zero sourcing. Genuinely useful
order-of-magnitude intuition, explicitly a **falsification-strip / never-ship-as-cited candidate**
for the controller (report as this repo's folklore, not as verified fact).

Source pointers: `https://github.com/rampstackco/claude-skills`,
`https://raw.githubusercontent.com/rampstackco/claude-skills/main/LICENSE`,
`https://raw.githubusercontent.com/rampstackco/claude-skills/main/README.md`, individual SKILL.md
paths as listed above. As-of 2026-08-01.

### 2.0.1 Course-correction note (from sub-orchestrator grw-github, received mid-run)

grw-github flagged that **PostHog/posthog** ships its own in-repo agent-skill suite (71+
SKILL.md under `.agents/skills/` plus `products/*/skills/`, including a full
`products/experiments/skills/` suite and `products/posthog_ai/skills/auditing-experiments-flags`)
— already enumerated and written up by the lead at
`research/growth/_raw/github-lead-slice.md`. **Not re-covered here per instruction.** This
prompted a widened search: vendor product repos hide skill suites in `.agents/skills/` and
`products/*/skills/` paths that plain `gh search repos "claude skills"` misses entirely (code
search under-indexes these too). I ran `gh api repos/<vendor>/<repo>/git/trees/<branch>?recursive=1
--jq '.tree[]|select(.path|test("skills?/"))'` against: Amplitude-TypeScript, growthbook/growthbook,
Unleash/unleash, Flagsmith/flagsmith, PostHog/posthog-js (not PostHog/posthog — the JS SDK repo,
distinct from what the lead covered), mixpanel-python, customerio-node,
launchdarkly/openfeature-node-server. (statsig-io/statsig, optimizely/agentkit, heap/heap-api,
pendo-io/pendo-agent, Braze/braze-swift-sdk do not exist under those exact names/orgs — 404,
recorded as a dead-end, not a negative finding about the vendor.)

**Result: a second vendor confirms the pattern.** `growthbook/growthbook` — **8,082 stars** (as-of
2026-08-01), `pushed_at: 2026-08-01` (actively maintained). **License is genuinely split and the
GitHub API lies about it**: `gh api repos/growthbook/growthbook --jq .license.spdx_id` returns
`NOASSERTION`, but the actual `LICENSE` file at
`raw.githubusercontent.com/growthbook/growthbook/main/LICENSE` states MIT-Expat for everything
EXCEPT three enterprise-carve-out directories (`packages/back-end/src/enterprise`,
`packages/front-end/enterprise`, `packages/shared/src/enterprise`, each separately licensed under
"GrowthBook Enterprise License"). The agent-skills directory (`packages/back-end/src/agent/skills/`)
sits OUTSIDE the enterprise carve-out — it is MIT. This is the exact license-API-lies trap the
charter warns about, caught directly.

GrowthBook's in-product AI-agent skill suite lives at
`packages/back-end/src/agent/skills/{experiments,feature-flags}/` — a router `SKILL.md` per domain
plus flat `.md` leaf files (no subdirectories, no `SKILL.md` per leaf — a different file-layout
convention than the Anthropic Agent Skills spec, worth noting for the controller's own skill-format
decisions). Leaves read: `experiment-brainstorm.md`, `experiment-design.md`, `experiment-launch.md`,
`experiment-analyze.md`, `experiment-stop.md` (experiments); 16 leaves under feature-flags
(`flag-create`, `flag-toggle`, `flag-targeting`, `flag-experiment`, `flag-ramp`,
`flag-prerequisites`, `flag-monitoring`, `flag-graph`, `flag-cleanup`, etc.).

**Quality verdict: VALIDITY LAYER, and sourced better than rampstack's** (GrowthBook cites its own
in-product documentation/behavior rather than asserting bare numbers). `experiment-design.md`:

> "A common rule-of-thumb GrowthBook documents is **≥ 200 conversions per variation** for
> proportion metrics; the formula `n ≈ 16 × p × (1 - p) / (p × MDE)^2` per variation lands in
> roughly the same place for 80% power. Don't quote three significant figures from either — they're
> estimates." — this is a folklore-adjacent rule of thumb but explicitly labeled as GrowthBook's own
> documented rule (traceable to GrowthBook's docs, not a bare unsourced claim — still flagged as a
> magnitude to re-verify against the primary GrowthBook docs page before the controller ships it,
> per "never trust a secondhand number")

> "Watch out for activation-metric bias. Activation metrics downstream of variation differences
> silently bias results without tripping SRM." — a genuinely sophisticated point not seen in any
> other repo in this sweep: SRM (sample-ratio-mismatch) checks can PASS while the experiment is
> still biased, because the activation metric used to define the analysis population is itself
> affected by the treatment. This is a real, subtle validity failure mode.

`experiment-analyze.md` runs **six explicit data-quality checks before any interpretation is
allowed**: SRM, Multiple Exposures, Minimum Data Thresholds, Variation ID Mismatch, Suspicious
Uplift, Guardrails — and states the ordering rule explicitly: "Data-quality checks come before
interpretation... A failure in any of them changes how (or whether) to interpret the result. Don't
bury them under the primary-metric heading." It also correctly branches Bayesian ("Chance to Win"
+ Credible Interval, >95%/<5% thresholds) vs frequentist (p-value/CI) reporting and explicitly
forbids fabricating a p-value on a Bayesian result or mislabeling a Credible Interval as a
Confidence Interval — a precision point most human-written CRO content gets wrong.

> "Frequentist peeking inflates false-positive rates; Bayesian is more robust but still benefits
> from hitting the planned sample size." — correctly nuanced (Bayesian is not immune to
> peeking-adjacent issues, just more robust)

Feature-flags leaves are thinner (mostly API-mechanics for `flag-toggle`, `flag-ramp`,
`flag-schedule`, `flag-monitoring` — this is the same growth-vs-operate flag-type territory as
rampstack's `feature-flagging` skill but written as operational tool-use instructions for an
AI copilot rather than as a standalone teaching document; less directly citable as prose, more
useful as a reference for how a real production experimentation platform's own team models the
distinction between an `experiment-ref` targeting rule and a kill-switch rule).

Source pointers: `https://github.com/growthbook/growthbook`,
`https://raw.githubusercontent.com/growthbook/growthbook/main/LICENSE`,
`https://raw.githubusercontent.com/growthbook/growthbook/main/packages/back-end/src/agent/skills/experiments/SKILL.md`,
`.../experiments/experiment-design.md`, `.../experiments/experiment-analyze.md`,
`.../feature-flags/SKILL.md`. As-of 2026-08-01.

**Pattern verdict for the controller**: two vendors (PostHog per the lead's slice, GrowthBook per
this worker) now confirmed shipping in-product AI-agent skill suites with real experimentation
validity content, embedded in their own product repos rather than published as standalone
"claude-skills" repos. Zero other vendors confirmed in this sweep (Unleash, Flagsmith checked
negative; Statsig, Optimizely, LaunchDarkly, Amplitude, Mixpanel, Heap, Braze, Customer.io, Pendo,
Iterable not found under the org/repo names tried — absence not fully falsifiable for these since
repo-name guessing is an imperfect method; a wider `gh search code` sweep across those vendor org
names would be needed to fully close this out, and was not run to conserve the WebSearch/gh budget
for the awesome-list and folklore-harvest deliverables that are this worker's primary brief).

### 2.1 Other standalone SKILL.md hits worth recording (lighter-touch reads)

- **`nexscope-ai/eCommerce-Skills`** — `shopify-ab-testing/SKILL.md`. E-commerce-vendor-specific
  skill pack (Shopify apps: advertising, ab-testing). Not deep-read in full; surfaced by
  `gh search code "a/b testing" filename:SKILL.md`. Flagged for completeness, not verdict-rated.
- **`vercel/flags`** (the official Vercel Flags SDK repo) — `skills/flags-sdk/SKILL.md`. This is a
  first-party vendor SDK repo (not a growth-content pack) shipping a skill that teaches
  flags-SDK *usage*, not experiment design/validity. Confirms the vendor-in-repo-skill pattern
  extends to a third infra vendor (Vercel), but the skill is operational/API-surface content, not
  growth-canon content — noted for completeness, not counted toward the "dedicated growth pack"
  question.
- **`majiayu000/claude-skill-registry`** — this deserves its own entry, not just a source of leads.
  It is a **64,378-entry aggregator repo** (`gh api .../git/trees/main?recursive=1` returns that
  many tree entries) that mirrors SKILL.md files scraped from thousands of other GitHub repos into
  a single categorized tree (`skills/<category>/<skill-name>[-<owner>-<repo>]/SKILL.md`), including
  a mirrored copy of `coreyhaines31/marketingskills`'s `ab-test-setup` and `paywall-upgrade-cro`
  skills (channel A's target — confirmed present but not deep-read here per the territory split).
  **Not independently rated for license** — as a scrape-and-mirror aggregator, licensing is
  inherited per-origin-repo and the aggregator's own top-level license was not checked (out of
  scope; flagging this as an open question in §9). Its existence is itself a finding: the
  Claude-skill ecosystem is large and fragmented enough that a full scrape-aggregator now exists as
  a discovery tool, and it surfaces enormous variance in quality — from the sophisticated
  (`ab-testing-statistician`, actually about audio ABX testing, not growth, but shows the SKILL.md
  format's spread into adjacent "AB test" domains entirely unrelated to product growth) to
  templated stubs (`growth-experiment` — a Korean-language two-paragraph agent-role stub with no
  methodology content at all: "실험을 설계하고 분석합니다" / "designs and analyzes experiments", zero
  statistical content, `allowed-tools` list only). Sampled quality reads:
  - `skills/analysis/retention-analysis/SKILL.md` — survival analysis / cohort analysis / Cox
    regression / Kaplan-Meier churn prediction skill. Names real statistical methods by name but
    reads as a feature list ("this skill helps you: 1. calculate retention rates... 6. generate
    actionable insights") rather than teaching validity — **tactic-list with statistical
    vocabulary**, not a validity layer (no discussion of survivorship bias, censoring pitfalls, or
    confidence intervals on the survival curves themselves).
  - `skills/analysis/churn-analysis/SKILL.md` — structured churn-report template with a genuinely
    useful **voluntary-avoidable vs voluntary-unavoidable vs involuntary** churn taxonomy, but no
    statistical validity content — **tactic-list**, well-organized.
  - `skills/business/pricing-strategy/SKILL.md` — names **Van Westendorp** correctly as a
    willingness-to-pay method (matches controller-canon's flagged provenance-check item — the
    skill itself does not explain the Van Westendorp methodology, just name-drops it as a trigger
    keyword) — **tactic-list**, context-gathering questionnaire, no validity layer.

---

## 3. The incumbent question: is there a dedicated growth/experimentation skill pack?

**Answer: no standalone repo titled/scoped as "growth skill" or "experimentation skill" exists at
meaningful adoption in this GitHub-search sweep — but the functional content is not absent, it is
distributed across three different shapes**, none of which is what "a dedicated growth pack" would
look like if the family shipped it:

1. **A cluster embedded inside a broader lifecycle pack** — `rampstackco/claude-skills` (§2.0).
   This is the closest thing to a dedicated pack in terms of *quality*: its `experiment-design` +
   `experimentation-analytics` + `feature-flagging` + `experimentation-platform-orchestrator` +
   `data-warehouse-experimentation` cluster is genuinely excellent, matches the controller-canon's
   validity bar (CUPED, SRM-adjacent ratio-metric variance issues, sequential testing, SUTVA,
   multiple comparisons) point for point, and unprompted answers the charter's growth-vs-operate
   flag-type seam question. But it is 6 skills out of 103 in a website-lifecycle pack, and it has a
   **hard content gap**: no retention, no churn, no referral/viral, no pricing/monetization
   experiments, no PLG. It cannot be "the incumbent" for the full 17-item canonical growth
   definition; it is the incumbent for experiment design + interpretation + CRO + funnel/lead-gen
   tooling specifically.
2. **Vendor-shipped AI-copilot skill suites, embedded in the product's own repo** —
   `growthbook/growthbook` (§2.0.1, this worker) and PostHog (per grw-github's lead slice, not
   re-covered here). These are operationally excellent and arguably the single most
   validity-rigorous content found anywhere in this sweep (GrowthBook's "activation-metric bias
   hides as passing SRM" point in particular), but they are written as *tool-use instructions for
   an AI agent operating that specific vendor's product* (REST endpoints, `callApi` conventions,
   page-context routing) — not portable teaching content a growth-skill pack could lift wholesale
   without heavy rewriting. They are evidence of what a rigorous team believes about experiment
   validity, valuable as a **second and third independent corroboration source** for the canon
   (alongside Kohavi/GrowthBook-docs/etc.), not lift-able skill text.
3. **A long tail of small, single-purpose, wildly variable-quality skills** scattered across
   thousands of personal/small-team repos, discoverable via `gh search code "SKILL.md"
   <growth-term>` and aggregated (but not curated) by `majiayu000/claude-skill-registry` (§2.1).
   Quality ranges from genuinely well-organized tactic-lists (`churn-analysis`'s
   voluntary/involuntary taxonomy) to two-paragraph stubs with zero content
   (`growth-experiment`). None of these individually rises to "dedicated growth pack" status; in
   aggregate they demonstrate broad, shallow demand for growth-adjacent Claude skills without a
   single project having consolidated it.

**Falsifiable absence claim**: no repo surfaced by any of the following searches is a dedicated,
well-adopted (>100 stars), broad-coverage (experimentation + retention + referral + pricing +
funnel) growth skill pack: `gh search repos "claude skills"` (top 50, sorted by relevance/stars —
none titled "growth-skill" or "experimentation-skill" among the top results), `gh search code
"SKILL.md" growth`, `gh search code "SKILL.md" experimentation`, `gh search code "a/b testing"
filename:SKILL.md`, `gh search code "conversion rate optimization" agent`, `gh search code
"retention" skill.md`, `gh search code "pricing" skill.md`, `gh search code "churn" skill.md`,
`gh search code "activation" skill.md`, `gh search code "experiment" SKILL.md`, `gh search code
"north star metric" prompt` (all run 2026-08-01, full commands logged in §Method above). This
matches the wedge hypothesis #3 in controller-canon.md ("incumbent packs likely bundle
ab-testing/CRO/churn as tactic lists without the validity layer") **half-right**: the tactic-list
long tail is real and confirmed, but the single best cluster found (rampstack) is NOT a tactic
list — it clears the validity bar cleanly. The correct framing for the controller is: **the
validity layer exists in scattered, high-quality pockets (rampstack's experimentation cluster,
GrowthBook's and PostHog's own agent skills) but nobody has unified experimentation-validity +
retention + referral + pricing + PLG under one coherent growth skill pack.** That gap is real and
is the wedge, not "nobody has validity content" (false) but "nobody has *unified, complete*
validity content across the full canonical scope" (true, falsifiable via the searches above).

---

## 4. Awesome-list inventory

All entries as-of 2026-08-01. `pushed` = `pushedAt` from `gh search repos ... --json
fullName,stargazersCount,description,pushedAt`; staleness computed against 2026-08-01. License
checked via raw LICENSE/LICENSE.md file fetch, not the GitHub API field (API field shown for
contrast where it lied).

| repo | stars | last push | staleness | license (file) | vendor-vs-method | validity content? | verdict |
|---|---|---|---|---|---|---|---|
| `dojinkimm/awesome-ab-testing` | 38 | 2023-08-19 | ~3yr stale | **NO LICENSE FILE FOUND** (checked `LICENSE` and `LICENSE.md`, both 404) — all-rights-reserved by default, flagged per charter rule | Almost entirely company-engineering-blog links (Netflix, Spotify, Airbnb, Uber, Grab, StitchFix, Shopify, Etsy, plus a strong cluster of **Korean tech-company engineering blogs**: 당근마켓/Karrot, 뱅크샐러드/Bank Salad, 데브시스터즈/Devsisters, 버킷플레이스/Bucketplace, 하이퍼커넥트/Hyperconnect, 핵클/Hackle, 매스프레소/Mathpresso, 우아한형제들/Woowa Brothers) — near-zero pure vendor-ad links | Indirectly yes — points AT primary sources (the actual engineering blogs) rather than containing validity content itself; also directly cites Kohavi's *Trustworthy Online Controlled Experiments* book and a "Bayesian AB Test" personal blog and an "MDE-setting method" blog | **Method-pointer list, high signal-to-noise, but no license and 3 years stale** — a good-resource-mining source (§7), not a citable-content source itself |
| `zhitkovk/awesome_ab_testing` | 8 | ~2025-02 | fresh-ish but tiny | not checked | not read (too small to prioritize) | unknown | not deep-read |
| `sahin/awesome-ab-testing` | 5 | 2016-10 | ~10yr stale | not checked | not read | unknown | dead, not deep-read |
| `bekatom/awesome-growth-hacking` | 520 | 2024-05-09 | ~2.25yr stale | **CC BY 4.0** (content license, not a code license — matches the charter's explicit note to flag CC licenses on content repos) | **Near-100% vendor/blogspam links**: Quora threads, Slideshare decks, "35 Growth Hacking Tools" listicles, growthhackers.com, autosend.io, a crypto-donation ask embedded in the README itself. Zero primary company-engineering-blog links, zero papers. | **None.** No statistical content, no experiment-validity content, no methodology beyond link-dumping. Pure 2013-2015-era "growth hacking" folklore artifact, frozen in amber and periodically re-pushed. | **Highest-star growth-named awesome-list found, and it is the weakest content of any list in this table** — a genuine "folklore density" headline finding: star count and content quality are inversely related here |
| `matteocourthoud/awesome-causal-inference` | 1185 | 2026-04-21 | **fresh, actively maintained** | **MIT** (verified from file) | Well-structured into 9 categorized files (`academic-research.md`, `blogs.md`, `books.md`, `conferences.md`, `courses.md`, `industry-applications.md`, `libraries.md`, `talks.md`, `tutorials-and-reviews.md`) via a `src/` split rather than one giant README — genuinely curated, not a link-dump | Yes, by construction — this is causal-inference-specific, adjacent to but broader than A/B testing (quasi-experimental methods, matching, IV, RDD, diff-in-diff — exactly the controller-canon §1 "quasi-experiments when randomization is unavailable" territory) | **Best-maintained, best-licensed, best-organized list in this entire sweep.** Not growth-specific but the single strongest good-resource-mining source found (§7) |
| `pheature-flags/awesome-feature-flags` | 5 | 2026-05-04 | fresh but tiny (5 stars) | **Unlicense** (public domain, verified from `LICENSE.md`) | Points to genuinely canonical sources: Martin Fowler's site hosting Pete Hodgson's "Feature Toggles" article (the canonical primary reference for flag taxonomy), Microsoft's "Progressive experimentation with feature flags" doc | The Fowler/Hodgson article is itself validity-adjacent (documents the release/experiment/ops/permission flag-type distinction that rampstack's `feature-flagging` skill and GrowthBook's flag skills both independently converge on) | Small but a legitimate pointer to the canonical flag-taxonomy primary source — good-resource-mining hit |
| `tech-and-finance/awesome-feature-flags` | 2 | 2026-05-31 | fresh, tiny | not checked | not read | unknown | not deep-read, noted for completeness |
| `oxnr/awesome-analytics` | 4300 | 2026-02-17 | fresh, large, generic BI/analytics-tooling list (not growth/experimentation-specific) | **MIT** (verified) | Broad analytics-tooling landscape (warehouses, BI tools, ETL) — general data-infra, not growth-experimentation content | Not growth-experimentation validity content; adjacent to the `data` sibling pack's territory more than growth's | Out of growth's core scope; flagged for the `data` pack's future reference, not growth's |
| `quentin-py/awesome-pricing` | 15 | 2025-11-28 | fresh-ish, small | **MIT** (verified) | "best software pricing PAGES" — this is a **pricing-page design gallery**, not a pricing-strategy/monetization-experiment resource (title is misleading relative to content) | None found in the description-level read | Not a pricing-strategy validity source; noted as a false-positive for the search term, worth the controller knowing the search term collision |
| `htcml/awesome-experimentation` | 0 | 2019-08-06 | ~7yr stale | not checked | empty/near-empty repo | none | **essentially a placeholder — the "awesome-experimentation" name-space is functionally empty on GitHub** |
| **`awesome-conversion-rate-optimization`** (exact and near-variants) | — | — | — | — | — | — | **ZERO results for `gh search repos "awesome conversion rate optimization"`. Absence, falsifiable.** |
| **`awesome-product-analytics`** | — | — | — | — | — | — | **ZERO results for `gh search repos "awesome product analytics"`. Absence, falsifiable.** |
| **`awesome-plg`** | — | — | — | — | — | — | **ZERO results for `gh search repos "awesome plg"`. Absence, falsifiable.** |
| **`awesome-retention`** | — | — | — | — | — | — | **ZERO results for `gh search repos "awesome retention"`. Absence, falsifiable.** |
| **`awesome-referral-marketing`** | — | — | — | — | — | — | **ZERO results for `gh search repos "awesome referral marketing"`. Absence, falsifiable.** |
| **`awesome-product-management-growth`** | — | — | — | — | — | — | **ZERO results. Absence, falsifiable.** |
| `awesome-saas-growth` | 0 | 2026-05-11 | fresh but empty/near-empty (`ANVEAI/awesome-saas-growth`, "Saas Growth tools and resources") | not checked | essentially empty | none | negligible |

**Headline finding for §5 of the charter's quality bar ("folklore density is itself a finding")**:
the awesome-list layer for growth/experimentation on GitHub is **thin and bifurcated** — either a
genuinely curated, well-licensed, actively-maintained pointer-list that is adjacent-but-not-core to
growth (`awesome-causal-inference`) or a dead/thin/folklore-only list that IS core to growth
(`awesome-growth-hacking`, `awesome-ab-testing`). Six exact-match awesome-list name-spaces the
charter asked about (`awesome-experimentation`, `awesome-conversion-rate-optimization`,
`awesome-product-analytics`, `awesome-plg`, `awesome-retention`, `awesome-referral-marketing`) are
**functionally or literally empty on GitHub**. This is a stronger and more specific absence finding
than "awesome-lists are stale" — several categories the charter explicitly asked about simply do
not exist as populated GitHub awesome-lists at all.

---

## 5. FOLKLORE HARVEST

Per grw-github's course-correction message, this is treated as the highest-priority remaining
deliverable. Every entry below is **reported as folklore, not fact** — exact wording, exact
source, and how many independent GitHub-sweep locations repeat it (or explicitly note it was found
only once, which is itself informative — a claim repeated across independent unrelated sources is
a different evidentiary category than one repeated by only one author with copy-paste spread).

1. **"How Dancing Cats and Loving Customers increased Strikingly's customer referrals by
   +200%"** — exact headline, found in `bekatom/awesome-growth-hacking/README.md`, in the "Case
   Studies" section, linking to referralsaasquatch.com. Classic shape: a huge round percentage
   (200%), no stated baseline/denominator, no time window, no sample size, a vendor's own blog
   (ReferralSaaSquatch, a referral-marketing SaaS) as the source promoting its own customer as a
   case study. Found in exactly **one** location in this sweep — not independently corroborated,
   but the *shape* of the claim (case-study headline percentage with no denominator) recurs across
   the entire `awesome-growth-hacking` list's "Case Studies" and "Growth Hacking Examples"
   sections, which this worker did not exhaustively catalogue line-by-line beyond this sample (time
   budget) — flagged for channel B/D to check whether they find the same headline independently via
   X or company-blog sweeps, which would upgrade it from single-source to pattern-confirmed.

2. **"≥ 200 conversions per variation"** as a rule-of-thumb sample-size floor for proportion
   metrics — found explicitly in `growthbook/growthbook`'s own
   `packages/back-end/src/agent/skills/experiments/experiment-design.md`, phrased as "A common
   rule-of-thumb GrowthBook documents is ≥ 200 conversions per variation for proportion metrics."
   This is DIFFERENT in kind from most folklore here: it is explicitly attributed to GrowthBook's
   own documentation (a rung-1 primary source, even though this worker did not independently open
   the GrowthBook docs page itself to confirm the exact wording — flagged UNTRACED at the
   primary-doc level even though the attribution chain is short and credible). Compare against the
   accompanying formula given in the same file, `n ≈ 16 × p × (1 - p) / (p × MDE)^2` per variation
   — this is the standard two-sample proportion power-analysis formula (recognizable as the
   textbook z-test sample-size formula for 80% power, α=0.05, algebraically simplified), so the
   "≥200" heuristic and the formula are mutually consistent for baseline conversion rates in a
   plausible mid-single-digit-to-low-teens percent range — but the skill file itself explicitly
   warns "don't quote three significant figures from either — they're estimates," which is a rare
   and welcome self-aware folklore-hedge baked into a primary-adjacent source.

3. **"Under ~5,000 monthly conversions per variant"** as the floor below which CRO/A/B testing
   should not be attempted — found in `rampstackco/claude-skills`'s `cro-optimization/SKILL.md`,
   "When NOT to use" section: "Without sufficient traffic to test (under ~5,000 monthly conversions
   per variant)." Zero citation given in the skill text. Found in exactly **one** location in this
   sweep. Notably **inconsistent by roughly an order of magnitude** with claim #2 above (GrowthBook's
   ≥200 conversions per variation) — both are "rule of thumb minimum sample" claims for the same
   underlying question (when do you have enough traffic to test) but differ by ~25x. This
   inconsistency is itself a finding worth flagging to the controller: **the "how much traffic do
   you need" folklore number varies by an order of magnitude across sources depending on assumed
   MDE, baseline rate, and desired power — any single number the controller considers citing must
   carry its assumptions, not stand alone as "you need N conversions."**

4. **"Production rollouts that complete in under four hours are usually rolling too fast"** —
   found in `rampstackco/claude-skills`'s `feature-flagging/SKILL.md`, in the rollout-strategies
   section. Zero citation. Found in exactly **one** location in this sweep.

5. **"Evaluating fifty flags per request should add no more than 5 ms in the typical case"** —
   found in the same `feature-flagging/SKILL.md`, performance-considerations section. Zero
   citation, stated as a flat engineering budget. Found in exactly **one** location.

6. **"With daily peeking on a 28-day test, false positive rate can exceed 30 percent"** — found
   (in near-identical wording, "climb toward 14 percent" at 3 analyses, "can exceed 30 percent" at
   daily peeking on a 28-day test) in BOTH `rampstackco/claude-skills`'s `experiment-design/SKILL.md`
   AND its companion `experimentation-analytics/SKILL.md` — but these are the same author/repo, so
   this is **one source repeating itself twice, not independent corroboration**. Zero citation to a
   paper or company blog in either occurrence. The qualitative direction (peeking inflates false
   positives, badly) is textbook-standard and matches controller-canon's belief about the Johari/
   Koomen/Pekelis/Walsh "always-valid p-values" literature, but the specific "30%" figure is
   UNTRACED to any primary source in this repo — this worker recommends channel D verify against
   the actual Optimizely "New Stats Engine" paper or a peeking-simulation paper before the
   controller cites "30%" as anything but this repo's own claim.

7. **CUPED variance reduction magnitude, "often 30% to 50% narrower"** CI width — found in
   `rampstackco/claude-skills`'s `experimentation-analytics/SKILL.md`: "The result is the same
   point estimate with a much narrower confidence interval, often 30% to 50% narrower, which is
   equivalent to roughly doubling your effective sample size for free." This closely matches (and
   may be downstream-derived from, though not attributed) the controller-canon's own prior belief
   ("typical claimed variance reductions ~30-50%" from the Deng/Xu/Kohavi/Walker CUPED paper
   lineage) — this is a case where GitHub-sourced folklore and the controller's own pre-research
   canon converge on the same magnitude, which raises confidence it traces to the real CUPED paper
   somewhere upstream, but neither this repo nor this worker independently traced it to
   Deng/Xu/Kohavi/Walker (2013) directly — still UNTRACED at the primary-paper level, flagged for
   channel D to close.

8. **Google Optimize listed as a live, current A/B testing tool** — found in
   `dojinkimm/awesome-ab-testing/README.md`'s "AB Testing Tools" section: "[Firebase AB
   Testing](https://firebase.google.com/docs/ab-testing?hl=ko)" and "[Google
   Optimize](https://optimize.google.com/optimize/home/)" listed alongside Hackle, GrowthBook,
   Optimizely, and Statsig with no deprecation note. **This is itself a staleness artifact, not a
   folklore claim** — Google Optimize was sunset by Google in September 2023 (widely reported
   outside this GitHub sweep; not independently re-verified by this worker per the WebSearch
   budget, flagged as this worker's own outside-context knowledge, UNTRACED within this sweep) —
   but it illustrates concretely how an awesome-list frozen since its last push (2023-08-19 for
   this repo) silently accumulates dead tool recommendations that a naive reader would take as
   current.

9. **Van Westendorp named but not explained** — `majiayu000/claude-skill-registry`'s
   `skills/business/pricing-strategy/SKILL.md` (mirroring some upstream small repo) lists "Van
   Westendorp" purely as a trigger keyword in its YAML frontmatter description ("...or 'Van
   Westendorp,' 'willingness to pay'...") with **zero explanation of the methodology anywhere in
   the skill body** this worker read. This is a specific, checkable instance of the pattern
   controller-canon flags generally: named methods get cited as buzzwords without their actual
   mechanics or caveats being taught. Not a numeric folklore claim, but a **name-dropping-without-
   substance** pattern worth cataloguing alongside the numeric folklore.

10. **The three-way honesty-taxonomy rhetorical device** (not a factual claim, but a *pattern*
    claim): every one of `rampstackco/claude-skills`'s 12 growth-tooling skills plus several
    product-category skills independently names a bad-cheap / bad-expensive / good pattern triad
    in its own frontmatter description (thin-bait / kitchen-sink-resource / earned-value-magnet;
    vanity-calculator / lead-trap / transparent-decision-tool; silo-funnels / kitchen-sink-funnels
    / matched-funnels; sandbagged-OKRs / aspirational-fantasy / stretch-OKRs; soft-launch /
    kitchen-sink / structured-beta). This is worth flagging to the controller not as folklore to
    falsify but as an observed **competitor rhetorical convention** — repeated ~12+ times within
    ONE repo, functioning as a trust signal ("I am honest about the bad versions of this pattern")
    that the growth-skill pack could consciously adopt or consciously differentiate from.

---

## 6. Open experimentation handbooks

### 6.1 Mozilla Experimenter / Nimbus / Jetstream — the strongest primary-source find in this section

- **`mozilla/experimenter`** — 145 stars, `pushed_at: 2026-08-01` (actively maintained, pushed the
  same day as this research). License: **MPL-2.0** (verified from `LICENSE` file). "A web
  application for managing user experiments for Mozilla Firefox."
- **`mozilla/jetstream`** — 26 stars, `pushed_at: 2026-07-31`. Tagline: "This machine kills
  superstition." License: **MPL-2.0** (per `gh api` license field; not independently re-verified
  against the raw LICENSE file for this specific repo, flagged as a minor gap). Automated
  experiment analysis: computes metrics and applies statistical treatments (bootstrap means,
  binomial outcomes with bootstrapped CIs, pretreatments) to Nimbus experiment data.
- **`mozilla/experimenter-docs`** — 10 stars, `pushed_at: 2026-07-30`. "Documentation hub for
  Experimenter/Nimbus," backs `experimenter.info`. **License: `null` — NO LICENSE FIELD, and this
  worker did not find a LICENSE file in the repo root via the tree listing. Flagged explicitly per
  the charter's "no license file = all-rights-reserved by default" rule** — this is real, citable
  documentation content but should not be assumed freely reusable/lift-able without checking
  further or asking Mozilla.

What it teaches, read directly from the docs tree (`docs/data-analysis/...`):

- **`docs/data-analysis/validating-experiments.md`** — a genuine primary-source validation
  playbook. Direct quote: "You will also see a 'Sample Ratio Mismatch' health check, which is a
  chi-squared test of independence to determine whether the difference between the actual v.s.
  expected ratio of branches is statistically significant... if you see a sustained period of
  enrollment for which the p-value is less than 0.01, you should consider this cause for further
  investigation." This gives a **specific, named, primary-source SRM significance threshold
  (p<0.01)** — more concrete than any other source in this sweep, and traceable directly to a real
  production experimentation platform's actual documented practice, not a re-quoted folklore
  number. Also documents "High Unenrollments," "Low Enrollments" (with named causes: sizing
  errors, targeting conflicts, misconfiguration, deployment irregularities during the first week of
  a new release), distinguishing "it is *always* important for enrollments to be balanced, whereas
  noise in unenrollments is less concerning."
- **`docs/data-analysis/jetstream/statistics.md`** — documents Jetstream's actual statistical
  primitives: `binomial` (bootstrapped CIs for branch differences), `bootstrap_mean` (mean +
  bootstrapped 95% CI, removes top 0.5% of values by default), pretreatments (`remove_nulls`,
  `remove_indefinites`, `censor_highest_values`, `log`, `zero_fill`). Contains a genuinely
  sophisticated methodological warning most CRO content misses entirely: "Dropping null values for
  engagement metrics can create misleading results. Imagine an experiment that forces all but your
  most committed users to churn: if you dropped all the clients that didn't return in the second
  week, your engagement metrics would skyrocket, since only the die-hards would be left! Coercing
  those nulls to zero instead will accurately reflect the decline in your population's engagement."
  This is a **real, non-obvious statistical-validity teaching point** (survivorship-bias-shaped
  null-handling) not found stated this precisely anywhere else in this sweep.
- **`docs/data-analysis/experiment-sizing.md`** — documents Mozanalysis, Mozilla's internal library
  for pulling historical BigQuery data to size experiments realistically against actual historical
  variance (not textbook-formula-only sizing), including enrollment-period vs continuous-enrollment
  design choice and client-level time-series metric support.
- Other pages present but not deep-read (time budget): `docs/data-analysis/data-topics/bucketing.md`,
  `.../missing_exposures.md`, `.../population_representativeness.md`, `.../preenrollment_bias.md`,
  `.../sizing.md`, `docs/data-analysis/jetstream/{configuration,data-products,metrics,operations,
  outcomes,testing,troubleshooting}.md`, `docs/getting-started/for-{data-scientists,engineers,
  experiment-owners,leadership,reviewers}.md` (this last cluster looks like it would directly answer
  "who does what in an experimentation program" — flagged as a high-value unread page for a
  follow-up pass if the controller wants more from this source).

**Citability verdict**: this is the single best "open experimentation handbook" found in this
sweep — real production platform, real documented thresholds (p<0.01 for SRM), sophisticated
validity content (null-handling survivorship bias), actively maintained (pushed same-day). The only
caveat is the missing license on `experimenter-docs` specifically (the code repos `experimenter`
and `jetstream` are properly MPL-2.0). Source pointers:
`https://github.com/mozilla/experimenter`, `https://github.com/mozilla/jetstream`,
`https://github.com/mozilla/experimenter-docs`,
`https://raw.githubusercontent.com/mozilla/experimenter-docs/main/docs/data-analysis/validating-experiments.md`,
`.../docs/data-analysis/jetstream/statistics.md`, `.../docs/data-analysis/experiment-sizing.md`.
As-of 2026-08-01.

### 6.2 GitLab handbook — DEAD END, recorded honestly

The charter asked to find GitLab's public handbook growth/experimentation pages. This worker could
**not locate a current public GitHub mirror of the GitLab handbook**. `gh api
repos/gitlab-com/www-gitlab-com` → 404 (the historical repo name from when the handbook was
Markdown-in-GitHub no longer resolves). `gh api repos/gitlab-com/content-sites/handbook` → 404 (a
guessed newer path, also wrong). `gh search repos "gitlab handbook"` returned only unofficial
third-party mirrors/forks (`AnswerDotAI/gitlab-handbook`, `cameronraysmith/gitlab-handbook`, a
"RAG of Gitlab handbook" repo, none of them GitLab's own, none deep-read since they are not the
primary source). A direct `curl` (with the charter's specified UA string) to
`https://handbook.gitlab.com/handbook/product/growth/` returned **HTTP 404**. GitLab appears to
have restructured its handbook site/repo since the charter was written (or the growth section
lives at a different path than guessed). **This worker did not spend further WebSearch budget
chasing the correct current path** (0 of the 3 allotted WebSearch calls used all run; reserved for
this deliverable was judged lower-value than the folklore harvest and Mozilla find already secured
given time constraints) — flagged as an explicit open item in §9 for the controller or a follow-up
pass to resolve, e.g. via `gh search code "experimentation" repo:gitlab-com/gitlab-com` or a single
targeted WebSearch for "gitlab handbook growth site:gitlab.com" if budget allows elsewhere in the
run.

### 6.3 Other companies named in the charter — not independently chased here

Spotify, Airbnb, Booking.com, Netflix, Etsy, Basecamp/37signals, Wikimedia, Shopify, Duolingo
experimentation content was **not independently searched by this worker** beyond what surfaced
incidentally in `dojinkimm/awesome-ab-testing`'s link list (§7 below has the full pointer list this
worker harvested). This worker's primary brief was repos/awesome-lists/handbooks structurally
backed by a GitHub repo (per the charter's own framing: "companies sometimes publish their
experimentation guide as a repo or a docs site backed by a repo"); most of the named companies'
experimentation content lives on pure engineering blogs with no backing public repo (Netflix
TechBlog, Airbnb Engineering Medium, Spotify Engineering) — that content is channel D's territory
per the charter's own channel assignment (§d2: "company experimentation blogs"), and this worker
did not duplicate it, only harvested the blog POINTERS for §7 below.

---

## 7. Good-resource mining — pointers for other channels to chase

Harvested from awesome-lists and repos read in this sweep; NOT independently verified/read by this
worker beyond the pointer itself (that verification is channel D's or the controller's job):

**Company engineering blogs on experimentation** (from `dojinkimm/awesome-ab-testing`, full list
richer than what's excerpted — see the repo directly for the complete Netflix/Spotify/Airbnb/Uber/
Grab/StitchFix/Shopify/Etsy sub-lists):
- Netflix: "It's All A/Bout Testing: The Netflix Experimentation Platform," "Reimagining
  Experimentation Analysis at Netflix," "Design Principles for Mathematical Engineering in
  Experimentation Platform at Netflix" (all netflixtechblog.com)
- Spotify: "Spotify's New Experimentation Platform" (Parts 1 & 2), "Spotify's New Experimentation
  Coordination Strategy," "Experimenting at Scale, the Spotify Home Way," "Coming Soon: Confidence
  — An Experimentation Platform from Spotify" (all engineering.atspotify.com, 2020-2023)
- Airbnb: "Experiments at Airbnb" and an "Experiment Reporting..." piece (medium.com/airbnb-engineering)
- **Korean tech-company experimentation blogs, likely under-cited in English-language growth
  corpora and worth channel D or B chasing for genuinely fresh non-Kohavi-orbit primary sources**:
  당근마켓(Karrot)'s "Data Scientist's influence on decisions," 뱅크샐러드(Bank Salad)'s "진정한 실험
  조직의 탄생" (Birth of a Genuine Experiment Organization) and "실험플랫폼 분석 인프라" (Experiment
  Platform Analysis Infrastructure) at blog.banksalad.com, 데브시스터즈(Devsisters)'s NDC talk on
  their DevPlay A/B test platform, 버킷플레이스(Bucketplace/오늘의집)'s "A/B 실험 플랫폼 구축기" (Building
  an A/B Experiment Platform) at bucketplace.co.kr, 하이퍼커넥트(Hyperconnect)'s "ABzar" fair A/B
  test system for their Azar product (hyperconnect.github.io), 핵클(Hackle — a Korean
  experimentation-platform startup, not previously in the family's vendor list) talk by an
  ex-Coupang developer, 매스프레소(Mathpresso/QANDA)'s "QXP" experiment platform
  (blog.mathpresso.com), 우아한형제들(Woowa Brothers/Baemin)'s "실험과 기능플래그를 위한 실험플랫폼 구축하기"
  (Building an Experiment Platform for Experiments and Feature Flags) at techblog.woowahan.com.
- Personal/community blogs: a Medium post on "설정하는 방법" (how to set a meaningful-effect MDE
  threshold) by jhk0530, and a "Bayesian AB Test" post at assaeunji.github.io — both Korean-language,
  both specifically statistical (not tactic-list), worth machine-translating for channel D if the
  MDE-setting post in particular has a citable numeric method.

**Causal inference resources** (from `matteocourthoud/awesome-causal-inference`, MIT, 1185★, fresh):
the repo's own category split (`academic-research.md`, `blogs.md`, `books.md`, `conferences.md`,
`courses.md`, `industry-applications.md`, `libraries.md`, `talks.md`, `tutorials-and-reviews.md`)
is itself a map of where to look — this worker did not open each sub-file individually (time
budget) but flags this repo as the single highest-value unopened resource in this sweep for channel
D to mine directly for quasi-experimental-methods papers (diff-in-diff, synthetic control, RDD,
matching) that back the controller-canon §1 "quasi-experiments" section.

**Feature-flag canonical primary source**: Martin Fowler's site hosting Pete Hodgson's "Feature
Toggles" article (`martinfowler.com/articles/feature-toggles.html`), linked from
`pheature-flags/awesome-feature-flags`. This is very likely the ur-source for the
release/experiment/ops/permission flag-taxonomy that BOTH `rampstackco/claude-skills`'s
`feature-flagging` skill and GrowthBook's own agent skills independently converge on — worth
channel D tracing directly rather than trusting either downstream skill's paraphrase.

**Books**: Kohavi/Tang/Xu's *Trustworthy Online Controlled Experiments* is directly cited (with a
Korean-market purchase link) inside `dojinkimm/awesome-ab-testing` — independent corroboration
(from a source outside the marketing/design/X channels) that this book is THE canonical text, which
the controller-canon already assumed; this GitHub-sourced sighting is a minor additional
corroboration point, not new information.

---

## 8. Licenses master list (every repo touched in this file, license FROM FILE not API)

| repo | license (verified from file) | how verified |
|---|---|---|
| `rampstackco/claude-skills` | **MIT** | `raw.githubusercontent.com/.../main/LICENSE` fetched directly, full text confirmed MIT with 2026 RampStack Co. copyright |
| `growthbook/growthbook` | **MIT for the agent-skills path**; enterprise carve-out (`GrowthBook Enterprise License`) applies ONLY to `packages/back-end/src/enterprise`, `packages/front-end/enterprise`, `packages/shared/src/enterprise` — the `agent/skills/` path is NOT under any of those, so it is MIT | `raw.githubusercontent.com/.../main/LICENSE` fetched directly; **GitHub API's `license.spdx_id` field returned `NOASSERTION` — a confirmed instance of the exact "API lies" trap the charter warns about** |
| `dojinkimm/awesome-ab-testing` | **NO LICENSE FILE FOUND** — checked both `LICENSE` and `LICENSE.md` at repo root, both 404 | direct fetch, both 404 — flagged as all-rights-reserved by default per charter rule |
| `bekatom/awesome-growth-hacking` | **CC BY 4.0** (a content license, explicitly noted per charter's "CC-BY/CC0/CC-BY-SA on content repos is a content license, not a code license" instruction) | `raw.githubusercontent.com/.../master/LICENSE` fetched directly, full CC BY 4.0 text confirmed; GitHub API also said NOASSERTION here, another confirmed lie |
| `matteocourthoud/awesome-causal-inference` | **MIT** | direct fetch confirmed |
| `pheature-flags/awesome-feature-flags` | **Unlicense** (public domain) | direct fetch of `LICENSE.md` confirmed (note: file is `LICENSE.md` not `LICENSE`, `LICENSE` 404'd first) |
| `oxnr/awesome-analytics` | **MIT** | direct fetch confirmed |
| `quentin-py/awesome-pricing` | **MIT** | direct fetch confirmed |
| `mozilla/experimenter` | **MPL-2.0** | direct fetch of `LICENSE` confirmed full MPL-2.0 text; GitHub API agreed here (not always a lie) |
| `mozilla/jetstream` | **MPL-2.0** per GitHub API field only — **not independently re-verified against the raw LICENSE file for this specific repo** (gap, flagged) | API field only |
| `mozilla/experimenter-docs` | **`null` — NO LICENSE** per GitHub API `license` field, and no LICENSE file found in the repo tree listing | API field + tree listing; flagged per charter rule as all-rights-reserved by default despite being genuinely useful documentation content |
| `majiayu000/claude-skill-registry` | **NOT CHECKED** — this is a 64k-entry scrape-aggregator; its own top-level license was not verified, and per-origin-repo licensing was not traced for any individual mirrored SKILL.md beyond noting they originate elsewhere | open item, §9 |
| `htcml/awesome-experimentation`, `sahin/awesome-ab-testing`, `zhitkovk/awesome_ab_testing`, `tech-and-finance/awesome-feature-flags`, `nexscope-ai/eCommerce-Skills`, `vercel/flags` | **NOT CHECKED** — surfaced but not deep-read/license-verified given time budget | open item, §9 |

---

## 9. Open questions / dead ends

1. **GitLab handbook current location unresolved** (§6.2) — the growth/experimentation section the
   charter asked for was not located; the historical repo path is gone and a guessed current path
   404'd. Needs either a targeted WebSearch (budget allows — this worker used 0 of its ≤3 allotment)
   or someone with current knowledge of GitLab's docs-site restructuring.
2. **`majiayu000/claude-skill-registry`'s own license was never checked** — given it's a
   64,378-entry scrape-and-mirror of other people's SKILL.md content, this matters more than usual:
   if the controller wants to cite or lift anything FROM this aggregator rather than tracing to the
   origin repo (which is what this worker did for the one item that mattered, rampstack's
   `experimentation-analytics`), the aggregator's own redistribution license needs checking first.
3. **Vendor `.agents/skills/` sweep incomplete** — Statsig, Optimizely, LaunchDarkly, Amplitude,
   Mixpanel, Heap, Braze, Customer.io, Pendo, Iterable were checked under one or two guessed
   org/repo names each and came back 404 or empty; this is NOT a confirmed absence (repo-name
   guessing is unreliable), just an unexplored area. A proper sweep would need `gh search code
   "loadSkill" OR ".agents/skills"` scoped per vendor org rather than guessing specific repo names.
4. **Star-count sanity**: several repos returned by `gh search repos "claude skills"` and "agent
   skills" show what read as extremely high star counts for their apparent age/content
   (`ComposioHQ/awesome-claude-skills` at 71,548; `ChrisRoyse's`/similar repos; `ANVEAI` repos
   pushed same-day as this research with 0 stars but appearing in results) — this worker did not
   attempt to sanity-check these against a second source (e.g., a direct `gh api
   repos/<owner>/<repo>` call for every hit) beyond the handful of repos deep-read for content
   (rampstack: 508★ confirmed via direct `gh api` call, matches the search result; growthbook:
   8082★ confirmed via direct `gh api` call, matches). The repos this worker actually cites content
   from all had their star counts cross-checked directly; the raw `gh search repos` list in §2's
   opening dump was NOT individually cross-checked line-by-line and should not be treated as
   verified for repos not otherwise discussed in this file.
5. **Korean-language sources not machine-translated or read past the linked-title level** — the
   `dojinkimm/awesome-ab-testing` Korean company blog cluster (§7) is flagged as high-value and
   under-cited in English corpora, but this worker did not open/translate any of the actual Korean
   blog posts themselves, only recorded their titles and URLs from the awesome-list.
6. **CUPED "30-50%" and peeking "30% false-positive rate" magnitudes remain UNTRACED to primary
   papers** within this worker's search (§5, items 6-7) despite appearing in a genuinely
   high-quality repo (rampstack) — recommend channel D close this specific traceability gap since
   it directly overlaps controller-canon's own pre-registered uncertainty about these exact
   magnitudes.



