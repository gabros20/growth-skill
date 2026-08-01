# Sources, licences, and what this skill claims for itself

This pack was built into a genre that already has a rigorous validity layer in pockets and a
growth surface in others — never both in the same repo. It says what it took, from whom, under
what licence, and what it actually adds, rather than implying more.

This file is consolidated across every reference the pack ships. Where a claim is vendor-reported,
self-selected, secondhand, or folklore, it is labelled as such at the point of use in the reference
itself as well as here.

## 1. The wedge

The niche is **open at scale, not unexplored** — no dedicated growth/experimentation pack above
508★ was found, but the validity layer exists in pockets (PostHog's experiments suite,
GrowthBook's own stats engine, rampstackco's Deng/Johari/Howard-correct citations). The claim
that survives: **the growth surface and the validity layer have never been in the same repo.**
`data` already ships the experimentation-validity canon (SRM, CUPED mechanics, peek-safe
sequential testing, Twyman, OEC+guardrails) in `experiment-measurement-foundations.md`; this
pack's unclaimed core is the feasibility gate, design, and interpretation `data` explicitly cedes
in its own scope guard. See `research/synthesis.md` §1 for the full four-plank wedge argument
and its evidence.

## 2. The incumbents, named with respect

Sourcing for the adjudications below is in `research/skills-report.md` and
`research/github-relay-report.md`.

**From `experiment-design-and-feasibility.md`, `experiment-readout-and-learning.md`,
`quasi-experiments.md` (W2):**

- **PostHog** (37,425★, MIT + `ee/` carve-out, verified 2026-08-01) — cited for its published
  power formula and worked 3,600-per-variant example; credited for genuinely good validity-layer
  tooling (SRM, sequential testing) while noting its own flow has no sample-size/MDE step before
  the diagnostic path.
- **Optimizely** — its calculator's own default (13,000/variation) is cited as a vendor default
  demanding more traffic than its marketing suggests; its Stats Engine (the peeking fix) was
  checked across all 40 `optimizely/*` repos and confirmed never open-sourced — cited from public
  docs/paper only, no code lifted.
- **Statsig** — its own docs' stated MDE/N pairs (5,200 at week 1, 48,000 at week 4) cited
  directly as vendor-stated, not derived.
- **`bookingcom/powercalculator`** (91★, MIT, verified) — the flagship arithmetic illustration in
  `experiment-design-and-feasibility.md` §2 (561,364-visitor default) is reproduced from this
  repo's own shipped defaults (`baseRate`, `falsePositiveRate`, `runtime`, `visitorsPerDay`,
  `sample` in `src/store/modules/calculator.js`), independently re-derived, not merely quoted.
  Its README states the project is archived; cite that, not GitHub's `archived: false` flag.
- **`rampstackco/claude-skills`** (508★, MIT, verified) — credited by name in §7 of
  `experiment-design-and-feasibility.md` for its skip-the-test decision rule
  (`sample-size-tables.md`, `cro-optimization` skill), the one incumbent found offering a
  decision procedure for the no-power case rather than a bare refusal.
- **GrowthBook** (8,082★, MIT + 3 enterprise dirs; `packages/stats` separately MIT) — cited for
  debunking "Bayesian methods let you peek safely" against its own commercial interest
  (`experiment-readout-and-learning.md` §1); no code lifted in these three files.
- **`google/trimmed_match`** (Apache-2.0, research-only per its own README) and
  **`facebookincubator/GeoLift`** (Meta) — cited by method only in `quasi-experiments.md` §4;
  Trimmed Match is effectively unmaintained (last substantive commit predates this run by years)
  and both repos' own README/docs caveats ("research purposes only," lower-power-than-individual
  testing) are carried forward rather than dropped.

**From `SKILL.md`, `handoff.md`, `growth-model-and-loops.md` (W1):**

- **The growth-model canon, cited as one mutually-amplifying cluster rather than five independent
  voices** — Brian Balfour naming Casey Winters, Kevin Kwok and Andrew Chen on loops-vs-funnels
  (@bbalfour, 2018-07-31); Kevin Kwok's separate loops-over-*moats* defensibility argument
  (@kevinakwok, 2019-08-04); Elena Verna's Five Laws (@ElenaVerna, 2022-06-28) and 3×3
  motions×levers matrix (2022-07-01), both scoped to her 2021–22 framework-dense posting window;
  Casey Winters on activation-masquerading-as-retention (@onecaseman, 2017-02-03); Crystal
  Widjaja's cohort-stripe reading (@crystalwidjaja, 2024-04-27); Nir Eyal, *Hooked* (2014); Dave
  McClure's AARRR (~2007). **Canon correction carried from research:** the Racecar Growth
  Framework is **Dan Hockenmaier + Lenny Rachitsky**, not Balfour — @bbalfour amplifying
  (2021-01-21), confirmed against @lennysan's own canonical-posts thread (2024-12-17). The pack
  states the misattribution as a named failure mode rather than silently using the correct one.
- **Sibling packs, cited by name at their own shipped words** — `handoff.md`'s seam map quotes
  `data`'s `experiment-measurement-foundations.md` scope guard (which cedes design and
  interpretation to growth in writing), `marketing`'s three cessions
  (`attribution-and-measurement.md`, `landing-pages-and-conversion.md`,
  `positioning-and-messaging.md`), `product`'s `metrics.md` and `business-model.md`, `operate`'s
  `handoff.md` lateral-consumer framing, and `quality`'s own decline of experiment design/readout.
  Nothing is lifted from any sibling; each is cited by file name and quoted within caps.
- **The loop-math whitespace** — the K-factor/cycle-time/compounding treatment is supplied as
  derivable arithmetic, not attributed to a practitioner, because the research found the incumbent
  ecosystem taxonomizing loop types with no arithmetic attached. No company's K-factor ships as a
  benchmark: none was independently verified.

**From `funnel-and-cohort-diagnosis.md`, `activation-and-onboarding.md`,
`retention-and-resurrection.md`, `surface-selfserve.md` (W3):**

- **Duolingo's own engineering/research blog** — the Streak Wager result (statistically significant
  D1/D7/D14 retention gains, largest at D7) and the Weekend Amulet safety valve are first-party and
  are the resolution of the viral uncited "streaks are a negative retention feature" claim. The
  viral claim and its two amplifiers are described structurally (uncited origin, two amplifiers) and
  their figures are not repeated — the specimen is the citation failure, not the numbers.
- **Sarah Tavel** (Hierarchy of Engagement) on retention-before-growth — cohort retention should
  reach an asymptote before acquisition is scaled on top of it; quoted from the primary record.
- **Samuel Hulick, 2023** — the "aha moment" origin question asked publicly by someone whose own
  business is built on the concept, and left unanswered. This is the evidence for labelling the term
  folklore-with-no-traceable-coinage rather than dropping it.
- **CUPED's new-user and retention failures** — the CUPED paper itself plus Eppo's and Statsig's
  own docs (opposite sides of the market) on the absence of pre-experiment data for new users, and
  Netflix's KDD 2016 case study (Xie & Aurisset) for both the new-user covariate correlation and the
  distinct finding that retention resists variance reduction for new *and* existing users. This is
  the pack's own load-bearing constraint; `data`'s reference does not carry it.
- **Fareed Mosavat (2018)** on "there's a bug in the data" as the first response to a surprising
  result — cited as a practitioner converging independently on Twyman's Law, not as a second source
  for it. **Hiten Shah (2019)** and Kohavi's survey-size arithmetic are cited as two unrelated
  starting points reaching the same verdict on NPS as a retention instrument. **Shreyas Doshi**'s
  "Exotic Metrics" and dashboard-purpose framing are cited for retention dashboards specifically.
- **Activation benchmarks are deliberately not quoted.** The most-circulated figures trace to one
  self-selected practitioner-audience survey; per Amendment 1 they ship only as a described
  provenance failure, never as numbers. The widely-repeated engagement-ratio "good/exceptional"
  split is named as untraceable and no figure is given for it under any framing.
- **`lifelines`** (MIT) — named as the clean open-source implementation of survival-with-censoring
  retention; cited as a pointer, not lifted.

**From `conversion-optimization.md`, `referral-and-product-loops.md`,
`opportunity-and-prioritization.md`, `surface-b2b-sales-assisted.md` (W4):**

- **Trustworthy A/B Patterns** (Kohavi, Vermeer, Linowski; started June 2024) — the pack's live
  falsification infrastructure: median 2.2M users per experiment, 80% power, pre-selected MDEs
  0.3%–2.2%, ten replications across four patterns; its first three rounded-button replications
  "confirmed that the initial results were highly exaggerated," and Kohavi separately called the
  underlying studies "flawed experiments" (2024-04-29). Its own 2025-11-20 disclosure — an SRM on
  its own home-page experiment, re-run and re-reported — is cited as the project applying its
  discipline to itself. Cited as an ongoing, joinable project, never as a closed debunking.
- **Cowan (2001)**, revising Miller's 7±2 working-memory span down to roughly four chunks — the one
  claim in the form-field-count stack that traces to a findable paper, cited precisely so the other
  two claims in that stack can be graded against it rather than flattened to one confidence level.
- **Kohavi, 2024-10-26** — the winner's-curse haircut (13/21/25% by arm count, 30% under
  Bonferroni), used here at CRO scale and in prioritization; the Bonferroni-makes-it-bigger
  direction is the counterintuitive part and travels with the figure every time.
- **Elena Verna's combinatorial counter** — the 3×3 matrix (2022-07-01), the go-to-market "9
  squares" framing, and the Five Laws, cited as three independent statements of one structural
  claim: growth strategy is a sequencing problem, not a single-lever selection problem. ICE and
  RICE are graded as widely-taught-but-unvalidated process tooling; no study validating either
  against outcomes was located, and the pack says so rather than implying one exists.
- **The Dropbox referral specimen** — two incumbent packs state mutually irreconcilable
  headline/viral-coefficient pairs for the same program, neither citing a primary source. Per the
  never-ship discipline, **none of the disputed figures appear anywhere in the pack, including
  inside the sentence naming the inconsistency**; the specimen ships as a structural description
  only.
- **`marketing`'s B2B surface** — the 95-5 in-market reality is consumed, not restated as growth's
  own finding, and is used only to explain why a top-of-funnel hypothesis is powerable on a surface
  whose deal-stage outcomes are not.

**From `monetization-and-pricing-experiments.md`, `product-led-growth.md`,
`surface-mobile-subscription.md`, `surface-marketplace-network.md` (W5):**

- **Booking.com's pricing-test refusal** — relayed by @lukasvermeer and carried **with its
  secondhand label attached** (a practitioner report of Booking's position, not a primary Booking
  statement). Paired with **Arvid Kahl** (@arvidkahl, 2026-04-22) on the reputational cost of
  pricing experiments, as two operators at opposite ends of the traffic spectrum reaching the same
  conclusion by the same mechanism.
- **Jacob Eiting / RevenueCat** — the 4-variant web-vs-IAP paywall test, its 25–45% conversion drop,
  and the company's own retrospective published against its commercial interest, cited from the
  primary posts with dates; plus the April 2019 Apple IAP-step platform shock (up to a 20% relative
  trial-start drop) as the confound specimen. This is the pack's incentive-hostile guardrail
  example.
- **Van Westendorp** (1976, ESOMAR) — cited for provenance and for its stated-preference limit only;
  constructing and reading the survey is `product`'s `business-model.md`, not re-taught here.
- **Sean Ellis's own generalizability caveat** (@SeanEllis, 2013-12-24) — the creator naming the
  test's dependence on his own hands-on application, which is the strongest available anchor for
  that falsification strip; plus his own crediting of Rahul Vohra's refinement (2019-07-03), which
  is why "Sean Ellis test" and "Superhuman's PMF Engine" are kept as distinct instruments.
  **Lewis & Sauro, MeasuringU (2022-03-15)** supply the independent critique and the ±13-point
  margin of error at n=50 that ships with the 40% figure every time it appears.
- **Benchmark-provenance exhibits** — ChartMogul's 2026 report and Kyle Poyar's *Growth Unhinged*
  as the same 200-product January 2026 survey under two brands (the standing citation-laundering
  exhibit); ProductLed's nine undisclosed-method figures from "600+ SaaS businesses"; OpenView's
  wind-down (around December 2024) with reports still circulating, and its own footnote disclosing
  that some benchmarked companies were its venture portfolio — which is also why its PQL claim
  ships only as a correlational self-report, never as a causal result.
- **RevenueCat's "State of Subscription Apps"** — the largest real dataset in this pack's research
  (115,000+ apps, $16B+ tracked revenue, 2026 edition), framed as **high-N, low-external-validity**:
  SDK telemetry, not a survey, but a population pre-filtered by a commercial relationship. Every
  figure drawn from it carries vendor name and edition year at the point of use, and editions are
  never blended. Structural sampling bias in mobile-retention vendors (AppsFlyer, Adjust,
  GameAnalytics) is named as a *different* caveat class from self-selected surveys.
- **`Eronred/aso-skills`** — credited by name for correctly distinguishing Apple's randomized
  Product Page Optimization from Custom Product Pages ("Not a true A/B test"), a real and
  non-obvious catch in an ecosystem that conflates the two.
- **Marketplace interference** — Blake & Coey's "bias-variance trade-off in defining the market
  scope" for the coarsening trade; Booking.com's `uplift-interference-simulator` and its named
  underlying paper (Karlsson, van den Akker, Moraes, Proença, Krijthe, "Qini curve estimation under
  clustered network interference") as the primary; Lyft's redacted chart axes as the standing
  example of infrastructure being disclosed more freely than magnitudes.
- **Patrick McKenzie** (@patio11) — the two-line pricing-test pattern, cited as the
  engineer-a-huge-MDE lever rather than as a power calculation.

**From `overlay-small-sample.md`, `overlay-agentic.md`, and the three calculator assets (W6):**

- **Kohavi (@ronnyk / ronnykohavi.com)** — the 200,000-user floor, the 5,000-user quote, and the
  three levers (swing for the fences, move the metric upstream, accept a higher false-positive
  rate) are cited verbatim from his 2024-10-30 public statement; none of it is re-derived, only
  quoted and scoped to e-commerce conversion metrics as he scoped it himself.
- **`rampstackco/claude-skills`** (508★, MIT, verified) — the skip-the-test decision rule
  (`sample-size-tables.md:86`) is quoted and credited by name in `overlay-small-sample.md`,
  reciprocating W2's citation of the same repo's sample-size-tables content elsewhere in the pack.
- **@levelsio** — Amendment 1's corrected framing ("I don't A/B test, but just test," 2017-09-02,
  status `904050781426462720`) is quoted from the primary record, not the folklore paraphrase the
  charter originally carried; `overlay-small-sample.md` states the correction explicitly rather
  than silently adopting it.
- **`automation-skill`'s `references/surface-agentic.md`** (sibling family pack, not lifted) —
  `overlay-agentic.md` cites its "pre-commit the rule, enforce structurally" independence move and
  its I12 ("an agentic step fails by continuing") finding by name throughout, applying both to
  experimentation and growth-loop agents specifically rather than re-deriving either argument.
  Confirmed by reading that file directly rather than trusting `marketing`'s paraphrase of it.
- **Booking.com's `bookingcom/powercalculator`** (91★, MIT, verified; already cited by W2 in
  `experiment-design-and-feasibility.md`) — `power_calc.py`'s unpooled variance formula and its
  self-test anchor (561,364 total at the calculator's own shipped default state) reproduce this
  repo's own `math.js` logic independently, to the digit; no code copied, only the formula
  structure and the four input values read from `calculator.state`.
- **PostHog** (already cited by W2) — `power_calc.py`'s `--pooled` mode and self-test anchor
  reproduce PostHog's own published worked example (10% baseline, 20% relative MDE) using the
  exact constant `2*(z.975+z.80)^2 = 15.6978` in place of their rounded "16," landing at 3,532
  rather than their stated 3,600 — the discrepancy is the point, and is stated in the script's own
  docstring, not smoothed over.
- **Fabijan, Gupchup, Gupta, Omhover, Qin, Vermeer, Dmitriev** (KDD 2019, "Diagnosing Sample Ratio
  Mismatch in Online Controlled Experiments") — `srm_check.py`'s self-test anchor (821,588 vs.
  815,482 users, p < 1-in-500,000) is the paper's own §2.3.1 worked example, independently
  recomputed via a from-scratch chi-square implementation (stdlib `math.lgamma`-based incomplete
  gamma function, no scipy dependency) rather than quoted as a stated result.
- **Armitage, McPherson & Rowe** (1969, *JRSS-A* 132(2), 235–244) and **Lakens's open-access
  textbook** (which cites the paper's Table 2 in full, since the primary is paywalled) —
  `peeking_table.py` independently recomputes the entire Type-I-error-inflation curve via the
  recursive numerical integration the literature specifies (matching the method description in
  Lan & DeMets), landing within 0.001 of every published anchor Lakens reports (0.0500 at K=1,
  0.1418 at K=5, 0.3737 at K=100) — a from-scratch reproduction, not a transcription of the table.
- **GrowthBook** and **Eppo** (already cited by W2 and in W1's router) — `srm_check.py`'s default
  0.001 alarm threshold follows both vendors' own documented convention (data-quality alarm,
  distinct from the experiment's own decision threshold), cited via `github-relay-report.md`'s
  verified quotes rather than re-fetched independently by W6.
- **`coreyhaines31/marketingskills`** (42.6k★; already adjudicated at length elsewhere in this
  pack) — `evals/never-ship/cases.json`'s first case is modeled directly on this incumbent's own
  `skills/ab-testing/evals/evals.json:36-48` peeking eval, credited by name in the case's own
  `note` field as the run's genuine finding that this specific eval is a real behavioral guard,
  not a passing mention.

## 3. Licences

Every clause here exists because a previous family build was caught by it. **Licensing checks
must read package-ecosystem manifests, not just repo-root LICENSE files** — API-reported licences
were wrong 7+ times in this run's research.

Known dispositions from research:

| Source | Licence | Disposition |
|---|---|---|
| `gbstats` (`packages/stats`) | Plain MIT | Cleanest liftable artifact found — cite freely within quotation caps |
| GeoLift | **AMBIGUOUS** — MIT `LICENSE.md` vs GPL≥2 `DESCRIPTION`; dependency-theory claim falsified | Cite the method, never lift code or verbatim text |
| `deanpeters` | CC BY-NC-SA behind a `NOASSERTION` marker | Do not lift |
| `contains-studio`, PostHog `ai-plugin`, `mozilla/experimenter-docs`, `dojinkimm` list | No licence located | Do not lift; facts-only, re-expressed in this pack's own words |

**From W1's, W3's, W4's and W5's files** — none of these lift code or verbatim text; every entry
is a facts-only disposition, and the pack's own words carry the claim:

| Source | Licence | Disposition |
|---|---|---|
| `lifelines` (survival analysis) | MIT | Named as a pointer in `funnel-and-cohort-diagnosis.md`; nothing lifted |
| `coreyhaines31/marketingskills`, `phuryn` PM-skills, and the other incumbent packs adjudicated in `research/skills-report.md` | See `research/` for each repo's verified licence | Facts-only. Adjudications describe structure and cite quoted lines within caps; the Dropbox and sample-size figures found in them are **never reproduced**, so no licence question arises for those |
| `Eronred/aso-skills` | **MIT** — LICENSE file read directly by the controller, 2026-08-02 ("MIT License, Copyright (c) 2026 Erencan") | Credit-by-name and the four-word fragment are fine; larger lifts permitted under MIT with attribution |
| `bookingcom/uplift-interference-simulator` | **NO LICENSE FILE** — controller-verified 2026-08-02 (root listing has no LICENSE/COPYING; GitHub license API returns null) | All rights reserved by default: do NOT lift code. Citing the repo as a pointer to its named underlying paper (Karlsson et al.) remains fine, which is all the pack does |
| Duolingo, RevenueCat, ChartMogul, ProductLed, OpenView, Lyft, Blake & Coey, MeasuringU, and the named X/Twitter primaries | Published content, cited not copied | Facts-only — quoted within caps with author and date; no report, dataset, or figure set is reproduced wholesale |

**From W2's three files:**

| Source | Licence | Disposition |
|---|---|---|
| `bookingcom/powercalculator` | MIT (root `LICENSE`) | Facts-only — defaults and formula independently re-derived, no code lifted |
| `rampstackco/claude-skills` | MIT (root `LICENSE`) | Quotable within caps — one paraphrase (~21 words) of the skip-the-test rule, credited by name |
| `google/trimmed_match` | Apache-2.0 | Cite as method + its own "research purposes only" caveat; effectively unmaintained, don't imply active development |
| `facebookincubator/GeoLift` | **AMBIGUOUS** (see §3 table above — MIT `LICENSE.md` vs GPL≥2 `DESCRIPTION`) | Cite the method and its documented example only, never lift code, per the standing family rule |
| GrowthBook `packages/stats` (`gbstats`) | Plain MIT | Not lifted in these three files; noted here as the cleanest liftable artifact for W6's calculator assets to check |

**From W6's overlays and assets:**

| Source | Licence | Disposition |
|---|---|---|
| `bookingcom/powercalculator` | MIT (root `LICENSE`) | Checked directly for `power_calc.py` — formula structure and default input values read from `math.js`/`calculator.state`; no code copied, independently reimplemented in Python against the stdlib `statistics.NormalDist` |
| `rampstackco/claude-skills` | MIT (root `LICENSE`) | One credited paraphrase (the skip-the-test rule) in `overlay-small-sample.md`, same disposition W2 already recorded above |
| `automation-skill` (sibling family repo, not a third party) | N/A — internal family repo, not an external licence question | Cited by name only; no text or code copied, per the family's cross-pack citation convention |
| PostHog, GrowthBook, Eppo docs | Cited as vendor documentation, not code | Facts-only — worked examples and stated thresholds re-derived or quoted with attribution, nothing lifted |
| `coreyhaines31/marketingskills` | Not independently re-checked by W6 — see this file's own §2/§3 entries elsewhere for its licence disposition | `evals/never-ship/cases.json`'s modeled case is an original prompt inspired by the incumbent's structure, not a copy of its JSON |

Nothing in `power_calc.py`, `srm_check.py`, or `peeking_table.py` depends on any external package —
all three import only the Python standard library (`math`, `statistics`, `argparse`), so each is a
from-scratch reimplementation verified against a published anchor rather than against another
project's output. Verified at integrate time by running all three.

## 4. Facts this pack teaches as its own judgment

These are adjudications, not sourced claims — the kind a reader is entitled to disagree with. The
intellectual core: **smaller samples force bolder bets, and bolder bets have lower priors, so the
two effects multiply** — the smaller your sample, the more ambitious your test must be, and the
less a significant result means. Found nowhere else in the corpus searched.

**From W1, W3, W4 and W5:**

- **The AARRR split across three packs** — that `marketing` owns Acquisition, `growth` owns the
  experiments that improve conversion across the whole funnel (including referral and retention
  *experimentation*), and `success` owns retention *execution* is this family's seam, drawn
  deliberately and reciprocated in writing on both sides. A practitioner reading AARRR as one
  undivided funnel is entitled to think it belongs in one pack.
- **Treating the growth canon's agreement as one voice, not five** — Balfour, Winters, Kwok, Chen
  and the Reforge-adjacent cluster co-cite and amplify each other, so their consensus is weaker
  evidence than five independent sources agreeing. The definitional distinction survives that
  discount; the rhetorical certainty does not. That discount is this pack's call.
- **ICE/RICE graded as throughput tooling rather than evidence** — no validation study was located
  for either; calling them "folklore-adjacent process tooling, useful for throughput, not truth" is
  a verdict, not a finding. So is extending the winner's-curse logic *upstream* to prioritization:
  picking the maximum of several noisy guesses selects for the guesses that ran high, exactly as
  picking a winning arm does.
- **The copy → placement → color test order justified by mechanism rather than effect size** — the
  ecosystem defends this ordering with magnitudes that don't survive a provenance check. The pack
  keeps the ordering and replaces the justification: test what changes the offer before what
  changes how loudly it is announced.
- **Refusing to name the Dropbox figures at all, including inside the sentence that names their
  inconsistency** — a stricter reading of "a disclaimed figure is still a figure" than the specimen
  strictly requires, adopted deliberately.
- **Reading three companies' interference fixes as three diagnoses rather than competing
  solutions** — switchback/geo (supply-constrained) and ego-cluster (graph-connectivity) designs
  answer different structures. Framing that convergence as a diagnostic discipline instead of a
  ranked list of fixes is this pack's synthesis.
- **Naming the reputational gate as a second, independent blocker on pricing tests** — feasibility
  asks "can I detect an effect at this N"; this asks "should I expose paying customers to price
  variance at all." A pricing question can fail either gate independently, and the statistics
  literature prices only the first.

**From W2:** three named concepts, each a synthesis of sourced material rather than a sourced
claim itself — a reader is entitled to disagree with the framing, not the underlying figures:

- **The Ambition Tax** (`experiment-design-and-feasibility.md` §5) — names the compounding
  argument above: small samples force bolder bets (§2's power table), bolder bets carry lower
  priors (§4's Bayes posterior), and the two effects multiply rather than cancel. The underlying
  facts are Kohavi's; the naming and the "multiply, don't cancel" framing are this pack's.
- **Twyman-as-Bayes** (`experiment-readout-and-learning.md` §3) — connects Twyman's Law (a
  data-quality heuristic, taught by `data`) to the Bayes posterior formula (Kohavi's, taught by
  growth): a surprising result implies a low prior, which the posterior formula says makes it
  *less* trustworthy at an identical p-value. The connection between the two is this pack's own;
  both halves it connects are independently sourced.
- **The learning ledger** (`experiment-readout-and-learning.md` §5) — the recommendation to log
  every test's predicted vs. haircut-adjusted actual effect so a team's own real prior hit rate
  (π) replaces a borrowed published figure over time. The practice of tracking outcomes is not
  novel; naming it as the source of your own π for the Bayes formula, specifically, is this
  pack's synthesis.

**From W6:**

- **"Equipment, not willingness"** (`overlay-small-sample.md`) — the framing that small-sample
  readers already test constantly and informally, and this overlay's job is to equip that practice
  rather than convert a skeptic, is this pack's synthesis of Amendment 1's levelsio correction; the
  underlying quotes are sourced, the framing choice (equip vs. convert) is this pack's own.
  Directly informs how `overlay-agentic.md` is written too — an agent that peeks constantly is a
  worse-equipped version of the same practice, not a different problem.
- **Two variance modes in `power_calc.py` as a teaching device, not just an implementation
  choice** — the tool ships both `--pooled` and the default unpooled formula specifically because
  the discrepancy between PostHog's vendor-stated 3,600 and the exact 3,532 is real and instructive
  (a vendor's own rounding, visible when you can compute it yourself), not a bug to hide behind one
  "correct" mode. Shipping the discrepancy rather than resolving it silently is this pack's own
  judgment call, consistent with R8's argument that executable, checkable calculators are the
  differentiator against the ecosystem's demonstrated arithmetic failures.
- **The three-suite eval split** (`evals/routing/`, `evals/stats-cases/`, `evals/never-ship/`) —
  the decision to test routing correctness, content correctness, and never-ship compliance as three
  independently gradable questions, rather than one blended suite, follows the family's existing
  four-suite convention (activation/traversal/output/compression-ablation, seen in `data-skill`,
  `quality-skill`, and others) adapted to the brief's three-part ask; treating `forbidden_strings`
  as a hard automatic-fail check separate from graded `assertions` in `evals/never-ship/` is this
  pack's own operationalization of R16 ("a disclaimed figure is still a figure") into something a
  grader can check mechanically rather than only qualitatively.

## 5. What this pack did not do

Open items this run did not close (the controller's own list lives in `research/synthesis.md` §7):
the Reichheld retention-to-profit claim's origin trace, Ghost Ads primary sourcing, interrupted
time series and regression discontinuity, the rule-of-thumb sample-size shorthand's book-chapter
citation, Statsig's own SRM alarm threshold (its docs 404 — this pack does not assume one),
the Korean experimentation blogs, and a full body-read of the largest PM-skills incumbent.

**From W2:** `quasi-experiments.md` does not cover interrupted time series or regression
discontinuity design — no primary source was fetched for either this run, and the file names
them as an open gap rather than inventing precondition checklists for them. It also draws, but
does not fully re-teach, the boundary with marketing's geo-lift/ad-incrementality treatment in
`attribution-and-measurement.md` — the two files' honesty-hierarchy framing has not been checked
against each other by a marketing writer for consistency, only asserted from growth's side.

**From W6:** the eval suites are fixtures, not a run — none of the 33 cases across
`evals/routing/`, `evals/stats-cases/`, and `evals/never-ship/` have been executed against a live
model; self-tests were run only for the three calculator assets (see each script's own `__main__`
block, confirmed passing at build time). `power_calc.py` supports only the single-treatment,
two-arm case (matching Booking's own `variants: 1` convention) — it does not extend to multi-arm
designs or the Bonferroni correction the winner's-curse haircut in `experiment-design-and-
feasibility.md` references; a reader running a 3+-arm test needs to apply that correction by hand.
`peeking_table.py` assumes equally spaced looks at a constant nominal boundary — it does
not compute alpha-spending (O'Brien-Fleming/Pocock) boundaries, which is a deliberate scope
match to what the pack teaches (peek-safe method *selection* is data's ground), not an oversight.
`srm_check.py`'s general n-arm chi-square path (via the incomplete-gamma continued fraction) was
verified only against its own closed-form cross-check for the 2-arm case in development, not
against a published 3+-arm SRM worked example — none was found in the corpus.

**From W1, W3, W4 and W5:**

- **Three retention-curve concepts are named in the research and deliberately do not ship as
  vocabulary: the quick ratio, "flatten-or-die," and the smile curve.** The quick ratio has no
  sourcing anywhere in this run's corpus — it appears only as an *absence* finding about incumbent
  packs — so it stays out. "Flatten-or-die" and the smile curve trace to a single dated
  practitioner post (Andrew Chen, 2019-10-15) that the research channel surfaced through search
  without independently re-fetching, and the "smile curve is a resurrection artifact" critique was
  explicitly flagged in that channel's own report as the researcher's inference, not a located
  named source. The *substance* of flatten-or-die does ship, under a directly-verified voice
  instead: Sarah Tavel's cohort-retention-to-asymptote rule in `retention-and-resurrection.md`.
  Naming these three as vocabulary is a follow-up pass's job, once the Chen post is re-fetched
  first-hand.
- **Chen's D1/D7/D30 retention targets are not quoted anywhere**, because he self-disclaims them
  in the same breath as unpublished and rarely met — folklore by the author's own description.
- **The `sales` and `success` seams are provisional**, drawn from growth's side only, exactly as
  `marketing` drew its own. Neither pack exists yet to reciprocate them.
- **`growth`'s quasi-experimental honesty hierarchy and `marketing`'s geo-lift treatment have not
  been reconciled by a marketing writer** — asserted from growth's side only (also noted by W2).
- **No PPO, store-experiment, or marketplace claim was verified against a live platform** — the
  Apple/Google store-experiment mechanics and the PPO instability window are practitioner synthesis
  as labelled in the file, not controlled studies, and platform behaviour changes without notice.
