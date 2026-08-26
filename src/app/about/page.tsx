import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { Target, Compass, Cpu, ShieldCheck, Zap, Layers, Handshake, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Stats from '@/components/Stats';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VAMTech — Custom Software Engineering Lab & Team in Lucknow',
  description:
    'Learn about VAMTech, our software engineering culture, mission, leadership, and proven track record delivering web applications, mobile platforms, and AI systems worldwide with 100% transparent delivery.',
  keywords: [
    'About VAMTech',
    'Software Company in Lucknow',
    'Software Engineering Lab India',
    'Full Stack Software Development Team',
    'VAMTech Founders and Culture',
    'Tiwariganj Lucknow Tech Startup',
  ],
  alternates: {
    canonical: 'https://vamtech.io/about',
  },
  openGraph: {
    title: 'About VAMTech — Software Engineering Lab & Culture',
    description:
      'Engineering high-performance software with radical transparency, milestone sprint models, and 100% IP transfer.',
    url: 'https://vamtech.io/about',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Zap: <Zap size={22} />,
  Layers: <Layers size={22} />,
  Handshake: <Handshake size={22} />,
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Hero Banner */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-kicker">WHO WE ARE</span>
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            Engineering software with <span className="highlight-pill">us</span>
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
            {companyData.shortDescription}
          </p>
        </div>
      </section>

      {/* Stats Badges */}
      <Stats />

      {/* Mission & Vision */}
      <section className="section-py" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div className="ref-card-white" style={{ padding: '36px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 87, 34, 0.12)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Target size={24} />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px', color: 'var(--text-main)' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                {companyData.mission}
              </p>
            </div>

            <div className="ref-card-dark" style={{ padding: '36px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(47, 84, 235, 0.2)',
                  color: '#597ef7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Compass size={24} />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#9aa8b8' }}>
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ marginBottom: '32px' }}>
              <span className="section-kicker">ENGINEERING DNA</span>
              <h2 className="section-title-ref">
                The Values That Drive <span className="highlight-pill">us</span>
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {companyData.coreValues.map((val, idx) => (
                <div key={idx} className="ref-card-white" style={{ padding: '28px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 87, 34, 0.1)',
                      color: 'var(--color-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {iconMap[val.icon] || <Zap size={20} />}
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
                    {val.title}
                  </h4>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <CTASection />
    </div>
  );
}

