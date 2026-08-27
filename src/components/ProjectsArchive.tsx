'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '@/data/projects';
import CaseStudyModal from '@/components/CaseStudyModal';
import { ArrowRight } from 'lucide-react';

export default function ProjectsArchive() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <section className="section-py" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="section-kicker">ENGINEERING SPECS</span>
            <h2 className="section-title-ref">
              Extended Case <span className="highlight-pill">Studies</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="ref-card-white"
                style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 800, color: '#0055ff', textTransform: 'uppercase' }}>
                    {project.category}
                  </span>

                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', margin: '8px 0 10px' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#f1f5f9',
                          color: '#334155',
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #eef2f6' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-dark-pill"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}
                  >
                    <span>View Architecture Specs</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
