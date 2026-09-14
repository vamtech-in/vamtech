/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Works & Case Studies — Morfikos',
  description: 'Selected digital products, e-commerce platforms, mobile applications, and enterprise ERP systems built and maintained by Morfikos.',
};

export default function WorksPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', background: 'var(--bg-canvas)', minHeight: '100vh' }}>
      <div className="editorial-container">
        {/* Page Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
              }}
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
          </div>

          <span className="editorial-badge" style={{ marginBottom: '16px' }}>
            Flagship Engineering Archives
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 84px)',
              fontWeight: 800,
              letterSpacing: 'var(--ls-heading)',
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            Recent Works.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '680px',
            }}
          >
            Digital products, e-commerce configurators, logistics engines, and ERP systems engineered for high conversion, operational clarity, and reliability.
          </p>
        </div>

        {/* Works Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '48px' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-editorial-card"
              data-cursor="project"
              style={{ minWidth: 'unset' }}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-element"
                  loading="lazy"
                />
                {project.stats && (
                  <div className="project-image-badge">{project.stats}</div>
                )}
              </div>

              <div className="project-meta-row">
                <h2 className="project-card-title">{project.title}</h2>
                <span className="project-card-year">{project.year}</span>
              </div>

              <p className="project-card-category">{project.category}</p>

              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                }}
              >
                {project.description}
              </p>

              <div className="project-services-tags" style={{ marginBottom: '24px' }}>
                {project.services.map((svc, idx) => (
                  <span key={idx} className="project-service-tag">
                    {svc}
                  </span>
                ))}
              </div>

              <Link
                href="/#contact"
                className="btn-editorial-secondary"
                style={{ fontSize: '13px', padding: '10px 20px' }}
              >
                <span>Inquire About Similar Build</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
