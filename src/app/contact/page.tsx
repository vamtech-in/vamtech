import React from 'react';
import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Us — Start a Project & Get Free Estimation | Lucknow & Global',
  description:
    'Contact VAMTech software engineering team. Get a free project architecture consultation and cost estimate for custom web apps, mobile apps, or AI automation. WhatsApp / Call: +91 7237900686.',
  keywords: [
    'Contact VAMTech',
    'Hire Software Developers in Lucknow',
    'Software Development Free Quote',
    'Get MVP Estimation',
    'Hire Dedicated Full-Stack Developers',
    'Custom Software Company Contact',
    'Tiwariganj Lucknow Software Office',
    'Start Software Project India',
  ],
  alternates: {
    canonical: 'https://vamtech.io/contact',
  },
  openGraph: {
    title: 'Contact VAMTech — Start Your Software Project Today',
    description:
      'Connect directly with our engineering team in Lucknow & remote global pods. Fast 1-day project review and milestone quote.',
    url: 'https://vamtech.io/contact',
  },
};

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
            Connect directly with our senior engineers and architects in Lucknow &amp; worldwide. We review every project brief within 1 business day.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
