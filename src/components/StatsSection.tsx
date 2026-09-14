'use client';

import React from 'react';
import { statsData } from '@/data/siteData';

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="editorial-container">
        <div className="stats-grid-container">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-column-item">
              <div className="stat-number-display">{stat.number}</div>
              <h3 className="stat-title-label">{stat.label}</h3>
              <p className="stat-caption-copy">{stat.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
