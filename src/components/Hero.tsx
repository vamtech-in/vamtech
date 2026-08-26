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
              <span>AMBITIOUS SOFTWARE STARTUP • LUCKNOW</span>
            </div>

            {/* Main Display Title */}
            <h1 className="hero-main-title">
              <span className="hero-word">Software</span>
              <span className="hero-word">Transform</span>
              <span className="hero-word hero-accent-word">Accelerate</span>
            </h1>

            <p className="hero-subtitle">
              We help founders and growing businesses turn bold ideas into high-performance web applications, mobile platforms, and AI automations.
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
                  <p className="t-comment">// Launching next-gen web &amp; AI platform</p>
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

      <style jsx>{`
        .hero-section {
          position: relative;
          padding-top: 36px;
          padding-bottom: 90px;
          overflow: hidden;
        }

        /* Vibrant Glowing Ambient Spheres */
        .hero-orange-orb {
          position: absolute;
          top: -60px;
          right: 2%;
          width: clamp(320px, 38vw, 520px);
          height: clamp(320px, 38vw, 520px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ff7043 0%, #ff5722 55%, #d84315 90%);
          box-shadow: 0 30px 90px rgba(255, 87, 34, 0.4);
          z-index: 1;
          pointer-events: none;
          opacity: 0.92;
        }

        .hero-blue-glow {
          position: absolute;
          top: 100px;
          left: -80px;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 98, 255, 0.16) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 64px;
        }

        .hero-left-content {
          position: relative;
          z-index: 2;
        }

        .hero-kicker-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 21, 56, 0.12);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #001538;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .kicker-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #ff5722;
          box-shadow: 0 0 8px #ff5722;
        }

        .hero-main-title {
          font-size: clamp(46px, 6.2vw, 76px);
          font-weight: 900;
          letter-spacing: -0.045em;
          line-height: 0.98;
          color: #0c0e12;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .hero-word {
          display: block;
        }

        .hero-accent-word {
          color: #001538;
          background: linear-gradient(135deg, #001538 0%, #ff5722 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(16px, 1.6vw, 18.5px);
          line-height: 1.6;
          color: #4b5868;
          max-width: 560px;
          margin-bottom: 32px;
          font-weight: 500;
        }

        /* Action Buttons */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ff5722;
          color: #ffffff;
          font-size: 14.5px;
          font-weight: 800;
          padding: 13px 24px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(255, 87, 34, 0.35);
          transition: all 0.25s ease;
        }

        .btn-hero-primary:hover {
          background-color: #e64a19;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(255, 87, 34, 0.45);
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          background-color: #0c0e12;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 22px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-hero-secondary:hover {
          background-color: #1f2530;
          transform: translateY(-2px);
        }

        .btn-hero-whatsapp {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #0c0e12;
          font-size: 13.5px;
          font-weight: 700;
          padding: 12px 18px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-hero-whatsapp:hover {
          background-color: #ffffff;
          border-color: #25d366;
          color: #128c7e;
          transform: translateY(-2px);
        }

        /* Tech Ribbon */
        .hero-tech-ribbon {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tech-ribbon-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.1em;
        }

        .tech-pills-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .hero-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .tech-pill-icon {
          font-size: 13px;
        }

        /* Right Visual & Floating Cards */
        .hero-right-visual {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .hero-visual-card-wrap {
          position: relative;
          width: 100%;
          max-width: 440px;
        }

        .hero-terminal-box {
          background: rgba(11, 14, 20, 0.92);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          color: #f1f5f9;
          position: relative;
          z-index: 2;
        }

        .terminal-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .t-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .t-red { background-color: #ef4444; }
        .t-yellow { background-color: #f59e0b; }
        .t-green { background-color: #10b981; }

        .terminal-filename {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #94a3b8;
        }

        .terminal-status {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 800;
          color: #10b981;
          background: rgba(16, 185, 129, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .terminal-content {
          padding: 20px 22px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          line-height: 1.7;
        }

        .t-comment { color: #64748b; margin-bottom: 6px; }
        .t-code { margin: 2px 0; }
        .t-indent { padding-left: 18px; }
        .t-kw { color: #f43f5e; font-weight: 700; }
        .t-var { color: #38bdf8; }
        .t-fn { color: #a855f7; font-weight: 700; }
        .t-prop { color: #fbbf24; }
        .t-str { color: #34d399; }
        .t-num { color: #ff7043; font-weight: 800; }
        .t-success { color: #10b981; margin-top: 10px; font-weight: 700; }

        /* Floating Pill Badges */
        .floating-stat-card {
          position: absolute;
          z-index: 3;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        .floating-stat-card:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .card-top-left {
          top: -24px;
          left: -28px;
        }

        .card-bottom-right {
          bottom: -22px;
          right: -24px;
        }

        .card-bottom-left {
          bottom: -40px;
          left: 10px;
        }

        .floating-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .floating-stat-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 900;
          color: #0c0e12;
          letter-spacing: 0.04em;
        }

        .floating-stat-lbl {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }

        /* Large Bottom Showcase Frame */
        .hero-showcase-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background-color: #0d0f14;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-image-backdrop {
          position: relative;
          min-height: 400px;
          background: linear-gradient(135deg, #121620 0%, #0a0c10 100%);
          display: flex;
          align-items: center;
          padding: clamp(24px, 4vw, 48px);
          overflow: hidden;
        }

        .cityscape-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to top, rgba(10, 12, 16, 0.95) 10%, rgba(10, 12, 16, 0.4) 100%);
          background-size: 24px 24px, 100% 100%;
          opacity: 0.9;
        }

        .window-frame-lines {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: space-evenly;
        }

        .window-pillar {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.2) 100%);
        }

        .showcase-content-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: center;
        }

        .hero-overlay-card {
          background: rgba(18, 22, 30, 0.78);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 20px;
          padding: clamp(24px, 3vw, 36px);
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: rgba(255, 87, 34, 0.15);
          border: 1px solid rgba(255, 87, 34, 0.3);
          color: #ff7043;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ff5722;
        }

        .overlay-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .overlay-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #a4b3c4;
        }

        .btn-dark-glass {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-dark-glass:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .showcase-stats-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .showcase-stat-pill {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #ffffff;
        }

        .s-pill-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ff5722;
          box-shadow: 0 0 10px rgba(255, 87, 34, 0.8);
          flex-shrink: 0;
        }

        .showcase-stat-pill h4 {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .showcase-stat-pill p {
          font-size: 12.5px;
          color: #94a3b8;
          margin: 0;
        }

        @media (max-width: 980px) {
          .hero-grid-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-right-visual {
            margin-top: 20px;
          }
          .showcase-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-orange-orb {
            top: 20px;
            right: -60px;
            width: 260px;
            height: 260px;
          }
          .hero-main-title {
            font-size: 42px;
          }
          .card-top-left, .card-bottom-right, .card-bottom-left {
            position: static;
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
}


