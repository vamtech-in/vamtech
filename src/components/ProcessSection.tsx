'use client';

import React, { useState } from 'react';
import { processStepsData } from '@/data/process';
import { 
  Compass, 
  Network, 
  Figma, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  FileText 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={22} />,
  Network: <Network size={22} />,
  Figma: <Figma size={22} />,
  Code2: <Code2 size={22} />,
  Rocket: <Rocket size={22} />,
};

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processStepsData[activeStepIndex];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">How We Work</div>
          <h2 className="section-title">A Deterministic 5-Step Engineering Process</h2>
          <p className="section-subtitle">
            From initial requirements gathering to high-scale production deployment, our disciplined methodology ensures on-time, zero-regression delivery.
          </p>
        </div>

        {/* Process Step Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '36px',
          }}
          className="process-steps-grid"
        >
          {processStepsData.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '20px',
                  borderRadius: '12px',
                  border: isSelected ? '2px solid var(--color-brand-blue)' : '1px solid #e2e8f0',
                  backgroundColor: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(37, 99, 235, 0.1)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: isSelected ? 'var(--color-brand-blue)' : '#94a3b8',
                    }}
                  >
                    STEP {step.stepNumber}
                  </span>
                  <div
                    style={{
                      color: isSelected ? 'var(--color-brand-blue)' : '#94a3b8',
                    }}
                  >
                    {iconMap[step.icon]}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: isSelected ? 'var(--text-main)' : '#64748b',
                  }}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div
          className="corporate-card"
          style={{
            padding: '40px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
            }}
            className="process-detail-grid"
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--color-brand-blue)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  {activeStep.durationEstimate}
                </span>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>
                  {activeStep.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
                {activeStep.stepNumber}. {activeStep.title} Phase
              </h3>

              <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '28px' }}>
                {activeStep.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                {/* Activities */}
                <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                    <Clock size={16} color="var(--color-brand-blue)" />
                    <span>Sprint Activities</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeStep.activities.map((act, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} color="#10b981" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                    <FileText size={16} color="var(--color-brand-cyan)" />
                    <span>Phase Deliverables</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeStep.deliverables.map((del, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} color="var(--color-brand-blue)" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .process-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
