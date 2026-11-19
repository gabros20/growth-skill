# Changelog

All notable changes to **growth** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Queue unreleased changes here.

## [0.2.0] — 2026-11-19

### Added
- SKILL.md **Standalone context check** (before routing): the family's common core (look first,
  size it, ask at most four owner-only questions with recommended answers, decide as the expert,
  never block, record in the LEDGER) and four growth questions (weekly traffic at the step, the one
  metric and who picked it, what may change, the cost of a wrong call); answers feed
  `experiment-design-and-feasibility.md` "1. The gate: can this question be answered here". Offset so
  SKILL.md does not grow (3519 → 3515): the mission's scope list (the Jobs table) and its prior-art
  restatement (the "open at scale" invariant) are cut, the AARRR note and standalone sentence are
  tightened, route step 4 is folded into the invariant and `data` row that already said it, and the
  artifact contract's no-code sentence and the completion bullet's provenance list (both stated
  above them) are cut. Routing eval `standalone-context-check-reaches-feasibility-gate`.
- Family packaging parity: `install.sh` (8 client targets), `.codex-plugin/plugin.json`,
  `scripts/` toolchain (check-sync, lint-skill adapted to the routing/stats-cases/never-ship
  suites, count-skill-tokens), and the repository contract files (AGENTS.md, CLAUDE.md,
  CONTRIBUTING.md, this changelog).
- Artifact-home convention in `SKILL.md`: deliverables default to `digital-product/growth/` at the
  working repository's root.
- The success↔growth retention seam ruling (2026-08-03): growth reads whether retention is
  improving (trend/cohort diagnosis at any unit of analysis); `success` owns the reported NRR/GRR
  figure's definition and the renewal motion — mirrored pointers in
  `funnel-and-cohort-diagnosis.md` and `surface-b2b-sales-assisted.md`.

### Changed
- Eval suites moved from `skills/growth/evals/` to repository-root `evals/` so installs never ship
  eval fixtures (including never-ship figures) into the agent-loaded skill directory.

## [0.1.1] — 2026-08-02

### Fixed
- README visual-guide domain corrected to the shipped alias (canonical name was taken).
- `skew_check.py` listed in the SKILL.md Resources line; family README link for the then-private
  frontend repo pointed at its public site.
- Hero copy rewritten plain-language per review.

## [0.1.0] — 2026-08-02

### Added
- Initial release: faceted-router `growth` skill — jobs × surfaces with additive small-sample and
  agentic overlays, 19 references, 4 runnable self-testing calculators (`power_calc.py`,
  `srm_check.py`, `peeking_table.py`, `skew_check.py`), each validated against a published anchor
  at import time.
- Flagship reference: experiment-design-and-feasibility (the feasibility gate; the Bayes posterior
  on a "significant" winner; the derived power table against vendor floors; the winner's-curse
  haircut; where CUPED fails).
- Behavioral eval suites: routing, stats-cases, never-ship.
- Research corpora + build-gate synthesis in `research/`.

[0.2.0]: https://github.com/gabros20/growth-skill/releases/tag/v0.2.0
[0.1.1]: https://github.com/gabros20/growth-skill/releases/tag/v0.1.1
[0.1.0]: https://github.com/gabros20/growth-skill/releases/tag/v0.1.0
