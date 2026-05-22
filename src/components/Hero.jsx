import { HERO } from '../data/content.js';
import HeroDots from './HeroDots.jsx';
import HeroPhoto from './HeroPhoto.jsx';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <HeroDots />

      <div className="hero-text">
        <div className="hero-meta">
          <div className="hero-status">
            <div className="hero-status-dot" />
            <span>{HERO.status}</span>
          </div>
        </div>

        <h1 className="hero-name">{HERO.name}</h1>
        <h2 className="hero-role">{HERO.role}</h2>

        <div className="hero-rule" />

        <p className="hero-desc" dangerouslySetInnerHTML={{ __html: HERO.desc }} />

        <div className="hero-tags">
          {HERO.tags.map((t) => (
            <span key={t} className="hero-tag-chip">{t}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            View My Work
          </a>
          <a href="mailto:nabinprasaddev33@gmail.com" className="btn-ghost">Get In Touch</a>
        </div>
      </div>

      <HeroPhoto />

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>/ scroll</span>
      </div>
    </section>
  );
}
