import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  inverted?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  showTagline = true,
  inverted = false,
}: LogoProps) {
  // Dimensions for different sizes
  const dimensions = {
    sm: { width: 140, height: showTagline ? 41 : 30 },
    md: { width: 184, height: showTagline ? 54 : 40 },
    lg: { width: 230, height: showTagline ? 67 : 50 },
    xl: { width: 290, height: showTagline ? 85 : 63 },
  }[size];

  const taglineColor = inverted ? 'rgba(255, 255, 255, 0.75)' : '#475569';
  const dividerColor = inverted ? 'rgba(255, 255, 255, 0.85)' : '#0062FF';
  const techColor = inverted ? '#ffffff' : '#0062FF';

  const viewBox = showTagline ? '0 0 460 135' : '0 0 460 102';

  return (
    <div
      className={`inline-flex flex-col items-start select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textDecoration: 'none',
        lineHeight: 1,
      }}
    >
      <svg
        viewBox={viewBox}
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: 'block', overflow: 'visible', maxWidth: '100%', height: 'auto' }}
        aria-label="VAMTech — Technology • Solutions • Innovation"
      >
        <defs>
          {/* Gradient for V: Bright Orange to Coral Pink */}
          <linearGradient id="vamV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="60%" stopColor="#FF334B" />
            <stop offset="100%" stopColor="#FF1E62" />
          </linearGradient>

          {/* Gradient for A: Hot Pink/Magenta to Violet */}
          <linearGradient id="vamA" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FA006E" />
            <stop offset="65%" stopColor="#C800A1" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>

          {/* Gradient for M: Violet/Purple to Electric Royal Blue */}
          <linearGradient id="vamM" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8338EC" />
            <stop offset="50%" stopColor="#5E43F3" />
            <stop offset="100%" stopColor="#0062FF" />
          </linearGradient>

          {/* Tech Gradient */}
          <linearGradient id="vamTech" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0052FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>

        <g>
          {/* Letter V */}
          <path
            d="M 22 36 L 56 90 C 58 94 66 94 68 90 L 102 36"
            fill="none"
            stroke="url(#vamV)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter A */}
          <path
            d="M 112 90 L 144 36 C 146 32 154 32 156 36 L 188 90"
            fill="none"
            stroke="url(#vamA)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Circle in A */}
          <circle cx="150" cy="78" r="9.5" fill="#FF4400" />

          {/* Letter M */}
          <path
            d="M 200 90 L 200 40 C 200 33 209 33 213 40 L 229 64 C 231 67 235 67 237 64 L 253 40 C 257 33 266 33 266 40 L 266 90"
            fill="none"
            stroke="url(#vamM)"
            strokeWidth="14.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical Separator Divider */}
          <line
            x1="285"
            y1="28"
            x2="285"
            y2="98"
            stroke={dividerColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Wordmark: Tech */}
          <text
            x="298"
            y="92"
            fontFamily="var(--font-sans), 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="68"
            fontWeight="500"
            fill={techColor}
            letterSpacing="-0.5px"
          >
            Tech
          </text>

          {/* Subtitle / Tagline */}
          {showTagline && (
            <text
              x="230"
              y="126"
              fontFamily="var(--font-sans), 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="11.5"
              fontWeight="600"
              letterSpacing="3.4px"
              textAnchor="middle"
              fill={taglineColor}
            >
              TECHNOLOGY <tspan fill="#FF6B00" fontWeight="700"> • </tspan> SOLUTIONS <tspan fill="#FA006E" fontWeight="700"> • </tspan> INNOVATION
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
