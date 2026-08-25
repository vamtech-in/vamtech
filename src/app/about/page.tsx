import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { 
  Target, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Code2, 
  Globe 
} from 'lucide-react';

export const metadata = {
  title: 'About VAM|Tech — Mission, Vision & Engineering Culture',
  description:
    'Learn about VAM|Tech, our mission to build resilient digital products, our core engineering values, and leadership principles.',
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
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Hero Banner */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '72px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="tech-grid-pattern"
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <div className="section-badge">About VAM|Tech</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Engineering Intelligent Software for Ambitious Enterprises
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            {companyData.shortDescription}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            <div className="corporate-card" style={{ padding: '36px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  color: 'var(--color-brand-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Target size={24} />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {companyData.mission}
              </p>
            </div>

            <div className="corporate-card" style={{ padding: '36px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  color: 'var(--color-brand-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Compass size={24} />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Narrative Story */}
          <div
            className="corporate-card"
            style={{
              padding: '48px',
              backgroundColor: '#ffffff',
              marginBottom: '64px',
            }}
          >
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-brand-blue)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Our Founding Thesis
              </span>

              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
                Why We Built VAM|Tech
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                <p>
                  In the traditional IT services industry, clients often face bloated scopes, opaque delivery timelines, junior developer handoffs, and architectures that buckle under scale. We founded VAM|Tech to rewrite that dynamic.
                </p>
                <p>
                  We operate as a high-velocity, senior engineering consultancy. Every client project is staffed by seasoned engineers, architects, and product designers who have battle-tested experience building high-throughput systems, cloud-native pipelines, and production AI models.
                </p>
                <p>
                  Whether working with seed-stage founders launching their flagship product or Fortune 500 enterprises modernizing legacy software, we combine rapid iteration cycles with zero compromises on security, code health, and type safety.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div style={{ marginBottom: '64px' }}>
            <div className="section-header">
              <div className="section-badge">Pillars of Operation</div>
              <h2 className="section-title">The Values That Guide Every Sprint</h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {companyData.coreValues.map((val, idx) => (
                <div key={idx} className="corporate-card" style={{ padding: '28px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {iconMap[val.icon] || <Zap size={20} />}
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                    {val.title}
                  </h4>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div
            style={{
              padding: '48px',
              borderRadius: '16px',
              backgroundColor: 'var(--bg-dark)',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px', color: '#ffffff' }}>
              Want to partner with our engineering team?
            </h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '540px', margin: '0 auto 28px' }}>
              Let&apos;s discuss your technical roadmap, infrastructure requirements, or product idea.
            </p>
            <Link href="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>
              <span>Schedule Architecture Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
