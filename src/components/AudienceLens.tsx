'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const audienceSegments = [
  {
    id: 'enterprises',
    title: 'Enterprises',
    description:
      'We engineer resilient, audit-compliant custom software, modernize legacy infrastructures, and scale mission-critical cloud pipelines with strict SLA guarantees.',
    tags: ['Legacy Modernization', 'Cloud Scale', 'SOC2 / HIPAA'],
    badgeArt: 'SME',
    badgeSub: 'ENTERPRISE SCALE',
    artColor: '#38bdf8',
  },
  {
    id: 'startups',
    title: 'Startups',
    description:
      'Turn bold product ideas into tested MVPs in weeks. We help high-growth founders validate fast, achieve product-market fit, and scale from Seed to Series B.',
    tags: ['Rapid MVP Sprint', 'Full-Stack Pod', 'Fractional CTO'],
    badgeArt: 'START UP',
    badgeSub: 'RAPID VELOCITY',
    artColor: '#facc15',
  },
  {
    id: 'agencies',
    title: 'Agencies',
    description:
      'White-label software engineering pods and technical execution for top design and marketing agencies needing seamless, on-time client deliverables.',
    tags: ['White-Label Delivery', 'Staff Augmentation', 'High Concurrency'],
    badgeArt: 'AGENCY',
    badgeSub: 'ELITE PARTNERSHIP',
    artColor: '#a855f7',
  },
];

export default function AudienceLens() {
  return (
    <section className="section-py" id="audiences">
      <div className="container">
        {/* Section Header */}
        <div className="audience-header">
          <span className="section-kicker">WHO WE SERVE</span>
          <h2 className="section-title-ref">
            We Work <span className="highlight-pill">With</span>
          </h2>
          <p className="audience-subtitle">
            Tailored engineering models designed specifically for where you are in your growth journey.
          </p>
        </div>

        {/* 3 Horizontal Stacked Black Cards from Reference */}
        <div className="audience-cards-stack">
          {audienceSegments.map((segment) => (
            <div key={segment.id} className="audience-ref-card">
              <div className="audience-card-left">
                <h3 className="audience-card-title">{segment.title}</h3>
                <p className="audience-card-desc">{segment.description}</p>

                {/* Chips */}
                <div className="audience-chips-row">
                  {segment.tags.map((tag, i) => (
                    <span key={i} className="audience-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '24px' }}>
                  <Link href="/contact" className="btn-white-pill" style={{ padding: '10px 20px', fontSize: '13px' }}>
                    <span>Explore Model</span>
                    <ArrowRight size={14} color="#ff5722" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Glowing Neon Artwork from Reference */}
              <div className="audience-card-right">
                <div className="neon-art-box" style={{ borderColor: `${segment.artColor}40` }}>
                  <div
                    className="neon-glow-backdrop"
                    style={{ background: `radial-gradient(circle, ${segment.artColor}33 0%, transparent 70%)` }}
                  />
                  <div className="neon-text-logo" style={{ color: segment.artColor }}>
                    {segment.badgeArt}
                  </div>
                  <span className="neon-subtext">{segment.badgeSub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .audience-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .audience-subtitle {
          font-size: 16px;
          color: #556375;
          max-width: 540px;
          line-height: 1.55;
        }

        .audience-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .audience-ref-card {
          background-color: #0c0e12;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: clamp(32px, 4vw, 48px);
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.35);
          transition: all 0.25s ease;
        }

        .audience-ref-card:hover {
          border-color: rgba(255, 87, 34, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.45);
        }

        .audience-card-title {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .audience-card-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #a4b3c4;
          margin-bottom: 24px;
          max-width: 620px;
        }

        .audience-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .audience-chip {
          font-size: 11.5px;
          font-weight: 700;
          font-family: var(--font-mono);
          padding: 5px 12px;
          border-radius: 999px;
          background-color: rgba(255, 255, 255, 0.07);
          color: #c9d6e4;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* Right Neon Art Box */
        .audience-card-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .neon-art-box {
          position: relative;
          width: min(100%, 240px);
          height: 160px;
          border-radius: 20px;
          background: #11141c;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .neon-glow-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .neon-text-logo {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-shadow: 0 0 24px currentColor;
          margin-bottom: 6px;
          z-index: 1;
        }

        .neon-subtext {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #8c9ba8;
          z-index: 1;
        }

        @media (max-width: 860px) {
          .audience-ref-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .audience-card-right {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
