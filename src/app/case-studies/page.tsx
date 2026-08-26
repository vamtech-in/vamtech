import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Engineering Case Studies & Client ROI Track Record',
  description:
    'Explore real-world software engineering case studies, system architecture optimizations, and quantifiable business ROI delivered by VAMTech across FinTech, Logistics, and HealthTech.',
  keywords: [
    'Software Case Studies',
    'FinTech App Architecture Case Study',
    'Scalable Web App Performance Outcomes',
    'Software Engineering ROI',
    'VAMTech Case Studies',
  ],
  alternates: {
    canonical: 'https://vamtech.io/case-studies',
  },
  openGraph: {
    title: 'Software Engineering Case Studies | VAMTech',
    description:
      'Quantifiable engineering outcomes: 99.99% uptime, 4x latency reductions, and rapid market launch.',
    url: 'https://vamtech.io/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <AtmosphericWash variant="coral-sky" size={540} top="-80px" left="-100px" opacity={0.45} />
      <AtmosphericWash variant="sky-mint" size={600} top="700px" right="-120px" opacity={0.4} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Editorial Journal Header */}
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
                Production Track Record & Engineering Dispatches
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
              Case Studies: Problem → Strategy → ROI
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
              Real-world systems engineered to eliminate latency bottlenecks, reduce infrastructure waste, and scale enterprise throughput.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Deep Dives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {caseStudiesData.map((study, index) => (
            <ScrollReveal key={study.id} animation="fade-up" delay={index * 100}>
              <article
                id={study.slug}
                className="monad-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '48px',
                  scrollMarginTop: '100px',
                }}
              >
                {/* Meta Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--color-periwinkle-mist)',
                        color: 'var(--color-lake-blue)',
                        fontSize: '11px',
                        fontFamily: 'var(--font-abc-diatype-mono)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {study.industry}
                    </span>
                    <span className="mono-helper">• {study.clientType}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={13} color="var(--color-smoke)" />
                    <span className="mono-helper">ENGAGEMENT: {study.duration}</span>
                  </div>
                </div>

                {/* Case Title */}
                <h2
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: 'clamp(28px, 3.6vw, 40px)',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '20px',
                    lineHeight: 1.2,
                  }}
                >
                  {study.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    fontSize: '16px',
                    color: 'var(--color-graphite)',
                    lineHeight: 1.6,
                    marginBottom: '36px',
                    maxWidth: '880px',
                  }}
                >
                  {study.summary}
                </p>

                {/* 3-Column Problem -> Strategy -> ROI Matrix */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    marginBottom: '36px',
                  }}
                  className="study-grid"
                >
                  {/* The Problem */}
                  <div
                    style={{
                      padding: '28px',
                      borderRadius: '24px',
                      backgroundColor: 'var(--color-parchment)',
                      border: '1px solid var(--color-ash)',
                    }}
                  >
                    <div className="mono-helper" style={{ marginBottom: '8px', color: '#a83616' }}>
                      [01] THE BOTTLENECK
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', fontWeight: 400, marginBottom: '12px' }}>
                      Architectural Pain
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>
                      {study.problem}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div
                    style={{
                      padding: '28px',
                      borderRadius: '24px',
                      backgroundColor: 'var(--color-parchment)',
                      border: '1px solid var(--color-ash)',
                    }}
                  >
                    <div className="mono-helper" style={{ marginBottom: '8px', color: 'var(--color-lake-blue)' }}>
                      [02] ENGINEERING STRATEGY
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', fontWeight: 400, marginBottom: '12px' }}>
                      System Solution
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>
                      {study.approach}
                    </p>
                  </div>

                  {/* Measurable ROI */}
                  <div
                    style={{
                      padding: '28px',
                      borderRadius: '24px',
                      backgroundColor: 'var(--color-periwinkle-mist)',
                      border: '1px solid rgba(160, 181, 235, 0.5)',
                    }}
                  >
                    <div className="mono-helper" style={{ marginBottom: '8px', color: '#0b5930' }}>
                      [03] MEASURABLE ROI
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', fontWeight: 400, marginBottom: '12px' }}>
                      Production Impact
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {study.metrics.map((m, i) => (
                        <div key={i} style={{ borderBottom: i < study.metrics.length - 1 ? '1px solid rgba(160, 181, 235, 0.4)' : 'none', paddingBottom: i < study.metrics.length - 1 ? '8px' : 0 }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-graphite)' }}>{m.label}</span>
                            <span style={{ fontSize: '15px', fontFamily: 'var(--font-abc-diatype-mono)', fontWeight: 500, color: 'var(--color-lake-blue)' }}>{m.value}</span>
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--color-smoke)', marginTop: '2px' }}>{m.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Client Quote & Technologies */}
                <div
                  style={{
                    borderTop: '1px solid var(--color-ash)',
                    paddingTop: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                  }}
                >
                  {study.testimonial && (
                    <div style={{ maxWidth: '640px' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--color-graphite)', marginBottom: '6px' }}>
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div className="mono-helper">
                        — {study.testimonial.author}, {study.testimonial.role} ({study.testimonial.company})
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--color-parchment)',
                          border: '1px solid var(--color-ash)',
                          fontSize: '11px',
                          fontFamily: 'var(--font-abc-diatype-mono)',
                          color: 'var(--color-off-black)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
