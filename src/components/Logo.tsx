import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  inverted?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  showTagline = true,
  inverted = false,
}: LogoProps) {
  const fontSize = size === 'sm' ? '20px' : size === 'lg' ? '32px' : '26px';
  const dotSize = size === 'sm' ? 6 : size === 'lg' ? 9 : 8;

  const textColor = inverted ? '#ffffff' : 'var(--color-off-black)';
  const subtextColor = inverted ? '#c5c2c0' : 'var(--color-smoke)';

  return (
    <div
      className={`select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1.1,
      }}
    >
      {/* Brand Wordmark with signature Lake Blue dot */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
        <span
          style={{
            fontFamily: 'var(--font-untitled-serif)',
            fontSize,
            fontWeight: 400,
            letterSpacing: '-0.03em',
            color: textColor,
          }}
        >
          vamtech
        </span>
        <span
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: '50%',
            backgroundColor: 'var(--color-lake-blue)',
            display: 'inline-block',
            marginLeft: '1px',
            marginBottom: '2px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Editorial Monospace Subtitle */}
      {showTagline && (
        <span
          style={{
            fontFamily: 'var(--font-abc-diatype-mono)',
            fontSize: size === 'sm' ? '9px' : '10.5px',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: subtextColor,
            marginTop: '2px',
            fontWeight: 500,
          }}
        >
          ENGINEERING JOURNAL & LABS
        </span>
      )}
    </div>
  );
}
