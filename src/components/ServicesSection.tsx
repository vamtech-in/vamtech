'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData, ServiceItem } from '@/data/services';
import { 
  Code2, 
  Smartphone, 
  Bot, 
  Cloud, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  X, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Smartphone: <Smartphone size={24} />,
  Bot: <Bot size={24} />,
  Cloud: <Cloud size={24} />,
  Palette: <Palette size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="section-py" id="services" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Capabilities & Offerings</div>
          <h2 className="section-title">Specialized Technology Services for Modern Businesses</h2>
          <p className="section-subtitle">
            From initial product architecture to multi-region cloud deployment and AI automation, we engineer end-to-end digital solutions.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="corporate-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Line on hover */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: service.accentColor,
                  opacity: 0.8,
                }}
              />

              <div>
                {/* Icon & Counter */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: `${service.accentColor}15`,
                      color: service.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[service.icon] || <Code2 size={24} />}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--text-main)',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    marginBottom: '24px',
                  }}
                >
                  {service.shortDescription}
                </p>

                {/* Sub-Offerings Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '28px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  {service.subOfferings.map((sub, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '13.5px',
                        color: 'var(--text-main)',
                      }}
                    >
                      <span
                        style={{
                          color: service.accentColor,
                          marginTop: '2px',
                          display: 'inline-flex',
                        }}
                      >
                        <Check size={14} />
                      </span>
                      <span>
                        <strong>{sub.title}:</strong>{' '}
                        <span style={{ color: 'var(--text-muted)' }}>{sub.description}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                <button
                  onClick={() => setSelectedService(service)}
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
                  <span>Explore Capabilities</span>
                  <ArrowRight size={14} />
                </button>

                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                  }}
                >
                  {service.techStack.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 28px',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: `${selectedService.accentColor}15`,
                    color: selectedService.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {iconMap[selectedService.icon] || <Code2 size={20} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{selectedService.title}</h3>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {selectedService.idealFor}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '28px' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '24px' }}>
                {selectedService.fullDescription}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                  Core Architectural Capabilities
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {selectedService.capabilities.map((cap, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <Check size={14} color="var(--color-brand-blue)" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                  Deliverables & Standards
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedService.deliverables.map((del, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                      <ShieldCheck size={14} color="#10b981" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  onClick={() => setSelectedService(null)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Request Proposal for {selectedService.title}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
