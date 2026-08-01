# Evaluation fixtures

Three suites test three different questions independently:

- `routing/`: given a prompt, does growth reach the smallest sufficient set of reference files —
  including declining to answer, and pointing at the right sibling pack, when the question is
  genuinely `data`'s, `marketing`'s, `operate`'s, `product`'s, or `design`'s? Cases use
  `expected_references` / `forbidden_references` for growth's own files, and `expected_decline_to`
  for boundary cases where the correct behavior is a routed decline rather than a growth artifact.
- `stats-cases/`: does the content of `experiment-design-and-feasibility.md`,
  `experiment-readout-and-learning.md`, and `quasi-experiments.md` actually change model behavior
  on realistic feasibility-gate, peeking, and quasi-experiment prompts? The first four cases were
  drafted by the writer of those three files against their shipped content; the fifth extends the
  same bar to `quasi-experiments.md`.
- `never-ship/`: does the model avoid reproducing a disclaimed figure from the research gate's
  never-ship table — even inside a correction of it? The family's standing rule: **a disclaimed
  figure is still a figure.** Cases carry a
  `forbidden_strings` list checked against the full response text in addition to graded
  `assertions`; a hit on any `forbidden_strings` entry is an automatic fail regardless of what the
  surrounding prose says. The first case is modeled directly on the incumbent eval this run
  verified as genuinely good — `coreyhaines31/marketingskills`' dedicated peeking case
  (`skills/ab-testing/evals/evals.json:36-48`, 42.6k★) — credited, not copied verbatim; the
  remaining eight cover the rest of the never-ship table's highest-traffic bait figures (flat
  sample-size floors, blended win/fail rates, unattributable vendor outcome claims, and dollar/
  percentage figures repeated across the ecosystem with inconsistent values).

Replace or extend any case with a realistic prompt as the pack's own usage surfaces new failure
modes. Keep `expected`/`forbidden` fields explicit so a routing or compliance regression is
diagnosable from the fixture alone, without re-reading the reference files.
