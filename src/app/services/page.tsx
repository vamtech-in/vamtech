import React from 'react';
import ServicesSection from '@/components/ServicesSection';
import AudienceLens from '@/components/AudienceLens';
import CTASection from '@/components/CTASection';
import { servicesData } from '@/data/services';
import { Code2, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development & AI Automation Services',
  description:
    'Explore VAMTech’s full-stack software development, custom web applications, React Native mobile apps, AI automation agents, Cloud DevOps, and UI/UX product design services. Get high-velocity delivery with 100% IP ownership.',
  keywords: [
    'Custom Software Development Services',
    'Web Application Development Company',
    'Mobile App Development Lucknow',
    'React Native App Developers',
    'AI Automation Agency',
    'Custom LLM Integration',
    'Cloud DevOps Consulting AWS',
    'UI UX Product Design Services',
    'Full Stack Engineering Services',
    'Software Modernization Services',
    'Hire Dedicated Software Developers',
  ],
  alternates: {
    canonical: 'https://www.vamtech.in/services',
  },
  openGraph: {
    title: 'Software Development & AI Automation Services | VAMTech',
    description:
      'Architect, build, and deploy custom software, web platforms, mobile apps, and AI workflows. Fixed-sprint delivery starting at ₹24,999.',
    url: 'https://www.vamtech.in/services',
  },
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Services Hero Header */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-kicker">ENGINEERING CAPABILITIES</span>
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            Technology &amp; services from <span className="highlight-pill">us</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            From custom web and mobile apps to distributed cloud infrastructure and AI automation workflows.
          </p>
        </div>
      </section>

      {/* Main Interactive Technology & Services Diagram Component */}
      <ServicesSection />

      {/* Deep-Dive Service Offerings */}
      <section className="section-py" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-kicker">IN-DEPTH DIRECTORY</span>
            <h2 className="section-title-ref">
              Specialized Service <span className="highlight-pill">Pillars</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {servicesData.map((service, index) => (
              <div key={service.id} className="ref-card-white" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 800, color: '#ff5722' }}>
                      SERVICE 0{index + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', marginBottom: '12px' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {service.fullDescription}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#2b3542' }}>
                        <span style={{ color: '#ff5722', fontWeight: 900 }}>✓</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #eef2f6' }}>
                  <Link href="/contact" className="btn-dark-pill" style={{ padding: '10px 18px', fontSize: '13px', width: '100%', justifyContent: 'center' }}>
                    <span>Inquire About Service</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Work With */}
      <AudienceLens />

      {/* Pre-Footer CTA */}
      <CTASection />
    </div>
  );
}

