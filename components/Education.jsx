import { EDUCATION } from '../data/content.js';

export default function Education() {
  return (
    <section id="education">
      <p className="section-label reveal">education</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Academic<br /><span style={{ color: 'var(--tertiary)' }}>Foundation</span>
      </h2>

      <div className="edu-grid" style={{ marginTop: '3rem' }}>
        {EDUCATION.degrees.map((d, i) => (
          <div className="edu-card reveal" key={d.year + d.degree} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
            <div className="edu-accent" />
            <div className="edu-year">{d.year}</div>
            <div className="edu-degree">{d.degree}</div>
            <div className="edu-field">{d.field}</div>
            <div className="edu-school">{d.school}</div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ transitionDelay: '.2s', marginTop: '4rem' }}>
        <div className="certs-heading">certifications &amp; training</div>
        <div className="certs-list">
          {EDUCATION.certs.map((c, i) => (
            <div key={c} className="cert-item reveal" style={{ transitionDelay: `${i * 0.05}s` }}>{c}</div>
          ))}
        </div>
      </div>

      <div className="reveal" style={{ transitionDelay: '.3s' }}>
        <div className="lang-grid" style={{ marginTop: 0 }}>
          {EDUCATION.languages.map((l, i) => (
            <div className="lang-card reveal" key={l.name} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="lang-flag">{l.flag}</div>
              <div className="lang-name">{l.name}</div>
              <div className="lang-level">{l.level}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.78rem', color: 'var(--outline)', marginTop: '1rem', fontStyle: 'italic' }}>
          {EDUCATION.langNote}
        </p>
      </div>
    </section>
  );
}
