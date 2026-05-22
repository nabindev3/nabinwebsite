import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0;
    const onMove = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
      rx += (e.clientX - rx) * .14;
      ry += (e.clientY - ry) * .14;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const enterables = document.querySelectorAll('a, button, .pill, .tl-tag, .hero-tag-chip');
    const onEnter = () => {
      dot.style.width = '8px'; dot.style.height = '8px';
      ring.style.width = '44px'; ring.style.height = '44px';
      ring.style.opacity = '1';
    };
    const onLeave = () => {
      dot.style.width = '4px'; dot.style.height = '4px';
      ring.style.width = '24px'; ring.style.height = '24px';
      ring.style.opacity = '0.7';
    };
    enterables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      enterables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cur-dot" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
