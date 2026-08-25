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
  // Dimensions
  const dimensions = {
    sm: { width: 145, height: 42, fontSize: '8.5px', letterSpacing: '1.8px' },
    md: { width: 185, height: 54, fontSize: '9.5px', letterSpacing: '2.4px' },
    lg: { width: 240, height: 70, fontSize: '11px', letterSpacing: '3px' },
  }[size];

  const taglineColor = inverted ? 'rgba(255, 255, 255, 0.75)' : '#4e4d4d';

  return (
    <div
      className={`select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textDecoration: 'none',
      }}
    >
      <svg
        viewBox="0 0 380 110"
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: 'block', overflow: 'visible' }}
        aria-label="VAMTech — Technology • Solutions • Innovation"
      >
        <defs>
          {/* Gradient for V: Orange to Coral */}
          <linearGradient id="vamV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6F00" />
            <stop offset="100%" stopColor="#FF2A4D" />
          </linearGradient>

          {/* Gradient for A: Pink/Magenta to Purple */}
          <linearGradient id="vamA" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6007A" />
            <stop offset="100%" stopColor="#8A1FD8" />
          </linearGradient>

          {/* Gradient for M: Purple to Royal Electric Blue */}
          <linearGradient id="vamM" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F22DD" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          {/* Tech Gradient: Royal Blue */}
          <linearGradient id="vamTech" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0055FF" />
            <stop offset="100%" stopColor="#0070FF" />
          </linearGradient>
        </defs>

        <g>
          {/* Letter V */}
          <path
            d="M 20 40 L 46 86 C 49 92 57 92 60 86 L 86 40"
            fill="none"
            stroke="url(#vamV)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter A */}
          <path
            d="M 88 86 L 114 40 C 117 34 125 34 128 40 L 154 86"
            fill="none"
            stroke="url(#vamA)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Circle in A */}
          <circle cx="121" cy="76" r="9.5" fill="#FF4400" />

          {/* Letter M */}
          <path
            d="M 164 86 L 164 42 C 164 34 172 34 176 42 L 189 62 C 193 68 197 68 201 62 L 214 42 C 218 34 226 34 226 42 L 226 86"
            fill="none"
            stroke="url(#vamM)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical Separator Divider */}
          <line
            x1="246"
            y1="34"
            x2="246"
            y2="90"
            stroke={inverted ? '#ffffff' : '#0066FF'}
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity={inverted ? 0.8 : 1}
          />

          {/* Tech Wordmark */}
          {/* T */}
          <path
            d="M 262 44 L 290 44 M 276 44 L 276 86"
            stroke={inverted ? '#ffffff' : 'url(#vamTech)'}
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* e */}
          <path
            d="M 296 66 L 318 66 C 318 53 296 53 296 66 C 296 79 318 80 318 74"
            fill="none"
            stroke={inverted ? '#ffffff' : 'url(#vamTech)'}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* c */}
          <path
            d="M 342 60 C 336 53 324 54 324 66 C 324 78 336 79 342 72"
            fill="none"
            stroke={inverted ? '#ffffff' : 'url(#vamTech)'}
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* h */}
          <path
            d="M 348 42 L 348 86 M 348 62 C 352 54 366 54 366 64 L 366 86"
            fill="none"
            stroke={inverted ? '#ffffff' : 'url(#vamTech)'}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Subtitle / Tagline */}
          {showTagline && (
            <text
              x="190"
              y="106"
              fontFamily="var(--font-abc-diatype-mono), ui-monospace, monospace"
              fontSize="9.5"
              fontWeight="600"
              letterSpacing="2.8"
              textAnchor="middle"
              fill={taglineColor}
            >
              TECHNOLOGY <tspan fill="#FF6F00">•</tspan> SOLUTIONS <tspan fill="#E6007A">•</tspan> INNOVATION
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
