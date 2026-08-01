# Monetization and Pricing Experiments

Purpose: Design, size, and read pricing and packaging experiments honestly — including the case,
well-evidenced and often skipped, where the right answer is not to run a live price test at all.
Teach the stated-preference weakness shared by the field's most-used pricing survey, the guardrail
discipline through one company's dated, against-its-own-interest example, and the dark-patterns
exposure specific to subscription and pricing decisions.

Read when:
- Sizing or reading a live price/packaging test, a Van Westendorp survey, or a paywall-mechanism
  test (e.g. web checkout vs. in-app purchase).
- Deciding whether a pricing question can be tested at all, or should be routed to a smaller,
  informal probe instead.
- Reviewing a subscription or pricing flow for dark-pattern / cancellation-friction exposure.

Skip when:
- The question is forming the pricing hypothesis itself — the value metric, WTP bands, tier
  structure, psychological price points — that is `product`'s business-model.md (value-based
  method and Van Westendorp bands, §"Van Westendorp price-sensitivity"); this file starts once a
  hypothesis exists and needs testing.
- The question is whether the underlying experiment data can be trusted (assignment, SRM,
  variance reduction) — that is `data`'s experiment-measurement-foundations.md; cited here, not
  re-taught.
- The question is general dark-patterns/persuasion ethics on a landing or pricing page's copy and
  layout — `marketing`'s landing-pages-and-conversion.md owns the general mechanism-vs-claim test;
  this file is the monetization-specific deepening (subscription/cancellation exposure).
- The population is a mobile subscription app specifically — read
  [surface-mobile-subscription](surface-mobile-subscription.md) first; it carries the paywall-vs-IAP
  stakes and RevenueCat benchmark layer, and points back here for the guardrail method.

Inputs: a pricing or packaging hypothesis (from `product`), the population and traffic available to
test it, whether the test would be visible to existing paying customers, and any subscription
cancellation flow in scope for a dark-patterns check.

Produces: a feasibility call on whether a live pricing test can run at your scale, a stated-preference
caveat attached to any survey-based pricing evidence, a guardrail-metric design for a
paywall-mechanism test, and a dark-patterns pass on any subscription flow.

## Contents

1. [The org with the best experimentation culture refuses this one test](#1-the-org-with-the-best-experimentation-culture-refuses-this-one-test)
2. [Van Westendorp and the stated-preference problem](#2-van-westendorp-and-the-stated-preference-problem)
3. [The web-vs-IAP guardrail: a company testing against its own interest](#3-the-web-vs-iap-guardrail-a-company-testing-against-its-own-interest)
4. [Pricing tests at small N](#4-pricing-tests-at-small-n)
5. [Subscription and pricing dark patterns — built on peer-reviewed data](#5-subscription-and-pricing-dark-patterns--built-on-peer-reviewed-data)
6. [The habit-ethics split is internal to one lab](#6-the-habit-ethics-split-is-internal-to-one-lab)
7. [Where the decision lands](#7-where-the-decision-lands)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. The org with the best experimentation culture refuses this one test

Booking.com built one of the most disciplined experimentation cultures documented anywhere — its
own published stats stack, thousands of concurrent tests, a Šidák correction built into its
platform by default. A practitioner report of Booking's own stated position
([@lukasvermeer](https://x.com/lukasvermeer/status/1537385524066934785); a secondhand relay of
Booking's position, not a primary Booking statement — carry that caveat) is nonetheless the least
likely place to find this teaching point: Booking said it will **deliberately not build the
capability to run pricing A/B tests at all.**

That converges with a completely different scale of operator. Arvid Kahl, 2026-04-22
([@arvidkahl](https://x.com/arvidkahl/status/2046993183846891572)): *"That's the one thing I've
always found complicated about running pricing experiments on any SaaS… it becomes almost a
reputational issue."* Two sources at opposite ends of
the traffic spectrum — a company that could power almost any test it wanted, and a solo operator who
can't power most tests at all — reach the same conclusion for the same underlying mechanism: **a
live price change is visible to existing customers in a way a UI experiment is not**, and that
visibility carries a trust cost the statistics literature does not price in. This is a distinct
blocker from the power problem [experiment-design-and-feasibility](experiment-design-and-feasibility.md)
teaches — feasibility asks "can I detect an effect at this N," this asks "should I expose paying
customers to price variance at all" — and a pricing question can fail either gate independently.

The practical consequence: prefer a design that never shows two customers two live prices at once —
new-customer-only price tests, packaging/tier tests instead of unit-price tests, or a stated-
preference instrument (§2) — over a simultaneous live-price split, and when a live split is used
anyway, bound the exposed population and pre-commit to a stop date rather than let it run silently.

## 2. Van Westendorp and the stated-preference problem

Van Westendorp price-sensitivity (four questions — too cheap, cheap, expensive, too expensive —
mapped as cumulative curves) traces to Peter van Westendorp, 1976, presented at an ESOMAR congress.
`product`'s business-model.md owns constructing the survey and reading its Indifference/Optimal
Price Points; this file does not re-teach the method, only its limit as evidence.

**Van Westendorp is a stated-preference instrument: it asks someone to imagine paying, not observes
them paying.** That is structurally the same objection MeasuringU raises against the Sean Ellis PMF
survey (Lewis & Sauro, 2022-03-15 — see [product-led-growth](product-led-growth.md#2-the-sean-ellis-test-strip)
for the full treatment): both ask a hypothetical question and treat the self-report as if it
predicted real behavior. Name the convergence plainly — **two of the field's most-used survey
instruments share one methodological weakness**, respondents answering a hypothetical diverge from
what they do when money actually leaves their account.

Where feasibility allows (§1, and see [experiment-design-and-feasibility](experiment-design-and-feasibility.md)
for sizing), prefer a revealed-preference design — a held-out live price cohort, held constant for a
pre-committed window — over a Westendorp survey alone. Use the survey to narrow the search space
before a live test is feasible, not as a substitute for one; do not report an Optimal Price Point as
if it were a measured willingness-to-pay.

## 3. The web-vs-IAP guardrail: a company testing against its own interest

Jacob Eiting, RevenueCat's CEO, ran a public, dated pricing-mechanism test worth teaching whole,
because the company had every commercial reason to want the opposite result and reported it anyway.
RevenueCat ran a 4-variant web-vs-in-app-purchase paywall test
([@jeiting](https://x.com/jeiting/status/1920919855500300575)) and measured a **25–45% conversion
drop for the web variant vs. IAP at equivalent prices**
([source](https://x.com/jeiting/status/1922666012006064270)). The secondary metric moved the
"right" way — the web variant had *better* trial-conversion rates. The company's own retrospective,
2025-05-28 ([source](https://x.com/jeiting/status/1927772123952525428)): *"Almost a month into our
Web vs IAP test and the winner is ... IAP. Our web only variant did have better trial conversion
rates, but it didn't make up for the drop in initial conversion, even when considering the 24% fee
savings."*

That is a complete, dated, real guardrail worked example: **a secondary metric improving did not
overturn the primary metric's verdict**, and the team let the metric aligned against its own
commercial interest — losing the ~24% platform-fee saving — decide. Generalize it in Eiting's own
words: *"Saving 27% (12%) on Apple fees doesn't matter much if your conversion rate drops 50%. Test,
test, test."* ([source](https://x.com/jeiting/status/1917944104803090505)). See
[experiment-readout-and-learning](experiment-readout-and-learning.md) for the OEC/guardrail method in
general; this is the incentive-hostile instance to cite when a reader doubts guardrails matter.

Also carry the confound this same source surfaced: when Apple added an IAP step in April 2019, "we
started to see some interesting data blips… but weren't sure if it was real," later resolved as up
to a **20% relative drop in trial-start rate** driven by the platform change, not any test variant
([source](https://x.com/jeiting/status/1116463669385150464)). Check for an external platform change before attributing a shift to the
treatment — every in-flight experiment on that surface was confounded simultaneously. See
[surface-mobile-subscription](surface-mobile-subscription.md) for the fuller mobile-specific stakes
of this same test.

## 4. Pricing tests at small N

[overlay-small-sample](overlay-small-sample.md) owns the general three-lever framework; this is its
pricing-specific application. Patrick McKenzie (@patio11) gives the pattern in two lines: *"Create a
recurring reminder to run a pricing test every 6 months"*
([source](https://x.com/patio11/status/852241883740778496)) and *"Easiest pricing test: either hide
your cheapest tier or, if you've got a single price, double it"*
([source](https://x.com/patio11/status/852242210518999040)). Both are the **engineer-a-huge-MDE**
lever, not a power calculation — a price
doubling or a removed tier produces an effect large enough to read informally, without needing to
size a test at all. Pair with §1's reputational caution: even at small N, a live price change is
visible to existing customers, so bound who sees it and pre-commit to a duration (the second lever)
rather than run it open-ended.

## 5. Subscription and pricing dark patterns — built on peer-reviewed data

Monetization is where persuasion technique carries the most legal exposure, and it is the one place
in this pack's research with real peer-reviewed measurement instead of opinion. Mathur et al. (CSCW
2019) crawled 11,000 shopping sites and found **11.1% carried at least one dark pattern, 1,818
instances across 15 types.** `marketing`'s landing-pages-and-conversion.md ships the pack's general
mechanism-vs-claim ethics table; this section is the monetization-specific deepening, keyed to the
patterns that concentrate around subscriptions specifically: hidden recurring charges, forced
continuity, and cancellation friction — the **roach motel** pattern, easy to get in, hard to get
out.

The FTC's September 2022 staff report named four dark-pattern misuse categories among its own
enforcement priorities, and enforcement followed: Vonage's $100M settlement (November 2022) was a
negative-option/cancellation-friction case. Read that as the FTC's clearest signal that "hard to
cancel" is a live, litigated exposure now, not a hypothetical one — a pricing/subscription flow
review should check cancellation friction and undisclosed recurring-charge disclosure first, ahead
of any other persuasion-mechanism audit.

A live specimen shows what these categories look like told without any attempt at disguise: a
"how long will you keep your streak alive?" commitment prompt reportedly raised 30-day retention
"no matter which option users chose… Nothing happened on the backend, pure mind control"
(@bartek_marzec, 2025-04-16, restated 2025-04-17 —
[status/1912337580332576981](https://x.com/bartek_marzec/status/1912337580332576981) /
[status/1912770494677627181](https://x.com/bartek_marzec/status/1912770494677627181)). Treat it
as a specimen, not a benchmark: no N, no baseline, no stated methodology — and the poster names
manipulation as the explicit mechanism rather than dressing it up as a UX win. It doubles as a
gamification-ethics specimen (a commitment device with no real backend effect on the choice
offered) and a no-denominator specimen (exactly the profile this file's own provenance discipline
would flag before repeating the retention claim).

## 6. The habit-ethics split is internal to one lab

When a monetization mechanism leans on habit design, name the source split honestly: the Hook
model's popularizer (Nir Eyal) and its most visible critic (Tristan Harris) trained in the **same
Stanford persuasive-technology program** — an internal disagreement inside one practitioner
tradition, not an outside objection arriving from a different field. Eyal's own framing undercuts
the caricature that he is indifferent to the ethics: *"Building 'addictive' products is bad for
consumers and bad for business"*
(2024-06-13, [@nireyal](https://x.com/nireyal/status/1801223394936983930)). Cite him at that framing, not
as a straw man. See [retention-and-resurrection](retention-and-resurrection.md) for habit-loop
mechanics; it points back here for the ethics test.

## 7. Where the decision lands

Growth designs the pricing or packaging experiment, sizes it (or declines to run it, per §1), runs
it, and reads the result. **Which price or tier structure the business ships is `product`'s
decision, not growth's** — cite `product`'s business-model.md: it owns the pricing hypothesis;
growth stops at testing it and reporting the result honestly. The same cession pattern applies to
`data` for measurement validity underneath a pricing test (SRM, assignment integrity — cite
experiment-measurement-foundations.md, do not re-teach it) and to
[experiment-design-and-feasibility](experiment-design-and-feasibility.md) for whether a given
population can support a valid read at all.

## Validation

- Any Van Westendorp or Sean-Ellis-style result is reported with its stated-preference caveat
  attached, not as a measured willingness-to-pay or conversion figure.
- A live-price-split test states who was exposed and for how long; a decision not to run one is
  itself a documented, defensible outcome, not a gap.
- A paywall-mechanism test (web vs. IAP or equivalent) reports the guardrail metric alongside the
  primary metric, even when the guardrail moved favorably and the primary metric didn't.
- A subscription-flow review checks cancellation friction and recurring-charge disclosure against
  §5 before any other persuasion-mechanism pass.
- No RevenueCat, ProductLed, or other vendor monetization figure is repeated without its vendor name
  and edition year attached (full treatment: [product-led-growth](product-led-growth.md) and
  [surface-mobile-subscription](surface-mobile-subscription.md)).

## Failure modes and handoff

- **A stakeholder wants a live price A/B test run on all customers simultaneously** — surface §1's
  reputational cost explicitly; propose a new-customer-only or packaging-only alternative instead of
  silently complying or silently refusing.
- **A Van Westendorp result is being reported as "the price customers will pay"** — attach the
  stated-preference caveat (§2) before it ships anywhere.
- **The question turns into forming the pricing hypothesis itself** — hand off to `product`'s
  business-model.md; this file does not choose a value metric or tier structure.
- **The question turns into whether the underlying experiment data is trustworthy** — hand off to
  `data`'s experiment-measurement-foundations.md.
- **The population is a mobile subscription app** — read
  [surface-mobile-subscription](surface-mobile-subscription.md) for the RevenueCat benchmark layer
  and store-experiment mechanics before proceeding.
