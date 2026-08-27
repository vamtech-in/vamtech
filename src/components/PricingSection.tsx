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
                  <span className="price-value">{plan.price}</span>
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
                  <ArrowRight size={15} color={plan.isDark ? '#ff5722' : '#ffffff'} />
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
          font-size: 16px;
          color: #556375;
          max-width: 520px;
          line-height: 1.55;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1040px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .pricing-ref-card {
          border-radius: 24px;
          padding: clamp(32px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
        }

        .pricing-ref-card:hover {
          transform: translateY(-4px);
        }

        .card-dark {
          background-color: #0c0e12;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }

        .card-light {
          background-color: #ffffff;
          color: #0c0e12;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 35px rgba(10, 25, 45, 0.06);
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
          background-color: rgba(255, 87, 34, 0.2);
          color: #ff7043;
          border: 1px solid rgba(255, 87, 34, 0.3);
        }

        .card-light .card-top-badge {
          background-color: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .card-plan-title {
          font-size: clamp(24px, 2.8vw, 32px);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
        }

        .card-plan-subtitle {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .card-dark .card-plan-subtitle {
          color: #9aa8b8;
        }

        .card-light .card-plan-subtitle {
          color: #5d6d80;
        }

        .card-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          padding-bottom: 24px;
          margin-bottom: 28px;
          border-bottom: 1px solid;
        }

        .card-dark .card-price-row {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card-light .card-price-row {
          border-color: #eef2f6;
        }

        .price-value {
          font-size: clamp(40px, 4.8vw, 54px);
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .card-dark .price-value {
          color: #ffffff;
        }

        .card-light .price-value {
          color: #0c0e12;
        }

        .price-period {
          font-size: 16px;
          font-weight: 700;
          color: #8c9ba8;
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
          color: #c9d6e4;
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
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .check-light {
          background-color: #0c0e12;
          color: #ffffff;
        }

        @media (max-width: 820px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
