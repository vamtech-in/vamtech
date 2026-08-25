'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Layers, 
  Sparkles, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle 
} from 'lucide-react';

export default function ProjectCostEstimator() {
  const [projectType, setProjectType] = useState<'mvp' | 'enterprise' | 'ai' | 'cloud'>('mvp');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [durationWeeks, setDurationWeeks] = useState<number>(8);
  const [hasDesignReady, setHasDesignReady] = useState<boolean>(true);
  const [needsCompliance, setNeedsCompliance] = useState<boolean>(false);

  // Dynamic cost calculation algorithm
  const baseRatePerDevWeek = 2800;
  const projectMultiplier = {
    mvp: 1.0,
    enterprise: 1.35,
    ai: 1.45,
    cloud: 1.2,
  }[projectType];

  const designDiscount = hasDesignReady ? 0 : 4500;
  const complianceAddon = needsCompliance ? 6000 : 0;

  const rawEstimate = (teamSize * durationWeeks * baseRatePerDevWeek * projectMultiplier) + designDiscount + complianceAddon;
  const minEstimate = Math.round(rawEstimate * 0.9 / 500) * 500;
  const maxEstimate = Math.round(rawEstimate * 1.15 / 500) * 500;

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '24px',
        padding: '40px',
        background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.9) 0%, rgba(8, 12, 22, 0.95) 100%)',
        border: '1px solid rgba(0, 102, 255, 0.3)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(0, 102, 255, 0.15)', color: '#38BDF8' }}>
          <Calculator size={20} />
        </div>
        <span className="badge-pill cyan">Interactive Project Scope & Budget Sizer</span>
      </div>
      <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>
        Instant Engineering Investment Estimator
      </h3>
      <p style={{ color: '#94A3B8', fontSize: '0.96rem', marginBottom: '32px' }}>
        Select your project parameters below to get a transparent ballpark timeline and sprint allocation estimate.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '36px',
        }}
        className="calculator-grid"
      >
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Step 1: Project Type */}
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '10px' }}>
              1. Project Category
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { id: 'mvp', label: 'Full-Stack MVP Web/App' },
                { id: 'ai', label: 'AI / RAG / Automation' },
                { id: 'enterprise', label: 'Enterprise Software' },
                { id: 'cloud', label: 'Cloud Infra & DevOps' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProjectType(item.id as any)}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: projectType === item.id ? 'rgba(0, 102, 255, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    border: projectType === item.id ? '1px solid #0066FF' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: projectType === item.id ? '#FFFFFF' : '#94A3B8',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Duration Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#CBD5E1' }}>
                2. Target Delivery Duration
              </label>
              <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.9rem' }}>
                {durationWeeks} Weeks ({Math.round(durationWeeks / 4.33 * 10) / 10} mo)
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              step="2"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#0066FF', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
              <span>4 Weeks (Sprint)</span>
              <span>12 Weeks (Standard MVP)</span>
              <span>24 Weeks (Scale-up)</span>
            </div>
          </div>

          {/* Step 3: Squad Sizing */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#CBD5E1' }}>
                3. Dedicated Senior Engineers
              </label>
              <span style={{ color: '#F472B6', fontWeight: 700, fontSize: '0.9rem' }}>
                {teamSize} Engineers (+ 1 Tech Lead)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#E01A8A', cursor: 'pointer' }}
            />
          </div>

          {/* Step 4: Add-on Checkboxes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: '#CBD5E1' }}>
              <input
                type="checkbox"
                checked={needsCompliance}
                onChange={(e) => setNeedsCompliance(e.target.checked)}
                style={{ accentColor: '#0066FF', width: '16px', height: '16px' }}
              />
              <span>Includes SOC 2 / HIPAA compliance audits & penetration testing</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: '#CBD5E1' }}>
              <input
                type="checkbox"
                checked={hasDesignReady}
                onChange={(e) => setHasDesignReady(e.target.checked)}
                style={{ accentColor: '#0066FF', width: '16px', height: '16px' }}
              />
              <span>We already have Figma designs / wireframes ready (Reduces scope)</span>
            </label>
          </div>
        </div>

        {/* Results Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(224, 26, 138, 0.1) 0%, rgba(0, 102, 255, 0.15) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '18px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94A3B8', fontWeight: 600, marginBottom: '6px' }}>
              Estimated Investment Range
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '6px' }}>
              ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.84rem', color: '#38BDF8', marginBottom: '24px' }}>
              *Transparent milestones • 100% IP handover • Zero hidden fees
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Delivery Cadence:</span>
                <span style={{ fontWeight: 600 }}>Bi-Weekly Production Sprints</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Team Allocation:</span>
                <span style={{ fontWeight: 600 }}>{teamSize} Full-Time Senior Devs</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Warranty Included:</span>
                <span style={{ fontWeight: 600, color: '#4ADE80' }}>30 Days Post-Launch</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link
              href={`/contact?type=${projectType}&team=${teamSize}&weeks=${durationWeeks}`}
              className="btn-primary"
              style={{ width: '100%', padding: '12px 20px', fontSize: '0.94rem' }}
            >
              <span>Lock in This Scope & Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
