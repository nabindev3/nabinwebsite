# Architecture

The piece that took the most thinking is in `components/FullPage.jsx`. The
rest of the project is basically "Next App Router with one route per section
and a global CSS file." This doc is mostly about that one component, plus
the build pipeline.

## The continuous-scroll model

The portfolio has nine routes (`/`, `/about`, `/skills`, `/experience`,
`/projects`, `/research`, `/education`, `/photos`, `/contact`) but only one
visual "page." Every section mounts at the same time. Routing is about
**scroll position and the URL bar**, not about swapping React trees.

Why I went this way: I tried two other versions first.

### Version A — one page per route (rejected)

Each route file rendered just its own section. Clicking `Projects` in the
navbar navigated to `/projects`, Next remounted, the Projects section
appeared. Clean. But scrolling between sections wasn't possible — you had
to click. Felt unnatural.

### Version B — overscroll-to-navigate (rejected)

Kept one page per route, added an overscroll detector: if you kept scrolling
past the bottom of a page, after 220px of accumulated wheel delta the
router pushed the next route. Worked, but felt janky on trackpads because
trackpad wheel deltas are small and varied. Also showed a "Keep scrolling
for Skills →" chip which I (and the user) ended up disliking.

### Version C — current — all sections on every route

```
app/layout.jsx
  └─ <FullPage />   ← mounts every section once
       ├─ Hero
       ├─ About
       ├─ Skills
       ├─ ...
       └─ Contact
```

`app/about/page.jsx`, `app/projects/page.jsx`, etc. all return `null`. They
exist only so Next.js treats those URLs as real routes (for direct linking
and metadata).

When the route changes (a click on a `<Link>`), `FullPage` reads
`usePathname()`, looks up the matching section ID, and calls
`window.scrollTo()` with `behavior: 'smooth'`.

When the user scrolls, `FullPage` watches scroll position, figures out
which section's vertical midpoint is closest to a target anchor line
(~33% from the top of the viewport), and quietly updates the URL via
`history.replaceState` so that `nabinpdev.com/projects/` becomes the URL
the moment you scroll into the Projects section.

Two effects coordinate this:

```
┌──────────────────────────────┐         ┌─────────────────────────────┐
│ Click /projects in navbar    │         │ User scrolls                 │
└──────────────┬───────────────┘         └─────────────┬────────────────┘
               │                                       │
               ▼                                       ▼
   Next pathname changes              IntersectionObserver-style sweep
               │                       picks the closest section
               ▼                                       │
   FullPage useEffect [pathname]                       ▼
   fires → scrollToId(...)             history.replaceState(route)
                                                       │
                                                       ▼
                                       Custom 'np:routechange' event
                                                       │
                                                       ▼
                                              Navbar updates
                                              active highlight
```

## The Next.js + history.replaceState dance

Calling `history.replaceState` directly from app code in the Next.js App
Router is risky. Next monkey-patches `history.pushState` and
`history.replaceState` so it can keep its internal router state in sync.
Calling the patched version while a smooth scroll is animating can
sometimes interrupt the scroll or trigger a soft re-render.

The workaround currently in `FullPage.jsx` is to grab a "clean"
`replaceState` from a hidden iframe and use that for the scroll-driven URL
sync. The iframe's `window` is a fresh scripting context where Next.js
hasn't patched anything. This is ugly but it's the cleanest fix I found.
If Next ever exposes a "silent URL update" primitive, swap to that.

```js
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
const nativeReplace = iframe.contentWindow.history.replaceState;
originalReplace = nativeReplace.bind(window.history);
```

The iframe stays in the DOM. Destroying it would invalidate the
`replaceState` reference (scripting context death).

## The `np:routechange` event

Why a custom DOM event instead of React Context or Zustand or `useReducer`?

Because the navbar and FullPage are siblings of `layout.jsx`'s children
tree, not children of each other. Lifting state would mean either
introducing a context provider or hoisting state into `layout.jsx`, which
is a server component. A custom event side-steps that — it's about a
hundred lines less code than a `RouteStateProvider` would be, and the
"data" here is a single string. If this ever grows to "I need to share
five things between siblings," I'll lift it into a client provider.

## CI / static export

```
push to main
   │
   ▼
.github/workflows/deploy.yml
   ├─ checkout@v5
   ├─ setup-node@v5 (Node 24, no npm cache — see decisions.md)
   ├─ npm install
   ├─ npm run build           # next build, output: 'export' → ./out
   ├─ touch out/.nojekyll     # let Pages serve _next/ paths
   ├─ upload-pages-artifact@v5 (./out)
   └─ deploy-pages@v5
```

`public/CNAME` (`nabinpdev.com`) is copied verbatim into `out/CNAME` by the
build, so each deploy reasserts the custom domain. Without that file in
`public/`, Pages occasionally drops the domain config back to
`nabindev3.github.io/nabinwebsite/`.

## What I would change next

- Move base64 photo data from `data/images.js` into `public/photos/` so
  the build artifact gets browser-cached properly. The base64 bundle was a
  shortcut from the single-file legacy days and shouldn't outlive it.
- Lazy-mount the heavy canvases. They each have a paused state when
  off-screen, but they still init on first mount (image decode → particle
  grid). On a deep-link to `/contact`, the hero canvas inits even though
  the user will probably never see it. Could defer until first visibility
  with `requestIdleCallback`.
- Consider Lit / vanilla web components for the canvas pieces. They don't
  need React's reconciliation — they reach into the DOM with refs anyway.
  Would shrink the bundle.
