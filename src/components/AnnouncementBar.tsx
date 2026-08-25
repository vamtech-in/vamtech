'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  message?: string;
  badge?: string;
  linkText?: string;
  linkHref?: string;
}

export default function AnnouncementBar({
  badge = 'NEW RELEASE',
  message = 'Monad Pipeline v2.4: Real-time In-Flight Normalization Engine is now Live',
  linkText = 'Read Journal',
  linkHref = '/case-studies',
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      role="banner"
      aria-label="System Announcement"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-parchment)',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 24px',
        position: 'relative',
        zIndex: 110,
        fontFamily: 'var(--font-abc-diatype-mono)',
        fontSize: 'var(--text-body-sm)',
        letterSpacing: 'var(--tracking-body-sm)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          width: '100%',
        }}
      >
        {/* Left / Center announcement string */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              fontWeight: 500,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {badge}
          </span>
          <span style={{ color: 'var(--color-parchment)', opacity: 0.95 }}>
            {message}
          </span>
        </div>

        {/* Right CTA & Close Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <Link href={linkHref} className="btn-white-pill">
            <span>{linkText}</span>
            <ArrowRight size={12} />
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss Announcement"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-parchment)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
