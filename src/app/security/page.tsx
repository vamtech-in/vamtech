import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { securityStandards } from '@/data/securityStandards';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileCheck, 
  Server, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';

export const metadata = {
  title: 'Security, Compliance & Trust Center | Vamtech',
  description: 'Learn how Vamtech maintains zero-trust infrastructure, SOC 2 Type II alignment, TLS 1.3 encryption, and GDPR compliance.',
};

export default function SecurityPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="glow-orb orb-blue" style={{ top: '80px', right: '-120px' }} />
      <div className="glow-orb orb-pink" style={{ top: '700px', left: '-120px' }} />

      <div className="container">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} />
              <span>Enterprise Trust & Architecture Integrity</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
              Security & Compliance <span className="text-gradient">Trust Center</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
              Built for rigorous procurement audits. We engineer zero-trust foundations, automated compliance checks, and strict data residency across every project.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Compliance Standards Pillars */}
        <div className="grid-2" style={{ gap: '32px', marginBottom: '72px' }}>
          {securityStandards.map((std, index) => (
            <ScrollReveal key={std.id} animation="fade-up" delay={index * 120}>
              <div
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#E01A8A', letterSpacing: '1px' }}>
                      {std.category}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(74, 222, 128, 0.15)',
                        color: '#4ADE80',
                        border: '1px solid rgba(74, 222, 128, 0.3)',
                      }}
                    >
                      {std.statusBadge}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '12px' }}>
                    {std.title}
                  </h2>
                  <p style={{ fontSize: '0.94rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>
                    {std.description}
                  </p>

                  {/* Protocols Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {std.protocols.map((protocol, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0' }}>
                        <CheckCircle2 size={16} color="#00D2FF" style={{ flexShrink: 0 }} />
                        <span>{protocol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Procurement & Vendor Assessment Callout */}
        <ScrollReveal animation="zoom-in" delay={150}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(14, 20, 36, 0.9) 0%, rgba(10, 15, 29, 0.95) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38BDF8', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                <FileCheck size={18} />
                <span>Need a Completed Vendor Risk Assessment (VRA)?</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Ready for Legal, InfoSec & Procurement Due Diligence
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.96rem', maxWidth: '640px' }}>
                We regularly execute mutual NDAs, complete SIG-Lite questionnaires, and provide verifiable architectural documentation for enterprise security teams.
              </p>
            </div>

            <Link href="/contact?type=procurement" className="btn-primary" style={{ padding: '14px 28px' }}>
              <span>Request Security Packet & NDA</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
