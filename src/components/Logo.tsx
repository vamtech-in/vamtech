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
}: LogoProps) {
  const height = size === 'sm' ? 32 : size === 'lg' ? 56 : 42;

  return (
    <div className={`flex flex-col items-start select-none ${className}`} style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <svg
        height={height}
        viewBox="0 0 380 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', maxWidth: '100%', height: 'auto', maxHeight: height }}
      >
        <defs>
          {/* V Gradient: Vibrant Coral Orange */}
          <linearGradient id="vGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#FF3366" />
          </linearGradient>

          {/* A Gradient: Pink to Magenta */}
          <linearGradient id="aGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1493" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>

          {/* Dot Gradient */}
          <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>

          {/* M Gradient: Violet to Electric Blue */}
          <linearGradient id="mGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          {/* Tech Gradient: Vibrant Electric Azure */}
          <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072FF" />
            <stop offset="100%" stopColor="#00B4D8" />
          </linearGradient>

          {/* Divider Gradient */}
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0080FF" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 'V' */}
        <path
          d="M 12 18 L 32 68 C 34 73 40 73 42 68 L 62 18"
          stroke="url(#vGrad)"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 'A' */}
        <path
          d="M 72 68 L 92 18 C 94 13 100 13 102 18 L 122 68"
          stroke="url(#aGrad)"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* A's Inner Dot */}
        <circle cx="97" cy="54" r="7.5" fill="url(#dotGrad)" />

        {/* 'M' */}
        <path
          d="M 134 68 L 134 18 C 134 14 137 13 140 16 L 157 44 C 158 46 161 46 162 44 L 179 16 C 182 13 185 14 185 18 L 185 68"
          stroke="url(#mGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vertical Divider */}
        <line
          x1="202"
          y1="12"
          x2="202"
          y2="74"
          stroke="url(#dividerGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* 'Tech' Text */}
        <text
          x="215"
          y="65"
          fill="url(#techGrad)"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="500"
          fontSize="56"
          letterSpacing="-0.5px"
        >
          Tech
        </text>

        {/* Tagline: TECHNOLOGY • SOLUTIONS • INNOVATION */}
        {showTagline && (
          <text
            x="32"
            y="94"
            fill="#CBD5E1"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="600"
            fontSize="10.5"
            letterSpacing="5.8px"
            opacity="0.9"
          >
            TECHNOLOGY <tspan fill="#FF5E3A">•</tspan> SOLUTIONS <tspan fill="#E01A8A">•</tspan> INNOVATION
          </text>
        )}
      </svg>
    </div>
  );
}
