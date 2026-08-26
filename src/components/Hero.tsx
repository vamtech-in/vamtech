'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Zap, Globe, Cpu, CheckCircle2, PhoneCall, Code2, Terminal } from 'lucide-react';

const techStacks = [
  { name: 'Next.js 15', icon: '⚡' },
  { name: 'React & Native', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js & Python', icon: '🟢' },
  { name: 'AI & Automations', icon: '🤖' },
  { name: 'AWS & Cloud Edge', icon: '☁️' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Vibrant Background Lighting */}
      <div className="hero-orange-orb" />
      <div className="hero-blue-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid-layout">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-left-content">
            {/* Top Startup Kicker Badge */}
            <div className="hero-kicker-badge">
              <span className="kicker-pulse" />
              <span>CUSTOM SOFTWARE &amp; MVP DEVELOPMENT • LUCKNOW &amp; GLOBAL</span>
            </div>

            {/* Main Display Title */}
            <h1 className="hero-main-title">
              <span className="hero-word">Software</span>
              <span className="hero-word">Transform</span>
              <span className="hero-word hero-accent-word">Accelerate</span>
            </h1>

            <p className="hero-subtitle">
              We help founders, startups, and growing enterprises turn bold ideas into high-performance web applications, mobile apps, SaaS MVPs, and AI automations in 2–4 weeks with 100% source code ownership.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="hero-cta-group">
              <Link href="/contact" className="btn-hero-primary">
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>

              <Link href="/#pricing" className="btn-hero-secondary">
                <span>View Plans (₹24,999)</span>
              </Link>

              <a
                href="https://wa.me/917237900686?text=Hi%20VAMTech,%20I%20have%20a%20project%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp"
                title="Chat on WhatsApp"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            {/* Tech Stack Pills Ribbon */}
            <div className="hero-tech-ribbon">
              <span className="tech-ribbon-label">BUILT WITH:</span>
              <div className="tech-pills-wrap">
                {techStacks.map((tech) => (
                  <div key={tech.name} className="hero-tech-pill">
                    <span className="tech-pill-icon">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Composition & Floating Glass Cards */}
          <div className="hero-right-visual">
            <div className="hero-visual-card-wrap">
              {/* Central Glowing Terminal Mockup */}
              <div className="hero-terminal-box">
                <div className="terminal-topbar">
                  <div className="terminal-dots">
                    <span className="t-dot t-red" />
                    <span className="t-dot t-yellow" />
                    <span className="t-dot t-green" />
                  </div>
                  <span className="terminal-filename">vamtech-startup-engine.ts</span>
                  <div className="terminal-status">LIVE</div>
                </div>

                <div className="terminal-content">
                  <p className="t-comment">{'// Launching next-gen web & AI platform'}</p>
                  <p className="t-code">
                    <span className="t-kw">const</span> <span className="t-var">project</span> = <span className="t-fn">createMVP</span>({'{'}
                  </p>
                  <p className="t-code t-indent">
                    <span className="t-prop">stack</span>: [<span className="t-str">&apos;Next.js&apos;</span>, <span className="t-str">&apos;TypeScript&apos;</span>, <span className="t-str">&apos;AI&apos;</span>],
                  </p>
                  <p className="t-code t-indent">
                    <span className="t-prop">velocity</span>: <span className="t-str">&apos;2–4 Weeks&apos;</span>,
                  </p>
                  <p className="t-code t-indent">
                    <span className="t-prop">pricing</span>: <span className="t-num">&apos;₹24,999&apos;</span>,
                  </p>
                  <p className="t-code t-indent">
                    <span className="t-prop">ownership</span>: <span className="t-num">100%</span>,
                  </p>
                  <p className="t-code">{'}'});</p>
                  <p className="t-code t-success">
                    ✓ <span className="t-fn">deployToProduction</span>({'{'} status: <span className="t-str">&apos;Online&apos;</span> {'}'});
                  </p>
                </div>
              </div>

              {/* Floating Pill Card 1: 2-4 Week MVP */}
              <div className="floating-stat-card card-top-left">
                <div className="floating-icon-wrap" style={{ backgroundColor: 'rgba(255, 87, 34, 0.15)', color: '#ff5722' }}>
                  <Zap size={18} />
                </div>
                <div>
                  <div className="floating-stat-num">2-4 WEEKS</div>
                  <div className="floating-stat-lbl">Rapid MVP Delivery</div>
                </div>
              </div>

              {/* Floating Pill Card 2: 100% Code Ownership */}
              <div className="floating-stat-card card-bottom-right">
                <div className="floating-icon-wrap" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <Shield size={18} />
                </div>
                <div>
                  <div className="floating-stat-num">100% OWNERSHIP</div>
                  <div className="floating-stat-lbl">Full GitHub Source Code</div>
                </div>
              </div>

              {/* Floating Pill Card 3: Direct Developer Sync */}
              <div className="floating-stat-card card-bottom-left">
                <div className="floating-icon-wrap" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#0284c7' }}>
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="floating-stat-num">DIRECT ACCESS</div>
                  <div className="floating-stat-lbl">No Middlemen / Fast Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Rounded Architectural Showcase Card from Reference */}
        <div className="hero-showcase-frame">
          <div className="hero-image-backdrop">
            {/* Grid Lines Overlay */}
            <div className="cityscape-overlay">
              <div className="window-frame-lines">
                <div className="window-pillar" />
                <div className="window-pillar" />
                <div className="window-pillar" />
              </div>
            </div>

            {/* Left Blueprint Overview */}
            <div className="showcase-content-grid">
              <div className="hero-overlay-card">
                <div className="overlay-badge">
                  <span className="badge-pulse" />
                  <span>STARTUP ENGINEERING LAB</span>
                </div>
                <h3 className="overlay-title">
                  Turning bold ideas into scalable, production-ready software.
                </h3>
                <p className="overlay-desc">
                  We build clean full-stack architectures, custom dashboards, mobile apps, and automated workflows with 100% transparent delivery.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/projects" className="btn-white-pill">
                    <span>Explore Work Demos</span>
                    <ArrowRight size={15} color="#ff5722" />
                  </Link>
                  <Link href="/contact" className="btn-dark-glass">
                    <span>Get Free Consultation</span>
                  </Link>
                </div>
              </div>

              {/* Right Side Live Metric Pillars */}
              <div className="showcase-stats-column">
                <div className="showcase-stat-pill">
                  <div className="s-pill-dot" />
                  <div>
                    <h4>Milestone Based</h4>
                    <p>Pay upon milestone approvals</p>
                  </div>
                </div>
                <div className="showcase-stat-pill">
                  <div className="s-pill-dot" />
                  <div>
                    <h4>Starting at ₹24,999</h4>
                    <p>Affordable transparent packages</p>
                  </div>
                </div>
                <div className="showcase-stat-pill">
                  <div className="s-pill-dot" />
                  <div>
                    <h4>24/7 Founder Sync</h4>
                    <p>Direct Slack, WhatsApp &amp; Calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




