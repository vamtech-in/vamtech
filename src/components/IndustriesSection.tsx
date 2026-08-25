import React from 'react';
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
  ArrowUpRight 
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={22} />,
  CreditCard: <CreditCard size={22} />,
  ShoppingBag: <ShoppingBag size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Activity: <Activity size={22} />,
  Layers: <Layers size={22} />,
  Building2: <Building2 size={22} />,
  Globe2: <Globe2 size={22} />,
};

export default function IndustriesSection() {
  return (
    <section className="section-py" id="solutions" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Industry Expertise</div>
          <h2 className="section-title">Tailored Solutions for Diverse Sectors</h2>
          <p className="section-subtitle">
            We adapt our engineering frameworks, compliance standards, and product strategies to solve complex industry-specific challenges.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="corporate-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '28px',
              }}
            >
              <div>
                {/* Icon & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[industry.icon] || <Rocket size={22} />}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#64748b',
                    }}
                  >
                    {industry.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                  {industry.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {industry.description}
                </p>

                {/* Solutions List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '20px',
                    paddingTop: '14px',
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  {industry.solutions.slice(0, 3).map((sol, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12.5px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-brand-blue)' }} />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid #f1f5f9',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-brand-blue)',
                  fontWeight: 600,
                }}
              >
                <span>{industry.metricPlaceholder}</span>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit' }}>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
