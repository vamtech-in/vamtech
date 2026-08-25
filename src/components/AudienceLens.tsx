'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { stakeholderData } from '@/data/stakeholderContent';
import { 
  Code2, 
  TrendingUp, 
  ShieldCheck, 
  Rocket, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export default function AudienceLens() {
  const [activeTab, setActiveTab] = useState<string>('cto');

  const icons: Record<string, React.ReactNode> = {
    cto: <Code2 size={16} />,
    business: <TrendingUp size={16} />,
    procurement: <ShieldCheck size={16} />,
    investor: <Rocket size={16} />
  };

  const activeData = stakeholderData.find((item) => item.id === activeTab) || stakeholderData[0];

  return (
    <div style={{ position: 'relative' }}>
      {/* Selector Pill Tabs (Monad 9999px pill containers) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '40px',
        }}
      >
        {stakeholderData.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="pipeline-node-tag"
              style={{
                backgroundColor: isSelected ? 'var(--color-off-black)' : '#ffffff',
                color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                cursor: 'pointer',
                padding: '12px 24px',
                fontSize: '13px',
                boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <span style={{ color: isSelected ? 'var(--color-mint)' : 'var(--color-graphite)' }}>
                {icons[item.id]}
              </span>
              <span>{item.roleTitle.split(' / ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Stakeholder Card Content (40px radius with 1px solid Ash border) */}
      <div
        className="monad-card"
        style={{
          backgroundColor: '#ffffff',
          padding: '48px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="audience-grid"
        >
          {/* Left Column: Narrative & Focus */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-periwinkle-mist)',
                  color: 'var(--color-lake-blue)',
                  fontWeight: 500,
                }}
              >
                Audience Lens • {activeData.roleTitle}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '16px',
                lineHeight: 1.25,
              }}
            >
              {activeData.coreQuestion}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                fontSize: '15px',
                color: 'var(--color-graphite)',
                lineHeight: 1.6,
                marginBottom: '28px',
              }}
            >
              {activeData.solutionPromise}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href={activeData.ctaLink} className="btn-primary" style={{ fontSize: '13px', padding: '12px 26px' }}>
                <span>{activeData.ctaButtonText}</span>
                <span className="arrow-glyph">▸</span>
              </Link>
              <Link href="/case-studies" className="btn-ghost" style={{ fontSize: '13px', padding: '12px 24px' }}>
                <span>Review Technical Cases</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Proof Points */}
          <div
            style={{
              backgroundColor: 'var(--color-parchment)',
              border: '1px solid var(--color-ash)',
              borderRadius: '24px',
              padding: '32px',
            }}
          >
            <div className="mono-helper" style={{ marginBottom: '16px' }}>
              CORE TECHNICAL GUARANTEES
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activeData.keyPoints.map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-lake-blue)', marginTop: '2px', flexShrink: 0 }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '16px', color: 'var(--color-off-black)', marginBottom: '2px' }}>
                      {point.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '12.5px', color: 'var(--color-graphite)', lineHeight: 1.4 }}>
                      {point.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Metric highlight banner */}
            <div
              style={{
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-ash)',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <span className="mono-helper">VERIFIED ROI DELTA</span>
              <span
                style={{
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--color-lake-blue)',
                }}
              >
                99.99% SLA • 3x Velocity
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
