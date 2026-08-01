# Channel A report — the skills ecosystem (grw-skills)

Synthesis for the growth-skill controller. As-of date for every figure: **2026-08-01**.

**Sources.** Four `_raw` files, all under `research/growth/_raw/`:
- `skills-registries.md` (A1) — census: `npx skills find` across 20 queries, skillsmp.com, anthropics/skills, ~30 repos with metadata + licences
- `skills-incumbent-deepread.md` (A2) — forensic read of coreyhaines31/marketingskills
- `skills-deepwalk.md` (A3) — 7 repos cloned and walked, full term×repo matrix, benchmark/persona/staleness catalogs
- `skills-lead-slice.md` (me) — my own sweep, the direct-niche repos, and all re-verification

**Everything numeric below I re-verified myself** before repeating it. That caught **three worker errors**, one of which would have shipped a wrong wedge — see §7. Read §7 before trusting any worker figure not repeated here.

---

## 1. Niche-openness verdict

### **OPEN at scale — but not unexplored, and not uncontested on rigor.**

A one-word "open" would be wrong and would set us up to be embarrassed by two specific repos. The precise verdict has three parts:

**(a) No dedicated growth/experimentation pack exists at incumbent scale. Verified from four independent directions.**

1. **My repo sweep** (`gh api search/repositories`, no WebSearch spent). `growth+skill+claude` → 314 results, all marketing/GTM. `experimentation+skill+claude` → 27, all tiny/personal. `conversion+rate+optimization+skill+agent` → **0**. `retention+churn+claude+skill` → **0**. `product-led+growth+skill` → 3, largest 3★.
2. **The top-60-by-stars scan.** I listed the 60 highest-starred skills repos (537 matches for `skills claude code stars:>200`). Growth-adjacent entries are all marketing- or PM-framed: coreyhaines31/marketingskills (42,622★), phuryn/pm-skills (24,751★), claude-seo (13,018★), claude-ads (7,749★), Product-Manager-Skills (6,173★), aso-skills (1,700★), goose-skills (1,074★), openclaudia (608★), rampstack (508★). **None is a growth pack.**
3. **Anthropic's own surfaces are null, twice.** I cloned `anthropics/claude-plugins-official` (32,944★, 440 files): every growth-keyword hit is a false positive — "activation" in the plugin-lifecycle sense, "Experimental" as a stability label. A1 independently pulled the full tree of `anthropics/skills` (165,624★): its 17 skill dirs are algorithmic-art, brand-guidelines, canvas-design, claude-api, doc-coauthoring, docx, frontend-design, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx. **Zero growth content on either official surface.**
4. **The largest curated directory lists none.** `VoltAgent/awesome-agent-skills` (29,385★, curating 1000+ skills): every growth entry it indexes belongs to a marketing or PM pack (coreyhaines31's eight CRO skills, phuryn's ab-test-analysis/cohort-analysis/growth-loops, deanpeters' pol-probe). No dedicated growth pack in the index.

**(b) The idea is not unimagined — several capable people built toward it in the last four months, and none has distribution.** Six repos whose whole subject is experimentation/growth (§3). The best of them has **zero stars**. A real CRO vendor (Webtrends Optimize) claimed the perfect repo name — `claude-code-ab-testing-skills` — in March 2026 and shipped **only a README and a LICENSE**. Vendor interest exists; vendor execution does not.

**(c) The claim we must NOT make: "nobody teaches the validity layer."** Two packs would falsify it immediately. `rampstackco/claude-skills` (508★) has the deepest experimentation content in the ecosystem — CUPED in 22 files, sequential testing in 22, mSPRT in 8, pre-registration in 17 — **correctly cited to Deng et al. 2013, Johari et al. 2017, and Howard/Ramdas/McAuliffe/Sekhon 2021**. `OpenClaudia/openclaudia-skills` (608★) teaches SRM, peeking, novelty and Bonferroni with a *correct* sample-size formula. Any positioning that calls the incumbents statistically illiterate is false and checkable in thirty seconds.

### The shape of the opening

The gap is not "nobody knows this." It is that **the growth surface and the validity layer have never been in the same repo**, and the whole literature is written for a reader who already has traffic:

| | growth **surface** | validity **layer** |
|---|---|---|
| `SkeneTechnologies/plg-skills` (**18★**) | ✅ **27 skills, 100% growth** — activation, retention, referral, viral loops, growth modeling, PLG metrics, expansion revenue, usage-based pricing, product-led sales | ❌ CUPED 0 · mSPRT 0 · always-valid 0 · interference 0 · stopping rule 0 · pre-registration 0 · MDE 0. SRM/peeking/Bonferroni in **1 file each**. No `references/`, no `evals/` in any of the 27. |
| `rampstackco/claude-skills` (**508★**) | ❌ growth is **8 of 102** skills in a *website-lifecycle* pack (brand, SEO, dev, ops) | ✅ **deepest in the ecosystem, correctly cited** |
| `coreyhaines31/marketingskills` (**42,622★**) | ⚠️ CRO/retention chapters, no growth model | ❌ SRM **0** · CUPED **0** · SUTVA **0** · interference **0** · switchback **0** · Twyman **0** (all re-verified by me) |

**Nobody has both.** That is the adjudication wedge, and unlike the citation framing it survives re-verification.

---

## 2. Incumbent inventory

Stars and licences below are **file-verified by me** unless the row says otherwise. Licence column = what the LICENSE **file** says, never the API.

### Tier 1 — mega-scale, growth as a chapter

| Repo | ★ | Pushed | Licence (file) | Growth content | Validity layer |
|---|---:|---|---|---|---|
| coreyhaines31/marketingskills | **42,622** | 2026-07-29 | **MIT** (1 file, no per-skill licences) | 49 skills, 14,720 SKILL.md lines; growth-adjacent: ab-testing, cro, churn-prevention, onboarding, pricing, referrals, paywalls, signup, popups | Peeking taught + **eval-tested**; MDE/sample-size tabulated; guardrails correct. **Zero** SRM, CUPED, SUTVA, interference, switchback, Simpson, FDR, frequentist, Twyman, stopping rule, primacy |
| phuryn/pm-skills | **24,751** | 2026-07-03 | **MIT** | 68 skills / 9 plugins; ab-test-analysis, cohort-analysis, growth-loops, north-star-metric, monetization-strategy | SRM + novelty named; **sample-size formula is mathematically wrong** and **peeking is prescribed as policy** — §4 |
| deanpeters/Product-Manager-Skills | **6,173** | 2026-07-17 | **CC BY-NC-SA 4.0** ⚠️ (API lied: "NOASSERTION") | 70 skills, 229 uses of "experiment" | Effectively none: SRM 0, CUPED 0, peeking 0, p-value 0, Kohavi 0. Its own CONTRIBUTING.md lists **A/B testing among its acknowledged gaps** |

### Tier 2 — the rigorous middle

| Repo | ★ | Licence (file) | Note |
|---|---:|---|---|
| rampstackco/claude-skills | **508** | MIT | **The one to study.** 8 experimentation skills each with 5–9 `references/`. Cites Deng 2013, Johari 2017, Howard 2021. Ships geo-experiments and diff-in-diff. Explicitly cross-references its own siblings ("this skill does NOT cover X, see Y") — architecture close to our faceted router |
| OpenClaudia/openclaudia-skills | **608** | MIT | 65 skills; `ab-test-setup` teaches SRM + peeking + novelty + Bonferroni with a **correct** sample-size formula — but its own lookup table contradicts that formula by ~4.75× (§4) |
| Eronred/aso-skills | **1,700** | MIT | Correctly distinguishes Apple PPO (true randomised split) from Custom Product Pages — "**Not a true A/B test**" (`ab-test-store-listing/SKILL.md:55`). A real, non-obvious distinction |
| menkesu/awesome-pm-skills | **383** | **MIT** (API lied: "NOASSERTION") | Best named-practitioner attribution in the ecosystem (Kohavi, Verna, Winters, Alstromer, Moesta) — but no worked math |
| RefoundAI/lenny-skills | 1,208 | MIT (A1-verified) | 11 growth skills of 86; schema is "podcast episode → artifact + guest quote" |
| contains-studio/agents | **12,395** | ⚠️ **NO LICENCE FILE** | Cleanest growth/operate separation found (§6) |

### Tier 3 — the direct-niche repos (the idea, without the distribution)

| Repo | ★ | Licence (file) | What it is |
|---|---:|---|---|
| shahriarfarzadi/run-ab-experiments-skill | **0** | MIT | Serious Kohavi-grounded full A/B lifecycle — §3 |
| LeihuaYe/claude-experimentation | **0** | MIT | Only pack with **executable, Monte-Carlo-validated** statistics — §3 |
| SkeneTechnologies/plg-skills | **18** | MIT | 27 skills, 100% growth surface, no validity layer |
| RBraga01/builder-growth | **2** | MIT | 14 growth skills; **more statistically careful than the 24,751★ pack** |
| brubinsztein/strategic-experimentation-coach | **0** | MIT | Strategic hypothesis decomposition |
| webtrends-optimize/claude-code-ab-testing-skills | **1** | GPL-3.0 | **Empty** — README + LICENSE only |

---

## 3. What the ecosystem does well

Stated generously, because the controller needs to know what we must at minimum match.

**The peeking problem is genuinely handled at the top.** A2 verified the charter's report and I re-verified the file: `coreyhaines31/marketingskills/skills/ab-testing/evals/evals.json:36-48` is a dedicated eval case — prompt *"Our test has been running for 3 days and Variant B is winning with 95% confidence. Should we call it?"*, with six graded assertions including "Explains false positive rate inflation from peeking" and "Mentions sequential testing as alternative approach." That is a real behavioural guard, not a passing mention, at 42.6k stars.

**Two packs carry a real, cited validity layer.** rampstack's `data-warehouse-experimentation` frontmatter literally names "sample ratio mismatch" and "mSPRT," and its reference files cite the actual papers. It also hedges honestly — *"the implementation above is a sketch for illustration… Do not deploy this verbatim"* and *"Confidence sequences are for teams with a statistician who has read the paper."* No other pack shows that humility.

**Executable, tested statistics exist — once.** `LeihuaYe/claude-experimentation` ships a gate pipeline (SRM → CUPED → effect+CI → Benjamini-Hochberg → verdict) with unit tests asserting CUPED variance reduction lands near ρ², CI coverage, and BH demoting true nulls. Its SRM alarm is set at **α=0.001 "because it's a data-quality alarm"** — a genuinely good detail: the alarm threshold should differ from the decision threshold. At zero stars.

**The rigorous small packs get things the big packs get wrong.** `RBraga01/builder-growth` (2★) sets a fixed-duration stopping rule with early stop only "if p < 0.001 AND sample ≥ 80% of target — applies only with pre-specified sequential testing plan," and when required sample exceeds available traffic it says *revise the MDE or find a higher-traffic surface* — a pre-launch fix, not a post-hoc extension. The 24,751★ pack does the opposite (§4).

**One unique practice worth lifting.** A3 found A/A testing taught in exactly one place — `norahe0304-art/30x-growth-marketing-panel`'s Growth Tribe persona: *"Always run AA tests first… to verify your experimentation infrastructure works before running real tests."* Zero hits for A/A testing anywhere else in the channel's clones. It didn't match any of our grep terms — a reminder that the term list can hide a gap.

### The whitespace

**1. The growth surface and the validity layer are never in the same repo.** §1's table. This is the primary wedge.

**2. "Underpowered" is a refusal everywhere, never a redirect.** This is the strongest single finding, grep-verified across every pack:
- `rampstack/experiment-design/SKILL.md:36` — "**Refuse to run underpowered tests.**"
- `rampstack/.../sample-size-tables.md:88` — "An underpowered test is not 'better than nothing'; it is **worse than nothing**."
- `RBraga01/.../experiment-design/SKILL.md:145` — "a small audience produces an underpowered result; an underpowered result cannot inform a decision; label it a smoke test, not an experiment"
- `shahriarfarzadi/.../analysis-and-trust.md:303` — "Inconclusive; gather more data or redesign"

Every one is correct. Together they are a dead end: "gather more data" is not available to a product with 400 weekly signups, and "redesign" is not a method.

**State this precisely — rampstack partially covers it and we must not pretend otherwise.** It is the only pack offering a decision procedure for the no-power case (`sample-size-tables.md:86`): *"**Skip the test.** If the change is small but cheap and reversible, ship without testing. If it is small and expensive to maintain, do not ship."* It also ships geo-experiments and diff-in-diff (`experimentation-analytics/SKILL.md:266-267`) — the only pack that does.

But read who those are for: diff-in-diff is scoped to *"regulatory rollouts, partner-specific changes"*, geo experiments to *"markets… the markets need to be comparable."* Methods for a company that **has markets**. **The surviving claim**: the ecosystem's best work is written for a reader who is traffic-constrained *within a large company*, never for the operator whose n is small by nature. That reader gets "refuse."

**3. Nobody's sample-size math is checkable, and two are demonstrably wrong** (§4).

**4. Concepts absent from the entire channel** (A3's matrix + my greps, across every repo cloned): SUTVA, switchback, Twyman's law, and — outside rampstack alone — CUPED, sequential testing, always-valid inference, and interference. Simpson's paradox: A3 checked every apparent hit and all were false positives; **true count is zero everywhere except rampstack (2 files)**.

**5. Growth-model construction barely exists.** AARRR appears as a plan-sequencing tool (coreyhaines31 files it under `marketing-plan`, attributed to Dave McClure). Growth loops appear as taxonomies with no loop math — phuryn's five loop types have no K-factor, no cycle time, no compounding arithmetic, and no attribution to the Reforge/Balfour lineage. No cohort-curve methodology anywhere: no flatten-or-die test, no smile-curve/resurrection caution, no quick ratio.

**6. A vocabulary trap for us.** A2 caught that "loops" means two different things: coreyhaines31's `marketing-loops` is *operational recurring agent workflows on a cadence* (weekly SEO scan, ad-fatigue check), not *product growth loops* that compound structurally. Same word, different concept. And "guardrail" carries **three** distinct senses across the corpus — experiment-validity metric, product-safety rail, and compliance/spend cap. Our corpus must disambiguate both.

---

## 4. Arithmetic failures — three packs, three different ways

The single most consequential calculation in experimentation, and no reader can check any of it.

**phuryn/pm-skills (24,751★) — the formula omits the power term.** `pm-data-analytics/skills/ab-test-analysis/SKILL.md:27`:
> "Use the formula: n = (Z²α/2 × 2 × p × (1-p)) / MDE²"

…immediately followed at `:28` by "Flag if the test is underpowered (<80% power)." The standard two-proportion formula is n = (Z_{1−α/2} + Z_{1−β})² · 2p(1−p) / MDE². Dropping Z_{1−β} controls only the false-positive rate. I computed it: the printed coefficient is 7.683 vs 15.698 for real 80% power — **it understates required n by 2.04×** (at p=10%, MDE=1pp: 6,915/arm instead of 14,128). A reader following it runs at ~50% power while the next line claims to check for 80%.

**Same file, `:53` — peeking prescribed as policy.** Its recommendation table:
> | Not significant, positive trend | **Extend the test** — need more data or larger effect |

Extending a fixed-horizon test *because the interim looked promising* and re-testing significance is the peeking problem as official guidance. The same table lists per-metric p-values across primary and guardrail rows with **no multiple-comparison correction anywhere in the repo** (Bonferroni 0, FDR 0).

**OpenClaudia (608★) — correct formula, table contradicts it.** `ab-test-setup/SKILL.md:41-42` gives the correct formula *including* Z_beta = 0.84. But its "Quick Reference" table two lines later matches none of it. I evaluated all 24 cells: **every one is 4.63–4.82× larger than the file's own formula produces.** The formula is right (5%→6% at 80%/95% gives n≈8,146, matching the standard calculator's ~8,155); the table says 38,200. A reader using the table concludes a test needs ~4.75× more traffic than it does and may abandon a feasible experiment.

**coreyhaines31 (42,622★) — tables with no formula.** A2: sample-size tables are internally plausible but carry no formula, no citation, and no statement of one- vs two-tailed. Unverifiable either way.

**The conclusion for our build**: this is an arithmetic-grade argument for shipping *runnable, tested* calculators rather than prose formulas and hand-built tables. The only pack whose statistics are executable and validated against ground truth is at zero stars.

---

## 5. Folklore, unsourced benchmarks, and staleness specimens

Full catalogs in A3 §4 and A2 §5. The specimens that matter:

**Unsourced magnitudes attached to correct concepts** — the most dangerous class, because the concept checks out and the number rides along:
- `OpenClaudia/ab-test-setup/SKILL.md:128` — "Peeking: Checking daily inflates false positives to **25-30%**." No citation.
- same `:105` — "sample ratio mismatch (SRM): **>1% deviation** means setup problem." Unsourced threshold.
- ⚠️ `RBraga01/experiment-design/SKILL.md:95` — "Peeking… produces a real false positive rate of approximately **0.23 at 5 checks**, not 0.05." **Flagged for channel D, not confirmed.** It conflicts with the canonical Armitage/McPherson/Rowe (1969) table as I hold it from training (~0.14 at 5 looks; ~0.25 at ~20 looks) — i.e. ~0.23 looks like the 20-look figure mislabelled as 5. **This is controller trained knowledge, not verified** — D must check the primary before we cite or correct it. If confirmed, it is a clean falsification specimen: correct concept, wrong magnitude, propagating unsourced.

**Large unsourced aggregates** — `coreyhaines31/churn-prevention/references/dunning-playbook.md:9-12`: "Subscription businesses lose an estimated **$129 billion annually** to involuntary churn." No citation, no methodology, no date. Mark UNTRACED; never repeat.

**Benchmark tables with no denominators** — `coreyhaines31/churn-prevention` is the densest: voluntary churn "50-70% of total," pausers returning "60-80%," a full recovery-benchmarks table, "Churnkey… **34% avg save rate**" (a vendor claim stated as fact). `OpenClaudia/growth-strategy:39-49` gives a full AARRR benchmark table (activation "20-40% good, 50%+ great"; free→paid "2-5%/8%+"; NRR "100-110%/120%+") with no source, sample, or date. `Eronred/aso-skills` retention D1/D7/D30 tables by category, same problem.

**Same case study, different numbers** — A3's sharpest catch: Dropbox's referral programme appears as "**3,900% growth in 15 months**… viral coefficient ~0.6-0.7" in OpenClaudia and as "**35% of signups from referrals**" in menkesu — same folklore, independently authored, inconsistent specifics, neither cited.

**A misattribution worth not repeating** — menkesu's `exp-driven-dev` presents a "**HITS framework**" as Kohavi's. The concepts are genuinely Kohavi-sourced; the acronym appears to be the author's own mnemonic. Label as "author's synthesis, Kohavi-adjacent."

**Staleness — flagged, not confirmed.** Per charter discipline neither A3 nor I spent budget verifying these; they are candidates only: the `30x-panel` Neil Patel KB carries dozens of dated 2025/2026 claims (specific model names, an executive's tweet, "ChatGPT Algorithm Updates (2026)") extracted from YouTube transcripts — same risk profile as WebFetch-extracted model claims, all UNVERIFIED. One **positive** specimen: `OpenClaudia/signup-flow-cro:342` correctly marks Google Optimize as sunset — an author maintaining their own content against a real deprecation.

**Correctly framed, do not mis-cite**: LeihuaYe's "variance reduction=35.9%" is its **own synthetic example output**, not a claimed industry benchmark. Do not repeat it as an empirical CUPED result.

---

## 6. Growth vs operate — the seam is real, and already drawn by practitioners

The charter asked whether things smelling of monitoring/flags/rollout belong to growth or operate. **The seam holds, and it was drawn independently by four sources that have never read our charter** — that is convergent evidence, not our framing imposed on the data.

**The best precedent — `shahriarfarzadi/run-ab-experiments-skill`** states our exact seam as operating rules:
- `SKILL.md:277-279` — ramp order is "start with low-risk rings or low exposure to catch severe bugs," *then* "move to the maximum-power allocation for the planned measurement window." Risk containment and learning are separate phases with different purposes.
- `SKILL.md:308-309` — "**Do not treat efficacy signals from low-power risk ramps as confirmatory evidence.**" This is "a canary is not an experiment," as a rule.
- `SKILL.md:303-305` — "use near-real-time data only for severe safety, operational, or trust issues; use the validated batch path for decision evidence." The monitoring split, cleanly put.

**PostHog models it in its own product surface** (A1): flag-hygiene skills (`cleaning-up-stale-feature-flags`, `finding-deleted-feature-flags` — operate) sit beside `configuring-experiment-rollout` (growth). Same flag infrastructure, two different skills.

**contains-studio/agents** (12,395★) separates `studio-operations/infrastructure-maintainer.md` (monitoring, alerting, scaling) from `project-management/experiment-tracker.md` (A/B testing, flags for assignment, cohort analysis) as two non-overlapping agents.

**One author states it in prose** — `ekinciio/saas-growth-marketing-skills` README: "**These skills are analysis tools, not monitoring services.**"

**Disposition for our build**: growth owns the learning read; the safety ramp, flag hygiene, and alerting belong to operate. We can assert this with four independent citations. Two blur specimens to avoid: `OpenClaudia/launch-strategy:53` bundles "Monitoring/alerting. Scaling plan. War room. On-call" into a marketing launch checklist (operate content, unlabelled), and rampstack ships both `monitoring-and-alerting` and `feature-flagging` inside the same pack as its experimentation cluster. Note also that coreyhaines31's seam is clean **by absence** — it never engages deployment safety at all, so there is no incumbent position to react to.

---

## 7. Re-verification log — three worker errors caught

The charter requires this, and last run it caught three about-to-ship-wrong figures. It did again.

**❌ Error 1 (wedge-critical) — A1: "rampstack cites nothing."** A1 wrote that it saw *"not a single citation to Kohavi/Tang/Xu, Deng et al. CUPED paper, or Johari et al. anywhere"* and recommended building the wedge on it. **False.** A1 read the SKILL.md files but explicitly did not open the `references/*.md` — which is exactly where citations live. Verified verbatim by me: `variance-reduction-techniques.md:11` "CUPED… Originally from Microsoft (**Deng et al, 2013**)"; `:156-157` Bang & Robins (2005), Funk et al. (2011); `sequential-testing-patterns.md:63` "**Johari et al 2017**"; `:75` "**Howard, Ramdas, McAuliffe, Sekhon (2021)**, 'Time-uniform, nonparametric, nonasymptotic confidence sequences.'" **Any wedge phrased as "they teach validity without citing sources" is dead — do not ship it.**

**❌ Error 2 — A2: "pre-registration = 0, absent entirely."** There is **1 hit** — `skills/aso/references/google-play-specs.md:88`, Google Play's app **pre-registration** targeting feature, an unrelated homonym. A2's *conclusion* (experiment pre-registration is absent as a discipline) stands; the *count* does not. Report as "one unrelated homonym hit," never as zero.

**❌ Error 3 — A1: skene has 26 skills.** It has **27** (`find skene/skills -maxdepth 1 -type d`). A1's own list contains 27 names; only the count sentence was wrong.

**⚠️ Methodological caveat I caught on myself.** I ran GitHub **code search** for `difference-in-differences path:SKILL.md` and `synthetic control path:SKILL.md` — both returned `total_count: 0`, which looks like beautiful whitespace evidence. It is not usable: the same search returned 0 for `CUPED path:SKILL.md`, yet I have CUPED in a SKILL.md locally. **GitHub code search does not index these small repos; its nulls are not proof of absence.** I discarded them. All absence claims in this report rest on local-clone greps. (A1 separately hit a code-search 403 rate limit, so the charter's code-search sweep is **incomplete** — an unfilled gap, though the above suggests it would have been low-value anyway.)

**✅ Confirmed by independent re-run**: coreyhaines31 at 42,622★ / 49 skills / 14,720 SKILL.md lines / exactly 1 LICENCE file; its zero-hits for SRM, sample-ratio, CUPED, SUTVA, interference, switchback, Simpson, FDR, frequentist, Twyman, primacy, stopping rule, power analysis; the peeking eval quote; rampstack 508★ MIT; skene 18★ MIT; phuryn 24,751★ MIT; contains-studio 12,395★ with no licence file; menkesu MIT-behind-NOASSERTION.

---

## 8. Licences — every file opened

**Two API lies in eight checks, and one of them is the commercially restrictive licence.** The rule earns its keep.

| Repo | ★ | API says | LICENSE **file** says | Liftable? |
|---|---:|---|---|---|
| coreyhaines31/marketingskills | 42,622 | MIT | **MIT** — 1 file, **no per-skill licences** | ✅ README: "Use these however you want" |
| phuryn/pm-skills | 24,751 | MIT | **MIT** | ✅ |
| **deanpeters/Product-Manager-Skills** | 6,173 | **NOASSERTION** | ⚠️ **CC BY-NC-SA 4.0** | ❌ **NonCommercial + ShareAlike — do not lift** |
| **contains-studio/agents** | 12,395 | null | ⚠️ **NO LICENCE FILE** | ❌ all rights reserved by default |
| **menkesu/awesome-pm-skills** | 383 | **NOASSERTION** | **MIT** | ✅ |
| rampstackco/claude-skills | 508 | MIT | **MIT** (RampStack Co.) | ✅ |
| OpenClaudia/openclaudia-skills | 608 | MIT | **MIT** | ✅ |
| Eronred/aso-skills | 1,700 | MIT | **MIT** (Erencan) | ✅ |
| SkeneTechnologies/plg-skills | 18 | MIT | **MIT** | ✅ |
| shahriarfarzadi/run-ab-experiments-skill | 0 | MIT | **MIT** | ✅ |
| LeihuaYe/claude-experimentation | 0 | MIT | **MIT** | ✅ |
| RBraga01/builder-growth | 2 | MIT | **MIT** | ✅ |
| brubinsztein/strategic-experimentation-coach | 0 | MIT | **MIT** | ✅ |
| **PostHog/ai-plugin** | 65 | null | ⚠️ **NO LICENCE FILE** (A1) | ❌ — and note PostHog's *other* repo (`PostHog/skills`) **is** MIT. Do not conflate |
| webtrends-optimize/claude-code-ab-testing-skills | 1 | — | **GPL-3.0** | ⚠️ copyleft (moot — empty) |
| anthropics/skills | 165,624 | null at repo level | **per-skill `LICENSE.txt`** (A1) | licences per skill, not per repo |

**Three do-not-lift repos: deanpeters (NC+SA), contains-studio (none), PostHog/ai-plugin (none).** Note that "official vendor repo" is not a proxy for "has a licence."

Worth matching, not just noting: coreyhaines31 practices its own attribution discipline when borrowing — its `VERSIONS.md:130` records that content adapted from a MIT+Commons-Clause pack "was rewritten rather than copied."

---

## 9. What this channel recommends the controller carry forward

1. **Say "open at scale," never "empty."** Name rampstack and OpenClaudia as competent prior art. Two named packs can falsify a sloppier claim in thirty seconds.
2. **The wedge is adjudication + completeness, not literacy.** Surface without rigor (skene, 18★) or rigor without surface (rampstack, 8 of 102 skills). Nobody has both.
3. **The small-sample wedge survives but must be stated narrowly.** Not "nobody teaches the small-sample case" — rampstack ships a skip-the-test rule, geo experiments and diff-in-diff. The claim that holds: **the ecosystem's best work is written for a reader who is traffic-constrained inside a large company, not for the operator whose n is small by nature.** That reader is told to refuse, and given nothing else.
4. **Ship executable, tested calculators.** Two of the three sample-size treatments in the ecosystem are demonstrably wrong in opposite directions, and no reader can check any of them.
5. **Source every number.** The unsourced-magnitude-on-a-correct-concept pattern (peeking "25-30%", SRM ">1%", the 0.23-at-5-checks figure) is the ecosystem's characteristic failure and the easiest place to be visibly better.
6. **Assert the growth/operate seam with confidence** — four independent practitioner sources drew it before we did (§6).
7. **Study rampstack's information architecture**, independent of content: every skill states what it does *not* cover and points to the sibling that does. That is our faceted router, arrived at independently.
8. **Disambiguate "loops" and "guardrail"** — two and three meanings respectively in the incumbent corpus.
9. **Open items**: the 0.23-at-5-checks figure needs channel D against Armitage 1969; the GitHub code-search sweep is incomplete (rate limit) though likely low-value; A1 flagged `antocci/ab-test-review` — the only repo whose description cites Kohavi/Tang/Xu by name — as inferred-only, unopened.
