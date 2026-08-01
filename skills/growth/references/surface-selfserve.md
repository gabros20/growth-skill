# Surface: Self-Serve (Default)

Purpose: State how growth's jobs reshape when the product itself, not a salesperson, does the
converting — the **default** surface, because most of this pack's readers build and test against
a self-serve signup or trial.

Read when:
- Anyone can sign up, start a trial, or use a free tier and reach value without a sales
  conversation.
- No surface has been chosen yet — this is where the router lands by default.
- A PLG statistic, an activation benchmark, or a "self-serve traffic" assumption is about to
  shape a test plan and needs a hygiene check first.

Skip when:
- A human sales conversation gates the deal → [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md).
- The product is a native mobile app monetizing through in-app purchase or subscription →
  [surface-mobile-subscription](surface-mobile-subscription.md) (the RevenueCat-layer framing changes the traffic and validity
  picture substantially).
- The product is a marketplace or has two-sided network effects → [surface-marketplace-network](surface-marketplace-network.md)
  (interference between arms is a real risk here that this surface doesn't have).
- Sample size is the binding constraint on what can be tested at all → this is usually true on
  this surface by default (§2); read [overlay-small-sample](overlay-small-sample.md) alongside this file, not instead of
  it.
- An agent or model is deciding or triggering the growth action → add [overlay-agentic](overlay-agentic.md) on top.

Inputs: the trial/free-tier mechanics already decided by `product`, and whichever job from
`SKILL.md`'s router is in scope for this request.

Produces: a funnel model with the product itself as the primary conversion and activation surface,
an experiment plan sized honestly against typical self-serve traffic (usually smaller than the
frameworks assume), and an explicit handoff point at signup where growth's ownership of the funnel
begins.

## Contents

- [1. The funnel is the product](#1-the-funnel-is-the-product)
- [2. Self-serve traffic is usually the small-sample case, not the exception](#2-self-serve-traffic-is-usually-the-small-sample-case-not-the-exception)
- [3. Activation is the highest-leverage job on this surface](#3-activation-is-the-highest-leverage-job-on-this-surface)
- [4. Retention-before-growth applies directly here](#4-retention-before-growth-applies-directly-here)
- [5. Benchmark hygiene](#5-benchmark-hygiene)
- [6. The seam at signup, from growth's side](#6-the-seam-at-signup-from-growths-side)
- [7. Job-by-job reshape](#7-job-by-job-reshape)
- [Failure modes](#failure-modes)

## 1. The funnel is the product

On a sales-assisted motion, a rep can compensate for a rough moment in the flow; on self-serve,
there is nothing standing between a confusing screen and a lost user. This means the funnel this
pack diagnoses and tests is mostly **inside the product**, not on a marketing page: the trial
signup, the first-run experience, the moment a free-tier user hits a paywall. Every job in this
pack reads differently once that's accepted — the highest-leverage experiment surface is usually
the product's own onboarding path and pricing/paywall moment, not a campaign landing page (which
is `marketing`'s and [conversion-optimization](conversion-optimization.md)'s territory, feeding into this funnel rather than
replacing it).

## 2. Self-serve traffic is usually the small-sample case, not the exception

Self-serve products, by construction, rarely have the traffic volume the experimentation
literature's default examples assume. The vendor-stated floors for a standard test — thousands to
tens of thousands of visitors per arm depending on the platform, and Booking.com's own calculator
requiring **561,364 visitors** for its default scenario — describe a traffic regime most self-serve
products never reach. Cite [experiment-design-and-feasibility](experiment-design-and-feasibility.md)'s power table for the exact numbers
rather than re-deriving them here; the point specific to this surface is that **the small-sample
case is this surface's default state, not an edge case to special-case around.** Read
[overlay-small-sample](overlay-small-sample.md) alongside every job on this surface as a matter of course, not only when a
test looks obviously underpowered.

## 3. Activation is the highest-leverage job on this surface

With no rep to re-explain the product, the path from signup to first value carries the entire
persuasion job a sales conversation would otherwise do. [activation-and-onboarding](activation-and-onboarding.md)'s CUPED
caveat — that the field's usual variance-reduction escape hatch doesn't work on brand-new users —
matters most exactly here, because self-serve is where the overwhelming majority of testing volume
targets users in their first session. Treat activation experiments on this surface as
structurally harder to power than they look, not easier because "it's just onboarding."

## 4. Retention-before-growth applies directly here

A self-serve product can grow its monthly-active count through acquisition while cohort retention
quietly leaks — Sarah Tavel's warning, carried in full in [retention-and-resurrection](retention-and-resurrection.md), applies with
no modification needed for this surface: acquisition on top of unfixed retention produces a rising
top-line number that hides the leak rather than solving it. Self-serve motions are especially prone
to this because acquisition is often the most visible, most instrumented number on the dashboard,
and retention decay in the product is easy to not look at.

## 5. Benchmark hygiene

Every "median self-serve/PLG company" statistic in wide circulation traces back to a small cluster
of reports built on undisclosed or self-selected samples — one prominent report's own footnote
admits some benchmarked companies are the publisher's own portfolio; mobile-retention vendor
reports sample only apps that installed that vendor's SDK, systematically excluding the
least-resourced apps (precisely the population most readers of this pack belong to); and two
apparently independent reports have been shown to be the same underlying survey republished under
two different brands. Teach the check, not a list: before citing any self-serve or PLG benchmark,
name the source, the sample, the method, the date, and the caveat — a benchmark missing any of
those five fields is a specimen of one vendor's or one portfolio's experience, not a population
statistic. [product-led-growth](product-led-growth.md) carries this discipline as a named invariant; this surface is where
it gets tested most often, because this is where the loudest benchmark claims circulate.

## 6. The seam at signup, from growth's side

Growth's ownership of the self-serve funnel picks up where marketing's leaves off: `marketing`
hands growth a qualified hypothesis for a funnel experiment, not a finished test — designing and
reading that test is this pack's, not marketing's, per the family's standing seam. `design` owns
the journey map itself and names its activation vocabulary (activation rate, time-to-activation,
D7/D30 retention) without ever proposing an experiment; growth takes a proposed change to that
journey and turns it into a tested hypothesis. `product` owns what ships from a validated result —
this file's jobs stop at "here is what the data supports," not "here is what we're building."

## 7. Job-by-job reshape

| Job | How self-serve reshapes it |
|---|---|
| [growth-model-and-loops](growth-model-and-loops.md) | Loop choice usually leans on a content, viral, or in-product loop — there is no sales-driven pipeline loop to fall back on |
| [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md) | The funnel to diagnose lives mostly inside the product, not on a marketing site |
| [opportunity-and-prioritization](opportunity-and-prioritization.md) | Prioritize against a genuinely small experiment budget by default (§2), not an idealized one |
| [experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐ | Feasibility is the binding question on nearly every test this surface proposes — read alongside [overlay-small-sample](overlay-small-sample.md) |
| [experiment-readout-and-learning](experiment-readout-and-learning.md) | Reads happen against thinner samples; the winner's-curse haircut and peeking discipline matter more here, not less |
| [activation-and-onboarding](activation-and-onboarding.md) | The highest-leverage job on this surface (§3) — activation *is* the sales conversation |
| [conversion-optimization](conversion-optimization.md) | The pricing/signup page inside the product is itself the highest-value experiment surface, alongside any pre-signup page marketing owns |
| [retention-and-resurrection](retention-and-resurrection.md) | Retention-before-growth applies with no modification (§4) — acquisition can mask a leaking cohort here more easily than on other surfaces |
| [referral-and-product-loops](referral-and-product-loops.md) | In-product invite and share mechanics are cheapest to build and test where there's no sales process to route around |
| [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md) | Trial-to-paid conversion is the central monetization event; if the product is also a listed mobile app, layer [surface-mobile-subscription](surface-mobile-subscription.md) on top |
| [product-led-growth](product-led-growth.md) | This surface is what "PLG" usually means in practice — the benchmark-provenance discipline (§5) is tested hardest here |
| [quasi-experiments](quasi-experiments.md) | Rarely needed — randomized in-product testing is usually available; reserve for cases where randomization is genuinely blocked (a platform-wide pricing change, a single irreversible launch) |

## Failure modes

- Sizing a self-serve test against the experimentation literature's default traffic assumptions
  instead of checking feasibility first — read [overlay-small-sample](overlay-small-sample.md) as a default companion, not
  an escape hatch reached for only when a test obviously fails.
- Citing a PLG or self-serve benchmark as a settled population fact instead of a self-selected or
  portfolio-contaminated sample with a date on it (§5).
- Treating an activation or retention test's power estimate as if CUPED will rescue it — it
  structurally won't, on this surface most of all (§3–4).
- Building an enterprise sales-assisted flow onto a self-serve product instead of naming the
  surface change explicitly and routing to [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md).
