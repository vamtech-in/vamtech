export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  accentColor: string;
  subOfferings: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  techStack: string[];
  deliverables: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    slug: 'software-development',
    shortDescription:
      'Engineered custom software, robust web applications, and enterprise platforms tailored to your business logic.',
    fullDescription:
      'We architect, build, and deploy mission-critical software systems designed for high availability, security, and performance. From scalable web backends to complex enterprise portals, our engineering team brings industry-grade craftsmanship to every project.',
    icon: 'Code2',
    accentColor: '#2563eb',
    subOfferings: [
      {
        title: 'Web Applications',
        description:
          'High-performance, responsive web portals and SaaS platforms built with modern architectures.',
      },
      {
        title: 'Enterprise Applications',
        description:
          'Scalable ERPs, internal tools, dashboard consoles, and data pipelines built for enterprise workflows.',
      },
      {
        title: 'Custom Software',
        description:
          'Bespoke algorithms, business logic engines, and custom integrations tailored to specific operational needs.',
      },
    ],
    capabilities: [
      'Microservices & Monolithic Architecture',
      'REST & GraphQL API Design',
      'Role-Based Access Control (RBAC) & OAuth',
      'Real-time Data Streaming (WebSockets, SSE)',
      'Database Optimization & Caching Strategies',
    ],
    techStack: ['TypeScript', 'Node.js', 'Python', 'React', 'PostgreSQL', 'Redis'],
    deliverables: [
      'Full Source Code & 100% IP Ownership',
      'Interactive Swagger / OpenAPI Documentation',
      'Automated Test Suites (Jest, Playwright)',
      'CI/CD Pipeline Configurations',
    ],
    idealFor: 'Startups building MVP-to-scale platforms and enterprises modernizing core toolsets.',
  },
  {
    id: 'web-mobile-development',
    title: 'Web & Mobile Development',
    slug: 'web-mobile-development',
    shortDescription:
      'Fluid web interfaces and cross-platform mobile apps built with React, Next.js, and modern frameworks.',
    fullDescription:
      'Deliver seamless user experiences across web, iOS, and Android. We utilize the latest frontend standards with server-side rendering, edge caching, and responsive native UI paradigms to create delightful digital products.',
    icon: 'Smartphone',
    accentColor: '#06b6d4',
    subOfferings: [
      {
        title: 'React & Next.js Platforms',
        description:
          'Blazing fast, SEO-optimized web apps with Server Components, dynamic routing, and instant page transitions.',
      },
      {
        title: 'Mobile Applications',
        description:
          'Native-feel iOS and Android apps with cross-platform codebases, offline sync, and push notifications.',
      },
      {
        title: 'Progressive Web Apps (PWA)',
        description:
          'Installable web applications with offline capabilities, background sync, and app-like performance.',
      },
    ],
    capabilities: [
      'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
      'Cross-Platform Mobile Architecture (React Native)',
      'Native Device API Integration (Camera, Biometrics, GPS)',
      'State Management & Optimistic UI Updates',
      'Core Web Vitals & Performance Tuning',
    ],
    techStack: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'TypeScript', 'Expo'],
    deliverables: [
      'App Store & Play Store Ready Packages',
      'Responsive Web Application Deployment',
      'Component Storybook & UI Documentation',
      'Analytics & Crash Reporting Integration',
    ],
    idealFor: 'Consumer brands, SaaS products, and mobile-first tech startups.',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    slug: 'ai-automation',
    shortDescription:
      'Intelligent applications, custom LLM pipelines, and automated workflows that drive efficiency and insight.',
    fullDescription:
      'Leverage modern artificial intelligence to unlock automation and business intelligence. We build custom RAG pipelines, fine-tuned agentic workflows, semantic search, and autonomous business process automation.',
    icon: 'Bot',
    accentColor: '#8b5cf6',
    subOfferings: [
      {
        title: 'AI-Powered Applications',
        description:
          'Smart recommendation engines, natural language interfaces, and generative AI features embedded in your apps.',
      },
      {
        title: 'LLM Integrations & RAG',
        description:
          'Retrieval-Augmented Generation systems using OpenAI, Anthropic, or open-source models grounded in your proprietary data.',
      },
      {
        title: 'Workflow Automation',
        description:
          'Automated data extraction, automated document processing, and multi-step webhook/API automations.',
      },
    ],
    capabilities: [
      'Vector Search & Embeddings (Pinecone, pgvector)',
      'LangChain & LlamaIndex Agentic Workflows',
      'Prompt Engineering & Guardrails Integration',
      'OCR & Computer Vision Document Ingestion',
      'Fine-Tuning & Model Evaluation Frameworks',
    ],
    techStack: ['Python', 'OpenAI API', 'LangChain', 'LlamaIndex', 'FastAPI', 'pgvector'],
    deliverables: [
      'Custom AI Agent / Pipeline Codebase',
      'Vector Database Setup & Ingestion Scripts',
      'API Security & Rate-Limiting Gateways',
      'Hallucination Testing & Accuracy Benchmarks',
    ],
    idealFor: 'Businesses aiming to automate labor-intensive operations and add AI intelligence to products.',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    shortDescription:
      'Resilient cloud infrastructure, automated CI/CD pipelines, containerization, and zero-downtime deployments.',
    fullDescription:
      'Ensure 99.99% uptime, rapid release cycles, and enterprise security with our Cloud & DevOps engineering. We implement Infrastructure as Code (IaC), container orchestration with Docker/Kubernetes, and automated cloud monitoring.',
    icon: 'Cloud',
    accentColor: '#3b82f6',
    subOfferings: [
      {
        title: 'Cloud Architecture',
        description:
          'Multi-region, auto-scaling cloud foundations on AWS, GCP, or Azure with cost optimization.',
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'Automated build, test, and release pipelines using GitHub Actions, GitLab CI, and deployment triggers.',
      },
      {
        title: 'Deployment & Infrastructure',
        description:
          'Terraform/IaC scripts, Docker containerization, Kubernetes clusters, and serverless architectures.',
      },
    ],
    capabilities: [
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Zero-Downtime Blue-Green & Canary Deployments',
      'Cloud Security Hardening & IAM Best Practices',
      'Observability (Datadog, Prometheus, Grafana)',
      'Cost Governance & Cloud Resource Audits',
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux'],
    deliverables: [
      'Reproducible Infrastructure as Code Repositories',
      'Automated CI/CD Workflows',
      'Real-Time Health Monitoring & Alerting Dashboards',
      'Disaster Recovery & Backup Runbooks',
    ],
    idealFor: 'Growing companies scaling user traffic and engineering teams requiring rock-solid deployment pipelines.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    slug: 'ui-ux-design',
    shortDescription:
      'Intuitive user interfaces, comprehensive design systems, and user journeys designed for engagement and conversion.',
    fullDescription:
      'We combine human-centered design principles with clean technical aesthetics. From user research and wireframing to pixel-perfect Figma design systems and interactive prototypes, we ensure your product looks and feels world-class.',
    icon: 'Palette',
    accentColor: '#ec4899',
    subOfferings: [
      {
        title: 'Product Design',
        description:
          'Full-cycle product design from concept validation to interactive high-fidelity clickable prototypes.',
      },
      {
        title: 'Design Systems',
        description:
          'Scalable UI component libraries, typography tokens, color systems, and developer handoff guidelines.',
      },
      {
        title: 'User Experience (UX) Strategy',
        description:
          'User persona mapping, information architecture, usability testing, and funnel optimization.',
      },
    ],
    capabilities: [
      'Interactive Figma Prototyping & Motion Specs',
      'Component Tokenization & Atomic Design Systems',
      'Accessibility (WCAG 2.1 AA) Compliance',
      'UX Friction Audits & Usability Testing',
      'Responsive Mobile & Desktop Viewport System',
    ],
    techStack: ['Figma', 'Adobe CC', 'Design Tokens', 'Tailwind UI', 'Framer'],
    deliverables: [
      'Organized Figma Files with Auto-Layout Components',
      'Complete Design System & Token Documentation',
      'Interactive Clickable Prototype',
      'Developer Asset Export & Handoff Specs',
    ],
    idealFor: 'New ventures needing an iconic brand presence and existing products undergoing UI modernization.',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    shortDescription:
      'Strategic technology modernization, legacy migration, workflow automation, and technical advisory.',
    fullDescription:
      'Modernize legacy systems, eliminate technical debt, and transform manual business operations into automated digital workflows. We provide senior architectural consulting to guide your technology roadmaps.',
    icon: 'TrendingUp',
    accentColor: '#10b981',
    subOfferings: [
      {
        title: 'Legacy Modernization',
        description:
          'Migrate monolithic legacy codebases to agile microservices, cloud-native frameworks, and modern databases.',
      },
      {
        title: 'Business Automation',
        description:
          'Eliminate manual operational bottlenecks through custom internal tools, integrations, and automated reporting.',
      },
      {
        title: 'Technology Consulting',
        description:
          'CTO-level technical audits, architecture roadmapping, vendor evaluations, and scalability assessments.',
      },
    ],
    capabilities: [
      'Legacy Code Audit & Refactoring Strategies',
      'Database Migration with Zero Data Loss',
      'Third-Party API & ERP Ecosystem Integrations',
      'Compliance & Security Risk Mitigation',
      'Technical Due Diligence & Roadmap Formulation',
    ],
    techStack: ['Microservices', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'Python'],
    deliverables: [
      'Technical Architecture Blueprint & Modernization Plan',
      'Phased Migration Roadmap with Zero Downtime',
      'System Security & Performance Audit Report',
      'Knowledge Transfer & Executive Briefings',
    ],
    idealFor: 'Established businesses and enterprises seeking to unlock modern agility and reduce operational overhead.',
  },
];
