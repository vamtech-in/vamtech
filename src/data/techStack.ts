export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & Tools' | 'AI & Automation';
  description: string;
  badge: string;
  iconName: string;
}

export const techCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Cloud & Tools',
  'AI & Automation',
] as const;

export type TechCategory = (typeof techCategories)[number];

export const techStackData: TechItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    description: 'Declarative component-driven UI library for high-speed dynamic web applications.',
    badge: 'Core UI',
    iconName: 'Code',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'Production React framework with SSR, static generation, API routes, and edge runtime.',
    badge: 'Enterprise Framework',
    iconName: 'Globe',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strict type safety ensuring zero runtime regressions and self-documenting codebases.',
    badge: 'Type System',
    iconName: 'FileCode',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Modern ESNext standard features powering fluid browser interactions and scripts.',
    badge: 'Core Language',
    iconName: 'Terminal',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Asynchronous event-driven JavaScript runtime built for high-concurrency microservices.',
    badge: 'Runtime',
    iconName: 'Server',
  },
  {
    name: 'Express',
    category: 'Backend',
    description: 'Minimalist, robust web framework for architecting scalable RESTful and GraphQL APIs.',
    badge: 'API Engine',
    iconName: 'Layers',
  },
  {
    name: 'Python',
    category: 'Backend',
    description: 'High-level language powering data processing engines, AI models, and FastAPI services.',
    badge: 'AI & Data Backend',
    iconName: 'Binary',
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'World-class open-source relational database with ACID compliance, JSONB, and vector search.',
    badge: 'Relational DB',
    iconName: 'Database',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    description: 'Flexible document database designed for rapid iteration, hierarchical data, and horizontal scaling.',
    badge: 'NoSQL DB',
    iconName: 'HardDrive',
  },
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Proven, high-reliability relational database powering enterprise transactional workloads.',
    badge: 'SQL Engine',
    iconName: 'Table',
  },

  // Cloud & Tools
  {
    name: 'AWS',
    category: 'Cloud & Tools',
    description: 'Global cloud infrastructure utilizing ECS, Lambda, S3, RDS, CloudFront, and EKS.',
    badge: 'Cloud Host',
    iconName: 'Cloud',
  },
  {
    name: 'Docker',
    category: 'Cloud & Tools',
    description: 'Containerization standard guaranteeing environment consistency from dev to production.',
    badge: 'Containers',
    iconName: 'Box',
  },
  {
    name: 'Git',
    category: 'Cloud & Tools',
    description: 'Distributed version control with atomic commits, branch protections, and PR workflows.',
    badge: 'VCS',
    iconName: 'GitBranch',
  },
  {
    name: 'GitHub Actions',
    category: 'Cloud & Tools',
    description: 'Automated CI/CD pipelines for automated testing, linting, security audits, and deployments.',
    badge: 'CI / CD',
    iconName: 'Workflow',
  },

  // AI & Automation
  {
    name: 'OpenAI API',
    category: 'AI & Automation',
    description: 'State-of-the-art LLMs (GPT-4o, Embeddings) for reasoning, summarization, and copilot tools.',
    badge: 'LLM Engine',
    iconName: 'Cpu',
  },
  {
    name: 'LangChain',
    category: 'AI & Automation',
    description: 'Framework for building context-aware agentic workflows, memory chains, and RAG pipelines.',
    badge: 'AI Agents',
    iconName: 'Sparkles',
  },
  {
    name: 'AI APIs & Vectors',
    category: 'AI & Automation',
    description: 'Pinecone, pgvector, Anthropic, and custom multimodal inference endpoints.',
    badge: 'Vector Intelligence',
    iconName: 'Bot',
  },
];
