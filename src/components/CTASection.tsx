'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="cta-ref-section">
      <div className="container">
        <div className="cta-black-banner">
          {/* Subtle Decorative Lines & Confetti from Reference */}
          <div className="banner-decor-line line-left" />
          <div className="banner-decor-line line-right" />
          <div className="banner-particles">
            <span className="p-dot dot-1" />
            <span className="p-dot dot-2" />
            <span className="p-dot dot-3" />
            <span className="p-dot dot-4" />
          </div>

          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Let&apos;s work together</h2>
            <p className="cta-banner-subtitle">
              Ready to elevate your digital presence and ship resilient software products?
            </p>

            <div style={{ marginTop: '28px' }}>
              <Link href="/contact" className="btn-orange" style={{ padding: '14px 34px', fontSize: '15px' }}>
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-ref-section {
          padding: 60px 0;
          position: relative;
        }

        .cta-black-banner {
          position: relative;
          background: linear-gradient(135deg, #0a192f 0%, #060e1d 100%);
          border-radius: 28px;
          padding: clamp(48px, 6vw, 72px) 24px;
          text-align: center;
          border: 1px solid rgba(0, 85, 255, 0.25);
          box-shadow: 0 25px 60px rgba(0, 20, 60, 0.45);
          overflow: hidden;
        }

        .banner-decor-line {
          position: absolute;
          width: 80px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.25), transparent);
        }

        .line-left {
          top: 30px;
          left: 40px;
          transform: rotate(-30deg);
        }

        .line-right {
          bottom: 30px;
          right: 40px;
          transform: rotate(-30deg);
        }

        .banner-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .p-dot {
          position: absolute;
          border-radius: 50%;
          background-color: #0055ff;
        }

        .dot-1 {
          width: 5px;
          height: 5px;
          bottom: 25px;
          left: 8%;
          box-shadow: 0 0 10px #0055ff;
        }

        .dot-2 {
          width: 7px;
          height: 7px;
          bottom: 35px;
          right: 12%;
          box-shadow: 0 0 12px #0055ff;
        }

        .dot-3 {
          width: 4px;
          height: 4px;
          top: 30px;
          right: 25%;
        }

        .dot-4 {
          width: 6px;
          height: 6px;
          top: 40px;
          left: 20%;
          background-color: #00b4d8;
        }

        .cta-banner-content {
          position: relative;
          z-index: 2;
          max-width: 640px;
          margin: 0 auto;
        }

        .cta-banner-title {
          font-size: clamp(34px, 4.6vw, 52px);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.04em;
          margin-bottom: 12px;
        }

        .cta-banner-subtitle {
          font-size: clamp(15px, 1.8vw, 18px);
          color: #a4b3c4;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
