# Quasi-experiments

Purpose: Design and read a causal comparison when true randomization isn't available — a pricing
change the whole market sees at once, a single geographic market, a feature that can't be
withheld from half your users without breaking the product, a marketplace where treatment leaks
into control. Teach the precondition checklist each method actually requires, because the
literature does not offer a numeric floor to substitute for
[experiment-design-and-feasibility.md](experiment-design-and-feasibility.md)'s power table — a
different kind of gate applies here, not a smaller version of the same one.

A note before the rest of this file: quasi-experimental methods are not a rejected practice among
small operators — they're genuinely unknown ground. Across the indie/small-team corpus this pack
drew on, geo-experiments, synthetic control, and staggered-adoption designs were never mentioned
by name, by anyone. If this is new vocabulary, that's the expected starting point, not a gap in
your reading.

Read when:
- Randomization at the user level isn't possible — pricing, a market-wide policy change, a
  feature that must ship to everyone at once for operational reasons.
- Deciding whether a geo-split, a before/after comparison, or a synthetic-control design can
  support a causal claim, and what has to be true for it to.
- Diagnosing interference — you suspect your treatment and control groups are contaminating each
  other (a marketplace, a social feature, a shared inventory pool).

Skip when:
- Randomization at the user level *is* available — start at
  [experiment-design-and-feasibility.md](experiment-design-and-feasibility.md); nothing here is a
  substitute for a real A/B test when one is possible.
- The comparison is channel/ad-spend incrementality at the market level (geo-lift for marketing
  attribution) rather than an on-product change — that scale gate and the honesty hierarchy
  around it belong to marketing's `attribution-and-measurement.md`; this file owns quasi-designs
  for product and pricing changes that can't be randomized, not ad-lift measurement.
- The question is whether an already-run quasi-experiment's numbers are trustworthy in the
  narrow measurement-validity sense (SRM-equivalent checks, assignment integrity) — the same
  `data` boundary applies here as everywhere else in this pack.

Inputs: what's actually preventing randomization (market-wide visibility, operational
constraints, network effects), how many independent units (geos, cohorts, time periods) are
available, and whether a comparable untreated group or pre-period exists at all.

Produces: a method choice matched to what's actually blocking randomization, a stated precondition
checklist (not a sample-size number) for that method, and — where interference is suspected — a
diagnosed mechanism before any design decision is made.

## Contents
- 1. There is no numeric floor here — the honest disposition
- 2. Synthetic control and DiD: the requirement is fit, not sample size
- 3. Staggered adoption: a structural warning, not a data problem
- 4. Geo-experiments: the hard part is market design, not estimation
- 5. Interference: diagnose the mechanism before picking a fix
- 6. Licensing: cite the method, don't assume you can lift the code
- Validation
- Failure modes and handoff

---

## 1. There is no numeric floor here — the honest disposition

Every major quasi-experimental method's own literature was checked for a stated minimum-data
threshold. **Almost none give one.** Geo-experiment methodology, Trimmed Match, GeoLift, and the
synthetic-control literature all decline to state a floor. That absence is itself the finding:
"how much data do I need for a quasi-experiment" has no literature-backed numeric answer, and the
honest response is a qualitative precondition checklist — fit quality, donor-pool cleanliness, no
anticipation, interference structure — never a number. That's a more defensible position than any
competitor's "use synthetic control once you have N weeks of data," because no such number exists
in the sources that would have to state it.

## 2. Synthetic control and DiD: the requirement is fit, not sample size

Alberto Abadie's own review of the method (*Journal of Economic Literature*, 2021) deliberately
gives no pre-period floor. The requirement is **fit quality** — the synthetic control constructed
from a donor pool must track the treated unit closely *before* treatment — plus convex-hull
containment (the treated unit's pre-period path must be inside the range the donor pool can
combine to produce), a clean donor pool (no other unit contaminated by a related intervention),
and no anticipation effects before the nominal treatment date. His own sentence is the single
best summary available: **"a large T0 cannot drive down the bias if the fit is bad."** More
pre-period data does not substitute for a donor pool that actually resembles the unit you're
studying.

Difference-in-differences carries the same message from a different angle: the binding
constraint is the parallel-trends assumption (treatment and control would have moved together
absent the intervention), checkable qualitatively against pre-period trend lines, not resolvable
by adding more periods if the trends were never parallel to begin with.

## 3. Staggered adoption: a structural warning, not a data problem

If different units adopt a change at different times and the change's effect varies across units
or over time (a very common real-world shape — a feature rolled out market by market, a pricing
change phased in over months), **standard two-way fixed-effects DiD can produce an estimate with
the wrong sign relative to every unit's true effect — regardless of sample size.** This is not a
power problem more data can fix; it's a structural property of how the naive estimator weights
already-treated units as controls for later-treated ones. The fix is a different estimator built
for this case (Callaway & Sant'Anna; de Chaisemartin & D'Haultfœuille; Sun & Abraham), not a
larger sample on the old one. **If your rollout was staggered and you reach for plain two-way
fixed-effects DiD by default, check this first — the direction of your answer, not just its
precision, is at risk.**

## 4. Geo-experiments: the hard part is market design, not estimation

Two implementations worth knowing, both from the parts of the literature that state their own
limits honestly:

- **Trimmed Match** (Chen, Longfils, Remy, 2021; Google, research-only per its own README)
  states no numeric floor; its own worked example uses 5 geo pairs (10 geos total). Its stated
  rationale for the method's design: "in GeoX, the number of geos is usually small; moreover,
  there is often severe heterogeneity across geos, which makes traditional regression adjustment
  less reliable" — the method exists *because* geo counts are typically small, not despite it.
- **GeoLift** (Meta) states no stated minimum either; its documented example uses 40 locations,
  and its own docs concede geo-testing is lower-power than individual-level testing outright —
  a design of last resort by the vendor's own admission, not a free alternative to randomization.

In both codebases, the power-analysis and market-selection code substantially outweighs the
estimator code — a concrete signal that **the hard part of a geo-experiment is choosing which
markets to test in, not the statistics once you have them.** Design the market split with as
much care as you'd give a randomization scheme, because geo assignment is the only randomization
you get.

Both repos carry a caution worth preserving if either is cited: Google's own README states
`trimmed_match` and `matched_markets` are "not an officially supported Google product. For
research purposes only" — and `trimmed_match`'s last substantive commit predates this pack by
years, making it a historically instructive but effectively unmaintained reference implementation
today, not an actively evolving one.

## 5. Interference: diagnose the mechanism before picking a fix

When treatment in one unit changes outcomes for a control unit — a marketplace where treated
sellers absorb demand from control sellers, a social feature where treated users' behavior
reaches their untreated friends — standard independence assumptions break, and the fix depends on
*why* interference is happening, not on applying whichever fix is best known.

Different companies converge on different mechanisms for different interference structures, and
that's a feature of the diagnosis, not a contradiction to resolve: switchback and geo designs
(rotating treatment across time or place rather than across individual users) suit
capacity-constrained, transaction-level interference (ride-hailing and delivery marketplaces);
ego-cluster designs (randomizing tightly-connected friend clusters together) suit social-graph
interference, where the connection itself is the channel. **Diagnose the interference mechanism
first — never apply "switchbacks fix network effects" as a default,** because a marketplace
interference problem and a social-graph interference problem call for different randomization
units, and the wrong one leaves the bias in place while adding complexity. Blake & Coey's
framing of the general trade-off is worth carrying into that diagnosis: coarsening the
randomization unit to control interference is "a bias-variance trade-off in defining the market
scope," not a free upgrade — a coarser unit reduces bias from interference at the cost of fewer
independent units to estimate variance from.

## 6. Licensing: cite the method, don't assume you can lift the code

Before treating any quasi-experimental repo as liftable code rather than a citable method, check
every package-ecosystem manifest, not just the top-level `LICENSE` file. **GeoLift is a documented
trap for exactly this**: its `LICENSE.md` states MIT, while its R package's own `DESCRIPTION`
file states GPL (>= 2) — a genuine conflict inside one repository, findable only by reading the
package metadata, not the license file alone. Treat GeoLift's license as **ambiguous**: cite the
method and its published documentation, do not lift the code. This is a standing family rule, not
specific to this file — a license check that stops at the root `LICENSE` file is not a complete
check.

## Validation

- No method here was recommended with a sample-size or duration floor stated as if the
  literature provided one — precondition checklists only (§1).
- A synthetic-control or DiD recommendation checked fit quality and donor-pool cleanliness (§2)
  before checking how much pre-period data exists.
- A staggered-adoption design was flagged for estimator choice (§3) before being treated as a
  standard DiD setup.
- Any interference concern names the suspected mechanism before a fix is proposed (§5).
- Any GeoLift citation treats it as a method reference, not a lift candidate (§6).

## Failure modes and handoff

- **Randomization at the user level is actually available** — this file doesn't apply; use
  [experiment-design-and-feasibility.md](experiment-design-and-feasibility.md).
- **The question is ad-spend or channel incrementality at the market level** — → marketing's
  `attribution-and-measurement.md`, which owns the honesty hierarchy for that question.
- **The design is settled and the question becomes "can I trust these numbers"** — the same
  `data`/growth boundary applies; validity mechanics belong to `data`.
- **Interference is confirmed in a marketplace context and the fix needs domain-specific
  tactics** — → [surface-marketplace-network.md](surface-marketplace-network.md) for that
  surface's fuller treatment; this file stops at diagnosing the mechanism.
