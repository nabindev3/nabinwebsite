'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/content.js';

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/');

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-driven URL changes from FullPage
  useEffect(() => {
    const onRouteSync = (e) => setActiveRoute(e.detail);
    window.addEventListener('np:routechange', onRouteSync);
    return () => window.removeEventListener('np:routechange', onRouteSync);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('np:scroll-to', { detail: href }));
    setOpen(false);
  };

  const isActive = (href) => {
    if (href === '/') return activeRoute === '/';
    return activeRoute === href || activeRoute.startsWith(href + '/');
  };

  return (
    <>
      <nav id="navbar" className={`site-nav${compact ? ' compact' : ''}`}>
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="nav-logo"
          aria-label="Nabin Prasad Dev — Home"
        >
          <img className="nav-logo-mark" src="/favicon-32.png?v=4" alt="" width="32" height="32" />
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={isActive(l.href) ? 'active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className={`nav-cta${isActive('/contact') ? ' active' : ''}`}
            >
              Let&apos;s Chat
            </a>
          </li>
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
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleLinkClick(e, l.href)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/contact"
          onClick={(e) => handleLinkClick(e, '/contact')}
        >
          Contact
        </a>
      </div>
    </>
  );
}
