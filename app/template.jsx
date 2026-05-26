'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';

// Linear page order — matches the navbar so scrolling past a route's
// bottom edge auto-advances to the next one.
const PAGE_ORDER = [
  '/', '/about', '/skills', '/experience', '/projects',
  '/research', '/education', '/photos', '/contact'
];
const PAGE_LABEL = {
  '/': 'Home', '/about': 'About', '/skills': 'Skills', '/experience': 'Experience',
  '/projects': 'Projects', '/research': 'Research', '/education': 'Education',
  '/photos': 'Photos', '/contact': 'Contact'
};

const SCROLL_THRESHOLD = 220;   // total wheel/touch delta past edge before navigating
const EDGE_TOLERANCE = 6;       // px from edge that counts as "at the edge"

export default function Template({ children }) {
  useReveal();
  const router = useRouter();
  const pathname = usePathname();
  const lockedRef = useRef(false);
  const accumRef = useRef(0);
  const lastTouchYRef = useRef(null);
  const [edgeHint, setEdgeHint] = useState(null);    // 'next' | 'prev' | null

  // Reset on route change so the new page starts fresh
  useEffect(() => {
    lockedRef.current = false;
    accumRef.current = 0;
    setEdgeHint(null);
    // Direction-aware landing: if user came via "scroll up past top",
    // start the new page at the bottom so scrolling stays continuous.
    if (typeof window !== 'undefined') {
      const dir = sessionStorage.getItem('np_scroll_dir');
      if (dir === 'prev') {
        // Wait one frame so layout settles, then jump to bottom
        requestAnimationFrame(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
        });
      }
      sessionStorage.removeItem('np_scroll_dir');
    }
  }, [pathname]);

  useEffect(() => {
    const idx = PAGE_ORDER.indexOf(pathname);
    if (idx === -1) return;
    const next = PAGE_ORDER[idx + 1];
    const prev = PAGE_ORDER[idx - 1];

    let decayTimer = null;
    const scheduleDecay = () => {
      clearTimeout(decayTimer);
      decayTimer = setTimeout(() => { accumRef.current = 0; setEdgeHint(null); }, 320);
    };

    function atBottom() {
      return window.innerHeight + window.scrollY >= document.body.scrollHeight - EDGE_TOLERANCE;
    }
    function atTop() {
      return window.scrollY <= EDGE_TOLERANCE;
    }

    function navigateTo(href, direction) {
      if (lockedRef.current) return;
      lockedRef.current = true;
      sessionStorage.setItem('np_scroll_dir', direction);
      router.push(href);
    }

    function handleDelta(delta) {
      if (lockedRef.current) return;
      if (delta > 0 && atBottom() && next) {
        accumRef.current += delta;
        setEdgeHint('next');
        if (accumRef.current >= SCROLL_THRESHOLD) navigateTo(next, 'next');
        scheduleDecay();
      } else if (delta < 0 && atTop() && prev) {
        accumRef.current += -delta;
        setEdgeHint('prev');
        if (accumRef.current >= SCROLL_THRESHOLD) navigateTo(prev, 'prev');
        scheduleDecay();
      } else {
        accumRef.current = 0;
        if (edgeHint !== null) setEdgeHint(null);
      }
    }

    function onWheel(e) { handleDelta(e.deltaY); }
    function onTouchStart(e) { lastTouchYRef.current = e.touches[0].clientY; }
    function onTouchMove(e) {
      if (lastTouchYRef.current == null) return;
      const y = e.touches[0].clientY;
      const delta = lastTouchYRef.current - y;   // swipe up = delta > 0 (scroll down)
      lastTouchYRef.current = y;
      handleDelta(delta * 1.2);
    }
    function onTouchEnd() { lastTouchYRef.current = null; }
    function onKey(e) {
      // Only react to key events when not in an input
      if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
      if ((e.key === 'PageDown' || e.key === 'ArrowDown') && atBottom() && next) {
        navigateTo(next, 'next'); e.preventDefault();
      } else if ((e.key === 'PageUp' || e.key === 'ArrowUp') && atTop() && prev) {
        navigateTo(prev, 'prev'); e.preventDefault();
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKey);
      clearTimeout(decayTimer);
    };
  }, [pathname, router, edgeHint]);

  const idx = PAGE_ORDER.indexOf(pathname);
  const nextLabel = PAGE_LABEL[PAGE_ORDER[idx + 1]];
  const prevLabel = PAGE_LABEL[PAGE_ORDER[idx - 1]];
  const progress = accumRef.current / SCROLL_THRESHOLD;

  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>

      {edgeHint === 'next' && nextLabel && (
        <div className="scroll-affordance bottom" aria-hidden="true">
          <span>Keep scrolling for</span>
          <strong>{nextLabel} →</strong>
          <div className="scroll-affordance-bar" style={{ transform: `scaleX(${Math.min(1, progress)})` }} />
        </div>
      )}
      {edgeHint === 'prev' && prevLabel && (
        <div className="scroll-affordance top" aria-hidden="true">
          <span>Keep scrolling for</span>
          <strong>← {prevLabel}</strong>
          <div className="scroll-affordance-bar" style={{ transform: `scaleX(${Math.min(1, progress)})` }} />
        </div>
      )}
    </>
  );
}
