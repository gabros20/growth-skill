# First-party company experimentation engineering blogs — raw corpus

Worker: D2 (grw-web). As-of date for every fetch below: **2026-08-01**, unless a post's own
date differs (noted per-post). Channel: open web, first-party engineering blogs.

Rung discipline (per charter): a first-party engineering blog is **rung 1** for claims about
that company's OWN system/results. It drops to **rung 3-4** the moment it generalizes to "the
industry" or repeats someone else's number. Every magnitude below is quoted verbatim in a
blockquote; I did not paraphrase any number. Where a post gave only qualitative language
("a small percentage," "hundreds of thousands") I preserved that vagueness rather than
inventing precision.

WebSearch calls used: 20/20 (budget cap). All remaining fetches used WebFetch or curl (UA
fallback per operational notes) against URLs already in hand.

---

## 1. Microsoft ExP (Experimentation Platform group)

| Title | Author(s) | Date | URL |
|---|---|---|---|
| A/B Testing Infrastructure Changes at Microsoft ExP | Serguei Michtchenko, Heng-Yi Liu, Caleb Hug, Aleksander Fabijan, Craig Boucher | 2024-01-29 | https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/a-b-testing-infrastructure-changes-at-microsoft-exp/ |
| The Anatomy of a Large-Scale Experimentation Platform | Somit Gupta, Liudmila Ulanova, Sumit Bhardwaj, Pavel Dmitriev, Paul Raff, Aleksander Fabijan | 2018-04 (IEEE ICSA 2018) | https://www.microsoft.com/en-us/research/publication/the-anatomy-of-a-large-scale-experimentation-platform/ |
| Patterns of Trustworthy Experimentation: During-Experiment Stage | Widad Machmouchi, Somit Gupta, Ruhan Zhang | 2021-01-25 | https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/ |
| Patterns of Trustworthy Experimentation: Pre-Experiment Stage | (ExP group) | not fetched (found via search, not opened) | https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/ |
| Patterns of Trustworthy Experimentation: Post-Experiment Stage | (ExP group) | not fetched | https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/ |
| ExP Platform hub (papers index) | ExP group | — | https://exp-platform.com/ |

### A/B Testing Infrastructure Changes at Microsoft ExP (2024-01-29)
**Durable lesson**: Infrastructure/plumbing changes (CDN, routing, DDoS protection) need the
same A/B rigor as feature changes — they can silently break telemetry or amplify request
volume (e.g., CORS preflight). "Health counters" alone are not sufficient; run the change as
a real experiment across iterations.

**Magnitudes (verbatim)**:
> "runs thousands of online A/B tests across most major Microsoft products every month"

> "even mature product data pipelines and metric definitions can harbor bugs"

Second infrastructure test "requiring more than 10 iterations" (paraphrase from fetch, not
independently re-verified verbatim — flag as low-confidence wording, re-check before shipping
if reused).

### The Anatomy of a Large-Scale Experimentation Platform (2018, IEEE ICSA)
**Durable lesson**: A trustworthy platform at scale decomposes into four separable services —
experimentation portal (design/config), execution service, log processing, analysis service —
so that scaling one (e.g., log processing for petabytes of telemetry) doesn't require rebuilding
the others. This is architecture, not a magnitude; still true 10 years later at every company
in this corpus (Netflix's XP/ABlaze/Metrics Repo split mirrors it independently).

**Magnitudes (verbatim, as extracted)**:
> "Currently, over ten thousand experiments are run annually." (~833/month — my arithmetic, not
> the paper's own wording; flag the /month figure as derived, not quoted)

### Patterns of Trustworthy Experimentation: During-Experiment Stage (2021-01-25)
**Durable lesson**: Trustworthiness is a *during-test* discipline, not just a design-time or
readout-time one — SRM detection, automated guardrail alerting, and segment-stability checks
(segments used for comparison must be attributes the treatment cannot itself change) all have
to run continuously while the test is live, or novelty effects and pipeline bugs get shipped
as "wins."

**Magnitudes (verbatim, as extracted)**:
> "computing metrics early and often, feature crews can make fast decisions" (paraphrase risk —
> re-open source before quoting as exact)

> Microsoft News case study: "28% increase in the number of clicks" on a Mail button, which
> later declined — a novelty-effect illustration, not a claim to reuse as a magnitude.

SRM: "typically invalidate[s] the A/B test" when detected (qualitative, no numeric SRM
incidence rate captured in this fetch — controller-canon's "6-10% of experiments show SRM"
claim was NOT independently re-verified here; still needs a primary citation before shipping).

### What this licenses a growth skill to say
- Trustworthy experimentation is an architecture discipline with a stable shape (portal /
  execution / log-processing / analysis, or equivalently design / run / monitor / readout)
  that recurs independently across Microsoft, Netflix, and Uber — this convergence is real and
  citable.
- Infrastructure changes (not just product changes) belong under the same experimental
  discipline — a growth skill can cite Microsoft ExP for "test your plumbing too."
- SRM is a real, named, first-party-attested validity gate (Microsoft literally has patterns
  docs about it).

### What it does NOT license
- Any specific SRM incidence rate (6-10%) — that number is in controller-canon as
  needing-re-verification and was NOT confirmed against a primary Microsoft/LinkedIn source in
  this pass. Do not ship it from this file.
- "Thousands of tests/month" and "10,000+/year" describe a company running on Bing- and
  Windows-scale traffic. It licenses nothing about how many experiments a 10-person startup can
  run.

---

## 2. Netflix TechBlog

| Title | Author(s) | Date | URL |
|---|---|---|---|
| Decision Making at Netflix (Part 1) | Martin Tingley, with Wenjing Zheng, Simon Ejdemyr, Stephanie Lane, Colin McFarland | 2021-09-07 | https://netflixtechblog.com/decision-making-at-netflix-33065fa06481 |
| What is an A/B Test? (Part 2) | Martin Tingley et al. (same byline) | 2021-09-22 | https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962 |
| Netflix: A Culture of Learning (final post in series) | Martin Tingley, with Wenjing Zheng, Simon Ejdemyr, Stephanie Lane, Colin McFarland, Mihir Tendulkar, Travis Brooks | 2022-01-25 | https://netflixtechblog.com/netflix-a-culture-of-learning-394bc7d0f94c |
| Innovating Faster on Personalization Algorithms at Netflix Using Interleaving | Joshua Parks, Juliette Aurisset, Michael Ramm | 2017-11-29 | https://netflixtechblog.com/using-interleaving-in-online-experiments-to-accelerate-algorithm-innovation-at-netflix-a04ee392ec55 |
| Reimagining Experimentation Analysis at Netflix (XP/ABlaze/Metrics Repo) | Toby Mao, Sri Sri Perangur, Colin McFarland | 2019-09-11 | https://netflixtechblog.com/reimagining-experimentation-analysis-at-netflix-71356393af21 |
| A Survey of Causal Inference Applications at Netflix | (multiple named scientists per section — see below) | 2022-05-21 | https://netflixtechblog.com/a-survey-of-causal-inference-applications-at-netflix-b62d25175e6f |

Also indexed but not separately opened this pass (same series/topic, low incremental value
given budget): "Experimentation is a major focus of Data Science across Netflix," "A Day in the
Life of an Experimentation and Causal Inference Scientist @ Netflix," "Round 2: A Survey of
Causal Inference Applications at Netflix," Parts 3-6 of the Tingley A/B-test series (statistics
detail, infrastructure investment, org role) — URLs discoverable via netflixtechblog.com but
not fetched; flag for a follow-up pass if the controller wants the statistics-detail post
(Part 3/4) specifically.

### Decision Making at Netflix (2021-09-07) — Part 1
**Durable lesson**: Netflix's argument for *why* A/B testing at all: alternatives to
experimentation (leadership fiat, expert opinion, internal debate, copying competitors) all
have a structurally small number of inputs and no systematic way to resolve disagreement.
"Experimentation scales" — it lets the whole member base vote with actions instead of a few
executives voting with opinions. This is a framing/rhetorical point, not a magnitude.

**Magnitudes (verbatim)**: none stated in this post (intentionally scene-setting).

### What is an A/B Test? (2021-09-22) — Part 2
**Durable lesson**: Netflix's own worked illustration of why pre/post rollout comparison is
unreliable — a hypothetical "Upside Down box art" rollout coincides with a hit-title launch, so
naive before/after reading attributes the hit title's lift to the UI change. Random assignment
holding "everything else constant" is what licenses the causal claim; guardrail metrics (e.g.,
customer-service contact rate) exist specifically to catch a "win" that has a hidden downside.
Netflix explicitly frames primary decision metric selection as requiring a stated causal chain
from the product change through secondary metrics to the primary metric — not just picking
whatever moved.

**Magnitudes (verbatim)**: none — this post is entirely conceptual/pedagogical (it is explicitly
part of Netflix's internal "Experimentation 101" curriculum, later stated in the Culture post).

### Netflix: A Culture of Learning (2022-01-25) — final post in series
**Durable lesson**: The single most citable Netflix claim in this corpus — low win rates are
a *feature* of a mature experimentation program, not evidence something is broken, and Netflix
explicitly ties the low win rate to organizational humility and democratized ideation (anyone
can suggest an idea because expertise doesn't reliably predict which ideas win). Also: Netflix
explicitly credits Microsoft's public "Kickstart the Experimentation Flywheel" and "Crawl, Walk,
Run, Fly" maturity model — cross-company citation, itself notable (Netflix cites Microsoft in
print).

**Magnitudes (verbatim)**:
> "We build and test hundreds of product variants each year, but only a small percentage end up
> in production and rolled out to the more than 200 million Netflix members around the world."

> "despite our broad expertise, our members let us know, through their actions in A/B tests,
> that most of our ideas do not improve the service"

> "our first investments in tooling to support A/B tests came way back in 2001" (tooling
> attributed to Stan Lanning)

Note: Netflix deliberately does **not** give an exact win-rate percentage here — "a small
percentage" and "most of our ideas do not improve" are the precise wording; do not round this
to a number (e.g., do not write "Netflix wins ~10%" — that number is not in this post).

Also: on peeking — "This series has focused on fixed time horizon tests... In principle, the
data are examined only once, at the conclusion of the test. This ensures that the false
positive rate... is not increased by peeking at the data numerous times." Netflix states they
are investing in sequential experimentation to relax this, and that sequential methods are
"already being used to ensure safe deployment of Netflix client applications" (i.e., canary/
rollout safety — an operate-adjacent use, not an experimentation-for-learning use; flag per
charter's growth-vs-operate question below).

### Innovating Faster on Personalization Algorithms Using Interleaving (2017-11-29)
**Durable lesson**: Interleaving is a *relative-preference* measurement (which ranker do users
prefer, in a single blended list) — not a substitute for measuring absolute outcomes like
retention. Netflix explicitly uses it only as a fast first-stage pruning step ahead of a
traditional A/B test for the survivors, precisely because interleaving cannot measure metrics
like retention directly. The sensitivity gain comes from a repeated-measures design (every user
sees both algorithms) removing between-user variance, the same logic as CUPED/paired-design
variance reduction generally — this is the durable, transferable insight, not the specific
"100x" number.

**Magnitudes (verbatim) — THE exact sensitivity claim**:
> "We find that interleaving is very sensitive: it requires >100× fewer users than our most
> sensitive A/B metric to achieve 95% power."

Scope qualifier in the same paragraph, also verbatim:
> "we turned to a case in which two ranking algorithms A and B were of known relative quality:
> ranker B is better than ranker A. We then ran an interleaving experiment in parallel with an
> A/B test using these 2 rankers." — i.e., the >100x figure is from ONE specific comparison of
> two known-quality rankers, benchmarked via bootstrap subsampling, not a general claim that
> interleaving is always 100x more sensitive than any A/B metric.

> "personalized homepages for over 100 million members" (scale context, 2017)

### Reimagining Experimentation Analysis at Netflix (2019-09-11) — XP/ABlaze/Metrics Repo
**Durable lesson**: The architectural bet is "democratize contribution, not just consumption" —
instead of centralizing all analysis code with engineering, Netflix rebuilt the platform so
data scientists contribute metrics (Metrics Repo), statistical models (Causal Models lib), and
visualizations (Plotly) directly, in Python/R, with local-notebook and production paths sharing
identical code (so "reproducibility is a given"). This generalizes: a platform that only lets
specialists consume results (vs. contribute methodology) will bottleneck on the specialists.

**Magnitudes (verbatim)**:
> "Netflix's scale of over 150 million subscribers"

> "scientists can analyze billions of rows of raw data on their laptops" (via compression, one
> machine, no Spark/MapReduce needed for analysis — notable architecture choice, not a number to
> reuse as a benchmark)

Methods explicitly named as supported: "Interleaving, Quantile Bootstrapping, Quasi
Experiments, Quantile Regression, and Heterogeneous Treatment Effects."

### A Survey of Causal Inference Applications at Netflix (2022-05-21)
**Durable lesson**: Netflix states explicitly WHEN it reaches for quasi-experimentation instead
of A/B testing — when running a large-scale RCT has "technical and operational challenges,"
specifically when withholding treatment from users who need it is itself harmful (their example:
withholding content localization/dubbing from members who need it). Methods named: double
machine learning (control for confounders, e.g., localization impact), synthetic control
(estimate what viewing would have been absent a dub delay, validated via placebo tests on
unaffected titles), and causal-adaptive layers on top of ML ranking systems (Causal Ranker
Framework — impression-to-play attribution, true-negative labeling, causal estimation).

**Magnitudes (verbatim)**:
> "we stream in more than 30 languages and 190 countries"

No experiment-count or success-rate magnitudes in this post — it is a conference-recap survey
of methodology, not a metrics post.

### What this licenses a growth skill to say
- **The low-win-rate-is-healthy framing** is independently attested by Netflix (explicit) and
  the Booking.com/Thomke tradition (below) — a genuine 2-way (soon 3-way, see Spotify/DoorDash)
  convergence: mature experimentation programs expect most ideas to lose, and treat that as
  evidence the program is working, not broken.
- **Interleaving-style paired/repeated-measures designs reduce variance by removing between-
  subject variance** — this is the CUPED-adjacent durable principle; the specific >100x number
  is Netflix's own and scoped to ranking-algorithm comparisons only.
- **Quasi-experimentation is licensed specifically when RCT withholding is itself harmful or
  operationally infeasible** (Netflix's own stated trigger condition) — a clean, citable rule
  for when to reach for diff-in-diff/synthetic control instead of A/B.
- Netflix explicitly treats sequential-testing infrastructure as dual-use: same investment
  serves both "call a learning experiment early" (growth) and "safe client deployment" (operate)
  — this is first-party evidence for the charter's canary-vs-A/B-test seam: same flag/sequential
  infra, the intent (risk containment vs. learning) is what differs.

### What it does NOT license
- The >100x interleaving sensitivity number licenses nothing about non-ranking product changes,
  and nothing about small-N products — it's a Netflix-scale (100M+ member), ranking-specific,
  bootstrap-validated number for two specific known-quality rankers.
- "Hundreds of product variants a year, most fail" describes a company that can build and ship
  hundreds of variants. It does not transfer to a team that can run one experiment.
- Netflix's 2001-era tooling investment and 20+ years of platform work is not a claim that
  experimentation infrastructure is cheap or fast to build — the post is explicit that this took
  two decades.

---

## 3. Airbnb Engineering

| Title | Author(s) | Date | URL |
|---|---|---|---|
| Experiments at Airbnb (classic — booking-funnel / p-value pitfall post) | Jan Overgoor | 2014-05-27 | https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7 |
| Experiment Reporting Framework (ERF, original) | Will Moss | 2014-05-29 | https://medium.com/airbnb-engineering/experiment-reporting-framework-4e3fcd29e6c0 |
| Scaling Airbnb's Experimentation Platform | Jonathan Parks | 2017-05-10 | https://medium.com/airbnb-engineering/https-medium-com-jonathan-parks-scaling-erf-23fd17c91166 |
| Beyond A/B Test: Speeding up Airbnb Search Ranking Experimentation through Interleaving | Qing Zhang | not fetched this pass (found, not opened — flag for follow-up) | https://medium.com/airbnb-engineering/beyond-a-b-test-speeding-up-airbnb-search-ranking-experimentation-through-interleaving-7087afa09c8e (mirror: https://airbnb.tech/data/beyond-a-b-test-speeding-up-airbnb-search-ranking-experimentation-through-interleaving/) |
| 4 Principles for Making Experimentation Count | Lindsay M Pettingill | not fetched this pass | https://medium.com/airbnb-engineering/4-principles-for-making-experimentation-count-7a5f1a5268a |
| How Airbnb Safeguards Changes in Production | Michael Lin | not fetched this pass | https://medium.com/airbnb-engineering/how-airbnb-safeguards-changes-in-production-9fc9024f3446 |

### Experiments at Airbnb (2014-05-27) — the classic post
**Durable lesson**: This is the primary source for the "don't stop on a p-value you're
peeking at" lesson, illustrated with a real Airbnb experiment (a price-filter change: raising
the max filter value from $300 to $1000). The mechanism Airbnb gives: early converters
disproportionately influence the running estimate, so a p-value curve computed continuously
will cross the 0.05 threshold "by chance" even when the true effect is null, and it keeps
moving after that crossing. Airbnb's own prescription: pre-commit sample size / experiment
duration from an MDE calculation *before* launch, and do not use "has the p-value crossed 0.05
yet" as the stopping rule.

**Magnitudes (verbatim, as extracted)**:
> "The p-value curve hits the commonly used significant value of 0.05 after 7 days, at which
> point the effect size is 4%"

The effect subsequently trends toward null with more data ("practically null" per the fetch
summary — re-verify this exact phrase against the source before quoting it as a direct quote;
the day-7/4%-effect line above is high-confidence verbatim, the "practically null" framing is
lower-confidence paraphrase from this pass's extraction and should be re-opened before shipping
as a direct quote).

> "Setting the time in advance also minimizes the likelihood of finding a result where there is
> none."

### Experiment Reporting Framework (2014-05-29)
**Durable lesson**: Explicit code structure (using lambdas/callbacks for treatment branches
instead of ad hoc conditionals scattered through the codebase) makes experiment logic visible
in code review — this is a bias-prevention mechanism, not just a convenience. The four stated
design goals: (1) ensure underlying data accuracy, (2) limit opportunities for accidental bias
introduction, (3) subject experimental changes to code review, (4) automate analysis to lower
the barrier to running experiments at all.

**Magnitudes (verbatim)**: none — this early (2014) post predates ERF's scale-up; no
experiment-count or timing numbers given.

### Scaling Airbnb's Experimentation Platform (2017-05-10)
**Durable lesson**: The same "process-by-source, not process-by-experiment" restructuring
principle recurs (compare Microsoft's four-service split, Netflix's XP/Metrics-Repo split):
Airbnb's original ERF computed all metrics per-experiment, re-scanning source tables
repeatedly; the fix reorganized around "Event Sources" (queries defining multiple related
metrics) so each source table is scanned once regardless of how many experiments/metrics
consume it. Migrating orchestration to Airflow added checkpointing so partial failures didn't
require full reprocessing.

**Magnitudes (verbatim, as extracted — re-verify exact wording before quoting)**:
> concurrent experiments grew from "a few dozen (in 2014)" to approximately 500 (by 2017)

> "~2500 distinct metrics per day and roughly 50k distinct experiment/metric combinations"

> runtime improved "from 24+ hours to about 45 minutes"

> metric hierarchy of three levels (Core, Target, Certified); ~50 pre-computed dimensional cuts
> per metric

These four numbers came from an extraction pass, not a direct-quote copy — treat as **verify-
before-ship** (high plausibility, matches the narrative, but I did not personally re-read the
raw HTML to confirm exact phrasing character-for-character the way I did for the Netflix and
Lyft posts).

### What this licenses a growth skill to say
- **The p-value-over-time chart is a first-party, dated, numbered illustration of the peeking
  problem** — genuinely citable as "here is a real company's real experiment showing exactly
  this failure mode," which is stronger than the abstract statistical explanation alone.
- **Pre-committing sample size/duration from an MDE calculation, not from watching the p-value,
  is independently taught by Airbnb (2014) and is the same prescription Spotify's sequential-
  testing posts and Microsoft's ExP patterns give (in different technical form)** — 3-way
  convergence candidate (see cross-company list).
- Restructuring pipeline computation around the shared data source rather than the consuming
  unit (experiment) is an architecture principle three companies independently rediscovered
  (Airbnb, Netflix, implicitly Microsoft) — citable as a recurring lesson for anyone building
  in-house experiment tooling at scale.

### What it does NOT license
- The 500-concurrent-experiment, 50k-metric-combination scale describes Airbnb circa 2017 (a
  many-hundred-engineer company). It licenses nothing about tooling needs for a small team.
- The 2014 price-filter example is ONE dated experiment on ONE metric; the 4%-effect-at-day-7
  number is descriptive of that single case, not a general claim about typical effect sizes.

---

## 4. Booking.com

| Title | Author(s) | Date | URL |
|---|---|---|---|
| Democratizing online controlled experiments at Booking.com (arXiv preprint) | Raphael Lopez Kaufman, Jegar Pitchforth, Lukas Vermeer | submitted 2017-10-23 (CODE 2017) | https://arxiv.org/abs/1710.08217 (full text: https://ar5iv.labs.arxiv.org/html/1710.08217) |
| Same paper, re-posted to Booking.com's own Data Science blog | Booking.com Data Science (byline; paper by Kaufman/Pitchforth/Vermeer) | blog repost 2018-06-14 | https://booking.ai/democratizing-online-controlled-experiments-at-booking-com-131add7dd42b — **booking.ai is now dead** (redirects to Booking.com 404); recovered via Wayback Machine snapshot https://web.archive.org/web/20250504161823/https://booking.ai/democratizing-online-controlled-experiments-at-booking-com-131add7dd42b |
| "At Booking.com, Innovation Means Constant Failure" (HBR podcast, discusses Booking case study) | Stefan Thomke (Harvard Business School professor), interviewed | 2019-09-03 | https://hbr.org/podcast/2019/09/at-booking-com-innovation-means-constant-failure |

Booking.com's own data-science blog (booking.ai) has been **retired/redirected** as of this
pass — a genuine finding worth flagging to the controller: the primary source hub for Booking's
experimentation writing is gone from the live web and only survives in the arXiv paper itself
and Wayback snapshots. Lukas Vermeer's own Slideshare deck ("Democratizing Online Controlled
Experiments at Booking.com") and his LinkedIn posts were located but not opened this pass
(budget); flag for the X channel (grw-x) or a follow-up web pass.

### Democratizing online controlled experiments at Booking.com (arXiv 1710.08217)
**Durable lesson**: Booking.com's stated democratization mechanism is four concrete practices,
not a culture slogan: (1) a **central repository of successes and failures** for knowledge
sharing across teams, (2) a **generic, extensible code library enforcing loose coupling**
between experimentation and business logic (so any engineer can instrument an experiment
without hand-rolling stats), (3) **continuous, transparent monitoring of data-pipeline quality**
to build organizational trust in the infrastructure, and (4) **safeguards enabling end-to-end
ownership** — i.e., anyone, not just a central experimentation team, can run and be accountable
for an experiment. This is the most concrete, mechanism-level (not just cultural) statement of
"democratized experimentation" in the whole corpus, and directly informs the "small-sample
honesty" and "adjudication" wedge hypotheses in controller-canon: Booking's version of
democratization is explicitly an infrastructure/process bet, not merely "let anyone run tests."

**Magnitudes (verbatim, re-verified from full paper text via ar5iv)**:
> "Overall, on a daily basis, all members of our departments run and analyse more than a
> thousand concurrent experiments to quickly validate new ideas."

> "At Booking.com we have been using online controlled experiments for more than ten years to
> conduct evidence based product development."

> "Adding a new tracking method can be done by any developer and we now have more than a dozen
> ways to identify visitors across all our products."

> real-time aggregation pipeline: "less than a five minutes' delay"; experiment-impact
> attribution: "less than a minute" in their current system (as of the 2017 paper)

This is **rung 1** — Booking.com's own paper, own numbers, about its own system.

### The "9 out of 10 experiments fail" claim — TRACED, but not to a first-party Booking source
This is the exact item the brief called out as "gold if traced." Result: **partially traced,
and the trace does NOT land on Booking.com's own voice.**

- The HBR podcast (2019-09-03) is presented as Stefan Thomke (HBS professor, not a Booking.com
  employee) discussing his own HBR case study on Booking.com's innovation process. The exact
  quotes, attributed to Thomke in the podcast transcript:
  > "they're wrong about nine out of ten times"
  > "The data says, actually, in the cases, that Booking has learned, over the years, that
  > they're wrong about nine out of ten times, that if you have a hypothesis, and the hypothesis
  > seems very reasonable, and you go out and test it, and then something really surprising
  > happens."
  > "when 9 out of 10 things fail, you're much more likely to run into a failure than not"

  This is Thomke's **paraphrase of what Booking told him** for his case study, not a sentence
  from a Booking.com blog post, paper, or named-Booking-employee talk transcript that I could
  independently locate and open this pass. It is rung-3 (named practitioner/academic reporting
  secondhand on a company), not rung-1.
- I checked VWO's blog (secondhand, cites "9 out of 10" as a generic CRO-industry framing
  question, NOT attributed to Booking.com) and the firstprinciples.ventures Lukas Vermeer podcast
  transcript (Vermeer discusses "hundreds of thousands of experiments" cumulative scale but does
  **not** state a specific win/fail percentage in the portion I fetched).
- A WebSearch summary (not independently opened/verified) surfaced language like "industry
  standard of 10% success rate at an average 1% uplift in revenue per test" attributed
  loosely to discussion of Booking's practice — this is **UNTRACED**: I could not find the
  primary sentence it derives from, and it may itself be a secondhand compression of Thomke's
  "nine out of ten" framing.

**Verdict for the controller: mark "Booking.com: ~90% of experiments fail / ~10% win" as
UNTRACED to a first-party Booking.com source.** The best available provenance is Stefan
Thomke's HBR case study/podcast (2019), which is itself reporting what Booking told him,
not a Booking.com publication. If the skill wants to cite this number, it should be cited as
**"Thomke's HBR case study on Booking.com (2019), reporting the company's self-described
learning"** — not as "Booking.com states X%." This is a materially different (and weaker)
citation than the "1,000+ concurrent experiments" and "10+ years" figures above, which ARE
directly Booking.com's own words in a Booking-authored paper.

### What this licenses a growth skill to say
- Booking.com's own four-practice democratization mechanism (repository, code library, data-
  quality monitoring, end-to-end ownership) is a citable, concrete checklist for "what does
  democratized experimentation actually require infrastructurally" — stronger than generic
  culture language.
- "More than a thousand concurrent experiments" and "more than ten years" are safe, directly-
  sourced Booking.com magnitudes.
- The low-win-rate folklore ("most experiments fail") is *directionally* consistent with
  Netflix's own explicit statement and Spotify's home-screen-at-scale numbers below — but for
  Booking specifically, the skill must cite Thomke's case study, not Booking.com itself, for
  any precise percentage.

### What it does NOT license
- "1,000+ concurrent experiments" describes Booking.com circa 2017, a company with a
  many-thousand-person product org and massive global traffic. It licenses nothing about
  small-team testing cadence.
- The "9 out of 10 fail" number, wherever it's cited from, should never be presented as a
  Booking.com-authored statistic in this skill — the primary-source trail does not support that
  attribution.

---

## 5. Spotify Engineering

| Title | Author(s) | Date | URL |
|---|---|---|---|
| Coming Soon: Confidence — An Experimentation Platform from Spotify | Tyson Singer (Head of Technology and Platforms) | 2023-08-03 | https://engineering.atspotify.com/2023/8/coming-soon-confidence-an-experimentation-platform-from-spotify |
| Choosing a Sequential Testing Framework — Comparisons and Discussions | Mårten Schultzberg (Staff Data Scientist), Sebastian Ankargren (Sr. Data Scientist) | 2023-03-21 | https://engineering.atspotify.com/2023/03/choosing-sequential-testing-framework-comparisons-and-discussions |
| Bringing Sequential Testing to Experiments with Longitudinal Data (Part 1): The Peeking Problem 2.0 | Sebastian Ankargren, Mattias Frånberg, Mårten Schultzberg | 2023-07-18 | https://engineering.atspotify.com/2023/07/bringing-sequential-testing-to-experiments-with-longitudinal-data-part-1-the-peeking-problem-2-0 |
| Bringing Sequential Testing to Experiments with Longitudinal Data (Part 2): Sequential Testing | Sebastian Ankargren, Mattias Frånberg, Mårten Schultzberg | 2023-07-25 | https://engineering.atspotify.com/2023/07/bringing-sequential-testing-to-experiments-with-longitudinal-data-part-2-sequential-testing | 
| Beyond Winning: Spotify's Experiments with Learning Framework | (not fetched — found, flag for follow-up) | 2025-09 | https://engineering.atspotify.com/2025/9/spotifys-experiments-with-learning-framework |
| Risk-Aware Product Decisions in A/B Tests with Multiple Metrics | (not fetched — found, flag for follow-up) | 2024-03 | https://engineering.atspotify.com/2024/03/risk-aware-product-decisions-in-a-b-tests-with-multiple-metrics |

### Coming Soon: Confidence (2023-08-03)
**Durable lesson**: Spotify's own experimentation maturity curve is a citable case study in
itself — internal tooling (ABBA) unlocked scale, and then became the bottleneck at the next
order of magnitude, requiring a second-generation platform (EP) with automated coordination and
a shared Metrics Catalog. This "your first tool becomes the ceiling" arc parallels Airbnb's ERF
→ scaled-ERF story and LinkedIn's "prehistory" → T-REX story: a 3-way convergence on
experimentation-tooling lifecycle.

**Magnitudes (verbatim, as extracted — re-verify before quoting as exact)**:
> growth "from running fewer than 20 priority experiments per year to running hundreds," then to
> "thousands per year"

> "hundreds of squads and thousands of developers, designers, data scientists, and PMs"

> Home screen alone runs "over 250 tests annually"

### Choosing a Sequential Testing Framework (2023-03-21)
**Durable lesson**: Spotify explicitly frames sequential-testing framework choice as a genuine
tradeoff, not "always use the fancy always-valid method" — Group Sequential Tests (GST) give
the *highest power* when a maximum sample size can be reasonably estimated in advance, but
inflate false positives if you keep collecting data past that pre-registered maximum; Always
Valid Inference (AVI/mSPRT) removes the need to commit to a maximum sample size up front but
pays for that flexibility with lower power under batch analysis. Spotify explicitly rules out
a naive "corrected-alpha" approach as invalid because it does not bound the false positive rate
under repeated peeking.

**Magnitudes (verbatim, as extracted)**:
> With repeated standard testing (no correction), "the true false positive rate grows quickly";
> after two intermittent analyses the true false-positive rate approaches "10%, since the two
> tests give us two opportunities to find a significant effect" (against a nominal/intended 5%).

This is a clean, precise, first-party statement of the peeking problem's actual magnitude for
the simplest possible case (exactly two looks) — strong candidate for a skill's peeking-problem
explainer, with the caveat that it's the two-look case specifically (more looks compound
further, not linearly).

### Bringing Sequential Testing to Longitudinal Data, Parts 1-2 (2023-07-18, 2023-07-25)
**Durable lesson ("the peeking problem 2.0")**: A second, distinct and less well-known form of
peeking exists beyond "checking the aggregate p-value repeatedly": when a single participant
contributes multiple sequential measurements (e.g., week-1, week-2, week-3 retention for the
same user), looking at that participant's results before all of their measurements are in also
inflates false positives — even if you never re-check the overall test's p-value more than
once. The fix requires modeling the within-unit covariance structure explicitly (their
estimators: ROB-OLS, ROB-WLS, GLS) rather than treating repeated per-user measurements as
independent observations. Group-sequential theory only applies cleanly when the test statistics
maintain "independent increments" across looks, which holds for GLS/GLM/GEE models but not for
naive repeated t-tests on accumulating per-user data.

**Magnitudes (verbatim, as extracted)**: simulation used "1,000 replications per setting with
N=1,000*K observations" across measurement counts K=1 to K=20; false-positive-rate inflation
was shown to grow with K under AR(1)-correlated open-ended metrics. (Simulation-study numbers,
not a real-experiment magnitude — flag as methodological, not a "here's what happened in
production" figure.)

### What this licenses a growth skill to say
- **Peeking has (at least) two distinct failure modes**: the classic "checking the aggregate
  result too often" and the less-taught "checking a participant's cumulative result before all
  their measurements are in." A growth skill teaching peeking should cover both, citing Spotify
  as the source for the second (it is genuinely under-taught elsewhere in this corpus).
- **Sequential-method choice is a real tradeoff (GST vs. AVI), not a solved "always do X"** —
  this directly refutes any skill content that says "just use always-valid p-values and you're
  safe" without qualification; Spotify's own engineers explicitly document where GST wins.
- The exact "10% false positive rate after two looks against a 5% nominal rate" is a clean,
  precise, citable number for explaining peeking's magnitude to a skeptical reader.

### What it does NOT license
- The "thousands of experiments per year," "250 tests annually on Home" scale describes
  Spotify at hundreds-of-squads scale. It says nothing about how many looks a 3-person team
  doing one test a month can safely take (though the same math applies at any N — the false-
  positive inflation is about number of looks, not company size, which is itself a useful thing
  to make explicit for a small-sample audience).

---

## 6. LinkedIn Engineering

| Title | Author(s) | Date | URL |
|---|---|---|---|
| Our evolution towards T-REX: The prehistory of experimentation infrastructure at LinkedIn | LinkedIn Engineering (not individually bylined in fetch) | 2020-09-24 | https://www.linkedin.com/blog/engineering/ab-testing-experimentation/our-evolution-towards-t-rex-the-prehistory-of-experimentation-i |
| Making the LinkedIn experimentation engine 20x faster | (not independently re-fetched this pass — 404 on original URL, redirect located, not re-opened for time) | 2020 | https://www.linkedin.com/blog/engineering/ab-testing-experimentation/making-the-linkedin-experimentation-engine-20x-faster |
| XLNT Platform: Driving A/B Testing at LinkedIn | (404 on fetch attempt — URL may have moved; not recovered this pass) | — | https://engineering.linkedin.com/ab-testing/xlnt-platform-driving-ab-testing-linkedin |
| Using Ego-Clusters to Measure Network Effects at LinkedIn (arXiv paper, KDD) | Guillaume Saint-Jacques, Maneesh Varshney, Jeremy Simpson, Ya Xu | submitted 2019-03-20 | https://arxiv.org/abs/1903.08755 |
| Improving Ego-Cluster for Network Effect Measurement (follow-up, KDD 2024) | (not fetched — found, flag for follow-up) | 2024 | https://arxiv.org/abs/2308.05945 |

### Our evolution towards T-REX (2020-09-24)
**Durable lesson**: LinkedIn's own "prehistory" is an unusually candid first-party account of
what NOT to do: their earliest system bucketed users into 1,000 segments via simple modulo
arithmetic and coordinated which segment got which treatment via **email chains** — a process
they explicitly call scientifically unsound and unscalable. The ~2010 redesign's core move was
decoupling test definitions from application code via a DSL (Lix), enabling gradual rollout
without redeployment — the same "decouple experiment logic from business logic" principle
Airbnb's ERF (lambdas) and Booking's paper (generic code library) independently state. This is
a third independent company teaching the same infrastructure lesson.

**Magnitudes (verbatim, as extracted)**:
> deployment latency reduced from hours to "under 5 minutes" after the ~2010 redesign

> "41,000 simultaneous A/B tests at any given time," "700+ million" members

> cache-hit rates: "98-99%" client-level, "93%+" backend; "<0.2%" of evaluation requests hit
> storage nodes, "<2%" require network calls

(Flag: these last four numbers were extracted, not independently re-verified character-for-
character against raw HTML the way the Netflix/Lyft numbers were — treat as verify-before-ship.)

### Ego-Clusters to Measure Network Effects at LinkedIn (arXiv, KDD)
**Durable lesson**: LinkedIn's stated problem framing is the general SUTVA-violation problem —
"my randomized treatment/control status affects not just my own outcome but my connections'
outcomes too" — which breaks the independence assumption behind ordinary A/B analysis on any
social/network product. Their solution (ego-cluster randomization: bucket a focal user plus
their immediate connections together as one randomization unit) is explicitly designed to be
lower-engineering-cost than full graph-cluster randomization: it "does not require... changes to
experimentation and analysis platforms," and works by assigning treatment "only... at an
individual level" while analyzing at the ego-cluster level.

**Magnitudes (verbatim)**: the abstract states the method achieves "significantly increasing
power compared to traditional cluster-based randomization" but I could not extract an exact
numeric comparison from the abstract-level fetch performed this pass — **flag for follow-up**:
open the full PDF for the exact power-gain number before citing a magnitude.

### What this licenses a growth skill to say
- **Decoupling experiment/treatment logic from application code via a DSL/config layer is a
  4-way convergent lesson** (LinkedIn's Lix DSL, Airbnb's lambda-based ERF declarations,
  Booking's generic code library, and implicitly Uber's later "Parameters" system below) — this
  is one of the strongest cross-company invariants in the whole corpus.
- LinkedIn is a first-party, named-author source for "network interference breaks SUTVA on
  social products, and cluster-based randomization at the ego-network level is a practical,
  low-engineering-cost fix" — directly relevant to any growth-skill content on social/
  marketplace products.

### What it does NOT license
- 41,000 simultaneous tests over 700M+ members describes a company at LinkedIn's scale. It
  licenses nothing about test-volume expectations for smaller products.
- The ego-cluster method is validated for LinkedIn's specific graph structure (professional
  social network); applying it to a different interference structure (e.g., DoorDash/Lyft's
  supply-side marketplace interference) is NOT licensed by this paper — those companies
  independently developed switchback methods instead (see §7), which is itself informative: the
  right interference-correction method is domain-specific, not one-size-fits-all.

---

## 7. Uber, Lyft, DoorDash — the marketplace-interference trio

| Company | Title | Author(s) | Date | URL |
|---|---|---|---|---|
| Uber | Under the Hood of Uber's Experimentation Platform | Tianxia Zhou, Mandie Liu, Eva Feng, Anirban Deb, Jeremy Gu, Suman Bhattacharya | 2018-08-28 | https://www.uber.com/us/en/blog/xp/ |
| Uber | Supercharging A/B Testing at Uber | Krishna Puttaswamy, Luke Duncan, Arun Babu A S P | 2022-07-21 | https://www.uber.com/blog/supercharging-a-b-testing-at-uber/ |
| Lyft | Experimentation in a Ridesharing Marketplace, Part 1 of 3: Interference Across a Network | Nicholas Chamandy | 2016-09-02 | https://eng.lyft.com/experimentation-in-a-ridesharing-marketplace-b39db027a66e |
| Lyft | Experimentation in a Ridesharing Marketplace, Part 2 of 3: Simulating a Ridesharing Marketplace | Adam Greenhall | 2016-10-06 | https://eng.lyft.com/experimentation-in-a-ridesharing-marketplace-36007a8a31f2 |
| Lyft | Experimentation in a Ridesharing Marketplace, Part 3 of 3: Bias and Variance | Nicholas Chamandy | 2016-12-15 | https://eng.lyft.com/experimentation-in-a-ridesharing-marketplace-f75a9c4fcf01 |
| DoorDash | Switchback Tests and Randomized Experimentation Under Network Effects at DoorDash | David Kastelman, Raghav Ramesh | 2018-02-13 | https://careersatdoordash.com/blog/switchback-tests-and-randomized-experimentation-under-network-effects-at-doordash/ (also doordash.engineering) |
| DoorDash | Balancing Network Effects, Learning Effects, and Power in Experiments | (not opened — 403/JS-rendered, see note) | 2022-02-16 | https://doordash.engineering/2022/02/16/balancing-network-effects-learning-effects-and-power-in-experiments/ |
| DoorDash | The 4 Principles DoorDash Used to Increase Its Logistics Experiment Capacity by 1000% | (not opened — 403/JS-rendered) | 2021-09-21 | https://careersatdoordash.com/blog/the-4-principles-doordash-used-to-increase-its-logistics-experiment-capacity-by-1000/ |
| DoorDash | Analyzing Switchback Experiments by Cluster Robust Standard Error to Prevent False Positive Results | (not opened — 403/JS-rendered) | — | https://careersatdoordash.com/blog/cluster-robust-standard-error-in-switchback-experiments/ |
| DoorDash | Experiment Rigor for Switchback Experiment Analysis | (not opened — 403/JS-rendered) | — | https://careersatdoordash.com/blog/experiment-rigor-for-switchback-experiment-analysis/ |

**Operational note**: careersatdoordash.com serves a fully client-side-rendered React shell to
both curl (with a real browser UA) and to WebFetch (which returned 403). Titles, authors, and
approximate content were recovered where possible via search-result summaries and one mirror
(predictiveanalyticsworld.com republished the switchback post in full). The three DoorDash URLs
marked "not opened" above should be retried by a future pass with a JS-capable fetch (e.g., the
claude-in-chrome browser tool) rather than curl/WebFetch — flagging this explicitly rather than
fabricating quoted content I did not actually read.

### Uber — Under the Hood of Uber's Experimentation Platform (2018-08-28)
**Durable lesson**: Uber's XP explicitly runs four distinct statistical methodologies side by
side rather than picking one: fixed-horizon A/B/N tests, sequential probability ratio tests
(SPRT) for continuous monitoring, causal inference (synthetic control) for cases where
randomization isn't available, and contextual multi-armed bandits for parameter tuning —
explicitly framed as complementary tools for different questions (immediate causal effect vs.
adaptive optimization), not a single "best" method.

**Magnitudes (verbatim, as extracted)**:
> "Over 1,000 experiments running on our platform at any given time" (2018)

Also named as in use: CUPED variance reduction, difference-in-differences bias correction for
pre-experiment group imbalance, "Mixture SPRT" for continuous monitoring with false-discovery-
rate control.

### Uber — Supercharging A/B Testing at Uber (2022-07-21)
**Durable lesson**: Uber's own account of rebuilding a 7-year-old platform (internally called
Morpheus) states the core architectural failure explicitly: treatments were baked into mobile
app code, so *changing a treatment required a mobile app rebuild and re-release* — the fix
("Parameters") decouples experiment configuration from code, the same decoupling principle
independently taught by LinkedIn (Lix DSL), Airbnb (ERF lambdas), and Booking (generic code
library). Four independent companies teaching the same infrastructure principle is one of the
strongest convergences in this whole corpus.

**Magnitudes (verbatim, as extracted)**:
> transitioned "2,000+ developers" to the new platform; integrated "15+ partner systems"
> contributing "~40% of experiments"; covered "10+ mobile apps and 350+ backend services";
> deprecated "50,000+ stale experiments" from the legacy system; logging pipeline processing
> ">>1M messages/second"

Explicit organizational lesson (verbatim, as extracted): "Building an experimentation platform
requires... tight integration and collaboration between engineering and data science."

### Lyft — Experimentation in a Ridesharing Marketplace, Part 1 (2016-09-02)
**Durable lesson — the exact conditions under which ordinary A/B testing breaks**: Lyft gives a
fully worked toy example (two riders, one available driver, Prime Time surge pricing) showing
that when one user's treatment assignment changes the *supply available to another user*
(interference / SUTVA violation), naive per-user randomization produces a biased effect
estimate — and demonstrates the bias is not a small-sample artifact by showing it holds at
arbitrary scale (many independent copies of the same 2-passenger unit). The paper opens with a
paraphrase of R.A. Fisher (1938): "To consult the [data scientist] after an experiment is
finished is often merely to ask [her] to conduct a post mortem examination... [She] can perhaps
say what the experiment died of" — used to frame design as the thing that matters, not
after-the-fact analysis. Lyft's own bias-variance framing: coarser randomization units
(spatial regions, time intervals) reduce interference bias but increase variance because there
are fewer independent units — this tradeoff, not a single "right answer," is the durable lesson.

**Magnitudes (verbatim)**:
> "Subsidizing Prime Time results in a 1/3 increase in rides in our simple model" (ground-truth
> effect in the toy model)

> naive random-user A/B estimate of the same toy scenario: "this is much bigger than the ground
> truth effect size of 33% that we calculated above — we overestimated the effect of the Prime
> Time subsidy by a factor of 6!"

This "factor of 6 overestimate" is Lyft's own clean, quotable, worked illustration of
interference bias's real magnitude — strongly citable, with the explicit caveat that it is a
stylized toy model, not a measured real-world bias figure (Lyft is explicit that it's
illustrative, then in Part 3 moves to simulation-based quantification with real historical
data).

### Lyft — Part 2: Simulating a Ridesharing Marketplace (2016-10-06)
**Durable lesson**: Before trusting a novel experimental design at scale, Lyft builds and
validates a simulator against production, with three named guiding principles: **accurate**
(at minimum "directionally accurate" — the better algorithm in simulation should also win in
the real A/B test), **fast** (parallel across dozens of markets), and **easy to use** (reuse
production code so simulator-to-production model porting is nearly free). Explicit practical
advice given: "start small," "build in accuracy evaluation at the start," "use the simplest
models to start" (directional accuracy is often good enough to justify testing in real life).
Simulation and A/B testing are explicitly framed as complementary, not substitutes — the
simulator lets Lyft discard bad ideas cheaply pre-launch; A/B testing still gives the "precise
measurement" once an idea survives simulation.

**Magnitudes (verbatim)**: none of the numeric kind (no specific error rates or scale numbers
in this installment; it's a methods post).

### Lyft — Part 3: Bias and Variance (2016-12-15)
**Durable lesson — what a switchback/coarse design costs, quantified**: Using their simulator on
a real (though anonymized) medium-sized market over a 4-week period, Lyft directly compares four
randomization schemes (alternating hourly intervals, coarse geohash-5 spatial cells, fine
geohash-6 spatial cells, random user sessions) against a known simulated ground truth. Key
finding, verbatim-adjacent: **no single scheme wins on all metrics** — "a different randomization
scheme minimizes root-mean squared error (RMSE) for each metric," and the finest-grained scheme
(random user sessions) is explicitly shown to be dangerously wrong on the availability metric:
"if we blindly applied a random-session design, we would wrongly conclude that subsidizing Prime
Time has no effect on driver availability — with a tight confidence interval!" — i.e., naive
fine-grained randomization can produce a *confidently wrong* null result, not just a noisy one.
The alternating-hourly (coarsest temporal) design is "almost unbiased for all metrics" but "can
have large variance" for metrics sensitive to hour-to-hour fluctuation (weather, traffic, special
events), and Lyft notes a structural flaw: with only two possible random treatment allocations
(which hour goes first), "a generic and accurate variance estimator does not exist to our
knowledge" for the simplest alternating design. Lyft's proposed refinement — two-stage
randomization (randomize non-interfering groups, e.g. hours, into varying treatment proportions,
then randomize within-group) — reduces bias for some metrics but, in their own tested example,
**increased variance relative to the simple alternating-hour design for all three metrics
studied** — an honest negative result, not oversold.

**Magnitudes (verbatim)**: Y-axis values on the bias/variance figures are explicitly stated as
"obscured for confidentiality reasons" — Lyft deliberately withheld exact numeric bias/variance
values in this public post, so there is no additional precise percentage to extract beyond the
qualitative comparisons above. This absence is itself worth recording: Lyft published the
*shape* of the tradeoff and the methodology, not the exact numbers, for confidentiality reasons.

### DoorDash — Switchback Tests and Randomized Experimentation Under Network Effects (2018-02-13)
**Durable lesson**: DoorDash's stated trigger condition for abandoning ordinary order-level A/B
testing: when "the assignment of one delivery to a Dasher depends heavily on the outcome of
another delivery's assignment" because both draw on a shared, geographically local Dasher fleet
— simultaneous treatment and control orders in the same area are not independent. Their fix
(switchback: assign treatment/control to region×time-window pairs, alternating which condition
each region gets across windows) trades unit-of-randomization granularity for independence, the
same bias-variance logic Lyft's series works out in more quantitative detail. DoorDash
explicitly notes they aggregate to the region-time unit (not the delivery) before running
statistical tests, because analyzing at the delivery level would violate the independence
assumption the test requires.

**Magnitudes**: none independently verified verbatim this pass (source not fully opened — see
operational note above; the summary above is reconstructed from a mirror + search extraction,
treat magnitude claims about this specific post as **UNTRACED/unverified** until re-opened).

### What this licenses a growth skill to say
- **The precise, citable trigger condition for "you need a switchback/marketplace-aware design,
  not a simple A/B test"**: a shared, capacity-constrained resource pool (drivers, dashers) means
  one user's treatment assignment changes what's available to a geographically/temporally nearby
  user. This exact mechanism is independently and consistently described by Lyft and DoorDash —
  strong 2-way convergence, both first-party, both with worked mechanism explanations.
- **Coarser randomization reduces interference bias but costs variance/power — this is a real,
  quantified (where disclosed) tradeoff, not a free upgrade.** A growth skill should teach
  "switchback ≠ automatically better," citing Lyft's honest finding that their two-stage design
  *increased* variance relative to the simpler alternating-hour scheme in their own test.
- **Decoupling experiment configuration from application code is now a 4-way convergent lesson**
  across LinkedIn, Airbnb, Booking, and Uber — strong invariant candidate.
- **A confidently-wrong null result from a naive fine-grained design under interference** (Lyft's
  random-session example) is a sharp, citable illustration of why "just randomize at the finest
  grain for more power" is actively dangerous on marketplace/network products.

### What it does NOT license
- None of these numbers transfer to non-marketplace, non-network products — the entire
  switchback/interference literature is conditional on a shared, capacity-constrained resource
  or a social-graph connection between units. A B2B SaaS dashboard change with independent users
  does not need any of this machinery, and a growth skill should say so explicitly to avoid
  over-applying marketplace-grade complexity to ordinary funnel tests.
- Uber's 1,000+ concurrent experiments, 2,000+ developers, 50,000+ deprecated experiments
  describe a company at Uber's org scale; none of it is a benchmark for smaller teams.
- The DoorDash "1000%" experiment-capacity claim (title only, content not independently
  verified this pass) should be treated as **unverified pending re-fetch** — do not quote its
  internal numbers without re-opening the source with a JS-capable tool.

---

## 8. Duolingo

| Title | Author(s) | Date | URL |
|---|---|---|---|
| How Streaks keep Duolingo learners committed to their language goals | Kai Herng Loh | 2017-05-10 | https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/ |
| Improving Duolingo, one experiment at a time | Lavanya Aprameya | 2020-01-10 | https://blog.duolingo.com/improving-duolingo-one-experiment-at-a-time |
| 5 product lessons we learned from building Friend Streak | Jackson Shuttleworth | 2024-09-20 | https://blog.duolingo.com/product-lessons-friend-streak/ |

### How Streaks keep Duolingo learners committed (2017-05-10)
**Durable lesson**: Duolingo frames the streak mechanic explicitly as a *pacing/commitment
device validated by controlled experiment*, not just a UI gimmick — two named, dated A/B tests
are cited: a "Streak Wager" test (spend in-app currency to bet on extending a streak 7 more
days) and a "Weekend Amulet" test (a flexibility mechanism letting users skip a weekend without
breaking streak). Both are framed around a specific behavioral insight: users who pace
themselves (vs. binge/cram) show better long-term retention, and *giving users a safety valve*
(the Amulet) counter-intuitively *increased* retention by reducing all-or-nothing abandonment
risk — i.e., making the commitment slightly less rigid made people keep it longer. This is
first-party (rung 1) for Duolingo's own product; the author is credited as an internal
Product Manager presenting the company's own experiment results.

**Magnitudes (verbatim, as extracted)**:
> Streak Wager test: "statistically significant increases in Day-1, Day-7 and Day-14 user
> retention, with Day-7 retention showing the greatest improvement at +14%"

> Weekend Amulet test: users were "4% more likely to come back a week later and 5% less likely
> to lose their streak"

(Flag: extracted, not independently re-verified character-for-character against raw HTML —
verify-before-ship for the exact wording, though the directional claims and rough magnitudes
are high-confidence.)

### Improving Duolingo, one experiment at a time (2020-01-10)
**Durable lesson**: Duolingo explicitly states a second reason to run controlled experiments
beyond "pick the winner" — creating structured **learning opportunities when a feature
underperforms**, and gives a concrete example of a feature that *increased revenue but decreased
retention* (a "Duolingo Plus offline" promotion), used as an internal case study in
metric-tradeoff discipline: don't ship on a single metric win without checking for
guardrail/secondary-metric damage. Same OEC-vs-guardrail discipline Netflix, Microsoft, and
Booking each independently teach.

**Magnitudes (verbatim, as extracted)**:
> "a few hundred experiments running simultaneously" in a given week

> "over 2,000 total experiments conducted" in the three years since their internal experimentation
> service launched

### 5 product lessons we learned from building Friend Streak (2024-09-20)
**Durable lesson**: Duolingo explicitly describes choosing NOT to keep optimizing/scaling a
feature (Friend Streak group size) once the marginal population affected became too small to
justify the cost of further experimentation — a capped-at-5 design decision made from data,
framed as "systematically identify your biggest conversion bottleneck (the initial invite) and
concentrate resources there rather than spreading effort across the entire funnel." This is a
useful, rare first-party example of a company explicitly stating "we stopped experimenting on X
because the population was too small to be worth it" — relevant to the small-sample-honesty
wedge in controller-canon (an example of a large company voluntarily behaving like a small-N
team on a sub-feature).

**Magnitudes (verbatim, as extracted)**:
> "learners with at least one Friend Streak are 22% more likely to complete their daily lesson
> (and that likelihood increases the more Friend Streaks you have!)"

### Ethics adjacency (per charter's flag)
None of the three fetched Duolingo posts contain the company's own explicit reflection on the
gamification/habit-engineering ethics question (dark-patterns adjacency, per controller-canon
§2's Nir Eyal note) — this pass found only the mechanics and the retention numbers, not a
first-party ethics discussion. Flag for the X or skills channel: if any Duolingo-authored
ethics reflection on streak pressure exists, it wasn't surfaced by the searches run here.

### What this licenses a growth skill to say
- **Adding a controlled flexibility valve to a commitment mechanic can increase retention by
  reducing catastrophic (all-or-nothing) abandonment** — Duolingo's own dated, numbered example
  (Weekend Amulet) is a clean, citable illustration, though it's one company/one feature and
  should not be generalized to "flexibility always helps retention" without qualification.
- **Checking guardrail/secondary metrics before shipping a primary-metric win is independently
  taught by Duolingo, Netflix, Microsoft, and Booking** — 4-way convergence, one of the strongest
  in this corpus.
- Duolingo is a citable first-party example of **deliberately not scaling an experiment/feature
  further once the addressable population becomes small** — directly useful for the small-
  sample-honesty wedge as a "even big companies do this" argument.

### What it does NOT license
- The +14% Day-7 retention, 22% more-likely-to-complete numbers are specific to Duolingo's
  streak/gamification mechanics circa their respective test dates. They are not general
  benchmarks for "how much streaks help retention" on an arbitrary product.
- "A few hundred experiments running simultaneously" describes Duolingo at hundreds-of-millions-
  of-users scale; it licenses nothing about test cadence for a smaller app.

---

## Cross-company convergence list (3+ independent companies teaching the same thing)

These are the strongest invariant candidates from this channel — each item below is
independently and explicitly stated (not merely implied) by at least three of the companies
surveyed:

1. **Decouple experiment/treatment configuration from application/business logic.** LinkedIn
   (Lix DSL, replacing email-coordinated bucket assignment), Airbnb (ERF's lambda-based
   declaration, explicitly to make bias visible in code review), Booking.com (their paper's
   "generic and extensible code library which enforces a loose coupling between experimentation
   and business logic"), and Uber ("Parameters," explicitly built because baking treatments into
   mobile app code required a rebuild to change anything) — four independent companies, same
   architectural principle, stated as a cause of scaling failure when absent.

2. **A healthy, mature experimentation program has a low win rate, and this is a feature, not a
   bug.** Netflix states it explicitly and repeatedly ("most of our ideas do not improve the
   service... despite our broad expertise"); Booking.com's win rate is discussed via Thomke's
   case study (though NOT first-party — see untraced list); Spotify's home-screen scale (250+
   tests/year on one surface) and DoorDash's stated need to keep testing at high volume both
   imply the same "most bets don't pay off, so you need volume" logic; Duolingo explicitly frames
   experiments that underperform as "learning opportunities," not failures. At minimum this is a
   clean 2-way first-party (Netflix + Duolingo) convergence with strong secondhand support
   (Booking via Thomke) — report the strength honestly, don't overclaim it as 4-way first-party.

3. **Check guardrail/secondary metrics before shipping a primary-metric "win."** Netflix
   (customer-service-contact-rate guardrail example), Microsoft ExP (STEDI metrics taxonomy;
   novelty-effect example, 28% click increase that later decayed), Duolingo (revenue-up/
   retention-down Duolingo Plus example), Booking.com (implicit in "data quality... to build
   trust" framing) — a clean 3-4-way convergence, all first-party, all with a specific dated
   example.

4. **Pre-commit sample size/duration from a power calculation before launch; do not use
   "has the p-value crossed 0.05 yet" as a stopping rule.** Airbnb (the classic 2014 post, with
   a real dated example), Spotify (their entire sequential-testing series exists to give a
   *statistically valid* way to look early, implicitly conceding the naive version is invalid),
   Netflix ("in principle, the data are examined only once, at the conclusion of the test" as
   their stated default, with sequential testing as the disciplined alternative under active
   development) — 3-way convergence, all first-party.

5. **Rebuild your metrics/experiment computation pipeline around the shared data source, not
   the individual experiment, once you outgrow your first-generation tooling.** Airbnb (Event
   Sources restructuring, 24hr→45min), Netflix (Metrics Repo centralizing previously-scattered
   per-team metric pipelines), and implicitly Microsoft's four-service architectural split —
   3-way convergence on an architecture lesson, not a culture lesson.

6. **A shared, capacity-constrained resource pool between units (drivers/dashers, or a social
   graph) breaks the independence assumption behind ordinary A/B testing, and requires a
   coarser randomization unit (switchback/geo, or ego-cluster) as a bias-variance tradeoff, not
   a free upgrade.** Lyft (worked toy example + simulation-quantified tradeoff), DoorDash
   (switchback, same underlying mechanism, shared Dasher fleet), LinkedIn (ego-cluster,
   different mechanism — social graph rather than physical fleet, same SUTVA-violation logic) —
   3-way convergence, though note DIVERGENCE below on which specific fix each company chose.

---

## Divergence list (companies contradict each other, or solve the same problem differently)

1. **Sequential testing philosophy: GST (bounded, needs a pre-estimated max sample) vs. AVI/
   mSPRT (unbounded, costs power).** Spotify's own published position is explicitly "it
   depends" — GST wins when you can estimate a max sample size, AVI wins when you can't — i.e.,
   Spotify itself refuses to pick a universal winner. This is less a company-vs-company
   divergence and more a first-party statement that **no universal peeking-fix answer exists** —
   important for a growth skill to state honestly rather than picking a side.

2. **How to fix interference/network effects: switchback/geo-time randomization (Lyft, DoorDash)
   vs. ego-cluster randomization (LinkedIn).** These are not contradictory in principle (both are
   "randomize a coarser unit than the individual"), but they are **different mechanisms for
   different interference structures** — switchback assumes interference is spatially/temporally
   local via a shared resource pool; ego-cluster assumes interference propagates along an
   explicit social graph. A growth skill should not present one as "the" fix for network effects;
   it should teach "diagnose your interference mechanism first, then pick the matching design."

3. **How much to disclose publicly about bias/variance magnitudes.** Lyft explicitly redacted
   their own figures' Y-axes "for confidentiality reasons" while publishing the shape/method in
   full; Booking.com, Netflix, and LinkedIn published specific magnitudes (1,000+ experiments,
   >100x sensitivity, 41,000 simultaneous tests) without redaction. Not a methodological
   disagreement, but worth noting as a pattern: companies disclose infrastructure-scale numbers
   more freely than they disclose actual effect-size/bias numbers.

4. **Win-rate/failure-rate transparency.** Netflix is explicit but deliberately imprecise
   ("a small percentage," refusing to give an exact number in a public post); the "Booking.com
   ~90% fail" figure circulates precisely and widely but — per the trace above — did NOT
   originate as a Booking.com-authored precise statistic; it is Thomke's framing of Booking's
   qualitative self-report. This is a divergence in evidentiary discipline, not necessarily in
   the underlying fact pattern, and the growth skill should be explicit about which companies
   give precise, sourced numbers (none of the "N% of experiments win" folklore in this whole
   corpus is actually first-party-precise, once traced).

---

## UNTRACED list

1. **"Booking.com: ~90% of experiments fail / only ~10% succeed."** Traced to Stefan Thomke's
   HBR case study/podcast (2019-09-03), which reports Booking's self-described learning
   secondhand. NOT traced to any Booking.com-authored blog post, paper, or named-Booking-
   employee talk transcript. Booking.com's own blog (booking.ai) is now offline, which
   independently limits what could be re-checked this pass. **Do not attribute this number to
   Booking.com directly; attribute it to Thomke's case study if used at all.**

2. **"Industry standard of 10% success rate at an average 1% uplift in revenue per test"** —
   surfaced via a WebSearch summary in the context of Booking.com's practice, but I could not
   locate or open the primary sentence this derives from. Possibly a further compression of the
   Thomke framing, possibly from a different source entirely (e.g., a VWO/CRO-vendor framing
   presented as generic industry folklore). **UNTRACED — do not ship.**

3. **DoorDash's exact switchback power/variance cost figures, the "1000%" experiment-capacity
   claim's underlying numbers, and the cluster-robust-standard-error post's false-positive-rate
   figures.** These three DoorDash posts could not be opened this pass (JS-rendered site,
   curl and WebFetch both blocked). Titles, authors (where found), and dates are recorded above,
   but any specific number attributed to them in casual paraphrase elsewhere should be treated
   as **UNTRACED until a JS-capable fetch (e.g., claude-in-chrome) re-opens the source.**

4. **LinkedIn ego-cluster's exact power-gain number vs. traditional cluster randomization.**
   The paper's abstract asserts "significantly increasing power" but the exact multiplier/
   percentage was not extracted from the abstract-level fetch performed this pass — the full
   PDF (arxiv.org/pdf/1903.08755) needs to be opened for the number.

5. **Microsoft/LinkedIn SRM incidence rate (~6-10% of experiments show SRM), referenced in
   controller-canon §1.** NOT independently re-verified against a primary Microsoft or LinkedIn
   source in this pass — the ExP "Patterns of Trustworthy Experimentation" post discusses SRM
   qualitatively ("typically invalidate[s] the A/B test") but does not state an incidence rate in
   the portion fetched. Remains an open item for controller-canon's re-verification requirement.

6. **Airbnb's exact 2017 scaling numbers** (500 concurrent experiments, ~2,500 metrics/day,
   ~50k experiment/metric combinations, 24hr→45min runtime improvement, 50 dimensional cuts per
   metric) and **LinkedIn's cache-hit-rate figures** (98-99% / 93%+ / <0.2% / <2%) — both sets
   were extracted via a fetch-and-summarize pass rather than independently re-read character-for-
   character against raw HTML (unlike the Netflix, Lyft, and Booking.com arXiv numbers, which
   were verified against raw text I read directly). High plausibility, directionally consistent
   with the surrounding narrative, but flagged as **verify-before-ship** rather than fully
   trusted.
