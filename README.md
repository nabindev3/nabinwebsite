# nabinpdev.com

My personal site. Built with Next.js 14 (App Router) and exported as static HTML
to GitHub Pages on the `nabinpdev.com` custom domain.

> [nabinpdev.com](https://nabinpdev.com) · also at [nabindev3.github.io/nabinwebsite](https://nabindev3.github.io/nabinwebsite/)

This started as a single 3,300-line `index.html` file (still preserved under
[`legacy/`](legacy/index.html) for reference), then went through a
Vite + React refactor, then a move to Next.js. Each step is in the commit log
and was driven by something specific I wanted — see
[`docs/decisions.md`](docs/decisions.md) for the reasoning.

## What's in here

A multi-section portfolio: hero, about, skills, ML lifecycle, experience,
projects, research, education, photos, contact. Three of the sections involve
real interactive `<canvas>` work — they're the part I had the most fun with
and also the part that taught me the most about scheduling animation frames.

- `HeroPhoto` — pixel-scatter portrait. Decodes the source JPEG once into a
  particle grid, then runs a per-particle force field around the cursor.
  GRID size controls particle density vs CPU (set to 4 on the live site —
  see [`docs/decisions.md`](docs/decisions.md#hero-pixel-scatter-grid-size)).
- `HeroDots` — mouse-reactive constellation behind the hero text. Computes
  pairwise distance for nearby dots only.
- `SkillsBubbleCanvas` — soft-body bubble physics with O(n²) pair collisions.
  16 bubbles, manageable.

All three IntersectionObserve their own canvas so the animation loop pauses
when scrolled off-screen.

## Stack

| Layer | Pick | Why |
| --- | --- | --- |
| Framework | Next.js 14, App Router | File-based routing per section, easy static export |
| Build mode | `output: 'export'` | Pages is free, my content is static — no reason for SSR |
| UI | React 18 | Already had components from the Vite version, no rewrite |
| Styling | Plain CSS in `app/globals.css` | One stylesheet, design system as `:root` custom props |
| Bootstrap | `react-bootstrap` | Reserved for grid helpers, not actively driving the look |
| Fonts | `next/font/google` (Space Grotesk + Inter) | Self-hosted at build time, no FOIT |
| Hosting | GitHub Pages | Free, fast enough, custom domain support |
| DNS | Cloudflare | Email forwarder lives here too (`hi@nabinpdev.com`) |
| CI | GitHub Actions | One workflow file, builds and deploys on push to `main` |

`framer-motion` was in for a while and got pulled — see
[`docs/decisions.md`](docs/decisions.md#dropped-framer-motion).

## Repo layout

```
app/                Next App Router
  layout.jsx        root layout; mounts <FullPage> once
  globals.css       design system + section styles (~1500 lines, one file on purpose)
  page.jsx          / route stub — content rendered by FullPage in layout
  about/            /about route stub
  skills/, ...      one stub per top-level section
components/         React components
  FullPage.jsx      mounts every section + handles URL <-> scroll sync
  Hero*, Skills*    the canvas-driven pieces
  About/Workflow/   structured content sections
  Experience.jsx    has internal tab state for engineering vs ops timelines
  Navbar.jsx        listens for `np:routechange` events from FullPage
data/
  content.js        all copy, links, KPIs, project metadata
  images.js         base64 photos (legacy from the single-file days; on the
                    todo list to move into public/ for proper caching)
hooks/
  useReveal.js      intersection-observer driven section reveal
  useMediaQuery.js  thin matchMedia wrapper
public/             static assets, favicons, CNAME
legacy/             the original single-file site, archived
docs/               decisions, architecture, known issues — read these
.github/workflows/  CI
```

## Running locally

Node ≥ 18.

```bash
git clone https://github.com/nabindev3/nabinwebsite.git
cd nabinwebsite
npm install
npm run dev          # localhost:3000
```

Static build (what CI produces):

```bash
npm run build        # writes ./out
npx serve out        # serve at localhost:3000 to sanity-check
```

## Editing content

Almost everything routes through [`data/content.js`](data/content.js). Change a
KPI number, swap a project link, reorder skills — components re-read on the
next render. The JSX rarely needs touching unless I'm changing layout.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` runs.

1. `actions/checkout@v5`
2. `actions/setup-node@v5` (Node 24)
3. `npm install` (no lockfile cache — see
   [`docs/decisions.md`](docs/decisions.md#no-npm-lockfile-in-ci))
4. `npm run build` → `./out`
5. `touch out/.nojekyll`
6. `actions/upload-pages-artifact@v5` + `actions/deploy-pages@v5`

`public/CNAME` is copied into `out/` on every build, so the custom domain
sticks across deploys (had to learn this the hard way — see
[`docs/known-issues.md`](docs/known-issues.md)).

## Featured projects

The portfolio links out to the actual code for the projects it talks about:

- **FM Difficulty Probe** — one pipeline tested on Chronos-T5 (TSFM) and
  Pythia (LLM). Two foundation-model families, one predictive null and one
  causal signal. [`fm-difficulty-probe`](https://github.com/nabindev3/fm-difficulty-probe)
- **Cascade Engine** — multi-tier LLM router using a cheap gatekeeper
  + Thompson Sampling for cost-quality routing.
  [`Cascade-Engine`](https://github.com/nabindev3/Cascade-Engine)
- **Hotel Revenue ML Platform** — XGBoost cancellation classifier + N-BEATS /
  Prophet for forecasting. Walk-forward TS-Split, target-leakage features
  audited out before training.
  [`Smart-Hotel-Analytics-`](https://github.com/nabindev3/Smart-Hotel-Analytics-)
  ·
  [live demo](https://smart-hotel-analytics-platform-6ziv.onrender.com/)

## Contact

`hi@nabinpdev.com` — forwarded to my personal inbox via Cloudflare Email
Routing. Also: [LinkedIn](https://www.linkedin.com/in/nabin-prasad-dev-a9a3121b7),
[GitHub](https://github.com/nabindev3).

---

Documentation lives in [`docs/`](docs/):

- [`architecture.md`](docs/architecture.md) — how the URL/scroll sync works and
  why I didn't use a library for it
- [`decisions.md`](docs/decisions.md) — design-decision log
- [`known-issues.md`](docs/known-issues.md) — what's rough and what's next

License: not formally licensed yet. If you want to reuse a chunk, ask first.
