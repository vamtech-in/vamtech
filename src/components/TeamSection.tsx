'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { teamData } from '@/data/siteData';

export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="editorial-badge" style={{ marginBottom: '16px' }}>
            Founding Team & Leadership
          </span>
          <h2 className="section-title">The people who build it</h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              {/* Portrait Wrapper with Grayscale to Color Transition */}
              <div className="team-portrait-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-portrait-img"
                  loading="lazy"
                />
              </div>

              {/* Info Box with Rise and Reveal Details */}
              <div className="team-info-box">
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role">{member.role}</div>
                <p className="team-member-bio">{member.bio}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-canvas)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
