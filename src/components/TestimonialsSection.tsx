'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'VAMTech transformed our legacy portal into a high-concurrency cloud architecture with zero downtime. Their velocity and code quality are unmatched.',
    author: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'Fintech Scaleup',
    rating: 5,
    avatar: 'SJ',
  },
  {
    id: 2,
    quote:
      'The engineering pod delivered our entire AI copilot and RAG pipeline 3 weeks ahead of schedule. Truly elite software craftsmanship.',
    author: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    company: 'Nexus Intelligence',
    rating: 5,
    avatar: 'MV',
  },
  {
    id: 3,
    quote:
      'Working with VAMTech feels like having a world-class in-house tech team. Transparent sprint demos, zero fluff, and pristine codebases.',
    author: 'Elena Rostova',
    role: 'Head of Product',
    company: 'HyperCommerce LLC',
    rating: 5,
    avatar: 'ER',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-py testimonials-ref-section" id="testimonials">
      {/* Giant Decorative Quote Watermarks from Reference */}
      <div className="quote-watermark watermark-left">“</div>
      <div className="quote-watermark watermark-right">”</div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-kicker">TESTIMONIALS</span>
          <h2 className="section-title-ref">
            Community love <span className="highlight-pill">us</span>
          </h2>
          <p className="testimonials-subtitle">
            What technical founders, CTOs, and product leaders say about collaborating with our engineering team.
          </p>
        </div>

        {/* 3 White Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Orange Quote Mark Icon */}
              <div className="quote-icon">“</div>

              {/* Star Rating */}
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#ff5722" color="#ff5722" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>

              {/* Author Info */}
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <h4 className="author-name">{t.author}</h4>
                  <p className="author-role">
                    {t.role} • <span style={{ color: '#ff5722' }}>{t.company}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Orange Corner Accent from Reference */}
              <div className="corner-accent" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-ref-section {
          position: relative;
          overflow: hidden;
        }

        .quote-watermark {
          position: absolute;
          font-size: 380px;
          font-weight: 900;
          font-family: serif;
          line-height: 1;
          color: rgba(47, 84, 235, 0.06);
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        .watermark-left {
          top: 0;
          left: -40px;
        }

        .watermark-right {
          bottom: -80px;
          right: -40px;
        }

        .testimonials-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .testimonials-subtitle {
          font-size: 16px;
          color: #556375;
          max-width: 520px;
          line-height: 1.55;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          position: relative;
          background-color: #ffffff;
          border-radius: 20px;
          padding: 32px 28px 36px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(10, 25, 45, 0.05);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(10, 25, 45, 0.09);
        }

        .quote-icon {
          font-size: 42px;
          font-weight: 900;
          font-family: serif;
          color: #ff5722;
          line-height: 0.8;
          margin-bottom: 12px;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .testimonial-text {
          font-size: 14.5px;
          line-height: 1.6;
          color: #2c3848;
          margin-bottom: 24px;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff5722, #ff784e);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
          flex-shrink: 0;
        }

        .author-name {
          font-size: 15px;
          font-weight: 800;
          color: #0c0e12;
          margin-bottom: 2px;
        }

        .author-role {
          font-size: 12px;
          color: #64748b;
        }

        .corner-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, transparent 50%, #ff5722 50%);
          border-bottom-right-radius: 20px;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
