'use client';

import React, { useState } from 'react';
import { techStackData, techCategories, TechCategory } from '@/data/techStack';
import { 
  Code, 
  Globe, 
  FileCode, 
  Terminal, 
  Server, 
  Layers, 
  Binary, 
  Database, 
  HardDrive, 
  Table, 
  Cloud, 
  Box, 
  GitBranch, 
  Workflow, 
  Cpu, 
  Sparkles, 
  Bot 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={20} />,
  Globe: <Globe size={20} />,
  FileCode: <FileCode size={20} />,
  Terminal: <Terminal size={20} />,
  Server: <Server size={20} />,
  Layers: <Layers size={20} />,
  Binary: <Binary size={20} />,
  Database: <Database size={20} />,
  HardDrive: <HardDrive size={20} />,
  Table: <Table size={20} />,
  Cloud: <Cloud size={20} />,
  Box: <Box size={20} />,
  GitBranch: <GitBranch size={20} />,
  Workflow: <Workflow size={20} />,
  Cpu: <Cpu size={20} />,
  Sparkles: <Sparkles size={20} />,
  Bot: <Bot size={20} />,
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('All');

  const filteredTech =
    activeCategory === 'All'
      ? techStackData
      : techStackData.filter((item) => item.category === activeCategory);

  return (
    <section className="section-py" id="technology" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Modern Toolchains</div>
          <h2 className="section-title">Battle-Tested Technology Ecosystem</h2>
          <p className="section-subtitle">
            We leverage industry-leading frontend libraries, backend runtimes, distributed databases, cloud providers, and AI foundations.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {techCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
                  boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.2)' : '0 1px 3px rgba(0, 0, 0, 0.02)',
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="corporate-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--color-brand-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {iconMap[item.iconName] || <Code size={20} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>{item.name}</h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10.5px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
