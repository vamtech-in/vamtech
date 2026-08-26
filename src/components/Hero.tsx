'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Cloud, 
  Database, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Activity 
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai' | 'cloud'>('architecture');

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '64px',
        paddingBottom: '96px',
        overflow: 'hidden',
      }}
      className="tech-grid-pattern"
    >
      {/* Background glow effects */}
      <div className="tech-glow-blue" style={{ top: '-100px', left: '-150px' }} />
      <div className="tech-glow-cyan" style={{ bottom: '-50px', right: '-100px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Copy and Actions */}
          <div style={{ maxWidth: '640px' }}>
            {/* Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                marginBottom: '24px',
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-brand-blue)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Next-Gen IT Services & Software Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(40px, 5.2vw, 64px)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                marginBottom: '24px',
              }}
            >
              Building Technology That{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Moves Businesses Forward.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '36px',
                maxWidth: '580px',
              }}
            >
              VAMTech helps businesses transform ideas into scalable digital products through software engineering, AI, cloud, and modern technology solutions.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              <Link href="/services" className="btn-primary">
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>

              <Link href="/contact" className="btn-secondary">
                <span>Start a Project</span>
              </Link>
            </div>

            {/* Trust Bullet Chips */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '13px',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-brand-blue)" />
                <span>Enterprise Grade</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-brand-blue)" />
                <span>100% IP Ownership</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-brand-blue)" />
                <span>Agile Sprints</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-dark)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(37, 99, 235, 0.2)',
                overflow: 'hidden',
                color: '#ffffff',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8' }}>
                    vamtech-core-architecture.v2
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10b981' }}>
                    LIVE SYSTEM
                  </span>
                </div>
              </div>

              {/* Interactive Visual Tabs */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <button
                  onClick={() => setActiveTab('architecture')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: activeTab === 'architecture' ? 'var(--color-brand-blue)' : 'transparent',
                    color: activeTab === 'architecture' ? '#ffffff' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Distributed Services
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: activeTab === 'ai' ? 'var(--color-brand-purple)' : 'transparent',
                    color: activeTab === 'ai' ? '#ffffff' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  AI RAG Pipeline
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: activeTab === 'cloud' ? 'var(--color-brand-cyan)' : 'transparent',
                    color: activeTab === 'cloud' ? '#0f172a' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Cloud Telemetry
                </button>
              </div>

              {/* Dynamic Console Display */}
              <div style={{ padding: '24px' }}>
                {activeTab === 'architecture' && (
                  <div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                        marginBottom: '20px',
                      }}
                    >
                      <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-brand-cyan)', marginBottom: '6px' }}>
                          <Cpu size={14} />
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>Next.js Edge</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 700 }}>99.98%</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Render Uptime</div>
                      </div>

                      <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-brand-blue)', marginBottom: '6px' }}>
                          <Layers size={14} />
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>Node.js API</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 700 }}>14ms</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>P99 Latency</div>
                      </div>

                      <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', marginBottom: '6px' }}>
                          <Database size={14} />
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>PostgreSQL</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 700 }}>ACID</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Encrypted Vault</div>
                      </div>
                    </div>

                    {/* Architecture Workflow Visual */}
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        border: '1px dashed rgba(255,255,255,0.15)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: '#94a3b8',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: '#ffffff' }}>[Client Request]</span>
                        <span>──&gt;</span>
                        <span style={{ color: 'var(--color-brand-cyan)' }}>[Edge CDN]</span>
                        <span>──&gt;</span>
                        <span style={{ color: 'var(--color-brand-blue)' }}>[Microservices Pod]</span>
                      </div>
                      <div style={{ color: '#10b981' }}>✓ 0 CVEs detected in automated build audit</div>
                      <div style={{ color: '#e2e8f0', marginTop: '4px' }}>✓ Zero-downtime blue-green deployment active</div>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div>
                    <div style={{ marginBottom: '16px', fontSize: '13px', color: '#cbd5e1' }}>
                      Context-Aware Enterprise Retrieval-Augmented Generation (RAG)
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '6px', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#d8b4fe' }}>1. Document Embedding (OpenAI text-3-large)</span>
                        <span style={{ fontSize: '11px', color: '#10b981' }}>1536 dims</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '6px', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#d8b4fe' }}>2. Vector Similarity Query (pgvector HNSW)</span>
                        <span style={{ fontSize: '11px', color: '#10b981' }}>Score: 0.94</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '6px', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#d8b4fe' }}>3. Grounded Synthesis & Guardrail Check</span>
                        <span style={{ fontSize: '11px', color: '#10b981' }}>Zero Leakage</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'cloud' && (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>AWS ECS Cluster</span>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-cyan)', marginTop: '4px' }}>Healthy (8 Pods)</div>
                      </div>
                      <div style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Auto-Scaling Trigger</span>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#10b981', marginTop: '4px' }}>Threshold: 70%</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8', lineHeight: 1.6 }}>
                      <div>$ terraform plan -out=tfplan</div>
                      <div style={{ color: '#10b981' }}>Plan: 14 to add, 0 to change, 0 to destroy.</div>
                      <div style={{ color: '#e2e8f0' }}>Deployment Pipeline: Completed in 48s</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
