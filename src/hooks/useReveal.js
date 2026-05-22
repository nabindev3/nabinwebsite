import { useEffect } from 'react';

// Adds the `.in` class to any `.reveal` element when it enters the viewport.
// Also triggers `.in` on nested `.skill-item` for the staggered bar fill.
export function useReveal() {
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.skill-item').forEach((si) => si.classList.add('in'));
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.5 });
    document.querySelectorAll('.skill-item').forEach((el) => skillObs.observe(el));

    return () => {
      revealObs.disconnect();
      skillObs.disconnect();
    };
  }, []);
}
