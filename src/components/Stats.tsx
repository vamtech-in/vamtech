'use client';

import React from 'react';
import { companyData } from '@/data/company';

export default function Stats() {
  return (
    <section className="stats-shell">
      <div className="container">
        <div className="stats-intro"><span>Built for outcomes</span><p>Strategy, design and engineering working as one delivery team.</p></div>
        <div className="stats-grid">
          {companyData.stats.map((stat, index) => (
            <div className="stats-item" key={stat.label}>
              <span className="stats-index">0{index + 1}</span>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .stats-shell { position: relative; z-index: 2; margin-top: -1px; padding: 0 0 34px; background: #f6f8fc; }
        .stats-shell > :global(.container) { display: grid; grid-template-columns: .92fr 2.1fr; overflow: hidden; border: 1px solid #164176; border-radius: 18px; background: linear-gradient(120deg, #071a3b, #0b2e67); box-shadow: 0 20px 38px rgba(7,26,59,.13); }
        .stats-intro { display: flex; flex-direction: column; justify-content: center; padding: 28px; border-right: 1px solid rgba(168,205,255,.18); background: rgba(0,13,37,.17); }.stats-intro span { margin-bottom: 8px; color: #83c2ff; font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }.stats-intro p { color: #e4f0ff; font-size: 14px; font-weight: 600; line-height: 1.45; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }.stats-item { position: relative; min-height: 160px; padding: 28px 23px 24px; border-right: 1px solid rgba(168,205,255,.14); }.stats-item:last-child { border-right: 0; }.stats-index { position: absolute; top: 16px; right: 17px; color: rgba(157,205,255,.44); font-family: var(--font-mono); font-size: 10px; }.stats-item strong { display: block; margin-bottom: 11px; color: #fff; font-size: clamp(28px, 2.5vw, 39px); font-weight: 800; letter-spacing: -.06em; }.stats-item h3 { margin-bottom: 4px; color: #a2ceff; font-size: 13px; letter-spacing: -.01em; }.stats-item p { color: #9fb5d3; font-size: 11px; line-height: 1.45; }
        @media (max-width: 1020px) { .stats-shell > :global(.container) { grid-template-columns: 1fr; }.stats-intro { border-right: 0; border-bottom: 1px solid rgba(168,205,255,.18); }.stats-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 650px) { .stats-shell { padding-bottom: 18px; }.stats-shell > :global(.container) { border-radius: 14px; }.stats-grid { grid-template-columns: repeat(2, 1fr); }.stats-item { min-height: 135px; padding: 23px 16px; border-bottom: 1px solid rgba(168,205,255,.14); }.stats-item:nth-child(2n) { border-right: 0; }.stats-item:nth-last-child(-n+2) { border-bottom: 0; }.stats-intro { padding: 22px 18px; } }
      `}</style>
    </section>
  );
}
