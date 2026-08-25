import React from 'react';
import Link from 'next/link';
import ProjectCostEstimator from '@/components/ProjectCostEstimator';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
import { pricingPlans } from '@/data/pricingPlans';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  FileCode2 
} from 'lucide-react';

export const metadata = {
  title: 'Engagement Models & Transparent Sizing — Vamtech Journal',
  description: 'Explore Vamtech transparent engagement models: Fixed-Scope MVP Sprints, Dedicated Engineering Squads, and Fractional CTO Retainers.',
};

export default function PricingPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <AtmosphericWash variant="gold-coral" size={560} top="-100px" left="-120px" opacity={0.45} />
      <AtmosphericWash variant="sky-mint" size={600} top="700px" right="-100px" opacity={0.4} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-periwinkle-mist)',
                  color: 'var(--color-lake-blue)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Predictable Commercial Models
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(36px, 5.2vw, 64px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Transparent Engagement Models
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                color: 'var(--color-graphite)',
                fontSize: '17px',
                maxWidth: '720px',
                margin: '0 auto',
                lineHeight: 1.5,
              }}
            >
              No surprise billing, scope ambiguities, or hidden retainer lock-ins. Pick the engagement model matched to your product maturity.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pricing Cards Grid */}
        <div className="grid-3" style={{ marginBottom: '80px' }}>
          {pricingPlans.map((plan, index) => {
            const isPeriwinkle = plan.popular;
            return (
              <ScrollReveal key={plan.id} animation="fade-up" delay={index * 100}>
                <div
                  className={isPeriwinkle ? 'monad-card-periwinkle' : 'monad-card'}
                  style={{
                    backgroundColor: isPeriwinkle ? 'var(--color-periwinkle-mist)' : '#ffffff',
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <div>
                    {/* Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span className="mono-helper">{plan.badge || 'ENGAGEMENT MODEL'}</span>
                      {isPeriwinkle && (
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            backgroundColor: '#ffffff',
                            color: 'var(--color-lake-blue)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-abc-diatype-mono)',
                            fontWeight: 500,
                          }}
                        >
                          ★ RECOMMENDED
                        </span>
                      )}
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-untitled-serif)',
                        fontSize: '28px',
                        fontWeight: 400,
                        color: 'var(--color-off-black)',
                        marginBottom: '8px',
                      }}
                    >
                      {plan.name}
                    </h2>

                    <p style={{ fontSize: '14px', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.5 }}>
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div style={{ marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid var(--color-ash)' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-untitled-serif)',
                          fontSize: '32px',
                          fontWeight: 400,
                          color: 'var(--color-off-black)',
                        }}
                      >
                        {plan.pricingDisplay}
                      </div>
                      <div className="mono-helper" style={{ marginTop: '6px' }}>
                        {plan.duration}
                      </div>
                    </div>

                    {/* Features list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                      {plan.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <Check size={16} color="var(--color-lake-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-off-black)', lineHeight: 1.4 }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className={isPeriwinkle ? 'btn-primary' : 'btn-secondary'}
                      style={{ width: '100%', fontSize: '13px', padding: '14px 20px' }}
                    >
                      <span>{plan.ctaText}</span>
                      {isPeriwinkle && <span className="arrow-glyph">▸</span>}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Embedded Interactive Project Scope & Budget Estimator */}
        <div id="estimator" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
          <ScrollReveal animation="fade-up">
            <ProjectCostEstimator />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
