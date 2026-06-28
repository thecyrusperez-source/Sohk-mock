# SOHK — School of Hard Knocks

Premium marketing site for a NYC boxing gym. Apple-level craft, old-school energy.

> Built Fighters. Built Different.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS** — design tokens (`pearl`, `ink`, `concrete`, `graphite`, `blueFire`, `emberFire`)
- **Framer Motion** — spring physics, scroll parallax, view-triggered reveals
- **Canvas particles** — handcrafted ember/spark emitter (`src/components/Sparks.jsx`)
- Google Fonts at runtime: Bebas Neue, Inter, Caveat

## Scripts

```bash
npm install
npm run dev      # local dev on http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle
```

## What's here

- `LogoIntro` — hand-sketch SOHK graffiti tag that draws S→O→H→K, fills, then flies to navbar (~1.85s, skipped under `prefers-reduced-motion`).
- `Hero` — two-fighter split with mouse + scroll parallax, blue/orange ember canvases, breathing micro-animation on each fighter.
- `Programs` / `Coach` / `Dogs` / `Schedule` / `Merch` / `Testimonials` / `FinalCTA` / `Footer` — sectioned page, Apple-keynote pacing.
- Fighter photos cropped + JPEG-optimized in `public/fighters/`.

## Notes

The fighter photos are sample images. Swap `public/fighters/fighter-left.jpg` and `fighter-right.jpg` with the actual roster portraits (any aspect ratio — the hero uses `background-size: cover`).
