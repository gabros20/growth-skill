# D4 — The industry layer: PLG benchmarks, CRO folklore, retention benchmarks, pricing research, habit/gamification ethics

Worker: D4 (grw-web channel). Role: SKEPTIC. WebSearch calls used: 20/20 (budget exhausted — see
methodology note at file end). Everything below is dated as of fetch time, 2026-08-01.

**Course correction received mid-run from grw-web lead (applied, see §3):** (1) marketing-skill has
already killed "button color = emotion" folklore (`marketing-skill/skills/marketing/references/
landing-pages-and-conversion.md §8`) — my job is NOT to re-litigate color psychology, it's to kill
the specific *case studies* as bad EXPERIMENTS (missing denominators/duration/replication,
underpowered). (2) Two arithmetic facts are pre-verified by the lead and cited here, NOT re-derived:
the "100 conversions/variant" rule is a floor calibrated only for huge (~50%+ relative) effects, and
mida.so's "60,000 visitors/variant" example understates 2-sided-test requirements by ~22% because it
silently uses a 1-sided test. Both cited to `research/growth/_raw/web-lead-slice.md` per lead
instruction — I have not independently re-verified those two numbers myself.

---

## Evidence-discipline key (used throughout)

Every benchmark block below has: **NUMBER** (exact wording) · **PUBLISHER/DATE** · **SAMPLE**
(size + recruitment) · **SELF-SELECTION** · **INSPECTABLE?** (can a reader see the underlying data).
**Rung**: (1) primary, (2) peer-reviewed, (3) named practitioner+date, (4) folklore.
Any block missing one of the five fields is marked **INCOMPLETE** and, if it's a bare magnitude with
no denominator, tagged **NEVER-SHIP CANDIDATE**.

---

## 1. PLG benchmarks

### 1a. OpenView "Product Benchmarks" reports (2021, 2022, 2023 editions fetched)

**Status of the publisher, verified 2026-08-01 (corrects the operational brief):** OpenView Venture
Partners abruptly wound down in **December 2023** (not "~Dec 2024" as the brief's operational note
guessed — reported by TechStartups, Forbes, The Information, BetaKit, all 2023-12-06 dated), after
two of three senior partners quit; the firm returned ~75% of capital to LPs (The Information, March
2024). **Contrary to the brief's expectation that "the site may be dead,"** `openviewpartners.com`
is still live and serving full report content as of 2026-08-01 (verified via direct curl, HTTP 200,
real New Relic-instrumented page, not a parked domain) — the 2021, 2022, and 2023 editions all
resolve live; only the 2019/2020 editions 404 and require archive.org. **This is itself a finding**:
a defunct company's marketing content can outlive the company as an uninspected, un-updated,
permanently-citable artifact — nobody is maintaining or correcting it, but it keeps getting cited as
current.

**1a-i. OpenView×Pendo 2023 Product Benchmarks Report**
- NUMBER: "a record-breaking 1,000 participants." PQL tracking "increased the likelihood of fast
  growth by **61%**." Other levers: outreach to free sign-ups **+28%**, dedicated growth/PLG team
  **+17%**, TikTok as promotion channel **+14%**. "Fast-growing" redefined this year from ≥100%
  YoY (2022 definition) to ≥75% YoY — **the threshold moved between editions**, so year-over-year
  comparisons using this label are not comparing the same thing.
- PUBLISHER/DATE: OpenView + Pendo (co-branded, Pendo is a sponsor), authors Hannah McGrath / Curt
  Townshend / Kyle Poyar. Live page dated to the 2023 report cycle; refetched 2026-08-01 at
  `https://openviewpartners.com/2023-product-benchmarks/`.
- SAMPLE: 1,000 respondents, self-reported survey. No response-rate, no sampling frame given.
- SELF-SELECTION: explicit on-page disclosure: **"Some of the companies referenced in the report are
  OV portfolio companies."** i.e. some of the benchmarked companies are the fund's own portfolio —
  the sample is not just "self-selected SaaS operators who follow OpenView," it partly includes
  companies OpenView has a financial stake in looking good.
- INSPECTABLE: No. Full report is a gated PDF download; the page states "For information on how the
  data is collected and analyzed, please hop to the bottom of this page" and the actual bottom-of-page
  text is only "OpenView is the source of all the data featured in this report, unless otherwise
  specified" — **that is the entire methodology disclosure**. No sampling frame, no response rate, no
  raw data, no confidence intervals anywhere in the free content.
- Rung: 4 (vendor-sponsored survey marketing content dressed as a "report"). The 61%/28%/17%/14%
  "lever" numbers are bare correlations from a self-reported cross-sectional survey presented with
  causal-sounding language ("increased the likelihood") — **NEVER-SHIP CANDIDATE** as stated.

**1a-ii. OpenView 2022 Product Benchmarks Report**
- NUMBER: "We surveyed more than **450 practitioners**." "Only **5%** of all freemium signups convert
  from free to paid" (median). Freemium 30-day retention: **20%** average, standout PLG companies
  (>$30M ARR) similar at **16%**. PLG adoption "grown from 45% to 55% since 2019" of respondents.
  Freemium acquisition mix: organic search 53%, product-driven referral 13%, paid 10%, outbound 8%.
  Worked illustrative funnel: "Story of 1,000 Visitors" — freemium path yields 60 free signups (6%
  visit→signup) → 3 paying (5% free→paid); free-trial path yields 40 signups (4%) → 7 paying (17%
  free→paid). **These per-step numbers are presented as a narrative illustration, not as a
  distribution with error bars** — treat as illustrative, not as "the" conversion rate.
- PUBLISHER/DATE: OpenView, authors Sam Richard / Kyle Poyar. Refetched live 2026-08-01 at
  `https://openviewpartners.com/2022-product-benchmarks/`.
- SAMPLE: 450+ self-selected survey respondents ("practitioners"), no sampling frame disclosed.
- SELF-SELECTION: same portfolio-company disclosure as 2023 edition, verbatim, appears at the bottom
  of every edition of this report as a standing footnote: "Some of the companies referenced in the
  report are OV portfolio companies."
- INSPECTABLE: No — same gated-PDF, no-methodology pattern as 2023.
- Rung: 4.

**1a-iii. OpenView 2021 Product Benchmarks Report**
- NUMBER: "Our base of responses grew **70%** over last year" (i.e., the sample itself is not stable
  year over year — it is a growing, different set of self-selected respondents each year, which
  undermines any trend line drawn across editions). PQL adoption flat: 25% (2020) → 25% (2021).
  Activation-metric adoption: 50% (2020) → 54% (2021). Self-service share of conversions: median 50%,
  75th percentile 80%.
- PUBLISHER/DATE: OpenView, authors Sam Richard / Kyle Poyar. Refetched live 2026-08-01.
- SAMPLE: not stated as a fixed N on this page (unlike 2022's "450+" and 2023's "1,000"); implied
  larger than 2020's but exact N not disclosed on the free page.
- SELF-SELECTION: not explicitly disclosed on this particular page (the OV-portfolio-companies
  footnote appears on the 2022/2023 pages but was not found on the 2021 page text as fetched) —
  **flag as INCOMPLETE for this edition specifically** even though the pattern almost certainly holds.
- INSPECTABLE: No.
- Rung: 4.

**What a reader can legitimately conclude from the OpenView series, candidly:** These are self-
reported, cross-sectional marketing surveys run by a (now-defunct) VC firm to promote its own
"product-led growth" thesis and, per its own footnote, partly sampling its own portfolio companies.
The *direction* of some qualitative claims (PLG adoption rising 2019→2022, freemium businesses
converting a small single-digit percentage of signups, activation tracking becoming more common) is
plausible and roughly consistent across editions and with independent sources below (ChartMogul/
ProductLed/Kyle Poyar's later "Growth Unhinged" report — see §1b — land in a similar 5-9% free-to-
paid range). What a reader CANNOT legitimately conclude: that any specific percentage (5%, 20%, 61%)
describes "the market," that the sample is representative of SaaS broadly, that the "lever" effects
(PQL tracking, TikTok, etc.) are causal, or that the benchmark is stable — the "fast-growing"
threshold itself changed between editions, and the sample size/composition changed every year.

### 1b. ChartMogul / Kyle Poyar's "Growth Unhinged" — 2026 free-to-paid conversion report

**Finding about citation laundering:** `chartmogul.com/reports/saas-conversion-report/` and Kyle
Poyar's own newsletter `growthunhinged.com/p/free-to-paid-conversion-report` report **the same
underlying survey** (both: 200 B2B software products, Typeform survey distributed via email/Slack/
social, January 2026 fieldwork, verbatim shared line "very few products actually have an 8%
conversion rate" appears in both). Poyar is a former OpenView partner (author of the OpenView reports
above) now writing under his own newsletter brand and partnering with ChartMogul — **the "many
different benchmark sources" a reader assembles by googling around are frequently the same handful of
practitioners re-publishing the same dataset under different logos.** This is exactly the kind of
citation-chain collapse the charter asks us to trace.

- NUMBER: Median free-to-paid conversion across all 200 products: **8%**. By model (50th/75th
  percentile): freemium standard signup 3-5%/8-12%; free trial no card 4-6%/10-15%; free trial
  requiring card 25-35%/50-60%; "AI-native" products 6-8%/15-20%. "10x conversion difference between
  the top 20% of self-serve products and the bottom 20%."
- PUBLISHER/DATE: ChartMogul (report) / Kyle Poyar via Growth Unhinged (same data, own newsletter),
  both dated February 2026, fieldwork January 2026.
- SAMPLE: 200 B2B software products, self-selected survey respondents recruited via "email, Slack,
  and social media channels." Typical respondent profile stated: $1-10M ARR, $50-249/mo ARPU.
- SELF-SELECTION: readers who follow ChartMogul/Kyle Poyar and choose to respond to a benchmarking
  survey are, by construction, more analytically engaged/benchmark-conscious operators than the
  median SaaS company; no comparison to non-responders is possible or offered.
- INSPECTABLE: Partially — this is the one benchmark in this section with an actual disclosed
  "Methodology and glossary" section (survey tool named, distribution channels named, question
  wording given). Still no raw data or company list.
- Rung: 3 (named practitioner, dated, methodology partially disclosed — better than the OpenView
  reports but still a self-selected convenience sample, not a market census).

### 1c. ProductLed (Wes Bush) benchmarks

- NUMBER: "600+ SaaS businesses surveyed." 58% of B2B SaaS companies report having a PLG motion; 91%
  plan to increase PLG investment (47% plan to double it); average free-to-paid conversion **9%**
  overall; freemium median conversion **12%** vs free trial; PQL-driven free trials convert **25%**;
  PQL conversion by ACV bracket 30-39%; only 34% of companies track activation metrics; 24-25% use
  PQLs at all.
- PUBLISHER/DATE: ProductLed (Wes Bush's company), blog post dated 2025-02-05, partners credited:
  Gainsight and RevOps Squared.
- SAMPLE: "600+ SaaS businesses" — no sampling frame, no recruitment description, no response rate
  disclosed in the fetched content.
- SELF-SELECTION: not addressed by the source at all — **INCOMPLETE** (no recruitment mechanism
  stated, meaning the self-selection mechanism itself is unknown, not just undisclosed-as-a-caveat).
- INSPECTABLE: No — "We asked 600+ SaaS businesses to learn the state of product-led growth" is the
  entire methodology statement.
- Rung: 4. **NEVER-SHIP CANDIDATE** as a standalone number — no denominator detail, no recruitment
  method, numbers presented with high apparent precision (58%, 91%, 47%, 9%, 12%, 25%, 30-39%, 34%,
  24-25%) that implies rigor the disclosed methodology cannot support.

### 1d. Userpilot — secondary aggregator, not a primary source

Userpilot's `saas-average-conversion-rate` blog post **explicitly aggregates** ChartMogul, First Page
Sage (its own claimed sample: "50+ B2B SaaS clients," organic trial-to-paid 18.2% opt-in / 48.8%
opt-out, by-industry breakdowns e.g. CRM 29%), and ProductLed numbers, presented as if it were an
independent benchmark compilation. Userpilot itself did no primary research here; it states it
"collected the most recent and valid sources." **This is the pattern to watch for across the whole
PLG-benchmark ecosystem**: dozens of SaaS-tooling-vendor blog posts (Userpilot, Appcues, and similar)
republish the same 3-4 primary self-selected surveys (OpenView, ChartMogul/Poyar, ProductLed, First
Page Sage) as if each republication were independent corroboration. It is not — it is the same
handful of underlying convenience samples, laundered through SEO content.

### 1e. Mixpanel 2024 Benchmarks Report

- NUMBER: "average week one retention rate across industries fell from 50% to 28%" (2023 datapoint,
  as characterized secondhand — I was not able to directly fetch Mixpanel's own report page content
  and this comes from a WebSearch summary, not a direct primary-source read — **flag as
  second-hand/UNVERIFIED-BY-DIRECT-FETCH**).
- PUBLISHER/DATE: Mixpanel, "2024 Mixpanel Benchmarks Report."
- SAMPLE: characterized (secondhand) as "product usage data from over 7,700 Mixpanel customers and
  11.7 trillion anonymous user events," across six industry categories (Technology, Financial
  Services, Ecommerce, Healthcare, Gaming, Media & Entertainment).
- SELF-SELECTION: this is the one benchmark class in §1 that is at least NOT a voluntary opt-in
  survey — it's the vendor's own instrumented customer telemetry. Self-selection here is one level up:
  it is not "who volunteers to answer a survey" but "who chooses to buy and instrument with Mixpanel"
  — a company sophisticated enough to have adopted a dedicated product-analytics tool, which itself
  correlates with company maturity/stage/funding and is NOT representative of the broader population
  of software products.
- INSPECTABLE: Not verified directly — I did not successfully fetch Mixpanel's own report page in
  this run; this entry rests on a WebSearch summary only. **Mark INCOMPLETE — should be re-verified
  against the primary Mixpanel page before the controller ships this number.**
- Rung: 3-ish at best pending direct verification, currently UNVERIFIED.

### 1f. GameAnalytics — gated, not independently checkable in this run

Attempted direct fetch of `gameanalytics.com/benchmarks/` (2026-08-01): the public page discloses NO
sample size, NO methodology, NO actual D1/D7/D30 numbers — it only promotes a "2026 Mobile & PC Gaming
Benchmarks" report available behind a lead-gated download. **This is itself a finding**: one of the
most frequently cited sources for "what's a good D1 retention for a mobile game" numbers is not
actually inspectable without surrendering contact information to the vendor, and I could not verify
even the existence of a disclosed sample size without doing so. Treat any GameAnalytics D1/D7/D30
number circulating in blog posts as **UNTRACED** until someone opens the actual gated PDF. See §5 for
the D1 retention folklore this feeds.

---

## 2. The Sean Ellis 40% test — provenance trace

**Bottom line up front: the provenance is thin, and it is thin in a specific, traceable way.** Every
secondary source repeats the same two facts — "40%" and "nearly 100 startups" — without any of them
citing a dataset, a company list, a year range, or a methodology. I could not find the original
primary post itself still live; here is exactly how far the chain goes before it dead-ends.

- CLAIM AS REPEATED EVERYWHERE: Sean Ellis surveyed users with the question "How would you feel if you
  could no longer use [product]?" (options typically: very disappointed / somewhat disappointed / not
  disappointed / N/A), and found that companies where **≥40%** of respondents answered "very
  disappointed" tended to achieve sustainable growth, while companies below 40% almost always
  struggled — a threshold he says he derived by "comparing nearly 100 startups."
- PUBLISHER/DATE CHAIN: Ellis's own archive at `startup-marketing.com` (fetched 2026-08-01) does NOT
  contain the original 40% post in its visible archive — the site's most recent post (dated
  2024-09-27) redirects readers to his Substack (`seanellis.substack.com`) for current writing, and
  the visible archived content stops at January 2013 with no visible standalone "40% test" post in
  what I could fetch. Multiple secondary sources date the original public articulation to a **2009**
  GrowthHackers.com / blog post (I could not access web.archive.org via WebFetch — tool-blocked — and
  did not spend further WebSearch budget chasing the exact archived URL after two dead-end attempts).
  The concept is formalized in his and Morgan Brown's book **"Hacking Growth" (2017)**.
- SAMPLE: "nearly 100 startups" / "hundreds of startups" (secondary sources are inconsistent between
  "nearly 100" and "hundreds" — **the sample size itself is not consistently reported even in the
  folklore about it**). No company names, no industry mix, no year range, no description of how these
  ~100 companies were selected has surfaced in anything I could fetch. This is an **UNTRACED**
  sample — I followed the citation chain from (a) Sean Ellis's own current archive → dead end
  (redirects to Substack, no archived original post found) → (b) dozens of SEO blog posts
  (LearningLoop, Sleekplan, Cleverism, Stackmatix, IdeaPlan, FitSignal, Kromatic, Zonka, Medium/
  GrowthHackers republication) all stating "nearly 100 startups" with **zero of them citing a
  dataset, company list, or methodology document** — every single one traces back only to "Sean Ellis
  says." I did not find one instance, primary or secondary, of the actual list of ~100 companies, the
  years surveyed, or the raw response data.
- SELF-SELECTION / SURVIVORSHIP: not disclosed by Ellis in anything found. The obvious critique (also
  not directly sourced to Ellis himself, but structurally true of the setup as described everywhere):
  the ~100 companies in his comparison set were, by the nature of how a growth consultant/marketer
  builds a client and conference-circuit reputation, likely already companies that had survived long
  enough to be worth studying and were probably already engaged with Ellis's growth-hacking community
  — i.e. the threshold may have been reverse-engineered from a small, non-random, already-successful
  set, and the causal claim ("40%+ predicts sustainable growth") has never been shown to hold in a
  prospective, out-of-sample test.
- **VALIDATION STUDIES FOUND: NONE.** I found zero peer-reviewed or independent prospective validation
  of the 40% threshold's predictive power. The strongest rung-3 critique found:
  - **Jim Lewis, PhD & Jeff Sauro, PhD, MeasuringU, published 2022-03-15** ("What Is the
    Product-Market Fit (PMF) Item?"): explicit, named, dated, statistically literate critique. Direct
    quotes captured: "there is little compelling evidence to support its promotion for use in
    practice"; the 40% threshold "sounds authoritative and precise, but it's based on the intuition of
    its originator" (crediting that intuition as "grounded with considerable experience" but not
    empirically validated); and a concrete statistical point — **at the commonly-suggested n=50
    minimum sample, the 95% confidence margin of error around a 40% estimate is ±13% (plausible range
    ~27-53%)**, versus ±3% at n=1,000. i.e. most practitioners running this survey with realistic
    sample sizes (tens to a couple hundred respondents) get an estimate too noisy to know if they're
    above or below the threshold at all. They also flag "Jackson's criticism about asking respondents
    to guess about their future feelings" (a hypothetical/stated-preference critique, structurally
    the same critique leveled at Van Westendorp in §4). Explicit recommendation: "against giving it
    undue weight in business decisions, whether startup or mature."
  - **Kromatic (startup post-mortem blog), undated but internally referencing a specific failed
    startup case (StartupSquare):** the founder reports their own startup scored above 40% on the
    Sean Ellis survey yet had NO real product-market fit ("We had Problem/Solution Fit, but not
    Product/Market Fit. Our product simply didn't work that well.") — i.e. a documented false
    positive. The author explicitly disclaims rigor: **"I admittedly have not, and will not, do the
    more rigorous academic research to prove this conclusively. But I only need one example to show
    that a false positive is possible."** This is rung-4 (single anecdote, self-disclaimed as
    non-rigorous) but is a *named, dated-ish, first-person* false-positive case, which is more than
    most critiques offer.
- **WHAT ELLIS HIMSELF SAYS ABOUT LIMITS:** secondary sources report (not independently verified
  against a primary Ellis quote in this run — budget-constrained) that Ellis has cautioned the survey
  "isn't recommended beyond the early testing stage" and warns about not suggesting to your user base
  that the product might be discontinued, and needing "several hundred responses" for the survey to be
  meaningful — but I did not locate and directly quote a primary Ellis source stating this; it is a
  paraphrase circulating in secondary guides. **Flag as UNVERIFIED PARAPHRASE, not a direct quote.**
- **PEER-REVIEWED EVALUATION: NONE FOUND.** Zero academic papers located that test whether the 40%
  threshold predicts startup survival, revenue growth, or any other outcome in a controlled or
  prospective design.

**Rung assignment for the Sean Ellis 40% test as a whole: rung 3 at best (named practitioner, but no
published dataset) shading into rung 4 (folklore) for the specific "40%" and "nearly 100 startups"
numbers, which have been repeated for over a decade with no primary source I could locate still
online and no independent validation ever published.** This is a strong falsification-strip
candidate — not because the underlying intuition (ask users how disappointed they'd be) is
worthless, but because the specific numeric threshold has exactly the profile the charter warns
about: a number without a denominator, repeated everywhere, traceable to nothing.

---

## 3. CRO folklore falsification targets

**Scope note applied per grw-web lead correction:** marketing-skill has already shipped the
"color-doesn't-mean-anything-universal" verdict (`marketing-skill/skills/marketing/references/
landing-pages-and-conversion.md §8`). My target below is narrower and different: showing that the
*specific famous case studies* people cite as proof fail as **experiments**, independent of whether
the color-psychology theory behind them is true or false.

### 3a. The HubSpot/Performable "red button beat green button by 21%" case study

- NUMBER: red CTA button outperformed green CTA button by **21%** click-through rate, on Performable's
  own homepage.
- PUBLISHER/DATE: originally a Performable blog post (Performable was an independent marketing-
  automation startup, acquired by HubSpot in 2011; the case study is now near-universally reproduced
  on OTHER sites' blogs — I was not able to locate and directly fetch the original standalone
  Performable post itself, only secondary characterizations of it, e.g. SitePoint's "UX Dilemma: Red
  Button vs. Green Button," CXL's "Which Color Converts the Best?" (WebFetch 403'd on this one, not
  independently re-verified in this run), and dozens of listicle blogs).
- SAMPLE / DURATION: secondary sources converge on "**~2,000 visits**, over **a few days**" — but
  this figure is itself only reported secondhand across listicles, never traced to a number stated in
  a still-accessible original post. No stated statistical test, no p-value, no confidence interval, no
  baseline conversion rate given anywhere I found.
- SELF-SELECTION / EXPERIMENTAL VALIDITY PROBLEM (the actual falsification target per the course
  correction): even taking the "~2,000 visits over a few days" figure at face value, this is a single
  test, on a single company's single homepage, run once, for a few days, with an unstated conversion
  baseline. There is no disclosed pre-registration, no disclosed stopping rule (did they stop the
  moment it looked significant — the classic "peeking" failure mode another D-channel worker is
  covering in depth), and **no known replication** — I found zero record of anyone re-running this
  exact test on the same product later and reporting the outcome. A 21%-CTR-lift claim from ~2,000
  total visits, split across two arms, is very likely underpowered by the same "winner's curse" logic
  documented in §3c below (small samples inflate any effect that clears the significance bar).
- INSPECTABLE: No — the original raw data, the actual page screenshots dated to the actual test
  period, and Performable's own methodology write-up were not locatable/fetchable in this run.
- Rung: 4. **NEVER-SHIP CANDIDATE**: a 15-year-old single-company single-run case study, missing
  baseline, missing statistical test disclosure, unreplicated, propagated purely by repetition.

### 3b. Jared Spool's "$300 Million Button"

- NUMBER: removing a mandatory "Register" step from checkout (replacing it with an optional
  "Continue" + explanatory copy) increased sales **45%**, worth **"$15 million in the first month"**
  and **"$300 million in the first year."**
- PUBLISHER/DATE: Jared M. Spool (UIE), originally written **2009-01-14** as a contribution to Luke
  Wroblewski's book *Web Form Design: Filling in the Blanks*; republished on Medium/UIE Brain Sparks
  **2015-10-27** (fetched directly, 2026-08-01).
- SAMPLE / METHODOLOGY: the site/company is **never named** ("a major e-commerce site"). It is
  explicitly framed as a **usability-research-driven redesign**, not a controlled A/B test — UIE
  conducted usability studies observing real users struggling with the login/registration step, then
  redesigned it. No baseline traffic numbers, no A/B split, no statistical test, no duration for the
  "first month"/"first year" figures beyond the labels themselves.
- SELF-SELECTION: N/A in the survey sense, but the entire case rests on UIE's own unverifiable
  narrative account of consulting work for an unnamed client — there is no way for an outside reader
  to check the $300M figure against any public financial disclosure, and Spool is the sole source for
  both the diagnosis and the outcome number.
- INSPECTABLE: No. Company unnamed, no public financials tie the $300M figure to anything checkable.
- Rung: 4 (named practitioner telling an unverifiable client anecdote 15+ years after the fact, no
  named company, no data). **NEVER-SHIP CANDIDATE** — it is the canonical "case study with no
  denominator": a huge round dollar figure with zero baseline revenue disclosed, so "$300 million"
  cannot be assessed as a percentage lift, a fraction of the site's actual revenue, or anything else.

### 3c. The "winner's curse" — the actual mechanism debunking outsized case-study lifts

- CLAIM: extremely large A/B test lifts (200%+, 300%+ headline numbers agencies advertise) are
  overwhelmingly **artifacts of underpowered tests**, not real effects — the "winner's curse" in
  statistics: an underpowered test can only clear a significance threshold by chance when the observed
  effect happens to be far larger than the true effect, so **conditional on significance, small-sample
  results systematically overstate the true lift**.
- PUBLISHER/DATE: **Deborah O'Malley, GuessTheTest, updated December 2023** (fetched 2026-08-01),
  citing **Ronny Kohavi** directly on statistical mechanics; also references a separate contested
  finding — a **Journal of Consumer Research 2023 paper (Biswas, Abell, Chacko)** claiming rounding
  the corners of square buttons increased click-through rate by 55% (p=0.037) — which I found only
  through a WebSearch summary of a **Kohavi et al. arXiv reanalysis (arXiv:2512.24521v2, dated on
  arXiv as of ~January 2026)**; I attempted to fetch the arXiv PDF directly and it downloaded but
  rendered as unparseable binary in this run — **I could not extract the reanalysis's specific
  numbers myself and am reporting only the WebSearch-surfaced characterization: that Kohavi's team,
  drawing on experience with "tens of thousands" of Bing/Microsoft A/B tests, examined the JCR paper's
  reliability. Flag this specific sub-claim as UNVERIFIED-BY-DIRECT-READ — re-fetch the arXiv PDF as
  text before shipping this citation.**
- CONCRETE UNDERPOWERED CASE STUDIES documented directly by GuessTheTest (rung 3, named, dated
  December 2023): a "364% lift" claim resting on 17 vs. 11 visitors with 1 vs. 3 conversions; a
  "337% lift" claim resting on 3 vs. 12 conversions total; a "-60% drop" claim on a high-traffic site
  that was actually only 2 vs. 5 conversions. **These are the concrete "agency case study with no
  denominator" examples the brief asked for** — in each case the percentage is real arithmetic on the
  stated tiny conversion counts, but the conversion counts themselves are far too small to support any
  claim about the underlying true rate.
- ARITHMETIC CROSS-REFERENCE (not re-derived by me, cited per lead instruction from
  `research/growth/_raw/web-lead-slice.md`): the commonly repeated rule of thumb "**100 conversions
  per variant**" / "**1,000 visitors per variant**" is a floor that is only adequate for detecting
  roughly a +50%-or-larger relative effect at a ~10% baseline conversion rate (565 conversions/arm
  needed) — it is nowhere near sufficient for a +20% relative effect (3,532/arm needed at the same
  baseline). The rule circulates with its effect-size qualifier stripped off, which is exactly how
  GuessTheTest's "Basic threshold: 1,000 visitors per variant with 100 conversions minimum" and "Carl
  Weische's standard: 20,000-50,000 users per variant with 1,000+ conversions" can both be presented
  as competing "rules of thumb" in the same article without anyone reconciling them — they are simply
  calibrated to different (unstated) target effect sizes. Similarly, per the lead's pre-verified
  finding, mida.so's public "60,000 visitors per variant" example (2% baseline, 10% relative uplift)
  understates the correct two-sided requirement (76,919/variant) by ~22% because it silently runs the
  test one-sided.
- Kohavi's own reported experience, per GuessTheTest's citation: **across thousands of Bing
  experiments, "only 2 impacted revenue by more than 10%"** — offered as a reason to treat any
  reported double-digit-percent lift with structural skepticism. Kohavi's recommended minimum
  detectable effect (MDE) for most organizations is reported as **2-5%**, with the explicit warning
  that "most underpowered studies show MDEs much higher" than what they're actually capable of
  reliably detecting.
- Rung: 3 (GuessTheTest article, named author, dated, citing Kohavi with attribution) for the
  mechanism and the three concrete tiny-sample case studies; the JCR-2023/arXiv reanalysis sub-claim
  is UNVERIFIED-BY-DIRECT-READ as noted above.

### 3d. Kohavi/CXL/replication-crisis literature — partially covered, budget-constrained

I was unable to directly fetch CXL's "Which Color Converts the Best?" (403 error, did not retry via
curl due to budget) or locate/fetch a direct Kohavi blog post specifically describing "we ran the same
test twice and got opposite results." What I have (§3c) — the winner's curse mechanism, the JCR-2023
button-rounding claim under scrutiny, and Kohavi's Bing-scale "only 2 of thousands of experiments
moved revenue >10%" data point — is the strongest material located on this sub-question in this run.
**Recommend the controller or a follow-up pass fetch CXL's article via curl-with-UA (per the
operational note) and locate Kohavi's "Trustworthy Online Controlled Experiments" book content
directly (already canon-referenced by the controller, §1 of controller-canon.md) for the "results
don't replicate" material** — this is a gap I am flagging rather than papering over.

### 3e. "A/B test everything" vs. what the win-rate data implies for small sites

Not independently re-derived here (out of scope per the charter's note that another worker derives
the sample-size math) — but the structural point from §3c stands as the connective tissue: if
"only 2 of thousands" of experiments at Bing's traffic scale move revenue by double digits, and most
published outsized "wins" trace to underpowered tests per the winner's curse, then the practitioner
advice "A/B test everything" is straightforwardly infeasible for a site that cannot generate the tens
of thousands of conversions per arm needed to detect realistic (single-digit-percent) effects — a
small site that "A/B tests everything" is, definitionally, running underpowered tests and will
predominantly generate winner's-curse-inflated "wins" that are noise.

---

## 4. Pricing experiments

### 4a. Van Westendorp Price Sensitivity Meter — provenance

- ORIGINAL CITATION (verified via multiple converging bibliographic sources, 2026-08-01): **P. H. van
  Westendorp, "NSS Price Sensitivity Meter (PSM) — A New Approach to Study Consumer Perception of
  Prices," Proceedings of the 29th ESOMAR Congress, Venice, 5-9 September 1976, pp. 139-167.**
  (Confirmed independently by Scientific Research Publishing's reference index and cross-referenced
  by multiple pricing-research vendor pages, e.g. Sawtooth Software, Conjointly, XLSTAT — all citing
  the identical ESOMAR 1976 congress proceedings.) Rung 1 for the citation itself (a real, dated,
  named-venue academic/professional-society congress paper), though I did not obtain and read the
  primary 1976 text directly — only its bibliographic record and characterizations of it.
- METHOD AS DESCRIBED: four open-ended price questions ("too cheap," "cheap/good value," "expensive,"
  "too expensive") plotted as cumulative distributions to find intersection points (a "range of
  acceptable prices" and an "indifference price point").
- PUBLISHED CRITIQUES (rung 3-4, practitioner/vendor consensus, not academic peer review):
  - It measures **stated perception, not revealed purchase behavior** — respondents are never asked
    whether they would actually buy at a given price, only whether a price feels too low/high. This is
    a hypothetical-response critique structurally identical to the "guess about future feelings"
    critique of the Sean Ellis survey in §2.
  - It evaluates price **in isolation from competing products** — "a fundamental limitation... it does
    not measure whether customers would actually purchase the product at stated prices" and "assumes
    that customers evaluate price in isolation" (multiple vendor sources converge on this point,
    including Sawtooth Software, which sells the competing method).
  - It **cannot predict volume/demand response** to a price change, only a "comfortable range."
  - Consensus framing across vendor sources (Sawtooth, Conjointly, Symson): PSM "lacks solid
    theoretical foundation and history of predictive success," in contrast with conjoint analysis. Note
    the obvious incentive: most of the sources making this critique are vendors of conjoint-analysis
    tooling, competing with "free" methods like Van Westendorp — **treat this critique itself with the
    same skepticism the charter demands of vendor benchmarks; it is a real methodological point, but
    it is also made almost exclusively by parties selling the alternative.**
- ALTERNATIVE METHODS noted (not deeply researched, flagged for the controller/other workers):
  - **Gabor-Granger method**: directly asks purchase-intent at a sequence of specific prices to find a
    single optimal price point / demand curve, rather than a "comfortable range." Described by every
    source found as more behaviorally grounded than Van Westendorp (asks about purchase intent
    directly) but still evaluates price in isolation and still relies on stated (not revealed)
    intent.
  - **Conjoint analysis**: makes respondents trade off price against other product attributes
    simultaneously, closer to real purchase decisions; described across sources as the more
    defensible/predictive method, at the cost of much higher research complexity/cost.
- Rung: 1 for the original citation's existence and bibliographic identity; 3-4 for all of the
  critique material (practitioner/vendor consensus, not independently verified against a peer-reviewed
  methodological paper in this run).

### 4b. SaaS price A/B testing — ethics and legal notes

**This sub-question was researched thinly given budget — flag as a gap for a follow-up pass rather
than a confident finding.** No dedicated regulatory or consumer-law commentary specifically on SaaS
price A/B testing was directly sourced in this run (I did not spend WebSearch budget on this after
prioritizing the higher-value Sean Ellis/CRO/dark-patterns targets). What is adjacent and directly
sourced: the FTC's dark-patterns enforcement work (§6) explicitly covers "burying key terms and junk
fees" as a targeted category, which is the same regulatory appetite that would apply to undisclosed
differential pricing. **Recommend**: a follow-up search specifically for "algorithmic pricing FTC"
and/or EU Digital Services Act personalized-pricing disclosure requirements, which likely exist and
were simply not reached in this pass.

### 4c. Standard practitioner guidance: test packaging, not raw price; grandfather existing customers

Reported here as **rung-4 folklore-but-near-universal practitioner consensus**, not independently
sourced to a single named authority in this run: the widely repeated guidance across SaaS pricing
practitioners is to A/B test packaging, positioning, and feature bundling rather than showing
identical customers different raw prices for the identical product (which risks both a customer-trust
backlash if discovered and the kind of regulatory attention noted in §4b), and to grandfather existing
customers on price increases rather than force-migrating them. I did not trace this to a single
primary named source with a date in this run — it is genuinely ambient practitioner consensus, and I
am reporting it as such rather than inventing a false attribution.

---

## 5. Retention benchmarks

### 5a. Mobile D1/D7/D30 retention "benchmarks" — mostly UNTRACED or gated

- The often-repeated "**~25-30% D1 retention is average/good for a mobile game**" figure traces (per
  WebSearch characterization, not direct primary fetch) to **AppsFlyer's retention benchmarks report**
  (secondhand-characterized sample: "11 billion app installs across 11,000 apps in Q3 2022," later
  reports claiming "28B+ app installs" and "100K+ apps" scale) and **Adjust's "Gaming apps mid-2023
  trends report."** I did NOT directly fetch either primary report in this run (budget-constrained) —
  **flag both as UNVERIFIED-BY-DIRECT-READ, secondhand via WebSearch summary only.**
- **GameAnalytics** (§1f above) is confirmed gated/not inspectable without lead-gate submission — any
  D1/D7/D30 number attributed to GameAnalytics circulating in blog content should be treated as
  **UNTRACED** until someone opens the actual report.
- SELF-SELECTION for ALL THREE (AppsFlyer, Adjust, GameAnalytics): each report samples only apps that
  integrated that specific vendor's SDK — i.e. apps sophisticated/funded enough to have adopted a
  commercial attribution or analytics SDK. This systematically excludes the smallest, least-resourced,
  most likely to be "amateur"/indie/hobby apps, which likely have different (probably worse)
  retention. None of the three (per what's checkable) publish a comparison of SDK-adopting vs.
  non-adopting apps, so the direction/size of this bias is unknown but the bias itself is structural
  and undeniable — this is exactly the "measures the vendor's customers, not the market" pattern the
  brief asks to flag for every vendor benchmark in this file.
- Overall rung: 3 at best for the specific cited figures (named vendor, dated report), but
  functionally 4 (folklore) for the specific numbers as they circulate in secondary content, since I
  could not verify the primary figures directly in this run.

### 5b. Andrew Chen's retention-curve concepts — separated qualitative claim vs. numeric claim, per brief's instruction

**Qualitative claim (better epistemic standing, source directly verified):** Andrew Chen, X/Twitter,
**dated post 2019-10-15** (per search-surfaced tweet ID, not independently re-fetched from x.com in
this run given budget, but the quote is specific and consistently reproduced): "Magic metrics
indicating a startup probably has product/market fit: 1) cohort retention curves that flatten
(stickiness) 2) actives/reg > 25% (validates TAM) 3) power user curve showing a smile — with a big
concentration of engaged users (you grow out from this strong core)." This is the origin of both the
"flattening curve = good" heuristic AND the "smile curve" phrase. It is explicitly offered as
**Chen's own pattern-matching heuristic from what he has observed as an investor/operator**, not as a
statistic derived from a defined sample — i.e. it is rung 3 (named practitioner, dated) by
construction, and Chen does not claim otherwise.

**Numeric claim (weaker, explicitly hedged by Chen himself):** a separate, later tweet
(**2020-08-12**, per search-surfaced tweet ID): "I need to publish some long-term retention
benchmarks, but generally looking for >30% after a year. You can scale that to the first month, like
60/30/15 for D1/D7/D30 if needed. But very few products I see hit that." **Chen himself flags this as
not-yet-published, informal, and explicitly says few products actually hit the numbers he's citing as
a target** — this is about as honest a rung-3/4 boundary disclosure as folklore gets: a named
practitioner explicitly saying "this is not a rigorous benchmark, most products don't hit it, I
haven't published the real data." Treat the specific "60/30/15" figures as **folklore he
self-disclaims**, not as a benchmark.

### 5c. The "smile curve" — resurrection-artifact caveat

Per the brief's request to source the "smile curve resurrection artifact" critique: what I can confirm
directly is Chen's own framing above, which already describes the smile curve as the **rarest** shape
("power user curve showing a smile... with a big concentration of engaged users") and secondary
sources (Userpilot's cohort-retention content, Gainsight's stickiness guides) characterize it as
occurring when "users who had reduced usage or churned come back because the product has improved" —
i.e. even boosters of the concept describe it as rare and describe the mechanism (win-back/
resurrection campaigns, product improvements bringing back lapsed users) rather than treating a rising
tail as a spontaneous sign of health. **I did not locate a dedicated, separately-authored methodological
critique paper specifically calling the smile curve a "resurrection artifact"** (i.e. an assertion that
the curve rises mainly because of active win-back campaigns rather than organic engagement, so it can
be manufactured rather than reflecting genuine product health) — this specific framing appears to be
my own inference from the surrounding material rather than something I found stated explicitly by a
named source. **Flag as: plausible mechanism, not yet sourced to a named critique — gap for a
follow-up pass.**

### 5d. DAU/MAU stickiness — the "20% is good" line, traced to a dead end

- CLAIM AS REPEATED: DAU/MAU ≈ 20% is commonly cited as "good" for a consumer app, ~50% as
  "exceptional," attributed in circulating content to "Andrew Chen and Facebook's early growth team."
- TRACE ATTEMPTED: WebSearch-surfaced summaries assert the Facebook/Chen attribution as a settled fact,
  but **not one of the surfaced sources cites a specific Facebook blog post, internal document, Chen
  essay, or dated primary statement establishing 20% specifically** — every source repeats the
  20%/50% numbers and the Facebook/Chen attribution as background fact with no citation of its own.
  I did not locate (and did not spend further budget chasing) a primary Chen essay or Facebook
  engineering post that actually states "20%" as a threshold with reasoning.
- **VERDICT: mark this UNTRACED / rung-4 folklore.** The chain I followed: circulating benchmark blog
  posts (ClevertapClevertap, MetricHQ, Gainsight, vmobify, Mixpanel's own "MAU" glossary post,
  usedaymark, kpitree) → all state the 20%/50% figures and the Facebook/Chen origin story → none cite
  a primary source → dead end. This is a clean example of a number that has achieved "everybody knows
  this" status purely through repetition.

---

## 6. Habit / Hook model and ethics critiques

### 6a. Nir Eyal's "Hooked" (2014) — precisely characterizing its evidence base

- WHAT IT IS: Nir Eyal, *Hooked: How to Build Habit-Forming Products* (2014, with Ryan Hoover),
  Wall Street Journal bestseller. The core "Hook Model" (trigger → action → variable reward →
  investment, looping) is explicitly a **practitioner synthesis** — Eyal's own account (per Wikipedia
  and multiple secondary characterizations, not independently verified against Eyal's primary text in
  this run) is that he identified a recurring pattern across "successful" consumer tech products and
  packaged it, drawing explicitly on **B. J. Fogg's Stanford Persuasive Technology Lab** work for the
  "action" component (Fogg's Behavior Model, an actual academic research program) but the book overall
  is case-study/pattern-observation, not a controlled study of its own. **Precision point for the
  skill's ethics table: "Hooked" is not "not research" (Fogg's underlying work has an academic
  research base) but it IS a practitioner's applied synthesis stacked on top of that research, and the
  book itself reports no controlled outcome study showing the four-step Hook Model causally increases
  habit formation versus alternative product designs.**
- Rung: 3 (named practitioner, dated 2014, synthesizing but not independently generating peer-reviewed
  evidence).

### 6b. Eyal's own response to the addiction critique

- Eyal's follow-up book, ***Indistractable*** (2019), is explicitly framed (per multiple secondary
  characterizations, consistent across sources) as his personal and public response to tech-addiction
  criticism — Eyal has stated the distinction he draws is that "Hooked" is about building **habits**,
  not **addiction**, defining addiction as "a persistent, compulsive dependency on a behavior that
  causes harm" and stating "addiction is unethical" / "we would never want to addict people," while
  also conceding that "addiction can be an unfortunate by-product of any product that solves pain" at
  sufficient scale, but insists this should never be the designer's *intent*. **This is Eyal's own
  stated position, sourced from interview/podcast characterizations (Freedom Matters, Young and
  Profiting, etc.), not independently fact-checked against a primary Eyal essay in this run — treat as
  a fair characterization of his public stance, not a verbatim-verified quote.**

### 6c. The persuasive-technology critique lineage — Tristan Harris / Center for Humane Technology

- Notable structural fact, directly sourced: **Tristan Harris and Nir Eyal were both students of the
  same Stanford program (B. J. Fogg's Persuasive Technology Lab)** — i.e. the popularizer of the
  "build habit-forming products" playbook and the most prominent critic of exploitative tech design
  attention-capture came out of the identical academic lineage. Harris went on to co-found the
  **Center for Humane Technology** specifically to raise awareness of the consequences of applying
  these persuasive techniques at scale. This shared-origin fact is a strong, concrete detail for the
  skill's ethics table — it demonstrates the critique isn't external to the practitioner tradition, it's
  a split within it.

### 6d. Mathur et al., "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites" (CSCW 2019) — the strongest primary source in this whole file

- FULL CITATION (verified directly against the paper's own landing page,
  `webtransparency.cs.princeton.edu/dark-patterns/`, fetched 2026-08-01): Arunesh Mathur, Gunes Acar,
  Michael Friedman, Elena Lucherini, Jonathan Mayer, Marshini Chetty, Arvind Narayanan, "Dark Patterns
  at Scale: Findings from a Crawl of 11K Shopping Websites," *Proc. ACM Hum.-Comput. Interact.*, vol.
  1, no. CSCW, ACM, **November 2019**. PDF on arXiv (updated 2019-07-17): arxiv.org/pdf/1907.07032.
- SAMPLE: **~53,000 product pages crawled across ~11,000 shopping websites.** This is a genuine
  large-scale, methodologically described crawl — not a survey, not a vendor sample.
- CONCRETE PREVALENCE NUMBERS: **1,818 total dark-pattern instances found**, spanning **15 distinct
  dark-pattern types**, affecting **11.1% of the ~11,000 sites crawled (1,254 sites)**. Of these,
  **234 instances of specifically "deceptive" dark patterns across 183 websites.** The paper also
  notes that more-popular sites (by Alexa rank) were more likely to feature dark patterns — i.e.
  prevalence is not uniform, it skews toward higher-traffic commercial sites.
- SELF-SELECTION: essentially none in the vendor-benchmark sense — this is an independent academic
  automated crawl of real live e-commerce sites, not a self-reported survey. The main sampling caveat
  is how the 11K "shopping websites" universe itself was assembled (the exact selection criteria for
  the underlying site list were not extracted in the fetched summary — worth a follow-up read of the
  full paper if precision matters).
- INSPECTABLE: **Yes** — full paper on arXiv, peer-reviewed CSCW venue.
- Rung: **2 (peer-reviewed)** — the single strongest, most rigorously sourced datapoint in this
  entire file, and should be treated as the anchor citation for the skill's dark-patterns/ethics
  table.

### 6e. FTC "Bringing Dark Patterns to Light" (staff report, September 2022)

- PUBLISHER/DATE: Federal Trade Commission, Bureau of Consumer Protection staff report, **dated
  September 2022** on the FTC's own report page (fetched directly 2026-08-01,
  `ftc.gov/reports/bringing-dark-patterns-light`; full PDF at
  `ftc.gov/system/files/ftc_gov/pdf/P214800+Dark+Patterns+Report+9.14.2022+-+FINAL.pdf`, 2.07MB, not
  fully extracted in this run — page-level metadata confirmed directly, full-text content
  characterized via a secondary WebSearch summary for the concrete examples below).
- FOUR NAMED TACTIC CATEGORIES (per press materials and secondary legal-commentary summaries,
  consistent across multiple law-firm write-ups of the same report): (1) misleading consumers /
  disguising ads, (2) making subscription cancellation difficult, (3) burying key terms and junk
  fees, (4) tricking consumers into oversharing data.
  Contexts named: e-commerce, cookie-consent banners, children's apps, subscription sales.
- CONCRETE ENFORCEMENT EXAMPLE tied to this report's regulatory momentum: **FTC v. Vonage,
  November 2022 — $100 million returned to customers** the FTC alleged were trapped by dark
  patterns/junk fees when trying to cancel service; Vonage required to simplify cancellation. (This is
  an enforcement action contemporaneous with, not literally contained inside, the September 2022
  report — noted as a companion data point, not conflated with the report's own content.)
- INSPECTABLE: Yes, the PDF is public and downloadable — I confirmed its existence and metadata
  directly but did not extract its full internal text in this run (budget-constrained); the "four
  tactic categories" and Vonage example above rest on a WebSearch summary of the report, not a
  direct full-text read. **Flag as: publisher/date/existence VERIFIED DIRECTLY; specific content
  characterization SECONDHAND, worth a direct full-text pass before the skill cites specific line
  items from it.**
- Rung: 1 (primary government regulatory report) for its existence, date, and top-line framing;
  content details currently rung "secondhand of a primary."

### 6f. EU DSA — not reached

Not researched in this pass (budget-constrained, deprioritized in favor of the FTC report and the
peer-reviewed Mathur paper, which were higher-value finds). **Gap flagged for a follow-up pass**: EU
Digital Services Act Article 25 (dark-patterns/deceptive-design prohibition for online platforms) is
the obvious complement to the FTC material and was not sourced here.

---

## 7. Growth-vs-operate disposition — instances collected while researching

Per the charter's special question, concrete instances hit while researching this file where the
growth/operate seam is visible:

1. **Feature-flag infrastructure underlying PLG "growth levers."** OpenView's reports (§1a) repeatedly
   frame "product-led sales" tooling (PQL scoring, in-product prompts, free-to-paid nudges) as growth
   territory — these are experiments (learning: does showing this nudge to this cohort change
   conversion?) built on the same flagging/targeting infrastructure that operate would use to do a
   canary rollout of a new checkout flow. Same infra (audience targeting + flag evaluation), opposite
   intent: growth is asking "does this variant convert better," operate is asking "did this variant
   break anything." A PLG in-product nudge that is A/B tested = growth; the SAME nudge infrastructure
   used to gradually roll out a UI change to avoid a broken release = operate.
2. **Retention/DAU-MAU dashboards (§5) sit ambiguously.** A retention cohort curve used to evaluate
   "did our latest onboarding-flow experiment change week-1 retention" is a growth artifact (causal
   learning question). The identical DAU/MAU dashboard, watched as a live health metric to catch a
   regression after a deploy (e.g., "DAU dropped 40% right after last night's release, something's
   broken"), is an operate/observability artifact. The dashboard technology is identical; the question
   being asked of it is what determines the discipline.
3. **A/B testing platforms' "kill switch" behavior is explicitly dual-use.** Several vendor docs
   encountered in passing (not deep-researched here, likely covered more fully by the C/GitHub
   channel) describe the ability to instantly disable a variant/experiment as serving both a growth
   purpose (stop a losing variant, a learning decision) and an operate purpose (stop a variant that is
   throwing errors or degrading performance, a risk-containment decision) — the SAME "kill this
   variant" button in an experimentation platform's UI can be pressed for either reason, and the
   platform itself doesn't distinguish intent.
4. **Subscription-cancellation dark patterns (§6e) sit at a genuine seam with legal/compliance,
   arguably neither growth nor operate cleanly** — the FTC's targeting of "hard to cancel" flows is a
   product/growth decision (retention tactics) with operate-adjacent implementation (the cancellation
   flow is part of the live system, its uptime/correctness is operate's concern) and legal-risk
   implications that the growth-skill's ethics table should flag but that live squarely outside
   growth's causal-learning core mission.

---

## (a) Falsification strips

| Claim | Independent evidence class 1 | Independent evidence class 2 | Independent evidence class 3 |
|---|---|---|---|
| "The Sean Ellis 40% test predicts product-market fit" | **Practitioner admission**: MeasuringU (Lewis & Sauro, 2022-03-15) — "little compelling evidence to support its promotion for use in practice," threshold "based on the intuition of its originator" | **Arithmetic**: at realistic survey sizes (n=50) the 95% CI on a 40% estimate spans ~27-53% — the number is too noisy at the sample sizes most practitioners actually collect to know which side of the threshold they're on | **Named-practitioner false-positive case**: Kromatic/StartupSquare — a startup scored >40% and still lacked real PMF ("Problem/Solution Fit, but not Product/Market Fit") |
| "Red beat green by 21%" (Performable/HubSpot button case study) is evidence that a color choice drives conversion | **Missing-denominator/no-replication critique** (this file, §3a): ~2,000 visits, single run, no disclosed stopping rule, zero known replications in 15 years | **Arithmetic (winner's curse, GuessTheTest/Kohavi, §3c)**: results this large at samples this small are the profile underpowered tests systematically produce — the "21%" is exactly the kind of number the winner's curse predicts will be inflated, whether or not a true effect exists at all | **Family cross-reference**: marketing-skill already ruled color-to-emotion mapping folklore (`landing-pages-and-conversion.md §8`) — the mechanism this case study is usually cited to support is separately unsupported |
| "100 conversions per variant" / "1,000 visitors per variant" is a sufficient A/B test sample-size rule | **Arithmetic** (pre-verified by grw-web lead slice): only adequate for ≥~50% relative effects at a 10% baseline (565/arm); a 20% relative effect needs 3,532/arm — the rule is silently calibrated to huge effects only | **Practitioner inconsistency**: GuessTheTest reports competing "standards" in the same space (1,000/100 vs. Carl Weische's 20,000-50,000/1,000+) with no reconciliation, because each is implicitly tuned to a different unstated MDE | **Vendor self-contradiction** (per lead slice, not re-derived here): mida.so's own "60,000 visitors/variant" worked example understates the correct two-sided figure (76,919) by ~22% via an undisclosed one-sided test |
| Vendor PLG benchmarks (OpenView, ProductLed, ChartMogul, AppsFlyer/Adjust/GameAnalytics) describe "the market" | **Self-selection admission by the publisher itself**: OpenView's own footnote states some benchmarked companies are its own VC portfolio | **Structural sampling bias**: mobile-retention vendors (AppsFlyer/Adjust/GameAnalytics) sample only apps that adopted THAT vendor's SDK — excludes the least-resourced apps by construction | **Citation-laundering**: ChartMogul's 2026 report and Kyle Poyar's "Growth Unhinged" newsletter are the SAME survey (200 products, Jan 2026) republished under two brands, showing how few truly independent samples underlie the whole genre |
| "Hooked"'s Hook Model shows how to ethically build engaging products | **Peer-reviewed prevalence data** (Mathur et al., CSCW 2019): 11.1% of 11,000 real e-commerce sites independently crawled had at least one dark pattern, 1,818 total instances across 15 types — the underlying persuasive-technology toolkit is empirically shown to be misused at real, measurable scale, not just theoretically risky | **Primary regulatory finding**: FTC's September 2022 staff report names four concrete misuse categories (deceptive ads, hard-to-cancel subscriptions, buried fees, data-sharing tricks) and the FTC has since brought enforcement (Vonage, $100M, Nov 2022) | **Insider lineage admission**: the model's popularizer (Eyal) and its most prominent critic (Harris) both trained under the same Stanford persuasive-technology program — the ethics dispute is a split within the practitioner tradition itself, not an outside academic objection to it |

## (b) Never-ship candidates

| Number | Source | Date | Why volatile/undenominated |
|---|---|---|---|
| "PQL tracking increased likelihood of fast growth by 61%" | OpenView 2023 Product Benchmarks | 2023 | Correlational cross-sectional self-reported survey (1,000 respondents, some are OV's own portfolio companies) presented with causal-sounding language; no methodology, no raw data, gated PDF |
| "Only 5% of freemium signups convert to paid" | OpenView 2022 Product Benchmarks | 2022 | Self-selected 450+ respondent survey, no sampling frame, portfolio-company contamination disclosed by the publisher itself |
| "600+ SaaS businesses surveyed" → 58%/91%/47%/9%/12%/25%/30-39%/34%/24-25% (ProductLed) | ProductLed (Wes Bush) | 2025-02-05 | Zero disclosed recruitment method, zero response rate, high apparent precision across 9 different figures with no methodology section at all |
| "Red button beat green button by 21%" | Performable/HubSpot | ~2010-2011 (original undated in any source I could fetch) | ~2,000 visits, single company, single run, no stopping-rule disclosure, no known replication in 15 years |
| "$300 million button" | Jared Spool/UIE | Originally 2009-01-14, republished 2015-10-27 | Company never named, no public financials tie the figure to anything checkable, no baseline revenue, sole-source unverifiable client anecdote |
| Mixpanel "week-one retention fell from 50% to 28%" | Mixpanel 2024 Benchmarks Report | 2024 | Not independently fetched from the primary source in this run — currently resting on a WebSearch summary only; re-verify before shipping |
| GameAnalytics D1/D7/D30 retention figures circulating in secondary blogs | Attributed to GameAnalytics | Various (2023-2026 in secondary posts) | The actual GameAnalytics report is lead-gated; I could not access even the sample size or methodology on the public page — every specific number attributed to it in circulation is UNTRACED |
| AppsFlyer/Adjust mobile D1 retention "~25-30%" | AppsFlyer / Adjust | 2022-2023 (secondhand dating) | Not directly fetched in this run; sample only covers apps that integrated that vendor's SDK, systematically excluding least-resourced apps; figures here are WebSearch-summary secondhand |
| "20% DAU/MAU is good, 50% is exceptional," attributed to Facebook/Andrew Chen | Circulating widely, no primary source located | Undated | Every source repeats the number and the attribution; none cites a primary Facebook or Chen statement establishing it — UNTRACED, see §5d |
| Sean Ellis "nearly 100 startups" | Sean Ellis, via secondary sources only | Originally ~2009 (unverified) | No company list, no year range, no methodology ever located; even the sample size is inconsistently reported as "nearly 100" vs. "hundreds" across sources repeating the same claim |

## (c) Rung-4 folklore inventory

| Claim | Citation chain followed | Where it dead-ended |
|---|---|---|
| "40% 'very disappointed' predicts product-market fit, based on nearly 100 startups" | Sean Ellis's own current archive (startup-marketing.com, fetched directly) → dead end (no visible original post, redirects to Substack) → ~10 SEO listicle sites, all repeating "Sean Ellis says" with no dataset → GrowthHackers.com Medium republication (found via search, not directly fetched) | No primary dataset, company list, or methodology document located anywhere |
| "20% DAU/MAU is good, 50% is exceptional" (Facebook/Andrew Chen origin) | ~8 SaaS-metrics-vendor blog posts (Clevertap, MetricHQ, Gainsight, vmobify, Mixpanel glossary, usedaymark, kpitree, digitalheroesco) all state the figures and the Facebook/Chen attribution | None cites a primary Facebook document or dated Chen essay establishing the 20% figure specifically |
| "Standout GameAnalytics D1 retention benchmark is X%" (various X circulate) | Attempted direct fetch of gameanalytics.com/benchmarks/ | Page discloses no sample size, no methodology, no actual figures — gated behind a report download; any number in circulation traces to someone else's read of the gated PDF, unverifiable here |
| "The smile curve is a resurrection artifact, not organic health" | My own inference from Chen's "rarest shape" framing + secondary retention-content descriptions of win-back mechanisms | No single named source stating this critique explicitly as a critique was located — flagged as an unsourced inference, not a finding |
| "Test packaging/positioning, not raw price; always grandfather existing customers on price increases" | Ambient practitioner consensus across the pricing-research vendor pages fetched for §4 | No single primary named source with a date; genuinely diffuse practitioner folklore, reported as such |
| "SaaS free-to-paid conversion is 2-5%" (a figure that predates and differs from the 2026 ChartMogul/Poyar 8% median) | Referenced only implicitly via search-summary framing during this run, not independently traced to a specific dated OpenView/other source | Not run to ground in this pass — flagged as a likely-older folklore figure worth a dedicated trace in a follow-up, since it circulates alongside but is inconsistent with this file's directly-verified 2026 figures |

---

## Methodology note / budget accounting

WebSearch calls used: 20/20 (full budget spent — see below for why this was the right trade). Given
the charter's instruction to "prefer WebFetch of known URLs," most of the actual evidentiary weight in
this file came from direct WebFetch/curl reads of primary or near-primary pages (OpenView's three live
report editions, the Mathur et al. paper landing page, the FTC report page, MeasuringU, Kromatic,
GuessTheTest, ChartMogul, ProductLed, Growth Unhinged, Jared Spool's Medium republication) rather than
from WebSearch summaries. WebSearch was reserved for (a) locating URLs I could not guess (Sean Ellis
critiques, Van Westendorp's exact ESOMAR citation, the winner's-curse/Kohavi material, Andrew Chen's
tweets, retention-benchmark vendor identification) and (b) a handful of items where I ran out of
budget before I could convert a WebSearch-surfaced claim into a direct WebFetch verification —
those are explicitly flagged inline above as "UNVERIFIED-BY-DIRECT-FETCH" / "secondhand" and should
not be treated as equivalent in confidence to the directly-fetched material. Known gaps for a
follow-up pass, in priority order: (1) direct full-text read of the FTC PDF and the Kohavi/arXiv
button-rounding reanalysis; (2) direct fetch of Mixpanel's own 2024 report page; (3) direct fetch of
AppsFlyer's and Adjust's own retention report pages; (4) SaaS price-discrimination legal/regulatory
commentary (§4b), essentially unresearched; (5) EU DSA Article 25 dark-patterns text (§6f), not
reached at all.
