export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  clientType: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  duration: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'global-logistics-optimization',
    title: 'Autonomous Dispatch & Fleet Routing Engine',
    slug: 'global-logistics-optimization',
    industry: 'Supply Chain & Logistics',
    clientType: 'Mid-Market Logistics Provider ($85M ARR)',
    summary: 'Engineered an event-driven dispatch engine reducing manual routing friction and transit delays.',
    problem: 'Manual dispatch coordination across 450+ fleet vehicles resulted in 28% empty-mile overhead, scheduling bottlenecks, and delayed SLA deliveries during peak seasonal volumes.',
    approach: 'Architected a distributed Go and Python routing microservice using Graph Neural Networks and geospatial Voronoi partitioning, integrated seamlessly into existing telematics sensors.',
    techStack: ['Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS'],
    metrics: [
      { label: 'Fuel & Mileage Cost', value: '-34%', description: 'Net reduction in unoptimized routing miles' },
      { label: 'Dispatch Latency', value: '<45ms', description: 'Real-time route recalculation during traffic spikes' },
      { label: 'Annual Operational Savings', value: '$1.4M', description: 'Direct savings generated in year one' }
    ],
    duration: '12 Weeks',
    testimonial: {
      quote: 'Vamtech delivered an architecture that transformed our dispatch operations. Our dispatchers went from drowning in spreadsheets to managing automated fleet exceptions in seconds.',
      author: 'Marcus Vance',
      role: 'VP of Global Logistics',
      company: 'OmniTrans Logistics'
    }
  },
  {
    id: 'fintech-realtime-settlement',
    title: 'Sub-Millisecond High-Volume Payment Ledger',
    slug: 'fintech-realtime-settlement',
    industry: 'Financial Technology',
    clientType: 'Series B FinTech Platform',
    summary: 'Built an immutable, double-entry audit ledger capable of handling 50,000+ transactions per second.',
    problem: 'Legacy relational database locks caused transaction timeouts and settlement discrepancies during surge payment windows, endangering banking partner SLA commitments.',
    approach: 'Constructed an event-sourced ledger using Rust and PostgreSQL sharding with zero-data-loss Raft consensus guarantees, backed by strict idempotency controls.',
    techStack: ['Rust', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS KMS'],
    metrics: [
      { label: 'Throughput Capacity', value: '50k TPS', description: 'Sustained load without lock contention' },
      { label: 'Ledger Audit Reconciliation', value: '100%', description: 'Zero human reconciliation errors in production' },
      { label: 'P99 Transaction Latency', value: '12ms', description: 'Down from 850ms on the prior monolith' }
    ],
    duration: '10 Weeks',
    testimonial: {
      quote: 'The engineering rigor Vamtech brought to our core ledger gave our banking partners the confidence to clear our regulatory audits on the first pass.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'PayNova Global'
    }
  },
  {
    id: 'healthtech-rag-assistant',
    title: 'HIPAA-Compliant Clinical Document Intelligence Engine',
    slug: 'healthtech-rag-assistant',
    industry: 'Healthcare & Diagnostics',
    clientType: 'Clinical Research Network',
    summary: 'Implemented a private, zero-data-leakage Vector RAG pipeline for rapid patient record analysis.',
    problem: 'Physicians and researchers spent 14+ hours weekly searching unstandardized pathology and lab records to identify candidate trials, causing trial onboarding delays.',
    approach: 'Designed a private VPC-isolated Vector search pipeline utilizing hybrid BM25 + dense embedding models with strict deterministic medical entity guardrails and audit logs.',
    techStack: ['Python', 'FastAPI', 'Qdrant Vector DB', 'PyTorch', 'Next.js', 'GCP Healthcare API'],
    metrics: [
      { label: 'Record Search Speed', value: '18x Faster', description: 'Instant retrieval across 2M+ medical PDFs' },
      { label: 'Physician Time Saved', value: '11 hrs/wk', description: 'Per practitioner weekly administrative overhead saved' },
      { label: 'Audit Accuracy', value: '99.4%', description: 'Validated by board-certified clinical reviewers' }
    ],
    duration: '8 Weeks',
    testimonial: {
      quote: 'Vamtech delivered exactly what we needed: medical-grade precision combined with bulletproof data privacy that satisfied our strict hospital IRB board.',
      author: 'Dr. Arthur Chen, MD',
      role: 'Director of Clinical Informatics',
      company: 'BioVance Health'
    }
  }
];
