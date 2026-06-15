'use client';

import { useEffect, useRef } from 'react';

// Custom cursor: a tight dot and a trailing ring. Both follow the pointer
// through a single requestAnimationFrame lerp loop, so the easing continues
// smoothly even after the last mousemove event (event-driven lerp snaps to
// rest the instant the mouse stops). Position and scale are written as one
// transform — no width/height/left/top — to stay off the layout path.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Respect reduced-motion: pin to the pointer with no trailing lerp.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;  // mouse target
    let dx = mx, dy = my;   // dot position
    let rx = mx, ry = my;   // ring position (trails)
    let dotScale = 0.5, ringScale = 0.5;          // current scale
    let targetScale = 0.5, pressed = false;        // hover/press intent
    let raf = 0;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove, { passive: true });

    // Hover intent via event delegation, so dynamically added nodes work too.
    const HOT = 'a, button, .pill, .tl-tag, .hero-tag-chip, .nav-cta, .gallery-nav-btn, .tab-btn';
    const onOver = (e) => { if (e.target.closest(HOT)) targetScale = 1; };
    const onOut  = (e) => { if (e.target.closest(HOT)) targetScale = 0.5; };
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });

    const onDown = () => { pressed = true; };
    const onUp   = () => { pressed = false; };
    document.addEventListener('mousedown', onDown, { passive: true });
    document.addEventListener('mouseup', onUp, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;

    function frame() {
      // Dot tracks tightly; ring trails for a weighted, fluid feel.
      dx = lerp(dx, mx, reduce ? 1 : 0.35);
      dy = lerp(dy, my, reduce ? 1 : 0.35);
      rx = lerp(rx, mx, reduce ? 1 : 0.16);
      ry = lerp(ry, my, reduce ? 1 : 0.16);

      const press = pressed ? 0.82 : 1;
      dotScale = lerp(dotScale, targetScale * press, 0.25);
      ringScale = lerp(ringScale, targetScale * press, 0.2);

      dot.style.transform  = `translate3d(${dx}px, ${dy}px, 0) translate(-50%,-50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%) scale(${ringScale})`;
      ring.style.opacity = targetScale > 0.6 ? '1' : '0.7';

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div id="cur-dot" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
