'use client';

import React from 'react';
import { marqueeServices } from '@/data/siteData';

export default function ServicesTicker() {
  // Repeat array for infinite continuous ticker
  const tickerItems = [...marqueeServices, ...marqueeServices, ...marqueeServices];

  return (
    <div className="services-ticker-bar" aria-hidden="true">
      <div className="ticker-track">
        {tickerItems.map((service, index) => (
          <div key={`${service}-${index}`} className="ticker-item">
            <span>{service}</span>
            <span className="ticker-symbol">✻</span>
          </div>
        ))}
      </div>
    </div>
  );
}
