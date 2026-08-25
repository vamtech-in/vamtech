import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Data Safeguards — VAM|Tech',
  description: 'VAM|Tech Technologies Privacy Policy, client data protection commitments, and GDPR/CCPA compliance standards.',
};

export default function PrivacyPage() {
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
              Data Protection & Privacy Policy
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
            Privacy Policy & Data Safeguards
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
                1. Overview & Scope
              </h2>
              <p>
                Vamtech Technologies Inc. (&ldquo;Vamtech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is dedicated to protecting client confidential data, project intellectual property, and personal information in accordance with global data protection standards, including GDPR and CCPA.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                2. Data Collection & Usage
              </h2>
              <p>
                We only collect information directly submitted through our contact and project intake forms (such as name, work email, organization, and project technical requirements). This data is exclusively utilized to evaluate project scope, deliver architecture proposals, and communicate project milestones.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                3. Zero Third-Party Monetization
              </h2>
              <p>
                We do not sell, rent, monetize, or lease client data to any third-party advertisers or data brokers under any circumstance.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                4. Security Standards & Encryption
              </h2>
              <p>
                All communications and stored intake data are encrypted in transit via TLS 1.3 and stored with AES-256 encryption at rest. Our systems are housed in SOC 2 Type II certified cloud data centers.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                5. Contacting the Data Protection Officer
              </h2>
              <p>
                For inquiries regarding data deletion, access requests, or regulatory disclosures, contact our team at{' '}
                <a href="mailto:privacy@vamtech.io" style={{ color: 'var(--color-brand-blue)', textDecoration: 'underline' }}>
                  privacy@vamtech.io
                </a>.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
