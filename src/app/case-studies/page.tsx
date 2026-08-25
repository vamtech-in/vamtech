import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { caseStudiesData } from '@/data/caseStudies';
import { 
  TrendingUp, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export const metadata = {
  title: 'Case Studies & Production Track Record | Vamtech',
  description: 'Explore quantifiable outcomes and software engineering case studies delivered by Vamtech across FinTech, Logistics, and HealthTech.',
};

export default function CaseStudiesPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="glow-orb orb-pink" style={{ top: '100px', left: '-100px' }} />
      <div className="glow-orb orb-blue" style={{ top: '700px', right: '-100px' }} />

      <div className="container">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
              <TrendingUp size={14} />
              <span>Proven Engineering Track Record</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
              Case Studies: <span className="text-gradient">Problem $\rightarrow$ Impact</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
              Real-world systems engineered to solve high-stakes bottlenecks, reduce infrastructure waste, and scale enterprise throughput.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Deep Dives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {caseStudiesData.map((study, index) => (
            <ScrollReveal key={study.id} animation="fade-up" delay={index * 120}>
              <article
                id={study.slug}
                className="glass-card"
                style={{
                  padding: '48px',
                  borderRadius: '24px',
                  scrollMarginTop: '100px',
                }}
              >
                {/* Meta Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="badge-pill cyan" style={{ fontSize: '0.8rem' }}>
                      {study.industry}
                    </span>
                    <span style={{ fontSize: '0.86rem', color: '#94A3B8' }}>
                      {study.clientType}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '0.85rem' }}>
                    <Clock size={16} />
                    <span>Timeline: {study.duration}</span>
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#FFFFFF', marginBottom: '16px' }}>
                  {study.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '36px' }}>
                  {study.summary}
                </p>

                {/* Problem vs Solution vs Metrics 3-Col Layout */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '24px',
                    marginBottom: '36px',
                  }}
                  className="study-grid"
                >
                  {/* 1. Problem */}
                  <div
                    style={{
                      background: 'rgba(255, 94, 58, 0.05)',
                      border: '1px solid rgba(255, 94, 58, 0.2)',
                      borderRadius: '16px',
                      padding: '24px',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#FF5E3A', marginBottom: '8px' }}>
                      1. The Bottleneck
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.6' }}>
                      {study.problem}
                    </p>
                  </div>

                  {/* 2. Engineering Approach */}
                  <div
                    style={{
                      background: 'rgba(0, 102, 255, 0.05)',
                      border: '1px solid rgba(0, 102, 255, 0.2)',
                      borderRadius: '16px',
                      padding: '24px',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#38BDF8', marginBottom: '8px' }}>
                      2. Engineering Strategy
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.6' }}>
                      {study.approach}
                    </p>
                  </div>

                  {/* 3. Metrics */}
                  <div
                    style={{
                      background: 'rgba(224, 26, 138, 0.05)',
                      border: '1px solid rgba(224, 26, 138, 0.2)',
                      borderRadius: '16px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#F472B6', marginBottom: '8px' }}>
                        3. Quantified Impact
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {study.metrics.map((m, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                              <span className="text-gradient">{m.value}</span>
                            </div>
                            <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{m.label} ({m.description})</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                {study.testimonial && (
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderLeft: '3px solid #E01A8A',
                      padding: '20px 24px',
                      borderRadius: '0 14px 14px 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                    }}
                  >
                    <Quote size={28} color="#E01A8A" style={{ flexShrink: 0, opacity: 0.8 }} />
                    <div>
                      <p style={{ fontSize: '0.96rem', fontStyle: 'italic', color: '#E2E8F0', marginBottom: '8px', lineHeight: '1.6' }}>
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                        <strong style={{ color: '#FFFFFF' }}>{study.testimonial.author}</strong> • {study.testimonial.role}, {study.testimonial.company}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <span>Build Your Success Story with Vamtech</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
