'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import AtmosphericWash from '@/components/AtmosphericWash';
import MonadPipelineDiagram from '@/components/MonadPipelineDiagram';
import AudienceLens from '@/components/AudienceLens';
import SystemArchitectureVisualizer from '@/components/SystemArchitectureVisualizer';
import TechEcosystemExplorer from '@/components/TechEcosystemExplorer';
import SwissDeliveryJourney from '@/components/SwissDeliveryJourney';
import ProjectCostEstimator from '@/components/ProjectCostEstimator';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Code2, 
  CloudCog, 
  Terminal,
  Activity,
  Workflow,
  Cpu,
  Database,
  Lock,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How does Vamtech guarantee zero-junior handoffs on mission-critical engagements?',
      answer: 'Every project is staffed exclusively by Principal and Senior Staff engineers with 8+ years of production experience in high-concurrency distributed systems, vector search pipelines, and zero-trust cloud architectures. You work directly with architects who write and review every commit.'
    },
    {
      question: 'What is the in-flight zero-copy schema transformation architecture?',
      answer: 'Our proprietary stream normalization engine maps heterogeneous logs, CVE telemetry, and audit events to OCSF (Open Cybersecurity Schema Framework) standard in kernel-level memory with sub-millisecond latency (0.42ms p99) before forwarding to SIEMs, Iceberg data lakes, or vector indexes.'
    },
    {
      question: 'How do your fixed-scope MVP sprints differ from traditional agency models?',
      answer: 'Our MVP sprints are fixed-price, fixed-timeline (typically 4–8 weeks), and deliver fully production-grade, typed codebases with 100% IP ownership, complete CI/CD automation, and SOC 2 Type II compliance scaffolding rather than throwaway prototypes.'
    },
    {
      question: 'What regulatory and security compliance frameworks do you support?',
      answer: 'We provide out-of-the-box architecture alignments for SOC 2 Type II, HIPAA BAA compliance, ISO/IEC 27001, GDPR data residency boundaries, and automated SAST/SCA security pipeline disclosures with strict mTLS encryption.'
    },
    {
      question: 'Can Vamtech squads integrate with our in-house engineering team?',
      answer: 'Yes. Our Dedicated Engineering Squad model embeds senior engineers directly into your sprint rituals, Jira/GitHub workflows, and Slack channels with complete transparency, bi-weekly milestone demonstrations, and automated code review telemetry.'
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Pastel Atmospheric Washes (Monad Signature) */}
      <AtmosphericWash variant="coral-sky" size={680} top="-160px" left="-120px" opacity={0.5} />
      <AtmosphericWash variant="sky-mint" size={600} top="750px" right="-140px" opacity={0.45} />
      <AtmosphericWash variant="gold-coral" size={540} top="2200px" left="-100px" opacity={0.4} />

      {/* ====================================================================
          1. Hero Section — Pure Typographic Editorial Hero
          ==================================================================== */}
      <section style={{ padding: '80px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Tagline / System Status Pill */}
          <ScrollReveal animation="fade-down" delay={100}>
            <div style={{ display: 'inline-flex', marginBottom: '28px' }}>
              <span
                className="pipeline-node-tag"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 20px',
                  fontSize: '12px',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-lake-blue)',
                    display: 'inline-block',
                  }}
                />
                <span>EDITORIAL TECH JOURNAL & PRODUCTION LABS</span>
              </span>
            </div>
          </ScrollReveal>

          {/* Untitled Serif Headline locked at weight 400 */}
          <ScrollReveal animation="fade-up" delay={200}>
            <h1
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(40px, 6.2vw, 80px)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-off-black)',
                letterSpacing: '-0.025em',
                maxWidth: '1080px',
                margin: '0 auto 28px',
              }}
            >
              Architecting mission-critical software, zero-copy data pipelines, & autonomous AI.
            </h1>
          </ScrollReveal>

          {/* Subtext in ABC Diatype Mono at 20px Graphite */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                color: 'var(--color-graphite)',
                maxWidth: '780px',
                margin: '0 auto 48px',
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
              }}
            >
              Vamtech partners with engineering executives and ambitious founders to build high-throughput backend engines, modern cloud platforms, and enterprise AI workflows.
            </p>
          </ScrollReveal>

          {/* Centered Actions: Lake Blue Primary Pill (single CTA) + Ghost Pill */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '18px',
                flexWrap: 'wrap',
                marginBottom: '72px',
              }}
            >
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '14px' }}>
                <span>Get a Demo</span>
                <span className="arrow-glyph">▸</span>
              </Link>
              <Link href="/case-studies" className="btn-ghost" style={{ padding: '16px 32px', fontSize: '14px' }}>
                <span>Read Technical Journal</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Key SLA Telemetry Strip */}
          <ScrollReveal animation="fade-up" delay={500}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '32px',
                padding: '16px 36px',
                borderRadius: '9999px',
                border: '1px solid var(--color-ash)',
                backgroundColor: '#ffffff',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mono-helper">P99 LATENCY</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-lake-blue)' }}>
                  &lt;1.2ms
                </span>
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: 'var(--color-ash)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mono-helper">THROUGHPUT</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>
                  120k Req/Sec
                </span>
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: 'var(--color-ash)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mono-helper">COMPLIANCE</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>
                  SOC 2 Type II
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          2. Social Proof Partner Logo Strip (Grayscale, 32px gap, single row)
          ==================================================================== */}
      <section style={{ padding: '32px 0 64px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="mono-helper">
              TRUSTED BY ENGINEERING LEADERS AT SCALE
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '48px',
              flexWrap: 'wrap',
              opacity: 0.7,
              filter: 'grayscale(100%)',
            }}
          >
            {[
              'DATALINK CORP',
              'CLOUDSCALE NETWORKS',
              'FINANCIAL PROTOCOL',
              'HEALTHPULSE AI',
              'SYNAPSE LOGISTICS',
              'ZERO-TRUST MESH',
            ].map((partner, index) => (
              <span
                key={index}
                style={{
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-off-black)',
                }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Signature Monad Data Pipeline Diagram Section
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <MonadPipelineDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          4. Feature Cards Grid & Elevated Periwinkle Mist Card
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
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
                Core Capabilities
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '16px',
              }}
            >
              Engineered with Mathematical Rigor
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '16px', color: 'var(--color-graphite)' }}>
              We build systems that withstand severe production spikes, fail over deterministically, and preserve state integrity.
            </p>
          </div>

          {/* 1. Elevated Feature Card (Periwinkle Mist #cfdaf5) with Gradient Illustration */}
          <ScrollReveal animation="fade-up">
            <div
              className="monad-card-periwinkle"
              style={{
                marginBottom: '32px',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-lake-blue)',
                      fontWeight: 500,
                    }}
                  >
                    FLAGSHIP ARCHITECTURE
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: 'clamp(24px, 3.2vw, 36px)',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '16px',
                  }}
                >
                  In-Flight Data Transforms & Zero-Copy Normalization
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    fontSize: '15px',
                    color: 'var(--color-off-black)',
                    lineHeight: 1.6,
                    marginBottom: '28px',
                  }}
                >
                  Process multi-gigabit event streams with deterministic zero-copy memory buffers. Translate raw JSON/Syslog to structured OCSF schemas in under 0.5ms before routing to downstream lakes and analytical SIEMs.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/services#custom-software" className="btn-secondary" style={{ fontSize: '13px' }}>
                    <span>Explore Transformation Specs</span>
                  </Link>
                  <Link href="/case-studies" className="text-link-arrow" style={{ fontSize: '13px' }}>
                    <span>View Benchmark Report →</span>
                  </Link>
                </div>
              </div>

              {/* Gradient Illustration: Overlapping Pastel Shapes (Coral -> Sky Blue -> Mint) */}
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(160, 181, 235, 0.5)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}
              >
                {/* Overlapping translucent geometric circles */}
                <div
                  style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #ff9473 0%, rgba(255, 148, 115, 0.4) 70%)',
                    top: '20px',
                    left: '30px',
                    mixBlendMode: 'multiply',
                    filter: 'blur(4px)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #a0b5eb 0%, rgba(160, 181, 235, 0.4) 70%)',
                    bottom: '10px',
                    right: '40px',
                    mixBlendMode: 'multiply',
                    filter: 'blur(4px)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #a7fccd 0%, rgba(167, 252, 205, 0.5) 70%)',
                    top: '60px',
                    right: '60px',
                    mixBlendMode: 'multiply',
                    filter: 'blur(2px)',
                  }}
                />

                {/* Overlaid Data Node Pill */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '9999px',
                    border: '1px solid var(--color-ash)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <Workflow size={18} color="var(--color-lake-blue)" />
                  <span style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', fontWeight: 500 }}>
                    STREAM_OCSF_TRANSFORM :: 0.42ms
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Standard Feature Cards (Parchment, 1px Ash border, 40px radius, 40px padding) */}
          <div className="grid-3">
            {[
              {
                icon: <Code2 size={20} />,
                title: 'High-Concurrency Backends',
                desc: 'Go and Rust microservice meshes engineered for sub-millisecond p99 execution, lock-free channel concurrency, and zero memory leaks.',
                badge: '120k req/s',
                link: '/services#custom-software'
              },
              {
                icon: <Sparkles size={20} />,
                title: 'Vector RAG & AI Workflows',
                desc: 'Deterministic LLM guardrails, hybrid dense/sparse vector retrieval, and automated multi-agent routing for enterprise knowledge bases.',
                badge: '99.4% Precision',
                link: '/services#ai-automation'
              },
              {
                icon: <CloudCog size={20} />,
                title: 'Zero-Trust Cloud & DevOps',
                desc: 'Multi-region Kubernetes clusters orchestrated with Terraform, Cilium eBPF network security, and automated SOC 2 audit telemetry.',
                badge: '99.999% Uptime',
                link: '/services#cloud-devops'
              }
            ].map((card, idx) => (
              <ScrollReveal key={card.title} animation="fade-up" delay={idx * 100}>
                <div
                  className="monad-card"
                  style={{
                    backgroundColor: 'var(--color-parchment)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div
                        style={{
                          padding: '10px',
                          borderRadius: '12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--color-ash)',
                          color: 'var(--color-off-black)',
                        }}
                      >
                        {card.icon}
                      </div>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--color-ash)',
                          fontSize: '11px',
                          fontFamily: 'var(--font-abc-diatype-mono)',
                          color: 'var(--color-lake-blue)',
                          fontWeight: 500,
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-untitled-serif)',
                        fontSize: '24px',
                        fontWeight: 400,
                        color: 'var(--color-off-black)',
                        marginBottom: '12px',
                      }}
                    >
                      {card.title}
                    </h4>

                    <p style={{ fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {card.desc}
                    </p>
                  </div>

                  <Link href={card.link} className="text-link-arrow" style={{ fontSize: '13px' }}>
                    <span>Deep Dive Specification →</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Audience Lens & Stakeholder Perspectives
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="mono-helper">STAKEHOLDER NAVIGATION</span>
            <h2
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginTop: '8px',
              }}
            >
              Audience Lens: Tailored Engineering Value
            </h2>
          </div>

          <ScrollReveal animation="fade-up">
            <AudienceLens />
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          6. Concept B: Swiss Editorial Delivery Journey & SLAs
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SwissDeliveryJourney />
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          7. Architecture Visualizer & Tech Ecosystem
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <ScrollReveal animation="fade-up">
            <SystemArchitectureVisualizer />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <TechEcosystemExplorer />
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          7. Interactive Scope & Budget Estimator
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <ProjectCostEstimator />
          </ScrollReveal>
        </div>
      </section>

      {/* ====================================================================
          8. FAQ Accordion Items (1px solid Ash bottom border only, trailing chevron)
          ==================================================================== */}
      <section style={{ padding: '40px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
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
                Inquiries & Standards
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
              }}
            >
              Frequently Examined Questions
            </h2>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="faq-accordion-item"
                >
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="faq-accordion-header"
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span className="faq-question">
                      {item.question}
                    </span>
                    <span className={`faq-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className="faq-answer"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. Direct Action / Call to Arms Section (Parchment with Lake Blue CTA)
          ==================================================================== */}
      <section style={{ padding: '40px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div
            className="monad-card-dark"
            style={{
              padding: '64px 48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                style={{
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--color-mint)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                }}
              >
                • SPRINT APPOINTMENTS OPEN
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 400,
                color: '#ffffff',
                maxWidth: '760px',
                margin: '0 auto 20px',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to architect high-concurrency systems?
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                fontSize: '16px',
                color: '#cecac8',
                maxWidth: '620px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}
            >
              Schedule a 30-minute architectural discovery call directly with a Principal Systems Engineer. Zero junior handoffs, transparent scoping.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '14px' }}>
                <span>Get a Demo</span>
                <span className="arrow-glyph">▸</span>
              </Link>
              <Link
                href="/pricing"
                className="btn-ghost"
                style={{
                  padding: '16px 32px',
                  fontSize: '14px',
                  borderColor: '#cecac8',
                  color: '#ffffff',
                }}
              >
                <span>View Engagement Sizing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
