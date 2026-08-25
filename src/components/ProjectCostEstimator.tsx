'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Users
} from 'lucide-react';

export default function ProjectCostEstimator() {
  const [projectType, setProjectType] = useState<'mvp' | 'enterprise' | 'ai' | 'cloud'>('mvp');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [durationWeeks, setDurationWeeks] = useState<number>(8);
  const [hasDesignReady, setHasDesignReady] = useState<boolean>(true);
  const [needsCompliance, setNeedsCompliance] = useState<boolean>(false);

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
      className="monad-card"
      style={{
        backgroundColor: '#ffffff',
        padding: '48px 40px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span
          style={{
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'var(--color-periwinkle-mist)',
            color: 'var(--color-lake-blue)',
            fontSize: '11px',
            fontFamily: 'var(--font-abc-diatype-mono)',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Interactive Scope Calculator
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-untitled-serif)',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: 400,
          color: 'var(--color-off-black)',
          marginBottom: '12px',
        }}
      >
        Engineering Investment & Sprint Sizing
      </h3>
      <p style={{ color: 'var(--color-graphite)', fontSize: '15px', marginBottom: '36px' }}>
        Configure engineering parameters below to calculate transparent ballpark budgets and squad allocations.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '40px',
          alignItems: 'start',
        }}
        className="calculator-grid"
      >
        {/* Left Side: Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Project Type Pills */}
          <div>
            <label className="monad-label">1. Architecture Scope</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {[
                { id: 'mvp', label: 'Fixed MVP Sprint' },
                { id: 'enterprise', label: 'Enterprise Platform' },
                { id: 'ai', label: 'AI & Vector RAG' },
                { id: 'cloud', label: 'DevOps & SRE' },
              ].map((t) => {
                const isSelected = projectType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id as any)}
                    className="pipeline-node-tag"
                    style={{
                      justifyContent: 'center',
                      backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                      color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                      borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                      cursor: 'pointer',
                      padding: '12px 16px',
                      fontSize: '12px',
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dedicated Engineers Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="monad-label">2. Dedicated Senior Engineers</label>
              <span className="mono-text" style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-lake-blue)' }}>
                {teamSize} Senior Engineers
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--color-lake-blue)',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              <span className="mono-helper">1 Dev</span>
              <span className="mono-helper">4 Devs (Squad)</span>
              <span className="mono-helper">8 Devs (Pod)</span>
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="monad-label">3. Target Timeline</label>
              <span className="mono-text" style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-lake-blue)' }}>
                {durationWeeks} Weeks ({Math.round(durationWeeks / 4)} Mo.)
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              step="2"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--color-lake-blue)',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              <span className="mono-helper">4 Weeks</span>
              <span className="mono-helper">12 Weeks</span>
              <span className="mono-helper">24 Weeks</span>
            </div>
          </div>

          {/* Checkboxes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={hasDesignReady}
                onChange={(e) => setHasDesignReady(e.target.checked)}
                style={{ accentColor: 'var(--color-lake-blue)' }}
              />
              <span style={{ fontSize: '13px', color: 'var(--color-graphite)', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                Figma Design Tokens & Wireframes Already Prepared
              </span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={needsCompliance}
                onChange={(e) => setNeedsCompliance(e.target.checked)}
                style={{ accentColor: 'var(--color-lake-blue)' }}
              />
              <span style={{ fontSize: '13px', color: 'var(--color-graphite)', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                Requires SOC 2 / HIPAA / GDPR Regulatory Sign-off
              </span>
            </label>
          </div>
        </div>

        {/* Right Side: Calculation Outcome Card (Periwinkle Mist or Off-Black) */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment)',
            border: '1px solid var(--color-ash)',
            borderRadius: '24px',
            padding: '36px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div>
            <div className="mono-helper" style={{ marginBottom: '8px' }}>
              BALLPARK SPRINT ESTIMATION
            </div>

            <div
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(28px, 3.2vw, 40px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
            </div>

            <div className="mono-text" style={{ fontSize: '12px', color: 'var(--color-smoke)', marginBottom: '24px' }}>
              Estimated allocation: {teamSize * durationWeeks * 40} engineering hours
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--color-ash)', paddingTop: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Squad Composition:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>{teamSize} Senior Staff</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Sprint Cadence:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>2-Week Milestones</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Code Ownership:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>100% IP Transfer</span>
              </div>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ width: '100%', fontSize: '13px', padding: '14px 20px' }}
            >
              <span>Lock Sizing & Book Discovery</span>
              <span className="arrow-glyph">▸</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
