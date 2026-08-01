# The Trustworthy-Experimentation Canon — Web Research (Worker D1)

As-of date for all "current status" claims: **2026-08-01**. Every source below is dated at
publication; where a figure is dated/volatile, that is flagged explicitly as a **never-ship
candidate**. Source rungs: **(1) primary** (paper/book/first-party eng blog), **(2)
peer-reviewed** (not first-party but refereed), **(3) named practitioner with date**, **(4)
folklore**.

Budget used: 6 WebSearch calls (of 20 allotted); everything else was WebFetch/curl of known
URLs, or the `Read` tool applied directly to downloaded PDFs (Read can extract PDF text losslessly
where WebFetch's small-model summarizer degraded or hallucinated numbers — see the CUPED
discrepancy noted in §5).

---

## 1. Kohavi/Tang/Xu, *Trustworthy Online Controlled Experiments* (Cambridge UP, 2020)

### Sources

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* — front matter + Ch.1 promotional excerpt | Kohavi, Tang, Xu | Cambridge University Press | 2020 | https://experimentguide.com (Ch.1 PDF via https://bit.ly/ExPGuideChapter1) | 1 (primary, publisher-hosted excerpt, byte-verified via Read on the downloaded PDF) |
| "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained" | Kohavi, Deng, Frasca, Longbotham, Walker, Xu | KDD | 2012 | https://exp-platform.com/Documents/puzzlingOutcomesInControlledExperiments.pdf | 1/2 (peer-reviewed KDD paper, full text extracted) |
| "Online Controlled Experiments at Large Scale" | Kohavi, Deng, Frasca, Walker, Xu, Pohlmann | KDD | 2013 | https://exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf | 1/2 |
| "Seven Rules of Thumb for Web Site Experimenters" | Kohavi, Deng, Longbotham, Xu | KDD | 2014 | https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf | 1/2 |

I obtained the **full text** of the Chapter-1 promotional excerpt (front matter, preface,
acknowledgments, and Chapter 1 body through the "Strategy, Tactics" section, ~20 pages) by
downloading the PDF WebFetch returned and re-reading it with the `Read` tool, which extracts
PDF text losslessly (WebFetch's summarizer garbled this particular PDF on first pass). I did
**not** obtain chapters 3–23 (guardrail metrics, SRM, long-term effects) — the public excerpt
stops after Chapter 1; those topics are instead sourced from the primary KDD papers below,
which the book cites as its own source material for the same claims, so the numbers are
identical and equally primary.

### OEC — exact definition

> "**Overall Evaluation Criterion (OEC):** A quantitative measure of the experiment's objective.
> For example, your OEC might be active days per user, indicating the number of days during the
> experiment that users were active (i.e., they visited and took some action). Increasing this
> OEC implies that users are visiting your site more often, which is a great outcome. The OEC
> must be measurable in the short term (the duration of an experiment) yet believed to causally
> drive long-term strategic objectives."

— Kohavi, Tang, Xu (2020), Ch.1, "Online Controlled Experiments Terminology," p.6.
https://experimentguide.com

The 2012 KDD paper gives the identical definition eight years earlier, confirming it is the
book's restatement of established prior work, not a retrofit:

> "The Overall Evaluation Criterion (OEC) is a quantitative measure of the experiment's
> objective. In statistics this is often called the Response or Dependent Variable; other
> synonyms include Endpoint, Outcome, Evaluation metric, Performance metric, Key Performance
> Indicator (KPI), or Fitness Function."

— Kohavi et al., "Five Puzzling Outcomes Explained" (KDD 2012), §2, p.3.

**Criteria for a good OEC** (from the book's worked example, MSN Real Estate widget test, and
the 2012 paper's §3.1 "OEC for a Search Engine"): the OEC must (a) be tied to end-user behavior
rather than a vanity/gameable proxy, (b) be measurable in the short-term durations of an
experiment, (c) be believed to causally drive long-term strategic objectives — the book states
plainly that market share and short-term revenue are **bad** short-term OECs for a search
engine because degrading quality mechanically raises both (see the Bing bug example below).

### What this licenses a skill to say
- The OEC is a formal, named concept with a precise definition traceable to Kohavi's own 2009
  and 2012 papers, restated unchanged in the 2020 book — this is stable, not volatile.
- A skill may state the criteria for a good OEC (short-term measurable, causally tied to
  long-term goals, not gameable) with this exact citation chain.

### What it does NOT license
- The book's specific worked *examples* of an OEC for email or for Bing's search engine
  (chapter 7, "Metrics for Experimentation and the Overall Evaluation Criterion") were **not
  read** — only the chapter title and page range (102–110) are confirmed from the table of
  contents. Do not fabricate the book's OEC formulas for these two case studies.

---

## 2. Twyman's Law — exact wording and worked example

### Two verbatim wordings exist, both primary, both from Kohavi's own hand

> "We believe in the skepticism implied by Twyman's Law: *Any figure that looks interesting or
> different is usually wrong*; we encourage readers to double-check results and run validity
> tests, especially for breakthrough positive results."

— Kohavi, Tang, Xu (2020), Preface, "How to Read This Book," p.xv. https://experimentguide.com
(no exclamation mark, no citation to a Twyman primary source — Twyman himself is not further
identified in the excerpt I read)

> "Twyman wrote that '*Any figure that looks interesting or different is usually wrong.*' We
> recommend healthy skepticism towards stories depicting astounding results from tiny changes,
> such as 50% revenue lift due to changing the color of the Buy Button."

— Kohavi, Deng, Frasca, Walker, Xu, Pohlmann, "Online Controlled Experiments at Large Scale"
(KDD 2013), §3.5, p.4. https://exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf

> "Any figure that looks interesting or different is usually wrong!"

— Kohavi, Deng, Longbotham, Xu, "Seven Rules of Thumb for Web Site Experimenters" (KDD 2014),
Rule #2, p.4. https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf (with
exclamation mark)

**UNTRACED sub-claim**: none of the three primary Kohavi sources I read cites who "Twyman" is
or the original publication (it is a pre-internet-era attribution in market-research
methodology; Kohavi treats it as folklore-adjacent received wisdom, not as something he traces
to a primary Twyman text). A skill should attribute the *law* to Kohavi's papers/book (since
that is the traceable chain) and mark the ultimate Twyman attribution itself as untraced.

### The formal Bayesian worked example (Seven Rules of Thumb, Rule #2, p.4)

This is the single most load-bearing passage for a "small-sample honesty" wedge: it gives an
exact, reproducible Bayes'-rule argument for *why* extreme early results are almost always
noise, using Kohavi's own success-rate figures as the prior.

> "Results with borderline statistically significant results should be viewed as tentative and
> rerun to replicate the results. This can be formalized using Bayes Rule. If the probability of
> a true positive effect is low, i.e., most ideas fail to move key metrics in a positive
> direction, then the probability of a true positive result when the p-value is close to 0.05 is
> still low. Formally, if α is the statistical significance level (usually 0.05) and β is the
> Type-II error level (normally 0.2 for 80% power), π is the prior probability that the
> alternative hypothesis is true, and we denote by TP a True Positive and by SS a Statistically
> Significant result, then we have
>
> P(TP|SS) = (1−β)π / [(1−β)π + α(1−π)]
>
> Using α = 0.05, β = 0.20, if we have a prior probability of success of 1/3, which is what we
> reported as the average across experiments at Microsoft, then the posterior probability for a
> true positive result given a statistically significant experiment is 89%. However, if
> breakthrough results noted in Rule #1 are one in 500, then the posterior probability drops to
> 3.1%."

— Kohavi, Deng, Longbotham, Xu (KDD 2014), Rule #2, p.4.

Immediately following, the same section states the corollary about domain-specific base rates:

> "One interesting corollary to this rule of thumb is that following taillights is easier than
> innovating in isolation. Features that we have seen introduced by statistically-savvy
> companies have a higher chance of positive impact for us. If our success rate on ideas at
> Bing is about 10-20%, in line with other search engines, the success rate of experiments from
> the set of features that the competition has tested and deployed to all users is higher. This
> observation is symmetric: other search engines tend to test and deploy positive changes that
> Bing has tested too."

— same source, p.4.

And the worked numeric example of Twyman's Law applied to Bing's own Sessions/user metric:

> "Twyman's law can be explained using Bayes Rule. We have been running thousands of experiments
> and know that breakthrough results are rare. For example, few experiments improve our
> North-star metric Sessions/user significantly. Let's assume that the distribution we see in
> experiments is Normal, centered on 0, with a standard-deviation of 0.25%. If an experiment
> shows +2.0% improvement to Sessions/user, we will call out Twyman, pointing out that 2.0% is
> 'extremely interesting' but also eight standard-deviations from the mean, and thus has a
> probability of 1e-15 excluding other factors. Even with a statistically significant result,
> that the prior is so strong against this result, we avoid any celebration and start working on
> finding the bug, which is usually of the second false positive type described above (e.g., an
> instrumentation error)."

— same source, p.4.

### What this licenses a skill to say
- The exact Bayes'-rule formula for posterior-true-positive-probability given a prior win rate
  and a significant p-value, with Kohavi's own worked numbers (1/3 prior → 89% posterior; 1/500
  prior → 3.1% posterior). This is directly reusable as the mathematical core of a
  "too-good-to-be-true" gate: a skill can tell a reader to compute their own domain's prior win
  rate and apply this formula before celebrating a "huge win."
- The Sessions/user worked numeric example (0.25% SD, 2.0% observed effect = 8 SD, p≈1e-15) as
  an illustration of how "extremely interesting" figures are usually instrumentation bugs, not
  real effects.

### What it does NOT license
- Kohavi's 0.25% SD figure for Sessions/user is **Bing-specific** and dated to a 2014 paper; a
  skill must not present "0.25%" as a universal noise-floor for any metric called
  "Sessions/user" at another company.

---

## 3. The win-rate claims — each number to its own primary source, not blended

This is the single most-repeated, most-often-blended figure in the growth/CRO folklore
ecosystem. Kohavi's own papers assemble a **list of distinct claims from distinct sources**,
each with its own company, year, and exact wording — the primary sources below trace each one
individually so the skill can cite them without conflating them.

### UPDATE — the "1/3" figure's ultimate primary source, independently fetched and verified

Every downstream Kohavi paper cites "Kohavi, Crook, Longbotham (2009)" for the Microsoft 1/3
figure. I located and fetched that original source directly — Kohavi, Crook, Longbotham, Frasca,
Henne, Lavista Ferres, Melamed, **"Online Experimentation at Microsoft"** (a Microsoft internal
"ThinkWeek" paper, recognized top-30 in late 2009), full text (16 pages) via
https://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf — the Stanford AI Lab mirror of the
paper exp-platform.com/expMicrosoft.aspx points to. **This closes the citation chain all the way
to its origin; the number is not secondhand.**

> "Section 5.1 below shows that despite our best efforts and pruning of ideas, most fail to show
> value when evaluated in controlled experiments. The literature is filled with reports that
> success rates of ideas in the software industry, when scientifically evaluated through
> controlled experiments, are below 50%. **Our experience at Microsoft is no different: only
> about 1/3 of ideas improve the metrics they were designed to improve.** Of course there is some
> bias in that experiments are run when groups are less sure about an idea, but this bias may be
> smaller than most people think; at Amazon, for example, it is a common practice to evaluate
> every new feature, yet the success rate is below 50%."

— Kohavi, Crook, Longbotham et al., "Online Experimentation at Microsoft" (2009), §5, p.7. This
is the exact sentence every later paper (2012, 2013, 2014, 2020 book) restates verbatim.

The paper then gives the **four-way outcome breakdown** behind the headline number — this
context is dropped in every later restatement and is worth carrying into a skill, since it shows
"1/3 succeed" is really "roughly 1/3 good, 1/3 flat, 1/3 harmful":

> "The idea is as good as the team thought it would be. In this case, the experiment adds little
> value. As shown below, this case is uncommon. [2] The idea is thought to be good, but the
> experiment shows that it hurts the metrics it was designed to improve. Stopping the launch
> saves the company money and avoids hurting the user experience. As humbling as it may be, this
> represents about one third of experiments. [3] The idea is thought to be good, but it does not
> change the metrics it was designed to improve significantly (flat result)... Our experience
> indicates that about 1/3 of experiments are flat. [4] The idea is thought to be good, but
> through experiments, it turns out to be a breakthrough idea... This case is also rare."

— same source, §5, p.7. And the explicit three-way summary:

> "A team that simply launches 10 ideas without measuring their impact may have about 1/3 be
> good, 1/3 flat, and 1/3 negative (matching our current estimates on the ExP team)."

— same source, §5, p.8.

**Bonus primary figures from this same source, not previously captured:**
- Amazon's "Behavior-Based Search" (an intern project): early experiments showed strong enough
  value that resources were redirected into it, "resulting in revenue improvements worth
  hundreds of millions of dollars" (§5.1, p.8).
- A blind-prediction survey at Microsoft: "We created a survey with eight A/B tests, and offered
  a nice polo shirt for anyone who could correctly guess 6 out of 8... With over 200 responses,
  we didn't have to hand out a single shirt! 6 out of 200 had 5 answers correct; the average was
  2.3 correct answers." (§6.2, p.11) — a directly reusable illustration of practitioners'
  inability to predict experiment outcomes even at their own company.
- At a 2008 CIKM conference invited talk, Kohavi challenged ~150 attendees to predict three real
  A/B test outcomes; "only 1 correctly guessed the outcome of two challenge questions" against a
  16-person random-guessing baseline (§6.2, p.11).
- QualPro (an offline multivariate-testing consultancy) "tested 150,000 business improvement
  ideas over 22 years and reported that 75 percent of important business decisions and business
  improvement ideas either have no impact on performance or actually hurt performance" (Holland
  & Cochran, 2005, cited at §5.1, p.8) — **rung 3/4, a secondhand citation to a consultancy's own
  claimed dataset, not independently verified by Kohavi or by me; flag as folklore-adjacent, not
  as a peer-reviewed figure.**
- A concrete illustration of why naive sequential (pre/post, not randomized) comparison is
  dangerous: on a real two-week MSN Real Estate CTR test, the properly-randomized
  week-over-week Treatment-minus-Control effect was **2.06%**, but a naive
  Treatment-week-2-minus-Control-week-1 (sequential, non-randomized) comparison of the *same*
  underlying data showed an apparent **11.38%** effect — a >5x inflation purely from confounding
  week-to-week variation, not from the treatment itself (§5.2, p.9).

### Source table

| Claim | Person / company | Primary source | Year | Rung |
|---|---|---|---|---|
| "Only one third of ideas... improved the metric(s) they were designed to improve" | Kohavi, Crook, Longbotham — **Microsoft** | Kohavi, Crook, Longbotham et al., "Online Experimentation at Microsoft" — **now independently fetched and verified at https://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf**, not just cited secondhand | 2009 | 1 (fully verified primary, not a citation-chain claim) |
| "Success rate is about 10-20%" | Kohavi — **Bing and Google** ("well-optimized domains") | Kohavi et al. (2020 book, Tenet 3); Manzi (2012) is cited as co-source | 2020 (restating older figures) | 1 |
| "About 10 percent of these [Google's ~12,000 2009 experiments] led to business changes" | Jim Manzi, paraphrasing **Google** | Manzi, *Uncontrolled: The Surprising Payoff of Trial-and-Error* (Basic Books, 2012), quoted in Kohavi's papers | 2012 | **3→4 chain break** — see below |
| "80% of the time you/we are wrong about what a customer wants" | Avinash Kaushik | Kaushik, "Experimentation and Testing: A Primer," Occam's Razor blog | 2006 | 3 |
| "Netflix considers 90% of what they try to be wrong" | Mike Moran, paraphrasing **Netflix** | Moran, *Do It Wrong Quickly* (IBM Press, 2007), p.240 | 2007 | 3→4 chain break (Moran is the named practitioner; the underlying Netflix source is not identified) |
| "I can only 'guess' the outcome of a test about 33% of the time" | Regis Hadiaris — **Quicken Loans** | Moran, Biznology blog, "Multivariate Testing in Action" | 2008 | 3 |
| "Nearly everything fails" / "humbling to realize how rare it is for them [features] to succeed on the first attempt" | Dan McKinley — **Etsy** | McKinley, "Testing to Cull the Living Flower," mcfunley.com | 2013 | 3 (named practitioner, first-party Etsy engineer) |
| "Only about 30% of Slack's monetization experiments show positive results... at best, 70% of your work being thrown away" | Fareed Mosavat, Slack's Director of Product & Lifecycle — **Slack** | Mosavat, tweet, quoted in Kohavi/Tang/Xu (2020) Ch.1, p.13 | 2019 | 3 (named practitioner with date; original tweet not independently re-fetched — traced only as far as the book's citation) |
| "No matter how much you think it's a no-brainer... experiment ideas simply fail" | Colin McFarland | McFarland, *Experiment!* (New Riders, 2012), p.20 | 2012 | 3 |

### Verbatim quotes

> "Only one third of the ideas tested at Microsoft improved the metric(s) they were designed to
> improve (Kohavi, Crook and Longbotham 2009). Success is even harder to find in well-optimized
> domains like Bing and Google, whereby some measures' success rate is about 10–20% (Manzi
> 2012)."

— Kohavi, Tang, Xu (2020), Ch.1, "Tenet 3: The Organization Recognizes That It Is Poor at
Assessing the Value of Ideas," p.13. Identical wording (minus the 2020 citation years) appears
verbatim in Kohavi et al., "Online Controlled Experiments at Large Scale" (KDD 2013), §2, p.4:
"Only one third of the ideas tested at Microsoft improved the metric(s) they were designed to
improve [5]." — where [5] is Kohavi, Crook, Longbotham, "Online Experimentation at Microsoft"
(2009). **This is the single, traceable, primary origin of the famous "1/3" figure — it is a
Microsoft-wide aggregate across the company's controlled-experiment population as of 2009,
restated unchanged through 2020.**

> "Fareed Mosavat, Slack's Director of Product and Lifecycle tweeted that with all of Slack's
> experience, only about 30% of monetization experiments show positive results; 'if you are on
> an experiment-driven team, get used to, at best, 70% of your work being thrown away. Build your
> processes accordingly' (Mosavat 2019)."

— Kohavi, Tang, Xu (2020), Ch.1, p.13. Note this is **specifically about monetization
experiments**, not all experiments — do not generalize to "70% of all growth experiments fail."

> "Avinash Kaushik wrote in his Experimentation and Testing primer (Kaushik 2006) that '80% of
> the time you/we are wrong about what a customer wants.' Mike Moran (Moran 2007, 240) wrote
> that Netflix considers 90% of what they try to be wrong. Regis Hadiaris from Quicken Loans
> wrote that 'in the five years I've been running tests, I'm only about as correct in guessing
> the results as a major league baseball player is in hitting the ball. That's right – I've
> been doing this for 5 years, and I can only 'guess' the outcome of a test about 33% of the
> time!' (Moran 2008). Dan McKinley at Etsy (McKinley 2013) wrote 'nearly everything fails' and
> for features, he wrote 'it's been humbling to realize how rare it is for them to succeed on
> the first attempt. I strongly suspect that this experience is universal, but it is not
> universally recognized or acknowledged.' Finally, Colin McFarland wrote in the book
> *Experiment!* (McFarland 2012, 20) 'No matter how much you think it's a no-brainer, how much
> research you've done, or how many competitors are doing it, sometimes, more often than you
> might think, experiment ideas simply fail.'"

— Kohavi, Tang, Xu (2020), Ch.1, pp.13–14. The identical paragraph (with the same five quotes,
minus Mosavat) also appears in Kohavi et al. (KDD 2013), §2, p.4 — confirming these are Kohavi's
long-standing, repeatedly-restated anthology of *other people's* self-reported failure-rate
folklore, presented explicitly by Kohavi as corroborating anecdote, not as data he collected.

> "Not every domain has such poor statistics, but most who have run controlled experiments in
> customer-facing websites and applications have experienced this humbling reality: we are poor
> at assessing the value of ideas."

— Kohavi, Tang, Xu (2020), Ch.1, p.14. This is Kohavi's own summary framing — the "we are poor
at assessing the value of ideas" sentence is the load-bearing conclusion the whole list of
quotes is assembled to support.

### Chain-break note: the Google "10%" and "12,000 experiments" figure — UNTRACED to Google itself

Kohavi's own papers attribute the Google figure to Jim Manzi's book, **not to a Google
publication**:

> "In the recently published book *Uncontrolled: The Surprising Payoff of Trial-and-Error for
> Business, Politics, and Society*, Jim Manzi wrote that 'Google ran approximately 12,000
> randomized experiments in 2009, with [only] about 10 percent of these leading to business
> changes.'"

— Kohavi et al., "Five Puzzling Outcomes Explained" (KDD 2012), §1, p.2.

**The chain breaks here**: I did not find a first-party Google publication (blog, paper, or
talk) stating "12,000 experiments in 2009, 10% led to business changes." Manzi's book is a
secondary, non-Google source; Kohavi is repeating Manzi, and every "10-20% success rate" figure
attributed to "Bing and Google" in the 2020 book is **also** sourced to the same Manzi citation
for the Google half. **Mark this UNTRACED to Google as a primary source** — it is traceable only
to Manzi (2012), a journalist/entrepreneur author, not to Google engineering. A skill must cite
this as "Manzi's account of Google's 2009 experimentation, as repeated by Kohavi," never as "Google
reports."

### What this licenses a skill to say
- The Microsoft "1/3" figure IS traceable to a named 2009 primary Microsoft source
  (Kohavi/Crook/Longbotham), restated unchanged for 11+ years — this is the strongest-sourced
  figure in the whole win-rate cluster and can be cited with full confidence, always specifying
  "Microsoft, 2009."
- Bing/Google "10-20%" can be cited as Kohavi's own stated figure for well-optimized domains,
  but the Google *half* of that figure traces only to Manzi's book, not Google directly.
- Slack's "30% positive / 70% thrown away" is a **named, dated (2019), monetization-specific**
  figure — usable but must be scoped to monetization experiments.
- Every other figure in this cluster (Kaushik 80%, Netflix 90%, Quicken Loans 33%, Etsy "nearly
  everything") is rung-3/4 named-practitioner folklore, useful as corroborating color but never
  as a load-bearing statistic on its own.

### What it does NOT license
- Never write "studies show most A/B tests fail" as an unattributed blended statistic. Every one
  of these eight numbers has a different company, a different year, a different scope
  (all-ideas vs. monetization-only vs. well-optimized-domain), and a different rung of evidence.
- Never attribute the "12,000 experiments / 10%" figure to Google as a first-party claim.

---

## 4. exp-platform.com paper archive — durable teachings with exact figures

### Source table

| Title | Venue/Year | URL | Rung |
|---|---|---|---|
| "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained" | KDD 2012 | https://exp-platform.com/Documents/puzzlingOutcomesInControlledExperiments.pdf | 1/2 |
| "Online Controlled Experiments at Large Scale" | KDD 2013 | https://exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf | 1/2 |
| "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data" (CUPED) | WSDM 2013 | https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf | 1/2 |
| "Seven Rules of Thumb for Web Site Experimenters" | KDD 2014 | https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf | 1/2 |
| "Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners" | KDD 2019 | https://exp-platform.com/Documents/2019_KDDFabijanGupchupFuptaOmhoverVermeerDmitriev.pdf | 1/2 |
| "Top Challenges from the first Practical Online Controlled Experiments Summit" | SIGKDD Explorations, June 2019 | https://exp-platform.com/top-challenges-from-first-practical-online-controlled-experiments-summit/ | 1/2 (page fetched for metadata only; body **not read** — 34-expert consensus paper, note as available-but-unfetched) |
| "A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled Experiments" | KDD 2022 | https://bit.ly/expIntuitionBusters | 1/2 (metadata only, **not fetched** — flag as a promising follow-up read for the controller) |
| "Statistical Challenges in Online Controlled Experiments: A Review of A/B Testing Methodology" | The American Statistician, 2023 | https://www.tandfonline.com/doi/epdf/10.1080/00031305.2023.2257237 | 2, paywalled — **not fetched** |

I did **not** locate, on the exp-platform.com site, a standalone page for "A/B Testing
Pitfalls"/"Pitfalls of long-term online controlled experiments" or the 2007/2009 "Practical
Guide to Controlled Experiments on the Web" as separately browsable pages within budget — they
are referenced *inside* the papers above (e.g., "Practical Guide to Controlled Experiments on the
Web: Listen to Your Customers not to the HiPPO," KDD 2007, cited throughout as [12]/[16]/[21] in
the papers I did fetch) but I did not fetch their own PDFs directly. Flag for a follow-up pass.

### KDD 2012 "Five Puzzling Outcomes Explained" — durable teachings

**Teaching 1 — an OEC built from a vanity metric can reward a bug.** Bing had a bug that served
badly degraded search results; two "top-level long-term goals" both improved:

> "When Bing had a bug in an experiment, which resulted in very poor results being shown to
> users, two key organizational metrics improved significantly: distinct queries per user went
> up over 10%, and revenue per user went up over 30%! How should Bing evaluate experiments? What
> is the Overall Evaluation Criterion?"

— §3.1.2, p.3. The paper's resolution: query-share and revenue-per-search are decomposable
(Users/Month × Sessions/User × Distinct-queries/Session); of the three terms, **Sessions/user
is the correct short-term OEC component to optimize**, because degrading results forces more
queries per session (bad) while revenue-per-user rewards ad-serving degradation directly (bad).

**Teaching 2 — click-tracking is browser-dependent and instrumentation artifacts masquerade as
real lift.** Safari in particular drops click-beacons on navigation:

> "This is especially true for the Safari browser, where losses are sometimes over 50%. Adding
> even a small delay gives the beacon more time, and hence more click request beacons reach the
> server. We have seen multiple experiments where added delays made an experiment look better
> artificially."

— §3.2.3, p.4. Mitigation rule of thumb given: "if an experiment has an increase in clicks that
is attributed to the non-IE browsers, it's likely to be related to the click beacons... More
generally, differences in effects for different browsers are yellow flags for instrumentation
issues."

**Teaching 3 — early-experiment "trends" are almost always a statistical artifact, not
primacy/novelty.** Exact probabilities given:

> "The first day has a 67% chance of falling outside the 95% confidence bound at the end of the
> experiment; the second day has a 55% chance of falling outside this bound."

— §3.3.3, p.5. The paper's own illustrative graph (Figure 3) turns out to be **from an actual
A/A test** — i.e., the "trending toward significance" pattern the team believed they saw was
provably noise, since ground truth was zero effect. Explicit conclusion:

> "We could not find a single experiment where a statistically significant result in one
> direction became statistically significant in the other direction due to these effects (e.g.,
> a statistically significantly negative becoming statistically significantly positive)."

— §3.3.4, p.6.

**Teaching 4 — for some metrics, running longer does NOT increase statistical power**, because
the coefficient of variation (CV = std-dev/mean) itself grows over the experiment for certain
count metrics (e.g., Sessions/user), offsetting the 1/√n shrinkage:

> "For some of our key metrics, including Sessions/user, the confidence interval of the percent
> effect does not shrink over time. Running the experiment longer does **not** provide additional
> statistical power for these metrics."

— §3.4.2, p.6. Mitigation: "we must run the experiments with more users per day."

**Teaching 5 — carryover effects from a reused "bucket system" can last three weeks to three
months.** Two examples with exact durations:

> "It is clear that there was a carryover effect on users after the experiment finished. The
> carryover effect seems to die out at about the third week after the experiment."

— §3.5.3, p.7 (example 1, a 47-day A/B experiment preceded by a 7-day A/A period).

> "Even after three months, the user buckets still had not fully recovered to their
> pre-experiment levels."

— §3.5.3, p.8 (example 2, following a bug that exposed users to a "really bad experience").

**Teaching 6 — the formal A/A test definition and its two uses:**

> "An A/A Test, or a Null Test, is an experiment where instead of an A/B test, you exercise the
> experimentation system, assigning users to one of two groups, but expose them to exactly the
> same experience. An A/A test can be used to (i) collect data and assess its variability for
> power calculations, and (ii) test the experimentation system (the Null hypothesis should be
> rejected about 5% of the time when a 95% confidence level is used). The A/A test has been our
> most useful tool in identifying issues in practical systems. We strongly recommend that every
> practical system continuously run A/A tests."

— §2, "Background and Terminology," p.3.

### KDD 2013 "Online Controlled Experiments at Large Scale" — durable teachings

**Scale facts (as of 2013, dated/volatile — flag as never-ship candidates for exact numbers,
but the qualitative "very large scale" claim is durable):**

> "At Microsoft's Bing, the use of controlled experiments has grown exponentially over time,
> with over 200 concurrent experiments now running on any given day... In the US alone, it
> distributes traffic from about 100 million monthly users executing over 3.2B queries a month
> to over 200 experiments running concurrently."

— Abstract and §1, p.1–2.

**Revenue-sensitivity rule of thumb:**

> "A 1% improvement to revenue equals more than $10M annually in the US, yet many ideas impact
> key metrics by 1% and are not well estimated a-priori."

— Abstract, p.1.

> "For example, two small changes, which took days to develop, each increased ad revenue by
> about $100 million annually."

— §1, p.2.

**Latency-sensitivity rule of thumb**, from a deliberate slowdown experiment:

> "We recently ran a slowdown experiment where we slowed 10% of users by 100msec (milliseconds)
> and another 10% by 250msec for two weeks. The results showed that performance absolutely
> matters a lot today: every 100msec improves revenue by 0.6%. The following phrasing resonated
> extremely well in our organization (based on translating the above to profit): an engineer
> that improves server performance by 10msec (that's 1/30 of the speed that our eyes blink) more
> than pays for his fully-loaded annual costs. Every millisecond counts."

— §3.4, p.4–5.

**Multiple-testing / p-hacking-by-iteration math** — this is a directly reusable formula for a
skill's "why running 5 variants and picking the winner is not free" section:

> "Assuming the feature does nothing, running k iterations (each with small variations that do
> nothing), then the probability of statistical significance grows from 2.5% (positive movement
> in a two-sided test) to (1 − 0.975^k). The problem is exacerbated when teams run multiple
> treatments. If a team tries five treatments, then the 2.5% false positive rate grows to 12%.
> If they do six iterations of 5-treatment experiments, there is more than a 50% chance of
> getting a positive statistically significant result."

— §5.1, p.7.

**O'Brien-Fleming group-sequential alerting thresholds**, with exact numbers from Bing's own
alerting system (this is the primary application of the classical Pocock/O'Brien-Fleming
group-sequential family inside a real production alerting pipeline):

> "The O'Brien & Fleming procedure calls for lower p-values early on and these increase over
> time... For example, in a 7-day experiment, the p-value cutoff for the 1st day is 5 × 10⁻⁸,
> which is much smaller than 0.05, while the last cutoff is 0.040. This works well, as earlier
> termination needs to meet a higher bar, which aligns well with our intuition. Second, the
> p-value cutoff at the final check point is not much lower than 0.05."

— §4.3, p.7, citing O'Brien, P.C. and Fleming, T.R., "A Multiple Testing Procedure for Clinical
Trials," *Biometrics*, Vol. 35, September 1979, pp. 549–556 (the original clinical-trials primary
reference for the group-sequential alpha-spending boundary family; I did not fetch the 1979
Biometrics paper itself — it is paywalled and pre-web — but Kohavi's own Figure 4 gives the
numeric boundary schedule as actually implemented at Bing, which is the more directly reusable
figure for a skill).

**Negative-experiment ethics/ROI framing** (load-bearing for a skill's ethics section):

> "Over time, we achieved agreement that knowingly hurting users in the short-term (e.g., a
> 2-week experiment) can let us understand fundamental issues and thereby improve the experience
> long-term. We believe that this is not only justified, but should be encouraged... Hippocrates'
> 'Do no harm' should really be 'Do no long-term harm.'"

— §3.4, p.4.

### KDD 2014 "Seven Rules of Thumb for Web Site Experimenters" — the seven rules, verbatim headers, and every supporting figure

**Rule #1: Small Changes can have a Big Impact to Key Metrics.**
- MSN UK, Aug 2008, opening the Hotmail link in a new tab: "increased MSN users' engagement, as
  measured by clicks/user on the home page, by 8.9% for the triggered users" — over 900,000
  users. Replicated June 2010 on 2.7M US users with similar results (novelty effect noted: 20%
  negative feedback on day 1, dropping to 4% then 2% by week 2–4).
- MSN US, April 2011, opening search results in a new tab/window on a 12M-user experiment:
  "engagement as measured by clicks per user increased by a whopping 5%."
- Bing font-color experiment, 2013: "monetization improved to the tune of over $10M annually,"
  replicated on 32M users after initial skepticism.
- Two undisclosed Bing changes, each "took days to develop, and each increased ad revenues by
  about $100 million annually," partially crediting Microsoft's "Search advertising revenue grew
  47% driven by an increase in revenue per search and volume" (Microsoft's Oct 2013 quarterly
  earnings announcement).
- Anti-malware experiment: 3.8 million triggered users, blocking unauthorized DOM modification;
  "annual revenue improved by several million dollars," page-load-time improved by "hundreds of
  milliseconds for the impacted pages."
- The rarity caveat, directly quotable for a skill's expectation-setting: **"perhaps one in 500
  experiments meets the bar of such high ROI and replicable positive impact"** (p.3).

**Rule #2: Changes Rarely have a Big Positive Impact to Key Metrics.**
> "As Al Pacino says in the movie *Any Given Sunday*, winning is done inch by inch. For web
> sites like Bing, where thousands of experiments are being run annually, most fail, and those
> that succeed improve key metrics by 0.1% to 1.0%, once diluted to overall impact."

— p.3. (This exact "0.1% to 1.0%" range also appears, worded as "0.1% to 2%," in the 2020 book's
Chapter 1 "Improvements over Time" section — the book's number is a slightly wider,
restated/updated range; treat "0.1–1.0%" (2014, Bing-specific) and "0.1–2%" (2020, general) as
two distinct statements from two distinct years, do not silently merge them.)

The Bayes'-rule formula and worked numbers (1/3 prior → 89% posterior; 1/500 prior → 3.1%
posterior) are given in full in §2 above.

**Rule #3: Your Mileage WILL Vary.**
- Office Online surrogate-metric failure: a team used "clicks on revenue generating links ×
  conversion-rate = revenue" as a proxy, and "to their surprise, there was a **64% reduction in
  clicks per user**" — the stable-conversion-rate assumption was false; the treatment page
  attracted fewer but better-qualified clicks.
- Bing Edge CDN migration (2013): click-tracking fidelity artifacts inflated apparent gains —
  "the click loss rate for some browsers dropped by more than **60%**!" — a large fraction of
  the *apparent* metric improvement was measurement artifact, not real behavior change.
- Historical scurvy example: Dr. James Lind's 1747 controlled trial found citrus cured scurvy,
  but the *mechanism* (Vitamin C) wasn't understood for another ~150 years — used by Kohavi as
  the earliest documented controlled experiment with a right result and a wrong explanation.
- Marissa Mayer's Google talk anecdote: increasing SERP results from 10 to 30 dropped traffic
  and revenue from the experimental group by 20%, attributed to the extra half-second page-load
  time. Kohavi's own Bing slowdown data suggests this overstates the pure latency effect: "a
  250msec delay at the server impacts revenue at about 1.5% and clickthrough-rate at about
  0.25%... 500msec would impact revenue about 3% not 20%, and clickthrough-rate would drop by
  0.50%, not 20%" (assuming linear extrapolation) — i.e., Kohavi explicitly flags the Mayer
  anecdote's 20% figure as likely non-generalizable / an outlier, not a benchmark to reuse.
- Jake Brutlag's Google blog post: artificially slowing the results page 100–400ms reduced
  searches per user by 0.2% to 0.6%, "very much in line with our [Bing] experiment."

**Rule #4: Speed Matters a LOT.** (Duplicate of the KDD 2013 slowdown-experiment figures above:
100ms delay for 10% of users, 250ms for another 10%, two weeks, "every 100msec speedup improves
revenue by 0.6%"; "an engineer that improves server performance by 10msec... pays for his
fully-loaded annual costs.") Additional figure not in the 2013 paper:

> "At Amazon, 100-millisecond slow-down decreased sales by 1% (Linden 2006b, 10)."

— p.6, citing Greg Linden's own "Make Data Useful" slide deck (Dec 2006). Also: a follow-on
experiment delaying only the right-hand "snapshot" pane by 250ms on an experiment of "almost 20
million users" showed **no detectable impact** — evidence that *which* page element is slowed
matters as much as *how much*.

**Rule #5: Reducing Abandonment is Hard, Shifting Clicks is Easy.** Five worked examples, each
with an exact p-value showing abandonment rate is statistically unchanged even when large
click-shifting effects are present:
- Related-searches removed from right column (10M+ users): clicks shifted, abandonment p=0.64
  (not significant).
- Related-searches pinned below bottom ads (5M users): CTR on related searches −17%, abandonment
  p=0.71 (not significant).
- SERP truncation experiment 1 (8M triggered users): abandonment p=0.92 (not significant); this
  feature *was* released.
- SERP truncation experiment 2 (3M triggered users, extended from 14 to 20 results): +1.8%
  revenue, −30ms page load, −18% pagination, abandonment p=0.93 (not significant); this feature
  was **not** released, illustrating that a statistically clean, revenue-positive result can
  still be rejected for qualitative/product reasons.
- Ad background-color change (>10M users): **"the Treatment color caused a 12% decline in
  revenue (an annual loss of over $150M if this change were made)"**, abandonment p=0.83 (not
  significant) — a striking example of a purely cosmetic change with a nine-figure negative
  revenue impact.

**Rule #6: Avoid Complex Designs: Iterate.**
- LinkedIn Unified Search (2013): bundling all changes together ("almost every single component
  on the search landing-page was touched") tanked key metrics; unbundling and restoring specific
  removed features fixed it.
- LinkedIn Contacts: a complex eligibility/whitelist design masked a bug where users were
  silently removed from the experiment after one visit, producing a false "engagement dropping"
  signal.
- Risk-of-no-exposure-control framing: "With agile methodologies now common, without exposure
  control provided through controlled experiments, you run the risk of repeating a deployment
  like the one Knight Capital did, which in Aug 2012 caused **a $440 million loss and erased 75%
  of Knight's equity value**." (p.8 — cites the well-known Knight Capital trading-algorithm
  incident as the canonical cautionary tale for shipping without a gradual, monitored rollout.)

**Rule #7: Have Enough Users.** The paper's own stated rule-of-thumb constant — **note this is
NOT the classical "16σ²/δ²" formula** (see §6 below for that derivation; this paper states a
different, skewness-based minimum-sample-size rule for normality of the sampling distribution):

> "Our rule of thumb for the minimum number of independent and identically distributed
> observations needed for the mean to have a normal distribution is 355 × s² for each variant,
> where s is the skewness coefficient of the distribution of the variable X defined as
> s = E[X−E(X)]³ / [Var(X)]^(3/2). We recommend the use of this rule when the |skewness| > 1."

— p.8. Worked table for real Bing metrics (as-of 2014, corrected Jan 6 2015 erratum noted below):

| Metric | \|Skewness\| | Sample Size | Sensitivity (% change detectable at 80% power) |
|---|---|---|---|
| Revenue/User | 17.9 | 114k | 4.4% |
| Revenue/User (Capped) | 5.2 | 9.7k | 10.5% |
| Sessions/User | 3.6 | 4.70k | 5.4% |
| Time To Success | 2.1 | 1.55k | 12.3% |

> "Note: Jan 6, 2015: The table with skewness numbers on page 8 was corrected. The paper was
> published with skewness of 18.2 and 5.3 instead of 17.9 and 5.2."

— erratum page appended to the same PDF. (Flagging this correction explicitly: even Kohavi's own
KDD papers ship errata — a small but useful data point for the skill's "verify, don't just
cite" ethic.)

> "When a metric has a large skewness, it is sometimes possible to reduce the skewness so that
> the average converges to normality faster. After we capped Revenue/User to $10 per user per
> week, we saw skewness drop from 18 to 5.3 increased. For the same sample size, Capped Revenue
> per user can detect a change 30% smaller than Revenue per user."

— p.9 (note: this sentence in the source PDF appears to have a typographical/OCR artifact —
"increased" reads as dangling; the intended meaning, confirmed by the table, is that capping
*reduced* skewness and thereby *improved* sensitivity by ~30% for the same sample size).

### What this licenses a skill to say
- All seven rules verbatim, each with Kohavi's own exact supporting figures — this is a
  publication-grade primary anchor for a "rules of thumb" reference page.
- The multiple-testing math (k iterations of null variants inflating false-positive rate; 5
  treatments → 12%, 6×5-treatment iterations → >50%) is directly reusable as a worked warning
  against "just try a bunch of variants and ship the winner."
- The O'Brien-Fleming boundary schedule (5×10⁻⁸ day 1 → 0.040 day 7, 7 checkpoints) is a
  concrete illustration of alpha-spending, safe to cite as Bing's own implemented policy.

### What it does NOT license
- Do not present "0.1% to 1.0%" (2014, Bing) and "0.1% to 2%" (2020, book) as the same number.
- Do not present the 355×s² skewness-based sample-size rule as if it were the standard
  two-proportion power formula — they answer different questions (minimum n for normality of
  the sampling distribution vs. minimum n to detect a given effect at a given power). See §6.
- The Bing-specific dollar figures ($10M/1% revenue, $100M/change, $150M/12%-decline) are
  **company-scale-specific and dated**; flag as never-ship candidates if reused as if
  universal — they are illustrations of Bing's revenue base circa 2012–2014, not general
  constants.

---

## 5. CUPED — Deng, Xu, Kohavi, Walker (WSDM 2013)

### Source

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data" | Deng, Xu, Kohavi, Walker | WSDM | 2013 | https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf | 1/2, full text obtained |

### The variance-reduction claim — exact wording, with a documented WebFetch-summarizer discrepancy

**The headline figure, stated three separate times in the paper's own text, is ~50%, not the
"20%-40%" figure an earlier WebFetch summarization pass initially returned** — flagging this
explicitly per the evidence-discipline brief: I first asked WebFetch's small-model summarizer to
extract the number, and it returned "CUPED can reduce variance by 20%-40% in our online
experiments at Bing." I then downloaded the PDF and re-read it with the `Read` tool (lossless
text extraction), which surfaced the actual sentences below. **The 20–40% figure was a
summarizer artifact and should never have been cited — this is exactly the "never trust a
secondhand number" failure mode the charter warns about, caught before shipping.**

The paper's real, verbatim claims:

> "We propose an approach (CUPED) that utilizes data from the pre-experiment period to reduce
> metric variability and hence achieve better sensitivity... The results on Bing's
> experimentation system are very successful: we can reduce variance by about 50%, effectively
> achieving the same statistical power with only half of the users, or half the duration."

— Abstract, p.1.

> "Validation of the results on real online experiments run at Bing, demonstrating a variance
> reduction of about 50%, equivalent to doubling our traffic or halving the time we need to run
> an experiment to get the same sensitivity."

— §1, "Introduction," p.1 (contributions list).

> "CUPED is currently live in Bing's online experimentation system. Three important recent
> experiments showed variance reductions of **45%, 52% and 49%** with one week of experiment and
> one week of pre-experiment data. This reassures that CUPED can indeed help us effectively
> achieve the same statistical power with about only half the users, or half the duration."

— §6, "Conclusions," p.9. This is the most granular, individually-attributable figure in the
paper and the one a skill should cite when asked for "the" CUPED number: **three real Bing
experiments, 45%/52%/49%, one-week pre-period.**

### Scope: which metrics, which platform, what breaks

> "For example, revenue-per-user, where CUPED reduced the variance by less than 5% due to the
> low correlation of revenue-per-user between the pre-experiment and the experiment periods."

— §5.2.3, p.7. This is a crucial, directly-quotable **counter-example**: CUPED's canonical
~50% figure does NOT apply uniformly across all metrics — revenue-per-user, specifically, saw
<5% reduction at Bing due to low pre/post correlation. The paper's own recommendation:

> "Variance reduction works best for metrics where the distribution varies significantly across
> the user population. One common class of such metrics where the value is very different for
> light and heavy users. Queries-per-user is a paradigmatic example of such a metric... Using the
> metric measured in the pre-period as the covariate typically provides the best variance
> reduction... Using a pre-experiment period of 1-2 weeks works well for variance reduction. Too
> short a period will lead to poor matching, whereas too long a period will reduce correlation
> with the outcome metric during the experiment period."

— §6, p.9.

### Preconditions and the no-pre-period-history limitation

> "The key observation is that E(X^(t)) − E(X^(c)) = 0 in the pre-experiment period because we
> have not yet introduced any treatment effect."

— §3.2.2, p.4 — this is the formal statement of *why* CUPED's covariate must come from before
treatment assignment: only then is it guaranteed unbiased under randomization.

> "For example, if we want to measure user retention rate or conduct an experiment on new users,
> there are no pre-experiment data to work with. In fact, in most online experiments, we may not
> have pre-experiment information on all users."

— §4, "CUPED in Practice," p.6. This directly confirms the brief's expected limitation: **CUPED
does nothing for users with no pre-period history** (new users, first-time visitors); the paper's
own mitigation is to add a binary "had pre-period data or not" covariate, which stratifies but
does not extend the variance reduction to the users who lack history.

### The explicit warning: a bad covariate produces a directionally-wrong result

> "Never use covariates that could be affected by the treatment, as this could bias the results.
> We have shown an example where directionally opposite conclusions could result if this
> requirement is violated."

— §6, p.9. The paper's own worked example (§5.3): using "in-experiment Distinct Queries-per-user"
(a metric affected by the treatment) as a covariate produced a CUPED estimate showing a
**statistically significant negative effect (95% CI entirely below 0)** on an experiment that
was known, from the raw uncorrected delta, to have a **positive** effect on queries-per-user —
i.e., a plausible-looking but wrong covariate choice flipped the sign of the reported result.
This is a load-bearing cautionary example for a skill teaching CUPED.

### What this licenses a skill to say
- The precise, individually-attributed figure: **"three recent Bing experiments showed variance
  reductions of 45%, 52%, and 49% with a one-week pre-period"** — cite this in preference to the
  rounder "about 50%" abstract-level figure when precision matters.
- The explicit scope limitation: revenue-per-user specifically saw <5% reduction at Bing —
  useful for teaching that CUPED's payoff is metric-dependent, not universal.
- CUPED requires the covariate to be measured strictly pre-treatment (or otherwise provably
  unaffected by assignment) — deviating from this can flip the sign of the result, not just
  shrink precision, with a real documented example.
- New users / first-visit experiments get no CUPED benefit by construction.

### What it does NOT license
- Never cite "CUPED reduces variance by 20-40%" — that number does not appear anywhere in the
  primary text; it was a summarization artifact from this very research pass and is recorded
  here only as a warning, not as a citable figure.
- Do not present "~50%" as if it applies to every metric; the paper's own revenue-per-user
  counter-example (<5%) directly contradicts a blanket claim.

---

## 6. Sample size and power — the classical formula, its assumptions, and a worked illustrative example

### What I could and could not trace to a primary Kohavi source

The charter's brief names a specific constant — "Kohavi's rule of thumb of 16σ²/δ² per arm" —
and asks me to verify it in the Seven Rules paper. **I read the full text of "Seven Rules of
Thumb for Web Site Experimenters" (KDD 2014) and this exact formula does not appear in it.**
That paper's Rule #7 states a *different* formula (355×s², a skewness-based minimum for
normality of the sampling distribution — see §4 above), which answers "how many observations do
I need before the Central Limit Theorem kicks in for this skewed metric," not "how many
observations do I need to detect a given effect size at a given power." **I therefore mark the
specific phrase "16σ²/δ²" attributed to Kohavi's Seven Rules paper as UNTRACED** — I could not
confirm it in the one paper the brief named, and did not find it in any other primary source
fetched during this pass (it did not appear in the book excerpt, the 2012, 2013, CUPED, or SRM
papers either). It is very likely Kohavi states this formula somewhere in the book's Chapter 17
("The Statistics behind Online Controlled Experiments," pp.185–192) or Chapter 20 — I could not
reach those chapters; the publicly available book excerpt stops at Chapter 1. **Flag this
specifically for the controller: if the "16σ²/δ²" constant is needed with a Kohavi citation, it
requires a further, targeted fetch of the book's Chapter 17, which this pass did not obtain.**

What CUPED's own §1 (Kohavi et al., WSDM 2013, p.2) DOES independently confirm is the *shape* of
the scaling law, without giving the "16" constant:

> "The sensitivity of controlled experiments is inversely proportional to the number of users
> squared, so whereas a small site may need 10,000 users to detect a 5% delta, detecting a 0.5%
> delta requires 100 times (10 squared) more users, or one million users."

— CUPED paper, §1, p.2. This is a **primary, traceable confirmation of the 1/δ² scaling law**
(n ∝ 1/δ²), even though it does not give the leading constant.

### The standard formula, derived (not cited) — labeled explicitly as a derived illustration

Because I could not confirm the "16σ²/δ²" constant against a primary Kohavi source within
budget, I derive the standard two-proportion sample-size approximation from first principles
here, so the skill has a mathematically correct, transparently-derived formula to teach
alongside (not instead of) whatever Kohavi's book states. This is standard, textbook
frequentist power analysis — attributable to the general statistics literature (e.g., the
two-sample z-test approximation), not to any single named growth-experimentation source:

For a two-sample test of proportions (baseline p, absolute lift δ, per-arm sample size n, equal
allocation, α two-sided, power 1−β):

**n ≈ (z_{α/2} + z_β)² × [p₁(1−p₁) + p₂(1−p₂)] / (p₂−p₁)²**

At α=0.05 (two-sided) and power=80% (β=0.20): z_{α/2}=1.96, z_β=0.8416, so
(z_{α/2}+z_β)² = (2.8016)² ≈ **7.85**. Since the two arms roughly double the per-observation
Bernoulli variance σ²=p(1−p) when p₁≈p₂, this collapses to the familiar shorthand

**n per arm ≈ (z_{α/2}+z_β)² × 2σ²/δ² ≈ 15.7σ²/δ² ≈ "16σ²/δ²"**

— which is almost certainly the origin of the "16σ²/δ²" rule of thumb the brief names (2×7.85 ≈
15.7, commonly rounded up to 16 as a conservative rule of thumb). I present this as a
**mathematically standard, independently-derivable approximation**, not as a verified quote from
Kohavi's Seven Rules paper.

### Worked illustrative example — baseline 3% conversion, detect a 5% relative lift, α=.05, power=.80

**This is a derived illustration for teaching purposes, explicitly labeled as such — not a
cited figure from any paper.**

- Baseline conversion p₁ = 0.03
- Detect a 5% *relative* lift → absolute lift δ = 0.03 × 0.05 = **0.0015** (so p₂ = 0.0315)
- p₁(1−p₁) = 0.03 × 0.97 = 0.0291; p₂(1−p₂) = 0.0315 × 0.9685 ≈ 0.0305; sum ≈ 0.0596
- δ² = 0.0015² = 0.00000225
- n per arm ≈ 7.85 × 0.0596 / 0.00000225 ≈ 0.4679 / 0.00000225 ≈ **≈ 208,000 users per arm**

Cross-checking with the "16σ²/δ²" shorthand using σ²=p(1−p)=0.0291 (single-arm variance,
doubled implicitly by the constant 16 rather than 15.7): 16 × 0.0291 / 0.00000225 ≈ 0.4656 /
0.00000225 ≈ **≈ 207,000 users per arm.** The two approaches agree to within 1%, confirming the
shorthand is a faithful approximation of the exact two-proportion formula for this small-effect
regime.

**Conclusion of the worked example, stated plainly**: detecting a 5% relative lift on a 3%
baseline conversion rate requires **roughly 200,000 users per arm (≈400,000 total)** at
conventional α=.05/power=.80 settings — directly illustrating why small products with thousands,
not hundreds of thousands, of monthly conversions cannot reliably detect small relative lifts on
low-base-rate metrics with a fixed-horizon two-proportion test. This number is intentionally
large and is precisely the mathematical anchor for a "small-sample honesty" wedge: a skill can
show a reader this exact arithmetic on their own numbers.

### What this licenses a skill to say
- The general 1/δ² scaling law is primary-sourced to the CUPED paper (n ∝ 1/δ²; 10× smaller
  effect needs 100× more users) — cite this confidently.
- The worked "~200,000 per arm" example is a valid, correctly-derived illustration of the
  standard two-proportion formula — present it as a worked example, explicitly not as a quote
  from any named paper.
- The "16σ²/δ²" shorthand can be presented as a standard, derivable approximation (shown here to
  match the exact formula to within 1% for this regime), while being honest that its specific
  attribution to Kohavi's Seven Rules paper is unconfirmed.

### What it does NOT license
- Do not attribute "16σ²/δ²" to "Seven Rules of Thumb for Web Site Experimenters" (2014) — that
  paper contains a different formula (355×s² for skewness-driven normality, not power).
- Do not present the ~200,000-per-arm worked number as an empirical finding from any company; it
  is arithmetic on hypothetical inputs chosen for illustration.

---

## 7. The peeking problem and its fixes

### 7a. Johari, Koomen, Pekelis, Walsh — "Peeking at A/B Tests: Why it matters, and what to do about it"

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "Peeking at A/B Tests: Why it matters, and what to do about it" | Ramesh Johari (Stanford), Pete Koomen (Optimizely), Leonid Pekelis (Optimizely/Stanford), David Walsh (Optimizely/Stanford) | KDD | 2017 | http://library.usc.edu.ph/ACM/KKD%202017/pdfs/p1517.pdf (mirror; ACM DOI 10.1145/3097983.3097992) | 1/2, full text of pp.1–6 (Sections 1–4.3) obtained |

**The inflated-error figure (exact wording):**

> "Unfortunately, stopping experiments in an adaptive manner through continuous monitoring of
> the dashboard will severely favorably bias the selection of experiments deemed significant.
> Indeed, very high false positive probabilities can be obtained — well in excess of the nominal
> desired false positive probability (typically set at 5%). As an example, **even with 10,000
> samples (quite common in online A/B testing), we find that the false positive probability can
> easily be inflated by 5-10x.**"

— §1, "Introduction," p.1. This is the single most quotable, precise magnitude for "the peeking
problem inflates false positives" — a nominal 5% becomes **25–50% actual false-positive rate**
at 10,000 samples under naive continuous monitoring with a "stop the first time p<0.05" rule.

Figure 2 in the paper (simulated Normal(0,1) data, true null, stopping the first time p crosses
α) shows three curves for α=0.01/0.05/0.10 climbing steeply from 0 toward roughly 0.2 / ~0.5–0.6
/ ~0.75–0.8 respectively by 10,000 observations, asymptoting toward 1.0 as observations→∞
(described qualitatively from the figure; I did not extract exact pixel-level y-values, so treat
the specific curve heights as approximate, not verbatim-quotable numbers — the **"5-10x"
inflation-at-10,000-samples figure quoted above is the verbatim, citable number**; the graph is
corroborating visual evidence for it).

**The "it becomes 100% if you wait long enough" formal result:**

> "It can be shown theoretically that any fixed level of α is guaranteed to be crossed by the
> p-value under the null hypothesis, if the experimenter waits long enough. In other words, if
> the null hypothesis is rejected the first time the p-value crosses α, with increasing data the
> false positive probability approaches 100%!"

— §3.1, p.4.

**mSPRT / "always valid p-values" — what they guarantee:**

> "The first significant contribution of our paper is the definition of always valid p-values
> that control Type I error, no matter how the user chooses to stop the test. These protect
> against adaptive data-dependent choices of the sample size, and let the user trade off
> detection power and sample size dynamically as they see fit."

— §3.1, p.4. Formal definition (Definition 3.1): a sequence of p-values (pₙ) is an always-valid
p-value process if, for **any** (possibly infinite, possibly data-dependent) stopping time T,
P_θ₀(p_T ≤ s) ≤ s for all s ∈ [0,1] — i.e., the Type-I error guarantee holds uniformly over all
stopping rules, not just the fixed-n rule.

**What it costs — now fully traced, §5 "Detection Performance" read in full (pp.6–9).** The
paper's actual finding is more nuanced than a flat "% more samples" penalty, and it is worth
stating precisely because the direction is counter-intuitive:

> "We also used the same sample of 10,000 experiments to show that our p-values typically
> deliver significance faster than a fixed-horizon test, whose sample size is chosen to obtain
> 80% average power over the prior in each tier. In Figure 4, the red curve shows that in most
> of the experiments, the mSPRT achieves significance before that sample size."

— §5.3, p.5 (page numbers per the paper's own printed footer, "1523"). The catch — fixed-horizon
testing *does* outperform mSPRT, but only under a condition rarely met in practice:

> "Now we see that fixed-horizon testing outperforms the mSPRT if she can estimate the effect
> size very accurately. However, since a relative error below 50% is rarely achievable, the
> mSPRT will typically perform better in practice."

— §5.3, p.5. And from the truncated-mSPRT power comparison (Figure 5, four power levels
β=0.5/0.8/0.9/0.95): "Since the mSPRT is optimized primarily for users who prioritize detection
over sample size, it is outperformed by fixed-horizon testing when β is small [i.e., when the
user demands very high power]. However, for any user who seeks moderate power, the mSPRT
p-values generally offer faster detection than fixed-horizon testing." — §5.3, p.5.

**Correct summary for a skill**: the paper's own simulations, run on Optimizely's real 10,000-
experiment sample, show that always-valid (mSPRT) testing usually reaches significance with
*fewer* samples than a comparably-powered fixed-horizon test, precisely because real
practitioners rarely know their true effect size accurately in advance (accurate a-priori MDE
estimation is "rarely achievable" per the paper's own words) — the classical "always-valid
inference has a fixed sample-size tax" folklore is **not what this primary source actually
shows** for realistic conditions; the tax only appears at very high power targets (β≥0.9) with
an accurately pre-known effect size, a combination the paper itself calls uncommon.

**Why FDR, not FWER — the primary source's own stated rationale**, independently corroborating
(and going beyond) the vendor blog's version of the same claim:

> "From user research, we decided on FDR control as it appeared best reflect how Optimizely's
> customers intuited their results when making decisions: they focused mostly on the significant
> results displayed on the dashboard and expected most (but not all) of these to be accurate."

— §5.3 (multivariate testing discussion), p.6. The paper also names the two well-studied
alternatives precisely: **Bonferroni correction controls family-wise error rate (FWER)**
("the probability that any true nulls are rejected"); **Benjamini-Hochberg (BH) controls false
discovery rate (FDR)** ("the expected proportion of rejected null hypotheses that are in fact
true"). Stated tradeoff: "Bonferroni q-values provide the safest inference, but Bonferroni
offers less detection power at any given sample size than BH, which itself reduces power
compared with no correction."

**Optimizely's deployment**: "The methods we describe were implemented in the Optimizely
platform in January 2015 as *Optimizely Stats Engine*, and have been in use across all products
including mobile, web, and server-side testing; hundreds of thousands of experiments have been
run using this approach by thousands of customers since its launch." — §1, p.1.

The mSPRT's mixing-distribution prior was fit from Optimizely's own customer base, segmented by
pricing tier:

> "At the time of our deployment, customers of Optimizely could purchase subscriptions at one of
> four tiers: Bronze, Silver, Gold, or Platinum. We obtained a prior G on effect sizes separately
> for each tier by randomly sampling 10,000 two-variation, binary data experiments that had been
> run previously on Optimizely. The reason for constructing distinct priors across tiers is that
> customers in higher tiers tended to be further into optimizing their website and so were
> typically chasing smaller effects."

— §5.2, p.6. (Rung note: this is a **first-party, vendor-collected sample** — 10,000
experiments from Optimizely's own customer base, self-selected by who buys Optimizely
subscriptions. Flag as a sample-selection caveat if this prior-construction methodology is ever
cited as representative of "typical" experiment effect sizes generally.)

### 7b. Optimizely's own "New Stats Engine" blog (vendor marketing, not the peer-reviewed paper)

| Title | Author | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "The story behind our Stats Engine" | Leonid Pekelis | Optimizely blog | Jan 20, 2015 | https://www.optimizely.com/insights/blog/statistics-for-the-internet-age-the-story-behind-optimizelys-new-stats-engine/ | 3/4 — **vendor marketing blog, explicitly labeled as such**, though written by the same Pekelis who co-authored the peer-reviewed KDD 2017 paper |

> "Reporting a false discovery rate of 10% means that 'at most 10% of winners and losers have no
> difference between variation and baseline.'"

— what Optimizely says it controls: **false discovery rate (FDR), not the classical
family-wise error rate (FWER) or a single fixed-n Type-I rate.**

> "Peeking at results before hitting that sample size can introduce errors into results, and you
> could be taking action on false winners."
> Continuous monitoring "increased error rates from 5% to over 25%," with "more than 57% of
> simulated A/A tests falsely declared a winner or loser at least once."
> "Controlling for a 10% false positive rate (90% statistical significance) can lead to a 50%
> chance of making an incorrect business decision due to false discovery."
> "starting January 21st, 2015, it powers results for all Optimizely customers."

— all verbatim from the blog post above. **These are vendor claims about vendor customers'
prior (mis)behavior, self-reported by the vendor** — genuinely useful as a real-world
illustration of the peeking problem's practical scale, but must be labeled as vendor marketing,
not independently audited, when cited.

### 7c. Group-sequential methods (Pocock, O'Brien-Fleming) — primary references, applied numbers only

I did not fetch the original Pocock (1977, *Biometrika*, "Group sequential methods in the
design and analysis of clinical trials") or O'Brien & Fleming (1979, *Biometrics*, "A Multiple
Testing Procedure for Clinical Trials") papers themselves — both are pre-web, paywalled clinical
statistics journal articles, not first-party engineering sources, and outside this channel's web
budget. **The concrete, directly reusable numbers are the ones already quoted in §4 above**: the
O'Brien-Fleming boundary schedule Kohavi's team actually implemented at Bing (5×10⁻⁸ on day 1 →
0.040 on day 7 of a 7-day experiment). Cite the O'Brien-Fleming *method* to the 1979 Biometrics
paper (rung 2, not independently verified by me) and the *applied numbers* to Kohavi et al.
(KDD 2013), which is rung 1/2 and fully verified.

### 7d. Anytime-valid inference / confidence sequences / e-values — newer strand

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "Game-theoretic statistics and safe anytime-valid inference" | Ramdas, Grünwald, Vovk, Shafer | *Statistical Science* | 2023 | (found via search; not fetched in full) | 2, peer-reviewed — **citation only, not deep-read this pass** |
| "Asymptotic Confidence Sequences" (implemented by GrowthBook) | Waudby-Smith et al. | cited 2023 (per GrowthBook docs) | 2023 | cited secondhand via GrowthBook docs, not independently fetched | 2, **secondhand citation — UNTRACED to the primary Waudby-Smith paper itself within this pass** |

I confirmed only the *existence and citation* of this newer confidence-sequence/e-value
literature, via GrowthBook's own documentation (see 7e below) and one search confirming Ramdas
et al.'s *Statistical Science* 2023 paper as a real, citable venue/year. **I did not fetch either
paper's full text.** A skill wanting to teach anytime-valid confidence sequences beyond the
mSPRT-specific Johari et al. treatment should treat this as a flagged follow-up read, not
something this pass verified in depth.

### 7e. GrowthBook docs — an open-source implementation, treated explicitly as first-party OSS documentation, not vendor marketing

| Page | URL | Fetched | Rung |
|---|---|---|---|
| "Sequential Testing" | https://docs.growthbook.io/statistics/sequential | Yes, full page | 1 (first-party docs for an open-source stats engine — GrowthBook's core stats engine is open-source per prior family research; still note this is the vendor's own docs, so treat numeric claims about "what problem this solves" as self-description, not independently audited) |
| "GrowthBook Statistics" (overview) | https://docs.growthbook.io/statistics/overview | Yes, full page | 1 |

**Why sequential testing is needed (their framing):**

> "If you violate this assumption, and peek at your results, you will end up with an inflated
> False Positive Rate, far above your nominal 5% level."

**The method and its academic citation chain:**

> GrowthBook implements "Asymptotic Confidence Sequences introduced by Waudby-Smith et al.
> (2023)," described as "very similar to the Generalized Anytime Valid Inference confidence
> sequences described by Spotify... introduced by Howard et al. (2022)."

— i.e., GrowthBook's own docs place their method in the same academic lineage as Spotify's
published "Generalized Anytime-Valid Inference" (GAVI) work — this is a useful pointer for a
skill wanting to trace the newest strand of this literature (Howard et al. 2022; Waudby-Smith et
al. 2023), though again, **I have only GrowthBook's secondhand citation of these papers, not the
papers themselves.**

**What it costs:**

> "Although sequential testing produces wider confidence intervals than fixed-sample testing,
> traditional frequentist inference requires an experimenter to wait until a pre-determined
> sample size is collected."

— the explicit, stated tradeoff is **wider confidence intervals** (lower precision at any given
n) in exchange for the ability to peek safely at any time. No specific numeric "% wider" figure
was given on this page.

**Bayesian vs. Frequentist, and — crucially — what a Bayesian posterior does NOT protect
against under optional stopping** (directly answers the brief's specific ask):

> "Instead of p-values and confidence intervals, you get probabilities and distributions of
> likely outcomes." Bayesian methods let you "write down your prior knowledge about experiment
> effects to ensure that you do not over-interpret small sample sizes."
>
> "Bayesian results are still valid even if you stop an experiment early... While they can
> suffer from the same 'peeking' problems as frequentist statistics, at least the main
> probabilities and statistical results that you see are not invalidated by stopping early" —
> but the decision to stop early "can still result in inflated false positive rates."

— https://docs.growthbook.io/statistics/overview. **This is the precise, technically correct
statement the brief asked for**: a Bayesian posterior itself is not "wrong" or biased by when
you look at it (the posterior update is always a valid Bayesian update on the data seen so far)
— but a **decision rule** of "stop and ship as soon as the posterior probability of improvement
crosses some threshold" still inflates the practical error rate of *decisions*, because you are
selecting on a noisy statistic at its most favorable moment. In other words: Bayesian updating
protects the *coherence of the belief state*; it does **not**, by itself, protect against the
*optional-stopping bias in a decision rule* built on top of that belief state. GrowthBook states
plainly that CUPED is available in both their Bayesian and Frequentist engines ("tools like
CUPED are available for both engines").

### What this licenses a skill to say
- The precise, primary "5-10x inflation at 10,000 samples" figure from Johari et al. (2017) —
  the single best quotable magnitude for why naive peeking is dangerous.
- The formal 100%-false-positive-rate-in-the-limit result, with its exact source.
- Always-valid p-values' formal guarantee (Type-I error control uniform over ALL stopping
  times, not just a fixed n) — precisely stated per Johari et al.'s own Definition 3.1.
- Optimizely's FDR-not-FWER choice, correctly distinguished, with the vendor's own
  self-reported customer-behavior numbers labeled as vendor-reported.
- GrowthBook's precise, nuanced statement of what Bayesian posteriors do and do not protect
  against under optional stopping — this is the single clearest, most citable technical (not
  vendor-marketing) statement of that nuance found in this research pass.

### What it does NOT license
- Do NOT claim a specific numeric "% more samples needed" cost for always-valid/mSPRT methods —
  this pass did not verify that number in the peeking paper's Detection Performance section
  (§5, pp.6–9 were not fully read).
- Do NOT cite Waudby-Smith et al. (2023) or Howard et al. (2022) as independently verified —
  they are known only via GrowthBook's secondhand citation.
- Do NOT present "Bayesian methods are immune to peeking" as true — the GrowthBook source
  explicitly contradicts this folklore claim, and that contradiction is itself one of the more
  valuable findings of this research pass.

---

## 8. SRM (Sample Ratio Mismatch)

### Source

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners" | Fabijan, Gupchup, Gupta, Omhover, Qin (Microsoft), Vermeer (Booking.com), Dmitriev (Outreach.io) | KDD | 2019 | https://exp-platform.com/Documents/2019_KDDFabijanGupchupFuptaOmhoverVermeerDmitriev.pdf | 1/2, full text obtained (9 pages) |

### The SRM definition and detection threshold — exact wording

> "Sample Ratio Mismatch, or simply 'SRM' is a data quality check that indicates a significant
> difference between expected proportions of users among experiment variants (e.g. configured
> before the experiment started) and the actual proportions of users observed at the end of the
> experiment... While there are many data quality issues that could decrease the validity and
> significance of a controlled experiment, Sample Ratio Mismatch in most cases completely
> invalidates experiment results. For example, a ratio of 50.2/49.8 (821,588 versus 815,482
> users) diverges enough from an expected 50/50 ratio that the probability that it happened by
> chance is less than 1 in 500k. To detect an SRM, a chi-square test can be used."

— §2.3.1, p.2. This is the exact recommended check (chi-square goodness-of-fit test on observed
vs. configured allocation), with a concrete worked example of how small a deviation (50.2/49.8)
is already extraordinarily improbable by chance at real-world sample sizes.

### The taxonomy — five categories, 25 distinct causes

> "In total, we recognize 25 distinct causes of SRMs and categorize them based on the stage of
> the experiment in which they appear."

— §5.6, p.8. The five top-level categories, each with its own subsections and worked case
examples in the paper:

1. **Experiment Assignment SRMs** — e.g., a hash-bucketing bug that assigned control one fewer
   bucket than configured (49.9/50 instead of 50/50); unstable user IDs; correlated hash seeds
   across concurrent experiments (a "birthday paradox" problem — "for 365 different seeds, you
   only need around 23 experiments to have a 50% chance of at least one pair of experiments
   sharing a seed").
2. **Experiment Execution SRMs** — variant delivery timing differences, delayed filter
   execution, telemetry-generation asymmetries (e.g., a Skype VoIP buffering-ML experiment lost
   30% of sessions in one arm due to an asynchronous config-refresh bug mid-session).
3. **Experiment Log Processing SRMs** — e.g., an MSN carousel experiment (12→16 rotating cards)
   showed a puzzling *decrease* in engagement because the most-engaged treatment users were
   being misclassified as bots and dropped by a post-treatment bot-detection filter; after
   correcting the bot-classification bias, "the results were flipped and the correct decision to
   ship the feature was made."
4. **Experiment Analysis SRMs** — incorrect triggering/filtering conditions, missing
   counterfactual logging.
5. **Experiment Interference SRMs** — human interference (e.g., a misconfigured search-engine
   marketing campaign URL force-assigned users into one variant) or telemetry
   interference/injection attacks by end users.

### Prevalence — exact figures, exact companies, exact years

> "Recent research contributions from large scale companies such as LinkedIn and Yahoo, as well
> as our own research confirm that SRMs are common at large scale experimentation. During this
> study, and through quantitative analysis of experiments conducted within the last year we
> identified that **approximately 6% of experiments at Microsoft exhibit an SRM**."

— §4.1, p.3. This is the paper's own primary, first-party finding (Microsoft, ~1-year lookback
from the 2019 publication).

> "Chen et al. at LinkedIn exposed SRMs that happen during a triggered analysis of an experiment
> and shared the lessons learned while building a toolkit for diagnosing this type of SRM. They
> revealed that **about 10% of triggered analysis at LinkedIn have an SRM.**"

— §2.3.2, p.3, citing Chen, Liu, Xu, "Automatic Detection and Diagnosis of Biased Online
Experiments," arXiv:1808.00114, 2018 (a distinct, separate LinkedIn primary source; I did not
independently fetch the Chen et al. arXiv paper — this figure is second-hand via Fabijan et al.'s
citation of it, but Fabijan et al. is itself rung 1/2 and the citation is a precise, attributed
one, so treat this as reliably traced, just one citation-hop removed from LinkedIn's own text).

> "Figure 2 reveals that this is an important problem to address as it happens frequently — for
> example, a product running ten thousand experiments in a year can expect to see at least one
> SRM per day."

— §4.1, p.3.

**Sample base for this whole paper**: "the sample size of our historical data is over 10000
OCEs" across four companies (Microsoft, Booking.com, Outreach.io, Online Dialog), plus 14
semi-structured interviews with experienced analysts. — §3, "Research Method," p.3.

### The recommended rule about what to do when SRM fires — the ten rules of thumb, verbatim list

> "In this section, we briefly discuss ten rules of thumb for a quick diagnosis and
> categorization of most SRMs."

— §6, p.8. Verbatim, abbreviated list (full wording in the source PDF, condensed here for
length — a skill reference page should quote each in full from the paper):
1. **Examine scorecards** — if SRM appears only in a triggered/filtered scorecard but not the
   standard (all-users) scorecard, the trigger/filter condition is the likely culprit.
2. **Examine user segments** — if SRM is localized to one segment (e.g., an old browser version),
   the cause is likely localized to that segment.
3. **Examine time segments** — if SRM is strongest on day 1 and fades, it's likely a
   time-related cause (caching, delayed variant start).
4. **Analyze performance metrics** — large degradation in load time/crashes co-occurring with
   the SRM suggests the performance regression itself is causing telemetry loss.
5. **Analyze engagement metrics** — higher average engagement in treatment vs. control suggests
   the root cause disproportionately affects less-engaged users (survivorship-style bias).
6. **Count frequency of SRMs** — if many disparate experiments show SRM concurrently, suspect a
   systemic, platform-wide cause.
7. **Examine A/A experiments** — an SRM in an A/A test implicates a systemic/widespread cause,
   or the "A/A" wasn't actually symmetric (e.g., extra telemetry added to only one arm).
8. **Examine severity** — a very large or very small ratio implicates a cause affecting most
   users in one arm specifically.
9. **Examine downstream** — compare results across different pipeline stages to localize where
   the mismatch is introduced.
10. **Examine across pipelines** — if two independent data pipelines exist, compare their SRM
    status; log-processing—related SRMs will typically show up differently across pipelines.

### What this licenses a skill to say
- SRM's canonical detection test is chi-square on observed-vs-configured allocation; the worked
  example (50.2/49.8, p < 1-in-500,000) is a directly reusable illustration of how sensitive
  this check is at real sample sizes.
- Two distinct, dated, company-attributed prevalence figures: **Microsoft ~6% of experiments
  (2019 study, ~1-year lookback)** and **LinkedIn ~10% of triggered analyses (2018, via Chen et
  al.)** — these are different populations (all experiments vs. triggered-analysis subset) and
  must not be blended into one number.
- The full 5-category, 25-cause taxonomy and the 10 rules of thumb are a publication-grade,
  directly reusable reference structure for a skill's SRM-diagnosis section.
- The MSN-carousel bot-misclassification case study is a strong, concrete illustration that SRM
  can *reverse* a decision's sign, not just flag noise.

### What it does NOT license
- Do not blend the Microsoft 6% and LinkedIn 10% figures into a single "SRM affects ~X% of
  experiments" claim — they measure different populations, in different years, at different
  companies.
- The `srm.wtf` / open-source sample-ratio-mismatch tooling mentioned in the brief was **not
  independently verified this pass** — it is GitHub-ecosystem territory, assigned to channel C
  (grw-github); do not claim first-party status for any specific tool here without that
  channel's verification.

---

## 9. Long-term vs. short-term effects — Hohnhold, O'Brien, Tang (KDD 2015)

### Source

| Title | Authors | Venue | Year | URL | Rung |
|---|---|---|---|---|---|
| "Focusing on the Long-term: It's Good for Users and Business" | Henning Hohnhold, Deirdre O'Brien, Diane Tang (Google) | KDD | 2015 | https://research.google.com/pubs/archive/43887.pdf | 1/2, full text obtained (10 pages) |

### The core methodological contribution — three experiment designs for measuring user learning

The paper's central insight, quotable verbatim: naive before/after comparison of treatment vs.
control cannot isolate user-learning effects from confounds (seasonality, other launches,
system drift). Their fix is to compare cohorts **while they receive the same treatment**:

> "The key insight, in part stemming from observing carryover effects from prior experiments, is
> that to measure user learning, we need to compare the two cohorts, E and C, while they receive
> the same treatment. To achieve this, we sandwich the treatment period between two A/A test
> periods: a pre-period... and a post-period (PP), where any behavioral differences due to user
> learning are measured."

— §3.1.2, p.4. This is the **Post-Period (PP) method**; the paper also describes a **Lagged-Start**
variant and a **Cookie-Cookie-Day (CCD)** method that re-randomizes a fresh cohort into treatment
daily, allowing continuous (rather than only end-of-experiment) measurement of the learning
curve. Explicit acknowledgment of Kohavi's carryover-effects finding as the direct inspiration:
"Kohavi et al. also note that experiments can result in carryover effects... We have
independently observed such carryover effects in our systems and our methodology... leverages
them to study user learning at scale." (§2, p.2 — directly connecting this Google paper's method
to the Bing carryover-effects finding in §4 above.)

### The exact learning-rate and half-life figures

> "The half-life of learning ln(2)/β was approximately 60 days... or β ≈ 0.012 per day."

— §3.2.1, p.6. This is fit to Google's own ads-blindness/sightedness data via an exponential
unlearning model, cross-validated against the independent CCD method.

> "Based on the learning rate estimate β ≈ 0.012, we now typically run long-term desktop
> experiments for 90 days, which gives a reasonable trade-off between study run-times and
> captured learning effects. According to (4), the learning observed after 90 days is
> approximately 1−e^(−0.012·90) = 65% of the learning effect we would see in a very long
> experiment."

— §3.2.1, p.6. **This 65%-at-90-days figure is a concrete, quotable, primary answer to "how long
before short-term looks like long-term" for Google's ads-blindness context specifically** — not
a universal constant, but a real, worked number from a real measurement program.

> "Assume we take the measurement in the first two weeks of the post-period... unlearning
> reduces the effect observed over the 14 days of the measurement to 1/14·Σ exp(−0.012·j) = 92%.
> Hence Ũ_CTR measured in the first 14 days of a post-period in a standard learning study is
> 65%·92% ≈ 60% of the effect observed in a very long running study."

— §3.2.1, p.6.

### The "correction factor Q" — why standard studies still underestimate true long-term effect

> "Since the user learning measurement methods we presented here underestimate learning, we have
> Q ≥ 1. Both number and frequency of exposures and consistency issues contribute to Q... The
> exponential learning model... implies that in a 90-day study we would only measure about 65%
> of the long-term effect simply due to the limited study duration, not even accounting for lack
> of treatment consistency. Hence we have Q ≥ 1/0.65 = 1.54 for a standard learning measurement
> in a desktop study. In practice, we often use values of Q between 2 and 3 for desktop and
> laptop devices in order to also compensate for treatment inconsistency."

— §3.3, p.7. Mobile is explicitly called out as different: "we think Q is closer to 1 for
mobile and have, in fact, often assumed the minimal possible value Q = 1 in this case." — i.e.,
Google's own methodology paper states that even a *well-designed* 90-day desktop long-term study
is known to understate the true eventual effect by roughly 1.5–3×, and mobile behaves
differently (less understatement) than desktop.

### The two headline real-world applications, with exact figures

> "In October 2011, our ads blindness work drove a change in the quality score used in the
> auction ranking function that emphasizes the landing page experience more."

— §5, p.9 (the auction-ranking-function change).

> "This and similar ads blindness studies led to a sequence of launches that **decreased the
> search ad load on Google's mobile traffic by 50%**, resulting in dramatic gains in user
> experience metrics. We estimated that the positive user response would be so great that the
> long-term revenue change would be a net positive."

— §5, p.9. The paper's own Figure 5 shows the underlying mechanics for a *different*, illustrative
mobile ad-load-**increase** experiment (not the 50%-reduction launch itself, but a companion
study of the opposite direction): short-term RPM gains were significant and positive, but "the
long-term revenue estimate LT_RPM for this treatment is essentially zero — in stark contrast to
the significant short-term RPM gains — even under the idealized assumption of complete treatment
consistency (Q=1)." This is the paper's single clearest concrete illustration of short-term vs.
long-term divergence: **a change that looked like a clear short-term revenue win had an
estimated long-term revenue impact of approximately zero once ads-blindness user-learning was
priced in.**

### What this licenses a skill to say
- A primary-sourced, Google-specific, exact learning half-life (~60 days, β≈0.012/day) and a
  primary-sourced statement that even a 90-day study captures only ~65% of the eventual
  long-term effect — both directly reusable for a skill's "short-term metrics can mislead"
  section, correctly scoped as Google ads-blindness-specific, not universal.
- The correction-factor framing (Q between 1.5 and 3 for desktop, closer to 1 for mobile) as a
  primary, quantified illustration of *how much* a naive short-term-only read can understate a
  true long-term effect, with the caveat that the exact multiplier is domain- and
  platform-specific.
- The mobile ad-load example as a concrete, primary-sourced case where short-term RPM gain and
  long-term RPM impact diverged from clearly-positive to approximately-zero.
- This paper is explicitly built on and cites Kohavi's carryover-effects finding — a clean,
  citable bridge between the "puzzling outcomes" carryover-effects teaching (§4 above) and this
  long-term-measurement methodology.

### What it does NOT license
- The 60-day half-life and 65%-at-90-days figures are **Google ads-blindness-specific** (a
  particular user-learning phenomenon in a particular ad-serving context) — do not present them
  as a universal "how long to run a long-term study" constant for arbitrary product changes.
- Q=2-3 is explicitly a **desktop** correction factor; mobile is different (closer to 1) per the
  same source — do not conflate the two.

---

## 10. Additional load-bearing findings hit along the way

### Novelty/Primacy effect durations and the "statistical artifact, not real trend" finding

Already fully quoted in §4 above (Five Puzzling Outcomes, KDD 2012, §3.3): the 67%/55%
day-1/day-2 out-of-band probabilities, and the explicit finding that Kohavi's team "could not
find a single experiment where a statistically significant result in one direction became
statistically significant in the other direction" due to primacy/novelty — i.e., **true
primacy/novelty sign-reversal is essentially never observed in Kohavi's own large-scale data**,
even though it is folklore-invoked constantly to explain early results. This is a strong,
primary-sourced falsification target for a skill's "novelty effects" section.

### Carryover-effect durations (already quoted in full in §4): 3 weeks (typical) to 3+ months (severe bug case)

### A/A tests as a platform-validation practice — formal definition and the two explicit uses (already quoted in full in §4)

The A/A test recommendation is stated identically and consistently across every primary source
fetched in this pass (2012 paper, 2013 paper, and the Hohnhold et al. 2015 paper, which uses
A/A "sandwiching" as its core methodological device) — this is about as strongly corroborated a
practice recommendation as exists in this whole corpus.

### Metric sensitivity/trustworthiness — the CV-does-not-shrink finding (already quoted in §4)

---

## Every exact figure traced to a primary source in this pass

1. Microsoft "1/3 of ideas improved the metric(s) they were designed to improve" — Kohavi,
   Crook, Longbotham et al. (2009), **fetched and verified at its ultimate primary source**
   (https://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf), restated verbatim in KDD
   2012/2013 and the 2020 book. Plus the underlying four-way outcome breakdown and the ~1/3
   good / 1/3 flat / 1/3 negative three-way split, from the same 2009 source.
1a. Amazon "Behavior-Based Search" intern project → "revenue improvements worth hundreds of
    millions of dollars" — Kohavi et al. (2009 ThinkWeek paper), §5.1.
1b. Microsoft blind-prediction survey: 200+ respondents, average 2.3/8 correct guesses (worse
    than chance would suggest for an easy task) — Kohavi et al. (2009 ThinkWeek paper), §6.2.
1c. Naive sequential (non-randomized) comparison inflated an effect from a true 2.06% to an
    apparent 11.38% on the same underlying MSN Real Estate data — Kohavi et al. (2009 ThinkWeek
    paper), §5.2.
2. Bing/Google "10-20% success rate in well-optimized domains" — Kohavi et al. (2020 book,
   Tenet 3) — **Google half traces only to Manzi (2012), not to Google directly (see chain-break
   note, §3).**
3. Slack "~30% of monetization experiments positive / 70% thrown away" — Fareed Mosavat tweet,
   2019, via Kohavi/Tang/Xu (2020) Ch.1.
4. Kaushik "80% of the time you/we are wrong" — Kaushik (2006) primer, via Kohavi's citation.
5. Moran/Netflix "90% of what they try is wrong" — Moran (2007), p.240, via Kohavi's citation.
6. Quicken Loans/Hadiaris "guess the outcome ~33% of the time" — Moran (2008) blog, via Kohavi's
   citation.
7. Etsy/McKinley "nearly everything fails" — McKinley (2013), via Kohavi's citation.
8. Twyman's Law, two verbatim wordings — Kohavi, Tang, Xu (2020) preface; Kohavi et al. (KDD
   2013 and 2014).
9. Bayes'-rule posterior-true-positive formula and worked numbers (1/3 prior→89%; 1/500
   prior→3.1%) — Kohavi et al. (KDD 2014), Rule #2.
10. Sessions/user Twyman worked example (0.25% SD, +2.0% observed = 8 SD, p≈1e-15) — Kohavi et
    al. (KDD 2014), Rule #2.
11. Bing "over 200 concurrent experiments," "~100M monthly US users," "3.2B queries/month"
    (as-of 2013) — Kohavi et al. (KDD 2013).
12. "1% revenue improvement = >$10M annually in the US" (Bing, as-of 2013) — Kohavi et al. (KDD
    2013).
13. "Two small changes each increased ad revenue by ~$100M annually" (Bing, undated within
    paper, ≤2013) — Kohavi et al. (KDD 2013).
14. Bing slowdown experiment: 10%/10% users delayed 100ms/250ms, two weeks; "every 100msec
    improves revenue by 0.6%" — Kohavi et al. (KDD 2013 and KDD 2014, identical figures).
15. "10msec server-performance improvement pays for an engineer's fully-loaded annual cost" —
    Kohavi et al. (KDD 2013); updated in the 2020 book to "every four milliseconds... funded an
    engineer for a year" by 2015.
16. Multiple-testing inflation: 5 treatments → 12% false-positive rate; 6×5-treatment iterations
    → >50% — Kohavi et al. (KDD 2013), §5.1.
17. O'Brien-Fleming boundary schedule at Bing: 5×10⁻⁸ (day 1) → 0.040 (day 7), 7 checkpoints —
    Kohavi et al. (KDD 2013), Figure 4.
18. MSN UK "opening Hotmail link in new tab" +8.9% engagement (900k+ users, Aug 2008); replicated
    on 2.7M users (June 2010) and 12M users with +5% engagement (April 2011) — Kohavi et al.
    (KDD 2014), Rule #1.
19. Bing font-color experiment: >$10M annually, replicated on 32M users — Kohavi et al. (KDD
    2014), Rule #1.
20. "Perhaps one in 500 experiments meets the bar of such high ROI and replicable positive
    impact" — Kohavi et al. (KDD 2014), Rule #1.
21. Rule #2 impact range: "most fail, those that succeed improve key metrics by 0.1% to 1.0%"
    (2014, Bing) vs. "0.1% to 2%" (2020, book) — two distinct, dated statements.
22. Office Online surrogate-metric failure: "64% reduction in clicks per user" — Kohavi et al.
    (KDD 2014), Rule #3.
23. Bing Edge CDN migration click-tracking artifact: "click loss rate... dropped by more than
    60%" — Kohavi et al. (KDD 2014), Rule #3.
24. Bing slowdown 250ms → revenue −1.5%, CTR −0.25%; linear-extrapolated 500ms → revenue −3%,
    CTR −0.50% — Kohavi et al. (KDD 2014), Rule #3.
25. Jake Brutlag/Google: 100–400ms delay → searches/user −0.2% to −0.6% — cited in Kohavi et al.
    (KDD 2014), Rule #3.
26. Amazon 100ms slowdown → sales −1% — Linden (2006), cited in Kohavi et al. (KDD 2014), Rule
    #4.
27. Abandonment-rate-unchanged examples with exact p-values (0.64, 0.71, 0.92, 0.93, 0.83),
    including "$150M annual loss from a 12% revenue decline" ad-background-color example —
    Kohavi et al. (KDD 2014), Rule #5.
28. Knight Capital: "$440 million loss and erased 75% of Knight's equity value" (Aug 2012) —
    cited in Kohavi et al. (KDD 2014), Rule #6.
29. Skewness-based minimum-sample-size rule: n ≥ 355×s² per variant, with worked Bing table
    (Revenue/User skew 17.9→114k users→4.4% sensitivity, etc.) — Kohavi et al. (KDD 2014), Rule
    #7 (as corrected by the paper's own Jan 6 2015 erratum).
30. Bing OEC bug example: distinct queries/user +10%, revenue/user +30% from a results-quality
    bug — Kohavi et al. (KDD 2012), §3.1.
31. Novelty/primacy day-1/day-2 out-of-band probabilities: 67% / 55% — Kohavi et al. (KDD 2012),
    §3.3.3.
32. Carryover effects lasting ~3 weeks (typical) and >3 months (severe case) — Kohavi et al.
    (KDD 2012), §3.5.
33. A/A test formal definition and "should reject ~5% of the time at 95% CI" — Kohavi et al.
    (KDD 2012), §2.
34. CUPED: "reduce variance by about 50%" (headline/abstract figure) — Deng, Xu, Kohavi, Walker
    (WSDM 2013).
35. CUPED: three real Bing experiments, exact variance reductions 45%/52%/49%, one-week
    pre-period — Deng, Xu, Kohavi, Walker (WSDM 2013), §6.
36. CUPED: revenue-per-user specifically saw <5% variance reduction (low pre/post correlation) —
    Deng, Xu, Kohavi, Walker (WSDM 2013), §5.2.3.
37. CUPED preconditions: covariate must satisfy E(X^t)=E(X^c) pre-treatment; new users/no
    pre-period history get no benefit — Deng, Xu, Kohavi, Walker (WSDM 2013), §3.2.2 and §4.
38. CUPED sign-flip warning example (Distinct-Queries-per-user as a bad covariate produced a
    statistically significant negative estimate on a known-positive effect) — Deng, Xu, Kohavi,
    Walker (WSDM 2013), §5.3.
39. Sensitivity scaling law n ∝ 1/δ²: "10,000 users to detect 5% delta; 100× more users (1M) to
    detect 0.5% delta" — Deng, Xu, Kohavi, Walker (WSDM 2013), §1.
40. Peeking: "even with 10,000 samples, false positive probability can easily be inflated by
    5-10x" — Johari, Koomen, Pekelis, Walsh (KDD 2017), §1.
41. Peeking: "false positive probability approaches 100%" if the experimenter waits long enough
    under naive stop-at-first-significance — Johari et al. (KDD 2017), §3.1.
42. Always-valid p-values' formal Type-I guarantee (uniform over all stopping times) — Johari et
    al. (KDD 2017), Definition 3.1.
42a. mSPRT reaches significance with fewer samples than a comparably-powered fixed-horizon test
    in most of Optimizely's own 10,000-experiment sample, EXCEPT when power target is very high
    (β≥0.9) and effect size is known accurately in advance ("rarely achievable") — Johari et al.
    (KDD 2017), §5.3.
42b. Optimizely's own stated rationale for choosing FDR (Benjamini-Hochberg) control over FWER
    (Bonferroni) — "best reflect how Optimizely's customers intuited their results" — Johari et
    al. (KDD 2017), §5.3, corroborating and extending the vendor blog's version of the same
    claim.
43. Optimizely Stats Engine launch date: Jan 21, 2015; deployed across "hundreds of thousands of
    experiments... by thousands of customers" — Johari et al. (KDD 2017), §1; Pekelis blog
    (2015).
44. Optimizely FDR framing: "at most 10% of winners and losers have no difference"; naive
    continuous monitoring "increased error rates from 5% to over 25%"; "57% of simulated A/A
    tests falsely declared a winner"; "10% false positive rate can lead to a 50% chance of an
    incorrect business decision" — Pekelis, Optimizely blog (Jan 20, 2015) — **vendor
    self-report, labeled as such.**
45. Optimizely's mSPRT prior built from 10,000 historical two-variation experiments across four
    customer pricing tiers — Johari et al. (KDD 2017), §5.2.
46. GrowthBook: sequential method = Waudby-Smith et al. (2023) asymptotic confidence sequences,
    analogous to Spotify's GAVI (Howard et al. 2022) — GrowthBook docs, cited secondhand.
47. GrowthBook: Bayesian posteriors remain valid under early stopping, but decisions built on
    them "can still result in inflated false positive rates" — GrowthBook docs (Statistics
    Overview page).
48. SRM detection: chi-square test; worked example 50.2/49.8 (821,588 vs 815,482 users), p <
    1-in-500,000 — Fabijan et al. (KDD 2019), §2.3.1.
49. SRM prevalence: ~6% of experiments at Microsoft (2019 study, ~1-year lookback) — Fabijan et
    al. (KDD 2019), §4.1.
50. SRM prevalence: ~10% of triggered analyses at LinkedIn — Chen et al. (2018 arXiv), cited by
    Fabijan et al. (KDD 2019), §2.3.2.
51. "A product running ten thousand experiments a year can expect ≥1 SRM per day" — Fabijan et
    al. (KDD 2019), §4.1.
52. SRM taxonomy: 5 categories, 25 distinct causes; 10 rules of thumb for diagnosis — Fabijan et
    al. (KDD 2019), §5–6.
53. SRM research base: >10,000 historical OCEs across 4 companies, 14 interviews — Fabijan et
    al. (KDD 2019), §3.
54. Google ads-blindness half-life: ln(2)/β ≈ 60 days, β≈0.012/day — Hohnhold, O'Brien, Tang
    (KDD 2015), §3.2.1.
55. Google: 90-day study captures ~65% of eventual long-term learning effect; first-14-days PP
    measurement captures only ~60% (65%×92%) — Hohnhold, O'Brien, Tang (KDD 2015), §3.2.1.
56. Google: correction factor Q ≈ 1.5–3 for desktop, closer to 1 for mobile — Hohnhold, O'Brien,
    Tang (KDD 2015), §3.3.
57. Google: mobile search ad load reduced 50% following ads-blindness findings; a companion
    mobile ad-load-increase study showed significant short-term RPM gain but ≈0 estimated
    long-term RPM impact — Hohnhold, O'Brien, Tang (KDD 2015), §5.
58. Google ads-blindness macro-model: U_CTR ≈ k1·ΔAdRelevance + k2·ΔLandingPageQuality, fit on
    170 observations from >100 long-term experiments, R²=0.906 — Hohnhold, O'Brien, Tang (KDD
    2015), §4.2, Figure 4.
59. Derived (not cited) illustration: two-proportion sample size, 3% baseline, 5% relative lift,
    α=.05, power=.80 → ≈208,000 users per arm via the exact formula, ≈207,000 via the
    "16σ²/δ²" shorthand — derived in this document, §6, not attributed to any paper.

## Every figure I could NOT trace, marked UNTRACED, with where the chain broke

1. **"Google ran ~12,000 randomized experiments in 2009, ~10% led to business changes"** —
   traces only to Jim Manzi's book *Uncontrolled* (2012), as repeated by Kohavi. **No
   first-party Google publication was found stating this.** Chain breaks at Manzi, a
   non-Google author.
2. **The specific constant "16σ²/δ²" attributed to Kohavi's "Seven Rules of Thumb" paper** —
   I read the paper's full text; it is not there (that paper states a different, skewness-based
   formula, 355×s²). It may exist in the book's Chapter 17, which I did not obtain. Chain
   breaks at "I could not locate the primary text this pass" — a clean follow-up target, not a
   claim to ship without further verification.
3. ~~A specific numeric sample-size/power penalty for always-valid p-values / mSPRT~~ —
   **RESOLVED, no longer untraced.** §5 "Detection Performance" of Johari et al. (2017) was
   fetched in full: their own 10,000-experiment simulation shows mSPRT usually reaches
   significance with *fewer*, not more, samples than a comparably-powered fixed-horizon test
   under realistic conditions (effect size not known accurately in advance); the classical "tax"
   only appears at very high power targets (β≥0.9) combined with accurate a-priori effect-size
   knowledge. See the updated §7a above.
4. **Waudby-Smith et al. (2023) "Asymptotic Confidence Sequences" and Howard et al. (2022)
   "Generalized Anytime-Valid Inference"** — known only via GrowthBook's secondhand citation of
   them; I did not independently fetch or verify either paper. Chain breaks at "secondhand via a
   vendor's docs page."
5. **Ramdas, Grünwald, Vovk, Shafer, "Game-theoretic statistics and safe anytime-valid
   inference"** (*Statistical Science*, 2023) — confirmed to exist as a real, citable
   peer-reviewed paper via search, but full text not fetched; no specific figures from it are
   claimed anywhere in this document.
6. **Pocock (1977) and O'Brien & Fleming (1979) original clinical-trials papers** — not fetched
   (paywalled, pre-web, outside this channel's scope); the *method* is cited to these papers by
   name/year/venue only, while the *applied numbers* used throughout this document are sourced
   independently and reliably to Kohavi's own KDD 2013 paper, which implemented the method at
   Bing.
7. **Exact y-axis values in Johari et al.'s Figure 2** (the α=0.01/0.05/0.10 false-positive-vs-
   run-length curves) — described qualitatively from the figure's visual description, not
   pixel-verified; only the paper's own verbatim "5-10x at 10,000 samples" sentence is
   citable with confidence.
8. **"srm.wtf" / open-source SRM tooling** mentioned in the charter as a possible first-party
   resource — not independently investigated this pass (assigned to channel C/GitHub); no claim
   about it is made anywhere in this document.
9. **exp-platform.com's own pages for "A/B Testing Pitfalls," "Pitfalls of long-term online
   controlled experiments," and the 2007/2009 "Practical Guide to Controlled Experiments on the
   Web"** — referenced repeatedly *inside* the papers I did fetch (as citations [12]/[16]/[21]
   etc.) but their own PDFs were not separately fetched this pass. Chain breaks at "not yet
   fetched," a clean follow-up target for the controller if these specific papers' own
   figures are needed.
10. **"Top Challenges from the first Practical Online Controlled Experiments Summit"** (SIGKDD
    Explorations, 2019, 34-author consensus paper) and **"A/B Testing Intuition Busters"** (KDD
    2022) — both confirmed to exist at their exp-platform.com URLs (title, authors, venue, year
    verified), but their body text was not fetched this pass; no specific claims from either are
    made in this document beyond their existence.
