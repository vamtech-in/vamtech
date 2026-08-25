'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Cloud, 
  Sparkles, 
  CheckCircle2,
  Code2
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
    name: 'TypeScript / Next.js',
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
    slaMetric: '99.4% Precision',
  },
  {
    name: 'PostgreSQL + pgvector',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    highlight: 'ACID transactional integrity with high-dimensional vector cosine search',
    concurrencyModel: 'MVCC + Connection pooling (PgBouncer)',
    enterpriseUse: 'Primary core transactional ledger & hybrid semantic search',
    slaMetric: 'Zero Data Loss',
  },
  {
    name: 'Apache Kafka / Redpanda',
    category: 'databases',
    categoryLabel: 'Data & Storage',
    highlight: 'Distributed commit log with partitioned stream replay',
    concurrencyModel: 'Zero-copy kernel sendfile & consumer groups',
    enterpriseUse: 'Asynchronous event bus for high-volume audit & payment telemetry',
    slaMetric: '2M+ msg/sec',
  },
  {
    name: 'Kubernetes & Cilium eBPF',
    category: 'cloud',
    categoryLabel: 'Cloud & SRE',
    highlight: 'Kernel-level network observability with hardware mTLS encryption',
    concurrencyModel: 'Autonomous HPA pod autoscaling across multi-AZ clusters',
    enterpriseUse: 'Multi-region zero-trust container orchestration',
    slaMetric: '99.999% SLA',
  },
];

export default function TechEcosystemExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? techItems
    : techItems.filter((i) => i.category === activeCategory);

  return (
    <div
      className="monad-card"
      style={{
        backgroundColor: '#ffffff',
        padding: '48px 40px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-periwinkle-mist)',
              color: 'var(--color-lake-blue)',
              fontSize: '11px',
              fontFamily: 'var(--font-abc-diatype-mono)',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Engineering Stack
          </span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-untitled-serif)',
            fontSize: 'clamp(24px, 3.2vw, 36px)',
            fontWeight: 400,
            color: 'var(--color-off-black)',
            marginBottom: '12px',
          }}
        >
          Curated Production Ecosystem
        </h3>
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '15px', color: 'var(--color-graphite)' }}>
          Battle-tested languages, high-throughput streaming buses, and zero-trust cloud primitives.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '36px',
        }}
      >
        {[
          { id: 'all', label: 'All Technologies' },
          { id: 'languages', label: 'Core Languages' },
          { id: 'databases', label: 'Data & Queues' },
          { id: 'cloud', label: 'Cloud & Kubernetes' },
          { id: 'ai', label: 'AI & Vector' },
        ].map((tab) => {
          const isSelected = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className="pipeline-node-tag"
              style={{
                backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                cursor: 'pointer',
                padding: '10px 20px',
                fontSize: '12px',
              }}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Cards */}
      <div className="grid-3">
        {filteredItems.map((tech) => (
          <div
            key={tech.name}
            style={{
              padding: '28px',
              borderRadius: '24px',
              backgroundColor: 'var(--color-parchment)',
              border: '1px solid var(--color-ash)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="mono-helper">{tech.categoryLabel}</span>
                <span
                  style={{
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-ash)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-abc-diatype-mono)',
                    color: 'var(--color-lake-blue)',
                    fontWeight: 500,
                  }}
                >
                  {tech.slaMetric}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-untitled-serif)',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'var(--color-off-black)',
                  marginBottom: '8px',
                }}
              >
                {tech.name}
              </h4>

              <p style={{ fontSize: '13px', color: 'var(--color-graphite)', marginBottom: '16px', lineHeight: 1.5 }}>
                {tech.highlight}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-ash)', paddingTop: '12px' }}>
              <div style={{ fontSize: '11px', color: 'var(--color-smoke)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Concurreny & Runtime Model
              </div>
              <div style={{ fontSize: '12.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-off-black)' }}>
                {tech.concurrencyModel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
