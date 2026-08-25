import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service & Master Services Agreement — VAM|Tech',
  description: 'VAM|Tech Technologies Terms of Service, 100% IP ownership guarantees, and Master Services Agreement provisions.',
};

export default function TermsPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <Link
          href="/"
          className="btn-secondary"
          style={{ fontSize: '13px', marginBottom: '28px', padding: '8px 16px', display: 'inline-flex' }}
        >
          <span>← Back to Home</span>
        </Link>

        <article className="corporate-card" style={{ backgroundColor: '#ffffff', padding: '48px 40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: 'var(--color-brand-blue)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Master Engineering Terms
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 4vw, 40px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Terms of Service &amp; Master Agreement
          </h1>

          <p style={{ marginBottom: '32px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
            LAST REVISED: FEBRUARY 2026 • VAM|TECH TECHNOLOGIES INC.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              fontSize: '15px',
            }}
          >
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website or engaging VAM|Tech Technologies Inc. (&ldquo;VAM|Tech&rdquo;) for custom software engineering, cloud infrastructure, or AI architecture services, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                2. Intellectual Property &amp; Code Ownership
              </h2>
              <p>
                Unless explicitly stated in an active Statement of Work (SOW), all custom software, bespoke scripts, and architectural deliverables authored by VAM|Tech during paid client engagements transfer 100% to the client upon final sprint invoice settlement.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                3. Confidentiality &amp; Mutual NDA
              </h2>
              <p>
                Both parties agree to treat proprietary system diagrams, security tokens, API keys, and business logic as strictly confidential information protected under standard commercial trade secret standards.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                4. Warranties &amp; SLA Commitments
              </h2>
              <p>
                VAM|Tech warrants that all deliverables will conform to the mutually agreed technical specifications in the SOW and pass automated unit/integration test suites without high-severity CVEs or memory vulnerabilities at delivery.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                5. Legal Inquiries
              </h2>
              <p>
                For questions regarding Master Service Agreements (MSA) or custom contracting terms, contact{' '}
                <a href="mailto:legal@vamtech.io" style={{ color: 'var(--color-brand-blue)', textDecoration: 'underline' }}>
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
