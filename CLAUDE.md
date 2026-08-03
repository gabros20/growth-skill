# Claude Code repository guide

This is the released `growth-skill` (runtime skill `growth`, under `skills/growth/`). Read
[AGENTS.md](AGENTS.md) for the ownership boundary and non-negotiable invariants — especially: run
the feasibility gate before designing any test, carry provenance with every figure, and never
re-teach `data`'s measurement-validity mechanics (SRM/CUPED/peeking are cited, not restated). This
skill does not own measurement validity (`data`), demand and channels (`marketing`), pricing-tier
design (`product`), rollout ramps and flags (`operate`), page composition (`design`), cold
outbound (`sales`), or retention execution and the NRR/GRR figure's definition (`success` — growth
reads the retention trend; success owns the figure's definition and the renewal motion, per the
2026-08-03 family ruling).

Run `scripts/check-sync` before any release. Keep `SKILL.md` the router; keep versions out of it.
