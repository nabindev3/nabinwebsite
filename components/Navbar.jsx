'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../data/content.js';

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Active route tracked separately so scroll-driven URL changes
  // (history.replaceState in FullPage) keep the nav highlight in sync
  const [activeRoute, setActiveRoute] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Real Next route changes (clicks)
  useEffect(() => {
    setActiveRoute(pathname);
    setOpen(false);
  }, [pathname]);

  // Scroll-driven URL changes from FullPage
  useEffect(() => {
    const onRouteSync = (e) => setActiveRoute(e.detail);
    window.addEventListener('np:routechange', onRouteSync);
    return () => window.removeEventListener('np:routechange', onRouteSync);
  }, []);

  const isActive = (href) => {
    if (href === '/') return activeRoute === '/';
    return activeRoute === href || activeRoute.startsWith(href + '/');
  };

  return (
    <>
      <nav id="navbar" className={`site-nav${compact ? ' compact' : ''}`}>
        <Link href="/" className="nav-logo" aria-label="Nabin Prasad Dev — Home">
          <img className="nav-logo-mark" src="/favicon-32.png?v=4" alt="" width="32" height="32" />
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
          <li><Link href="/contact" className={`nav-cta${isActive('/contact') ? ' active' : ''}`}>Let&apos;s Chat</Link></li>
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
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}
