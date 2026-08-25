'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '@/data/projects';
import CaseStudyModal from '@/components/CaseStudyModal';
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Web & Mobile / SaaS', 'AI & Automation', 'Headless Commerce', 'Enterprise / Cloud'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(selectedFilter) || selectedFilter.includes(p.category));

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Hero Header */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '72px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="tech-grid-pattern"
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <div className="section-badge">Client Case Studies</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Engineering Portfolio &amp; Digital Solutions
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            Explore our featured client deliverables across custom web applications, AI copilots, high-volume e-commerce, and enterprise ERP systems.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-py">
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    border: isActive ? '1px solid var(--color-brand-blue)' : '1px solid #e2e8f0',
                    backgroundColor: isActive ? 'var(--color-brand-blue)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Grid of Projects */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="corporate-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Visual Header */}
                <div
                  style={{
                    padding: '36px 32px',
                    backgroundColor: 'var(--bg-dark)',
                    color: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(37, 99, 235, 0.3)',
                        color: 'var(--color-brand-cyan)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.category}
                    </span>

                    <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                      Production Ready
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {project.tagline}
                  </p>
                </div>

                {/* Body */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '24px' }}>
                      {project.description}
                    </p>

                    {/* Metrics Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        marginBottom: '24px',
                        textAlign: 'center',
                      }}
                    >
                      {project.impactMetrics.map((metric, i) => (
                        <div key={i}>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-brand-blue)' }}>
                            {metric.value}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11.5px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: '#f1f5f9',
                            color: '#334155',
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Project Callout */}
          <div
            style={{
              padding: '48px',
              borderRadius: '16px',
              backgroundColor: 'var(--bg-dark)',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px', color: '#ffffff' }}>
              Have a Custom System to Build?
            </h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '560px', margin: '0 auto 28px' }}>
              We architect bespoke digital products tailored to your technical constraints and growth milestones.
            </p>
            <Link href="/contact" className="btn-light-accent">
              <span>Request Custom Proposal</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
