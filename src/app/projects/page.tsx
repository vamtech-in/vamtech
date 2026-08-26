import React from 'react';
import type { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';
import CTASection from '@/components/CTASection';
import ProjectsArchive from '@/components/ProjectsArchive';

export const metadata: Metadata = {
  title: 'Client Work & Software Engineering Portfolio',
  description:
    'Explore VAMTech’s live portfolio of custom web applications, SaaS MVPs, mobile applications, cloud platforms, and AI automation engines delivered for global clients.',
  keywords: [
    'Software Development Portfolio',
    'Web App Case Studies',
    'Mobile App Projects Lucknow',
    'Live SaaS Demos',
    'Next.js Project Showcase',
    'Custom Software Examples',
    'AI Automation Projects',
  ],
  alternates: {
    canonical: 'https://vamtech.io/projects',
  },
  openGraph: {
    title: 'Software Development & AI Portfolio | VAMTech',
    description:
      'Curated collection of high-performance web apps, mobile products, and AI workflows built with clean architecture.',
    url: 'https://vamtech.io/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* Portfolio Header */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-kicker">OUR ARCHIVE</span>
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            Portfo<span className="highlight-pill">lio</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            A curated collection of web apps, mobile products, cloud platforms, and AI automation engines delivered for our global clients.
          </p>
        </div>
      </section>

      {/* Main Reference Portfolio Component with 2x2 Grid + Detailed Phone/Monitor Showcases */}
      <FeaturedProjects />

      {/* Additional Case Studies Grid & Interactive Modal */}
      <ProjectsArchive />

      {/* Pre-Footer CTA */}
      <CTASection />
    </div>
  );
}
