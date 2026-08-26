'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export default function Logo({ className = '', size = 'md', inverted = false }: LogoProps) {
  const fontSizes = { sm: '18px', md: '22px', lg: '28px', xl: '34px' }[size];
  const iconSizes = { sm: 20, md: 24, lg: 30, xl: 36 }[size];

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        fontWeight: 800,
        fontSize: fontSizes,
        letterSpacing: '0.08em',
        color: inverted ? '#ffffff' : '#0c0e12',
        userSelect: 'none',
      }}
    >
      {/* Stylized Electric Blue Blocky Glyph from Reference */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${iconSizes}px`,
          height: `${iconSizes}px`,
          position: 'relative',
        }}
      >
        <svg
          width={iconSizes}
          height={iconSizes}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue geometric M/V badge */}
          <rect x="2" y="4" width="8" height="24" rx="2" fill="#2f54eb" />
          <rect x="22" y="4" width="8" height="24" rx="2" fill="#2f54eb" />
          <path
            d="M10 8L16 18L22 8"
            stroke="#2f54eb"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Brand Text with modern spaced tracking */}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
        <span style={{ fontWeight: 900, textTransform: 'capitalize' }}>Vam</span>
        <span style={{ fontWeight: 600, color: inverted ? '#c0cad6' : '#222831' }}>tech</span>
      </span>
    </span>
  );
}

