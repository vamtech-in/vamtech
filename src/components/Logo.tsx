'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export default function Logo({ className = '', size = 'md', inverted = false }: LogoProps) {
  const heightMap = { sm: 26, md: 32, lg: 40, xl: 48 };
  const height = heightMap[size];

  const primaryColor = inverted ? '#ffffff' : '#031738';
  const accentBlue = '#0059ff';

  return (
    <span
      className={`vamtech-logo-svg ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        userSelect: 'none',
        lineHeight: 1,
      }}
    >
      <svg
        height={height}
        viewBox="0 0 460 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', height: `${height}px`, width: 'auto' }}
      >
        {/* === VAM GLYPH === */}
        {/* Left V stroke */}
        <path
          d="M10 24 L52 24 L102 118 C105 124 102 128 94 128 L66 128 C56 128 48 122 42 110 L10 24 Z"
          fill={primaryColor}
        />

        {/* Electric Blue Triangle 'A' */}
        <polygon
          points="88,124 148,124 118,66"
          fill={accentBlue}
        />

        {/* Connecting V / M Stems */}
        <path
          d="M110 24 L154 24 L204 118 C208 125 204 128 196 128 L168 128 C158 128 150 122 144 110 L110 24 Z"
          fill={primaryColor}
        />
        <path
          d="M152 24 C174 24 196 38 206 58 L238 122 C242 128 238 128 230 128 L204 128 C196 128 190 122 186 114 L162 66 C158 58 150 52 140 52 L128 52 L142 24 Z"
          fill={primaryColor}
        />
        <path
          d="M206 24 C226 24 246 38 256 58 L286 120 C290 128 284 128 276 128 L250 128 C242 128 236 122 232 114 L210 66 C206 58 198 52 188 52 L178 52 L192 24 Z"
          fill={primaryColor}
        />

        {/* === "Tech" WORDMARK === */}
        {/* T */}
        <path
          d="M304 44 L344 44 L344 56 L329 56 L329 128 L315 128 L315 56 L304 56 Z"
          fill={primaryColor}
        />
        {/* e */}
        <path
          d="M374 88 C374 72 362 62 348 62 C333 62 322 74 322 90 C322 106 333 118 349 118 C360 118 368 112 373 103 L361 96 C358 102 354 105 349 105 C341 105 335 99 335 90 L374 90 Z M335 81 C337 74 342 71 348 71 C354 71 360 74 361 81 L335 81 Z"
          fill={primaryColor}
          transform="translate(24, 10)"
        />
        {/* c */}
        <path
          d="M404 74 C399 66 391 62 381 62 C366 62 355 74 355 90 C355 106 366 118 381 118 C391 118 399 113 404 106 L393 98 C389 103 385 106 381 106 C373 106 367 99 367 90 C367 81 373 74 381 74 C385 74 389 77 393 82 L404 74 Z"
          fill={primaryColor}
          transform="translate(24, 10)"
        />
        {/* h */}
        <path
          d="M418 38 L405 38 L405 128 L418 128 L418 90 C418 78 424 72 432 72 C440 72 445 77 445 88 L445 128 L458 128 L458 84 C458 69 448 62 436 62 C428 62 422 66 418 73 L418 38 Z"
          fill={primaryColor}
          transform="translate(24, 0)"
        />
      </svg>
    </span>
  );
}




