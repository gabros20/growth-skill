# X/Twitter channel report — GROWTH deep research (channel B, `grw-x`)

Sub-orchestrator: grw-x (opus). Workers: B1 (validity), B2 (growth school), B3 (small-sample/CRO).
Run date: 2026-08-01. Tool: `xrelay` (no paid X API). Session account: `@tamas_gr`.
**WebSearch used across the entire channel: 2 of 30 budgeted** (B3, handle resolution only).

**This file is a synthesis with pointers.** The raw corpora are the primary artifacts:

| File | Worker | Size | Territory |
|---|---|---|---|
| `_raw/x-experiment-validity.md` | B1 | 78 KB | Kohavi, Vermeer, Eppo/Statsig founders, GoodUI, Data Colada |
| `_raw/x-growth-practitioners.md` | B2 | 72 KB | Verna + the Reforge/PLG growth-strategy school |
| `_raw/x-smallsample-cro.md` | B3 | 40 KB | indie operators, CRO practitioners, folklore specimens |

Material marked **[lead-slice]** is mine and appears in no `_raw` file.

---

## 0. Re-verification log, and four corrections to controller-canon

### 0.1 Figure re-verification (charter requirement)

Workers left their JSON archives in the scratchpad, which let me re-verify **offline against raw
tweet text** rather than trusting prose summaries. **16 of B1's load-bearing figures checked; 15
found locally and all 15 matched verbatim; 1 not present locally, marked accordingly.** Two
(`1851526773496062157`, `1849967603202261260`) were truncated in my first pass *right before* the
load-bearing number, so I pulled full text before repeating anything — both confirmed, and richer
than summarized.

Verified verbatim: 60–90% of ideas fail · 200,000-user floor + three small-sample levers ·
Winner's Curse 13/21/25/30% · median 2.2M users at 80% power, MDE 0.3–2.2% · "p=0.05 ≈ 78%, not
95%" · the "24% on 37 sessions" parody · A/A/B debunk + "run 500 A/A tests" · Dell 33% revenue loss
and JS errors 1.2%→45.4%/49.5% · Cochrane 75/50/25% · NPS needs 7,600 responses / 60,000 sent ·
LinkedIn SRM 10% · 50/50-vs-10% allocation · quadratic sample-size scaling · "Bayesian platforms
are not immune to SRM" · Statsig→OpenAI with Raji as CTO of Applications.

**Not verifiable offline**: "Duolingo runs 500 A/B tests/quarter" — already marked UNTRACED by B1;
§4.2 shows it is in tension with Duolingo's own numbers. **Do not ship it.**

**Verdict: all three worker corpora are accurate.** I found no figure that drifted between tweet
and writeup. I did catch one attribution error in *my own* work — see §0.3.

### 0.2 Four corrections the controller must apply to its own pre-research canon

1. **The Racecar framework is Dan Hockenmaier + Lenny Rachitsky, NOT Balfour.** Controller-canon §2
   attributes it loosely to the "Reforge/Brian Balfour school." Balfour's own amplifying tweet
   (`1352354846431567872`, 2021-01-21) names Hockenmaier and Rachitsky as the authors.
2. **"levelsio doesn't A/B test" is itself folklore — and the charter repeated it.** See §3.1. This
   is the run's most interesting correction, because the truth makes a *better* wedge.
3. **SRM at ~6–10% is confirmed at the top of that range**: LinkedIn's own disclosed rate is **10%**
   (`1168808323317207040`). Canon §1's belief stands, now traced.
4. **Twyman's law is confirmed verbatim** against canon §1 (`1456324378778550279`), as are the
   Statsig→OpenAI (2025-09-02, first-party) and Eppo→Datadog (May 2025, in `@eppohq`'s own bio)
   acquisitions that canon §3 flagged for verification.

### 0.3 A caught error of my own, and the tool behavior that causes it

B2's single most transferable finding is that **`xrelay archive user` and `user-posts` unwrap
retweets**, so the `author` field on an unwrapped retweet is the *original* author, not the person
whose timeline you fetched. Of 128 tweets on Elena Verna's timeline, **only 53 were hers; 75 were
retweets.**

I then hit this exact trap myself. Sweeping Luis von Ahn, I nearly attributed to Duolingo's CEO a
post reading "32% DAU/MAU at ~100m MAU, 90%+ organic adoption, ~6 month paybacks." Checking
`author.handle` before writing showed it is **@aleximm (Alex Immerman, a16z), retweeted by von
Ahn** (`1805631653777125651`, 2024-06-25). Every von Ahn figure in §3.5 has been
`retweetedBy`-checked. **Any future run using these commands for attribution must split on
`retweetedBy` first** — the failure mode is silent and produces plausible-looking quotes.

---

## 1. Validity-layer findings (Kohavi and the experimentation-rigor school)

Pointer: `_raw/x-experiment-validity.md`. The strongest corpus the channel produced.

### 1.1 An organized, named, dated A/B replication project exists

**Trustworthy A/B Patterns** — Kohavi (@ronnyk) + Vermeer (@lukasvermeer) + Linowski (@jlinowski),
started June 2024 — re-runs stock CRO "patterns" at high power. Its 2026-02-13 summary
(`2022381211042398467`) covers 10 replications across four patterns (rounded buttons, page
performance, coupon-code field, sticky CTA) at a **median 2.2M users per experiment, 80% power,
pre-selected MDEs of 0.3%–2.2%**.

Why this is the channel's best find:

1. **It falsifies specific CRO folklore with receipts.** The project began over an implausible
   rounded-vs-square-button lift; the first three replications "confirmed that the initial results
   were highly exaggerated." Kohavi separately replied **"Flawed experiments."** — verbatim, to two
   different questioners (`1785485012445597832`, `1785484733687935444`, 2024-04-29).
2. **It applies the discipline to itself.** On 2025-11-20 (`1991297489811767736`) they disclosed
   that their own home-page experiment's first run had an SRM, re-ran it, and reported the clean
   result (+0.3% revenue, "realistic and material") against the implausible 55% CTR claim.
3. **It is live and joinable** — free design/analysis help in exchange for shared results.

Controller-canon wedge §5.2 (CRO folklore falsification) **passes**: the falsification material is
named, dated, high-powered, and ongoing.

### 1.2 The small-sample wedge has a single best citation — and it is Kohavi's own

Kohavi, 2024-10-30, `1851526773496062157`, verified in full:

> "For e-commerce sites focused on improving conversions, a minimum of 200,000 users provides
> adequate statistical power... The statistics do not support A/B tests with 5,000 users under
> common goals and assumptions."

Crucially he does not stop at "you can't test." The same post names the **three levers a small-N
team can actually pull** — precisely the honest toolkit canon §5.1 hypothesised was under-taught:

- **Swing for the fences** — only chase ≥20% changes ("in medicine, vaccines need to be 50%+
  effective").
- **Move upstream** — "click-through rate at the point of change requires fewer users than the
  final conversion rate."
- **Accept a high false-positive rate** — consciously accept "over 50%" probability that a
  significant result is false, as a trade rather than an accident.

Supporting math: sample size **grows quadratically** in sensitivity, so even Amazon and Google
"cannot detect changes of $10M/year" (`1544720390106202112`). Detecting 5% needs tens of thousands
of users; 0.01% needs billions. And **interactions need 16× the sample of main effects** (Gelman,
amplified by Evan Miller, `974279134649225216`) — meaning segment-level readouts, the most common
small-team over-reach, are the most expensive thing you can ask for.

**Wedge §5.1 is confirmed, and confirmed by the canon's own author rather than against him.** The
pack can teach small-sample honesty as Kohavi's position, not as a contrarian take on Kohavi.

### 1.3 Every estimate from a winning test is biased upward — the "haircut"

Kohavi, 2024-10-26, `1849967603202261260`, verified in full: picking statistically significant
results biases estimates **13%** at 80% power with one treatment; **21%** with two; **25%** with
three; and counterintuitively **30%** if you Bonferroni-correct to 0.05/3. "Remember to apply a
haircut to all your #ABtest results."

Cross-register corroboration: the Gelman/Greenland/Imbens/Schwab/Goodman/van Zwet paper
(2023-12-22) finds Cochrane RCTs overestimate with 75%/50%/25% probability of ≥5%/56%/181%
exaggeration (`1739833299617644803`). A worked industrial example: Talabat/Delivery Hero measured
+0.36% revenue per user from a caching speedup and reported **~0.3% after a sequential-inference
haircut** (`1991297106607501413`).

**Strong flagship-invariant candidate**: quantified, cross-domain, and the exact opposite of what
every case-study blog does.

### 1.4 SRM is the validity gate, and a vendor claim about it is publicly dead

- **LinkedIn's own SRM rate: 10% of experiments** (`1168808323317207040`).
- Vermeer: "There is really no excuse for not checking for SRM" (`1166961976439951361`); a platform
  that doesn't warn on SRM would make him "lose almost all trust" (`1166963733727535104`).
- **The vendor debunk**: "I have heard some platform owners argue that their platform is somehow
  immune to SRM (e.g. 'because it's Bayesian'), but the examples in our paper explain why every
  experiment (platform) could be affected." (`1166966799730192385`, 2019-08-29).

### 1.5 Negative findings (these are findings, not gaps to paper over)

- **CUPED is nearly absent from Kohavi's own timeline** — in 200 posts he never tweets the term.
  CUPED discourse lives with Evan Miller (`1549075514916327424`, framing it via
  Frisch-Waugh-Lovell), Vermeer, and Chetan Sharma. What Kohavi *does* tweet as a variance-reduction
  lever is **capping skewed metrics** (`1849262894028103838`).
- **"Always-valid p-values" / mSPRT never surfaced by name**, despite Ramesh Johari being swept.
  What we have is Johari's first-party confirmation that Optimizely's sequential/multiple-testing
  work **launched 2015-01-21** (`557783064240472064`). The peeking literature is grw-web's to bring.
- **Simpson's paradox and novelty/primacy effects: essentially absent** from this territory.
- **No switchback/marketplace-interference content** — correctly grw-web's.

### 1.6 Win-rate numbers, sorted by shippability

| Claim | Status |
|---|---|
| **60–90% of ideas fail to move their target metric** — Kohavi, 2022-05-18, cites Ch.1 of his book | **TRACED — shippable** |
| "80% of experiments fail" — Lenny Rachitsky, 2023-07-30 | **UNTRACED — do not ship** |
| "only 10–20% of tests yield positive results" — ChatGPT output shared by Kohavi, 2024-06-16 | **UNTRACED — do not ship** |
| Optimizely analysed 127,000 experiments | Vendor-stated count; Kohavi's critique doc unfetched |

That an unsourced figure travels through Kohavi's own feed is itself a teaching specimen: the
discipline is not "trust the expert," it is "trust the citation."

---

## 2. Growth-school mental models, with attribution

Pointer: `_raw/x-growth-practitioners.md` (see its §1b for handle corrections before any follow-up).

### 2.1 The Sean Ellis test carries its creator's own caveat — the best falsification anchor found

Canon §2 predicted the 40% "very disappointed" PMF test was a falsification-strip candidate.
**Confirmed, and better than hoped**: Ellis states the threshold himself (earliest found
`13078266825`, 2010-04-29) — and then, in 2013-12-24 (`415285251569508352`), **publicly caveats
that the number's validity has depended on his own personal "hands on" involvement.**

A falsification strip built on the creator's own qualification is far stronger than one built on
outside criticism. Recommend using it that way.

### 2.2 The benchmark numbers, with the caveat class the charter demanded

| Figure | Claimer | Date | Verdict |
|---|---|---|---|
| Activation rate: **avg 34%, median 25%** (all products); **SaaS avg 36%, median 30%** | Lenny Rachitsky, own reader survey (~350+ respondents) | 2022-10-25 (`1584923800226832384`) | **TRACED to a named survey, but SELF-SELECTED** — recruited from his own audience; category mix and response bias undisclosed |
| Activation percentile bands: 60th = "GOOD," 80th = "GREAT" | same survey | 2022-10-25 | **TRACED, SELF-SELECTED** — "good" means high *within a self-selected sample*, not an external or causal benchmark |
| Patrick Campbell: "+30–50% growth" multi-product, "18–54% higher LTV" add-ons, value-metric pricing "doubles expansion rev" | Patrick Campbell | 2022-11-09, **repeated verbatim** 2023-03-06 | **UNTRACED** — no source, no N, no denominator, either time. *Verbatim repetition across dates with no source is itself a folklore signature.* |
| Campbell: "$2.4 billion made for companies by fixing pricing" | Patrick Campbell | 2023-08-07 | **UNTRACED** — self-reported career aggregate |
| Kyle Poyar: "4 experiments that could increase free-to-paid conversion by 50%+" | Kyle Poyar (`@poyark`) | 2022-12-21 | **UNTRACED** — teaser; the Growth Unhinged issue needs pulling by grw-web |
| Lovable "$100M ARR in 8 months" / "$200M at $1.8B" | Anton Osika (founder), RT'd by Verna | 2025-07 | **UNTRACED** — self-reported, no methodology |

**No PLG free-to-paid benchmark was traced to a primary source on this channel.** Canon §2's
"activation ~20–40%, free-to-paid ~2–5%" remains unverified here; the only activation numbers found
are Lenny's self-selected survey. The mobile-subscription figures in §3.5 are the closest thing to a
large-N measured alternative, with their own distinct caveat.

### 2.3 "Aha moment" has no traceable origin

Even **Samuel Hulick — who runs UserOnboard, an activation-teardown business — publicly asked in
2023 who coined it** (`1635822218369462274`) and got no confirmed answer. The term is used across
this entire corpus as if its provenance were common knowledge, with **zero primary attribution
found**. Do not assert an origin in the shipped skill without independent confirmation. Flagged for
grw-web/grw-github.

### 2.4 Mental-model ownership (from B2's index, §4 of its file)

Growth loops vs funnels → **Balfour, Winters, Kwok, Chen** (co-credited in the founding 2018-07-31
tweet, `1024417730617700352`). AARRR → **Dave McClure**, framed by Balfour as superseded-but-formative.
Racecar → **Hockenmaier + Rachitsky** (see §0.2). Loops-over-moats → **Kevin Kwok** (2019) — a
*defensibility* argument that is routinely conflated with the *measurement* argument and should be
kept separate. Five Laws of Growth and the 3×3 motions×levers matrix → **Elena Verna** (2022).
Hook model → **Nir Eyal**. Activation-drives-retention ("'my retention sucks' is often an activation
problem") → **Casey Winters** (`827582263881641985`, 2017-02-03). How to *read* cohort charts
(diagonal/horizontal/vertical stripes) → **Crystal Widjaja** (`1784012365337665731`) — rarer and
more durable than any benchmark.

**Independent convergence with Twyman's law**: Fareed Mosavat's "there's a bug in the data" as the
first hypothesis for a surprising result (`1075553840802422784`, 2018-12-20) — a growth practitioner
arriving at Kohavi's rule from the opposite direction.

### 2.5 Loops-vs-funnels is a consensus, not a debate

Balfour, Winters, Kwok, Chen, Verna, Hockenmaier and Rachitsky all converge; **B2 found no dissenting
named voice.** If the pack wants a genuine disagreement on this axis it must come from outside this
cluster. Worth stating plainly: this is a tight, mutually-amplifying, self-citing group (B2
documents the Reforge faculty co-citation graph), so agreement within it is weak evidence.

The genuine two-sided debate is elsewhere — **pre-PMF experimentation maximalism**: the dbt roundup
"Down with experimentation maximalism" (@jthandy) vs. Chetan Sharma's qualified pushback
(`1541466393513566208`), agreeing Airbnb-style growth experiments are post-PMF while arguing many
*post*-PMF data teams under-experiment. Sharma also describes Eppo building **automated power
analysis "front and center in the UI"** so customers see when experiments *don't* make sense
(`1541466396529291265`) — a positive incumbent example worth citing respectfully.

### 2.6 X badly under-samples this school

Verna's framework-dense posting is concentrated in **2021-11 → 2022-09**; by 2025–26 her timeline is
jokes and Lovable promotion. Much of what looks like "Verna's opinions" on X is **Lenny's promo
paraphrase of podcast conversations** — the citable source is the episode, not the promo tweet.
**The growth-strategy canon must be sourced off-platform.**

### 2.7 Handle corrections (save the next run an hour)

`kyle_poyar`→**`poyark`** · `ravimehta`→**`ravi_mehta`** · `adamjfishman`/`afishman21`→**`fishmanaf`**
· `eppo_ai`/`Get_Eppo`→**`eppohq`** · `marc_louvion`→**`marclou`** · `dannypostmaa`→**`dannypostma`**
· `web_analyst`→**`georgizgeorgiev`** (the former is an unrelated 3-follower account) ·
`GoodUIorg`/`jakublinowski`→**`jlinowski`**. Blake Bartlett (who coined "product-led growth") has
**no locatable active X handle**. B3's lesson generalizes: **roughly a third of brief-supplied
handles were wrong — always `user`-lookup before sweeping.**

---

## 3. Small-sample and indie reality

Pointer: `_raw/x-smallsample-cro.md`.

### 3.1 The charter's own premise was wrong, and the truth is a better wedge

The charter (and canon §5.1) treats @levelsio as the canonical "I don't A/B test" voice. **B3
checked the primary record and the caricature does not survive it.** The actual quote is:

> "I don't A/B test, but just test" — @levelsio, 2017-09-02, `904050781426462720`

In context that is a *semantic* point, not an anti-experimentation stance: he compares variants
constantly, just not as simultaneous formal splits. Supporting evidence he tests routinely: "I do
quick A/B test of tweets to see which performs better" (`1462054634722246662`, 2021); "I'll go split
test everything from $9 to $16 now, will report back" (`520511384665092096`, 2014); "just try
different variations and A/B test everything, you can DIY" (`544020119404285952`, 2014).

**Strongest single piece of counter-evidence, which I found in a stray intermediate file rather
than either worker's writeup** — levelsio, 2020-06-21, `1274835385013731329`: *"Neil Patel has a
simple A/B test significance calculator, you add the numbers in there and it'll tell you if it's
actually not random what you're seeing… In this case, it's statistically significant that the modal
with the testimonial converts better."* The canonical "I don't A/B test" figure is here running a
split test **and computing significance on it**. Whatever one thinks of the calculator, this
retires the caricature outright.

**Reframe for the controller:** the folklore version of "levelsio doesn't A/B test" is itself
folklore. The primary record shows an operator who **tests constantly but informally, at small N,
without fixed horizons, and who is unusually honest about uncertainty.** That is a *better* wedge
story: the gap isn't "solo operators refuse to test," it's "solo operators test in a way the canon
doesn't describe and doesn't equip."

Likewise **patio11 is not a "don't test" voice at all** — a decade of pro-testing advice with real
numbers: "Create a recurring reminder to run a pricing test every 6 months" (`852241883740778496`);
"Easiest pricing test: either hide your cheapest tier or, if you've got a single price, double it"
(`852242210518999040`); "Kill a page element for an A/B test. If it doesn't hurt and you don't hear
negative feedback, it didn't need to exist" (`456873838891266048`).

**Nobody in B3's sample argued against testing outright.** They argued for testing *cheaply,
briefly, and skeptically*.

### 3.2 What small-N operators actually do instead (B3's synthesis)

1. **Engineer a huge MDE rather than compute power** — "double your price," "hide your cheapest
   tier" produce effects large enough to see without a power analysis.
2. **Pre-commit to a duration, not a sample size** — calendar-based stopping rules as a pragmatic
   substitute when you can't hit a target N in reasonable time.
3. **Label uncertainty honestly instead of manufacturing rigor** — the cleanest specimen in the
   whole corpus is levelsio on Stripe Checkout: *"couldn't A/B test it because I had to change a lot
   of code… take with grain of salt"* (`1379182671360839682`, 2021-04-05). An explicit epistemic
   downgrade in place of an inflated causal claim.
4. **Instrument before inferring** — marclou's "scroll-depth funnels showed me 70% of visitors never
   even saw my pricing" (`1965757431579050461`) is decision-useful with no hypothesis test at all.

**The most important gap B3 found: quasi-experimental methods are never mentioned by name** —
no pre/post with guardrails, no synthetic control, no geo-experiments, anywhere in the indie corpus.
The real small-operator toolkit is "run it, eyeball it, be honest in the caveat." **This strengthens
the wedge's premise**: the honest small-N toolkit isn't being rejected, it's unknown.

### 3.3 Small-N noise, demonstrated by operators' own ledgers

- **@tdinh_me's multi-month churn ledger** is the best "small-N noise is the norm" specimen in the
  corpus: "$912 new MRR, but $568 churn" (2022-03-01); "Just lost ~$600 MRR from a business account
  churn" (2022-11-01); and a headline **"0% churn rate"** that turns out to be a **data-migration
  artifact** — he had moved all new customers to Stripe (`1858830512141595074`, 2024-11-19). A
  flattering single number that means nothing, self-disclosed.
- **@marclou's ShipFast series** — $38K → $44K → $60K → $51K → $50K → $39K → $75K across seven
  months on a fixed-price product (`1775542527996948663`), used to argue "revenue is about product &
  marketing, not pricing." The ~2x swing is itself noise; the causal claim isolates nothing.
- **@levelsio's own X revenue swings ~37% month to month** on a mature stream
  (`2083548676593439014` / `2078508215013126270`) — a small-sample-noise specimen from a
  nine-figure-follower account.
- **@arvidkahl attributing a good morning to a pricing change with no counterfactual**: "I woke up
  to 15 sales… Turning on Purchasing Power Parity Pricing seems to have been a very good move,
  judging from sales and the comments" (`1492495795714678787`). Textbook
  attribution-without-control, stated candidly.

### 3.4 A real constraint the canon rarely discusses

@arvidkahl, 2026-04-22, `2046993183846891572`: *"That's the one thing I've always found complicated
about running pricing experiments on any SaaS… it becomes almost a reputational issue."* Pricing
experiments are **visible to existing customers** in a way UI experiments are not, so "just A/B test
your price" carries a social cost the literature ignores.

This converges with the strongest counter-specimen on the channel: **Booking.com — an org with a
lifetime-achievement award for experimentation culture — publicly stated it "will deliberately NOT
build the capability to run pricing A/B tests at all"** (via Vermeer, `1537385524066934785`).
Two independent sources, opposite ends of the scale spectrum, same conclusion: **pricing is where
"test everything" stops.** That is a genuinely non-obvious, well-evidenced teaching point.

### 3.5 [lead-slice] The mobile-subscription monetization layer

Unassigned, and squarely in charter scope (monetization, pricing-packaging experiments).

**RevenueCat's "State of Subscription Apps"** — the largest real dataset the channel touched:
**115,000+ apps and $16B+ tracked revenue** in the 2026 edition (`2029951725948354965`, 2026-03-06);
75,000+ apps / $10B+ in 2025 (`1901688922595320016`). Selected claims:

- **Hard paywalls convert 5x better than freemium at download-to-paid: 10.7% vs 2.1%**
  (`2039289170661871692`, 2026-04-01).
- **17–32 day trials convert at 42.5% vs 25.5% for trials under 4 days**; **55% of 3-day trial
  cancellations happen on Day 0** (`2036088076599275754`, 2026-03-23).
- North America median D35 download-to-paid **2.56%** vs India/SEA **1.37%** (same post).
- **AI apps earn 41% more revenue per payer but churn 30% faster**; only **4.6% of newly-launched
  apps reach $10k monthly revenue** (`2032494366632316948`, 2026-03-13).
- **Median yearly retention for monthly subscribers: 12.8% paywalled vs 9.5% freemium**
  (`1899106036813840842`, 2025-03-10).

**The sample caveat is mandatory and is a *different* caveat from the usual one.** This is not a
self-selected survey — it is SDK telemetry, so the measurement is real. But the population is *apps
that chose RevenueCat*: indie/SMB mobile, excluding both the largest publishers with in-house
billing and everything non-mobile. **High-N and low-external-validity** — excellent for "how do
indie subscription apps behave," inadmissible as "how does software monetize." Always bind the
vendor and edition year; these move materially year over year, so bare magnitudes are
**never-ship candidates**.

**Jacob Eiting (@jeiting, RevenueCat CEO)** is the higher-value source, because he runs experiments
in public and reports losing ones:

- **A guardrail lesson, run live and against his own interest.** He ran a 4-variant web-vs-IAP
  paywall test (`1920919855500300575`), reported a **25–45% conversion drop** for web vs IAP at
  equivalent prices (`1922666012006064270`), then published the negative readout: *"Almost a month
  into our Web vs IAP test and the winner is ... IAP. Our web only variant did have better trial
  conversion rates, but it didn't make up for the drop in initial conversion, even when considering
  the 24% fee savings."* (`1927772123952525428`, 2025-05-28). **A secondary metric moved the right
  way and the decision still went the other way** — the OEC/guardrail lesson in one dated real
  example, from a company with every incentive to report the opposite.
- The generalizable framing: *"Saving 27% (12%) on Apple fees doesn't matter much if your conversion
  rate drops 50%. Test, test, test."* (`1917944104803090505`).
- **A platform-shock confound**: when Apple added an IAP step in April 2019, "We started to see some
  interesting data blips… but weren't sure if it was real" → "up to a 20% (relative) drop in trial
  start rate" (`1116463669385150464` / `1116463670362378240`). Every in-flight experiment was
  confounded by an external change — exactly what a growth pack should teach people to check.
- Base rate: **"20% per month — that's the average churn rate across all of RC nation"**
  (`2013642123933851844`, 2026-01-20), same population caveat.

**Luis von Ahn (@LuisvonAhn, Duolingo CEO)** — swept late, all posts `retweetedBy`-checked (§0.3).
His timeline is mostly investor relations, but that makes the figures **first-party and
SEC-adjacent**: Q2 2024 — 34.1M DAU (+59% YoY), 103.6M MAU (+40% YoY), revenue $178.3M (+41% YoY)
(`1821276391482257518`); Q1 2024 — 31.4M DAU (+54% YoY), revenue $167.6M (+45% YoY)
(`1788299077760754137`). And directly relevant to §4.1: **"10+ million people have a @duolingo
streak longer than a year"** (`1884037459572580407`, 2025-01-28).

**No growth *methodology* from von Ahn's own posts** — the A/B-testing-philosophy material
attributed to him circulates only secondhand (`1987597502733021322`, `1995588110567067868`) and
should not be cited to him without a primary source.

### 3.6 [lead-slice] The metrics-theater layer

Growth's failure mode at small scale is rarely bad statistics — it is measuring the wrong thing
confidently. Neither of these two high-reach practitioners was assigned:

**Shreyas Doshi (@shreyas, 377k)** — **"Exotic Metrics**: a disease that affects many product
teams... makes us feel smart, but... makes us act pretty stupid" (`1720112400131838050`,
2023-11-02), later sharpened into a motive: leaders who can't control business outcomes "invent
Exotic Metrics: finely segmented, complex measurements that capture only what they directly
control" (`1963993823052550353`, 2025-09-05). His **dashboard-purpose insight** is the most
original thing in this slice: a dashboard built to (A) understand usage, (B) inform decisions,
(C) track targets, (D) reward performance comes out *completely differently* depending on whether
you rank A>B>C>D or D>C>B>A (`1468684017654382593`) — Goodhart's law as a design constraint. Also:
"metrics-driven vs metrics-informed" as a deliberate word choice (`1473696740641587201`); the
OKR-gaming death spiral (`1801596278167552167`); and the anti-gaming reframe — if you're debating
how to pick a metric the team can't game, "ask yourself what went wrong under your watch that makes
these teams want to game metrics in the first place" (`1720840331007287446`).

**A perfect teaching vignette** (`1440138369099464709` + `1440138370290573326`, 2021-09-21): an
experiment raised signups 18% but wasn't launched because that cohort churned worse; when someone
proposes reviving it, the PM recalls interviewing those users — *"they didn't actually intend to
create an account."* Primary metric up, guardrail down, qualitative check explains why. Pair with
§3.5's IAP result: together they teach guardrails with no statistics at all.

**Hiten Shah (@hnshah, 340k)** — founder of **Crazy Egg (2005) and KISSmetrics (2008)**, i.e. the
CRO/analytics tooling lineage itself. "Dashboards are the corporate opium of the data age... We
stare at vanity metrics that jiggle on cue, mistaking motion for evidence." (`1922298286050050517`).
"You can't A/B test conviction." (`1983541344124694792`). And a falsifiable dated claim: **"High Net
Promoter Score (NPS) does not correlate to high retention"** (`1094305710819573761`, 2019-02-09) —
which pairs with Kohavi's independent finding that detecting a 5-point NPS delta needs 7,600
responses. **Two independent authorities reaching "NPS is a weak instrument" from opposite
directions.**

### 3.7 [lead-slice] Retention models nobody else covered

**Sarah Tavel (@sarahtavel, Benchmark)** — the crispest retention-before-growth statement found:
*"It's tempting to use growth to make up for churn. Total # of MAUs still goes up! Feels good. Until
it doesn't... focus 1st on getting cohort retention to hit asymptote. Then pour gas on fire."*
(`1573370098018324480`, 2022-09-23). Her **Hierarchy of Engagement** dates to 2016-03-23
(`712677956527595520`), with a "Core Actions" follow-up (`714831321663602688`).

**Nir Eyal (@nireyal)** — the Hooked model stated directly (`1801223394936983930`, 2024-06-13),
notably prefaced with *"Building 'addictive' products is bad for consumers and bad for business"* — a
more defensive posture than his reputation suggests. Habit-as-moat (`1350170899056627714`); the
frequency claim that the target behavior "MUST occur within a week or less" (`1593967416777838595`,
2022-11-19), asserted with no study. See §4.3 for the folklore number he repeats.

---

## 4. Folklore specimens (labeled, dated, debunkers paired)

B3's §6 is the primary folklore corpus (10 specimens: the "magic button color" myth and its
same-author debunk; "make the button red and make it pulse"; a bare "15% conversion to paid" used as
click-bait; the decoy-tier "Popcorn Pricing" recipe; and more). These are additions from my slice,
each with counter-evidence attached.

### 4.1 [lead-slice] The Duolingo streak contradiction — a complete, resolvable specimen

Three named sources, three incompatible positions on one feature at one company:

| Claim | Who | Date | Post |
|---|---|---|---|
| Streaks are "the single biggest driver of Duolingo's growth to a $14 billion business" | Lenny Rachitsky (408k followers) | 2024-12-15 | `1868330119833813056` |
| "They have research showing that 'streaks' are a **negative retention feature**… They quit when they break them." | @_MaxBlade (453 likes) | 2025-04-20 | `1914086076139856078` |
| "Not surprised Duolingo discovered streak scores cause negative retention. People subconsciously rebel against artificial 'carrot and stick' motivators." | Daniel Vassallo (267 likes) | 2025-04-21 | `1914162879408075110` |

I pulled the thread on the middle claim: **it cites nothing** — no link, no paper, no Duolingo
source — and it acquired a second named amplifier within 24 hours.

**Resolution, from Duolingo's own first-party blog** (grw-web's corpus, `web-company-blogs.md` §8):
the Streak Wager test produced "statistically significant increases in Day-1, Day-7 and Day-14 user
retention, with Day-7 retention showing the greatest improvement at **+14%**," and the **Weekend
Amulet** — a *safety valve* letting users skip a weekend without breaking their streak — made users
"4% more likely to come back a week later and 5% less likely to lose their streak." Corroborating
scale from the CEO himself: **10M+ people hold streaks longer than a year** (§3.5).

So the real finding is **opposite in sign and subtler in shape**: streaks increase retention, *and*
all-or-nothing rigidity is a real abandonment risk — which is precisely why Duolingo shipped a
flexibility valve. The viral post inverted "breaking a streak causes churn" into "streaks cause
churn."

**This is the best single teaching specimen the channel produced**, because it shows the whole
failure mode end to end: an uncited assertion about someone else's private research goes viral,
gains a named amplifier, contradicts both the company's published data and another high-reach
practitioner — and is resolvable by one fetch of a primary source. Recommend as a worked example.

### 4.2 [lead-slice] "Duolingo runs 500 A/B tests a quarter" — UNTRACED and in tension

B1 flagged this (Jason Lemkin via Chetan Sharma, `1589377060673589248`). I can add the tension:
Duolingo's own 2020 engineering post reports "a few hundred experiments running simultaneously" and
"over 2,000 total experiments" across three years (≈167/quarter). Different measures, and the claim
postdates them — so not a refutation, but **there is no first-party support for 500/quarter and the
only first-party cadence figures are lower. Do not ship it.**

### 4.3 [lead-slice] "A 5% increase in retention increases profits 25–95%"

Nir Eyal, 2023-12-12, `1734573942310936863`. This is the **Reichheld/Bain figure** (originating in
Reichheld & Sasser's 1990 HBR work), one of the most-repeated numbers in retention marketing,
almost always stripped of its original scope conditions and industry set — restated here in 2023 by
a bestselling author with 103k followers, uncited.

**Recommend as a falsification-strip target**: high-prevalence, ancient, resolvable provenance — the
exact profile of marketing-skill's `llms.txt` kill. Assign the trace to grw-web; I did not spend
WebSearch budget on it because it is off-channel.

### 4.4 [lead-slice] Numbers with no denominators

- **"Pure mind control."** @bartek_marzec (`1912337580332576981`, 2025-04-16; restated
  `1912770494677627181`): a "how long will you keep your streak alive?" commitment prompt raised
  30-day retention "no matter which option users chose… Nothing happened on the backend, pure mind
  control." No N, no baseline, no design — and manipulation named as the mechanism. Doubles as a
  **gamification-ethics** specimen. (Handed to B3, who carries it as specimen ★8.)
- **A 90% D30 retention claim.** @thetimgabe (`2070599031399780599`, 2026-06-26): "duolingo retains
  7% of users after 30 days. some of the apps i studied reach 90% retention (!!)." Both numbers
  uncited; 90% D30 is extraordinary and almost certainly reflects a different denominator.
- **A correlation sold as a lever.** @zzwitz (`2067349393452507292`, 2026-06-17): "y1 retention
  rates are 3x higher for users who use the app first 30 days vs who don't (80% vs 30%)." Two
  defects in one sentence: 80/30 is 2.67x, not 3x; and it compares users who *chose* to engage
  against those who didn't — a textbook selection effect presented as a causal instruction.

### 4.5 What could NOT be found on X, which is itself a finding

B3's 14-query topical batch returned **460 tweets, of which only ~6 were usable specimens.** The
canonical CRO folklore — **the "$300 million button," Google's "41 shades of blue," and
agency "347% lift" case studies** — **returned zero relevant hits.** These stories live in blogs and
listicles, not on X. Anyone hunting them should treat it as a C-/D-channel task.

More broadly: on a 94-result Duolingo/gamification sweep of my own, the *highest-engagement* results
were unrelated hustle-marketing threads (2,271 and 644 likes) while genuine growth content ranked
below them. **Engagement ranking is actively misleading in this domain** — the empirical
justification for the charter's authority-routing rule, now measured rather than assumed: B3's
authority-routed batch returned 153 tweets that were mostly on-topic; its topical batch returned 460
that were mostly not.

---

## 5. Dead ends and endpoint health

### 5.1 The concurrency cap is real, and 4 was still too many

The run began healthy (`xrelay doctor`: 6/6 checks, authenticated `@tamas_gr`). With 3 workers plus
me — nominally at the cap — the endpoint **degraded twice**:

- **B1** hit three consecutive 60–90s timeouts and recovered with a **15–20s backoff and a retry of
  the same call** — longer than the 2–5s the RATE_LIMITED hint implies. **Most useful operational
  finding of the run: a timeout is not a dead handle or a bad query.**
- **B2's** 33-query batch took ~30 minutes instead of ~2. **B3's** 14-query batch took ~29 minutes.
  Neither ever saw a `RATE_LIMITED` error and both completed cleanly — **the degradation manifests
  as wall-clock latency, not as errors**, which makes it easy to misdiagnose as a hung process.
- **Mine, worst**: `user-posts LuisvonAhn` timed out at 200s, the cheaper `search "from:LuisvonAhn"`
  timed out at 150s, and a 7-query batch completed 1 query in 280s.

**I stopped issuing xrelay calls at that point rather than compete with my own workers**, on the
judgment that their assigned territory outranked my lead slice, and told both remaining workers to
stop sweeping and write. That recovered all three files. I later reclaimed the von Ahn sweep during
a window when the process table was genuinely empty.

**Caveat on one number**: B2 and B3 both report seeing up to **9 concurrent xrelay processes** via
`ps`. I would not repeat that figure — a loose `ps | grep cli.js` on this machine matches Zed
editor's node processes. I made exactly that error myself (counted 15, then found the precise
pattern `x-relay/dist/cli.js` returned 0). **The contention is real and well-evidenced by
wall-clock; the specific count of 9 is unreliable.**

**Recommendation: treat 4 as a ceiling, not a target — 3 sustained concurrent processes is the safer
operating point**, and the lead should reserve its own calls for gaps that only appear after workers
report, rather than running a parallel slice throughout.

Also: `xrelay batch --out` **merges into an existing file**. Two of my batches cross-contaminated a
single output's `perQuery` record. Use a distinct `--out` per batch.

### 5.2 Dead ends and unreached targets

- **@jorgemazal** (ex-CPO Duolingo) — alive but a **genuine dead end**: 19 posts on US politics,
  synthetic xylem and desalination. Zero growth content. Recorded so nobody probes him again.
- **@zangilani** (Duolingo streaks PM) — does not exist. **@duolingo** — meme account, no growth
  content.
- **@LuisvonAhn — now swept** (see §3.5); useful as first-party metrics, not as methodology.
- **Thin coverage of two reputational heavyweights**: **@OptimiseOrDie** (Craig Sullivan) yielded
  **one 2015 tweet**, and **@georgizgeorgiev** yielded **one 2020 tweet** — both are described in the
  brief as significant debunkers, and **this run did not independently demonstrate that**. B3 is
  explicit that the reputation is asserted by the brief, not evidenced here. Highest-value targets
  for a follow-up sweep.
- **Never swept**: @dannypostma, @yongfook, @agazdecki, @csallen, @jasonfried, @dhh (profiles only);
  Andrew Anderson and Momoko Price (handles unresolved); @tonwesseling is an abandoned 30-follower
  account.
- Dead/wrong handles: `eppo_ai`, `Get_Eppo`, `kyle_poyar`, `ravimehta`, `adamjfishman`, `afishman21`,
  `BlakeMBartlett`, `marc_louvion`, `dannypostmaa`, `jonyifan`, `damengchen`, `web_analyst`,
  `GoodUIorg`, `jakublinowski`.
- Flagged by B1 for a future pass (one `following ronnyk` discovery call): **@deaneckles**,
  **@georgizgeorgiev**, **@causalinf**, **@ErikVanZwet**, **@ItamarGilad**, **@mgershoff**.

### 5.3 Housekeeping

B3 briefly wrote ~10 intermediate JSON files into the **repo root** (a working-directory assumption
that doesn't hold across Bash invocations). **All were moved to the scratchpad and removed**; I
verified the repo root is clean of run artifacts (only the pre-existing
`frontend-sources-corpus.json` remains).

---

## 6. Growth-vs-operate disposition (Tamas's standing question)

The channel produced an unusually clean answer, including one practitioner arguing the seam
explicitly without being asked.

**The sharpest specimen: Kohavi arguing *against* operate's instinct.** 2025-02-17,
`1891629899573756152`, verified in full: *"You sometimes hear: this is a risky idea, so we should run
it at 10%... The logic for running a treatment at 10% is often flawed."* His argument is
power-economic — if you need 100K users in treatment, 10% allocation takes five weeks and 50% takes
one. **Same flag, same traffic-splitting mechanism, opposite intent, opposite correct answer.** When
the intent is *learning*, small-percentage exposure is a mistake; when it is *risk containment*, it
is the whole point. **Recommend this post as the canonical citation for the seam** — a named
authority stating that reaching for the canary instinct during an experiment is an error.

**A sharper disposition rule than "same infra, opposite intent."** The Dell case
(`1692402231965057378`) uses **JavaScript error rate** — a quintessential operate alert signal — as
an *experiment-scoped* guardrail for one ship/kill decision. The rule that falls out: **a standing
threshold on the live system is operate; the same metric bound to a single tested change's decision
is growth.** I recommend this formulation to the controller as more actionable than the intent-based
version, because it can be applied to a metric without knowing anyone's intent.

**Supporting dispositions:**

- **Flags graduate from operate to growth.** Kohavi's 2022 keynote is framed around "the transition
  from feature flags to A/B tests" — flags as staging ground, experiment as the learning use.
- **Performance work sits on the seam and can go either way.** The Talabat caching change was a
  latency improvement (normally operate) A/B-tested for its *revenue* effect with a disclosed
  haircut. Deploy-and-watch-latency is operate; randomize-and-measure-revenue is growth. Identical
  lever; the question decides the owner.
- **The inverse trap**, via Verna (third-party paraphrase, treat as secondhand): "Not experimenting
  is still testing, just on 100% of the population without any quantifiable learnings." Shipping to
  everyone is not the safe default — it is an uninstrumented experiment. Fareed Mosavat mocks the
  same rationalization ("this is so obviously better, we don't need to run it as an experiment").
- **No canary/blue-green/rollout content surfaced anywhere in the channel** — across three workers
  and a lead slice. That is evidence the split is natural rather than imposed: the people who talk
  about experiment validity and the people who talk about safe deploys are largely disjoint
  populations on X.

---

## 7. What I'd tell the controller in one paragraph

The channel's decisive contribution is that **the small-sample-honesty wedge is not contrarian — it
is Kohavi's own stated position**, with a verified threshold (200,000 users for e-commerce
conversion; "the statistics do not support A/B tests with 5,000 users") and a named three-lever
toolkit for teams below it. Two things sharpen it further: **B3's finding that "levelsio doesn't A/B
test" is itself folklore** — solo operators test constantly, just informally and honestly, so the
gap is equipment rather than willingness — and the discovery that **quasi-experimental methods are
never mentioned by name anywhere in the indie corpus**, which means the honest small-N toolkit isn't
being rejected, it's unknown. Alongside that, the **haircut discipline** (every winner is biased up
13–30%) and the **Trustworthy A/B Patterns replication project** supply a falsification strip with
receipts rather than attitude, and the **Sean Ellis test carries its own creator's generalizability
caveat**, which is the strongest possible anchor for that strip. Treat the growth-strategy school as
**under-sampled by X and mutually self-citing** — source it off-platform, and don't mistake its
internal consensus for evidence. Finally, the Duolingo streak contradiction (§4.1) is a complete,
resolvable, three-source specimen that teaches the entire failure mode in one worked example, and I
recommend it be used as one.
