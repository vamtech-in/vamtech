'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  Zap, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'languages' | 'databases' | 'cloud' | 'ai';
  categoryLabel: string;
  highlight: string;
  concurrencyModel: string;
  enterpriseUse: string;
  slaMetric: string;
}

const techItems: TechItem[] = [
  {
    name: 'Go (Golang)',
    category: 'languages',
    categoryLabel: 'Core Languages',
    highlight: 'Goroutine scheduler & zero-memory-leak garbage collection',
    concurrencyModel: 'CSP Channels & Thread M:N multiplexing',
    enterpriseUse: 'Ultra-low latency microservices & payment settlement ledgers',
    slaMetric: '<2ms p99 execution',
  },
  {
    name: 'TypeScript / Node.js / Next.js',
    category: 'languages',
    categoryLabel: 'Core Languages',
    highlight: 'Strict compile-time type safety with React Server Components',
    concurrencyModel: 'Event Loop & Edge Worker V8 Isolates',
    enterpriseUse: 'Enterprise web portals, B2B dashboards & cross-platform apps',
    slaMetric: '100% Type Safe',
  },
  {
    name: 'Python / PyTorch',
    category: 'ai',
    categoryLabel: 'AI & Data Science',
    highlight: 'CUDA-accelerated matrix operations & async vector processing',
    concurrencyModel: 'AsyncIO & Multi-GPU distributed inference',
    enterpriseUse: 'Vector RAG search engines & LLM fine-tuning guardrails',
    slaMetric: '99.4% Audit Precision',
  },
  {
    name: 'PostgreSQL + pgvector',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    highlight: 'ACID transactional integrity with high-dimensional vector cosine search',
    concurrencyModel: 'MVCC + Connection pooling (PgBouncer)',
    enterpriseUse: 'Primary core transactional ledger & hybrid semantic search',
    slaMetric: 'Zero Data Loss (RPO=0)',
  },
  {
    name: 'Apache Kafka & Redis',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    highlight: 'Distributed commit log & in-memory cluster caching',
    concurrencyModel: 'Partitioned consumer groups & atomic Lua scripts',
    enterpriseUse: 'Real-time telemetry event streaming & session synchronization',
    slaMetric: '100,000+ msgs/sec',
  },
  {
    name: 'Kubernetes (EKS/GKE)',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    highlight: 'Declarative container orchestration with dynamic HPA scaling',
    concurrencyModel: 'Distributed etcd consensus & multi-AZ pods',
    enterpriseUse: 'Production cluster workload management & canary rollouts',
    slaMetric: '99.99% Availability',
  },
  {
    name: 'Terraform & OpenTofu',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    highlight: 'Idempotent Infrastructure as Code with automated state locking',
    concurrencyModel: 'Dependency Graph DAG evaluation',
    enterpriseUse: 'Multi-environment reproducibility (Dev, Staging, Production)',
    slaMetric: '100% Auditable IaC',
  },
];

export default function TechEcosystemExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Ecosystem' },
    { id: 'languages', label: 'Languages & Runtimes' },
    { id: 'databases', label: 'Data & Vector Stores' },
    { id: 'ai', label: 'AI & Inference Engines' },
    { id: 'cloud', label: 'Cloud & Kubernetes' },
  ];

  const filtered = selectedCategory === 'all'
    ? techItems
    : techItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ position: 'relative' }}>
      {/* Category Pills */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: selectedCategory === cat.id ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.04)',
              border: selectedCategory === cat.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              transition: 'all 0.25s',
              boxShadow: selectedCategory === cat.id ? '0 4px 20px rgba(224, 26, 138, 0.3)' : 'none',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}
      >
        {filtered.map((tech, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '24px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(14, 20, 36, 0.65)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: '#38BDF8',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(0, 102, 255, 0.1)',
                  }}
                >
                  {tech.categoryLabel}
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4ADE80' }}>
                  {tech.slaMetric}
                </span>
              </div>

              <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700 }}>
                {tech.name}
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.5', marginBottom: '16px' }}>
                {tech.highlight}
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem' }}>
              <div style={{ color: '#CBD5E1' }}>
                <strong style={{ color: '#64748B' }}>Concurrency: </strong>
                {tech.concurrencyModel}
              </div>
              <div style={{ color: '#CBD5E1' }}>
                <strong style={{ color: '#64748B' }}>Application: </strong>
                {tech.enterpriseUse}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
