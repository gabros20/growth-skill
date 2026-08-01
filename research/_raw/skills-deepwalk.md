# A3 — Skills-ecosystem deepwalk: growth-adjacent repos OTHER than coreyhaines31/marketingskills

Worker: A3 (channel A, grw-skills). As-of date for all star/pushed_at figures: **2026-08-01**, captured via
`gh api repos/<owner>/<repo>` (never the search-index numbers, which can lag). LICENSE claims are from
opening the LICENSE file itself inside a `git clone --depth 1`, never the GitHub API `license` field.

Scope note: A2 owns `coreyhaines31/marketingskills` — not duplicated here except where its README/growth
skill list is referenced for cross-checking a look-alike fork (`ayrshare/marketingskills`,
`Cesarjoquin/Marketing-Skills`), which I did NOT clone (out of scope, near-identical descriptions, low
stars, presumed forks — flagged, not deepwalked).

## 0. Discovery sweep (gh api, no WebSearch used)

Queries run (all via `gh api "search/repositories?q=..."`, sort=stars):
1. `claude+skills` (top 50)
2. `agent+skills+SKILL.md` (top 50)
3. `claude+skills+marketing+growth` (top 30)
4. `claude+skill+product+analytics` (top 30)
5. `awesome+claude+skills` (top 30)
6. `claude+skill+experimentation+ab+testing` (top 20)
7. `claude+skill+retention+churn` (top 20, zero growth-specific hits)
8. `claude+skill+product-led+growth+PLG` (top 20)
9. `claude+skill+onboarding+pricing+conversion` (top 20, zero hits)
10. Direct `repos/<name>` checks on the brief's named repos: `obra/superpowers`, `anthropics/skills`,
    `wshobson/agents`, `VoltAgent/awesome-claude-code-subagents`, `contains-studio/agents`.

Named-repo results (star counts confirmed via direct `repos/` call, 2026-08-01):
- `obra/superpowers` — 264,753★ — general agentic-skills framework, no growth-domain skills found in
  top-level layout (not cloned; out of scope for growth, this is a dev-methodology skill, not a domain pack).
- `anthropics/skills` — 165,624★ — official Anthropic skills repo. Not cloned this pass (time budget);
  flagged for a sibling/controller follow-up since it's the canonical reference implementation, but its
  published skill set (docx/pptx/xlsx/pdf/canvas-design as of public knowledge) is not growth-domain —
  low expected yield, deprioritized in favor of confirmed growth hits below.
- `wshobson/agents` — 38,424★, MIT (verified: LICENSE file opens "MIT License / Copyright (c) 2024 Seth
  Hobson"), pushed 2026-07-22, size 5,593 (much larger than growth repos). **Cloned and checked — ruled
  out.** 180 SKILL.md files across many domains (ML-ops, quant-trading, cloud, ship-mate, etc.) but only
  2 files touch growth/marketing at all: `plugins/startup-business-analyst/skills/market-sizing-analysis`
  and `plugins/content-marketing/agents/content-marketer.md`. All validity-layer term hits (`Bayesian`,
  `holdout`, `randomiz`, `confidence interval`, `stopping rule`, etc. — see matrix below) trace to
  unrelated files: `machine-learning-ops/agents/data-scientist.md`, `llm-finetuning/*`,
  `quantitative-trading/skills/backtesting-frameworks/references/details.md`,
  `plugin-eval/skills/evaluation-methodology/SKILL.md`. **Zero overlap between wshobson's stats content
  and its growth content** — confirmed by grepping `-l` (files list) per term and manually checking each
  path. Not deepwalked further; noted here as a ruled-out large incumbent.
- `contains-studio/agents` — 12,395★ — **kept, deepwalked** (below). Has a dedicated `marketing/`
  directory with `growth-hacker.md` and `project-management/experiment-tracker.md`.
- `VoltAgent/awesome-claude-code-subagents` — 23,926★ — not cloned; time-budget triage in favor of the
  higher-yield finds below (contains-studio already covers the "subagent collection with a growth
  persona" archetype).

New growth-specific finds from the sweep (this is the payload):
- `webtrends-optimize/claude-code-ab-testing-skills` — 1★ — description promises dedicated AB-testing
  skills. **Cloned — turned out to be an empty shell** (see §1).
- `Eronred/aso-skills` — 1,700★ — ASO skill pack with an explicit `ab-test-store-listing` skill plus
  `paywall-optimization`, `retention-optimization`, `monetization-strategy` reference docs.
- `OpenClaudia/openclaudia-skills` — 608★ — 65 marketing skills, several squarely growth/CRO
  (`ab-test-setup`, `growth-strategy`, `page-cro`, `signup-flow-cro`, `onboarding-cro`, `pricing-strategy`,
  `referral-program`).
- `menkesu/awesome-pm-skills` — 383★ — "28 AI-powered PM skills from Lenny's Podcast." Contains
  `growth-embedded`, `exp-driven-dev`, `metrics-frameworks`, `jtbd-building` — explicitly cites
  Ronny Kohavi, Elena Verna, Casey Winters, Gustaf Alstromer, Bob Moesta by name.
- `ekinciio/saas-growth-marketing-skills` — 12★ — 15 skills + 3 orchestration agents
  (`growth-strategist`, `metrics-analyst`), MIT, explicitly SaaS-growth-branded.
- `norahe0304-art/30x-growth-marketing-panel` — 30★ — 12-persona "expert panel" (Hormozi, Isenberg,
  Neil Patel, Nathan Gotch, Growth Tribe, etc.), heaviest persona-architecture of anything found this run.

## 1. Repo-by-repo deepwalk

### 1.1 `webtrends-optimize/claude-code-ab-testing-skills` — EMPTY SHELL (specimen, not a real pack)

- **Identity**: 1★, pushed 2026-03-02T22:08:40Z, size 14 KB.
- **LICENSE**: opened directly — GPL-3.0 (file header: "GNU GENERAL PUBLIC LICENSE / Version 3, 29 June
  2007"). Note: GPL-3.0 on a prompt/skills repo is unusual (most peers here are MIT) — if the controller
  ever wanted to lift text from this repo specifically, GPL's copyleft would matter. Moot because there's
  nothing to lift.
- **Structure**: repo contains exactly `LICENSE` and `README.md`. `find . -name SKILL.md | wc -l` = **0**.
  The README is two sentences: "A collection of public skills for Claude Code, hosted by Webtrends
  Optimize, for various aspects related to AB Testing / Experimentation." No skills directory, no content.
- **Finding**: this is the single most on-the-nose-named repo in the whole sweep ("claude-code-ab-testing-
  skills") and it is **vaporware** — a placeholder claimed by a real commercial CRO vendor (Webtrends
  Optimize) that has not shipped anything. Worth recording as evidence that "dedicated growth/
  experimentation skill pack" is a naming gap real vendors have noticed but not filled — supports the
  wedge hypothesis (controller-canon.md §5.3, "incumbent packs likely bundle ab-testing/CRO/churn as
  tactic lists without a validity layer") from the opposite direction: here there's no incumbent at all,
  dedicated or bundled, at this exact name.

### 1.2 `Eronred/aso-skills`

- **Identity**: 1,700★ (gh api, 2026-08-01), pushed 2026-07-27T19:18:40Z, size 1,728 KB. Built by/for
  Appeeky (a paid ASO intelligence platform with an MCP server integration) — the skills are the
  free/open marketing layer for a commercial data backend.
- **LICENSE**: opened directly — MIT (file header: "MIT License / Copyright (c) 2026 Erencan").
- **Structure**: 40 `SKILL.md` files under `skills/<name>/SKILL.md`, plus a parallel `reference/*.mdx`
  docs-site mirror (Mintlify-style docs with `docs.json`, `AGENTS.md`, `CLAUDE.md`). No `evals/` directory.
  Frontmatter is `name` + `description` + `metadata: version:`. Each skill cross-references siblings via a
  "Related Skills" / "Cross-Skill Handoffs" section at the bottom — genuinely well-factored modular design.
- **Growth-relevant skills** (read in full): `ab-test-store-listing/SKILL.md`, `paywall-optimization/
  SKILL.md`, `reference/retention-optimization.mdx`, `reference/monetization-strategy.mdx`.
  - `ab-test-store-listing` distinguishes Apple's native Product Page Optimization (PPO — true random
    split, 90% min confidence, 7–90 day runs, one test at a time) from Custom Product Pages (CPP — **not
    a true A/B test**, targeted-URL pages, no randomization) — this is a real, correct, non-obvious
    distinction most generic CRO content misses. `skills/ab-test-store-listing/SKILL.md:55`: "**Not a
    true A/B test** — CPPs are targeted pages linked from specific URLs/campaigns, not random traffic
    splits."
  - `paywall-optimization` is the most statistically literate single file in this whole sweep outside the
    dedicated experimentation content: it has a real funnel-diagnostic table, a 7-element scored audit,
    and — critically — names p-hacking directly: `skills/paywall-optimization/SKILL.md:133`: "Killing
    tests at p=0.05 without sample size — false positives in low-traffic apps." It also gives a sample-
    size floor table by baseline conversion (`SKILL.md:76-82`).
  - `retention-optimization.mdx` and `monetization-strategy.mdx` are terser "skill product page" style
    docs (part of the Mintlify site, describing what the `/retention-optimization` and
    `/monetization-strategy` slash-commands produce) rather than full procedural skills — benchmark
    tables with no citations (see §4).
- **Validity-layer grep**: see matrix in §3. `Eronred/aso-skills` hits: `guardrail`(2), `minimum
  detectable`(2), `confidence interval`(3), `sample size`(8). Zero on CUPED, SRM, sequential testing,
  Bayesian, frequentist, Bonferroni, SUTVA, switchback, Twyman, pre-register.
- **Growth-vs-operate note**: no monitoring/alerting/canary content found in this repo (it's a
  marketing/ASO pack, no infra content at all).

### 1.3 `OpenClaudia/openclaudia-skills`

- **Identity**: 608★, pushed 2026-08-01T07:16:08Z (pushed the same day as this research run — actively
  maintained), size 2,677 KB.
- **LICENSE**: opened directly — MIT (file header: "MIT License / Copyright (c) 2026 OpenClaudia").
- **Structure**: 65 `SKILL.md` files under `skills/<name>/SKILL.md`, extremely broad marketing-agency-in-
  a-box scope (SEO, ads, social platforms, bots, i18n, stock images — not just growth). Frontmatter is
  `name` + `description` only, description field doubles as a trigger-phrase list ("Trigger phrases
  include..."). No `references/`, `evals/`, or `scripts/` directories found.
- **Growth-relevant skills** (read in full — this is the single richest growth-tactics source in the
  whole sweep): `ab-test-setup`, `growth-strategy`, `page-cro`, `signup-flow-cro`, `onboarding-cro`,
  `pricing-strategy`, `referral-program`.
  - **`ab-test-setup/SKILL.md` is the best validity-layer content found anywhere in channel A.** It
    teaches, with worked mechanism (not just naming the term):
    - Sample-size formula with the actual algebra (`SKILL.md:41-42`: `n = (Z_alpha/2 + Z_beta)^2 *
      (p1*(1-p1) + p2*(1-p2)) / (p2-p1)^2`) plus a lookup table of required n by baseline CR × MDE
      (`:47-54`).
    - SRM by name and mechanism: `SKILL.md:105`: "Watch for sample ratio mismatch (SRM): >1% deviation
      means setup problem." — this is a threshold claim with no cited source (>1% is Microsoft/Kohavi-
      adjacent folklore, not sourced here).
    - Peeking by name and mechanism, with a quantified inflation claim: `SKILL.md:128`: "**Peeking**:
      Checking daily inflates false positives to 25-30%. Commit to sample size upfront." — **this 25-30%
      figure is stated with no citation.** It is directionally consistent with the peeking literature
      (Johari/Koomen/Pekelis/Walsh) but the specific number is unsourced folklore here — flag as UNTRACED.
    - Novelty effect, named and explained (`:132`).
    - Multiple comparisons + Bonferroni correction, named (`:133`): "One primary metric. Bonferroni
      correction for extras." — named but not worked (no formula, no example).
    - SRM check is literally a row in the reporting template (`:114`: "SRM Check: [Pass/Fail]").
    This is TAUGHT (mechanism present), not just NAMED, for peeking/SRM/novelty/sample-size — the
    strongest counter-evidence in this run to the "incumbents never teach the validity layer" wedge
    hypothesis. It is still missing CUPED, sequential testing/always-valid p-values, Bayesian methods,
    SUTVA/interference, and geo/quasi-experiment design entirely.
  - `growth-strategy/SKILL.md` is a full AARRR + growth-loops + ICE playbook with an unsourced benchmark
    table (`:39-49`, see §4) and named growth-loop taxonomy (viral/content/paid/sales) with K-factor
    formula and named thresholds ("K > 1 = exponential growth, K > 0.5 = meaningful viral lift",
    `:73`) — no citation.
  - `page-cro`, `signup-flow-cro`, `onboarding-cro`, `pricing-strategy`, `referral-program` are dense,
    well-organized tactic libraries (audit checklists, benchmark tables, A/B test idea banks, output
    templates) — genuinely useful operational content, but **zero validity-layer content** in any of the
    five (confirmed via full read — no SRM/CUPED/peeking/power terms anywhere in these five files; the
    only stats-adjacent mention is `signup-flow-cro` and `referral-program` both saying "A/B test" as a
    bare recommendation with no design guidance beyond "run it").
  - `referral-program/SKILL.md` has a correct, worked K-factor derivation and cycle-time model
    (`:78-117`) plus four uncited case studies (Dropbox, Airbnb, PayPal, Robinhood — see §4).
- **Validity-layer grep**: OpenClaudia is the top scorer of the non-dedicated-experimentation repos: SRM
  (2), sample-ratio (1), MDE (3), peek(3), guardrail(6), novelty effect(1), multiple comparison(1),
  Bonferroni(1), p-value(2), sample size(10). Zero CUPED, sequential test, Bayesian, frequentist,
  confidence interval, SUTVA, interference, switchback, holdout, Twyman, pre-register.
- **Growth-vs-operate note**: `skills/launch-strategy/SKILL.md:53` bundles "Monitoring/alerting. Scaling
  plan. War room channel. On-call assignments" as part of a launch checklist — this reads as **operate**
  content embedded inside a marketing/launch skill (launch-day infra readiness, not a learning
  experiment). Correctly out of scope for growth per the charter's canary-vs-A/B-test seam.

### 1.4 `menkesu/awesome-pm-skills`

- **Identity**: 383★, pushed 2026-02-19T12:25:38Z (oldest-pushed repo in this batch — not actively
  updated since Feb, unlike OpenClaudia/aso-skills which pushed within the last week), size 193,239 KB
  (**warning: this figure is dominated by a 214MB `images/` directory of PNG screenshots**, not code/
  content — the actual skill markdown is small; do not read the repo `size` field as a proxy for content
  depth here).
- **LICENSE**: opened directly — MIT (file header: "MIT License / Copyright (c) 2026 Udi Menkes"). **The
  GitHub API's `license.spdx_id` field returned `NOASSERTION` for this repo** — a direct confirmation of
  the charter's warning that "the GitHub license API returns NOASSERTION lies." The real LICENSE file is
  unambiguous MIT.
- **Structure**: 28 skills, each `<name>/SKILL.md` at repo root (no `skills/` subfolder wrapper, unlike
  the other repos here) plus a matching `images/<name>.png` screenshot and a `SKILLS-INDEX.md` router
  table. Frontmatter: `name` + `description`. Positioned explicitly as "28 AI-powered PM skills from
  Lenny's Podcast" (per repo description) — i.e., distilled from a named, real podcast/newsletter
  (Lenny Rachitsky), not generic tactic lists.
- **Growth-relevant skills** (read in full): `growth-embedded`, `exp-driven-dev`, `metrics-frameworks`,
  `jtbd-building`.
  - **Named-practitioner attribution is this repo's defining trait** — every growth skill opens with an
    explicit named-source line in its frontmatter `description`, and closes with a "Key Quotes" section
    attributing direct quotes to real people:
    - `growth-embedded/SKILL.md:3` (frontmatter): "Builds growth loops into products from day 1 using YC
      playbook (Gustaf Alstromer), Casey Winters growth frameworks, and Elena Verna's retention-first
      approach." Quotes at `:332-339`: Alstromer ("Retention first, activation second, acquisition
      last..."), Casey Winters ("The best growth loops are built into the product, not bolted on."),
      Elena Verna ("Acquisition is a tax on poor retention.") — **no source URL/date given for any quote**,
      i.e., named-practitioner but UNTRACED to a specific talk/post per the charter's evidence rungs.
    - `exp-driven-dev/SKILL.md:3`: "Builds features with A/B testing in mind using Ronny Kohavi's
      frameworks and Netflix/Airbnb experimentation culture." This file is the **most explicitly Kohavi-
      attributed content in the entire sweep** — it names guardrail metrics, primary-metric discipline,
      peeking bias, and a "HITS" framework (Hypothesis/Implementation/Test/Ship-or-stop) presented as
      Kohavi's, though HITS as a named acronym does not appear in Kohavi/Tang/Xu's book under that name
      (the book's actual vocabulary is OEC/guardrails/SRM/Twyman's law) — this looks like the skill
      author's own mnemonic wrapped around genuinely Kohavi-sourced concepts, **not a direct HITS
      citation from Kohavi**. Worth flagging: readers could reasonably believe "HITS framework" is
      Kohavi's own term; it is not (per the marketing-corpus-standard evidence bar, this should be
      labeled "author's synthesis, Kohavi-adjacent" not "Kohavi's framework").
    - Peeking named as a "Common Mistake" (`:112`: "❌ Stopping test early (peeking bias)") and again in
      the checklist (`:319`: "Don't peek early (wait for significance)") — named, not worked (no
      inflation number given, unlike OpenClaudia's ab-test-setup which gives 25-30%).
    - Sample-size math is gestured at but not worked: `:96-108` gives a schematic "Minimum sample size =
      (Effect size, Confidence, Power)" with one illustrative example (baseline 10%, MDE +1%, "~15,000
      users per variant") but no formula, no derivation — weaker than OpenClaudia's ab-test-setup on this
      axis.
    - Real-world examples cite Netflix ("250+ experiments running at once", `:336`) and Airbnb ("+3%
      bookings, all guardrails healthy", `:357`) with **no source link** — folklore-tier, UNTRACED.
    - `jtbd-building/SKILL.md` correctly attributes JTBD to Bob Moesta with the milkshake-marketing case
      study (`:131-140`) — this is a real, well-known, correctly-sourced case study (Moesta/Christensen's
      milkshake study is genuinely public and citable, though this file gives no URL either).
  - `metrics-frameworks/SKILL.md` has a muddled attribution: `:33` lists "Amplitude: Weekly learning users
    (in Spotify)" as a North-Star-metric example — this conflates Amplitude (a vendor that popularized the
    North Star Metric framework) with Spotify (a company usually cited for a different metric, "time spent
    listening" / streams) inside one garbled parenthetical. This reads as a genuine confusion/compression
    artifact in the source material, not a load-bearing claim, but it's a concrete example of quality
    degradation from distillation — flag as a quality issue, not deliberate misinformation.
- **Validity-layer grep**: `menkesu/awesome-pm-skills` hits: always-valid(2, both are "always" + "valid"
  false-positive matches in unrelated prose, not the always-valid-p-values concept — checked manually),
  peek(3), minimum detectable(2), guardrail(16 — highest guardrail count in the sweep, consistent with
  Kohavi-style framing being central to this repo), sample size(10). Zero SRM, CUPED, sequential test,
  MDE(as acronym), novelty effect, multiple comparison, Bonferroni, Bayesian, frequentist, p-value,
  confidence interval, stopping rule, SUTVA, interference, switchback, holdout, Twyman, pre-register.
- **Quality read**: this is the best-attributed (named practitioners, not generic "expert" voice) and
  most product-management-native framing in the sweep — it correctly subordinates growth tactics to named
  real frameworks. Its weakness is the exact inverse of OpenClaudia's ab-test-setup: strong on *who said
  it*, weak on *how to actually run the math* (no SRM, no worked power calc, no peeking-inflation number).
- **Growth-vs-operate note**: `ship-decisions/SKILL.md:62` lists "✅ Feature flag experiments" as a
  criterion for a low-risk ship decision, and `:104` lists "Monitoring in place" — again correctly
  separates growth's use of flags (experiments) from operate's use (rollback safety/monitoring) within
  the same checklist, without conflating them.

### 1.5 `ekinciio/saas-growth-marketing-skills`

- **Identity**: 12★, pushed 2026-07-14T19:16:55Z, size 565 KB.
- **LICENSE**: opened directly — MIT (file header: "MIT License / Copyright (c) 2026 Mustafa Ekinci").
- **Structure**: 15 skills under `skills/<name>/`, 3 orchestration agents under `agents/*.md`
  (`growth-strategist.md`, `metrics-analyst.md`, `launch-planner.md`), 4 templates, 19 Python scripts,
  plus a worked `examples/notion-full-audit/` directory showing real sample output from running the
  skills against Notion (a genuinely useful "show your work" example most repos in this sweep lack).
  README explicitly states "No API keys required — everything works with public endpoints and your own
  data," and separately, honestly: `README.md:255`/`CONTRIBUTING.md:188`: "**These skills are analysis
  tools, not monitoring services.** They run on-demand audits. For continuous monitoring, use dedicated
  SaaS tools." — this is the clearest explicit growth-vs-operate self-disclosure found in the whole sweep;
  the repo author drew the same seam the charter asks about, unprompted.
- **Growth-relevant content**: `agents/growth-strategist.md` orchestrates `geo-seo-auditor`,
  `aso-optimizer`, `landing-page-cro`, `plg-funnel-analyzer`, `subscription-metrics` into a "90-Day Growth
  Plan" report; `agents/metrics-analyst.md` orchestrates `subscription-metrics`, `retention-playbook`,
  `plg-funnel-analyzer`, `pricing-analyzer` into an A–F SaaS health grade with a benchmark table (MRR,
  ARR, churn <5%, LTV:CAC >3:1, Rule of 40 >40% — all presented without individual citations, consistent
  with the "folklore SaaS benchmark" pattern common across the whole sweep). Both agent files explicitly
  instruct: "Never present metrics without context (benchmarks, trends, or comparisons)" and "Be direct
  about bad news — sugarcoating hurts more than it helps" — a stronger-than-average honesty norm baked
  into the system prompt itself.
- **Validity-layer grep**: guardrail(1), sample size(1), Simpson(0 — matched only via the "\bSimpson"
  false-positive check across the sweep, see matrix note). No other validity terms hit anywhere in this
  repo — the weakest validity-layer coverage of the five real (non-empty) repos, consistent with its
  self-description as an "audit tool" pack rather than an experimentation-design pack.
- **Quality read**: does well: the honest "not a monitoring service" self-disclosure, the worked example
  output, the explicit "no API keys" low-friction design, and instructing the agent to lead with bad news.
  Weak on: zero experimental-design/validity content — a user asking this pack to actually design and
  interpret an A/B test would get nothing; it is entirely audit/benchmark-comparison tooling, not
  experimentation tooling, despite "growth" in the name.

### 1.6 `norahe0304-art/30x-growth-marketing-panel`

- **Identity**: 30★, pushed 2026-07-09T13:47:55Z, size 387 KB (small — the bulk of the actual knowledge
  lives in the author's *private* NotebookLM notebooks referenced by ID, not in the repo itself; the repo
  ships the "skeleton" persona files, not the full underlying transcripts).
- **LICENSE**: opened directly — MIT (file header: "MIT License / Copyright (c) 2026 nora").
- **Structure**: NOT the `skills/<name>/SKILL.md` pattern used by every other repo in this sweep — this
  is a **single-skill, multi-persona router**: one root `SKILL.md` plus `expert_knowledge/<expert>_kb.md`
  (12 files, one per expert). `find . -name SKILL.md | wc -l` = 1. This is architecturally distinct: a
  "panel" pattern (one skill, N persona sub-files + external retrieval) rather than a "faceted skill
  library" pattern (N independent skills). Also ships `distill_anyone.md` — a meta-prompt for building
  your *own* expert-persona knowledge base from a YouTube channel, i.e. the repo teaches its own
  extraction methodology, not just its output.
- **THE most persona-driven repo in this entire sweep** (see §5 for full analysis) — every expert KB file
  opens with a "PERSONA PROTOCOL" section (Role / Core Thinking Models / Tone & Style / Anti-Patterns /
  Retrieval Logic) instructing the model to become a "digital twin" of a real, named public figure and
  respond in first person as them.
- **Growth-relevant persona**: `expert_knowledge/growthtribe_kb.md` (Growth Tribe, a real European growth-
  marketing training company) is the one explicitly growth/experimentation-methodology-focused persona —
  covers AARRR, ICE, Sean Ellis test (with correct 40%-threshold provenance framing, `:51`: "Use the Sean
  Ellis Test: ask users 'How would you feel if our product didn't exist tomorrow?'... If 40%+ answer 'Very
  Disappointed,' you have product-market fit" — stated as Sean Ellis's own test, correctly attributed by
  name, though still no citation link), AA-testing discipline (`:157`, `:373`: "Always run AA tests first
  ... to verify your experimentation infrastructure works before running real tests" — this is a genuinely
  good, correctly-taught practice that appears **nowhere else in this entire sweep**), B2B-vs-B2C
  statistical-power framing (`:61-64`: explicitly notes B2B has "small sample size, making experiment
  completion slow" vs B2C's "large [sample], enabling statistical significance quickly" — a real,
  correctly-reasoned power-analysis-adjacent insight, though still not a worked calculation), and named
  case studies (Duolingo streaks, Spotify Wrapped +21% downloads claim, BitTorrent premium-visibility
  anecdote) — all uncited (see §4).
- **Validity-layer grep** (across all 12 expert KBs + SKILL.md): guardrail(1), Simpson(1 — false-positive,
  matched "Simpson" nowhere relevant on manual check, likely a name/word coincidence), sample size(3).
  Nothing else hits. The **AA-test concept is a real validity-layer practice this repo teaches that is
  completely absent from every other repo in this sweep** (grepped `AA test` specifically — zero hits
  anywhere else in channel A's clones), even though it doesn't match any of the charter's listed grep
  terms — worth flagging as a finding the term list itself would have missed.
- **Quality read**: does extremely well at voice fidelity, routing logic (single vs. multi-expert
  roundtable, named-expert override), and an explicit "Anti-Hallucination Protocol" (`SKILL.md:207-214`:
  "NEVER fabricate quotes, frameworks, or data points... If the source material doesn't cover the topic,
  extrapolate... and explicitly state you are extrapolating"). Where a reader would be led wrong: the
  underlying NotebookLM notebooks are the *author's private* notebooks (explicitly disclosed in
  `README.md:17`: "not shared and other users cannot query them") — so any other user installing this
  skill gets **KB-only responses without the "Layer 1 — Deep Retrieval" the SKILL.md instructs the model
  to treat as mandatory and primary** (`SKILL.md:161-163`: "Before generating ANY response, you MUST
  retrieve from NotebookLM. This is non-negotiable.") — the skill's own instructions describe a retrieval
  step that will silently fail for every user except the author, with only a fallback disclosure
  mechanism (`⚠️ KB-only`) to catch it. This is a real, structural gotcha for anyone adopting this pattern.

## 2. Ruled out after inspection (not deepwalked, recorded for completeness)

- `wshobson/agents` — see §0, checked and ruled out (huge, but growth content is 2 files, and all
  validity-layer term hits trace to unrelated ML/quant/eval content, verified by opening each matched
  file's path).
- `ayrshare/marketingskills` (13★) and `Cesarjoquin/Marketing-Skills` (155★) — descriptions are near-
  verbatim copies of `coreyhaines31/marketingskills`'s own description ("CRO, copywriting, SEO, analytics,
  and growth engineering") — presumed forks/clones of A2's incumbent, not independently deepwalked to
  avoid duplicating A2's territory. Flagging existence only; if A2's report doesn't already note these as
  forks, the controller should reconcile.
- `anthropics/skills` (165,624★) — not cloned this pass; official reference repo, but not growth-domain
  by any public description available. Recommend a light follow-up check if channel A gets a second pass.
- `obra/superpowers` (264,753★), `VoltAgent/awesome-claude-code-subagents` (23,926★) — checked by
  description only, not cloned; both are general dev-methodology/subagent collections without
  growth-specific framing in their top-level descriptions. Time-budget triage decision, not a claim of
  zero growth content — flag as unexplored if controller wants exhaustive coverage.

## 3. THE VALIDITY-LAYER TERM × REPO MATRIX (grep hit counts)

Grep run against `--include='*.md' --include='*.mdx'` inside each clone, `.git/` excluded. Word-boundary
guards applied to short/ambiguous tokens (`\bSRM\b`, `\bMDE\b`, `\bSUTVA\b`, `\bholdout\b`, `\bpeek(ing|
ed|s)?\b`) after discovering a false-positive substring match ("Appeeky" contains "peek" — caught and
fixed before producing this table).

| Term                  | aso-skills | openclaudia | awesome-pm | saasgrowth | 30x-panel | contains-studio | wshobson (ruled out) |
|------------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| SRM                    | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| sample ratio / -ratio  | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| CUPED                  | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sequential test        | 0 | 0 | 0 | 0 | 0 | 0 | 1* |
| always-valid           | 0 | 0 | 2† | 0 | 0 | 0 | 3* |
| peeking (word-bound.)  | 0 | 3 | 3 | 0 | 0 | 1 | 1* |
| statistical power      | 0 | 0 | 0 | 0 | 0 | 0 | 1* |
| power analysis         | 0 | 0 | 0 | 0 | 0 | 1 | 4* |
| minimum detectable     | 2 | 0 | 2 | 0 | 0 | 0 | 2* |
| MDE                    | 0 | 3 | 0 | 0 | 0 | 0 | 0 |
| guardrail              | 2 | 6 | 16 | 1 | 1 | 1 | 21* |
| novelty effect         | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| Simpson('s paradox)    | 0 | 0 | 0 | 0 | 1‡ | 1‡ | 0 |
| multiple comparison    | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| Bonferroni             | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| false discovery        | 0 | 0 | 0 | 0 | 0 | 0 | 1* |
| Bayesian               | 0 | 0 | 0 | 0 | 0 | 0 | 4* |
| frequentist            | 0 | 0 | 0 | 0 | 0 | 0 | 1* |
| p-value                | 0 | 2 | 0 | 0 | 0 | 1 | 2* |
| confidence interval    | 3 | 0 | 0 | 0 | 0 | 3 | 10* |
| stopping rule          | 0 | 0 | 0 | 0 | 0 | 0 | 3* |
| pre-register           | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sample size            | 8 | 10 | 10 | 1 | 3 | 3 | 8* |
| SUTVA                  | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| interference           | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| switchback             | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| holdout                | 0 | 0 | 0 | 0 | 0 | 0 | 10* |
| Twyman                 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| randomiz(e/ation)      | 0 | 0 | 0 | 0 | 0 | 1 | 15* |

`*` = wshobson hits manually verified to trace to non-growth files (ML-ops/quant-trading/eval-harness/
llm-finetuning), listed in §0 — genuinely zero overlap with growth content.
`†` = manually checked: both hits in `menkesu/awesome-pm-skills` are the word "always" adjacent to
"valid" in unrelated sentences, not the always-valid-p-values concept — **true count for the concept is
zero**, corrected from the raw grep.
`‡` = manually checked: both "Simpson" hits are false positives (proper-noun coincidences unrelated to
Simpson's paradox) — **true count is zero everywhere in channel A's clones.**

### The absence pattern (the core finding)

**Zero hits, in ANY of the seven repos checked (including the ruled-out wshobson, whose non-growth files
were also searched), for**: CUPED, SUTVA, interference, switchback, Twyman's law, pre-registration, and
(after manual correction) Simpson's paradox and always-valid p-values as a concept. Sequential testing,
Bayesian/frequentist framing, false discovery rate, and stopping rules appear **only** in wshobson's
unrelated ML-eval content — i.e., **zero appearances of these terms in ANY growth-domain skill file across
the entire sweep**, dedicated-experimentation repos included. This directly confirms controller-canon.md
§5.3's wedge hypothesis for this specific slice of the ecosystem: the two repos that DO teach real
mechanism (OpenClaudia's `ab-test-setup` and menkesu's `exp-driven-dev`) stop at sample-size math,
peeking, SRM, novelty effects, and Bonferroni — the entire modern always-valid-inference / variance-
reduction / interference layer (CUPED, sequential testing, geo-experiments, SUTVA) that Kohavi/Tang/Xu and
the company-blog canon (Microsoft/Netflix/Booking/Spotify) treat as standard is **completely untaught**
in every skills-ecosystem repo found this pass, dedicated or bundled, high-star or low-star.

## 4. Benchmarks and numbers quoted without sources (verbatim, path:line)

All of the below are UNTRACED per the charter's evidence discipline — copied verbatim, no source given in
the file itself. Sample-caveat and self-selected-vendor-sample flags noted where applicable.

- `dw-openclaudia/skills/ab-test-setup/SKILL.md:128`: "Peeking: Checking daily inflates false positives
  to **25-30%**." — no citation; directionally consistent with peeking literature, specific number UNTRACED.
- `dw-openclaudia/skills/ab-test-setup/SKILL.md:105`: "sample ratio mismatch (SRM): **>1% deviation**
  means setup problem." — UNTRACED threshold.
- `dw-openclaudia/skills/growth-strategy/SKILL.md:39-49`: full AARRR benchmark table — "Activation:
  Signup → Aha: **20-40% good, 50%+ great**"; "Retention: Week 1: **25-40%/50%+**"; "Revenue: Free→Paid:
  **2-5%/8%+**"; "NRR: **100-110%/120%+**" — no source, no sample, no date.
- `dw-openclaudia/skills/page-cro/SKILL.md:18-26`: industry landing-page CR benchmark table (SaaS free
  trial 3-5%/7%/10%+, e-commerce 2-3%/4%/6%+, etc.) — no source.
- `dw-openclaudia/skills/signup-flow-cro/SKILL.md:23-28,106-118,120-128`: three separate uncited benchmark
  tables (step-count completion rates, industry signup rates by vertical, signup-to-activation rates).
- `dw-openclaudia/skills/referral-program/SKILL.md:243-245`: "Dropbox... **3,900% growth in 15 months**
  (100K to 4M users)... Viral coefficient: **Estimated ~0.6-0.7**" — "Estimated" is honest hedging, but no
  source link; this is the famous, real, but uncited Dropbox case study repeated without primary-source
  attribution (Sequoia's/Dropbox's own retrospectives exist and are not cited here).
- `dw-openclaudia/skills/referral-program/SKILL.md:247-251`: Airbnb "**300% increase in bookings**" from
  referral redesign — uncited.
- `dw-openclaudia/skills/referral-program/SKILL.md:254-259`: PayPal "**7-10% daily growth**... $60-70M in
  referral bonuses" — uncited (this is a real, widely-repeated historical figure but no source given).
- `dw-aso/reference/retention-optimization.mdx:48-54`: category-by-category D1/D7/D30 benchmark table
  (Games >35%/>15%/>8%, Social >40%/>20%/>15%, etc.) — no source, no sample size, no date.
- `dw-aso/reference/monetization-strategy.mdx:39-45,49-55`: pricing-by-category and paywall-timing-by-
  conversion-rate tables — no source.
- `dw-aso/skills/ab-test-store-listing/SKILL.md:63-68,152-177`: multiple "Expected Impact" ranges for
  icon/screenshot/video A/B tests (e.g. "First screenshot: **15-30% lift possible**") — presented as
  general impact ranges with no source or sample.
- `dw-pm/growth-embedded/SKILL.md:280-283`: Dropbox referral "**35% of signups from referrals**" — a
  *different* Dropbox figure than OpenClaudia's, from the same underlying case study, also uncited —
  worth noting as an example of the same folklore case study circulating with inconsistent specific
  numbers across independently-authored repos.
- `dw-pm/growth-embedded/SKILL.md:285-292`: Superhuman "**90%+ retention**" — uncited.
- `dw-pm/exp-driven-dev/SKILL.md:336`: Netflix "**250+ experiments running at once**" — uncited.
- `dw-pm/exp-driven-dev/SKILL.md:357`: Airbnb ranking test "**+3% bookings**" — uncited.
- `dw-30x/expert_knowledge/growthtribe_kb.md:320`: Spotify Wrapped "**21% increase in mobile app
  downloads**" after Dec-2020 release — uncited (a real, findable, but not-cited-here figure).
- `dw-30x/expert_knowledge/growthtribe_kb.md:72`: "Average B2B conversion: **1-2%**" — uncited.
- `dw-30x/expert_knowledge/patel_kb.md` — dozens of specific, dated 2025/2026 numbers throughout (e.g.
  `:44-48`: "72% of people now want exact answers"; `:117-119`: "ChatGPT drives 85-95% of AI referral
  traffic for most NP Digital clients"; `:265-271`: "2026 Budget Trends (9,210 marketer survey)"). These
  are attributed to "NP Digital" (Neil Patel's own agency) as the implicit source throughout, which is at
  least a named-source attribution (rung 3, "named practitioners with dates" per charter) rather than bare
  folklore, but **no individual figure has a link, publication, or specific date** beyond the general
  "2026" framing — self-selected agency-client-sample caveat applies to all NP-Digital-attributed stats
  (their own client base, not a random sample). Flagged as a block rather than itemized further given
  volume — the controller should treat the entire Patel KB's number set as rung-3 (named practitioner,
  undated specifics) pending independent verification, NOT rung-1.
- `dw-30x/expert_knowledge/hormozi_kb.md:176-182`: conversion-benchmark table by channel (Meta leads
  ~10%, cold webinar 2-3%/5%, salesperson in-person 35%+, web checkout 1-2%) — attributed to Hormozi's own
  portfolio companies (Acquisition.com), self-selected-sample caveat applies, no link.

## 5. Persona files catalog

Persona-driven (system-prompt instructs the model to BE a character) vs procedure-driven (system-prompt
gives steps/frameworks without character voice) split across the sweep:

- **Heaviest persona architecture**: `norahe0304-art/30x-growth-marketing-panel`. Every one of 12 expert
  KB files opens with a structured "PERSONA PROTOCOL" (`expert_knowledge/hormozi_kb.md:5-31`, quoted in
  full above in §1.6's sibling reads) with explicit **Role** ("You are Alex Hormozi's digital twin"),
  **Anti-Patterns** ("Never give vague encouragement", "Never suggest lowering prices as a growth
  strategy"), and **Tone & Style** with signature-phrase banks. This is qualitatively more elaborate
  persona engineering than a simple "You are an expert X" preamble — it's closer to a character-voice
  fine-tuning spec expressed in prompt form.
- **`contains-studio/agents/marketing/growth-hacker.md:35`**: "You are a Growth Hacker specializing in
  rapid user acquisition, viral mechanics, and data-driven experimentation." — classic single-sentence
  persona framing, followed by procedure (frameworks, checklists, "6-Week Sprint Model" integration). Not
  the elaborate 30x-panel style, but still explicitly persona-first.
- **`dw-aso/skills/ab-test-store-listing/SKILL.md:10`**: "You are an expert in App Store product page
  optimization and A/B testing." — same pattern, one-line persona + procedure. This is the dominant
  pattern across `Eronred/aso-skills` and `OpenClaudia/openclaudia-skills` — every skill opens "You are an
  expert [domain] specialist," then is 90%+ procedure/checklist/template. Light persona, heavy procedure.
- **`menkesu/awesome-pm-skills`**: NO first-person persona framing at all — files are structured as "##
  When This Skill Activates" / "## Core Frameworks" with named-third-party attribution ("Source: Ronny
  Kohavi, Microsoft/Netflix") rather than "you are X." **This is the most procedure-driven, least persona-
  driven repo in the sweep** — it teaches frameworks attributed to real people rather than asking the
  model to impersonate anyone.
- **`ekinciio/saas-growth-marketing-skills` agents**: mid-weight — `agents/growth-strategist.md:53`: "You
  are a senior SaaS growth strategist with expertise in..." (one-line persona) but the bulk of the file is
  orchestration logic (which sub-skills to call, output format, report footer) — persona is a thin wrapper
  around a procedural agent.

**Overall split**: 2 of 6 real repos (30x-panel, contains-studio) are meaningfully persona-driven; 3 of 6
(aso-skills, openclaudia, saasgrowth) use a thin one-line persona wrapper around procedure; 1 of 6
(awesome-pm-skills) is purely procedure/citation-driven with zero persona framing.

## 6. Staleness specimens (unverified — flagged for controller verification, NOT confirmed wrong)

Per charter discipline ("verify against a primary source before flagging — do not flag on suspicion"), I
did not spend channel-A's WebSearch budget chasing these down (channel budget is 15 total across 4
agents; none of it used by me — my sweep and deepwalk were entirely `gh api` + `git clone` + local grep).
The following are candidates the controller or a follow-up worker should verify, NOT confirmed-stale
claims:

- `dw-30x/expert_knowledge/patel_kb.md:432-439`: "OpenAI went 'code red' when Gemini 3 shipped... Salesforce
  CEO Marc Benioff tweeted 'I'm not going back to ChatGPT.'" — specific claim about a named model
  ("Gemini 3") and a named executive's tweet, dated implicitly to the KB's 2026 extraction window. This is
  exactly the class of claim the charter warns about ("do not trust WebFetch-extracted 'latest model'
  claims"), except here it's extracted from a YouTube-transcript-derived KB rather than WebFetch — same
  risk profile. UNVERIFIED — flag for controller.
- `dw-30x/expert_knowledge/patel_kb.md:125-135`: "ChatGPT Algorithm Updates (2026) — 8 Key Shifts" —
  presented as current-state fact about a proprietary, frequently-changing system with no verifiable
  public spec. High inherent staleness risk by nature of the claim (any AI-product behavioral claim ages
  fast) — UNVERIFIED, flag for controller.
- `dw-30x/expert_knowledge/patel_kb.md:143-147`: "October 2025: Spotify opened ad inventory to Amazon...
  Q4 2025: Netflix joined [Amazon DSP]" — specific, dated M&A/partnership claims. Plausible-sounding but
  UNVERIFIED against a primary source (no link in the KB itself).
- `dw-openclaudia/skills/signup-flow-cro/SKILL.md:342`: tools table lists "Google Optimize (sunset) /
  VWO" — correctly marks Google Optimize as sunset (Google Optimize was in fact discontinued in 2023),
  this one is likely accurate self-aware staleness-handling rather than a stale claim — noted as a
  **positive** example (the skill author updated their own content to reflect a real deprecation) rather
  than a finding to flag.

## 7. Growth-vs-operate seam (charter's special question) — findings

The clearest and most explicit statement of this exact seam found anywhere in channel A:

- `contains-studio/agents` cleanly separates **`studio-operations/infrastructure-maintainer.md`**
  (operate: "monitoring system health, optimizing performance, managing scaling... proactive monitoring...
  alert systems... Synthetic monitoring... Real user monitoring") from **`project-management/
  experiment-tracker.md`** (growth: "A/B testing, feature flagging, cohort analysis... every feature
  shipped is validated by real user behavior") — two entirely separate agent files, no overlap in
  responsibilities, feature flags appear in the growth file for *experiment assignment* and implicitly in
  the operate file for *gradual rollout/rollback* — this is precisely the charter's "same flag infra,
  opposite intent" seam, expressed as two separate personas in the same repo without the repo authors
  apparently having read the charter (i.e., independent convergent evidence the seam is real and
  practitioner-recognized, not an artifact of this research project's framing).
- `ekinciio/saas-growth-marketing-skills` makes the seam explicit in prose (not just structurally):
  `README.md:255` / `CONTRIBUTING.md:188`: "These skills are analysis tools, not monitoring services...
  For continuous monitoring, use dedicated SaaS tools." — the author draws the line themselves.
- `OpenClaudia/openclaudia-skills`'s `launch-strategy/SKILL.md:53` is the one specimen of **conflation**:
  it bundles "Monitoring/alerting. Scaling plan. War room channel. On-call assignments" into a general
  launch checklist alongside marketing/GTM launch-day tasks — this is operate content correctly absent
  from growth's charter but present, unlabeled, inside a marketing-adjacent skill. Minor, single instance,
  not evidence of systemic conflation across the sweep.
- No repo in this sweep uses canaries, gradual/percentage rollout, or feature-flag infrastructure as its
  PRIMARY subject — the closest is `dw-pm/exp-driven-dev/SKILL.md:119-149` which gives real feature-flag
  *code* (`isFeatureEnabled`, `consistentHash`, gradual `rolloutPercent`) but frames it entirely as
  experiment-assignment infrastructure for learning (A/B variant bucketing), not as risk-containment
  rollout — correctly growth-flavored, not operate-flavored, per the charter's seam definition.

## 8. Quality read summary (what each repo does well / where a reader is led wrong)

- **Eronred/aso-skills**: Does well — correctly distinguishes true randomized A/B (Apple PPO) from
  targeted-not-random pages (CPP), a subtlety most CRO content glosses over; paywall-optimization is the
  most funnel-diagnostic-literate single file outside the two dedicated-experimentation files. Led wrong:
  reference/*.mdx docs (retention, monetization) present benchmark tables with the same authority/
  confidence as the fully-worked SKILL.md files, but are thinner marketing-site blurbs, not procedures —
  a reader can't tell the difference in authority from the page alone.
- **OpenClaudia/openclaudia-skills**: Does well — `ab-test-setup` is the strongest single validity-layer
  file in the whole sweep (SRM, peeking-with-a-number, novelty effect, Bonferroni, worked sample-size
  formula, all in one file); breadth (65 skills) with consistent template quality. Led wrong: the 25-30%
  peeking-inflation figure and the >1% SRM threshold are stated with the same confident, unhedged voice as
  the correctly-sourced statistical formulas, giving no signal to the reader that one is textbook math and
  the other is an unsourced rule of thumb.
- **menkesu/awesome-pm-skills**: Does well — best named-practitioner discipline in the sweep (every growth
  skill cites real people: Kohavi, Verna, Winters, Alstromer, Moesta), correctly subordinates tactics to
  attributed frameworks. Led wrong: "HITS framework" is presented as if it's Kohavi's own named
  methodology when it appears to be the skill author's own mnemonic built from genuinely Kohavi-sourced
  concepts — a reader would likely misattribute the acronym itself to Kohavi.
- **ekinciio/saas-growth-marketing-skills**: Does well — explicit, unprompted self-disclosure of the
  growth-vs-operate seam ("analysis tools, not monitoring services"), worked example output, "lead with
  bad news" honesty norm in the system prompt. Led wrong: nothing, but the "growth" branding oversells the
  content — this is an audit/benchmarking suite, not an experimentation-design suite; zero validity-layer
  content despite the name.
- **norahe0304-art/30x-growth-marketing-panel**: Does well — best voice-fidelity/routing engineering,
  explicit anti-hallucination protocol, teaches AA-testing (unique in this sweep), correctly attributes
  the Sean Ellis test by name. Led wrong: the skill's own mandatory-retrieval instruction
  ("MUST retrieve from NotebookLM... non-negotiable") silently degrades to KB-only for every user except
  the original author, since the referenced notebooks are private — anyone else installing this skill is
  running on a documented "primary source" that doesn't exist for them.
- **contains-studio/agents (growth-hacker.md, experiment-tracker.md)**: Does well — experiment-tracker.md
  correctly separates primary/secondary/guardrail/leading/lagging metric types, names peeking as an
  explicit pitfall, gives a real ship/kill/iterate decision rule. Led wrong: "Minimum sample size: 1000
  users per variant" (`experiment-tracker.md:75`) is stated as a fixed floor rather than derived from
  baseline rate + MDE + power — this is exactly the kind of context-free rule-of-thumb the real
  power-analysis math (which OpenClaudia's ab-test-setup DOES show) would contradict for low-baseline-rate
  metrics.
- **wshobson/agents (ruled out)**: Does well at scale/breadth of engineering-adjacent content generally,
  but has essentially nothing to offer growth specifically — 2 of 180 SKILL.md files touch the domain.
  Not a growth resource despite its size and star count.

## Summary matrix — repos walked

| Repo | Stars (2026-08-01) | Pushed | License (file-verified) | SKILL.md count | Verdict |
|---|---|---|---|---|---|
| Eronred/aso-skills | 1,700 | 2026-07-27 | MIT | 40 | Kept — deepwalked |
| OpenClaudia/openclaudia-skills | 608 | 2026-08-01 | MIT | 65 | Kept — deepwalked, best validity-layer file |
| menkesu/awesome-pm-skills | 383 | 2026-02-19 | MIT (API said NOASSERTION — lie confirmed) | 28 | Kept — deepwalked, best attribution |
| contains-studio/agents | 12,395 | 2025-07-28 | **NO LICENSE FILE** (confirmed via `find`) | 0 (agents not SKILL.md format) | Kept — deepwalked, clearest growth/operate seam |
| ekinciio/saas-growth-marketing-skills | 12 | 2026-07-14 | MIT | ~15 | Kept — deepwalked, honest self-disclosure |
| norahe0304-art/30x-growth-marketing-panel | 30 | 2026-07-09 | MIT | 1 (panel pattern) | Kept — deepwalked, heaviest persona arch |
| webtrends-optimize/claude-code-ab-testing-skills | 1 | 2026-03-02 | GPL-3.0 | 0 | Kept — specimen of vaporware |
| wshobson/agents | 38,424 | 2026-07-22 | MIT | 180 (2 growth-touching) | Checked, ruled out |
