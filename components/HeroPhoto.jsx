'use client';

import { useEffect, useRef } from 'react';
import { PROFILE_PHOTO_B64 } from '../data/images.js';

// Interactive pixel-scatter portrait — only updates particles that are actually moving.
// Idle particles (no force, at origin) skip the per-frame math entirely.
export default function HeroPhoto() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const photoCanvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!photoCanvas || !wrap) return;
    const ctx = photoCanvas.getContext('2d');
    const GRID = 4;                  // pixel block size — 4× faster than GRID=2
    const R = 80;
    const R2 = R * R;
    let particles = [];
    let photoMouse = { x: -9999, y: -9999 };
    let isHovered = false;
    let raf = 0;
    let visible = true;
    const BG_R = 18, BG_G = 20, BG_B = 20;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    function initPhoto() {
      if (!img.complete || img.naturalWidth === 0) return;
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      if (W === 0 || H === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);  // cap DPR
      photoCanvas.style.width = W + 'px';
      photoCanvas.style.height = H + 'px';
      photoCanvas.width = W * dpr;
      photoCanvas.height = H * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const tmp = document.createElement('canvas');
      tmp.width = W; tmp.height = H;
      const tCtx = tmp.getContext('2d');
      const ar = img.width / img.height;
      const targetAr = W / H;
      let dW, dH, dx0, dy0;
      if (ar > targetAr) {
        dH = H; dW = H * ar; dx0 = (W - dW) / 2; dy0 = 0;
      } else {
        dW = W; dH = W / ar; dx0 = 0; dy0 = (H - dH) * 0.40;
      }
      tCtx.drawImage(img, dx0, dy0, dW, dH);
      const id = tCtx.getImageData(0, 0, W, H);
      particles = [];
      const cx = W / 2, cy = H / 2;
      for (let y = 0; y < H; y += GRID) {
        for (let x = 0; x < W; x += GRID) {
          const i = (y * W + x) * 4;
          const gray = Math.round(id.data[i] * 0.299 + id.data[i + 1] * 0.587 + id.data[i + 2] * 0.114);
          const a = id.data[i + 3] / 255;
          const ex = (x - cx) / cx;
          const ey = (y - cy) / cy;
          const er = Math.sqrt(ex * ex + ey * ey);
          let edgeFade = 1;
          if (er > 0.62) edgeFade = Math.max(0, 1 - (er - 0.62) / 0.42);
          edgeFade = edgeFade * edgeFade;
          if (edgeFade < 0.02) continue;
          const finalAlpha = a * edgeFade;
          const blendR = Math.round(BG_R + (gray - BG_R) * finalAlpha * 0.92);
          const blendG = Math.round(BG_G + (gray - BG_G) * finalAlpha * 0.92);
          const blendB = Math.round(BG_B + (gray - BG_B) * finalAlpha * 0.92);
          particles.push({
            ox: x, oy: y, x, y, vx: 0, vy: 0,
            color: 'rgba(' + blendR + ',' + blendG + ',' + blendB + ',' + finalAlpha.toFixed(2) + ')'
          });
        }
      }
      if (!raf) animPhoto();
    }

    function animPhoto() {
      if (!visible) {
        raf = 0;
        return;
      }
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      const mx = photoMouse.x, my = photoMouse.y;
      const hover = isHovered;

      for (let i = 0, n = particles.length; i < n; i++) {
        const p = particles[i];
        const ax = p.x - p.ox;
        const ay = p.y - p.oy;
        const vsq = p.vx * p.vx + p.vy * p.vy;

        // Fast-path: particle at rest and mouse not over — just draw, skip physics.
        if (!hover && vsq < 0.001 && ax * ax + ay * ay < 0.01) {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, GRID - 1, GRID - 1);
          continue;
        }

        if (hover) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0) {
            const d = Math.sqrt(d2);
            const f = ((R - d) / R) * 5.5;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }
        p.vx += (p.ox - p.x) * 0.07;
        p.vy += (p.oy - p.y) * 0.07;
        p.vx *= 0.80; p.vy *= 0.80;
        p.x += p.vx; p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, GRID - 1, GRID - 1);
      }
      raf = requestAnimationFrame(animPhoto);
    }

    img.onload = initPhoto;
    img.onerror = () => {
      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      if (W === 0 || H === 0) return;
      photoCanvas.width = W; photoCanvas.height = H;
      ctx.fillStyle = '#b6c4ff';
      ctx.font = 'bold ' + Math.round(W * 0.28) + 'px Space Grotesk,sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('NPD', W / 2, H / 2);
    };
    img.src = PROFILE_PHOTO_B64;

    const onResize = () => {
      clearTimeout(photoCanvas._t);
      photoCanvas._t = setTimeout(initPhoto, 200);
    };
    window.addEventListener('resize', onResize);

    const onMove = (e) => {
      const r = photoCanvas.getBoundingClientRect();
      photoMouse.x = (e.clientX - r.left) * (wrap.offsetWidth / r.width);
      photoMouse.y = (e.clientY - r.top) * (wrap.offsetHeight / r.height);
    };
    const onEnter = () => { isHovered = true; };
    const onLeave = () => { isHovered = false; photoMouse.x = -9999; photoMouse.y = -9999; };

    photoCanvas.addEventListener('mousemove', onMove);
    photoCanvas.addEventListener('mouseenter', onEnter);
    photoCanvas.addEventListener('mouseleave', onLeave);

    // Pause animation when hero is scrolled off-screen
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        animPhoto();
      }
    }, { threshold: 0 });
    io.observe(photoCanvas);

    return () => {
      window.removeEventListener('resize', onResize);
      photoCanvas.removeEventListener('mousemove', onMove);
      photoCanvas.removeEventListener('mouseenter', onEnter);
      photoCanvas.removeEventListener('mouseleave', onLeave);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual">
      <div className="hero-photo-wrap" ref={wrapRef}>
        <canvas id="photo-canvas" ref={canvasRef} />
        <div className="photo-hint">✦ &nbsp;HOVER TO INTERACT</div>
      </div>
    </div>
  );
}
