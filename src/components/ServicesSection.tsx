'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Cloud, 
  Smartphone, 
  Palette, 
  Cpu, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Layers,
  Database,
  Radio
} from 'lucide-react';

const offerings = [
  {
    id: 'tech',
    title: 'Technology Stack',
    category: 'Technology',
    description: 'Next-gen distributed architectures, edge computing, high-throughput microservices, and AI model deployment.',
    items: [
      { name: 'Full-Stack Web & Mobile', stack: 'React, Next.js, Node.js, React Native, Swift, Kotlin' },
      { name: 'AI & Automation Engineering', stack: 'OpenAI, LangChain, PyTorch, pgvector, Claude API' },
      { name: 'Cloud Infrastructure & DevOps', stack: 'AWS, GCP, Kubernetes, Docker, Terraform, CI/CD' },
      { name: 'Enterprise Data Platforms', stack: 'PostgreSQL, Redis, ClickHouse, Kafka, GraphQL' },
    ]
  },
  {
    id: 'services',
    title: 'End-to-End Services',
    category: 'Services',
    description: 'From initial MVP scoping to enterprise scaling and dedicated engineering pod augmentation.',
    items: [
      { name: 'Custom Software Development', stack: 'Bespoke web applications, SaaS platforms, and internal tools' },
      { name: 'Cloud Architecture & DevOps', stack: 'Multi-region cloud setups, 99.99% uptime, zero-downtime CI/CD' },
      { name: 'UI/UX & Product Design', stack: 'Design systems, interactive prototypes, user journey mapping' },
      { name: 'Dedicated Engineering Pods', stack: 'Autonomous senior developer squads scaling your roadmap' },
    ]
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'tech' | 'services'>('services');
  const activeOffering = offerings.find((o) => o.id === activeTab) || offerings[1];

  return (
    <section className="section-py" id="services" style={{ position: 'relative' }}>
      <div className="container">
        {/* Tab Switchers from Reference: "● Technology..." / "● Services" */}
        <div className="tech-services-tabs">
          <button
            onClick={() => setActiveTab('tech')}
            className={`tab-pill-btn ${activeTab === 'tech' ? 'active-orange' : ''}`}
          >
            <span className="tab-pill-dot orange-dot" />
            <span>Technology...</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`tab-pill-btn ${activeTab === 'services' ? 'active-blue' : ''}`}
          >
            <span className="tab-pill-dot blue-dot" />
            <span>Services</span>
          </button>
        </div>

        {/* 2-Column Grid: Services List & Tech Diagram Visual */}
        <div className="services-grid-layout">
          {/* Left Column: Offerings List */}
          <div className="services-list-container">
            <h2 className="services-main-heading">
              {activeOffering.title}
            </h2>
            <p className="services-lead-text">
              {activeOffering.description}
            </p>

            <div className="offering-items-list">
              {activeOffering.items.map((item, idx) => (
                <div key={idx} className="offering-item-card">
                  <div className="offering-number">0{idx + 1}</div>
                  <div className="offering-content">
                    <h4 className="offering-title">{item.name}</h4>
                    <p className="offering-stack">{item.stack}</p>
                  </div>
                  <ArrowRight size={16} className="offering-arrow" />
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link href="/services" className="btn-hire-now">
                <span className="status-dot" />
                <span>Explore All Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Reference-Matched Minimalist Tech Device Diagram */}
          <div className="tech-diagram-container">
            <div className="diagram-visual-card">
              {/* Central Server/App Device Illustration with glowing nodes */}
              <div className="server-unit-mockup">
                <div className="server-status-bar">
                  <div className="server-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="server-id">VAM-POD-01</span>
                </div>

                <div className="server-screen-content">
                  <div className="pulsing-grid-circle">
                    <Radio size={28} color="#2f54eb" />
                  </div>
                  <div className="server-metric-text">
                    <strong>99.98%</strong>
                    <span>Operational Uptime</span>
                  </div>
                </div>

                <div className="server-rack-lines">
                  <div className="rack-slot active" />
                  <div className="rack-slot active" />
                  <div className="rack-slot" />
                  <div className="rack-slot active" />
                </div>
              </div>

              {/* Connecting Nodes & Dashed Signal Paths from Reference */}
              <div className="diagram-node-orbital">
                <div className="orbit-circle-dashed" />
                <div className="floating-satellite satellite-1">
                  <Cloud size={16} color="#2f54eb" />
                  <span>Cloud Edge</span>
                </div>
                <div className="floating-satellite satellite-2">
                  <Zap size={16} color="#ff5722" />
                  <span>AI Engine</span>
                </div>
                <div className="floating-satellite satellite-3">
                  <Database size={16} color="#13c2c2" />
                  <span>Postgres Cluster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-services-tabs {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .tab-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background-color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          color: #2b3542;
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .tab-pill-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .tab-pill-btn.active-orange {
          background-color: #ffffff;
          border-color: rgba(255, 87, 34, 0.4);
          color: #ff5722;
          box-shadow: 0 6px 20px rgba(255, 87, 34, 0.15);
        }

        .tab-pill-btn.active-blue {
          background-color: #ffffff;
          border-color: rgba(47, 84, 235, 0.4);
          color: #2f54eb;
          box-shadow: 0 6px 20px rgba(47, 84, 235, 0.15);
        }

        .tab-pill-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .orange-dot {
          background-color: #ff5722;
          box-shadow: 0 0 8px #ff5722;
        }

        .blue-dot {
          background-color: #2f54eb;
          box-shadow: 0 0 8px #2f54eb;
        }

        .services-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }

        .services-main-heading {
          font-size: clamp(34px, 4.2vw, 48px);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 14px;
          color: #0c0e12;
        }

        .services-lead-text {
          font-size: 16px;
          line-height: 1.6;
          color: #556375;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .offering-items-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .offering-item-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 24px;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 6px 18px rgba(10, 25, 45, 0.04);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .offering-item-card:hover {
          transform: translateX(4px);
          border-color: rgba(255, 87, 34, 0.3);
          box-shadow: 0 10px 28px rgba(255, 87, 34, 0.08);
        }

        .offering-number {
          font-size: 13px;
          font-weight: 800;
          color: #ff5722;
          font-family: var(--font-mono);
          background-color: rgba(255, 87, 34, 0.1);
          padding: 6px 10px;
          border-radius: 8px;
        }

        .offering-content {
          flex: 1;
        }

        .offering-title {
          font-size: 16.5px;
          font-weight: 800;
          color: #0c0e12;
          margin-bottom: 4px;
        }

        .offering-stack {
          font-size: 13px;
          color: #6a798c;
          line-height: 1.4;
        }

        .offering-arrow {
          color: #8c9ba8;
          transition: all 0.2s ease;
        }

        .offering-item-card:hover .offering-arrow {
          color: #ff5722;
          transform: translateX(3px);
        }

        /* Right Diagram */
        .tech-diagram-container {
          position: relative;
        }

        .diagram-visual-card {
          position: relative;
          min-height: 440px;
          border-radius: 28px;
          background: linear-gradient(145deg, #ffffff 0%, #edf3f7 100%);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          overflow: hidden;
        }

        .server-unit-mockup {
          position: relative;
          z-index: 2;
          width: 220px;
          background: #ffffff;
          border-radius: 22px;
          border: 2px solid #0c0e12;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
          overflow: hidden;
          padding: 16px;
        }

        .server-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #edf2f6;
        }

        .server-dots {
          display: flex;
          gap: 4px;
        }

        .server-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #cbd5e1;
        }

        .server-dots span:first-child {
          background-color: #ff5722;
        }

        .server-id {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: #8c9ba8;
        }

        .server-screen-content {
          padding: 24px 8px;
          text-align: center;
        }

        .pulsing-grid-circle {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(47, 84, 235, 0.1);
          border: 1.5px solid rgba(47, 84, 235, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 0 20px rgba(47, 84, 235, 0.2);
        }

        .server-metric-text strong {
          display: block;
          font-size: 24px;
          font-weight: 900;
          color: #0c0e12;
          letter-spacing: -0.04em;
        }

        .server-metric-text span {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }

        .server-rack-lines {
          display: flex;
          gap: 5px;
          padding-top: 14px;
          border-top: 1px solid #edf2f6;
        }

        .rack-slot {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          background-color: #e2e8f0;
        }

        .rack-slot.active {
          background-color: #ff5722;
        }

        .diagram-node-orbital {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .orbit-circle-dashed {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1.5px dashed rgba(47, 84, 235, 0.25);
        }

        .floating-satellite {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background-color: #ffffff;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          font-size: 11.5px;
          font-weight: 700;
          color: #0c0e12;
        }

        .satellite-1 {
          top: 18%;
          left: 8%;
        }

        .satellite-2 {
          top: 22%;
          right: 6%;
        }

        .satellite-3 {
          bottom: 16%;
          right: 12%;
        }

        @media (max-width: 900px) {
          .services-grid-layout {
            grid-template-columns: 1fr;
          }
          .diagram-visual-card {
            min-height: 360px;
          }
        }
      `}</style>
    </section>
  );
}

