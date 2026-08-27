'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const audienceSegments = [
  {
    id: 'startups',
    title: 'Founders & Startups',
    description:
      'Turn bold ideas into tested MVPs in 2-4 weeks. We help early-stage founders validate fast, launch clean web apps, and build scalable architectures ready for growth.',
    tags: ['Rapid MVP Sprint', 'Full-Stack Next.js', 'Direct Developer Access'],
    badgeArt: 'START UP',
    badgeSub: 'RAPID VELOCITY',
    artColor: '#facc15',
  },
  {
    id: 'smes',
    title: 'Growing Businesses',
    description:
      'Custom management portals, client dashboards, automated billing workflows, and modern web platforms engineered to eliminate manual busywork and boost operational efficiency.',
    tags: ['Custom Portals', 'Automated Workflows', 'Cloud Backends'],
    badgeArt: 'BUSINESS',
    badgeSub: 'DIGITAL SCALE',
    artColor: '#38bdf8',
  },
  {
    id: 'agencies',
    title: 'Agencies & Creators',
    description:
      'Technical execution partner for digital agencies and creators who need fast, reliable, pixel-perfect software engineering for client web and mobile projects.',
    tags: ['Fast Turnaround', 'Clean Codebases', 'Direct Slack Sync'],
    badgeArt: 'AGENCY',
    badgeSub: 'TECH PARTNER',
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
                    <ArrowRight size={14} color="var(--color-accent-500)" />
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
          font-family: var(--font-body);
          font-size: 16px;
          color: var(--color-gray-600);
          max-width: 540px;
          line-height: 1.55;
        }

        .audience-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .audience-ref-card {
          background-color: var(--color-primary-900);
          border-radius: 24px;
          border: 1px solid rgba(255, 107, 53, 0.2);
          padding: clamp(32px, 4vw, 48px);
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 16px 45px rgba(5, 14, 31, 0.35);
          transition: all 0.25s ease;
        }

        .audience-ref-card:hover {
          border-color: rgba(255, 107, 53, 0.45);
          transform: translateY(-3px);
          box-shadow: 0 24px 55px rgba(255, 107, 53, 0.15);
        }

        .audience-card-title {
          font-family: var(--font-heading);
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
