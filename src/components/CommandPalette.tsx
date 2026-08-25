'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Terminal, 
  Code2, 
  CloudCog, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Calculator, 
  X, 
  ArrowRight,
  Command
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
    { title: 'Verified Case Studies & ROI', category: 'Proof', icon: <Terminal size={16} />, href: '/case-studies' },
    { title: 'Security & SOC 2 Trust Center', category: 'Security', icon: <ShieldCheck size={16} />, href: '/security' },
    { title: 'Schedule 30-Min Architecture Discovery', category: 'Action', icon: <Calendar size={16} />, href: '/contact' },
    { title: 'Engagement Models & Sizing', category: 'Pricing', icon: <Command size={16} />, href: '/pricing' },
    { title: 'Engineering Philosophy & Team', category: 'About', icon: <Terminal size={16} />, href: '/about' },
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Floating Trigger Button on screen (Desktop & Mobile accessible) */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 90,
          background: 'linear-gradient(135deg, rgba(14, 20, 36, 0.9) 0%, rgba(8, 12, 22, 0.95) 100%)',
          border: '1px solid rgba(224, 26, 138, 0.4)',
          borderRadius: '9999px',
          padding: '10px 18px',
          color: '#F8FAFC',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.84rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(224, 26, 138, 0.2)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.2s',
        }}
        aria-label="Open Command Palette"
      >
        <Search size={15} color="#38BDF8" />
        <span>Quick Nav</span>
        <kbd
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3, 6, 15, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '12vh',
            zIndex: 9999,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '620px',
              background: '#0B101E',
              border: '1px solid rgba(0, 102, 255, 0.4)',
              borderRadius: '20px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 102, 255, 0.2)',
              overflow: 'hidden',
              margin: '0 20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <Search size={20} color="#38BDF8" />
              <input
                type="text"
                autoFocus
                placeholder="Type a service, case study, or command..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Command Results */}
            <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '12px' }}>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(cmd.href)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'transparent',
                      border: 'none',
                      color: '#F8FAFC',
                      cursor: 'pointer',
                      fontSize: '0.92rem',
                      textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.06)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ color: '#E01A8A' }}>{cmd.icon}</div>
                      <span>{cmd.title}</span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#94A3B8',
                      }}
                    >
                      {cmd.category}
                    </span>
                  </button>
                ))
              ) : (
                <div style={{ padding: '32px', textAlign: 'center', color: '#64748B', fontSize: '0.9rem' }}>
                  No matching architectures or pages found.
                </div>
              )}
            </div>

            {/* Footer Tip */}
            <div
              style={{
                padding: '12px 20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: '#64748B',
              }}
            >
              <span>Tip: Use <strong>Tab</strong> or <strong>Enter</strong> to navigate quickly</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
