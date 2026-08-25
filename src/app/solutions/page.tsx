import React from 'react';
import Link from 'next/link';
import { industriesData } from '@/data/industries';
import { 
  Rocket, 
  CreditCard, 
  ShoppingBag, 
  GraduationCap, 
  Activity, 
  Layers, 
  Building2, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu 
} from 'lucide-react';

export const metadata = {
  title: 'Industry Solutions & Architecture Blueprints — VAM|Tech',
  description:
    'Discover VAM|Tech’s specialized industry solutions for FinTech, Healthcare, E-Commerce, SaaS, EdTech, and Enterprise digital platforms.',
};

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={24} />,
  CreditCard: <CreditCard size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Activity: <Activity size={24} />,
  Layers: <Layers size={24} />,
  Building2: <Building2 size={24} />,
  Globe2: <Globe2 size={24} />,
};

export default function SolutionsPage() {
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
          <div className="section-badge">Industry Solutions</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Engineered Blueprints for Specific Industry Challenges
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
            We combine deep technical capabilities with regulatory compliance, domain-specific security, and proven architecture patterns.
          </p>
        </div>
      </section>

      {/* 8 Industry Solutions Showcase */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                className="corporate-card"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(37, 99, 235, 0.08)',
                        color: 'var(--color-brand-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {iconMap[industry.icon] || <Rocket size={24} />}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                      }}
                    >
                      {industry.tagline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '10px', color: 'var(--text-main)' }}>
                    {industry.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {industry.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                      Architecture Deliverables:
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {industry.solutions.map((sol, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                          <CheckCircle2 size={14} color="var(--color-brand-blue)" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>Core Advantage</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-brand-blue)', fontFamily: 'var(--font-mono)' }}>
                      {industry.metricPlaceholder}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px', padding: '10px' }}
                  >
                    <span>Request Industry Blueprint</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Transformation Pillars */}
          <div className="corporate-card" style={{ padding: '48px', backgroundColor: '#ffffff' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
              <div className="section-badge">Enterprise Assurance</div>
              <h3 style={{ fontSize: '28px', fontWeight: 800 }}>Standardized Security &amp; Compliance</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
                Every solution we deliver adheres to world-class security controls and rigorous automated test harnesses.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              <div style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ color: 'var(--color-brand-blue)', display: 'inline-flex', marginBottom: '12px' }}>
                  <ShieldCheck size={32} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>SOC-2 &amp; GDPR Ready</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Role-based access tiers, encryption in transit and at rest.</p>
              </div>

              <div style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ color: 'var(--color-brand-cyan)', display: 'inline-flex', marginBottom: '12px' }}>
                  <Cpu size={32} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>Zero-Downtime Releases</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Automated blue-green pipelines and real-time health monitors.</p>
              </div>

              <div style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ color: '#10b981', display: 'inline-flex', marginBottom: '12px' }}>
                  <Zap size={32} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>Sub-Second Latency</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Edge-rendered frontend pages and optimized database query plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
