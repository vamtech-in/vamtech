export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  iconName: string;
  colorAccent: string;
  problemSolved: string;
  engineeringApproach: string;
  businessBenefit: string;
  keyDeliverables: string[];
  techStack: string[];
  timelineAvg: string;
  metricsHighlight: string;
}

export const servicesData: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software',
    slug: 'custom-software',
    tagline: 'High-performance backend systems, distributed microservices, and specialized domain workflows.',
    iconName: 'Code2',
    colorAccent: '#FF5E3A',
    problemSolved: 'Off-the-shelf software imposes rigid constraints, high licensing overhead, and inability to handle proprietary core business logic.',
    engineeringApproach: 'We architect decoupled, event-driven domain systems using clean architecture, strict typing, and high-throughput data pipelines.',
    businessBenefit: 'Full IP ownership, zero licensing lock-in, and 10x scalability tailored directly to your operational processes.',
    keyDeliverables: [
      'Resilient Microservices & Event Meshes',
      'High-Throughput REST & GraphQL APIs',
      'Database Modeling & Sharding (PostgreSQL, ClickHouse)',
      'Automated Test Suites (Unit, E2E, Load Testing)',
      'Comprehensive Architecture & System Documentation'
    ],
    techStack: ['TypeScript', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    timelineAvg: '8–14 Weeks MVP',
    metricsHighlight: '99.99% Reliability'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Modernization & DevOps',
    slug: 'cloud-devops',
    tagline: 'Zero-downtime CI/CD pipelines, Kubernetes orchestration, and cost-optimized cloud infrastructure.',
    iconName: 'CloudCog',
    colorAccent: '#0066FF',
    problemSolved: 'Fragile deployments, slow release cycles, cloud bill inflation, and unmonitored infrastructure downtime.',
    engineeringApproach: 'Infrastructure as Code (Terraform), GitOps deployment workflows, and proactive observability telemetry (Prometheus, Grafana, OpenTelemetry).',
    businessBenefit: 'Ship features 4x faster with automated rollbacks, 40%+ cloud cost reductions, and ironclad 99.99% system availability.',
    keyDeliverables: [
      'Terraform / OpenTofu Multi-Environment IaC',
      'Kubernetes (EKS/GKE) Cluster Orchestration',
      'Automated GitOps CI/CD Pipelines (GitHub Actions/ArgoCD)',
      'Disaster Recovery & Automated Failover Protocols',
      'SOC2 / ISO 27001 Cloud Hardening'
    ],
    techStack: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Datadog'],
    timelineAvg: '4–8 Weeks Setup',
    metricsHighlight: '42% Cloud Cost Savings'
  },
  {
    id: 'ai-automation',
    title: 'AI Engineering & Agentic Automation',
    slug: 'ai-automation',
    tagline: 'Custom LLM fine-tuning, RAG enterprise search engines, and multi-agent workflow automations.',
    iconName: 'Sparkles',
    colorAccent: '#E01A8A',
    problemSolved: 'Manual cognitive bottlenecks, siloed internal knowledge, and repetitive business operations draining engineering bandwidth.',
    engineeringApproach: 'Production-ready Vector RAG pipelines, deterministic agent tool-calling frameworks, local model quantization, and strict evaluation guardrails.',
    businessBenefit: 'Automate 60%+ of document review, customer inquiry triage, and internal analytics workflows with verifiable output precision.',
    keyDeliverables: [
      'Enterprise Knowledge RAG Systems',
      'Custom Autonomous Agent Workflows',
      'LLM Guardrails, Hallucination Prevention & Prompt Eval',
      'Local & Private Model Hosting (Ollama, vLLM)',
      'Vector Search Indexing (Pinecone, Qdrant, pgvector)'
    ],
    techStack: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Qdrant', 'OpenAI', 'Anthropic'],
    timelineAvg: '6–10 Weeks Rollout',
    metricsHighlight: '65% Task Time Reduction'
  },
  {
    id: 'web-mobile-apps',
    title: 'High-Performance Web & Mobile Apps',
    slug: 'web-mobile-apps',
    tagline: 'Ultra-fast Next.js web applications, cross-platform mobile apps, and fluid responsive portals.',
    iconName: 'Layout',
    colorAccent: '#7B2CBF',
    problemSolved: 'Sluggish UI, high user bounce rates, poor mobile conversion, and inconsistent multi-platform user experiences.',
    engineeringApproach: 'Next.js App Router with Server Components, React Native / Flutter cross-platform architecture, and optimized responsive micro-animations.',
    businessBenefit: 'Sub-second page loads (Lighthouse 95+), flawless mobile experience, and conversion-optimized B2B workflows.',
    keyDeliverables: [
      'Ultra-Fast Next.js Web Platforms',
      'iOS & Android Cross-Platform Mobile Apps',
      'Design System & Accessible Component Libraries',
      'Offline-First Sync & Local Caching',
      'Real-Time WebSocket Collaboration Tools'
    ],
    techStack: ['Next.js', 'React', 'React Native', 'Flutter', 'TypeScript', 'Tailwind', 'Node.js'],
    timelineAvg: '6–12 Weeks MVP',
    metricsHighlight: '<800ms Time-to-Interactive'
  }
];
