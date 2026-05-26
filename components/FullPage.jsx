'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
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

// Mapping between route paths and the DOM section that should be in view.
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

export default function FullPage() {
  const pathname = usePathname();
  useReveal();

  // On mount + on real route change (click), scroll to the section
  useEffect(() => {
    const id = ROUTE_TO_ID[pathname];
    if (!id) return;

    // Wait one frame so layout has settled (and Hero canvas has sized)
    const raf = requestAnimationFrame(() => {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          // Subtract the fixed nav height
          const nav = document.getElementById('navbar');
          const navH = nav ? nav.offsetHeight : 0;
          const top = el.getBoundingClientRect().top + window.scrollY - navH;
          window.scrollTo({ top, behavior: 'instant' });
        }
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  // As the user scrolls, swap the URL bar to the route of the section
  // that's most prominently in view. Uses history.replaceState so we
  // don't pollute browser history and don't trigger React re-mounts.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
      .filter((s) => ID_TO_ROUTE[s.id]);
    if (!sections.length) return;

    let currentRoute = pathname;
    let raf = 0;

    function update() {
      raf = 0;
      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      // Anchor line: ~33% from the top of the viewport
      const anchorY = navH + (window.innerHeight - navH) * 0.33;
      let best = null;
      let bestDist = Infinity;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        // Distance from anchor line to mid of section
        const mid = (r.top + r.bottom) / 2;
        const dist = Math.abs(mid - anchorY);
        if (dist < bestDist) { bestDist = dist; best = s; }
      }
      if (!best) return;
      const route = ID_TO_ROUTE[best.id];
      if (route && route !== currentRoute) {
        currentRoute = route;
        window.history.replaceState(null, '', route);
        // Tell the navbar to update its active highlight
        window.dispatchEvent(new CustomEvent('np:routechange', { detail: route }));
      }
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

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
