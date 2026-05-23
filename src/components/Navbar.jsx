import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/content.js';

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={`site-nav${compact ? ' compact' : ''}`}>
        <a href="#hero" className="nav-logo" aria-label="Nabin Prasad Dev — Home">
          <img className="nav-logo-mark" src="/favicon-32.png?v=4" alt="" width="32" height="32" />
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className="nav-cta">Let&apos;s Chat</a></li>
        </ul>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`} id="mob-menu">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}
