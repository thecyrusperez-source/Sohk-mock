# Thump House Boxing Academy — Landing Page

A single-file, production-ready marketing site for **Thump House Boxing Academy**
(Miami · EST. '25). Miami street-luxury aesthetic: chrome, oxblood, and black.

No frameworks, no build step. Open `index.html` in a browser or deploy the repo
to any static host (GitHub Pages is already wired in `.github/workflows/static.yml`).

## Structure

```
index.html                     ← the whole site (inline CSS + vanilla JS)
assets/
  logo/thump-house-logo-white.png   ← chrome logo, keyed to transparent (hero + footer)
  roster/                            ← drop rights-cleared athlete/coach portraits here
  video/                             ← drop the looping B&W hero clip (hero.mp4 / .webm) here
```

## Editing (search `CLIENT:` in `index.html`)

- **Hero video** — add `assets/video/hero.mp4` (+ optional `.webm`). It is auto-treated
  to black & white. Until a file exists, a cinematic CSS backdrop is shown.
- **Copy** — the hero tagline, "The House" story, programs, and contact details are all
  clearly-labeled `[ EDIT ]` placeholders. No history, stats, or testimonials are fabricated.
- **Roster** — names, roles, credentials, and Instagram handles live in the `COACHES` /
  `FIGHTERS` arrays in the inline `<script>`. Each card maps to a photo in `assets/roster/`
  (see `assets/roster/README.md` for the exact filenames) and shows a chrome monogram until
  a real portrait is added.
- **Contact** — address, hours, phone are placeholders; Instagram is `@thumphouseboxing_`.
  The booking form is a **labeled demo** (no backend) — connect it to your booking tool/email.

## Notes on the roster

Profiles are drawn from public sources and kept deliberately conservative. Confirm spelling,
role, and handle with each person before launch. **Photos are not bundled** — Instagram /
BoxRec / press images are not cleared for commercial web use, so each card is wired to a slot
for a first-party, rights-cleared portrait. Entries flagged for internal confirmation:
Oriol Martinez, Osvaldo "Tito" Bourzac, Kevin "Teddy" Castillo, Kevin Padron, Ethan Alexander.

## Accessibility & performance

- Semantic HTML, alt text, focus-visible states, `aria` labels, `prefers-reduced-motion` respected.
- Mobile-first, no external JS/CSS except Google Fonts (Oswald + Inter). Single HTTP document.
