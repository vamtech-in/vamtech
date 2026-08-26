'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export default function Logo({ className = '', size = 'md', inverted = false }: LogoProps) {
  // Height mapping
  const heightMap = { sm: 26, md: 32, lg: 40, xl: 48 };
  const h = heightMap[size];
  const w = Math.round(h * 4.16); // exact aspect ratio of 912x219

  return (
    <span
      className={`vamtech-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        userSelect: 'none',
        lineHeight: 1,
      }}
    >
      <Image
        src={inverted ? '/images/vamtech-logo-white.png' : '/images/vamtech-logo.png'}
        alt="VAMTech"
        width={w}
        height={h}
        priority
        style={{
          height: `${h}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </span>
  );
}






