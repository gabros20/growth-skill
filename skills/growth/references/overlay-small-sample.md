# Small-Sample Honesty (Additive Overlay)

Purpose: Equip a reader whose traffic cannot power a conventional A/B test — this is most
pre-scale products, by construction. **This is an overlay** — it stacks on every job in this
pack, most directly [experiment-design-and-feasibility](experiment-design-and-feasibility.md)
and [experiment-readout-and-learning](experiment-readout-and-learning.md), and never replaces
either. It equips an existing practice; it does not convert a skeptic.

Read when:
- The feasibility gate in experiment-design-and-feasibility.md comes back negative — required
  sample size exceeds available traffic by an order of magnitude or more.
- The reader is deciding whether to run a formal split test at all, versus shipping on judgment
  or reaching for a different method entirely.
- A change is small, cheap, and reversible, and the question is whether it's worth testing before
  shipping.

Skip when:
- Traffic supports the sample sizes experiment-design-and-feasibility.md derives directly — this
  overlay has nothing to add once the gate clears on its own.
- The question is measurement validity mechanics at any scale (SRM, CUPED, peek-safe sequential
  testing) — that's data's `experiment-measurement-foundations.md`, unconditionally.
- The reader has real markets, regions, or partner-level segments to exploit — that's
  [quasi-experiments](quasi-experiments.md)'s ground, not this one (see below).

Inputs: the feasibility-gate output (required n vs. available traffic) from
experiment-design-and-feasibility.md, and the change under consideration — its cost, its
reversibility, and whether a bolder version of it is available.

Produces: a redirect, not a refusal — one of: a resized (bolder) test, an upstream metric
substitution with its validity trade named, a skip-the-test ship decision, or a pointer to
quasi-experimental methods where they genuinely apply.

## Contents
- [The gap is equipment, not willingness](#the-gap-is-equipment-not-willingness)
- [Kohavi's own floor, and his three levers](#kohavis-own-floor-and-his-three-levers)
- [Skip the test](#skip-the-test)
- [Micro-conversions answer a different question](#micro-conversions-answer-a-different-question)
- [Quasi-experimental methods are unknown here, not rejected](#quasi-experimental-methods-are-unknown-here-not-rejected)
- [Why the two effects compound](#why-the-two-effects-compound)
- [Failure modes](#failure-modes)

## The gap is equipment, not willingness

The premise this overlay does **not** carry is "small operators don't test." @levelsio, the
canonical voice for that caricature, is on record testing constantly: *"I don't A/B test, but
just test"* (2017-09-02) is a semantic distinction — he compares variants informally rather than
running simultaneous formal splits — not an anti-experimentation stance. He runs split tests and
computes significance on them elsewhere in the same record ("just try [a] simple A/B test
significance calculator, you add the numbers in there and it'll tell you if it's actually not
random what you're seeing"). **Solo operators test constantly but informally; the gap this
overlay closes is equipment, not conviction.** Frame every section below as equipping that
existing practice, not converting a reader away from "just shipping."

## Kohavi's own floor, and his three levers

The canon's own author states the floor plainly, unhedged: *"A/B testing without sufficient users
is like attempting a marathon without appropriate training… For e-commerce sites focused on
improving conversions, a minimum of 200,000 users provides adequate statistical power… The
statistics do not support A/B tests with 5,000 users under common goals and assumptions."*
(Kohavi, 2024-10-30). This is not a contrarian position this pack is staking out — it is the
canon's own honesty, carried forward rather than softened.

Kohavi names three levers for a team below that line, in the same statement:
1. **Swing for the fences** — target a much larger effect (≥20% relative), the same way medical
   trials accept that a vaccine needs to be 50%+ effective before a small trial can detect it.
   Run [power_calc.py](../assets/power_calc.py) on your own baseline and traffic to see how much
   smaller a bolder MDE makes the required sample — the relationship is quadratic, not linear.
2. **Move the metric upstream** — a click-through or engagement metric needs far fewer users to
   power than final conversion or revenue, because it sits closer to the change and has a higher
   base rate. See the next section for the validity cost of doing this.
3. **Consciously accept a higher false-positive rate** — decide, before running the test, that
   you are trading a lower alpha for a faster answer, and say so in the readout rather than
   presenting the result as conventionally powered.

None of these is "don't test." All three are named, load-bearing redirects from the same source
that states the floor.

## Skip the test

Where none of the three levers apply — the change is too small to bother inflating, or too
cheap to justify the calendar time a bolder test would need — the honest move is not to force a
test. Credit where it's due: rampstack's own decision rule states it cleanly — **"Skip the test.
If the change is small but cheap and reversible, ship without testing. If it is small and
expensive to maintain, do not ship."** This is the one place in the surveyed ecosystem that
offers an actual decision procedure for the no-power case rather than a bare refusal ("gather more
data" or "redesign," neither of which is available to a product with a few hundred weekly
signups). Adopt it as this overlay's default disposition for small, reversible changes: ship on
judgment, log it, and move on — a formal test that cannot be powered is not a more rigorous
choice than skipping one, it is a slower way to reach the same guess.

## Micro-conversions answer a different question

Lever 2 above (move the metric upstream) is real and useful, but it is not free, and the
ecosystem routinely sells it as if it were. On the identical domain, Optimizely's low-traffic
guidance lists switching to a micro-conversion (like a click) alongside lowering alpha as
equally-costless workarounds — but only the alpha change is presented with its cost attached.
**Switching to a micro-conversion changes what question you are answering: you learn about
clicks, not revenue.** A click-through win is not evidence the change moves the metric you
actually care about; the two can and do diverge. Name this trade explicitly every time an
upstream metric substitution is proposed — the asymmetry in how vendors present it (one
labelled cost, one silent) is itself worth pointing out to a reader deciding whether to accept
the substitution.

## Quasi-experimental methods are unknown here, not rejected

For a reader with genuine segments to exploit — comparable regions, staggered rollouts, a natural
control group — [quasi-experiments](quasi-experiments.md) covers difference-in-differences, geo
experiments, and the rest of the "when you cannot randomize" toolkit. But be precise about why
that reference rarely applies to this overlay's default reader: across the small-sample corpus
surveyed for this pack, quasi-experimental methods are **never mentioned by name** — not rejected,
not debated, simply absent. A solo operator or small team does not have markets to compare or a
staggered rollout to exploit; the toolkit is not unwelcome here, it is outside the world its
readers actually operate in. Point to quasi-experiments.md when a reader's situation genuinely has
the preconditions (comparable units, a real control), and expect that to be the exception rather
than the default case this overlay is written for.

## Why the two effects compound

Lever 1 (swing for the fences) and the posterior math in
[experiment-design-and-feasibility](experiment-design-and-feasibility.md#4-a-significant-result-is-a-posterior-not-a-fact)
interact in a way worth naming explicitly, without re-deriving the arithmetic here: a smaller
sample forces a bolder bet (lever 1), and a bolder bet has a lower prior probability of being
true before you ever run it. These two effects do not cancel — they compound. That flagship
names the compounding **the Ambition Tax**
([§5](experiment-design-and-feasibility.md#5-the-ambition-tax)) — use that name, and see that
reference for the full posterior derivation; this overlay's job is to make sure the reader
reaches for lever 1 with the Ambition Tax in view, not as a free lunch.

## Failure modes

- Treating "your traffic can't power this" as a dead end rather than routing to one of the three
  levers, the skip-the-test rule, or quasi-experiments.md where its preconditions actually hold.
- Presenting a micro-conversion substitution as a pure win with no validity cost stated — the
  reader ships believing they validated revenue impact when they validated a click.
- Framing this overlay's reader as someone who "doesn't believe in testing" — the evidence says
  the opposite; they test constantly and need equipment, not persuasion.
- Skipping the test on a change that is small but *expensive to maintain* — the rampstack rule's
  second branch says don't ship that one at all, not skip-and-ship.
- Quoting the 200,000-user or 5,000-user figures as universal thresholds rather than Kohavi's own
  stated example for e-commerce conversion metrics specifically — restate the scope, not just the
  numbers.
