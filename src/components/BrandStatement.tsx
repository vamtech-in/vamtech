'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const headlineWords = [
    'We', 'help', 'growing', 'businesses', 'build', 'software', 'that', 'runs', 'itself.'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress when the section travels through the viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="brand-statement-section" id="about">
      <div className="editorial-container">
        <div className="brand-statement-grid">
          {/* 8-Column Heading with Progressive Scroll Word Highlight */}
          <h2 className="statement-headline">
            {headlineWords.map((word, idx) => {
              const wordThreshold = idx / headlineWords.length;
              const isRevealed = scrollProgress >= wordThreshold;

              return (
                <span
                  key={`${word}-${idx}`}
                  className="word-reveal"
                  style={{
                    color: isRevealed ? 'var(--text-primary)' : '#BCBCB5',
                    transition: 'color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'inline-block',
                    marginRight: '0.28em',
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h2>

          {/* 4-Column Supporting Copy */}
          <div className="statement-subcopy">
            <p>
              Websites, apps and CRMs that just work — with clarity, speed and no drama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
