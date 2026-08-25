import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
import { servicesData } from '@/data/services';
import { 
  Code2, 
  CloudCog, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Zap,
  Activity
} from 'lucide-react';

export const metadata = {
  title: 'Engineering Services & Capabilities — Vamtech Journal',
  description: 'Deep architectural dive into Vamtech services: Custom Software, Cloud DevOps, AI & RAG Automation, and Next.js Web Applications.',
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={24} />,
    CloudCog: <CloudCog size={24} />,
    Sparkles: <Sparkles size={24} />,
    Layout: <Layers size={24} />,
  };

  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Pastel Atmospheric Washes */}
      <AtmosphericWash variant="coral-sky" size={560} top="-100px" right="-120px" opacity={0.45} />
      <AtmosphericWash variant="sky-mint" size={620} top="800px" left="-140px" opacity={0.4} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Editorial Header */}
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
                Architecture & Engineering Services
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
              Enterprise Engineering Capabilities
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
              We translate complex technical challenges into resilient, maintainable, and high-performance digital infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Detailed Services Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
              <section
                id={service.slug}
                className="monad-card"
                style={{
                  backgroundColor: index === 0 ? 'var(--color-periwinkle-mist)' : '#ffffff',
                  padding: '48px 40px',
                  scrollMarginTop: '100px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '48px',
                    alignItems: 'start',
                  }}
                  className="service-detail-grid"
                >
                  {/* Left Column: Scope & Methodology */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                      <div
                        style={{
                          padding: '12px',
                          borderRadius: '16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--color-ash)',
                          color: 'var(--color-lake-blue)',
                        }}
                      >
                        {iconMap[service.iconName] || <Code2 size={24} />}
                      </div>
                      <div>
                        <span className="mono-helper">{service.tagline}</span>
                        <h2
                          style={{
                            fontFamily: 'var(--font-untitled-serif)',
                            fontSize: 'clamp(26px, 3vw, 36px)',
                            fontWeight: 400,
                            color: 'var(--color-off-black)',
                            margin: 0,
                          }}
                        >
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <div className="mono-helper" style={{ marginBottom: '6px' }}>PROBLEM STATEMENT</div>
                      <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '14.5px', color: 'var(--color-off-black)', lineHeight: 1.5, marginBottom: '14px' }}>
                        {service.problemSolved}
                      </p>
                      <div className="mono-helper" style={{ marginBottom: '6px' }}>ENGINEERING APPROACH</div>
                      <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '14.5px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>
                        {service.engineeringApproach}
                      </p>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                      <div className="mono-helper" style={{ marginBottom: '12px' }}>
                        KEY DELIVERABLES
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.keyDeliverables.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <CheckCircle2 size={16} color="var(--color-lake-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13.5px', color: 'var(--color-graphite)' }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary" style={{ fontSize: '13px', padding: '12px 28px' }}>
                      <span>Schedule {service.title.split(' ')[0]} Discovery</span>
                      <span className="arrow-glyph">▸</span>
                    </Link>
                  </div>

                  {/* Right Column: Architectural Benchmarks & Tech Stack */}
                  <div
                    style={{
                      backgroundColor: index === 0 ? '#ffffff' : 'var(--color-parchment)',
                      border: '1px solid var(--color-ash)',
                      borderRadius: '24px',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                    }}
                  >
                    <div>
                      <div className="mono-helper" style={{ marginBottom: '8px' }}>
                        PRODUCTION METRIC DELTA
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-untitled-serif)',
                          fontSize: '32px',
                          fontWeight: 400,
                          color: 'var(--color-lake-blue)',
                        }}
                      >
                        {service.metricsHighlight}
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--color-smoke)', fontFamily: 'var(--font-abc-diatype-mono)', marginTop: '4px' }}>
                        {service.businessBenefit}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '16px' }}>
                      <div className="mono-helper" style={{ marginBottom: '10px' }}>
                        PREFERRED STACK & PROTOCOLS
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '9999px',
                              backgroundColor: index === 0 ? 'var(--color-parchment)' : '#ffffff',
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

                    <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '16px' }}>
                      <div className="mono-helper" style={{ marginBottom: '6px' }}>
                        TYPICAL SPRINT TIMELINE
                      </div>
                      <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-off-black)' }}>
                        {service.timelineAvg} • Fixed-Scope Milestones
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
