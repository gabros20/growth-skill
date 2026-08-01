# Experiment readout and learning

Purpose: Read a finished (or finishing) experiment honestly — how many times you looked before
trusting a number, what the win is actually worth after the bias every winning result carries,
whether it's safe to ship, and what the organization keeps once the test is over. Design and
feasibility ([experiment-design-and-feasibility.md](experiment-design-and-feasibility.md))
happens before the test runs; everything here happens once a number is on the screen.

Read when:
- A result "looks interesting" — significant, surprising, or both — and needs a read before
  anyone acts on it.
- Deciding whether to ship a primary-metric win.
- Someone wants to check results continuously before a planned end date, and needs to know what
  that costs.
- After the test, deciding what to keep — what changed, what didn't, and what the organization
  now believes differently.

Skip when:
- The experiment hasn't run yet — sizing, metric choice, and the feasibility gate are →
  [experiment-design-and-feasibility.md](experiment-design-and-feasibility.md).
- The question is whether the *numbers themselves* are trustworthy before any of this — SRM,
  assignment integrity, which peek-safe method is implemented under the hood — that is `data`'s
  `experiment-measurement-foundations.md`; run that check first, then read this file. A failed
  SRM check invalidates everything below — don't interpret a result that hasn't passed it.
- Randomization wasn't used at all — reading a quasi-experimental result has its own
  precondition checks — → [quasi-experiments.md](quasi-experiments.md).

Inputs: a result with a stated p-value or interval, how many times it was checked before this
read, the number of treatment arms, the primary metric's direction, and the guardrail metrics
that were supposed to be watched alongside it.

Produces: a haircut-adjusted effect estimate, a stated peeking discipline (K, nominal α,
sidedness) for whatever number is being trusted, a confidence interval read against the original
MDE for a non-significant result, a guardrail-cleared ship/hold decision, and a dated entry for
the organization's own learning ledger.

## Contents
- 1. How many times did you look — the one-curve reconciliation
- 2. The haircut, applied
- 3. Reading a non-significant result
- 4. Twyman-as-Bayes: a surprising result is a low-prior result
- 5. Guardrails before shipping a win
- 6. The learning ledger
- Validation
- Failure modes and handoff

---

## 1. How many times did you look — the one-curve reconciliation

Every "is this peeking-safe" question collapses to one question: **how many times did you
look?** A constant nominal α=0.05, two-sided, at K equally spaced looks, stopping the first time
|Z| crosses 1.96, produces:

| K looks | 1 | 5 | 20 | 100 |
|---|---|---|---|---|
| Actual type-I error | 0.0500 | **0.1418** | **0.2480** | **0.3737** |

This is a from-scratch reproduction of the classic Armitage, McPherson & Rowe result (1969),
verified against two published anchors (0.142 at 5 looks, 0.374 at 100) and against the sanity
check that K=1 must return exactly 0.05 — it does. **Continuous monitoring is simply the K→∞
limit of this same table.** Evan Miller's often-quoted 26.1% figure is a *different, scope-
limited* setup (a continuous simulation capped at 150 observations, stopping at first
significance) — it lands close to this table's own K≈25 value, which is the correct way to
place it, not a competing number. And Johari, Koomen, Pekelis & Walsh's peer-reviewed finding —
even at 10,000 samples, a nominal 5% false-positive rate can be inflated 5–10×, and under
stop-at-first-crossing it approaches 100% as data accumulates (KDD 2017) — is the same curve's
many-looks region and its unbounded limit. **Treat all of these as one question asked at
different points on one curve, never as competing claims.**

Two things must always travel with any number pulled off this curve: the number of looks (K) and
whether the test was two-sided. And one exemption: a **pre-registered group-sequential design
with alpha-spending** (O'Brien-Fleming, Pocock) is built specifically to hold the *overall* rate
at the nominal level across planned looks — this table describes what happens *without* that
correction, at a naive constant threshold. Which specific always-valid or alpha-spending method
to implement is `data`'s call (`experiment-measurement-foundations.md`); knowing which curve
you're on, and stating K and sidedness every time a number is reported, is this file's.

One folk belief this resolves directly: **"Bayesian methods let you peek safely" is false.**
GrowthBook — a platform that defaults to Bayesian analysis — states it against its own interest:
early stopping "can still result in inflated false positive rates" even under a Bayesian
framework. A posterior can stay internally coherent under early stopping; the *decision rule*
built on top of it (stop and ship the moment it looks good) is what breaks, regardless of which
inference framework produced the number.

A second folk belief runs the opposite direction and is also wrong: that a **named** sequential
or always-valid method (as opposed to the naive daily-peeking above) costs you power relative to
waiting for a fixed sample. Under realistic conditions it usually doesn't. On Optimizely's own
sample of experiments, mSPRT typically reaches significance with *fewer* samples than a
comparable fixed-horizon test, because the assumption a fixed-horizon power calculation depends
on — knowing your effect size accurately in advance — is rarely achievable in practice; the
penalty only shows up at very high power targets combined with an accurately known effect size
(Johari, Koomen, Pekelis, Walsh, KDD 2017, §5). **Don't conflate the two questions**: checking a
dashboard daily with no stopping rule is the failure mode this section opened with; adopting a
named sequential method with a real stopping rule is not a tax, it's usually a discount. Which
specific method to implement is `data`'s call; knowing the folk claim about its cost is inverted
is this file's.

## 2. The haircut, applied

Every estimate selected *because* it was significant is biased upward, and the bias is
quantified: roughly 13% at 80% power with one treatment arm, 21% with two, 25% with three, and
counterintuitively **30% if you Bonferroni-corrected to hold the family-wise rate** — a stricter
threshold selects even more extreme draws from the noise, so correcting for multiple comparisons
makes the haircut *bigger*, not smaller (Kohavi, 2024-10-26). Apply this before reporting any
winning number upward, not after someone asks whether it held up. A dated, real example: a
caching-speedup experiment measured +0.36% revenue per user; after a sequential-inference
haircut, the number the team actually reported and trusted was closer to 0.3% (Talabat /
Delivery Hero, 2025). The direction is always the same — down — never a reason to inflate a
number that already disappointed.

## 3. Reading a non-significant result

At the power the Ambition Tax forces on small samples
([experiment-design-and-feasibility.md §5](experiment-design-and-feasibility.md#5-the-ambition-tax)),
a test that doesn't cross the significance threshold is not, by itself, evidence the change
doesn't work — it may simply be a test that was never sized to detect the effect it was looking
for. **Absence of evidence is not evidence of absence, made operational**: report the confidence
interval around the effect estimate, not a verdict, and check one thing against it — does the
interval still contain the MDE the test was sized for
([experiment-design-and-feasibility.md §2](experiment-design-and-feasibility.md#2-the-power-table-and-where-16-comes-from))?

- **If yes, the test was uninformative, not negative.** The data can't distinguish "no effect"
  from "the effect you hoped for, sitting inside noise the sample was too small to resolve."
  Route back to the three levers (§5 there) rather than recording the idea as disproven.
- **If the interval excludes the MDE, that is an informative negative.** The test had enough
  power to rule out the effect size that mattered, and it did — a real finding, worth reporting
  with the same confidence as a win, not a shrug.

Log the interval itself — not "didn't work" — in the learning ledger (§6). A ledger built from
binary win/loss labels discards exactly the distinction this section depends on, and silently
corrupts the real prior hit rate (π) your next feasibility check reads off it.

## 4. Twyman-as-Bayes: a surprising result is a low-prior result

Twyman's Law — *"any figure that looks interesting or different is usually wrong"* — is taught
in `data`'s `experiment-measurement-foundations.md` as a data-quality heuristic: investigate a
dramatic lift for an SRM failure or a mis-instrumented event before trusting it. Read alongside
[experiment-design-and-feasibility.md](experiment-design-and-feasibility.md)'s Bayes posterior
(P(TP|SS) = (1−β)π / [(1−β)π + α(1−π)]), it's the same warning from a second direction: a result
dramatic enough to be "interesting" is, almost by definition, the kind of claim you'd have
assigned a *low* prior probability π before running the test — and a lower π drives the
posterior probability of a true positive *down* at an identical p-value, not up. A mundane,
expected result and a shocking one can carry the same p<0.05 and mean very different things. **A
surprising result should raise your suspicion on two independent grounds at once — data quality
(Twyman) and prior plausibility (Bayes) — not just one.** Investigate both before it ships.

Fareed Mosavat's practitioner instinct converges on the data side of this independently: faced
with a surprising result, his first hypothesis is "there's a bug in the data" (2018) — a growth
practitioner arriving at the same rule Kohavi teaches from the measurement side.

## 5. Guardrails before shipping a win

A primary-metric win is not a ship decision by itself. Pair every OEC with guardrail metrics
that must not regress, and report both — a headline win that quietly breaches a guardrail is not
a win, it's a trade the team hasn't acknowledged making. This is a converged, first-party
practice — the pattern recurs, independently, across Netflix, Microsoft's own experimentation
platform (STEDI), Duolingo (a monetization win with a retention cost), and Booking.com, each with
its own dated example. Two fully worked, dated specimens worth citing directly:

- **RevenueCat's own CEO ran a 4-variant web-vs-IAP paywall test and published the losing
  result against his own commercial interest**: the web-only variant *did* show better trial
  conversion, and the switch still saved real fee revenue — but overall conversion dropped
  25–45%, and "it didn't make up for the drop in initial conversion, even when considering the
  fee savings" (Jacob Eiting, 2025-05-28). **A secondary metric moved the right way, and the
  decision still went the other way.** That's the OEC-vs-guardrail lesson in one sentence.
- **A qualitative guardrail catching what the primary metric missed, with no statistics
  involved.** An experiment raised signups 18% and was never launched, because that cohort
  churned worse; when someone later proposed reviving it, the PM who'd interviewed those users
  recalled why: "they didn't actually intend to create an account" (dated practitioner account,
  2021). The guardrail wasn't a metric threshold — it was a documented reason a headline win was
  the wrong thing to celebrate.

Neither example needs a vendor's benchmark to be useful — both are dated, first-party, and
falsifiable by anyone who wants to check the source.

## 6. The learning ledger

The Bayes posterior in
[experiment-design-and-feasibility.md](experiment-design-and-feasibility.md) needs a real prior
hit rate (π) to be worth anything — and a made-up one is exactly as unreliable as skipping the
math. **Keep a learning ledger**: for every finished test, record the predicted effect, the
haircut-adjusted actual effect (§2), the guardrail outcome (§5), and whether the primary metric
moved in the predicted direction at all — including, per §3, the confidence interval for a test
that didn't reach significance rather than a bare "didn't work." Over a run of tests, this ledger
*is* your organization's real π — read your own hit rate off it rather than borrowing Microsoft's
1/3 or Bing's 10–20%, both of which are one company's reported experience, undenominated, from a
specific era. A team that has run and logged twenty tests knows its own prior better than any
published figure can tell it. This is also where a low win rate stops looking like failure: a low
hit rate is a documented feature of a healthy testing program at more than one company, not
evidence the program should stop.

A minimal entry needs seven fields; the interval and the posterior-informing note are the two
most often missing from an ad-hoc log:

| Date | Hypothesis | Prior (π) | Design (n, MDE) | Result (interval) | Decision | Note |
|---|---|---|---|---|---|---|
| 2026-03-04 | New checkout CTA copy lifts conversion | 15% | 3,532/arm, MDE +20% rel. | [-3%, +9%] | Hold — inconclusive | Interval still contains the MDE (§3); retest at a bigger swing, don't log as a loss |

## Validation

- Any number reported states K, nominal α, and sidedness (§1) — never a bare p-value with no
  peeking discipline attached.
- Any winning estimate reported upward already carries its haircut (§2) — the report states the
  post-haircut figure, not the raw one.
- A non-significant result states its confidence interval and whether that interval still
  contains the original MDE (§3) — never reported as a bare "didn't work."
- A surprising result triggers both a data-quality check (Twyman, via `data`'s reference) and a
  prior-plausibility check (§4) before it's trusted, not one in place of the other.
- No primary-metric win ships without its guardrail set reported alongside it (§5).
- The finished test — win, loss, or null — has a dated entry in the learning ledger (§6), logged
  with its interval rather than a binary label when the result was non-significant.

## Failure modes and handoff

- **A null result is reported as "no effect" with no confidence interval attached** — apply §3's
  check: does the interval still contain the MDE (uninformative), or does it exclude the MDE
  (an informative negative)? The two are not the same finding.
- **The test hasn't run yet** — → [experiment-design-and-feasibility.md](experiment-design-and-feasibility.md);
  sizing and the feasibility gate live there, not here.
- **SRM hasn't been checked, or the ask is about assignment integrity** — → `data`'s
  `experiment-measurement-foundations.md`; stop reading this file's numbers until that passes.
- **There was no randomization to begin with** — → [quasi-experiments.md](quasi-experiments.md).
- **The result is being used to justify a standing threshold on the live system, not a shipped
  decision** — that's `operate`'s territory; this file's ship/hold logic is for a single tested
  change's decision, proceeding on a rejected null, not a release-safety ramp proceeding on the
  null.
