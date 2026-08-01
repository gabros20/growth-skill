# Worker A2 — Forensic deep-read: coreyhaines31/marketingskills (growth-adjacent skills)

As-of date for all findings below: **2026-08-01**. Repo cloned shallow (`--depth 1`) to `/tmp/mkskills`
at time of research; local commit `7868cb9251fad80a73d26e488a5ad5f6c4a9f335` (2026-07-27T18:59:01Z).

## 0. Repo identity — re-verified

```
gh api repos/coreyhaines31/marketingskills --jq '{stars, updated, pushed, license}'
```

Result (fetched 2026-08-01):
- **stars: 42,622** (previous run in this family reported ~42,500 — consistent, small drift from
  growth since that snapshot)
- `updated_at`: 2026-08-01T18:27:59Z (i.e. someone starred/watched it today, same day as this research)
- `pushed_at`: 2026-07-29T05:41:15Z (GitHub API's last-push timestamp; my shallow clone landed at
  commit dated 2026-07-27T18:59:01Z per local `git log -1` — the clone is ~1-2 days behind HEAD,
  immaterial for content analysis, noted for completeness)
- **license (API)**: `{"key":"mit","name":"MIT License","spdx_id":"MIT"}` — for once the GitHub
  license API agrees with the file (see §7, I opened LICENSE directly to confirm — do not skip this
  step even when the API looks right, per charter discipline).

Repo scale: **49 skills**, `find ... -name SKILL.md | wc -l` → 49 files, 14,720 total lines across all
SKILL.md files alone (not counting `references/`, `evals/`, `tools/`). This is a genuinely large,
actively maintained corpus — treat every finding below with that scale in mind, not as a strawman.

---

## 1. Full skill inventory (line counts, ascending)

```
     107 skills/marketing-loops/SKILL.md
     131 skills/public-relations/SKILL.md
     153 skills/offers/SKILL.md
     159 skills/cold-email/SKILL.md
     161 skills/marketing-council/SKILL.md
     163 skills/community-marketing/SKILL.md
     168 skills/marketing-ideas/SKILL.md
     179 skills/free-tools/SKILL.md
     179 skills/schema/SKILL.md
     187 skills/cro/SKILL.md
     197 skills/influencer-marketing/SKILL.md
     220 skills/onboarding/SKILL.md
     224 skills/attribution/SKILL.md
     227 skills/paywalls/SKILL.md
     238 skills/programmatic-seo/SKILL.md
     248 skills/pricing/SKILL.md
     252 skills/copywriting/SKILL.md
     255 skills/product-marketing/SKILL.md
     257 skills/referrals/SKILL.md
     258 skills/competitors/SKILL.md
     262 skills/prospecting/SKILL.md
     270 skills/marketing-plan/SKILL.md
     284 skills/customer-research/SKILL.md
     290 skills/co-marketing/SKILL.md
     310 skills/analytics/SKILL.md
     310 skills/lead-magnets/SKILL.md
     311 skills/emails/SKILL.md
     312 skills/aso/SKILL.md
     338 skills/sms/SKILL.md
     340 skills/image/SKILL.md
     345 skills/revops/SKILL.md
     346 skills/video/SKILL.md
     353 skills/ab-testing/SKILL.md
     353 skills/launch/SKILL.md
     357 skills/site-architecture/SKILL.md
     359 skills/sales-enablement/SKILL.md
     359 skills/signup/SKILL.md
     365 skills/content-strategy/SKILL.md
     381 skills/directory-submissions/SKILL.md
     412 skills/competitor-profiling/SKILL.md
     413 skills/social/SKILL.md
     421 skills/ad-creative/SKILL.md
     424 skills/churn-prevention/SKILL.md
     454 skills/popups/SKILL.md
     455 skills/marketing-psychology/SKILL.md
     457 skills/copy-editing/SKILL.md
     487 skills/ads/SKILL.md
     492 skills/ai-seo/SKILL.md
     497 skills/seo-audit/SKILL.md
    14720 total
```

Every skill has a `references/` subfolder where deep content lives (SKILL.md itself is capped at
<500 lines by house style — see AGENTS.md/CLAUDE.md, §8) and an `evals/evals.json`. Full 49-skill
list confirmed via `ls skills/ | sort`; the growth-adjacent subset I deep-read is below.

### Growth-adjacent skills identified (by name/description touching the charter's list)

Directly growth: **ab-testing, cro, churn-prevention, onboarding, pricing, referrals, paywalls,
signup, popups**. Measurement-adjacent (family boundary with data/growth): **analytics, attribution**.
Framework/meta: **marketing-loops** (contains Retention/Revenue/Referral loop entries),
**marketing-plan** (contains the AARRR framework doc), **product-marketing** (context file every
other skill reads first). I did not find any skill named "funnel", "cohort", "activation" (separate
from onboarding), "monetization" (separate from pricing), or "PLG" — see §9 whitespace.

---

## 2. THE PEEKING-PROBLEM EVAL CLAIM — VERIFIED TRUE

File: `skills/ab-testing/evals/evals.json` (105 lines, 7 eval cases). I read it in full. **The claim
is confirmed**: the eval suite explicitly, directly tests the peeking problem, and does so as its own
dedicated eval case (not a side-mention).

**Eval #3** (`skills/ab-testing/evals/evals.json:36-48`), quoted verbatim:

```json
{
  "id": 3,
  "prompt": "Our test has been running for 3 days and Variant B is winning with 95% confidence. Should we call it?",
  "expected_output": "Should immediately address the peeking problem. Should explain that checking results early inflates false positive rates. Should recommend running for the full pre-calculated duration regardless of early results. Should explain why early significance can be misleading (regression to the mean, day-of-week effects, audience mix shifts). Should provide guidance on when it IS appropriate to stop early (sequential testing methods). Should recommend the pre-test commitment to duration.",
  "assertions": [
    "Addresses the peeking problem directly",
    "Explains why early significance is misleading",
    "Recommends running for full pre-calculated duration",
    "Mentions day-of-week effects or audience mix shifts",
    "Explains false positive rate inflation from peeking",
    "Mentions sequential testing as alternative approach"
  ],
  "files": []
}
```

This is a textbook peeking-problem prompt (early "95% confidence" after 3 days) with a grading
rubric that explicitly requires: naming the peeking problem, explaining false-positive inflation,
recommending pre-committed duration, and (as a secondary assertion) mentioning sequential testing
as the legitimate alternative.

**Eval #1** (`skills/ab-testing/evals/evals.json:5-19`) also grades on peeking as one of eight
assertions: `"Warns about the peeking problem"` (line 15), alongside sample-size calc, hypothesis
framework, and guardrail metrics.

**Eval #7** (`skills/ab-testing/evals/evals.json:90-102`) is the results-interpretation case — control
2.1% vs variant 2.4% over 4 weeks, 12k visitors/variant — and grades on statistical vs. practical
significance and sample-sufficiency, not on peeking directly (the test is already complete in this
prompt, so peeking isn't the axis).

**Verdict: the reported claim is accurate, not folklore.** The ab-testing skill's own SKILL.md backs
this up with a dedicated subsection: `skills/ab-testing/SKILL.md:188-189`:

> ### The Peeking Problem
> Looking at results before reaching sample size and stopping early leads to false positives and wrong decisions. Pre-commit to sample size and trust the process.

This is a real, working, tested behavioral guard — but note what it does NOT do (see §5): it names
the problem and prescribes "don't peek," but the *mechanism fix* (sequential testing / always-valid
p-values) gets only a shallow one-paragraph treatment with zero methodology (no mSPRT, no
group-sequential alpha-spending, no named citation to Johari/Koomen/Pekelis/Walsh or the Optimizely
Stats Engine paper) — see `skills/ab-testing/references/sample-size-guide.md:223-242`, quoted in §5.

---

## 3. Full read: ab-testing (the flagship growth-adjacent skill)

`skills/ab-testing/SKILL.md` (353 lines) + `references/sample-size-guide.md` (264 lines) +
`references/test-templates.md` (278 lines). Read in full.

### What it does well

- **Real hypothesis framework** with a strong/weak example pair (`SKILL.md:48-64`) — teaches the
  "Because X, we believe Y will cause Z, measured by M" structure, not just "have a hypothesis."
- **Three-tier metric framework** (primary/secondary/guardrail) taught with a worked pricing-page
  example (`SKILL.md:98-116`) — this is the correct OEC/guardrail split from the Kohavi canon, even
  though Kohavi/OEC is never named or cited.
- **Sample-size quick-reference tables** by baseline rate (1/3/5/10/20%) × lift (5/10/20/50/100%),
  computed and tabulated (`references/sample-size-guide.md:40-90`) — genuinely useful, internally
  consistent numbers (e.g. 3% baseline detecting a 10% relative lift needs 120,000/variant — this is
  in the right ballpark for a two-proportion z-test at 95%/80% power, though **no formula, no
  citation, and no statement of one-tailed vs two-tailed** is given — I could not verify the exact
  numbers trace to a specific calculator; flag as **plausible-but-unsourced computed table**).
- **A/B vs A/B/n vs MVT distinction** with traffic-multiplier guidance (`SKILL.md:68-76`,
  `references/sample-size-guide.md:165-181`) — correctly explains that MVT requires multiplicatively
  more traffic (combinations), and that A/B/n needs a Bonferroni-style correction ("Apply Bonferroni
  correction or use tools that handle this automatically" — `references/sample-size-guide.md:181`,
  see §4, this is **named, not taught**: no formula, no explanation of family-wise error rate).
- **Full experimentation-program layer**: hypothesis backlog sourcing (6 sources table), ICE scoring
  formula, experiment velocity targets, a documented playbook template, and a weekly/bi-weekly/
  monthly/quarterly cadence (`SKILL.md:232-316`). This is a genuinely well-structured "run an
  experimentation practice" layer, not just a single-test how-to.
- **Documentation templates** (`references/test-templates.md`) are complete and specific: test plan,
  results doc (with a 95% CI column and p-value field), test repository log, hypothesis bank.
- **Common Mistakes section** (`SKILL.md:319-334`) explicitly calls out "Ignoring confidence
  intervals," "Cherry-picking segments," "Over-interpreting inconclusive results" — this is a real
  validity-adjacent checklist, even if shallow.

### Is it a tactic list, workflow, checklist, or validity layer?

**Mostly workflow + checklist, with a thin validity layer bolted on.** The skill genuinely tries to
gate bad decisions (peeking warning, guardrail metrics, sample-size pre-commitment, "reach sample
size?" as step 1 of the analysis checklist) — this is more validity-aware than a pure tactic list.
But every validity concept stops at the "name and warn" level; none reaches the "teach the mechanism
so the reader can defend the decision" level. See §4-5 for the specific gaps.

### What's absent — where a faithful reader gets led into an invalid decision

1. **No SRM (sample ratio mismatch) check anywhere.** Zero mentions in the entire repo (§4). A reader
   who splits traffic 50/50, sees an actual split of 48/52 skewed by a bot or redirect bug, and
   follows this skill's analysis checklist (`SKILL.md:200-207`: reach sample size? significant?
   effect size? secondary metrics? guardrails? segments?) has **no step that would catch the
   underlying randomization bug** — Kohavi/Tang/Xu name SRM as the #1 data-quality check precisely
   because it catches instrumentation bugs before you trust any p-value from that test. This skill's
   checklist has no equivalent gate.
2. **Sequential testing is named but not taught.** `references/sample-size-guide.md:223-242` — full
   text quoted:

   > ## Sequential Testing
   > If you must check results before reaching sample size:
   > ### What is it?
   > Statistical method that adjusts for multiple looks at data.
   > ### When to use
   > - High-risk changes
   > - Need to stop bad variants early
   > - Time-sensitive decisions
   > ### Tools that support it
   > - Optimizely (Stats Accelerator)
   > - VWO (SmartStats)
   > - PostHog (Bayesian approach)
   > ### Tradeoff
   > - More flexibility to stop early
   > - Slightly larger sample size requirement
   > - More complex analysis

   No mSPRT, no group-sequential/alpha-spending, no always-valid p-values, no named source
   (Johari/Koomen/Pekelis/Walsh; Optimizely's own "New Stats Engine" paper). A reader who wants to
   *actually* implement legitimate early stopping gets a vendor-name list, not a method.
3. **No interference/SUTVA/switchback content at all** (§4 — zero hits for "SUTVA," "interference,"
   "switchback" in the whole repo). Any marketplace/social/multi-sided product following this skill
   for e.g. a two-sided-marketplace pricing test would violate SUTVA with no warning anywhere in the
   corpus.
4. **No CUPED, no variance-reduction technique of any kind.** Zero hits.
5. **No Twyman's law, no explicit "surprising results are usually wrong" heuristic**, despite the
   skill's own eval #3 grading on "regression to the mean" as a factor in early-significance
   skepticism — the underlying principle (Twyman) is invoked in spirit but never named or generalized
   into a rule the reader could apply to *other* surprising results (e.g., a guardrail metric that
   moved 40% overnight).
6. **Novelty/primacy effects: named once, not explained.** `references/sample-size-guide.md:133`:
   "Novelty effects wear off" — no detection method (e.g., segment by tenure/first-exposure-date to
   see if the effect decays), no mention of primacy effects (the opposite failure mode) at all
   (0 hits for "primacy" anywhere).
7. **Multiple-comparison correction is named, not computed.** "Bonferroni correction" appears once
   (`references/sample-size-guide.md:181`) with no formula (α/n), no discussion of when Bonferroni is
   too conservative (correlated metrics/variants), no mention of false-discovery-rate alternatives
   (Benjamini-Hochberg) — 0 hits for "false discovery" anywhere in the repo.
8. **Bayesian vs frequentist framing is absent as a concept.** "Bayesian" appears 3 times, always as
   a vendor-capability label ("AB Test Guide Calculator... includes Bayesian option";
   "PostHog (Bayesian approach)"; an unrelated Apple ASO confidence-threshold mention) — never
   explained, never contrasted with frequentist stopping rules, 0 hits for "frequentist."

---

## 4. THE VALIDITY-LAYER GREP — full results

Command run (excluding `evals/` dirs to avoid counting eval-prompt noise, per instructions to
distinguish taught-vs-named in the actual guidance text):

```
grep -rin -E "SRM|sample ratio|sample-ratio|CUPED|sequential|always.valid|peek|power analysis|
statistical power|minimum detectable|MDE|guardrail|novelty effect|primacy|Simpson|multiple comparison|
Bonferroni|false discovery|Bayesian|frequentist|p-value|p value|confidence interval|significance|
stopping rule|pre-register|sample size|SUTVA|interference|switchback|holdout|Twyman" /tmp/mkskills
```

### Per-term hit counts (whole repo, evals excluded)

| Term | Hits | Verdict |
|---|---:|---|
| **SRM** | **0** | Absent entirely |
| **sample ratio** / **sample-ratio** | **0 / 0** | Absent entirely |
| **CUPED** | **0** | Absent entirely |
| sequential | 8 | 1 real teaching instance (ab-testing's Sequential Testing subsection, shallow — quoted §3); rest are irrelevant homonyms (copy-editing's "seven sequential passes," directory-submissions' "sequential heading hierarchy" for SEO, one marketing-plan test-sequence example) |
| always.valid (regex for "always-valid") | 2 | Both false-positive matches on "Optional guardrail" / unrelated text, not the always-valid-p-values concept — **effectively 0 real hits** |
| peek | 3 | All 3 in `skills/ab-testing/SKILL.md` (lines 184, 188, 189) — real, taught (§2-3) |
| power analysis | 0 | Absent entirely (as an exact phrase) |
| statistical power | 2 | Both in ab-testing's sample-size-guide, taught briefly ("80% power... if there's a real effect of size MDE, 80% chance of detecting it") — correct but shallow, no discussion of power curves or how power interacts with peeking |
| minimum detectable / MDE | 3 / 7 | Real, taught with definition and worked usage — the strongest-taught concept in the corpus alongside sample size |
| guardrail | 37 | Heavily used, but **two different senses conflated across the corpus**: (a) statistical guardrail metrics in ab-testing (correct canon usage, taught with examples — lines 44,109,116,171,297,309); (b) generic "safety guardrail" for compliance/spend/PII in marketing-loops, ads, prospecting (different meaning — operational risk controls, not experiment validity) |
| novelty effect | 1 | Named only, no detection method (§3) |
| **primacy** | **0** | Absent — novelty is named, its mirror-image failure mode is not |
| **Simpson** (Simpson's paradox) | **0** | Absent entirely |
| multiple comparison | 0 | Exact phrase absent (Bonferroni named once, see below) |
| Bonferroni | 1 | Named only, no formula, no FWER explanation (`references/sample-size-guide.md:181`) |
| **false discovery** | **0** | Absent — no FDR/Benjamini-Hochberg alternative even mentioned |
| Bayesian | 3 | All 3 are vendor-capability namedrops (PostHog "Bayesian approach," AB Test Guide Calculator "Bayesian option," an unrelated Apple ASO confidence note) — **never explained as a methodology** |
| **frequentist** | **0** | Absent — so "Bayesian" appears with no contrast term at all |
| p-value / p value | 1 / 2 | Defined once correctly ("95% confidence = p-value < 0.05... not a guarantee, just a threshold" — `ab-testing/SKILL.md:196-198`); used elsewhere only as a template placeholder |
| confidence interval | 3 | 2 in ab-testing (named, not computed — reader is told to "check confidence intervals" with no formula); 1 in attribution's `measurement-paradigms.md:60`, which is genuinely well-taught with a worked example ("5% lift, but the interval spans −2% to +12% means you learned nothing — the test was underpowered") — **this is the single best-taught CI explanation in the corpus, and it lives in the marketing/attribution skill, not ab-testing** |
| stopping rule | 0 | Absent as exact phrase (concept exists informally as "pre-commit to sample size," never formalized as a stopping rule) |
| pre-register | 0 | Absent entirely — no mention of pre-registration as a discipline |
| sample size | 28 | Well covered quantitatively (§3), the corpus's strongest stats topic |
| **SUTVA** | **0** | Absent entirely |
| **interference** | **0** | Absent entirely — no marketplace/network-effects experiment-design content anywhere |
| **switchback** | **0** | Absent entirely |
| holdout | 9 | **All 9 live in the `attribution` skill**, not ab-testing/cro — and are genuinely well-taught (geo-holdout, incrementality, retargeting holdout audiences — `skills/attribution/references/measurement-paradigms.md:42,49,53`; `skills/attribution/SKILL.md:73,77,127,155`). This is a real quasi-experiment teaching layer, just filed under marketing-attribution rather than growth-experimentation — see §9. |
| **Twyman** (Twyman's law) | **0** | Absent entirely, despite the *spirit* of Twyman's law appearing informally in eval #3's grading criteria ("regression to the mean") |

### Headline

**Zero occurrences, anywhere in 14,720+ lines of SKILL.md content (plus references/tools/evals):
SRM, CUPED, SUTVA, interference, switchback, Simpson's paradox, false discovery rate, frequentist,
Twyman's law, pre-registration, power analysis (as a phrase), primacy effect, multiple-comparison
(as a phrase), stopping rule.** Of the canon's core validity mechanisms, only three get any real
teaching: (1) peeking is named and warned against with a dedicated eval, (2) sample size / MDE is
computed and tabulated, (3) guardrail metrics are correctly conceptualized. Everything else in the
Kohavi/Tang/Xu canon that would let a practitioner *actually defend* a test result under scrutiny —
SRM as the pre-flight data-quality gate, a real sequential-testing method, multiple-comparison
correction with a formula, interference/SUTVA for marketplace products — is either completely absent
or named without mechanism. **The one place genuine causal-inference sophistication shows up (holdout
tests, incrementality, geo-lift, confidence-interval width as underpowering) is the `attribution`
skill, filed under marketing, not under ab-testing/cro.** This is a strong, specific, falsifiable
whitespace signal.

---

## 5. Other growth-adjacent skills — deep-read summary

### cro (187 lines + 2 references)

`skills/cro/SKILL.md` + `references/experiments.md` (249 lines) + `references/form.md` (not fully
read, out of scope for statistics focus). **Does well**: a genuinely useful, well-ordered analysis
framework (value prop → headline → CTA → visual hierarchy → trust → objections → friction, ranked by
impact, `SKILL.md:25-104`), page-specific playbooks (homepage/landing/pricing/feature/blog), and a
large, well-organized experiment-idea catalog by page type (`references/experiments.md`, ~250 lines
of test-idea tables). **Is it validity-layer?** No — it is explicitly a tactic/heuristic catalog that
*defers* statistical rigor to ab-testing ("Related Skills: ab-testing — to properly test recommended
changes," `SKILL.md:181`). This is an honest, correctly-drawn boundary, not a gap in cro itself — but
it means the burden for validity sits entirely on ab-testing's thin layer (§3-4). No benchmark numbers
in cro's SKILL.md itself (the experiment-idea tables are hypotheses, not stated outcomes) — clean on
the unsourced-numbers axis.

### churn-prevention (424 lines + 2 references)

`skills/churn-prevention/SKILL.md` fully read, plus `references/dunning-playbook.md` (partially read,
first 80 lines). **Does well**: genuinely sophisticated retention mechanics — the offer-to-reason
mapping table (`SKILL.md:114-124`, matching save-offer type to cancellation reason is a real, specific
insight, not generic advice), a full dunning stack with decline-type-specific retry logic (soft vs
hard vs 3DS, `SKILL.md:280-297`), a churn health-score model with weighted signals (`SKILL.md:227-246`),
and an explicit **no-dark-patterns rule** ("Keep the 'continue cancelling' option visible," `SKILL.md:198`;
FTC Click-to-Cancel rule named, `SKILL.md:370`). **Heavy unsourced-benchmark problem** — this is the
single most benchmark-dense growth-adjacent skill and virtually none of the numbers carry a citation:

- `SKILL.md:53`: "Voluntary churn is typically 50-70% of total churn. Involuntary churn is 30-50%" — no source
- `SKILL.md:137`: "60-80% of pausers eventually return to active" — no source
- `SKILL.md:317-322` (Recovery Benchmarks table): soft-decline recovery <40%/50-60%/70%+, hard-decline
  <10%/20-30%/40%+, overall payment recovery <30%/40-50%/60%+, pre-dunning prevention none/10-15%/20-30% —
  entire table, zero citations
- `SKILL.md:336-340` (Key Churn Metrics table): cancel-flow save rate target "25-35%", offer
  acceptance "15-25%", pause reactivation "60-80%", dunning recovery "50-60%" — no sources
- `SKILL.md:369`: "Even a simple survey + one offer saves 10-15%" — no source
- `SKILL.md:390`: "**Churnkey** ... AI-powered adaptive offers, **34% avg save rate**" — vendor-claimed
  number presented as fact, no citation, no link
- `references/dunning-playbook.md:9-12`: "Failed payments cause 30-50% of all subscription churn...
  Subscription businesses lose an estimated **$129 billion annually** to involuntary churn... Effective
  dunning recovers 50-60% of failed payments" — the **$129B figure is a large, specific, unsourced
  aggregate claim** with no citation, no methodology, no date — this is exactly the class of number
  the charter's evidence discipline says to mark UNTRACED and flag as a never-ship candidate if it
  were ever repeated without independent verification.
- `references/dunning-playbook.md:69`: "Reduces hard declines from expired/replaced cards by 30-50%"
  (card updater services) — no source

**Is it a validity layer?** No — it is a well-constructed tactic/workflow skill with a benchmark-table
habit and zero statistical caveats on any of its own numbers (no sample size, no date range, no "this
varies by vertical" caveat on the recovery-rate table). It correctly defers actual A/B testing rigor
to ab-testing (`SKILL.md:363, 424`), which is the right boundary — but none of its own retention
benchmarks get the same treatment analytics/ab-testing gives sample sizes.

### onboarding (220 lines + references/experiments.md, 258 lines)

Both fully read. **Does well**: correct "find your aha moment" framing (correlate action with
retention, not assume it), a genuine funnel drop-off visualization pattern (`SKILL.md:158-163`), and
an unusually large, well-organized experiment catalog (flow simplification, guided experience,
personalization, quick wins, email/multi-channel, re-engagement, technical/UX — ~250 lines of test
ideas). **Absent**: no activation-rate benchmark numbers at all (a clean spot, contrasts with
churn-prevention) — but also no methodology for *finding* the aha moment beyond "ask what retained
users do that churned users don't" (no correlation/regression method, no mention of e.g. Facebook's
famous "7 friends in 10 days" retrospective-analysis technique or how to do that analysis rigorously —
this is folklore-adjacent guidance presented as settled method).

### pricing (248 lines + 3 references)

`SKILL.md` + `references/research-methods.md` (153 lines, fully read) + `tier-structure.md` (not
read) + `pricing-page-teardown.md` (not read, referenced only). **Does well**: correctly explains
Van Westendorp (all 4 questions, the PMC/PME/OPP/IDP intersection method, `references/research-methods.md:9-52`)
and MaxDiff (`:56-95`) as real, methodologically sound survey techniques with sample-size guidance
("100-300 respondents for reliable data," `:34`) — this is actually **appropriately caveated**
compared to churn-prevention's benchmark tables. No citation to Van Westendorp's original 1976 paper
or year, but the method description is accurate. Good handoff structure: pricing-page teardown
explicitly separates itself from CRO ("not conversion-rate optimization — that's cro," `SKILL.md:196`)
and cites its AI-readiness framing as "adapted from Kyle Poyar / Growth Unhinged" (`SKILL.md:205`) —
**this is the one place in the corpus that attributes an idea to a named practitioner**, a good
practice the growth-skill corpus should match more consistently than the incumbent does elsewhere.

### referrals (257 lines + 2 references)

`SKILL.md` + `references/program-examples.md` (139 lines, fully read; `affiliate-programs.md` not
read). **Does well**: correct K-factor / viral coefficient formula, properly defined (`references/
program-examples.md:102-113`: "K = Invitations × Conversion Rate; K > 1 = Viral growth"), a real
incentive-sizing formula tying reward to LTV × margin − target CAC (`:78-89`), and named real-program
case studies (Dropbox, Uber/Lyft, Morning Brew, Notion) with a "why it worked" breakdown. **Unsourced
benchmarks**: `SKILL.md:158-160`: "Referred customers have 16-25% higher LTV... 18-37% lower churn...
refer others at 2-3x rate" — no citation, presented as "Typical Findings"; `references/program-examples.md:120-130`:
referral-rate benchmarks (good 10-25%, great 25-50%, exceptional 50%+) and referrals-per-referrer
bands — no source. The K-factor formula itself is textbook-correct and standard (traces to the viral-
loop literature, e.g. Skok/Elman-era growth writing) but isn't attributed to any named source either.

### paywalls, signup, popups (227 / 359 / 454 lines)

All three fully read. Well-constructed CRO-pattern skills (paywall trigger taxonomy, signup
field-by-field friction analysis, popup trigger-strategy taxonomy) with explicit anti-dark-pattern
sections in each (paywalls `SKILL.md:196-207`; popups' close-button and decline-copy guidance
`SKILL.md:184-227`). Popups carries its own unsourced benchmark trio:
`skills/popups/SKILL.md:294-297`: "Email popup: 2-5% conversion typical. Exit intent: 3-10% conversion.
Click-triggered: Higher (10%+, self-selected)" — no citation. None of these three skills touch
statistical validity at all — they correctly defer to ab-testing for testing ("Related Skills:
ab-testing," present in all three) and don't attempt their own stats layer, which is the right
boundary but means (again) all validity weight sits on ab-testing's thin treatment.

### analytics / attribution (measurement-adjacent, family-boundary skills)

Both fully read. **analytics** (310 lines) is squarely event-tracking/GA4/GTM/UTM implementation —
correctly scoped away from experiment measurement ("For A/B test measurement, see ab-testing,"
`SKILL.md:3`). **attribution** (224 lines + 4 references, SKILL.md fully read) is, unexpectedly, **the
most statistically sophisticated skill in the entire corpus** for causal-inference concepts, despite
being filed as a marketing (not growth) skill:

- Correctly distinguishes MTA / MMM / Incrementality as three measurement paradigms of increasing
  rigor and cost (`SKILL.md:65-77`), with incrementality explicitly named "the gold standard" and
  geo-holdout/PSA/ghost-ads listed as its methods.
- Teaches reading a confidence interval for underpowering, with a concrete worked number
  (`references/measurement-paradigms.md:60`, quoted in §4 table).
- Names Meta's GeoLift and Google's geo experiments as real tools (`references/measurement-paradigms.md:49`).
- Explicitly cross-references ab-testing as "the incrementality mindset applied to on-site changes"
  (`SKILL.md:224`) — the corpus itself recognizes the kinship between attribution's causal-inference
  rigor and ab-testing's experiment design, but does not actually transfer that rigor (SRM, holdout
  discipline, interval-width-as-underpowering) into the ab-testing skill's own text.

This is a notable structural finding: **the incumbent's best causal-inference teaching is siloed in
attribution (marketing-side measurement) rather than integrated into ab-testing (growth-side
experiment design)** — a growth-skill that unified these two treatments would already out-teach the
incumbent without inventing anything new, just by cross-pollinating what the incumbent already knows
in one skill but doesn't apply in the other.

---

## 6. Growth-model framework (AARRR) — filed under marketing-plan, not a dedicated skill

`skills/marketing-plan/references/aarrr-framework.md` (181 lines, fully read) — "AARRR (Dave McClure's
'pirate metrics') is the spine of every plan produced by this skill" (`:3`). Correctly attributes
AARRR to Dave McClure (no year given). Used entirely as a **plan-sequencing / prioritization tool**
for a marketing agency's client engagements — diagnostic decision rules for "which AARRR stage is the
binding constraint" (`:36-70`), stage-by-stage strategic pattern libraries, and a "how to assign a
move to a stage" tie-breaking rule. It explicitly separates itself as **not** where funnel math or
experiment design lives.

**What's absent**: no growth-loops-vs-funnels distinction (the Reforge/Brian Balfour school —
compounding loops vs. linear funnels, "Racecar" framework) anywhere in the corpus — `marketing-loops`
(§ below) is about *operational* recurring workflows an AI agent runs on a cadence (SEO scans, ad-
fatigue checks), a completely different concept from *product* growth loops (content loops, viral
loops, paid loops that compound structurally). The two "loop" concepts share a word but not a
meaning — worth being precise about in the growth-skill corpus so as not to conflate them. No
North-star-metric framework content, no cohort-curve/retention-curve methodology beyond naming
"DAU/WAU/MAU, week-1/4/12 retention, churn" as example metrics (`aarrr-framework.md:11`) with no
"smile curve" or resurrection-artifact discussion. No Sean Ellis 40%-test content anywhere in the
repo (0 hits for "Sean Ellis," "PMF" appears a few times as "product-market fit" in marketing-plan
context only, always as a qualitative diagnostic input, never as the survey methodology).

## 6b. marketing-loops (107 lines + 5 references) — the operate/growth seam, charter's special question

Fully read `SKILL.md`; references (`loop-catalog.md`, `loop-guardrails.md`, `loop-orchestration.md`,
`loop-state.md`, `loop-template.md`) read via grep hits + VERSIONS.md changelog description (not each
read cover-to-cover, but their structure and content is described in detail in `VERSIONS.md:134`,
quoted below, which is a genuine primary description of the shipped content).

This skill is explicitly about **recurring AI-agent-run workflows on a cadence** (weekly SEO scan,
ad-fatigue check, churn-signal watch) — 43 cataloged loops spanning "SEO & Content, Paid,
Earned/Social/Partnerships, Activation, Retention, Revenue, Referral & Advocacy, and Ongoing Ops"
(`SKILL.md:82-84`). It has a genuinely careful two-tier guardrail model: "Check cadence" (how often
the loop *looks*) vs "Acts when" (the action condition — most runs should be "checked, nothing to do,"
`SKILL.md:34,43`), explicit stop/bail-out and state/idempotency requirements for every loop
(`SKILL.md:29-41`), and a hard rule that publish/spend actions need a human checkpoint unless
explicitly authorized (`SKILL.md:66,70`).

**Growth vs operate disposition (charter's special question)**: this skill reads as **operate-flavored
tooling wrapped around growth/marketing content** — the loop *mechanism* (cadence, state, idempotency,
human checkpoints, kill switch) is exactly operate's concern (running a live automated system safely),
while the loop *bodies* it orchestrates (churn-signal watch, ad-fatigue check, pricing-page-experiment
loop, PQL/upgrade-intent) are growth/marketing content. The skill itself is self-aware about this
boundary in spirit (it explicitly is not the experimentation skill: "For the experimentation loop
specifically, see ab-testing," `SKILL.md:3`), but it does NOT draw the growth/operate line the charter
draws — it has no concept of "this loop's action is risk containment" vs "this loop's action is a
learning experiment," because none of its 43 loops are feature-flag canaries or rollout mechanisms.
**No feature-flag, canary, or gradual-rollout content of any kind appears anywhere in the loops skill
or the wider repo** (see the monitoring/dashboard grep below) — the only place "feature flag" appears
in the entire repo is as a vendor-capability label for Optimizely (`tools/REGISTRY.md:250`:
"optimizely | A/B testing, feature flags | Enterprise experimentation"), i.e., named as a tool
capability, never discussed as a risk-containment mechanism. **Finding: the incumbent shows zero
blur between growth's flag-for-learning use and operate's flag-for-safety use — not because it draws
the seam correctly, but because it never engages with the safety use-case at all.** The
`marketing-loops/references/loop-guardrails.md` file (title confirmed via grep hit,
`skills/marketing-loops/references/loop-guardrails.md:1`: "# Loop Guardrails & Compliance") is about
compliance guardrails (CAN-SPAM/GDPR/FTC/spend caps), not experiment or system guardrails — a third,
distinct sense of "guardrail" layered onto the two already found in §4's table.

Grep for monitoring/dashboard/alerting/rollout across the whole repo (excluding VERSIONS.md and
evals) turned up only: tool-integration doc mentions of vendor dashboards (Clearbit, Resend,
SendGrid dashboards — API-key-retrieval instructions, not growth/operate content), a "brand
monitoring" / news-alert tool (Firehose — competitive intelligence, acquisition-adjacent not
operate), and RB2B's "Slack alerts" for de-anonymized website visitors (sales/acquisition tooling).
**None of these read as operate (system health/rollout risk) — all are either vendor-setup boilerplate
or acquisition/sales tooling mislabeled with the word "alert."** No finding to relay to operate; this
is a clean absence, not a blur.

---

## 7. LICENSE — opened directly, not trusted from API

`cat /tmp/mkskills/LICENSE` — full text read (21 lines). It is a **standard MIT License**, copyright
"Corey Haines," 2025. Full permissive grant: "Permission is hereby granted, free of charge... to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software... subject
to including the copyright notice." No additional restriction clauses (no Commons Clause, no field-
of-use restriction) — this is a clean, permissive MIT license.

**Per-skill LICENSE files**: `find /tmp/mkskills -iname 'LICENSE*'` returned **exactly one result**:
`/tmp/mkskills/LICENSE` (repo root). **No per-skill LICENSE files exist** — unlike some incumbents in
this family's prior research (e.g. sibling packs found per-skill licensing complexity elsewhere), this
repo is uniformly MIT at the root, confirmed by both the GitHub API and the file itself agreeing (a
rare case where the API did NOT lie — still worth having opened the file per discipline, since this
run's charter explicitly warns the API can return NOASSERTION even when a real license exists, and the
only way to know for sure is to check).

**README's own license statement** (`README.md:326-328`): "[MIT](LICENSE) - Use these however you
want." — an explicit, generous invitation to lift structure and content. **Verdict: MIT permits lifting
structure and text freely**, with attribution appreciated but only legally required to the extent of
retaining the license notice if redistributing the software itself (not applicable to drawing on ideas
/ structure for an independent skill pack, which is unrestricted under MIT regardless).

Also worth noting: several skills' `VERSIONS.md` changelog entries explicitly credit external sources
they drew from — e.g. `VERSIONS.md:85`: prospecting's demand-signals branch "re-expressed from the
open-source `first-customer-finder` Codex skill, Kappaemme/MIT, credited"; `VERSIONS.md:130`: ads'
B2B expansion "adapted... from practitioner playbooks, notably Ivan Falco's ads-skills (ColdIQ; MIT +
Commons Clause, so all content was rewritten rather than copied)". **This repo practices its own
attribution discipline when borrowing from others — a norm worth matching, not just noting.**

---

## 8. Structural learnings

- **Frontmatter shape**: `name` (must match directory, lowercase-hyphen, ≤64 chars), `description`
  (1-1024 chars, must include trigger phrases AND explicit disambiguation pointers to sibling skills —
  e.g. cro's description ends "For signup/registration flows, see signup. For post-signup activation,
  see onboarding. For popups/modals, see popups." — every growth-adjacent skill's description does
  this), `metadata.version` (semver, bumped on every shipped change — house rule in AGENTS.md).
- **Every skill checks a shared context file first**: `.agents/product-marketing.md` (or legacy
  `.claude/product-marketing.md` / `product-marketing-context.md`) — one skill (`product-marketing`)
  owns creating/updating it, all 48 others read it before asking questions. This is a genuinely clean
  pattern for avoiding repeated context-gathering across a skill family — the digital-product-skill
  family's existing convention (each pack has its own context-gathering) could learn from this
  single-shared-context-file approach if cross-pack context sharing is ever revisited.
  **Caveat**: Claude Code specifically supports auto-injecting this file via `` !`cat ...` `` syntax
  in SKILL.md (AGENTS.md:243-270) — but the house rule explicitly bans putting that syntax IN the
  shared/portable SKILL.md files (it would break non-Claude-Code agents), so it's documented as a
  "local override only" pattern, not shipped.
- **Routing/indexing**: no central router skill — discovery is entirely through each skill's
  `description` frontmatter field matching user intent (standard Claude Skills invocation), plus a
  visual "How Skills Work Together" ASCII diagram in README.md (`README.md:21-50`) grouping the 49
  skills into 7 informal categories (SEO & Content / CRO / Content & Copy / Paid & Measurement /
  Growth & Retention / Sales & GTM / Strategy) with product-marketing as the shared root every skill
  reads first. This is flatter than this family's faceted-router pattern (no single SKILL.md router
  file dispatching to on-demand references across the whole pack) — each of the 49 is a fully
  independent, directly-invocable skill.
- **README install instructions** (`README.md:110-217`) target **Claude Code, OpenAI Codex, Cursor,
  Windsurf, "any agent that supports the Agent Skills spec"** — explicitly multi-agent, not
  Claude-Code-exclusive, via the `npx skills` CLI (vercel-labs/skills), a Claude Code plugin-
  marketplace path, plain git-clone-and-copy, git submodule, a fork-and-customize path, and a third-
  party multi-agent installer (SkillKit). Confirms this is built for broad agent-ecosystem
  distribution, not just claude.ai or Claude Code.
- **Persona/character framing**: each SKILL.md opens with a direct second-person expert framing
  ("You are an expert in experimentation and A/B testing," "You are a conversion rate optimization
  expert," "You help users answer the hardest question in marketing") — consistent house style per
  AGENTS.md's "Tone" section (`AGENTS.md:115-119`: "Direct and instructional... Second person...
  Professional but approachable"). No named-persona/character gimmick (no "meet Alex, your growth
  advisor") — just role-framing.
- **Versioning discipline**: two-layer semver (repo-release x.y.z separate from per-skill
  `metadata.version`), with an explicit update-check mechanism baked into AGENTS.md instructing the
  agent to fetch `VERSIONS.md` from GitHub once per session and non-blockingly notify the user of
  updates (`AGENTS.md:212-234`) — a live-freshness mechanism baked into the skill's own runtime
  behavior, not just a static changelog.
- **marketplace.json** (`.claude-plugin/marketplace.json`) confirms Claude Code plugin distribution
  at repo version 2.10.0, single plugin bundling all 49 skills, described as "CRO, copywriting, cold
  email, prospecting, SEO, AI SEO, paid ads, SMS, ad creative, video production, image generation,
  co-marketing, churn prevention, pricing, referrals, revenue operations, sales enablement, customer
  research, site architecture, comprehensive AARRR-structured marketing plans, public relations and
  earned media, offer design, and more" — self-describes as a marketing pack that happens to include
  growth-adjacent content, not a growth pack.

---

## 9. Whitespace / findings for the wedge synthesis

1. **The validity layer is real but thin, and specifically incomplete against the canon.** Confirmed
   the incumbent is not a strawman — it has a genuine peeking guard (tested), guardrail-metric
   discipline, and quantified sample-size tables. But SRM, CUPED, sequential-testing mechanism,
   SUTVA/interference, multiple-comparison correction with a formula, and Twyman's law are entirely
   absent (§4). A growth-skill that ships even a modest, correctly-sourced treatment of SRM alone (the
   canon's #1 data-quality check) would cover ground this 42.6k-star incumbent doesn't touch at all.
2. **Causal-inference sophistication exists in the corpus but is siloed away from experimentation.**
   attribution's incrementality/geo-holdout/confidence-interval-width teaching (§5, §4's holdout row)
   is the best statistics writing in the whole repo, and it sits in a marketing skill that
   cross-references ab-testing without actually sharing its rigor. A growth-skill unifying "design an
   experiment" and "read a causal-inference result honestly" in one place is a structural
   improvement the incumbent's own cross-reference implicitly admits is missing.
3. **Benchmark-number hygiene is inconsistent and worth being better than.** pricing's Van Westendorp/
   MaxDiff treatment is appropriately caveated (sample-size guidance, no bare percentage claims).
   churn-prevention and referrals and popups are the opposite — dense tables of specific percentage
   benchmarks (recovery rates, save rates, LTV lift, referral rates, popup conversion rates) with zero
   citations, including one large unsourced aggregate dollar figure ($129B annual involuntary-churn
   loss, `references/dunning-playbook.md:11`). A growth-skill practicing the marketing corpus's
   "disclaimed figure is still a figure" discipline (source every number or mark it folklore) would be
   a direct, demonstrable improvement over roughly a third of this incumbent's growth-adjacent
   content.
4. **Growth-loops-vs-funnels (Reforge/Balfour school) is entirely absent**, and the one framework that
   does exist (AARRR) is filed as a marketing-plan sequencing/prioritization tool for agency client
   work, not a growth-modeling or funnel-math skill — no cohort-curve methodology, no North-star-
   metric framework, no compounding-loop taxonomy distinct from marketing-loops' *operational-cadence*
   sense of "loop" (a different concept sharing the same word — worth being precise about in the
   growth corpus so as not to conflate the two).
5. **No dedicated PLG skill, no Sean Ellis 40% test, no cohort/funnel-analysis skill by name** — the
   controller-canon's wedge hypotheses (small-sample honesty, CRO folklore falsification, adjudication)
   are all independently supported by direct evidence in this deep-read, not assumed.
6. **The growth/operate seam is clean by absence, not by design** — no feature-flag/canary/rollout
   risk-containment content exists anywhere in the corpus to blur with growth's flag-for-learning use
   (§6b). Nothing to hand off to operate; this incumbent simply doesn't engage with deployment-safety
   mechanics at all, which is itself worth naming as unclaimed territory if growth-skill ever documents
   the flag seam explicitly (the charter's "same flag infra, opposite intent" framing has zero
   incumbent competition to react to).
