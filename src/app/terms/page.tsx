import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Vamtech Technologies',
  description: 'Vamtech Technologies Terms of Service and Master Services Agreement guidelines.',
};

export default function TermsPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '32px' }}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div className="glass-card" style={{ padding: '48px', borderRadius: '24px' }}>
          <div className="badge-pill cyan" style={{ marginBottom: '16px' }}>
            <FileText size={14} />
            <span>Commercial Terms</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '36px' }}>
            Last updated: February 2026 • Vamtech Technologies Inc.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#CBD5E1', lineHeight: '1.7', fontSize: '0.96rem' }}>
            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>1. Engagement Agreement</h2>
              <p>
                By accessing this website or engaging Vamtech Technologies Inc. for software engineering services, you agree to these Terms of Service. Individual client projects are governed by custom Master Services Agreements (MSA) and formal Statements of Work (SOW).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>2. 100% Intellectual Property Ownership</h2>
              <p>
                Unless explicitly stated otherwise in a custom agreement, all custom software code, repositories, architectures, and deliverables created for a client become the sole and exclusive intellectual property of the client upon receipt of agreed milestone payments.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>3. Quality & Bug Warranty</h2>
              <p>
                All fixed-scope software deliverables come with an automatic 30-day post-delivery bug warranty during which Vamtech will remediate any reproducible defect at no additional charge.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>4. Limitation of Liability</h2>
              <p>
                In no event shall Vamtech Technologies Inc. be liable for indirect, incidental, or consequential damages resulting from project delays or server downtime outside our direct hosting control.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
