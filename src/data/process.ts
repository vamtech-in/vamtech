export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  activities: string[];
  deliverables: string[];
  durationEstimate: string;
}

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    tagline: 'Understand the business and requirements',
    description:
      'We dive deep into your business goals, target audience, technical constraints, and competitive landscape through structured architectural discovery workshops.',
    icon: 'Compass',
    activities: [
      'Stakeholder Alignment & Goal Definition',
      'Technical Feasibility & Risk Analysis',
      'User Persona & Journey Mapping',
      'Scope Breakdown & Milestone Planning',
    ],
    deliverables: [
      'Product Requirements Document (PRD)',
      'High-Level Architecture Overview',
      'Sprint Roadmap & Resource Allocation',
    ],
    durationEstimate: 'Week 1',
  },
  {
    stepNumber: '02',
    title: 'Strategize',
    tagline: 'Define the product and technical architecture',
    description:
      'We map out database schemas, API contracts, cloud infrastructure, third-party integrations, and security guardrails to ensure zero guesswork during execution.',
    icon: 'Network',
    activities: [
      'Database Modeling & Entity Relationships',
      'API Contract Design (OpenAPI / GraphQL)',
      'Cloud Infrastructure & DevOps Strategy',
      'Security, Auth & Compliance Blueprinting',
    ],
    deliverables: [
      'System Architecture Blueprint',
      'Database Schema & Data Flow Diagrams',
      'Technology Stack Selection Matrix',
    ],
    durationEstimate: 'Week 2',
  },
  {
    stepNumber: '03',
    title: 'Design',
    tagline: 'Create intuitive UI/UX and product experiences',
    description:
      'Our design team translates user flows into interactive wireframes, component-based design systems, and high-fidelity Figma prototypes verified for usability.',
    icon: 'Figma',
    activities: [
      'Information Architecture & Low-Fi Wireframes',
      'Atomic Design System & Component Library',
      'Interactive Clickable Prototyping',
      'Usability Testing & Design Iterations',
    ],
    deliverables: [
      'Complete High-Fidelity Figma Files',
      'UI Token Catalog & Icon Set',
      'Developer Handoff Specifications',
    ],
    durationEstimate: 'Weeks 2 – 4',
  },
  {
    stepNumber: '04',
    title: 'Develop',
    tagline: 'Build scalable, secure, production-ready software',
    description:
      'Our engineering pods build clean, type-safe, modular codebases with continuous testing, weekly sprint demos, code reviews, and automated CI/CD pipelines.',
    icon: 'Code2',
    activities: [
      'Agile 2-Week Development Sprints',
      'Automated Unit & Integration Testing',
      'Weekly Staging Environment Deployments',
      'Rigorous Peer Code & Security Reviews',
    ],
    deliverables: [
      'Production-Ready Source Code',
      'Automated CI/CD Workflows',
      'Continuous Staging Preview Builds',
    ],
    durationEstimate: 'Weeks 4 – 10',
  },
  {
    stepNumber: '05',
    title: 'Launch & Scale',
    tagline: 'Deploy, monitor, optimize, and continuously improve',
    description:
      'We execute zero-downtime production deployment, configure real-time monitoring and alerting, and provide ongoing architectural optimization as your user base expands.',
    icon: 'Rocket',
    activities: [
      'Production Environment Cutover & DNS Setup',
      'Load Testing & Performance Benchmarking',
      'Real-Time Telemetry & Alerting Setup',
      'Post-Launch Optimization & SLA Support',
    ],
    deliverables: [
      'Live Production Release',
      '100% IP & Repository Transfer',
      'Monitoring Runbooks & Maintenance SLA',
    ],
    durationEstimate: 'Ongoing Scale',
  },
];
