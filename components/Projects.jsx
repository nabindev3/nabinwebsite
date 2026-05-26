import { FEATURED_PROJECTS, PROJECTS } from '../data/content.js';

function FeaturedCard({ p }) {
  return (
    <div className="project-card featured">
      <div>
        <div className="project-meta">
          <span className="project-type">{p.type}</span>
          <span className="project-year">{p.year}</span>
        </div>
        <div className="project-title">{p.title}</div>
        <p className="project-hook">{p.hook}</p>

        <div className="arch-block" style={{ background: 'rgba(180,196,255,0.04)', borderColor: 'rgba(180,196,255,.18)' }}>
          <div className="arch-title">The Problem</div>
          <div className="arch-body" dangerouslySetInnerHTML={{ __html: p.problem }} />
        </div>

        <div className="arch-block">
          <div className="arch-title">The Stack</div>
          <div className="arch-body" dangerouslySetInnerHTML={{ __html: p.stack }} />
        </div>

        <div className="arch-block">
          <div className="arch-title">The Solution</div>
          <div className="arch-body" dangerouslySetInnerHTML={{ __html: p.solution }} />
        </div>

        <div className="project-stack">
          {p.pills.map((pill) => <span key={pill} className="pill">{pill}</span>)}
        </div>

        <div className="project-links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`proj-link${l.primary ? ' primary' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '.75rem' }}>
          {p.impactLabel}
        </div>
        <div className="kpi-row">
          {p.kpis.map((k) => (
            <div className="kpi-cell" key={k.label}>
              <div className="kpi-num">{k.num}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </div>
        <div className="project-result" dangerouslySetInnerHTML={{ __html: p.result }} />
        <p style={{ fontSize: '.78rem', color: 'var(--outline)', lineHeight: 1.65, fontStyle: 'italic' }}>
          {p.tagline}
        </p>
      </div>
    </div>
  );
}

function SmallCard({ p, delay }) {
  return (
    <div className="project-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="project-meta">
        <span className="project-type">{p.type}</span>
        <span className="project-year">{p.year}</span>
      </div>
      <div className="project-title">{p.title}</div>
      <p className="project-hook">{p.hook}</p>
      <p className="project-desc">{p.desc}</p>
      <div className="project-result">{p.result}</div>
      <div className="project-stack">
        {p.pills.map((pill) => <span key={pill} className="pill">{pill}</span>)}
      </div>
      {p.links && p.links.length > 0 && (
        <div className="project-links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`proj-link${l.primary ? ' primary' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label reveal">projects</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        Work That<br /><span style={{ color: 'var(--tertiary)' }}>Matters</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 560, marginBottom: '4rem', transitionDelay: '.1s' }}>
        Each project: Problem → Stack → Solution → Result. Real impact, measurable outcomes.
      </p>

      <div className="projects-grid reveal" style={{ transitionDelay: '.2s' }}>
        {FEATURED_PROJECTS.map((p) => <FeaturedCard key={p.title} p={p} />)}
        {PROJECTS.map((p, i) => <SmallCard key={p.title} p={p} delay={0.05 + i * 0.05} />)}
      </div>
    </section>
  );
}
