'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Compass, 
  FileCode, 
  Clock, 
  Ship, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Cpu, 
  Award,
  Layers,
  Activity,
  BarChart3,
  TrendingUp,
  Workflow
} from 'lucide-react';

interface Phase {
  id: string;
  phaseNum: string;
  name: string;
  duration: string;
  icon: React.ReactNode;
  summary: string;
  bulletPoints: string[];
  slaGuarantee: string;
  codeSnippet?: string;
}

export default function SwissDeliveryJourney() {
  const [activePhaseId, setActivePhaseId] = useState<string>('discovery');

  const phases: Phase[] = [
    {
      id: 'discovery',
      phaseNum: 'Phase 1',
      name: 'DISCOVERY',
      duration: 'Week 1',
      icon: <Search size={22} />,
      summary: 'Deep Technical Alignment & Constraint Analysis',
      bulletPoints: [
        'Discovery & Repo Audit',
        'Deep Alignment & Feasibility',
        'Architecture Strategy',
      ],
      slaGuarantee: '100% Deterministic Scope & Fixed Milestones',
    },
    {
      id: 'blueprint',
      phaseNum: 'Phase 2',
      name: 'BLUEPRINT',
      duration: 'Weeks 2 – 3',
      icon: <FileCode size={22} />,
      summary: 'Deterministic System Design & Schema DAGs',
      bulletPoints: [
        'Technical Architecture DAG',
        'Roadmapping & Milestones',
        'Threat Modeling & SOC 2',
      ],
      slaGuarantee: 'Zero-Ambiguity Architecture Sign-off',
    },
    {
      id: 'velocity',
      phaseNum: 'Phase 3',
      name: 'VELOCITY',
      duration: 'Weeks 4 – 10',
      icon: <Clock size={22} />,
      summary: 'Autonomous Pod Bi-Weekly Sprint Execution',
      bulletPoints: [
        'Iterative 14-Day Sprints',
        'Automated CI/CD Verification',
        'Production MVP Build',
      ],
      slaGuarantee: '<24hr PR Review & Daily Staging Deploys',
    },
    {
      id: 'handover',
      phaseNum: 'Phase 4',
      name: 'HANDOVER',
      duration: 'Weeks 11 – 12+',
      icon: <Ship size={22} />,
      summary: 'Zero-Downtime Rollout & 24/7 Observability',
      bulletPoints: [
        'Deployment & Cutover Runbooks',
        'Knowledge Transfer Pairings',
        '24/7 SRE Telemetry Support',
      ],
      slaGuarantee: '99.999% Availability & <15m Incident MTTA',
    },
  ];

  const selectedPhase = phases.find((p) => p.id === activePhaseId) || phases[0];

  const engagementPillars = [
    {
      title: "'DEDICATED PODS'",
      icon: <Users size={22} />,
      desc: 'Dedicated pods set up strict engineering process controls and ensure high developer velocity and user satisfaction.',
      roles: ['Principal Architect', 'Lead Engineer', 'UX/UI', 'DevOps'],
      duration: 'Sample duration: 2 hr onboarding • Immediate Start',
      link: '/contact?model=dedicated-pods',
    },
    {
      title: "'STAFF AUGMENTATION'",
      icon: <Cpu size={22} />,
      desc: 'Generate a collaborative platform space of elite remote staff augmentation engineering in cloud and engineering partnerships.',
      roles: ['Principal Architect', 'Lead Engineer', 'UX/UI', 'DevOps'],
      duration: 'Sample duration: 7 hr turnaround • Verified Top 1%',
      link: '/contact?model=staff-augmentation',
    },
    {
      title: "'ARCHITECTURE SPRINTS'",
      icon: <Zap size={22} />,
      desc: 'Architecture-focused remote design, and architecture of immediate core systems, and architectural commitments.',
      roles: ['Principal Architect', 'UX/UI', 'DevOps'],
      duration: 'Sample duration: 10 - 150 minutes advisory / 2-week Sprint',
      link: '/contact?model=architecture-sprints',
    },
    {
      title: "'MANAGED SRE'",
      icon: <ShieldCheck size={22} />,
      desc: 'Managed SRE ensures continuous high-concurrency performance and automated rollback protection for critical workloads.',
      roles: ['DevOps', 'Lead Engineer', 'UX/UI', 'Principal Architect'],
      duration: 'Sample duration: 1 hr SLA incident response • 24/7 On-call',
      link: '/contact?model=managed-sre',
    },
  ];

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* ====================================================================
          SECTION 1: ENGINEERING PARTNERSHIPS — THE FOUR ENGAGEMENT PILLARS
          ==================================================================== */}
      <div>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
            }}
          >
            Engineering Partnerships
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '14.5px',
              color: 'var(--color-graphite)',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            The Four Engagement Pillars provide custom architectural execution, rigorous staffing, and predictable SLAs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {engagementPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="monad-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-ash)',
                borderRadius: '24px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 30px -10px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Icon Circle */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-parchment)',
                    border: '1px solid var(--color-ash)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-off-black)',
                    marginBottom: '20px',
                  }}
                >
                  {pillar.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    letterSpacing: '0.04em',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--color-graphite)',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {pillar.desc}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Roles:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {pillar.roles.map((r, rIdx) => (
                      <span
                        key={rIdx}
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-abc-diatype-mono)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--color-parchment)',
                          border: '1px solid var(--color-ash)',
                          color: 'var(--color-off-black)',
                        }}
                      >
                        [{r}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', marginBottom: '14px' }}>
                  {pillar.duration}
                </div>
                <Link
                  href={pillar.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-off-black)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-off-black)',
                    paddingBottom: '2px',
                  }}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================================
          SECTION 2: THE VAMTECH JOURNEY: OUR METHODICAL PROCESS (TIMELINE)
          ==================================================================== */}
      <div
        className="monad-card"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '32px',
          border: '1px solid var(--color-ash)',
          padding: 'clamp(36px, 5vw, 60px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Architectural Wireframe Line Art Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '320px',
            opacity: 0.08,
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle at 100% 0%, var(--color-off-black) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              marginBottom: '10px',
            }}
          >
            The Vamtech Journey: Our Methodical Process
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '14.5px',
              color: 'var(--color-graphite)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Bespoke Swiss execution with clear phase gating, mathematical rigor, and transparent deliverables.
          </p>
        </div>

        {/* Interconnected SVG Timeline Header Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            position: 'relative',
            marginBottom: '40px',
          }}
        >
          {phases.map((phase, idx) => {
            const isSelected = phase.id === activePhaseId;
            return (
              <div
                key={phase.id}
                onClick={() => setActivePhaseId(phase.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '20px 14px',
                  borderRadius: '20px',
                  backgroundColor: isSelected ? 'var(--color-parchment)' : 'transparent',
                  border: isSelected ? '1px solid var(--color-ash)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                {/* Step Circle with Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                    color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                    border: '1px solid var(--color-ash)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
                  }}
                >
                  {phase.icon}
                </div>

                {/* Arrow Connector between steps */}
                {idx < phases.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '44px',
                      right: '-16px',
                      color: 'var(--color-ash)',
                      fontSize: '16px',
                      display: 'none', // Shown on large screen via flex
                    }}
                  >
                    →
                  </div>
                )}

                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    color: isSelected ? 'var(--color-lake-blue)' : 'var(--color-smoke)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {phase.phaseNum} • {phase.duration}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                  }}
                >
                  {phase.name}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', width: '100%' }}>
                  {phase.bulletPoints.map((bp, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        fontSize: '12px',
                        color: 'var(--color-graphite)',
                        fontFamily: 'var(--font-abc-diatype-mono)',
                        padding: '2px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ color: 'var(--color-lake-blue)', fontSize: '10px' }}>•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Bar */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment)',
            borderRadius: '20px',
            border: '1px solid var(--color-ash)',
            padding: '24px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', textTransform: 'uppercase', color: 'var(--color-lake-blue)', fontWeight: 600 }}>
              Active Stage Guarantee
            </span>
            <div style={{ fontSize: '15px', color: 'var(--color-off-black)', fontWeight: 500, marginTop: '2px' }}>
              {selectedPhase.name}: {selectedPhase.summary}
            </div>
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              fontSize: '12px',
              fontFamily: 'var(--font-abc-diatype-mono)',
              color: '#0e7040',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <CheckCircle2 size={14} color="#0e7040" />
            <span>{selectedPhase.slaGuarantee}</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          SECTION 3: UNCOMPROMISING SLAS & METRICS WITH SPARKLINE TRENDS
          ==================================================================== */}
      <div>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              marginBottom: '10px',
            }}
          >
            Uncompromising SLAs & Metrics
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '14.5px',
              color: 'var(--color-graphite)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Transparent commitments to elevate our quality engineering with verifiable metric charts.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: 99.9% Uptime SLA with Sparkline */}
          <div
            className="monad-card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Availability Tier
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginBottom: '2px',
                }}
              >
                99.9%
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '16px' }}>
                Uptime SLA
              </div>
            </div>

            {/* Sparkline SVG Chart */}
            <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '14px' }}>
              <svg viewBox="0 0 200 45" style={{ width: '100%', height: '45px', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="gradUptime" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2b59d1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#2b59d1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,35 Q30,30 60,32 T120,20 T170,12 T200,10 L200,45 L0,45 Z"
                  fill="url(#gradUptime)"
                />
                <path
                  d="M0,35 Q30,30 60,32 T120,20 T170,12 T200,10"
                  fill="none"
                  stroke="var(--color-lake-blue)"
                  strokeWidth="2"
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', marginTop: '4px' }}>
                <span>Jan</span>
                <span>Multi-AZ Failover</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Card 2: Response Time with Wave Curve */}
          <div
            className="monad-card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Latency Execution
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginBottom: '2px',
                }}
              >
                &lt;1.8ms
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '16px' }}>
                Response Time (p99)
              </div>
            </div>

            {/* Sparkline SVG Chart */}
            <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '14px' }}>
              <svg viewBox="0 0 200 45" style={{ width: '100%', height: '45px', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="gradResp" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,25 Q35,40 70,18 T130,22 T170,10 T200,8 L200,45 L0,45 Z"
                  fill="url(#gradResp)"
                />
                <path
                  d="M0,25 Q35,40 70,18 T130,22 T170,10 T200,8"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', marginTop: '4px' }}>
                <span>0ms</span>
                <span>Zero Memory Leaks</span>
                <span>&lt;2ms Target</span>
              </div>
            </div>
          </div>

          {/* Card 3: 96.9% Delivery Commitment */}
          <div
            className="monad-card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Sprint Velocity
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginBottom: '2px',
                }}
              >
                96.9%
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '16px' }}>
                Delivery Commitment
              </div>
            </div>

            {/* Sparkline SVG Chart */}
            <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '14px' }}>
              <svg viewBox="0 0 200 45" style={{ width: '100%', height: '45px', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="gradCommit" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff9473" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff9473" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,30 Q40,28 80,20 T140,15 T200,6 L200,45 L0,45 Z"
                  fill="url(#gradCommit)"
                />
                <path
                  d="M0,30 Q40,28 80,20 T140,15 T200,6"
                  fill="none"
                  stroke="#ff9473"
                  strokeWidth="2"
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', marginTop: '4px' }}>
                <span>Sprint 1</span>
                <span>On-Time Milestone</span>
                <span>Sprint N</span>
              </div>
            </div>
          </div>

          {/* Card 4: 99.7% Quality Score */}
          <div
            className="monad-card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Audit Precision
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginBottom: '2px',
                }}
              >
                99.7%
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-graphite)', marginBottom: '16px' }}>
                Quality Score
              </div>
            </div>

            {/* Sparkline SVG Chart */}
            <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '14px' }}>
              <svg viewBox="0 0 200 45" style={{ width: '100%', height: '45px', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="gradQual" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a0b5eb" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a0b5eb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,28 Q40,32 90,18 T150,12 T200,8 L200,45 L0,45 Z"
                  fill="url(#gradQual)"
                />
                <path
                  d="M0,28 Q40,32 90,18 T150,12 T200,8"
                  fill="none"
                  stroke="#2b59d1"
                  strokeWidth="2"
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', marginTop: '4px' }}>
                <span>AST Scan</span>
                <span>0.001% Escape Rate</span>
                <span>Prod Pass</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          SECTION 4: READY TO ARCHITECT THE FUTURE (SWISS CTA BANNER)
          ==================================================================== */}
      <div
        style={{
          textAlign: 'center',
          padding: '48px 32px',
          borderRadius: '28px',
          backgroundColor: 'var(--color-parchment)',
          border: '1px solid var(--color-ash)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-untitled-serif)',
            fontSize: 'clamp(24px, 3.2vw, 36px)',
            fontWeight: 400,
            color: 'var(--color-off-black)',
            maxWidth: '680px',
            margin: 0,
          }}
        >
          Ready to Architect the Future? Partner with Vamtech for exceptional engineering services.
        </h3>
        <Link
          href="/contact"
          className="btn-primary"
          style={{
            backgroundColor: 'var(--color-off-black)',
            color: '#ffffff',
            padding: '14px 32px',
            fontSize: '13px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <span>ENGAGE WITH US</span>
          <span className="arrow-glyph">▸</span>
        </Link>
      </div>

    </div>
  );
}

