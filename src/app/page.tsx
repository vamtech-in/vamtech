import React from 'react';
import Link from 'next/link';
import AudienceLens from '@/components/AudienceLens';
import ProjectCostEstimator from '@/components/ProjectCostEstimator';
import ContactForm from '@/components/ContactForm';
import { servicesData } from '@/data/services';
import { caseStudiesData } from '@/data/caseStudies';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Lock, 
  Cpu, 
  Users, 
  TrendingUp, 
  ChevronRight, 
  Sparkles,
  Layers,
  Code2,
  CloudCog
} from 'lucide-react';

export default function HomePage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={24} />,
    CloudCog: <CloudCog size={24} />,
    Sparkles: <Sparkles size={24} />,
    Layout: <Layers size={24} />,
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glowing orbs */}
      <div className="glow-orb orb-pink" style={{ top: '100px', left: '-100px' }} />
      <div className="glow-orb orb-blue" style={{ top: '350px', right: '-100px' }} />
      <div className="glow-orb orb-orange" style={{ top: '1200px', left: '20%' }} />

      {/* Hero Section */}
      <section style={{ padding: '80px 0 100px', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Tagline pill */}
          <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
            <div className="badge-pill brand" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
              <Sparkles size={16} />
              <span>Engineered for Scale, Security & High Concurrency</span>
            </div>
          </div>

          {/* Main H1 Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              maxWidth: '960px',
              margin: '0 auto 24px',
              letterSpacing: '-1.5px',
            }}
          >
            We Architect <span className="text-gradient">Mission-Critical</span> Software & Autonomous AI Systems
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#94A3B8',
              maxWidth: '740px',
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            Vamtech partners with engineering leaders and ambitious founders to build high-throughput backend engines, modern cloud platforms, and enterprise AI workflows.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
              marginBottom: '64px',
            }}
          >
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
              <span>Explore Case Studies</span>
            </Link>
          </div>

          {/* Verified Stats Band (Social Proof Requirement) */}
          <div
            className="glass-card"
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: '32px 40px',
              borderRadius: '20px',
              background: 'rgba(14, 20, 36, 0.65)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
              }}
              className="stats-grid"
            >
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                  <span className="text-gradient">99.99%</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px', fontWeight: 600 }}>
                  Production SLA Delivered
                </div>
              </div>

              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                  <span style={{ color: '#38BDF8' }}>40+</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px', fontWeight: 600 }}>
                  Enterprise Systems Shipped
                </div>
              </div>

              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                  <span style={{ color: '#F472B6' }}>4.2x</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px', fontWeight: 600 }}>
                  Avg Client Velocity Boost
                </div>
              </div>

              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                  <span style={{ color: '#4ADE80' }}>$32M+</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px', fontWeight: 600 }}>
                  Value & Savings Created
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Selector Section */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-pill cyan" style={{ marginBottom: '12px' }}>
              <Users size={14} />
              <span>Tailored Stakeholder Perspectives</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Built for Every Decision-Maker on Your Team
            </h2>
            <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '0 auto', fontSize: '1.02rem' }}>
              B2B software purchases require buy-in from engineering, product, legal, and finance. Select your role to see the exact proofs that matter to you.
            </p>
          </div>

          <AudienceLens />
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section style={{ padding: '80px 0', position: 'relative' }} id="services">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="badge-pill brand" style={{ marginBottom: '12px' }}>
                <Terminal size={14} />
                <span>Our Core Capabilities</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '12px' }}>
                End-to-End Software Engineering
              </h2>
              <p style={{ color: '#94A3B8', maxWidth: '600px', fontSize: '1rem' }}>
                From high-throughput transaction backends to intelligent RAG pipelines, we engineer software that drives verifiable outcomes.
              </p>
            </div>

            <Link href="/services" className="btn-secondary">
              <span>View All Services & Tech Stacks</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid-2">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `2px solid ${service.colorAccent}`,
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        padding: '12px',
                        borderRadius: '14px',
                        background: `rgba(255, 255, 255, 0.05)`,
                        color: service.colorAccent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {iconMap[service.iconName]}
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#CBD5E1',
                      }}
                    >
                      {service.metricsHighlight}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '10px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {service.tagline}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {service.keyDeliverables.slice(0, 3).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                        <CheckCircle2 size={16} color={service.colorAccent} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#94A3B8',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: service.colorAccent,
                    }}
                  >
                    <span>Read Architecture Blueprint</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-pill brand" style={{ marginBottom: '12px' }}>
              <TrendingUp size={14} />
              <span>Proven Results • Zero Fluff</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Engineering Case Studies & Measured Outcomes
            </h2>
            <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '0 auto', fontSize: '1.02rem' }}>
              We don&apos;t just deliver code—we deliver business outcomes with verifiable metrics.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {study.industry}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      {study.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '12px', lineHeight: '1.3' }}>
                    {study.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '20px', lineHeight: '1.6' }}>
                    {study.summary}
                  </p>

                  {/* Highlights Metric Callout */}
                  <div
                    style={{
                      background: 'rgba(0, 102, 255, 0.08)',
                      border: '1px solid rgba(0, 102, 255, 0.2)',
                      borderRadius: '12px',
                      padding: '14px',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                      <span className="text-gradient">{study.metrics[0].value}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600 }}>
                      {study.metrics[0].label}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/case-studies#${study.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#38BDF8',
                  }}
                >
                  <span>View Problem $\rightarrow$ Solution Breakdown</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/case-studies" className="btn-secondary">
              <span>Explore All Client Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Vamtech - Concrete Differentiators */}
      <section style={{ padding: '80px 0', background: 'rgba(14, 20, 36, 0.4)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-pill cyan" style={{ marginBottom: '12px' }}>
              <ShieldCheck size={14} />
              <span>Why Engineering Leaders Choose Us</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Not Another Generic Dev Agency
            </h2>
            <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '0 auto', fontSize: '1.02rem' }}>
              We eliminate traditional agency bloat and deliver direct senior technical horsepower.
            </p>
          </div>

          <div className="grid-3">
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 94, 58, 0.15)', color: '#FF5E3A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '10px' }}>
                0% Junior Handoffs
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Traditional agencies pitch senior leaders then secretly hand off work to junior trainees. At Vamtech, you work directly with senior architects with 6+ years of production experience.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(224, 26, 138, 0.15)', color: '#E01A8A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '10px' }}>
                100% IP Ownership & Clean Handover
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                No vendor lock-in, proprietary runtime black boxes, or hostage code. Every line of code, Dockerfile, Terraform script, and schema belongs entirely to your company.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 102, 255, 0.15)', color: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '10px' }}>
                Predictable Sprints & Warranty
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Weekly working staging demos, clear roadmap milestones, and a 30-day post-launch warranty with guaranteed bug-free delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Cost Estimator */}
      <section style={{ padding: '80px 0' }} id="estimator">
        <div className="container">
          <ProjectCostEstimator />
        </div>
      </section>

      {/* Interactive Contact & Intake Section */}
      <section style={{ padding: '80px 0 100px', position: 'relative' }} id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-pill brand" style={{ marginBottom: '12px' }}>
              <Sparkles size={14} />
              <span>Let&apos;s Build Together</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Ready to Accelerate Your Roadmap?
            </h2>
            <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '0 auto', fontSize: '1.02rem' }}>
              Submit your project scope below or book an architecture discovery session with our technical leads.
            </p>
          </div>

          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
