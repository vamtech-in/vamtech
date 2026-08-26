'use client';

import React from 'react';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Contact Hero Header */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-kicker">DIRECT CHANNELS</span>
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            Start a project with <span className="highlight-pill">us</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Connect directly with our senior engineers and architects. We review every project brief within 1 business day.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section (Matching Image 1) */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

