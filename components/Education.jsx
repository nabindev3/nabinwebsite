import { EDUCATION } from '../data/content.js';

export default function Education() {
  return (
    <section id="education">
      <p className="section-label reveal">education</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Academic<br /><span style={{ color: 'var(--tertiary)' }}>Foundation</span>
      </h2>

      <div className="edu-grid reveal" style={{ marginTop: '3rem', transitionDelay: '.1s' }}>
        {EDUCATION.degrees.map((d) => (
          <div className="edu-card" key={d.year + d.degree}>
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
          {EDUCATION.certs.map((c) => (
            <div key={c} className="cert-item">{c}</div>
          ))}
        </div>
      </div>

      <div className="reveal" style={{ transitionDelay: '.3s' }}>
        <div className="lang-grid" style={{ marginTop: 0 }}>
          {EDUCATION.languages.map((l) => (
            <div className="lang-card" key={l.name}>
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
