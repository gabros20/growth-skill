# D3 — The papers layer: variance reduction, quasi-experiments, geo-experiments, interference

Worker: grw-web / D3. Channel: open web (arXiv, SSRN, publisher pages, author homepages, GitHub).
Topic: what to do when you cannot randomize, plus the variance-reduction literature beyond CUPED.
As-of date: 2026-08-01. WebSearch calls used: 15 of budget 20. Prefer WebFetch/curl throughout.

CUPED itself is D1's territory — not re-derived here. Lewis & Rao is already verified in the
marketing corpus — not re-derived here, only cited + a consistency note (item 8).

---

## 1. Variance reduction beyond CUPED

### 1.1 Lin (2013) — the theoretical backbone for regression-adjustment / multi-covariate CUPED

**Citation.** Winston Lin, "Agnostic notes on regression adjustments to experimental data:
Reexamining Freedman's critique." *Annals of Applied Statistics*, 2013, Vol. 7, No. 1, pp. 295–318.
arXiv:1208.2301. URL: https://arxiv.org/abs/1208.2301 (PDF fetched and read in full via
`arxiv.org/pdf/1208.2301`). **Read: FULL TEXT.** Rung: 2 (peer-reviewed); rung 1 for the
adjustment technique it licenses.

**What it establishes.** Answers David Freedman's critique that OLS covariate-adjustment of a
randomized experiment can *worsen* asymptotic precision, invalidate standard error estimates, and
introduce small-sample bias. Lin shows that in sufficiently large samples these problems are
either minor or fixable: OLS adjustment *including a full set of treatment×covariate interactions*
cannot hurt asymptotic precision, and Huber–White (sandwich) standard errors are asymptotically
valid (consistent or conservative) whether or not interactions are included. This is the
theoretical justification underlying "CUPED with multiple covariates" and interaction-based
regression adjustment used across the industry.

**Exact claims (verbatim).**
> "This paper shows that in sufficiently large samples, those problems are either minor or easily fixed. OLS adjustment cannot hurt asymptotic precision when a full set of treatment-covariate interactions is included. Asymptotically valid confidence intervals can be constructed with the Huber-White sandwich standard error estimator." (abstract)

> "The strongest reasons to support Freedman's preference for unadjusted estimates are transparency and the dangers of specification search." (abstract)

> "One practical interpretation of these conditions is that in order for the results to be applicable, the size of each treatment group should be sufficiently large (and much larger than the number of covariates)." (§4.2.1, line ~366 of extracted text)

**Requirements/preconditions it states.**
- A **full set of treatment × covariate interactions** must be included in the OLS specification
  (not just main-effect covariates) for the asymptotic-precision guarantee to hold.
- Requires "sufficiently large samples" — explicitly, each treatment-group size should be "much
  larger than the number of covariates" (finite-population asymptotics, Freedman's regularity
  conditions generalized to multiple covariates, number of covariates K held fixed as n grows).
- Huber–White sandwich SEs are needed for valid inference regardless of interaction inclusion.

**What it does NOT license.** Does not claim OLS adjustment is a free lunch in *small* samples —
Freedman's small-sample bias critique is conceded, just shown to vanish asymptotically. Does not
license adjustment without interactions as safe (only *with* full interactions is the "cannot hurt"
guarantee proven). Warns explicitly about "the dangers of specification search" as a reason
practitioners may still prefer transparency of unadjusted estimates.

---

### 1.2 CUPAC — DoorDash's ML-based control variate

**Citation.** Jeff Li, "Improving Experimental Power through Control Using Predictions as
Covariate (CUPAC)." DoorDash Engineering Blog, June 8, 2020.
URL: https://careersatdoordash.com/blog/improving-experimental-power-through-control-using-predictions-as-covariate-cupac/
(direct WebFetch 403'd on the live URL — retrieved via Wayback Machine snapshot
`http://web.archive.org/web/20260131173354/...`, curl'd, HTML-stripped, read in full).
**Read: FULL TEXT (via archived snapshot).** Rung: 1 (first-party company engineering blog, not
peer-reviewed — rung 1 for DoorDash's own practice only).

Companion academic paper referenced in some secondary sources: "Control Using Predictions as
Covariates in Switchback Experiments" — found only as a ResearchGate-hosted PDF link during
search; **not independently fetched/verified** — flagged UNTRACED for this run, cite the blog
post as primary.

**What it establishes.** CUPAC extends CUPED by replacing a single linear pre-period covariate
with the **output of a machine-learning model** trained on pre-experiment, treatment-unaffected
features, used as the control variate. It is a covariate-control variance-reduction technique
(alongside stratification and post-stratification, which the post also names).

**Exact claims (verbatim).**
> "This approach has proved powerful in practice, allowing us to shorten our switchback tests by more than 25% while maintaining experimental power."

> "The amount of variance reduced by CUPAC scales linearly with its out-of-sample partial correlation with the outcome variable Y, given other control variables. When improving model performance (hyperparameter tuning, feature engineering, etc.), we therefore recommend aiming to maximize the partial correlation between the prediction covariate (CUPAC) and the target metric."

> "On average, CUPAC drives a nearly 40% reduction in required test length vs. baseline and a 15-20% improvement when compared to alternative control methods." (offline simulation result, detecting a 5-second ASAP [delivery-time metric] change at 80% power, averaged across 4 random market subsets used for switchback testing)

**Requirements/preconditions it states.**
- Needs pre-experiment data to build the ML outcome model, exactly as CUPED needs a pre-period
  covariate.
- The ML model's **input features must be uncorrelated with treatment assignment** during the
  experimental period (same "not affected by the intervention" constraint CUPED covariates need).
- The post explicitly credits CUPED (Deng, Xu, Kohavi & Walker 2013, WSDM) as the inspiration —
  CUPAC is a strict methodological extension, not a replacement paradigm.
- States a practical side-benefit: replacing many one-hot-encoded categorical covariates with a
  single ML-based covariate "significantly reduce[s] runtime" — an engineering-cost argument, not
  a statistical one.

**What it does NOT license.** This is DoorDash's own reported result on their own switchback
tests and ASAP metric — the 25%/40%/15-20% figures are **DoorDash-specific, single-company,
non-peer-reviewed** numbers. Do not generalize to "CUPAC reduces test length by 25-40%" as a
universal claim; report it as DoorDash's stated result, dated 2020.

---

### 1.3 MLRATE — Guo, Coey, Konutgan, Li, Schoener, Goldman (Meta/Facebook), NeurIPS 2021

**Citation.** Yongyi Guo, Dominic Coey, Mikael Konutgan, Wenting Li, Chris Schoener, Matt Goldman,
"Machine Learning for Variance Reduction in Online Experiments." NeurIPS 2021 (per brief; arXiv
metadata shows submitted June 14, 2021, revised through January 6, 2022). arXiv:2106.07263.
URL: https://arxiv.org/abs/2106.07263 ; full text via https://arxiv.org/pdf/2106.07263.
**Read: FULL TEXT.** Rung: 2 (peer-reviewed, NeurIPS).

**What it establishes.** MLRATE = ML Regression-Adjusted Treatment-Effect estimator. Uses
arbitrary ML models (not just linear regression) as the outcome predictor / control variate, with
**cross-fitting** (splitting data, training the predictor on one fold, predicting on the
held-out fold) to avoid overfitting bias. Proves consistency and asymptotic normality under
general conditions, and proves the estimator is **robust to bad ML predictions**: if predictions
are uncorrelated with the true outcome, MLRATE is asymptotically no worse than plain
difference-in-means.

**Exact claims (verbatim).**
> "MLRATE is robust to poor predictions from the machine learning step: if the predictions are uncorrelated with the outcomes, the estimator performs asymptotically no worse than the standard difference-in-means estimator, while if predictions are highly correlated with outcomes, the efficiency gains are large." (abstract)

> "In A/A tests, for a set of 48 outcome metrics commonly monitored in Facebook experiments the estimator has over 70% lower variance than the simple difference-in-means estimator, and about 19% lower variance than the common univariate procedure which adjusts only for pre-experiment values of the outcome." (abstract)

> "...the estimator reduces variance in A/A tests by around 19% on average relative..." (§1, body text, restating the abstract's comparison to univariate CUPED-style adjustment)

> "...the difference-in-means estimator would require sample sizes on average 5.44 times as large on average across metrics and the univariate procedure would require sample sizes 1.56 times [as large]..." (§ empirical evaluation — i.e., MLRATE needs 1/5.44 the sample size of plain diff-in-means, and 1/1.56 the sample size of univariate CUPED, to hit the same power, on their 48-metric Facebook A/A-test evaluation)

**Requirements/preconditions it states.**
- **Cross-fitting is required** ("the chief purpose of cross-fitting is to avoid bias from
  overfitting") — the ML predictor must be trained on a different fold than it predicts on.
- Only needs the ML model to be *consistent* for the true conditional expectation, "not
  convergence at a particular rate" — a relatively weak condition, but still requires the ML step
  to actually converge (many common ML algorithms, e.g. random forests, qualify per cited results).
- Explicitly allows the ML step to be **misspecified and inconsistent** without breaking validity
  — "there is no requirement that g0(X) = E[Y|X]" — but a poorly specified model just gives you
  no efficiency gain, not bias, *provided cross-fitting is enforced*.
- The exact "70% lower variance" and "19% lower variance" figures are scoped to: **A/A tests**
  (zero true effect, so this measures variance not bias-adjusted power), a **specific set of 48
  outcome metrics "commonly monitored in Facebook experiments,"** i.e. one company's metric suite.

**What it does NOT license.** The headline "70%/19% variance reduction" numbers are an A/A-test,
single-company (Meta), 48-specific-metric result — not a universal number for "ML variance
reduction." The paper does NOT claim these gains transfer unchanged to A/B tests with real
effects, nor to companies with different metric distributions. Do not repeat "MLRATE cuts
variance 70%" as a general claim without the A/A-test-at-Facebook scope attached.

---

### 1.4 Stratification / post-stratification and Deng's later work

DoorDash's CUPAC post (§1.2) explicitly names stratification and post-stratification as sibling
variance-reduction techniques in the same family as covariate control, but does not derive them.
A search for "Deng's later work" beyond CUPED (2013) and MLRATE-adjacent work did not surface a
single canonical follow-on Deng paper within this worker's budget — **UNTRACED**: no specific
later Deng et al. paper was independently verified in this pass. The controller/D1 should check
whether Deng has a stratification-specific paper before shipping any claim under his name beyond
CUPED itself.

---

## 2. Ghost Ads — Johnson, Lewis, Nubbemeyer

**Citation.** Garrett A. Johnson, Randall A. Lewis, Elmar I. Nubbemeyer, "Ghost Ads: Improving
the Economics of Measuring Online Ad Effectiveness." **Journal of Marketing Research**, Vol. 54,
Issue 6 (2017), pp. 867–884. Publisher page (Sage/AMA): https://journals.sagepub.com/doi/10.1509/jmr.15.0297
DOI 10.1509/jmr.15.0297. SSRN working-paper version: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2620078
(SSRN paper no. FR 15-21). **Read: ABSTRACT ONLY**, via the SAGE/AMA publisher abstract page
(WebFetch succeeded there). **SSRN was Cloudflare-gated** — curl with the specified browser UA
returned only a "Just a moment..." JS-challenge page; the PDF itself was never opened. Rung: 2
(peer-reviewed, JMR).

**What it establishes.** "Ghost ads" is a method for recovering a valid, individually-matched
control group in online display-advertising experiments **without the opportunity cost of a
PSA (public service announcement) holdout** — i.e., without having to actually withhold ad
inventory from a control group and serve them a substitute ad. The mechanism (as described in the
publisher abstract): the method identifies, for each exposed (treatment) user, a matched
control-group counterpart who *would have* been exposed had they been in treatment, using the ad
platform's own targeting/delivery logic — a "predicted ghost ad" — rather than physically
delivering a PSA to a held-out group. This is compatible with modern real-time-bidding/optimizing
ad platforms, where a classic PSA holdout is hard to implement because the platform is constantly
re-optimizing delivery.

**Exact claims (verbatim, as extracted from the publisher abstract page).**
> "advertisers can measure ad lift just as precisely while spending at least an order of magnitude less" [compared to intent-to-treat / PSA experiments]

> "Implementation recorded over 100 million predicted ghost ads daily." [scale claim for the "predicted ghost ad" variant]

> Retargeting-campaign case study cited in the abstract: "website visits lifted 17.2% and purchases increased 10.5%."

**Caveat on the above quotes:** these are WebFetch's extraction from the SAGE abstract page, not
this worker's own reading of primary running text (the underlying PDF — both SSRN's and JMR's
paywalled version — was not opened). Treat the "order of magnitude less" phrase and the 17.2%/
10.5% figures as **abstract-level, not independently re-derived from the paper's tables.** The
100-million-ghost-ads-per-day figure matches what a WebSearch snippet earlier reported
independently ("their implementation records more than 100 million predicted ghost ads per day"),
which is corroborating but still secondhand relative to the primary PDF.

**Requirements/preconditions it states.** Not extractable beyond the abstract — the mechanism
requires access to the ad platform's own delivery/targeting decision logic to construct the
"ghost" (not-served) counterfactual ad impression; this is a claim about what the abstract implies
architecturally, not a verbatim requirement statement (full text not read).

**What it does NOT license.** Cannot verify from the abstract alone the exact statistical
machinery, the exact experimental designs compared, or caveats/limitations the authors state in
the body. **Do not repeat the specific magnitudes (17.2%, 10.5%, "order of magnitude") as
independently verified — they are UNTRACED to full text** and should be marked as such if shipped.

**Related work not independently fetched (flagged, not verified this run):** Johnson's "Inferno:
A guide to field experiments in online display advertising" (Journal of Economics & Management
Strategy, 2023, found via search snippet: https://onlinelibrary.wiley.com/doi/abs/10.1111/jems.12513)
and Johnson/Lewis/Reiley "When Less is More: Data and Power in Advertising Experiments" (SSRN
2683621) both surfaced in search but were **not fetched or read** — UNTRACED, listed for the
controller's awareness only.

**Consistency note.** The marketing skill's shipped corpus already carries Lewis & Rao (2015,
QJE) — see item 8 below. Ghost Ads is a *different* Johnson/Lewis/Nubbemeyer paper about
*measurement-cost efficiency of ad-lift experiments*, not about their statistical power; it does
not contradict Lewis & Rao's underpowering finding, it addresses a different problem (the cost of
running the control arm at all, not the sample size needed to detect an effect once you have one).
Growth should present Ghost Ads as a design-side efficiency technique that reduces the *cost*
of running a valid ad-lift control group — orthogonal to, not a fix for, the *power* problem
Lewis & Rao document.

---

## 3. Google geo-experiments — the matched-markets lineage

### 3.1 Vaver & Koehler (2011) — the foundational geo-experiments paper

**Citation.** Jon Vaver, Jim Koehler, "Measuring Ad Effectiveness Using Geo Experiments." Google
Inc. research publication, 2011. URL: https://research.google/pubs/measuring-ad-effectiveness-using-geo-experiments/ ;
PDF fetched from https://research.google.com/pubs/archive/38355.pdf . **Read: FULL TEXT** (curl +
pdftotext, 830 lines extracted and grepped). Rung: 1 (first-party Google research publication, not
peer-reviewed in the traditional sense but foundational/primary-source for the method).

**What it establishes.** The original geo-experiment design: non-overlapping geographic regions
(e.g., Designated Market Areas, DMAs) randomly assigned to treatment (geo-targeted ad spend
change) or control; measures the causal lift in a response metric (e.g., revenue, conversions)
attributable to the ad-spend change via a regression relating response-differential to
spend-differential across geo pairs.

**Exact claims (verbatim).**
> "Currently, there is no single methodology that works well in all situations. However, geo experiments are worthy of consideration in many situations because they provide the rigor of a randomized experiment, they are easy to understand, they provide results that are easy to interpret, and they have a systematic and effective design process." (§6, Concluding Remarks)

> "Note that if a limited set of pretest data is available, circular shifting of the data makes it possible to analyze scenarios with extended test periods. However, doing so requires data points to be used multiple times in generating each estimate of var(β2), and the example below demonstrates that this reuse of the data leads to estimates that are overly optimistic." (§ power/design discussion)

> Example geo universe named in the paper: "one possible set of geos is the 210 DMAs" (the 210 US Designated Market Areas) — offered as an *example* universe of available geos, not a stated minimum requirement.

**Requirements/preconditions it states.** The paper does **not** state an explicit numeric
minimum number of geos required (no sentence of the form "at least N geos are needed" was found
in the full text). It does implicitly require: (a) geos large/isolated enough to avoid
cross-geo spillover of the ad-spend treatment, (b) a pretest (pre-period) baseline to establish
the ROAS confidence-interval-width prediction — and it explicitly warns that reusing limited
pretest data via circular shifting to simulate longer test periods produces "overly optimistic"
(too-narrow) confidence-interval estimates, i.e. a stated failure mode of gaming your own pretest
data to claim more power than you have.

**What it does NOT license.** Does not state a minimum geo count — later work (Trimmed Match,
§3.3 below) is explicit that the Vaver & Koehler-style geo experiment is often "small-number-of-geos"
constrained, but that specific "small number" framing is from Chen/Longfils/Remy (2021)'s
characterization of the field, not from this 2011 paper's own text.

### 3.2 Vaver & Koehler (2012) — Periodic Measurement, multi-test-period geo experiments

**Citation.** Jon Vaver, Jim Koehler, "Periodic Measurement of Advertising Effectiveness Using
Multiple-Test-Period Geo Experiments." Google Inc., 2012.
PDF: https://research.google.com/pubs/archive/38356.pdf . **Read: FULL TEXT** (curl + pdftotext,
1743 lines extracted). Rung: 1 (first-party Google research publication).

**What it establishes.** Extends the single-test-period design of Vaver & Koehler (2011) to a
*rotating*, ongoing design: geo test/control assignments rotate across multiple sequential test
periods, and measurements can be pooled (sequential and pooled estimators) to shrink confidence
intervals relative to running a series of independent single-period geo experiments.

**Exact claims (verbatim).**
> "These sequential and pooled measurements have smaller confidence intervals than measurements from a series of geo experiments with a single test period. Alternatively, the same confidence interval can be achieved with a reduced magnitude and/or duration of ad spend change, thereby lowering the [cost of the experiment]." (Introduction — sentence truncated by extraction tool at "lowering the")

**Requirements/preconditions it states.** Not exhaustively extracted beyond the introduction in
this pass (full text was fetched but only the opening section was read in depth given budget) —
flagged for a deeper read if the controller wants exact numeric power comparisons from this paper.

**What it does NOT license.** Not independently verified beyond the stated CI-shrinkage claim
above; no specific percentage/numeric CI-shrinkage figure was extracted and should not be
invented.

### 3.3 Trimmed Match — Chen, Longfils, Remy (2021), and the Chen & Au (2019) predecessor

**Citation (design paper).** Aiyou Chen, Marco Longfils, Nicolas Remy, "Trimmed Match Design for
Randomized Paired Geo Experiments." Google LLC, 2021. arXiv:2105.07060 (submitted May 2021).
URL: https://arxiv.org/abs/2105.07060 ; full text via https://arxiv.org/pdf/2105.07060. Also at
https://research.google/pubs/trimmed-match-design-for-randomized-paired-geo-experiments/.
**Read: FULL TEXT** (curl + pdftotext, 939 lines). Rung: 1 (Google research, arXiv preprint —
no confirmation of separate peer-reviewed publication found this pass).

**Predecessor (analysis method).** Aiyou Chen, Tim Au, "Robust Causal Inference for Incremental
Return on Ad Spend with Randomized Geo Experiments" (Trimmed Match estimator itself), accepted by
**Annals of Applied Statistics** — cited in the repo README as
https://research.google/pubs/pub48448/. **Not independently fetched this pass** — cited from the
trimmed_match GitHub README, UNTRACED beyond that citation.

**What it establishes.** A robust, nonparametric statistical technique (Trimmed Match) for
analyzing randomized *paired* geo experiments (geos matched into pairs, one treatment one
control per pair), plus a design method (Trimmed Match Design, TMD) that adds optimal subset
pairing and cross-validation/sample-splitting to select which geo pairs to use. Addresses three
named problems: small number of available geos, heavy-tailed geo-level response metrics, and
temporal drift making geos less comparable between design time and experiment time.

**Exact claims (verbatim).**
> "how to design a reliable and cost-effective geo experiment can be complicated, for example: 1) the number of geos is often small, 2) the response metric (e.g. revenue) across geos can be very heavy-tailed due to geo heterogeneity, and furthermore 3) the response metric can vary dramatically over time." (Abstract)

> "In order to minimize the spillover effect due to travel across the boundaries of geos, each geo must be large enough so as to be reasonably isolated from other geos, which often results in: 1) only a small number of geos available for experimentation [Rolnick et al., 2019], and 2) heavy-tailed experimental data." (§1 Introduction)

> "the baseline response for a geo can be a few orders of magnitude larger than the cookie-level response while the number of geos is very small relative to the number of cookies, therefore, in order to detect the same level of incremental effect, geo experiments can be much more expensive than cookie experiments." (§1 Introduction)

> On a *non-randomized* market-matching predecessor method (Au 2018), contrasted with the randomized paired design this paper builds on: "[it] requires very few geos (essentially a single pair of grouped geos) and can be less costly if the TBR model fits and predicts well. However, the design method only applies to non-randomized experiments and does not meet the gold standard for causal inference." (§2, related work) — **this is the single most load-bearing "minimum data" sentence found in this literature**: the *lowest possible* geo-experiment design needs essentially one treatment/control pair, but sacrifices randomized-experiment validity to get there; Trimmed Match's own randomized paired design needs `n` pairs (n ≥ 1, chosen via the paper's optimal-subset-pairing procedure over `N` total available geos, `n ≤ ⌊N/2⌋`) with no single stated numeric floor for n beyond "as many pairs as you can construct that pass the design's optimality/power criteria."

> Worked toy example from the repo README, illustrating the smallest end of practical scale: "Reports the estimate of incremental return on ad spend (iROAS) using geo experimental data from a matched pairs design (5 geo pairs)" — i.e. the shipped example uses **5 geo pairs (10 geos)**, not a stated theoretical minimum, but the smallest N this worker found demonstrated in the primary materials.

**Requirements/preconditions it states.**
- iROAS (incremental Return On Ad Spend) is assumed **constant across geos** — "we adopt the
  nonparametric iROAS model proposed by Chen and Au (2019), which assumes that iROAS θ is the
  same across geos, an assumption first proposed by Vaver and Koehler (2011)."
- Requires only geo-level response and spend data (no user-level data) — "only require collecting
  the response metric (e.g., revenue) and ad spend at the geo level" — explicitly framed as a
  **privacy/regulatory advantage** over cookie-level experiments given GDPR and third-party-cookie
  deprecation.
- The design procedure requires constructing candidate geo-pair sets from a pool of N total
  geos and selecting `n ≤ ⌊N/2⌋` pairs via an optimal-pairing + cross-validation procedure — this
  presupposes N is large enough that meaningful pair-selection/optimization is possible; the paper
  does not give a numeric floor for N itself.

**What it does NOT license.** Does not claim Trimmed Match removes the "small number of geos"
constraint — it is explicitly a robustness method *for* the small-N, heavy-tailed regime, not a
way to avoid needing enough geos. Also explicitly distinguishes itself from Time-Based Regression
(TBR)/synthetic-control-style methods, noting TBR "belongs to the class of synthetic control
models and requires some untestable assumptions" — an implicit warning against treating synthetic
control as assumption-free.

**Repository.** `github.com/google/trimmed_match`. **LICENSE file read directly**
(`raw.githubusercontent.com/.../LICENSE`): **Apache License 2.0** (full standard Apache-2.0 text
confirmed, not just the GitHub API's summary). README (131 lines, read in full) states: "This is
not an officially supported Google product. For research purposes only." **Last commit:
2023-06-01T14:47:35Z** (via GitHub API). `pushed_at`: 2023-06-01T14:52:13Z. Not archived
(`archived: false`), 71 stars, **1 open issue**. Relative to the run date (2026-08-01), the repo
has had **no commits for roughly 3 years** — **de facto unmaintained** even though not formally
archived. Flag this clearly to the controller: cite the paper as the primary artifact; treat the
code as a frozen/reference implementation, not an actively supported tool.

---

## 4. Meta GeoLift — facebookincubator/GeoLift

**Repository.** `github.com/facebookincubator/GeoLift`. Docs site:
https://facebookincubator.github.io/GeoLift/ (fetched, root + `/docs/intro` + `/docs/GettingStarted/Walkthrough`
all fetched via WebFetch; `/docs/BestPractices` and `/docs/methodology/Introduction` both 404'd —
not found at those slugs, not independently located elsewhere this pass).

**Methodology (as stated in docs).** GeoLift uses the **Augmented Synthetic Control Method
(ASCM)** — the docs page states: "GeoLift employs Augmented Synthetic Control Method (ASCM) for
causal inference. The approach creates a synthetic counterfactual by weighting control locations
to match treated locations' pre-treatment patterns." (paraphrase-level extraction from the
Walkthrough page, not a single verbatim sentence — flagged as such.)

**Stated power-analysis / test workflow (from `/docs/GettingStarted/Walkthrough`, read in full):**
1. `GeoDataRead()` to load historical geo-level data, `GeoPlot()` to visualize it.
2. `GeoLiftMarketSelection()` — evaluates combinations of test/control locations, test durations,
   and effect sizes to select a market design (this is GeoLift's power-analysis / market-selection
   step).
3. `GeoLift()` — run on post-campaign data to estimate the treatment effect.

**Exact stated data requirements (quoted from the Walkthrough page extraction):**
> "at least a 'location' column with the geo name, a 'Y' column with the outcome data (such as units), a 'time' column with the indicator of the time period (starting at 1)"

> "there are no missing variables, NAs, or locations with missing time-stamps as those will be dropped"

> "make sure that the test period can contain at least one full purchase cycle"

**Stated minimum number of geos / minimum effect size.** **No explicit numeric minimum was
found** in the docs pages this worker could reach — the intro/Walkthrough pages do not state
"you need at least N geos" or "at least X% effect size." The worked example in the docs uses **40
locations** and evaluates simulated effect sizes across a **0–25% (or 0–50%) range** in its power
analysis — this is an *example scale*, not a stated requirement, and should not be repeated as a
minimum.

**Load-bearing power caveat (from `/docs/intro`, quoted):**
> "Meta recommends its advertisers to use people-based experimentation where possible because it is a higher statistical power compared to geo-based experimentation."

This is a first-party admission from the tool's own maker that **geo-experiments are lower-power
than individual-level experiments** — directly useful for the "when you cannot randomize"
decision inventory: geo-testing is what you fall back to, not what you prefer, even according to
the team that ships the geo-testing tool.

**License.** Repo root contents (`gh api .../contents/`) show **`LICENSE.md`**, not `LICENSE` —
fetched and read directly: **MIT License**, copyright "Meta Platforms, Inc. and its affiliates."
Full standard MIT text confirmed.

**Maintenance status.** Via GitHub API: **not archived** (`archived: false`), **261 stars**, **35
open issues**, **last commit 2026-04-01T10:24:17Z**, `pushed_at`: **2026-06-30T09:54:38Z** — i.e.
pushed within the last ~1 month of this run's as-of date. README carries a repostatus.org "Active"
badge: "The project has reached a stable, usable state and is being actively developed." **This
repo is actively maintained** — contrast sharply with Trimmed Match (§3.3), which is not.

**What it does NOT license.** GeoLift's docs do not claim GeoLift is a substitute for
individual-level experimentation on power grounds — the tool's own maintainers say the opposite
(quoted above). Requires R ≥ 4.0.0 and the `augsynth` package as a dependency (per README,
installed via `remotes::install_github`) — not a zero-dependency drop-in.

---

## 5. Synthetic control — Abadie, Diamond, Hainmueller (2010) and Abadie (2021 JEL review)

### 5.1 Abadie, Diamond, Hainmueller (2010) — the founding method paper

**Citation.** Alberto Abadie, Alexis Diamond, Jens Hainmueller, "Synthetic Control Methods for
Comparative Case Studies: Estimating the Effect of California's Tobacco Control Program."
*Journal of the American Statistical Association*, Vol. 105 (2010), pp. 493–505. Open-access
working-paper version (dated June 2009) fetched from MIT DSpace:
http://dspace.mit.edu/bitstream/handle/1721.1/59447/Hainmueller_Synthetic%20Control.pdf .
**Read: the fetched PDF is a 2-page abstract/front-matter excerpt only, not the full 13-page
paper — treat as ABSTRACT-ONLY read.** Rung: 2 (peer-reviewed, JASA); rung 1 for the method it
defines.

**What it establishes.** Introduces synthetic control as a data-driven weighted-combination
comparison unit for comparative case studies (single or few treated units, e.g. one U.S. state),
applied to California's Proposition 99 tobacco-control program.

**Exact claims (verbatim, from the abstract).**
> "We estimate that by the year 2000 annual per capita cigarette sales in California were about 26 packs lower than what they would have been in the absence of Proposition 99."

> "Given that many policy interventions and events of interest in social sciences take place at an aggregate level (countries, regions, cities, etc.) and affect a small number of aggregate units, the potential applicability of synthetic control methods to comparative case studies is very large, especially in situations where traditional regression methods are not appropriate."

**Requirements/preconditions it states.** Not extractable beyond the abstract in this pass (full
paper not opened) — see §5.2 for the detailed, verbatim-quotable requirements, since Abadie's 2021
JEL review restates and sharpens these.

**What it does NOT license.** Do not attribute detailed methodological requirement language
(convex hull, no-anticipation, pre-period length) to this 2010 paper from this worker's reading —
those exact quotes below are traced to the 2021 review, not independently re-verified against the
2010 original's full text in this pass.

### 5.2 Abadie (2021) — "Using Synthetic Controls: Feasibility, Data Requirements, and
Methodological Aspects" — THE gold document for the small-sample honesty wedge

**Citation.** Alberto Abadie, "Using Synthetic Controls: Feasibility, Data Requirements, and
Methodological Aspects." *Journal of Economic Literature*, Vol. 59, No. 2 (June 2021), pp.
391–425. DOI: 10.1257/jel.20191450. Open-access PDF (MIT DSpace, MIT Open Access Articles):
https://dspace.mit.edu/bitstream/handle/1721.1/144417/jel.20191450.pdf . **Read: FULL TEXT**
(curl + pdftotext, 3135 lines/35 pages, extensively grepped and read in sections). Rung: 2
(peer-reviewed, JEL — the field's top survey/review journal).

**What it establishes.** A practitioner-facing guide to when synthetic controls are reliable and
when they fail, covering: the bias-vs-pre-period-length tradeoff, donor-pool selection and
over-fitting risk, variable selection, availability of a comparison group, no-anticipation,
no-interference (SUTVA), and the convex-hull condition.

**Exact claims (verbatim) — pre-period length / bias tradeoff (the single most important passage
for our "how many pre-periods do you need" question):**
> "the bias of τ̂it is controlled by the ratio between the scale of the individual transitory shocks, εit, and the number of pre-intervention periods, T0." (§3.3, discussing the factor-model bias bound from Abadie, Diamond & Hainmueller 2010)

> "This is unlikely to happen when the scale of the transitory shocks, εit, is small or the number of pretreatment periods, T0, is large. In contrast, a small number of pre-intervention periods combined with enough variation in the unobserved transitory shocks may result in a close match for pretreatment outcomes even if the synthetic control does not closely match the values of μ1. This is a form of over-fitting and a potential source of bias." (§3.3)

> "Sizable biases may persist as T0 → ∞, unless the quality of the fit, X1 − X0W*, is good. That is, the ability of a synthetic control to reproduce the trajectory of the outcome variable for the treated unit over an extended period of time... provides an indication of low bias. However, a large T0 cannot drive down the bias if the fit is bad." (§3.3) — **this directly rebuts the naive assumption that "more pre-period data always fixes synthetic control bias."**

> "The risk of over-fitting may also increase with the size of the donor pool, especially when T0 is small. For any fixed T0, a larger J makes it easier to fit pretreatment outcomes even when there are substantial discrepancies in factor loadings between the treated unit and the synthetic control." (§3.3) — i.e., **a bigger donor pool is not unambiguously better; it raises over-fitting risk when the pre-period is short.**

**Exact claims (verbatim) — No Anticipation:**
> "synthetic control estimators may be biased if forward-looking economic agents react in advance of the policy intervention under investigation, or if certain components of the intervention are put in place in advance of the formal implementation/enactment of the intervention. If there are signs of anticipation, it is advisable to backdate the intervention in the data set to a period before any anticipation effect can be expected..." (§ "No Anticipation")

**Exact claims (verbatim) — No Interference (SUTVA):**
> "This is the stable unit treatment value assumption in Rubin (1980), which implies that there is no interference across units. That is, units' outcomes are invariant to other units' treatments. In some instances, however, an intervention may have spillover effects on units that are not directly targeted by it. Assuming that such spillover effects do not exist is a strong restriction that must often be enforced in the design of the study or accounted for in the analysis of the results." (§ "No Interference")

**Exact claims (verbatim) — Convex Hull Condition:**
> "Synthetic control estimates are predicated on the idea that a combination of unaffected units can approximate the pre-intervention characteristics of the affected unit. Once the synthetic control is constructed, it should be checked that the differences in the characteristics of the affected unit and the synthetic control are small..." followed by the formal statement that predictor values for the treated unit must "fall close to the convex hull" of the donor units' predictor values. (§ "Convex Hull Condition")

**Exact claims (verbatim) — Availability of a Comparison Group / donor pool contamination:**
> "in order to have units available for the donor pool, it is important that not all units adopt interventions similar to the one under investigation during the period of the study. Units that adopt an intervention similar to the one adopted by the unit of interest should not be included in the donor pool because they are affected by the intervention..." (§ "Availability of a Comparison Group")

**Requirements/preconditions it states (consolidated).**
1. **Pre-period length (T0):** no single numeric floor is given — the paper explicitly refuses to
   name a number, instead stating the bias/T0 relationship is conditional on fit quality and on
   the scale of unit-specific transitory shocks. The practical guidance is: T0 must be long enough
   that the synthetic control can be shown to **track the treated unit's pre-period trajectory
   closely** (not just match one summary statistic) — fit quality is the real requirement,
   length is only instrumentally useful insofar as it lets you *check* fit quality.
2. **Donor pool composition:** must exclude units that (a) underwent similar interventions, (b)
   suffered large idiosyncratic shocks unrelated to the treated unit's context, or (c) have
   characteristics too dissimilar from the treated unit (interpolation-only, no extrapolation).
3. **No anticipation:** treatment timing must not be preceded by anticipatory behavior — fixable
   by backdating the treatment date in the data if anticipation is suspected.
4. **No interference / SUTVA:** donor units' outcomes must not be affected by the treated unit's
   treatment (spillover into the donor pool biases the estimate, direction depends on context).
5. **Convex hull condition:** the treated unit's pre-period predictor values must lie within (or
   very close to) the convex hull of the donor pool's predictor values — synthetic control can
   only interpolate, never extrapolate.

**What it does NOT license.** Abadie explicitly does **not** give a rule-of-thumb minimum number
of pre-periods or minimum donor-pool size — any claim like "synthetic control needs at least N
pre-periods" attributed to this paper would be a fabrication; the paper's actual position is
conditional (fit-quality-dependent), which is itself the more useful, more honest finding for our
small-sample wedge. Also explicitly warns that a **large donor pool is not safely "more data" —
it raises over-fitting risk under a short pre-period**, directly contradicting a naive "more
comparison units is always better" heuristic.

---

## 6. Difference-in-differences pitfalls for product work

### 6.1 Goodman-Bacon (2021) — the TWFE decomposition

**Citation.** Andrew Goodman-Bacon, "Difference-in-Differences with Variation in Treatment
Timing." NBER Working Paper 25018 (September 2018); published in *Journal of Econometrics*, Vol.
225, Issue 2 (2021), pp. 254–277. URLs: https://www.nber.org/papers/w25018 (abstract fetched);
full-text attempt at a hosted course-reading PDF
(gregoryeady.com/.../Goodman-Bacon...pdf) downloaded but **not machine-readable via WebFetch**
(binary PDF saved but text extraction failed in this pass — not re-attempted with pdftotext due
to budget). **Read: ABSTRACT ONLY** (NBER abstract page). Rung: 2 (peer-reviewed, Journal of
Econometrics).

**Exact claims (verbatim, NBER abstract).**
> "I define the DD estimand and show how it averages treatment effect heterogeneity and that it is biased when effects change over time."

> "This paper derives an expression for this general DD estimator, and shows that it is a weighted average of all possible two-group/two-period DD estimators in the data."

**What it establishes / failure condition.** The standard two-way-fixed-effects (TWFE) DiD
estimator, under staggered treatment timing, is a variance-weighted average of every possible
2×2 (two-group, two-period) DiD comparison in the data — **including comparisons that use
already-treated units as controls for later-treated units.** When treatment effects change over
time (heterogeneous dynamic effects), this weighting scheme is biased. (This summary sentence is
drawn from a WebSearch-returned summary of the paper's widely-cited finding, corroborating but not
independently verified against the paper's own body text in this pass — flag as
**search-summary-corroborated, not full-text-verified**.)

**What it does NOT license.** Not independently confirmed to state a specific numeric bias bound
in this pass (full text not machine-read) — do not invent a percentage bias figure under this
citation.

### 6.2 Callaway & Sant'Anna (2021) — DiD with multiple time periods

**Citation.** Brantly Callaway, Pedro H. C. Sant'Anna, "Difference-in-Differences with Multiple
Time Periods." arXiv:1803.09015 (submitted March 2018, final version December 2020); published in
*Journal of Econometrics*. URL: https://arxiv.org/abs/1803.09015. **Read: ABSTRACT ONLY.** Rung: 2.

**What it establishes.** Proposes alternatives to TWFE (outcome regression, IPW, doubly-robust
estimators) for staggered-adoption settings under a **conditional parallel trends assumption**,
plus aggregation schemes to summarize treatment-effect heterogeneity, and a bootstrap procedure
for simultaneous inference. Ships open-source software (the `did` R/Python packages, not
independently audited here).

**Requirements/preconditions it states.** Requires a **conditional parallel-trends assumption**
(parallel trends holding after conditioning on covariates, not necessarily unconditionally) —
this is the standard DiD identifying assumption, restated for the multi-period/staggered case.

**What it does NOT license.** The abstract extraction found here does not explicitly restate the
TWFE-bias critique in its own words (that critique is Goodman-Bacon's and de Chaisemartin &
D'Haultfœuille's contribution, which this paper's estimators are designed to fix) — do not
attribute the TWFE-bias *diagnosis* to this paper, only the *alternative estimator*.

### 6.3 de Chaisemartin & D'Haultfœuille (2020) — negative weights

**Citation.** Clément de Chaisemartin, Xavier D'Haultfœuille, "Two-Way Fixed Effects Estimators
with Heterogeneous Treatment Effects." *American Economic Review*, Vol. 110 (2020). arXiv:1803.08807.
URL: https://arxiv.org/abs/1803.08807. **Read: ABSTRACT ONLY.** Rung: 2 (peer-reviewed, AER — a
top-5 economics journal).

**Exact claims (verbatim, abstract).**
> "Linear regressions with period and group fixed effects are widely used to estimate treatment effects. We show that they estimate weighted sums of the average treatment effects (ATE) in each group and period, with weights that may be negative."

> "the linear regression coefficient may for instance be negative while all the ATEs are positive"

**What it establishes / failure condition.** This is the sharpest, most quotable practitioner
warning in the whole DiD-pitfalls set: **a standard TWFE regression coefficient can have the
wrong sign relative to every single underlying true treatment effect**, because some of the
implicit 2×2 comparisons TWFE averages over receive *negative* weight. The paper proposes an
alternative estimator to fix this.

**What it does NOT license.** The abstract does not state how *common* negative weighting is in
practice (no stated frequency/prevalence figure) — do not repeat a percentage of studies affected
under this citation; the paper's contribution here is the possibility-proof and a fix, not an
incidence rate.

### 6.4 Sun & Abraham (2021) — event-study contamination

**Citation.** Liyang Sun, Sarah Abraham, "Estimating Dynamic Treatment Effects in Event Studies
with Heterogeneous Treatment Effects." *Journal of Econometrics* (2021). arXiv:1804.05785
(submitted April 2018, revised September 2020). URL: https://arxiv.org/abs/1804.05785. **Read:
ABSTRACT ONLY.** Rung: 2.

**Exact claims (verbatim, abstract).**
> "We show that in settings with variation in treatment timing across units, the coefficient on a given lead or lag can be contaminated by effects from other periods, and apparent pretrends can arise solely from treatment effects heterogeneity."

**What it establishes / failure condition.** The practitioner-facing warning here is sharp and
directly usable: **an event-study plot that appears to show a "pre-trend" (evidence against
parallel trends, conventionally read as invalidating the design) can be a pure artifact of
treatment-effect heterogeneity combined with staggered timing — not actual pre-trend violation.**
This is a critical caution against over-reading event-study plots as parallel-trends diagnostics
in staggered settings.

**What it does NOT license.** Proposes "an alternative estimator that is free of contamination" —
but the abstract does not give a specific numeric bound on how large the spurious-pretrend
artifact can be; do not invent a magnitude.

### 6.5 Interrupted time series and regression discontinuity — flagged, not independently sourced this pass

The brief asked for these as "product-applicable designs with their stated requirements." Given
budget, this worker did **not** fetch primary ITS or RD methodology papers separately — this is a
gap. **UNTRACED**: no ITS/RD paper was fetched or read this run. Recommend D1 or the controller
source these from the Kohavi/ExP-adjacent literature or a dedicated methods paper (e.g. Imbens &
Lemieux 2008 for RD) before shipping requirement language for these two designs.

### 6.6 Consolidated practitioner warning (synthesized from 6.1–6.4, each individually cited above)

Parallel trends is **untestable** in the sense that no data can confirm what *would have*
happened to the control group's trend absent treatment — only the *pre-period* trends are
observable, and (per Sun & Abraham) even a clean-looking pre-period can mask heterogeneity-driven
artifacts, while (per de Chaisemartin & D'Haultfœuille) the standard TWFE estimator itself can
sign-flip relative to every true underlying effect under staggered timing with heterogeneous
effects. **The practitioner-facing conclusion for growth's audience: do not run a naive
two-way-fixed-effects regression on a staggered rollout (e.g., a feature shipped to different
cohorts/regions at different times) and trust the sign of the coefficient without at minimum
checking whether later-treated units are implicitly serving as "controls" for earlier-treated
ones.**

---

## 7. Interference / SUTVA / network effects

### 7.1 Aronow & Samii (2017)

**Citation.** Peter M. Aronow, Cyrus Samii, "Estimating Average Causal Effects Under General
Interference, with Application to a Social Network Experiment." *Annals of Applied Statistics*,
Vol. 11, No. 4 (2017), pp. 1912–1947. arXiv:1305.6156. URL: https://arxiv.org/abs/1305.6156.
**Read: ABSTRACT ONLY.** Rung: 2.

**What it establishes.** A randomization-inference framework for causal effects under general
(non-network-structure-specific) interference: (1) a design defining treatment-assignment
probabilities, (2) a mapping from assignments to actual "exposures," (3) estimands. Provides
inverse-probability-weighted estimators, variance estimators accounting for interference-induced
clustering, and consistency/asymptotic-normality results under local-dependence conditions.

**What it does NOT license.** Abstract only — no specific bias-magnitude claims extracted; do not
invent numbers under this citation.

### 7.2 Ugander, Karrer, Backstrom, Kleinberg (2013) — Graph Cluster Randomization, KDD

**Citation.** Johan Ugander, Brian Karrer, Lars Backstrom, Jon Kleinberg, "Graph Cluster
Randomization: Network Exposure to Multiple Universes." KDD 2013 (Facebook). arXiv:1305.6979.
URL: https://arxiv.org/abs/1305.6979. **Read: ABSTRACT ONLY** (full abstract captured verbatim
via WebFetch). Rung: 2 (peer-reviewed, KDD).

**Exact claims (verbatim, full abstract).**
> "A drawback with A/B testing is that it is poorly suited for experiments involving social interference, when the treatment of individuals spills over to neighboring individuals along an underlying social network."

> "for general randomization schemes, this variance can be lower bounded by an exponential function of the degrees of a graph. In contrast, we show that if a graph satisfies a restricted-growth condition on the growth rate of neighborhoods, then there exists a natural clustering algorithm, based on vertex neighborhoods, for which the variance of the estimator can be upper bounded by a linear function of the degrees. Thus we show that proper cluster randomization can lead to exponentially lower estimator variance when experimentally measuring average treatment effects under interference."

**What it establishes / when SUTVA breaks.** SUTVA breaks whenever "the treatment of individuals
spills over to neighboring individuals along an underlying social network" — e.g., any social,
messaging, or marketplace product feature where one user's treatment condition can affect a
connected user's experience or outcome. **Design fix and its stated cost/benefit:** graph
cluster randomization (randomizing tightly-connected clusters of the network together rather than
individual users) can reduce estimator variance from an *exponential* function of node degree
(under naive/general randomization) to a *linear* function of node degree — **an exponential vs.
linear variance bound, stated as a proven upper/lower bound comparison, not an empirical
percentage.**

**Requirements/preconditions it states.** The variance-linear-in-degree guarantee requires the
underlying graph to satisfy "a restricted-growth condition on the growth rate of neighborhoods" —
not all networks qualify; the paper does not claim the fix works unconditionally.

### 7.3 Eckles, Karrer, Ugander — Design and Analysis of Experiments in Networks

**Citation.** Dean Eckles, Brian Karrer, Johan Ugander, "Design and Analysis of Experiments in
Networks: Reducing Bias from Interference." arXiv:1404.7530 (submitted April 2014, revised August
2014). URL: https://arxiv.org/abs/1404.7530. **Read: ABSTRACT ONLY.** Rung: 2 (later published in
a peer-reviewed venue per common citation record, not independently confirmed venue/year this
pass — cite as arXiv preprint unless the controller independently confirms publication details).

**What it establishes.** Two complementary bias-reduction levers: (1) design-side — correlated,
network-based random assignment via graph cluster randomization; (2) analysis-side — incorporating
neighbors' treatment assignments as covariates/adjustment. Establishes sufficient conditions for
bias reduction under potentially pervasive interference.

**Exact claims (verbatim, as extracted).**
> "bias reduction through both design and analysis"

> "improvements are largest for networks with more clustering and data generating processes with both stronger direct effects of the treatment [and unit interactions]"

**What it does NOT license.** No specific numeric bias-reduction percentage was extracted (the
extraction described "substantial bias and error reductions" from simulations, but this worker did
not independently confirm an exact number in the abstract-only read) — flag any specific
percentage attributed to this paper as **UNTRACED** pending a full-text read.

### 7.4 Bojinov, Simchi-Levi, Zhao — Design and Analysis of Switchback Experiments

**Citation.** Iavor Bojinov, David Simchi-Levi, Jinglong Zhao, "Design and Analysis of Switchback
Experiments." arXiv:2009.00148 (submitted August 2020); published in *Management Science*, Vol.
69, Issue 7 (July 2023), pp. 3759–3777. URL: https://arxiv.org/abs/2009.00148. **Read: ABSTRACT
ONLY.** Rung: 2 (peer-reviewed, Management Science — a top operations/management journal).

**What it establishes.** Derives the *optimal design* of switchback experiments (sequential
random treatment assignment to a single unit, e.g. a whole marketplace or city, over time) under
different assumptions about the *order* of the carryover effect (how many periods a treatment's
effect persists after it's switched off). Formulates optimal design as a minimax discrete
optimization problem; provides both exact randomization-based p-values and a finite-population
CLT for conservative inference; gives data-driven procedures to detect the carryover-effect order.

**Exact claims (verbatim, abstract).**
> "Switchback experiments, where a firm sequentially exposes an experimental unit to random treatments, are among the most prevalent designs used in the technology sector, with applications ranging from ride-hailing platforms to online marketplaces."

**Requirements/preconditions it states.** Requires knowing or estimating the **order of the
carryover effect** — the design changes depending on how long treatment effects persist after a
switch; misspecifying carryover order is a stated source of design failure the paper addresses
with a data-driven detection procedure.

**What it does NOT license.** Abstract-only read — no specific numeric power/variance comparison
extracted; do not invent one under this citation.

### 7.5 Blake & Coey (2014) — marketplace interference, eBay, EC '14 — FULL TEXT, exact numbers

**Citation.** Thomas Blake, Dominic Coey (eBay Research Labs), "Why Marketplace Experimentation
is Harder Than It Seems: The Role of Test-Control Interference." *Proceedings of the 15th ACM
Conference on Economics and Computation (EC '14)*, 2014, pp. 567–582. DOI:
10.1145/2600057.2602837. Full-text PDF (author's own hosted copy):
https://dominiccoey.github.io/assets/papers/marketplace_experiments.pdf . **Read: FULL TEXT**
(curl-downloaded, converted with `pdftotext`, 1168 lines extracted and read in depth). Rung: 2
(peer-reviewed, ACM EC — a top venue for economics-and-computation).

**What it establishes / when SUTVA breaks.** In marketplaces, standard test/control comparisons
assume treatment affects only the test group. This fails via **general-equilibrium supply/demand
effects**: shifting test-group demand (e.g., via a marketing email) changes the *supply* available
to the control group (e.g., auction items sold to test-group bidders are no longer available to
control-group bidders), so the control group's outcomes are *also* affected by the treatment —
violating SUTVA. This is demonstrated concretely with an eBay email marketing campaign.

**Exact claims (verbatim) — the headline bias-magnitude number:**
> "Ignoring test-control interference leads to estimates of the campaign's effectiveness which are too large by a factor of around two." (abstract, restated in the paper body)

> "...overstatement of the true effect by a factor of over two." (§3, line 404 of extracted text — a second, slightly stronger restatement of the same finding later in the paper)

**Exact claims (verbatim) — mechanism and direction of bias:**
> "The magnitude of the bias increases as demand is unit elastic. The direction of the bias depends on the elasticity of demand: it..." [sentence continues in the source discussing sign conditional on elasticity — captured partially due to PDF line-wrapping, but the elasticity-dependence claim itself is exact]

> "If demand is elastic, then increasing the price from p0 to p1 reduces revenue, so Y − X > 0 and the bias is positive. ... If demand is inelastic, Y − X < 0 and the bias is negative." (§4.2, formal bias-direction result)

**Exact claims (verbatim) — a related, independently cited number from the same paper's literature
review, not Blake & Coey's own result but reported by them:**
> "In a simulation of an online market for short-term lodging, Fradkin [2013] finds that user level search experiments can overstate market-wide outcomes by 90%." (§1, related work — **this is Blake & Coey reporting Fradkin's number secondhand; if repeated, cite Fradkin 2013, not Blake & Coey, as the primary source — Fradkin's paper itself was NOT independently fetched by this worker, UNTRACED.**)

**Design fix stated, with its cost:**
> "Our approach to dealing with test-control interference is to aggregate outcomes across units, mitigating interference bias. In our setting, this amounts to comparing auctions instead of users. ... While there may be some residual bias remaining in our auction level estimates, the cost of eliminating it [entirely would require an even higher level of aggregation]." (§3.2/§3, paraphrased connective tissue around an exact quoted bias-variance tradeoff statement: "there is a bias-variance trade-off in defining the market scope.")

**Requirements/preconditions it states.** The fix (aggregating to a higher unit of analysis — e.g.
auctions instead of individual users, or an even broader market boundary) trades residual bias
for increased variance/coarser granularity — explicitly named as "a bias-variance trade-off in
defining the market scope," i.e. there is no free fix, only a dial between interference bias and
statistical noise.

**What it does NOT license.** The "factor of around two" / "factor of over two" figures are
**eBay-specific, single-campaign, email-marketing-context** numbers — not a universal marketplace
interference-bias multiplier. Do not generalize "marketplace experiments overstate effects by 2x"
as a rule; report it as this specific eBay case's finding, with the mechanism (supply/demand
elasticity) as the transferable insight, not the number itself.

### 7.6 Interference decision-inventory line (synthesized from 7.1–7.5)

**When does SUTVA break, concretely, for growth's audience:** (a) social/network products where
one user's treatment can spill to connected users (Ugander et al., Eckles et al., Aronow & Samii);
(b) marketplace/two-sided products where treating one side changes what's available to the other
side via supply/demand (Blake & Coey — concrete, ~2x bias example); (c) single shared-resource
systems (a whole city's driver pool, a whole warehouse's logistics) where sequential
on/off toggling is the only option (switchback designs, Bojinov/Simchi-Levi/Zhao).

---

## 8. Lewis & Rao (QJE 2015) — consistency note only, per instructions

**Citation (for reference, already shipped in marketing's corpus — do not re-derive).** Randall A.
Lewis, Justin M. Rao, "The Unfavorable Economics of Measuring the Returns to Advertising."
*Quarterly Journal of Economics*, Vol. 130, Issue 4 (November 2015), pp. 1941–1973. Publisher
page: https://academic.oup.com/qje/article-abstract/130/4/1941/1914592 . **Read: ABSTRACT ONLY**
(this pass — cheap confirmation fetch per instructions, not a re-derivation). Rung: 2
(peer-reviewed, QJE — top-5 economics journal).

**Headline finding (verbatim, one sentence, for citation purposes only):**
> "Twenty-five large field experiments with major U.S. retailers and brokerages, most reaching millions of customers and collectively representing $2.8 million in digital advertising expenditure, reveal that measuring the returns to advertising is difficult. The median confidence interval on return on investment is over 100 percentage points wide."

### Consistency note — where growth's story must align with marketing's, and where it legitimately extends it

**Must stay consistent with:** Marketing's corpus already ships the claim, sourced to Lewis & Rao,
that **solo builders and small advertisers cannot run statistically valid ad-lift experiments** —
the underpowering is structural (ad-spend experiments need enormous person-week counts because
the *effect-to-noise ratio* is terrible: individual-level sales have a stated "coefficient of
variation of 10," and detecting a lift against that much noise, at typical small-advertiser ad
budgets, requires sample sizes most companies never reach). Growth must not contradict this or
re-litigate it — it should be cited, not re-argued, whenever growth discusses ad-lift measurement
specifically.

**Where growth legitimately extends it, and why (without overclaiming):** On-site product
experiments (a pricing-page redesign, an onboarding-flow change, a checkout-button copy test) are
**not the same measurement problem** as ad-lift experiments, for a structural, statable reason:
in an ad-lift experiment, the "treatment" (seeing an ad) is a weak, diffuse nudge competing
against everything else that determines whether someone buys — the *signal* (ad-caused behavior
change) is small relative to the *noise* (all other causes of purchase variation), which is
exactly what Lewis & Rao's "coefficient of variation of 10" figure quantifies. In a well-chosen
on-site product experiment, the treatment (e.g., a friction-removing checkout change) sits
*directly in the causal path* of the outcome it's measured against (checkout completion) — the
population being measured has already self-selected into the funnel step where the intervention
lives, so the *relevant* variance (variance in checkout completion *among people who reached
checkout*) is typically far smaller relative to plausible effect sizes than "variance in whether a
random ad-exposed person buys anything at all." **This is a structural signal-to-noise argument
about where the treatment sits in the causal chain relative to the outcome, not a claim that all
product experiments are well-powered** — a product experiment on a weak, top-of-funnel,
diffuse-effect change (e.g., a brand-awareness-style redesign measured against long-run retention)
can suffer the exact same underpowering Lewis & Rao document, for the exact same reason. **The
honest framing growth should ship: proximity of the treatment to the measured outcome in the
causal chain — not "on-site vs. ad" as a category — is what determines whether a small operator
can run a valid experiment.** This is consistent with, not a contradiction of, Lewis & Rao, and it
gives growth's small-sample-honesty wedge (per the controller canon) a concrete, defensible
mechanism rather than a vibe ("product experiments are just better").

---

## 9. Other load-bearing finds

### 9.1 Sequential / anytime-valid inference — Ramdas et al.

**Citation.** Ian Waudby-Smith, David Arbour, Ritwik Sinha, Edward H. Kennedy, Aaditya Ramdas,
"Time-uniform central limit theory and asymptotic confidence sequences." arXiv:2103.06476
(submitted March 2021, latest revision March 2024). URL: https://arxiv.org/abs/2103.06476. **Read:
ABSTRACT ONLY** (full abstract captured verbatim). Rung: 2 (this is the general
confidence-sequences research program the family's D1/A/B channels likely also touch —
cross-check before shipping to avoid duplicate citation drift).

**Exact claims (verbatim, abstract).**
> "sequences of confidence intervals that are uniformly valid over time... which provide valid inference at arbitrary stopping times and incur no penalties for 'peeking' at the data, unlike classical confidence intervals which require the sample size to be fixed in advance."

> "we derive asymptotic CSs for the average treatment effect in observational studies (for which nonasymptotic bounds are essentially impossible to derive even in the fixed-time regime) as well as randomized experiments, enabling causal inference in sequential environments."

**What it establishes.** Confidence sequences (CS) generalize confidence intervals to be valid
at *any* stopping time, not just a pre-fixed sample size — the formal fix for the peeking problem,
building on strong invariance principles (Strassen). This paper specifically extends CS theory to
the *asymptotic* regime (trading finite-sample guarantees for CLT-like broad applicability),
including application to **observational-study ATE estimation**, which the authors say is a
setting where nonasymptotic confidence sequences are "essentially impossible to derive even in
the fixed-time regime" — i.e., this asymptotic approach is specifically valuable for quasi-
experimental/observational settings, not just clean randomized A/B tests. **This is a direct
connective link between the peeking/sequential-testing literature (primarily D1's territory) and
this worker's quasi-experiment territory** — flag for the controller/D1 to cross-reference.

**Related papers found in search but not independently fetched (UNTRACED):** "Anytime-Valid
Confidence Sequences in an Enterprise A/B Testing Platform" (arXiv:2302.10108) and "Distribution-
uniform anytime-valid sequential inference and the Robbins-Siegmund distributions"
(arXiv:2311.03343, same author group) — both surfaced in the same search, neither opened this
pass.

### 9.2 Bandits vs. A/B testing — NOT independently sourced this pass (gap, flagged)

The brief asked for "the papers on why bandits are wrong for learning and right for earning —
best-arm identification vs. regret minimization framing." **This worker did not fetch a specific
primary source for this framing given budget constraints** — this is a known, named tension in
the bandit literature (regret-minimization objectives, which bandits optimize, are misaligned with
the "learn a generalizable, statistically-certain answer" objective of a company decision, which
best-arm-identification / fixed-confidence formulations target instead) but **no specific paper
was fetched and read to back this framing in this pass. UNTRACED — flag for the controller:** a
likely candidate is Bubeck & Cesa-Bianchi's "Regret Analysis of Stochastic and Nonstochastic
Multi-Armed Bandit Problems" (survey) or a specific best-arm-identification paper (e.g. Audibert &
Bubeck), neither independently verified here.

### 9.3 Heterogeneous treatment effects / uplift modeling — Athey & Imbens lineage

**Citation.** Stefan Wager, Susan Athey, "Estimation and Inference of Heterogeneous Treatment
Effects using Random Forests." *Journal of the American Statistical Association*, Vol. 113, No.
523 (2018). arXiv:1510.04342 (submitted October 2015, final version July 2017). URL:
https://arxiv.org/abs/1510.04342. **Read: ABSTRACT ONLY.** Rung: 2 (peer-reviewed, JASA — this is
the paper that introduces "causal forests," commonly attributed jointly to the Athey research
program per the brief's framing, though the specific paper found and fetched here is by
**Wager & Athey**, not "Athey & Imbens" as the brief names it — flagging this authorship
correction explicitly).

**What it establishes.** A nonparametric "causal forest" extending Breiman's random forest to
estimate **heterogeneous** (individual/subgroup-varying) treatment effects, under unconfoundedness,
with pointwise-consistency and asymptotic-normality guarantees enabling valid confidence intervals
around individual treatment-effect estimates — not just an average treatment effect.

**Requirements/preconditions it states.** **No explicit numeric sample-size floor was found in
the abstract-only read this pass** — the abstract does not state a specific "you need N
observations" threshold. This is flagged as a **gap**: the brief specifically asked for "an honest
note on how much data those need," and this worker cannot supply a verbatim quoted sample-size
requirement from the primary source without a full-text read, which budget did not permit. **The
general, well-known property of HTE/uplift estimation (asymptotically consistent, but requiring
substantially more data than ATE estimation because effect heterogeneity is a higher-order,
noisier target than the average effect) is NOT independently verified with an exact quote here —
mark any specific data-volume claim under this citation as UNTRACED pending a full-text read.**

**Authorship note for the controller:** the brief names this as "Athey & Imbens causal forests" —
the actual, verified authorship of the specific causal-forests paper fetched here is **Wager &
Athey (2018)**. Susan Athey has separate, related work with Guido Imbens (e.g., "Recursive
Partitioning for Heterogeneous Causal Effects," PNAS 2016) — **not independently fetched this
pass** — if the controller wants an Athey-&-Imbens-authored citation specifically, that PNAS paper
is the correct target, not this one. Flag this authorship distinction before shipping.

---

## Decision inventory — "when you cannot randomize," by design, with its own literature's stated minimum data requirement

| Design | Stated minimum data requirement, AS STATED BY ITS OWN LITERATURE | Source |
|---|---|---|
| **Geo experiment (Vaver & Koehler style, single test period)** | No explicit numeric floor stated in the primary 2011 paper. Implicitly needs enough geos that isolated (non-spillover) regions exist and a pre-period baseline is available; explicitly warns that reusing limited pretest data via circular shifting to fake a longer test period yields "overly optimistic" (too-narrow) CIs. | §3.1 |
| **Geo experiment, multi-period rotating (Vaver & Koehler 2012)** | Not numerically stated in the section read; qualitatively, pooling across rotating periods narrows CIs vs. a single-period design. | §3.2 |
| **Trimmed Match (randomized paired geo, Chen/Longfils/Remy 2021)** | No numeric floor on total geos N or pairs n stated as a rule; the paper's own worked example uses **5 geo pairs (10 geos)**. The absolute floor named in the literature (for a *non-randomized*, lower-validity predecessor method) is explicitly **"essentially a single pair of grouped geos"** — but that method forfeits randomized-experiment validity to get there. | §3.3 |
| **GeoLift (Meta, Augmented Synthetic Control)** | No explicit numeric minimum geos/effect-size stated in the docs reached; documented example uses 40 locations. Docs explicitly concede geo-testing is **lower-power** than individual-level testing — a design of last resort, per Meta's own docs. | §4 |
| **Synthetic control (Abadie 2021 review)** | No numeric pre-period floor is given, deliberately — the paper's actual position is that bias depends on the *ratio* of transitory-shock scale to pre-period length **and** on fit quality; a long pre-period with bad fit does not fix bias, and a short pre-period can still work if fit is demonstrably tight. Requires the treated unit's characteristics to fall within the donor pool's convex hull (interpolation only), a donor pool free of similarly-treated or idiosyncratically-shocked units, and no anticipation. | §5.2 |
| **Difference-in-differences, staggered adoption (TWFE)** | Not a "how much data" requirement but a **structural validity warning**: standard TWFE is invalid (can sign-flip vs. every true effect) whenever treatment timing is staggered AND effects are heterogeneous over time/cohort — regardless of sample size. Fix is a different estimator (Callaway & Sant'Anna, de Chaisemartin & D'Haultfœuille, Sun & Abraham), not more data. | §6 |
| **Interrupted time series / regression discontinuity** | **UNTRACED this pass** — no primary source fetched; gap flagged for follow-up. | §6.5 |
| **Marketplace/network experiments needing cluster randomization or aggregation (Ugander et al.; Blake & Coey)** | Cluster randomization requires the underlying network to satisfy a "restricted-growth condition" for its variance-bound guarantee to hold; no numeric cluster-count floor stated. Blake & Coey's aggregation fix (compare auctions/markets, not users) trades bias for variance — no free minimum, a "bias-variance trade-off in defining the market scope." | §7.2, §7.5 |
| **Switchback experiments (single shared resource, e.g. one marketplace/city)** | Requires knowing/estimating the carryover-effect order; no numeric period-count floor stated in the abstract-only read. DoorDash's CUPAC post (a practitioner data point, not this paper) reports switchback test *length* reduced up to ~25-40% via variance reduction — a cost figure, not a floor. | §7.4, §1.2 |
| **Sequential/anytime-valid confidence sequences** | Not a minimum-N design so much as a removal of the fixed-N requirement entirely — valid at any stopping time; explicitly stated as especially valuable for observational-study ATE estimation where nonasymptotic bounds are "essentially impossible... even in the fixed-time regime." | §9.1 |

**The clearest single load-bearing sentence in this entire corpus, for the "you need less than
you think, but you can't cheat pre-period length" framing:** Abadie (2021): *"a large T0 cannot
drive down the bias if the fit is bad."* Fit quality, not data volume, is the actual requirement
synthetic control's own literature states.

---

## UNTRACED list (full)

1. Any specific later Deng et al. stratification/post-stratification paper beyond CUPED (§1.4) —
   not located this pass.
2. "Control Using Predictions as Covariates in Switchback Experiments" (the academic companion to
   the CUPAC blog post) — found only as a secondary ResearchGate link, not fetched (§1.2).
3. Ghost Ads exact magnitudes (17.2% site visits, 10.5% purchases, "order of magnitude less" cost
   claim, 100M/day scale figure) — sourced from the SAGE abstract page extraction and one
   WebSearch snippet, NOT from the primary PDF (SSRN gated by Cloudflare, JMR paywalled) (§2).
4. Johnson (2023) "Inferno: A guide to field experiments in online display advertising" — found in
   search, not fetched (§2).
5. Johnson/Lewis/Reiley "When Less is More: Data and Power in Advertising Experiments" (SSRN
   2683621) — found in search, not fetched (§2).
6. Chen & Au (2019), "Robust Causal Inference for Incremental Return on Ad Spend with Randomized
   Geo Experiments" (Annals of Applied Statistics) — the Trimmed Match estimator's own founding
   paper — cited only via the trimmed_match README, not independently fetched (§3.3).
7. Goodman-Bacon (2021) full text — PDF downloaded but not machine-readable via the tools used
   this pass; the "weighted average of all 2×2 comparisons, including already-treated units as
   controls" summary is WebSearch-corroborated, not independently full-text-verified (§6.1).
8. Vaver & Koehler (2012) — full text fetched but only the introduction was read in depth; no
   specific numeric CI-shrinkage figure extracted (§3.2).
9. Interrupted time series (ITS) primary methodology source — not fetched at all (§6.5).
10. Regression discontinuity (RD) primary methodology source (e.g. Imbens & Lemieux 2008) — not
    fetched at all (§6.5).
11. Fradkin (2013) "90% overstatement" figure for search-market experiments — this is Blake &
    Coey citing Fradkin secondhand; Fradkin's own paper was not fetched (§7.5).
12. Eckles, Karrer, Ugander's exact stated bias-reduction percentage (if any exists beyond
    qualitative "substantial... reductions") — not confirmed in the abstract-only read (§7.3).
13. Bandits-vs-A/B (regret minimization vs. best-arm identification) framing — no primary source
    fetched at all this pass (§9.2).
14. Athey & Imbens (as opposed to Wager & Athey) causal-forests-adjacent paper, e.g. "Recursive
    Partitioning for Heterogeneous Causal Effects" (PNAS 2016) — not fetched; note the brief's
    "Athey & Imbens" attribution does not match the paper this worker actually fetched
    (Wager & Athey) (§9.3).
15. Any explicit numeric sample-size requirement for causal forests / HTE estimation — not found
    in the abstract-only read of Wager & Athey (§9.3).

---

## Repos touched — licenses (read directly from the LICENSE file) and maintenance status

| Repo | License (file read directly) | Last commit / pushed | Archived? | Stars | Open issues | Maintenance verdict |
|---|---|---|---|---|---|---|
| `google/trimmed_match` | **Apache License 2.0** (full text confirmed at `raw.githubusercontent.com/.../LICENSE`) | 2023-06-01T14:47:35Z (commit); pushed 2023-06-01T14:52:13Z | No | 71 | 1 | **De facto unmaintained** — ~3 years with no commits as of this run's 2026-08-01 date, despite not being formally archived. README self-describes: "This is not an officially supported Google product. For research purposes only." |
| `facebookincubator/GeoLift` | **MIT License** (file is `LICENSE.md`, not `LICENSE` — read directly, full text confirmed, copyright Meta Platforms, Inc.) | 2026-04-01T10:24:17Z (commit); pushed 2026-06-30T09:54:38Z | No | 261 | 35 | **Actively maintained** — repostatus.org badge in README reads "Active — the project has reached a stable, usable state and is being actively developed," and the commit/push dates confirm recent activity relative to this run's date. |

Note: `google/GeoexperimentsResearch` surfaced in one search result as a related Google
open-source geo-experiment-analysis repo but was **not independently fetched, licensed, or
maintenance-checked this pass** — flagged for the controller if it's wanted as a third repo in
this family.
