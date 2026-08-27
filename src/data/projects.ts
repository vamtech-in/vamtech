export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  features: string[];
  gradientTheme: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'gift-customizer-app',
    title: 'Gift Customization Mobile App',
    category: 'Mobile & E-Commerce',
    tagline: 'On-Demand Personalized Gifting & Instant Laser Engraving Engine',
    description:
      'A cross-platform React Native iOS & Android application allowing consumers to design, customize, and order bespoke personalized gifts with real-time 3D engraving previews.',
    challenge:
      'Rendering real-time multi-color and typography texture previews on mobile devices without lag, while routing complex fulfillment orders directly to specialized artisan manufacturers.',
    solution:
      'Engineered a native OpenGL canvas rendering pipeline for instant custom engraving previews, connected to an automated order fulfillment queue that dispatches laser-ready vector files to regional print hubs.',
    impactMetrics: [
      { label: 'Mobile Store Rating', value: '4.8 ★' },
      { label: 'Order Processing Time', value: '< 2 mins' },
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Active App Users', value: '88,000+' },
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
    features: [
      'Real-Time Live 3D Font & Monogram Customizer',
      'Automated Vector File Generation for Laser Cutters',
      'One-Click Express Apple Pay & Google Pay',
      'End-to-End Push Notification Delivery Tracking',
    ],
    gradientTheme: 'from-pink-500 to-rose-600',
  },
  {
    id: 'amz-analytics-app',
    title: 'AMZ Multi-Store Marketplace Analytics',
    category: 'Enterprise Cloud & Analytics',
    tagline: 'Real-Time Inventory Reconciliation & Algorithmic Repricing Engine',
    description:
      'A high-throughput cloud web application empowering high-volume Amazon and Shopify merchants to monitor multi-warehouse inventory, automate repricing, and analyze profit margins across global storefronts.',
    challenge:
      'Aggregating hundreds of thousands of asynchronous Amazon SP-API events and currency exchanges per minute while keeping database latency below 200ms.',
    solution:
      'Architected a distributed microservices pipeline using Go and Node.js with Redis stream buffering, timescale time-series metrics storage, and automated blue/green Kubernetes deployments.',
    impactMetrics: [
      { label: 'Ingestion Throughput', value: '12.4k req/s' },
      { label: 'Query Latency', value: '< 180ms' },
      { label: 'Stockout Reduction', value: '78%' },
      { label: 'Gross Volume Tracked', value: '$120M+' },
    ],
    technologies: ['Next.js', 'Go', 'TypeScript', 'PostgreSQL', 'TimescaleDB', 'Redis', 'Docker', 'AWS'],
    features: [
      'Sub-200ms Multi-Region SKU Search & Profit Calculations',
      'Automated Algorithmic Buy-Box Repricing Rules',
      'Automated VAT/GST Calculation & Financial Export',
      'Role-Based Granular Access Control (RBAC)',
    ],
    gradientTheme: 'from-slate-800 to-slate-950',
  },
  {
    id: 'social-media-platform',
    title: 'Social Media Management Platform',
    category: 'Web & Mobile / SaaS',
    tagline: 'Multi-Channel Content Automation & Analytics Engine',
    description:
      'A comprehensive SaaS dashboard enabling marketing teams to schedule, analyze, and automate multi-channel campaigns across major social networks in real time.',
    challenge:
      'Handling high-concurrency scheduling queues, rate-limited third-party APIs, and real-time aggregation of engagement metrics across hundreds of client accounts.',
    solution:
      'Engineered an event-driven BullMQ worker queue on Redis and Node.js with Next.js dashboard UI, WebSocket notifications, and automated retry mechanisms.',
    impactMetrics: [
      { label: 'Campaign Throughput', value: '500K+ Posts' },
      { label: 'Analytics Latency', value: '< 200ms' },
      { label: 'Team Time Saved', value: '45%' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Visual Drag-and-Drop Content Calendar',
      'Real-Time Audience Sentiment Analysis',
      'Automated Multi-Account Publishing Queue',
      'Exportable Executive PDF & CSV Reports',
    ],
    gradientTheme: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'ai-productivity-assistant',
    title: 'AI Productivity Assistant',
    category: 'AI & Automation',
    tagline: 'Context-Aware Enterprise Copilot & Document Intelligence',
    description:
      'An intelligent workspace assistant that extracts actionable insights from technical documentation, summarizes meetings, and drafts context-accurate code snippets.',
    challenge:
      'Preventing hallucination when parsing complex internal documentation and guaranteeing zero data leakage to public AI training sets.',
    solution:
      'Implemented a hybrid RAG architecture using LangChain, pgvector for semantic retrieval, local embedding models, and role-based data partitioning.',
    impactMetrics: [
      { label: 'Query Accuracy', value: '98.4%' },
      { label: 'Doc Ingestion Speed', value: '10k pgs/hr' },
      { label: 'Support Deflection', value: '62%' },
    ],
    technologies: ['Python', 'OpenAI API', 'LangChain', 'pgvector', 'FastAPI', 'React'],
    features: [
      'Semantic Vector Search Across PDF & Docs',
      'Automated Meeting Minutes & Action Items',
      'Zero-Training Enterprise Privacy Vault',
      'Chrome Extension & Slack Bot Integrations',
    ],
    gradientTheme: 'from-purple-600 to-cyan-600',
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    category: 'Headless Commerce',
    tagline: 'Sub-Second Headless Storefront & Global Inventory Hub',
    description:
      'A high-conversion headless e-commerce storefront with localized multi-currency support, dynamic product customizer, and integrated logistics tracking.',
    challenge:
      'Achieving high Core Web Vitals scores while rendering thousands of SKUs and handling sudden flash-sale traffic surges.',
    solution:
      'Built a headless architecture using Next.js Incremental Static Regeneration (ISR), Edge caching, Stripe multi-currency checkout, and Shopify Storefront GraphQL API.',
    impactMetrics: [
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Mobile Conversion', value: '+38%' },
      { label: 'Checkout Abandonment', value: '-24%' },
    ],
    technologies: ['Next.js', 'React', 'Shopify GraphQL', 'Stripe', 'Tailwind CSS', 'AWS S3'],
    features: [
      'Interactive 3D Product Configurator',
      'Instant Search with Algolia Type-Ahead',
      'One-Click Apple Pay & Google Pay Checkout',
      'Automated Order & Shipping Tracking',
    ],
    gradientTheme: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'business-management-system',
    title: 'Business Management System',
    category: 'Enterprise / Cloud',
    tagline: 'Centralized Operations, Invoicing & Resource ERP',
    description:
      'An all-in-one operations platform for mid-sized enterprises uniting project tracking, timesheets, contractor billing, and client relationship management.',
    challenge:
      'Consolidating disparate legacy spreadsheets and fragmented tools into a unified, audit-compliant single source of truth with strict access tiers.',
    solution:
      'Designed a modular microservices backend with PostgreSQL multi-tenant partitioning, role-based permission tiers, and automated double-entry invoice generation.',
    impactMetrics: [
      { label: 'Billing Cycle Reduced', value: '14 to 2 Days' },
      { label: 'Active Enterprise Users', value: '1,200+' },
      { label: 'Financial Audit Accuracy', value: '100%' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Automated Invoicing & Milestone Billing',
      'Granular Role-Based Permissions (RBAC)',
      'Live Contractor Utilization Heatmaps',
      'Real-Time QuickBooks & Xero Sync',
    ],
    gradientTheme: 'from-amber-600 to-orange-700',
  },
];
