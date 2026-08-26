export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  heroHeadline: string;
  heroSupportingText: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  mission: string;
  vision: string;
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: 'VAMTech',
  legalName: 'VAMTech Technologies',
  tagline: 'Software • Transform • Accelerate',
  shortDescription:
    'An agile software technology startup building scalable web applications, mobile platforms, and AI workflows for modern businesses and creators.',
  heroHeadline: 'Software • Transform • Accelerate',
  heroSupportingText:
    'VAMTech turns bold ideas into production-ready software through rapid sprint delivery, modern tech stacks, and direct developer collaboration.',
  stats: [
    {
      label: 'Developer Access',
      value: '100%',
      subtext: 'Direct collaboration with engineers',
    },
    {
      label: 'MVP Velocity',
      value: '2-4 Wk',
      subtext: 'Rapid sprints from idea to launch',
    },
    {
      label: 'IP Ownership',
      value: '100%',
      subtext: 'Full source code & asset transfer',
    },
    {
      label: 'Modern Stacks',
      value: 'Zero Debt',
      subtext: 'Next.js, TypeScript, AI & Cloud',
    },
  ],
  contact: {
    email: 'vamtech.in@gmail.com',
    phone: '+91 7237900686 / +91 7307386706 / +91 6394770500',
    address: 'Tiwariganj, Lucknow (226028)',
    hours: 'Monday – Saturday, 9:00 AM – 8:00 PM IST',
  },
  social: {
    github: 'https://github.com/vamtech-in',
    linkedin: 'https://linkedin.com/company/vamtech',
    twitter: 'https://twitter.com/vamtech_io',
  },
  mission:
    'To help founders and growing businesses launch and scale world-class software products through rapid iteration, modern architecture, and radical transparency.',
  vision:
    'To build an enduring, globally recognized tech innovation lab known for elite software craftsmanship and product velocity.',
  coreValues: [
    {
      title: 'Direct Technical Collaboration',
      description:
        'You talk directly to the engineers building your product. Zero non-technical middlemen or bloated management layers.',
      icon: 'Cpu',
    },
    {
      title: 'Speed with Quality',
      description:
        'We believe in rapid iterative releases with automated tests, type safety, and clean scalable code from day one.',
      icon: 'Zap',
    },
    {
      title: 'Complete Transparency & IP Transfer',
      description:
        'Full GitHub repository access, daily standups, and 100% intellectual property ownership transferred to you upon completion.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Modern Cloud & AI First',
      description:
        'We leverage Next.js, React, Node, Python, and cutting-edge AI toolchains so your product is built for the future.',
      icon: 'Layers',
    },
    {
      title: 'Founder-Centric Partnership',
      description:
        'We treat every project as if it were our own flagship product, ensuring cost-efficient architecture and high ROI.',
      icon: 'Handshake',
    },
  ],
};

