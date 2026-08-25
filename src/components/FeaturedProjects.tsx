'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData, ProjectItem } from '@/data/projects';
import CaseStudyModal from './CaseStudyModal';
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="section-py" id="projects" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Case Studies & Work</div>
          <h2 className="section-title">Selected Engineering Deliverables</h2>
          <p className="section-subtitle">
            Explore how we solve complex data throughput, automated workflows, and high-concurrency demands for modern products.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="corporate-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                overflow: 'hidden',
              }}
            >
              {/* Card Header Visual Area */}
              <div
                style={{
                  padding: '32px 28px',
                  backgroundColor: 'var(--bg-dark)',
                  color: '#ffffff',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(37, 99, 235, 0.25)',
                      color: 'var(--color-brand-cyan)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </span>

                  <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    Production Live
                  </span>
                </div>

                <h3 style={{ fontSize: '21px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.4 }}>
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {project.description}
                  </p>

                  {/* Impact Metric Strip */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      marginBottom: '20px',
                      textAlign: 'center',
                    }}
                  >
                    {project.impactMetrics.map((metric, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-brand-blue)' }}>
                          {metric.value}
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 500 }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'var(--color-brand-blue)',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '4px 0',
                    }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    href="/projects"
                    style={{
                      fontSize: '12px',
                      color: '#64748b',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Specs</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/projects" className="btn-secondary" style={{ padding: '12px 28px' }}>
            <span>Explore All Portfolio Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
