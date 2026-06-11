# Decision log

Short notes on choices I made and why. Roughly in the order they happened.

## Why a single `index.html` to start

I started this as one HTML file (now in `legacy/`) because I wanted to see
how far I could get without a build step. The answer is: pretty far — the
old version had the same hero canvas, skills bubble physics, and dot field
that the current one does, all in inline `<script>` tags. The reason I
moved off it was nothing about the rendering: I was hitting the limits of
my own ability to keep ~3,000 lines of JSX-equivalent without a component
model. Editing the navbar meant scrolling past every section.

## Vite → Next.js

I migrated to Vite + React first. That solved the component-organisation
problem cleanly. I picked Next.js after that for two reasons:

1. **File-based routing.** I wanted per-section URLs (`/projects`,
   `/contact`) so that links from a résumé could deep-link, and so each
   section had its own crawlable page title. With Vite this would mean
   pulling in `react-router` and wiring up `<BrowserRouter>` plus a
   server-rewrite rule. Next gives me this for free.
2. **`next/font`.** Self-hosting Google Fonts in Vite is a couple of build
   plugins. In Next it's three lines. I'd rather not own that complexity.

The cost is that Next is heavier — about 100 KB more JS in the initial
bundle. For a portfolio that's an acceptable trade.

## `output: 'export'` (no SSR)

The whole site is static: copy in `data/content.js`, no database, no auth,
no per-request anything. Server rendering would add a hosting bill
(Vercel / Netlify / Render) for zero functional benefit. Static export →
GitHub Pages keeps it free.

Trade-off I accepted: no `next/image` optimization (can't run on Pages),
no `revalidate`, no middleware. The portfolio doesn't need any of those.

## Dropped framer-motion

Was used briefly for fade+slide page transitions when each route had its
own page. After I switched to the all-sections-mounted model
(see [`architecture.md`](architecture.md)), there is no per-route
re-render to animate — the transition is a `scrollTo`. Keeping
framer-motion would have meant ~70KB of dep weight for code that didn't
run. Pulled it.

## Hero pixel-scatter GRID size

The hero portrait is rendered as a particle grid. GRID controls particle
size in CSS pixels.

| GRID | Particles | Look | Cost |
| --- | --- | --- | --- |
| 2 | ~100k | Very smooth gradient | Janky on M1, unusable on older laptops |
| 4 | ~25k | Clear face, slight chunk | ~60fps on M1, ~40fps on a 2018 ThinkPad |
| 6 | ~11k | Visibly tiled | Comfortable everywhere |

Currently set to 4. There's an idle-particle fast path: a particle that
hasn't moved and is at its origin skips the force loop entirely. On a
typical idle frame the hot loop runs over maybe 1–2k particles instead of
the full 25k.

## URL ←→ scroll sync without a library

I considered `react-scroll`, `react-scrollspy`, `lenis`. None of them
worked the way I wanted out of the box because none of them update the
URL via `history.replaceState` *without* triggering a route change in a
Next.js sense — which is what I needed.

Cost of rolling it myself: the iframe trick (see
[`architecture.md`](architecture.md#the-nextjs--historyreplacestate-dance)).
Benefit: I understand exactly what's happening, and I'm not stuck on a
library's release cadence the next time Next changes its router internals.

If maintaining this becomes annoying, the move is probably to drop the URL
sync entirely (just use scroll-spy for the navbar highlight) rather than
to import a library.

## No npm lockfile in CI

CI uses `npm install`, not `npm ci`. I deleted `package-lock.json` during
the Next migration because my local Node was broken (Homebrew icu4c
mismatch) and I couldn't regenerate it cleanly. The trade-off:

- `npm ci` is faster and deterministic but requires a lockfile.
- `npm install` is ~10s slower in CI and lets minor versions float, but
  doesn't require a clean local Node to seed.

For a single-developer static site, the cost of non-determinism is small.
When I have time to regenerate the lockfile from a clean environment, I'll
switch back to `npm ci`. Tracked in
[`known-issues.md`](known-issues.md#no-lockfile-pinned-in-ci).

## Cloudflare for DNS + email forwarder

I have `nabinpdev.com` on Cloudflare Registrar already. Cloudflare's email
routing is free and supports outbound forwarding (`hi@nabinpdev.com` →
my personal Gmail). No outbound SMTP from it, so replying-as is via Gmail
"Send mail as" pointed at ImprovMX as the SMTP backend. This is
documented in `known-issues.md` because it's the kind of thing I will
absolutely forget how to reconfigure when something breaks.

## Linguist overrides

`.gitattributes` marks `legacy/**` as `linguist-vendored` and
`data/images.js` as `linguist-generated`. The first one stops the 956 KB
preserved single-file HTML from making the repo look 89% HTML. The second
stops the base64 photo bundle from artificially inflating the JS count.

Both are honest: that code is real, but it's not work I'd want
contribution stats to amplify or shrink.

## Mobile cursor

The custom cursor (`#cur-dot`, `#cur-ring`) used to render on touch
devices too because `cursor: none` was on `body` unconditionally. On
mobile Safari this seemed to swallow taps occasionally. Now wrapped in
`@media (hover: none), (pointer: coarse)`, which restores the native
cursor on touch. Took a while to chase — it presented as "the contact
button doesn't respond on phones."
