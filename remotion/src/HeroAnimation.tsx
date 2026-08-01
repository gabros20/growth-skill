import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { themes, MONO, SANS, type ThemeName, type Theme } from "./theme";

// Hero: the through-line of `growth` — the feasibility gate, honest experiments, and what a
// significant result is actually worth. The naive instinct ("we don't have enough traffic to test
// this") gets corrected into a sharper question, asked before a hypothesis is written: can this
// specific comparison reach a power you'd trust. Halving the effect you want to detect quadruples
// the traffic you need — the single most useful sentence in the pack's own flagship reference. The
// centerpiece is the Ambition Tax: small samples force bigger bets, bigger bets carry lower priors,
// and the two effects multiply rather than cancel — read against the Bayes posterior a "significant"
// result is actually worth, at real, sourced hit rates. The faceted router composes one primary job
// of twelve with at most one base surface plus two additive overlays. CUPED, the field's most-cited
// answer to "my sample is too small," is graded honestly: real variance reduction on the primary
// result, under 5% on revenue-per-user by the same paper's own numbers, and it fails hardest exactly
// where growth spends its effort — new users and retention. The handoff carries a feasibility
// verdict, an OEC, guardrails and a decision rule to data, marketing and operate, while growth ships
// no production code and never reports a readout as another pack's finding.
// ~57s, loops (opens/closes empty).
//
// Pacing model (reader-first): every scene animates its content IN, then HOLDS fully still for a
// reading beat (~2.3-3.6s) before the container fades OUT. The fade-out begins at dur - hold, so each
// scene's dur = content-in-end + reading-hold + fade. Never let the next scene start before this one
// has been readable at rest.
//
// Scene map (30fps):
//   S1 gate      0-210       the naive instinct, corrected into the gate asked before a hypothesis exists
//   S2 halving   210-500     halving the detectable effect quadruples the traffic you need — three bars, sqrt scale
//   S3 flagship  500-840     THE centerpiece: the Ambition Tax — two facts that multiply, not cancel, plus the posterior table
//   S4 route     840-1180    the faceted router: one job x one base surface + two additive overlays
//   S5 cuped     1180-1470   CUPED graded honestly — real, then under 5% on revenue, then failing where growth lives
//   S6 handoff   1470-1710   feasibility verdict, OEC, decision rule — and what this work cannot prove

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

function envelope(frame: number, dur: number, hold = 26) {
  const opIn = interpolate(frame, [0, hold], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const opOut = interpolate(frame, [dur - hold, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const y = interpolate(frame, [0, hold], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return { opacity: Math.min(opIn, opOut), y };
}

const step = (frame: number, a: number, b: number, ease = false) =>
  interpolate(frame, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease ? EASE : undefined });

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string; accent?: string }> = ({ t, kicker, title, accent }) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 17, color: accent ?? t.accent, marginBottom: 12 }}>
      {kicker}
    </div>
    <div style={{ fontFamily: MONO, fontSize: 38, color: t.ink, letterSpacing: "-0.02em" }}>{title}</div>
  </div>
);

// -- S1 . the naive instinct, corrected --------------------------------------------
const ClaimLine: React.FC<{ t: Theme; text: string; frame: number; from: number; color?: string }> = ({ t, text, frame, from, color }) => {
  const chars = Math.floor(interpolate(frame, [from, from + 46], [0, text.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const typed = text.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0 && chars < text.length && frame > from;
  const op = step(frame, from - 4, from + 6);
  return (
    <div style={{ opacity: op, color: color ?? t.ink }}>
      {typed}
      <span style={{ opacity: caretOn ? 1 : 0, color: t.accent }}>▋</span>
    </div>
  );
};

const TermRow: React.FC<{ t: Theme; label: string; body: string; owner: string; appear: number; labelColor?: string }> = ({ t, label, body, owner, appear, labelColor }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, display: "grid", gridTemplateColumns: "140px 1fr 150px", gap: 16, alignItems: "center", padding: "10px 0", borderTop: `1px solid ${t.line}` }}>
    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, color: labelColor ?? t.accent }}>{label}</div>
    <div style={{ fontFamily: SANS, fontSize: 14, color: t.ink, lineHeight: 1.4 }}>{body}</div>
    <div style={{ fontFamily: MONO, fontSize: 12.5, color: t.muted, textAlign: "right" }}>{owner}</div>
  </div>
);

const SceneGate: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  const r1 = step(frame, 96, 118, true);
  const r2 = step(frame, 112, 134, true);
  const r3 = step(frame, 128, 150, true);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1020 }}>
        <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 16, color: t.muted, marginBottom: 20, textAlign: "center" }}>
          the instinct the field never checks
        </div>
        <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "26px 32px", fontFamily: MONO, fontSize: 19, lineHeight: 2, color: t.ink }}>
          <ClaimLine t={t} text={'✗ “we don’t have enough traffic to test this.”'} frame={frame} from={8} color={t.bad} />
          <ClaimLine t={t} text="declared, or actually checked against a power you'd trust?" frame={frame} from={64} />
        </div>
        <div style={{ marginTop: 22, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "6px 20px" }}>
          <TermRow t={t} label="the gate" body="can this comparison reach a power you'd trust, before a hypothesis or a flag exists" owner="growth ⭐" appear={r1} labelColor={t.good} />
          <TermRow t={t} label="if no" body="never a bare refusal — a bigger bet, an upstream metric, or a documented skip" owner="§7 redirect" appear={r2} />
          <TermRow t={t} label="if yes" body="every winning number gets a haircut, and a posterior — not just a p-value" owner="§4–5" appear={r3} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S2 . halving the effect quadruples the traffic ---------------------------------
// sqrt-scale bars: value quadrupling reads as the bar doubling in length — an honest, disclosed
// transform for count data spanning a wide range, not a literal linear plot.
const SQRT_SCALE = 1.55;

const PowerBar: React.FC<{
  t: Theme;
  label: string;
  sub: string;
  value: number;
  display: string;
  color: string;
  grow: number;
}> = ({ t, label, sub, value, display, color, grow }) => {
  const w = Math.sqrt(value) * SQRT_SCALE * grow;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 20, alignItems: "center", marginTop: 18 }}>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: MONO, fontSize: 14, color: t.ink, fontWeight: 600 }}>{label}</div>
        <div style={{ fontFamily: SANS, fontSize: 11.5, color: t.muted, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ position: "relative", height: 34 }}>
        <div style={{ position: "absolute", left: 0, top: 6, width: w, height: 22, background: color, borderRadius: "0 5px 5px 0", opacity: 0.9 }} />
        <div style={{ position: "absolute", top: 8, left: w + 14, fontFamily: MONO, fontSize: 15, fontWeight: 700, color, opacity: grow > 0.75 ? 1 : 0, whiteSpace: "nowrap" }}>
          {display}
        </div>
      </div>
    </div>
  );
};

const SceneHalving: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const g1 = step(frame, 34, 84, true);
  const g2 = step(frame, 68, 118, true);
  const g3 = step(frame, 116, 172, true);
  const rule = step(frame, 176, 206, true);
  const gen = step(frame, 214, 242, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1060 }}>
        <SceneTitle t={t} kicker="the power table — where the gate gets its teeth" title="halving the effect quadruples the traffic" />
        <div style={{ width: 900 }}>
          <PowerBar t={t} label="+20% relative MDE" sub="baseline conversion rate: 5%" value={7457} display="7,457 per arm" color={t.good} grow={g1} />
          <PowerBar t={t} label="+10% relative MDE" sub="half the effect size" value={29826} display="29,826 per arm · 4.0×" color={t.amber} grow={g2} />
          <PowerBar t={t} label="+5% relative MDE" sub="half again" value={119303} display="119,303 per arm · 4.0×" color={t.bad} grow={g3} />
        </div>
        <div style={{ width: 900, marginTop: 6, opacity: g3, fontFamily: MONO, fontSize: 11.5, color: t.muted }}>
          bar length ∝ √(exposures) — a quadrupled value reads as a doubled bar, disclosed, not a literal linear plot
        </div>
        <div style={{ marginTop: 24, opacity: rule, textAlign: "center" }}>
          <div style={{ fontFamily: MONO, fontSize: 16, color: t.ink }}>
            2(z<sub>0.975</sub>+z<sub>0.80</sub>)² = 15.6978 · at α=.05 two-sided, 80% power — <span style={{ color: t.muted }}>experiment-design-and-feasibility.md §2</span>
          </div>
        </div>
        <div style={{ marginTop: 18, opacity: gen, background: t.amberBg, border: `1px solid ${t.amber}`, borderRadius: 8, padding: "11px 18px", fontFamily: SANS, fontSize: 13, color: t.ink, maxWidth: 820, textAlign: "center", lineHeight: 1.5 }}>
          <b style={{ color: t.amber }}>Metric choice moves this by two more orders of magnitude:</b> a skewed metric like
          revenue-per-user can need ~114,000 where a low-skew metric needs ~1,550 — the same underlying change (§3).
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S3 . THE Ambition Tax — two facts that multiply, not cancel --------------------
const POSTERIORS: { prior: string; note: string; posterior: string }[] = [
  { prior: "50%", note: "a coin-flip prior", posterior: "94.1%" },
  { prior: "1/3", note: "Microsoft's reported average, 2009 — no published denominator", posterior: "88.9%" },
  { prior: "20%", note: "Bing's high end · KDD 2014", posterior: "80.0%" },
  { prior: "10%", note: "Bing's low end", posterior: "64.0%" },
  { prior: "5%", note: "a bold, surprising bet", posterior: "45.7%" },
];

const PosteriorRow: React.FC<{ t: Theme; prior: string; note: string; posterior: string; appear: number }> = ({ t, prior, note, posterior, appear }) => (
  <div
    style={{
      opacity: appear,
      translate: `0 ${interpolate(appear, [0, 1], [8, 0])}px`,
      display: "grid",
      gridTemplateColumns: "90px 1fr 100px",
      gap: 16,
      alignItems: "center",
      padding: "8px 16px",
      borderTop: `1px solid ${t.line}`,
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, color: t.ink }}>π={prior}</div>
    <div style={{ fontFamily: SANS, fontSize: 12, color: t.muted, lineHeight: 1.35 }}>{note}</div>
    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, color: t.good, textAlign: "right" }}>{posterior}</div>
  </div>
);

const Move: React.FC<{ t: Theme; label: string; appear: number; bad?: boolean }> = ({ t, label, appear, bad }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [8, 0])}px`, border: `1px solid ${bad ? t.bad : t.accent}`, background: t.codeBg, borderRadius: 8, padding: "8px 13px", fontFamily: MONO, fontSize: 12.5, color: bad ? t.bad : t.ink }}>
    {label}
  </div>
);

const SceneAmbitionTax: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 24);
  const facts = step(frame, 44, 84, true);
  const tax = step(frame, 96, 130, true);
  const caption = step(frame, 300, 328, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1080 }}>
        <SceneTitle t={t} kicker="experiment-design-and-feasibility . the flagship" title="the Ambition Tax — paid twice, not once" />
        <div style={{ width: 960, display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 22 }}>
          <div>
            <div style={{ opacity: facts, display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              <Move t={t} label="fact one — winning estimates are biased upward: 13% / 21% / 25% by one, two, three arms" appear={facts} />
              <Move t={t} label="…and 30% under Bonferroni correction — a stricter threshold selects more extreme noise" appear={facts} bad />
              <Move t={t} label="fact two — a small sample forces bigger bets: 2% relative needs 4–20× the traffic of 20%" appear={facts} />
            </div>
            <div style={{ opacity: tax, background: t.amberBg, border: `1px solid ${t.amber}`, borderRadius: 8, padding: "13px 16px", fontFamily: SANS, fontSize: 13.5, color: t.ink, lineHeight: 1.5 }}>
              <b style={{ color: t.amber }}>The two effects don't cancel, they multiply:</b> the smaller your sample, the more
              ambitious your test must be — and the more ambitious the test, the less a significant result on it means.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 12.5, color: t.muted, marginBottom: 4, textAlign: "center" }}>
              P(true positive | significant) — at α=.05, 80% power
            </div>
            <div style={{ background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, paddingBottom: 4 }}>
              {POSTERIORS.map((p, i) => {
                const ap = step(frame, 150 + i * 22, 176 + i * 22, true);
                return <PosteriorRow key={p.prior} t={t} prior={p.prior} note={p.note} posterior={p.posterior} appear={ap} />;
              })}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 22, opacity: caption, fontFamily: SANS, fontSize: 13.5, color: t.muted, textAlign: "center", maxWidth: 860, lineHeight: 1.55 }}>
          A "statistically significant winner" is not a fact — it is a posterior, set by a hit rate you knew
          <i> before</i> you ran the test (Kohavi, <i>Seven Rules of Thumb</i>, KDD 2014).
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S4 . the faceted router --------------------------------------------------------
const Chip: React.FC<{ t: Theme; label: string; on?: boolean; star?: boolean; dim?: boolean; appear: number }> = ({ t, label, on, star, dim, appear }) => {
  const bg = star || on ? t.accent : dim ? "transparent" : t.codeBg;
  const border = dim ? t.dim : star || on ? t.accent : t.line;
  const color = star || on ? t.accentInk : dim ? t.dim : t.muted;
  return (
    <div style={{ opacity: appear, scale: String(interpolate(appear, [0, 1], [0.9, 1])), fontFamily: MONO, fontSize: 12, padding: "6px 11px", borderRadius: 8, background: bg, border: `1px solid ${border}`, color, fontWeight: star || on || dim ? 700 : 400, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
};

const RLane: React.FC<{ t: Theme; label: string; sub: string; children: React.ReactNode; appear: number }> = ({ t, label, sub, children, appear }) => (
  <div style={{ opacity: appear, display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, alignItems: "center", marginTop: 15 }}>
    <div style={{ textAlign: "right" }}>
      <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontWeight: 700, fontSize: 12.5, color: t.muted }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 10.5, color: t.glyph, marginTop: 2 }}>{sub}</div>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>{children}</div>
  </div>
);

const JOBS = [
  "experiment-design-and-feasibility ⭐",
  "growth-model-and-loops",
  "funnel-and-cohort-diagnosis",
  "opportunity-and-prioritization",
  "experiment-readout-and-learning",
  "activation-and-onboarding",
  "conversion-optimization",
  "retention-and-resurrection",
  "referral-and-product-loops",
  "monetization-and-pricing-experiments",
  "product-led-growth",
  "quasi-experiments",
];
const SURFACES = ["self-serve SaaS", "B2B sales-assisted", "mobile subscription", "marketplace / network"];

const SceneRoute: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 24);
  const l1 = step(frame, 20, 40);
  const l2 = step(frame, 152, 172);
  const l3 = step(frame, 200, 220);
  const compose = step(frame, 250, 274, true);
  const readset = step(frame, 272, 296, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1060 }}>
        <SceneTitle t={t} kicker="SKILL.md is a router, not a script" title="one job × one base surface + overlays" />
        <RLane t={t} label="① primary job" sub="exactly one, of 12" appear={l1}>
          {JOBS.map((j, i) => {
            const ap = step(frame, 40 + i * 9, 58 + i * 9, true);
            return <Chip key={j} t={t} label={j} star={i === 0} appear={ap} />;
          })}
        </RLane>
        <RLane t={t} label="② base surface" sub="at most one, of 4" appear={l2}>
          {SURFACES.map((s, i) => {
            const ap = step(frame, 172 + i * 10, 192 + i * 10, true);
            return <Chip key={s} t={t} label={s} on={i === 0} appear={ap} />;
          })}
          <div style={{ opacity: step(frame, 210, 228, true), fontFamily: MONO, fontSize: 11, color: t.muted }}>
            self-serve SaaS assumed when unstated — and said out loud
          </div>
        </RLane>
        <RLane t={t} label="③ additive overlays" sub="stack on, never instead" appear={l3}>
          <Chip t={t} label="overlay-small-sample" dim appear={step(frame, 220, 240, true)} />
          <Chip t={t} label="overlay-agentic" dim appear={step(frame, 228, 248, true)} />
          <div style={{ opacity: step(frame, 236, 256, true), fontFamily: MONO, fontSize: 11, color: t.muted, border: `1px dashed ${t.line}`, borderRadius: 8, padding: "6px 11px" }}>
            traffic too small for standard power · a model designs, runs or reads the test
          </div>
        </RLane>
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12, opacity: compose }}>
          <div style={{ flex: 1, height: 1, background: t.line }} />
          <div style={{ fontFamily: MONO, fontSize: 12.5, color: t.muted }}>compose →</div>
          <div style={{ flex: 1, height: 1, background: t.line }} />
        </div>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 10, opacity: readset, alignItems: "center" }}>
          <div style={{ fontFamily: MONO, fontSize: 13, color: t.accent, background: t.codeBg, border: `1px solid ${t.accent}`, borderRadius: 8, padding: "7px 14px" }}>experiment-design-and-feasibility.md</div>
          <div style={{ fontFamily: MONO, fontSize: 13, color: t.accent, background: t.codeBg, border: `1px solid ${t.accent}`, borderRadius: 8, padding: "7px 14px" }}>surface-selfserve.md</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: t.muted }}><b style={{ color: t.ink }}>2 of 19</b> loaded · read fully</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S5 . CUPED graded honestly ------------------------------------------------------
const GradeRow: React.FC<{ t: Theme; claim: string; verdict: string; note: string; tier: string; tierColor: string; appear: number }> = ({ t, claim, verdict, note, tier, tierColor, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, display: "grid", gridTemplateColumns: "96px 260px 1fr", gap: 16, alignItems: "flex-start", padding: "12px 0", borderTop: `1px solid ${t.line}` }}>
    <div style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 700, color: tierColor, border: `1px solid ${tierColor}`, borderRadius: 6, padding: "2px 0", textAlign: "center" }}>{tier}</div>
    <div style={{ fontFamily: MONO, fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{claim}</div>
    <div>
      <div style={{ fontFamily: SANS, fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{verdict}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: t.muted, marginTop: 3 }}>{note}</div>
    </div>
  </div>
);

const SceneCuped: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const headline = step(frame, 8, 30);
  const r1 = step(frame, 40, 62, true);
  const r2 = step(frame, 60, 82, true);
  const r3 = step(frame, 80, 102, true);
  const r4 = step(frame, 100, 122, true);
  const claim = step(frame, 156, 184, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1050 }}>
        <SceneTitle t={t} kicker="§6 . CUPED will not rescue you here" title="the field's most-cited fix, graded honestly" />
        <div style={{ opacity: headline, fontFamily: MONO, fontSize: 13, color: t.muted, marginBottom: 8, textAlign: "center" }}>
          real reduction · metric-dependent payoff · fails for new users · fails for retention too
        </div>
        <div style={{ background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "4px 22px" }}>
          <GradeRow
            t={t}
            tier="primary"
            tierColor={t.good}
            claim="CUPED cuts variance"
            verdict="45%, 52%, 49% variance reduction across three real Microsoft experiments, one week of pre-period data."
            note="Deng, Xu, Kohavi, Walker · WSDM 2013"
            appear={r1}
          />
          <GradeRow
            t={t}
            tier="same paper"
            tierColor={t.amber}
            claim="but not for revenue"
            verdict={'the same paper’s own §5.2.3: revenue-per-user reduced by less than 5% — "due to the low correlation."'}
            note="a blanket “CUPED halves your variance” is contradicted by its own source"
            appear={r2}
          />
          <GradeRow
            t={t}
            tier="fails here"
            tierColor={t.bad}
            claim="new users have no pre-period"
            verdict="covariate-metric correlation runs 0.2–0.4 for new users, versus ~40% for existing ones."
            note="CUPED paper · Eppo docs · Statsig docs · Netflix, KDD 2016 — four independent sources agree"
            appear={r3}
          />
          <GradeRow
            t={t}
            tier="fails here"
            tierColor={t.bad}
            claim="retention, too"
            verdict="variance reduction stays small for both new and existing users — full history doesn't rescue it."
            note="Xie & Aurisset, Netflix · KDD 2016 — the only source found on this second failure"
            appear={r4}
          />
        </div>
        <div style={{ marginTop: 22, fontFamily: SANS, fontSize: 14.5, color: t.ink, textAlign: "center", opacity: claim, lineHeight: 1.5 }}>
          the small-sample problem <span style={{ color: t.accent, fontWeight: 700 }}>cannot be variance-reduced away</span> precisely
          where growth spends its effort — activation and retention.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S6 . the handoff ----------------------------------------------------------------
const NextSkillCol: React.FC<{ t: Theme; label: string; body: string; appear: number }> = ({ t, label, body, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, border: `1px solid ${t.line}`, background: t.panel, borderRadius: 10, padding: "12px 16px", width: 260 }}>
    <div style={{ fontFamily: MONO, fontSize: 13.5, fontWeight: 700, color: t.ink, marginBottom: 5 }}>{label}</div>
    <div style={{ fontFamily: SANS, fontSize: 12, color: t.muted, lineHeight: 1.45 }}>{body}</div>
  </div>
);

const SceneHandoff: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  const build = step(frame, 16, 38);
  const arrow = step(frame, 60, 80);
  const cols = step(frame, 78, 100);
  const cap = step(frame, 156, 182, true);

  const emitted: [string, string][] = [
    ["feasibility verdict", ": can this be answered, at what cost"],
    ["OEC + guardrails", ": named before the test runs"],
    ["decision rule", ": committed to before the result exists"],
    ["the haircut", ": applied to every winning number"],
  ];

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1060 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div style={{ opacity: build, border: `1px solid ${t.accent}`, background: t.codeBg, borderRadius: 10, padding: "16px 20px", fontFamily: MONO, fontSize: 12, color: t.muted, width: 410 }}>
            <div style={{ color: t.accent, fontWeight: 700, marginBottom: 8 }}>growth writes</div>
            {emitted.map(([k, v], i) => {
              const op = step(frame, 32 + i * 9, 48 + i * 9);
              return (
                <div key={k} style={{ opacity: op, whiteSpace: "nowrap" }}>
                  <span style={{ color: t.accent }}>{k}</span><span style={{ color: t.ink }}>{v}</span>
                </div>
              );
            })}
          </div>
          <div style={{ fontFamily: MONO, fontSize: 30, color: t.accent, opacity: arrow }}>→</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, opacity: cols }}>
            <NextSkillCol t={t} label="data" body="certifies SRM, assignment integrity and CUPED — growth designs and interprets on top of it, never re-teaches the mechanics" appear={cols} />
            <NextSkillCol t={t} label="marketing" body="proposes the hypothesis growth tests — growth never reports the readout as marketing's own finding" appear={cols} />
            <NextSkillCol t={t} label="operate" body="owns the standing rollout threshold; growth owns the metric bound to one tested change's decision" appear={cols} />
          </div>
        </div>
        <div style={{ marginTop: 30, fontFamily: MONO, fontSize: 18, color: t.ink, opacity: cap, textAlign: "center", maxWidth: 920, lineHeight: 1.5 }}>
          what actually happened — and <span style={{ color: t.accent }}>what a significant result is actually worth</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- persistent chrome + master timeline ----------------------------------------
const BOUNDS = [210, 500, 840, 1180, 1470, 1710];
const LABELS = ["gate", "halving", "the tax", "route", "cuped", "handoff"];

const PhaseBar: React.FC<{ t: Theme; frame: number }> = ({ t, frame }) => {
  const active = Math.max(0, BOUNDS.findIndex((b) => frame < b));
  return (
    <div style={{ position: "absolute", bottom: 34, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 15 }}>
      {LABELS.map((l, i) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? t.accent : t.line, scale: String(i === active ? 1.3 : 1) }} />
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontSize: 12, fontWeight: 600, color: i === active ? t.ink : t.muted, opacity: i === active ? 1 : 0.55 }}>{l}</div>
        </div>
      ))}
    </div>
  );
};

export const HeroAnimation: React.FC<{ theme: ThemeName }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = themes[theme];

  const intro = step(frame, 0, 14);
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const master = Math.min(intro, outro);
  const glow = interpolate(Math.sin(frame / 90), [-1, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: t.bg, fontFamily: SANS }}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 82% 16%, color-mix(in srgb, ${t.accent} 13%, transparent), transparent 44%), radial-gradient(circle at 8% 92%, color-mix(in srgb, ${t.dim} 10%, transparent), transparent 48%)`, opacity: glow }} />
      <AbsoluteFill style={{ opacity: master }}>
        <Sequence durationInFrames={210}><SceneGate t={t} dur={210} /></Sequence>
        <Sequence from={210} durationInFrames={290}><SceneHalving t={t} dur={290} /></Sequence>
        <Sequence from={500} durationInFrames={340}><SceneAmbitionTax t={t} dur={340} /></Sequence>
        <Sequence from={840} durationInFrames={340}><SceneRoute t={t} dur={340} /></Sequence>
        <Sequence from={1180} durationInFrames={290}><SceneCuped t={t} dur={290} /></Sequence>
        <Sequence from={1470} durationInFrames={240}><SceneHandoff t={t} dur={240} /></Sequence>
        <PhaseBar t={t} frame={frame} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
