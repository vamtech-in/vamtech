import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Vamtech Technologies',
  description: 'Vamtech Technologies Privacy Policy and data protection commitments.',
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '32px' }}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div className="glass-card" style={{ padding: '48px', borderRadius: '24px' }}>
          <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
            <Shield size={14} />
            <span>Data Protection Commitment</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '36px' }}>
            Last updated: February 2026 • Vamtech Technologies Inc.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.96rem' }}>
            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>1. Overview & Scope</h2>
              <p>
                Vamtech Technologies Inc. (&ldquo;Vamtech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is dedicated to protecting client confidential data, project intellectual property, and personal information in accordance with global data protection standards, including GDPR and CCPA.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>2. Data Collection & Usage</h2>
              <p>
                We only collect information directly submitted through our contact and project intake forms (such as name, work email, organization, and project technical requirements). This data is exclusively utilized to evaluate project scope, deliver architecture proposals, and communicate project milestones.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>3. Zero Third-Party Monetization</h2>
              <p>
                We do not sell, rent, monetize, or lease client data to any third-party advertisers or data brokers under any circumstance.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>4. Security Standards & Encryption</h2>
              <p>
                All communications and stored intake data are encrypted in transit via TLS 1.3 and stored with AES-256 encryption at rest. Our systems are housed in SOC 2 Type II certified cloud data centers.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>5. Contact Our Privacy Officer</h2>
              <p>
                For data deletion requests or compliance inquiries, contact our data protection team directly at <a href="mailto:privacy@vamtech.io" style={{ color: '#38BDF8' }}>privacy@vamtech.io</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
