# Surface: Marketplace and Network

Purpose: State how experiment design breaks, and how to fix it, when the product is a marketplace or
network — where one user's treatment can change another user's outcome, violating SUTVA (the Stable
Unit Treatment Value Assumption: that one unit's assigned treatment doesn't affect another unit's
potential outcome) that every standard A/B test assumes. The single most important discipline on
this surface is diagnosing *which* interference structure you have before picking a fix; the three
real fixes solve three different problems and are not interchangeable.

Read when:
- The product is two-sided (marketplace, ridesharing, delivery) or has strong network/social effects
  between users (a feed, a referral graph, a collaboration tool).
- A test's effect looks smaller than expected, or a control-group user's behavior seems to be moving
  even though they weren't treated — the classic interference symptom.
- Choosing a randomization unit (user, cluster, geography, time window) for a test on this surface.

Skip when:
- The units genuinely don't interact (most B2B SaaS, most single-player tools) — standard
  individual-level randomization applies; read [surface-selfserve](surface-selfserve.md) instead.
- The question is the general precondition checklist for quasi-experimental methods when
  randomization isn't possible at all — that's [quasi-experiments](quasi-experiments.md); this file
  is the marketplace-specific instance of the same underlying trade-off.
- The question is standard experiment sizing with no interference present — that's
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md).

Inputs: the specific mechanism connecting units (shared inventory/supply, a social graph, a shared
market price or liquidity pool), and whether a coarser randomization unit is even available (do you
control assignment at the geography or cluster level, not just the user level).

Produces: a named interference mechanism (not just "there's interference"), a randomization-unit
choice matched to that mechanism, and an explicit statement of the bias-variance trade that choice
makes — never presented as a free upgrade.

## Contents

- [1. Diagnose the mechanism before picking a fix](#1-diagnose-the-mechanism-before-picking-a-fix)
- [2. Coarser randomization is a trade, not a free win](#2-coarser-randomization-is-a-trade-not-a-free-win)
- [3. Booking's interference paper as the named primary](#3-bookings-interference-paper-as-the-named-primary)
- [4. What gets disclosed, and what doesn't](#4-what-gets-disclosed-and-what-doesnt)
- [5. The growth-vs-operate line on a marketplace metric](#5-the-growth-vs-operate-line-on-a-marketplace-metric)
- [Failure modes](#failure-modes)

## 1. Diagnose the mechanism before picking a fix

Three companies independently converged on the same underlying discipline through three different
mechanisms, and the correct reading of that convergence matters more than any single one of the
fixes: **switchback/geo-based randomization (Lyft, DoorDash) and ego-cluster randomization
(LinkedIn) are not competing solutions to one problem — they are different fixes for different
interference structures.** A ride-share or delivery marketplace has interference through a shared,
locally-constrained supply pool (drivers, delivery capacity) that a time-window or geography split
addresses; a social/professional network has interference through a connectivity graph that a
cluster of mutually-disconnected (or mutually-connected) users addresses instead. **Never teach
"switchbacks fix network effects"** — that collapses two different diagnoses into one prescription
and will misapply the wrong fix to the wrong structure. The first step on this surface is always
naming the actual mechanism connecting your units, not reaching for the fix that's best documented.

## 2. Coarser randomization is a trade, not a free win

Every fix in §1 works by moving the randomization unit from the individual to something coarser —
and every one of them pays for reduced interference bias with increased variance and reduced
statistical power, because you now have fewer independent units than you have users. The academic
literature on marketplace aggregation states this explicitly rather than presenting it as an
upgrade: Blake & Coey's aggregation-fix work frames it as *"a bias-variance trade-off in defining
the market scope"* — there is no stated minimum number of clusters or geographies that makes the
trade free, only the trade itself. Treat any switchback, geo, or ego-cluster design as a deliberate
choice to accept more noise in exchange for a less-biased estimate, size the test with the *reduced*
effective sample size the coarser unit implies (not the raw user count),
and read [quasi-experiments](quasi-experiments.md) for the same principle applied more generally —
this surface is one instance of "no numeric floor exists in the literature; the honest teaching is a
precondition checklist, not a number."

## 3. Booking's interference paper as the named primary

For a primary, named-author source on this exact problem, cite Booking.com's own published work
directly rather than a secondhand paraphrase: the `bookingcom/uplift-interference-simulator` repo
names its underlying paper as *"Qini curve estimation under clustered network interference"*
(Karlsson, van den Akker, Moraes, Proença, Krijthe) — a genuine primary source on measuring
treatment effects (via Qini curves, a targeting-uplift metric) under clustered interference specifically,
from a company operating a real two-sided travel marketplace at scale. Cite the paper and its
method; verify the repo's own license file directly before lifting any code from it rather than
assuming a permissive license carries over from the paper.

## 4. What gets disclosed, and what doesn't

A caution worth carrying onto this surface specifically, because marketplace and network companies
are exactly the ones most likely to publish confident-looking engineering posts: companies disclose
infrastructure and scale numbers (how many switchback windows they run, how large their platform is)
far more readily than they disclose effect sizes or the actual magnitude of interference bias they
corrected for. One documented instance: Lyft redacted its own published charts' Y-axes "for
confidentiality" while still publishing the methodology freely. Read a marketplace engineering
blog's methodology as credible and its undisclosed magnitudes as exactly that — undisclosed — rather
than assuming the confidence of the writeup extends to numbers it doesn't actually show.

## 5. The growth-vs-operate line on a marketplace metric

Marketplace and network products are where this line gets crossed most often, because the same
metric (liquidity, GMV, match rate) is watched both as a standing operational number and as the
outcome of individual tests. Apply the pack's rule verbatim: **a standing threshold on the live
system is `operate`'s; the same metric bound to a single tested change's decision is growth's — a
ramp proceeds on the null, an experiment proceeds on a rejected null.** (See
[experiment-design-and-feasibility.md §1](experiment-design-and-feasibility.md#1-the-gate-can-this-question-be-answered-here)
for the doctrinal evidence.) A marketplace liquidity dip
that triggers a standing alert is `operate`'s concern regardless of cause; a liquidity metric read
out at the end of a specific switchback test to decide whether to ship that change is this file's.

## Failure modes

- **"Switchbacks fix network effects" is stated as a general rule** — that conflates the supply-side
  mechanism (§1) with the graph-connectivity mechanism a different fix addresses; name the actual
  mechanism before recommending a design.
- **A coarser randomization unit is proposed as a strictly-better upgrade** with no variance cost
  named — restate §2's bias-variance framing before shipping the recommendation.
- **A test is sized using the raw user count under cluster/geo/switchback randomization** — the
  effective sample size is the number of independent clusters or windows, not the number of users
  inside them; re-size accordingly.
- **A marketplace engineering blog's confident methodology is used to imply its unstated effect
  sizes are known** — §4's disclosure asymmetry applies; do not infer a magnitude the post doesn't
  publish.
- **A standing liquidity/GMV alert threshold is treated as a growth experiment result, or a tested
  change's readout is treated as a standing operational threshold** — apply §5's rule to sort which
  pack owns the decision.
