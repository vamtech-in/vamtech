import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & Engineering Master Agreement — Vamtech Journal',
  description: 'Vamtech Technologies Terms of Service, 100% IP ownership guarantees, and Master Services Agreement provisions.',
};

export default function TermsPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <Link
          href="/"
          className="text-link-arrow"
          style={{ fontSize: '13px', marginBottom: '32px' }}
        >
          <span>← Back to Home</span>
        </Link>

        <article className="monad-card" style={{ backgroundColor: '#ffffff', padding: '48px 40px' }}>
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
              Master Engineering Terms
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Terms of Service & Master Agreement
          </h1>

          <p className="mono-helper" style={{ marginBottom: '36px' }}>
            LAST REVISED: FEBRUARY 2026 • VAMTECH TECHNOLOGIES INC.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              color: 'var(--color-graphite)',
              lineHeight: 1.65,
              fontSize: '14.5px',
              fontFamily: 'var(--font-abc-diatype-mono)',
            }}
          >
            <section>
              <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '10px' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website or engaging Vamtech Technologies Inc. (&ldquo;Vamtech&rdquo;) for custom software engineering, cloud infrastructure, or AI architecture services, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '10px' }}>
                2. Intellectual Property & Code Ownership
              </h2>
              <p>
                Unless explicitly stated in an active Statement of Work (SOW), all custom software, bespoke scripts, and architectural deliverables authored by Vamtech during paid client engagements transfer 100% to the client upon final sprint invoice settlement.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '10px' }}>
                3. Confidentiality & Mutual NDA
              </h2>
              <p>
                Both parties agree to treat proprietary system diagrams, security tokens, API keys, and business logic as strictly confidential information protected under standard commercial trade secret standards.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '10px' }}>
                4. Warranties & SLA Commitments
              </h2>
              <p>
                Vamtech warrants that all deliverables will conform to the mutually agreed technical specifications in the SOW and pass automated unit/integration test suites without high-severity CVEs or memory vulnerabilities at delivery.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '10px' }}>
                5. Legal Inquiries
              </h2>
              <p>
                For questions regarding Master Service Agreements (MSA) or custom contracting terms, contact{' '}
                <a href="mailto:legal@vamtech.io" style={{ color: 'var(--color-lake-blue)', textDecoration: 'underline' }}>
                  legal@vamtech.io
                </a>.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
