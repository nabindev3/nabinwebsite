'use client';

import { useEffect, useRef } from 'react';
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

function scrollToId(id, smooth = true) {
  if (!id) return;
  if (id === 'hero') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.getElementById('navbar')?.offsetHeight || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - navH + 1;
  window.scrollTo({ top, behavior: smooth ? 'smooth' : 'instant' });
}

export default function FullPage() {
  const didInitialJump = useRef(false);
  useReveal();

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

  // Explicit scroll requests from the navbar (works even when the user clicks
  // the link for the route they're already on — usePathname wouldn't re-fire).
  useEffect(() => {
    const onScrollRequest = (e) => scrollToId(ROUTE_TO_ID[e.detail], true);
    window.addEventListener('np:scroll-to', onScrollRequest);
    return () => window.removeEventListener('np:scroll-to', onScrollRequest);
  }, []);

  // Update the navbar's active highlight as the user scrolls. We do NOT touch
  // the URL — that avoids fighting Next's internal pathname state and keeps
  // click navigation rock-solid.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
      .filter((s) => ID_TO_ROUTE[s.id]);
    if (!sections.length) return;

    let activeRoute = null;
    let raf = 0;

    function update() {
      raf = 0;
      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      const anchorY = navH + (window.innerHeight - navH) * 0.30;
      let bestId = null;
      let bestDist = Infinity;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        const mid = (r.top + r.bottom) / 2;
        const dist = Math.abs(mid - anchorY);
        if (dist < bestDist) { bestDist = dist; bestId = s.id; }
      }
      const route = ID_TO_ROUTE[bestId];
      if (route && route !== activeRoute) {
        activeRoute = route;
        window.dispatchEvent(new CustomEvent('np:routechange', { detail: route }));
        if (window.location.pathname !== route) {
          window.history.replaceState(null, '', route);
        }
      }
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
