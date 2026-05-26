# 🌌 nabinpdev.com

<div align="center">
  <img src="public/favicon-512.png" alt="Nabin Prasad Dev Logo" width="128" height="128" style="border-radius: 50%; box-shadow: 0 4px 20px rgba(180,196,255,0.15);" />
  
  <h3>Nabin Prasad Dev</h3>
  <p><em>AI/ML Engineer · Operations Specialist · Urban Policy Researcher</em></p>

  <p>
    <a href="https://nabinpdev.com"><strong>Explore Live Site →</strong></a>
    ·
    <a href="https://nabindev3.github.io/nabinwebsite/"><strong>GitHub Mirror ↗</strong></a>
  </p>

  <p>A cinematic-noir single-page portfolio engineered with <strong>high-performance canvas simulations</strong>, leak-free ML analytics interfaces, and a robust decoupled scrolling architecture built on <strong>Next.js 14</strong>.</p>
</div>

---

## ✨ Features & Architecture

This portfolio is not a simple static page — it is a production-grade frontend build designed around extreme responsiveness, visual excellence, and zero-compromise runtime performance.

*   🌌 **Constellation Background Canvas (`HeroDots`)**: A real-time, mouse-reactive geometric network particle constellation. Automatically suspends its render threads when scrolled off-screen to preserve CPU cycles.
*   📸 **Interactive Scatter Portrait (`HeroPhoto`)**: High-performance canvas pixel-scattering particle engine that reconstructs his profile photo on hover. Operates on a highly optimized vector grid to minimize draw calls.
*   🧬 **Liquid Physics Canvas (`SkillsBubbleCanvas`)**: Fully interactive HTML5 canvas bubble physics engine reflecting technical expertise.
*   ⚡ **Butter-Smooth Scrolling (Zero-Reflow)**: Decoupled scroll tracking that caches DOM geometries on window resize/load, eliminating browser layout thrashing (`getBoundingClientRect`) during manual scroll frames.
*   🔒 **Iframe Sandbox Navigation Bypass**: Bypasses Next.js App Router's scroll restoration intercepts by using a sandboxed `iframe.contentWindow.history.replaceState` prototype. Updates URLs seamlessly in the background without frame drops or smooth-scroll interruptions.

---

## 🛠️ The Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 14](https://nextjs.org) (App Router) | Static HTML pre-rendering with `output: 'export'` for sub-millisecond loads. |
| **Design System** | Vanilla CSS · HSL Palette | Bespoke cinematic-noir palette, glassmorphism, responsive grid layout. |
| **Libraries** | React 18 · React Bootstrap | Clean component management & structural grid modules. |
| **Typography** | Space Grotesk · Inter | Premium modern geometric fonts via `next/font`. |
| **CI / CD** | GitHub Actions | Automatic static bundling, Jekyll bypass, and instant deployment to Pages. |
| **Hosting** | GitHub Pages · Cloudflare DNS | Edge-network static caching with automated SSL certificates. |

---

## 📂 Codebase Directory

```
.
├── app/                       # Next.js App Router Core
│   ├── layout.jsx             # Global layout & layout-level components
│   ├── template.jsx           # Per-route transitions
│   ├── globals.css            # Cinematic-noir styling tokens
│   └── page.jsx               # Empty stub route (content served in FullPage)
│
├── components/                # Modular React Elements
│   ├── Hero · HeroDots · HeroPhoto      # Canvas-heavy Hero visuals
│   ├── SkillsBubbleCanvas · Skills      # Physics-based interactive canvas
│   ├── About · Workflow · Experience    # Structured content & timelines
│   ├── Projects · Research · Education  # High-impact data cards
│   ├── Photos                           # Drag-to-scroll travel catalog
│   └── Navbar · Footer · Cursor         # Persistent global structures
│
├── data/                      # Single Source of Truth
│   ├── content.js             # copy, metrics, links, & paper abstracts
│   └── images.js              # optimized base64 profile picture
│
├── hooks/                     # Custom Performance Hooks
│   └── useReveal.js           # Intersection Observer scroll trigger
│
├── public/                    # Raw static assets & CNAME rules
└── .github/workflows/         # Automated Next.js Static Pages Deployer
```

---

## 🚀 Local Setup & Development

### Prerequisites
Requires **Node.js ≥ 18** installed on your system.

```bash
# 1. Clone the repository
git clone https://github.com/nabindev3/nabinwebsite.git
cd nabinwebsite

# 2. Install dependencies
npm install

# 3. Spin up local development server
npm run dev
# The website will be available at http://localhost:3000
```

### Production Build & Preview
To run the static export pipeline and compile the static bundle locally:

```bash
npm run build        # Generates pre-rendered HTML/JS bundle into ./out/
npx serve out        # Host and preview the local production static export
```

---

## 📊 High-Impact Projects Featured

*   🔬 **TSFM Routing Probe** — *Label-Free Difficulty Signals & Recalibrated Selective Forecasting for Chronos-T5*  
    *Repo:* [SAE-framework-or-time-series-analysis](https://github.com/nabindev3/SAE-framework-or-time-series-analysis)
*   🧠 **LLM Routing Probe** — *Label-Free Difficulty Signals & Recalibrated Selective QA for Pythia*  
    *Repo:* [llm-sae-difficulty](https://github.com/nabindev3/llm-sae-difficulty)
*   🔀 **Cascade Engine** — *Multi-Tier LLM Inference Router with 60% Cost Reductions*  
    *Repo:* [Cascade-Engine](https://github.com/nabindev3/Cascade-Engine)
*   🏨 **Hotel Revenue ML Platform** — *Production-Grade forecasting & XGBoost cancellation engine*  
    *Repo:* [Smart-Hotel-Analytics-](https://github.com/nabindev3/Smart-Hotel-Analytics-) · [Live Demo](https://smart-hotel-analytics-platform-6ziv.onrender.com/)

---

## ⚙️ Content Editing Workflow

To update texts, projects, metrics, or links, you **never** need to touch the component code. Simply edit the centralized **`data/content.js`** file. All layouts will dynamically adjust to your updates.

```js
// data/content.js
export const HERO = {
  name: 'Nabin Prasad Dev',
  role: 'AI/ML Engineer.',
  desc: '...'
};
```

---

## 📬 Contact & Networks

*   **Email:** [hi@nabinpdev.com](mailto:hi@nabinpdev.com)
*   **LinkedIn:** [linkedin.com/in/nabin-prasad-dev](https://www.linkedin.com/in/nabin-prasad-dev-a9a3121b7)
*   **GitHub:** [@nabindev3](https://github.com/nabindev3)

---

<div align="center">
  <p>© 2026 Nabin Prasad Dev. All rights reserved.</p>
</div>
