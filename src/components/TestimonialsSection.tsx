'use client';

import React from 'react';
import { Star } from 'lucide-react';

const commitments = [
  {
    id: 1,
    title: 'Direct Senior Developer Access',
    quote:
      'You collaborate directly with the engineers writing your code. Zero bureaucratic middlemen, zero account managers, and zero lost-in-translation requirements.',
    author: 'Direct Communication',
    role: 'Shared Slack & Discord',
    tag: 'NO MIDDLEMEN',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Modern Stack & Clean Code',
    quote:
      'We build exclusively with high-performance modern stacks: Next.js, React, TypeScript, Node.js, and serverless cloud. Zero bloated legacy code or fragile templates.',
    author: 'Clean Architecture',
    role: 'Production-Hardened',
    tag: 'MODERN TECH',
    icon: '🛡️',
  },
  {
    id: 3,
    title: 'Milestone-Based & 100% IP Transfer',
    quote:
      'Transparent milestone billing with no hidden surprises. All GitHub repositories, custom code, and deployment scripts belong 100% to you from day one.',
    author: 'Complete Ownership',
    role: 'Full Source Code',
    tag: '100% IP OWNERSHIP',
    icon: '🚀',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-py testimonials-ref-section" id="testimonials">
      {/* Giant Decorative Quote Watermarks */}
      <div className="quote-watermark watermark-left">“</div>
      <div className="quote-watermark watermark-right">”</div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-kicker">OUR COMMITMENT</span>
          <h2 className="section-title-ref">
            Why build with <span className="highlight-pill">us</span>
          </h2>
          <p className="testimonials-subtitle">
            What makes our focused, high-velocity engineering lab the ideal partner for launching your digital product.
          </p>
        </div>

        {/* 3 White Cards Grid */}
        <div className="testimonials-grid">
          {commitments.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Top Tag & Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0055ff', letterSpacing: '0.08em' }}>
                  {item.tag}
                </span>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '19px', fontWeight: 900, color: '#0a192f', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="testimonial-text">&ldquo;{item.quote}&rdquo;</p>

              {/* Pillar Info */}
              <div className="testimonial-author">
                <div className="author-avatar">{item.icon}</div>
                <div>
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-role">
                    <span style={{ color: '#0055ff' }}>{item.role}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Blue Corner Accent */}
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
          color: rgba(0, 85, 255, 0.05);
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
          color: #475569;
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
          border: 1px solid rgba(0, 30, 80, 0.08);
          box-shadow: 0 10px 30px rgba(10, 25, 45, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 85, 255, 0.1);
        }

        .quote-icon {
          font-size: 42px;
          font-weight: 900;
          font-family: serif;
          color: #0055ff;
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
          color: #1e293b;
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
          background: linear-gradient(135deg, #0055ff, #00c6ff);
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
          color: #0a192f;
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
          background: linear-gradient(135deg, transparent 50%, #0055ff 50%);
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
