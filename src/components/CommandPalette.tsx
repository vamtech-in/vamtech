'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Code2, 
  CloudCog, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Calculator, 
  X, 
  ArrowRight,
  Command,
  FileText
} from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { title: 'Custom Enterprise Software', category: 'Services', icon: <Code2 size={16} />, href: '/services#custom-software' },
    { title: 'Cloud Modernization & DevOps', category: 'Services', icon: <CloudCog size={16} />, href: '/services#cloud-devops' },
    { title: 'AI Engineering & Agentic Automation', category: 'Services', icon: <Sparkles size={16} />, href: '/services#ai-automation' },
    { title: 'High-Performance Web & Mobile Apps', category: 'Services', icon: <Layers size={16} />, href: '/services#web-mobile-apps' },
    { title: 'Interactive Investment Estimator', category: 'Tools', icon: <Calculator size={16} />, href: '/pricing#estimator' },
    { title: 'Verified Case Studies & ROI', category: 'Journal', icon: <FileText size={16} />, href: '/case-studies' },
    { title: 'Security & SOC 2 Trust Center', category: 'Security', icon: <ShieldCheck size={16} />, href: '/security' },
    { title: 'Schedule 30-Min Architecture Discovery', category: 'Action', icon: <Calendar size={16} />, href: '/contact' },
    { title: 'Engagement Models & Sizing', category: 'Pricing', icon: <Command size={16} />, href: '/pricing' },
    { title: 'Engineering Story & Culture', category: 'About', icon: <FileText size={16} />, href: '/about' },
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(36, 36, 36, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '620px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-ash)',
          borderRadius: '28px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '20px 24px',
            borderBottom: '1px solid var(--color-ash)',
          }}
        >
          <Search size={18} color="var(--color-lake-blue)" />
          <input
            type="text"
            placeholder="Search journal, capabilities, models (e.g. Go, RAG, pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '15px',
              color: 'var(--color-off-black)',
            }}
          />
          <span
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid var(--color-ash)',
              fontSize: '11px',
              fontFamily: 'var(--font-abc-diatype-mono)',
              color: 'var(--color-smoke)',
              textTransform: 'uppercase',
            }}
          >
            ESC
          </span>
        </div>

        {/* Command List */}
        <div
          style={{
            maxHeight: '380px',
            overflowY: 'auto',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {filteredCommands.length === 0 ? (
            <div
              style={{
                padding: '32px 24px',
                textAlign: 'center',
                fontFamily: 'var(--font-abc-diatype-mono)',
                fontSize: '13px',
                color: 'var(--color-smoke)',
              }}
            >
              No matching architectural entries found.
            </div>
          ) : (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.title}
                onClick={() => handleSelect(cmd.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-parchment)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      padding: '6px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-periwinkle-mist)',
                      color: 'var(--color-lake-blue)',
                    }}
                  >
                    {cmd.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-untitled-serif)',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'var(--color-off-black)',
                    }}
                  >
                    {cmd.title}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      border: '1px solid var(--color-ash)',
                      color: 'var(--color-smoke)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cmd.category}
                  </span>
                  <ArrowRight size={14} color="var(--color-lake-blue)" />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
