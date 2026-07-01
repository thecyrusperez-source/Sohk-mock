# AGENTS.md — Thump House Boxing Academy

Handoff + working instructions for the next agent (Codex) continuing this project.
Codex reads this file automatically. Read it fully before making changes.

---

## 1. What this is

A **single-file, framework-free marketing landing page** for **Thump House Boxing Academy**
(Miami · EST. '25). Aesthetic: Miami street-luxury — **chrome, oxblood, and black**, dark and
cinematic, generous negative space. The entire site is **`index.html`** (inline CSS + vanilla JS).
Deploys as static files (GitHub Pages).

## 2. Golden rules (do NOT break these)

- **One self-contained `index.html`.** No frameworks, no build step, no bundler. The only
  external resources are Google Fonts (**Oswald** display + **Inter** body). Keep CSS in the
  `<style>` block and JS in the inline `<script>`.
- **Real data & rights-cleared assets only.** Do **NOT** fabricate history, stats, records, or
  testimonials. Do **NOT** hotlink or embed Instagram / BoxRec / press / Getty images — they are
  not licensed for this site. Roster photos must be first-party, rights-cleared files dropped
  into `assets/roster/`.
- **Accessibility & responsiveness are non-negotiable.** Mobile-first, semantic HTML, `alt` text,
  visible focus states, and **every animation must respect `prefers-reduced-motion`** (there is a
  `@media (prefers-reduced-motion:reduce)` guard — extend it whenever you add motion).
- **Keep copy honest.** Placeholder copy is intentionally labeled; don't invent replacements —
  leave `[ EDIT ]` markers until the client provides real text.

## 3. Repo layout

```
index.html                         ← THE ENTIRE SITE (edit here)
assets/
  logo/thump-house-logo-white.png  ← real transparent PNG logo, in use (hero + footer)
  roster/                          ← drop rights-cleared portraits here (see its README.md)
  roster/README.md                 ← EXACT expected photo filenames
  video/                           ← drop looping B&W hero clip here (see its README.md)
  video/README.md
.github/workflows/static.yml       ← GitHub Pages deploy, triggers on push to `main`
README.md                          ← human-facing project readme
```

> **Ignore the `src/`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`,
> and `public/fighters/*` files.** They are an **orphaned Vite/React scaffold from a previous,
> unrelated project (SOHK)** and are NOT part of this static page. `public/fighters/fighter-*.jpg`
> are old sample photos that were explicitly rejected — do not use them. Don't wire the page to any
> of this; don't spend time on it. (Leave it in place unless the user asks to remove it.)

## 4. `index.html` architecture — where things live

- **Design tokens:** `:root` at the top of `<style>` — colors (`--oxblood`, `--chrome`, `--blue`
  electric-ring accent used sparingly, `--black`, etc.), fonts (`--display`, `--body`), spacing,
  and `--ease` (shared easing curve). Reuse these; don't hardcode new values.
- **Section order:** fixed `nav` → `header.hero` → `#house` (The House) → `#roster` → `#training`
  (Programs) → `#contact` → `footer`.
- **Roster data (most common edit):** in the inline `<script>`, `COACHES` and `FIGHTERS` arrays.
  Each entry: `{ name, role, tag, t, ig, cred, photo }` where `t` is the tag style
  (`''` coach / `'pro'` oxblood / `'am'` blue), `ig` is the Instagram handle (no `@`, `''` to hide),
  `cred` is the one-line credential, `photo` is the filename under `assets/roster/`.
  - `initials(name)` derives the chrome **monogram fallback** (strips nicknames in quotes + Jr/Sr).
  - `card(p)` renders a card; a real photo replaces the monogram (B&W, reveals to color on hover);
    `onerror="this.remove()"` drops the `<img>` back to the monogram if the file is absent.
- **Scroll reveals:** elements with class `.reveal` fade up via `IntersectionObserver`
  (reduced-motion → shown instantly). Roster cards are observed after render.
- **Hero intro (CSS-only):** `@keyframes thumpIn` (logo drops in + settles — the "Thump" impact),
  `heroRise` (tagline + buttons cascade in, staggered delays), `impactGlow` (faint landing bloom
  on `.hero-impact`). All disabled under reduced-motion. Tune timing via the `animation` delays.
- **Demo booking form:** `#bookForm` is a **labeled demo** with no backend — it only shows a
  confirmation string. If asked to make it live, wire it to the client's booking tool / email.

## 5. Placeholders to fill (search the file)

- Search **`CLIENT:`** — comments marking video, copy, address, and contact swap-ins.
- Search **`[ EDIT ]`** — hero tagline, "The House" story (2 paragraphs), program copy/levels,
  and contact **address / hours / phone**. Instagram is `@thumphouseboxing_`.

## 6. Assets still needed from the client

- **Roster portraits** → `assets/roster/` using the **exact filenames** in
  `assets/roster/README.md`. Until added, each card shows a chrome monogram (this is fine/intended).
- **Hero video** → `assets/video/hero.mp4` (+ optional `hero.webm`), muted seamless loop; it is
  auto-treated to black & white by CSS. Until added, a cinematic CSS backdrop shows.

## 7. Roster entries to confirm before launch

Names/roles are drawn from public research and kept conservative. Confirm spelling, role, and IG
handle with the gym for these provisional entries:
**Oriol Martinez, Osvaldo "Tito" Bourzac, Kevin "Teddy" Castillo, Kevin Padron, Ethan Alexander.**

## 8. Run / preview / verify

- Simplest: open `index.html` in a browser.
- Automated check (Chromium is pre-installed — **do NOT run `playwright install`**):
  launch Playwright with `executablePath: '/opt/pw-browsers/chromium'`. Render at **desktop
  (1280w)** and **mobile (390w)**. To verify accessibility, create a context with
  `reducedMotion: 'reduce'` and confirm the logo, tagline, and buttons are all fully visible
  with `opacity:1` / `transform:none` and no animation.
- Missing roster photos / hero video will log `ERR_FILE_NOT_FOUND` — that is **expected**
  (graceful fallbacks handle it), not a bug.

## 9. Git & deploy

- Active branch: **`claude/thump-house-landing-sfcl15`**. Do all work here.
- **Never push to `main` without explicit permission.** Push with
  `git push -u origin claude/thump-house-landing-sfcl15` (retry with backoff on network errors).
- **Deploy = merge to `main`** → `.github/workflows/static.yml` publishes to GitHub Pages.
- **No PR is open yet.** Open one only when the user asks.
- Match the existing commit style (concise subject + body; keep the `Co-Authored-By` trailer).

## 10. State as of this handoff

Done: full page built (all sections); hero logo finalized (see below); "Thump" hero intro
animation added; responsive + reduced-motion verified in Chromium; pushed to the feature branch.

**Logo note (important context):** the client's first upload was a JPEG with the transparency
flattened into a gray/white **checkerboard**, so an early version was algorithmically keyed out of
that checker (rough edges). It has since been **replaced with the client's real transparent PNG**
(`assets/logo/thump-house-logo-white.png`, clean alpha) — that current file is correct; don't
re-key anything. This white line-art mark is just **"THUMP HOUSE" + gloves** (no "BOXING ACADEMY /
EST '25 / stars" text — that was a different chrome version).

## 11. Suggested next steps

1. Drop in rights-cleared roster photos and the hero video (Section 6).
2. Fill the `[ EDIT ]` / `CLIENT:` placeholder copy and contact details (Section 5).
3. Confirm the provisional roster entries (Section 7).
4. Optional: add clean "Boxing Academy" / "EST. '25" text near the hero mark if the client wants
   it (the current logo art omits it).
5. When approved, open a PR / merge to `main` to go live.
