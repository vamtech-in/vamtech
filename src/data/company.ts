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
  legalName: 'VAMTech Technologies Inc.',
  tagline: 'Technology • Solutions • Innovation',
  shortDescription:
    'A modern technology company that builds scalable digital products, cloud platforms, and intelligent software solutions for ambitious businesses.',
  heroHeadline: 'Building Technology That Moves Businesses Forward.',
  heroSupportingText:
    'VAMTech helps businesses transform ideas into scalable digital products through software engineering, AI, cloud, and modern technology solutions.',
  stats: [
    {
      label: 'Projects Delivered',
      value: '10+',
      subtext: 'High-impact enterprise & startup products',
    },
    {
      label: 'Technologies Mastered',
      value: '5+',
      subtext: 'Core modern stacks & cloud ecosystems',
    },
    {
      label: 'Client Focus',
      value: '100%',
      subtext: 'Dedicated engineering & transparent delivery',
    },
    {
      label: 'Innovation & Agility',
      value: '24/7',
      subtext: 'Continuous architecture & rapid iteration',
    },
  ],
  contact: {
    email: 'contact@vamtech.io',
    phone: '+1 (800) VAM-TECH',
    address: 'San Francisco, CA & Global Engineering Pods',
    hours: 'Monday – Friday, 9:00 AM – 6:00 PM PST',
  },
  social: {
    github: 'https://github.com/vamtech-in',
    linkedin: 'https://linkedin.com/company/vamtech',
    twitter: 'https://twitter.com/vamtech_io',
  },
  mission:
    'To empower businesses of all sizes with resilient, scalable, and intelligent digital products engineered with craftsmanship and modern software architecture.',
  vision:
    'To become the world’s most trusted engineering partner for digital innovation, cloud transformation, and enterprise AI adoption.',
  coreValues: [
    {
      title: 'Engineering Excellence',
      description:
        'We uphold rigorous coding standards, automated testing, and clean architecture across every deliverable.',
      icon: 'Cpu',
    },
    {
      title: 'Client-Centric Transparency',
      description:
        'Zero jargon, honest delivery timelines, and direct collaboration with senior technical architects.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Innovation with Purpose',
      description:
        'We integrate cutting-edge AI and cloud capabilities only where they create measurable business ROI.',
      icon: 'Zap',
    },
    {
      title: 'Scalability by Design',
      description:
        'Every line of code is structured to scale seamlessly from thousands to millions of active users.',
      icon: 'Layers',
    },
    {
      title: 'Long-Term Partnership',
      description:
        'We invest in the long-term success of our clients, offering post-launch evolution, monitoring, and support.',
      icon: 'Handshake',
    },
  ],
};
