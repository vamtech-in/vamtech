export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  pricingDisplay: string;
  duration: string;
  bestFor: string;
  highlights: string[];
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'fixed-scope-sprint',
    name: 'Fixed-Scope MVP Sprint',
    badge: 'Fastest to Market',
    description: 'Guaranteed scope, timeline, and deliverables for defined product MVPs or standalone feature modules.',
    pricingDisplay: 'Starting at $18,500',
    duration: '6–10 Weeks Delivery',
    bestFor: 'Startups launching new products or established companies validating new business lines with zero scope creep.',
    highlights: [
      'Fixed budget guarantee',
      'Milestone-based sign-offs',
      'Complete IP & repository transfer'
    ],
    features: [
      'Comprehensive Architecture & Tech Spec',
      'Dedicated Tech Lead + Full-Stack Developers',
      'Weekly Interactive Demos & Staging Deploys',
      'Automated CI/CD Pipeline Setup',
      'Production Deployment & Monitoring Setup',
      '30-Day Post-Launch Bug Warranty & Support'
    ],
    ctaText: 'Scope Your MVP'
  },
  {
    id: 'dedicated-squad',
    name: 'Dedicated Engineering Squad',
    badge: 'Most Popular',
    popular: true,
    description: 'Autonomous, senior engineering pods embedded into your roadmap to rapidly scale output and velocity.',
    pricingDisplay: '$12,500 / month per engineer',
    duration: '3+ Months Commitment',
    bestFor: 'Funded scale-ups and enterprises needing to accelerate feature shipping without the 6-month recruiting lag.',
    highlights: [
      'Senior engineers (5+ yrs avg)',
      'Direct Slack/Discord integration',
      'Flexible month-to-month squad scaling'
    ],
    features: [
      'Full Pod: Tech Lead, Senior Devs, QA/DevOps',
      'Daily Standups & Agile Sprint Planning',
      'Direct Code Reviews & Architecture Advisory',
      'Zero Junior Handoffs or Outsourced Subcontracting',
      'Timezone Aligned (US / EU / APAC overlaps)',
      'Immediate 2-Week Ramp-Up Guarantee'
    ],
    ctaText: 'Deploy a Squad'
  },
  {
    id: 'fractional-cto',
    name: 'Fractional CTO & Architecture Retainer',
    badge: 'Enterprise Advisory',
    description: 'Strategic technical leadership, security audits, cloud cost optimization, and vendor procurement review.',
    pricingDisplay: '$6,500 / month',
    duration: 'Ongoing Monthly Retainer',
    bestFor: 'Founders, non-technical executives, or CTOs navigating high-stakes SOC2 audits or cloud re-architecting.',
    highlights: [
      'Executive-level guidance',
      'Vendor & candidate vetting',
      'Emergency architecture escalations'
    ],
    features: [
      'Quarterly Technology Roadmap & Tech Debt Audit',
      'Bi-Weekly Architecture & Code Quality Reviews',
      'Security Hardening & SOC 2 Readiness Review',
      'Cloud Bill & Infra Cost Optimization (Avg 35% cut)',
      'Technical Interviewing for Key In-House Hires',
      'Priority SLA on Critical Incident Advisory'
    ],
    ctaText: 'Schedule Advisory Call'
  }
];
