'use client';

import { useState } from 'react';
import { EXPERIENCE } from '../data/content.js';

function TimelineItem({ item, delay = 0 }) {
  return (
    <div className="tl-item reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="tl-left">
        <div className="tl-date">{item.date}</div>
        <div className="tl-loc">{item.loc}</div>
      </div>
      <div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-company">{item.company}</div>
        <ul className="tl-bullets">
          {item.bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
        <div className="tl-tags">
          {item.tags.map((t) => (
            <span key={t} className="tl-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState('tech');

  return (
    <section id="experience">
      <p className="section-label reveal">experience</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Where I&apos;ve Been,<br /><span style={{ color: 'var(--tertiary)' }}>What I&apos;ve Built</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 560, marginBottom: '3.5rem', transitionDelay: '.1s' }}>
        A career spanning national research institutes, data engineering, and high-stakes operational leadership. Technical depth meets real-world execution.
      </p>

      <div className="reveal" style={{ transitionDelay: '.2s' }}>
        <div className="tabs-nav">
          <button className={`tab-btn${tab === 'tech' ? ' active' : ''}`} onClick={() => setTab('tech')}>/ engineering &amp; research</button>
          <button className={`tab-btn${tab === 'ops'  ? ' active' : ''}`} onClick={() => setTab('ops')}>/ operational leadership</button>
        </div>
      </div>

      <div className={`tab-panel${tab === 'tech' ? ' active' : ''}`}>
        <div className="timeline">
          {EXPERIENCE.tech.map((item, i) => (
            <TimelineItem key={item.company} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <div className={`tab-panel${tab === 'ops' ? ' active' : ''}`}>
        <div className="timeline">
          {EXPERIENCE.ops.map((item, i) => (
            <TimelineItem key={item.company} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
