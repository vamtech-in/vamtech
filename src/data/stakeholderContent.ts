export interface StakeholderPerspective {
  id: string;
  roleTitle: string;
  coreQuestion: string;
  solutionPromise: string;
  keyPoints: {
    title: string;
    description: string;
    tag: string;
  }[];
  ctaButtonText: string;
  ctaLink: string;
}

export const stakeholderData: StakeholderPerspective[] = [
  {
    id: 'cto',
    roleTitle: 'CTO / Technical Evaluator',
    coreQuestion: '"Does this integrate cleanly with our stack, maintain strict code quality, and avoid tech debt?"',
    solutionPromise: 'We write modular, strictly typed, test-covered code with zero obscure proprietary lock-in. You own every line of code, Dockerfile, and Terraform script.',
    keyPoints: [
      {
        title: 'Modern Architecture & Clean Code',
        description: 'Decoupled domain models, strict TypeScript / Go / Python typing, and complete unit & integration coverage.',
        tag: 'Clean Code'
      },
      {
        title: 'Infrastructure as Code & Observability',
        description: 'Reproducible Terraform configs, automated Docker builds, and complete OpenTelemetry metrics from day one.',
        tag: 'DevOps Ready'
      },
      {
        title: 'Zero Junior Handoffs',
        description: 'You collaborate directly with senior architects who write production-grade systems, not outsourced interns.',
        tag: 'Senior Talent'
      }
    ],
    ctaButtonText: 'Inspect Architecture Spec',
    ctaLink: '/services'
  },
  {
    id: 'business',
    roleTitle: 'Business Buyer / Product Leader',
    coreQuestion: '"Can you deliver our product on time, within budget, and drive quantifiable business growth?"',
    solutionPromise: 'We align software architecture directly with your business KPIs: shorter time-to-market, higher conversion, and automated operational efficiency.',
    keyPoints: [
      {
        title: 'Predictable Fixed Sprints',
        description: 'Transparent milestone-based delivery with weekly working software demos and zero surprise overruns.',
        tag: 'On Time'
      },
      {
        title: 'Measurable ROI Outcomes',
        description: 'Our solutions focus on high-impact bottlenecks: cutting manual task times by 60%+ and reducing churn.',
        tag: 'High ROI'
      },
      {
        title: 'Full Intellectual Property Ownership',
        description: 'All code, patents, and documentation belong 100% to your company from the first commit.',
        tag: '100% IP'
      }
    ],
    ctaButtonText: 'Review Case Studies',
    ctaLink: '/case-studies'
  },
  {
    id: 'procurement',
    roleTitle: 'Procurement / Risk & Legal',
    coreQuestion: '"Is Vamtech a low-risk, compliant partner with verified security protocols and reliable SLAs?"',
    solutionPromise: 'We adhere to enterprise security frameworks (SOC 2, GDPR, ISO 27001 practices), structured NDAs, and comprehensive warranty terms.',
    keyPoints: [
      {
        title: 'Enterprise Security by Design',
        description: 'VPC isolation, TLS 1.3 encryption, AES-256 at rest, automated vulnerability scanning, and strict role-based access.',
        tag: 'Secure & Compliant'
      },
      {
        title: 'Clear Commercial Terms',
        description: 'Standard master services agreements (MSA), formal statements of work (SOW), and comprehensive liability protections.',
        tag: 'Low Risk'
      },
      {
        title: 'Post-Launch Warranties',
        description: '30-day bug-free warranty on all delivered deliverables plus ongoing SLA maintenance agreements.',
        tag: 'SLA Guaranteed'
      }
    ],
    ctaButtonText: 'View Security Center',
    ctaLink: '/security'
  },
  {
    id: 'investor',
    roleTitle: 'Founder / Investor',
    coreQuestion: '"How does Vamtech help us scale capital efficiency and demonstrate strong tech traction?"',
    solutionPromise: 'We build institutional-grade technology foundations that pass investor technical due diligence with flying colors.',
    keyPoints: [
      {
        title: 'Capital Efficiency',
        description: 'Launch market-ready MVPs in 8–10 weeks at a fraction of full-time hiring and recruiter fee costs.',
        tag: 'Fast MVP'
      },
      {
        title: 'Scalable Infrastructure Foundations',
        description: 'Architectures engineered to seamlessly scale from 1,000 to 1,000,000 daily active users without costly rewrites.',
        tag: 'Built to Scale'
      },
      {
        title: 'Due Diligence Readiness',
        description: 'Clean repository structures, documented APIs, and clear IP assignment ready for Series A/B audits.',
        tag: 'Audit Ready'
      }
    ],
    ctaButtonText: 'Calculate MVP Cost',
    ctaLink: '/pricing'
  }
];
