# Channel E — `/webdesign` legacy-skill extraction, **growth slice**

**Source:** `/Users/tamas/.claude/skills/webdesign/` — `SKILL.md` (164 lines) + 22 references in
`references/`, **3,707 lines total**. Read end-to-end, no sampling (the 13 pure-craft files were
additionally keyword-swept to catch anything a read might gloss).

**License:** `license: MIT` declared in `SKILL.md:16`; source repo `https://github.com/gabros20/webdesign`
(`SKILL.md:18`). No separate LICENSE *file* exists in the installed directory — the frontmatter field is
the only license artifact. It is **the user's own skill, so verbatim lift is permitted throughout.**
Two references self-declare adaptation from `pbakaus/impeccable` (Apache-2.0) — `design-critique.md:9`,
`frontend-design-principles.md:38` — and `frontend-build-patterns.md` from `bendc/frontend-guidelines`
(`SOURCES.md:53`). None of those adapted portions are in the growth slice.

**Method.** (1) Read the marketing run's full disposition table
(`marketing-skill/research/webdesign-extraction.md`, 720 lines) as a map. (2) Re-read all 23 webdesign
files directly through a growth lens. (3) **Cross-checked every ALREADY-LIFTED claim against marketing's
actually-shipped references** (`marketing-skill/skills/marketing/references/`, 20 files) by grep — not
against the disposition table. This step changed four verdicts: the marketing table listed items as LIFT
that **did not survive into the shipped pack**. (4) Also grepped the shipped `design`, `frontend`,
`product`, `quality`, `data`, and `operate` packs to confirm the orphans are genuinely unhomed.

---

## Verdict up front

**The webdesign skill contains no experimentation content, no analytics content, and no measurement
content.** There is not one mention of A/B testing, statistical significance, sample size, control
groups, variants, funnels-as-measured-objects, event tracking, cohorts, or retention curves in 3,707
lines. This is a genuine finding, not a gap in my reading: the skill is a *design* system, and its
entire relationship to outcomes is **asserted effect sizes borrowed from agency content marketing**,
never a method for learning whether something worked.

So the growth slice is small but disproportionately valuable, and it splits into three very different
kinds of material:

1. **Three orphans** — content that is growth-shaped, that marketing's table marked for lift, and that
   **verifiably did not land in any shipped pack.** These are pure loss risk. The most valuable is the
   **color-psychology myth correction**, which is a ready-made instance of the growth charter's own
   wedge hypothesis #2 (CRO folklore falsification) written by the user years before the wedge was
   named.
2. **A falsification strip, pre-assembled.** The skill states ~10 CRO effect-size claims with no study,
   no sample, no date, and no denominator. As *marketing* content these were correctly dropped. As
   *growth* content they are the raw material for a falsification strip — the claims practitioners
   actually repeat, with the exact secondary sources that launder them, all in one place.
3. **Transferable process patterns** (not growth content) — the review-loop epistemics in
   `art-review.md` and `design-critique.md` are structurally the same problem growth has: how a
   judgment-based verdict stays honest. Worth stealing the *shape*, not the words.

Roughly **175 of 3,707 lines (~4.7%)** are growth material by the strictest reading, versus the ~470
lines (13%) marketing claimed. Almost all of it is concentrated in one file,
`persuasion-and-conversion.md`.

---

## (a) Growth-slice disposition table

One row per content unit. Dispositions: **LIFT-VERBATIM** · **LIFT-REWORKED** ·
**ALREADY-LIFTED-BY-MARKETING** (with the shipped file that took it) · **STAYS-ELSEWHERE** (named pack)
· **DISCARD**.

### `SKILL.md` (164 lines)

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| Frontmatter / version / scope / router table / hand-off list | `SKILL.md:1-105`, `147-164` | Metadata and routing for a skill being abandoned. | **DISCARD** | No growth content. Family router supersedes. |
| Law 4 — design for the business, premium↔info dial | `SKILL.md:120-124` | Set the premium↔information dial before any visual move; position set by stakes & emotion, not taste. | **STAYS-ELSEWHERE → design** | Shipped verbatim-equivalent at `design/references/surface-website.md:36-40`. Growth has no claim: this is page composition. |
| Laws 1,2,3,5,6,7 | `SKILL.md:111-119`, `125-145` | Depth, contrast, one bold move, register, anti-defaults, real assets. | **STAYS-ELSEWHERE → design** | Pure visual craft. |

### `persuasion-and-conversion.md` (139 lines) — **the growth file**

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| Ethical frame (opening) | `:1-7` | "Honest persuasion **reduces friction to a decision the user genuinely wants**; a dark pattern **manufactures a decision against their interest**. The strongest long-term lever is a real value match, not a trick." | **ALREADY-LIFTED-BY-MARKETING** | Verified shipped at `marketing/references/landing-pages-and-conversion.md:176-177`. Growth cites, never restates. |
| Cialdini's 7 as sections | `:12-25` | Reciprocity / commitment / social proof / authority / liking / scarcity / unity, each with a named failure mode. | **ALREADY-LIFTED-BY-MARKETING** | Shipped in `landing-pages-and-conversion.md` §on persuasion (verified: mechanism rows at `:165-172`). **Two clauses have a growth-side reading** — see next two rows. |
| ↳ Reciprocity's device list | `:12-13` | "lead magnet, calculator, audit, **free trial**, ungated useful content" before the ask. *Pitfall:* "free" that's a forced data-grab reads as bait. | **LIFT-REWORKED** | The free trial is a **monetization/PLG mechanism**, not a lead magnet. Growth's canonical scope includes monetization + PLG; marketing shipped this as a *content-offer* list. Growth reworks: trial-vs-demo-vs-freemium is a growth-model decision. |
| ↳ Commitment's device | `:14-15` | "win a small yes, then escalate (**multi-step forms: easy question first**). *Pitfall:* don't hide the real cost behind the innocuous first step." | **LIFT-REWORKED** | This is **signup-flow / activation** design stated as a persuasion principle. Growth owns onboarding optimization. Marketing shipped only the ethics row ("Commitment \| Honest progressive steps \| Hidden cost revealed late", `landing-pages-and-conversion.md:168`-region), not the mechanism. |
| Anchoring / framing | `:30-33` | First number sets the frame; gain- vs loss-framing. | **ALREADY-LIFTED-BY-MARKETING** | `landing-pages-and-conversion.md:112`-region. Growth's interest is only *testing* the frame. |
| Loss aversion / endowment | `:34-35` | "**free trials that let users build/personalize** (won't want to lose it); 'your cart/plan,' pre-filled progress. *Pitfall:* **easy-in/hard-out cancellation is a dark pattern**." | **LIFT-REWORKED** (partial ALREADY-LIFTED) | Marketing shipped the ethics row verbatim (`landing-pages-and-conversion.md:171`: "Endowment \| Personalizing a real free trial \| Easy sign-up, deliberately hard cancellation") and the mechanism at `:112`. **The growth residue:** trial *design* as an activation lever, and the cancel flow as a **churn/retention surface** — the ethics of the cancel flow is a retention-mechanism ethic, not a landing-page ethic. Growth needs its own row set. |
| Von Restorff | `:36-38` | Reserve the boldest color for the primary CTA; spend distinctiveness once per view. | **STAYS-ELSEWHERE → design** | Verified shipped at `design/references/interaction.md:90`. |
| Hick's law + jam study | `:39-41` | Decision time grows with options; 3–5 visible choices then progressive disclosure; "jam study: 6 options outsold 24". | **STAYS-ELSEWHERE → design** | Design owns control behavior. **Growth note:** the jam study (Iyengar & Lepper) has a contested/partially-failed replication record — if it reaches any pack it must be flagged as contested. Marketing's table already flagged this (`webdesign-extraction.md:527`). |
| Fitts's law | `:42-43` | Big/near/easy targets; ≥44×44px; sticky CTA on long pages. | **STAYS-ELSEWHERE → design** | |
| Zeigarnik | `:44-45` | "unfinished tasks nag toward completion: **progress bars ('Step 2 of 3'), profile-completion meters.** *Pitfall:* **manufactured endless incompletion = engagement-farming**." | **LIFT-REWORKED** (partial STAYS) | Design shipped the mechanic (`interaction.md:90`: "**Zeigarnik:** show progress ('Step 2 of 3') on multi-step tasks"). **Design did NOT ship the profile-completion meter or the engagement-farming pitfall.** Those are growth: a completion meter is an *activation* device and "engagement-farming" is the **habit/gamification ethics line** the growth charter explicitly anticipates (Nir Eyal adjacency, canon §2). |
| Peak-end rule | `:46-47` | Engineer a delight peak + a strong close ("thank-you + next step"). | **STAYS-ELSEWHERE → design** | Shipped at `design/references/interaction.md:90`. **Thin growth residue:** "thank-you + next step" is the post-conversion → activation handoff; growth may cite it as the seam where a conversion becomes an activation. |
| Cognitive load / Miller | `:48-49` | Working memory ~3–5 chunks; beyond 3–5 weighted options → analysis paralysis. | **STAYS-ELSEWHERE → design** | Also in `design-critique.md:30-32`. |
| **Attention Ratio + the ~31% claim** | `:54-55` | "**Attention Ratio** = links-on-page ÷ intended-actions… tightening toward 1:1 commonly lifts conversion **~31%**." | **ALREADY-LIFTED-BY-MARKETING** (metric) + **LIFT-REWORKED** (the number) | Marketing shipped the metric at `landing-pages-and-conversion.md:61-64` and **deliberately dropped the 31%**, replacing it with "agency case studies report double-digit conversion" — good discipline. **Growth's claim is the number itself, as a falsification target**: a single-vendor (Unbounce, who sells landing pages) figure with no denominator. See §(d). |
| CCD — the 7 principles | `:56-67` | Create focus · build structure · message match · show benefits · draw attention · design for trust · reduce friction. | **STAYS-ELSEWHERE → design** + one LIFT | Grep of the shipped marketing pack finds **no trace of principles 1–6 by name** (only "squint test" survived, at `positioning-and-messaging.md:130`). They are page-composition doctrine and design's 8-beats + question chain (`design/references/surface-website.md:58-60`) covers the same ground in a different vocabulary. **Principle 7 is the exception** — next row. |
| ↳ **CCD principle 7 — reduce friction** | `:66-67` | "**3–5 fields max; drop the name field where it correlates with lower conversion; multi-step + progress bar;** fast load; accessible contrast." | **LIFT-REWORKED** — **ORPHAN #3** | **Verified unhomed.** Grepped all seven shipped packs for `3.5 fields\|name field\|form field\|multi-step\|progress bar`: design has multi-step *flows* (`journeys.md`) and frontend has form *state*, but **nobody carries form length as a conversion variable.** This is signup-flow optimization = growth's activation/CRO territory. The "drop the name field **where it correlates with** lower conversion" phrasing is notable — it is the one place in the whole skill that gestures at conditional, measured evidence rather than a rule. |
| The ONE-goal rule | `:69-70` | One conversion goal per landing page (1:1); homepages may be 1:many — don't confuse the two. | **ALREADY-LIFTED-BY-MARKETING** | Verified at `landing-pages-and-conversion.md:52`, `:181`. |
| Value prop above fold / benefit-led / objection handling / urgency | `:75-81`, `:84-85` | Page anatomy, feature→benefit translation, FAQ placement, honest urgency. | **ALREADY-LIFTED-BY-MARKETING** | `landing-pages-and-conversion.md` + `positioning-and-messaging.md`. |
| **CTA copy + the test-order heuristic** | `:82-83` | "first-person ('Start **my** free trial') beats second-person by **10–90%**; value-specific beats 'Submit'; 2–5 words. **Test order: copy → placement → color.**" | **LIFT-VERBATIM** — **ORPHAN #1** | **Verified unhomed.** Grep for `test order\|copy.{0,12}placement\|placement.{0,12}color` across the entire shipped marketing pack returns **zero hits**. Marketing's own table flagged it as "a testing-priority claim that belongs in the marketing↔growth seam" (`webdesign-extraction.md:212-213`) and then didn't ship it. **This is an experiment-prioritization rule** — squarely growth's canonical scope ("experiment prioritization"). The 10–90% range is separately a falsification target (§d). |
| The ~50ms halo | `:90-93` | Users judge visual appeal in 50ms; it colors later credibility judgments. | **STAYS-ELSEWHERE → design** | Lindgaard et al. is the one peer-reviewed anchor in the file (`SOURCES.md:104`). Growth must not build on it. |
| Aesthetic-usability effect | `:94-96` | Beautiful designs *perceived* as more usable; "aesthetics↔trust ~r=0.74". *Pitfall:* "polish delays complaints, it doesn't fix broken flows." | **STAYS-ELSEWHERE → design** + **LIFT-REWORKED** (the pitfall) | The r=0.74 is unattributed (§d). **The pitfall is a growth insight in disguise:** aesthetics suppress the *complaint signal* without changing the *behavior* — i.e. a qualitative-feedback metric can improve while the funnel does not. That is a guardrail-metric argument. |
| **Color psychology — evidence vs myth** | `:97-102` | Universal color→emotion→purchase claims are "**largely unsupported folklore**"; what's real is **contrast**, differentiation, and recall — "a red button beats blue *on a blue page* because it stands out, not because red is 'better'". | **LIFT-VERBATIM** — **ORPHAN #2, highest value in the slice** | **Verified unhomed.** Grepped marketing, design, frontend, product, quality, data, operate for `color psycholog\|blue.*trust\|red button\|folklore` — **zero hits anywhere** (quality's only "folklore" hit is about a Google flaky-test figure). Marketing's own loss-risk list ranked it item 8 and called it "a rare debunking that most marketing sources get wrong; worth carrying forward deliberately" (`webdesign-extraction.md:715-716`) — **and then did not carry it.** See §(c) for why this is growth's, not marketing's. |
| Whitespace as confidence / restraint & editorial rhythm | `:107-111` | Negative space signals confidence; luxury subtracts. | **STAYS-ELSEWHERE → design** | |
| Scarcity → desire (waitlists, members-only) | `:112-113` | Limited editions, waitlists, "by invitation". | **ALREADY-LIFTED-BY-MARKETING** | Demand-capture framing; `go-to-market-and-launch.md`. |
| Price-anchoring for premium | `:114-116` | Visible flagship tier anchors the range up; never discount-shout; "minimalism sells luxury, clutter signals bargain." | **STAYS-ELSEWHERE → product ∥ marketing** | Marketing shipped the split explicitly: "`product` owns the price, the tier structure, and the decoy tier" (`landing-pages-and-conversion.md:122`, restated `handoff.md:36`). The "clutter signals bargain" clause rests on the weakest source in the whole file (a therapy-practice blog, `SOURCES.md:106`) — **drop it**. |
| **Pricing-page mechanics** | `:117-122` | "**three tiers** convert **~1.4×** two (4+ convert worse); **center-stage effect**; **decoy effect** (distinct from anchoring: anchoring sets a reference *number*, decoy adds a *dominated option*); stack signals on the target tier; **charm pricing** ($X9), but luxury uses round prices." | **LIFT-REWORKED** | Marketing routed the *decision* to product and kept only the page's message. **Growth's canonical scope explicitly includes "pricing-packaging experiments" and "monetization/expansion"** — so the three-way seam is: product sets tiers · marketing writes the page · **growth tests the packaging**. The ~1.4× is a falsification target (§d); the **anchoring≠decoy distinction is conceptually sound and worth keeping** as the thing a pricing experiment must not confound. |
| **The ethics / dark-pattern table** | `:126-139` | Six mechanism rows (scarcity, commitment, social proof, default/Zeigarnik, endowment, confirmshaming) × ethical use vs dark pattern; FTC 2022→2025 framing; "design for the user's **informed yes**." | **ALREADY-LIFTED-BY-MARKETING** + **LIFT-REWORKED** (two rows) | Verified shipped nearly verbatim at `landing-pages-and-conversion.md:161-177`, including the Endowment and Default/progress rows. **Growth should not restate the table.** But two rows are *growth-mechanism* ethics, not persuasion-copy ethics: **Default/Zeigarnik → "forced continuity, a gamified bar that never completes"** and **Endowment → "easy sign-up, deliberately hard cancellation."** Those govern **retention and habit**, which growth owns. Recommendation: growth ships a *small, non-overlapping* retention-ethics set (streak guilt, notification farming, cancel-flow friction, resurrection spam) that cites marketing's table for the acquisition-side rows. |

### `trust-proof-and-structure.md` (111 lines)

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| Three credibility layers + "75% judge credibility on design (Stanford)" | `:9-15` | Visual / content / social layers; "Trust signals lift conversion **~15–34%**; **93%** read reviews before buying." | **ALREADY-LIFTED-BY-MARKETING** (structure) + **LIFT-REWORKED** (numbers → falsification strip) | Marketing shipped the structure and **dropped all three numbers** (grep for `15.{0,3}34\|93%\|200%` in the shipped pack: zero hits). Correct call. Growth takes the numbers only as falsification targets (§d). |
| E-E-A-T as design | `:19-29` | Experience / expertise / authoritativeness / trust as page requirements. | **ALREADY-LIFTED-BY-MARKETING** | No growth claim. |
| Social-proof device taxonomy | `:33-41` | Testimonials, logo walls, numbers, case studies, trust badges. | **ALREADY-LIFTED-BY-MARKETING** | `landing-pages-and-conversion.md:83`-region. |
| **"Placement is the lever"** | `:42-44` | "put the strongest testimonial / rating badge / guarantee **directly next to the CTA or form**… **Cluster** testimonials for a bandwagon effect." | **ALREADY-LIFTED-BY-MARKETING** | Verified verbatim-equivalent at `landing-pages-and-conversion.md:91-93` ("**Placement is the lever, not just presence**"). **Growth note (no lift needed):** this is a well-formed, cheap, high-leverage **hypothesis class** — placement holds content constant, so it is one of the few CRO changes that does not confound message with position. Worth citing as an example of a testable-by-construction variable. |
| Information architecture (nav counts, plain labels, scannability, progressive disclosure) | `:49-58` | 2–7 nav items, flat hierarchy, plain > clever labels. | **STAYS-ELSEWHERE → design** | `design/references/information-architecture.md`. |
| SEO-aware structure incl. JSON-LD | `:62-72`, `:77-79` | Semantic HTML, one H1, structured data, internal linking. | **ALREADY-LIFTED-BY-MARKETING** | `seo-strategy.md` / `ai-search.md`. |
| Core Web Vitals as a design constraint | `:73-76` | "Sub-3s (ideally sub-1s) load is itself a **trust and ranking signal**." | **STAYS-ELSEWHERE → frontend/operate** — *see growth-vs-operate ruling, §(e)* | The budget, the measurement, and the alerting are frontend/operate. The *claim that latency is a conversion lever* is a growth hypothesis source, not growth doctrine. |
| Case-study anatomy | `:83-95` | Context block → Challenge/Solution/Results → proof callouts; pitfall: burying the measurable result. | **ALREADY-LIFTED-BY-MARKETING** | `content-strategy.md`. |
| Dense info without killing premium | `:99-111` | Whitespace, typographic compression, progressive disclosure. | **STAYS-ELSEWHERE → design** | |

### `niche-and-vertical-design.md` (220 lines)

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| The premium↔information dial | `:7-26` | The governing dial; sequence don't blend; set by stakes & emotion. | **STAYS-ELSEWHERE → design** | Shipped at `design/references/surface-website.md:36-40`. |
| Cross-cutting doctrine (premium-creative + trust-heavy) | `:30-56` | Work-is-the-interface, curate hard, three credibility layers, 5–10s first screen, specificity, proof adjacent to action, friction discipline. | **ALREADY-LIFTED-BY-MARKETING** (mostly) | Register clauses → design. **Two growth-flavored fragments below.** |
| ↳ "Fast load is a premium signal (**47% expect <2s**)" / "**Speed = trust** (sub-3s, ideally sub-1s)" / "**Mobile-first (60–83% of traffic)**" | `:40`, `:55-56` | Latency and mobile-share assertions. | **LIFT-REWORKED** → falsification strip | Three numbers, zero sources. The 60–83% traffic range is so wide it is not a fact, it is a shrug. Falsification targets (§d). |
| ↳ "**The About/Team page converts**" / "Team page (**2nd most-visited**)" | `:41`, `:73` | Claims about which page drives conversion. | **LIFT-REWORKED** → falsification strip | An unsourced page-level conversion claim; exactly the kind of "we know what converts" folklore growth exists to test. |
| **Per-vertical GOAL statements** | `:69`, `:86`, `:94`, `:104`, `:116`, `:126`, `:137`, `:148`, `:159-160`, `:172-173`, `:186` | Each vertical's playbook names its conversion goal. | **LIFT-REWORKED** — **the sleeper find** | The marketing pass treated these as landing-page requirements. **Read as a set, they are a primitive conversion-goal taxonomy, and three of them are quietly guardrail-aware** — see §(c) ORPHAN-adjacent finding. |
| ↳ Architecture: "**get pre-screened-in** → book a consult" | `:69` | The site's job is to *filter*, not just capture. | **LIFT-REWORKED** | Conversion-rate-as-goal is wrong when the site's job is qualification. Growth framing: optimizing submit-rate without a downstream-quality guardrail is the classic own-goal. |
| ↳ Healthcare: "book appointment **+ improve inquiry *quality***" | `:148` | Two-part goal: volume **and** quality. | **LIFT-REWORKED** | The single clearest guardrail-metric instinct in the whole skill. |
| ↳ Real estate: "capture leads **+ keep users in search**" | `:159-160` | Conversion goal **and** an engagement/session-depth goal that can trade against it. | **LIFT-REWORKED** | Two goals in tension = a guardrail pair. |
| ↳ B2B SaaS: "demo request **or** trial signup"; "**offer trial + demo for different readiness**" | `:172-173`, `:179` | Two conversion paths mapped to two buying stages. | **LIFT-REWORKED** | This is the **PLG-vs-sales-assisted motion split** stated as a page-layout note. Growth owns PLG; the "two CTAs are not competing CTAs if they map to different readiness" rule is a real, transferable growth-model idea. |
| Per-vertical audience profiles, structures, proof devices, registers, pitfalls | `:64-195` (bulk) | Eleven vertical playbooks. | **ALREADY-LIFTED-BY-MARKETING** (audience/structure/proof) + **STAYS → design** (register clauses) | Verified: marketing shipped vertical treatment in `audience-and-segmentation.md` and `landing-pages-and-conversion.md:142`-region. No further growth claim. |
| "~9 in 10 pro-services buyers rule a firm out before contact, 8+ in 10 evaluate via the website first" | `:65-66` | Pro-services buying-behavior stat (traces to Hinge Marketing). | **STAYS-ELSEWHERE → marketing** + falsification note | Hinge runs a real research program (rung ~3); of all the numbers in the skill this one is the most likely to survive re-checking. |
| "**79%** want background on the artist/work before buying" | `:115-116` | Unsourced. | **LIFT-REWORKED** → falsification strip | |
| "visible credentials + social proof can lift conversion **up to ~200%**" | `:189-190` | Unsourced, and "up to" makes it unfalsifiable as stated. | **LIFT-REWORKED** → falsification strip | The most abusable number in the file. |
| Brand↔info axis table | `:199-212` | Per-vertical brand vs info weighting + signature proof device. | **ALREADY-LIFTED-BY-MARKETING** | |
| How-to-use procedure | `:214-220` | Name vertical → set dial → structure → proof device → sequence. | **STAYS-ELSEWHERE → design ∥ marketing** | |

### `design-critique.md` (96 lines)

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| Nielsen 10 heuristics scored 0–40 | `:14-19` | Scored usability rubric. | **STAYS-ELSEWHERE → design/quality** | |
| **Honesty calibration** | `:21-23` | "most real, shipped interfaces score **20–32/40**. **A 38 means you aren't looking hard enough.** Report per-heuristic scores… name the lowest two." | **LIFT-REWORKED** — pattern, not content | The **calibration-band device**: publish the expected distribution of a judgment score so an implausibly good result reads as a *measurement failure* rather than a win. Growth's exact analogue is the experiment win-rate (the canon's "~1/3 win at Microsoft"): if every test you run wins, your instrumentation is broken. Steal the shape; the design numbers stay with design. |
| Cognitive load + Working-Memory Rule | `:26-35` | ≤4 items; "nav ≤ 5, hierarchy ≤ 3 tiers, **a form step ≤ 4 fields before it feels like work**" (Miller, revised by Cowan 2001). | **STAYS-ELSEWHERE → design** + **LIFT-REWORKED** (form clause) | Design owns the rule. The **form-step ≤4 fields** clause pairs with `persuasion-and-conversion.md:66` (ORPHAN #3) as the second unhomed statement of form length as a conversion variable — and it is the better-sourced of the two (Cowan 2001 is a real, findable paper). |
| Five test personas | `:37-42` | Walk the key flow as power user / first-timer / accessibility user / stress-tester / distracted-mobile. | **STAYS-ELSEWHERE → design** + **LIFT-REWORKED** | Growth reading: a **structured qualitative walkthrough is the honest substitute for an underpowered A/B test** on a small-sample product. Directly serves growth wedge hypothesis #1 (small-sample honesty). Growth reworks the *method*, cites design for the personas. |
| Mechanical checks | `:44-50` | Contrast, overflow, heading levels, tap targets. | **STAYS-ELSEWHERE → design/quality** | |
| Severity routing P0–P3 + the P1 test | `:52-60` | "**would a real user contact support over this?**" | **STAYS-ELSEWHERE → design/quality** | Pattern worth noting: severity anchored to an *observable consequence*, not a felt magnitude. |
| Synthesis / weave / peak-end read | `:62-68` | Note where judgment and mechanical checks agree (high confidence), where they disagree, call out false positives. | **LIFT-REWORKED** — pattern | This is **triangulation discipline**: agreement between an independent qualitative read and a mechanical detector raises confidence; disagreement is itself information. Growth's version is the four-way convergence pattern the family already uses. |
| Go/no-go gate (coverage, build health, look at the real thing) | `:70-96` | "**Any P0, or a P1 you can't immediately fix, is a NO-GO.**" | **STAYS-ELSEWHERE → quality** | Marketing's table already routed this to quality. |

### `art-review.md` (213 lines)

| Unit | file:line | Content summary | Disposition | Notes |
|---|---|---|---|---|
| Review contract, capture tooling, per-section walk, A0–A3 severities, output shape, boundaries | `:1-143`, `:174-213` | The art-direction review loop. | **STAYS-ELSEWHERE → design** | No growth content. |
| **"Degrade honestly"** | `:56-58` | "No browser at all → review markup against the direction and label it explicitly: *'code-level pass — not an art review; no build was viewed.'* **Never present an unviewed review as a viewed one.**" | **LIFT-REWORKED** — pattern | Structurally identical to growth's central honesty obligation: **never present an unpowered or unrandomized comparison as an experiment result.** The move — do the weaker thing, but *label the weaker thing in the artifact itself* — is exactly the shape a small-sample growth pack needs. |
| **"Finding nothing is a conclusion you earn by looking"** | `:79-85` | "actively hunt for the small defect… Finding nothing is a conclusion you earn by looking, not a default." | **LIFT-REWORKED** — pattern | Growth's analogue: a flat result is a finding only if the test could have detected the effect. A null from an underpowered test is not "no difference," it is "no information." |
| **No-first-pass-sign-off rule** | `:144-159` | Round 1 never approves; promote the best 1–3 refinements into the blocking list. | **STAYS-ELSEWHERE → design** | **Explicitly do NOT port to growth.** A mandatory "something must change" round is a *design* device; in experimentation the equivalent — a rule that guarantees you ship a change every round — is precisely the bias that manufactures false positives. Worth recording as a **pattern that must not transfer**. |
| **Convergence discipline** | `:161-172` | "Converge from round 2 on, don't chase perfection… **Round-over-round, only escalate** — don't introduce new low-value nitpicks you let pass earlier, that's thrash. **Cap the loop** (default 3 rounds); if items remain at the cap, proceed with findings recorded." | **LIFT-REWORKED** — pattern | The **pre-committed stopping rule with a hard cap and a documented-exit**. This is the peeking problem's governance sibling: decide the stopping rule up front, don't move the goalposts round to round, and record what was unresolved at the cap. Strong shape for growth's iteration loop. |

### Pure-craft and build files — all **STAYS-ELSEWHERE**, no growth content

Keyword-swept for `convert/conversion/A-B/experiment/analytic/funnel/onboard/activat/retention/churn/signup/cohort/CTA/bounce/engagement/email/newsletter/popup/personaliz/KPI/north star/baseline`. Every hit was a craft usage.

| File | Lines | Disposition | Only notable hits |
|---|---|---|---|
| `section-archetypes.md` | 211 | **STAYS → design/frontend** | `:34-37` restructuring IA "aimed at a different **funnel** or audience" — the word appears, the concept does not; it is a redirect-map rule. `:82-93` copy-fidelity ladder → already shipped at `design/references/information-architecture.md:67`. `:122-130` "proof before the ask" → marketing. |
| `section-design-workflow.md` | 142 | **STAYS → design** | Craft router, device map, anti-boring checklist. `:131` "the section's one job (one message, one action)" restates the ONE-goal rule. |
| `frontend-design-principles.md` | 183 | **STAYS → design** | Register doctrine, real-assets rule, three AI-default looks, UI microcopy (`:159-183`, explicitly *not* acquisition copy). |
| `design-thinking.md` | 97 | **STAYS → design** | `:83` names "conversion" as one legitimate anchor for a critique note ("Ban 'I like / I don't like'") — a critique-framing rule, not growth content. |
| `design-direction.md` | 178 | **STAYS → design** | `DESIGN.md` authoring + alpha CLI. Verify currency before any reuse. |
| `anti-default-catalog.md` | 64 | **STAYS → design** | Dated AI tells. |
| `color-and-rhythm.md` | 82 | **STAYS → design** | `:50` 60-30-10 with accent on CTAs — craft. |
| `typography.md` | 114 | **STAYS → design** | |
| `layout-and-composition.md` | 226 | **STAYS → design** | `:176-181` F/Z eye-flow, incl. "**never put the only CTA bottom-right of a text block**" — CTA *placement* doctrine, which is the "placement" leg of ORPHAN #1's test order. Design owns the doctrine; growth owns whether it survives a test. |
| `depth-and-texture.md` | 186 | **STAYS → design** | |
| `imagery.md` | 189 | **STAYS → design** | |
| `decoration.md` | 105 | **STAYS → design** | |
| `motion-and-interaction.md` | 129 | **STAYS → design** | |
| `experimental-and-creative.md` | 143 | **STAYS → design** | |
| `frontend-build-patterns.md` | 473 | **STAYS → frontend** | `:73` the section registry includes a `newsletter` key — email capture exists as a *schema slot* only, with zero guidance attached. `:214-218` redirect map → marketing/frontend. |
| `tailwind-v4-theme.md` | 118 | **STAYS → frontend** | |
| `SOURCES.md` | 124 | **Mining input** | Growth-relevant rows extracted in §(f). |

---

## (b) Line accounting — nothing left behind

| File | Total | Growth-slice lines | Rest |
|---|---|---|---|
| `SKILL.md` | 164 | 0 | design (43–76, 107–145) · discard (rest) |
| `persuasion-and-conversion.md` | 139 | **~62** (12–15, 34–35, 44–45, 54–55, 66–67, 82–83, 94–96, 97–102, 117–122, 126–139 partial) | marketing (bulk) · design (36–49, 89–96, 107–111) |
| `trust-proof-and-structure.md` | 111 | **~10** (14–15, 42–44 cite-only, 73–76 boundary) | marketing (bulk) · design (49–58, 99–111) · frontend (73–76) |
| `niche-and-vertical-design.md` | 220 | **~25** (40–41, 55–56, 69, 73, 115–116, 148, 159–160, 172–173, 179, 189–190) | marketing (bulk) · design (register clauses, 7–26) |
| `design-critique.md` | 96 | **~20** (21–23, 30–32, 37–42, 62–68 — all as patterns) | design/quality (rest) |
| `art-review.md` | 213 | **~40** (56–58, 79–85, 144–172 — all as patterns) | design (rest) |
| `section-archetypes.md` | 211 | 0 | design/frontend/marketing |
| Other 16 files | 2,553 | **0** | design (2,062) · frontend (491) |
| **Total** | **3,707** | **~157 lines of content + ~60 lines of pattern** | fully dispositioned |

Every line range in all 23 files is accounted for by a row above or by the marketing pass's disposition
(which I re-verified rather than assumed). **No range is unassigned.**

---

## (c) The three orphans — full text, self-sufficient

These are the only pieces of the webdesign skill that would be **permanently lost** if the directory
were deleted today. Each was verified absent from all seven shipped packs by grep.

### ORPHAN #1 — the test-order heuristic (`persuasion-and-conversion.md:82-83`)

> "**CTA copy** — first-person ('Start **my** free trial') beats second-person by 10–90%;
> value-specific ('Get 3 free templates') beats 'Submit'/'Learn more'; 2–5 words.
> **Test order: copy → placement → color.**"

**Why growth:** "Test order" is an **experiment-prioritization rule** — it claims an ordering of
expected effect size across three variable classes on the same element. The growth charter's canonical
scope names "experiment prioritization" as one of the 17 included jobs.

**Why it is more interesting than it looks.** The ordering is almost certainly *right* and its usual
justification is *wrong*. The defensible reason to test copy before color is not that copy has a bigger
true effect — it is that **copy changes the message while color changes only the salience**, so a copy
test is answering a question about what the user wants, and a color test is answering a question about
where the eye goes, and the second is usually already answered by contrast doctrine
(`persuasion-and-conversion.md:98-102` — ORPHAN #2 — says exactly this). Growth should ship the ordering
**with the mechanism**, not as a folk ranking. Stated properly it becomes a general rule: *test the
variables that change what is being offered before the variables that change how loudly it is offered.*

**Handle the 10–90% with tongs.** A range that spans an order of magnitude is a citation of a citation.
It traces to Kissmetrics (`SOURCES.md:105`), which marketing's own pass flagged as "suspiciously wide,
verify" (`webdesign-extraction.md:537`). Never-ship as a magnitude.

### ORPHAN #2 — color psychology, evidence vs myth (`persuasion-and-conversion.md:97-102`) — **highest value**

Full verbatim:

> "**Color psychology — evidence vs myth** — universal color→emotion→purchase claims are **largely
> unsupported folklore.** What's real: (1) **contrast** drives CTA performance (a red button beats blue
> *on a blue page* because it stands out, not because red is 'better'); (2) color aids
> **differentiation** and **brand recall**; (3) palettes shift perceived premium-ness/mood, not
> deterministic behavior. *Apply:* pick CTA color for max contrast against its surroundings (≥4.5:1,
> also the a11y floor); use color for hierarchy + brand distinctiveness. *Pitfall:* don't cite
> 'blue = trust, orange = buy' as fact."

Source: Branding Bullshit, *Branding Myths: Color Psychology* (`SOURCES.md:105`,
https://www.brandingbullshit.com/p/branding-myths-color-psychology).

**Why this is growth's and not marketing's.** The button-color A/B test is the single most-repeated
artifact in CRO folklore, and this passage is a complete, correct diagnosis of *why the famous result
doesn't generalize*: the published win was **contrast against that page**, not a property of the color.
That is an **external-validity failure** — the effect is real in the original context and absent in
yours because the moderating variable (surrounding palette) was never named. External validity is
experimentation's problem, not messaging's. Marketing was right not to ship it; it isn't a message
claim. It is a lesson about reading someone else's experiment.

**It is also pre-verified for the growth charter's wedge hypothesis #2** ("CRO folklore falsification —
button-color case studies… a falsification-strip target"). The controller wrote that hypothesis
independently; the user's own skill already contains its worked example. That convergence is worth
flagging to the synthesis gate.

**How growth should ship it:** as the canonical entry in the falsification strip, generalized to the
rule it implies — *before importing anyone's test result, name the variable their context held constant
that yours does not.* Keep the ≥4.5:1 contrast/a11y floor pointer (it is the constructive half), and
keep the "don't cite 'blue = trust' as fact" pitfall verbatim.

### ORPHAN #3 — form length as a conversion variable (`persuasion-and-conversion.md:66-67` + `design-critique.md:30-32`)

> "**Reduce friction** — 3–5 fields max; drop the name field where it correlates with lower conversion;
> multi-step + progress bar; fast load; accessible contrast." (`persuasion-and-conversion.md:66-67`)

> "**Working-Memory Rule:** a person holds **≤ 4 items** at once (Miller's 7±2, revised down by Cowan,
> 2001). Concretely: nav ≤ 5 top items, hierarchy ≤ 3 tiers, **a form step ≤ 4 fields before it feels
> like work**." (`design-critique.md:30-32`)

Supporting fragments elsewhere in the skill, all consistent: "**3–5 form fields, staged intake**,
risk-reducers ('free', 'no obligation')" (`niche-and-vertical-design.md:54-55`); "**staged intake
(routing-critical fields first)**" (healthcare, `:153`); "3–5 form fields" (B2B SaaS, `:179`);
"multi-step forms: easy question first" (`persuasion-and-conversion.md:14`); pitfall "long forms"
(healthcare `:156`, SaaS `:182`); "encrypted intake" (law `:131`).

**Why growth:** signup-flow and intake-form optimization is **activation**, which the charter assigns to
growth ("activation · onboarding optimization · CRO"). Design owns onboarding *flows*
(`design/references/journeys.md:51-53`) and frontend owns form *implementation*, but neither treats
**field count as a variable with a conversion consequence** — verified by grep across all seven packs.

**Note the epistemic quality gradient inside this one item**, which growth should preserve rather than
flatten: "3–5 fields max" is a bare rule of thumb; "**drop the name field where it correlates with
lower conversion**" is conditional and evidence-referencing; "a form step ≤ 4 fields" is anchored to
Cowan (2001), a real and findable paper. Three claims of very different rungs sitting in the same
sentence-space is exactly what a growth pack should teach people to notice.

### ORPHAN-adjacent — the per-vertical goal set as a guardrail taxonomy

Not a single unhomed passage but a **pattern only visible across the eleven playbooks**, which the
marketing pass (reading each vertical as a landing-page brief) did not surface. Verbatim goals:

| Vertical | file:line | Stated goal |
|---|---|---|
| Architecture | `:69` | "get **pre-screened-in** → book a consult" |
| Interior design | `:86` | "attract **aligned** high-end inquiries" |
| Creative agencies | `:94` | "book a discovery call" |
| Luxury / hospitality | `:104-105` | "communicate exclusivity + convert with zero friction" |
| Photographers / artists | `:116` | "let the work sell itself → inquiry/commission/sale" |
| Law | `:126` | "book a (free) consult" |
| Finance | `:137` | "schedule an intro call / resource download" |
| **Healthcare** | `:148` | "book appointment **+ improve inquiry *quality***" |
| **Real estate** | `:159-160` | "capture leads **+ keep users in search**" |
| **B2B SaaS** | `:172-173`, `:179` | "demo request **or** trial signup"; "offer **trial + demo for different readiness**" |
| Professional services | `:186` | "book a discovery/consult call" |

Four of the eleven refuse to state a single scalar goal. Healthcare pairs volume with **quality**;
real estate pairs conversion with an **engagement** metric that can trade against it; architecture and
interiors define success as **filtering** (pre-screened-in, *aligned* inquiries) rather than maximizing;
SaaS splits the goal across **two motions mapped to buyer readiness**.

**Growth reading:** this is a naive but genuine **guardrail-metric taxonomy** — the recognition that
optimizing the primary conversion event alone produces a worse business in at least four of eleven
common cases. Growth should lift the *observation* (not the vertical playbooks, which are marketing's):
**the conversion event is rarely the outcome; name the downstream quality metric before you run the
test, or you will win the test and lose the funnel.** The healthcare line is the cleanest one-sentence
evidence that a practitioner arrived at guardrails without the vocabulary.

---

## (d) Falsification strip — pre-assembled

Every effect-size claim in the skill, with provenance and status. **All are UNVERIFIED**; none carries
a study, sample, date, or denominator. Marketing correctly shipped none of them (grep-verified: zero
hits for `15.{0,3}34|93%|200%|10.{0,3}90%|31%` across the shipped marketing references, and its landing
page ref substitutes the hedged "agency case studies report double-digit conversion" at
`landing-pages-and-conversion.md:64`).

Growth's use is different from marketing's: these are the claims practitioners **actually repeat**, so
they are the falsification strip's target list — and the fact that they all arrive through
vendor-interested secondary sources is itself the teachable finding.

| Claim | file:line | Laundering source | Falsification note |
|---|---|---|---|
| Tightening Attention Ratio toward 1:1 "commonly lifts conversion **~31%**" | `p&c:54-55` | Unbounce (`SOURCES.md:101`) | **Unbounce sells landing pages.** Vendor-interested, no denominator, no sample. Highest-priority target — it anchors the pack's most-cited CRO metric. |
| First-person CTA copy beats second-person by **10–90%** | `p&c:82` | Kissmetrics (`SOURCES.md:105`) | A 9× range is not an effect size. |
| Trust signals lift conversion **~15–34%** | `t-p&s:14-15` | Discovered Labs (`SOURCES.md:112`) | Agency CRO blog. |
| **93%** read reviews before buying | `t-p&s:15` | Discovered Labs | Survey provenance unknown. |
| **75%** judge credibility on website design alone (Stanford) | `t-p&s:10`, `n&v:46`, `:185` | Stanford Web Credibility Project — **no URL anywhere in `SOURCES.md`** | Real research program, but early-2000s; the figure may not survive re-checking against modern traffic. Cited three separate times in the skill — high blast radius. |
| Visible credentials + social proof lift conversion "**up to ~200%**" | `n&v:189-190` | Unattributed | "Up to" makes it unfalsifiable as stated. Worst offender. |
| Three tiers convert **~1.4×** two | `p&c:117-118` | Digital Applied, "Pricing Page Psychology **2026**" (`SOURCES.md:106`) | Date-stamped 2026 → volatile; re-check or drop. |
| Aesthetics↔trust **r=0.74** (Kurosu & Kashimura) | `p&c:95` | No URL | The ATM study is real; the r-value attached to it is unattributed and may be from a different study entirely. |
| Visual processing **~60,000×** faster than text | `p&c:59-60` | Unattributed | A famous zombie statistic; near-certain falsification win. |
| **47%** expect <2s load | `n&v:40` | Unattributed | |
| Mobile **60–83%** of traffic | `n&v:55-56` | Unattributed | 23-point range = no claim. |
| **70%+** healthcare traffic mobile | `n&v:148` | Unattributed | |
| **79%** want artist background before buying | `n&v:115-116` | Format (`SOURCES.md:95`) | Vendor (portfolio host). |
| **~9 in 10** pro-services buyers rule out before contact | `n&v:65-66` | Hinge Marketing (`SOURCES.md:93`) | **Most likely to survive** — Hinge runs an actual research program (rung ~3). |
| Team page is "**2nd most-visited**" | `n&v:73` | Unattributed | |
| Google reviews threshold "**25+ @ 4.5★+**" | `n&v:189` | Unattributed | A suspiciously precise threshold with no study. |
| Jam study: 6 options outsold 24 | `p&c:40` | Lyssna / UX Design Institute (`SOURCES.md:102`) | Iyengar & Lepper — **contested, partial replication failure.** Must be labeled contested wherever it appears. |
| Miller 7±2, revised to ≤4 by Cowan 2001 | `p&c:48`, `d-c:30-31` | No URL | **The one genuinely solid citation in the set.** Cowan (2001) is real and findable. Useful as the contrast case: this is what a sourced claim looks like next to the others. |

**Meta-finding worth shipping.** Eighteen quantitative claims; **one** traces to peer-reviewed work
(Cowan), **one** to a real practitioner research program (Hinge), **one** to a contested classic
(Iyengar & Lepper), and **fifteen** to vendor or agency content marketing — several from vendors who
sell the exact thing the number recommends. This is a clean, self-contained specimen of how CRO
numbers propagate, and it comes from the user's own prior work, so it can be used without punching at
a third party.

---

## (e) Growth vs operate — Tamás's standing question

**Direct answer: this source barely exercises the boundary.** The webdesign skill contains **zero**
monitoring, dashboards, alerting, feature flags, rollout, canaries, or run-the-system health content. I
searched specifically. There is nothing here that should pivot to operate on the "running the live
system" axis, because there is no live system in this skill's world — it ends at ship.

The three places the boundary is touched at all:

1. **Page load time / Core Web Vitals** (`trust-proof-and-structure.md:73-76`, `niche-and-vertical-design.md:40`, `:55-56`).
   *Ruling:* **split, and the split is instructive.** The performance *budget*, the CWV *measurement*,
   and any *alerting* on regression are **operate/frontend** — and CWV already sits with frontend
   (`frontend/references/performance.md`, per marketing's verified disposition). What growth may keep
   is only the **hypothesis**: latency is a conversion variable, so a speed change is a legitimate
   experiment with a business readout rather than only a health metric. The distinction is exactly the
   charter's canary-vs-A/B seam: *watching p95 so the site stays up is operate; deliberately shipping a
   faster hero to 50% of traffic to learn what a second is worth is growth.* Same measurement, opposite
   intent.
2. **The go/no-go QA gate** (`design-critique.md:70-96`). *Ruling:* **quality**, unambiguously — it
   gates a ship on defects, it does not learn anything. Already routed there by the marketing pass.
   Growth has no claim.
3. **The art-review capture tooling contract** (`art-review.md:29-58`). *Ruling:* **design**. It is
   instrumentation for a human judgment, not for a system. No operate claim either.

**Secondary observation for the synthesis gate.** Because webdesign has no operate surface, the only
growth/operate tension this channel can contribute is the latency one — and it resolves *cleanly* in
favor of the charter's stated seam. That is weak evidence the seam is well-drawn: when a source that
never thought about the distinction is forced through it, the split still feels natural rather than
arbitrary.

---

## (f) Sources worth re-mining, growth-specifically

From `SOURCES.md`, the rows a growth pack would want — note these are mostly **falsification targets**,
not authorities. (No fetching performed in this channel.)

**The CRO folklore laundry (the falsification target list)**
- Unbounce — *The 7 Principles of Conversion-Centered Design* — https://unbounce.com/conversion-centered-design/ (`SOURCES.md:101`). Origin of Attention Ratio **and** the ~31% claim. Vendor-interested.
- CXL — *Cialdini's Principles of Persuasion* — https://cxl.com/blog/cialdinis-principles-persuasion/ (`:101`)
- CXL — *How to Build a High-Converting Landing Page* — https://cxl.com/blog/how-to-build-a-high-converting-landing-page/ (`:103`)
- CXL — *Above the Fold* — https://cxl.com/blog/above-the-fold/ (`:103`)
- Kissmetrics — *CTA Button Best Practices* — https://kissmetrics.io/blog/cta-button-best-practices (`:105`). Source of the 10–90% range **and** likely of the test-order heuristic (ORPHAN #1) — worth fetching to see whether the ordering carries a rationale or is asserted.
- Digital Applied — *Pricing Page Psychology 2026* — https://www.digitalapplied.com/blog/subscription-pricing-page-psychology-decision-framework-2026 (`:106`). Source of the 3-tier/decoy/center-stage/charm claims. Date-stamped, volatile.
- Discovered Labs — *Social Proof & Trust Signals for CRO* — https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact (`:112`). Source of 15–34% and 93%.

**The one debunking source — highest growth value in the whole SOURCES file**
- **Branding Bullshit — *Branding Myths: Color Psychology*** — https://www.brandingbullshit.com/p/branding-myths-color-psychology (`:105`). The evidence behind ORPHAN #2. Re-mine for the underlying studies it cites; a falsification strip built on a secondary debunking is only half-built.

**Genuine anchors (cite, don't falsify)**
- Lindgaard et al., 50ms first impression — https://www.tandfonline.com/doi/abs/10.1080/01449290500330448 (`:104`). Peer-reviewed. Design's, not growth's.
- Cowan (2001) working-memory revision — **no URL in the skill**; findable. Relevant to ORPHAN #3.
- Hinge Marketing pro-services research — https://hingemarketing.com/blog/story/5-essential-features-of-an-architecture-firms-website (`:93`). Rung ~3.
- FTC dark patterns report (2022) — https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers (`:107`). Marketing already ships this and has verified adjacent FTC material (`marketing/references/partnerships-pr-and-affiliates.md:101` confirms 16 CFR Part 465 effective 2024-10-21). **Growth cites marketing, does not re-derive.**
- Brignull, *Deceptive Design* ch.15 — https://www.deceptive.design/book/contents/chapter-15 (`:107`). The dark-pattern taxonomy's originator; the better primary if growth builds a retention-ethics row set.
- Stanford Web Credibility Project — **no URL in the skill.** Needs the Fogg et al. paper + date before the 75% is repeated by anyone.

Everything under the craft files in `SOURCES.md:6-90, 117-125` (CSS-Tricks, Codrops, Comeau, Smashing,
MDN, Chrome docs) is **not worth re-mining for growth**.

---

## (g) Seams the shipped family has already drawn — binding on growth

Verified by reading the shipped files, not the disposition tables.

**Marketing has already ceded, in writing, three times:**
- `marketing/references/handoff.md:41` — growth gives marketing "experiment readouts and results";
  marketing gives growth "a qualified hypothesis for a funnel experiment (e.g., 'this landing page
  variant should convert better because…')". The stated rule: *"**Marketing runs no experiment and
  calls it a result** — a funnel change marketing wants tested is `growth`'s experiment to design and
  report on, not marketing's finding to claim."*
- `marketing/references/landing-pages-and-conversion.md:16` — "The question is which **A/B variant** of
  a brief-satisfying page wins → `growth`."
- `landing-pages-and-conversion.md:197` — "The question is which variant of an already-compliant brief
  converts better → `growth`."

This is a clean, generous seam: **marketing owns the brief, growth owns the comparison.** Growth's
webdesign-derived content sits entirely on the growth side of it (a test-order rule, a falsification of
an imported result, form length as a variable) — no re-litigation needed.

**Design has ceded nothing** — grep across all design references finds no mention of A/B testing,
experiments, or growth. Two design surfaces will need a seam drawn from growth's side:
- `design/references/journeys.md:51-53` (Onboarding) already ships **activation vocabulary**:
  "Metrics: activation rate, time-to-activation, completion, drop-off by step, D7/D30 retention. Name
  the aha moment explicitly." Design names the metrics; growth must own **moving** them without
  restating the onboarding-design doctrine. Suggested phrasing of the seam: *design decides what the
  onboarding is; growth decides what to change about it and how you'd know it worked.*
- `design/references/interaction.md:90` holds Von Restorff / Zeigarnik / peak-end. Growth's only
  residue there is the **engagement-farming ethic**, not the mechanics.

**Product** holds pricing tiers and the decoy (`marketing/.../landing-pages-and-conversion.md:122`,
`handoff.md:36`). Growth's pricing claim is **experiments on packaging**, which neither product nor
marketing currently owns — a genuinely open lane, and the sharpest boundary question this channel
surfaces (it was marketing's hazard H6 and it is still unresolved for growth).

---

## (h) Patterns growth should steal (shape, not words) — and one it must not

| Pattern | Source | Growth application |
|---|---|---|
| **Calibration band** — publish the expected score distribution so a too-good result reads as measurement failure | `design-critique.md:21-23` ("most score 20–32/40; a 38 means you aren't looking hard enough") | Experiment win-rate calibration. If most of your tests win, suspect the instrumentation, not your genius. Pairs with the canon's ~1/3-win figure (which must be re-verified). |
| **Honest degradation with a self-labeling artifact** | `art-review.md:56-58` ("Never present an unviewed review as a viewed one") | Never present an unpowered or unrandomized comparison as an experiment result — and make the *artifact itself* carry the label, not a caveat someone can drop. |
| **A null is earned, not assumed** | `art-review.md:79-85` ("Finding nothing is a conclusion you earn by looking") | A flat result is informative only if the design could have detected the effect. Underpowered null = no information, not "no difference." |
| **Pre-committed stopping rule + hard cap + documented exit** | `art-review.md:161-172` (converge from round 2; only escalate; cap at 3 rounds; record what's unresolved at the cap) | The governance sibling of the peeking problem: fix the stopping rule before you start, don't add criteria round to round, and record what was still unresolved when you stopped. |
| **Triangulation with disagreement as signal** | `design-critique.md:62-68` ("weave" judgment and mechanical checks; note agreement = high confidence, note false positives) | Convergence between an independent qualitative read and a quantitative readout raises confidence; divergence is a finding, not noise. |
| **Severity anchored to an observable consequence** | `design-critique.md:56-58` ("would a real user contact support over this?") | Anchor experiment-result severity to a consequence ("would we ship this to 100% and defend it?") rather than to p-values alone. |
| ⛔ **No-first-pass sign-off** — round 1 must always send something back | `art-review.md:144-159` | **Must NOT transfer.** A rule guaranteeing a change every round is, in experimentation, precisely the mechanism that manufactures false positives. Recording it as an explicit non-transfer is itself worth a line in the pack: *design discipline and experimental discipline pull opposite directions here.* |

---

## (i) Loss-risk summary if `~/.claude/skills/webdesign/` is deleted today

Ordered by what would hurt growth most. Items 1–3 are **verified absent from all seven shipped packs**;
items 4–6 exist only as scattered fragments nobody has assembled.

1. **The color-psychology myth correction** (`persuasion-and-conversion.md:97-102`) — a complete,
   correct external-validity lesson wrapped around the most-repeated artifact in CRO folklore. Nothing
   in the family carries it. Marketing flagged it as worth keeping and did not keep it.
2. **The test-order heuristic** (`persuasion-and-conversion.md:82-83`) — the only experiment-
   prioritization rule in the source; flagged by the marketing pass as a growth-seam item and not
   shipped.
3. **Form length as a conversion variable** (`persuasion-and-conversion.md:66-67` +
   `design-critique.md:30-32` + five corroborating vertical fragments) — activation-surface content
   that design's onboarding ref and frontend's forms ref both leave on the floor.
4. **The per-vertical goal set read as a guardrail taxonomy** (`niche-and-vertical-design.md`, eleven
   goals; healthcare `:148`, real estate `:159-160`, architecture `:69`, SaaS `:179` are the load-bearing
   four) — invisible to the marketing pass because it read each vertical separately.
5. **The falsification strip** (18 claims, §d) — individually worthless, collectively a clean specimen
   of how CRO numbers launder through vendor content. Reassembling this from scratch would cost real
   effort.
6. **The retention-side ethics rows** (`persuasion-and-conversion.md:44-45` engagement-farming,
   `:34-35` easy-in/hard-out cancellation) — marketing shipped these as *acquisition* ethics rows;
   their retention/habit reading is unhomed.

Everything else in the 3,707 lines is either already shipped in design, frontend, marketing, or
quality, or is craft that growth has no claim on.
