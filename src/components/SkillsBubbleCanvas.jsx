import { useEffect, useRef } from 'react';

const C_PRIMARY = '#b6c4ff';
const C_ACCENT  = '#7a8fff';
const C_DEEP    = '#4470ff';
const C_MUTED   = '#c4c7c7';
const C_DIM     = '#8e9192';

const SKILLS_DATA = [
  { label: 'Python',          color: C_PRIMARY },
  { label: 'TensorFlow',      color: C_DEEP    },
  { label: 'PyTorch',         color: C_ACCENT  },
  { label: 'GANs',            color: C_PRIMARY },
  { label: 'Scikit-Learn',    color: C_MUTED   },
  { label: 'SQL',             color: C_DIM     },
  { label: 'Deep Learning',   color: C_DEEP    },
  { label: 'Computer Vision', color: C_PRIMARY },
  { label: 'NLP',             color: C_ACCENT  },
  { label: 'Pandas / NumPy',  color: C_MUTED   },
  { label: 'FastAPI',         color: C_PRIMARY },
  { label: 'Docker',          color: C_DEEP    },
  { label: 'MLflow',          color: C_DIM     },
  { label: 'Streamlit',       color: C_ACCENT  },
  { label: 'OpenCV',          color: C_PRIMARY },
  { label: 'Jupyter',         color: C_MUTED   }
];

export default function SkillsBubbleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sCanvas = canvasRef.current;
    if (!sCanvas) return;
    const sCtx = sCanvas.getContext('2d');
    const sMouse = { x: -9999, y: -9999, vx: 0, vy: 0 };
    let raf = 0;
    let bubbles = [];

    class Bubble {
      constructor(skill) {
        const pad = 70;
        this.x = pad + Math.random() * (sCanvas.offsetWidth - pad * 2);
        this.y = pad + Math.random() * (sCanvas.offsetHeight - pad * 2);
        this.vx = (Math.random() - .5) * 3;
        this.vy = (Math.random() - .5) * 3;
        this.label = skill.label;
        this.color = skill.color;
        this.r = Math.max(44, skill.label.length * 4.6);
        this.mass = this.r;
        this.hov = false;
        this.scale = 1;
      }
      update(mx, my, mvx, mvy) {
        const dx = this.x - mx, dy = this.y - my;
        const d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) {
          const f = (140 - d) / 140;
          this.vx += (dx / d) * f * 2.2;
          this.vy += (dy / d) * f * 2.2;
          this.vx += mvx * 0.08;
          this.vy += mvy * 0.08;
        }
        this.vx *= 0.993; this.vy *= 0.993;
        const speed = Math.hypot(this.vx, this.vy);
        if (speed < 0.4) {
          this.vx += (Math.random() - .5) * 0.18;
          this.vy += (Math.random() - .5) * 0.18;
        }
        this.x += this.vx; this.y += this.vy;
        const W = sCanvas.offsetWidth, H = sCanvas.offsetHeight;
        if (this.x - this.r < 0) { this.x = this.r;     this.vx *= -0.9; }
        if (this.x + this.r > W) { this.x = W - this.r; this.vx *= -0.9; }
        if (this.y - this.r < 0) { this.y = this.r;     this.vy *= -0.9; }
        if (this.y + this.r > H) { this.y = H - this.r; this.vy *= -0.9; }
        this.hov = d < this.r + 16;
        this.scale += ((this.hov ? 1.12 : 1) - this.scale) * 0.14;
      }
      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        if (this.hov) { ctx.shadowBlur = 22; ctx.shadowColor = this.color; }
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.hov ? this.color + '1a' : 'rgba(27, 28, 28, 0.85)';
        ctx.fill();
        ctx.lineWidth = this.hov ? 1.5 : 1;
        ctx.strokeStyle = this.color + (this.hov ? 'ff' : '88');
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.fillStyle = this.hov ? '#FFFFFF' : this.color + 'cc';
        ctx.font = "600 12px 'Inter', sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.label, 0, 0);
        ctx.restore();
      }
    }

    function handleCollisions() {
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i], b2 = bubbles[j];
          const dx = b2.x - b1.x, dy = b2.y - b1.y;
          const dist = Math.hypot(dx, dy);
          const minDist = b1.r + b2.r + 2;
          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const nx = dx / dist, ny = dy / dist;
            b1.x -= nx * overlap * 0.5; b1.y -= ny * overlap * 0.5;
            b2.x += nx * overlap * 0.5; b2.y += ny * overlap * 0.5;
            const kx = b1.vx - b2.vx, ky = b1.vy - b2.vy;
            const p = 2 * (nx * kx + ny * ky) / (b1.mass + b2.mass);
            b1.vx -= p * b2.mass * nx; b1.vy -= p * b2.mass * ny;
            b2.vx += p * b1.mass * nx; b2.vy += p * b1.mass * ny;
          }
        }
      }
    }

    function initBubbles() {
      const dpr = window.devicePixelRatio || 1;
      sCanvas.width  = sCanvas.offsetWidth  * dpr;
      sCanvas.height = sCanvas.offsetHeight * dpr;
      sCtx.setTransform(1, 0, 0, 1, 0, 0);
      sCtx.scale(dpr, dpr);
      bubbles = SKILLS_DATA.map((s) => new Bubble(s));
    }
    initBubbles();

    function anim() {
      sCtx.clearRect(0, 0, sCanvas.offsetWidth, sCanvas.offsetHeight);
      handleCollisions();
      bubbles.forEach((b) => b.update(sMouse.x, sMouse.y, sMouse.vx, sMouse.vy));
      bubbles.forEach((b) => b.draw(sCtx));
      sMouse.vx *= 0.75; sMouse.vy *= 0.75;
      raf = requestAnimationFrame(anim);
    }
    anim();

    const onMove = (e) => {
      const r = sCanvas.getBoundingClientRect();
      const nx = e.clientX - r.left;
      const ny = e.clientY - r.top;
      sMouse.vx = nx - sMouse.x;
      sMouse.vy = ny - sMouse.y;
      sMouse.x = nx;
      sMouse.y = ny;
    };
    const onLeave = () => { sMouse.x = -9999; sMouse.y = -9999; };
    const onResize = () => initBubbles();

    sCanvas.addEventListener('mousemove', onMove);
    sCanvas.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    return () => {
      sCanvas.removeEventListener('mousemove', onMove);
      sCanvas.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="skills-canvas" ref={canvasRef} />;
}
