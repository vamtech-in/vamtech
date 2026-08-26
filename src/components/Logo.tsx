import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  inverted?: boolean;
}

export default function Logo({ className = '', size = 'md', inverted = false }: LogoProps) {
  const width = { sm: 138, md: 176, lg: 232, xl: 300 }[size];

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 0,
        ...(inverted ? { backgroundColor: '#ffffff', borderRadius: '8px', padding: '7px 9px' } : {}),
      }}
    >
      <img
        src="/vamtech-logo-new.png"
        alt="VAMTech"
        width={width}
        height={Math.round(width / 3)}
        style={{ display: 'block', width: `${width}px`, height: 'auto', maxWidth: '100%' }}
      />
    </span>
  );
}
