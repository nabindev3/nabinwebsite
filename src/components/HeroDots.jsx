import { useEffect, useRef } from 'react';

// Mouse-reactive constellation rendered behind the hero text.
export default function HeroDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const hero = document.getElementById('hero');
    if (!hero) return;
    const ctx = c.getContext('2d');
    const SPACING = 38;
    let dots = [];
    let mx = -9999, my = -9999;
    let raf = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      c.width = hero.offsetWidth * dpr;
      c.height = hero.offsetHeight * dpr;
      c.style.width = hero.offsetWidth + 'px';
      c.style.height = hero.offsetHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      dots = [];
      for (let y = SPACING; y < hero.offsetHeight; y += SPACING) {
        for (let x = SPACING; x < hero.offsetWidth; x += SPACING) {
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, jitter: Math.random() * Math.PI * 2 });
        }
      }
    }
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    let t = 0;
    function anim() {
      ctx.clearRect(0, 0, hero.offsetWidth, hero.offsetHeight);
      t += 0.012;
      const R = 160;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mx, dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < R) {
          const k = (1 - dist / R);
          d.vx += (dx / (dist || 1)) * k * 0.18;
          d.vy += (dy / (dist || 1)) * k * 0.18;
          for (let j = i + 1; j < Math.min(i + 12, dots.length); j++) {
            const e2 = dots[j];
            const ddx = e2.x - d.x, ddy = e2.y - d.y;
            const dd = Math.hypot(ddx, ddy);
            if (dd < SPACING * 1.6) {
              const eDist = Math.hypot(e2.x - mx, e2.y - my);
              const eK = eDist < R ? (1 - eDist / R) : 0;
              const lineA = Math.min(k, eK) * 0.55;
              if (lineA > 0.05) {
                ctx.strokeStyle = `rgba(180,196,255,${lineA})`;
                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(e2.x, e2.y);
                ctx.stroke();
              }
            }
          }
        }
        const breathe = Math.sin(t + d.jitter) * 0.4;
        d.vx += (d.ox - d.x) * 0.06 + breathe * 0.04;
        d.vy += (d.oy - d.y) * 0.06;
        d.vx *= 0.84; d.vy *= 0.84;
        d.x += d.vx; d.y += d.vy;
      }
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mx, dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        const k = dist < R ? (1 - dist / R) : 0;
        const alpha = 0.08 + k * 0.7;
        const size = 1.1 + k * 1.6;
        ctx.fillStyle = `rgba(180,196,255,${alpha})`;
        ctx.fillRect(d.x - size / 2, d.y - size / 2, size, size);
      }
      raf = requestAnimationFrame(anim);
    }
    anim();

    return () => {
      window.removeEventListener('resize', resize);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="hero-dots" ref={canvasRef} />;
}
