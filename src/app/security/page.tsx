import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Security, SOC-2 Alignment & Trust Center',
  description:
    'VAMTech maintains zero-trust infrastructure, SOC 2 Type II alignment, TLS 1.3 encryption, GDPR compliance, and rigorous code audits for enterprise deployments.',
  alternates: {
    canonical: 'https://vamtech.io/security',
  },
};

export default function SecurityPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <AtmosphericWash variant="sky-mint" size={560} top="-80px" right="-100px" opacity={0.45} />
      <AtmosphericWash variant="coral-sky" size={580} top="700px" left="-120px" opacity={0.4} />

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
                Enterprise Trust & Architecture Integrity
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
              Security & Compliance Trust Center
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
              Built for rigorous procurement audits. We engineer zero-trust foundations, automated compliance checks, and strict data residency across every project.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Compliance Standards Pillars */}
        <div className="grid-2" style={{ gap: '32px', marginBottom: '72px' }}>
          {securityStandards.map((std, index) => (
            <ScrollReveal key={std.id} animation="fade-up" delay={index * 100}>
              <div
                className="monad-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '40px',
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
                        backgroundColor: 'var(--color-periwinkle-mist)',
                        color: 'var(--color-lake-blue)',
                      }}
                    >
                      <ShieldCheck size={20} />
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
                      {std.statusBadge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-untitled-serif)',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: 'var(--color-off-black)',
                      marginBottom: '12px',
                    }}
                  >
                    {std.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.6 }}>
                    {std.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {std.protocols.map((ctrl, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={15} color="var(--color-lake-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-off-black)' }}>
                          {ctrl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Security Audit CTA */}
        <ScrollReveal animation="fade-up">
          <div
            className="monad-card"
            style={{
              backgroundColor: 'var(--color-parchment)',
              padding: '48px',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: '28px',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '12px',
              }}
            >
              Need Custom Vendor Security Questionnaire (CAIQ / SIG)?
            </h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 28px', fontSize: '15px', color: 'var(--color-graphite)' }}>
              Our compliance team provides completed security disclosures, DPA addendums, and SOC 2 Type II report summaries under NDA.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '13px', padding: '14px 32px' }}>
              <span>Request Compliance Package</span>
              <span className="arrow-glyph">▸</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
