# Charter — growth deep research (2026-08-01)

Shared brief for all sub-orchestrators and workers. Read this AND controller-canon.md before
doing anything.

## Mission

We are building `growth-skill`, the 12th pack in the Digital Product Skills family (faceted
thin-router architecture: SKILL.md router + on-demand references; shipped siblings: design,
frontend, product, architecture, backend, ai, automation, quality, operate, data, marketing).
This run gathers EVERYTHING valuable about growth — experimentation, funnel/cohort analysis,
activation, retention, referral/loops, CRO, monetization experiments, PLG — so the controller
can synthesize a wedge and a shape. **We can't lose any information or source.** Every claim
in your artifacts must link to its source (URL, repo path, post ID) with an as-of date.

## Canonical definition (binding, from docs/product-lifecycle-skill-packs-exploration.md §4.13)

Mission: "Improve measurable customer and business outcomes through cross-functional analysis
and experimentation." Triad: /marketing = bring and capture demand · /sales = convert
qualified buyers · /growth = improve acquisition, activation, retention, referral, revenue.
Includes (17): growth-model construction · funnel analysis · acquisition efficiency ·
activation · onboarding optimization · CRO · engagement/habit · retention/resurrection ·
referral/viral · product loops · monetization/expansion · pricing-packaging experiments · A/B
and multivariate testing · experiment prioritization · experimental design + guardrails ·
experiment analysis · PLG. Canonical experiment split: "/growth defines and evaluates the
experiment. /design may design variants; /frontend, /backend, /ai, or /automation
productionize them; /data validates measurement."

Seven shipped packs already cede to growth in writing. The two strongest pre-drawn seams:
- data: "data guarantees measurement *validity*; the experiment itself is growth's."
- marketing: "Marketing runs no experiment and calls it a result."

## Special question from Tamas (answer per-item where relevant)

**Growth vs operate disposition**: for anything you find that smells like monitoring,
dashboards, alerting, rollout/flags, or run-the-system health — note whether it belongs in
growth (learning/causal improvement) or should pivot to operate (running the live system).
The seam: a canary is risk containment (operate); an A/B test is learning (growth); same
flag infra, opposite intent.

## Evidence discipline (non-negotiable)

- Rung your sources: (1) primary docs/specs/papers/first-party engineering blogs, (2)
  peer-reviewed, (3) named practitioners with dates, (4) folklore (report it AS folklore —
  folklore is a finding, we falsify it later).
- Never trust a secondhand number: trace benchmarks (PLG conversion rates, "1/3 of
  experiments win", CUPED variance reductions) to the primary source or mark UNTRACED.
- Sample caveats are findings: self-selected vendor benchmark samples must be flagged.
- Licenses: open the LICENSE file itself; the GitHub license API returns NOASSERTION lies.
  Per-skill licenses exist. Note license for every repo you'd want to lift from.
- Never-ship candidates: collect volatile magnitudes with dates; the controller gates them.
- NEVER use or echo any Jina API key. crwl/Crawl4AI is broken env-wide (litellm
  ImportError) — do not debug it, use WebFetch/curl/gh api.
- WebFetch 403 → retry with `curl -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"`. Apple docs JSON
  backend: developer.apple.com/tutorials/data/documentation/<path>.json.
- Do not trust WebFetch-extracted "latest model/version" claims — verify against the
  authoritative file/page.

## Artifact contract

- Workers write: research/growth/_raw/<channel>-<topic>.md — every detail, every link;
  verbose is fine, lossy is not.
- Sub-orchestrators write: research/growth/<channel>-report.md — synthesis WITH pointers
  into _raw files; re-verify worker numbers before repeating them (last run the lead
  re-verification caught 3 about-to-ship-wrong figures).
- All paths relative to /Users/tamas/Documents/Personal/Projects/digital-product-skill/.

## Orchestration rules

- Sub-orchestrators spawn sonnet workers via the Agent tool with model: "sonnet".
  **Do NOT pass a `name` parameter when spawning** (the environment refuses named spawns
  from teammates). Give each worker its full brief inline — workers can't read your mind.
- While workers run in background: arm a file-watcher loop (poll _raw/ for landed files)
  and do a lead-slice on unassigned territory yourself. Idle waiting is waste.
- WebSearch session budget (200 total, shared): D ≤80 · B ≤30 · A ≤15 · C ≤15 · reserve 60.
  Prefer WebFetch / gh api / x-relay / curl over WebSearch everywhere possible.
- X channel (B): cap concurrent xrelay processes at ~4 — 11 concurrent procs degraded the
  search endpoint session-wide last run. Authority routing (`from:<handle>`) beats topical
  search where vendors dominate the topic terms.

## Channel assignments

- **A (grw-skills, 3 workers)**: skills ecosystem. /find-skills sweeps + marketplace
  registries + incumbent check. Deep-read coreyhaines31/marketingskills' growth-adjacent
  skills (ab-testing, cro, churn-prevention, onboarding, pricing…) — its ab-testing eval
  reportedly tests the peeking problem, verify. Find any DEDICATED growth/experimentation
  skill packs. Deepwalk top repos: what exists, what's tactic-list vs validity-layer,
  licenses, star counts via API.
- **B (grw-x, 3 workers)**: X via x-relay. Authorities: @ronnyk (Kohavi — he posts
  actively about experiment validity), Statsig/GrowthBook/Eppo people, Elena Verna, Andrew
  Chen, Brian Balfour, Lenny Rachitsky orbit, indie/small-sample operators (levelsio et
  al on "I don't A/B test" discourse), CRO practitioners. Topical sweeps: peeking, SRM,
  CUPED, PLG benchmarks, retention, pricing experiments, growth folklore.
- **C (grw-github, 4 workers)**: GitHub via github-relay + gh api. GrowthBook, Statsig
  SDKs, Eppo, Unleash, Flagsmith, PostHog experimentation, PlanOut lineage (Wasabi, ExpAn,
  planout4j), sequential-testing/analysis libs, awesome-lists (awesome-ab-testing etc.),
  Claude-skill repos with growth content. Licenses from LICENSE files. Docs that teach
  stats (GrowthBook's docs are a stats textbook — extract).
- **D (grw-web, 4 workers)**: open web. (d1) Kohavi canon + ExP papers + peeking/
  sequential/always-valid p-values + SRM + Twyman's law. (d2) company experimentation
  blogs: Microsoft, Netflix, Airbnb, Booking, Spotify, LinkedIn, Uber/Lyft/DoorDash
  switchbacks, Duolingo retention. (d3) papers: CUPED, Ghost Ads (SSRN), Google
  matched-markets + Trimmed Match geo-experiments, Lewis & Rao (already verified in
  marketing corpus — cite, don't re-derive), interference/SUTVA. (d4) PLG + CRO + retention
  industry layer: OpenView/ProductLed benchmarks WITH sample caveats, Sean Ellis test
  provenance, CRO folklore falsification targets, pricing-experiment guidance (Van
  Westendorp provenance), habit/gamification ethics.
- **E (grw-webdesign, solo opus)**: the old ~/.claude/skills/webdesign skill. The marketing
  run produced a full 64KB disposition table at /Users/tamas/Documents/Personal/Projects/
  marketing-skill/research/webdesign-extraction.md — read it FIRST, then re-read the
  webdesign skill files directly through a growth lens: CRO/conversion content, A/B
  guidance, analytics/measurement, onboarding/activation, anything funnel. Output: a
  growth-slice disposition table (lift verbatim / lift with rework / already-lifted-by-
  marketing / stays-elsewhere / discard) with file:line pointers. We abandon webdesign
  after the family is complete — nothing growth-relevant may be left behind.

## Quality bar

Marketing's corpus is the standard: verified magnitudes with dates, falsification strips
with N-way independent evidence, named-practitioner models labeled as such, incumbent
treated respectfully, licenses list-every-file. Bring home the information, not vibes.
