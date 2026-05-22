import { WORKFLOW } from '../data/content.js';

export default function Workflow() {
  return (
    <section id="workflow">
      <p className="section-label reveal">ml-lifecycle</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        End-to-End <span style={{ color: 'var(--tertiary)' }}>ML Lifecycle</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 520, marginBottom: '5rem', transitionDelay: '.1s' }}>
        My approach to every model, from raw data to deployed, monitored solution.
      </p>

      <div className="workflow-track reveal" style={{ transitionDelay: '.2s' }}>
        {WORKFLOW.map((s) => (
          <div className="wf-step" key={s.num}>
            <div className="wf-num">{s.num}</div>
            <div>
              <div className="wf-label">{s.label[0]}<br />{s.label[1]}</div>
              <div className="wf-sub">{s.sub[0]}<br />{s.sub[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
