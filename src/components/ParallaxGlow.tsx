'use client';

import React from 'react';

export default function ParallaxGlow() {
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
      {/* Soft atmospheric washes in background */}
      <div
        className="gradient-atmospheric-wash wash-coral-sky"
        style={{
          width: '560px',
          height: '560px',
          top: '-120px',
          left: '-100px',
          opacity: 0.35,
        }}
      />
      <div
        className="gradient-atmospheric-wash wash-sky-mint"
        style={{
          width: '640px',
          height: '640px',
          top: '40%',
          right: '-140px',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
