'use client';

import { useEffect, useRef, useState } from 'react';
import { PHOTOS } from '../data/content.js';
import {
  GALLERY_IMG_1, GALLERY_IMG_2, GALLERY_IMG_3,
  GALLERY_IMG_4, GALLERY_IMG_5, GALLERY_IMG_6,
  GALLERY_IMG_7, GALLERY_IMG_8, GALLERY_IMG_9
} from '../data/images.js';

const SRCS = [
  GALLERY_IMG_1, GALLERY_IMG_2, GALLERY_IMG_3,
  GALLERY_IMG_4, GALLERY_IMG_5, GALLERY_IMG_6,
  GALLERY_IMG_7, GALLERY_IMG_8, GALLERY_IMG_9
];

export default function Photos() {
  const galleryRef = useRef(null);
  const trackRef = useRef(null);
  const [pos, setPos] = useState(0);

  // Drag-to-scroll
  useEffect(() => {
    const gallery = galleryRef.current;
    const track = trackRef.current;
    if (!gallery || !track) return;

    let isDown = false;
    let startX = 0;
    let startPos = 0;

    const onDown = (e) => {
      isDown = true;
      gallery.classList.add('dragging');
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
      startPos = pos;
    };
    const onMove = (e) => {
      if (!isDown) return;
      const x = (e.touches ? e.touches[0].clientX : e.clientX);
      const next = startPos + (x - startX);
      const max = 0;
      const min = -(track.scrollWidth - gallery.offsetWidth);
      setPos(Math.min(max, Math.max(min, next)));
    };
    const onUp = () => { isDown = false; gallery.classList.remove('dragging'); };

    gallery.addEventListener('mousedown', onDown);
    gallery.addEventListener('mousemove', onMove);
    gallery.addEventListener('mouseup', onUp);
    gallery.addEventListener('mouseleave', onUp);
    gallery.addEventListener('touchstart', onDown, { passive: true });
    gallery.addEventListener('touchmove', onMove, { passive: true });
    gallery.addEventListener('touchend', onUp);

    return () => {
      gallery.removeEventListener('mousedown', onDown);
      gallery.removeEventListener('mousemove', onMove);
      gallery.removeEventListener('mouseup', onUp);
      gallery.removeEventListener('mouseleave', onUp);
      gallery.removeEventListener('touchstart', onDown);
      gallery.removeEventListener('touchmove', onMove);
      gallery.removeEventListener('touchend', onUp);
    };
  }, [pos]);

  const step = 340;
  const nudge = (dir) => {
    const track = trackRef.current;
    const gallery = galleryRef.current;
    if (!track || !gallery) return;
    const max = 0;
    const min = -(track.scrollWidth - gallery.offsetWidth);
    setPos((p) => Math.min(max, Math.max(min, p + dir * step)));
  };

  return (
    <section id="photos">
      <p className="section-label reveal">photos</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Through<br /><span style={{ color: 'var(--tertiary)' }}>My Lens</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 520, marginBottom: '3.5rem', transitionDelay: '.1s' }}>
        From Kathmandu to Toronto — places that shaped my perspective.
      </p>

      <div className="photo-gallery reveal" ref={galleryRef} style={{ transitionDelay: '.15s' }}>
        <div className="photo-track" ref={trackRef} style={{ transform: `translateX(${pos}px)` }}>
          {PHOTOS.map((p, i) => (
            <div className="photo-item" key={p.caption}>
              <img loading="lazy" decoding="async" src={SRCS[i]} alt={p.alt} style={{ objectPosition: p.objectPosition }} />
              <div className="photo-overlay">
                <div className="photo-caption">{p.caption}</div>
                <div className="photo-location">{p.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-nav reveal" style={{ transitionDelay: '.2s' }}>
        <button className="gallery-nav-btn" aria-label="Previous" onClick={() => nudge(1)}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="gallery-nav-btn" aria-label="Next" onClick={() => nudge(-1)}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <p style={{ textAlign: 'center', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--outline)', marginTop: '1rem' }}>
        ← Drag to explore →
      </p>
    </section>
  );
}
