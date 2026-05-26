import { SKILL_CATEGORIES } from '../data/content.js';
import SkillsBubbleCanvas from './SkillsBubbleCanvas.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label reveal">skills</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '0.75rem' }}>
        What I Bring<br /><span style={{ color: 'var(--tertiary)' }}>to the Table</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 520, marginBottom: '4rem', transitionDelay: '.1s' }}>
        Full-stack technical capability with real operational depth.
      </p>

      <div className="skills-outer">
        <div className="reveal" style={{ transitionDelay: '.15s' }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-title">{cat.title}</div>
              {cat.items.map((s) => (
                <div className="skill-item" key={s.name} data-w={s.w}>
                  <span className="skill-name">{s.name}</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-bar-fill" style={{ '--w': s.w, transform: 'scaleX(var(--w, 0))' }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ transitionDelay: '.25s' }}>
          <div className="skills-canvas-wrap">
            <SkillsBubbleCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
