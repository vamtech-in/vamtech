import React from 'react';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Pricing & Transparent Engagement Models — VAMTech',
  description: 'Explore VAMTech transparent engagement models: Fixed-Scope MVP Sprints and Dedicated Engineering Squads.',
};

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Pricing Header */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-kicker">COMMERCIAL MODELS</span>
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            Transparent pricing to hire <span className="highlight-pill">us</span>
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
            Predictable sprint budgeting with zero hidden costs, clear milestone approvals, and 100% intellectual property transfer.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Pre-Footer CTA */}
      <CTASection />
    </div>
  );
}

