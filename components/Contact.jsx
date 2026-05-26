import { CONTACT } from '../data/content.js';

const ICONS = {
  mail: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  )
};

export default function Contact() {
  return (
    <section id="contact">
      <div className="reveal">
        <div className="contact-avail">
          <div className="contact-avail-dot" />
          Open to new opportunities
        </div>
      </div>

      <p className="section-label reveal" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>contact</p>
      <h2 className="t-headline-lg reveal" style={{ marginBottom: '1rem', transitionDelay: '.1s' }}>
        Got an Opportunity?<br /><span style={{ color: 'var(--tertiary)' }}>Let&apos;s Talk.</span>
      </h2>
      <p className="t-body-lg reveal" style={{ color: 'var(--on-surface-var)', maxWidth: 480, margin: '0 auto 1.5rem', transitionDelay: '.15s' }}>
        {CONTACT.blurb}
      </p>

      <a href={`mailto:${CONTACT.email}`} className="contact-email reveal" style={{ transitionDelay: '.2s' }}>
        {CONTACT.email}
      </a>

      <div className="contact-links reveal" style={{ transitionDelay: '.25s' }}>
        {CONTACT.links.map((l) => (
          <a key={l.label} href={l.href} target={l.icon === 'mail' ? undefined : '_blank'} rel={l.icon === 'mail' ? undefined : 'noopener noreferrer'} className="contact-link">
            {ICONS[l.icon]}
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
