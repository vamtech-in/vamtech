'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonialsData.length;
  const currentTestimonial = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="editorial-container">
        <div className="testimonial-carousel-wrapper">
          {/* Section Header */}
          <div className="testimonial-kicker">Why clients love VAMTech</div>
          <h2 className="testimonial-headline">
            Built for businesses that want things to work.
          </h2>

          {/* Quote Display */}
          <div className="testimonial-quote-box">
            <p className="testimonial-quote-text">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>
          </div>

          {/* Author & Controls Row */}
          <div className="testimonial-author-row">
            <div className="author-info-left">
              <div className="author-avatar-badge">
                {currentTestimonial.avatarText}
              </div>
              <div>
                <h4 className="author-name">{currentTestimonial.clientName}</h4>
                <p className="author-meta">
                  {currentTestimonial.clientRole}, {currentTestimonial.clientCompany}
                </p>
              </div>
            </div>

            {/* Navigation Buttons & Number Indicator */}
            <div className="testimonial-nav-group">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="works-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  style={{ width: '44px', height: '44px' }}
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="works-nav-btn"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  style={{ width: '44px', height: '44px' }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
