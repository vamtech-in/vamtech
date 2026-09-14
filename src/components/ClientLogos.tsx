'use client';

import React from 'react';
import { clientLogos } from '@/data/siteData';

export default function ClientLogos() {
  // Double list to create seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="client-marquee-section">
      <div className="editorial-container">
        <h3 className="client-marquee-heading">Trusted by founders.</h3>
      </div>

      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {duplicatedLogos.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="client-logo-item">
              <span className="client-logo-dot" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
