// src/components/GameShowcase/ShotViewer.jsx
import { useState } from 'react';

export default function ShotViewer({ shots }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = shots[activeIndex];

  return (
    <>
      <div className="shot-viewer">
        {active.image ? (
          <img src={active.image} alt={active.label} loading="lazy" decoding="async" />
        ) : (
          // Placeholder de texto mientras no haya imagen real
          <div className="shot-placeholder">{active.label}</div>
        )}
        <div className="shot-counter">
          {String(activeIndex + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
        </div>
      </div>

      <div className="shot-thumbs">
        {shots.map((shot, i) => (
          <div
            key={shot.id}
            className={`t${i === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(i)}
          >
            {shot.image ? (
              <img src={shot.image} alt={shot.label} loading="lazy" decoding="async" />
            ) : (
              <div className="thumb-placeholder" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
