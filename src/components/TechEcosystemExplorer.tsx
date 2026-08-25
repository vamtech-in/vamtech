'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Cloud, 
  Sparkles, 
  CheckCircle2,
  Code2,
  Zap,
  Layers,
  Terminal,
  Activity,
  ArrowRight,
  ShieldCheck,
  Server,
  Gauge,
  Boxes,
  LayoutGrid,
  GitFork,
  Sliders
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'languages' | 'databases' | 'cloud' | 'ai';
  categoryLabel: string;
  layer: 'Runtime & Logic' | 'Data & Storage' | 'Cloud & SRE' | 'Intelligence';
  highlight: string;
  concurrencyModel: string;
  enterpriseUse: string;
  slaMetric: string;
  latency: string;
  icon: string;
  codeSnippet: string;
}

const techItems: TechItem[] = [
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'languages',
    categoryLabel: 'Core Languages',
    layer: 'Runtime & Logic',
    highlight: 'Goroutine scheduler & zero-memory-leak garbage collection engine',
    concurrencyModel: 'CSP Channels & M:N runtime multiplexing',
    enterpriseUse: 'Ultra-low latency microservices & real-time settlement engines',
    slaMetric: '<2ms p99 execution',
    latency: '1.4ms',
    icon: 'Cpu',
    codeSnippet: `func HandleStream(w http.ResponseWriter, r *http.Request) {
  ctx, cancel := context.WithTimeout(r.Context(), 50*time.Millisecond)
  defer cancel()
  go processBatch(ctx, streamBuffer)
}`,
  },
  {
    id: 'ts',
    name: 'TypeScript / Next.js',
    category: 'languages',
    categoryLabel: 'Core Languages',
    layer: 'Runtime & Logic',
    highlight: 'Strict compile-time type safety with streaming React Server Components',
    concurrencyModel: 'Async Event Loop & Edge Worker V8 Isolates',
    enterpriseUse: 'Enterprise web consoles, client dashboards & multi-tenant portals',
    slaMetric: '100% Type Safe',
    latency: '12ms TTFB',
    icon: 'Code2',
    codeSnippet: `export async function GET(req: Request): Promise<Response> {
  const session = await auth.verify(req);
  return Response.json({ status: "healthy", tenant: session.orgId });
}`,
  },
  {
    id: 'python',
    name: 'Python / PyTorch',
    category: 'ai',
    categoryLabel: 'AI & Data Science',
    layer: 'Intelligence',
    highlight: 'CUDA-accelerated tensor pipelines & low-overhead vector inference',
    concurrencyModel: 'AsyncIO & Multi-GPU distributed sharding',
    enterpriseUse: 'Vector RAG search systems & proprietary LLM guardrail inference',
    slaMetric: '99.4% Precision',
    latency: '18ms Batch',
    icon: 'Sparkles',
    codeSnippet: `with torch.inference_mode():
    embeddings = model.encode(batch, device="cuda:0")
    results = vector_index.search(embeddings, top_k=5)`,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL + pgvector',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    layer: 'Data & Storage',
    highlight: 'Strict ACID transactional guarantees paired with high-dimensional vector search',
    concurrencyModel: 'MVCC + PgBouncer connection pooling',
    enterpriseUse: 'Primary financial transaction ledger & hybrid semantic search database',
    slaMetric: 'Zero Data Loss',
    latency: '0.8ms Read',
    icon: 'Database',
    codeSnippet: `SELECT id, title, (embedding <=> $1) AS cosine_dist 
FROM vector_knowledge_base 
WHERE org_id = $2 ORDER BY cosine_dist ASC LIMIT 10;`,
  },
  {
    id: 'kafka',
    name: 'Apache Kafka / Redpanda',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    layer: 'Data & Storage',
    highlight: 'Distributed zero-copy commit log with partition-level replayability',
    concurrencyModel: 'Zero-copy kernel sendfile & distributed consumer groups',
    enterpriseUse: 'High-throughput event mesh for audit pipelines and telemetry distribution',
    slaMetric: '2M+ msg/sec',
    latency: '<1ms Ack',
    icon: 'Layers',
    codeSnippet: `ProducerRecord<String, byte[]> record = 
    new ProducerRecord<>("telemetry.audit.v1", tenantId, payload);
producer.send(record, callback);`,
  },
  {
    id: 'k8s',
    name: 'Kubernetes & Cilium eBPF',
    category: 'cloud',
    categoryLabel: 'Cloud & SRE',
    layer: 'Cloud & SRE',
    highlight: 'Kernel-level network observability with wire-speed hardware mTLS encryption',
    concurrencyModel: 'Autonomous HPA pod autoscaling across multi-AZ clusters',
    enterpriseUse: 'Zero-trust workload orchestration with automated failover and canary deployments',
    slaMetric: '99.999% SLA',
    latency: '<0.2ms Hop',
    icon: 'Cloud',
    codeSnippet: `apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata: { name: "strict-zero-trust" }
spec: { endpointSelector: { matchLabels: { role: "vault" } } }`,
  },
];

type ViewMode = 'bento' | 'pipeline' | 'inspector' | 'console';

export default function TechEcosystemExplorer() {
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTechId, setSelectedTechId] = useState<string>('go');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedTech = techItems.find((t) => t.id === selectedTechId) || techItems[0];

  const filteredItems = activeCategory === 'all'
    ? techItems
    : techItems.filter((i) => i.category === activeCategory);

  const handleCopyCode = (snippet: string, id: string) => {
    navigator.clipboard?.writeText(snippet);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="monad-card"
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(24px, 4vw, 48px)',
        borderRadius: '32px',
        border: '1px solid var(--color-ash)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header & Style Switcher Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-periwinkle-mist)',
                  color: 'var(--color-lake-blue)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                Production Stack Architecture
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(167, 252, 205, 0.4)',
                  color: '#0e7040',
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  fontWeight: 600,
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                Live Telemetry
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Curated Production Ecosystem
            </h3>
            <p style={{ margin: '8px 0 0 0', fontSize: '15px', color: 'var(--color-graphite)', maxWidth: '580px' }}>
              High-throughput streaming, sub-millisecond execution, and zero-trust cloud foundations.
            </p>
          </div>

          {/* View Mode Switcher Preview Toolbar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--color-smoke)', fontFamily: 'var(--font-abc-diatype-mono)', textTransform: 'uppercase' }}>
              UI Preview Style
            </span>
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--color-parchment)',
                padding: '4px',
                borderRadius: '16px',
                border: '1px solid var(--color-ash)',
                gap: '2px',
              }}
            >
              {[
                { id: 'bento', label: 'Bento Grid', icon: LayoutGrid },
                { id: 'pipeline', label: 'Stack Pipeline', icon: GitFork },
                { id: 'inspector', label: 'Deep Dossier', icon: Sliders },
                { id: 'console', label: 'Dark Console', icon: Terminal },
              ].map((m) => {
                const Icon = m.icon;
                const active = viewMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setViewMode(m.id as ViewMode)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-untitled-sans)',
                      backgroundColor: active ? 'var(--color-off-black)' : 'transparent',
                      color: active ? '#ffffff' : 'var(--color-graphite)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={14} />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Filters (Visible for Bento & Pipeline) */}
        {viewMode !== 'inspector' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              borderTop: '1px solid var(--color-ash)',
              paddingTop: '18px',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--color-smoke)', marginRight: '6px', fontFamily: 'var(--font-abc-diatype-mono)' }}>
              Filter:
            </span>
            {[
              { id: 'all', label: 'All Layers' },
              { id: 'languages', label: 'Core Languages' },
              { id: 'databases', label: 'Data & Queues' },
              { id: 'cloud', label: 'Cloud & SRE' },
              { id: 'ai', label: 'AI & Inference' },
            ].map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                    color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                    border: `1px solid ${isSelected ? 'var(--color-off-black)' : 'var(--color-ash)'}`,
                    cursor: 'pointer',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* =========================================================================
          VIEW 1: MODERN MONAD BENTO GRID
          ========================================================================= */}
      {viewMode === 'bento' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredItems.map((tech) => (
            <div
              key={tech.id}
              style={{
                padding: '28px',
                borderRadius: '24px',
                backgroundColor: 'var(--color-parchment)',
                border: '1px solid var(--color-ash)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--color-lake-blue)';
                e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(43, 89, 209, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-ash)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      color: 'var(--color-graphite)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tech.categoryLabel}
                  </span>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-ash)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      color: 'var(--color-lake-blue)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Zap size={11} color="var(--color-lake-blue)" />
                    {tech.slaMetric}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '8px',
                  }}
                >
                  {tech.name}
                </h4>

                <p style={{ fontSize: '13.5px', color: 'var(--color-graphite)', marginBottom: '18px', lineHeight: 1.5 }}>
                  {tech.highlight}
                </p>
              </div>

              <div>
                <div
                  style={{
                    borderTop: '1px solid var(--color-ash)',
                    paddingTop: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: 'var(--color-smoke)', textTransform: 'uppercase' }}>
                      Latency Profile
                    </span>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#0e7040', fontWeight: 600 }}>
                      {tech.latency}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-off-black)', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                    <span style={{ color: 'var(--color-smoke)' }}>Runtime: </span>
                    {tech.concurrencyModel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          VIEW 2: ARCHITECTURAL PIPELINE / MATRIX
          ========================================================================= */}
      {viewMode === 'pipeline' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { layer: 'Runtime & Logic', desc: 'Core compiled services & front-edge render nodes' },
            { layer: 'Data & Storage', desc: 'Distributed event bus & ACID vector-relational engines' },
            { layer: 'Intelligence', desc: 'Accelerated tensor inference & contextual semantic graph' },
            { layer: 'Cloud & SRE', desc: 'Zero-trust container mesh with eBPF network telemetry' },
          ].map((layerGroup) => {
            const items = filteredItems.filter((i) => i.layer === layerGroup.layer);
            if (items.length === 0) return null;

            return (
              <div
                key={layerGroup.layer}
                style={{
                  backgroundColor: 'var(--color-parchment)',
                  borderRadius: '24px',
                  border: '1px solid var(--color-ash)',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-lake-blue)', fontWeight: 600 }}>
                      {layerGroup.layer}
                    </span>
                    <p style={{ fontSize: '13px', color: 'var(--color-graphite)', margin: '2px 0 0 0' }}>
                      {layerGroup.desc}
                    </p>
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)' }}>
                    {items.length} Active Primitives
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                  {items.map((tech) => (
                    <div
                      key={tech.id}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid var(--color-ash)',
                        padding: '18px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--color-off-black)' }}>{tech.name}</span>
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#0e7040', background: 'rgba(167, 252, 205, 0.3)', padding: '2px 8px', borderRadius: '9999px' }}>
                            {tech.latency}
                          </span>
                        </div>
                        <p style={{ fontSize: '12.5px', color: 'var(--color-graphite)', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                          {tech.enterpriseUse}
                        </p>
                      </div>
                      <div style={{ borderTop: '1px dashed var(--color-ash)', paddingTop: '8px', fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)' }}>
                        Metric: <strong style={{ color: 'var(--color-off-black)' }}>{tech.slaMetric}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          VIEW 3: MASTER-DETAIL DOSSIER & CODE INSPECTOR
          ========================================================================= */}
      {viewMode === 'inspector' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Left Column: Stack Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', textTransform: 'uppercase', color: 'var(--color-smoke)', marginBottom: '4px' }}>
              Select Technology Module
            </span>
            {techItems.map((tech) => {
              const isSelected = tech.id === selectedTech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                    color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                    border: `1px solid ${isSelected ? 'var(--color-off-black)' : 'var(--color-ash)'}`,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{tech.name}</div>
                    <div style={{ fontSize: '11px', color: isSelected ? '#a0b5eb' : 'var(--color-smoke)', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                      {tech.layer}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: isSelected ? '#a7fccd' : '#0e7040', fontWeight: 600 }}>
                      {tech.latency}
                    </span>
                    <ArrowRight size={14} color={isSelected ? '#ffffff' : 'var(--color-smoke)'} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dossier & Implementation */}
          <div
            style={{
              backgroundColor: 'var(--color-parchment)',
              borderRadius: '24px',
              border: '1px solid var(--color-ash)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--color-periwinkle-mist)',
                    color: 'var(--color-lake-blue)',
                    fontWeight: 600,
                  }}
                >
                  {selectedTech.categoryLabel}
                </span>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)', fontWeight: 600, color: 'var(--color-lake-blue)' }}>
                  SLA: {selectedTech.slaMetric}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '26px',
                  color: 'var(--color-off-black)',
                  fontWeight: 400,
                  marginBottom: '10px',
                }}
              >
                {selectedTech.name}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.5, marginBottom: '20px' }}>
                {selectedTech.highlight}
              </p>

              {/* Engineering Specs */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid var(--color-ash)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '12px', color: 'var(--color-graphite)' }}>
                  <strong style={{ color: 'var(--color-off-black)', fontFamily: 'var(--font-abc-diatype-mono)' }}>Concurrency Engine: </strong>
                  {selectedTech.concurrencyModel}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-graphite)' }}>
                  <strong style={{ color: 'var(--color-off-black)', fontFamily: 'var(--font-abc-diatype-mono)' }}>Enterprise Use-Case: </strong>
                  {selectedTech.enterpriseUse}
                </div>
              </div>

              {/* Code Snippet */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)', textTransform: 'uppercase' }}>
                    Production Pattern Preview
                  </span>
                  <button
                    onClick={() => handleCopyCode(selectedTech.codeSnippet, selectedTech.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '11px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      color: copiedId === selectedTech.id ? '#0e7040' : 'var(--color-lake-blue)',
                      fontWeight: 600,
                    }}
                  >
                    {copiedId === selectedTech.id ? 'Copied ✓' : 'Copy Snippet'}
                  </button>
                </div>
                <pre
                  style={{
                    backgroundColor: '#18181b',
                    color: '#e4e4e7',
                    padding: '16px',
                    borderRadius: '14px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    lineHeight: 1.5,
                    overflowX: 'auto',
                    margin: 0,
                  }}
                >
                  <code>{selectedTech.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 4: HIGH-PERFORMANCE CYBERPUNK / TERMINAL CONSOLE
          ========================================================================= */}
      {viewMode === 'console' && (
        <div
          style={{
            backgroundColor: '#0c0f17',
            borderRadius: '24px',
            border: '1px solid #1e293b',
            padding: '28px',
            color: '#f8fafc',
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #1e293b',
              paddingBottom: '16px',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ marginLeft: '8px', fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#64748b' }}>
                vamtech-mesh-cluster-v2 :: node-status --json
              </span>
            </div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#38bdf8' }}>
              P99 Latency: 1.12ms
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {filteredItems.map((tech) => (
              <div
                key={tech.id}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#38bdf8' }}>
                      [{tech.category.toUpperCase()}]
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#4ade80' }}>
                      {tech.slaMetric}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '17px', color: '#ffffff', margin: '0 0 6px 0', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                    {tech.name}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#9ca3af', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                    {tech.highlight}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #1f2937', paddingTop: '10px', fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: '#6b7280' }}>
                  <span style={{ color: '#93c5fd' }}>$</span> {tech.concurrencyModel}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

