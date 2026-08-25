export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  solutions: string[];
  keyBenefit: string;
  metricPlaceholder: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'startups',
    title: 'Startups & Scaleups',
    tagline: 'Rapid MVP to Scale',
    description:
      'Turn disruptive ideas into market-ready MVPs with rapid sprint cycles, resilient architectures, and cost-efficient cloud foundations.',
    icon: 'Rocket',
    solutions: [
      'Rapid 6-Week MVP Development',
      'Investor-Ready Product Demos',
      'Scalable Multi-Tenant Foundations',
      'Product-Market Fit Analytics Integration',
    ],
    keyBenefit: 'Accelerated time-to-market without accumulating technical debt.',
    metricPlaceholder: 'Up to 3x Faster Launch Cycles',
  },
  {
    id: 'fintech',
    title: 'FinTech & Banking',
    tagline: 'High Security & Compliance',
    description:
      'Ultra-secure financial transaction systems, automated compliance workflows, ledger engines, and real-time payment gateway integrations.',
    icon: 'CreditCard',
    solutions: [
      'PCI-DSS & SOC-2 Aligned Architecture',
      'Double-Entry Ledger Accounting Systems',
      'Payment Gateway & Stripe Connect Engines',
      'Real-Time Fraud & Anomaly Detection',
    ],
    keyBenefit: 'Bank-grade encryption and deterministic transaction processing.',
    metricPlaceholder: '99.999% Financial Uptime Architecture',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    tagline: 'High-Volume Headless Commerce',
    description:
      'Modern headless e-commerce storefronts, dynamic inventory management, omnichannel checkout experiences, and AI product recommendations.',
    icon: 'ShoppingBag',
    solutions: [
      'Headless Shopify & Next.js Commerce',
      'Real-Time Inventory Synchronization',
      'Personalized AI Recommendation Engines',
      'Sub-Second Checkout Flow Optimization',
    ],
    keyBenefit: 'Higher conversion rates with blazing fast page loads.',
    metricPlaceholder: 'Sub-Second Page Render Times',
  },
  {
    id: 'education',
    title: 'EdTech & Learning',
    tagline: 'Interactive Knowledge Delivery',
    description:
      'Engaging learning management systems (LMS), video streaming classrooms, gamified assessments, and AI personalized tutoring assistants.',
    icon: 'GraduationCap',
    solutions: [
      'Custom LMS & Course Portals',
      'Interactive Quizzes & Real-time Grading',
      'Live Video & Low-Latency Streaming',
      'SCORM & xAPI Standard Integration',
    ],
    keyBenefit: 'Immersive student engagement and automated grading workflows.',
    metricPlaceholder: '10,000+ Concurrent Students Ready',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & HealthTech',
    tagline: 'HIPAA-Compliant Digital Health',
    description:
      'HIPAA-ready patient portals, telemedicine platforms, secure EHR/EMR integrations, and encrypted medical data exchange pipelines.',
    icon: 'Activity',
    solutions: [
      'HIPAA & GDPR Compliant Data Vaults',
      'WebRTC Encrypted Telehealth Video',
      'FHIR / HL7 API Connectivity',
      'Doctor & Patient Appointment Schedulers',
    ],
    keyBenefit: 'Strict patient privacy with seamless clinician workflows.',
    metricPlaceholder: 'End-to-End Encrypted Patient Data',
  },
  {
    id: 'saas',
    title: 'SaaS & Cloud Products',
    tagline: 'Multi-Tenant Subscription Engines',
    description:
      'Complete multi-tenant SaaS platforms with usage-based billing, tenant isolation, telemetry, and automated customer onboarding.',
    icon: 'Layers',
    solutions: [
      'Multi-Tenant Tenant Isolation & RBAC',
      'Stripe Billing & Tiered Subscription Engine',
      'Automated Provisioning & Team Workspaces',
      'In-App Analytics & Feature Flagging',
    ],
    keyBenefit: 'Plug-and-play foundations that scale to millions in ARR.',
    metricPlaceholder: 'Multi-Tenant Architecture by Design',
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Corporate',
    tagline: 'Legacy Modernization & Scale',
    description:
      'Large-scale enterprise workflows, ERP integrations, internal developer portals, and legacy system modernization initiatives.',
    icon: 'Building2',
    solutions: [
      'Legacy Monolith to Microservices Refactoring',
      'Enterprise SSO (SAML, Okta, Azure AD)',
      'High-Throughput ETL & Data Warehousing',
      'Automated Compliance & Governance Checks',
    ],
    keyBenefit: 'Reduced operational friction and future-proofed technology stacks.',
    metricPlaceholder: 'Enterprise SLAs & Dedicated Support',
  },
  {
    id: 'digital-platforms',
    title: 'Digital Platforms & Media',
    tagline: 'High-Concurrency Content Hubs',
    description:
      'Content distribution networks, social streaming platforms, marketplace ecosystems, and real-time collaborative applications.',
    icon: 'Globe2',
    solutions: [
      'Global CDN & Edge Compute Optimization',
      'Real-Time WebSocket Collaboration Rooms',
      'Marketplace Escrow & Split Payments',
      'Digital Asset Ingestion & Transcoding',
    ],
    keyBenefit: 'Reliable real-time concurrency under viral traffic spikes.',
    metricPlaceholder: 'Low-Latency Global Distribution',
  },
];
