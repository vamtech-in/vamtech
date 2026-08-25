export interface JobPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'AI & Data' | 'Cloud & DevOps';
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

export const careersData = {
  headline: 'Build the Next Generation of Intelligent Software with VAM|Tech',
  subheading:
    'Join an engineering-first culture that values deep technical craftsmanship, autonomous ownership, and continuous innovation.',
  perks: [
    {
      title: '100% Remote-First Culture',
      description: 'Work from wherever you are most productive with flexible working hours.',
      icon: 'Globe',
    },
    {
      title: 'Modern Hardware & Tooling',
      description: 'Top-spec MacBook Pro / Linux workstation and any developer tools you need.',
      icon: 'Laptop',
    },
    {
      title: 'Learning & Certification Budget',
      description: 'Annual $2,000 allowance for AWS/GCP certifications, courses, and tech conferences.',
      icon: 'BookOpen',
    },
    {
      title: 'Health & Wellness Benefits',
      description: 'Comprehensive health, dental, and vision coverage plus wellness stipends.',
      icon: 'Heart',
    },
  ],
  positions: [
    {
      id: 'senior-fullstack-engineer',
      title: 'Senior Full-Stack Engineer (Next.js & Node.js)',
      department: 'Engineering',
      location: 'Remote (US / Global)',
      type: 'Full-time',
      experience: '4+ Years',
      description:
        'Architect and implement scalable web applications, real-time client dashboards, and high-throughput APIs using Next.js 15, TypeScript, Node.js, and PostgreSQL.',
      responsibilities: [
        'Lead architectural decisions for enterprise web applications and SaaS platforms.',
        'Build high-performance React components using Next.js App Router and Server Actions.',
        'Design and optimize PostgreSQL database schemas and REST/GraphQL APIs.',
        'Mentor junior developers and lead code reviews focusing on clean engineering.',
      ],
      requirements: [
        'Strong expertise in TypeScript, React, Next.js, and Node.js.',
        'Deep experience with relational databases (PostgreSQL/MySQL) and caching (Redis).',
        'Proven track record of deploying production applications on AWS or GCP.',
        'Commitment to automated testing (Jest, Playwright) and CI/CD best practices.',
      ],
      skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI / LLM Systems Engineer',
      department: 'AI & Data',
      location: 'Remote (US / Global)',
      type: 'Full-time',
      experience: '3+ Years',
      description:
        'Build enterprise RAG pipelines, fine-tune open-weight models, and develop agentic workflows using Python, LangChain, OpenAI APIs, and vector databases.',
      responsibilities: [
        'Design and deploy scalable RAG systems with hybrid vector search and reranking.',
        'Develop autonomous multi-agent systems using LangChain and LlamaIndex.',
        'Implement prompt guardrails, evaluation frameworks, and hallucination tests.',
        'Integrate AI services into web applications via FastAPI and async message queues.',
      ],
      requirements: [
        'Proficiency in Python and asynchronous frameworks (FastAPI, asyncio).',
        'Demonstrated experience with OpenAI API, Anthropic, or open-source LLMs.',
        'Familiarity with vector stores (Pinecone, pgvector, Qdrant) and chunking strategies.',
        'Understanding of NLP fundamentals and embedding models.',
      ],
      skills: ['Python', 'LangChain', 'FastAPI', 'pgvector', 'OpenAI API', 'Docker'],
    },
    {
      id: 'cloud-devops-engineer',
      title: 'Cloud & DevOps Engineer (AWS & Kubernetes)',
      department: 'Cloud & DevOps',
      location: 'Remote (US / Global)',
      type: 'Full-time',
      experience: '3+ Years',
      description:
        'Design and maintain multi-region cloud foundations, automated GitHub Actions pipelines, container orchestration, and real-time observability stacks.',
      responsibilities: [
        'Author modular Infrastructure as Code (IaC) using Terraform.',
        'Configure zero-downtime CI/CD deployment pipelines on GitHub Actions.',
        'Manage Kubernetes clusters and Dockerized microservice workloads.',
        'Implement cloud security audits, IAM role hardening, and Datadog monitoring.',
      ],
      requirements: [
        'Hands-on experience with AWS cloud services (ECS, EKS, RDS, VPC, S3).',
        'Proficiency in Terraform and Docker containerization.',
        'Strong knowledge of Linux systems, networking, and bash scripting.',
        'Experience configuring Prometheus, Grafana, or Datadog observability.',
      ],
      skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux'],
    },
    {
      id: 'lead-ui-ux-designer',
      title: 'Lead UI/UX Product Designer',
      department: 'Design',
      location: 'Remote (US / Global)',
      type: 'Full-time',
      experience: '4+ Years',
      description:
        'Design intuitive, visually stunning digital product experiences, comprehensive Figma design systems, and responsive web/mobile interfaces.',
      responsibilities: [
        'Lead user research, wireframing, and interactive prototyping in Figma.',
        'Build scalable design systems with reusable auto-layout component tokens.',
        'Collaborate closely with frontend engineers for pixel-perfect implementation.',
        'Conduct usability testing and iterate based on user engagement metrics.',
      ],
      requirements: [
        'Stunning portfolio demonstrating complex SaaS or consumer product design.',
        'Mastery of Figma (Variables, Auto-Layout, Component Sets, Prototyping).',
        'Strong understanding of modern frontend technologies (React, Tailwind CSS).',
        'Deep empathy for user workflows and aesthetic visual hierarchy.',
      ],
      skills: ['Figma', 'Design Systems', 'UX Strategy', 'Prototyping', 'Tailwind CSS'],
    },
  ] as JobPosition[],
};
