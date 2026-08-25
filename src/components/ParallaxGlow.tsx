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
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Orb 1: Orange/Coral (moves at 0.15 speed) */}
      <div
        className="glow-orb orb-orange"
        style={{
          top: '5%',
          left: '-5%',
          transform: `translate3d(0, ${scrollY * 0.18}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Orb 2: Magenta/Pink (moves at -0.12 speed) */}
      <div
        className="glow-orb orb-pink"
        style={{
          top: '40%',
          right: '-8%',
          transform: `translate3d(0, ${scrollY * -0.14}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Orb 3: Electric Azure (moves at 0.22 speed) */}
      <div
        className="glow-orb orb-blue"
        style={{
          top: '75%',
          left: '15%',
          transform: `translate3d(0, ${scrollY * 0.12}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
