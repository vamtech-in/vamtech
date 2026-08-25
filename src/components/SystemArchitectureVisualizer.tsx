'use client';

import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Cpu, 
  Database, 
  Terminal, 
  Sparkles, 
  ShieldCheck,
  ArrowRight,
  Code2
} from 'lucide-react';

interface ArchitecturePattern {
  id: string;
  name: string;
  badge: string;
  description: string;
  latencyBenchmark: string;
  throughputCapacity: string;
  fileExt: string;
  codeSnippet: string;
  livePayload: {
    event: string;
    status: string;
    routeTime: string;
    redundancy: string;
  };
}

const architecturePatterns: ArchitecturePattern[] = [
  {
    id: 'distributed-go',
    name: 'Event-Driven Go Microservice Mesh',
    badge: '1.2ms p99',
    description: 'High-throughput event sourcing utilizing Go channels, Apache Kafka message buses, and Raft consensus storage.',
    latencyBenchmark: '1.2ms p99',
    throughputCapacity: '120,000 req/sec',
    fileExt: 'handler.go',
    codeSnippet: `package dispatch

import (
	"context"
	"time"
	"github.com/vamtech/core/consensus"
	"github.com/vamtech/core/telemetry"
)

// ProcessTransaction executes atomic balance settlement with Raft consensus
func (s *LedgerService) ProcessTransaction(ctx context.Context, tx *Transaction) (*Receipt, error) {
	ctx, span := telemetry.StartSpan(ctx, "ledger.ProcessTransaction")
	defer span.End()

	// Distributed state lock with automatic failover
	if err := s.raftCluster.Apply(ctx, tx.Payload, 50*time.Millisecond); err != nil {
		return nil, consensus.ErrConsensusTimeout
	}

	return &Receipt{
		TxID:       tx.ID,
		Status:     "COMMITTED",
		SettledAt:  time.Now().UTC(),
		LatencyNs:  span.ElapsedNanoseconds(),
	}, nil
}`,
    livePayload: {
      event: 'DISPATCH_EVENT_COMMITTED',
      status: '200 OK [RAFT_SYNC]',
      routeTime: '0.84ms',
      redundancy: '3-Node Quorum Active'
    }
  },
  {
    id: 'ai-rag-pipeline',
    name: 'Vector RAG & Deterministic Agent Pipeline',
    badge: 'Sub-Second RAG',
    description: 'Hybrid dense/sparse vector embedding index with medical/legal entity guardrails and sub-second hallucination prevention.',
    latencyBenchmark: '420ms full pass',
    throughputCapacity: '2,500 qpm',
    fileExt: 'pipeline.py',
    codeSnippet: `import asyncio
from typing import AsyncGenerator
from vamtech.ai.guardrails import HallucinationValidator
from vamtech.ai.vector import QdrantHybridEngine

class ClinicalRAGEngine:
    def __init__(self, collection_name: str):
        self.vector_engine = QdrantHybridEngine(collection_name)
        self.guard = HallucinationValidator(strictness=0.98)

    async def query_with_grounding(self, query_str: str) -> AsyncGenerator[str, None]:
        # Perform hybrid BM25 + dense embedding cosine search
        docs = await self.vector_engine.search_hybrid(query_str, top_k=5)
        validated_ctx = self.guard.filter_hallucinatory_claims(docs)
        
        async for token in self.stream_llm_response(query_str, validated_ctx):
            yield token`,
    livePayload: {
      event: 'VECTOR_SIMILARITY_MATCH',
      status: 'COSINE 0.942 [GND_PASS]',
      routeTime: '312ms',
      redundancy: 'Dual Model Fallback Ready'
    }
  },
  {
    id: 'cloud-iac',
    name: 'Zero-Trust Terraform & Multi-Region Mesh',
    badge: 'Zero-Trust SRE',
    description: 'Declarative immutable infrastructure spanning AWS & GCP with automated SOC 2 policy enforcement.',
    latencyBenchmark: '99.999% SLA',
    throughputCapacity: 'Multi-Region Active-Active',
    fileExt: 'cluster.tf',
    codeSnippet: `module "kubernetes_zero_trust_mesh" {
  source = "github.com/vamtech/terraform-modules/k8s-mesh"

  cluster_name         = "vamtech-prod-us-east-1"
  enable_cilium_ebpf   = true
  strict_mTLS_enforced = true
  auto_failover_region = "us-west-2"

  security_compliance = {
    soc2_type_2_audit_logging = true
    fips_140_2_encryption     = true
  }
}`,
    livePayload: {
      event: 'MTLS_ENCRYPTED_FLOW',
      status: 'VERIFIED [SPIFFE_ID]',
      routeTime: '0.12ms',
      redundancy: 'Multi-AZ Active/Active'
    }
  }
];

export default function SystemArchitectureVisualizer() {
  const [activePatternId, setActivePatternId] = useState('distributed-go');
  const [copied, setCopied] = useState(false);

  const activePattern = architecturePatterns.find((p) => p.id === activePatternId) || architecturePatterns[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activePattern.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="monad-card"
      style={{
        backgroundColor: '#ffffff',
        padding: '48px 40px',
      }}
    >
      {/* Section Header */}
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
            Engineering Specification
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
          Production Architectural Blueprints
        </h3>
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '15px', color: 'var(--color-graphite)' }}>
          Inspect our typed concurrency patterns, sub-second vector pipelines, and declarative cloud manifests.
        </p>
      </div>

      {/* Pattern Pill Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        {architecturePatterns.map((pat) => {
          const isSelected = activePatternId === pat.id;
          return (
            <button
              key={pat.id}
              onClick={() => setActivePatternId(pat.id)}
              className="pipeline-node-tag"
              style={{
                backgroundColor: isSelected ? 'var(--color-off-black)' : 'var(--color-parchment)',
                color: isSelected ? '#ffffff' : 'var(--color-off-black)',
                borderColor: isSelected ? 'var(--color-off-black)' : 'var(--color-ash)',
                cursor: 'pointer',
                padding: '10px 20px',
                fontSize: '12.5px',
              }}
            >
              <span>{pat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Code & Telemetry Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: '24px',
          alignItems: 'stretch',
        }}
        className="calculator-grid"
      >
        {/* Code Window (Warm Off-Black or Parchment Technical Terminal) */}
        <div
          style={{
            backgroundColor: 'var(--color-off-black)',
            color: '#f6f3f1',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* File bar */}
          <div
            style={{
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '12px',
              color: '#c5c2c0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} color="#a0b5eb" />
              <span>{activePattern.fileExt}</span>
            </div>

            <button
              onClick={handleCopy}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#c5c2c0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontFamily: 'var(--font-abc-diatype-mono)',
                textTransform: 'uppercase',
              }}
            >
              {copied ? <Check size={13} color="#a7fccd" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Syntax block */}
          <pre
            style={{
              padding: '20px',
              overflowX: 'auto',
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '12.5px',
              lineHeight: '1.6',
              color: '#f6f3f1',
              margin: 0,
              flex: 1,
            }}
          >
            <code>{activePattern.codeSnippet}</code>
          </pre>
        </div>

        {/* Telemetry Output Panel */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment)',
            border: '1px solid var(--color-ash)',
            borderRadius: '24px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="mono-helper" style={{ marginBottom: '8px' }}>
              PATTERN BENCHMARKS
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: '22px',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '12px',
              }}
            >
              {activePattern.name}
            </h4>

            <p style={{ fontSize: '13.5px', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.5 }}>
              {activePattern.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--color-ash)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Latency Target:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-lake-blue)' }}>
                  {activePattern.latencyBenchmark}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Sustained Load:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>
                  {activePattern.throughputCapacity}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--color-graphite)' }}>Live Quorum:</span>
                <span className="mono-text" style={{ fontWeight: 500, color: 'var(--color-off-black)' }}>
                  {activePattern.livePayload.redundancy}
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-ash)',
                fontSize: '11.5px',
                fontFamily: 'var(--font-abc-diatype-mono)',
                color: 'var(--color-off-black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: 'var(--color-lake-blue)' }}>● SYNC_STATE:</span>
              <span>{activePattern.livePayload.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
