# remotion — hero animation

The hero animation for the **growth** skill's site. 16:9, 57s, loops.

The palette in [`src/theme.ts`](src/theme.ts) mirrors `site/index.html`'s `:root` tokens
exactly, so the video reads as part of the page in both light and dark.

## Commands

```bash
npm i                     # install (node_modules is gitignored)
npm run dev               # Remotion Studio preview
```

Render the two theme variants + poster stills into the site (paths are relative to this dir):

```bash
npx remotion render hero-light ../site/assets/hero-light.mp4 --codec=h264 --crf=23
npx remotion render hero-dark  ../site/assets/hero-dark.mp4  --codec=h264 --crf=23
npx remotion still hero-light ../site/assets/hero-light-poster.png --frame=815
npx remotion still hero-dark  ../site/assets/hero-dark-poster.png  --frame=815
```

The page (`site/index.html`) swaps `hero-{light,dark}.mp4` on theme change and falls back to
the poster PNG (and to the CSS router card) when video/motion is unavailable. Pick the poster
`--frame` on the most representative diagram beat, not frame 0.

Rendered videos are multi-megabyte binaries. If `git push` fails with HTTP 400, raise the buffer
for that push: `git -c http.postBuffer=524288000 push`.

## Pace every scene for a reader, not the author

The single most common defect in these videos is switching too fast: a scene's text finishes
animating in and the fade-out starts immediately, so a first-time viewer never gets to read it.
Build each scene as three explicit phases:

```text
animate IN  →  HOLD fully still (a reading beat)  →  fade OUT
```

- Size the **hold** to the text: ~2.3s for a short line, up to ~4s for a dense grid or code block.
  Read the scene aloud at a natural pace; that is the floor.
- Compute duration as `dur = content-in-end + reading-hold + fade`. The fade-out must begin at
  `dur − fade`, **after** every element has finished appearing — never at or before the last element
  lands.
- Verify before a full render: `npx remotion still <id> <out> --frame=N` at the middle of each hold,
  and confirm the scene is complete and legible.

## Scene map (this composition)

1. **gate** (0–210) — the naive instinct ("we don't have enough traffic") corrected into the gate
   asked before a hypothesis exists.
2. **halving** (210–500) — the power table: halving the detectable effect quadruples the traffic
   needed, three bars on a disclosed sqrt scale.
3. **the tax** (500–840) — the flagship centerpiece: the Ambition Tax (winner's-curse haircut ×
   small-sample bet-size pressure, multiplying not cancelling) plus the Bayes posterior table.
4. **route** (840–1180) — the faceted router: one job of twelve × one base surface of four, plus
   two additive overlays.
5. **cuped** (1180–1470) — CUPED graded honestly: real variance reduction on the primary result,
   under 5% on revenue-per-user by the same paper's own numbers, and its two failure modes for new
   users and retention.
6. **handoff** (1470–1710) — the feasibility verdict, OEC, decision rule and haircut, handed to
   `data`, `marketing`, and `operate`.
