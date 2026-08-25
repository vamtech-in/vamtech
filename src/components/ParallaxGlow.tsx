'use client';

import React, { useEffect, useState } from 'react';

export default function ParallaxGlow() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Wash 1: Coral to Sky Blue (soft halo at top left) */}
      <div
        className="gradient-atmospheric-wash wash-coral-sky"
        style={{
          width: '560px',
          height: '560px',
          top: '-120px',
          left: '-100px',
          opacity: 0.45,
          transform: `translate3d(0, ${scrollY * 0.12}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Wash 2: Sky Blue to Mint (mid page right) */}
      <div
        className="gradient-atmospheric-wash wash-sky-mint"
        style={{
          width: '640px',
          height: '640px',
          top: '35%',
          right: '-140px',
          opacity: 0.4,
          transform: `translate3d(0, ${scrollY * -0.08}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Wash 3: Gold to Coral (lower section) */}
      <div
        className="gradient-atmospheric-wash wash-gold-coral"
        style={{
          width: '520px',
          height: '520px',
          top: '70%',
          left: '10%',
          opacity: 0.35,
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
