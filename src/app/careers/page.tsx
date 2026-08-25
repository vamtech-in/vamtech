'use client';

import React, { useState } from 'react';
import { careersData, JobPosition } from '@/data/careers';
import CareerApplyModal from '@/components/CareerApplyModal';
import { 
  Globe, 
  Laptop, 
  BookOpen, 
  Heart, 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const perkIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Laptop: <Laptop size={22} />,
  BookOpen: <BookOpen size={22} />,
  Heart: <Heart size={22} />,
};

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Hero Header */}
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
          <div className="section-badge">Join the Team</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            {careersData.headline}
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
            {careersData.subheading}
          </p>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="section-py">
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-header">
              <div className="section-badge">Benefits &amp; Perks</div>
              <h2 className="section-title">Built for Engineers &amp; Designers</h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              {careersData.perks.map((perk, idx) => (
                <div key={idx} className="corporate-card" style={{ padding: '32px' }}>
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
                      marginBottom: '16px',
                    }}
                  >
                    {perkIconMap[perk.icon] || <Globe size={22} />}
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                    {perk.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Roles Section */}
          <div id="open-roles">
            <div className="section-header">
              <div className="section-badge">Current Openings</div>
              <h2 className="section-title">Available Positions</h2>
              <p className="section-subtitle">
                We are actively looking for talented engineers and designers to join our remote global pods.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {careersData.positions.map((pos) => (
                <div
                  key={pos.id}
                  className="corporate-card"
                  style={{
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '16px',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                            color: 'var(--color-brand-blue)',
                            textTransform: 'uppercase',
                          }}
                        >
                          {pos.department}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>• {pos.type}</span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>• {pos.experience}</span>
                      </div>

                      <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                        {pos.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedPosition(pos)}
                      className="btn-primary"
                      style={{ padding: '10px 22px', fontSize: '14px' }}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {pos.description}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '24px',
                      paddingTop: '20px',
                      borderTop: '1px solid #f1f5f9',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                        Core Responsibilities:
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {pos.responsibilities.map((resp, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={14} color="var(--color-brand-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                        Key Requirements:
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {pos.requirements.map((req, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={14} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {pos.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <CareerApplyModal position={selectedPosition} onClose={() => setSelectedPosition(null)} />
    </div>
  );
}
