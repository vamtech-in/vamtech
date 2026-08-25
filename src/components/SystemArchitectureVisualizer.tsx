'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Cpu, 
  Database, 
  Zap, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ArchitecturePattern {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  latencyBenchmark: string;
  throughputCapacity: string;
  codeSnippet: string;
  fileExt: string;
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
    badge: 'Ultra-Low Latency',
    badgeColor: '#FF5E3A',
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
    badge: 'Sub-Second Semantic Retrieval',
    badgeColor: '#E01A8A',
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
        docs = await self.vector_engine.search_hybrid(
            query=query_str, 
            top_k=8, 
            score_threshold=0.87
        )
        
        # Verify strict medical entity constraints
        verified_context = self.guard.validate_grounding(docs)
        async for chunk in self.vector_engine.stream_response(query_str, verified_context):
            yield chunk`,
    livePayload: {
      event: 'SEMANTIC_QUERY_RESOLVED',
      status: 'VERIFIED_GROUNDING [0.994 SCORE]',
      routeTime: '38ms vector + 320ms LLM',
      redundancy: 'VPC-Isolated Qdrant Cluster'
    }
  },
  {
    id: 'cloud-iac',
    name: 'Kubernetes GitOps & Terraform Mesh',
    badge: 'Zero-Downtime Infrastructure',
    badgeColor: '#0066FF',
    description: 'Multi-region Infrastructure as Code with automated blue/green canary rollouts and dynamic cluster autoscaling.',
    latencyBenchmark: '0ms downtime',
    throughputCapacity: 'Autoscale to 200 Pods',
    fileExt: 'main.tf',
    codeSnippet: `module "eks_cluster" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "vamtech-production-mesh"
  cluster_version = "1.30"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    compute_pool = {
      instance_types = ["c6i.2xlarge"]
      min_size       = 3
      max_size       = 48
      desired_size   = 6

      labels = {
        Tier = "HighConcurrencyWorker"
      }
      
      block_device_mappings = {
        xvda = {
          device_name = "/dev/xvda"
          ebs = {
            volume_size           = 120
            volume_type           = "gp3"
            iops                  = 6000
            throughput            = 400
            encrypted             = true
            kms_key_id            = module.kms.key_arn
          }
        }
      }
    }
  }
}`,
    livePayload: {
      event: 'CLUSTER_SCALE_HEALTHY',
      status: 'CANARY_VERIFIED [100% TRAFFIC]',
      routeTime: 'TLS 1.3 End-to-End',
      redundancy: 'Multi-AZ (us-east-1a/b/c)'
    }
  }
];

export default function SystemArchitectureVisualizer() {
  const [activePattern, setActivePattern] = useState<string>('distributed-go');
  const [copied, setCopied] = useState<boolean>(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '[SYSTEM] Initializing consensus node cluster...',
    '[TELEMETRY] Prometheus metric exporter listening on :9090',
    '[ROUTER] Inbound request from gateway [req_92f8a1]',
    '[STORAGE] Write quorum acknowledged (3/3 nodes in 0.8ms)'
  ]);

  const current = architecturePatterns.find((p) => p.id === activePattern) || architecturePatterns[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerSimulation = () => {
    const newLog = `[SIMULATION ${new Date().toISOString().split('T')[1].slice(0, 8)}] Payload executed on ${current.name} -> Latency: ${current.latencyBenchmark}`;
    setSimulatedLogs(prev => [newLog, ...prev.slice(0, 4)]);
  };

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '24px',
        padding: '36px',
        background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.95) 0%, rgba(6, 9, 19, 0.98) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(0, 102, 255, 0.15)', color: '#38BDF8' }}>
              <Terminal size={18} />
            </div>
            <span className="badge-pill brand" style={{ fontSize: '0.8rem' }}>
              <Sparkles size={13} />
              <span>Interactive Architecture Spec</span>
            </span>
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700 }}>
            Inspect Real Production Architecture Patterns
          </h3>
        </div>

        {/* Pattern Switchers */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {architecturePatterns.map((pattern) => {
            const isSelected = activePattern === pattern.id;
            return (
              <button
                key={pattern.id}
                onClick={() => setActivePattern(pattern.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? `1px solid ${pattern.badgeColor}` : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#FFFFFF' : '#94A3B8',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: pattern.badgeColor }} />
                <span>{pattern.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Code Editor Window */}
      <div
        style={{
          borderRadius: '16px',
          background: '#040711',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.84rem',
            fontFamily: 'var(--font-mono)',
            color: '#94A3B8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
            <span style={{ marginLeft: '8px', color: '#CBD5E1', fontWeight: 600 }}>{current.fileExt}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#38BDF8', fontSize: '0.8rem' }}>
              Latency: {current.latencyBenchmark} • {current.throughputCapacity}
            </span>
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '4px 10px',
                borderRadius: '6px',
                color: '#CBD5E1',
                cursor: 'pointer',
                fontSize: '0.78rem',
              }}
            >
              {copied ? <Check size={14} color="#4ADE80" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <pre
          style={{
            padding: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            lineHeight: '1.65',
            color: '#E2E8F0',
            overflowX: 'auto',
            maxHeight: '340px',
            margin: 0,
          }}
        >
          <code>{current.codeSnippet}</code>
        </pre>

        {/* Live Diagnostics Telemetry Bar */}
        <div
          style={{
            background: 'rgba(14, 20, 36, 0.9)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            fontSize: '0.8rem',
          }}
          className="telemetry-bar"
        >
          <div>
            <div style={{ color: '#64748B', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Telemetry Event</div>
            <div style={{ color: '#F8FAFC', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{current.livePayload.event}</div>
          </div>
          <div>
            <div style={{ color: '#64748B', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Cluster Status</div>
            <div style={{ color: '#4ADE80', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{current.livePayload.status}</div>
          </div>
          <div>
            <div style={{ color: '#64748B', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Execution Latency</div>
            <div style={{ color: '#38BDF8', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{current.livePayload.routeTime}</div>
          </div>
          <div>
            <div style={{ color: '#64748B', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Fault Tolerance</div>
            <div style={{ color: '#CBD5E1', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{current.livePayload.redundancy}</div>
          </div>
        </div>
      </div>

      {/* Interactive Simulation Trigger */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.85rem' }}>
          <ShieldCheck size={16} color="#4ADE80" />
          <span>All architectures covered by 100% intellectual property transfer & 30-day warranty.</span>
        </div>

        <button
          onClick={handleTriggerSimulation}
          className="btn-secondary"
          style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        >
          <Play size={14} color="#00D2FF" />
          <span>Simulate Load Test</span>
        </button>
      </div>

      {/* Output Console Log */}
      <div
        style={{
          marginTop: '16px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '10px',
          padding: '12px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: '#38BDF8',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {simulatedLogs.map((log, i) => (
          <div key={i} style={{ opacity: 1 - i * 0.18 }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
