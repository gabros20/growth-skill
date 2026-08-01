# X/Twitter raw findings — experimentation-VALIDITY layer (worker B1)

Channel: X via `xrelay`. Territory: the people who know why experiments are wrong, not the
people who sell experiment tools. All dates ISO. All claims carry post ID + full URL + handle +
date. Rungs: **[measured]** (real result/number with study or platform behind it),
**[practitioner-opinion]** (named expert's view, dated), **[folklore]** (repeated-without-source).

Archives captured to scratchpad (not committed, listed for traceability):
`ronnyk.json` (200 posts), `ronnyk-replies.json` (60, incl. 15 true reply-exchanges),
`lukasvermeer.json` (200), `chesharma87.json` via user-posts (20 fetched, mixed original+RT),
`evmill.json` (150), `jlinowski.json` (150), `rameshjohari.json` (73, full history),
`uri_sohn.json` (150), `vijayeraji.json` (120).

---

## 1. Handle roster

| Handle | Name | Followers | Bio (short) | Status | Verdict |
|---|---|---|---|---|---|
| @ronnyk | Ronny (Ron) Kohavi | 3,729 | Ex-exec Microsoft/Airbnb/Amazon; co-author *Trustworthy Online Controlled Experiments*; teaches A/B testing class | Alive, very active (posted 2026-02-20) | **Highest-value handle in this territory.** Full archive swept, incl. reply-exchanges. |
| @lukasvermeer | Lukas Vermeer | 2,217 | Ex-Booking.com experimentation lead ("I help people run experiments to make better products for customers") | Alive, low-frequency now (last original post in this archive 2024-04) | High value — SRM thread, CUPED-adjacent, Booking.com culture/scale posts, pricing-experiment ethics. |
| @chesharma87 | Chetan Sharma | 860 | Founder/CEO of Eppo (@eppohq, acquired by Datadog), now Product @datadoghq; ex-Airbnb, ex-Webflow | Alive | High value — pre-PMF vs post-PMF experimentation debate, power-analysis-first product philosophy, CUPED link. |
| @Get_Eppo | (old Eppo handle) | — | — | **Dead** (`xrelay user` returned null) | Use @eppohq instead. |
| @eppohq | Eppo by Datadog | 2,873 | "Acquired by @datadoghq May 2025" | Alive but low tweet count (42) | Confirms acquisition date directly in bio; not deep-swept (vendor account, low marginal signal vs chesharma87 personal). |
| @eppo_ai | — | — | — | **Dead/wrong handle** | Do not use. |
| @geteppo | Eppo | 4 | — | Alive but dormant (7 tweets, 4 followers) | Not worth sweeping. |
| @EvMill | Evan Miller | 5,482 | "Statistically inclined software developer... Working @AnthropicAI" | Alive | High value — CUPED blog author, sequential-testing-adjacent, sample-size app builder. Now at Anthropic (career note only). |
| @jlinowski | Jakub Linowski | 5,892 | GoodUI.org founder — evidence-graded UI/CRO pattern library; co-founder of the Trustworthy A/B Patterns replication project with @ronnyk | Alive, very active | High value — CRO-folklore-falsification wedge, "leaked A/B test" case studies, evidence grading philosophy. |
| @rameshjohari | Ramesh Johari | 843 | Professor, Management Science & Engineering, Stanford (ex-Cornell Tech) | Alive but very low frequency (92 tweets total, mostly non-experimentation) | Moderate value — directly confirms he co-built Optimizely's sequential/multiple-testing engine (2015). Rest of feed is general/COVID-era, not validity content. |
| @uri_sohn | Uri Simonsohn | 7,460 | Professor @Esade; Data Colada (with Joe Simmons, Leif Nelson) | Alive, active into 2026 | High value — replication-crisis/scientific-fraud watchdog (Gino-Ariely scandal), pre-registration critique. Academic-science register, not online-A/B-specific, but core falsification-material territory. |
| @statsig | Statsig (company) | 3,131 | "Move faster... integrated AB testing, product analytics, feature flags & session replay" | Alive | Vendor account — vetted, not deep-swept (out of scope vs named practitioners; likely covered by github/skills channels for docs). |
| @vijayeraji | Vijaye Raji | 3,765 | "Building Statsig" (now CTO of Applications @OpenAI post-acquisition) | Alive | High value — **direct primary-source confirmation of the Statsig→OpenAI acquisition** (2025-09-02), stratified-sampling variance claim, "Experimentation Week" methodology ships. |
| @growth_book | GrowthBook (company) | 615 | "open-source feature flagging and experimentation platform" | Alive | Vendor account — vetted only, not archived (low follower/signal density vs named practitioners; docs better mined via github channel). |
| @alexdeng | Shaojie (Alex) Deng | 57 | (empty bio) — Kohavi's co-author on "A/B Testing Intuition Busters" and CUPED lineage | Alive but essentially dormant (16 tweets total) | Not worth archiving — his contributions are fully visible through @ronnyk's citations of him. |
| @chesharma (no 87) | — | 0 | — | Wrong/dead handle, not the Eppo founder | Do not use. |

### Discovery pass (from `xrelay following ronnyk --limit 100`)

One discovery call surfaced several names worth flagging for future runs, not deep-swept this pass
(budget/time): **@deaneckles** (Dean Eckles, MIT — networks/contagion/causality, appears directly
in Kohavi's Twyman's-law thread), **@ErikVanZwet** (statistician, co-referenced by Kohavi on the
"New Look at P Values for RCTs" paper and Z-curve overestimation work), **@causalinf** (Scott
Cunningham, causal-inference textbook author), **@yudapearl** (Judea Pearl), **@VickersBiostats**
(Andrew Vickers, MSK biostatistician), **@signalnotnoise** ("First Principles" — "Be a more
successful leader with experimentation"), **@ItamarGilad** (mentioned twice by Kohavi re: NPS/A-A-B
critique, GIST framework — more growth-generalist than validity-pure), **@mgershoff** (guest
speaker in Kohavi's class, quoted on "value of A/B testing is not in the tests themselves"),
**@georgizgeorgiev** (mentioned by Kohavi as the source debunking the A/A/B-with-1/3-split
practice). None of these were archived this pass — flagged for the sub-orchestrator to prioritize
if a follow-up sweep is authorized.

---

## 2. Ron Kohavi (@ronnyk) deep dive — organized by topic

### 2.1 The Trustworthy A/B Patterns project — THE flagship falsification finding

A community replication project Kohavi co-founded with **@lukasvermeer** and **@jlinowski** in
June 2024, after noticing an implausible lift claim for rounded vs. square buttons. It re-runs
common CRO "patterns" at high statistical power (millions of users) and reports what actually
survives.

- **[measured]** 2026-02-13, id `2022381211042398467`, https://x.com/ronnyk/status/2022381211042398467
  — "The Winner's Curse: 10 Large-Scale A/B Testing Replications... In June 2024, @lukasvermeer,
  @jlinowski, and I, started a community project to replicate patterns after seeing an implausible
  lift for rounded vs. square buttons. The first three replications confirmed that the initial
  results were highly exaggerated... We have now summarized seven additional A/B tests across four
  patterns (rounded buttons, page performance, coupon-code field, and sticky call-to-action).
  These experiments were large, with a **median of 2.2M users per experiment** and **80% power**
  at pre-selected **MDEs of 0.3% to 2.2%**."
- **[measured]** 2026-02-13, id `2022381314633269634` — invites others to join the replication
  project; "We offer free help to design and analyze your replications in exchange for sharing the
  results."
- **[measured]** 2026-02-20, id `2024799391345979552`, Maven Lightning Lesson announcement titled
  "A/B Testing Replication Crisis: Lessons from 10 Large-scale A/B tests" — "Claims of large lifts
  in A/B tests are widespread, yet many are supported by small online experiments that are likely
  underpowered."
- **[measured]** 2025-11-20, id `1991297489811767736` — a run of the project's own home-page
  experiment: "the first run of this test had an SRM (Sample Ratio Mismatch), and this is the
  second run... 0.3% improvement to revenue is realistic and material to the business" — contrasted
  against "the recently summarized [rounded-button claim of] 55% CTR improvement" as implausible.
  **This tweet is itself a live demonstration of the SRM discipline the project enforces** — they
  caught their own SRM and re-ran.
- **[measured/practitioner-debunk]** direct reply thread, 2024-04-27/29, id `1782760837100273965`
  (question by @RyanTheJenks: "Why do you think people click on rounded buttons at a higher rate
  than squared buttons?") → Kohavi's reply id `1785485012445597832`, 2024-04-29: **"Flawed
  experiments."** — and the identical debunk repeated to a second questioner (@natelagos) at id
  `1785484733687935444`, same day, same words: "Flawed experiments."
- **[practitioner-opinion]** 2024-04-10, id `1777890861688439039`,
  https://x.com/ronnyk/status/1777890861688439039 — "Do elements with rounded shapes enhance
  click-through rates? Maybe; the two controlled experiments that supposedly justify this claim are
  not trustworthy. A fun exercise is to see if you can identify why the two A/B tests in the paper
  are flawed, just from the relevant paragraphs in the paper." (tagged #twymanslaw)

**This is the single richest falsification thread in the corpus**: a named, dated, three-person
community project explicitly built to test CRO folklore at power, that (a) debunked the rounded-
button claim, (b) is actively expanding to coupon-code fields and sticky CTAs — both stock CRO
"best practices" — and (c) demonstrates SRM discipline on itself. Directly actionable for the CRO
folklore falsification wedge (controller-canon §5.2).

### 2.2 Win rates / "most experiments fail" — the actual numbers, with source

- **[measured]** 2022-05-18, id `1526744199126609920`, https://x.com/ronnyk/status/1526744199126609920
  — "Controlled experiments (#abtests) have shown us that the above is correct: **around 60-90% of
  ideas fail to move the metrics they were designed to improve.** See Chapter 1 in [book link] and
  my class." — This is Kohavi citing his own book, Chapter 1, as the source. **Traced** (to the
  book, not just asserted).
- **[folklore, unattributed-inside-tweet]** 2024-06-16, id `1802216524260020652` — a ChatGPT-generated
  opening line Kohavi shared approvingly: "Did you know that companies like Microsoft and Airbnb
  run over 100 A/B tests every business day, but only about **10-20%** of these tests yield
  positive results?" — **UNTRACED inside this artifact** (ChatGPT output, not a Kohavi-authored
  citation), though directionally consistent with 2.2's 60-90%-fail figure. Flag as folklore-tier
  pending a primary trace.
- **[practitioner-opinion, secondhand/RT]** 2023-07-30, id `1685514352357679104`,
  https://x.com/lennysan/status/1685514352357679104 — Lenny Rachitsky: **"80% of experiments
  fail."** Kohavi retweeted/it appears in his archive (no independent Kohavi commentary attached in
  what we captured) — **UNTRACED**, no source cited by Lenny in the tweet itself. Record as
  folklore repeated by a high-reach account, amplified into Kohavi's orbit.
- **[measured]** 2023-12-21, id `1737693481014002120`, https://x.com/ronnyk/status/1737693481014002120
  — "Optimizely analyzed **127,000 experiments** (#abtests) and shared interesting observations in
  a 60-page eBook... My thoughts about the good and what could be improved at [linked doc]." Kohavi
  treats this as a real dataset worth critiquing, not dismissing — his own critique doc is linked
  but not fetched (URL shortened, not resolved in this pass).
- **[practitioner-opinion]** 2022-05-18, id `1526743866044391425` — Kohavi quoting Linus Pauling
  via @ItamarGilad: "If you want to have good ideas you must have many ideas. Most of them will be
  wrong, and what you have to learn is which ones to throw away." — framing device for the low
  win-rate, not itself a number.
- **[measured, biomedical analogy]** 2021-09-02, ids `1433227710151626752` / `1433227711313420293`
  / `1433228583770603523` — "Massive improvements (30%+) to key metrics are extremely rare. If you
  increase proper mask-wearing from 13% to 42%... how much does it reduce symptomatic COVID
  infections? No, it's not 30%+... Nice randomized controlled experiment in Bangladesh villages
  shows: **11.9% relative reduction from 8.6% to 7.6%.** Stat-sig (p=0.000)... N=600 villages
  (342,126 adults)." Used explicitly as a **Twyman's-law-style anchor**: even a real, well-powered,
  socially important RCT effect is far smaller than the "30%+" people hope for.

### 2.3 SRM (sample ratio mismatch)

- **[measured]** 2023-02-26, id `1629909745061736449`, https://x.com/ronnyk/status/1629909745061736449
  — "How do p-values vary over time? What happens to p-values when you test for a sample ratio
  mismatch (SRM) and actually have one? Short doc with simulations." (#SRM #pvalues hashtags)
- **[practitioner-opinion]** 2023-02-26, id `1629909746324226049` (same thread) — "Many are
  surprised that the p-values vary so much, when the statistics say we should just look at the last
  point at a pre-determined experiment duration (fixed horizon). This is why it's important to have
  sufficient statistical power." — this is Kohavi's own peeking-adjacent framing (see 2.4).
- **[measured, self-caught]** 2025-11-20, id `1991297489811767736` — see 2.1: the Trustworthy A/B
  Patterns project caught and disclosed its own SRM on the first run of a home-page experiment,
  re-ran, and reported the second (clean) run's result. A live demonstration, not just an assertion.
- **[measured, LinkedIn]** (via @lukasvermeer, see §3.1) — "At LinkedIn, the Sample Ratio Mismatch
  (SRM) rate is **10%**..." — cross-referenced below.

### 2.4 Peeking

- **[practitioner-opinion]** 2023-05-22, id `1660701665518034944`,
  https://x.com/ronnyk/status/1660701665518034944 — "Uncontrolled peeking during an A/B test is a
  serious problem, but there are multiple ways to properly allow peeking in support the most
  important use case: early aborting of negative tests. See summary note." (linked doc not
  resolved).
- **[practitioner-opinion]** 2023-02-26 (id `1629909746324226049`, quoted in full in 2.3) — implicit
  peeking-vs-fixed-horizon framing: "the statistics say we should just look at the last point at a
  pre-determined experiment duration (fixed horizon)."

### 2.5 CUPED

**Notable absence**: zero direct CUPED posts found on Kohavi's own timeline in the 200-tweet
archive (2021–2026). CUPED shows up only via a **reply exchange** — see 2.13 below, and much more
substantively on @lukasvermeer's and @EvMill's and @chesharma87's timelines (§3). This is worth
flagging: Kohavi discusses variance-reduction technique ("capping metrics") extensively (2.7) but
doesn't tweet "CUPED" by name in the captured window — his book (Ch. on variance reduction) likely
covers it but wasn't tweeted about directly.

### 2.6 Power / MDE / sample size (Kohavi's most tweeted topic by far — 20+ hits)

- **[measured]** 2022-07-06, id `1544720390106202112`, https://x.com/ronnyk/status/1544720390106202112
  — "If you think large companies with a massive userbase (Amazon, Google) have an easy time
  detecting tiny changes in #abtests, you're wrong! **The number of users needed grows
  quadratically in the sensitivity**, so such companies cannot detect changes of $10M/year."
- **[measured]** 2022-07-06, id `1544720391683289094` (same thread) — "To detect a 5% change under
  reasonable assumptions, you need **tens of thousands of users**. To detect 0.01% change, you
  might need **billions of users**."
- **[practitioner-opinion]** 2024-10-30, id `1851526773496062157`,
  https://x.com/ronnyk/status/1851526773496062157 — "A/B testing without sufficient users is like
  attempting a marathon without appropriate training... For e-commerce sites focused on improving
  conversions, **a minimum of 200,000 users provides adequate statistical power**... The statistics
  do not support A/B tests with 5,000 users under common goals and assumptions." Also lists
  small-sample alternatives explicitly: swing for the fences (≥20% lift target — "in medicine,
  vaccines need to be 50%+ effective"), upstream metrics (CTR needs fewer users than final
  conversion), accepting a false-positive rate "over 50%." **This is the single most direct
  small-sample-honesty statement in the corpus** — directly maps to controller-canon wedge
  hypothesis #1.
- **[measured]** 2025-11-12, id `1988643836068020301`, guest post summary — "To run trustworthy A/B
  tests, you need large samples: **240,000 users is where the magic happens** and when you can run
  hundreds of concurrent A/B tests." Also in the same post: **"A p-value of 0.05 does NOT imply
  that B is better than A with 95% probability. It's about 78%."**
- **[practitioner-opinion]** 2023-12-01, ids `1730685167310864694` / `1730685393841066377` — an
  intuition-test: design for 5% MDE at alpha=0.05/80% power; observed effect = exactly 5%; what's
  the p-value? Answer: **0.005** (10x smaller than 0.05) — "there's a 1-1 mapping between p-value
  to power for a given alpha" (Figure 3 reference, doc not resolved).
- **[measured]** 2024-10-24, id `1849262894028103838` — "Capping metrics" as an under-used
  variance-reduction technique: "revenue is highly skewed, the extreme values increase the
  variance dramatically, and thus capping increases statistical power" — the CUPED-adjacent
  technique Kohavi actually tweets about.
- **[measured]** 2024-06-08, id `1799320701012418748` — triggering rule of thumb: "**Trigger to
  twice the probability of the event of interest, to reduce your experiment run-time by 50%.**"
- **[practitioner-opinion]** 2025-02-17, id `1891629899573756152`,
  https://x.com/ronnyk/status/1891629899573756152 — argues for 50/50 splits over small-percentage
  rollouts on power-efficiency grounds: "If you need 100K users in the treatment, and it will take
  you five weeks when allocating 10% of users to the treatment, then you're better off running at
  50% and getting the answer five times faster... Agility matters!" **Directly relevant to the
  growth-vs-operate seam** (§8) — Kohavi is explicitly arguing against the operate-style
  risk-mitigation instinct ("run it at 10% because it's risky") when the intent is learning, not
  containment.
- **[practitioner-opinion]** 2024-11-30, id `1862940708984046044` — Should you run A/A/B tests with
  1/3 splits? "No — this approach reduces statistical power. The optimal allocation (maximum power)
  for an A/B test is uniform, that is 50/50%." Credits **Georgi Georgiev** for the specific
  A/A/B-adds-no-value argument. Also: "To build trust in your experimentation system, **run 500 A/A
  tests before you start your first A/B test.**"
- **[measured]** 2023-09-14, id `1702360214329237684` — "Be aware that at least some of the results
  (e.g., priming) in *Thinking Fast and Slow* by Kahneman are now thought of as **highly
  exaggerated due to low statistical power**." (replication-crisis crossover, ConvEx '23 slide.)
- **[measured, NPS-specific]** 2023-02-21, ids `1627841962417201152` / `1627841963600023557` —
  "Is NPS a Useful Target Metric in A/B tests? ... only for infrequent large surveys. For effects
  of at least 5 points NPS delta (NPS is in [-100,100]), you need **over 7,600 survey responses**,
  which for an average 12% response rate means **over 60,000 surveys sent**." Thanks
  @ItamarGilad, @mgershoff, @lukasvermeer, @JeffSauro, @georgizgeorgiev.

### 2.7 Guardrail metrics / OEC (Overall Evaluation Criterion)

- **[measured, case study]** 2023-08-18, id `1692402231965057378`,
  https://x.com/ronnyk/status/1692402231965057378 — "JavaScript errors should be a guardrail metric
  in any #abtest that involves a UI change. We built such metrics at Microsoft/ExP." Case: **Dell's
  major site redesign** — "failed, with **33% loss in revenue per visit**... pages like payment,
  which on the old site had **1.2%** of instantiations generating a JavaScript error, now had
  **45.4%** on one treatment and **49.5%** on another." Quote attributed to @vabdwivedi: "if half of
  your customers are unable to give you money when they're trying to give you money, you are not
  going to be very successful." (Also referenced again at id `1692402353130152399`.)
- **[practitioner-opinion]** 2023-08-18, id `1692685905897648628` — "Major redesigns usually fail.
  Evolutionary/continuous redesigns with #abtests work much better." — links a fallacy summary doc,
  illustrated with a "taller mountains" OEC metaphor.
- **[practitioner-opinion]** 2024-08-11, id `1822734313714299089` — the "square watermelon" OEC
  parable: Japan spent decades optimizing watermelon shape for shipping/fridge-fit; result is
  "bland and ultimately not edible... After several decades of trying, Japan produces about **200 of
  these per year** and they are sold as novelty items for **$200 each**." Framing: "improving the
  shape but making the taste bland, limits you to an ornamental product" — a guardrail-metric
  parable.
- **[practitioner-opinion]** 2024-08-13, id `1823430142565503342` — companion piece citing
  Goodhart's Law explicitly, "watermelon metrics: green on the outside, but rotten red on the
  inside."
- **[practitioner-opinion]** 2023-01-13, id `1613973325730152448` — "If you A/B test everything,
  will your site turn into a gaming or porn site? Possibly, which is why it's important to choose a
  good OEC."
- **[practitioner-opinion]** 2023-04-10, id `1645298670395625472` — "What is the Overall Evaluation
  Criterion for the $400M Golden Gate bridge suicide nets project?" — OEC applied outside tech.
- **[practitioner-opinion]** 2021-05-04, id `1389715108855652354` — Amazon Alexa fishbowl talk
  slides on "trends, culture, institutional memory, experts, OEC, platform, and mobile."

### 2.8 Twyman's law

- **[practitioner-opinion, canonical statement]** 2021-11-04, id `1456324378778550279`,
  https://x.com/ronnyk/status/1456324378778550279 — **"Twyman's law: any figure that looks
  interesting or different is usually wrong."** Applied at @CODEConference to a "family concern got
  47K users, but was worse than average" case; cc's @jakewbowers @deaneckles.
  matches controller-canon's pre-training belief verbatim — **confirmed, not contradicted**.
- **[practitioner-opinion, satirical]** 2024-05-30, id `1795993493778898947`,
  https://x.com/ronnyk/status/1795993493778898947 — a deliberately absurd parody: "Yesterday I had
  100% increase in conversion rate! I flipped a coin 10 times and got 3 heads, then I prayed to my
  god called Twyman... Send me $10... I hope you're not convinced. Surprisingly, this is the
  template for many of the posts on A/B testing these days with today's example... claiming **24%
  improvement based on 37 sessions.**" Includes a real minimum-sample-size table for detecting a 5%
  relative lift at 80%/0.05. Explicit call-out: "the next time you see an AMAZING result on 30, 300,
  or 3000 users, when the conversion rate is 5%, ignore it. It's likely noise."
- 2023-05-29, id `1663217172687261696` — "My list of the best five books for data-driven
  enthusiasts, and believers in Twyman's Law" (book list doc, not resolved).
- 2017-08-22 (surfaced via @lukasvermeer RT, id `900426850526257156`) — HBR Sept 2017 "The
  Surprising Power of Online Experiments" by Kohavi and Thomke, tagged #twymanLaw.

### 2.9 A/A tests

- **[practitioner-opinion]** 2024-11-30, id `1862940708984046044` (quoted fully in 2.6) — A/A/B
  with 1/3 splits adds no validity value over a standard A/B (post-hoc split of the A group proves
  the point); credits **Georgi Georgiev**. "Run 500 A/A tests before you start your first A/B test.
  Check whether for each of your metrics, the p-value distribution is approximately uniform."
- **[practitioner-opinion]** 2023-10-17, id `1714383352088916341` — Apophenia framing: "In #abtests
  we recommend running A/A tests to validate the experimentation platform. Are you doing the same
  for your visualizations?" — ties A/A discipline to a broader noise-pattern-recognition warning
  (cohort-analysis matrices specifically).

### 2.10 Multiple comparisons / false discovery / winner's curse

- **[measured]** 2024-10-26, id `1849967603202261260`, https://x.com/ronnyk/status/1849967603202261260
  — "The Optimizer's Curse, or the Winner's Curse. When we run A/B tests and choose statistically
  significant results, our estimates are biased by **13%** even if perfectly run with no other
  biases and 80% power... the bias grows to **21%** with two treatments and **25%** with three
  treatments. Perhaps surprisingly... if we control the type-I error for multiple treatments by
  adjusting alpha (Bonferroni to 0.05/3), the bias grows to **30%**. Remember to apply a haircut to
  all your #ABtest results." (spreadsheet simulation linked, not resolved)
- **[measured]** 2023-12-04, id `1731809769868951728` — "Whenever you apply a thresholding
  criterion, such as p-value < 0.05, for determining statistical significance, the estimate of the
  treatment effect **will be exaggerated**." (haircut principle, general statement)
- **[measured]** 2023-12-27, id `1739833299617644803` — citing "A New Look at P Values for
  Randomized Clinical Trials" (Gelman, Greenland, Imbens, Schwab, Goodman, van Zwet; published
  2023-12-22): "most RCTs in the Cochrane Database of Systematic Reviews are underpowered and
  overestimate treatment effects... **75% probability the magnitude is overestimated by at least
  5%, 50% probability by at least 56%, 25% probability by at least 181%.**" Kohavi's own gloss:
  "The 5% overestimate is not surprising. **Even well-run A/B tests with 80% power overestimate by
  13%**, which is why we apply haircuts to results in industry (or should apply)." Also flags a gap
  in the paper: no reference to **Ulrich Schimmack's Z-curve** work despite conceptual overlap.
- **[practitioner-opinion]** 2023-11-20, id `1726430897120162150` — "If you want to decrease your
  risk of false positive findings... you may want to reduce alpha." Cites a paper by
  **@BartosFra and @MaxMa1er, "Power or Alpha? The Better Way of Decreasing the False Discovery
  Rate."** Links this to work with **@alexdeng and @lukasvermeer** and his own recommendation:
  "use alpha of 0.05 (really 0.025 for the improvement tail) or lower."
- **[measured]** 2024-06-03 / 2024-08-28, ids `1797531452864962602` / `1828904878820749716` — "The
  paper, **False Positives in A/B Tests**, was accepted to KDD 2024" (with Nanyu Chen). Meta-review
  quote: "the novel sequential testing procedure is both theoretically rigorous and practically
  relevant." Slides shared at the KDD talk.
- **[practitioner-opinion]** 2023-11-25, id `1728353923357151238` — "What's the cost of false
  positive #abtests? It's not the immediate impact, but the long-term effect on the roadmap, guiding
  the ship in the wrong direction."

### 2.11 Interference / SUTVA / concurrent experiments

- **[practitioner-opinion]** 2025-09-01, id `1962606195677765801`,
  https://x.com/ronnyk/status/1962606195677765801 — "Running concurrent A/B tests is essential to
  scale... Concerns are overstated: concurrent testing is essential to scale; strong interactions
  are rare in practice; most concerns are overblown." Includes a growth chart of experimentation
  scale at **Bing, Google, LinkedIn, and Office** relative to each org's first year at
  one-new-experiment-per-day cadence.
- **[practitioner-opinion, secondhand]** 2025-10-11, id `1977471624426430830` — a third-party primer
  (@i_amanchadha, crediting Kohavi and @elgeish for "fundamentals") that explicitly names **SUTVA
  (Stable Unit Treatment Value Assumption)** with a full breakdown of components, violation examples,
  and mitigation strategies — Kohavi retweeted/is in his archive, not authored by him, but confirms
  SUTVA is part of the vocabulary circulating in his orbit.
- **[practitioner-opinion]** 2023-06-26, @lukasvermeer id `1673306436351262720` — "Stop. Look.
  Listen. The third post in the series about detecting interaction effects in online
  experimentation is finally out!" (series not fetched, flagged as a lead).

### 2.12 Culture, resistance, and the HiPPO

- **[practitioner-opinion]** 2023-06-03, id `1664864325100793862` — At Bing/Microsoft, "we scaled
  ExP (the experimentation platform)... and were trying to get Microsoft Office to A/B test
  features" — links to a 2018 anecdote about the internal culture fight (email exchange, not
  resolved). Shared at a Statsig Bellevue meetup.
- **[practitioner-opinion]** 2023-08-27, id `1695592147301666909`, https://x.com/ronnyk/status/1695592147301666909
  — "Can I A/B Test That? Yes, with a few exceptions... an idea that was almost not implemented, but
  luckily **Jeff Bezos supported a culture that allowed for any experiment to run**. It was one of
  the best ideas at Amazon, yielding a **3% increase in revenue**." (Amazon anecdote, ~19 years
  prior at time of posting.)
- **[practitioner-opinion]** 2023-07-28, id `1684771294435524608` (via @lennysan RT) — "An easy rule
  of thumb for when your startup could start running A/B tests" — directly relevant to the
  small-sample-honesty wedge (doc not resolved).
- **[practitioner-opinion]** 2023-07-28, id `1685001825802768384` (via @lennysan RT) — "How to
  overcome resistance to A/B testing at your company."
- **[practitioner-opinion]** 2023-12-24, id `1738722120237224147` — "A HiPPO is the Highest Paid
  Person's Opinion... Empower your HiPPO with data from #abtests." (Group-of-hippos joke: "Bloat.")
- **[practitioner-opinion]** 2024-10-01, id `1841225508023124018` — Kohavi's Maven course selected
  as **"Top course in Growth" by @lennysan** on Lenny's list; also references a prior Lenny podcast
  appearance "viewed over 40,000 times on YouTube." **Direct Kohavi↔Lenny-Rachitsky-orbit link.**

### 2.13 Reply-exchange debunk material (the highest-signal falsification quotes)

Captured via `xrelay user-posts ronnyk --replies --limit 60`; 15 of 60 were genuine reply-thread
exchanges not already in the main post archive.

- **CUPED across business lines** — 2024-09-19, questioner @xiping_mr id `1838894720803651612`:
  "i have a question about cuped. In our company there have multiple business line such as movie
  music novel, when we use cuped with pre data, the whole order cuped result (growth scale) was
  different with the sum of above three lines order. How to deal such problem." Kohavi's reply,
  same day, id `1839490157445337519`: **"If you are running an experiment across the multiple
  business lines, then the pre-experiment purchases are typically a good prediction of future
  purchases and can help reduce variance. The scale needs to be adjusted by the experiment
  duration."** — the only substantive CUPED-mechanics content directly from Kohavi in this corpus.
- **Rounded-button debunk** (see 2.1) — repeated verbatim "Flawed experiments" reply to two separate
  questioners.
- **Guinness/Student's t-test origin story**, replying to @laurahelmuth/@sciam, 2024-05-04, id
  `1797525449603735723`: "The story that Guinness prohibited employees from publishing papers, and
  thus William Gosset published it under the name Student, is well known. Imagine if they did allow
  it, but asked him to name it the Guinness t-test. We would be giving them free publicity for over
  a century" — later expanded into a standalone post (id `1916360820755497021`, 2025-04-27).
- **Course value proposition**, replying to @AnalyticsNinja's "$1200 course vs. reading the book"
  challenge, 2025-06-27, id `1937273646919352637`: "Fair question. 1. For the first course, half
  the material is in the book. For the second [course], it's all new. 2. Many people find the
  ability to hear the material with stories and examples easier to digest. 3. You get to ask
  questions. I stay after class until all questions have been answered." — a rare moment of Kohavi
  directly defending his commercial offering against a legitimate skeptic; useful context for how
  seriously he treats critique even of himself.

### 2.14 Metric-definition traps

- **[practitioner-opinion]** 2021-01-16, id `1350266325516443649` — "Bots account for a significant
  percentage of visitors on many sites. When defining metrics, it's usually better to exclude
  'likely bots,' and remove the noise, even if you incorrectly remove some low-intent visitors that
  have a pulse." (#experimentguide #abtest #bots)
- **[practitioner-opinion]** 2021-03-28, id `1375968430797512710` — citing @mike_luca's "Blind Spots
  that Derail Experiments": "In medicine, Randomized Clinical Trials (#RCTs) were run for decades,
  but their use rarely extended outside drug eval." — an argument for broader experiment scope, not
  narrower.
- **[practitioner-opinion]** 2023-04-27 (id in dedupe pass `1519391404446732288`) — a public-health
  tangent on false-positive-rate terminology confusion (Antigen test agreement of 84.6%) —
  illustrative of Kohavi's general vigilance about statistical-term misuse, not A/B-specific.

### 2.15 Papers, replication scale, and publication record

- **[measured]** "Statistical Challenges in Online Controlled Experiments: A Review of A/B Testing
  Methodology" (with co-authors) — id `1770908847395504527`, 2024-03-21: "the most read (measured
  as most viewed) article in *The American Statistician* published last year." Updated at id
  `1993467800195940655`, 2025-11-25: **"now the 13th most read paper of all time in The American
  Statistician... over 25,000 [views]."**
- **[measured]** "A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled
  Experiments" (Kohavi, @alexdeng, @lukasvermeer) — announced for KDD 2022 at id
  `1535494789461733376`, 2022-06-11 (110 likes — one of his highest-engagement posts).
  Slides for the KDD talk at id `1560357444081143809`.
- **[measured]** "Online Controlled Experiments and A/B Tests" (with @Roger_PPM) — updated version
  released 2023-04-23 (id `1649946965197885440`) as part of the *Encyclopedia of Machine Learning
  and Data Science 2023*; the 2016 version was "one of the most cited papers in A/B Testing by
  Google Scholar... one of the most read according to ResearchGate."
- **[measured]** Book sales: id `1719679350298034399`, 2023-11-01 — "**25,000 copies** of our
  HiPPO book, Trustworthy Online Controlled Experiments... exceeding all initial projections...
  translated to Chinese, Japanese, Korean, and Russian." Amazon #1 Best Seller in Data Mining
  (id `1410018546747285508`, 2021-06-29).
- **[practitioner-opinion]** "The Imperfections of A/B Testing" doc — id `1779300068367192324`,
  2024-04-14: "The document addresses **18 issues that were claimed to be serious issues with A/B
  testing. Some are valid, most are not.**" — directly a falsification-strip document (source doc
  not resolved in this pass, worth a follow-up fetch).
- **[practitioner-opinion]** "P-values have been misinterpreted for years" — id `1763019631856701817`,
  2024-02-29, summary doc with "five of the best modern references."
- **[practitioner-opinion]** Study on whether A/B testing causally drives startup performance vs.
  confounding with team quality — ids `1591216779841646592` / `1591217198202519552`, 2022-11-11,
  citing **"Experimentation and Startup Performance: Evidence from A/B Testing"** by @orgRem and
  @AaronChatterji.

---

## 3. Other validity authorities — same treatment

### 3.1 @lukasvermeer (Lukas Vermeer, ex-Booking.com)

**SRM — LinkedIn's own disclosed rate, cross-referencing Kohavi**
- **[measured]** 2019-09-03, id `1168808323317207040`, https://x.com/ronnyk/status/1168808323317207040
  (Kohavi's tweet, but the content is Vermeer's thread partner) — "At LinkedIn, the **Sample Ratio
  Mismatch (SRM) rate is 10%** according to [paper]. '...incomparable samples. In our A/B testing
  platform, about 10% of experiments suffer from this type of internal validity.' Clearly a
  pervasive issue." This directly **confirms controller-canon's pre-training belief of ~6-10% SRM
  rate** — traced to a named LinkedIn paper (title not captured verbatim, but described as an
  internal-validity study).
- **[practitioner-opinion]** 2019-08-29, id `1166961976439951361` — Vermeer's own reply: "I agree
  with @ronnyk that checking for SRM is a must. Consequences of not doing so can be disastrous. It
  is also trivial to implement this check: only sample size counts and straightforward statistics
  are required. **There is really no excuse for not checking for SRM.**"
- **[practitioner-opinion]** 2019-08-29, id `1166963733727535104` — "In fact, just knowing that an
  experimentation platform does not warn its users about SRM when it occurs would make me **lose
  almost all trust in the platform.** Either it's creators don't know about SRM, or they chose not
  to inform users. Not sure which is worse."
- **[practitioner-opinion, vendor-stats-criticism]** 2019-08-29, id `1166966799730192385` — "I have
  heard some platform owners argue that their platform is somehow **immune to SRM (e.g. 'because
  it's Bayesian')**, but the examples in our paper explain why every experiment (platform) could be
  affected. I routinely discover SRM in scientific papers based on online studies." **This is
  exactly the "criticism of vendor statistics claims" the brief asked for** — a named practitioner
  on record debunking a specific vendor-marketing claim (Bayesian ≠ immune to SRM).
- **[measured]** 2019-08-06, id `1158819086157197319` — "Diagnosing Sample Ratio Mismatch in Online
  Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners" — #KDD2019 paper.
- **[practitioner-opinion, folklore-origin]** 2016-11-02, id `793717341469171712` — "Unattended
  Selective Attrition... leads to Sample Ratio Mismatch (@ronnyk) causing Phantom Swings in
  political polls." Political-polling analogy for SRM, pre-dating the LinkedIn thread by 3 years.

**CUPED**
- **[measured, secondhand/RT]** 2018-01-22, id `955490787332157440` (RT'd by Vermeer, originally
  @drsimonj / R-bloggers) — "How [platform] increases the power of online experiments with CUPED"
  — this is a general CUPED explainer, not Booking-specific; Vermeer amplified it, did not author it.

**Pricing-experiment ethics/scope (relevant to growth's "pricing-packaging experiments" scope)**
- **[measured/practitioner-opinion]** 2022-06-16, id `1537385524066934785`,
  https://x.com/lukasvermeer/status/1537385524066934785 — quoting a company post (unattributed
  in-tweet, presumably Booking.com given his role): **"We will deliberately NOT build the capability
  to run pricing A/B tests at all. In this post, we explain some challenges relating to list prices
  and more traditional modes of experimentation and we look into which testing capabilities we are
  building."** — a named practitioner org explicitly declining to A/B-test pricing, worth surfacing
  as a counter-signal to the assumption that "everything should be A/B tested."

**Culture and scale at Booking.com**
- **[measured]** 2020-09-24, id `1309233742318362624` — "Booking.com just won the organisation-wide
  lifetime achievement award at #expca2020" (Experimentation Culture Awards, which Vermeer himself
  founded/hosted — see ids `1301194411725017089`, `1283453067829161985`, 2020).
- **[measured]** 2021-01-26, id `1354140760992583680` — praise for "the amazing people who have over
  the years made the Booking.com Experimentation Tool (ET)" — scale details not captured in the
  truncated text; worth a follow-up fetch of the linked thread if this becomes load-bearing.
- **[practitioner-opinion, quote-amplification]** 2020-03-09, id `1236919906358214656` — "Large-scale
  testing is not a technical thing; it's a cultural thing that you need to fully embrace... How
  willing are you to be confronted every day by how wrong you are? And how much autonomy are you
  willing to give to the people who work for you?" (quoting an unnamed linked source, Vermeer
  amplifying).
- **[practitioner-opinion]** 2017-12-21, id `944117353129930753` (secondhand, via @robinson_es,
  replying to @f2harrell/@hadleywickham, appears in Vermeer's archive) — praise for "a paper on
  **democratizing A/B testing**... They put in safeguards, educate on best practices (and put
  nudges), and hold people accountable, but ultimately decision-making is still in the hands of
  others." Relevant to the culture-of-experimentation literature, not authored by Vermeer.
- **[practitioner-opinion]** 2023-01-11, id `1613163350254358528` — "'Won't running all those
  experiments slow down our product development?' ...my answer is always the same: yes and no."
  (thread not fully resolved).
- **[practitioner-opinion]** 2023-02-15, id `1625781696506343424` — "There is no such thing as the
  perfect experiment. There is only a continuum between very well executed experiments, and
  completely winging it off the seat of your pants." — directly useful framing for a small-sample
  honesty section (spectrum, not binary).
- **[practitioner-opinion]** 2021-05-12, id `1392439586320797698` (secondhand quote, Vermeer
  amplifying) — **"Running bad experiments is just a very expensive and convoluted way to make
  unreliable decisions."**

**Vendor/error-rate skepticism**
- **[practitioner-opinion]** 2023-04-01, id `1642191713614680066` — "Very significant if true. Could
  be a false positive. Error rates seem especially high today." (context of the specific claim not
  captured — an April Fools' Day post, treat cautiously).
- **[practitioner-opinion, high-reach secondhand]** 2017-10-12, id `919873173268652032` (via
  @drob/David Robinson, in Vermeer's archive, 725 likes) — "I love Xiao Li-Meng's radical proposal —
  each time your result turns out to be wrong, your salary gets cut by your p-value #SSI2017." A
  provocative incentive-alignment idea for statistical honesty, not Vermeer's own words but
  something he chose to amplify.

### 3.2 @chesharma87 (Chetan Sharma, Eppo founder, now Product @Datadog)

- **[practitioner-opinion, direct debate]** 2022-06-27, id `1541466393513566208` +
  `1541466395648462848` + `1541466396529291265` — responding to a dbt roundup piece **"Down with
  experimentation maximalism"** (@jthandy): "I broadly agree with @jthandy's dbt roundup on
  experimentation: the type of Airbnb-style growth exps are for post-PMF companies. But I disagree
  on exp being overrepresented in the actions of pre-PMF teams or data culture... the pre-PMF
  problem is a benign one of 'FAANG → startup transplant needs to be talked off the ledge of trying
  exp tactics'. And there are tons of post-PMF data teams that don't realize the gold under their
  feet with running exps." — **this is a named, dated, direct engagement with the small-sample /
  pre-PMF-experimentation-maximalism critique** — exactly the kind of adjudication material the
  wedge hypothesis needs, on the *opposite* side from pure small-sample-honesty (Sharma pushes back
  on "experimentation maximalism" being a real pre-PMF problem, while still endorsing the general
  caution). Worth reading the full dbt roundup piece in a follow-up (URL:
  `roundup.getdbt.com/p/down-with-experimentation-maximalism`).
- **[practitioner-opinion]** same thread, id `1541466396529291265` — "At Eppo, the first step with
  customers is a confirmation that experiments make sense. We've invested heavily in **automated
  power analysis** and making statistical power **front and center in the UI**. If exps don't make
  sense, you'll see that this is the case in Eppo." — a vendor explicitly building power-honesty
  into the product rather than hiding underpowered results, worth citing as a positive incumbent
  example (not just tactic-list vendors).
- **[measured, secondhand attribution]** 2022-11-06, id `1589377060673589248` — quoting @jasonlk
  (Jason Lemkin/SaaStr): **"Everything is aggressively A/B tested, including new product
  development... it's interesting how big a deal this is for Duolingo. It's a reminder we all need
  to do more of it. They run 500 A/B tests a quarter."** Sharma's own gloss: "This is going to be a
  theme for all consumer tech stocks that hold up through the market downturn. You can't afford to
  have product teams not knowing if they're improving metrics." **Duolingo 500 A/B-tests/quarter is
  UNTRACED to a primary Duolingo source in this pass** — it's a secondhand SaaStr claim, amplified
  by Sharma, not independently verified.
- **[measured, real case study]** Talabat/Eppo/Delivery Hero — this appears on Kohavi's own timeline
  (id `1991297106607501413`, 2025-11-20, quoted in full below since it names Eppo and demonstrates
  the "haircut" discipline in practice): "Talabat, a subsidiary of Delivery Hero, ran an experiment
  with **Eppo by Datadog** to measure the revenue impact of a speedup of the home page achieved via
  smart caching. The speedup in Time-To-Interactive (TTI) was from ~2.1 seconds to ~1.0 seconds.
  Revenue per user improved by **0.36%**. Applying a haircut because of sequential inference, we
  believe an unbiased estimate is **~0.3%**." — a real, named, dated case study with a disclosed
  haircut methodology; good template for "how to report an A/B result honestly."
- **[practitioner-opinion]** 2022-11-03, ids `1588228862684512256` / `1588228863900819457` — "Data
  teams running AB experiments have dramatically more influence on company strategy... Before
  running experiments, data work is 'build dashboards people tell me to, make analysis notebooks and
  try to get attention.' After running experiments, product comes to YOU."
- **[practitioner-opinion, on evals as A/B tests]** 2023-12-07, id `1732595056622608714` — "AI model
  evaluation is the toughest problem in gen AI, and it has a solution lying in plain sight. **A/B
  test your models! Much more trustworthy than benchmarks or qualitative vibes**" — a direct claim
  that A/B testing beats offline eval benchmarks for LLM quality; worth cross-referencing against
  ai-skill's evaluation-flagship corpus if the controller wants to draw a growth↔ai seam.
- **[measured, CUPED origin cross-reference]** 2022-07-19, id `1549187005841416192` — Sharma
  amplifying @EvMill's CUPED blog post: "CUPED post by @EvMill showing how eppo is bringing
  econometrics to the tech mainstream." (See §3.3 for the underlying Evan Miller post.)

### 3.3 @EvMill (Evan Miller)

Author of the well-known "How Not to Run an A/B Test" essay (2010, not in this X archive — pre-dates
his tweet history here, but referenced by reputation across the corpus as the founding always-valid-
p-values essay). Later built Optimizely-adjacent tooling; now at Anthropic.

- **[measured, primary]** 2022-07-18, id `1549075514916327424`, https://x.com/EvMill/status/1549075514916327424
  — "Been a while folks, but I've finally put up a blog post. **CUPED is a technique for tricking
  data into letting you finish A/B tests early.** I explain the underlying math – and propose an
  improvement." (blog: "You Can't Spell CUPED Without Frisch-Waugh-Lovell" — title recovered from
  the quoted-tweet text in Sharma's amplification, §3.2.)
- **[measured, secondhand/RT]** 2018-03-15, id `974279134649225216` (originally @StatModeling /
  Andrew Gelman's account, amplified by Miller) — **"You need 16 times the sample size to estimate
  an interaction than to estimate a main effect."** Directly relevant to guardrail/interaction-
  effect discussions (2.11) and to the small-sample-honesty wedge: interaction effects (heterogeneous
  treatment effects, segment-level analysis) are dramatically more expensive to detect than the
  headline effect.
- **[measured]** 2024-08-05, id `1820494252738236896` — "I think I've finally cracked quantiles...
  A/B testing medians, instead of means, usually requires an expensive bootstrap. But we can use a
  **likelihood-ratio test (Wilks' theorem)** instead. This reduces the quantile problem to a few
  simple formulas." — a genuinely novel-sounding statistical contribution worth a primary-source
  follow-up fetch if the skill wants median-metric guidance.
- **[measured]** 2024-08-26, id `1828099341636030676` — "New sequential A/B test from **@Zalando**
  based on the **Lévy inequality**" — another named-company sequential-testing method, not yet
  cross-referenced against Zalando's own engineering blog (flag for grw-web).
- **[measured]** 2018-12-17 / 2019-01-17, ids `1074730387337871361` / `1085947094500892672` — built
  and shipped **"A/B Buddy," a free sample-size calculator app** ("your last excuse for running
  underpowered A/B tests shall soon sink into oblivion") — a small-sample-honesty tool, free,
  worth citing as a concrete resource.
- **[practitioner-opinion, career note only]** 2024-11-14, id `1859246989788979372` (secondhand, via
  @MariusHobbhahn, amplified by Miller after joining Anthropic) — a statistics-of-LLM-evals paper
  praised as doing "power analysis" correctly for evals — a growth↔ai crossover data point, not
  core validity-layer content, flagged for awareness only.

### 3.4 @jlinowski (Jakub Linowski, GoodUI founder)

Co-founder (with Kohavi and Vermeer) of the Trustworthy A/B Patterns project (§2.1). Runs
GoodUI.org, an evidence-graded CRO pattern library — directly the "CRO folklore falsification"
wedge territory (controller-canon §5.2).

- **[measured]** 2022-12-09, id `1601285591773200384`, https://x.com/jlinowski/status/1601285591773200384
  — "How accurate are people at predicting a/b tests? We compared **3 studies** on this and noticed
  that **humans are better than chance**." (link: goodui.org/blog/beyond-opinions-about-opinions-
  real-a-b-test-prediction-rates-from-70-000-guesses/ — **70,000 guesses**, a real dataset). An
  "optimistic" but modest finding — humans aren't *good* at predicting A/B outcomes, just
  better-than-random.
- **[practitioner-opinion]** 2021-04-07, id `1379848397352546311` — **"A 50/50 win rate for
  experiment outcomes means we're as good as random chance."** — directly relevant to
  cross-referencing against Kohavi's 60-90%-fail figure and the folklore "80% fail"/"10-20% succeed"
  claims: if experiments were genuinely random, you'd see a 50/50 win rate against the *null*, not
  the observed skew toward mostly-failing.
- **[practitioner-opinion, evidence-grading philosophy]** 2022-08-12, id `1558102431199891457` —
  "Science and experimentation isn't ONLY about discovering unknowns or generating confidence from
  single tests. It is ALSO about generalizing, comparing, predicting and knowing. Without this 2nd
  part we'd be doomed amnesiacs who repeat past successes and failures over and over again." —
  GoodUI's core thesis: single A/B tests aren't enough, you need a *corpus* of graded evidence
  (which is exactly what the Trustworthy A/B Patterns project builds).
- **[practitioner-opinion]** 2022-05-30, id `1531325408511250433` — "1. Best practices are
  evidence-based. 2. Best practices get updated with new evidence." — GoodUI's stated methodology
  in two lines.
- **[measured, "leaked A/B test" case studies]** — Linowski runs a recurring format of analyzing
  publicly-leaked or publicly-visible A/B test screenshots from major companies:
  - 2020-08-11, id `1293184317984653312` — Airbnb raised its primary "Reserve" button higher; "this
    subtle evidence reinforces our 'Above The Fold CTA' pattern."
  - 2020-08-20, id `1296461549352214529` — Amazon A/B-tested showing more structured technical data
    (storage size, brand, model numbers) on product pages — "learned... might be a good thing."
  - 2020-09-24, id `1309114422716239875` — Bol.nl (Dutch retailer) replicated Airbnb's customer-
    rating format — cross-company pattern replication, framed positively ("a good thing when a
    similar UI change has a similar outcome on two different sites").
  - 2022-05-05, id `1522309520596385792` — **Netflix rejected a "Learn More" button variant** that
    added an extra button to the signup flow — a *negative* result, explicitly framed as "didn't
    work out," i.e. GoodUI documents failures as well as wins.
  - 2023-04-13, id `1646519426563571714` — Amazon tested a wider "buy box" on product pages; "it
    looks like both variations might have been rejected" — another negative/inconclusive result.
  - 2021-08-20, id `1428792489830400004` — an agency (Drip Agency) "attempted to replicate a similar
    pattern (zig-zag layout) between two of their clients" — an example of independent third-party
    replication attempts feeding into the GoodUI evidence base.

### 3.5 @rameshjohari (Ramesh Johari, Stanford)

Low-volume account (92 tweets total, most non-experimentation); still contains one directly
load-bearing primary-source confirmation.

- **[measured, primary]** 2015-01-21, id `557783064240472064`, https://x.com/rameshjohari/status/557783064240472064
  — **"Our work on sequential and multiple testing for A/B experiments with Optimizely launched
  today."** (tags @optimizely). This is a first-party confirmation, from one of the actual authors,
  that Optimizely's sequential-testing/"New Stats Engine" work (the peeking-fix landmark referenced
  in controller-canon §1) shipped on **2015-01-21**, with Johari as a named academic collaborator —
  cross-referenced independently by @EvMill the day before (id `557783417019170817`, 2015-01-20):
  "If you care about doing A/B testing correctly, check out Optimizely's latest offering."
- Rest of the archive (2012–2023) is general academic/marketplace-economics/COVID-era content, not
  experimentation-validity specific — not worth further mining for this territory.

### 3.6 @uri_sohn (Uri Simonsohn, Data Colada)

Academic replication-crisis watchdog, not online-A/B-specific, but core falsification-material
territory (named-authority debunking, dated, with receipts).

- **[measured, high-profile scandal]** 2023-10-23, id `1716658153918521595` (originally @ZoeZiani,
  amplified by Simonsohn, 835 likes) — "I wrote a post-mortem on the **Gino-Ariely scandal**: How I
  came to suspect Gino's work, the resistance I met during my Ph.D., my experience working with
  Data Colada, and the lessons I hope business academia will learn from it." — the Francesca
  Gino/Dan Ariely data-fabrication case, the highest-profile behavioral-science fraud scandal of the
  early 2020s, which Data Colada's investigations directly triggered.
- **[measured]** 2023-09-19, id `1704243129618960768` — "The lawsuit against Data Colada includes
  interesting evidence. This table summarizes it." (Gino sued Data Colada's authors for defamation
  after their fraud allegations — a real legal consequence of public statistical whistleblowing,
  worth noting as a risk/stakes data point for anyone building a "debunk vendor claims" section.)
- **[measured]** 2023-11-14, id `1724426970375602489` — "Colada[115] shows the **prevalence of
  pre-registrations in papers published in 2022**, with lessons on how to improve in 2023+."
  (specific percentage not captured in the tweet text — follow-up fetch needed if this number is
  load-bearing.)
- **[practitioner-opinion]** 2024-09-02, id `1830578649344757963` — "Hidden Confound in
  Pre-Registrations Critique" — a critique of pre-registration itself as an imperfect safeguard.
- **[practitioner-opinion]** 2023-10-16, id `1714197310194757793` (secondhand, via @andre_quentin,
  amplified) — "People sometimes say [replication] data aren't meaningful because replication
  studies focus on papers that are unlikely to replicate. Might be true, but then the elephant in
  the room is 'if replicators can spot which papers won't replicate, why can't editors and
  reviewers?'" — a sharp methodological point about selection bias in replication-crisis discourse
  itself, worth using if the skill discusses meta-level validity of its own claims.

### 3.7 @vijayeraji (Vijaye Raji, Statsig co-founder/CEO)

- **[measured, primary, HIGH VALUE]** 2025-09-02, id `1962944816104509485`,
  https://x.com/vijayeraji/status/1962944816104509485 — **direct, first-party confirmation of the
  Statsig–OpenAI transaction**: ".@Statsig is joining @OpenAI. Over the past 4.5 years, we've built
  something special at Statsig... We're going to join forces with OpenAI to vastly expand our
  mission, while maintaining continuity for our current customers. I'm super excited to join OpenAI
  as **CTO of Applications**, reporting to @fidjissimo... Once the acquisition is finalized, Statsig
  employees will become OpenAI employees. **The company will continue operating independently and
  serving our customers.**" — this **fully verifies and upgrades** controller-canon's
  "acquired by OpenAI (announced ~Sept 2025 — verify status)" note: confirmed 2025-09-02, Raji's
  new title, and the explicit "continues operating independently" commitment (i.e., not shut down/
  absorbed as of announcement).
- **[measured, vendor claim — UNTRACED beyond blog link]** 2024-05-15, id `1790833478323552567` —
  "B2B businesses often worry about false positives when running A/B experiments due to smaller
  sample size. Stratified sampling helps address that by avoiding pre-existing biases... We've seen
  as much as **50% reduction in variance** in tests" — linked to a Statsig blog post (URL shortened,
  not resolved). **Flag as UNTRACED-beyond-first-party**: this is Statsig's own claim about its own
  product's own technique, no independent replication cited. Compare/contrast against CUPED's
  typical 30-50% variance-reduction figures (controller-canon §1) — plausible magnitude, same
  ballpark, but a *different* technique (stratification, not covariate-adjustment) and a vendor
  self-report, not a peer-reviewed or third-party number.
- **[measured]** 2024-07-15 to 2024-07-23, ids `1812913466359095498` / `1815920412628590908` —
  Statsig's "Experimentation Week" product launches: **"5 advanced experimentation & statistical
  methodologies: 1. Experimental Meta-analysis, 2. Stratified Sampling, 3. Differential Impact
  Detection, 4. Interaction Detection, 5. A suite of collaboration features."** Useful as a snapshot
  of what a modern commercial experimentation platform considers its statistical-sophistication
  feature set — cross-reference against GrowthBook/Eppo's own methodology docs (github channel) for
  a build-vs-buy comparison table.

---

## 4. Topical findings index (cross-referenced to §2/§3)

- **SRM**: Kohavi §2.3 (simulation doc, self-caught SRM in the Trustworthy A/B Patterns project
  §2.1); Vermeer §3.1 (LinkedIn's 10% rate — **traced to a named paper**, "no excuse for not
  checking," debunks "Bayesian platforms are immune to SRM").
- **Peeking**: Kohavi §2.4 (controlled peeking / early-abort framing); Johari §3.5 (Optimizely's
  sequential-testing launch, 2015-01-21, primary-source-confirmed) — note **no explicit "always-
  valid p-values"/mSPRT terminology surfaced directly in this pass**; flagged as a gap for a
  follow-up authority-routed search on `from:rameshjohari OR from:ronnyk always-valid` or a search
  for the original Johari/Pekelis/Walsh paper title directly (not attempted here — endpoint was
  degraded during this session, see §7).
- **CUPED**: near-absent on Kohavi's own timeline (§2.5) — the technique appears richly on
  Vermeer §3.1, Miller §3.3 (primary blog post + Frisch-Waugh-Lovell framing), Sharma §3.2
  (amplifying Miller), and in one Kohavi reply-exchange §2.13 (cross-business-line CUPED mechanics).
  **The CUPED discourse on X lives mostly OUTSIDE Kohavi's own feed** — a genuinely useful negative
  finding for the controller.
- **Power / MDE / sample size**: Kohavi's single most-tweeted topic (§2.6, 20+ hits) — quadratic
  scaling, 200K/240K-user thresholds, capping-metrics as a power technique, triggering rule of
  thumb, A/A/B split inefficiency. Reinforced by Miller's "16x sample size for interactions" §3.3
  and Sharma's "power analysis front and center in the UI" product philosophy §3.2.
- **Guardrail metrics & OEC**: Kohavi §2.7 — Dell redesign JS-error case study (real numbers),
  square-watermelon and Goodhart's-Law parables, Golden Gate bridge OEC thought experiment.
- **Twyman's law**: Kohavi §2.8 — canonical statement confirmed verbatim against controller-canon,
  plus a satirical "flip a coin, pray to Twyman" parody making the same point about small-sample
  noise.
- **Win-rate / "most experiments fail"**: Kohavi §2.2 — 60-90% fail **traced to Ch.1 of the book**;
  "10-20% succeed" and "80% fail" (Lenny) both **UNTRACED**; Optimizely's 127,000-experiment eBook
  noted but not independently summarized; Linowski's "50/50 win rate = random chance" §3.4 gives a
  useful baseline-comparison framing.
- **A/A tests**: Kohavi §2.9 — 500-A/A-tests-before-first-A/B-test discipline, A/A/B 1/3-split
  debunk (credited to Georgi Georgiev), apophenia/cohort-matrix noise warning.
- **Novelty/primacy effects**: **thin coverage this pass** — only the square-watermelon parable
  loosely touches "novelty item" framing (not the technical novelty-effect concept). Flag as a gap;
  worth a targeted `from:ronnyk novelty OR primacy` search in a follow-up.
- **Multiple comparisons / false discovery / winner's curse**: Kohavi §2.10 — the Optimizer's/
  Winner's Curse simulation (13%/21%/25%/30% bias figures), the Gelman-et-al RCT-overestimation
  paper, the Bartoš/Máriel "Power or Alpha" paper, KDD 2024 "False Positives in A/B Tests" paper.
- **Simpson's paradox**: **essentially absent** — one throwaway Vermeer reply crediting "Edward H.
  Simpson" with no substantive content (§3.1, not quoted, too thin to cite as a finding). Flag as a
  genuine gap in this territory's X coverage.
- **Interference / network effects / switchbacks / SUTVA**: Kohavi §2.11 — concurrent-experiments
  defense with Bing/Google/LinkedIn/Office scale chart; SUTVA vocabulary confirmed present in his
  orbit via a third-party primer; Vermeer's "interaction effects" post series flagged as unresolved
  lead. **No switchback-specific content surfaced** (DoorDash/Lyft-style) — likely better covered by
  grw-web's company-blog sweep.
- **Metric-definition traps**: Kohavi §2.14 — bot exclusion, RCT-scope-narrowness critique.
- **Experimentation culture failure modes**: Vermeer §3.1 (Experimentation Culture Awards, "large-
  scale testing is a cultural thing," democratizing-A/B-testing paper), Kohavi §2.12 (Bezos/Amazon
  culture anecdote, HiPPO framing, resistance-to-testing content), Sharma §3.2 (pre-PMF vs post-PMF
  experimentation-maximalism debate — genuinely two-sided).
- **Criticism of vendor statistics claims**: Vermeer's "immune to SRM because it's Bayesian" debunk
  §3.1 is the sharpest example. Statsig's self-reported "50% variance reduction via stratified
  sampling" §3.7 is flagged UNTRACED-beyond-vendor-blog, not a debunk but a caution.
- **Replication crisis (academic, cross-domain)**: Simonsohn/Data Colada §3.6 — Gino-Ariely
  scandal, pre-registration critique, replication-selection-bias point. Different register from
  online-A/B-testing but directly useful falsification-methodology material (how a credible watchdog
  operates, what receipts look like, what the stakes are — a lawsuit).

---

## 5. Debunks & falsification material (the strip)

This is the highest-value extraction for the controller's synthesis gate. Ranked by strength:

1. **Rounded buttons increase click-through rate — DEBUNKED.** Multiple independent lines: Kohavi's
   direct "Flawed experiments" reply (twice, verbatim, to two different questioners, §2.1), his
   standalone analysis post (§2.1, id `1777890861688439039`), and the Trustworthy A/B Patterns
   project's own large-scale (median 2.2M users, 80% power) replication finding that "the initial
   results were highly exaggerated" (§2.1, id `2022381211042398467`). **Three-way convergent
   falsification with named authors, dates, and post IDs.**
2. **"Bayesian platforms are immune to SRM" — DEBUNKED** by Lukas Vermeer, named, dated (2019-08-29,
   §3.1, id `1166966799730192385`): "the examples in our paper explain why every experiment
   (platform) could be affected."
3. **A/A/B splits (running 1/3 of users as a second A arm inside an A/B test) add validity value —
   DEBUNKED** by Kohavi, crediting Georgi Georgiev, with a clean logical proof (post-hoc-split
   argument) — §2.9/§2.6, id `1862940708984046044`.
4. **Priming effects in *Thinking Fast and Slow* — flagged as likely exaggerated due to low
   statistical power** — Kohavi, §2.6, id `1702360214329237684`. Not a full debunk of the book, but
   a named practitioner casting explicit doubt on a hugely popular pop-science source, sourced to the
   replication crisis.
5. **The Francesca Gino / Dan Ariely behavioral-science data-fabrication case** — the highest-stakes
   debunk in the corpus (led to retractions, a defamation lawsuit against the debunkers themselves).
   Not A/B-testing-specific, but directly the kind of "named authority calls out fraud/malpractice,
   with receipts, and pays a real cost for doing so" material the brief wants as falsification
   evidence (§3.6).
6. **Netflix and Amazon's own A/B tests sometimes REJECT the variant** ("Learn More" button, wider
   buy box) — Linowski's GoodUI corpus explicitly documents negative/rejected results, not just
   wins, which is itself evidence against survivorship-bias-driven CRO folklore (§3.4).
7. **"100% conversion increase" style claims from tiny samples — satirized and debunked as
   statistical noise** by Kohavi's own parody post (coin flips + "praying to Twyman"), directly
   naming a real contemporaneous example: "24% improvement based on 37 sessions" (§2.8, id
   `1795993493778898947`).
8. **The "10-20% of tests yield positive results" / "80% of experiments fail" folklore figures are
   circulating UNTRACED** even in Kohavi's own orbit (a ChatGPT-generated line he shared approvingly,
   and a Lenny Rachitsky RT with no cited source) — flag these explicitly as folklore requiring a
   primary-source trace before the skill can cite them, even though Kohavi's own **traced** figure
   (60-90% fail, Ch.1 of his book) is directionally consistent.
9. **Booking.com explicitly declined to build pricing-A/B-test capability** (§3.1, id
   `1537385524066934785`) — a named practitioner org publicly on record NOT extending the
   "test everything" doctrine to pricing, useful as a counter-example to blanket "A/B test
   everything" folklore.

---

## 6. Numbers ledger

| Figure | Claimer | Date | Post ID | Traced? |
|---|---|---|---|---|
| 60-90% of ideas fail to move target metrics | Kohavi | 2022-05-18 | `1526744199126609920` | **Traced** — cites Ch.1 of his own book |
| "only about 10-20% of these tests yield positive results" | ChatGPT output, shared by Kohavi | 2024-06-16 | `1802216524260020652` | **UNTRACED** |
| "80% of experiments fail" | Lenny Rachitsky (RT'd into Kohavi's archive) | 2023-07-30 | `1685514352357679104` | **UNTRACED** |
| Optimizely analyzed 127,000 experiments | Optimizely (via Kohavi commentary) | 2023-12-21 | `1737693481014002120` | Primary count stated, Kohavi's critique doc not resolved this pass |
| LinkedIn SRM rate = 10% | LinkedIn paper, cited by Kohavi/Vermeer | 2019-09-03 | `1168808323317207040` | **Traced** to a named internal paper (title not fully captured) |
| Interactions need 16x the sample size of main effects | Andrew Gelman (@StatModeling), amplified by Evan Miller | 2018-03-15 | `974279134649225216` | Stated as fact by a named statistician; underlying derivation not fetched |
| 200,000 users = adequate power floor for e-commerce conversion A/B tests | Kohavi | 2024-10-30 | `1851526773496062157` | Sourced to his own slides (not independently re-derived here) |
| 240,000 users "is where the magic happens," hundreds of concurrent tests | Kohavi | 2025-11-12 | `1988643836068020301` | Kohavi's own claim, guest-post sourced |
| p=0.05 does NOT mean 95% probability B > A — it's ~78% | Kohavi | 2025-11-12 | `1988643836068020301` | Stated without derivation in the tweet; consistent with known Bayesian-reinterpretation-of-p-values literature, not independently re-derived |
| Winner's Curse bias: 13% (1 treatment, 80% power) / 21% (2 treatments) / 25% (3 treatments) / 30% (Bonferroni-adjusted, 3 treatments) | Kohavi | 2024-10-26 | `1849967603202261260` | Kohavi's own spreadsheet simulation (linked, not independently re-derived here) |
| Cochrane RCTs: 75%/50%/25% probability of ≥5%/56%/181% effect overestimation | Gelman, Greenland, Imbens, Schwab, Goodman, van Zwet (paper, cited by Kohavi) | 2023-12-27 | `1739833299617644803` | **Traced** to a named, dated (2023-12-22) paper |
| Even well-run 80%-power A/B tests overestimate effects by 13% | Kohavi | 2023-12-27 | `1739833299617644803` | Stated as an industry rule of thumb, source not separately cited beyond the adjacent Cochrane paper |
| NPS: 5-point delta needs 7,600+ survey responses / 60,000+ surveys sent (at 12% response rate) | Kohavi | 2023-02-21 | `1627841963600023557` | Kohavi's own calculation (doc not independently re-derived) |
| Rounded-button/page-perf/coupon-field/sticky-CTA replications: median 2.2M users/experiment, 80% power, MDE 0.3-2.2% | Trustworthy A/B Patterns project (Kohavi/Vermeer/Linowski) | 2026-02-13 | `2022381211042398467` | **Traced** — the project's own summary of its own methodology |
| Mask-wearing RCT (Bangladesh): 13%→42% adoption yields 11.9% relative reduction (8.6%→7.6%), N=600 villages/342,126 adults | Kohavi (citing a public-health RCT) | 2021-09-02 | `1433227710151626752` / `1433227711313420293` / `1433228583770603523` | **Traced** — named RCT with N disclosed |
| Dell redesign: 33% revenue-per-visit loss; JS error rate on payment pages 1.2%→45.4%/49.5% | Kohavi (citing @vabdwivedi / Tealeaf case study) | 2023-08-18 | `1692402231965057378` | Named case study, secondary source (not the original Dell/Tealeaf report itself) |
| Amazon "1-Click"-adjacent idea: 3% revenue increase | Kohavi | 2023-08-27 | `1695592147301666909` | Kohavi's own ~19-year-old memory, invites corrections in-tweet — **treat as soft/anecdotal** |
| Talabat/Eppo home-page caching: TTI 2.1s→1.0s, revenue/user +0.36% raw, ~0.3% after sequential-inference haircut | Kohavi, citing an Eppo (Datadog) case study | 2025-11-20 | `1991297106607501413` | **Traced** — named company, named vendor, disclosed haircut methodology |
| Duolingo runs 500 A/B tests/quarter | Jason Lemkin (@jasonlk), amplified by Chetan Sharma | 2022-11-06 | `1589377060673589248` | **UNTRACED** to a primary Duolingo source in this pass |
| Statsig stratified sampling: up to 50% variance reduction | Vijaye Raji / Statsig (vendor self-report) | 2024-05-15 | `1790833478323552567` | **UNTRACED beyond a Statsig blog link** (not independently verified) |
| GoodUI: humans predict A/B test outcomes better than chance (from 70,000 guesses across 3 studies) | Jakub Linowski / GoodUI | 2022-12-09 | `1601285591773200384` | **Traced** to GoodUI's own blog post with a stated sample (70,000 guesses) — worth an independent read of the underlying post for the exact accuracy figure, not just "better than chance" |
| American Statistician paper: 13th most-read of all time, >25,000 views | Kohavi | 2025-11-25 | `1993467800195940655` | Self-reported from the journal's own "most read" page (linked) |
| Book sales: 25,000 copies, translated into 4 languages | Kohavi | 2023-11-01 | `1719679350298034399` | Self-reported |
| Statsig joining OpenAI, Raji becomes CTO of Applications | Vijaye Raji (Statsig CEO) | 2025-09-02 | `1962944816104509485` | **Traced — primary, first-party** |
| Eppo acquired by Datadog | @eppohq bio + TechCrunch (2025-05-05, id `1919390637503242303`) | 2025 (bio, undated within tweet; TechCrunch dated) | — | **Traced** — independently corroborated by TechCrunch reporting |

---

## 7. Dead ends, empty queries, endpoint health notes

- **Endpoint degradation observed mid-session**: after ~20 successful serialized calls, three
  consecutive calls timed out at 60-90s (`xrelay archive user chesharma87`, `xrelay user-posts
  chesharma87`, `xrelay search "from:chesharma87..."`, and even an unrelated sanity-check
  `xrelay search "SRM sample ratio mismatch"` also timed out). This matches the brief's warning
  about session-wide search-endpoint degradation from concurrent load elsewhere in the run (I never
  ran more than 1 process at a time myself). **Recovery worked**: backing off 15-20s and retrying
  `xrelay user` (cheapest call) confirmed the endpoint was healthy again, then `user-posts` for the
  same handle succeeded on retry. **Lesson for future workers**: a timeout is not necessarily a dead
  handle or a bad query — back off 15-20s (longer than the RATE_LIMITED-implied 2-5s) and retry the
  *same* call once before concluding the source is unreachable.
- **Dead/wrong handles tried**: `@eppo_ai` (null), `@Get_Eppo` (null — old handle, superseded by
  `@eppohq`), `@chesharma` (wrong account, 0 followers, not Chetan Sharma).
- **Low-value handles vetted but not archived**: `@alexdeng` (Shaojie Deng — 16 tweets total,
  dormant; his content is fully visible through Kohavi's citations), `@geteppo` (4 followers, 7
  tweets, effectively abandoned).
- **Vendor company accounts vetted but not deep-swept** (deliberate scope decision — brief prioritizes
  named practitioners over marketing accounts, and docs-heavy content is better mined via the github
  channel): `@statsig`, `@growth_book`, `@eppohq`.
- **Unresolved leads for a follow-up pass** (if authorized): Vermeer's "interaction effects" 3-part
  blog series (id `1673306436351262720` names it as "the third post," first two not located); Kohavi's
  "Imperfections of A/B Testing" doc (18 issues, id `1779300068367192324`) — the doc itself would be
  worth a WebFetch, not just the tweet announcing it; the specific % figure behind Data Colada's
  "prevalence of pre-registrations" post (id `1724426970375602489`); Zalando's Lévy-inequality
  sequential test (id `1828099341636030676`) — worth cross-checking against grw-web's company-blog
  sweep for a primary engineering-blog writeup; explicit mSPRT/"always-valid p-values" terminology
  and the Johari/Pekelis/Walsh paper by name — **not directly surfaced in this pass** despite
  Ramesh Johari being swept; a targeted search once the endpoint is confirmed stable would be the
  next move.
- **Discovery calls used sparingly per brief**: only one `following ronnyk --limit 100` call was
  made (no `followers lukasvermeer` call — budget/time triage favored archiving already-identified
  high-value handles over further discovery).
- **WebSearch budget**: 0 of the allotted ≤8 calls used — everything in this file was resolved via
  xrelay alone (search-based handle resolution for the Eppo founder's correct handle, via an
  in-xrelay search rather than WebSearch).

---

## 8. Growth-vs-operate notes

Per Tamas's standing question: does this content belong in growth (learning/causal improvement) or
operate (running the live system)? Findings this pass:

- **Kohavi's 50/50-vs-10%-rollout argument (§2.6, id `1891629899573756152`) is the sharpest example
  in this corpus of the seam itself.** He explicitly argues AGAINST the operate-style risk-mitigation
  instinct ("this is risky, run it at 10%") when the actual goal is learning: "power calculations
  determine the number of users you need... if you need 100K users in the treatment, and it will
  take you five weeks when allocating 10%... you're better off running at 50% and getting the answer
  five times faster." This is a growth practitioner directly telling readers not to reach for
  operate's canary-style caution when the intent is an A/B test, not a risk-contained rollout — same
  flag/traffic-allocation mechanism, opposite intent, and he names the tension explicitly.
- **Feature flags surfaced as vocabulary, not as operate content, in Kohavi's own history**: his 2022
  keynote (§2.12-adjacent, id `1501643540438208512`) is titled around "the transition from feature
  flags to #abtests" — i.e., he frames flags as the *staging ground* that graduates into an
  experiment, reinforcing the family's existing seam (flag infra is shared, growth owns the
  learning-intent usage, operate owns the risk-containment usage).
- **The Trustworthy A/B Patterns project's page-performance pattern (§2.1) sits right on the seam**:
  testing whether a performance improvement (TTI speedup) causally moves revenue is a growth question
  (learning: does speed matter, and by how much?), even though "page performance" as a topic is
  usually operate's domain (SLOs, latency budgets). The Talabat/Eppo case study (§3.2,
  `1991297106607501413`) is the same pattern: a caching change was A/B tested for its *revenue*
  effect, not just deployed and monitored for latency — a clean growth framing of an
  operate-adjacent lever.
- **No canary-deployment or blue/green-rollout content surfaced in this validity-focused sweep** —
  consistent with this being the correct channel/territory split (that content likely lives in
  operate's own corpus or grw-web's company-blog sweep, not in the X validity-practitioner layer).
- **JS-error guardrail metrics (Dell case study, §2.7)** are an interesting hybrid: the *metric*
  (JS error rate) is exactly the kind of signal operate would alert on in production, but Kohavi's
  usage here is strictly as an experiment guardrail (kill/ship decision for a specific redesign
  variant), not a standing production alert — same signal, growth's use-case (decide whether to ship
  a *specific tested change*) vs. operate's use-case (detect degradation in the *live system*
  generally). Worth flagging to the controller as a concrete "guardrail metric" example that is
  genuinely growth's (experiment-scoped, one-time decision) rather than operate's (standing
  monitoring), even though the metric itself would also make sense on an operate dashboard.
