import React from 'react';
import { companyData } from '@/data/company';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Handshake, 
  Target, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Zap: <Zap size={20} />,
  Layers: <Layers size={20} />,
  Handshake: <Handshake size={20} />,
};

export default function AboutSection() {
  return (
    <section className="section-py" id="about" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Company & Culture</div>
          <h2 className="section-title">Engineering Digital Products That Deliver Impact</h2>
          <p className="section-subtitle">
            {companyData.shortDescription}
          </p>
        </div>

        {/* Narrative & Mission/Vision 2-Col Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Main Story Narrative */}
          <div
            className="corporate-card"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
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
                Who We Are
              </span>

              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
                Technology Craftsmen for Ambitious Teams
              </h3>

              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '16px' }}>
                VAMTech is a technology-driven company focused on building reliable software, intelligent digital products, and scalable technology solutions. We combine engineering, design, and emerging technologies to help businesses turn ideas into real-world products.
              </p>

              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                Whether you are an early-stage startup looking to validate and build your MVP or an enterprise modernizing mission-critical infrastructure, our senior engineering pods bring agility, accountability, and technical mastery.
              </p>
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
              <Link href="/about" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
                <span>Read Full Company Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Mission */}
            <div className="corporate-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--color-brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={18} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Our Mission</h4>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {companyData.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="corporate-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    color: 'var(--color-brand-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Compass size={18} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Our Vision</h4>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {companyData.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Strip */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Guiding Principles & Core Values</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {companyData.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="corporate-card"
                style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ color: 'var(--color-brand-blue)', marginBottom: '4px' }}>
                  {iconMap[val.icon] || <Zap size={20} />}
                </div>
                <h4 style={{ fontSize: '15.5px', fontWeight: 700 }}>{val.title}</h4>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
