import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { 
  Code2, 
  Smartphone, 
  Bot, 
  Cloud, 
  Palette, 
  TrendingUp, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Zap, 
  Users 
} from 'lucide-react';

export const metadata = {
  title: 'Engineering Services & Technology Offerings — VAM|Tech',
  description:
    'Explore VAM|Tech’s full spectrum of software development, web & mobile engineering, AI automation, cloud devops, and digital transformation services.',
};

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Smartphone: <Smartphone size={24} />,
  Bot: <Bot size={24} />,
  Cloud: <Cloud size={24} />,
  Palette: <Palette size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Services Hero Header */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '72px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="tech-grid-pattern"
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <div className="section-badge">Comprehensive Offerings</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            End-to-End Technology Engineering Services
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            From concept prototyping to multi-region cloud deployment and AI automation, we engineer software that drives real business results.
          </p>
        </div>
      </section>

      {/* 6 Services In-Depth Sections */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="corporate-card"
                style={{
                  padding: '44px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    alignItems: 'start',
                  }}
                >
                  {/* Left: Info */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          backgroundColor: `${service.accentColor}15`,
                          color: service.accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {iconMap[service.icon] || <Code2 size={24} />}
                      </div>
                      <div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                          SERVICE 0{index + 1}
                        </span>
                        <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)' }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '24px' }}>
                      {service.fullDescription}
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '14.5px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                        Key Sub-Offerings:
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.subOfferings.map((sub, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px' }}>
                            <span style={{ color: service.accentColor, marginTop: '2px' }}>
                              <Check size={16} />
                            </span>
                            <div>
                              <strong style={{ color: 'var(--text-main)' }}>{sub.title}:</strong>{' '}
                              <span style={{ color: 'var(--text-muted)' }}>{sub.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        TECHNOLOGY STACK
                      </span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {service.techStack.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '12px',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              backgroundColor: '#f1f5f9',
                              color: '#334155',
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables & Specs Box */}
                  <div
                    style={{
                      padding: '32px',
                      borderRadius: '12px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
                      Architectural Capabilities
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {service.capabilities.map((cap, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                          <Check size={14} color="var(--color-brand-blue)" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
                      Included Deliverables
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                      {service.deliverables.map((del, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                          <ShieldCheck size={14} color="#10b981" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Models Band */}
          <div style={{ padding: '48px', borderRadius: '16px', backgroundColor: 'var(--bg-dark)', color: '#ffffff' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
              <div className="section-badge section-badge-dark">Flexible Collaboration</div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                How We Partner with You
              </h3>
              <p style={{ fontSize: '15px', color: '#94a3b8' }}>
                Choose the collaboration model that fits your operational needs, project scope, and timeline.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              <div className="corporate-card-dark" style={{ padding: '28px' }}>
                <div style={{ color: 'var(--color-brand-cyan)', marginBottom: '14px' }}>
                  <Users size={24} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Dedicated Engineering Pod
                </h4>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '16px' }}>
                  An autonomous team of senior full-stack engineers, architects, and designers integrated directly with your workflow.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-brand-cyan)' }}>
                  Best for: Ongoing product evolution &amp; scale
                </div>
              </div>

              <div className="corporate-card-dark" style={{ padding: '28px' }}>
                <div style={{ color: 'var(--color-brand-blue)', marginBottom: '14px' }}>
                  <Layers size={24} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Fixed-Scope Project Delivery
                </h4>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '16px' }}>
                  Clearly defined milestones, deliverables, and upfront pricing for MVPs, major feature rollouts, and refactors.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-brand-cyan)' }}>
                  Best for: MVPs, redesigns &amp; defined releases
                </div>
              </div>

              <div className="corporate-card-dark" style={{ padding: '28px' }}>
                <div style={{ color: '#10b981', marginBottom: '14px' }}>
                  <Zap size={24} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Architecture &amp; CTO Advisory
                </h4>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '16px' }}>
                  Senior technical guidance on cloud migration, security audits, AI integration, and high-level system blueprints.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-brand-cyan)' }}>
                  Best for: Technical audits &amp; architectural oversight
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
