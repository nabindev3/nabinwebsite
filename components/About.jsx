import { ABOUT } from '../data/content.js';

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <p className="section-label reveal">about-me</p>
          <h2 className="t-headline-lg reveal" style={{ marginBottom: '2rem' }}>
            Engineer.<br />Researcher.<br /><span style={{ color: 'var(--tertiary)' }}>Urban Thinker.</span>
          </h2>

          <div className="about-text reveal" style={{ transitionDelay: '.1s' }}>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <blockquote className="about-blockquote reveal" style={{ transitionDelay: '.2s' }}>
            {ABOUT.blockquote}
          </blockquote>

          <div className="about-badges reveal" style={{ transitionDelay: '.35s' }}>
            {ABOUT.badges.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>

          <div className="stats-grid reveal" style={{ transitionDelay: '.4s' }}>
            {ABOUT.stats.map((s) => (
              <div key={s.num} className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-side">
          <div className="about-photo reveal" style={{ transitionDelay: '.2s' }}>
            <img src="/nn.jpeg" alt="Nabin Prasad Dev, AI/ML Engineer based in Toronto, Canada" width="800" height="800" loading="lazy" decoding="async" />
          </div>
          <div className="about-info reveal" style={{ transitionDelay: '.3s' }}>
            {ABOUT.info.map((row) => (
              <div key={row.key} className="info-row">
                <span className="info-key">{row.key}</span>
                <span className="info-val" style={row.valStyle}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
