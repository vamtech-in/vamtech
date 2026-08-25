import React from 'react';

interface AtmosphericWashProps {
  variant?: 'coral-sky' | 'sky-mint' | 'gold-coral' | 'periwinkle-sky';
  size?: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  opacity?: number;
  blur?: number;
}

export default function AtmosphericWash({
  variant = 'coral-sky',
  size = 500,
  top,
  left,
  right,
  bottom,
  opacity = 0.5,
  blur = 70,
}: AtmosphericWashProps) {
  const gradientMap = {
    'coral-sky': 'radial-gradient(circle, rgba(255, 148, 115, 0.75) 0%, rgba(160, 181, 235, 0.45) 55%, transparent 75%)',
    'sky-mint': 'radial-gradient(circle, rgba(160, 181, 235, 0.75) 0%, rgba(167, 252, 205, 0.45) 55%, transparent 75%)',
    'gold-coral': 'radial-gradient(circle, rgba(236, 218, 152, 0.75) 0%, rgba(255, 148, 115, 0.4) 55%, transparent 75%)',
    'periwinkle-sky': 'radial-gradient(circle, rgba(207, 218, 245, 0.8) 0%, rgba(160, 181, 235, 0.4) 60%, transparent 75%)',
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        top,
        left,
        right,
        bottom,
        background: gradientMap[variant],
        filter: `blur(${blur}px)`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        transform: 'translateZ(0)',
      }}
    />
  );
}
