'use client';

import React from 'react';

const statsData = [
  {
    number: '100%',
    label: 'Direct Developer Access',
    detail: 'No middlemen or junior handoffs',
    shape: 'circle',
  },
  {
    number: '2-4 Wk',
    label: 'Rapid MVP Sprints',
    detail: 'From concept to live production URL',
    shape: 'diamond',
  },
  {
    number: '100%',
    label: 'IP & Code Ownership',
    detail: 'Full source code & asset transfer',
    shape: 'flag',
  },
];


export default function Stats() {
  return (
    <section className="stats-ref-section">
      <div className="container">
        <div className="stats-ref-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-ref-card">
              <div className={`stat-geometric-badge shape-${stat.shape}`}>
                <span className="stat-number">{stat.number}</span>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-ref-section {
          padding: 60px 0;
          position: relative;
        }

        .stats-ref-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: center;
          text-align: center;
        }

        .stat-ref-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
        }

        .stat-geometric-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0055ff 0%, #00c6ff 100%);
          color: #ffffff;
          box-shadow: 0 14px 34px rgba(0, 85, 255, 0.35);
          margin-bottom: 18px;
          transition: transform 0.25s ease;
        }

        .stat-geometric-badge:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .shape-circle {
          width: 104px;
          height: 104px;
          border-radius: 50% 50% 50% 12px;
        }

        .shape-diamond {
          width: 96px;
          height: 96px;
          border-radius: 20px;
          transform: rotate(10deg);
        }

        .shape-diamond .stat-number {
          transform: rotate(-10deg);
        }

        .shape-flag {
          width: 104px;
          height: 104px;
          border-radius: 14px 50% 50% 50%;
        }

        .stat-number {
          font-size: clamp(26px, 3vw, 34px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .stat-label {
          font-size: 19px;
          font-weight: 900;
          color: #0a192f;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .stat-detail {
          font-size: 13.5px;
          color: #475569;
        }

        @media (max-width: 768px) {
          .stats-ref-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}

