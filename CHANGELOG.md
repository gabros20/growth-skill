# Changelog

All notable changes to **growth** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
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

[0.1.1]: https://github.com/gabros20/growth-skill/releases/tag/v0.1.1
[0.1.0]: https://github.com/gabros20/growth-skill/releases/tag/v0.1.0
