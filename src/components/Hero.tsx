'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="morfikos-hero-section" id="hero">
      <div className="editorial-container">
        <div className="morfikos-hero-content">
          {/* 1. "Trusted by founders." Row with 3 overlapping avatars */}
          <div className="trusted-founders-badge">
            <div className="founders-avatar-stack">
              <img
                src="/images/team/vivek-maddheshiya.png"
                alt="Vivek Maddheshiya"
                className="founder-avatar-img"
              />
              <img
                src="/images/team/aditya-gupta.png"
                alt="Aditya Gupta"
                className="founder-avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Founder"
                className="founder-avatar-img"
              />
            </div>
            <span className="trusted-founders-text">Trusted by founders.</span>
          </div>

          {/* 2. Main Editorial Display Headline with Inline Badges */}
          <h1 className="morfikos-display-headline">
              {/* Line 1: Custom [badge] Software */}
              <span className="headline-line">
                <span className="headline-word-bold">Custom</span>
                <span
                  className="hero-inline-badge hero-badge-orange-pill"
                  style={{
                    background: '#FF4400',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '52px',
                      background: '#EAE6DF',
                      borderRadius: '5px',
                      border: '1px solid #C4C0B8',
                      padding: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                    }}
                  >
                    <div style={{ width: '100%', height: '5px', background: '#FF4400', borderRadius: '2px' }} />
                    <div style={{ width: '70%', height: '3px', background: '#8A8680', borderRadius: '2px' }} />
                    <div style={{ width: '90%', height: '3px', background: '#B8B4AC', borderRadius: '2px' }} />
                    <div style={{ width: '60%', height: '3px', background: '#B8B4AC', borderRadius: '2px' }} />
                    <div
                      style={{
                        marginTop: 'auto',
                        width: '100%',
                        height: '10px',
                        background: '#111111',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontSize: '5px', color: '#FFF', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.05em' }}>
                        ENDPALA
                      </span>
                    </div>
                  </div>
                </span>
                <span className="headline-word-accent">Software</span>
              </span>

              {/* Line 2: for [badge] Growing Businesses */}
              <span className="headline-line">
                <span className="headline-word-muted">for</span>
                <span className="hero-inline-badge hero-badge-circle">
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=240&auto=format&fit=crop"
                    alt="Developer at computer"
                    className="badge-cover-img"
                  />
                </span>
                <span className="headline-word-bold">Growing Businesses</span>
              </span>

              {/* Line 3: based in [badge] India */}
              <span className="headline-line">
                <span className="headline-word-muted">based in</span>
                <span className="hero-inline-badge hero-badge-circle">
                  <img
                    src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=240&auto=format&fit=crop"
                    alt="Big Ben illuminated at night"
                    className="badge-cover-img"
                  />
                </span>
                <span className="headline-word-bold">India</span>
              </span>
          </h1>

          {/* 3. Supporting Editorial Copy */}
          <div className="morfikos-hero-subcopy">
            <p>
              VAMTech designs and builds websites, apps, and{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                business software —
              </strong>
              <br />
              then hosts and maintains it, so you never have to think about
              &ldquo;what&apos;s next.&rdquo;
            </p>
          </div>

          {/* 4. Action CTA Button */}
          <div className="morfikos-hero-cta">
            <Link href="#contact" className="btn-morfikos-book">
              <span>Book a Call</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
