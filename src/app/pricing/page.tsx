import React from 'react';
import Link from 'next/link';
import ProjectCostEstimator from '@/components/ProjectCostEstimator';
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
  title: 'Engagement Models & Transparent Pricing | Vamtech',
  description: 'Explore Vamtech transparent engagement models: Fixed-Scope MVP Sprints, Dedicated Engineering Squads, and Fractional CTO Retainers.',
};

export default function PricingPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="glow-orb orb-orange" style={{ top: '80px', left: '-120px' }} />
      <div className="glow-orb orb-blue" style={{ top: '650px', right: '-100px' }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>Predictable Commercial Models</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
            Transparent <span className="text-gradient">Engagement Models</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
            No surprise billing, scope ambiguities, or hidden retainer lock-ins. Pick the engagement model that matches your product maturity.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid-3" style={{ marginBottom: '96px' }}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: plan.popular ? '2px solid rgba(224, 26, 138, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: plan.popular ? '0 15px 40px -10px rgba(224, 26, 138, 0.3)' : 'none',
                position: 'relative',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: plan.popular ? 'var(--gradient-primary)' : 'rgba(0, 102, 255, 0.9)',
                    color: '#FFFFFF',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '24px', minHeight: '44px', lineHeight: '1.5' }}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {plan.pricingDisplay}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#38BDF8', fontWeight: 600 }}>
                    {plan.duration}
                  </div>
                </div>

                {/* Best For Callout */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    padding: '14px',
                    fontSize: '0.82rem',
                    color: '#CBD5E1',
                    marginBottom: '24px',
                    lineHeight: '1.5',
                  }}
                >
                  <strong style={{ color: '#FFFFFF' }}>Best For:</strong> {plan.bestFor}
                </div>

                {/* Feature checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {plan.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(74, 222, 128, 0.15)',
                          color: '#4ADE80',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', textAlign: 'center', fontSize: '0.94rem' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Live Estimator Section */}
        <div style={{ marginBottom: '80px' }}>
          <ProjectCostEstimator />
        </div>

        {/* FAQs */}
        <div className="glass-card" style={{ padding: '48px', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '32px', textAlign: 'center' }}>
            Frequently Asked Commercial Questions
          </h3>

          <div className="grid-2" style={{ gap: '32px' }}>
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px' }}>
                How do milestone payments work for Fixed-Scope projects?
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Fixed projects are split into structured deliverables (e.g., Architecture Sign-off, Core API Milestone, Beta Staging Demo, Production Handover). You only release funds upon verifying working software.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Do we own 100% of the intellectual property?
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Yes, unequivocally. From day one, all Git commits, architecture schemas, Docker configurations, and custom algorithms belong 100% to your enterprise under standard master services agreements.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px' }}>
                What happens after the product is launched?
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Every fixed delivery includes a 30-day bug warranty period. Afterwards, you can either transition the codebase to your in-house team with our comprehensive onboarding docs or retain our squad on a monthly maintenance SLA.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px' }}>
                How quickly can a dedicated squad start?
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Our core pods are pre-vetted and can integrate into your Jira/Slack workflow and repository within <strong>1 to 2 weeks</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
