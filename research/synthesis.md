# Synthesis gate — growth-skill (controller, 2026-08-01)

Written by the controller after reading all five channel reports (skills-report.md,
x-relay-report.md, github-relay-report.md, web-research-report.md,
webdesign-growth-extraction.md) over ~1MB of raw corpus. This document GATES the build: writers
compose from this + the reports + raw files; nothing contradicting this file ships without a
dated amendment here.

Corpus quality note: every channel lead re-verified worker figures before reporting (A caught 3
worker errors, one wedge-critical; D caught 3 incl. a WebFetch-summarizer-fabricated CUPED
figure; B verified 15/16 offline against raw JSON; C found zero numeric errors). The controller
canon itself required 4 dated corrections (recorded in controller-canon.md) — trained knowledge
lost to research four times, which is the system working.

---

## 1. The wedge — four planks, all evidence-backed

**P1 — Integration, not literacy (the corrected adjudication plank).** The niche is **open at
scale but not unexplored**: no dedicated growth/experimentation pack above 508★, verified from
four independent directions (repo sweeps, top-60 scan, both Anthropic surfaces null, VoltAgent
index null). But the validity layer EXISTS in pockets — PostHog ships 71+ skills incl. a real
experiments suite, GrowthBook ships its own, rampstackco (508★) cites Deng/Johari/Howard
correctly. **Never claim incumbents lack the validity layer — it is falsifiable in 30 seconds.**
The claim that survives (backed by 12 logged absence queries): **the growth surface and the
validity layer have never been in the same repo** — plg-skills (18★) is 27 skills of pure
surface with zero validity; rampstack has the rigor but growth is 8 of 102 website-lifecycle
skills; the 42.6k★ marketing incumbent has CRO/retention chapters and zero SRM/CUPED/SUTVA/
Twyman (grep-verified over 14,720 lines). Fresh adjudication ammunition nobody had caught:
phuryn/pm-skills (24,751★) prints a sample-size formula that **omits the power term**
(understates n by 2.04×) then claims to check 80% power, and prescribes **peeking as policy**
("not significant, positive trend → extend the test"); OpenClaudia's lookup table contradicts
its own correct formula by ~4.75× in all 24 cells; RBraga01 ships "α=0.23 at 5 checks" — the
~16-look value mislabeled (D recomputed the whole Armitage curve to settle it).

**P2 — The feasibility gate and the interpretation layer are genuinely unclaimed — including
inside our own family.** `data` already ships `experiment-measurement-foundations.md` (SRM,
CUPED mechanics, peek-safe sequential, Twyman, OEC+guardrails) — the obvious "trustworthy
experimentation" flagship is TAKEN by a sibling, exactly as the seam contract intended. Data's
own scope guard cedes, verbatim: design ("what to test, how to size a rollout") and
interpretation ("what a validated result means for a decision") to growth — and data's file
contains **zero power/MDE/sample-size/feasibility content**. Marketing cedes "sample-size
planning" to growth at two named lines. The ceded territory is exactly where this run's
strongest material sits.

**P3 — Small-sample honesty is Kohavi's own position, not a contrarian take.** The canon's
author, verbatim (post-verified): a minimum of ~200,000 users for e-commerce conversion power;
"The statistics do not support A/B tests with 5,000 users" — **and he names the three levers**
for teams below the line (swing for the fences ≥20%; move the metric upstream; consciously
accept a high false-positive rate). The arithmetic flagship: Booking.com's own open-source
calculator's default scenario requires **561,364 visitors** (re-implemented and reproduced
exactly; at 500/day = 3.1 years; α already permissive at 0.10) — an incumbent testifying
against the reader's interest, nothing to go stale. The vendor contradiction strip: on the SAME
domains, calculators demand tens of thousands while marketing blogs promise "a few hundred
visits per month" — vendors structurally cannot say "you can't test"; a non-commercial pack
can. And the ecosystem's best work tells the small operator only "refuse" — **"underpowered" is
a refusal everywhere, never a redirect** — written for the traffic-constrained reader inside a
large company, never the operator whose n is small by nature. The intellectual core (novel —
found nowhere in the corpus): **smaller samples force bolder bets, and bolder bets have lower
priors, so the two effects multiply** — the smaller your sample, the more ambitious your test
must be, and the less a significant result means.

**P4 — Checkable strips + the operate seam drawn in first-party words.** Eight-plus
falsification strips with 2–3 independent evidence classes each (§5 of web report — adopt
wholesale). The growth-vs-operate seam: GrowthBook's own doctrine ("Safe Rollouts… designed for
operational decision-making, not learning… bias towards action"; inconclusive → SHIP, inverting
the experiment default), Optimizely's two-product branding on one SDK, Kohavi arguing against
10% risk-ramps when the intent is learning ("run at 50% and get the answer five times faster"),
and the canon's own 1%-ramp exposure-control passage as the worked example. The crisp rule this
run produced: **a standing threshold on the live system is operate; the same metric bound to a
single tested change's decision is growth. A ramp proceeds on the null; an experiment proceeds
on a rejected null.** Counter-trend honestly noted: Datadog Experiments is the operate framing
absorbing experimentation commercially; OpenFeature resolves the seam by scope exclusion — no
vendor-neutral contract for "experiment" exists at the infra layer.

## 2. The flagship

**experiment-design-and-feasibility** — "Can this question be answered at your scale — and what
does a significant result actually mean, given what you knew before you ran it?"

Anchor set (all lead-verified, primary-sourced, re-derivable):
1. **The Kohavi Bayes posterior** P(TP|SS)=(1−β)π/[(1−β)π+α(1−π)] with the paper's own worked
   numbers (π=1/3 → 89%; π=1/500 → 3.1%, arithmetic re-verified) and D's extension: at a 10%
   hit rate a significant result is 64% likely true; at 5%, 45.7%. A "significant winner" is a
   posterior, not a fact.
2. **The derived power table** (constant 2(z.975+z.80)² = 15.6978) + vendor-stated floors
   (PostHog 3,600/variant — recomputed ✓; Optimizely 13,000 back-solved ✓; Statsig 48,000/group
   for 7% MDE) + Booking's 561,364.
3. **Metric choice moves feasibility by two orders of magnitude** — Kohavi's 355×s² skew rule
   (post-erratum table verified cell-by-cell): revenue/user needed 114k where time-to-success
   needed 1.55k. Teach "measure your own skewness," never the specific 114k.
4. **The three levers + the haircut** (winners biased up 13/21/25/30% — and Bonferroni makes
   the haircut bigger, not smaller) + the compounding argument (P3).
5. **CUPED fails exactly where growth lives**: very low reduction for new users (4 sources) and
   small for retention (Netflix KDD 2016, unique source) — activation and retention tests
   cannot be variance-reduced out of the power problem.

Interpretation/readout gets its own reference (experiment-readout-and-learning): the one-curve
peeking reconciliation, the haircut at readout, guardrails-before-shipping-a-win (3–4-way
first-party convergence), the learning ledger, Twyman-as-Bayes.

## 3. Shape (proposed — build refines)

~12 jobs: growth-model-and-loops · funnel-and-cohort-diagnosis (3-way retention definition:
N-day/rolling/survival) · opportunity-and-prioritization (ICE skeptically; Verna's
combinatorial counter) · **experiment-design-and-feasibility ⭐** · experiment-readout-and-
learning · activation-and-onboarding · conversion-optimization (absorbs webdesign lifts) ·
retention-and-resurrection · referral-and-product-loops · monetization-and-pricing-experiments
(incl. mobile-subscription layer; Booking's pricing-test refusal; ethics) ·
product-led-growth (benchmark-provenance discipline) · quasi-experiments-and-when-you-cannot-
randomize (precondition checklists, no floors). Surfaces: selfserve SaaS (default) ·
b2b-sales-assisted · mobile-app-subscription · marketplace-and-network (interference) +
**small-sample ADDITIVE** + **agentic ADDITIVE**. Plus handoff. Est. ~19–21 refs. Assets:
**runnable, tested calculators** (power/MDE, SRM chi-square, Armitage peeking table — validated
against published anchors; the ecosystem's arithmetic failures are the justification) + eval
suites incl. a peeking case (match the incumbent's bar) and a feasibility-gate case.

## 4. Rulings

- **R1** Say "open at scale," never "empty"; name rampstack/OpenClaudia/PostHog/GrowthBook as
  competent prior art and cite them respectfully (marketing-incumbent posture).
- **R2** Do NOT re-teach data's validity mechanics — cite `experiment-measurement-foundations.md`
  by name. Growth = design + interpretation + feasibility; data = measurement validity. First
  genuine duplication risk in the family; the reviewer greps for it.
- **R3** Small-sample = redirect, never refusal. Teach the three levers, the skip-the-test
  decision rule (credit rampstack), and label validity trades: switching to micro-conversions
  answers a different question (Optimizely presents it as a free win — it is not).
- **R4** Win rates: only Microsoft 1/3 (with all four qualifiers + "no published denominator")
  and Bing 10–20% are first-party. Never blend them; all other famous win-rate numbers are
  never-ship (paraphrase chains traced in D §1.1).
- **R5** Peeking: teach the one-curve reconciliation ("how many times did you look?" — Armitage
  K=5 0.142 → Miller ≈K=25 → Johari K→∞ 100%); always state K, nominal α, sidedness; state the
  alpha-spending exemption. The computed table ships with its derivation note.
- **R6** CUPED: lead with the primary (45/52/49; <5% revenue-per-user); ALWAYS carry Microsoft's
  Surface 1 (>68% of metrics ≤1.05×) with the ~20% figure; never present the simulated 22% as
  measured; the activation/retention failure is the load-bearing teaching. Sequential testing
  does NOT cost power in realistic conditions (Johari §5 — folk claim inverted).
- **R7** Growth-vs-operate: ship the crisp rule (standing threshold = operate; experiment-bound
  metric = growth; proceeds-on-null vs rejected-null), cite GrowthBook doctrine + Optimizely
  split + Kohavi's 50% post; note the Datadog counter-trend honestly. Disambiguate: "canary"
  (3 meanings), "loops" (2), "guardrail" (3 senses).
- **R8** Ship executable calculators as assets, unit-validated against published anchors
  (Armitage 0.142/0.374, Booking 561,364, PostHog 3,600). Prose formulas and hand tables are
  the ecosystem's demonstrated failure mode (2 of 3 incumbent treatments wrong, opposite
  directions).
- **R9** Quasi-experiments: no numeric floors exist in the literature — teach precondition
  checklists; Abadie verbatim ("a large T0 cannot drive down the bias if the fit is bad");
  staggered-DiD structural invalidity warning (fix is a different estimator, not more data);
  interference: diagnose the mechanism first, never "switchbacks fix network effects."
- **R10** Ethics: build the dark-patterns/habit section on Mathur CSCW 2019 (11.1% of 11k
  sites, 1,818 instances) + FTC 2022 + Vonage enforcement; carry Booking's pricing-test refusal
  and the "pure mind control" specimen; frame Eyal/Harris as an internal split of one Stanford
  lab tradition.
- **R11** Benchmarks: five-field provenance mandatory (source, sample, method, date, caveat);
  ChartMogul≡Growth-Unhinged same-survey-two-brands is the standing exhibit; OpenView is
  defunct (Dec 2023) yet still serving reports — date every citation; RevenueCat = high-N,
  low-external-validity (SDK population), vendor+edition-year required on every figure.
- **R12** Licensing: gbstats (`packages/stats`, plain MIT) is the cleanest liftable artifact;
  **GeoLift is AMBIGUOUS (MIT LICENSE.md vs GPL≥2 DESCRIPTION; dependency theory falsified) —
  cite the method, never lift**; do-not-lift: deanpeters (CC BY-NC-SA behind NOASSERTION),
  contains-studio + PostHog/ai-plugin + mozilla/experimenter-docs + dojinkimm list (no license).
  **NEW FAMILY RULE: licensing checks must also read package-ecosystem manifests**
  (DESCRIPTION/package.json/pyproject.toml/Cargo.toml). API lied 7+ times this run.
- **R13** Family consistency: Lewis & Rao line is "marketing's scale problem is worse; growth's
  is not solved" — on-site experiments are more measurable than ad lift, not exempt. Do not
  contradict data's honestly-labeled vendor CUPED figures — lead with the primary. Route
  Bayesian-stopping through Johari, not vendor docs. Reciprocate marketing's AARRR split and
  no-experiment rule verbatim in spirit. Success/sales seams drawn provisionally (flag in
  handoff, as marketing did).
- **R14** NO numbered invariants — bolded named concepts (marketing convention; kills the
  bare-number-citation hazard).
- **R15** Webdesign lifts land per E's disposition table: the 3 orphans (red-button-on-blue-page
  external-validity lesson; copy→placement→color test-order rule; form-field-count as variable)
  go to conversion-optimization; writers verify every ALREADY-LIFTED row against the shipped
  marketing file before skipping; the no-first-pass-sign-off pattern must NOT transfer.
- **R16** Never-ship greps are mandatory at integrate AND review (7+ prior-instance rule): a
  disclaimed figure is still a figure.

## 5. Cleared facts (shippable with the stated scope) — selected

Microsoft 1/3 (2009, four qualifiers, no denominator) · Bing 10–20% + 0.1–1.0% diluted effect
sizes (2014 paper; book says 0.1–2% — separate statements) · Slack ~30% scoped to monetization
· CUPED 45/52/49 + <5% revenue + new-user (4-source) + retention (Netflix) failures · Armitage
computed table + anchors 0.142/0.374 · Johari 5–10× at 10k / →100% unbounded · Miller 26.1%
scoped to his simulation · SRM ~6% Microsoft / ~10% LinkedIn-triggered (never blend) · SRM
p<0.001 three-platform convergence + Mozilla p<0.01 dissent (report as convergence-with-dissent)
· Booking 561,364 + derived power table + PostHog 3,600 / Optimizely 13,000 / Statsig 48,000 ·
Kohavi 200k floor + 5,000-user quote + three levers · haircut 13/21/25/30 · 355×s² (teach the
rule, not 114k) · A/A tests (most-corroborated practice; GrowthBook compounding arithmetic
1−0.9ⁿ verified) · novelty "uncommon" + day-1 67% out-of-band · run-longer fails for count
metrics · carryover ~3wk–3mo · ads-blindness half-life ≈60d, 90-day study ≈65% of effect ·
interleaving >100× scoped to one ranker comparison, cannot measure retention · Trustworthy A/B
Patterns project (2.2M median users; rounded-buttons debunked) · Duolingo streak resolution
(+14% D7 from Streak Wager; Weekend Amulet valve; viral "negative retention" claim uncited and
sign-flipped) · MeasuringU ±13% at n=50 on the Ellis test; zero validation studies · Mathur
11.1%/1,818 + FTC 2022 · Statsig→OpenAI 2025-09-02 (signed agreement; Raji CTO Applications) ·
Eppo→Datadog 2025-05-05/06, "Datadog Experiments" GA 2026-04-02 (any "Eppo" current-product
reference is stale) · PostHog experiments product MIT outside ee/ (spot-check at build) ·
mSPRT usually needs FEWER samples than fixed-horizon (Johari §5).

## 6. Never-ship (adopt D §6 table wholesale; additions from A/B/C)

RBraga 0.23-at-5 · "100 conversions per variant" (9-repo verbatim propagation) · rampstack
"~5,000 monthly conversions" (25× spread vs GrowthBook's 200) · GrowthBook "~33% success rate"
(not independent of Kohavi) · "80% of experiments fail" (untraced even in Kohavi's orbit) ·
Netflix/Booking/Google 90%/90%/10% attributions · Dropbox 3,900%/35% (same case, two numbers) ·
$129B involuntary churn · "Duolingo 500 tests/quarter" · Reichheld "5% retention → 25–95%
profits" (falsification-strip target; trace before any use) · "20% DAU/MAU good" · CUPED
"30–50%" as a range · bare RevenueCat figures without vendor+edition · PLG benchmark numbers
without sample provenance · every mida.so/AB-Tasty/VWO low-traffic figure per D's table ·
"16σ²/δ² per Seven Rules" (wrong attribution — derive it or cite Miller/PostHog).

## 7. Open items (non-blocking; assigned)

Controller Chrome pass candidates: DoorDash switchback posts (JS-blocked ×3), OpenAI's
Statsig-acquisition page (403s everywhere). Build-time: Reichheld trace · Ghost Ads primary
(paywalled) · ITS/RDD unfetched · 16σ²/δ² book-Ch.17 citation · Statsig's SRM threshold
(docs 404; do not assume 0.001) · Korean experimentation blogs (8, high-value, unread) ·
Kohavi/Tang/Xu book Ch.17 · X follow-ups when endpoint quiet: @LuisvonAhn, @Patticus,
@SamuelHulick · phuryn 24.7k★ full body-read · growth-strategy school off-X sourcing
(Reforge/Substack/Lenny primary posts). Marketing follow-up honored: geo/CUPED/ghost-ads
papers were fetched by this run as promised.

## 7a. AMENDMENT 1 (2026-08-01, from channel B's formal close-out — post-gate additions)

- **P3 sharpened**: the charter's "indies don't A/B test" premise was folklore. levelsio's real
  quote: "I don't A/B test, but just test" — he runs split tests and computes significance.
  Solo operators test constantly but informally; **the gap is equipment, not willingness.**
  Frame the small-sample material as equipping an existing practice, not converting skeptics.
- **Quasi-experimental methods are unknown, not rejected, in the indie corpus** — never
  mentioned by name across 3 workers' sweeps. The quasi reference teaches vocabulary that
  genuinely doesn't exist in its readers' world.
- **Cleared fact added**: Sean Ellis's own generalizability caveat on the 40% test (2013-12-24,
  post id 415285251569508352) — the creator's own words are the strongest possible anchor for
  that strip.
- **Never-ship additions**: "aha moment" has NO traceable origin (label as folklore term-of-art,
  use with that caveat); Lenny's activation benchmarks without their self-selected-sample
  caveat.
- **Canon correction 4 recorded**: Racecar framework = Hockenmaier + Rachitsky, not Balfour.
- **Ops for next run**: xrelay sustained operating point = 3 concurrent procs (degradation
  manifests as wall-clock latency, not RATE_LIMITED); `archive user`/`user-posts` UNWRAP
  RETWEETS — always split on `retweetedBy` before attributing.

## 7b. AMENDMENT 2 (2026-08-02, controller, at integrate close)

- **The 114k ruling (integrator flag a)**: gate §2 anchor 3's "never the specific 114k" means
  "never as a portable floor." The flagship MAY ship Bing's post-erratum skew table (including
  ~114k) as dated, scoped evidence for the two-orders-of-magnitude claim, PROVIDED the file
  explicitly forbids transplanting any cell — which it does. The stats eval enforcing "block
  114k as a portable requirement" is the correct reading. Spec review should not re-flag.
- **drafts-w2.md deleted** (superseded build artifact carrying a never-ship figure inside
  evals/); README reference rewritten.
- **Licence verdicts closed by controller (integrator flag d)**: Eronred/aso-skills = MIT
  (file read 2026-08-02). bookingcom/uplift-interference-simulator = NO LICENSE FILE (all
  rights reserved; cite the named paper only, lift nothing) — recorded in SOURCES.md §3.
- **W1's open item stands as resolved-absent** (integrator flag c): quick-ratio/flatten-or-die/
  smile-curve vocabulary absent-with-reason; the substance ships under Tavel's
  directly-verified asymptote rule. Adding the vocabulary requires a first-hand re-fetch of
  the Andrew Chen post — queued as a non-blocking follow-up, not invented.

## 8. Next step

On Tamas's sign-off: create growth-skill repo, relocate research/ per family convention,
dispatch composition crew (tokenomics estimate at that step, per the standing rule).
