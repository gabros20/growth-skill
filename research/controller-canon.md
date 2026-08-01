# Controller canon — growth (written BEFORE any research results, 2026-08-01)

## CORRECTIONS (dated 2026-08-01, from channel D re-verification — the canon below is
## preserved as originally written; where it conflicts with this block, this block wins)

1. §1 "CUPED ... typical claimed variance reductions ~30-50%" is FOLKLORE. The primary (Deng/
   Xu/Kohavi/Walker, WSDM 2013) reports 45%/52%/49% on three named Bing experiments, and <5%
   for revenue-per-user in the same paper. Cite the paper's own numbers, never the range.
2. Any attribution of a "16σ²/δ²" sample-size rule to Kohavi's Seven Rules of Thumb paper is
   WRONG — that paper's formula is 355×skewness² (a normality threshold, not a power rule).
   Verified independently twice (D lead + D1, both read the PDF).
3. §1 win rates: "~1/3 at Microsoft" is real but carries four qualifiers (well-designed,
   well-executed, designed-to-improve-a-key-metric, evaluated) and NO published sample size;
   Bing's 10-20% is a distinct figure by the same authors — never blend them. Netflix "90%",
   Booking "90%", Google "10%" all trace to third-party books/case studies, not the companies.
4. §2 "the 'Racecar' framework" attribution: per channel B, Racecar is Hockenmaier + Rachitsky,
   NOT Balfour. Do not attribute it to Balfour/Reforge.
5. §5 wedge hypothesis 3 as originally written is FALSE (validity content exists in PostHog/
   GrowthBook/rampstackco skill packs). Surviving form: nobody unifies experiment validity
   with the growth surface (retention/referral/pricing/PLG), and validity-with-distribution
   never coexist. Additionally, data-skill already ships experiment-measurement-foundations.md
   (SRM/CUPED/sequential/Twyman/OEC) — growth's unclaimed core is the FEASIBILITY GATE
   (power/MDE/sample-size), design, and interpretation, per data's own scope guard.

Purpose: record what the controller (Fable 5) already believes from training, so the synthesis
gate can distinguish trained knowledge (must be re-verified before shipping) from research
findings (carry their own citations). Nothing in this file is shippable without a source.

## 1. The experimentation canon

- **Kohavi/Tang/Xu, "Trustworthy Online Controlled Experiments"** (Cambridge UP, 2020) is the
  field's standard text. Ron Kohavi ran Microsoft's ExP platform; Diane Tang Google's; Ya Xu
  LinkedIn's. Key concepts I believe it anchors: OEC (Overall Evaluation Criterion), guardrail
  metrics, sample-ratio mismatch (SRM) as the #1 validity check, twyman's law ("any figure that
  looks interesting is probably wrong"), the surprising rarity of winning experiments (~1/3 at
  Microsoft, lower at Bing — exact figures MUST be re-verified from the book/papers).
- **Peeking problem**: repeatedly checking a fixed-horizon test inflates false positives
  massively. Fixes: sequential testing (mSPRT, always-valid p-values — Johari/Koomen/Pekelis/
  Walsh, the Optimizely "New Stats Engine" paper ~2015), group-sequential methods, or Bayesian
  approaches with honest stopping rules.
- **CUPED** (Controlled-experiment Using Pre-Experiment Data, Deng/Xu/Kohavi/Walker ~2013):
  variance reduction using pre-experiment covariates; industry standard at Microsoft/Netflix/
  Statsig; typical claimed variance reductions ~30-50% on metrics with strong pre-period
  correlation (re-verify any number).
- **SRM**: assignment-ratio deviation from design detected by chi-square; the canonical
  data-quality gate; Microsoft/LinkedIn papers claim ~6-10% of experiments show SRM (re-verify).
- **Power math**: needed n scales with 1/δ² (δ = MDE). Detecting small relative lifts on
  conversion metrics needs tens of thousands of conversions per arm; this is the mathematical
  core of the small-sample honesty wedge. Lewis & Rao ("The Unfavorable Economics of Measuring
  the Returns to Advertising", QJE 2015) — already verified in the marketing corpus — showed
  even 10M+ person-week ad experiments are underpowered for ROI questions.
- **Interference/network effects**: switchback designs (DoorDash/Lyft), cluster randomization,
  interleaving (Netflix/Bing for ranking). Marketplace and social products violate SUTVA.
- **Quasi-experiments** when randomization is unavailable: diff-in-diff, synthetic control,
  geo-experiments (Google's matched-markets and Trimmed Match papers), interrupted time series,
  regression discontinuity. Ghost Ads (Johnson/Lewis/Nubbemeyer) for ad-lift without holdout
  cost — flagged in marketing's corpus as growth territory, deliberately left unfetched.

## 2. Growth models and funnel frameworks

- **AARRR ("pirate metrics", Dave McClure ~2007)**: Acquisition, Activation, Retention,
  Referral, Revenue. Family split already shipped: marketing owns acquisition channels; growth
  owns funnel-wide experiments; success owns retention execution.
- **Growth loops vs funnels** (Reforge/Brian Balfour school): compounding loops (content,
  viral, paid, sales) vs linear funnels; the "Racecar" framework (growth engine + turbo boosts).
- **North-star metric** frameworks (Amplitude's playbook, Sean Ellis school). Family ruling:
  product owns the outcome-metric choice; growth builds the connecting model.
- **ICE/RICE prioritization**: widely taught, weakly evidenced; treat as folklore-adjacent
  process tooling, useful for throughput not truth.
- **Retention**: cohort curves flatten-or-die; "smile" curves are rare and usually resurrection
  artifacts. Quick ratio, DAU/MAU stickiness folklore (the "20% is good" line is folklore).
  Habit/hook model (Nir Eyal) — carries a dark-patterns ethics adjacency the family already
  handles via marketing's ethics table pattern.
- **Sean Ellis test** (40% "very disappointed" = PMF signal): survey heuristic, self-selected
  samples, widely repeated without its caveats — likely falsification-strip candidate.
- **PLG**: OpenView coined/popularized; benchmarks (activation ~20-40%, free-to-paid ~2-5%)
  are all self-selected vendor samples — marketing's corpus already flagged this caveat class.

## 3. Platforms and tooling (licenses matter)

- **GrowthBook** — open-source (I believe MIT core; VERIFY license file directly, GitHub API
  lies), Bayesian + frequentist stats engines, docs teach sequential testing and SRM.
- **Statsig** — commercial, strong engineering blog (CUPED, sequential testing explainers);
  acquired by OpenAI (announced ~Sept 2025 — verify status/what changed for the product).
- **Eppo** — commercial warehouse-native; acquired by Datadog (~May 2025 — verify); CUPED++.
- **Optimizely** — legacy CRO leader; "Stats Engine" paper is the peeking-fix landmark.
- **VWO, AB Tasty, Convert** — CRO vendor tier; docs state their own statistical models.
- **Unleash, Flagsmith, PostHog** — flags/experiments open-source tier; PostHog ships
  experimentation + analytics + flags (MIT core with EE dir — verify).
- **PlanOut** (Facebook, ~2014) — the OG experiment-config language; lineage matters.
- **Wasabi** (Intuit, archived), **ExpAn** (Zalando) — historical open-source analysis libs.
- Feature-flag seam: a canary is risk containment (operate), an A/B test is learning (growth);
  same infra, opposite intent.

## 4. Company engineering blogs (rung-1-adjacent primary sources)

Microsoft ExP (exp-platform.com papers), Netflix TechBlog (interleaving, quasi-experiments),
Airbnb (ERF, interleaving, guardrails), Booking.com (their claim that most experiments fail
and their democratized experimentation culture), Spotify (salted sequential testing, "Spotify
never peeks" posts), LinkedIn (T-REX/XLNT), Uber/Lyft/DoorDash (switchbacks, marketplace
interference), Pinterest, Duolingo (retention/streaks — also gamification-ethics adjacency).

## 5. Wedge hypotheses (to be tested by research, not assumed)

1. **Small-sample honesty**: the canon is written by companies with millions of users; most
   readers can't power a fixed-horizon t-test in a quarter. The honest n=small toolkit
   (bigger bets, sequential decisions, pre-committed decision rules, pre-post with guardrails,
   quasi-experiments) is under-taught. Direct heir of marketing's R14 scale-gating.
2. **CRO folklore falsification**: button-color case studies, "100 conversions per variant"
   rules of thumb, agency case studies with no denominators — a falsification-strip target
   like marketing's llms.txt kill.
3. **Adjudication**: incumbent packs likely bundle ab-testing/CRO/churn as tactic lists
   without the validity layer (SRM, peeking, power) — verify by deepwalk, don't assume.
4. **The seam inventory is unusually rich**: seven shipped packs already cede experiment
   design/readout to growth; data's measurement-validity split is pre-drawn.

## 6. Known constraints carried from the family

- Marketing ships Lewis & Rao and the no-lift-tests-for-solo-builders claim; growth must
  cite, not contradict or re-derive.
- Data owns metric definitions, tracking plans, pipelines, experiment MEASUREMENT validity;
  growth owns design + interpretation. Read data's shipped experiment reference before writing.
- Never-ship discipline: no unverified magnitudes; "a disclaimed figure is still a figure."
- NO numbered invariants (marketing convention: bolded named concepts).
