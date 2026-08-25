import React from 'react';
import Link from 'next/link';
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
  Zap 
} from 'lucide-react';

export const metadata = {
  title: 'Engineering Services & Capabilities | Vamtech',
  description: 'Deep architectural dive into Vamtech services: Custom Software, Cloud DevOps, AI & RAG Automation, and Next.js Web Applications.',
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={28} />,
    CloudCog: <CloudCog size={28} />,
    Sparkles: <Sparkles size={28} />,
    Layout: <Layers size={28} />,
  };

  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      {/* Glow */}
      <div className="glow-orb orb-blue" style={{ top: '50px', right: '-150px' }} />
      <div className="glow-orb orb-pink" style={{ top: '600px', left: '-150px' }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
            <Terminal size={14} />
            <span>Architecture & Capabilities</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
            Enterprise Engineering <span className="text-gradient">Capabilities</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
            We translate intricate technical challenges into resilient, maintainable, and high-performance digital infrastructure.
          </p>
        </div>

        {/* Detailed Services Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.slug}
                className="glass-card"
                style={{
                  padding: '48px',
                  borderRadius: '24px',
                  borderTop: `3px solid ${service.colorAccent}`,
                  position: 'relative',
                  scrollMarginTop: '100px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                  className="service-detail-grid"
                >
                  {/* Left Column: Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                      <div
                        style={{
                          padding: '12px',
                          borderRadius: '14px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: service.colorAccent,
                        }}
                      >
                        {iconMap[service.iconName]}
                      </div>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#38BDF8',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {service.timelineAvg}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '14px' }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '24px' }}>
                      {service.tagline}
                    </p>

                    {/* Problem Solved vs Approach */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                      <div
                        style={{
                          background: 'rgba(255, 94, 58, 0.06)',
                          borderLeft: '3px solid #FF5E3A',
                          padding: '16px',
                          borderRadius: '0 12px 12px 0',
                        }}
                      >
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#FF5E3A', marginBottom: '4px' }}>
                          The Challenge We Solve
                        </div>
                        <p style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: '1.5' }}>
                          {service.problemSolved}
                        </p>
                      </div>

                      <div
                        style={{
                          background: 'rgba(0, 102, 255, 0.06)',
                          borderLeft: '3px solid #0066FF',
                          padding: '16px',
                          borderRadius: '0 12px 12px 0',
                        }}
                      >
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#38BDF8', marginBottom: '4px' }}>
                          Our Engineering Approach
                        </div>
                        <p style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: '1.5' }}>
                          {service.engineeringApproach}
                        </p>
                      </div>
                    </div>

                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-primary">
                      <span>Request Scope & Estimate</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Right Column: Deliverables & Tech Matrix */}
                  <div
                    style={{
                      background: 'rgba(10, 15, 29, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '32px',
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '18px', fontWeight: 700 }}>
                      Key Architectural Deliverables
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                      {service.keyDeliverables.map((del, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={18} color={service.colorAccent} style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.92rem', color: '#F1F5F9', lineHeight: '1.5' }}>{del}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                      <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#94A3B8', fontWeight: 600, marginBottom: '10px' }}>
                        Production Tech Stack
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: '0.82rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '5px 12px',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: '#38BDF8',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div
          className="glass-card"
          style={{
            marginTop: '80px',
            textAlign: 'center',
            padding: '60px 32px',
            background: 'linear-gradient(135deg, rgba(224, 26, 138, 0.15) 0%, rgba(0, 102, 255, 0.2) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Need a Custom Architecture Review?
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Our Technical Directors will analyze your current code repository, database bottleneck, or product roadmap at zero cost.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <span>Book 30-Min Architecture Discovery</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
}
