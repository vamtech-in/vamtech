'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPlansData } from '@/data/siteData';

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="editorial-badge" style={{ marginBottom: '16px' }}>
            Transparent Investment
          </span>
          <h2 className="section-title">Explore Pricing</h2>
        </div>

        {/* 2-Card Comparative Grid */}
        <div className="pricing-cards-grid">
          {pricingPlansData.map((plan) => {
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.id}
                className={`pricing-card-item ${isFeatured ? 'featured' : ''}`}
              >
                <div>
                  <div className="pricing-plan-badge">
                    {isFeatured ? 'ENTERPRISE & GROWTH' : 'LAUNCH READY'}
                  </div>

                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <p className="pricing-plan-desc">{plan.description}</p>

                  <div className="pricing-amount-wrap">
                    <div className="pricing-amount-headline">{plan.price}</div>
                    <div className="pricing-amount-note">{plan.priceNote}</div>
                  </div>

                  <ul className="pricing-features-list">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="pricing-feature-point">
                        <Check size={16} className="pricing-feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={plan.ctaHref}
                    className={
                      isFeatured
                        ? 'btn-editorial-inverse'
                        : 'btn-editorial-primary'
                    }
                    style={{ width: '100%' }}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} className="btn-arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
