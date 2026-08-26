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
  // Balanced dimensions for each size tier
  const dimensions = {
    sm: { width: 145, height: showTagline ? 42 : 32 },
    md: { width: 190, height: showTagline ? 55 : 42 },
    lg: { width: 245, height: showTagline ? 71 : 54 },
    xl: { width: 310, height: showTagline ? 90 : 68 },
  }[size];

  const taglineColor = inverted ? 'rgba(255, 255, 255, 0.72)' : '#475569';
  const dividerColor = inverted ? 'rgba(255, 255, 255, 0.85)' : '#0062FF';
  const techColor = inverted ? '#ffffff' : '#0062FF';

  const viewBox = showTagline ? '0 0 460 136' : '0 0 460 102';

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
        style={{
          display: 'block',
          overflow: 'visible',
          maxWidth: '100%',
          height: 'auto',
        }}
        aria-label="VAMTech — Technology • Solutions • Innovation"
      >
        <defs>
          {/* Gradient for V: Warm Orange to Red-Pink */}
          <linearGradient id="vamV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="55%" stopColor="#FF2E4C" />
            <stop offset="100%" stopColor="#FF185D" />
          </linearGradient>

          {/* Gradient for A: Hot Magenta-Pink to Royal Violet */}
          <linearGradient id="vamA" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FA006E" />
            <stop offset="60%" stopColor="#B500B8" />
            <stop offset="100%" stopColor="#872CE2" />
          </linearGradient>

          {/* Gradient for M: Vivid Purple to Electric Royal Blue */}
          <linearGradient id="vamM" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8338EC" />
            <stop offset="45%" stopColor="#5B45F5" />
            <stop offset="100%" stopColor="#0062FF" />
          </linearGradient>
        </defs>

        <g>
          {/* Letter V */}
          <path
            d="M 22 35 L 56 91 C 58.5 95 65.5 95 68 91 L 102 35"
            fill="none"
            stroke="url(#vamV)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter A */}
          <path
            d="M 112 91 L 144 35 C 146.5 31 153.5 31 156 35 L 188 91"
            fill="none"
            stroke="url(#vamA)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Circle in A */}
          <circle cx="150" cy="78" r="9" fill="#FF4400" />

          {/* Letter M */}
          <path
            d="M 200 91 L 200 39 C 200 32 209 32 213 39 L 230 65 C 232 68 236 68 238 65 L 255 39 C 259 32 268 32 268 39 L 268 91"
            fill="none"
            stroke="url(#vamM)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical Separator Divider */}
          <line
            x1="288"
            y1="26"
            x2="288"
            y2="98"
            stroke={dividerColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Wordmark: Tech */}
          <text
            x="302"
            y="91"
            fontFamily="var(--font-sans), 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="70"
            fontWeight="500"
            fill={techColor}
            letterSpacing="-0.5px"
          >
            Tech
          </text>

          {/* Subtitle / Tagline: TECHNOLOGY • SOLUTIONS • INNOVATION */}
          {showTagline && (
            <text
              x="230"
              y="127"
              fontFamily="var(--font-sans), 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="11.5"
              fontWeight="600"
              letterSpacing="4.2px"
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
