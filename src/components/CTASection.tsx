'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="cta-editorial-section">
      <div className="editorial-container">
        <div className="cta-content-wrapper">
          <span className="editorial-badge editorial-badge-dark" style={{ marginBottom: '24px' }}>
            Direct Founder Engineering
          </span>

          <h2 className="cta-main-title">
            Have a business problem
            <br />
            worth solving?
          </h2>

          <p className="cta-subtitle-copy">
            Tell us what you&apos;re trying to build. We&apos;ll help you figure out the right solution without sales pressure or agency fluff.
          </p>

          <div className="cta-buttons-wrapper">
            <Link href="#contact" className="btn-editorial-inverse">
              <span>Let&apos;s Connect</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>

            <Link href="#works" className="btn-editorial-inverse-outline">
              <span>View Our Work</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
