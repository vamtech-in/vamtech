'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-accent-500) 0%, var(--color-accent-600) 50%, var(--color-blue-500) 100%)',
          boxShadow: '0 0 12px rgba(255, 107, 53, 0.6), 0 0 4px rgba(0, 168, 232, 0.8)',
          transition: 'width 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}

