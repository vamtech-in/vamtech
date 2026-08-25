import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
import { 
  ShieldCheck, 
  Terminal, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  GitBranch, 
  Flame 
} from 'lucide-react';

export const metadata = {
  title: 'About Vamtech — Engineering Culture & Principles',
  description: 'Learn about Vamtech: our engineering philosophy, founding principles, senior technical leadership, and commitment to zero junior handoffs.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Vikram Mehta',
      role: 'Founder & Chief Architect',
      specialty: 'Distributed Systems & Go / Rust',
      bio: 'Ex-Distributed Infrastructure Lead with 12+ years designing high-throughput payment pipelines and cloud architectures.',
    },
    {
      name: 'Dr. Sarah Al-Mansoor',
      role: 'Head of AI Engineering',
      specialty: 'Vector RAG & LLM Alignment',
      bio: 'PhD in Machine Learning. Specializes in enterprise guardrails, fine-tuning open weights, and sub-second semantic retrieval.',
    },
    {
      name: 'David Chen',
      role: 'VP of Cloud & Site Reliability',
      specialty: 'Kubernetes, Terraform & Zero-Trust',
      bio: 'Former SRE Lead managing multi-region Kubernetes clusters with strict SOC 2 Type II and ISO 27001 regulatory compliance.',
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Product Engineering',
      specialty: 'Next.js, TypeScript & Design Systems',
      bio: '10+ years engineering ultra-fast frontends, accessible component design systems, and offline-first mobile apps.',
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <AtmosphericWash variant="coral-sky" size={560} top="-100px" right="-100px" opacity={0.45} />
      <AtmosphericWash variant="sky-mint" size={600} top="700px" left="-120px" opacity={0.4} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
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
                Engineering Philosophy & Heritage
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
              Built by Senior Architects for Mission-Critical Scale
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                color: 'var(--color-graphite)',
                fontSize: '17px',
                maxWidth: '740px',
                margin: '0 auto',
                lineHeight: 1.5,
              }}
            >
              We founded Vamtech to abolish junior agency handoffs and black-box estimates. We operate as high-velocity engineering pods who treat code as an enduring asset.
            </p>
          </div>
        </ScrollReveal>

        {/* Story & Philosophy Section (40px radius cards with hairline borders) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          <ScrollReveal animation="fade-up">
            <div
              className="monad-card about-story-grid"
              style={{
                backgroundColor: '#ffffff',
                padding: '48px',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="mono-helper" style={{ marginBottom: '12px' }}>
                  OUR CORE PHILOSOPHY
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: 'clamp(26px, 3.4vw, 36px)',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '20px',
                    lineHeight: 1.25,
                  }}
                >
                  Software that whispers through refinement rather than shouts through complexity.
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Most modern engineering projects crumble under unnecessary abstractions, bloated microservices, and unvalidated hype cycles. We believe in strict compile-time types, deterministic channels, kernel-level zero-copy streams, and clean OCSF schemas.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                  Whether building real-time settlement ledgers or multi-modal vector search systems, we guarantee 100% senior staff composition, automated CI/CD security gating, and complete code ownership.
                </p>
              </div>

              {/* Pillars Box */}
              <div
                style={{
                  backgroundColor: 'var(--color-parchment)',
                  border: '1px solid var(--color-ash)',
                  borderRadius: '24px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {[
                  { title: 'Zero Junior Handoffs', desc: 'Every sprint commit is authored and peer-reviewed by senior staff.' },
                  { title: 'Deterministic Guarantees', desc: 'Typed memory safety, p99 latency benchmarks, and strict SLA commitments.' },
                  { title: '100% IP & Asset Transfer', desc: 'No vendor lock-in or proprietary runtime shackles. You own the code.' },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? '1px solid var(--color-ash)' : 'none', paddingBottom: i < 2 ? '16px' : 0 }}>
                    <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '18px', color: 'var(--color-off-black)', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-graphite)' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Team Roster Grid */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="mono-helper">ARCHITECTURAL LEADERSHIP</span>
              <h2
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: 'clamp(28px, 3.8vw, 44px)',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginTop: '8px',
                }}
              >
                Principals & Practice Leads
              </h2>
            </div>

            <div className="grid-2" style={{ gap: '28px' }}>
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} animation="fade-up" delay={index * 100}>
                  <div
                    className="monad-card"
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '36px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div>
                          <h3
                            style={{
                              fontFamily: 'var(--font-untitled-serif)',
                              fontSize: '24px',
                              fontWeight: 400,
                              color: 'var(--color-off-black)',
                              marginBottom: '4px',
                            }}
                          >
                            {member.name}
                          </h3>
                          <div className="mono-helper" style={{ color: 'var(--color-lake-blue)' }}>
                            {member.role}
                          </div>
                        </div>
                        <span
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
                          {member.specialty}
                        </span>
                      </div>

                      <p style={{ fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
