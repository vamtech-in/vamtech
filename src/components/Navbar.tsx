'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  CloudCog, 
  Briefcase, 
  Layers 
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing & Models', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Security & Trust', href: '/security' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(6, 9, 19, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo size="md" showTagline={true} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: isActive ? '#FFFFFF' : '#94A3B8',
                      transition: 'color 0.2s ease',
                      padding: '8px 0',
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '320px',
                        background: 'rgba(11, 16, 30, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        padding: '16px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <Link
                        href="/services#custom-software"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px',
                          borderRadius: '10px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(255, 94, 58, 0.15)', color: '#FF5E3A' }}>
                          <Code2 size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Custom Enterprise Software</div>
                          <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Microservices & high-scale APIs</div>
                        </div>
                      </Link>

                      <Link
                        href="/services#cloud-devops"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px',
                          borderRadius: '10px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(0, 102, 255, 0.15)', color: '#0066FF' }}>
                          <CloudCog size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Cloud & DevOps</div>
                          <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Kubernetes & CI/CD automation</div>
                        </div>
                      </Link>

                      <Link
                        href="/services#ai-automation"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px',
                          borderRadius: '10px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(224, 26, 138, 0.15)', color: '#E01A8A' }}>
                          <Sparkles size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>AI & Automation</div>
                          <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Vector RAG & autonomous agents</div>
                        </div>
                      </Link>

                      <Link
                        href="/services#web-mobile-apps"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px',
                          borderRadius: '10px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(123, 44, 191, 0.15)', color: '#A855F7' }}>
                          <Layers size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Web & Mobile Apps</div>
                          <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Next.js & React Native products</div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '6px 0',
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <span>Book a Call</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-trigger"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(6, 9, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: pathname === link.href ? '#FF5E3A' : '#F8FAFC',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ marginTop: '20px' }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
