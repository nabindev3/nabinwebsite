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

// Module-level locks to completely prevent scroll-hijacking and performance lag
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

  // Clear existing settle timeouts
  if (programmaticScrollTimeout) {
    clearTimeout(programmaticScrollTimeout);
  }

  // Release scroll locks after scroll finishes (typically within 800ms)
  programmaticScrollTimeout = setTimeout(() => {
    isProgrammaticScroll = false;
    // Dispatch a scroll event to trigger a final url & highlight synchronization
    window.dispatchEvent(new Event('scroll'));
  }, 1000);
}

export default function FullPage() {
  const router = useRouter();
  const didInitialJump = useRef(false);
  useReveal();

  // Initialize pristine, unpatched replaceState via a hidden iframe.
  // Next.js patches history.replaceState, and intercepting it causes route transitions
  // which disrupt active smooth-scrolls. Using the native method completely resolves this.
  // We keep the iframe mounted while the page is alive to prevent scripting context destruction.
  useEffect(() => {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.id = 'native-history-iframe';
      document.body.appendChild(iframe);
      const nativeReplace = iframe.contentWindow.history.replaceState;
      originalReplace = nativeReplace.bind(window.history);
    } catch (e) {
      originalReplace = window.history.replaceState.bind(window.history);
    }
  }, []);

  // Initial load: jump (no animation) to the deep-linked section.
  useEffect(() => {
    if (didInitialJump.current) return;
    const id = ROUTE_TO_ID[window.location.pathname];
    if (id) {
      const raf = requestAnimationFrame(() => {
        scrollToId(id, false);
        didInitialJump.current = true;
      });
      return () => cancelAnimationFrame(raf);
    } else {
      didInitialJump.current = true;
    }
  }, []);

  // Handle browser Back/Forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const id = ROUTE_TO_ID[window.location.pathname];
      if (id) {
        scrollToId(id, true);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Explicit scroll requests from the navbar
  useEffect(() => {
    const onScrollRequest = (e) => scrollToId(ROUTE_TO_ID[e.detail], true);
    window.addEventListener('np:scroll-to', onScrollRequest);
    return () => window.removeEventListener('np:scroll-to', onScrollRequest);
  }, []);

  // Update the navbar's active highlight and URL as the user scrolls
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
    
    // Safety updates for dynamic content changes during load
    const t1 = setTimeout(recalculateMetrics, 200);
    const t2 = setTimeout(recalculateMetrics, 1000);

    function update() {
      raf = 0;
      // Skip updates if scrolling was triggered programmatically (e.g. by navbar clicks)
      if (isProgrammaticScroll) return;

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
        // 1. Update active route highlight instantly (lightweight, no frame drops)
        window.dispatchEvent(new CustomEvent('np:routechange', { detail: route }));
        
        // 2. Debounce history URL update until scroll settling (prevents frame drops during scroll)
        if (urlSyncTimeout) {
          clearTimeout(urlSyncTimeout);
        }
        urlSyncTimeout = setTimeout(() => {
          if (window.location.pathname !== route) {
            if (originalReplace) {
              try {
                originalReplace(null, '', route);
              } catch (e) {
                router.replace(route, { scroll: false });
              }
            } else {
              router.replace(route, { scroll: false });
            }
          }
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
