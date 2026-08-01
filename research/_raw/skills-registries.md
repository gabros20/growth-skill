# Skills ecosystem census — growth / experimentation (Worker A1)

As-of date for ALL star counts / repo metadata in this file: **2026-08-01** (fetched live via `gh api`
today unless noted). Evidence discipline: VERIFIED = I opened the file myself (SKILL.md, LICENSE, tree).
INFERRED = read from a registry's displayed description only, file not opened.

---

## 0. THE HEADLINE ANSWER

**Does a DEDICATED growth/experimentation skill pack exist, at any scale?**

**Partial yes, but not at incumbent scale.** Two repos are genuinely dedicated (100% of their skill
inventory is growth/PLG/experimentation subject matter), but both are small (18–24 stars):

- **SkeneTechnologies/plg-skills** (18 stars) — 26 skills, ALL PLG/growth: activation-metrics,
  engagement-loops, expansion-revenue, feature-adoption, feature-gating, free-tool-strategy,
  growth-experimentation, growth-loops, growth-modeling, in-product-messaging, paywall-upgrade-cro,
  plg-ideas, plg-mental-models, plg-metrics, plg-strategy, pricing-strategy, product-analytics,
  product-led-sales, product-onboarding, referral-program, retention-analysis, self-serve-motion,
  signup-flow-cro, trial-optimization, usage-based-pricing, user-segmentation, viral-loops. This is
  the single most complete "whole subject = growth" repo found. VERIFIED tree + license (MIT) +
  6 SKILL.md files opened.
- **rampstackco/claude-skills** (508 stars) has a growth/experimentation SUBSET (not the whole repo —
  the whole repo also covers brand/SEO/dev/ops) that is unusually statistically rigorous: 8 dedicated
  skills — cro-optimization, data-warehouse-experimentation, experiment-design, experimentation-analytics,
  experimentation-platform-orchestrator, funnel-flow-architecture, onboarding-wizard-design,
  team-onboarding-playbook — each with 5-9 `references/*.md` files covering peeking, CUPED, sequential
  testing, ratio-metric variance, sample-size tables, power analysis, SRM-adjacent content. This is
  the deepest validity-layer content found in the entire sweep. VERIFIED: SKILL.md text opened for 7
  of the 8 skills, LICENSE opened (MIT).

At true incumbent scale (10k+ stars, the range coreyhaines31/marketingskills and phuryn/pm-skills
occupy), **NO dedicated growth/experimentation pack exists** — growth content lives as a chapter/cluster
inside broader marketing or PM packs (see §2). This directly informs the charter's wedge hypothesis #3
(adjudication): the small dedicated packs (SkeneTechnologies, rampstackco) already show some incumbents
DO have a validity layer — the wedge is not "nobody has SRM/CUPED/peeking," it's "nobody who has it also
has the scale/distribution," and the packs that DO have scale (marketingskills, pm-skills) keep
experimentation as one skill among many rather than a first-class subject. Verify this framing against
channel C's platform-docs findings before the controller commits to it.

**Anthropics' own `anthropics/skills` repo has ZERO growth/experimentation/CRO/retention content of any
kind.** VERIFIED — full recursive tree pulled (see §1); its 17 skill directories are: algorithmic-art,
brand-guidelines, canvas-design, claude-api, doc-coauthoring, docx, frontend-design, internal-comms,
mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder,
webapp-testing, xlsx. Not one touches growth, experimentation, funnels, retention, or CRO.

---

## 1. anthropics/skills — official repo (VERIFIED, definitive null)

- Repo: `anthropics/skills`, https://github.com/anthropics/skills
- `gh api repos/anthropics/skills` (2026-08-01): 165,624 stars, `pushed_at: 2026-07-24T20:12:36Z`,
  `updated_at: 2026-08-01T18:48:03Z`, `license: null` at repo level (top-level repo has no single
  LICENSE; **per-skill** `LICENSE.txt` files exist inside each `skills/<name>/` dir instead — I
  opened several of these paths in the tree listing, e.g. `skills/frontend-design/LICENSE.txt`,
  `skills/mcp-builder/LICENSE.txt` — did not open their contents since none is growth-relevant, but
  note the pattern for other channels: this repo licenses per-skill, not per-repo).
- Full recursive tree pulled via `gh api "repos/anthropics/skills/git/trees/main?recursive=1"` (note:
  branch is `main`, not `HEAD` — `HEAD` 404'd with zsh glob issues, `main` worked). Top-level
  `skills/` directories, complete list: `algorithmic-art`, `brand-guidelines`, `canvas-design`,
  `claude-api`, `doc-coauthoring`, `docx`, `frontend-design`, `internal-comms`, `mcp-builder`, `pdf`,
  `pptx`, `skill-creator`, `slack-gif-creator`, `theme-factory`, `web-artifacts-builder`,
  `webapp-testing`, `xlsx`. Also `.claude-plugin/marketplace.json`, `spec/agent-skills-spec.md`,
  `template/SKILL.md`.
- **Definitive finding: zero growth, experimentation, CRO, funnel, retention, activation, PLG,
  pricing, referral, or monetization content anywhere in this repo.** Confirmed by reading the full
  path list, not by keyword-grep alone (the tree is small enough to eyeball in full — ~17 top-level
  skill dirs, none plausibly growth-adjacent by name or by opened SKILL.md where checked).

---

## 2. `npx skills find` (skills.sh / skills CLI) sweep — VERIFIED (ran the actual CLI, not inferred)

Ran `npx skills find "<query>"` for every keyword in the brief plus several synonyms. Below is the
**verbatim** result set per query (top 6 shown by the CLI per query; install counts as displayed by
the CLI on 2026-08-01, which is the CLI's own live count, not a `gh api` star count — different
metric, note the distinction).

### "A/B testing"
- anthropics/skills@webapp-testing — 125.3K installs (NOT growth-relevant; general webapp QA testing, false-positive keyword match)
- coreyhaines31/marketingskills@ab-testing — 39.4K installs
- samber/cc-skills-golang@golang-testing — 35.6K (false positive, software testing)
- wshobson/agents@python-testing-patterns — 28.8K (false positive)
- wshobson/agents@e2e-testing-patterns — 20.3K (false positive)
- wshobson/agents@javascript-testing-patterns — 16.9K (false positive)

### "experimentation"
- sanity-io/agent-toolkit@content-experimentation-best-practices — 2.5K
- rampstackco/claude-skills@data-warehouse-experimentation — 121
- rampstackco/claude-skills@experimentation-analytics — 116
- rampstackco/claude-skills@experimentation-platform-orchestrator — 114
- refoundai/lenny-skills@growth-experimentation — 95
- sylphxai/skills@experimentation-platform-governance-review — 40

### "conversion rate optimization"
- coreyhaines31/marketingskills@cro — 44.9K
- manojbajaj95/claude-gtm-plugin@conversion-rate-optimization — 297
- finsilabs/awesome-ecommerce-skills@conversion-rate-optimization — 109
- podo/design-agent-skills@coreyhaines-marketing — 30 (reseller/repackage of coreyhaines31)
- whawkinsiv/claude-code-skills@conversion — 13
- manojbajaj95/gtm-skills@conversion-rate-optimization — 11

### "retention and churn"
- kostja94/marketing-skills@retention-strategy — 818
- pawbytes/skill-suites@paw-mkt-retention — 104
- membranedev/application-skills@retently — 64
- thatrebeccarae/claude-marketing@retention-churn-prevention — 58
- gnoviawan/agentic-marketing@marketing-retention — 37
- skills.volces.com@customer-retention — 37

### "growth PLG"
- github/awesome-copilot@gtm-product-led-growth — 1.7K
- gingiris-1031/gingiris-skills@gingiris-b2b-growth — 98
- refoundai/lenny-skills@plg-fundamentals — 92
- majesticlabs-dev/majestic-marketplace@plg-ai-funnel — 35
- firatcand/founder-skills@plg-skill — 33
- wdavidturner/product-skills@product-led-growth — 32

### "onboarding activation"
- refoundai/lenny-skills@user-onboarding-activation — 114
- sylphxai/skills@onboarding-activation-review — 53
- skills.volces.com@customer-onboarding — 39
- skills.volces.com@customer-onboarding-2 — 28
- realjaymes/marketingagentskills@product-onboarding-activation — 24
- jk-0001/skills@customer-onboarding — 21

### "pricing experiments"
- phuryn/pm-skills@monetization-strategy — 2.1K
- ognjengt/founder-skills@pricing-strategist — 624
- onewave-ai/claude-skills@pricing-change-strategist — 68
- finsilabs/awesome-ecommerce-skills@ab-testing-pricing — 56
- sylphxai/skills@lifecycle-pricing-experiment-review — 33
- maxkmet/idea-validation-agents@pricing-and-wtp — 8

### "referral loops"
- alirezarezvani/claude-skills@referral-program — 561
- borghei/claude-skills@referral-program — 81
- finsilabs/awesome-ecommerce-skills@referral-viral-loops — 61
- sylphxai/skills@referral-loop-review — 50
- minhnv0807/fullstack-mkt-skills@18-referral-program — 36
- thecraighewitt/sales-skills@referral-intro — 11

### "funnel analysis"
- aj-geddes/useful-ai-prompts@funnel-analysis — 642
- adobe/skills@aa-conversion-funnel-analysis — 154 (Adobe Analytics official)
- nimrodfisher/data-analytics-skills@funnel-analysis — 146
- indranilbanerjee/digital-marketing-pro@funnel-architect — 116
- liangdabiao/claude-data-analysis-ultra-main@funnel-analysis — 65
- nicepkg/ai-workflow@funnel-analysis — 56

### "cohort analysis"
- phuryn/pm-skills@cohort-analysis — 1.9K
- aj-geddes/useful-ai-prompts@cohort-analysis — 389
- guia-matthieu/clawfu-skills@cohort-analysis — 164
- nimrodfisher/data-analytics-skills@cohort-analysis — 128
- indranilbanerjee/digital-marketing-pro@cohort-analysis — 91
- gtmagents/gtm-agents@cohort-analysis — 60

### "north star metric"
- phuryn/pm-skills@north-star-metric — 1.9K
- refoundai/lenny-skills@writing-north-star-metrics — 1.7K
- refoundai/lenny-skills@north-star-metrics — 96
- oldwinter/skills@writing-north-star-metrics — 32 (reseller of refoundai content)
- liqiongyu/lenny_skills_plus@writing-north-star-metrics — 12 (reseller)
- sunnypatneedi/claude-starter-kit@north-star-metrics — 9

### "split test"
- posthog/ai-plugin@configuring-experiment-rollout — 185
- jeremylongshore/claude-code-plugins-plus-skills@train-test-splitter — 25 (false positive, ML)
- anhtuan23/skills@long-file-refactor — 18 (false positive)
- dmend3z/tribo-skills@ab-split-test-engineering — 10
- posthog/posthog@configuring-experiment-rollout — 4 (same skill mirrored in main posthog/posthog repo)
- kangarooking/ai-for-everyone-skill@train-test-split — 4 (false positive, ML)

### "feature flag"
- facebook/react@feature-flags — 1.1K (React's own internal feature-flag skill, not growth — engineering ops)
- posthog/ai-plugin@instrument-feature-flags — 266
- posthog/ai-plugin@cleaning-up-stale-feature-flags — 209
- posthog/skills@feature-flags-nextjs — 135
- posthog/skills@finding-deleted-feature-flags — 134
- posthog/skills@feature-flags-web — 113
- Note for the "growth vs operate" seam question in charter §Special question: PostHog's own flag
  skills split cleanly into rollout/cleanup (operate-flavored: "cleaning-up-stale-feature-flags",
  "finding-deleted-feature-flags") vs `configuring-experiment-rollout` (growth-flavored: the
  experimentation config layer). PostHog itself seems to already model this exact seam as two
  different skills within one plugin — worth the controller looking at `posthog/ai-plugin` skill
  boundaries as a working example of the split in practice.

### "viral loops"
- membranedev/application-skills@viral-loops — 110
- gingiris-1031/gingiris-skills@viral-marketing-playbook — 97
- omer-metin/skills-for-antigravity@viral-marketing — 63
- finsilabs/awesome-ecommerce-skills@referral-viral-loops — 61
- lvtd-llc/skills@traction-viral-engineering — 45
- skenetechnologies/plg-skills@viral-loops — 21

### "aarrr pirate metrics"
- kostja94/marketing-skills@growth-funnel — 886
- google-gemini/gemini-cli@pirate-skill — 833 (false positive, literal pirate roleplay skill for Gemini CLI)
- guia-matthieu/clawfu-skills@aarrr-metrics — 177
- glittercowboy/taches-cc-resources@the-pirate-bay — 73 (false positive)
- membranedev/application-skills@pirate-weather — 49 (false positive, weather API)
- cdeistopened/skill-stack@voice-pirate-wires — 26 (false positive)

### "product-led growth"
- github/awesome-copilot@gtm-product-led-growth — 1.7K
- guia-matthieu/clawfu-skills@product-led-growth — 169
- lvtd-llc/skills@product-led-seo-strategy — 45
- wdavidturner/product-skills@growth-loops — 33
- wdavidturner/product-skills@product-led-growth — 32
- omer-metin/skills-for-antigravity@product-led-growth — 21

### "monetization"
- eronred/aso-skills@monetization-strategy — 2.7K
- phuryn/pm-skills@monetization-strategy — 2.1K
- aaron-he-zhu/aaron-marketing-skills@newsletter-monetization-planner — 341
- rshankras/claude-code-apple-skills@monetization — 336 (iOS/App Store IAP monetization, not growth-experimentation)
- sentinelcore/roblox-skills@roblox-monetization — 321 (Roblox game monetization, niche vertical)
- erichowens/some_claude_skills@indie-monetization-strategist — 319

### "churn prediction"
- alirezarezvani/claude-skills@churn-prevention — 572
- guia-matthieu/clawfu-skills@churn-prediction — 165
- ncklrs/startup-os-skills@customer-health-analyst — 132
- shawnpang/startup-founder-skills@churn-analysis — 103
- finsilabs/awesome-ecommerce-skills@customer-retention-engine — 73
- finsilabs/awesome-ecommerce-skills@customer-lifetime-value — 68

### "growth model"
- simota/agent-skills@growth — 115
- refoundai/lenny-skills@growth-model — 99
- refoundai/lenny-skills@building-growth-team — 91
- lyndonkl/claude@intrinsic-valuation-dcf — 35 (false positive, DCF finance)
- skenetechnologies/plg-skills@growth-modeling — 11
- yohayetsion/product-org-os@growth-model — 4

### "SRM sample ratio mismatch" — NULL RESULT for the actual stats concept
- nimrodfisher/data-analytics-skills@ab-test-analysis — 127 (closest hit, generic AB analysis, not SRM-named)
- zeabur/zeabur-claude-plugin@zeabur-port-mismatch — 94 (false positive, "mismatch" keyword only)
- simota/agent-skills@experiment — 73
- asgard-ai-platform/skills@biz-financial-ratios — 42 (false positive, "ratio" keyword only)
- utarn/review-skill@find-mismatch — 39 (false positive)
- posthog/ai-plugin@signals-scout-experiments — 32
- **No skill anywhere in the skills.sh index is literally named for SRM.** The concept lives inside
  prose (verified in rampstackco's `data-warehouse-experimentation` SKILL.md, see §4) but no skill
  title surfaces it as a discoverable keyword.

### "sequential testing" — effectively NULL for the actual stats concept
- All 6 results were false positives on "sequential" (ruvnet/claude-flow orchestrator,
  binjuhor sequential-thinking, several generic "sequential-thinking" reasoning skills). Same
  finding as SRM: sequential testing as a named, searchable skill title does not exist in the
  registry; it lives inside prose in rampstackco's and refoundai's skills.

### "experiment design"
- lingzhi227/agent-research-skills@experiment-design — 1.3K (scientific/academic experiment design, not product growth — false-positive-adjacent, verify before citing)
- alirezarezvani/claude-skills@experiment-designer — 583
- product-on-purpose/pm-skills@measure-experiment-design — 503
- k-dense-ai/scientific-agent-skills@experimental-design — 353 (academic/scientific, not product)
- aaron-he-zhu/aaron-marketing-skills@send-experiment-designer — 340
- assimovt/productskills@experiment-design — 150

### "product analytics"
- alirezarezvani/claude-skills@product-analytics — 622
- posthog/ai-plugin@instrument-product-analytics — 305
- daffy0208/ai-dev-standards@product-analytics — 231
- absolutelyskilled/absolutelyskilled@product-analytics — 136
- travisjneuman/.claude@product-analytics — 119
- posthog/skills@omnibus-instrument-product-analytics — 111

**Cross-query observations (INFERRED from the pattern of repeated hits across queries, not a single
source):**
- The same handful of repos dominate almost every query: `refoundai/lenny-skills`,
  `rampstackco/claude-skills`, `sylphxai/skills`, `guia-matthieu/clawfu-skills`,
  `phuryn/pm-skills`, `coreyhaines31/marketingskills`, `finsilabs/awesome-ecommerce-skills`,
  `skenetechnologies/plg-skills`, `posthog/ai-plugin` + `posthog/skills`. These nine repos are the
  de facto growth-adjacent skill ecosystem across the whole registry.
- Reseller/repackage pattern noted: `podo/design-agent-skills@coreyhaines-marketing`,
  `oldwinter/skills@writing-north-star-metrics`, `liqiongyu/lenny_skills_plus@writing-north-star-metrics`
  are clones/repackages of `coreyhaines31/marketingskills` and `refoundai/lenny-skills` content
  respectively — inflate the apparent count of distinct sources; treat as the same underlying work.

---

## 3. skillsmp.com (VERIFIED via WebFetch, 2026-08-01, reachable HTTP 200 both direct and with UA)

- Homepage (`https://skillsmp.com/?q=growth`) rendered no enumerable per-skill listing in the fetched
  markdown — it's a client-rendered marketplace shell describing itself as "the largest
  community-driven marketplace for AI coding agent skills" with "2,000,000+ open-source skills," but
  the static/fetchable HTML did not expose a growth-filtered list. Treat as inconclusive, not a null
  result — the site likely needs JS execution (browser automation) to actually filter; a channel with
  browser tooling should re-attempt if this matters.
- `https://skillsmp.com/search?q=experimentation` DID return a rendered "Growth & Experimentation
  Skills" list (its search endpoint apparently server-renders or the fetch happened to catch it):
  1. **ab-testing** — coreyhaines31/marketingskills — 41.8k installs (matches skills.sh count closely)
  2. **marketing-loops** — coreyhaines31/marketingskills — 41.8k installs — NEW FIND not surfaced by
     `npx skills find`: "Orchestrates recurring marketing workflows and automation, including 'ad
     fatigue check,' 'churn watch,' and 'ranking drop alert' capabilities for ongoing optimization."
     (INFERRED description, not yet opened directly — flag for deep-read worker.)
  3. **autoresearch** — github/awesome-copilot — 37.1k installs — "Autonomous iterative
     experimentation loop for any programming task" — this is a SOFTWARE-ENGINEERING experimentation
     loop (test/measure/iterate on code), not growth/product experimentation. Note as a likely
     false-positive for our purposes despite the "experimentation" keyword match.
  4. **senior-data-scientist** — davila7/claude-code-templates — 29.9k installs — "Covers 'A/B
     testing, time series, and business intelligence' with expertise in experiment design and
     data-driven decision-making." (INFERRED, general data-science role skill, not growth-dedicated —
     worth a deep-read pass to see if it has real stats content.)
  5. **vercel-flags** — openai/plugins — 4.7k installs — "Feature flags platform supporting 'A/B
     testing' and staged rollouts for experimentation workflows." Note: attributed to `openai/plugins`
     in the marketplace listing despite being a Vercel product name — possibly OpenAI's plugin
     marketplace hosting a Vercel-flags-branded skill, or a listing error; VERIFY the actual repo
     before citing if this matters to the controller.

---

## 4. Deep-read: the two dedicated/near-dedicated growth packs

### 4a. SkeneTechnologies/plg-skills (VERIFIED tree, license, 6 SKILL.md files opened)

- Repo: https://github.com/SkeneTechnologies/plg-skills
- `gh api repos/SkeneTechnologies/plg-skills` (2026-08-01): 18 stars, `pushed_at: 2026-01-26T14:57:31Z`,
  `updated_at: 2026-06-30T16:55:24Z` (STALE — no push in over 6 months as of today), `license: MIT`
  (per GitHub API), `description: null` (repo has no GitHub description field set), not a fork, not
  archived.
- LICENSE file opened directly: standard MIT, `Copyright (c) 2026 Skene Technologies`. Confirms the
  API's claim this time (not always trustworthy per charter — verified anyway).
- Structure: flat `skills/<name>/SKILL.md` only — no `references/`, no `evals/`, no `scripts/` in any
  of the 26 skill directories (confirmed via full recursive tree — every skill dir contains exactly
  one file, `SKILL.md`). Also has `.cursor/rules/plg-skills.mdc`, `.cursorrules`,
  `.github/copilot-instructions.md`, `AGENTS.md` — multi-tool-compatible packaging (Cursor, Copilot,
  Claude, generic AGENTS.md convention) but SKILL.md-only depth per skill; likely fairly short files.
- 26 skills, full list: activation-metrics, engagement-loops, expansion-revenue, feature-adoption,
  feature-gating, free-tool-strategy, growth-experimentation, growth-loops, growth-modeling,
  in-product-messaging, paywall-upgrade-cro, plg-ideas, plg-mental-models, plg-metrics, plg-strategy,
  pricing-strategy, product-analytics, product-led-sales, product-onboarding, referral-program,
  retention-analysis, self-serve-motion, signup-flow-cro, trial-optimization, usage-based-pricing,
  user-segmentation, viral-loops.
- Frontmatter descriptions VERIFIED by opening the raw file (quoted verbatim):
  - `growth-experimentation`: "When the user wants to design, prioritize, or analyze growth
    experiments -- including A/B tests, hypothesis frameworks, ICE/RICE scoring, or growth sprints.
    Also use when the user says \"A/B test,\" \"experiment design,\" \"growth sprint,\" \"experiment
    prioritization,\" or \"statistical significance.\" For analytics setup, see product-analytics. For
    growth modeling, see growth-modeling." (372 lines total file)
  - `growth-modeling`: "When the user wants to build quantitative growth models -- including
    loop-based models, sensitivity analysis, revenue forecasting, or unit economics. Also use when the
    user says \"growth forecast,\" \"revenue model,\" \"CAC LTV,\" \"growth projections,\" or
    \"financial model.\" For growth loops, see growth-loops. For PLG metrics, see plg-metrics." (380
    lines)
  - `plg-strategy`: "When the user wants to assess PLG readiness, design a product-led growth
    strategy, choose between freemium and free trial, evaluate PLG maturity, or plan a hybrid PLG +
    sales model. Also use when the user says \"should we do PLG,\" \"PLG vs sales-led,\" \"growth
    motions,\" \"PLG audit,\" or \"go-to-market strategy.\" For specific mental models, see
    plg-mental-models. For growth loop design, see growth-loops." (439 lines)
  - `plg-metrics`: "When the user wants to define PLG metrics, build a growth dashboard, or set KPI
    targets -- including activation rate, free-to-paid conversion, NRR, or North Star metric. Also
    use when the user says \"PLG dashboard,\" \"growth KPIs,\" \"metric definitions,\" or \"PLG
    benchmarks.\" For activation-specific metrics, see activation-metrics. For analytics setup, see
    product-analytics." (408 lines)
  - `paywall-upgrade-cro`: "When the user wants to optimize in-app paywalls, upgrade screens, or
    upgrade prompts -- including feature locks, usage limit walls, trial expiration screens, or
    context-triggered upsells. Also use when the user says \"paywall design,\" \"upgrade conversion,\"
    \"upgrade modal,\" or \"upsell prompt.\" For feature gating strategy, see feature-gating. For
    in-product messaging, see in-product-messaging." (444 lines)
  - `pricing-strategy`: "When the user wants to design or optimize pricing, packaging, or
    monetization -- including tier structure, freemium design, value metrics, or price research. Also
    use when the user says \"pricing page,\" \"how to price,\" \"freemium vs free trial,\"
    \"Good-Better-Best tiers,\" or \"value-based pricing.\" For feature gating, see feature-gating. For
    trial optimization, see trial-optimization. For usage-based models, see usage-based-pricing." (496
    lines)
- Frontmatter is notably terse — no `category`, no `catalog_summary`, no `display_order` fields (unlike
  rampstackco below); just `name` + `description`, and the description doubles as cross-referencing
  glue between sibling skills in the same pack (heavy internal "see X" pointers — a genuine faceted
  micro-router pattern at the individual-skill level, interesting precedent for our own family's
  cross-referencing convention).
- **Assessment**: tactic-list-leaning but with real breadth across the PLG surface (self-serve motion,
  feature gating, usage-based pricing, product-led-sales as distinct from PLG generally). File lengths
  (370-500 lines) suggest real content, not stub skills, but zero `references/` means no
  externalized deep-dive material and no eval harness to check quality — I did not read full bodies of
  every file (time-bounded), only frontmatter + structural facts. A full body read of
  `growth-experimentation` and `pricing-strategy` would be worthwhile for the controller or a deep-read
  worker given this is the closest thing to a dedicated growth pack in the entire sweep.
- Adoption signal: 18 GitHub stars is very low; not independently found in the `npx skills find`
  install-count leaderboard except at the bottom of two queries (viral-loops: 21 installs,
  growth-model: 11 installs) — this pack has essentially no market traction despite topical
  completeness. Worth noting for the controller: topical completeness and market validation are
  anti-correlated in this finding.

### 4b. rampstackco/claude-skills — growth/experimentation subset (VERIFIED: 7 of 8 SKILL.md files opened in full or substantial part, LICENSE opened)

- Repo: https://github.com/rampstackco/claude-skills
- `gh api repos/rampstackco/claude-skills` (2026-08-01): 508 stars, `pushed_at: 2026-07-21T22:57:58Z`,
  `updated_at: 2026-08-01T09:23:22Z` (actively maintained, pushed within the last two weeks),
  `license: MIT` (verified by opening LICENSE directly: `Copyright (c) 2026 RampStack Co.`, standard
  MIT text), description: "Stack-agnostic Claude Skills covering the full website lifecycle: brand,
  design, content, SEO, dev, ops, growth, and research. Build, ship, audit, optimize." — this is
  explicitly NOT a growth-dedicated repo; growth is one of eight lifecycle categories.
- Structure: `skills/<name>/SKILL.md` + `skills/<name>/references/*.md` (multiple per skill, 5-9
  typical) + top-level `workflows/*.md` cross-skill playbooks + a `dist/pi/.agents/skills/` mirror
  directory (appears to be a build output duplicating the same content for a different distribution
  target — doubles the file count in the tree but is NOT independent content). Also has
  `scripts/crosslink_pass.py` (an internal tool for cross-referencing skills, evidence of deliberate
  information-architecture investment).
- The 8 growth/experimentation-relevant skills (there are more skills in the repo outside growth; this
  channel's mandate is growth so I did not catalog the SEO/dev/ops ones):
  1. **experiment-design** (255 lines) — frontmatter: `category: product`,
     `catalog_summary: "Hypothesis to decision: sample size, duration, segment analysis,
     interpretation, and the failure modes that produce wrong shipping calls"`, `display_order: 4`.
     Full description (verbatim, VERIFIED by opening file): "A discipline for designing experiments
     (A/B tests, multivariate, holdouts) so the results actually answer the question you asked.
     Hypothesis writing, sample size, duration, segment analysis, interpretation, decision-making, and
     the common failure modes that produce confidently wrong shipping decisions." Body covers, by its
     own stated "12 considerations" framework: hypothesis discipline (cause/effect/magnitude/mechanism
     structure), sample size/MDE, test duration ("longer of the sample-size-hit duration and a full
     weekly cycle... UI/UX changes need at least 14 days regardless" — UNTRACED folklore-adjacent
     claim, no citation given in the file, flag for falsification-strip candidate list), what NOT to
     A/B test, segment analysis / multiple-comparisons, interaction effects / mutex enforcement,
     **ratio metrics and variance estimation** ("naive variance estimators on ratios understate
     uncertainty... confirm the platform uses a ratio-aware estimator" — this is CUPED/delta-method
     adjacent territory), **network effects and two-sided markets** (cluster randomization, switchback,
     geographic isolation), **sequential testing and the peeking problem** (explicit peeking-problem
     coverage), pre-commitment vs p-hacking, reading results (three-bucket: clear win / clear loss /
     inconclusive), and a `references/common-failures.md` pattern catalog. Explicitly scopes itself
     OUT of feature-flag mechanics (separate `feature-flagging` skill) and OUT of stats depth (points
     to sibling `experimentation-analytics` for CUPED/delta methods/Bayesian).
  2. **data-warehouse-experimentation** (389 lines) — frontmatter `category: product`,
     `display_order: 9`. Full description (verbatim): "Running experiments out of the data warehouse
     instead of via dedicated experiment platforms. SQL-based assignment, exposure logging discipline,
     metric definitions in dbt models, statistical analysis in SQL or Python, variance reduction with
     CUPED, sequential testing, and the operational tradeoffs vs platforms like Statsig and Optimizely.
     Triggers on warehouse-native experimentation, run experiments in BigQuery, run experiments in
     Snowflake, dbt experiments, SQL t-test, CUPED variance reduction, exposure log, sample ratio
     mismatch, sequential testing, mSPRT, doubly robust estimation, build vs buy experimentation..."
     — **this is the only skill found in the ENTIRE sweep whose frontmatter literally names "sample
     ratio mismatch" and "mSPRT"** (multiplicative sequential probability ratio test — the Johari et
     al. always-valid-p-values lineage the charter's controller-canon flags). Body: explicit
     platform-vs-warehouse decision tree (6 factors favoring warehouse-native: cost at volume, custom
     metrics, custom segmentation, trust/regulatory transparency, existing data-team strength, metric
     iteration speed; 5 factors favoring platform: frontend visual experiments, sub-week iteration,
     weak data infra, mobile SDK assignment, out-of-the-box sequential testing "Statsig and Eppo ship
     mSPRT with calibrated alpha-spending" — UNTRACED claim about specific vendor capability, flag for
     re-verification against channel C's platform findings). References dir includes
     `sequential-testing-patterns.md`, `variance-reduction-techniques.md`,
     `power-analysis-calculations.md`, `metric-definitions-in-dbt.md`,
     `assignment-and-exposure-patterns.md`, `common-pitfalls.md`,
     `warehouse-vs-platform-decision.md` (not opened individually — file-list only, time-bounded).
  3. **cro-optimization** (271 lines) — frontmatter `category: growth` (the only skill of the 8 tagged
     with literal category `growth`, not `product` or `growth-tooling`), `display_order: 2`. Full
     description (verbatim): "Run conversion rate optimization through hypothesis-driven testing
     including audit, hypothesis generation, test design, statistical analysis, and rollout decisions.
     ... Triggers on conversion optimization, CRO, A/B test, split test, multivariate test, hypothesis,
     conversion funnel, funnel audit, experiment design, statistical significance, lift, optimization."
     `references/hypothesis-library.md` present (not opened).
  4. **experimentation-analytics** (333 lines) — frontmatter `category: product`, `display_order: 6`.
     Full description (verbatim): "How to read experiment results without fooling yourself. Confidence
     intervals, p-values, multiple testing, sequential testing, CUPED, heterogeneous treatment effects,
     ratio metrics, network effects, dashboard reconciliation, and the interpretation failures that
     produce confidently wrong shipping decisions." This is explicitly the stats-interpretation sibling
     to `experiment-design`'s methodology focus. References: `confidence-interval-cheatsheet.md`,
     `p-value-interpretation-guide.md`, `statistical-method-reference.md`,
     `common-interpretation-failures.md`, `dashboard-vs-experiment-reconciliation.md`,
     `analytics-platform-comparison.md`, `result-presentation-templates.md` (not opened individually).
  5. **experimentation-platform-orchestrator** (286 lines) — frontmatter `category: product`,
     `display_order: 7`. Full description (verbatim): "A platform decision framework for
     experimentation. When to use Statsig vs PostHog vs GrowthBook vs Optimizely vs Amplitude vs Eppo
     vs Kameleoon. How to migrate between them. How to coordinate when multi-platform is genuinely
     warranted..." References: `platform-decision-matrix.md`, `migration-playbook.md`,
     `cost-and-pricing-models.md`, `governance-and-team-setup.md`, `multi-platform-orchestration.md`,
     `mcp-capability-comparison.md`, `common-mistakes.md` (not opened individually — this looks like
     it could be a very useful source for channel C's platform-comparison work; flag for cross-channel
     pointer).
  6. **funnel-flow-architecture** (306 lines) — frontmatter `category: growth-tooling`,
     `display_order: 6`. Full description (verbatim): "Architecting cross-tool conversion flows that
     match audience and stage... Honest about silo-funnels (every tool standalone), kitchen-sink-funnels
     (every audience squeezed through one path), and matched-funnels (architecture matched to
     audience-and-stage) patterns." Named three-pattern taxonomy (silo / kitchen-sink / matched) is a
     genuinely original framing not seen elsewhere in the sweep.
  7. **onboarding-wizard-design** (280 lines) — frontmatter `category: growth-tooling`,
     `display_order: 7`. Full description (verbatim): "Designing first-run product onboarding wizards
     that get users to the ah-ha moment without overwhelming them... Honest about tutorial-overload
     (dump everything upfront), skip-friendly-empty (skipped onboarding leads to abandoned product),
     and earned-progressive-disclosure (right things at the right moments) patterns." Another named
     three-pattern taxonomy, same house style as funnel-flow-architecture.
  8. **team-onboarding-playbook** — NOT opened (this is almost certainly HR/employee onboarding, not
     product onboarding — false-positive-adjacent for our census, flagging but not claiming growth
     relevance).
- Cross-skill reference architecture is unusually disciplined: each skill's opening section explicitly
  states what it does NOT cover and points to the specific sibling skill that does (e.g.
  experiment-design → experimentation-analytics for stats depth, → data-warehouse-experimentation for
  warehouse execution, → experimentation-platform-orchestrator for platform choice, → feature-flagging
  for flag mechanics). This is close in spirit to our own family's faceted-router convention and is
  worth the controller looking at directly as a comparable information architecture, independent of
  content quality.
- **Assessment: this is the most validity-literate growth content found anywhere in this census.** It
  explicitly names peeking, sequential testing, mSPRT, CUPED, ratio-metric variance, network
  interference, and multiple-comparisons — i.e., essentially the full controller-canon list from
  §1 of `controller-canon.md`. This is real evidence against an unqualified version of wedge
  hypothesis #3 ("incumbents bundle ab-testing/CRO as tactic lists without the validity layer") — at
  least one small-scale incumbent (508 stars) already has the validity layer, articulated cleanly, with
  an intentional information architecture. The wedge, if it survives, has to be about scale/distribution
  or about depth-beyond-this (e.g., primary-source citations — I did not see a single citation to
  Kohavi/Tang/Xu, Deng et al. CUPED paper, or Johari et al. anywhere in the text I read; all claims are
  asserted without attribution) rather than "nobody has the concepts." Flag this finding prominently for
  the sub-orchestrator's synthesis.
- One UNTRACED claim worth flagging to the falsification-strip list: "UI/UX changes need at least 14
  days regardless" (experiment-design) — stated as a flat rule with no citation, no reasoning beyond
  weekly-cycle logic given elsewhere in the same file. And the mSPRT-at-Statsig-and-Eppo claim in
  data-warehouse-experimentation is a vendor capability claim with no source link.

---

## 5. The two mega-scale incumbents (marketing/PM packs with a growth chapter, NOT dedicated)

### 5a. coreyhaines31/marketingskills — 42,622 stars (VERIFIED, largest incumbent in the whole family's history per prior marketing-skill build memory, confirmed still current)

- `gh api repos/coreyhaines31/marketingskills` (2026-08-01): 42,622 stars, `pushed_at:
  2026-07-29T05:41:15Z` (actively maintained), description: "Marketing skills for Claude Code and AI
  agents. CRO, copywriting, SEO, analytics, and growth engineering."
- LICENSE opened directly: MIT, `Copyright (c) 2025 Corey Haines`.
- Growth-adjacent skill cluster (out of a much larger marketing-wide skill set — did not enumerate the
  non-growth skills, out of scope for this channel): `ab-testing`, `churn-prevention`, `cro`,
  `onboarding`, `pricing`, `referrals`. Each has the pattern `SKILL.md` + `evals/evals.json` +
  `references/*.md` — this is the ONLY repo in the whole sweep besides finsilabs and sylphxai that
  ships a formal eval harness per skill.
- **Charter claim VERIFIED**: "its ab-testing eval reportedly tests the peeking problem" — TRUE.
  Opened `skills/ab-testing/evals/evals.json` directly (105 lines, 7 eval cases). Eval case #3 is a
  peeking-problem test almost verbatim: prompt = *"Our test has been running for 3 days and Variant B
  is winning with 95% confidence. Should we call it?"*, expected_output requires the model to
  "immediately address the peeking problem," "explain that checking results early inflates false
  positive rates," "recommend running for the full pre-calculated duration regardless of early
  results," "explain why early significance can be misleading (regression to the mean, day-of-week
  effects, audience mix shifts)," and "provide guidance on when it IS appropriate to stop early
  (sequential testing methods)." Assertions list six explicit checks including "Mentions sequential
  testing as alternative approach." This is a genuinely rigorous eval for the peeking problem
  specifically, not just a passing mention.
  - Other eval cases in the same file test: hypothesis-framework compliance (case 1), A/B/n multi-variant
    traffic-cost awareness (case 2), MVT combinatorial-traffic awareness (case 4), three-tier
    primary/secondary/guardrail metric selection (case 5), correctly deferring to a sibling copywriting
    skill rather than overreaching (case 6), and statistical-vs-practical-significance discrimination on
    a concrete numeric scenario: "Control: 2.1% conversion. Variant: 2.4% conversion. 12,000 visitors
    per variant" (case 7).
- `skills/ab-testing/SKILL.md` (353 lines, `metadata.version: 2.0.0` — versioned, evidence of
  iteration) opens with: "You are an expert in experimentation and A/B testing. Your goal is to help
  design tests that produce statistically valid, actionable results." Contains a
  "Because/we believe/will cause/for/We'll know" hypothesis template, a test-type table (A/B, A/B/n,
  MVT, Split URL with relative traffic-need column), and explicit "Don't peek and stop early. Commit to
  the methodology" under Core Principles. Frontmatter description (verbatim): includes trigger phrases
  "growth experiments," "experiment velocity," "experiment backlog," "ICE score," "experimentation
  program," "experiment playbook" — this single skill's OWN scope already reaches into
  experiment-prioritization territory the charter assigns to growth (ICE score, experiment backlog).
- Also found via skillsmp.com (not yet independently opened): `marketing-loops` skill in the same repo,
  described as including a "churn watch" capability — flag for a deep-read worker to verify.
- **This confirms the charter's framing precisely: marketingskills is marketing-with-a-CRO-chapter, not
  a dedicated growth pack** — but the CRO/ab-testing chapter specifically is unusually well-evidenced
  (eval-backed) for an incumbent at this scale, which raises the bar for what "adjudication" needs to
  beat.

### 5b. phuryn/pm-skills — 24,751 stars (VERIFIED tree paths, not individual file bodies)

- `gh api repos/phuryn/pm-skills` (2026-08-01): 24,751 stars, `pushed_at: 2026-07-03T11:34:49Z`,
  license MIT (per API; not independently re-opened for this repo, time-bounded — flag for
  re-verification by whoever deep-reads this repo), description: "PM Skills Marketplace: 100+ agentic
  skills, commands, and plugins — from discovery to strategy, execution, launch, and growth."
- Growth-relevant paths found (full recursive tree filtered by keyword grep, VERIFIED as real paths in
  the live tree, not inferred): `pm-data-analytics/skills/ab-test-analysis`,
  `pm-data-analytics/skills/cohort-analysis`, `pm-data-analytics/commands/analyze-cohorts.md`,
  `pm-go-to-market/skills/growth-loops`, `pm-go-to-market/commands/growth-strategy.md`,
  `pm-marketing-growth/skills/north-star-metric`, `pm-marketing-growth/skills/marketing-ideas`,
  `pm-marketing-growth/skills/positioning-ideas`, `pm-marketing-growth/skills/value-prop-statements`,
  `pm-marketing-growth/skills/product-name`, `pm-marketing-growth/commands/north-star.md`,
  `pm-product-discovery/skills/brainstorm-experiments-existing`,
  `pm-product-discovery/skills/brainstorm-experiments-new`,
  `pm-product-strategy/skills/monetization-strategy`, `pm-product-strategy/skills/pricing-strategy`,
  `pm-product-strategy/commands/pricing.md`.
- Structure: organized as multiple `.claude-plugin`-packaged sub-marketplaces (`pm-marketing-growth`
  has its own `.claude-plugin/plugin.json` and `README.md`), each bundling `commands/` + `skills/`.
  This is a plugin-of-plugins architecture, more elaborate than a flat skills/ dir.
  Growth content is genuinely spread thin across at least 4 separate plugin bundles
  (pm-data-analytics, pm-go-to-market, pm-marketing-growth, pm-product-discovery, pm-product-strategy)
  rather than concentrated — consistent with "chapter, not book" framing.
- Not individually opened for content depth — time-bounded; flag for a deep-read worker given its
  24.7K-star scale, comparable to marketingskills.

---

## 6. Mid-tier and small growth-adjacent finds (VERIFIED metadata; SKILL.md bodies mostly not opened — time-bounded, flagging for deep-read)

All `gh api repos/<full_name>` pulled live 2026-08-01; LICENSE opened directly for every repo listed
here (confirmed MIT for all unless noted).

| Repo | Stars | Pushed | License (file-verified) | Growth-relevant skill paths (verified in tree) |
|---|---|---|---|---|
| RefoundAI/lenny-skills | 1,208 | 2026-07-16 | MIT (`Copyright (c) 2025 Refound AI`) | building-growth-team, growth-experimentation, growth-model, north-star-metrics, plg-fundamentals, plg-sales-integration, pricing-strategy, product-experiments, referrals-word-of-mouth, retention-engagement, user-onboarding-activation (11 of its 86 total skills; each has `references/artifacts.md` + `references/guest-insights.md` — this pack's whole schema is "podcast episode → artifact template + guest quote extraction," i.e. it's explicitly Lenny's Podcast content operationalized as skills, a distinct sourcing model from every other repo in this census) |
| guia-matthieu/clawfu-skills | 144 | 2026-04-02 | MIT (`Copyright (c) 2026 Guia`) | analytics/ab-test-stats (has a `scripts/main.py` — the only skill besides LeihuaYe's below with actual runnable Python, not just markdown), analytics/cohort-analysis (also scripted), analytics/funnel-analyzer (also scripted), customer-success/churn-prediction, customer-success/onboarding-orchestrator, growth/aarrr-metrics, growth/distribution-engine, growth/growth-loops, growth/product-led-growth (scripted), strategy/pricing-strategy, validation/pricing-validation (scripted), content/conversion-copywriting. Description: "172 expert marketing skills for AI agents — ClawFu MCP Server" — ships as an MCP server, not just a skills directory, distinct distribution model. |
| SylphxAI/skills | 1 | 2026-08-01 (pushed literally today) | MIT (`Copyright (c) 2026 SylphxAI`) | product-experiment-review (has `references/counterfactual-evaluation.md` — counterfactual framing is unusual and worth a look), referral-loop-review, retention-cohort-review, saas-subscription-pricing, subscription-price-increase-retention-review, ad-monetization-review, experimentation-platform-governance-review (found via npx skills find, not in this tree grep — same repo). All skills in this repo follow a "-review" naming pattern (product-experiment-**review**, not product-experiment-design) — this looks like an AUDIT/critique layer specifically, not a design/build layer; distinct positioning from every other repo here worth flagging for the "adjudication" wedge angle — a pack that ONLY reviews others' experiment/pricing/retention decisions rather than designing them is close in spirit to our own family's quality-skill precedent (Assure-stage judgment layer) but for growth. Very new/unproven (1 star, repo pushed same day as this research) — track but do not over-weight. |
| finsilabs/awesome-ecommerce-skills | 40 | 2026-03-13 | MIT (`Copyright (c) 2026 awesome-ecommerce-skills contributors`) | customer-crm/referral-program, data-analytics/ab-testing-ecommerce, marketing-growth/conversion-rate-optimization, marketing-growth/customer-retention-engine, marketing-growth/cart-abandonment-recovery, marketing-growth/cart-recovery-sms, marketing-growth/cross-sell-upsell-engine, marketing-growth/exit-intent-popups, marketing-growth/loyalty-program-optimization, plus customer-crm/customer-lifetime-value, customer-crm/customer-segmentation. E-commerce-vertical-specific (not general growth). Every skill has an `evals/` dir with `criteria.json` + `task.md` per eval case (heaviest eval investment of any repo in this census — dozens of eval cases spread across dozens of skills). Eval case names are concrete and implementation-flavored, e.g. `ab-testing-ecommerce/evals/sample-size-calculation-and-server-side-` (truncated dirname in the tree output, real name longer), `ab-testing-ecommerce/evals/pricing-test-consistency-guardrail-metri` (also truncated) — i.e. this pack's evals test IMPLEMENTATION (does the generated code correctly calculate sample size, correctly wire guardrail metrics) rather than advisory-text quality, a different eval philosophy from coreyhaines31's advisory-response evals. |
| kostja94/marketing-skills | 800 | 2026-06-09 | MIT (`Copyright (c) 2025 kostja94`) | retention-strategy (818 installs per skills.sh), growth-funnel (886 installs — the AARRR-framework skill) — only 2 growth-tagged skills found via keyword grep out of its claimed 160+ total; this repo is overwhelmingly SEO/content/paid-ads, growth is a minor corner. |
| wdavidturner/product-skills | 16 | 2026-01-19 | MIT (`Copyright (c) 2025 David Turner`) | growth-loops, product-led-growth — only 2 of its 20 total PM-framework skills touch growth (rest are JTBD, OKRs, Shape Up, 7 Powers, etc. — general PM frameworks, not growth-specific). Very small (16 stars), stale (no push since 2026-01-19, 6+ months as of today). |
| PostHog/ai-plugin | 65 | 2026-08-01 (pushed today) | **NO LICENSE FILE FOUND** — checked `LICENSE` and `LICENSE.md`, both 404. `gh api repos/PostHog/ai-plugin --jq .license` returned null even at the API level (not just a NOASSERTION lie — genuinely absent). Per charter instruction: **NO LICENSE FILE (all rights reserved by default)** for this repo, despite being an official PostHog product repo. Flag prominently — if any other channel wants to lift PostHog's flag/experiment skill content, this needs a licensing conversation, not an assumption of MIT. | configuring-experiment-rollout (185 installs), instrument-feature-flags (266), cleaning-up-stale-feature-flags (209), instrument-product-analytics (305), signals-scout-experiments (32) — official vendor's own agent-skill packaging of their product surface, actively maintained (pushed today). |
| PostHog/skills | 56 | 2026-08-01 (pushed today) | MIT (file-verified, `Copyright (c) 2025`, no named copyright holder in the text) | feature-flags-nextjs (135), finding-deleted-feature-flags (134), feature-flags-web (113), omnibus-instrument-product-analytics (111) — appears to be a second, MIT-licensed PostHog skills repo distinct from `ai-plugin` above (labeled "under construction" in its GitHub description) — the licensing SPLIT between PostHog's two skill repos (one unlicensed, one MIT) is itself a notable finding; do not conflate them. |

---

## 7. Single-purpose / statistically-substantive niche finds (VERIFIED, all near-zero stars — flagged despite low adoption because of content quality/relevance, per charter "we can't lose any information")

- **LeihuaYe/claude-experimentation** (0 stars, MIT license file-verified, pushed 2026-06-14).
  Description: "Trustworthy A/B test readout as a Claude Code skill — SRM, CUPED, BH-corrected,
  ship/no-ship verdict." **This is the only repo in the entire census whose top-line description
  literally names SRM, CUPED, AND Benjamini-Hochberg multiple-testing correction together.** Unlike
  every other repo cataloged here, this one ships actual runnable Python, not just markdown prompts:
  three sub-skills each with their own `SKILL.md` + implementation — `ab_design/` (design.py, cli.py),
  `ab_readout/` (readout.py, cli.py — the SRM/CUPED/BH-correction engine, by the name), `ab_cate/`
  (cate.py — conditional average treatment effect estimation, i.e. heterogeneous treatment effects /
  segment-level lift). Has a `tests/` directory with `test_cate.py`, `test_design.py`,
  `test_readout.py` — the only repo in this entire census with an actual unit-test suite backing its
  statistical claims, as opposed to prose-only or LLM-eval-only quality assurance. Also has
  `examples/make_synthetic.py` + `examples/example_output.txt` — synthetic-data example run. Single
  author (Leihua Ye), zero community adoption, but the single highest technical-rigor find in the
  whole sweep by a clear margin. Worth a full deep-read by whoever owns the CUPED/SRM/sequential-testing
  section of the growth report — this may be the best available "here's what the actual computation
  looks like" reference in the entire skills ecosystem, independent of its lack of adoption.
- **antocci/ab-test-review** (2 stars, not independently license-verified — time-bounded, flag for
  follow-up). Description: "Agent Skill for reviewing A/B tests. Inspired by the
  ml-system-design-review skill (Babushkin/Kravchenko); grounded in Trustworthy Online Controlled
  Experiments (Kohavi/Tang/Xu)." **This is the only repo found in the entire sweep whose description
  explicitly cites the Kohavi/Tang/Xu book by name** (the field's standard text per
  controller-canon.md §1). A review/audit-pattern skill (like SylphxAI's cluster above), not a
  design skill. Given the direct book citation, worth a follow-up open of the actual SKILL.md to see
  if it cites specific chapters/concepts or just name-drops the book in its README — I did not have
  time to open the file body itself, only found it via repo search; flagging explicitly as INFERRED
  from the GitHub search description only, not verified against the file.
- **ruoyanhuang216/ab-testing-planner-skill** (0 stars) — description claims "generates a staff-level
  A/B testing plan (10-component template + 1,400-line reference playbook)." Large claimed reference
  file (1,400 lines) if true — not independently opened, flag for follow-up. INFERRED only.
- **nastyabir/ab-test-skill** (0 stars) — "rigorous A/B-test design & statistical analysis
  (experiment-fest methodology)" — "experiment-fest" is not a term I recognize from the canon; possibly
  a named methodology from a specific practitioner or company, or an invented term. Not verified.
- **webtrends-optimize/claude-code-ab-testing-skills** (1 star) — official vendor repo (Webtrends
  Optimize is a real CRO/testing platform, historically a Google Analytics competitor's lineage) hosting
  its own public skill collection "for various aspects related to AB Testing / Experimentation." Only 1
  star despite being vendor-official — low adoption is common across ALL vendor-official skill repos
  found in this sweep (PostHog's two repos: 65 and 56 stars; Adobe's `aa-conversion-funnel-analysis`:
  154 installs per skills.sh, not independently gh-starred-checked) — worth noting as a pattern: vendor
  official skill repos consistently underperform independent community packs in adoption, across every
  vendor found in this census.
- **grandamenium/autoresearch-anything** (24 stars) — "Claude Code skill: autonomous experimentation
  pipeline for any business metric using Karpathy's autoresearch pattern" — the "Karpathy's autoresearch
  pattern" lineage recurs across several unrelated small repos in the "claude skill experimentation"
  search results (GodModeAI2025/skill-forge, MustafaHasnainCF/skill-improver) — these are all
  SKILL-SELF-IMPROVEMENT tools (agent iterates on its own skill instructions), not growth/product
  experimentation tools despite the keyword overlap. False-positive cluster, noting the pattern so no
  other worker re-investigates it.
- **Nikolai-Iakubovskii/app-paywall-pilot** (36 stars) — "A framework for designing App Store-compliant
  subscription paywalls. 4 layers: AI skill (Claude/GPT/Cursor) + knowledge base (79 sourced
  benchmarks) + Python LTV tool + docs. 20-concept academic foundation (Kahneman + Layer 2). Flagship
  domain Paywall; expansion planned to Onboarding, Retention, Growth, Pricing, Reviews." Claims "79
  sourced benchmarks" — if true and actually sourced (not just claimed), this could be a genuine
  falsification-strip-relevant find for paywall/mobile-monetization CRO; not independently opened,
  flag for follow-up by whoever owns the mobile/PLG monetization angle.
- **gquthier/quiz-funnel-expert** (26 stars) — "design and ship high-conversion quiz funnels +
  paywalls. 30+ teardowns (Cal AI, Noom, Duolingo, Blinkist, Linear, Notion, Anthropic), 2026
  benchmarks (RevenueCat, Adapty)." Named teardowns of real products + named benchmark sources
  (RevenueCat, Adapty are real mobile subscription-analytics vendors) — plausible primary-adjacent
  source, not independently opened.
- **ekinciio/saas-growth-marketing-skills** (12 stars) — "15 skills covering ASO, GEO/SEO, CRO, PLG
  funnels, retention, pricing, competitor intel, and more." Small, not opened, flagging for
  completeness only.
- **Sharebird/sharebird-packaging-research-skill**, **sharebird-pricing-resourcing-skill**,
  **sharebird-pricing-rollout-skill** (0 stars each) — three-skill pricing/packaging cluster explicitly
  positioned as a "Companion to the Sharebird x Alex Rodrigues (Superhuman) pricing & packaging
  playbook" — named practitioner (Alex Rodrigues, former Superhuman) + named source playbook. This is
  a rung-3 (named practitioner) source by the charter's evidence-rung system, worth a citation-chase by
  whoever owns pricing-experiment provenance (the charter explicitly assigns Van Westendorp provenance
  to channel D4 — this Sharebird/Rodrigues source is adjacent, not the same, flag as a second
  practitioner-sourced pricing lineage).
- **florianbonnet14/ThePowerOfAnalytics_ClaudeSkills** (26 stars) — "Skills helping anyone to build
  North Star Metrics, KPI Trees and plan/run complex analysis - Built using the content of my book
  The Power Of Analytics" — another named-book/named-author source (rung 3), not independently opened.

---

## 8. Null results — exact queries that returned nothing or only false positives

- **`npx skills find "SRM sample ratio mismatch"`** — zero true-positive results. The concept exists
  only as prose inside rampstackco's `data-warehouse-experimentation` skill (§4b); no skill anywhere
  in the skills.sh registry is discoverable by SRM as a search term.
- **`npx skills find "sequential testing"`** — zero true-positive results; all 6 hits were
  "sequential-thinking" reasoning-pattern skills (unrelated MCP/agent-orchestration concept, false
  positive on the word "sequential"). Same underlying finding as SRM: the concept is real (rampstackco,
  LeihuaYe) but not surfaced by title/keyword search anywhere in the registry.
- **`gh api "search/repositories?q=claude skills SRM sample ratio mismatch"`** — literally zero results
  (empty `.items` array), not even false positives.
- **`gh api "search/repositories?q=claude skill viral loop"`** — zero results (the singular "viral loop"
  phrasing returns nothing; "viral loops" plural, searched separately via npx skills find, DOES return
  hits — §2 above — so this is a phrasing-sensitivity null, not a true content null).
- **GitHub CODE search (`gh api "search/code?q=filename:SKILL.md+experimentation"` and the
  `conversion+rate` variant)** — both calls hit **HTTP 403 rate-limit** ("API rate limit exceeded for
  user ID 49348865") on first attempt. Per charter instruction ("if code search 422s or is rate-limited,
  note that and move on") I did not retry or debug further. **This means the code-search sweep the
  charter asked for (`filename:SKILL.md` + ab-testing/conversion+rate/retention+cohort/activation) is
  INCOMPLETE** — only the repo-search and registry sweeps were completed for those terms. Flag this
  gap explicitly for the sub-orchestrator: if code search matters for finding SKILL.md files that don't
  surface via repo-level search or the skills.sh registry (e.g. a growth skill buried inside an
  otherwise-unrelated-sounding mega-repo), that gap is unfilled and another worker/channel should
  retry once the rate limit resets (GitHub search-API rate limits are typically per-minute or
  per-hour, not permanent).
- **anthropics/skills full-repo sweep** — zero growth content, see §1. This is a true, deliberate,
  well-evidenced null, not a search-failure null.

---

## 9. Cross-cutting notes for the sub-orchestrator / controller

- **The "growth vs operate" seam** (charter's special question): PostHog's own two-repo split
  (`ai-plugin` and `skills`, §6) already separates flag-cleanup/rollout-hygiene skills
  (`cleaning-up-stale-feature-flags`, `finding-deleted-feature-flags` — operate-flavored) from
  experiment-configuration skills (`configuring-experiment-rollout` — growth-flavored) within its own
  product surface, even though both repos mix them. This is real-world evidence the seam charter
  describes (canary=operate, A/B test=growth, same flag infra) is already something at least one
  vendor implicitly recognizes in how it names skills, even without a stated philosophy for the split.
- **Eval philosophy varies meaningfully across repos** and is worth the controller's attention as a
  craft signal independent of star count: coreyhaines31 evaluates ADVISORY TEXT QUALITY (does the
  model's response correctly warn about peeking, cite the right framework); finsilabs evaluates
  IMPLEMENTATION CORRECTNESS (does the generated code correctly calculate sample size); LeihuaYe
  ships actual unit tests against real statistical functions. These are three different rungs of
  rigor and could inform how our own family thinks about eval design for growth-skill if we build one.
- **Adoption and rigor are not correlated in this sweep.** The most statistically literate finds
  (rampstackco: 508 stars but real; LeihuaYe: 0 stars; SkeneTechnologies: 18 stars) are all far below
  the two mega-incumbents (coreyhaines31: 42.6K, phuryn: 24.7K) whose growth content is comparatively
  thinner (though coreyhaines31's ab-testing skill specifically punches above its weight with a real
  peeking-problem eval). This gap — "the most correct content is not the most distributed content" —
  is itself possibly the single most useful finding for wedge hypothesis #3's honest framing: it's not
  that nobody has done the validity layer, it's that the validity layer and the distribution have never
  landed in the same repo at scale.
- **Licensing pattern**: every repo I checked was MIT except PostHog/ai-plugin (no LICENSE file at
  all, despite being official/maintained-today) — worth double-checking before any lift, and note that
  "official vendor repo" is not a proxy for "has a license file."
- Files fetched to scratchpad during this research (not part of the deliverable, listed for
  reproducibility): rampstackco's 7 SKILL.md files + LICENSE, SkeneTechnologies's 6 SKILL.md files +
  LICENSE, coreyhaines31's ab-testing SKILL.md + evals.json + cro SKILL.md + LICENSE, plus 7 more
  LICENSE files for the mid-tier repos in §6 — all pulled via `gh api repos/<owner>/<repo>/contents/<path>
  --jq '.content' | base64 -d`, all at
  `/private/tmp/claude-501/.../scratchpad/` under this session's temp dir (not committed anywhere,
  ephemeral).
