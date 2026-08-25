'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Server, 
  ShieldAlert, 
  Cloud, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  HardDrive,
  FileCode2,
  Lock,
  Workflow
} from 'lucide-react';

interface PipelineNode {
  id: string;
  label: string;
  category: 'source' | 'hub' | 'destination';
  icon: React.ReactNode;
  specs: string;
  throughput: string;
  status: string;
}

export default function MonadPipelineDiagram() {
  const [activeNode, setActiveNode] = useState<string>('hub');
  const [flowSpeed, setFlowSpeed] = useState<number>(1);

  const sources: PipelineNode[] = [
    { id: 'src-cloud', label: 'Cloud Logs & VPC Flow', category: 'source', icon: <Cloud size={14} />, specs: 'AWS CloudWatch / GCP Stackdriver / Azure EventHub', throughput: '42,000 evt/s', status: 'STREAMING' },
    { id: 'src-auth', label: 'Identity & IdP Events', category: 'source', icon: <Lock size={14} />, specs: 'Okta / Azure AD / Auth0 JWTs', throughput: '8,400 evt/s', status: 'AUTHENTICATED' },
    { id: 'src-vuln', label: 'Vulnerabilities & CVEs', category: 'source', icon: <ShieldAlert size={14} />, specs: 'Snyk / Wiz / Trivy / Crowdstrike', throughput: '1,200 evt/s', status: 'INGESTED' },
    { id: 'src-micro', label: 'Microservice Telemetry', category: 'source', icon: <Cpu size={14} />, specs: 'OpenTelemetry / gRPC / Distributed Spans', throughput: '68,000 evt/s', status: 'TRACED' },
  ];

  const hubNode: PipelineNode = {
    id: 'hub',
    label: 'Monad Normalization Hub',
    category: 'hub',
    icon: <Workflow size={16} />,
    specs: 'OCSF Schema Mapping, Deduping & In-Flight Zero-Copy Transformation',
    throughput: '119,600 evt/s normalized',
    status: 'OPTIMAL (0.42ms p99)'
  };

  const destinations: PipelineNode[] = [
    { id: 'dst-siem', label: 'Enterprise SIEM & Splunk', category: 'destination', icon: <Server size={14} />, specs: 'Structured OCSF Parquet Stream', throughput: '35,000 evt/s', status: 'INDEXED' },
    { id: 'dst-lake', label: 'Data Lakehouse & S3', category: 'destination', icon: <HardDrive size={14} />, specs: 'Iceberg / Delta Lake Cold Archive', throughput: '54,000 evt/s', status: 'PERSISTED' },
    { id: 'dst-vector', label: 'AI Vector Index & RAG', category: 'destination', icon: <Sparkles size={14} />, specs: 'Qdrant / pgvector Embedded Embeddings', throughput: '6,200 evt/s', status: 'EMBEDDED' },
    { id: 'dst-sec', label: 'Security Data Warehouse', category: 'destination', icon: <Database size={14} />, specs: 'Snowflake / BigQuery Zero-ETL Sync', throughput: '24,400 evt/s', status: 'SYNCED' },
  ];

  const allNodes = [...sources, hubNode, ...destinations];
  const selectedNodeData = allNodes.find(n => n.id === activeNode) || hubNode;

  return (
    <div
      className="monad-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '48px 36px',
        backgroundColor: 'var(--color-parchment)',
      }}
    >
      {/* Central Mint Radial Glow behind Hub to visually communicate normalization */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '420px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(167, 252, 205, 0.45) 0%, rgba(160, 181, 235, 0.2) 50%, transparent 75%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header text */}
      <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
          <span className="pipeline-node-tag" style={{ padding: '6px 14px', fontSize: '11px', backgroundColor: '#ffffff' }}>
            <Activity size={12} color="var(--color-lake-blue)" />
            <span>Interactive Data Architecture</span>
          </span>
        </div>
        <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', marginBottom: '12px', color: 'var(--color-off-black)' }}>
          High-Concurrency In-Flight Data Pipeline
        </h3>
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: 'var(--text-body)', color: 'var(--color-graphite)' }}>
          Click any pill node to inspect telemetry schemas, throughput capacity, and real-time zero-copy routing.
        </p>
      </div>

      {/* Interactive Flow Grid & Nodes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '32px',
          position: 'relative',
          zIndex: 1,
          marginBottom: '40px',
        }}
        className="pipeline-grid"
      >
        {/* Column 1: Sources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="mono-helper" style={{ marginBottom: '4px' }}>
            [01] INGESTION SOURCES
          </div>
          {sources.map((src) => {
            const isSelected = activeNode === src.id;
            return (
              <button
                key={src.id}
                onClick={() => setActiveNode(src.id)}
                className="pipeline-node-tag"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  backgroundColor: isSelected ? 'var(--color-off-black)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                  borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                  cursor: 'pointer',
                  padding: '14px 20px',
                  boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                <span style={{ color: isSelected ? 'var(--color-mint)' : 'var(--color-graphite)' }}>
                  {src.icon}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 500 }}>{src.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', opacity: 0.7 }}>
                  {src.throughput}
                </span>
              </button>
            );
          })}
        </div>

        {/* Column 2: Central Normalization Hub */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '260px' }}>
          <div className="mono-helper" style={{ marginBottom: '8px' }}>
            [02] IN-FLIGHT HUB
          </div>
          <button
            onClick={() => setActiveNode('hub')}
            style={{
              padding: '28px 24px',
              borderRadius: '32px',
              backgroundColor: activeNode === 'hub' ? 'var(--color-off-black)' : '#ffffff',
              border: activeNode === 'hub' ? '2px solid var(--color-lake-blue)' : '2px solid var(--color-mint)',
              color: activeNode === 'hub' ? '#ffffff' : 'var(--color-off-black)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '12px',
              width: '100%',
              boxShadow: '0 8px 24px rgba(167, 252, 205, 0.35)',
              transition: 'all 0.2s ease',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(167, 252, 205, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0b5930',
              }}
            >
              <Workflow size={22} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '18px', fontWeight: 400 }}>
                Normalization Hub
              </div>
              <div className="mono-text" style={{ fontSize: '12px', color: activeNode === 'hub' ? '#a0b5eb' : 'var(--color-lake-blue)', marginTop: '4px', textTransform: 'uppercase' }}>
                Zero-Copy OCSF Engine
              </div>
            </div>
            <div
              style={{
                padding: '4px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(167, 252, 205, 0.25)',
                fontSize: '11px',
                fontFamily: 'var(--font-abc-diatype-mono)',
                color: activeNode === 'hub' ? 'var(--color-mint)' : '#085028',
              }}
            >
              • 0.42ms Latency
            </div>
          </button>
        </div>

        {/* Column 3: Destinations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="mono-helper" style={{ marginBottom: '4px' }}>
            [03] DESTINATIONS & ARCHIVES
          </div>
          {destinations.map((dst) => {
            const isSelected = activeNode === dst.id;
            return (
              <button
                key={dst.id}
                onClick={() => setActiveNode(dst.id)}
                className="pipeline-node-tag"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  backgroundColor: isSelected ? 'var(--color-off-black)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                  borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                  cursor: 'pointer',
                  padding: '14px 20px',
                  boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                <span style={{ color: isSelected ? 'var(--color-sky-blue)' : 'var(--color-graphite)' }}>
                  {dst.icon}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 500 }}>{dst.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', opacity: 0.7 }}>
                  {dst.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Node Telemetry Inspector Card (Parchment with 1px Ash border) */}
      <div
        style={{
          padding: '24px 32px',
          borderRadius: '24px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-ash)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              padding: '10px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-periwinkle-mist)',
              color: 'var(--color-lake-blue)',
            }}
          >
            {selectedNodeData.icon}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', color: 'var(--color-off-black)' }}>
                {selectedNodeData.label}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(43, 89, 209, 0.1)',
                  color: 'var(--color-lake-blue)',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                }}
              >
                {selectedNodeData.status}
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-graphite)', marginTop: '2px' }}>
              {selectedNodeData.specs}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ textAlign: 'right' }}>
            <div className="mono-helper">SLA THROUGHPUT</div>
            <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontWeight: 500, fontSize: '15px', color: 'var(--color-off-black)' }}>
              {selectedNodeData.throughput}
            </div>
          </div>
          <button
            onClick={() => setFlowSpeed((s) => (s === 1 ? 2 : 1))}
            className="btn-ghost"
            style={{ padding: '8px 18px', fontSize: '12px' }}
          >
            Flow Rate: {flowSpeed}x
          </button>
        </div>
      </div>
    </div>
  );
}
