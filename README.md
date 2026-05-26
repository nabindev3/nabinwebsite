# nabinpdev.com

Personal portfolio of **Nabin Prasad Dev** — AI/ML Engineer & Operational Leader.

🔗 **Live:** [nabinpdev.com](https://nabinpdev.com) · [github.io mirror](https://nabindev3.github.io/nabinwebsite/)

A cinematic-noir multi-page site built around interactive canvas effects, paired-bootstrap research projects, and a hospitality-informed engineering background.

---

## Stack

| Layer | Tooling |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org) (App Router, static export) |
| UI | React 18 · [react-bootstrap](https://react-bootstrap.netlify.app) · custom design system |
| Animation | [framer-motion](https://www.framer.com/motion/) (page transitions) · `<canvas>` (hero pixel-scatter, constellation field, skills physics) |
| Fonts | [next/font](https://nextjs.org/docs/app/api-reference/components/font) — Space Grotesk + Inter |
| Hosting | GitHub Pages on a custom domain (Cloudflare DNS) |
| CI/CD | GitHub Actions — `next build` → `out/` → Pages |

The site is statically exported (`output: 'export'` in `next.config.mjs`), so every route is pre-rendered HTML — instant first paint, no server runtime, free hosting.

---

## Structure

```
.
├── app/                       # Next.js App Router
│   ├── layout.jsx             # Root layout — fonts, Navbar, Footer, BackToTop, Cursor
│   ├── template.jsx           # Per-route framer-motion + reveal observer
│   ├── globals.css            # Cinematic-noir design system
│   ├── page.jsx               # /            (Hero + Marquee)
│   ├── about/page.jsx         # /about
│   ├── skills/page.jsx        # /skills      (Skills + ML Lifecycle)
│   ├── experience/page.jsx    # /experience
│   ├── projects/page.jsx      # /projects
│   ├── research/page.jsx      # /research
│   ├── education/page.jsx     # /education
│   ├── photos/page.jsx        # /photos
│   └── contact/page.jsx       # /contact
├── components/                # All React components ('use client' where needed)
│   ├── Hero · HeroDots · HeroPhoto      # Canvas hero stack
│   ├── SkillsBubbleCanvas · Skills      # Interactive skills bubble physics
│   ├── About · Workflow · Experience    # Static content sections
│   ├── Projects · Research · Education  # Data-driven cards
│   ├── Photos                            # Drag-to-scroll gallery
│   ├── Navbar · Footer · Cursor · BackToTop
│   └── Marquee · Contact
├── data/
│   ├── content.js             # All copy + structured data (single source of truth)
│   └── images.js              # base64 photo bundle (linguist-generated)
├── hooks/
│   ├── useReveal.js           # Intersection-observer reveal animation
│   └── useMediaQuery.js
├── public/                    # Static assets — favicons, CNAME, nn.jpeg
├── legacy/                    # Pre-migration single-file site (linguist-vendored)
├── next.config.mjs            # output: 'export', images.unoptimized, trailingSlash
└── .github/workflows/deploy.yml
```

---

## Local development

Requires **Node ≥ 18**.

```bash
git clone https://github.com/nabindev3/nabinwebsite.git
cd nabinwebsite
npm install
npm run dev          # http://localhost:3000
```

Production build (matches what CI ships):

```bash
npm run build        # outputs to ./out/
npx serve out        # preview the static export
```

---

## Editing content

Almost everything reads from **`data/content.js`** — change copy, KPIs, project lists, education, etc. there and components re-render automatically. No JSX edits required for content updates.

```js
// data/content.js
export const HERO = { name: 'Nabin Prasad Dev', role: '…', tags: […] };
export const FEATURED_PROJECTS = [ { title, problem, stack, solution, kpis, … } ];
export const RESEARCH = [ { type, title, abstract, tags } ];
// …etc
```

---

## Featured projects

- **TSFM Routing Probe** — Label-Free Difficulty Signals & Recalibrated Selective Forecasting for Chronos-T5  
  *Repo:* [SAE-framework-or-time-series-analysis](https://github.com/nabindev3/SAE-framework-or-time-series-analysis)
- **LLM Routing Probe** — Label-Free Difficulty Signals & Recalibrated Selective QA for Pythia
- **Cascade Engine** — Multi-Tier LLM Inference Router  
  *Repo:* [Cascade-Engine](https://github.com/nabindev3/Cascade-Engine)
- **Hotel Revenue ML Platform** — XGBoost + N-BEATS, leak-controlled 81.4% honest AUC  
  *Repo:* [Smart-Hotel-Analytics-](https://github.com/nabindev3/Smart-Hotel-Analytics-) · [Live demo](https://smart-hotel-analytics-platform-6ziv.onrender.com/)

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:

1. `actions/checkout@v5`
2. `actions/setup-node@v5` (Node 24)
3. `npm install`
4. `npm run build` → `out/`
5. `touch out/.nojekyll` (lets GitHub Pages serve Next's `_next/` directory)
6. `actions/upload-pages-artifact@v5`
7. `actions/deploy-pages@v5`

The custom domain survives every deploy because `public/CNAME` (`nabinpdev.com`) is copied verbatim into `out/`.

---

## Contact

**Email:** [hi@nabinpdev.com](mailto:hi@nabinpdev.com) (forwarded to my personal inbox)  
**LinkedIn:** [nabin-prasad-dev](https://www.linkedin.com/in/nabin-prasad-dev-a9a3121b7)  
**GitHub:** [@nabindev3](https://github.com/nabindev3)

---

© 2026 Nabin Prasad Dev.
