import { useEffect } from 'react';

// Adds the `.in` class to any `.reveal` element as soon as it touches
// the bottom of the viewport. threshold: 0 (any pixel visible) keeps
// tall sections from staying invisible on mobile.
export function useReveal() {
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.skill-item').forEach((si) => si.classList.add('in'));
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-item').forEach((el) => skillObs.observe(el));

    // Safety net: after 1.2s, force-reveal anything still hidden (covers
    // edge cases where Observer never fires on iOS, slow loads, etc.)
    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
      document.querySelectorAll('.skill-item:not(.in)').forEach((el) => el.classList.add('in'));
    }, 1200);

    return () => {
      revealObs.disconnect();
      skillObs.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
