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
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.05)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'var(--gradient-primary)',
          boxShadow: '0 0 10px rgba(224, 26, 138, 0.7), 0 0 5px rgba(0, 102, 255, 0.7)',
          transition: 'width 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      />
    </div>
  );
}
