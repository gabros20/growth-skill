# Surface: Mobile App Subscription

Purpose: State how experiment design and monetization benchmarks reshape when the product is a
mobile app on a subscription model — the largest real dataset in this pack's research is a vendor
SDK panel, and using it honestly means naming its population limit on every figure, not just once
in a methods footnote.

Read when:
- The product being tested is a mobile app with a subscription or IAP-based monetization model.
- Sizing or interpreting a paywall, trial-length, or free-vs-paywalled feature test.
- Deciding whether a store-listing experiment (Apple Product Page Optimization, Google Play
  store-listing experiments) is a valid randomized test or something narrower.

Skip when:
- The question is desktop/web subscription pricing mechanics — the base surface is
  [surface-selfserve](surface-selfserve.md); this file is additive stakes for the mobile-specific
  parts (paywall mechanism, store experiments, platform confounds).
- The question is writing or auditing the store listing itself (copy, screenshots, keywords,
  character limits) — that's `marketing`'s app-store-optimization.md, which is that pack's
  mobile-surface authority; this file only owns the *experiment read* once a store test is live.
- The question is the general pricing-hypothesis/dark-patterns treatment — that's
  [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md); this file adds
  only what's specific to the mobile-app population.

Inputs: approximate monthly download/install volume (this gates which store-experiment guidance and
which feasibility floor applies), the paywall mechanism in place (hard paywall, freemium, trial
length), and whether a benchmark figure being cited names its vendor and edition year.

Produces: a feasibility-scoped read of a paywall or trial-length test, a store-experiment
recommendation correctly typed as a true randomized split or not, and every cited benchmark carrying
its vendor and edition-year stamp.

## Contents

- [1. RevenueCat: the largest dataset, and its population limit](#1-revenuecat-the-largest-dataset-and-its-population-limit)
- [2. Selected figures — each vendor- and edition-stamped](#2-selected-figures--each-vendor--and-edition-stamped)
- [3. Store experiments: PPO is randomized, Custom Product Pages are not](#3-store-experiments-ppo-is-randomized-custom-product-pages-are-not)
- [4. Platform-shock confounds](#4-platform-shock-confounds)
- [5. New-user metrics and variance reduction](#5-new-user-metrics-and-variance-reduction)
- [Failure modes](#failure-modes)

## 1. RevenueCat: the largest dataset, and its population limit

RevenueCat's "State of Subscription Apps" report is the largest real dataset this pack's research
touched: **115,000+ apps and $16B+ tracked revenue** in the 2026 edition (2026-03-06), up from
75,000+ apps / $10B+ in the 2025 edition. The measurement is real — it's SDK telemetry, not a
survey — but **the population is apps that chose to install RevenueCat**, which structurally
excludes both the largest publishers running in-house billing and everything non-mobile. Frame this
explicitly as **high-N, low-external-validity**: excellent evidence for "how do indie/SMB mobile
subscription apps behave," inadmissible as evidence for "how does software monetize" in general.
Because the population and the numbers both move materially year over year, **every figure below
must carry its vendor name and edition year at the point of use — a bare magnitude from this source
is a never-ship.**

## 2. Selected figures — each vendor- and edition-stamped

All RevenueCat, cited with edition date; re-verify before using a figure from an older edition than
the one available at build time:

- **Hard paywalls convert roughly 5× better than freemium at download-to-paid: 10.7% vs. 2.1%**
  (2026-04-01 post).
- **17–32 day trials convert at 42.5% vs. 25.5% for trials under 4 days; 55% of 3-day-trial
  cancellations happen on Day 0** (2026-03-23 post).
- North America median D35 download-to-paid **2.56%** vs. India/SEA **1.37%** (same post).
- AI apps earn **41% more revenue per payer but churn 30% faster**; only **4.6%** of newly-launched
  apps reach $10k monthly revenue (2026-03-13 post).
- Median yearly retention for monthly subscribers: **12.8% paywalled vs. 9.5% freemium** (2025-03-10
  edition — one year older than the figures above; do not blend editions).
- Base churn rate: **~20% per month, averaged across the whole RevenueCat population** (2026-01-20
  post) — same population caveat as every figure above.

None of these are a floor or a target for a specific app; they describe the RevenueCat-instrumented
population's median behavior in the stated period.

## 3. Store experiments: PPO is randomized, Custom Product Pages are not

`marketing`'s app-store-optimization.md owns what to put on the listing and draws this same
distinction from the content side; this file owns the experiment read once a test is live. Apple's
**Product Page Optimization (PPO)** is a true randomized split — a percentage of eligible users see
an alternate icon, screenshot set, or preview video, reported in App Analytics. **Custom Product
Pages** are persistent, URL-addressable listing variants built to route different traffic sources to
a tailored pitch — not a randomized comparison at all. A community-maintained skill pack correctly
states this distinction in its own words: *"Not a true A/B test"* (Eronred/aso-skills,
`ab-test-store-listing/SKILL.md:55`) — credit the distinction to that source when citing it; it is a
real, non-obvious catch in an ecosystem that otherwise conflates the two constantly. Google Play's
store-listing experiments and custom store listings are the functional parallel under different
names.

PPO's behavior is not uniform across app sizes: a practitioner-discussion synthesis (naming a
specific case, Cal AI) reports small apps (well under 10k downloads/month) see real conversion
swings from screenshot changes, while large apps with heavy brand-search or paid-UA traffic (100k+
downloads/month) see almost none, because those users decided to install before reaching the store
page. The same discussion flags **PPO data as unstable for its first 2–3 days** while Apple's
adaptive algorithm calibrates — an A/A/B test first is the recommended way to validate the testing
environment before trusting a real result. Treat that as informed practitioner synthesis, not a
controlled study, and size any PPO readout against
[experiment-design-and-feasibility](experiment-design-and-feasibility.md) using the app's actual
download volume, not a generic floor.

## 4. Platform-shock confounds

When Apple added an IAP step to its flow in April 2019, RevenueCat's own team reported "interesting
data blips" that were initially unclear whether real, later resolved as up to a **20% relative drop
in trial-start rate** driven by the platform change itself, not any in-flight test variant. Every
concurrent experiment on that surface was confounded simultaneously by an external change neither
side controlled. Check for a platform release note or store-policy change before attributing a shift
to a treatment on mobile — this surface changes underneath a running test more often and more
invisibly than a self-serve web funnel does. See
[monetization-and-pricing-experiments](monetization-and-pricing-experiments.md#3-the-web-vs-iap-guardrail-a-company-testing-against-its-own-interest)
for the full web-vs-IAP guardrail case study this same source produced — this file only carries the
mobile-specific stakes (the platform fee, typically up to ~30%, weighed against the measured
conversion drop of moving off IAP).

## 5. New-user metrics and variance reduction

Trial-conversion, D0–D35, and other new-user metrics dominate this surface's test menu, and that is
exactly the population [activation-and-onboarding](activation-and-onboarding.md) documents CUPED
failing on — a brand-new user has no pre-experiment history to build a covariate from. Cite
`data`'s experiment-measurement-foundations.md for CUPED's own mechanics; the new-user failure is
this pack's finding, not that file's. The practical consequence for this
surface: expect little to no variance-reduction help on the metrics that matter most here, and size
tests accordingly rather than assuming a CUPED-powered test will need less traffic than the raw power
calculation says.

## Failure modes

- **A RevenueCat figure is quoted without its edition year, or an older-edition figure is blended
  with a newer one** — attach the date every time (§2); the 2025 and 2026 editions are not
  interchangeable.
- **A RevenueCat statistic is used to set a target for a specific app** — restate the high-N/
  low-external-validity caveat (§1) before treating the SDK population's median as a benchmark to
  hit.
- **A Custom Product Page result is reported as an A/B test win** — it isn't a randomized comparison;
  only PPO (or Play's store-listing experiments) supports that claim (§3).
- **A PPO test is called after 2–3 days with no signal** — that window is documented as unstable;
  extend before concluding (§3).
- **A metric shift during a live mobile test is attributed to the treatment without checking for a
  platform release** — check §4 first.
- **The question moves to writing the store listing itself** — hand off to `marketing`'s
  app-store-optimization.md.
