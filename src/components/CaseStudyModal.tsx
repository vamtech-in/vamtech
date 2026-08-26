'use client';

import React from 'react';
import { ProjectItem } from '@/data/projects';
import { X, Check, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        {/* Header Visual Bar */}
        <div
          style={{
            padding: '36px 32px 28px',
            backgroundColor: 'var(--bg-dark)',
            color: '#ffffff',
            position: 'relative',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(37, 99, 235, 0.3)',
              color: 'var(--color-brand-cyan)',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {project.category}
          </span>

          <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '12px', marginBottom: '6px', color: '#ffffff' }}>
            {project.title}
          </h3>

          <p style={{ fontSize: '14px', color: '#cbd5e1' }}>{project.tagline}</p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {/* Key Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              marginBottom: '28px',
            }}
          >
            {project.impactMetrics.map((metric, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-brand-blue)' }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '28px' }}>
            <div style={{ padding: '18px', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ef4444', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>The Engineering Challenge</span>
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {project.challenge}
              </p>
            </div>

            <div style={{ padding: '18px', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#10b981', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>VAMTech Architectural Solution</span>
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
              Key System Features
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <Check size={14} color="var(--color-brand-blue)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
              Technologies Utilized
            </h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#f1f5f9',
                    color: '#334155',
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Close
            </button>
            <Link
              href="/contact"
              className="btn-primary"
              onClick={onClose}
              style={{ padding: '10px 24px', fontSize: '14px' }}
            >
              <span>Build Similar Solution</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
