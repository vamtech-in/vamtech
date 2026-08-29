'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'starter-mvp',
    isDark: true,
    badge: 'STARTER SPRINT',
    title: 'Starter MVP & Web Launch',
    subtitle: 'From idea to live working product. Perfect for early founders and local businesses.',
    price: '₹24,999',
    period: '/sprint',
    features: [
      'Custom Full-Stack Next.js / React Web or Mobile App',
      'User Auth, Database & Payment Gateway (Razorpay/UPI)',
      'High-speed responsive design with modern animations',
      'Free production deployment on Vercel / Cloud',
      '100% full source code & GitHub repo handover',
      '15-day free post-launch support & bug fixes',
    ],
    ctaText: 'Start Your MVP Sprint',
    ctaLink: '/contact',
  },
  {
    id: 'dedicated-pod',
    isDark: false,
    badge: 'MOST POPULAR',
    title: 'Dedicated Monthly Pod',
    subtitle: 'Continuous engineering velocity to build, scale, and add new features to your product.',
    price: '₹49,999',
    period: '/m.',
    features: [
      'Dedicated Full-Stack Developer on your product',
      'Direct WhatsApp, Slack, or Discord collaboration',
      'Weekly live sprint demos & milestone releases',
      'API integrations, AI automations & database optimization',
      'Flexible month-to-month engagement (zero lock-in)',
      '100% complete IP & code ownership from Day 1',
    ],
    ctaText: 'Hire Dedicated Developer',
    ctaLink: '/contact',
  },
  {
    id: 'custom-architecture',
    isDark: true,
    badge: 'ENTERPRISE / AI',
    title: 'Custom Product Build',
    subtitle: 'Bespoke multi-tenant SaaS architecture, cross-platform mobile apps, or custom AI agent pipelines.',
    price: 'Custom Quote',
    period: '/milestone',
    features: [
      'Custom Web + Cross-Platform Mobile Architecture',
      'Tailored AI Agent & Automation Pipelines',
      'Multi-Tenant Cloud & Database Infrastructure',
      'Direct Architecture Advisory & Milestone Sign-offs',
      'Complete Deployment, CI/CD, & Documentation',
      '30-Day Post-Launch Maintenance & Support',
    ],
    ctaText: 'Request Custom Quote',
    ctaLink: '/contact',
  },
];

export default function PricingSection() {
  return (
    <section className="section-py" id="pricing">
      <div className="container">
        {/* Section Header */}
        <div className="pricing-header">
          <span className="section-kicker">TRANSPARENT SIZING</span>
          <h2 className="section-title-ref">
            Hire <span className="highlight-pill">us</span>
          </h2>
          <p className="pricing-subtitle">
            Simple, predictable commercial models. No hidden retainers, surprise invoices, or junior handoffs.
          </p>
        </div>

        {/* 3-Column Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-ref-card ${plan.isDark ? 'card-dark' : 'card-light'}`}
            >
              {/* Header Info */}
              <div>
                <div className="card-top-badge">
                  <span>{plan.badge}</span>
                </div>

                <h3 className="card-plan-title">{plan.title}</h3>
                <p className="card-plan-subtitle">{plan.subtitle}</p>

                {/* Price Display */}
                <div className="card-price-row">
                  <span className={`price-value ${plan.price.includes(' ') ? 'price-value-text' : ''}`}>{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                {/* Features List */}
                <div className="card-features-list">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="card-feature-item">
                      <div className={`check-circle ${plan.isDark ? 'check-dark' : 'check-light'}`}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '36px' }}>
                <Link
                  href={plan.ctaLink}
                  className={plan.isDark ? 'btn-white-pill' : 'btn-dark-pill'}
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14px' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} color={plan.isDark ? 'var(--color-accent-500)' : '#ffffff'} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .pricing-subtitle {
          font-family: var(--font-body);
          font-size: 16px;
          color: var(--color-gray-600);
          max-width: 520px;
          line-height: 1.55;
        }

        .pricing-ref-card {
          border-radius: 24px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
          position: relative;
        }

        .pricing-ref-card:hover {
          transform: translateY(-4px);
        }

        .card-dark {
          background-color: var(--color-primary-900);
          color: #ffffff;
          border: 1px solid rgba(255, 107, 53, 0.3);
          box-shadow: 0 20px 50px rgba(5, 14, 31, 0.35);
        }

        .card-light {
          background-color: #ffffff;
          color: var(--color-primary-900);
          border: 1px solid var(--border-default);
          box-shadow: 0 10px 35px rgba(5, 14, 31, 0.06);
        }

        .card-top-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .card-dark .card-top-badge {
          background-color: rgba(255, 107, 53, 0.15);
          color: var(--color-accent-400);
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .card-light .card-top-badge {
          background-color: rgba(255, 107, 53, 0.1);
          color: var(--color-accent-500);
          border: 1px solid rgba(255, 107, 53, 0.25);
        }

        .card-plan-title {
          font-family: var(--font-heading);
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
        }

        .card-dark .card-plan-title {
          color: #ffffff !important;
        }

        .card-light .card-plan-title {
          color: var(--color-primary-900) !important;
        }

        .card-plan-subtitle {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .card-dark .card-plan-subtitle {
          color: #cbd5e1 !important;
        }

        .card-light .card-plan-subtitle {
          color: var(--color-gray-600) !important;
        }

        .card-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
          padding-bottom: 24px;
          margin-bottom: 28px;
          border-bottom: 1px solid;
        }

        .card-dark .card-price-row {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .card-light .card-price-row {
          border-color: var(--border-default);
        }

        .price-value {
          font-family: var(--font-heading);
          font-size: clamp(38px, 4.2vw, 50px);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .price-value-text {
          font-size: clamp(28px, 3.2vw, 36px);
          line-height: 1.15;
        }

        .card-dark .price-value {
          color: #ffffff;
        }

        .card-light .price-value {
          color: var(--color-primary-900);
        }

        .price-period {
          font-size: 15px;
          font-weight: 700;
        }

        .card-dark .price-period {
          color: #94a3b8;
        }

        .card-light .price-period {
          color: #64748b;
        }

        .card-features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          line-height: 1.45;
        }

        .card-dark .card-feature-item {
          color: #e2e8f0;
        }

        .card-light .card-feature-item {
          color: #2b3542;
        }

        .check-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .check-dark {
          background-color: rgba(255, 107, 53, 0.2);
          color: var(--color-accent-400);
        }

        .check-light {
          background-color: var(--color-accent-500);
          color: #ffffff;
        }

        @media (max-width: 1040px) {
          .pricing-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
          }
          .pricing-ref-card {
            padding: 28px 24px;
          }
          .pricing-header {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 480px) {
          .pricing-ref-card {
            padding: 24px 20px;
          }
          .price-value {
            font-size: clamp(32px, 8vw, 42px);
          }
          .card-plan-title {
            font-size: clamp(20px, 6vw, 26px);
          }
        }
      `}</style>
    </section>
  );
}
