import React from 'react';
import Link from 'next/link';
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
  title: 'About Vamtech | Mission, Engineering Culture & Team',
  description: 'Learn about Vamtech: our engineering philosophy, founding principles, senior technical leadership, and commitment to zero junior handoffs.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Vikram Mehta',
      role: 'Founder & Chief Architect',
      specialty: 'Distributed Systems & Go / Rust',
      bio: 'Ex-Distributed Infrastructure Lead with 12+ years designing high-throughput payment pipelines and cloud architectures.',
      gradient: 'linear-gradient(135deg, #FF5E3A, #E01A8A)'
    },
    {
      name: 'Dr. Sarah Al-Mansoor',
      role: 'Head of AI Engineering',
      specialty: 'Vector RAG & LLM Alignment',
      bio: 'PhD in Machine Learning. Specializes in enterprise guardrails, fine-tuning open weights, and sub-second semantic retrieval.',
      gradient: 'linear-gradient(135deg, #E01A8A, #7B2CBF)'
    },
    {
      name: 'David Chen',
      role: 'VP of Cloud & Site Reliability',
      specialty: 'Kubernetes, Terraform & Zero-Trust',
      bio: 'Former SRE Lead managing multi-region Kubernetes clusters with strict SOC 2 Type II and ISO 27001 regulatory compliance.',
      gradient: 'linear-gradient(135deg, #7B2CBF, #0066FF)'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Product Engineering',
      specialty: 'Next.js, TypeScript & Design Systems',
      bio: '10+ years engineering ultra-fast frontends, accessible component design systems, and offline-first mobile apps.',
      gradient: 'linear-gradient(135deg, #0066FF, #00D2FF)'
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="glow-orb orb-pink" style={{ top: '80px', right: '-120px' }} />
      <div className="glow-orb orb-blue" style={{ top: '700px', left: '-120px' }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
            <Terminal size={14} />
            <span>Our Founding Philosophy</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
            Engineering Over <span className="text-gradient">Agency Smoke & Mirrors</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
            Vamtech was founded to solve a single persistent pain point: companies paying enterprise rates only to have their projects handed to junior contractors who leave behind crippling technical debt.
          </p>
        </div>

        {/* Story Section */}
        <div
          className="glass-card"
          style={{
            padding: '48px',
            borderRadius: '24px',
            marginBottom: '72px',
            background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.85) 0%, rgba(8, 12, 22, 0.95) 100%)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '48px',
              alignItems: 'center',
            }}
            className="about-story-grid"
          >
            <div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#FF5E3A', fontWeight: 700, marginBottom: '10px' }}>
                Why Vamtech Exists
              </div>
              <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '20px' }}>
                We Build Software as if We Had to Support It Forever
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '18px' }}>
                Software is never just code written in a vacuum. It is the operational backbone of your business. When software is written carelessly with brittle abstractions and zero automated tests, it slows down your entire organization.
              </p>
              <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: '1.7' }}>
                At Vamtech, our engineers have lived through 3:00 AM production outages, multi-million dollar database migrations, and complex compliance audits. We build clean, strictly typed, observable software that stands up to real enterprise volume.
              </p>
            </div>

            {/* Principles Box */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700 }}>
                Our 4 Non-Negotiable Standards
              </h3>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#FF5E3A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.92rem' }}>Senior Hands On Keyboard:</strong>
                  <p style={{ color: '#94A3B8', fontSize: '0.86rem' }}>Direct collaboration with architects who write code daily.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#E01A8A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.92rem' }}>Strict Type Safety & Tests:</strong>
                  <p style={{ color: '#94A3B8', fontSize: '0.86rem' }}>Comprehensive unit, integration, and load testing baked in.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#7B2CBF" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.92rem' }}>Zero Black-Box Lock-In:</strong>
                  <p style={{ color: '#94A3B8', fontSize: '0.86rem' }}>Standard open-source tooling, full documentation, and 100% IP transfer.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#0066FF" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.92rem' }}>Radical Transparency:</strong>
                  <p style={{ color: '#94A3B8', fontSize: '0.86rem' }}>Weekly staging releases so you always see working software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Senior Leadership & Technical Team */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-pill cyan" style={{ marginBottom: '12px' }}>
              <Users size={14} />
              <span>Senior Technical Leadership</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '12px' }}>
              Meet the Architects Behind Your Systems
            </h2>
            <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto', fontSize: '0.98rem' }}>
              Every project is led by proven engineering veterans who have scaled production systems under high load.
            </p>
          </div>

          <div className="grid-4">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Avatar Placeholder with high-end gradient */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: member.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      marginBottom: '18px',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: '#38BDF8', fontWeight: 600, marginBottom: '8px' }}>
                    {member.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      color: '#CBD5E1',
                      display: 'inline-block',
                      marginBottom: '14px',
                    }}
                  >
                    {member.specialty}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <span>Partner with Senior Engineers</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
}
