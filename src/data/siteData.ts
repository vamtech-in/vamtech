export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  features: string[];
  mockupType: 'browser' | 'mobile' | 'system' | 'dashboard' | 'code';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  year: string;
  category: string;
  services: string[];
  description: string;
  client: string;
  image: string;
  accent: string;
  link?: string;
  stats?: string;
}

export interface TestimonialItem {
  id: string;
  number: string;
  quote: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  avatarText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export interface ProblemSolutionItem {
  id: string;
  number: string;
  problem: string;
  solution: string;
  result: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-commerce',
    number: '01',
    title: 'Web & Commerce',
    slug: 'web-commerce',
    tagline: 'High-speed storefronts and multi-region e-commerce platforms.',
    description:
      'We design and build fast, responsive websites and online stores — storefronts, catalogues and product configurators across languages, currencies and regions.',
    deliverables: [
      'Corporate websites',
      'E-commerce websites',
      'Storefronts',
      'Product catalogues',
      'Product configurators',
      'Multi-region commerce',
    ],
    features: ['Next.js App Router', 'Sub-second page loads', 'Custom Cart & Checkout', 'Headless CMS Integration'],
    mockupType: 'browser',
  },
  {
    id: 'mobile-apps',
    number: '02',
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    tagline: 'Native and cross-platform mobile apps engineered for daily use.',
    description:
      'Engineered for silky 60fps performance and reliable offline-first workflows. We turn complex business processes into intuitive pocket applications for both iOS and Android.',
    deliverables: [
      'Android apps',
      'iOS apps',
      'Cross-platform apps',
      'Customer applications',
      'Business applications',
    ],
    features: ['React Native & Flutter', 'Offline Sync Engines', 'Biometric Auth', 'Push Notification Pipelines'],
    mockupType: 'mobile',
  },
  {
    id: 'custom-solutions',
    number: '03',
    title: 'Custom Solutions',
    slug: 'custom-solutions',
    tagline: 'Bespoke tools eliminating operational friction.',
    description:
      'Off-the-shelf software rarely fits a growing operation. We engineer bespoke platforms, customer portals, and internal workflows shaped precisely to your operational nuances.',
    deliverables: [
      'Internal tools',
      'Business automation',
      'Workflow systems',
      'Custom platforms',
    ],
    features: ['Role-based Access Control', 'Automated Approval Pipelines', 'Custom REST/GraphQL APIs', 'Legacy Migration'],
    mockupType: 'system',
  },
  {
    id: 'erp',
    number: '04',
    title: 'ERP',
    slug: 'erp',
    tagline: 'Unified inventory, billing, and operational clarity.',
    description:
      'Eliminate siloed spreadsheets. Our ERP systems give management a living pulse of purchasing, warehouse stock, multi-branch billing, and company-wide financial performance.',
    deliverables: [
      'Inventory management',
      'Billing',
      'Operations',
      'Reporting',
      'Business management',
    ],
    features: ['Live Stock Multi-Warehouse', 'Automated GST & Invoicing', 'Custom Executive Dashboards', 'Barcode & QR Scanning'],
    mockupType: 'dashboard',
  },
  {
    id: 'crm-software',
    number: '05',
    title: 'CRM Software',
    slug: 'crm-software',
    tagline: 'Pipeline management with zero lead leakage.',
    description:
      'Built for sales teams who demand speed without cluttered menus. Track deals from initial discovery to contract closure, automated WhatsApp follow-ups, and customer histories.',
    deliverables: [
      'Customer management',
      'Lead management',
      'Sales pipelines',
      'Communication systems',
    ],
    features: ['WhatsApp & Email Automation', 'Lead Scoring Algorithms', 'Interactive Deal Kanban', 'Customer Audit Log'],
    mockupType: 'system',
  },
  {
    id: 'ai-solutions',
    number: '06',
    title: 'AI Solutions',
    slug: 'ai-solutions',
    tagline: 'Practical AI applied where it generates concrete business ROI.',
    description:
      'We skip the hype and implement purposeful artificial intelligence — autonomous customer assistants, semantic catalogue search, document processing, and predictive forecasting.',
    deliverables: [
      'AI assistants',
      'AI search',
      'Automation',
      'AI-powered products',
    ],
    features: ['Private LLM / RAG Workflows', 'Vector Embeddings Search', 'Intelligent Document OCR', 'Workflow Agents'],
    mockupType: 'code',
  },
  {
    id: 'hosting-maintenance',
    number: '07',
    title: 'Hosting & Maintenance',
    slug: 'hosting-maintenance',
    tagline: 'Continuous uptime, monitoring, and proactive evolution.',
    description:
      'Software is never "done" when it launches. We provide rock-solid edge hosting, 24/7 uptime monitoring, security patching, and proactive maintenance so your infrastructure never falters.',
    deliverables: [
      'Hosting',
      'Monitoring',
      'Updates',
      'Maintenance',
      'Technical support',
    ],
    features: ['99.98% Uptime SLA', 'Daily Automated Backups', 'Zero-Downtime Deploys', 'Dedicated Response Lead'],
    mockupType: 'system',
  },
];

export const marqueeServices = [
  'Website Development',
  'Mobile Apps',
  'Website Design',
  'CRM Systems',
  'E-Billing',
  'AI Solutions',
  'Hosting & Maintenance',
];

export const clientLogos = [
  { name: 'Shoora Designs', category: 'Lab-Grown Diamonds' },
  { name: 'Glamira', category: 'Global Jewellery Commerce' },
  { name: 'Devi Pavitra', category: 'Retail Multi-Store' },
  { name: 'Arora Taxi', category: 'Fleet Logistics' },
  { name: 'DMD Gold', category: 'Bullion & Trading' },
  { name: 'V-Commerce', category: 'Omnichannel Retail' },
  { name: 'Apex Buildcon', category: 'Infrastructure & ERP' },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'glamira',
    number: '01',
    title: 'Glamira',
    slug: 'glamira',
    year: '2026',
    category: 'Jewellery e-commerce, multi-market',
    services: ['E-Commerce', 'Product Configurator', 'Multi-Currency', 'Catalogue'],
    description:
      'A multi-market luxury jewellery e-commerce engine with real-time 3D ring stone configurator, instant bullion currency conversion, and international checkout.',
    client: 'Glamira International',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    accent: '#B45309',
    stats: '14 Currencies · 420K SKU Variations',
  },
  {
    id: 'shoora-designs',
    number: '02',
    title: 'Shoora Designs',
    slug: 'shoora-designs',
    year: '2026',
    category: 'Lab-grown diamond commerce',
    services: ['E-Commerce', 'Merchandising', 'Appointment Booking', 'Checkout'],
    description:
      'Contemporary digital storefront for high-clarity lab-grown diamonds featuring virtual showroom booking, diamond certificate search, and custom solitaire builder.',
    client: 'Shoora Fine Jewellery',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    accent: '#111111',
    stats: '3.4x Conversion Increase · Sub-second Search',
  },
  {
    id: 'devi-pavitra',
    number: '03',
    title: 'Devi Pavitra',
    slug: 'devi-pavitra',
    year: '2026',
    category: 'Multi-store retail jewellery',
    services: ['Multi-Store', 'Live Gold Rates', 'Video Shopping', 'E-Commerce'],
    description:
      'Omnichannel retail suite synchronizing physical showrooms with live MCX gold rate tickers, virtual 1-on-1 video consultations, and unified billing.',
    client: 'Devi Pavitra Jewellers',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    accent: '#92400E',
    stats: '4 Showrooms Synced · Live Gold Feeds',
  },
  {
    id: 'arora-mobility',
    number: '04',
    title: 'Arora Fleet Engine',
    slug: 'arora-fleet-engine',
    year: '2026',
    category: 'Logistics & Dispatch Booking',
    services: ['Mobile App', 'Driver Telematics', 'Dynamic Fare Engine', 'Hosting'],
    description:
      'End-to-end dispatch and reservation ecosystem handling multi-city taxi routes, automated WhatsApp booking confirmation, and real-time driver allocation.',
    client: 'Arora Taxi Services',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
    accent: '#1F2937',
    stats: '1,200+ Daily Trips · Zero Downtime',
  },
  {
    id: 'dmd-prosperity',
    number: '05',
    title: 'DMD Bullion Hub',
    slug: 'dmd-bullion-hub',
    year: '2026',
    category: 'Fintech & Wholesale Trading',
    services: ['Custom Software', 'Live Tickers', 'ERP', 'Automated Billing'],
    description:
      'B2B precious metals trading terminal featuring microsecond price fluctuations, automated invoice reconciliation, and credit ledger management.',
    client: 'DMD Gold Prosperity',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1200&auto=format&fit=crop',
    accent: '#78350F',
    stats: '₹18Cr+ Monthly Volume Transacted',
  },
  {
    id: 'apex-pulse',
    number: '06',
    title: 'Apex Operations Cloud',
    slug: 'apex-operations',
    year: '2026',
    category: 'Enterprise Resource Planning',
    services: ['ERP', 'Inventory Matrix', 'Internal Tools', 'Analytics'],
    description:
      'Custom manufacturing ERP uniting procurement, raw material stock alerts, contractor piece-rate billing, and centralized tax compliance.',
    client: 'Apex Industrial Corp',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    accent: '#374151',
    stats: '6 Departments · 100% Paperless',
  },
  {
    id: 'zenith-ai',
    number: '07',
    title: 'Zenith Document AI',
    slug: 'zenith-ai',
    year: '2026',
    category: 'AI Pipeline & Intelligent Automation',
    services: ['AI Solutions', 'OCR Parser', 'RAG Agent', 'Security'],
    description:
      'Intelligent document ingestion engine that reads unstructured supplier invoices, extracts structured line items into ERP, and flags cost discrepancies.',
    client: 'Zenith Global Logistics',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accent: '#111111',
    stats: '99.4% Parsing Accuracy · 18x Faster Processing',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'shoora',
    number: '01',
    quote:
      'VAMTech rebuilt it so both run side by side, and it has been faster and steadier ever since.',
    clientName: 'Rahul Mehta',
    clientRole: 'Founder',
    clientCompany: 'Shoora Designs',
    avatarText: 'RM',
  },
  {
    id: 'arora',
    number: '02',
    quote:
      'VAMTech built our booking site end to end and still keep it running for us.',
    clientName: 'Harpreet Arora',
    clientRole: 'Managing Director',
    clientCompany: 'Arora Taxi Services',
    avatarText: 'HA',
  },
  {
    id: 'dmd',
    number: '03',
    quote:
      'VAMTech handles the design, the hosting and every change — we just sell.',
    clientName: 'Vikramaditya Rao',
    clientRole: 'Chief Operating Officer',
    clientCompany: 'DMD Gold Prosperity',
    avatarText: 'VR',
  },
];

export const statsData = [
  {
    number: '50+',
    label: 'Projects Delivered',
    caption: 'Websites, mobile apps, ERPs and custom tools shipped to production.',
  },
  {
    number: '99.8%',
    label: 'Client Satisfaction',
    caption: 'Direct founder engineering partnerships without agency middle-management.',
  },
  {
    number: '5+',
    label: 'Years of Experience',
    caption: 'Deep technical craft built over years of solving non-trivial business challenges.',
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'aniket',
    name: 'Aniket Kumar',
    role: 'CEO · Commercial',
    bio: 'Directs product strategy, commercial scoping, and long-term client partnerships. Ensures every line of code connects directly to business growth.',
    image: '/images/team/aniket-kumar.jpg',
    skills: ['Product Strategy', 'Commercial Scoping', 'Growth Architecture'],
  },
  {
    id: 'vivek',
    name: 'Vivek Maddheshiya',
    role: 'Technical Delivery',
    bio: 'Oversees architecture, core engineering standards, and cloud infrastructure reliability. Passionate about sub-second load times and rock-solid databases.',
    image: '/images/team/vivek-maddheshiya.png',
    skills: ['Full-Stack Systems', 'Cloud Edge', 'Database Architecture'],
  },
  {
    id: 'yogesh',
    name: 'Yogesh Singh',
    role: 'Client & Discovery',
    bio: 'Leads operational discovery, business workflow mapping, and sprint clarity. Translates complex business requirements into clear technical specifications.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    skills: ['Workflow Mapping', 'Client Discovery', 'Agile Delivery'],
  },
  {
    id: 'aditya',
    name: 'Aditya Gupta',
    role: 'Sales Lead',
    bio: 'Connects growing founders with tailored technical solutions. Specializes in rapid scoping, budget alignment, and seamless onboarding.',
    image: '/images/team/aditya-gupta.png',
    skills: ['Solutions Consulting', 'Enterprise Scoping', 'Account Success'],
  },
];

export const problemSolutionsData: ProblemSolutionItem[] = [
  {
    id: 'p1',
    number: '01',
    problem: 'Too much manual work',
    solution: 'Automate repetitive processes',
    result: 'More time for the team',
  },
  {
    id: 'p2',
    number: '02',
    problem: 'Scattered business data',
    solution: 'Connect everything in one system',
    result: 'One source of truth',
  },
  {
    id: 'p3',
    number: '03',
    problem: 'Billing & operations are disconnected',
    solution: 'Build custom business software',
    result: 'Faster, cleaner operations',
  },
  {
    id: 'p4',
    number: '04',
    problem: 'Stock & customer information is hard to track',
    solution: 'Build ERP, inventory & CRM systems',
    result: 'Complete business visibility',
  },
  {
    id: 'p5',
    number: '05',
    problem: 'Growing teams need smarter tools',
    solution: 'Add AI where it creates real value',
    result: 'Less work, better decisions',
  },
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'Ideal for initial launches, flagship websites, and fast storefronts.',
    price: 'Starts at ₹20,000',
    priceNote: 'Scoped tight, built fast, hosted from day one',
    description:
      'A first website, storefront or landing page — scoped tight, built by the founding team, and hosted by us from the day it goes live.',
    features: [
      'Website / Storefront / Landing Page',
      'Editorial Design + Custom Development',
      'Domain Setup & SSL Configuration',
      'Edge Cloud Hosting Included',
      'Full Analytics & Speed Optimization',
      'Mobile-First Responsive Layout',
      '2 Months Proactive Support & Updates',
      '100% Source Code & Asset Ownership',
    ],
    ctaText: 'Get Started with Essentials',
    ctaHref: '#contact',
  },
  {
    id: 'custom-build',
    name: 'Custom Build',
    tagline: 'End-to-end bespoke software engineered specifically for your business operations.',
    price: 'Custom Quote',
    priceNote: 'Fixed sprint milestones or dedicated squad',
    popular: true,
    description:
      'Mobile apps, business software, e-billing, CRM and AI systems. Specified with you, then built end to end.',
    features: [
      'iOS & Android Cross-Platform Mobile Apps',
      'Multi-Warehouse ERP & Invoicing Software',
      'Custom CRM & Lead Automation Pipelines',
      'Product Configurators & Multi-Currency Commerce',
      'Bespoke Internal Tools & Workflow Automation',
      'AI Assistants & Vector Search Implementations',
      'Dedicated Technical Delivery Squad',
      'Long-Term Hosting & Maintenance SLA',
    ],
    ctaText: 'Request Custom Proposal',
    ctaHref: '#contact',
  },
];

export const projectTypeOptions = [
  'Website',
  'E-commerce',
  'Mobile App',
  'CRM',
  'ERP',
  'AI',
  'Custom Software',
  'Maintenance',
];

export const budgetOptions = [
  'Under ₹25K',
  '₹25K–₹50K',
  '₹50K–₹1L',
  '₹1L+',
  'Not sure',
];

export const companyDetails = {
  name: 'VAMTech',
  parentName: 'VAMTech Software Solutions',
  tagline: 'Custom Software for Growing Businesses based in India',
  email: 'contact@vamtech.in',
  phone: '+91 73073 86706',
  whatsappUrl: 'https://wa.me/917307386706?text=Hi%20VAMTech,%20I%20would%20like%20to%20discuss%20a%20project',
  address: 'Lucknow, Uttar Pradesh, India',
  udyamRegistration: 'UDYAM-I-UP-51-1268025',
  registrationType: 'Govt. of India MSME Registered',
  socials: {
    linkedin: '#',
    twitter: '#',
    instagram: 'https://instagram.com/vamtech.in',
  },
  year: '2026',
};
