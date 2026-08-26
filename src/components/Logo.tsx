'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export default function Logo({ className = '', size = 'md', inverted = false }: LogoProps) {
  const heightMap = { sm: 24, md: 30, lg: 38, xl: 46 };
  const height = heightMap[size];

  const primaryColor = inverted ? '#ffffff' : '#041738';
  const accentBlue = '#0062ff';

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
      <svg
        height={height}
        viewBox="0 0 340 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', height: `${height}px`, width: 'auto' }}
      >
        {/* === OFFICIAL VAM GLYPH === */}
        {/* Left 'V' downstroke */}
        <path
          d="M10 12 L38 12 L70 64 L50 64 Z"
          fill={primaryColor}
        />

        {/* Diagonal V/M stroke */}
        <path
          d="M32 12 L52 12 L84 64 L64 64 Z"
          fill={primaryColor}
        />

        {/* Central Vibrant Electric Blue Triangle (The 'A') */}
        <polygon
          points="58,64 88,64 73,34"
          fill={accentBlue}
        />

        {/* M: Arch & right legs */}
        <path
          d="M74 12 C88 12 98 22 102 34 L118 64 L102 64 L90 38 C86 30 80 26 72 26 L66 26 L74 12 Z"
          fill={primaryColor}
        />
        <path
          d="M102 12 C116 12 126 22 130 34 L146 64 L130 64 L118 38 C114 30 108 26 100 26 L94 26 L102 12 Z"
          fill={primaryColor}
        />

        {/* === "Tech" WORDMARK (Crisp Geometric Display Typography) === */}
        <text
          x="160"
          y="58"
          fill={primaryColor}
          fontFamily="system-ui, -apple-system, sans-serif, 'Plus Jakarta Sans'"
          fontSize="56"
          fontWeight="800"
          letterSpacing="-0.03em"
        >
          Tech
        </text>
      </svg>
    </span>
  );
}





