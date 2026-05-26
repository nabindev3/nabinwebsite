import { RESEARCH } from '../data/content.js';

export default function Research() {
  return (
    <section id="research">
      <p className="section-label reveal">research</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Thinking Out<br /><span style={{ color: 'var(--tertiary)' }}>Loud</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 520, marginBottom: '4rem', transitionDelay: '.1s' }}>
        Applying technical knowledge to real-world policy questions and exploring the intersection of AI with human experience.
      </p>

      <div className="research-grid reveal" style={{ transitionDelay: '.2s' }}>
        {RESEARCH.map((r) => (
          <div className="research-card" key={r.title}>
            <div className="research-type">{r.type}</div>
            <div className="research-title">{r.title}</div>
            <p className="research-abstract">{r.abstract}</p>
            <div className="research-tags">
              {r.tags.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
