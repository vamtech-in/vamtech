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
    cto: <Code2 size={20} />,
    business: <TrendingUp size={20} />,
    procurement: <ShieldCheck size={20} />,
    investor: <Rocket size={20} />
  };

  const activeData = stakeholderData.find((item) => item.id === activeTab) || stakeholderData[0];

  return (
    <div style={{ position: 'relative' }}>
      {/* Selector Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '36px',
        }}
      >
        {stakeholderData.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '0.94rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: isSelected
                  ? 'linear-gradient(135deg, rgba(255, 94, 58, 0.2) 0%, rgba(224, 26, 138, 0.2) 50%, rgba(0, 102, 255, 0.2) 100%)'
                  : 'rgba(255, 255, 255, 0.04)',
                color: isSelected ? '#FFFFFF' : '#94A3B8',
                border: isSelected
                  ? '1px solid rgba(224, 26, 138, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isSelected ? '0 0 25px rgba(224, 26, 138, 0.25)' : 'none',
              }}
            >
              <span style={{ color: isSelected ? '#FF5E3A' : '#64748B' }}>
                {icons[item.id]}
              </span>
              <span>{item.roleTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Content Container */}
      <div
        className="glass-card"
        style={{
          padding: '40px',
          borderRadius: '24px',
          background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.85) 0%, rgba(10, 15, 29, 0.95) 100%)',
          border: '1px solid rgba(224, 26, 138, 0.25)',
          boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Core Question Callout */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#E01A8A', fontWeight: 700, marginBottom: '8px' }}>
            What you are evaluating
          </div>
          <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', fontWeight: 600, fontStyle: 'italic', marginBottom: '12px' }}>
            {activeData.coreQuestion}
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.7', maxWidth: '900px' }}>
            {activeData.solutionPromise}
          </p>
        </div>

        {/* 3 Key Points */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '36px',
          }}
          className="audience-grid"
        >
          {activeData.keyPoints.map((point, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 102, 255, 0.15)',
                      color: '#38BDF8',
                      border: '1px solid rgba(0, 102, 255, 0.3)',
                    }}
                  >
                    {point.tag}
                  </span>
                  <CheckCircle2 size={18} color="#00D2FF" />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 600 }}>
                  {point.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.6' }}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ color: '#94A3B8', fontSize: '0.92rem' }}>
            Want to discuss custom architecture specs for your team?
          </div>
          <Link href={activeData.ctaLink} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <span>{activeData.ctaButtonText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
}
