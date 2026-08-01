# Channel A — lead slice (grw-skills sub-orchestrator's own research)

All findings as-of **2026-08-01**. Everything below was VERIFIED by me directly (cloned the repo and
read/grepped the files, or called `gh api` myself), not taken from a worker. Worker files:
`skills-registries.md` (A1), `skills-incumbent-deepread.md` (A2), `skills-deepwalk.md` (A3).

Clones live at
`/private/tmp/claude-501/-Users-tamas-Documents-Personal-Projects-digital-product-skill/6e26377a-a327-4398-9067-5e297b41c424/scratchpad/lead/`.

---

## 1. The niche-openness sweep — queries run and what came back

All via `gh api search/repositories` (no WebSearch spent). Query → total_count → notable hits.

| Query | total | Notable |
|---|---:|---|
| `growth+skill+claude` | 314 | All marketing/GTM packs; top = coreyhaines31/marketingskills 42,622★ |
| `experimentation+skill+claude` | 27 | Only tiny/personal repos; see §3 |
| `ab-testing+claude+skill` | 25 | Largest is sx4im/skillcheck 19★ (A/B tests *skills themselves*, not products) |
| `conversion+rate+optimization+skill+agent` | **0** | — |
| `retention+churn+claude+skill` | **0** | — |
| `product-led+growth+skill` | 3 | Largest 3★ (Luke2986/plg-gtm-expert) |
| `growth+skills+agent+SKILL.md` | 3 | Largest 1★ |
| `skills+claude+code+stars:>200` | 537 | Scanned top 60 by stars — **no dedicated growth/experimentation pack** |

**Two `total_count: 0` results** (`conversion rate optimization skill agent`, `retention churn claude
skill`) are genuine nulls on those exact phrasings — recorded because null results are evidence.

### The top-60-by-stars scan
I listed the 60 highest-starred "claude code skills" repos (537 matches). Growth-adjacent entries in
that band, all of them marketing- or PM-framed:
coreyhaines31/marketingskills (42,622★), phuryn/pm-skills (24,751★), AgriciDaniel/claude-seo (13,018★),
AgriciDaniel/claude-ads (7,749★), deanpeters/Product-Manager-Skills (6,173★), Eronred/aso-skills (1,700★),
gooseworks-ai/goose-skills (1,074★), OpenClaudia/openclaudia-skills (608★), rampstackco/claude-skills (508★).
**None is a growth/experimentation pack.** Every one is acquisition-channel, SEO/ads, or PM-process.

---

## 2. The two curated directories — both null for a dedicated growth pack

### anthropics/claude-plugins-official (32,944★ — the official Anthropic directory)
Cloned; 440 files. Grepped for `growth|experiment|a/b test|conversion|retention|churn|activation|funnel|
cohort|plg|referral`. **Every single hit is a false positive** — "activation" in the plugin-lifecycle
sense ("Define activation conditions", "hook activation", "Component lifecycle (discovery, activation)"),
"Experimental" as a stability label, "Plan for growth" about directory structure.
**Anthropic's official plugin directory contains zero growth/experimentation content** (verified
2026-08-01).

### VoltAgent/awesome-agent-skills (29,385★, self-described "1000+ agent skills")
Cloned; README is the index. Every growth-adjacent entry it lists belongs to a marketing or PM pack:
- `coreyhaines31/*` — ab-test-setup, churn-prevention, form-cro, onboarding-cro, page-cro, popup-cro,
  referral-program, signup-flow-cro (README.md:834-865)
- `phuryn/*` — ab-test-analysis, cohort-analysis (README.md:1147-1148), growth-loops, gtm-motions,
  north-star-metric (README.md:1173-1191)
- `deanpeters/*` — pol-probe, saas-revenue-growth-metrics (README.md:1095-1102)
- `realkimbarrett/*` — conversion-path-builder, performance-diagnosis (README.md:884-886)
- `sanity-io/content-experimentation-best-practices` (README.md:303) — vendor CMS content-testing
- `datadog-labs/dd-llmo-experiment-analyzer` (README.md:1020) — LLM eval, not product experimentation

**The largest curated skills directory in the ecosystem lists no dedicated growth or experimentation
pack.** Growth exists only as chapters inside marketing and PM packs.

---

## 3. The direct-niche repos — the idea exists, the distribution does not

These are the repos whose *whole subject* is experimentation/growth. I cloned and read all six.
Every one is MIT except webtrends (GPL-3.0). Stars re-verified individually via `gh api repos/<r>`.

| Repo | ★ | pushed | License (FILE, not API) | What it is |
|---|---:|---|---|---|
| shahriarfarzadi/run-ab-experiments-skill | **0** | 2026-07-22 | MIT (Shahriar Farzadi) | Serious Kohavi-grounded full A/B lifecycle skill — see §4 |
| LeihuaYe/claude-experimentation | **0** | 2026-06-14 | MIT (Leihua Ye) | Working Python stats: SRM/CUPED/BH/CATE — see §5 |
| brubinsztein/strategic-experimentation-coach | **0** | 2026-06-30 | MIT (Benjamin Rubinsztein) | Strategic hypothesis decomposition for PMs |
| RBraga01/builder-growth | **2** | 2026-06-17 | MIT (Ricardo Romão Marques Braga) | 14-skill growth pack, 5 agents — see §6 |
| webtrends-optimize/claude-code-ab-testing-skills | **1** | 2026-03-02 | **GPL-3.0** | **Empty** — only README + LICENSE, no skills |
| Luke2986/plg-gtm-expert | 3 | 2026-07-26 | (not opened) | PLG/GTM advice skill |

**The headline**: the best experimentation skill in the ecosystem has **zero stars**. The niche is not
unimagined — it is unoccupied. Several capable individuals have independently built toward it in the
last four months and none has distribution.

Note the vendor entry: Webtrends Optimize (a real CRO vendor) staked out the repo name
`claude-code-ab-testing-skills` in March 2026 and **shipped nothing into it** — README and LICENSE only.
Vendor interest exists; vendor execution does not.

---

## 4. shahriarfarzadi/run-ab-experiments-skill — the closest thing to a real competitor

0★, MIT, 3,263 lines total. One skill, 404-line SKILL.md + 4 references (discovery-question-bank 423,
experiment-design 368, analysis-and-trust 329, lifecycle-and-source-map 301) + `ab_math.py` (312 lines,
dependency-free) + templates + tests.

This is **genuinely good work** and must not be treated as a strawman. It carries a real validity layer:
SRM (many hits, taught as a gate), peeking, always-valid, sequential, Twyman, Simpson, primacy, novelty,
interference, CUPED, pre-registration, multiple comparisons, holdout, intention-to-treat, triggered
analysis and dilution.

Representative verbatim rules (`skills/run-ab-experiments/SKILL.md`):
- `:369` — "Never interpret outcome metrics after an unresolved SRM."
- `:376` — "Never use ordinary fixed-horizon p-values with optional stopping."
- `:370-371` — "Never call a non-significant result 'no effect' when meaningful effects still fit inside
  the confidence interval."
- `:372-373` — "Never condition the primary analysis on post-treatment behavior."
- `:381` — "Replicate unusually large wins with fresh or orthogonal randomization." (Twyman in rule form)

### Where it differs from what growth-skill would be
1. **It is one topic, not a growth surface.** A/B lifecycle only. No activation, retention/resurrection,
   referral/viral loops, PLG, monetization/pricing experiments, funnel or cohort analysis, growth-model
   construction. The charter's 17-item scope is barely 20% covered.
2. **Shape is opposite to the family's.** It mandates a 12-20 question interview and a signed-off
   assumptions register *before any work* (`SKILL.md:44-105`). That is a heavyweight consulting protocol,
   not a thin faceted router. It is also its own biggest adoption risk.
3. **It is a book restatement.** Self-described as "grounded in Kohavi, Tang, and Xu" and each lifecycle
   stage ends with a "Book basis: Chapters 15 and 21" anchor (`SKILL.md:404`,
   `references/lifecycle-and-source-map.md:92`). Ideas aren't copyrightable and it cites rather than
   copies, but the pack is essentially one textbook re-expressed — it inherits that book's
   large-company assumptions wholesale (see §7).
4. **No small-sample path.** See §7 — this is the wedge.

### Growth-vs-operate seam (charter's special question) — a citable precedent
This skill draws the family's canary-vs-experiment seam correctly and explicitly, which is worth
knowing before we write it ourselves:
- `SKILL.md:277-279` — ramp order is "Start with low-risk rings or low exposure to catch severe bugs",
  then "Move to the maximum-power allocation for the planned measurement window." Risk containment and
  learning are *separate phases with different purposes*.
- `SKILL.md:308-309` — "Do not treat efficacy signals from low-power risk ramps as confirmatory
  evidence." This is exactly "a canary is not an experiment," stated as a rule.
- `SKILL.md:303-305` — "use near-real-time data only for severe safety, operational, or trust issues;
  use the validated batch path for decision evidence." The operate/growth monitoring split, cleanly put.

**Disposition**: the seam is real, teachable, and already validated by a working artifact. Growth owns
the learning read; the safety ramp is operate's. Same flag, opposite intent — confirmed, not assumed.

---

## 5. LeihuaYe/claude-experimentation — working statistics, narrow scope

0★, MIT, 26 files, Python (numpy/scipy/pandas). Three skills: `ab-design` (sample size / MDE / power /
duration, with CUPED, clustering, ratio metrics, multi-metric alpha), `ab-readout` (a gate pipeline:
SRM → CUPED → effect+CI → Benjamini-Hochberg → verdict), `ab-cate` (S/T/X-learners, Lin's estimator,
honest sample-splitting, subgroup-fishing guard).

**This is the only skill in the ecosystem that ships executable, Monte-Carlo-validated experiment
statistics.** `README.md:120` — methods "validated against a simulation with a known ground truth";
tests assert CUPED variance reduction lands near ρ², CI coverage, BH demoting true nulls, SRM catching
a real imbalance.

Correctly-stated methods worth citing (`README.md:128-131`): SRM as chi-square at **α=0.001 "because
it's a data-quality alarm"** (a genuinely good detail — the alarm threshold differs from the decision
threshold); CUPED as `Y_adj = Y − θ(X − E[X])`, `θ = Cov(Y,X)/Var(X)`; CUPED cutting required n by
`1−ρ²` (`README.md:91,97`); clustered design effect `1+(m−1)·ICC`.

**Number hygiene note**: the "variance reduction=35.9%" figure (`README.md:62`) is **its own synthetic
example output**, not a claimed industry benchmark — correctly framed, not a folklore specimen. Do not
mis-cite it as an empirical CUPED result.

**Scope**: analysis only. No growth surface at all. And by its own roadmap (`README.md:135`), **sequential
/ always-valid inference and DiD / synthetic control are "Planned", not shipped.**

---

## 6. RBraga01/builder-growth — 2★, and more statistically careful than a 24,751★ pack

MIT. 14 skills (experiment-design, funnel-analysis, growth-metrics-design, growth-strategy-design,
retention-design, pricing-page-review, positioning-audit, launch-plan-design, channel-selection-audit,
offer-quality-gate, copy-quality-gate, social-proof-review, ai-messaging-review, campaign-brief-generator)
+ 5 agents (experiment-designer, growth-critic, growth-strategist, campaign-reviewer, messaging-reviewer).

It gets the things the big packs get wrong (`skills/experiment-design/SKILL.md`):
- `:88-91` — stopping rule is fixed-duration; early stop only "if p < 0.001 AND sample ≥ 80% of target
  — applies only with pre-specified sequential testing plan"; "Interim looks: [none / at 50% and 100%
  of target] — no open-ended checking".
- `:121` — when the required sample exceeds available traffic it says **revise the MDE or find a
  higher-traffic surface** — a *pre-launch* fix, not a post-hoc extension.
- `:144-147` "Rationalization Red Flags" — quotes the excuses back at the reader: *"We'll run it for a
  while and see"*, *"Let's test it on a small audience first"*, *"We're in a hurry — can we shorten the
  test?"*

**⚠ ONE NUMBER TO VERIFY BEFORE ANY USE** — `skills/experiment-design/SKILL.md:95`:
> "Peeking at results and stopping when p < 0.05 produces a real false positive rate of approximately
> 0.23 at 5 checks, not 0.05."

Unsourced, and it conflicts with the canonical reference table I hold from training (Armitage, McPherson
& Rowe 1969, repeated significance tests on accumulating data, two-sided α=0.05: ~0.14 at 5 looks,
~0.19 at 10, ~0.25 at 20 — i.e. **~0.23 is roughly the *20*-look figure, not the 5-look figure**).
Flagging as CONTROLLER TRAINED KNOWLEDGE, NOT VERIFIED — channel D must confirm against the Armitage
primary before we either cite this or correct it publicly. If confirmed, it is a clean falsification
specimen: a correct *concept* carrying a wrong *magnitude*, propagating unsourced.

---

## 7. THE WEDGE, GREP-VERIFIED: "underpowered" is a refusal everywhere, never a redirect

I grepped every direct-niche repo for small-sample / low-traffic / quasi-experimental content. The
result is consistent and is the strongest finding of this channel.

Every pack tells a low-traffic reader to **stop**, and none tells them **what to do instead**:

- `RBraga01_builder-growth/skills/experiment-design/SKILL.md:145` — *"Let's test it on a small audience
  first"* — "a small audience produces an underpowered result; an underpowered result cannot inform a
  decision; label it a smoke test, not an experiment"
- `RBraga01_builder-growth/skills/experiment-design/SKILL.md:104` — "Insufficient power: extend or
  redesign — do not interpret underpowered results"
- `shahriarfarzadi/.../references/analysis-and-trust.md:303` — "Interval includes meaningful benefit and
  harm | Underpowered or unstable | **Inconclusive; gather more data or redesign**"
- `LeihuaYe/.../SKILL.md:36` — "if the CI is wide, say the test is underpowered rather than 'no effect'"
- `phuryn/.../ab-test-analysis/SKILL.md:26-28` — "Flag if the test is underpowered (<80% power)"

Each of these is *correct*. Together they are a dead end. "Gather more data" is not available to a
product with 400 weekly signups; "redesign" is not a method. The honest question — *what is the best
decision procedure available at n=small* — is asked by nobody.

**And the alternatives are absent, not merely brief.** In every direct-niche repo, zero hits for
diff-in-diff, synthetic control, interrupted time series, regression discontinuity, or geo/matched-market
designs. The one repo that names them (`LeihuaYe/README.md:135`) lists them under **"Planned"**.

Corroborating (weakly — see caveat): GitHub code search for `difference-in-differences path:SKILL.md`
and `synthetic control path:SKILL.md` both returned **total_count: 0**.
**⚠ Methodological caveat, self-caught:** the same code search returned 0 for `CUPED path:SKILL.md`,
yet I have CUPED in a SKILL.md locally (`LeihuaYe/ab_design/SKILL.md`). **GitHub code search does not
index these small repos** — its nulls are NOT proof of absence and must not be reported as such. The
local-clone greps are the reliable evidence; the code-search nulls are discarded.

This confirms controller-canon wedge hypothesis #1 (small-sample honesty) **from the skills channel
independently**, and it is the direct heir of marketing's R14 scale-gating.

---

## 8. A correctness error in a 24,751★ pack (phuryn/pm-skills)

`phuryn/pm-skills` — **24,751★** (`gh api repos/phuryn/pm-skills`, 2026-08-01), MIT (LICENSE file
opened), pushed 2026-07-03. 68 skills across 9 plugins. Self-described "from discovery to strategy,
execution, launch, and growth." **This is the second-largest incumbent in the space and none of my
keyword queries surfaced it** — it was found only by reading VoltAgent's curated index. Worth flagging
as a search-methodology lesson.

### The error — `pm-data-analytics/skills/ab-test-analysis/SKILL.md:27`
> "Use the formula: n = (Z²α/2 × 2 × p × (1-p)) / MDE²"
> "Flag if the test is underpowered (<80% power)"  *(line 28)*

**The printed formula omits the power term entirely.** The standard two-proportion sample size is
n = (Z_{1−α/2} + Z_{1−β})² · 2p(1−p) / MDE². Dropping Z_{1−β} means the formula controls only the
false-positive rate, not power. I computed the gap:

| | coefficient | n/arm at p=10%, MDE=1pp |
|---|---:|---:|
| Formula as printed | 2·(1.96)² = **7.683** | **6,915** |
| Correct at 80% power | 2·(1.96+0.8416)² = **15.698** | **14,128** |

**It understates the required sample by a factor of 2.04.** A reader following it runs at roughly 50%
power while the very next line claims to check for 80%. The skill's own instruction defeats its own
guard. This is a verifiable mathematical error, not a matter of taste, in a 24.7k-star artifact.

### Peeking prescribed as policy — same file, line 53
Its recommendation table:
> | Not significant, positive trend | **Extend the test** — need more data or larger effect |

Extending a fixed-horizon test *because the interim result looks promising*, then re-testing
significance, is the peeking problem enacted as official guidance. The table also lists per-metric
p-values across primary + guardrail rows (`:64-67`) with **no multiple-comparison correction anywhere**
(Bonferroni 0 hits, false discovery 0 hits, repo-wide).

### phuryn validity-layer grep (68 skills, `--include='*.md'`, file-hit counts)
Present but thin: SRM 1, sample ratio 3, guardrail 12, sample size 12, significance 12, confidence
interval 7, p-value 4, novelty 3, underpowered 3, minimum detectable 1.
**Zero: CUPED, sequential testing, peeking, statistical power, Bonferroni, false discovery, stopping
rule, Kohavi, quasi-experiment.**

Credit where due: it *does* name SRM and novelty/primacy — more than the 42.6k-star incumbent, which
has zero SRM (§9). The picture is not "big packs are bad"; it is that **no pack's validity layer is
complete, and the two largest fail in different places.**

Its other growth skills: `growth-loops` presents 5 loop types (Viral / Usage / Collaboration /
User-Generated / Referral) as a clean taxonomy with real examples — but **no loop math** (no K-factor,
no cycle time, no compounding arithmetic) and **no attribution** to the Reforge/Balfour lineage the
concept comes from. `cohort-analysis` is a competent data-workflow (retention heatmaps, drop-off,
follow-up research) with **no retention-curve methodology** — no flatten-or-die test, no smile-curve /
resurrection-artifact caution, no quick ratio.

---

## 9. deanpeters/Product-Manager-Skills — the license the API lied about

**6,173★**, pushed 2026-07-17. `gh api` reports license **`NOASSERTION`**. I opened the file:

`pms/LICENSE:1` → **"Attribution-NonCommercial-ShareAlike 4.0 International"** (CC BY-NC-SA 4.0).

This is exactly the failure mode the charter warns about, and it matters more than usual here:
**NonCommercial + ShareAlike is a viral, commercially-restrictive licence.** Do not lift text,
structure, or tables from this repo. Read-for-orientation only. (Contrast: every other repo in this
channel is MIT and freely liftable.)

### Its content, for the record
70 skills, 229 mentions of "experiment" — and a validity layer of essentially zero:
**SRM 0, CUPED 0, peeking 0, minimum detectable 0, Bonferroni 0, false discovery 0, p-value 0, stopping
rule 0, Twyman 0, Kohavi 0, quasi-experiment 0.** "sequential" gets 39 hits — every one is *sequential
questioning* / sequential steps, never sequential testing (verified by reading the hits). "guardrail"
gets 73 hits in the product-safety sense, not the experiment-metric sense.

The honest exceptions, found by reading each hit: `skills/finance-based-pricing-advisor/SKILL.md:674`
has a "Pitfall 3: Testing Without Statistical Power" section, and
`research/finance/Finance for Product Managers.md:1664` recommends "Run a randomized holdout (e.g.,
hold back 10-20% of eligible users)". So it is not literally zero — but across 70 skills, experimentation
is treated purely as a *discovery/validation* activity with no statistical layer.

Best citation in the whole channel — its own `CONTRIBUTING.md`:
> "**Missing PM frameworks** (OKRs, go-to-market planning, feature launches, **A/B testing**)"

**The largest PM skill pack lists A/B testing among its own acknowledged gaps.**

---

## 10. Licenses — every repo I opened the file for

| Repo | ★ | GitHub API says | LICENSE FILE says | Liftable? |
|---|---:|---|---|---|
| coreyhaines31/marketingskills | 42,622 | MIT | **MIT** (Corey Haines) — 1 file only, no per-skill licences | Yes (README: "Use these however you want") |
| phuryn/pm-skills | 24,751 | MIT | **MIT** | Yes |
| deanpeters/Product-Manager-Skills | 6,173 | **NOASSERTION** | **CC BY-NC-SA 4.0** | **NO — non-commercial + sharealike** |
| shahriarfarzadi/run-ab-experiments-skill | 0 | MIT | **MIT** (Shahriar Farzadi) | Yes |
| LeihuaYe/claude-experimentation | 0 | MIT | **MIT** (Leihua Ye) | Yes |
| RBraga01/builder-growth | 2 | MIT | **MIT** (Ricardo Romão Marques Braga) | Yes |
| brubinsztein/strategic-experimentation-coach | 0 | MIT | **MIT** (Benjamin Rubinsztein) | Yes |
| webtrends-optimize/claude-code-ab-testing-skills | 1 | — | **GPL-3.0** | Avoid (and it's empty anyway) |

One API/file disagreement in eight repos, and it was the commercially restrictive one. The rule earns
its keep.

---

## 11. Re-verification of A2's incumbent numbers (charter requires this)

I re-ran A2's load-bearing greps against `/tmp/mkskills` myself:
- 49 skills / 49 SKILL.md files / **14,720 total SKILL.md lines** — ✅ confirmed
- 42,622★ — ✅ confirmed independently via `gh api repos/coreyhaines31/marketingskills`
- LICENSE = MIT, exactly **1** licence file in the repo — ✅ confirmed
- Zero-hit claims — ✅ confirmed for SRM, sample-ratio, CUPED, SUTVA, interference, switchback,
  Simpson, false discovery, frequentist, Twyman, primacy, stopping rule, power analysis
- ❌ **One correction**: A2's table says pre-register = "0 | Absent entirely". There is **1 hit** —
  `skills/aso/references/google-play-specs.md:88`, Google Play's app **pre-registration** targeting
  feature, an unrelated homonym. A2's *conclusion* (experiment pre-registration as a discipline is
  absent) stands; the *count* does not. Report it as "1 unrelated homonym hit", never as zero.

---

## 12. Re-verification of A3's deepwalk numbers, plus a new arithmetic finding

Re-ran A3's identity claims myself via `gh api repos/<r>` (2026-08-01) — **all confirmed**:
OpenClaudia/openclaudia-skills 608★ · menkesu/awesome-pm-skills 383★ · contains-studio/agents 12,395★ ·
Eronred/aso-skills 1,700★ · wshobson/agents 38,424★ · obra/superpowers 264,754★ ·
anthropics/skills 165,624★.

Licence re-checks (cloned, `find -iname 'LICEN*'`):
- `menkesu/awesome-pm-skills` — API says **NOASSERTION**, file says **MIT**. ✅ A3's NOASSERTION-lie
  catch confirmed independently. That is now **two** API lies in this channel (the other:
  deanpeters/Product-Manager-Skills, §9).
- `contains-studio/agents` (12,395★) — ✅ **NO LICENSE FILE AT ALL** confirmed. API returns null.
  All rights reserved by default; **do not lift**.
- `OpenClaudia/openclaudia-skills` — MIT confirmed from file.

### NEW FINDING — OpenClaudia's sample-size table contradicts its own formula by ~4.75×

A3 correctly identified `OpenClaudia/openclaudia-skills/skills/ab-test-setup/SKILL.md` as the best
validity-layer file in the ecosystem. I checked its arithmetic. Its **formula is correct**
(`SKILL.md:41-42`):
> `n = (Z_alpha/2 + Z_beta)^2 * (p1*(1-p1) + p2*(1-p2)) / (p2 - p1)^2`
> `Where: Z_alpha/2 = 1.96 (95%), Z_beta = 0.84 (80% power), p2 = p1 * (1 + MDE)`

But its **"Quick Reference" lookup table** (`SKILL.md:47-54`) does not match that formula. I evaluated
all 24 cells:

| baseline | MDE | table says | its own formula gives | ratio |
|---:|---:|---:|---:|---:|
| 2% | 10% | 385,040 | 80,587 | 4.78 |
| 5% | 20% | 38,200 | 8,146 | 4.69 |
| 10% | 10% | 70,420 | 14,731 | 4.78 |
| 20% | 25% | 5,230 | 1,090 | 4.80 |

**Every one of the 24 cells is 4.63–4.82× larger than the file's own formula produces.**

Which is wrong? The **table**. Independent check against the standard two-proportion calculation for
5%→6% at 80% power / 95% two-sided gives n ≈ 8,146/arm (Evan Miller's widely used calculator gives
~8,155 for the same inputs) — matching the formula, not the table's 38,200.

**Consequence**: a reader using the table concludes a test needs ~4.75× more traffic than it does, and
may abandon a perfectly feasible experiment. A reader using the formula gets a different answer from
the table two lines above it, with nothing to say which to trust.

### The pattern this completes — nobody's sample-size math is checkable

Three independent packs, three different arithmetic failures in the single most consequential
calculation in experimentation:

| Pack | ★ | Failure | Direction |
|---|---:|---|---|
| phuryn/pm-skills | 24,751 | formula **omits the power term** Z_{1−β} (§8) | understates n **2.04×** → ships underpowered tests |
| OpenClaudia/openclaudia-skills | 608 | correct formula, **table contradicts it** | overstates n **~4.75×** → abandons feasible tests |
| coreyhaines31/marketingskills | 42,622 | table with **no formula, no citation**, one-vs-two-tailed unstated (A2 §3) | unverifiable either way |

None of the three is checkable by its reader, and two are demonstrably wrong. The only pack in the
ecosystem whose stats are **executable and validated against Monte-Carlo ground truth** is
LeihuaYe/claude-experimentation (§5) — at **zero stars**.

This is a concrete, arithmetic-grade argument for growth-skill shipping *runnable, tested* calculators
rather than prose formulas and hand-built tables — and it is verifiable by anyone who re-runs the
numbers, which is the standard the family's evidence discipline asks for.

---

## 13. Re-verification of A1's registry sweep — TWO CORRECTIONS, one of them wedge-critical

A1 surfaced two packs my own queries missed (`SkeneTechnologies/plg-skills`, `rampstackco/claude-skills`)
— genuinely valuable finds. But two of its claims do not survive re-verification, and one of them would
have shipped a wrong wedge.

### ✅ Confirmed
- `rampstackco/claude-skills` — **508★**, MIT (LICENSE file: "Copyright (c) 2026 RampStack Co."),
  pushed 2026-07-21. ✅
- `SkeneTechnologies/plg-skills` — **18★**, MIT ("Copyright (c) 2026 Skene Technologies"),
  pushed 2026-01-26 (stale, 6 months). ✅
- `anthropics/skills` — 165,624★, and its 17 skill dirs contain zero growth content. ✅ (Matches my own
  independent null on `anthropics/claude-plugins-official`, §2 — two separate official surfaces, both null.)

### ❌ CORRECTION 1 (wedge-critical) — rampstack DOES cite primary sources
A1 wrote: *"I did not see a single citation to Kohavi/Tang/Xu, Deng et al. CUPED paper, or Johari et al.
anywhere in the text I read; all claims are asserted without attribution"* and told the synthesis to
build the wedge on that. **This is false.** A1 read the SKILL.md files but explicitly did not open the
`references/*.md` files — and that is exactly where the citations live. Verbatim, verified by me:

- `ramp/skills/data-warehouse-experimentation/references/variance-reduction-techniques.md:11` —
  "**CUPED** stands for Controlled-experiment Using Pre-Experiment Data. Originally from Microsoft
  (**Deng et al, 2013**)." — correct attribution of the CUPED paper.
- same file `:156-157` — "Bang and Robins (2005), 'Doubly Robust Estimation in Missing Data and Causal
  Inference Models.' / Funk et al. (2011), 'Doubly Robust Estimation of Causal Effects.'"
- `ramp/skills/data-warehouse-experimentation/references/sequential-testing-patterns.md:63` — "Use a
  maintained library (`sequential` in R, custom Python adapted from peer-reviewed papers like
  **Johari et al 2017**)."
- same file `:75` — "**Howard, Ramdas, McAuliffe, Sekhon (2021)**, 'Time-uniform, nonparametric,
  nonasymptotic confidence sequences.'"

It also shows real epistemic humility, which no other pack does (`sequential-testing-patterns.md:61,63,78`):
> "the implementation above is a sketch for illustration… **Do not deploy this verbatim.**"
> "Have a statistician on the team review the implementation."
> "Confidence sequences are for teams with a statistician who has read the paper and validated the
> implementation."

**Consequence**: any wedge phrased as "the ecosystem teaches validity without citing sources" is DEAD.
Do not ship it. rampstack cites correctly and hedges honestly.

### ❌ CORRECTION 2 (minor) — skene has 27 skills, not 26
A1's prose says 26; its own list contains 27 names, and `find skene/skills -maxdepth 1 -type d` returns
**27**. The list is right, the count sentence is wrong.

### The rampstack validity layer, measured (file-hit counts, `ramp/skills`, dist/ mirror excluded)
CUPED **22** · sequential test **22** · peek **17** · pre-registration **17** · delta method **11** ·
always-valid **10** · Bonferroni **9** · interference **9** · mSPRT **8** · SRM **7** · switchback **7** ·
cluster randomization **4** · sample ratio mismatch **3** · false discovery **2** · Simpson **2** ·
Twyman **0**.

This is, by a wide margin, the deepest validity layer in the skills ecosystem — deeper than the
42,622★ incumbent (which has **zero** for SRM, CUPED, sequential, interference, switchback).

### What survives: the adjudication wedge, sharpened and evidence-backed

Re-verified against both packs:

| | growth SURFACE | validity LAYER |
|---|---|---|
| `SkeneTechnologies/plg-skills` (18★) | ✅ **27 skills, 100% growth** — activation, retention, referral, viral loops, growth modeling, PLG metrics, expansion revenue, usage-based pricing… | ❌ near-zero: CUPED 0, mSPRT 0, always-valid 0, interference 0, stopping rule 0, pre-registration 0, MDE 0. SRM/peek/Bonferroni appear in **1 file each**. SKILL.md-only — **no `references/`, no `evals/` in any of the 27**. |
| `rampstackco/claude-skills` (508★) | ❌ growth is **8 of 102** skills in a *website-lifecycle* pack (brand, SEO, dev, ops…) | ✅ **the deepest in the ecosystem**, correctly cited (above) |

**Nobody has both.** That is the adjudication wedge, and unlike the citation framing it survives
re-verification.

### And the small-sample wedge survives too — but must be stated precisely

rampstack is the *most* forceful refuser in the ecosystem:
- `experiment-design/SKILL.md:36` — "**Refuse to run underpowered tests.**"
- `experiment-design/references/sample-size-tables.md:88` — "The discipline is to refuse to run tests
  that cannot answer the question. An underpowered test is not 'better than nothing'; it is **worse than
  nothing** because it produces a result that feels meaningful but is not."
- `references/pre-experiment-readiness-checklist.md:37` — "If the math says 'you need 200,000 users to
  detect this lift and you have 5,000 a week,' accept a larger MDE **or do not run the test**."

**Give it credit where due — it is the only pack that offers any decision procedure for the no-power
case** (`sample-size-tables.md:86`): "**Skip the test.** If the change is small but cheap and reversible,
ship without testing. If it is small and expensive to maintain, do not ship." That is genuinely good, and
growth-skill must not pretend it doesn't exist.

**It also ships quasi-experimental methods** (`experimentation-analytics/SKILL.md:266-267`): geo
experiments and difference-in-differences — the only pack in the ecosystem that does.

But read who they are written for: diff-in-diff is scoped to *"regulatory rollouts, partner-specific
changes"* and geo experiments to *"markets… the markets need to be comparable."* These are methods for a
company that **has markets**. The reader with 400 signups a week is still told to refuse, accept a bigger
MDE, or skip.

**The surviving small-sample wedge, stated honestly**: the ecosystem's best work — including its
citations, its quasi-experimental methods, and its one genuine skip-the-test rule — is written for a
reader who is merely *traffic-constrained within a large company*, not for the operator whose n is small
by nature. That reader gets "refuse" and nothing else. It is a narrower claim than "nobody teaches the
small-sample case," and it is the one the evidence supports.
