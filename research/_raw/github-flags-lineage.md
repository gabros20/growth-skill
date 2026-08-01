# GitHub research — feature-flag / experiment-infrastructure tier + PlanOut lineage

- **Worker**: C2 (grw-github sub-fleet)
- **Date (as-of)**: 2026-08-01
- **Scope**: Part A (modern flag/experiment tier: Unleash, Flagsmith, PostHog, OpenFeature,
  Optimizely OSS remnants, Flipt/GO-Feature-Flag/Bucketeer, LaunchDarkly OSS SDKs) + Part B
  (PlanOut lineage: PlanOut, descendants, Wasabi, ExpAn, and adjacent graveyard).
- **Method**: `gh api` for repo identity (stars/archived/pushed_at/license-per-API, flagged as
  unreliable), `gh api .../git/trees/<branch>?recursive=1` for whole-repo file listing (finds
  every LICENSE file without a full clone), `gh api .../contents/<path>` + `curl
  raw.githubusercontent.com` for file bodies, `git clone --depth 1` into scratchpad for PlanOut
  and the OpenFeature spec (needed local grep/read across many files), WebFetch for two
  posthog.com/launchdarkly.com doc pages (curl UA fallback not needed — no 403s hit).
  WebSearch: **0 calls used** (budget was ≤15) — gh api / raw.githubusercontent.com / WebFetch
  covered everything needed.
- **Non-negotiable**: every license claim below is read from the LICENSE FILE TEXT ITSELF, not
  from the GitHub API `license.spdx_id` field. Where the two disagree, both are reported and the
  disagreement is flagged — this happened for PostHog, Flipt, and LaunchDarkly.

---

## 1. Modern flag/experiment tier — summary table

| repo | stars (as-of 2026-08-01) | archived? | last push | license (GitHub API field) | license (FROM FILE) | every license file found | rollout-vs-learning verdict |
|---|---|---|---|---|---|---|---|
| Unleash/unleash | 13,705 | No | 2026-08-01 | AGPL-3.0 | **AGPL-3.0** (matches) | `LICENSE` (root only) | **Pure rollout/release-safety.** Zero occurrences of "experiment", "A/B test", "hypothesis", or "statistical" anywhere in README. |
| Flagsmith/flagsmith | 6,480 | No | 2026-07-31 | BSD-3-Clause | **BSD-3-Clause** (matches) | `LICENSE.md` (root only) | **Rollout-first, claims A/B as a bullet.** README lists "A/B testing: Use segments to run A/B and multivariate tests" as one of 7 feature bullets, but zero mentions of hypothesis/significance/randomization anywhere — segment-targeting repurposed as "testing," not a stats-validity product. |
| PostHog/posthog | 37,425 | No | 2026-08-01 | NOASSERTION (API cannot resolve a dual-license repo) | **Multi-license** — root MIT ("MIT Expat"), `ee/` under a bespoke **PostHog Enterprise license (non-OSI)**, several vendored dirs independently MIT | `LICENSE` (root), `ee/LICENSE`, `packages/quill/LICENSE` (MIT), `products/desktop/LICENSE` (MIT), `products/desktop/packages/electron-trpc/src/vendor/unpromise/LICENSE`, `rust/LICENSE` (MIT), `tools/hogli/LICENSE` (MIT), plus a vendored `.github/actions/paths-filter/LICENSE` | **Both, and PostHog itself blurs the line internally** — see §3/§4/§7. Core experiment stats engine (`products/experiments/`) is **outside `ee/`, i.e. MIT**, not enterprise-gated. |
| open-feature/spec | 1,221 | No | 2026-07-31 | Apache-2.0 | **Apache-2.0** (matches) | `LICENSE` (root) | **Rollout/evaluation-only by design** — see §5. The spec has no experiment-assignment or statistical-readout model at all. |
| open-feature/js-sdk | 277 | No | 2026-07-31 | Apache-2.0 | Apache-2.0 (not separately re-verified, low risk — same org licensing pattern) | `LICENSE` | Same as spec — evaluation-only. |
| flipt-io/flipt | 4,867 | No | 2026-08-01 | NOASSERTION | **Fair Core License, v1.0, MIT Future License (FCL-1.0-MIT)** for the core server — a delayed-open-source / "fair source" license, NOT OSI-approved; converts to MIT after a time delay per the license's own "MIT Future License" terms. Sub-components are separately **MIT**. | `LICENSE` (root, FCL-1.0-MIT), `errors/LICENSE` (MIT), `rpc/flipt/LICENSE` (MIT), `sdk/go/LICENSE` (MIT) | **Explicit kill-switch/rollout-safety framing.** Verbatim use-case bullet: "Ensuring overall system safety by guarding new releases with an emergency **kill switch**." No hypothesis/experiment framing in the README use-cases list at all. |
| thomaspoignant/go-feature-flag | 2,072 | No | 2026-07-31 | MIT | **MIT** (matches) | `LICENSE` (root), `examples/demo/LICENSE` | **Explicitly nests "experimentation" INSIDE "rollout strategy."** Headline quote in §4 — the single cleanest textual conflation of the two concepts found in this whole survey. |
| bucketeer-io/bucketeer | 477 | No | 2026-08-01 | Apache-2.0 | **Apache-2.0** (matches) | `LICENSE` (root) | **Both, deliberately fused as a continuum.** "Experiment Lifecycle Management: Seamlessly transition from experiment to full rollout." Also ships Bayesian A/B testing as a first-class OSS feature (see §4). |
| launchdarkly/js-client-sdk (representative OSS SDK) | 121 | No | 2026-07-20 | NOASSERTION | **Apache-2.0** ("Copyright 2016 Catamorphic, Co. Licensed under the Apache License, Version 2.0") | `LICENSE.txt` (root) — note: this repo is itself deprecated in favor of `launchdarkly/js-core`; SDK code is OSS, the **Experimentation product itself is a paid LaunchDarkly SaaS add-on, not in this repo** | **SDKs are pure flag-evaluation client code** (rollout-safety plumbing); Experimentation is a closed commercial layer built on top. LD's own docs describe a workflow sequence — "if an experiment tells you a feature has positive impact, you can roll that feature out to your entire user base" — i.e. experiment is treated as a *prior, distinct* step from rollout, even without an explicit "vs" section. |
| optimizely/python-sdk (representative SDK; same pattern across java/js/go/ruby/swift/csharp/php-sdk) | 31 | No | 2026-07-29 | Apache-2.0 | **Apache-2.0** (matches) | `LICENSE` (root) | **Both products named explicitly in the SDK's own README — the cleanest first-party naming split found anywhere in this survey.** See verbatim quote in §4. |

---

## 2. Per-repo license detail (verbatim text pointers)

### Unleash — `Unleash/unleash`
- `LICENSE` (root): GNU AFFERO GENERAL PUBLIC LICENSE, Version 3. Verified by reading the file
  body directly (`gh api /repos/Unleash/unleash/contents/LICENSE`). API's `license.spdx_id` says
  `AGPL-3.0` — this is one of the few repos in the survey where the API and file agree exactly.
- Enterprise features are **gated by a runtime license key inside the same AGPL codebase**
  (`frontend/src/component/admin/license/*`, `src/lib/features/instance-stats/getLicensedUsers.ts`)
  — not a separate license file or directory. There is no public `Unleash/unleash-enterprise`
  repo (`gh api /repos/Unleash/unleash-enterprise` → 404); enterprise is closed SaaS/binary, sold
  as a hosted trial, not shipped as source in this repo at all. Contrast this with PostHog's
  pattern (separate `ee/` dir under its own license, still public source) — Unleash keeps
  enterprise code entirely out of the OSS repo rather than gating a public directory.
- Source: `gh api /repos/Unleash/unleash --jq ...` (2026-08-01); README fetched via
  `raw.githubusercontent.com/Unleash/unleash/main/README.md` (2026-08-01).

### Flagsmith — `Flagsmith/flagsmith`
- `LICENSE.md` (root, only license file found in a full recursive tree search): BSD-3-Clause,
  "Copyright (c) 2024 Bullet Train Ltd (https://www.flagsmith.com/)". Matches the API field
  exactly.
- README explicitly states an open-core split without naming a second license file: "The majority
  of our platform is open source under the BSD-3-Clause license... A small number of repositories
  are under the MIT license... Enterprise-level governance and management features are available
  with a valid Flagsmith Enterprise license." This implies enterprise gating happens by
  **repository-level separation** (other, non-public or MIT-licensed repos), not an in-tree `ee/`
  directory — the flagship `Flagsmith/flagsmith` repo itself carries only one license file.
- Source: `gh api "/repos/Flagsmith/flagsmith/git/trees/main?recursive=1"` (2026-08-01);
  `gh api /repos/Flagsmith/flagsmith/contents/LICENSE.md` (2026-08-01).

### Flipt — `flipt-io/flipt`
- `LICENSE` (root): **Fair Core License, Version 1.0, MIT Future License** (abbreviation
  `FCL-1.0-MIT`). This is a "fair source" license — source-available, restricts certain
  competitive/commercial uses for a period, then **converts to MIT** after a time delay defined
  in the license's own "MIT Future License" clause. It is not an OSI-approved open-source
  license, which is exactly why GitHub's API returns `NOASSERTION` for this repo — the API
  license classifier does not recognize FCL. This is a second flagship example (alongside
  PostHog) of the API lying by omission rather than by wrong-labeling.
- `errors/LICENSE` (MIT, "Copyright (c) 2024 Flipt Software Inc."), `rpc/flipt/LICENSE` (MIT,
  copyright 2022), `sdk/go/LICENSE` (MIT, copyright 2023) — the wire-protocol/errors/SDK
  sub-packages are permissively MIT-licensed even though the core server binary is FCL. Pattern:
  **client-facing integration surface is MIT; the server product itself is fair-source.**
- Source: `gh api "/repos/flipt-io/flipt/git/trees/main?recursive=1"` +
  `gh api /repos/flipt-io/flipt/contents/<path>` for each of the four files (2026-08-01).

### GO Feature Flag — `thomaspoignant/go-feature-flag`
- `LICENSE` (root): MIT, "Copyright (c) 2020 Thomas Poignant". Matches API field. One additional
  vendored `examples/demo/LICENSE`, not separately read (demo-only, non-load-bearing).
- Single-maintainer OSS project (Thomas Poignant), fully MIT, no enterprise/OSS split at all —
  simplest license posture in this entire survey.

### Bucketeer — `bucketeer-io/bucketeer`
- `LICENSE` (root): Apache License 2.0. Matches API field exactly. Created by CyberAgent (Japanese
  ad-tech company); no enterprise-tier split found — README explicitly markets itself as
  everything-included-free: "Advanced features, zero licensing costs: Get progressive rollouts,
  Bayesian experimentation, automated operations... all features typically locked behind
  expensive enterprise tiers."

### LaunchDarkly OSS SDKs — `launchdarkly/js-client-sdk` (representative)
- `LICENSE.txt` (root): Apache License 2.0, "Copyright 2016 Catamorphic, Co." (Catamorphic Co. is
  LaunchDarkly's legal entity name). API field says `NOASSERTION` despite the file text being an
  unambiguous, standard Apache-2.0 grant — third example in this survey of the API failing on a
  case that isn't even ambiguous, suggesting the classifier sometimes just doesn't fire on
  smaller/older repos rather than only on genuinely dual-licensed ones.
- This specific repo is itself **deprecated** ("Use `@launchdarkly/js-client-sdk` instead... The
  `launchdarkly-js-client-sdk` project has been renamed... all future releases will be made from
  the new repository `launchdarkly/js-core`"). All LaunchDarkly *SDKs* (evaluation clients) are
  OSS/Apache-2.0 across the org — this is consistent with the wider industry pattern: **flag
  evaluation clients are commoditized OSS; the analysis/experimentation backend is the paid
  product**, same shape as Optimizely (see below) and Statsig/Eppo per controller-canon.

### Optimizely SDKs — `optimizely/python-sdk` (representative of python/js/java/go/ruby/swift/csharp/php-sdk, all same pattern)
- `LICENSE` (root): Apache License 2.0. Matches API field.
- **First-party product-naming split, quoted verbatim from the README:** "This repository houses
  the Python SDK for use with **Optimizely Feature Experimentation** and **Optimizely Full Stack
  (legacy)**." ... "Optimizely Feature Experimentation is an A/B testing and feature management
  tool for product development teams that enables you to experiment at every step." ... "**
  Optimizely Rollouts** is [free feature flags](https://www.optimizely.com/free-feature-flagging/)
  for development teams. You can easily roll out and roll back features in any application
  without code deploys, **mitigating risk** for every feature on your roadmap."
  This is the single cleanest first-party example in the whole survey of a vendor naming two
  *separate, differently-branded products* along exactly the growth/operate seam: "Feature
  Experimentation" (learning) vs "Rollouts" (risk containment), sharing one SDK.
- **Stats Engine is not open-sourced.** Optimizely's org has no repo implementing the
  sequential-testing / always-valid-p-values "Stats Engine" (the Johari, Koomen, Pekelis, Walsh
  ~2015/2017 peeking-fix work cited in controller-canon). Checked all 40 `optimizely/*` repos via
  `gh search repos --owner optimizely` (2026-08-01) — every repo is either a client SDK
  (Apache-2.0, pure bucketing/evaluation logic, no stats-analysis code), a demo app, or unrelated
  tooling (`nuclear-js`, `hyperloglog`, `chord`, icons, Jenkins/Jira templates). The landmark
  algorithm itself is closed/proprietary; only the flag-evaluation client layer was ever
  open-sourced. **This is a negative finding worth stating explicitly**: the paper is public
  (arXiv/KDD), the production implementation is not.

---

## 3. PostHog license anatomy — the flagship multi-license case

Full enumeration of every LICENSE file found via `gh api "/repos/PostHog/posthog/git/trees/master?recursive=1"` (2026-08-01, `master` branch), each opened and read directly:

| path | license (verbatim from file) | scope |
|---|---|---|
| `LICENSE` | "Copyright (c) 2020-2026 PostHog Inc. ... Content outside of the above mentioned directories or restrictions above is available under the **'MIT Expat' license**." | The default for the whole repo *except* `ee/` and vendored components |
| `ee/LICENSE` | "**The PostHog Enterprise license (the 'Enterprise License')**... may only be used in production[,] if you... have agreed to... the PostHog Subscription Terms of Service... or... have a valid PostHog Enterprise license for the correct number of user seats... you may copy and modify the Software for development and testing purposes, without requiring a subscription." | Everything under `ee/` — a source-available, non-OSI, seat-metered commercial license |
| `packages/quill/LICENSE` | MIT, "Copyright (c) 2026 PostHog Inc." | Vendored/forked `quill` editor package |
| `products/desktop/LICENSE` | MIT, "Copyright (c) 2026 PostHog Inc." | Desktop app product directory |
| `products/desktop/packages/electron-trpc/src/vendor/unpromise/LICENSE` | Not separately opened (vendored third-party dependency inside a vendored dependency; the root LICENSE's clause "all third party components... licensed under the original license provided by the owner" already covers this) | Vendored transitive dependency |
| `rust/LICENSE` | MIT, "Copyright (c) 2023 PostHog" | Rust workspace (ingestion/capture services) |
| `tools/hogli/LICENSE` | MIT, "Copyright (c) 2026 PostHog Inc." | Internal CLI tool |
| `.github/actions/paths-filter/LICENSE` | Not separately opened (vendored third-party GitHub Action) | CI tooling, not shipped product code |

**The root LICENSE file is explicit and self-describing about the split** (quoted in full below,
this is the exact mechanism that defeats the GitHub license API — a human must read this
paragraph to know the repo isn't simply MIT):

> "Copyright (c) 2020-2026 PostHog Inc.
> Portions of this software are licensed as follows:
> * All content that resides under the 'ee/' directory of this repository, if that directory
>   exists, is licensed under the license defined in 'ee/LICENSE'.
> * All third party components incorporated into the PostHog Software are licensed under the
>   original license provided by the owner of the applicable component.
> * Content outside of the above mentioned directories or restrictions above is available under
>   the 'MIT Expat' license as defined below."

**Critical nuance for growth/experimentation purposes**: the entire experimentation *product*
directory, `products/experiments/` (stats engines, hogql query builders, CUPED, Bayesian and
frequentist test code, the agent skills that teach experiment interpretation), lives **outside**
`ee/` — it is MIT, not enterprise-gated. Only two adjacent experiment-related files sit under
`ee/`: `ee/clickhouse/views/experiment_holdouts.py` and `ee/clickhouse/views/experiment_saved_metrics.py`
— meaning **holdout groups and reusable "saved metrics" are enterprise-gated, but experiment
creation, the stats engines themselves (Bayesian + frequentist + sequential), CUPED, and the
result-interpretation skills are all core MIT**. This is a meaningfully different split than
"experimentation = enterprise" — worth being precise about if the growth-skill router ever cites
PostHog as an example of an open experimentation stats engine.

Sources: `gh api "/repos/PostHog/posthog/git/trees/master?recursive=1"` and
`gh api /repos/PostHog/posthog/contents/<path>` for each file above (2026-08-01).

### PostHog's experimentation product — what it actually implements

Code paths (`gh api` tree search, 2026-08-01), confirmed by reading file headers:

- `products/experiments/stats/bayesian/method.py` — docstring: "Main BayesianMethod class for
  A/B testing... primary API for running Bayesian statistical tests on A/B experiment data, with
  support for various prior configurations and difference types." Uses `GaussianPrior`,
  `BayesianProportionTest`, `BayesianMeanTest`, `BayesianGaussianTest`, credible intervals
  (`ci_level: float = 0.95`).
- `products/experiments/stats/frequentist/method.py` — implements `TwoSidedTTest` **and**
  `SequentialTwoSidedTTest` (confirms **sequential testing is real, shipped code**, not just
  marketing copy), `alpha: float = 0.05` default, a `sequential_testing_enabled` flag and
  `sequential_tuning_parameter`.
- `products/experiments/backend/hogql_queries/cuped_config.py` + `experiment_cuped_query_builder.py`
  — **CUPED is implemented**, confirming controller-canon's belief.
- `products/experiments/backend/analysis_health.py` — defines
  `MULTIPLE_VARIANT_BIAS_THRESHOLD` (fires the in-app bias-warning banner above 0.1% `$multiple`
  exposure share).
- `frontend/src/scenes/experiments/ExperimentView/sequential.ts`,
  `frontend/src/scenes/settings/environment/DefaultSequentialTestingEnabled.tsx`,
  `DefaultSequentialTuningParameter.tsx` — sequential testing is a first-class, user-facing
  team-level setting, not buried internal code.

**PostHog's docs are, as controller-canon predicted, genuinely a stats textbook** — this is not
folklore, it is grep-verified against shipped code. The clearest evidence is a set of
agent-facing "skills" files shipped in-repo at `products/experiments/skills/*/SKILL.md` (PostHog
builds its own internal MCP/agent tooling on top of its product — these are PostHog's own agent
instructions, not ours, but they double as some of the most precise experimentation-methodology
prose found anywhere in this survey):

- `products/experiments/skills/diagnosing-experiment-results/references/interpretation.md` —
  numbered pitfall catalogue: **C1 Peeking/early stopping, C2 Low-volume variance, C3 A/A test
  showing significance, C4 Multiple comparisons (no correction), C5 Bayesian interpretation
  traps, C6 Frequentist interpretation traps, C7 Bayesian-vs-Frequentist confusion, C8
  Inconclusive-but-trending, C9 "Significance reached" is not a ship signal, C10 Ship-variant
  default ignores metric result, C11 External calculator disagrees.**
  Verbatim on peeking: *"Watching results live and ending the experiment the moment it looks
  significant inflates false positives — you're giving randomness more chances to look
  significant."* And on the arbitrariness of α=0.05: *"Don't treat 0.05 as a hard cliff. It's a
  convention, not a meaningful threshold by itself."*
  Verbatim on multiple comparisons: *"PostHog does not apply multiple-comparisons correction"* —
  an explicit, honest limitation disclosure.
- `products/experiments/skills/diagnosing-experiment-results/references/bias-and-skew.md` —
  catalogue: **A1 Multi-variant exclusion bias on uneven split, A2 Sample ratio mismatch (SRM),
  A3 Identity fragmentation, A4 Bootstrap × `/decide` variant disagreement, A5 Flag/experiment
  state inconsistency, A6 Mid-run flag edits rebucketing exposed users, A7 Non-randomized
  assignment via release conditions, A8 distinct_id migration mid-run.**
  Verbatim SRM mechanism: *"PostHog runs a chi-squared test once total exposures ≥ 100 and flags
  SRM at p < 0.001."* This confirms SRM is implemented as a real automated gate, not just
  documented advice, and gives an exact, sourced threshold (p < 0.001) rather than the more
  common p < 0.001-or-0.01 folklore range — worth carrying forward as a **verified** number, not
  a claim needing re-verification, since it is read directly from first-party docs describing
  shipped code, dated 2026-08-01.
- `products/experiments/skills/creating-experiments/SKILL.md` — "Stats default to Bayesian. Only
  set `stats_config` if the user requests Frequentist" — confirms Bayesian is the PostHog default,
  frequentist is opt-in (contrast with Kohavi-canon industry, which is frequentist-default;
  worth flagging as a genuine methodological difference, not an error).

Sources: all under `products/experiments/` and `products/feature_flags/` at
`raw.githubusercontent.com/PostHog/posthog/master/...` (2026-08-01).

### PostHog's internal "rollout" vs "experiment" vocabulary — does PostHog itself draw the seam?

**No explicit "when to use a rollout vs an experiment" doc section was found.** Two WebFetch
probes against posthog.com docs pages returned negative results:

- `posthog.com/docs/experiments/common-questions` (fetched 2026-08-01): "there is no explicit
  distinction drawn between feature flag rollouts and A/B experiments... the document never
  discusses using feature flags for simple progressive rollouts or kill switches."
- `posthog.com/docs/feature-flags/creating-feature-flags` (fetched 2026-08-01): "The provided
  content does not include explicit comparisons using terms like 'canary,' 'kill switch,'
  'progressive rollout,' 'hypothesis,' or 'statistical significance'... The documentation treats
  feature flags and experiments as related but separate tools... though it doesn't provide
  explicit guidance on when to choose one over the other."

Inside the repo, PostHog's own in-product "rollout" vocabulary is nested *inside* the experiment
flow rather than opposed to it: the `configuring-experiment-rollout` SKILL.md governs "the
rollout shape of a PostHog experiment — the variant split... the overall rollout percentage that
gates how many users enter the experiment." I.e., **within PostHog's own product model, "rollout"
is a sub-parameter of an experiment (how much traffic + what split), not a separate,
opposed concept** — the same word is doing double duty industry-wide, and PostHog's own docs are
a clean example of the ambiguity rather than a resolution of it. See §7 for the cross-repo
synthesis.

**Terminology footnote — "canary" inside PostHog means something else entirely.** Two files use
"canary" for **internal system-health self-checks on PostHog's own computation pipeline**, not
progressive-rollout-to-users:
- `products/experiments/backend/temporal/canary_logic.py` — docstring: "Experiment precompute
  canary: detects broken or unstable precomputed experiment results in production... production
  observation is the point of the canary" — this is PostHog canarying its *own ClickHouse
  read-consistency*, unrelated to user-facing rollout.
- `products/feature_flags/backend/canary.py` — docstring: "Canary for feature-flags local
  evaluation. Builds a configured team's local-eval payload on a schedule and checks that its
  `group_type_mapping` is non-empty..." — again, an internal correctness monitor, not a
  progressive user rollout.
Neither of these is the "canary release" pattern (operate-canonical meaning); both are SRE-style
synthetic-monitoring canaries on PostHog's own infra. Flagging so the growth-skill router doesn't
mistake this for evidence of PostHog explicitly modeling progressive-rollout-canaries as an
experiment concept.

---

## 4. Rollout-vs-learning framing — verbatim quotes, repo by repo

This section collects the direct textual evidence for the seam question, organized from
cleanest-rollout to cleanest-learning to explicitly-both.

**Unleash — cleanest pure-rollout framing found.**
> "Unleash is a powerful open-source solution for feature management. It streamlines your
> development workflow, accelerates software delivery, and empowers teams to control **how and
> when they roll out new features** to end users... reducing the risk of negatively impacting
> your users' experience."
(README, `Unleash/unleash`, fetched 2026-08-01.) Zero occurrences of "experiment," "A/B," "test,"
"hypothesis," or "statistical" anywhere in the README (`grep -iE` search against the full README
text, 2026-08-01) — this is the single cleanest, most consistent rollout-only framing in the
survey; Unleash makes no experimentation claim at all.

**Flipt — explicit kill-switch quote.**
> "Flipt supports use cases such as:
> - Enabling trunk-based development workflows
> - Testing new features internally during development before releasing them fully in production
> - **Ensuring overall system safety by guarding new releases with an emergency kill switch**
> - Gating certain features for different permission levels...
> - Enabling continuous configuration by changing values during runtime without additional
>   deployments"
(README, `flipt-io/flipt`, fetched 2026-08-01.) No experiment/hypothesis/statistical-significance
language in the use-cases list at all — Flipt's README frames itself entirely as release-safety
and DevOps tooling ("separate releases from deployments").

**Flagsmith — rollout-first, experimentation as a thin claimed bullet.**
> "Roll out, segment, and optimise—with granular control... A/B testing: Use segments to run A/B
> and multivariate tests on new features."
(README, `Flagsmith/flagsmith`, fetched 2026-08-01.) "A/B testing" is one bullet among seven
feature-toggle-centric bullets; no hypothesis, significance, sample-size, or randomization
vocabulary appears anywhere in the README (verified by grep, 2026-08-01) — the claim is present
but textually thin, consistent with "segment-based targeting relabeled as testing" rather than a
stats-validity product.

**GO Feature Flag — the single cleanest textual conflation of the two concepts found anywhere
in this survey.** The README's own "Rollout" section header directly subsumes experimentation as
one of four rollout *strategies*:
> "## Rollout
> A critical part of every new feature release is orchestrating the actual launch schedule
> between the Product, Engineering, and Marketing teams... having a complex **rollout** strategy
> allows you to have a lifecycle for your flags.
> ### Complex rollout strategy available
> - Percentages rollout - impact randomly a subset of your users.
> - Progressive rollout - increase the percentage of your flag over time.
> - Scheduled rollout - update your flag over time.
> - **Experimentation rollout** - serve your feature only for a determined time *(perfect for
>   A/B testing)*."
And earlier in the same README: "Use a complex rollout strategy for your flags: [bullet] Run A/B
testing experimentation. [bullet] Progressively rollout a feature. [bullet] Schedule your flag
updates." (README, `thomaspoignant/go-feature-flag`, fetched 2026-08-01.) There is no daylight
here at all between "rollout" and "experiment" — A/B testing is literally taxonomized as a kind of
rollout strategy, on equal footing with a scheduled config update.

**Bucketeer — both, explicitly fused as a lifecycle continuum, with real Bayesian stats
underneath.**
> "Enterprise-Grade Feature Management & **Experimentation** Platform"... "Advanced features, zero
> licensing costs: Get **progressive rollouts, Bayesian experimentation**, automated operations...
> **Split Audience Rollouts:** Run nested experiments—e.g., 50/50 A/B test on just 5% of traffic
> for ultimate control"... "**Experiment Lifecycle Management:** Seamlessly transition from
> experiment to full rollout."
(README, `bucketeer-io/bucketeer`, fetched 2026-08-01.) Bucketeer is the vendor most explicit
about treating rollout and experiment as one continuous lifecycle rather than two concepts —
"transition from experiment to full rollout" is a workflow verb, not a warning. It backs this with
real methodology, not just marketing: "Bayesian statistical analysis delivers faster, more
accurate results with smaller sample sizes compared to traditional frequentist approaches" and a
"Real-time Results: Monitor experiment performance with live statistical significance
calculations" feature.

**Optimizely — the cleanest first-party *separation*, by product name, found anywhere in this
survey** (contrast with GO Feature Flag/Bucketeer above, which fuse the concepts):
> "Optimizely **Feature Experimentation** is an A/B testing and feature management tool for
> product development teams that enables you to experiment at every step... Optimizely
> **Rollouts** is free feature flags for development teams. You can easily roll out and roll
> back features in any application without code deploys, **mitigating risk** for every feature on
> your roadmap."
(README, `optimizely/python-sdk`, fetched 2026-08-01; identical language is repeated across
java-sdk, javascript-sdk, go-sdk, ruby-sdk, swift-sdk, csharp-sdk, php-sdk READMEs, all part of the
same Feature-Experimentation-vs-Rollouts family.) This is the one vendor in the survey that put
**separate product names** on the two sides of the seam, with the risk-containment framing
("mitigating risk") explicit on the rollout side and the learning framing ("experiment at every
step") explicit on the other.

**LaunchDarkly — implicit sequencing, not an explicit "vs" section.** Per WebFetch against
launchdarkly.com/docs/home/experimentation (2026-08-01): "the document discusses experimentation
capabilities—such as A/B/n testing, A/A testing, and multi-armed bandits—but does not contrast
these with standard flag rollouts... it mentions 'If an experiment tells you a feature has
positive impact, you can roll that feature out to your entire user base,' [describing] a
workflow sequence rather than a distinction." No hypothesis/statistical-significance/
randomization/canary/kill-switch language found in that page's fetched content. LaunchDarkly does
operationally separate the two (Experimentation is a distinct, separately-licensed add-on product
in their commercial catalogue — not verifiable from OSS repos alone, noted as **UNTRACED for this
worker's evidence**, would need a pricing-page check outside GitHub scope).

**PostHog** — see §3 above for the full treatment; summary: ships both under one product with a
single unified flag object, does not have an explicit "rollout vs experiment" doc section despite
having genuinely rigorous experimentation documentation once inside the Experiments product.

---

## 5. OpenFeature spec — does it model experimentation at all?

**No — by design, and the spec is explicit about the boundary.** Cloned `open-feature/spec`
(`git clone --depth 1`, 2026-08-01) and read `specification/glossary.md`,
`specification/sections/06-tracking.md`, and the root `README.md` directly.

- The **glossary** (`specification/glossary.md`) defines: Feature Flag, Flag Set, Flag Key,
  Variant, Values, Targeting, Targeting Key, **Fractional Evaluation**, Rule, Evaluation Context,
  Provider, Domain, Tracking Event. There is **no glossary entry for "experiment," "hypothesis,"
  "randomization guarantee," "sample size," "significance," or "assignment."**
- **Fractional Evaluation** is the closest concept to PlanOut-style random assignment, and it is
  defined narrowly as a mechanic, not an experiment concept: *"Pseudorandomly resolve flag values
  using a context property, such as a targeting key, based on a configured proportion or
  percentage (ie: 50/50)."* No mention of deterministic-hash-with-salt, no namespace/mutual-
  exclusion concept, no exposure-logging requirement bound to this mechanic — it is purely "split
  traffic by percentage," stripped of PlanOut's experiment-scoping apparatus (see §6).
- The **Tracking API** (`specification/sections/06-tracking.md`) is the spec's only nod toward
  experimentation, and it is explicitly marked **experimental status** (not stable) and explicitly
  scoped as thin plumbing, not a model of experiment design:
  > "The `tracking API` enables the association of feature flag evaluations with subsequent
  > actions or application states, **in order to facilitate experimentation and analysis of the
  > impact of feature flags on business objectives**. Combined with hooks which report feature
  > flag evaluations to the analytics platform in question, tracking can allow for robust
  > experimentation even for flag management systems that don't support tracking directly."
  Its actual technical content is a single `track(eventName, context, details)` function
  signature with an optional numeric `value` field — i.e., "let the SDK emit a business-outcome
  event correlated to a flag evaluation." The spec makes **no claims and no requirements about
  randomization guarantees, statistical readout, exposure/assignment logging semantics, or metric
  definitions** — all of that is left entirely to whatever provider (GrowthBook, Statsig, Eppo,
  LaunchDarkly, etc.) implements the analysis behind the scenes.
- Root `README.md` design principles confirm the intentional scope limit: "The OpenFeature SDK
  provides a mechanism for interfacing with an external evaluation engine... it does **not**
  itself handle the flag evaluation logic" — the spec is a pure *evaluation-API* abstraction layer.

**Conclusion for the growth-vs-operate seam**: OpenFeature is unambiguously an **operate/rollout-
safety abstraction** (vendor-neutral flag evaluation, provider swapping, targeting, fractional
rollout) with a thin, experimental-status escape hatch (`track()`) that a growth/experimentation
layer can be built on top of, but the spec itself does not model experiment assignment,
statistical analysis, or hypothesis structure at all. This is directly load-bearing evidence that
the CNCF's own vendor-neutral standard draws the line exactly where the charter's seam
hypothesis predicts: flag evaluation lives in one abstraction (operate-adjacent), experiment
design/readout is left to a separate, un-standardized layer (growth's territory).

Sources: `open-feature/spec` cloned 2026-08-01 (commit at clone time, `main` branch, depth 1);
files read directly at `specification/glossary.md`, `specification/sections/06-tracking.md`,
`README.md`.

---

## 6. LINEAGE MAP — PlanOut → modern platforms

### PlanOut itself (`facebookarchive/planout`, the OG)

- **Identity**: `gh api /repos/facebookarchive/planout` (2026-08-01) — 1,689 stars, 217 forks,
  **archived: true**, last push **2021-03-19**. (Note: `facebook/planout` redirects to/is the
  same underlying repo now under the `facebookarchive` org — confirmed both queries return
  identical `full_name: facebookarchive/planout`, same push date.)
- **License**: `LICENSE` (root, read directly): **BSD License**, "Copyright (c) 2014, Facebook,
  Inc." — standard 3-clause BSD. A second license file exists at `alpha/ruby/LICENSE` (the
  incomplete Ruby port, not separately read — same BSD family per repo convention). GitHub API
  reports `NOASSERTION` despite this being an unambiguous, standard BSD grant — a fourth instance
  in this survey of the API failing on non-ambiguous cases.
- **Paper**: Bakshy, Eckles, Bernstein, "Designing and Deploying Online Field Experiments," WWW
  2014 (arXiv:1409.3174) — cited directly in the repo's own README with the canonical BibTeX
  entry, confirming the paper-to-code link is first-party, not folklore.
- **What it actually did** (read directly from README.md and `python/planout/`, cloned
  2026-08-01):
  - A **language/DSL**, not just a library: developers subclass `SimpleExperiment` and write an
    `assign(params, unit)` method using PlanOut operators (`UniformChoice`, `WeightedChoice`,
    etc.) — "PlanOut takes care of randomizing each `userid` into the right bucket. It does so by
    hashing the input, so each `userid` will always map onto the same values for that experiment."
  - **Deterministic hashing with salt**: the runtime "automatically concatenate[s] the name of the
    experiment... the variable name, and the input data (`userid`) and hash[es] that string" —
    every assignment call is logged with an explicit `salt` field (`'salt': 'FirstExperiment'` in
    the README's own worked example output).
  - **Namespaces for mutual exclusion / orthogonal experiment slots**: `python/planout/namespace.py`
    (read directly) defines an abstract `Namespace` base class with `add_experiment(name,
    exp_object, num_segments, ...)`, a `segment_allocations` dict mapping traffic segments to
    experiment names, and required methods `log_exposure()` / `log_event()` — i.e., namespaces
    partition a traffic pool into segments, assign each segment to at most one experiment, and
    make exposure logging a first-class runtime obligation, not an afterthought.
  - Ships a reference Python implementation plus **production-ready** ports for Java, JavaScript,
    and PHP (in `java/`, `js/`, `php/`), and an explicitly labeled **`alpha/`** directory (Go,
    Julia, Ruby) that the README itself calls "under development" — i.e., those three never
    graduated out of alpha before the project was archived.
  - README explicitly targets a small-scale audience, not just Facebook-internal use: "PlanOut
    [is] designed for researchers, students, and small businesses wanting to run experiments...
    The implementation here mirrors many of the key components of Facebook's Hack-based
    implementation of PlanOut which is used to conduct experiments with hundreds of millions of
    users" — i.e., PlanOut was explicitly released as a small-scale-usable version of a
    hyperscale-proven design, directly relevant to the charter's small-sample-honesty wedge
    hypothesis (this is folklore-adjacent framing from Facebook's own README, not an independent
    verification that small teams actually used it successfully — flagged as such).

### Descendants and ports — what survived, what died

| project | status (as-of 2026-08-01) | notes |
|---|---|---|
| `facebookarchive/planout` (core) | **Archived**, last push 2021-03-19 | The OG; language + Python reference implementation. Dead upstream, but concepts (below) propagated. |
| Java, JS, PHP ports (in-repo, `java/`, `js/`, `php/`) | Bundled inside the same archived repo, share its archived/dead status | Never split into independently maintained repos; died with the parent. |
| Go, Julia, Ruby ports (in-repo, `alpha/`) | Never graduated past "alpha" per the README's own label | Died in alpha; no independent survival found. |
| `Glassdoor/planout4j` (Java port with extras) | **Not archived** per API, but **dormant** — last push 2022-12-14, 120 stars | License file present (`LICENSE.txt` per tree search) but not resolvable via API (`NOASSERTION`) — content not independently re-fetched this pass (dormant repo, low priority; flag as **UNTRACED license text**, only the API's NOASSERTION and the file's existence are confirmed). The clearest concrete PlanOut-concept "survivor" repo found, even though inactive. |
| `intuit/wasabi` | **Not archived** per API (own README/description says "no longer under active development or being supported" — a repo can be functionally dead without GitHub's `archived` flag being set; this is itself worth flagging as a general lesson: don't trust `archived:false` as "alive") — last push 2023-05-26, Apache-2.0, 1,140 stars | Does NOT use PlanOut's language/DSL approach; independent bucket/assignment architecture (see below). Grouped in the lineage as a peer historical A/B platform, not a PlanOut descendant. |
| `zalando/expan` | **Not archived** per API, same "functionally dead but flag not set" pattern — last push 2023-04-11, MIT, 344 stars | Pure analysis library (no assignment/bucketing at all) — complements rather than descends from PlanOut. |
| `seatgeek/sixpack` | Not archived, but dormant — last push 2022-08-21, BSD-2-Clause, 1,754 stars | Language-agnostic A/B testing framework (HTTP API + client libraries), independent lineage, not PlanOut-derived. |
| `assaf/vanity` (Ruby) | **Archived**, last push 2023-03-16, MIT, 1,531 stars | "Experiment Driven Development for Ruby" — independent lineage. |
| `splitrb/split` (Ruby, Rack-based) | **Actively alive** — last push 2026-07-27 (i.e., days before this research date), MIT, 2,709 stars | The one clear **survivor** among the Ruby-ecosystem A/B tools; still receiving commits in 2026. Independent lineage (Rack middleware pattern), not a PlanOut port. |

### What concepts survived from PlanOut into the modern tier, what died, what got renamed

- **Deterministic hashing on unit ID + salt → survived everywhere, universally, as the basic
  bucketing primitive.** Every modern tool in this survey (Unleash, Flagsmith, PostHog, Flipt, GO
  Feature Flag, Bucketeer, Optimizely, LaunchDarkly) implements some form of hash(unit_id +
  flag/experiment_key) → variant. OpenFeature's glossary term for this is **"Fractional
  Evaluation"** — same mechanic, renamed, and stripped of the explicit "salt" vocabulary (the spec
  never uses the word "salt" — confirmed absent from `glossary.md` and `sections/01-flag-
  evaluation.md`'s visible content during this pass).
- **Namespaces / mutual exclusion of experiment slots → weakened or disappeared as an explicit
  primitive in most modern tools.** PlanOut's `Namespace` class with `num_segments` and
  `segment_allocations` has no direct equivalent surfaced in any of Unleash/Flagsmith/Flipt/GO
  Feature Flag/Bucketeer's public docs/READMEs read this pass. PostHog's closest analogue is
  **holdout groups** (`ee/clickhouse/views/experiment_holdouts.py`) — a different, narrower
  mechanism (a persistent control slice held out across many experiments) rather than PlanOut's
  general-purpose orthogonal-slot partitioning of *all* traffic across *many concurrent*
  experiments. This looks like a genuine capability regression/renaming in the modern OSS tier
  worth flagging to the controller as a possible wedge: **orthogonal experiment-slot management
  (avoiding interaction effects between concurrent experiments) is not a first-class, clearly
  documented feature in any of the modern OSS tools surveyed here** — it may survive in
  commercial platforms (Statsig, Eppo — outside this worker's GitHub scope, flag for D/B channels
  to verify) but is not visible in the OSS README/doc layer.
- **Automatic exposure logging as a language-level obligation → survived, renamed as "exposure
  events"/"analytics events," now implemented at the product layer rather than the language
  runtime.** PlanOut's `namespace.log_exposure()` is directly echoed in PostHog's Exposures tab
  and SRM-check machinery (`products/experiments/backend/analysis_health.py`), and in every
  modern platform's requirement that an SDK "call track/expose" to log who saw what.
  Conceptually identical; institutionally moved from "part of the assignment language" to "part
  of the analytics product."
- **The DSL-as-language idea (PlanOut had its own compiler/interpreter, "PlanOut language
  scripts") → died.** No modern tool surveyed ships a dedicated experiment-configuration
  *language* with its own compiler the way PlanOut did (`compiler/` directory, PlanOut-language
  scripts, an interactive web editor). Modern tools use JSON/YAML rule configs (GO Feature Flag:
  "Configuring your flags in various format (JSON, TOML and YAML)") or UI-driven rule builders
  instead of a bespoke DSL. This is a real, verifiable "died" — not renamed, genuinely abandoned
  as an approach industry-wide.
- **Statistical readout / experiment analysis was never PlanOut's job to begin with** — PlanOut is
  purely an assignment layer; ExpAn and Wasabi (below) fill that gap in the historical lineage,
  and the modern equivalents (PostHog's stats engines, Statsig, Eppo per controller-canon) do the
  same job today, now bundled into the same product as assignment rather than kept as a separate
  library.

### Wasabi (Intuit) — the graveyard, in detail

- **Identity**: `gh api /repos/intuit/wasabi` (2026-08-01) — 1,140 stars, 237 forks, **archived:
  false** (per API), last push **2023-05-26**. The repo's own GitHub description string is
  self-aware about its dead status even though the `archived` boolean was never flipped: *"Wasabi
  A/B Testing service is an open source project that is no longer under active development or
  being supported."* — a direct textual confirmation that `archived:false` cannot be trusted as a
  liveness signal; the maintainers state deadness in prose without using GitHub's archive
  mechanism.
- **License**: `LICENSE` (root, read via curl raw content, 2026-08-01): Apache License 2.0.
  Matches API field.
- **What it taught** (README, fetched 2026-08-01): a real-time, "100% API-driven" enterprise A/B
  testing service, "battle-tested in production at Intuit... for TurboTax, QuickBooks, Mint.com,"
  claiming "consistent server-side response times for user assignments within 30ms." Vocabulary
  throughout is pure experimentation/A/B language — "buckets," "experiments," "segmentation
  rules," "experiment analytics and metrics visualization" — with **zero** rollout/canary/kill-
  switch vocabulary anywhere in the README (verified by inspection, 2026-08-01). Wasabi is a
  clean, unambiguous LEARNING-framed tool, architecturally independent of PlanOut (own
  Java-based bucket-assignment architecture under `modules/assignment-objects/`,
  `modules/analytics-objects/`, not a PlanOut port or derivative).
- First-party blog posts referenced directly in the README (not independently re-verified this
  pass, cited as pointers for D/B channels): "Open-sourcing Wasabi: the A/B testing platform by
  Intuit" and "The architecture behind Wasabi" on Intuit's Medium/Blueprint blog.

### ExpAn (Zalando) — the analysis-library graveyard entry, in detail

- **Identity**: `gh api /repos/zalando/expan` (2026-08-01) — 344 stars, 49 forks, **archived:
  false** (per API, same "dead but not flagged" pattern as Wasabi), last push **2023-04-11**.
- **License**: `LICENSE` (root, read via curl raw content, 2026-08-01): MIT License, "Copyright ©
  2016 Zalando SE." Matches API field.
- **What it is** (README.rst, fetched 2026-08-01): "ExpAn (**Exp**eriment **An**alysis) is a
  Python library developed for the statistical analysis of [A/B tests / RCTs] and to standardise
  the data structures used." Explicitly a pure analysis library — no assignment/bucketing
  component at all, complementary to (not competing with) an assignment tool like PlanOut or
  Wasabi.
- **Statistical methods actually encoded** (verified by reading source files directly, not just
  the README — `gh api` tree search + `curl raw.githubusercontent.com`, 2026-08-01):
  - `expan/core/early_stopping.py` implements **group-sequential testing via the O'Brien-Fleming
    alpha-spending function**, read directly from the docstring: *"Calculate an approximation of
    the O'Brien-Fleming alpha spending function... redistributed alpha value at the time point
    with the given information fraction"* (`obrien_fleming(information_fraction, alpha=0.05)`) —
    this is the classical group-sequential peeking-fix, textbook alongside (but distinct from
    and earlier-generation than) Optimizely's always-valid-p-values approach. The same file also
    imports `pystan` (`from pystan import StanModel`) confirming a **Bayesian early-stopping
    path** is also implemented, not just the frequentist group-sequential one.
  - `expan/core/correction.py` implements **multiple-comparisons correction**: both
    `benjamini_hochberg(false_discovery_rate, original_p_values)` and `bonferroni(...)`, read
    directly — confirms ExpAn treats multiple-testing correction as a first-class concern (a gap
    PostHog's own docs explicitly disclose as *not* handled — see §3).
  - `expan/core/statistics.py` implements, confirmed by function-name grep of the source:
    `delta` / `_delta_mean` (delta method for ratio metrics), `sample_size` and
    `estimate_sample_size(x, mde, r, alpha, beta)` (power/MDE calculation — directly relevant to
    the charter's power-math/small-sample wedge), `bootstrap(...)`, `chi_square(observed_freqs,
    expected_freqs, ddof)` (an SRM-style chi-squared test primitive), and standard
    `compute_p_value` / `compute_statistical_power` helpers.
  - **Net assessment**: ExpAn is a genuinely rigorous, methodologically serious analysis library —
    group-sequential AND Bayesian early stopping, delta-method ratio metrics, bootstrap CIs,
    explicit MDE/power calculation, multiple-comparison correction, and a chi-squared primitive
    usable for SRM — all confirmed present in source, not just claimed in docs. It predates (2016)
    and substantively anticipates several things PostHog's 2025-vintage stats engine now does
    natively (§3). Zalando published first-party blog/conference material on ExpAn per its own
    README pointers to tech.zalando.com (not independently re-fetched this pass — flag as a
    pointer for D-channel to pick up if useful, not verified content).

### Other graveyard/adjacent entries swept (lighter touch, gh api identity only)

| repo | stars | archived | last push | license (API) | note |
|---|---|---|---|---|---|
| `seatgeek/sixpack` | 1,754 | false | 2022-08-21 | BSD-2-Clause | Language-agnostic A/B testing framework, dormant since 2022; independent lineage. |
| `assaf/vanity` | 1,531 | **true** | 2023-03-16 | MIT | "Experiment Driven Development for Ruby," formally archived. |
| `splitrb/split` | 2,709 | false | **2026-07-27** | MIT | Genuinely alive, actively maintained Rack-based A/B testing framework — the one clear ecosystem survivor found in this sweep. |

Airbnb ERF, LinkedIn XLNT/T-REX, and Netflix's internal experimentation platforms: **no
open-source repos found for any of these** under the obvious org names/searches performed this
pass (not exhaustively searched — this worker prioritized the named charter targets given the
WebSearch budget constraint; flag as an open question for D-channel, which covers the company
engineering-blog literature and can confirm via first-party posts whether these were ever
open-sourced at all versus purely described in blog posts/papers).

---

## 7. Growth-vs-operate seam — evidence table + synthesis

### Evidence table (condensed from §4, with the verdict axis made explicit)

| repo/spec | explicit "canary/kill-switch/progressive-rollout" language? | explicit "experiment/hypothesis/statistical-significance" language? | explicit "rollout ≠ experiment" warning or dedicated doc section? | verdict |
|---|---|---|---|---|
| Unleash | Implicit only (feature management, risk reduction — no literal "canary"/"kill switch" found) | **None found** | N/A (no experimentation claim to disambiguate from) | Pure rollout |
| Flipt | **Yes** — "emergency kill switch" verbatim | None found in use-cases list | N/A | Pure rollout |
| Flagsmith | Implicit (segmentation, granular control) | Thin — "A/B testing" as one bullet, no stats vocabulary | No | Rollout-primary, thin learning claim |
| GO Feature Flag | Yes — "progressive rollout," "kill switch" not found but "rollout" is the umbrella term | Yes — but **nested inside** rollout taxonomy ("Experimentation rollout") | **No — the opposite: explicitly merges them** | Both, actively fused |
| Bucketeer | Yes — "progressive rollouts" | Yes — "Bayesian experimentation," "statistical significance calculations" | No — "seamlessly transition from experiment to full rollout" (continuum framing) | Both, actively fused |
| Optimizely | Yes — "Rollouts... mitigating risk" | Yes — "Feature Experimentation... experiment at every step" | **Yes — by product naming**, though not by an explicit prose warning | Both, cleanly *separated* by product brand |
| LaunchDarkly | Not found in fetched OSS-SDK content (would need commercial docs) | Yes (per docs page fetch) — A/B/n, A/A, multi-armed bandits | Implicit sequencing only ("if an experiment tells you... roll that out") | Both, sequenced but not explicitly contrasted |
| PostHog | "Canary" present but means internal system self-check, not user rollout (§3) | Yes, extensively — the most rigorous stats documentation found in this survey | **No dedicated section found** (two WebFetch probes both returned negative) | Both, under one roof, undifferentiated in docs |
| OpenFeature spec | Implicit (fractional evaluation = rollout mechanic) | Minimal — only the experimental-status `track()` hook, no assignment/stats model | N/A — spec explicitly stays out of experimentation semantics entirely (§5) | **Deliberately rollout/evaluation-only by design** |
| PlanOut (historical) | Not applicable — pre-dates "canary"/flag-safety framing entirely | Yes — the OG, purpose-built for "online field experiments" | N/A (single-purpose tool) | Pure learning, historically |
| Wasabi (historical) | None found | Yes — pure "A/B Testing Platform" vocabulary throughout | N/A | Pure learning, historically |
| ExpAn (historical) | N/A — analysis-only, no assignment/rollout capability | Yes — the most methodologically rigorous historical entry (group-sequential + Bayesian early stopping, MDE/power, multiple-comparison correction) | N/A | Pure learning, historically, and analysis-only |

### Synthesis — where the industry actually draws the line (or fails to)

1. **The single sharpest, most explicit first-party separation in this entire survey is
   Optimizely's product naming**: "Feature Experimentation" (learning, risk-seeking — "experiment
   at every step") vs. "Rollouts" (risk containment — "mitigating risk... roll out and roll
   back"). This is the strongest evidence found anywhere for the charter's stated seam ("a canary
   is risk containment, an A/B test is learning, same infra, opposite intent") — a real vendor
   independently arrived at, and *branded*, exactly that distinction, on top of literally the same
   SDK.

2. **The two purest single-purpose OSS tools (Unleash for rollout, Wasabi/PlanOut historically for
   learning) never use the other side's vocabulary at all** — zero cross-contamination. This
   suggests the seam is real and legible at the extremes: a tool that commits to being *only*
   about safe release engineering doesn't reach for experiment language, and a tool that commits
   to being *only* about experimentation doesn't reach for kill-switch/canary language.

3. **The middle of the market (GO Feature Flag, Bucketeer, PostHog, and to a lesser extent
   Flagsmith and LaunchDarkly) actively merges the two, and the merging is not accidental — it is
   a deliberate product/architecture choice, usually justified by "you already have the flag
   infrastructure, so layering an experiment on top is nearly free."** GO Feature Flag goes
   furthest, literally nesting "Experimentation rollout" as a sub-type of "rollout strategy" in its
   own information architecture. Bucketeer frames it as a lifecycle ("transition from experiment
   to full rollout"). Neither treats the fusion as a problem to be warned about — the charter's
   hypothesis that "many ship both" is strongly confirmed, but the stronger, more specific finding
   is that **none of the merged tools contains an explicit "here's the difference and here's why
   it matters" doc section** — not even PostHog, whose experimentation documentation is otherwise
   the most rigorous artifact in this whole corpus. Two independent WebFetch probes against
   PostHog's own docs came back negative for exactly this section.

4. **OpenFeature — the one body positioned to arbitrate the seam neutrally across the whole
   industry — resolves it by scope exclusion, not by explicit doctrine.** The CNCF spec doesn't
   say "rollouts and experiments are different, use X for one and Y for the other." It simply
   never models experimentation at all beyond a thin, explicitly-experimental-status `track()`
   hook, leaving the entire assignment-guarantee/statistical-readout question to be solved
   independently, and differently, by every provider that implements the spec. This is arguably
   the most important structural finding for a growth-skill router: **there is no vendor-neutral
   standard for what "experiment" means at the infrastructure layer** — the growth pack cannot
   assume any shared, industry-agreed contract exists between "flag evaluated" and "experiment
   assignment logged with randomization guarantees." Each platform (GrowthBook, Statsig, Eppo,
   PostHog, Optimizely) invents its own.

5. **Practical implication for the growth/operate split the charter is drawing**: the industry
   evidence supports the charter's seam as a *useful analytical distinction the family should
   draw explicitly*, precisely because **the industry itself mostly fails to draw it**, or draws
   it only by accident of product branding (Optimizely) rather than by doctrine. A growth-skill
   reference that states plainly "a flag rollout is not an experiment unless it has a
   pre-registered hypothesis, randomized/salted assignment, a defined metric readout, and a
   validity check (SRM, sample-ratio, guardrails)" would be filling a real, evidenced gap — not
   restating something the ecosystem already teaches clearly. The one first-party document that
   comes closest to teaching this distinction rigorously (PostHog's `interpretation.md` and
   `bias-and-skew.md` skill references) does so entirely *within* the assumption that you're
   already running an experiment — it never steps back to ask "should this even be an experiment,
   or just a flag?"

6. **A secondary, unplanned finding worth flagging to the controller**: "canary" as a word is
   genuinely overloaded even within a single repo. PostHog uses "canary" twice, both times for
   *internal infrastructure self-monitoring* (does our own precomputed experiment-results cache
   agree with a live query; is our own local-eval payload well-formed), not for the SRE-canonical
   "canary release" (progressive rollout to a subset of production traffic) meaning at all. If the
   growth or operate skill ever cites "canary" as a term of art, it's worth being precise that the
   word collides across at least three distinct meanings industry-wide: (a) canary release/
   progressive rollout (operate-canonical), (b) canary-in-the-coal-mine synthetic monitoring of
   your own systems (also operate, but a different mechanism — this is what PostHog's code does),
   and (c) — not observed in this survey, but implied by GO Feature Flag/Bucketeer's framing — a
   canary-sized *experiment* (small-percentage A/B test), which is really growth's "reduce
   rollout percentage to shrink sample size/blast radius," conceptually adjacent to but distinct
   from both (a) and (b).

---

## 8. Open questions / dead ends / things flagged for other channels

- **planout4j (Glassdoor)** — confirmed to exist, not archived, last push 2022-12-14, but its
  license file content was not independently re-fetched this pass (API returns NOASSERTION,
  `LICENSE.txt` confirmed present by tree search only). Low priority given dormancy, but flagging
  as **incomplete** rather than claiming a license.
- **Statsig, Eppo, GrowthBook** — explicitly out of this worker's Part A/B scope per the charter
  (owned by other C-channel workers per the charter's channel-C brief: "GrowthBook, Statsig SDKs,
  Eppo" are named alongside this worker's targets but not assigned to this specific brief — this
  worker's own task text scoped Part A to Unleash/Flagsmith/PostHog/OpenFeature/Optimizely/Flipt/
  GO-Feature-Flag/Bucketeer/LaunchDarkly only). If no other C-worker covers GrowthBook/Statsig/
  Eppo's license files and framing quotes with the same rigor applied here, that's a gap the
  sub-orchestrator (grw-github) should check for before synthesis.
- **Airbnb ERF, LinkedIn XLNT/T-REX, Netflix open experimentation repos** — no public repos found
  under obvious names in the searches performed; not exhaustively searched (would need broader
  `gh search repos` sweeps under airbnb/linkedin/netflix orgs with experimentation-related
  keywords, not done this pass due to time/budget allocation toward the charter's named targets).
  Flagged for D-channel (company engineering blogs) to confirm whether these were ever
  open-sourced at all, or exist only as papers/blog posts.
- **LaunchDarkly's commercial Experimentation product** — this worker only had GitHub-scope tools
  available; the claim that LD Experimentation is a separately-licensed paid add-on (distinct from
  the OSS SDKs) is standard industry knowledge but was **not independently verified against a
  pricing/product page this pass** — flagged as UNTRACED-for-this-worker, likely coverable by
  B/D channels which have broader web access budget.
- **Sixpack, Vanity, split** — identity (stars/archived/license via API) captured, but READMEs
  were not deep-read for framing quotes given time budget; all three are secondary/graveyard
  entries relative to the charter's named Wasabi/ExpAn/PlanOut targets, judged lower priority.
- **PostHog's `ee/` directory boundary vs. the experiments product** — worth double-checking at
  synthesis time that this worker's read (experiments product code is MIT, only holdouts +
  saved-metrics views are `ee/`-gated) still holds if PostHog ships new experiment features
  between this research date (2026-08-01) and whenever the growth-skill actually cites this — the
  `ee/` boundary is something PostHog could move at any time; this is a live-repo fact, not a
  historical one, and should be spot-checked again before shipping if there's a gap of more than
  a few weeks.
- **WebSearch budget**: 0 of the channel-C ≤15 allotment was used. Everything above came from
  `gh api`, `git clone --depth 1`, `curl raw.githubusercontent.com`, and two WebFetch calls each
  against posthog.com and launchdarkly.com doc pages. No 403s were encountered, so the
  charter's curl-UA-fallback instruction was never needed.
