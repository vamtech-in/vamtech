'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Plus, Minus, Layers, Smartphone, Cpu, Database, Users, Sparkles, Server } from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/siteData';

export default function ServicesOverview() {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const [openMobileAccordionId, setOpenMobileAccordionId] = useState<string | null>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const toggleMobileAccordion = (id: string) => {
    setOpenMobileAccordionId(openMobileAccordionId === id ? null : id);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-commerce': return <Layers size={18} />;
      case 'mobile-apps': return <Smartphone size={18} />;
      case 'custom-solutions': return <Cpu size={18} />;
      case 'erp': return <Database size={18} />;
      case 'crm-software': return <Users size={18} />;
      case 'ai-solutions': return <Sparkles size={18} />;
      case 'hosting-maintenance': return <Server size={18} />;
      default: return <Layers size={18} />;
    }
  };

  return (
    <section className="services-overview-section" id="services">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-header-wrap">
          <div>
            <span className="editorial-badge" style={{ marginBottom: '16px' }}>
              Capabilities & Offerings
            </span>
            <h2 className="section-title">What we do</h2>
          </div>
          <Link href="#contact" className="btn-editorial-secondary" style={{ display: 'inline-flex' }}>
            <span>Discuss a Build</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Desktop Layout: Interactive Left List + Sticky Right Preview */}
        <div className="services-interactive-desktop">
          {/* Left Column: Numbered Service Rows */}
          <div className="services-list-container">
            {servicesData.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className={`service-row-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="service-row-left">
                    <span className="service-number">{service.number}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-row-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Active Preview Panel */}
          <div className="service-preview-panel">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="preview-tagline">{activeService.tagline}</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-warm)' }}>
                {getServiceIcon(activeService.id)}
              </div>
            </div>

            <h4 className="preview-heading">{activeService.title}</h4>
            <p className="preview-description">{activeService.description}</p>

            <div style={{ marginBottom: '28px' }}>
              <h5 className="preview-deliverables-title">Scope & Deliverables</h5>
              <div className="preview-chips-grid">
                {activeService.deliverables.map((item, idx) => (
                  <span key={idx} className="preview-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="preview-deliverables-title">Technical Standards</h5>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {activeService.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                    <Check size={14} color="var(--accent-warm)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Accordion (Spec Section 12) */}
        <div className="services-accordion-mobile">
          {servicesData.map((service) => {
            const isOpen = openMobileAccordionId === service.id;
            return (
              <div key={service.id} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleMobileAccordion(service.id)}
                  aria-expanded={isOpen}
                >
                  <div className="accordion-title-wrap">
                    <span className="accordion-number">{service.number}</span>
                    <span className="accordion-title">{service.title}</span>
                  </div>
                  <span className="accordion-icon">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {service.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                      {service.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            background: '#FFFFFF',
                            padding: '6px 12px',
                            borderRadius: '9999px',
                            border: '1px solid var(--border-primary)',
                          }}
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
