'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Hero from './Hero.jsx';
import Marquee from './Marquee.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Workflow from './Workflow.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Research from './Research.jsx';
import Education from './Education.jsx';
import Photos from './Photos.jsx';
import Contact from './Contact.jsx';
import { useReveal } from '../hooks/useReveal.js';

const ROUTE_TO_ID = {
  '/':           'hero',
  '/about':      'about',
  '/skills':     'skills',
  '/experience': 'experience',
  '/projects':   'projects',
  '/research':   'research',
  '/education':  'education',
  '/photos':     'photos',
  '/contact':    'contact'
};
const ID_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTE_TO_ID).map(([route, id]) => [id, route])
);

// Module-level state, on purpose. Multiple effects coordinate on these flags
// and lifting them into refs makes the JSX side noisier than it needs to be.
//
// isProgrammaticScroll: scroll listener no-ops while window.scrollTo is animating.
// originalReplace:      handle to a clean history.replaceState (see iframe trick below).
let isProgrammaticScroll = false;
let programmaticScrollTimeout = null;
let originalReplace = null;
let urlSyncTimeout = null;

function scrollToId(id, smooth = true) {
  if (!id) return;
  
  if (id === 'hero') {
    isProgrammaticScroll = true;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' });
  } else {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.getElementById('navbar')?.offsetHeight || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navH + 1;
    isProgrammaticScroll = true;
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'instant' });
  }

  if (programmaticScrollTimeout) clearTimeout(programmaticScrollTimeout);

  // Smooth scroll usually settles in 600–800ms. 1s is a generous floor.
  // After release, fire a synthetic scroll so the URL/highlight catches up
  // to where we actually ended.
  programmaticScrollTimeout = setTimeout(() => {
    isProgrammaticScroll = false;
    window.dispatchEvent(new Event('scroll'));
  }, 1000);
}

export default function FullPage() {
  const router = useRouter();
  const didInitialJump = useRef(false);
  useReveal();

  // Grab a clean history.replaceState. Next monkey-patches the one on
  // window.history, and calling the patched version during a smooth scroll
  // sometimes interrupts the scroll. The iframe gives us a separate
  // scripting context where Next never ran, so its history.replaceState is
  // untouched. The iframe has to stay attached — if we remove it, the
  // function we cached starts throwing about a dead realm.
  // TODO: drop this entire mechanism if Next ever exposes a silent URL
  // update primitive (https://github.com/vercel/next.js/discussions/41934)
  useEffect(() => {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.id = 'native-history-iframe';
      document.body.appendChild(iframe);
      const nativeReplace = iframe.contentWindow.history.replaceState;
      originalReplace = nativeReplace.bind(window.history);
    } catch (e) {
      // Sandboxed iframes / strict CSP: fall back to the patched version.
      originalReplace = window.history.replaceState.bind(window.history);
    }
  }, []);

  // First paint: jump (no animation) to whatever route we landed on.
  useEffect(() => {
    if (didInitialJump.current) return;
    const id = ROUTE_TO_ID[window.location.pathname];
    if (id) {
      const raf = requestAnimationFrame(() => {
        scrollToId(id, false);
        didInitialJump.current = true;
      });
      return () => cancelAnimationFrame(raf);
    }
    didInitialJump.current = true;
  }, []);

  // Browser back/forward.
  useEffect(() => {
    const handlePopState = () => {
      const id = ROUTE_TO_ID[window.location.pathname];
      if (id) scrollToId(id, true);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navbar fires this on every click. Cheaper than going through Next's
  // router since we don't actually want a re-render — just a scroll.
  useEffect(() => {
    const onScrollRequest = (e) => scrollToId(ROUTE_TO_ID[e.detail], true);
    window.addEventListener('np:scroll-to', onScrollRequest);
    return () => window.removeEventListener('np:scroll-to', onScrollRequest);
  }, []);

  // Scroll → URL + navbar highlight. Two passes per frame: rebuild section
  // metrics rarely (resize/load), use them on every scroll tick.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
      .filter((s) => ID_TO_ROUTE[s.id]);
    if (!sections.length) return;

    let activeRoute = null;
    let raf = 0;
    let sectionMetrics = [];

    function recalculateMetrics() {
      sectionMetrics = sections.map((s) => {
        const rect = s.getBoundingClientRect();
        return {
          id: s.id,
          top: rect.top + window.scrollY,
          height: rect.height
        };
      });
    }

    recalculateMetrics();
    window.addEventListener('resize', recalculateMetrics);
    window.addEventListener('load', recalculateMetrics);

    // Fonts and the hero canvas can shift section positions after first
    // paint. Recompute a couple of times to absorb that.
    const t1 = setTimeout(recalculateMetrics, 200);
    const t2 = setTimeout(recalculateMetrics, 1000);

    function update() {
      raf = 0;
      if (isProgrammaticScroll) return;  // don't fight our own scroll

      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      const anchorY = navH + (window.innerHeight - navH) * 0.30;
      const docAnchorY = window.scrollY + anchorY;

      let bestId = null;
      let bestDist = Infinity;
      for (const m of sectionMetrics) {
        const sMid = m.top + m.height / 2;
        const dist = Math.abs(sMid - docAnchorY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = m.id;
        }
      }

      const route = ID_TO_ROUTE[bestId];
      if (route && route !== activeRoute) {
        activeRoute = route;
        // Highlight first — fires every section crossing, navbar is cheap.
        window.dispatchEvent(new CustomEvent('np:routechange', { detail: route }));

        // URL update is debounced. If the user scrubs past 4 sections in
        // a second we don't want 4 history entries (or 4 reflows).
        if (urlSyncTimeout) clearTimeout(urlSyncTimeout);
        urlSyncTimeout = setTimeout(() => {
          if (window.location.pathname === route) return;
          if (originalReplace) {
            try { originalReplace(null, '', route); return; } catch (_) {}
          }
          router.replace(route, { scroll: false });  // fallback
        }, 150);
      }
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalculateMetrics);
      window.removeEventListener('load', recalculateMetrics);
      const iframe = document.getElementById('native-history-iframe');
      if (iframe) iframe.remove();
      clearTimeout(t1);
      clearTimeout(t2);
      if (urlSyncTimeout) clearTimeout(urlSyncTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [router]);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Workflow />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Photos />
      <Contact />
    </>
  );
}
