'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Sparkles, ExternalLink } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import { projectsData, ProjectItem } from '@/data/projects';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="section-py" id="portfolio" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header from Reference */}
        <div className="portfolio-header-strip">
          <div>
            <span className="section-kicker">OUR WORK</span>
            <h2 className="portfolio-title">
              Portfo<span className="highlight-pill">lio</span>
            </h2>
            <p className="portfolio-subtitle">
              Strategic digital engineering, bespoke UX, and robust architectures that power modern brands worldwide.
            </p>
          </div>

          <div className="portfolio-header-cta">
            <Link href="/projects" className="btn-dark-pill">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 2x2 Alternating Grid of Cards from Reference */}
        <div className="portfolio-2x2-grid">
          {/* Card 1: Light Card */}
          <div className="ref-card-white portfolio-mini-card">
            <div className="mini-card-squiggle">
              <svg width="38" height="14" viewBox="0 0 40 14" fill="none">
                <path d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7" stroke="#0055ff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mini-card-title">AMZ Web<br />Application</h3>
            <p className="mini-card-desc">High-throughput analytics dashboard &amp; cloud data sync.</p>
          </div>

          {/* Card 2: Dark Card */}
          <div className="ref-card-dark portfolio-mini-card">
            <div className="mini-card-squiggle">
              <svg width="38" height="14" viewBox="0 0 40 14" fill="none">
                <path d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7" stroke="#0055ff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mini-card-title" style={{ color: '#ffffff' }}>Gift<br />Mobile App</h3>
            <p className="mini-card-desc" style={{ color: '#9aa8b8' }}>Custom gift personalization engine &amp; mobile commerce.</p>
          </div>

          {/* Card 3: Dark Card */}
          <div className="ref-card-dark portfolio-mini-card">
            <div className="mini-card-squiggle">
              <svg width="38" height="14" viewBox="0 0 40 14" fill="none">
                <path d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7" stroke="#0055ff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mini-card-title" style={{ color: '#ffffff' }}>AI Copilot<br />Assistant</h3>
            <p className="mini-card-desc" style={{ color: '#9aa8b8' }}>Enterprise document intelligence &amp; autonomous RAG workflows.</p>
          </div>

          {/* Card 4: Light Card */}
          <div className="ref-card-white portfolio-mini-card">
            <div className="mini-card-squiggle">
              <svg width="38" height="14" viewBox="0 0 40 14" fill="none">
                <path d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7" stroke="#0055ff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mini-card-title">Cloud Scale<br />ERP Engine</h3>
            <p className="mini-card-desc">Sub-second transaction processing &amp; global inventory routing.</p>
          </div>
        </div>

        {/* Detailed Showcase Cards from Reference (Image 2) */}
        <div className="showcase-stack">
          {/* Showcase 1: Pink/Coral Showcase Card with Phone Mockup */}
          <div className="showcase-card showcase-pink">
            <div className="showcase-content-side">
              <div className="showcase-app-badge pink-badge">
                <span>Gift</span>
              </div>
              <h3 className="showcase-title">Gift Mobile App</h3>
              <ul className="showcase-bullets">
                <li>
                  <span className="bullet-dot" />
                  <span>Custom product builder with instant real-time 3D and typography engraving previews.</span>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <span>Sub-second multi-currency checkout via Apple Pay, Google Pay, and localized gateways.</span>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <span>Automated fulfillment routing directly connecting users with regional artisan manufacturers.</span>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <span>Seamless React Native performance delivering 60fps animations across iOS and Android.</span>
                </li>
              </ul>
              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => setSelectedProject(projectsData.find(p => p.id === 'gift-customizer-app') || projectsData[0])}
                  className="btn-dark-pill"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="showcase-visual-side">
              {/* Realistic iPhone Mockup from Reference */}
              <div className="phone-mockup-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-app-header">
                    <div className="app-header-left">
                      <strong>Pen - With customize name</strong>
                      <div className="app-rating">★★★★☆ <span>4.8 (8,843 reviews)</span></div>
                    </div>
                    <div className="app-badge-pill">Same Day Delivery</div>
                  </div>

                  <div className="phone-color-palette">
                    <span style={{ backgroundColor: '#facc15' }} />
                    <span style={{ backgroundColor: '#f87171' }} />
                    <span style={{ backgroundColor: '#4ade80' }} />
                    <span style={{ backgroundColor: '#60a5fa' }} />
                    <span style={{ backgroundColor: '#818cf8' }} />
                    <span style={{ backgroundColor: '#1e293b' }} />
                  </div>

                  <div className="phone-input-box">
                    <label>Update your name</label>
                    <input type="text" readOnly value="Enter name... (Up to 12 chars max)" />
                  </div>

                  <div className="phone-upload-btn">
                    <span>Upload Image (PNG/JPG)</span>
                    <button>Upload</button>
                  </div>

                  <div className="phone-cta-bar">
                    <span>$28.50</span>
                    <button>Order Custom Gift</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase 2: Dark Slate Showcase Card with Desktop Monitor Mockup */}
          <div className="showcase-card showcase-slate">
            <div className="showcase-visual-side monitor-side">
              {/* Desktop Monitor Mockup from Reference */}
              <div className="monitor-frame">
                <div className="monitor-screen">
                  <div className="monitor-topbar">
                    <div className="screen-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>amz-analytics.io / live-metrics</span>
                  </div>
                  <div className="monitor-display-content">
                    <div className="wave-graphic-3d" />
                    <div className="monitor-metric-badge">
                      <span>Live Ingestion</span>
                      <strong>12.4k req/sec</strong>
                    </div>
                  </div>
                </div>
                <div className="monitor-stand-neck" />
                <div className="monitor-stand-base" />
              </div>
            </div>

            <div className="showcase-content-side">
              <div className="showcase-app-badge orange-badge">
                <span>AMZ</span>
              </div>
              <h3 className="showcase-title" style={{ color: '#ffffff' }}>AMZ Web App</h3>
              <ul className="showcase-bullets" style={{ color: '#c0cad6' }}>
                <li>
                  <span className="bullet-dot" style={{ backgroundColor: '#0055ff' }} />
                  <span>Real-time multi-channel inventory reconciliation and algorithmic repricing across global storefronts.</span>
                </li>
                <li>
                  <span className="bullet-dot" style={{ backgroundColor: '#0055ff' }} />
                  <span>Sub-200ms latency on data aggregation spanning over 500,000 active daily SKUs.</span>
                </li>
                <li>
                  <span className="bullet-dot" style={{ backgroundColor: '#0055ff' }} />
                  <span>Role-based access security, automated VAT calculation, and exportable financial audit reports.</span>
                </li>
                <li>
                  <span className="bullet-dot" style={{ backgroundColor: '#0055ff' }} />
                  <span>Zero-downtime Blue/Green deployments powered by Kubernetes and Terraform.</span>
                </li>
              </ul>
              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => setSelectedProject(projectsData.find(p => p.id === 'amz-analytics-app') || projectsData[1])}
                  className="btn-white-pill"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} color="#0055ff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style jsx>{`
        .portfolio-header-strip {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .portfolio-title {
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 900;
          letter-spacing: -0.045em;
          color: #0c0e12;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .portfolio-subtitle {
          font-size: 16px;
          color: #556375;
          max-width: 520px;
          line-height: 1.55;
        }

        /* 2x2 Grid */
        .portfolio-2x2-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .portfolio-mini-card {
          padding: clamp(28px, 4vw, 40px);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .mini-card-squiggle {
          margin-bottom: 20px;
        }

        .mini-card-title {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #0c0e12;
          margin-bottom: 8px;
        }

        .mini-card-desc {
          font-size: 13.5px;
          color: #5d6d80;
          line-height: 1.45;
        }

        /* Showcase Cards */
        .showcase-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .showcase-card {
          border-radius: 28px;
          padding: clamp(32px, 4.5vw, 56px);
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .showcase-pink {
          background: linear-gradient(135deg, #0055ff 0%, #0070f3 50%, #00b4d8 100%);
          color: #ffffff;
        }

        .showcase-slate {
          background: linear-gradient(135deg, #0a192f 0%, #060e1d 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .showcase-app-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.05em;
          margin-bottom: 18px;
        }

        .pink-badge {
          background-color: #ffffff;
          color: #0055ff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .orange-badge {
          background-color: #0055ff;
          color: #ffffff;
        }

        .showcase-title {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        .showcase-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 14.5px;
          line-height: 1.5;
        }

        .showcase-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #0c0e12;
          margin-top: 8px;
          flex-shrink: 0;
        }

        /* Phone Mockup Styling */
        .phone-mockup-frame {
          width: min(100%, 280px);
          margin-inline: auto;
          background-color: #000000;
          border-radius: 40px;
          padding: 12px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          border: 4px solid #333333;
        }

        .phone-notch {
          width: 80px;
          height: 16px;
          background-color: #000000;
          border-radius: 0 0 12px 12px;
          margin: 0 auto 10px;
        }

        .phone-screen {
          background-color: #ffffff;
          border-radius: 28px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 11px;
        }

        .phone-app-header strong {
          font-size: 12px;
          display: block;
          color: #0c0e12;
        }

        .app-rating {
          font-size: 9.5px;
          color: #f59e0b;
        }

        .app-badge-pill {
          display: inline-block;
          margin-top: 4px;
          background-color: #fee2e2;
          color: #dc2626;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 8.5px;
          font-weight: 700;
        }

        .phone-color-palette {
          display: flex;
          gap: 6px;
        }

        .phone-color-palette span {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .phone-input-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 6px 8px;
        }

        .phone-input-box label {
          font-size: 9px;
          font-weight: 700;
          color: #64748b;
          display: block;
        }

        .phone-input-box input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 10px;
          color: #0c0e12;
          outline: none;
        }

        .phone-upload-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px;
          border: 1px dashed #cbd5e1;
          border-radius: 8px;
          font-size: 9px;
          color: #64748b;
        }

        .phone-upload-btn button {
          background-color: #3b82f6;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 3px 8px;
          font-size: 8.5px;
          font-weight: 700;
        }

        .phone-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid #f1f5f9;
        }

        .phone-cta-bar strong {
          font-size: 13px;
          color: #0c0e12;
        }

        .phone-cta-bar button {
          background-color: #ff3358;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 700;
        }

        /* Monitor Mockup */
        .monitor-frame {
          width: min(100%, 360px);
          margin-inline: auto;
        }

        .monitor-screen {
          background-color: #0c0e12;
          border-radius: 16px;
          border: 3px solid #333333;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .monitor-topbar {
          background-color: #1a1e26;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 9px;
          color: #8c9ba8;
        }

        .screen-dots {
          display: flex;
          gap: 4px;
        }

        .screen-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #0055ff;
        }

        .monitor-display-content {
          position: relative;
          height: 180px;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .wave-graphic-3d {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(56, 189, 248, 0.3) 0%, transparent 60%);
        }

        .monitor-metric-badge {
          position: relative;
          z-index: 2;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 12px 20px;
          text-align: center;
          color: #ffffff;
        }

        .monitor-metric-badge span {
          font-size: 10px;
          color: #94a3b8;
          display: block;
        }

        .monitor-metric-badge strong {
          font-size: 18px;
          font-weight: 900;
          color: #38bdf8;
        }

        .monitor-stand-neck {
          width: 32px;
          height: 24px;
          background-color: #2b303c;
          margin: 0 auto;
        }

        .monitor-stand-base {
          width: 120px;
          height: 8px;
          background-color: #3f4756;
          border-radius: 4px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .portfolio-2x2-grid {
            grid-template-columns: 1fr;
          }
          .showcase-card {
            grid-template-columns: 1fr;
          }
          .monitor-side {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}

