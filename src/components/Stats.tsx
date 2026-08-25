import React from 'react';
import { companyData } from '@/data/company';

export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '48px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {companyData.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 20px',
                borderLeft: idx !== 0 ? '1px solid #e2e8f0' : 'none',
              }}
              className="stat-card"
            >
              <div
                style={{
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 800,
                  color: 'var(--color-brand-blue)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>

              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                }}
              >
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stat-card {
            border-left: none !important;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 20px;
          }
          .stat-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
