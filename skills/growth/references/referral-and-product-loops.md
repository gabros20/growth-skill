# Referral and Product Loops

Purpose: Model a referral or product loop as a system that compounds (or doesn't) — the arithmetic
of K-factor and cycle time, not just the taxonomy of loop types — and evaluate a proposed referral
mechanism against that arithmetic before treating "we added a referral program" as a growth
strategy.

Read when:
- A referral program, invite mechanic, or other loop-shaped feature ("share to unlock," "invite a
  teammate") is proposed and its actual growth contribution needs sizing.
- Someone cites a famous referral case study (Dropbox, PayPal) as a template.
- Deciding whether a "loop" being discussed is a product growth loop or something else entirely —
  the word is overloaded across the ecosystem (§1).
- A loop's compounding claim ("this pays for itself") needs checking against its measured
  K-factor and cycle time, not asserted.

Skip when:
- The question is the referral program's incentive design as a pricing or economics decision (cost
  per acquired user, reward structure) → [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md).
- The question is whether a specific loop change can be tested at your traffic →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) ⭐ — read that first;
  this file supplies the loop model the experiment is testing, not the sizing math.
- The question is retention curves, cohort definitions, or resurrection →
  [funnel-and-cohort-diagnosis](funnel-and-cohort-diagnosis.md) and
  [retention-and-resurrection](retention-and-resurrection.md).
- The question is a recurring *operational* workflow run on a schedule (a weekly SEO scan, an
  ad-fatigue check) — that is not this file's "loop" at all; see §1.

Inputs: the proposed or existing loop mechanic (referral, invite, share, content-generation), any
historical data on invites sent and invite-to-signup conversion, and the loop's cycle time (how
long between a user joining and that user's action producing the next user).

Produces: a K-factor and cycle-time estimate for the loop, the compounding arithmetic that follows
from it, and a named verdict on whether a cited case study (Dropbox and similar) is safe to use as
evidence or only as inspiration.

## Contents
- [1. Disambiguating "loops"](#1-disambiguating-loops)
- [2. Loops vs. funnels — a real distinction, cited by a tight cluster](#2-loops-vs-funnels--a-real-distinction-cited-by-a-tight-cluster)
- [3. The loop arithmetic nobody in the ecosystem teaches](#3-the-loop-arithmetic-nobody-in-the-ecosystem-teaches)
- [4. Cycle time changes everything the K-factor doesn't](#4-cycle-time-changes-everything-the-k-factor-doesnt)
- [5. Dropbox: the same case, two incompatible numbers](#5-dropbox-the-same-case-two-incompatible-numbers)
- [6. Measuring a loop change is an experiment, not a dashboard read](#6-measuring-a-loop-change-is-an-experiment-not-a-dashboard-read)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Disambiguating "loops"

"Loop" carries two unrelated meanings across the growth and automation ecosystems, and conflating
them is a real, documented failure mode in incumbent material. **A product growth loop** is this
file's subject: a mechanism where an output of the system (a new user, a piece of content, a
referral) becomes an input that produces more of the same output, so growth compounds structurally
rather than resetting to zero every acquisition cycle. **An operational recurring workflow** — a
weekly SEO scan, an ad-fatigue check run on a cadence — is a different thing entirely that some
incumbent material also calls a "loop," and it belongs to `automation` or `marketing`'s
scheduled-task work, not here. If a "loop" under discussion doesn't compound (its output isn't
itself an input to the same mechanism), it's the second kind, and this file doesn't apply.

## 2. Loops vs. funnels — a real distinction, cited by a tight cluster

The growth-strategy distinction between loops and funnels — a funnel converts a finite, decaying
pool of traffic once; a loop feeds itself — is credited to Brian Balfour, Casey Winters, Kevin
Kwok, and Andrew Chen (co-credited from a 2018-07-31 discussion), with Kevin Kwok's separate
"loops over moats" (2019) making a *defensibility* argument that gets routinely conflated with the
*measurement* argument here — keep them separate: this file cares whether growth compounds
structurally, not whether it's defensible against competitors. Elena Verna's independent framing
converges from a different angle: her Five Laws of Growth ("build loops, not funnels," 2022-06-28)
and her 3×3 growth-motions-by-levers matrix argue that a real growth strategy sequences and
combines multiple loops and motions rather than picking one — see
[opportunity-and-prioritization](opportunity-and-prioritization.md) for the full argument and its
consequence for prioritization tools.

Treat the *consensus* on loops-over-funnels honestly: the named voices above are a tight,
mutually-amplifying, largely self-citing cluster (they retweet, co-author, and appear on each
other's podcasts), so their agreement with each other is weaker evidence than five independent
sources agreeing would be. The *definitional* distinction — does the output feed back as an input
— is useful regardless; the *rhetorical* certainty with which it's delivered in the ecosystem
should be discounted accordingly.

## 3. The loop arithmetic nobody in the ecosystem teaches

This is the genuine whitespace this file exists to fill. Incumbent skill packs taxonomize loop
*types* (viral, content, paid, sales) with no accompanying arithmetic — no K-factor, no cycle
time, no compounding formula, and no attribution to the lineage in §2. The taxonomy without the
math is a naming exercise, not a growth model. The arithmetic itself is standard, derivable, and
worth supplying explicitly:

**K-factor** (the loop's growth coefficient) = *invitations sent per existing user* × *conversion
rate per invitation* (the fraction of invited people who become new users of the loop). The name
and the underlying idea echo the basic reproduction number (R0) used in epidemiology for exactly
the same structural question — does one "case" produce more or fewer than one new case, on
average.

**The compounding identity** follows directly from treating each loop cycle as a generation in a
geometric series. If K < 1, each generation of referred users is smaller than the last: a single
seed user eventually produces **K / (1 − K)** additional users through the loop before it dies out
— a real, finite, calculable contribution, not zero and not infinite. If K ≥ 1, the geometric
series diverges: in the idealized model, the loop grows without bound; in reality, growth is
choked by saturation (K falls as the addressable population is exhausted) long before "unbounded"
means anything. **Neither case is "the loop doesn't matter" nor "the loop is a growth engine" by
default — the arithmetic tells you which, and a taxonomy label never will.**

This derivation is presented as arithmetic, not attributed to a named practitioner or study — the
research for this pack found no primary source teaching it inside the skill/agent ecosystem
specifically, which is the point: it's the calculation the incumbent packs are missing, supplied
here rather than cited from somewhere that already has it.

## 4. Cycle time changes everything the K-factor doesn't

K-factor alone answers "does this loop compound," not "how fast." **Cycle time** — the average
elapsed time between a user joining and that same user's referral action producing the next
user — is the second number a loop model needs, and it's the one most often left out entirely. Two
loops with an identical K-factor of 1.2 compound at wildly different real-world rates if one has a
same-day cycle time (a share-to-unlock mechanic) and the other has a six-month cycle time (an
annual-renewal referral bonus): the short-cycle loop reaches the same multiplier in a fraction of
the calendar time. When a loop's growth contribution is being sized against a business timeline
(this quarter, this year), cycle time — not K-factor alone — determines whether the loop is
relevant to that timeline at all.

## 5. Dropbox: the same case, two incompatible numbers

Dropbox's referral program is the most-repeated loop case study in the ecosystem, and it is a
specimen worth teaching for what it demonstrates about case-study laundering, not for its numbers.
Two incumbent skill packs each state a headline growth figure and a companion viral-coefficient or
attribution figure for the same program — independently authored, describing (allegedly) the same
case, and **not reconcilable with each other**: one pack's pair of numbers and the other pack's pair
of numbers cannot both be describing the same underlying program. Neither cites a primary source;
both are stated as settled fact. **Never ship any of these figures as a fact about Dropbox's
referral program — not the growth percentage, not the viral-coefficient range, not the
signup-share figure — including inside a sentence that names the inconsistency itself; naming the
mismatch does not require repeating the numbers that constitute it.** Use the specimen only at the
level this paragraph does: two independently authored, uncited, mutually inconsistent figures
purporting to describe the same case, which is itself the teachable finding about how loop case
studies travel through the ecosystem. If a real Dropbox K-factor is ever needed, it must be
re-traced to Dropbox's own primary statement, not repeated from either secondary source above.

## 6. Measuring a loop change is an experiment, not a dashboard read

A proposed change to a loop mechanic — a new incentive, a reworded invite, a different share
surface — is a hypothesis about K-factor or cycle time, and testing it is subject to the same
feasibility gate as any other experiment: does the traffic through this loop support detecting the
change you're hoping for, given how few users touch a referral flow relative to the funnel it sits
inside. Route the actual sizing to
[experiment-design-and-feasibility](experiment-design-and-feasibility.md) — this file's job is
producing the loop model (the K-factor and cycle-time estimate) that becomes the hypothesis under
test, not sizing the test itself.

A referral experiment carries a second problem standard sizing doesn't cover: it is a **canonical
SUTVA violation** on every surface it runs on, not just a marketplace one — the Stable Unit
Treatment Value Assumption every standard A/B test depends on
([surface-marketplace-network §1](surface-marketplace-network.md#1-diagnose-the-mechanism-before-picking-a-fix)
names it in full). An inviter assigned to treatment leaks the mechanism into control by inviting
people: a "control" user who accepts an invite has already been touched by the thing the
experiment claims to be isolating, whether the product is a two-sided marketplace or a plain
self-serve tool with an invite button. Diagnose the interference mechanism (the same §1) before
assuming a standard user-level split gives a clean read on a referral test — this is not optional
just because the product isn't a marketplace.

A referral mechanic that pressures or guilts a user into sending
invites (dark-pattern-adjacent friction on the decline path, forced continuity on an "invite 3
friends to unlock") is a habit/retention ethics question, not a loop-math one — see
[retention-and-resurrection](retention-and-resurrection.md)'s habit-ethics pointer for the
governing test.

## Validation
- Any loop discussed is confirmed to be a compounding product loop, not an operational recurring
  workflow (§1), before this file's math is applied to it.
- A K-factor estimate names both its components (invites/user and conversion rate/invite)
  separately — never a single blended number with no visible arithmetic.
- Cycle time is stated alongside K-factor whenever a loop's contribution is being sized against a
  business timeline.
- None of the Dropbox referral program's disputed figures (§5) appear as a stated fact anywhere in
  the output, including inside a caveat naming the inconsistency.
- A proposed loop change destined for testing is routed through
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) before being called an
  experiment.
- A referral test's design names the inviter-to-invitee interference risk (SUTVA, §6) before a
  standard user-level randomization is assumed sufficient — on every surface, not only a
  marketplace.

## Failure modes and handoff
- **"Loop" is being used for a scheduled operational workflow, not a compounding mechanism** →
  that's `automation`'s or `marketing`'s territory; redirect per §1, don't apply K-factor math to
  it.
- **A referral case study is cited with a specific growth percentage as justification** → check
  whether it's the Dropbox specimen (§5) or shares its shape (single-source, no denominator,
  laundered across secondary retellings) before repeating it.
- **The ask drifts into referral incentive economics — reward cost, margin impact** →
  [monetization-and-pricing-experiments](monetization-and-pricing-experiments.md).
- **The loop change is ready to test** →
  [experiment-design-and-feasibility](experiment-design-and-feasibility.md) for sizing;
  [experiment-readout-and-learning](experiment-readout-and-learning.md) for reading the result.
- **A referral test is sized as a standard user-level A/B test with no interference check** →
  apply §6's SUTVA warning first, regardless of whether the product is a marketplace; route to
  [surface-marketplace-network §1](surface-marketplace-network.md#1-diagnose-the-mechanism-before-picking-a-fix)
  to diagnose the mechanism.
