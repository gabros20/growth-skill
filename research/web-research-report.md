# Channel D — Open Web: research report

**Sub-orchestrator:** grw-web (opus) · **Workers:** 4 sonnet · **As-of date:** 2026-08-01
**Deliverable status:** complete. Raw corpora in `research/growth/_raw/`.

| File | Worker | Size | Scope |
|---|---|---|---|
| `_raw/web-experiment-canon.md` | D1 | ~100 KB, 1,495 lines | Kohavi canon, peeking, SRM, CUPED, power, long-term effects |
| `_raw/web-company-blogs.md` | D2 | ~72 KB, 985 lines | Microsoft ExP, Netflix, Airbnb, Booking, Spotify, LinkedIn, Uber/Lyft/DoorDash, Duolingo |
| `_raw/web-papers-quasi.md` | D3 | ~79 KB, 970 lines | Variance reduction, Ghost Ads, geo-experiments, synthetic control, DiD, interference |
| `_raw/web-plg-cro-industry.md` | D4 | ~66 KB, 766 lines | PLG benchmarks, Sean Ellis 40%, CRO folklore, pricing, retention, habit ethics |
| `_raw/web-lead-slice.md` | **lead** | ~53 KB | Vendor traffic floors, derived power table, **family seam audit**, two primary PDFs read in full |

### Verification legend — used on every figure in this report

- 🔒 **LEAD-VERIFIED** — I personally opened the primary source and/or re-did the arithmetic.
- 📄 **WORKER-TRACED** — a worker read the primary full text; I did not independently re-open it.
- ⚠️ **SECONDHAND / UNTRACED** — chain breaks before the primary. Never ship as fact.

The brief required me to re-verify before repeating. I did, and **it caught three things**
(§0 below). Everything marked 🔒 has been checked twice.

---

## 0. What re-verification caught — read this first

**1. I was wrong about 16σ²/δ², and so was the brief.** Both the controller-canon and my own
first draft attributed the `16σ²/δ²` sample-size rule to Kohavi's *Seven Rules of Thumb* (KDD
2014). I pulled the PDF and read Rule #7 in full: **it is not there.** That paper states a
*different* rule — `355 × skewness²`, a **normality** requirement, not a **power** requirement.
D1 independently reached the identical conclusion by reading the same paper. Two independent
reads, same correction. The constant is real (it is 2(z₀.₉₇₅+z₀.₈₀)² = 15.6978, which I derived
from first principles) and it appears verbatim in Evan Miller (2010) and PostHog's docs — but
**it must not be attributed to the Seven Rules paper.**

**2. A worker caught a WebFetch summarizer fabricating a CUPED number.** D1's first pass, using
WebFetch's summarizer, returned *"CUPED can reduce variance by 20%-40%."* D1 then downloaded the
PDF and read it losslessly: the real figure is **~50%**. The 20–40% number appears nowhere in
the paper. I then re-fetched the PDF myself and confirmed D1's correction 🔒. **Operational
lesson for the family: WebFetch's summarizer is not safe for extracting magnitudes from PDFs.
Download and read the text.**

**4. (Second pass) A contested peeking figure, resolved by derivation — and a vendor caught
citing selectively.** A shipped skill repo's "α = 0.23 at 5 checks" is wrong (0.23 is the
~16-look value; 5 looks gives 0.142); I reproduced the full Armitage table from first principles
and validated it against two published anchors and an exact K=1 check — §1.4a. Separately,
GrowthBook's Microsoft CUPED citation quotes the one product surface where CUPED worked and omits
the companion surface where it did essentially nothing — §1.5.

**3. An internal discrepancy in a primary source, resolved.** The Seven Rules paper's Bing table
gives Revenue/User skewness **17.9**, while its body text says **18.2**. I flagged this via
arithmetic (355 × 17.9² = 113,746 ≈ the stated 114k ✓; 355 × 18.2² = 117,590 ✗). D1 then found
the answer: the PDF carries a **published erratum dated 2015-01-06** — *"The paper was published
with skewness of 18.2 and 5.3 instead of 17.9 and 5.2."* **Cite 17.9.** Kohavi's own KDD papers
ship errata; that is itself a useful data point for the pack's verify-don't-just-cite ethic.

---

## 1. Canon anchors — exact sourced figures

Pointer: `_raw/web-experiment-canon.md` §§1–9; `_raw/web-lead-slice.md` §§9–10.

### 1.1 🏆 The win-rate figures — traced to the end, and they are NOT one number

This is the most-repeated statistic in the field and it is routinely blended. It is **at least
three distinct claims**. I read both primary PDFs myself.

🔒 **Microsoft, 1/3** — the true primary is Kohavi, Crook & Longbotham, *"Online Experimentation
at Microsoft"*, Third Workshop on Data Mining Case Studies and Practice Prize, **2009**
(`exp-platform.com/Documents/ExP_DMCaseStudies.pdf`, 11pp, read in full). The original sentence:

> "Evaluating well-designed and executed experiments that were designed to improve a key metric,
> **only about one-third were successful at improving the key metric!**"

Corroborated by the same paper's own complement: *"at Microsoft, these two cases account for 66%
of experiments."*

🔴 **Four qualifiers everyone drops, plus a missing denominator.** The sentence is scoped to
(a) *well-designed and executed* experiments, (b) those *designed to improve a key metric*,
(c) success measured against *that* metric, (d) *at Microsoft*, ~2009. And **the paper states no
sample size, no date range, and no per-property breakdown.** The most-cited quantitative fact in
experimentation has **no published denominator in its own primary source.** It is genuine rung-1
first-party reporting and should be cited — but as *"Microsoft's reported experience, ~2009,
denominator not published,"* never as an industry rate.

🔒 **Bing, 10–20%** — a *different* number by the same authors, in *Seven Rules of Thumb* (KDD
2014), read in full: *"If our success rate on ideas at Bing is about 10-20%, in line with other
search engines…"*

🔒 **Bing, effect sizes when they do win** — same paper: *"most fail, and those that succeed
improve key metrics by **0.1% to 1.0%**, once diluted to overall impact."* 📄 D1 flags the 2020
book restates this as **0.1%–2%** — two distinct dated statements; **do not merge them.**

📄 **Slack, ~30% of monetization experiments** — Fareed Mosavat (2019), via Kohavi/Tang/Xu (2020)
Ch.1: *"only about 30% of monetization experiments show positive results; 'if you are on an
experiment-driven team, get used to, at best, 70% of your work being thrown away.'"* **Scoped to
monetization**, not all experiments.

⚠️ **Google, "12,000 experiments in 2009, ~10% led to business changes"** — D1 traced this to
**Jim Manzi's book *Uncontrolled* (2012)**, not to any Google publication. Kohavi is quoting
Manzi. **Never attribute to Google as first-party.**

⚠️ **Booking.com, "~90% of experiments fail"** — D2 traced it to **Stefan Thomke's HBR case
study (2019-09-03)**, which reports Booking's self-description secondhand. **Not traceable to
any Booking-authored source.** Booking's own blog (booking.ai) is now offline.

⚠️ **Netflix, "90% of what they try is wrong"** — 🔒 I found its earliest form in the 2009
Microsoft paper: it is **Mike Moran's 2007 book characterizing Netflix**, re-quoted by Kohavi,
and repeated ever since as though Netflix published it. **Not a Netflix statement.**

⚠️ **Quicken Loans "33%"** — 🔒 Regis Hadiaris via Moran (2008), and it is **not a win rate at
all**: it measures *his accuracy at predicting outcomes*. Its numerical coincidence with
Microsoft's one-third is almost certainly why the two get conflated.

> **The single most valuable structural finding of this channel:** once traced, **only the
> Microsoft 1/3 and the Bing 10–20% are first-party**, and neither carries a published
> denominator. Every other famous win-rate number is a book author's paraphrase, a consultant's
> case study, or a different quantity entirely. D2 reached this independently: *"none of the
> 'N% of experiments win' folklore in this whole corpus is actually first-party-precise, once
> traced."* **Two channels, same conclusion.**

### 1.2 🏆 The Bayes calculation — the strongest flagship candidate found

*Seven Rules of Thumb* (KDD 2014), Rule #2. 🔒 Read in full, arithmetic re-derived by me.

> "if α is the statistical significance level (usually 0.05) and β is the type-II error level
> (normally 0.2 for 80% power), π is the prior probability that the alternative hypothesis is
> true … **P(TP|SS) = (1−β)π / [(1−β)π + α(1−π)]** … Using α = 0.05, β = 0.20, if we have a
> prior probability of success of 1/3 … then the posterior probability for a true positive
> result given a statistically significant experiment is **89%**. However, if breakthrough
> results noted in Rule #1 are one in 500, then the posterior probability drops to **3.1%**."

🔒 **Both re-computed exactly:** π=1/3 → 88.9%; π=1/500 → 3.11%. ✅

🔒 **My extension, using the paper's own Bing figure** (the paper does not do this):

| your real prior hit rate π | P(true positive \| p<0.05) |
|---|---|
| 50% | 94.1% |
| 1/3 — Microsoft average | 88.9% |
| 20% — Bing, high end | 80.0% |
| **10% — Bing, low end** | **64.0%** |
| 5% | **45.7%** |
| 1/500 — breakthrough ideas | 3.1% |

**Why this is the flagship.** It is *interpretation* — the half of experimentation `data`
explicitly disclaimed and handed to growth (§7.1). It is rung-1 primary, re-derivable from four
numbers so it can never go stale, and it says what tactic-list incumbents do not: **a
"statistically significant winner" is not a fact, it is a posterior, and its trustworthiness is
set by a hit rate you knew before you ran the test.**

🔥 **The compounding argument, which appears to be unmade anywhere in this corpus.** Small teams
are pushed toward *bigger, bolder* bets — they are the only ones their traffic can detect
(§2, §6). But bigger bets have *lower* priors. So the two effects **compound rather than
cancel**: the smaller your sample, the more ambitious your test must be, and the more ambitious
your test, the less a significant result means. This is a genuinely novel synthesis available
from primary sources, and it is the intellectual core the pack should be built on.

### 1.3 🔒 Rule #7 "Have Enough Users" — the canon corrects a named traffic-floor rule

> "Our advice in previous articles is that you need 'thousands' of users in an experiment;
> **Neil Patel suggests 10,000 monthly visitors, but the guidance should be refined to the
> metrics of interest.**"

And — critically — the canon stating the standard power formula is only a *floor*:

> "**Formulas for minimum sample size … provide one lower bound, but these assume that the
> distribution of the mean is normal.** Our experience is that many metrics of interest in
> online experiments are skewed which may require a higher lower bound before you can assume
> normality."

The paper's rule: **355 × s²** per variant (s = skewness), *"when |skewness| > 1"*, derived from
Boos and Hughes-Oliver. Its Bing table (post-erratum), with my arithmetic check:

| Metric | \|Skewness\| | Sample size | Sensitivity @80% power | 🔒 355·s² check |
|---|---|---|---|---|
| Revenue/User | 17.9 | 114k | 4.4% | 113,746 ✓ |
| Revenue/User (capped) | 5.2 | 9.7k | 10.5% | 9,599 ✓ |
| Sessions/User | 3.6 | 4.70k | 5.4% | 4,601 ✓ |
| Time To Success | 2.1 | 1.55k | 12.3% | 1,566 ✓ |

Plus: *"At a commerce site, the skewness for purchases/customer was >10 and for revenue/customer
>30"* → 🔒 implies **>35,500** and **>319,500** observations per arm respectively, for normality
alone.

🔥 **Metric choice moves the feasibility threshold by two orders of magnitude, and that is a
design decision — growth's, not data's.** A solo founder's instinct ("I'll measure revenue per
user, it's what matters") selects the single hardest metric in the table. *Time To Success*
needed 1,550. This is one of the most actionable, most under-taught findings in the channel.

⚠️ Not licensed: "revenue needs 114k." Skewness is product-specific. Teach *measure your own
skewness, apply 355 × s²*.

### 1.4 🔒 Peeking — the peer-reviewed anchor

Johari, Koomen, Pekelis, Walsh, *"Peeking at A/B Tests"* (KDD 2017). I fetched and read it.

> "even with **10,000 samples** (quite common in online A/B testing), we find that the false
> positive probability can easily be **inflated by 5-10x**. That means that, throughout the
> industry, users have been drawing inferences that are not supported by their data."

> "if the null hypothesis is rejected the first time the p-value crosses α, with increasing data
> the false positive probability **approaches 100%**!"

A nominal 5% becomes **25–50% actual** at 10,000 samples. **Prefer this to Evan Miller** for
load-bearing claims.

🔒 **Evan Miller (2010)** — rung 3, useful as the accessible illustration, scope-limited: his
**26.1%** figure is from a *specific simulation* (150-observation max, stop at first
significance). His correction schedule: **2.9% / 2.2% / 1.8% / 1.4% / 1.0%** at 1/2/3/5/10
peeks. He also states n = 16σ²/δ².

📄 **RESOLVED (second pass) — what always-valid inference costs is NOT a flat tax.** D1 went
back and read §5 "Detection Performance" in full. On Optimizely's own 10,000-experiment sample,
mSPRT usually reaches significance with **fewer** samples than a comparable fixed-horizon test,
because accurate a-priori effect-size knowledge is *"rarely achievable."* The penalty only
appears at very high power targets (β≥0.9) **with an accurately known effect size**. 🔥 This
inverts the folk claim that sequential testing "costs you power" — in realistic conditions it
usually saves samples, because the fixed-horizon alternative requires a guess you don't have.

### 1.4a 🏆 The peeking inflation table — 🔒 contested claim resolved by derivation

The controller flagged a live dispute: a skill repo (RBraga01) claims α inflates to **0.23 at 5
checks**; Channel A's lead held **~0.14 at 5, ~0.25 at 20** from Armitage, McPherson & Rowe
(1969, *JRSS-A* 132(2), 235–244). Neither was shippable unverified.

The paper's Table 2 is paywalled, so I obtained two published anchors from Lakens's open-access
textbook (which cites Armitage in full) — *"the alpha level inflates to **0.142 after 5 looks,
0.374 after 100 looks**"* — and then **computed the whole table myself** using the recursive
numerical integration the literature specifies (Lan & DeMets describe it as *"a recursive density
function, evaluated by numerical integration as described by Armitage et al."*).

Setup: K equally sized groups, Z_k = S_k/√k, **two-sided test at a constant nominal α=0.05 at
every look**, stop at first |Z_k| > 1.96.

| K looks | 1 | 2 | 3 | 4 | **5** | 10 | 15 | **20** | 25 | 50 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Type I error | **0.0500** | .0833 | .1075 | .1265 | **.1418** | .1934 | .2252 | **.2480** | .2659 | .3207 | **.3737** |

✅ **The computation reproduces both published anchors exactly** (5 → 0.1418 vs 0.142; 100 →
0.3737 vs 0.374) and returns **exactly 0.0500 at K=1**, the strongest available sanity check.
Converged across grid steps.

🔴 **Verdict: Channel A's lead is correct; RBraga01's figure is wrong.** 0.23 is the value at
**~16 looks**, not 5. **Do not ship it** — and note it as a specimen for the incumbent-quality
argument: a confidently stated, uncited, wrong number in a shipped skill.

🔥 **The reconciliation the pack should teach — these are one curve, not competing claims:**

| Source | Figure | Setup | Position on the curve |
|---|---|---|---|
| Armitage et al. 1969 | 0.142 | 5 discrete looks, constant nominal α | K=5 |
| Evan Miller 2010 (rung 3) | 0.261 | continuous, 150-obs max | ≈ K=25 (0.266) — **matches well** |
| Johari et al. 2017 (rung 2) | "5–10x" → 25–50% | continuous, 10,000 samples | many-looks region |
| Johari et al. 2017 | → 100% | continuous, unbounded | K→∞ |

**Continuous monitoring is the K→∞ limit of the Armitage table.** Teaching it as one question —
*"how many times did you look?"* — is correct and far more useful than quoting any single number.

⚠️ These figures assume a **constant nominal threshold at equally spaced looks**. They do **not**
apply to a group-sequential design with alpha-spending (O'Brien-Fleming/Pocock), which exists to
hold the overall rate at 0.05. Always state K, the nominal α, and two-sidedness.

📄 **What Bayesian methods do and do not protect against** — GrowthBook's docs state it
precisely: posteriors remain coherent under early stopping, but *"the decision to stop early can
still result in inflated false positive rates."* **"Bayesian methods are immune to peeking" is
false**, and the vendor selling Bayesian-by-default says so.

### 1.5 📄 CUPED — 🔒 re-verified by me against the primary PDF

Deng, Xu, Kohavi, Walker (WSDM 2013). I re-fetched and confirmed every figure D1 reported:

> Abstract: *"we can reduce variance by about **50%**, effectively achieving the same statistical
> power with only half of the users, or half the duration."*
> Conclusions: *"Three important recent experiments showed variance reductions of **45%, 52% and
> 49%** with one week of experiment and one week of pre-experiment data."*
> §5.2.3: *"One notable exception is **revenue-per-user**, where CUPED reduced the variance by
> **less than 5%** due to the low correlation…"*

🔒 **The <5% revenue-per-user counter-example is as important as the 50%.** CUPED's payoff is
metric-dependent; a blanket "CUPED halves your variance" is contradicted by the source paper.

🔒 **CUPED does nothing for new users.** The paper says so (*"if we want to … conduct an
experiment on new users, there are no pre-experiment data to work with"*), and **two vendors
independently confirm it**: Eppo (*"generally less effective for newer users; if you are running
an experiment on a change in the onboarding flow for new users, there is no prior data to
leverage"*) and Statsig (*"New Users won't have pre-experiment data"*).

🔒 **FOURTH source, and a second distinct failure mode — Netflix's own KDD 2016 paper.** Traced
past GrowthBook to the primary at the controller's request: Xie & Aurisset, *"Improving the
Sensitivity of Online Controlled Experiments: Case Studies at Netflix"*, **KDD 2016** (PDF read
in full). The 40% figure GrowthBook cites is **verified and fairly rendered** — *"the amount of
variance reduction is consistently around 40% for all the streaming thresholds"* — scoped to
**existing users, streaming metrics**. But the adjacent sentences matter more:

> "For **new users**, the amount of variance reduction achieved is **very low** regardless of the
> metric or the variance reduction technique used… the Pearson correlation between the covariates
> and business metrics ranges from **0.2 to 0.4** for new users."

> "For **retention**, while the amount of variance reduction is **small for both new and existing
> users**, it is higher for new users."

🔥 **This is the load-bearing seam, now sharper than in the first pass.** CUPED — the field's main
answer to "my sample is too small" — performs worst on **exactly the two things a growth pack is
about: activation (new users) and retention.** These are *two separate failures*: new users lack
correlated covariates; **retention resists variance reduction even for existing users with full
history.** Four independent sources on the first (CUPED primary, Eppo, Statsig, Netflix); Netflix
is the only source found on the second. **The small-sample problem cannot be variance-reduced
away precisely where growth lives.**

🔴 **And the Microsoft figure is selectively cited by the vendor.** Cosgrove, Townsend & Litz,
*"Deep Dive into Variance Reduction"*, Microsoft ExP, **2022-11-15** (12-week sample of week-long
experiments) reports **two surfaces with opposite outcomes**: Surface 2 shows *">55% of metrics
have effective traffic multiplier >1.2x"* (the 20% GrowthBook quotes) — but Surface 1 shows
*">68% of metrics have effective traffic multiplier ≤1.05x"*, i.e. **essentially nothing**.
GrowthBook cites only Surface 2. The article's actual thesis is that **CUPED efficacy varies
enormously between products**. ⚠️ Also note a separate **simulated** figure in the same article
(R²=0.4 → median multiplier **1.66** → *"power gain of 22%"*) that must never be presented as
measured, and that "1.66× traffic" ≠ "20% more traffic". **Cite Microsoft directly, and always
carry Surface 1 with the number.** This completes rather than contradicts data-skill's file,
which correctly labelled both figures "vendor-reported, not independently verified."

📄 **CUPED can flip a sign.** D1 extracted the paper's own worked example: using an
in-experiment covariate produced a *statistically significant negative* estimate on a
known-positive effect. Cautionary example of publication quality.

### 1.6 📄 SRM — prevalence, traced

Fabijan, Gupchup, Gupta, Omhover, Qin, Vermeer, Dmitriev, KDD 2019 (D1 read full text).
**~6% of experiments at Microsoft** exhibit SRM (2019 study, ~1yr lookback); **~10% of triggered
analyses at LinkedIn** (Chen et al. 2018, one citation hop). ⚠️ **Do not blend** — different
populations, years, companies. Taxonomy: **5 categories, 25 causes, 10 diagnostic rules of
thumb.** Detection: chi-square; worked example 50.2/49.8 on 1.6M users is already p < 1-in-500k.
Research base: >10,000 experiments across 4 companies.

*Note: D2 listed SRM prevalence as unresolved in its own UNTRACED list. **D1 resolved it.**
Cross-channel resolution — the report is the place this gets reconciled.*

### 1.7 📄 Other canon anchors worth carrying

- **A/A tests** — formal definition and the two uses (variance estimation for power; platform
  validation, should reject ~5% of the time). Recommended identically in the 2012, 2013 and 2015
  papers. **The most strongly corroborated practice recommendation in the whole corpus.**
- **Novelty/primacy effects are "uncommon"** (KDD 2014) — 🔥 **cuts against the near-universal
  practitioner habit of invoking novelty to explain away early results.** Falsification target.
  Related: KDD 2012 gives the day-1/day-2 out-of-band probabilities (**67% / 55%**), i.e. early
  "trends" are overwhelmingly noise, demonstrated on an actual A/A test.
- **For some metrics, running longer does not add power** (KDD 2012) — the coefficient of
  variation grows over the window for count metrics like Sessions/user, offsetting 1/√n. *"Running
  the experiment longer does not provide additional statistical power for these metrics."* Fix:
  more users per day, not more days. **Directly contradicts the universal "just run it longer"
  advice.**
- **Multiple-testing inflation** (KDD 2013): 5 treatments → 12% false-positive rate; six
  iterations of 5-treatment experiments → **>50%** chance of a spurious significant win.
- **Carryover effects** persist ~3 weeks typically, **>3 months** after a severe case.
- **Long-term ≠ short-term** (Hohnhold, O'Brien, Tang, Google, KDD 2015): ads-blindness learning
  **half-life ≈ 60 days**; a **90-day study captures only ~65%** of the eventual effect.

---

## 2. Company blogs — durable lessons

Pointer: `_raw/web-company-blogs.md`. All 📄 unless marked.

### 2.1 Cross-company convergence — the strongest invariant candidates

D2 required a teaching to be *explicitly stated* (not implied) by 3+ independent companies:

1. **Decouple experiment configuration from business logic** — LinkedIn (Lix), Airbnb (ERF),
   Booking.com (their arXiv paper), Uber (Parameters). **4-way**, each naming its absence as a
   cause of scaling failure.
2. **Check guardrails before shipping a primary-metric win** — Netflix, Microsoft ExP (STEDI),
   Duolingo (revenue-up/retention-down on Duolingo Plus), Booking. **3–4-way, all first-party,
   each with a dated example.**
3. **Pre-commit sample size from a power calculation; "has p crossed 0.05 yet" is not a stopping
   rule** — Airbnb, Spotify, Netflix (*"in principle, the data are examined only once, at the
   conclusion of the test"*). **3-way, all first-party.**
4. **A shared capacity-constrained resource breaks A/B independence and requires a coarser
   randomization unit — as a bias-variance tradeoff, not a free upgrade** — Lyft, DoorDash,
   LinkedIn. **3-way**, though via different mechanisms (see divergence).
5. **A low win rate is a feature of a healthy program** — Netflix explicit and repeated; Duolingo
   frames underperformers as learning. D2 honestly grades this **2-way first-party** with
   secondhand support, refusing to overclaim.
6. **Rebuild the metrics pipeline around the shared data source, not the experiment** — Airbnb
   (24hr→45min), Netflix (Metrics Repo), Microsoft. Architecture, not culture.

### 2.2 Divergences — where the pack must not pick a side

- **Sequential testing: group-sequential vs. always-valid.** Spotify's own published position is
  explicitly *"it depends"* — GST when you can pre-estimate a max sample, AVI when you can't.
  **A first-party statement that no universal peeking-fix exists.** The pack should say this
  plainly rather than recommending one.
- **Interference fixes: switchback/geo (Lyft, DoorDash) vs. ego-cluster (LinkedIn).** Not
  contradictory — *different mechanisms for different interference structures*. Teach **diagnose
  the interference mechanism first**, never "switchbacks are the fix for network effects."
- **Disclosure asymmetry.** Lyft redacted its Y-axes "for confidentiality"; others published
  infrastructure scale freely. **Companies disclose infrastructure numbers far more readily than
  effect sizes or bias magnitudes.** Useful caution: the public record is systematically biased
  toward scale bragging and away from effect sizes.

### 2.3 Netflix interleaving — correctly scoped by D2

> "We find that interleaving is very sensitive: it requires **>100× fewer users** than our most
> sensitive A/B metric to achieve 95% power."

⚠️ **Scope, from the same paragraph:** the figure comes from **one** comparison of two
known-quality rankers, via bootstrap subsampling. Netflix uses interleaving only as a **first-
stage pruning step** ahead of a real A/B test, *because interleaving cannot measure retention*.
The durable insight is the repeated-measures/paired-design principle (same logic as CUPED), not
the number. **D2's handling here is exemplary and the report adopts it unchanged.**

---

## 3. Papers / quasi-experiment layer

Pointer: `_raw/web-papers-quasi.md`. All 📄.

### 3.1 🏆 The "when you cannot randomize" decision inventory

D3's most valuable artifact: every alternative design with **the minimum data requirement stated
by its own literature**. The headline result is itself the finding:

> **Almost none of these methods state a numeric floor.** Geo experiments (Vaver & Koehler),
> Trimmed Match, GeoLift, and synthetic control all decline to give one.

- **Trimmed Match** (Chen/Longfils/Remy 2021): no stated floor; **worked example uses 5 geo
  pairs (10 geos)**.
- **GeoLift** (Meta): no stated minimum; documented example uses **40 locations**; docs
  **explicitly concede geo-testing is lower-power than individual-level testing** — a design of
  last resort, per Meta's own docs.
- **Synthetic control** (Abadie 2021 JEL review): **deliberately gives no pre-period floor.** The
  requirement is *fit quality*, plus convex-hull containment, a clean donor pool, and no
  anticipation. The single best sentence in the corpus for this idea:
  > **"a large T0 cannot drive down the bias if the fit is bad."**
- **Staggered-adoption DiD**: not a data-volume requirement but a **structural invalidity
  warning** — standard two-way fixed effects can sign-flip relative to every true effect when
  timing is staggered and effects are heterogeneous, **regardless of sample size**. The fix is a
  different estimator (Callaway & Sant'Anna; de Chaisemartin & D'Haultfœuille; Sun & Abraham),
  **not more data.**
- **Marketplace/network**: Blake & Coey's aggregation fix trades bias for variance — *"a
  bias-variance trade-off in defining the market scope,"* no free minimum.
- ⚠️ **Interrupted time series and regression discontinuity: UNTRACED** — no primary source
  fetched. Clean gap for a follow-up.

🔥 **Disposition for the pack:** "how much data do I need for a quasi-experiment" has **no
literature-stated answer**, and the honest teaching is a *qualitative precondition checklist*
(fit quality, donor pool, no anticipation, interference structure), **not a number**. That is a
far more defensible position than any competitor's "use synthetic control if you have N weeks."

### 3.2 Repo licenses and maintenance — read from LICENSE files, per charter

| Repo | License (file read directly) | Last commit | Verdict |
|---|---|---|---|
| `google/trimmed_match` | **Apache-2.0** | 2023-06-01 | **De facto unmaintained** (~3 yrs stale, not archived). README: *"not an officially supported Google product. For research purposes only."* |
| `facebookincubator/GeoLift` | **MIT** (in `LICENSE.md`, not `LICENSE`) | 2026-04-01 (pushed 2026-06-30) | **Actively maintained**, repostatus "Active" |

⚠️ Note the `LICENSE.md` filename — exactly the trap the charter's list-every-license-file rule
exists to catch.

### 3.3 Consistency with marketing's shipped Lewis & Rao claim

🔒 I read marketing's shipped file. It ships, verbatim:

> "Lewis & Rao (*QJE* 130(4), 2015) analyzed 25 large field experiments … an informative
> advertising experiment 'can easily require more than 10 million person-weeks' … the median
> campaign in their dataset would need to be **9× larger to distinguish a genuine +50% ROI from
> breakeven, and 62× larger to resolve a 10% ROI difference.**"

🔒 **The consistency rule growth must follow.** Marketing's claim is about **advertising lift**,
where the outcome is total sales and the ad effect is a sliver of an enormous baseline variance.
Growth's on-site experiments have a **structurally better signal-to-noise ratio**: the outcome is
a specific funnel step, the variance is binomial and bounded, and treatment reaches 100% of the
assigned arm. Growth may therefore say **on-site product experiments are far more measurable
than ad-lift experiments** — but §1.3 and §6 show growth's floors remain out of reach for small
products. **The honest family line: "marketing's scale problem is worse; growth's is not
solved."** Do not let the pack imply on-site testing escapes the power problem.

⚠️ **Ghost Ads magnitudes are UNTRACED.** D3 could not open the primary (SSRN Cloudflare-gated,
JMR paywalled); the figures in circulation come from an abstract page and a search snippet.

---

## 4. Industry layer — with sample caveats

Pointer: `_raw/web-plg-cro-industry.md`. All 📄.

### 4.1 🏆 The Sean Ellis 40% test — the provenance is thin in a specific, documentable way

D4 ran the chain to its end. **Every secondary source repeats the same two facts — "40%" and
"nearly 100 startups" — and not one cites a dataset, company list, year range, or methodology.**

- Ellis's own archive (startup-marketing.com, fetched 2026-08-01) **does not contain the original
  post**; it redirects to Substack, visible content stops at Jan 2013.
- Sources **cannot even agree on the sample**: "nearly 100 startups" vs. "hundreds."
- **Validation studies found: ZERO.** No peer-reviewed or independent prospective test of whether
  the 40% threshold predicts anything.
- **Best critique** — Lewis & Sauro, MeasuringU, 2022-03-15 (named, dated, statistically
  literate): *"there is little compelling evidence to support its promotion for use in
  practice"*; the threshold *"sounds authoritative and precise, but it's based on the intuition
  of its originator."* Plus the decisive arithmetic: **at the commonly-suggested n=50, the 95%
  margin of error around a 40% estimate is ±13% (plausible range ~27–53%)**, versus ±3% at
  n=1,000. **Most practitioners running this survey cannot tell which side of the threshold they
  are on.**
- **Documented false positive**: Kromatic/StartupSquare — scored above 40%, had no PMF. Rung 4,
  self-disclaimed, but a named first-person case.

**Verdict: rung 3 at best, shading to rung 4 for the specific numbers.** Exactly the charter's
target profile — a number without a denominator, repeated for 15 years, traceable to nothing.

### 4.2 PLG benchmarks — the sample caveats are the finding

Every benchmark in this genre fails at least one of the five provenance fields. Highlights:

- 🔥 **The publisher admits portfolio contamination.** OpenView's own footnote states some
  benchmarked companies are **its own VC portfolio**. A VC's benchmark of its own portfolio is
  not a market measurement.
- 🔥 **Structural sampling bias by construction.** Mobile-retention vendors (AppsFlyer, Adjust,
  GameAnalytics) sample **only apps that installed that vendor's SDK** — systematically excluding
  the least-resourced apps, which is precisely the population a solo reader belongs to.
- 🔥 **Citation laundering, caught.** ChartMogul's 2026 report and Kyle Poyar's *Growth Unhinged*
  newsletter are **the same survey (200 products, Jan 2026) republished under two brands** —
  showing how few genuinely independent samples underlie the entire genre. **This is the
  strongest single piece of evidence for treating the PLG benchmark literature as one source
  wearing several hats.**
- **ProductLed** publishes nine figures to high apparent precision from "600+ SaaS businesses"
  with **zero disclosed recruitment method and zero response rate.**
- ⚠️ **OpenView wound down December 2023** (multiple outlets dated 2023-12-06 — see
  `_raw/web-plg-cro-industry.md`, which had already corrected an earlier "~Dec 2024" guess).
  Its site still serves the 2021–2023 benchmark editions live (curl-verified HTTP 200,
  2026-08-01) with nobody left to correct or retire them — a defunct firm's benchmarks still
  circulating as current is **itself the finding**; only the 2019/2020 editions need
  archive.org. [CONTROLLER CORRECTION 2026-08-02: this line originally said "~Dec 2024" and
  "survive only via archive.org", regressing on its own raw file — spec review caught it.]

### 4.3 Pricing, retention, habit

- **Van Westendorp** — provenance traced (Peter van Westendorp, 1976, ESOMAR); the standing
  critique is the **stated-preference / hypothetical-answer problem**, structurally the same
  objection MeasuringU raises against the Sean Ellis survey. Note the convergence: **two of
  growth's most-used survey instruments share one methodological weakness.**
- ⚠️ **"20% DAU/MAU is good, 50% is exceptional"** — attributed to Facebook/Andrew Chen across
  ~8 vendor blogs; **none cites a primary source. UNTRACED.**
- ⚠️ **GameAnalytics D1/D7/D30 benchmarks** — the report is lead-gated; even the sample size is
  not public. **Every number in circulation is unverifiable.**
- **Dark patterns — the one place with real peer-reviewed data.** Mathur et al., CSCW 2019:
  **11.1% of 11,000 crawled shopping sites** had at least one dark pattern; **1,818 instances
  across 15 types.** Plus the FTC's Sept 2022 staff report naming four misuse categories, with
  enforcement following (Vonage, $100M, Nov 2022). 🔥 **A rare rung-2 anchor in a rung-4
  neighborhood** — the pack's ethics table should be built on this, not on opinion.
- **The Hook model's ethics dispute is internal.** Its popularizer (Eyal) and its most prominent
  critic (Harris) **trained in the same Stanford persuasive-technology program** — this is a
  split within the practitioner tradition, not an outside objection.

---

## 5. Falsification strips

Claim → independent evidence classes against it. Evidence class is labelled, per charter.

| Claim | Class 1 | Class 2 | Class 3 |
|---|---|---|---|
| **"The Sean Ellis 40% test predicts PMF"** | *Practitioner admission*: MeasuringU (2022) — "little compelling evidence to support its promotion for use in practice" | 🔒 *Arithmetic*: at n=50 the 95% CI on a 40% estimate spans ~27–53% — too noisy to locate yourself relative to the threshold | *Named false-positive case*: Kromatic/StartupSquare scored >40% with no PMF |
| **"Red beat green by 21%" proves button color drives conversion** | *Missing denominator*: ~2,000 visits, one run, no stopping rule, **zero replications in 15 years** | 🔒 *Arithmetic (winner's curse)*: an effect that large at that sample is the signature of an underpowered test, inflated whether or not any true effect exists | *Canon*: Kohavi's **Rule #3 "Your Mileage WILL Vary"** explicitly warns against transplanting published results — *"Make sure to replicate ideas, as they may not have the same effect (or even a positive effect)"* |
| **"100 conversions (or 1,000 visitors) per variant is enough"** | 🔒 *Arithmetic*: required n depends on the **relative effect you want to detect**, which the rule never states. At a 10% baseline, 100 conversions/arm ≈ 1,000 exposures — powered for ~+50% relative (565/arm) but nowhere near +20% (3,532/arm). **It is a floor for enormous effects with the qualifier stripped off.** | *Practitioner inconsistency*: competing "standards" coexist unreconciled (1,000/100 vs. 20,000–50,000/1,000+) because each is silently tuned to a different unstated MDE | 🔒 *Vendor self-contradiction*: mida.so's "60,000/variant" understates the correct two-sided figure (76,919) by ~22% via an **undisclosed one-sided test** |
| **Vendor PLG benchmarks describe "the market"** | *Publisher's own admission*: OpenView footnote — some benchmarked companies are **its own portfolio** | *Structural bias*: SDK-based retention vendors sample only apps that installed their SDK | *Citation laundering*: ChartMogul 2026 and Growth Unhinged are **the same 200-product survey under two brands** |
| **"Most experiments fail — everyone knows the number"** | 🔒 *Primary-source scope*: Microsoft's 1/3 (2009) carries four dropped qualifiers **and no published denominator** | 🔒 *Chain-break*: the Netflix 90% is a **2007 book author's paraphrase**, not a Netflix statement; Booking's 90% traces to **Thomke's HBR case study**, not Booking; Google's 10% traces to **Manzi's book**, not Google | 🔒 *Category error*: Quicken Loans' "33%" measures **prediction accuracy**, not a win rate — a different quantity that gets conflated by numerical coincidence |
| **"Novelty effects explain the early spike"** | 🔒 *Canon contradiction*: KDD 2014 states novelty/primacy effects are **"uncommon"** | 🔒 *Canon arithmetic*: KDD 2012 — day 1 has a **67%** chance of falling outside the final CI, day 2 **55%**; early "trends" are overwhelmingly noise | 🔒 *Demonstration*: the paper's own illustrative "trend" graph came from an **actual A/A test**, where ground truth was zero |
| **"Bayesian methods let you peek safely"** | *Vendor contradiction*: GrowthBook, which defaults to Bayesian, states early stopping *"can still result in inflated false positive rates"* | 🔒 *Theory*: Johari et al. — under stop-at-first-crossing the false-positive rate **approaches 100%** regardless of the inference framework | 🔒 *Distinction*: Bayesian updating protects the **coherence of the belief state**; it does not protect the **decision rule** built on top of it |
| **"Just run the test longer"** | 🔒 *Canon contradiction*: KDD 2012 — for metrics like Sessions/user the CV grows over the window, so *"running the experiment longer does not provide additional statistical power."* Fix is more users/day | *Design cost*: carryover effects persist ~3 weeks to >3 months, so longer windows import contamination | 🔒 *Peeking interaction*: a longer window with unchanged peeking habits **increases** the false-positive rate |
| **"CUPED will rescue your small sample"** | 🔒 *Primary counter-example*: revenue-per-user saw **<5%** reduction at Bing | 🔒 *Two-vendor convergence*: Eppo and Statsig both state CUPED **does not work for new users** — the exact population of onboarding/activation tests | 🔒 *Primary*: the paper's own worked example shows a bad covariate **flipping the sign** of a result |

---

## 6. Never-ship candidates

Volatile, undenominated, or scope-stripped magnitudes. The controller gates these.

| Figure | Source | Date | Why |
|---|---|---|---|
| "1/3 of A/B tests win" *without* its four qualifiers | Kohavi/Crook/Longbotham | 2009 | 🔒 Microsoft-only; scoped to well-designed experiments targeting a key metric; **no published denominator** |
| "Netflix says 90% of what they try is wrong" | Moran's book, via Kohavi | 2007 | 🔒 **Not a Netflix statement** — a book author's characterization, two removes |
| "Booking.com: ~90% of experiments fail" | Thomke HBR case study | 2019 | Not traceable to any Booking-authored source; booking.ai now offline |
| "Google: 12,000 experiments, 10% led to changes" | Manzi, *Uncontrolled* | 2012 | 🔒 Not a Google publication |
| "one in 500" as a breakthrough rate | Kohavi KDD 2014 | 2014 | 🔒 Offered **hypothetically** ("if … are one in 500"), never asserted as measured |
| Bing dollar figures ($10M/1% revenue; $100M/change; $150M loss) | Kohavi KDD 2013/2014 | 2013–14 | Company-scale-specific and a decade old |
| Knight Capital "$440M loss, 75% of equity" | via Kohavi KDD 2014 | 2012 | 🔒 Secondhand, uncited in source; a finance anecdote, not a growth magnitude |
| "60,000 visitors per variation" | mida.so | 2025-12-05 | 🔒 Silently **one-sided**; two-sided answer is 76,919 (~22% understated) |
| "<10,000 monthly visitors is too small" + the 4-tier table | mida.so | 2025-12-05 | 🔒 Bare, unsourced, no α/power/MDE stated |
| "a few hundred visits per month" suffices for testing | AB Tasty | 2014-07-17 | 🔒 Unsourced; **~3 orders of magnitude** off the same industry's own calculators |
| "5–10 conversions/week" and "1,000 visitors/week" = low traffic | Eisenberg, Rich Page via VWO | undated | 🔒 Practitioner opinion, no derivation |
| "PQL tracking increased likelihood of fast growth by 61%" | OpenView | 2023 | Correlational self-report in causal language; portfolio contamination admitted |
| "Only 5% of freemium signups convert" | OpenView | 2022 | Self-selected 450+ respondents, no sampling frame |
| ProductLed's nine figures from "600+ SaaS businesses" | ProductLed | 2025-02-05 | Zero recruitment method, zero response rate, no methodology section |
| "Red button beat green by 21%" | Performable/HubSpot | ~2010–11 | ~2,000 visits, one run, no stopping rule, no replication |
| "$300 million button" | Spool/UIE | 2009 | Company never named; no checkable financials |
| "20% DAU/MAU is good, 50% exceptional" | attributed to Facebook/Chen | undated | **UNTRACED** across ~8 vendor blogs |
| GameAnalytics / AppsFlyer / Adjust retention benchmarks | vendors | various | Lead-gated; sample size not public; SDK-selection bias |
| Sean Ellis "nearly 100 startups" | secondary only | ~2009 | No company list, no methodology; **sample size itself inconsistently reported** |
| Statsig "SE went from 4.73 to 2.13" | statsig.com/blog/cuped | 2024-09-15 | 🔒 A **running-mile-times toy example** — must never become "Statsig reports X% variance reduction" |
| "0.1% revenue at Facebook = $100M+/yr" | statsig.com/blog/cuped | 2024-09-15 | 🔒 **UNTRACED**, no source in post |
| Netflix ">100× fewer users" as a general claim | Netflix TechBlog | 2017 | Scoped to **one** known-quality ranker comparison; cannot measure retention at all |
| Any baseline conversion rate inferred from Statsig's 48,000/group | derived inference | — | 🔒 Metric type unstated — quote the sentence, never the inference |
| "α inflates to 0.23 at 5 interim checks" | RBraga01 skill repo | — | 🔒 **WRONG** — 0.23 is the ~16-look value; 5 looks gives 0.142 |
| Microsoft's "CUPED ≈ 20% more traffic" **without Surface 1** | Microsoft ExP via GrowthBook | 2022-11-15 | 🔒 Companion surface showed ≤1.05× for >68% of metrics; quoting one surface misrepresents the article |
| Microsoft's "1.66× multiplier / 22% power gain" | Microsoft ExP | 2022-11-15 | 🔒 **Simulated**, not measured; and 1.66× traffic ≠ 20% more traffic |
| "CUPED reduces variance ~40%" as a general claim | Netflix via GrowthBook | 2016 | 🔒 Scoped to **existing users, streaming metrics**; new users get "very low" and retention "small" |

---

## 7. Vendor-stated traffic floors — 🔒 all lead-verified

Pointer: `_raw/web-lead-slice.md` §§1–4. This was my unassigned territory; the analogue of
Meridian/Robyn's stated minimums in the marketing run.

### 7.1 🔒 The derived power table (α=.05 two-sided, power=.80, per arm)

I derived the constant from first principles: **2(z₀.₉₇₅+z₀.₈₀)² = 15.6978**, which is where the
"16" comes from. Anyone using 16 is implicitly committing to α=.05 two-sided and 80% power.

| baseline CR | +2% rel | +5% rel | +10% rel | +20% rel | +50% rel |
|---|---|---|---|---|---|
| 1% | 3,885,195 | 621,631 | 155,408 | 38,852 | 6,216 |
| 2% | 1,922,976 | 307,676 | 76,919 | 19,230 | 3,077 |
| 3% | 1,268,902 | 203,024 | 50,756 | 12,689 | 2,030 |
| 5% | 745,644 | 119,303 | 29,826 | 7,456 | 1,193 |
| 10% | 353,200 | 56,512 | 14,128 | 3,532 | 565 |
| 20% | 156,978 | 25,116 | 6,279 | 1,570 | 251 |
| 30% | 91,570 | 14,651 | 3,663 | 916 | 147 |

**Halving the effect you want to detect quadruples the traffic you need.** These are *exposures
per arm*, not sessions or pageviews.

⚠️ Per §1.3, for skewed metrics (|skewness|>1) this table is a **lower bound only** — the binding
constraint may be 355 × s². The table stands for low-baseline binary conversion metrics; it does
**not** stand for revenue-per-user.

### 7.2 🔒 What the vendors' own docs say

| Vendor | Their own stated number |
|---|---|
| **PostHog** | Publishes the formula **N = (16 × variance)/d²** and a worked example: 10% baseline, 20% MDE → **3,600 per variant, 7,200 total**. (My exact computation: 3,532 ✓ — they use 16 vs 15.6978.) |
| **Optimizely** | Its calculator renders **13,000 per variation** on defaults. I back-solved: this is **3% baseline / 20% relative MDE** (exact 12,689 ✓). **The vendor's own optimistic default already demands 26,000 exposures.** |
| **Statsig** | *"After 1 week, the expected user count per group is **5,200** with an MDE of **21.6%**. By week 4, the user count per group increases to approximately **48,000** and the MDE drops to **7%**."* |
| **GrowthBook** | No hard floor, and the most honest framing found: *"The biggest cost to running a low-powered experiment is that your results will be noisy."* And notably: *"Running an experiment with less than 80% power can still help your business. The purpose of an experiment is to learn about your business, not simply to roll out features that achieve statistically significant improvement."* |
| **Eppo** | No variance-reduction percentage claimed anywhere in its CUPED doc — recorded deliberately, since secondhand sources attribute percentages to Eppo. |

### 7.3 🔥 The vendor contradiction — a falsification strip found *inside single domains*

**On the same domain, the calculator and the marketing blog disagree, and the disagreement runs
in the direction of the vendor's commercial interest.**

| Vendor | Calculator/docs | Low-traffic blog post |
|---|---|---|
| Optimizely | 13,000/variation on defaults | *"…making it **unrealistic** for a website with lower traffic"* |
| VWO | 7-day minimum only | *"running split tests on them **seems futile**"*; concedes *"months or even years"* |
| AB Tasty | (no floor published) | *"Just because your website has low traffic, it does not mean you should forget about A/B testing – **on the contrary!**"* — and "a few hundred visits per month" |

🔒 I arithmetic-checked VWO's own example (5% baseline, 10% lift, 4 variations): **29,826 per arm
≈ 119,000 exposures.** Their "months or even years" is **correct and if anything understated**
for a site at their own definition of low traffic (≤1,000 uniques/week).

⚠️ **Three of Optimizely's five low-traffic workarounds trade validity for speed, and only one is
labelled as such.** Switching to micro-conversions changes *what question you are answering*
(you learn about clicks, not revenue) and is presented as a pure win; lowering α is presented
with its cost. **That asymmetry is itself the finding**, and it is the honest reason a
non-commercial skill can say something the vendors structurally cannot.

---

## 8. Growth-vs-operate disposition

Tamas's special question. The seam: a canary is risk containment (operate); an A/B test is
learning (growth); same flag infrastructure, opposite intent.

### 8.1 🔒 The canonical worked example, from the canon itself

*Seven Rules of Thumb* uses experiments for **exposure control** and says so:

> "We encourage our engineering teams to deploy new code quickly and use experiments to provide a
> form of **exposure control**: start with small 1% treatments, then ramp up if there are no
> egregious declines in key metrics."

🔥 **This is `operate`, not `growth`, and it is the sharpest illustration of the seam found
anywhere in this run.** Identical machinery (a 1% treatment behind a flag), but the **decision
rule is inverted**: a ramp asks *"has anything broken?"* and **proceeds on the null**; an
experiment asks *"did this help?"* and **proceeds on a rejected null**. Growth should cite this
as the worked example and route ramp mechanics to `operate`.

### 8.2 Dispositions

| Item | Goes to | Why |
|---|---|---|
| Power / MDE / feasibility gating | **growth** | Whether a *question* can be answered; nothing to do with system health |
| Vendor traffic floors | **growth** | Same |
| Experiment design, prioritization, interpretation | **growth** | 🔒 `data` explicitly disclaims both (§9.1) |
| "Lower your significance threshold" | **growth** | A *decision-quality* question — how much false-positive risk this decision can carry |
| Gradual ramp / 1% exposure control / canary | **operate** | Risk containment; proceeds on the null |
| Kill-switch on a variant | **both, by intent** | D4: the same button is pressed to stop a *losing* variant (growth) or an *erroring* one (operate); the platform doesn't distinguish |
| SRM, assignment integrity, CUPED mechanics, peek-safe method selection | **data** | 🔒 Already shipped in data's `experiment-measurement-foundations.md` |
| Minimum-data thresholds ("5 vs 2 conversions") | **data** | Measurement validity |
| Retention cohort curve, by intent | **growth or operate** | D4: the same DAU/MAU dashboard is a growth artifact when asked "did our onboarding experiment move week-1 retention" and an operate artifact when watched for a post-deploy regression. **The question asked of the dashboard determines the discipline, not the technology.** |
| Cancellation-flow dark patterns | **growth ethics table**, with legal adjacency | D4: retention tactic (growth) + live-system correctness (operate) + regulatory risk |

---

## 9. 🔴 Family seam audit — the finding that most changes the plan

I read the siblings' shipped reference files on disk. **This was unassigned and it is the
highest-consequence result in my channel.** Pointer: `_raw/web-lead-slice.md` §6.

### 9.1 `data` has already shipped most of the "experimentation validity" canon

File: `data-skill/skills/data/references/experiment-measurement-foundations.md` (189 lines,
shipped). Its scope guard, verbatim:

> "this reference owns measurement **validity** … assignment integrity, sample ratio, variance
> reduction, peeking safety. It does **not** own experiment **design** … or **interpretation** …
> both belong to `growth`."

**Already shipped there — growth must not re-teach:** SRM-before-trust (with Kohavi's "fever"
framing), deterministic assignment / the PlanOut model, assignment-vs-exposure and dilution
correction, CUPED (with a non-applicability list and 14-day default lookback), peek-safe
sequential testing (a three-vendor table), Twyman's Law, OEC + guardrails, Simpson's paradox in
rollouts, bot traffic, survivorship bias, multiple comparisons, and GrowthBook's license
(**bulk MIT + an enterprise-directory carve-out**, verified 2026-07-25).

🔴 **Therefore the obvious flagship — "trustworthy experimentation: SRM, CUPED, peeking" — is
taken by a sibling that shipped it a week ago.** Building growth's flagship there would be the
family's first genuine duplication.

🟢 **What data leaves open, in its own words:** experiment **design** ("what to test, how to size
a rollout") and **interpretation** ("what a validated result means for a decision"). And
critically — **there is no power, MDE, sample-size, or feasibility content anywhere in data's
file.** Its only mention of power calculators is as a feature of `spotify/confidence`. **The
feasibility gate is genuinely unclaimed.**

**Consistency note on CUPED magnitudes.** Data ships, correctly labelled as vendor-reported and
not independently verified (sourced to GrowthBook's docs): *"Netflix (2016) ~40% variance
reduction; Microsoft (2022) ~equivalent to 20% more traffic."* 🔒 The **primary** (Deng et al.,
WSDM 2013, Bing) says **~50%, "equivalent to doubling our traffic."** These are different
companies and years, so **not contradictory** — growth should **lead with the primary** and note
the vendor figures are a separate, weaker claim. Do **not** contradict data's file, which
labelled its own sourcing honestly.

### 9.2 `marketing` cedes sample-size planning to growth — explicitly, twice

🔒 From `marketing-skill/.../attribution-and-measurement.md`:
> line 17: *"The question is experiment design, **sample-size planning**, or a growth funnel test
> — that is `growth`'s territory."*
> line 227: *"…that decision belongs to `growth`; this file stops at 'here is what your scale can
> support.'"*

And `landing-pages-and-conversion.md` cedes CRO's experimental half twice (lines 16, 197):
*"The question is which A/B variant of a brief-satisfying page wins → `growth`."*

⚠️ **But marketing already killed color psychology** (§8): *"'Blue means trust, red means
urgency' is folklore… Brief contrast and isolation instead."* **I sent D4 a course correction
mid-run** so its button-color strip attacks the *experimental* validity of the case studies
(no denominators, no replication, underpowered) rather than re-killing color semantics. D4
applied it and cites the marketing overlap explicitly. **The two strips are now complementary,
not duplicative.**

Also already shipped by marketing (do not re-derive): eBay/Blake-Nosko-Tadelis with its "over
1,400%" overstatement figure.

### 9.3 One live inconsistency to watch

Data's shipped file states a **binary rule**: *"'peek occasionally without a sequential method
and without a fixed horizon' is not a valid third option."* GrowthBook's docs are **softer** on
Bayesian early stopping. These are reconcilable — data is talking about frequentist error
control; GrowthBook makes a narrower claim about which quantities stay interpretable — but a
careless growth reference could look like it contradicts its own family. **Route any Bayesian
optional-stopping discussion through Johari et al. (§1.4), not vendor docs.**

---

## 10. Wedge assessment from this channel

Testing the controller-canon's hypotheses against what the research actually found.

**H1 — Small-sample honesty: SURVIVES, and is stronger than stated.** It now rests on four
independent legs, all lead-verified: (a) the derived power table; (b) the vendors' own
calculators agreeing with it while their marketing blogs contradict it; (c) Kohavi's Rule #7
showing the power formula is only a *lower bound* for skewed metrics, with metric choice moving
the threshold by two orders of magnitude; (d) CUPED — the field's main rescue — **failing
exactly on new users**, the population of onboarding tests. Note the wedge is **not** "you can't
test"; it is **"here is what your scale can and cannot answer, and here is what to do instead."**

**H2 — CRO folklore falsification: SURVIVES,** with §5's strips. Strongest are the Sean Ellis
trace (zero validation studies ever published; ±13% MOE at realistic n) and the arithmetic kill
on "100 conversions per variant." **Constraint:** must not duplicate marketing's color ruling.

**H3 — Adjudication: PARTLY REDIRECTED.** The competitor-facing version is channels A/C's to
judge. But this channel found the more important adjudication is **internal to the family**:
data owns validity, growth owns design + interpretation, and that line is already drawn in
writing by data itself. Growth's job is to be the *other half* of a seam that already exists.

**H4 — Seam inventory is rich: CONFIRMED and now specific.** Two siblings cede to growth in
writing, at named line numbers, and the ceded territory (design, interpretation, sample-size
planning, feasibility) is exactly where this channel's strongest material sits.

**The flagship I would build (§1.2 + §1.3 + §7):** *"Can this question be answered at your
scale — and what does a 'significant' result actually mean given what you knew before you ran
it?"* It is interpretation and design (unambiguously growth's), it is primary-sourced and
re-derivable so it cannot go stale, and its central compounding argument — **smaller samples
force bolder bets, and bolder bets have lower priors, so the two effects multiply** — is not
made anywhere in the corpus this channel searched.

---

## 11. Open gaps (honest list, for the controller)

1. **The `16σ²/δ²` constant with a Kohavi citation** — needs the 2020 book's Ch.17, not obtained.
   The constant is independently derivable (§7.1), so this is a citation gap, not a factual one.
2. ~~The numeric power/sample-size cost of always-valid inference~~ — **RESOLVED second pass**
   (§1.4): not a flat tax; mSPRT usually needs *fewer* samples in realistic conditions.
3. **Ghost Ads magnitudes** — SSRN Cloudflare-gated, JMR paywalled.
4. **Interrupted time series and regression discontinuity** — no primary source fetched at all.
5. **DoorDash's switchback power/variance figures** — JS-rendered site blocked curl and WebFetch;
   would need a browser-capable fetch.
6. **Waudby-Smith (2023) / Howard et al. (2022) confidence sequences** — known only via
   GrowthBook's secondhand citation.
7. **Booking.com's arXiv paper (2004.13077)** was reached, but booking.ai is offline — some
   Booking claims can no longer be re-checked at source.
8. **SaaS price-discrimination legal commentary** and **EU DSA Art. 25** — essentially
   unresearched by D4 (budget exhausted).

**WebSearch budget:** D1 6/20, D2 ~15/20, D3 ~18/20, D4 20/20, lead 2 — **~61 of the channel's
80 allocation.** Under budget.
