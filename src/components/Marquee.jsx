import { MARQUEE } from '../data/content.js';

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]; // duplicate for seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i} className="marquee-item">{m}</span>
        ))}
      </div>
    </div>
  );
}
