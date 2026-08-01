# X/Twitter deep research — small-sample reality + CRO discourse + folklore

Worker: B3 (grw-x sub-orchestrator, channel B). Territory: small-sample honesty, CRO practitioners
and skeptics, folklore specimens. Tool: xrelay. WebSearch used: 2 calls (handle resolution only,
budget was ≤8). Written under an explicit STOP-SWEEPING-AND-WRITE directive from grw-x issued
mid-run because the search endpoint had degraded session-wide — see §7 for exactly what that cost.

All dates ISO (converted from X's native `%a %b %d %H:%M:%S %z %Y` format). All post IDs verified
present in the raw JSON captured this run (scratchpad: `.../scratchpad/b3/`). "Current date" in this
research environment is 2026-08-01 — several cited posts (e.g. levelsio's Aug 2026 revenue posts)
are near-future relative to a 2026 model but are genuine captures from the live X session.

---

## 1. Handle roster

Every handle probed this run, with follower count / verified / alive-dead / signal verdict.

| Handle | Followers | Verified | Status | Bio (truncated) | Signal verdict |
|---|---|---|---|---|---|
| @levelsio | 925,941 | yes | alive, very active | "$89K/m 📸 / $44K/m 🎮 / $27K/m 🏡 / $17K/m 👙 @X" | **HIGH** — canonical indie-hacker voice, does have real (if inconsistent) A/B-testing history, posts real revenue numbers weekly |
| @marc_louvion | — | — | **WRONG HANDLE** (data:null) | — | correct handle is `@marclou` |
| @marclou | 367,581 | yes | alive, very active | "$44K/m ⭐️ / $26K/m 📈 / $13K/m 🏴‍☠️ / $6K/m 🧑‍💻" (ShipFast/DataFast) | **HIGH** — pricing-tactic folklore generator, self-reported product numbers |
| @dannypostmaa | — | — | **WRONG HANDLE** (data:null) | — | correct handle is `@dannypostma` (one 'a') |
| @dannypostma | 177,737 | yes | alive | "Founder of HeadshotPro, a Singapore-based AI photography company" | not swept for posts this run (gap, see §7) |
| @tdinh_me | 195,646 | yes | alive | "Creating software I love to use. 🧠 $137K/m 🧰 $5K/m" (Typing Mind / Black Magic) | **HIGH** — multi-year churn/MRR ledger, real small-N noise |
| @arvidkahl | 204,889 | yes | alive | "Building [PodScan] and [FeedHive] in Public" (The Bootstrapped Founder) | **MEDIUM-HIGH** — PPP-pricing self-reports, pricing-experiment methodology opinions |
| @jonyifan | — | — | **WRONG/DEAD HANDLE** (data:null) | — | brief-listed handle does not resolve; not re-searched (budget triage) |
| @damengchen | — | — | **WRONG/DEAD HANDLE** (data:null) | — | same |
| @yongfook | 166,299 | yes | alive | "🐻 image generation. Bootstrapping SaaS @ $81K MRR" | not swept for posts this run (gap) |
| @agazdecki | 312,659 | yes | alive | "Founder/CEO @acquiredotcom" | not swept for posts (gap; lower priority — M&A, not CRO) |
| @csallen | 69,987 | yes | alive | "Founder of @IndieHackers" | not swept for posts (gap) |
| @patio11 | 196,903 | yes | alive, very active | "I work for the Internet and am an advisor to @stripe" | **VERY HIGH** — 30+ A/B-test-related tweets 2009–2025 captured, genuine pricing/testing authority |
| @jasonfried | 3,827,358 | yes | alive | "Started & runs 37signals" | not swept for posts (gap) |
| @dhh | 778,151 | yes | alive | "Creator of Ruby on Rails… Co-owner & CTO of 37signals" | not swept for posts (gap) |
| @peeplaja | 47,106 | yes | alive | "CEO @wynter_com. Founder @cxldotcom @speero_agency" | **VERY HIGH** — the single best debunker found this run; explicit sample-size mythbusting with numbers |
| @OptimiseOrDie | 15,390 | **no** (unverified) | alive but thin recent activity | "Conversion Optimisation, Usability, Split Testing, Lean, Agile…" (Craig Sullivan) | **THIN THIS RUN** — only 1 old (2015) tweet surfaced via `from:` query; reputation as a debunker not independently verified with fresh posts (gap, see §7) |
| @web_analyst | 3 | no | alive but **NOT Georgi Georgiev** | empty bio, "Jose" | **WRONG HANDLE** — this is an unrelated low-follower account; correct handle below |
| @georgizgeorgiev | 308 | — | alive | "Author of 'Statistical Methods in Online A/B Testing'. Applied statistician behind [Analytics-Toolkit]" | **MEDIUM** — confirmed real (resolved via WebSearch), only 1 relevant tweet surfaced (Frequentist vs Bayesian / peeking), low follower count is notable given his book's reputation |
| @jlinowski | 5,892 | yes | alive | "UI designer… @wireframes" (Jakub Linowski, GoodUI) | **HIGH** — 14 relevant tweets on published test results, "predict-before-you-test" methodology, a debunking of the leaked-Netflix-homepage-experiment folklore |
| @tonwesseling | 30 | — | **effectively dead/abandoned** | "Twittering at @tonw" | account redirects elsewhere; not pursued further (out of budget) |
| Ton Anderson / Andrew Anderson (CRO) | — | — | **not resolved** | — | no working handle found within budget; gap |
| Momoko Price | — | — | **not attempted** | — | gap, budget triage (see §7) |

---

## 2. Indie/solo reality — self-reported numbers ledger

Format: number · who · date · URL · N stated? · context.

| Number | Who | Date | URL | N stated? | Context |
|---|---|---|---|---|---|
| **@X revenue $21,547/mo** ($7,032+$6,474 ad-rev-share, $1,350 subs, $4,406 book, $957 merch) | @levelsio | 2026-08-01 | https://x.com/levelsio/status/2083548676593439014 | No (raw dollar figures, no visitor/conversion counts) | "[self-reported]" monthly revenue breakdown, posted as a running series — highest X payout since Jan 2026 |
| **@X revenue $15,745/mo** ($6,740+$6,474 ad rev share, $1,240 subs) + merch $2,230 + book $4,821 = ~$23,000/mo non-primary-biz revenue | @levelsio | 2026-07-18 | https://x.com/levelsio/status/2078508215013126270 | No | Same series, two weeks earlier — shows month-to-month volatility of ~37% even for a mature revenue stream (a small-sample-noise specimen in its own right) |
| **Bootstrapped founder revenue distribution**: 51% $0 (pre-revenue) · 35% <$1K · 10% $1K–10K · 3% $10K–100K · 0.4% $100K+ | @levelsio (crediting @xakpc + @marclou) | 2026-07-19 | https://x.com/levelsio/status/2078837142097158513 | Not stated in the tweet — **UNTRACED**, aggregator/source survey not identified this run | Widely-repeated "most indie founders make nothing" stat; flag for controller as needing primary-source trace before shipping — self-reported-adjacent but two hops removed from any named survey |
| **A/B test: sign-up modal auto-shown after 30s converts 147% better, "in this sample 2.5x more sign-ups"** | @levelsio | 2020-07-05 | https://x.com/levelsio/status/1279788087678324736 | Partially — he explicitly qualifies "in this sample," no absolute N given | **[self-reported, small-N, self-aware]** — copied the tactic from Airbnb; this is close to the ideal specimen for the small-sample wedge: a real test, a real lift, an explicit "this is a sample" caveat, no denominator |
| **A/B test: red "Impact" letters button change → "+0.0001% revenue, but after 2 years everyone hates you"** | @levelsio | 2017-09-05 | https://x.com/levelsio/status/904862318068203520 | No absolute N; effect size stated as vanishingly small | **[self-reported]** Dutch-language aside — a rare example of an operator reporting a *near-zero* lift honestly instead of inflating it, plus a qualitative cost (user annoyance) that a pure-conversion metric would miss |
| **A/B test: 6-month "set it and forget it," CC-upfront trial signups +51%, "99% confidence"** | @patio11 | 2014-11-04 | https://x.com/patio11/status/529562319827656704 | Duration given (6 months), no visitor/conversion count | **[self-reported]** — good specimen of a *disciplined* small-operator test: pre-committed duration, explicit confidence claim, "happy dance" tone signals this was a real surprise, not routine |
| **2-character A/B test → sales +50%** (Stripe-related) | @patio11 | 2012-08-06 | https://x.com/patio11/status/232511758613508096 | No | **[self-reported]** — no N; classic "tiny-change-huge-lift" claim from an unusually credible source; still needs the denominator to be non-folklore |
| **Server Density pricing-structure change → revenue doubled "in an A/B test"** | @patio11 (about a client) | 2012-08-13 | https://x.com/patio11/status/235041533584363520 | No | **[practitioner-opinion / secondhand]** — patio11 reporting a client result, not his own; no methodology detail in the tweet itself |
| **Stripe Checkout implementation → "rough evidence" of increased sales; "couldn't A/B test it because I had to change a lot of code… take with grain of salt"** | @levelsio | 2021-04-05 | https://x.com/levelsio/status/1379182671360839682 | No | **This is the single cleanest small-sample-honesty specimen found this run.** Explicit acknowledgment that a controlled test wasn't possible given the change size, and an explicit epistemic downgrade ("grain of salt") rather than an inflated causal claim |
| **Popcorn Pricing anecdote: LandingAI LTV "doubled… in literally 10 minutes"** (before: $19 flat; after: $19/$39/$59 tiers) | @marclou | 2023-06-11 | https://x.com/marclou/status/1667885896514035714 | No, no time window for "doubled" | **[self-reported, folklore-adjacent]** — anecdote, not a controlled test; presented as near-instant causality from a pricing-tier change |
| **ShipFast monthly revenue series**: $38K Sep · $44K Oct · $60K Nov · $51K Dec · $50K Jan · $39K Feb · $75K Mar — used to argue "revenue is about product & marketing, not pricing" | @marclou | 2024-04-03 | https://x.com/marclou/status/1775542527996948663 | No | **[self-reported]** — the swing from $38K to $75K (≈2x) across 7 months on a fixed one-time-payment product is itself a small-N-noise illustration; the causal claim ("not pricing") is not isolated from anything else that changed those months |
| **"Scroll depth funnels showed me 70% of visitors never even saw my pricing"** | @marclou | 2025-09-10 | https://x.com/marclou/status/1965757431579050461 | No visitor count given | **[self-reported, measured]** — a real instrumentation finding (own product, own funnel), presented as a general insight; no N, no time window |
| **Subscription-vs-one-time math**: 100 customers, 10% monthly churn → "$7,176 with subscriptions after 365 days" vs "$10,000 with one-time payments, right now" | @marclou | 2024-10-16 | https://x.com/marclou/status/1846481970274168929 | Model/math, not observed data (N=100 is illustrative, not measured) | **[practitioner-opinion, modeled not measured]** — worth flagging separately from the self-reported-numbers ledger: this is arithmetic, not an experiment result, but presented with the same rhetorical confidence as one |
| **Churn ledger, multi-month**: "$912 new MRR, but $568 churn" (Feb 2022) · "Just lost ~$600 MRR from a business account churn" (Nov 2022) · "0% churn rate (no new MRR because I moved all new customers to Stripe)" (Nov 2024, an **artifact**, not a real retention win) | @tdinh_me | 2022-03-01 / 2022-11-01 / 2024-11-19 | https://x.com/tdinh_me/status/1498628942227406852 · https://x.com/tdinh_me/status/1587316503652671488 · https://x.com/tdinh_me/status/1858830512141595074 | Absolute dollar MRR given each time, no customer count | **[self-reported, measured]** — this ledger is the best "small-N noise is the norm, not the exception" specimen in the whole corpus: one bad account leaving swings the month; a "0% churn" headline turns out to be a data-migration artifact, not a retention signal — exactly the kind of misleading single-number result the small-sample wedge exists to warn about |
| **"I woke up to 15 sales that happened while I sleep… Turning on Purchasing Power Parity Pricing seems to have been a very good move, judging from sales and the comments"** | @arvidkahl | 2022-02-12 | https://x.com/arvidkahl/status/1492495795714678787 | No (15 sales, no baseline/control given) | **[self-reported, no control group]** — textbook attribution-without-counterfactual: a good morning is attributed to a pricing change with no before/after comparison window stated |
| **"That's the one thing I've always found complicated about running pricing experiments on any SaaS… it becomes almost a reputational issue"** | @arvidkahl | 2026-04-22 | https://x.com/arvidkahl/status/2046993183846891572 | N/A — methodology opinion | **[practitioner-opinion]** — names a real constraint the canon rarely discusses: pricing experiments are visible to existing customers in a way UI experiments aren't, so the "just A/B test your price" advice has a social cost the literature usually ignores |

---

## 3. The "I don't A/B test" / "just ship" discourse — both sides

**Direct-quote finding, corrects the wedge hypothesis as literally stated in the charter:**
@levelsio's own historical record does **not** support a clean "I don't A/B test, I just ship" reading.
The actual 2017 quote is more interesting than the folklore version:

> "@mediaquery I don't A/B test, but just test" — @levelsio, 2017-09-02, https://x.com/levelsio/status/904050781426462720

Read in context with his other testing tweets, this is **not** an anti-experimentation stance — it's a
*semantic* point (he does compare variants informally; he just doesn't run the two variants
simultaneously with a formal split). Supporting evidence he DOES test, informally and at small N:

- "I do quick A/B test of tweets to see which performs better" — 2021-11-20,
  https://x.com/levelsio/status/1462054634722246662
- "I'll go split test everything from $9 to $16 now, will report back" — 2014-10-10,
  https://x.com/levelsio/status/520511384665092096
- "just try different variations and A/B test everything, you can DIY" (advice to another founder) —
  2014-12-14, https://x.com/levelsio/status/544020119404285952
- The 30-second-modal test (§2) and the Impact-letters test (§2) are both real, if informal, split
  tests he ran and reported honestly, including a near-zero-lift result.

**Reframe for the controller:** the folklore version of "levelsio doesn't A/B test" is itself a piece of
folklore — the primary record shows an operator who tests constantly but informally, at small N,
without fixed horizons or pre-registered stopping rules, and who is unusually honest about
uncertainty ("take with grain of salt," "in this sample"). That is arguably a *better* small-sample
wedge story than the "doesn't test at all" caricature: it's evidence for "sequential, low-ceremony,
self-aware small-N testing is what solo operators actually do," not "solo operators skip testing
entirely."

**patio11's side — pro-testing, with real numbers and real caveats:**
patio11 is not a "don't test" voice at all — he has a decade-plus record of advocating for lightweight
A/B testing at small scale:
- "Q: What should I A/B test? A: Core value proposition. Immediacy. Offer. Prominent elements of
  funnel, including buttons/forms/etc." — 2011-08-24, https://x.com/patio11/status/106326708952633344
- "Kill a page element for an A/B test. If it doesn't hurt and you don't hear negative feedback, it
  didn't need to exist." — 2014-04-17, https://x.com/patio11/status/456873838891266048
- "Create a recurring reminder to run a pricing test every 6 months." — #microconf, 2017-04-12,
  https://x.com/patio11/status/852241883740778496
- "Easiest pricing test: either hide your cheapest tier or, if you've got a single price, double it." —
  #microconf, 2017-04-12, https://x.com/patio11/status/852242210518999040
- Guardrail-style caution: "That feeling where you have an A/B test that appears to be killing it...
  and then realize the conversion tracking code was not on." — 2013-08-07,
  https://x.com/patio11/status/365026639458996224 (an SRM-adjacent instrumentation-failure joke,
  not academic SRM, but the same underlying validity concern)

**Gap:** I did not find, this run, a *named opponent* arguing explicitly "you don't have enough
traffic to A/B test" as a general rule aimed at small operators (the strong form of the wedge claim).
What I found instead is a milder, more textured reality: informal small-N testing is normal and
accepted among indie operators; nobody in this sample argued against testing outright, they argued
for testing *cheaply, briefly, and skeptically*. This nuance is itself a finding — the wedge as
charter-stated ("most readers can't power a fixed-horizon t-test") is confirmed by patio11's own
"pricing test every 6 months" cadence advice, which implicitly assumes short/cheap tests, not
long fixed-horizon ones.

---

## 4. Small-sample methodology — what people at low traffic actually do instead of formal A/B tests

Synthesized from the patio11 and levelsio corpora (this is inference from many small data points,
not one canonical source — treat as **[practitioner-opinion, aggregated by this worker]**):

1. **Big, cheap, reversible changes over small controlled ones.** patio11's "double your single price"
   / "hide your cheapest tier" heuristics are designed to produce effects large enough to be visible
   without formal power analysis — the MDE is engineered to be huge, which is the correct response
   to an underpowered small sample (echoes Peep Laja's mockery in §5 of the inverse folklore claim).
2. **Pre-committed duration instead of pre-committed sample size.** patio11's "set it and forget it…
   for 6 months" (§2) and "run a pricing test every 6 months" cadence advice are calendar-based
   stopping rules, not statistical ones — a pragmatic substitute for a formal power calculation when
   you don't have the traffic to hit a target N in a reasonable time.
3. **Sequential, informal, self-reported "did it feel different" testing.** levelsio's tweet-performance
   "quick A/B tests" and his explicit "grain of salt" framing when he *couldn't* run a real split test
   (§2, Stripe Checkout) show an operator substituting honest uncertainty-labeling for statistical
   rigor when rigor isn't affordable.
4. **Instrumentation-before-inference.** marclou's scroll-depth-funnel finding (§2) is a case of using
   funnel analysis (not a controlled experiment) to generate an actionable finding at small scale —
   "70% never saw pricing" is decision-useful without any hypothesis test.
5. **Named gap:** none of the corpus mentions quasi-experimental methods (pre/post with guardrails,
   synthetic control, geo-experiments) by name. The small-operator toolkit found here is entirely
   informal/heuristic, not "the honest n=small toolkit" the charter hypothesizes (bigger bets,
   pre-committed decision rules, quasi-experiments) — it's closer to "run it, eyeball it, be honest
   about the caveat when you post about it." **This is itself a finding for the controller**: the
   quasi-experimental small-N toolkit may be under-discussed even among the practitioners who'd
   benefit from it most, which strengthens rather than weakens the wedge's premise that there's a
   teaching gap.

---

## 5. CRO practitioners — methodology, sample-size rules of thumb, when-not-to-test

**Peep Laja (@peeplaja) — the standout find of this run, both a CRO authority and an active debunker:**

- **"Article title: you don't need large sample sizes for A/B tests. Content: just get huge lifts and
  hence need less sample size. Man, and all these years I've been after those tiny lifts and huge
  sample sizes. Should have gone for huge lifts instead! Feel so stupid now"** — 2021-08-30,
  https://x.com/peeplaja/status/1432319998740029442. **[practitioner-opinion, debunking]** — sarcastic
  takedown of a folklore article claiming you can shrink required sample size by simply demanding
  bigger lifts (which inverts the actual causality: you don't get to choose your lift size). The
  target article itself was not captured this run (a gap — worth a follow-up fetch), but the rebuttal
  stands alone as a citable debunking.
- **"@WhichTestWon features a test with a sample size of 425(!) visitors"** — 2015-02-04,
  https://x.com/peeplaja/status/563018107930050560. **[practitioner-opinion, debunking, named target]**
  — a direct callout of a well-known CRO case-study outlet (WhichTestWon) for publishing a "winning"
  test built on a laughably small (425-visitor) sample. This is exactly the "named debunker + named
  target" pairing the brief asks for, though the specific WhichTestWon test itself wasn't traced to
  its original case study this run.
- **Qualitative-research sample-size myth, stated twice with real numbers**: "The big sample size part
  is a myth… Instead of stat significance the methodological principle used is 'saturation.' … it
  takes 12-13 responses to reach saturation… A review of 23 peer-reviewed articles suggests that 9–17
  participants can be sufficient" — 2023-09-28, https://x.com/peeplaja/status/1707357449252897150,
  and restated 2023-08-21, https://x.com/peeplaja/status/1693662135967007083. **[practitioner-opinion,
  citing a literature review]** — this is Laja's explicit "when NOT to demand a quant-sized sample"
  guidance: for qualitative customer research, small N (9–17) is methodologically correct, not a
  compromise. He cites "a review of 23 peer-reviewed articles" but does not name it — **UNTRACED**,
  flag before shipping if this number is used.
- **B2B survey methodology, real client example with real cost figures**: brand-awareness survey via
  Wynter, "100 respondents," "±9.8% margin of error at 95% confidence," client quoted "100k–240k and 6
  months" by traditional B2B research agencies vs. "~$10k" and "2 days" via Wynter (his own company) —
  2025-02-26, https://x.com/peeplaja/status/1894815590860169388. **[practitioner-opinion, vendor-
  interested]** — flag the vendor conflict of interest (he's marketing his own product, Wynter) even
  though the statistical reasoning (MoE math, population-size vs. representativeness) is sound and
  citable independent of the pitch.
- Sample-size calculator (aggregating "5 different calculators… into one"), a concrete artifact for
  the "what tools do practitioners actually use" question — 2018-07-05,
  https://x.com/peeplaja/status/1014829725104201730.
- Cites the psychology replication crisis approvingly as validation for stricter A/B-test rigor
  (pre-registration, bigger samples) — 2018-12-07, https://x.com/peeplaja/status/1071052039885602816.

**Georgi Georgiev (@georgizgeorgiev, Analytics-Toolkit, author of "Statistical Methods in Online A/B
Testing"):** only one relevant post surfaced this run — "'Frequentist vs Bayesian Inference' part 3! Do
Bayesian methods tell you what you REALLY want to know? Are they delivering results faster with
immunity to peeking?" — 2020-02-28, https://x.com/georgizgeorgiev/status/1233307701452660736.
**[practitioner-opinion]** — confirms he engages the peeking/Bayesian-vs-frequentist debate publicly,
consistent with his book's reputation, but this run did not surface enough of his timeline to extract
a real sample-size rule of thumb from him directly — **gap, worth a dedicated `user-posts` sweep**.

**Craig Sullivan (@OptimiseOrDie):** only one old (2015) tweet surfaced — "Guide rails for the
unwary/newbie (sample size, conf limit, only show above x% lift)" — 2015-01-23,
https://x.com/OptimiseOrDie/status/558615018322010112. **[practitioner-opinion, thin]** — confirms he
talks about sample-size/confidence-limit guardrails for CRO newbies, but this is far too thin a
sample to represent someone the brief flags as "a long-time loud debunker of bad testing." **Explicit
gap — his reputation as a debunker is asserted by the brief, not independently demonstrated by this
run's evidence.**

**Jakub Linowski / GoodUI (@jlinowski):**
- **"Remember that leaked Netflix Homepage experiment from last week? It turns out that their
  decision to keep the A version is completely in line with 2 evidence-based patterns we have test
  results on."** — 2019-02-22, https://x.com/jlinowski/status/1098991042119065602. **[practitioner-
  opinion, ties a real company experiment to a published pattern library]** — the "leaked Netflix
  homepage experiment" reference itself was not traced to a primary source this run (gap).
- **"Does anyone else predict a/b test results before hitting start on an experiment? We use medians
  from past tests"** — 2017-01-13, https://x.com/jlinowski/status/819924635974299651. **[practitioner-
  opinion]** — a genuinely interesting methodology point: GoodUI uses historical test-result medians
  as a prior before running new tests, i.e., informal Bayesian priors from an aggregated pattern
  library, not a single-test frequentist read.
- **"Buttons, we're watching you. Going to settle this little issue (Above The Fold Calls To Action)
  once and for all"** — 2018-01-04, https://x.com/jlinowski/status/949013700870135808. Directly
  relevant to the button-folklore genre in §6 — GoodUI ran an actual controlled test on above-the-fold
  CTA placement rather than repeating the folklore claim untested.
- Multiple other tweets confirm GoodUI's core identity: publishing real numbered test results from a
  network of contributing sites (2018-09-14 https://x.com/jlinowski/status/1040634266395258882;
  2016-11-06 https://x.com/jlinowski/status/927591660590125056; etc.) — consistent with the brief's
  description of GoodUI as "publishes test results with numbers."

**Not reached this run (explicit gaps):** Andrew Anderson, Ton Wesseling (account effectively dead,
30 followers), Momoko Price. No time/budget remained after the stop-sweeping directive to resolve
correct handles for these three via WebSearch and then sweep them.

---

## 6. Folklore specimens

Each labeled, dated, attributed, debunker paired where one exists. Two items in this section
(marked ★) were supplied by grw-x from the lead's own sweep, already dated and ID'd — included here
per grw-x's instruction to own them since they land in this worker's territory.

1. **[folklore] "Magic button color" myth — and its debunker, same thread.**
   @mnowakdesign (12,305 followers, verified), 2026-01-11,
   https://x.com/mnowakdesign/status/2010426995125924217: *"Everyone loves a 'magic button color.'
   Reality: there isn't one. Blue can feel 'low risk'… Red can scream urgency… But the biggest driver
   isn't the color… it's contrast and context. And there's one exception that beats everything: your
   brand. Coca-Cola's red CTA works because it's Coca-Cola. A new startup copying that red? It can look
   pushy or inconsistent."* This post is simultaneously the folklore statement (there IS a best button
   color, by implication of the myth it's rebutting) and its own debunker — a clean specimen where
   attribution and rebuttal are the same author, useful for the falsification strip as a "the folklore
   is dead enough that even design-content accounts now open by debunking it" data point.

2. **[folklore] "Make the button red and make it pulse" — dark-pattern urgency advice, undebunked.**
   @hunterjisaacson (33,431 followers, verified), 2026-08-01,
   https://x.com/hunterjisaacson/status/2083598507487768785: *"Users don't read. They use. The more
   you force them to think, the faster they'll zone out. Nobody is reading your little onboarding
   paragraphs bro. Make the button red and make it pulse. Lizard brain mode."* No numbers, no test, an
   assertion presented as settled fact — squarely in the CRO-folklore genre the brief targets. No
   debunker paired this run.

3. **[folklore, self-reported no-denominator] "15% conversion to paid" teased as a course/content hook.**
   @GeorgeLampro20 (10,322 followers, verified), 2026-07-28,
   https://x.com/GeorgeLampro20/status/2082108316583444767: *"Wna know how I have a 15% conversion to
   paid? Read the article below👇"* — a bare self-reported number used as a curiosity hook with a
   linked article (not fetched this run). Classic **[self-reported, no N, no context]** specimen — the
   number is asserted, the denominator, product category, and traffic source are all withheld pending
   a click-through, which is itself a genre marker (numbers as lead-gen bait).

4. **[folklore] "Discard should be the red button" — an unresolved color-semantics folk debate.**
   @catalinmpit (132,332 followers, verified), 2026-01-27,
   https://x.com/catalinmpit/status/2016114211395670082: *"Shouldn't it be the other way around with
   'Discard' being a red button? I save an unhealthy number of replies because I mistakenly click
   'Save' thinking it's 'Discard.'"* — a live, ongoing instance of exactly the color-semantics folk
   debate that @mnowakdesign (specimen #1) explicitly argues has no universal answer; useful as a
   "the folklore keeps regenerating even while being debunked elsewhere" pairing.

5. **[folklore] "I never bother with wireframes… changing a blue button to green takes 2 seconds"** —
   @DenisJeliazkov (39,421 followers, verified), 2025-11-05,
   https://x.com/DenisJeliazkov/status/1986086165611675735 — a long high-fidelity-over-wireframes
   thread that treats "blue button, 8px radius, subtle shadow" choices as near-costless and
   near-instant to iterate on. Paired with the same author's companion post, 2025-10-27,
   https://x.com/DenisJeliazkov/status/1982715150496129483: *"I've shipped products with 'imperfect'
   designs that converted like crazy because they were intuitive. Meanwhile, I've seen Dribbble-worthy
   interfaces with 2% conversion rates because they prioritized aesthetics over clarity."* **[self-
   reported, no denominator, no N, no source for the "2%" figure]** — the "2% conversion" claim reads
   as an anecdotal composite, not a measured figure from a specific named product; flag as
   folklore-adjacent rather than measured.

6. **[folklore] Pricing folklore — "Popcorn Pricing" decoy-tier pattern, repeated as a general tactic.**
   @marclou, 2025-05-15, https://x.com/marclou/status/1923034650672497102: *"Don't know how to price
   your startup? Use Popcorn Pricing: $10/10 credits, $25/30 credits, $30/50 credits. The medium tier
   is priced to make the large seem like a better deal."* This is the classic "decoy effect" /
   anchoring pattern from pricing psychology, stated as a universal recipe with no product-specific
   testing evidence attached — a pricing-folklore specimen distinct from the button-color genre.

7. **[folklore] "6x your MRR in 1 minute: triple the pricing, reduce usage 50%, add no extra value"** —
   @marclou, 2025-07-03, https://x.com/marclou/status/1940754198565736858. Framed satirically (aimed
   at Beehiiv's own pricing change, not his own product), but it circulates as a "just raise your
   prices" one-liner independent of the satire framing when quote-tweeted or screenshotted out of
   context — worth flagging as folklore-adjacent "always raise your prices" content even though the
   author's intent here is critical, not prescriptive.

8. ★ **[folklore + dark-pattern ethics] Duolingo-style streak "commitment device" landing page, self-
   reported, no N.** @bartek_marzec, 2025-04-16, id 1912337580332576981, and 2025-04-17, id
   1912770494677627181 (supplied by grw-x from the lead sweep, not independently re-verified by this
   worker): claims designing a "how long will you keep your streak alive?" commitment page raised
   30-day retention "no matter which option users chose… Nothing happened on the backend, pure mind
   control." No N, no absolute numbers — a clean specimen of gamification/streak folklore paired with
   an explicit ethics admission by the author himself (self-aware dark pattern, not just alleged).

9. ★ **[UNTRACED, flagged as implausible] Duolingo D30 retention benchmark contradiction.**
   @thetimgabe, 2026-06-26, id 2070599031399780599 (supplied by grw-x): *"duolingo retains 7% of users
   after 30 days. some of the apps i studied reach 90% retention (!!)"* — grw-x's own note flags the
   90% D30 figure as implausible; this worker did not independently verify either number's source.
   Both figures should be treated as **UNTRACED** pending a primary-source check (Duolingo's own
   investor materials or a named study) before either appears in a shippable artifact.

10. **[practitioner-opinion, debunking a named target — the strongest debunker/target pairing this run]**
    Peep Laja vs. the "you don't need large sample sizes for A/B tests, just get huge lifts" article
    (2021-08-30, https://x.com/peeplaja/status/1432319998740029442) and Peep Laja vs. WhichTestWon's
    425-visitor "winning" test (2015-02-04, https://x.com/peeplaja/status/563018107930050560) — see
    full detail in §5. Repeated here because these are the two cleanest folklore+debunker pairs in the
    entire corpus and belong in any falsification strip the controller builds.

**Not found this run (explicit misses, worth a follow-up sweep):** the "$300 million button" case
study itself (the general topical search for this phrase returned zero relevant hits — see §7), the
"41 shades of blue" Google story, agency case studies claiming "347%"-style lifts with no denominator,
and charm-pricing/.99 anchoring folklore as stated by an operator (only saw it referenced obliquely).
General topical search was unable to surface any of these — they likely require either a dedicated
`archive search` with `--product Latest` and a longer time window, or a direct fetch of known
listicle/blog sources (a D-channel or C-channel task, not X-native).

---

## 7. Dead ends, empty queries, endpoint health notes

- **Handle-resolution failures**: `@marc_louvion` (correct: `@marclou`), `@dannypostmaa` (correct:
  `@dannypostma`), `@jonyifan` and `@damengchen` (brief-listed, both return `data:null` — likely
  incorrect handles, not re-searched further this run), `@web_analyst` (resolves to an unrelated
  3-follower account named "Jose," NOT Georgi Georgiev — correct handle `@georgizgeorgiev`, confirmed
  via one WebSearch call), `@GoodUIorg` / `@jakublinowski` / `@andrewphughes` (all `data:null`,
  correct GoodUI handle is `@jlinowski`, confirmed via WebSearch). **Lesson for future runs: brief-
  supplied handles should not be trusted without a `user` lookup first — roughly a third of the
  indie/CRO roster's brief-supplied handles were wrong.**
- **`@tonwesseling` is a 30-follower account** whose bio just says "Twittering at @tonw" — effectively
  abandoned; the real Ton Wesseling is very likely posting under a different handle this worker did
  not resolve (gap).
- **General topical search is badly diluted for this niche.** A 14-query `xrelay batch` against
  generic CRO/folklore phrases ("$300 million button," "41 shades of blue," "change one thing at a
  time A/B test," "100 conversions per variant," etc., `--product Top`) returned 460 tweets, of which
  the overwhelming majority were unrelated viral AI/tech/politics content (Google product
  announcements, Anthropic controversy threads, general only-tangentially-related design tweets).
  Filtering for CRO/button/pricing/streak keywords recovered only 141 of 460 as even loosely on-topic,
  and of those, only ~6 were genuinely usable specimens (§6, items 1–5). **This confirms the brief's
  warning almost exactly**: CRO topic terms are dominated by unrelated high-engagement content on
  X's `Top` ranking, and authority routing (`from:<handle>`) was dramatically more productive — the
  13-query authority batch (levelsio/patio11/peeplaja/OptimiseOrDie/georgizgeorgiev/jlinowski/marclou/
  tdinh_me/arvidkahl) returned 153 tweets, of which the large majority were directly on-topic and
  became the backbone of §2–§5.
- **Endpoint degradation, mid-run.** grw-x reported the search endpoint degrading session-wide
  (a `batch` run getting through only 1 of 7 queries in 280s elsewhere in the fleet) and issued a
  stop-sweeping-and-write directive. This worker's own two `batch` calls did complete (folklore batch:
  ~29 min wall time for 14 queries at a 3s configured delay — far slower than the configured delay
  alone would predict, consistent with degradation; authority batch: also slow but completed
  cleanly). No `RATE_LIMITED` errors were surfaced to this worker directly, but wall-clock time
  strongly suggests queueing/contention from concurrent xrelay processes elsewhere in the fleet (this
  worker independently confirmed via `ps aux` that multiple other xrelay processes — other B-channel
  workers' `archive user`, `batch`, and `search` calls — were running concurrently system-wide at the
  same time, despite each individual worker serializing its own calls as instructed).
  **Everything after that point in this run was written up from already-landed data rather than
  further sweeps, per grw-x's explicit directive.**
- **Tooling/process error (self-inflicted, corrected):** three consecutive shell commands assumed
  working-directory persistence across separate Bash tool invocations that does not reliably hold;
  as a result several intermediate files (`levelsio_archive.json`, `u_marclou.json`, `u_jlinowski.json`,
  `u_dannypostma.json`, `u_georgizgeorgiev.json`, `u_marc_lou.json`, `u_GoodUIorg.json`,
  `u_jakublinowski.json`, `u_andrewphughes.json`, `u_tonwesseling.json`, plus log/hit files) were
  briefly written into the repo root instead of the scratchpad. **All were moved into
  `.../scratchpad/b3/` and removed from the repo root before this file was written** — `git status`
  in the repo root is clean of this worker's artifacts as of the time of writing (only pre-existing
  untracked directories from other workers/channels remain).
- **Not reached, explicit gaps for a follow-up pass**: `user-posts` sweeps of @dannypostma, @yongfook,
  @agazdecki, @csallen, @jasonfried, @dhh were never run (only their `user` profile metadata was
  captured in §1) — the stop-sweeping directive landed before this worker reached them. A deeper
  `user-posts` sweep of @OptimiseOrDie and @georgizgeorgiev specifically would likely be high-value
  given how thin their coverage is relative to their reputational importance in the brief.

---

## 8. Growth-vs-operate notes

Nothing in this worker's territory surfaced content that reads as monitoring/dashboards/alerting/
rollout-flags/run-the-system health. The corpus here is entirely learning-oriented: A/B test results,
pricing experiments, churn/retention self-reports, funnel instrumentation findings (marclou's
scroll-depth funnel), and CRO methodology — all squarely growth (causal improvement / interpretation),
not operate (running the live system). The one item that brushes the seam is patio11's 2020 tweet
about being caught in "an A/B test or cohort where classic retweeting is disabled" on Twitter's own
platform (https://x.com/patio11/status/1333770940576976897) — that's a *platform-side* growth
experiment being *experienced* by a user, not this worker's product-operator territory, and doesn't
raise a monitoring/flags-infrastructure question either way. No disposition call needed from this
worker's slice.

---

## Appendix: raw data locations (scratchpad, not part of the deliverable)

- `.../scratchpad/b3/levelsio_archive_full.json` — 200-tweet full-fidelity archive of @levelsio
  (2026-07-16 to 2026-08-01 window; most of the historical A/B-test quotes in this file came from the
  separate `authority_batch.json` `from:levelsio` search instead, since the recency-ordered archive
  didn't reach back far enough to surface them)
- `.../scratchpad/b3/authority_batch.json` — 153 tweets from 13 `from:<handle>` authority-routed
  queries (levelsio, patio11, peeplaja, OptimiseOrDie, georgizgeorgiev, jlinowski, marclou, tdinh_me,
  arvidkahl); this file is the primary source for §2–§6
- `.../scratchpad/b3/folklore_batch.json` — 460 tweets from 14 generic topical queries; low signal
  (see §7), partially mined for §6 items 1–5
- `.../scratchpad/b3/u_*.json` — individual `user` profile lookups backing §1
- `.../scratchpad/b3/roster.log` — console log of the first roster sweep
