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
    id: 'starter-mvp',
    name: 'Starter MVP & Web Launch',
    badge: 'Fastest to Market',
    description: 'Custom full-stack web or mobile MVP sprint for early-stage founders and growing businesses.',
    pricingDisplay: '₹24,999 / sprint',
    duration: '2–4 Weeks Delivery',
    bestFor: 'Founders launching an MVP, new startup, or local business wanting a modern high-performance web app.',
    highlights: [
      'Fixed transparent pricing',
      'Fast 2-4 week delivery',
      '100% source code & IP transfer'
    ],
    features: [
      'Custom Full-Stack Next.js / React Web or Mobile App',
      'User Auth, Database & Payment Gateway (Razorpay/UPI)',
      'High-speed responsive design with modern animations',
      'Free production deployment on Vercel / Cloud',
      '100% full source code & GitHub repo handover',
      '15-day free post-launch support & bug fixes'
    ],
    ctaText: 'Start Your MVP Sprint'
  },
  {
    id: 'dedicated-pod',
    name: 'Dedicated Monthly Pod',
    badge: 'Most Popular',
    popular: true,
    description: 'Autonomous full-stack developers embedded into your roadmap for continuous sprint output and feature delivery.',
    pricingDisplay: '₹49,999 / month',
    duration: 'Monthly Flexible Sprints',
    bestFor: 'Founders and growing teams needing continuous feature additions, API integrations, and ongoing tech scaling.',
    highlights: [
      'Dedicated full-stack engineer',
      'Direct WhatsApp & Slack sync',
      'Flexible month-to-month terms'
    ],
    features: [
      'Dedicated Full-Stack Developer on your product',
      'Direct WhatsApp, Slack, or Discord collaboration',
      'Weekly live sprint demos & milestone releases',
      'API integrations, AI automations & database optimization',
      'Flexible month-to-month engagement (zero long lock-in)',
      '100% complete IP & code ownership from Day 1'
    ],
    ctaText: 'Hire Dedicated Developer'
  },
  {
    id: 'custom-architecture',
    name: 'Custom Product Build',
    badge: 'Custom Scope',
    description: 'Tailored architecture, multi-platform mobile apps, or custom AI agent workflow pipelines.',
    pricingDisplay: 'Custom Quote',
    duration: 'Milestone Based',
    bestFor: 'Businesses requiring bespoke multi-tenant SaaS architecture, custom mobile apps, or specialized AI pipelines.',
    highlights: [
      'Custom technical architecture',
      'Milestone payment stages',
      'Full deployment & handover'
    ],
    features: [
      'Custom Full-Stack Web + Cross-Platform Mobile Apps',
      'Tailored AI Agent & Automation Pipelines',
      'Multi-Tenant Cloud & Database Infrastructure',
      'Direct Architecture Advisory & Milestone Sign-offs',
      'Complete Deployment, CI/CD, & Documentation',
      '30-Day Post-Launch Maintenance & Support'
    ],
    ctaText: 'Request Custom Quote'
  }
];

