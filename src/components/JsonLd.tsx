import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.vamtech.in/#organization',
    name: 'VAMTech Technologies',
    alternateName: ['VAMTech', 'VAMTech LLC', 'VAMTech Software'],
    url: 'https://www.vamtech.in',
    logo: 'https://www.vamtech.in/favicon.svg',
    description:
      'VAMTech is a premier custom software development, mobile app development, and AI automation company based in Lucknow, India, delivering rapid MVP sprints and enterprise engineering globally.',
    email: 'contactvamtech@gmail.com',
    telephone: '+917237900686',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tiwariganj',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226028',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/vamtech-in',
      'https://linkedin.com/company/vamtech',
      'https://twitter.com/vamtech_io',
      'https://instagram.com/vamtech.in',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+917237900686',
        contactType: 'sales and customer service',
        areaServed: ['IN', 'US', 'GB', 'CA', 'AE', 'AU', 'Worldwide'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.vamtech.in/#localbusiness',
    name: 'VAMTech — Best Software Development Company in Lucknow',
    alternateName: [
      'VAMTech Technologies',
      'VAMTech Software Company Lucknow',
      'VAMTech Web & Mobile App Development',
      'VAMTech Tiwariganj',
    ],
    image: 'https://www.vamtech.in/favicon.svg',
    url: 'https://www.vamtech.in',
    telephone: '+917237900686',
    priceRange: '₹24,999 - ₹2,50,000+',
    hasMap: 'https://maps.google.com/?q=VAMTech+Tiwariganj+Faizabad+Road+Lucknow+226028',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tiwariganj, Faizabad Road',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226028',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8927,
      longitude: 81.0422,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '88',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Gomti Nagar, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Indira Nagar, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Hazratganj, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Aliganj, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Faizabad Road, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Tiwariganj, Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering & AI Services Lucknow',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software & Web Application Development in Lucknow',
            description:
              'Full-stack custom software and scalable web apps built using Next.js, React, Node.js, and TypeScript with 100% source code ownership.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development Lucknow (iOS & Android)',
            description:
              'Cross-platform React Native and progressive web app (PWA) development with offline sync and native performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation & Custom LLM Workflows',
            description:
              'AI agent development, RAG pipelines, OpenAI/Anthropic model integrations, and business workflow automations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rapid MVP Development Sprint (2-4 Weeks)',
            description:
              'Fixed-scope MVP sprint package starting at ₹24,999 to take your startup concept from wireframe to production launch.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Architecture & DevOps Engineering',
            description:
              'AWS cloud architecture, Docker containerization, Kubernetes clusters, and automated CI/CD pipelines.',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.vamtech.in/#website',
    url: 'https://www.vamtech.in',
    name: 'VAMTech Software Technologies',
    publisher: {
      '@id': 'https://www.vamtech.in/#organization',
    },
    inLanguage: 'en-US',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best custom software development company in Lucknow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VAMTech Technologies is recognized as the best custom software development company in Lucknow, India. We deliver bespoke full-stack web applications, mobile apps (iOS & Android), AI automation workflows, and fast 2–4 week MVP sprints starting at ₹24,999 with 100% source code and IP ownership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of software development and MVP development in Lucknow at VAMTech?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VAMTech offers transparent sprint packages starting at ₹24,999 for MVP sprints and starter web apps. Custom enterprise software and dedicated engineering squads (₹49,999/mo / $3,500/mo) are scoped on clear milestones with zero hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can VAMTech deliver an MVP or software application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our rapid MVP sprints are delivered in 2 to 4 weeks, taking you from initial architecture blueprints and design to live production deployment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I get 100% source code ownership and intellectual property (IP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%. Upon milestone completion, all GitHub repositories, source code, database architectures, Figma UI designs, and cloud infrastructure scripts are entirely transferred to your company with full IP rights and NDA protections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is VAMTech based in Lucknow, India, and do you work with global clients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! VAMTech is headquartered in Tiwariganj, Lucknow (Uttar Pradesh, India), serving clients across Lucknow, Gomti Nagar, Indira Nagar, Delhi NCR, as well as global founders in the US, UK, Middle East, and worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tech stack does VAMTech use for web, mobile, and AI development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Next.js 15, React, React Native, TypeScript, Node.js, Python, FastAPI, PostgreSQL, Redis, Docker, AWS Cloud, OpenAI/Anthropic APIs, LangChain, and pgvector.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
