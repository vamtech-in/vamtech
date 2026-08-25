export interface WhyUsPillar {
  id: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  icon: string;
  accentBadge: string;
  features: string[];
}

export const whyUsData: WhyUsPillar[] = [
  {
    id: 'modern-technology',
    title: 'Modern Technology',
    shortDescription:
      'We build with current, battle-tested tools—React, Next.js, TypeScript, Node.js, Python, and cloud-native frameworks.',
    extendedDescription:
      'No obsolete legacy stacks. We leverage modern toolchains that ensure high developer velocity, long-term maintainability, and ready availability of engineering talent.',
    icon: 'Sparkles',
    accentBadge: 'Modern Toolchains',
    features: ['Next.js 15 & React 19 Standards', 'TypeScript Strict Mode Everywhere', 'Modern AI & Cloud APIs'],
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    shortDescription:
      'Engineered from day one to scale effortlessly from early users to enterprise-level traffic without complete rewrites.',
    extendedDescription:
      'Our architectural blueprints incorporate modular microservices, decoupled frontends, database indexing, and caching layers to ensure sustainable scaling.',
    icon: 'Layers',
    accentBadge: 'Zero Rewrite Scaling',
    features: ['Decoupled Services & Clean APIs', 'Automated Horizontal Scaling', 'Edge Caching & CDN Optimization'],
  },
  {
    id: 'clean-engineering',
    title: 'Clean Engineering',
    shortDescription:
      'Readable, self-documenting code with comprehensive automated test suites and strict peer code review standards.',
    extendedDescription:
      'We treat code as a long-term asset. Every pull request undergoes static analysis, automated linting, unit testing, and architectural review before merging.',
    icon: 'Code2',
    accentBadge: 'High Code Health',
    features: ['100% Type Safety & Strict Lints', 'Automated Test Suites (Jest, Playwright)', 'Self-Documenting Codebases'],
  },
  {
    id: 'security-focused',
    title: 'Security-Focused Development',
    shortDescription:
      'Security is integrated into every stage of development, from authenticated access tiers to encrypted data stores.',
    extendedDescription:
      'We follow OWASP top-10 security guidelines, zero-trust authentication protocols, TLS 1.3 encryption in transit, and AES-256 encryption at rest.',
    icon: 'ShieldCheck',
    accentBadge: 'Enterprise Guardrails',
    features: ['OWASP Top 10 Compliance', 'Encrypted Credentials & Secrets', 'RBAC & Strict Permission Tiers'],
  },
  {
    id: 'transparent-communication',
    title: 'Transparent Communication',
    shortDescription:
      'Direct access to senior engineers, weekly sprint demos, shared project boards, and honest technical feasibility feedback.',
    extendedDescription:
      'No account manager middlemen filtering messages. You collaborate directly with your dedicated engineering pod on Slack/Discord and Jira/Linear.',
    icon: 'MessageSquare',
    accentBadge: 'Direct Pod Access',
    features: ['Weekly Sprint Demos & Reports', 'Dedicated Slack / Teams Channels', 'Real-Time Git / Board Visibility'],
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    shortDescription:
      'We stay with you beyond launch—providing continuous maintenance, telemetry monitoring, performance tuning, and feature scaling.',
    extendedDescription:
      'Launching v1.0 is just the beginning. We offer dedicated SLA support, infrastructure monitoring, and iterative feature roadmaps to support your business expansion.',
    icon: 'Handshake',
    accentBadge: 'Post-Launch SLA',
    features: ['Dedicated SLA & Health Monitoring', 'Feature Roadmap Evolution', '100% IP & Asset Handoff'],
  },
];
