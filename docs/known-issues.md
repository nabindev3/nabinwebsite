# Known issues + roadmap

Stuff I'm aware of, in rough priority order.

## Real issues

### Hero canvas still spikes CPU on first paint

The pixel-scatter canvas inits eagerly when `FullPage` mounts, which means
on a deep-link to `/contact` it decodes the source JPEG, builds a 25k
particle grid, and then immediately pauses because it's off-screen. That
init takes ~80–150 ms on a fast laptop and visibly delays the rest of the
page on a slower one.

**Fix:** lazy-init the canvas only after first IntersectionObserver
"enter." Currently the canvas's loop pauses when off-screen, but `initPhoto`
(image decode + particle grid build) runs on `img.onload` regardless of
visibility. Move it behind a `hasEnteredView` flag.

### iOS gallery rubber-band

The drag-to-scroll photo gallery on `/photos` uses `touchmove` listeners to
translate the track. On iOS Safari, fast horizontal swipes occasionally
overshoot the clamp because momentum doesn't end where `touchend` fires.

**Fix:** swap to a CSS-snap horizontal scroller (`overflow-x: auto;
scroll-snap-type: x mandatory`). The custom drag logic is leftover from
the Vite version where I wanted hover-to-pan; touch never benefited.

### No tests

There are no unit tests, no snapshot tests, no Playwright. The most useful
addition would be a single Playwright run that asserts:
- the site mounts and renders the hero name on `/`
- clicking each nav link scrolls to the right section
- direct-linking to `/projects` lands on the projects section
- the build doesn't throw any console errors on initial load

This is a one-evening job and would catch regressions like the BASE_URL
bug that hid the about-section photo for a couple of deploys.

### No lockfile pinned in CI

Documented in [`decisions.md`](decisions.md#no-npm-lockfile-in-ci). The
risk window is roughly "if a dep ships a broken minor version, the next
push deploys broken code." Hasn't happened yet. Will switch to `npm ci`
when I regenerate the lockfile on a clean Node install.

### Contributors panel takes hours to refresh after history rewrite

When I removed an unwanted Co-Authored-By trailer with `git filter-branch`
and force-pushed, the dangling commit stayed in GitHub's contributors
index for a while. There's no API to force-purge it; only opening a
support ticket works immediately. Documented because I'll forget by next
time.

## Cosmetic / nice-to-have

### Bundle size

The base64 photo data in `data/images.js` is ~900 KB and ships with the
JS bundle. Moving each photo to `public/photos/` would let the browser
cache them individually and pull the main JS down ~80%. This is in
[`architecture.md`](architecture.md#what-i-would-change-next) too.

### Skill bars look the same as the bubble canvas

Both communicate skill weight. The bars are a server-rendered
representation that the eye reads first; the canvas physics is more for
fun. They feel redundant. Probably one should go.

### Mobile nav is the desktop menu but bigger

The hamburger overlay is functional but doesn't take advantage of mobile
real estate. A bottom-anchored sheet with a swipe-down dismiss would feel
more native on iOS.

### Linguist still slow to update

After the `.gitattributes` change to mark `legacy/**` as vendored, GitHub
took about a day to re-categorise. Not actionable on my end, just a note.

## Roadmap

Things I want to do, ordered by what I'd benefit most from learning while
building.

1. **Move images to `public/photos/`.** Concrete, scoped, fixes a real cost.
2. **Add Playwright smoke test + run it in CI.** Catches regressions
   cheaply. Probably 1 evening.
3. **Lazy-init canvases.** Performance feels like a feature once you fix
   it. Probably 2 hours.
4. **Replace `Photos` drag logic with CSS snap scroll.** Less code, better
   mobile.
5. **Add a minimal `/api`-like JSON dump** of the projects so the same
   list could feed a printable résumé build.
6. **Lighthouse pass.** Pretty sure CLS and LCP are fine, but I haven't
   actually measured.

Done-and-shipped (kept here as a log so I remember the order I did things in):

- Single-file `index.html` ✅
- Vite + React refactor ✅
- Next.js + per-route page migration ✅
- Continuous-scroll model ✅
- Custom domain + Cloudflare email forwarder ✅
- Node 24 CI bump ✅
- Linguist overrides to fix repo language stats ✅
