'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  CloudCog, 
  Sparkles, 
  Layers,
  ArrowRight
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
    { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="site-navbar"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        backgroundColor: isScrolled ? 'rgba(246, 243, 241, 0.95)' : 'var(--color-parchment)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-ash)' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Brand Logo with Dot */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo size="md" showTagline={true} />
        </Link>

        {/* Desktop Nav in ABC Diatype Mono 18px / 14px Uppercase */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
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
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'var(--font-abc-diatype-mono)',
                      fontSize: '14px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.025em',
                      color: isActive ? 'var(--color-lake-blue)' : 'var(--color-off-black)',
                      padding: '8px 0',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transition: 'transform 0.2s',
                        transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </Link>

                  {/* Dropdown Menu — Parchment with 1px Ash border */}
                  {servicesDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '340px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--color-ash)',
                        borderRadius: '24px',
                        padding: '16px',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        zIndex: 110,
                      }}
                    >
                      <Link
                        href="/services#custom-software"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: '16px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(43, 89, 209, 0.1)',
                            color: 'var(--color-lake-blue)',
                          }}
                        >
                          <Code2 size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '16px', color: 'var(--color-off-black)' }}>
                            Custom Enterprise Software
                          </div>
                          <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '11px', color: 'var(--color-graphite)' }}>
                            High-concurrency microservices & APIs
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/services#cloud-devops"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: '16px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(160, 181, 235, 0.25)',
                            color: '#1a3e9c',
                          }}
                        >
                          <CloudCog size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '16px', color: 'var(--color-off-black)' }}>
                            Cloud & Zero-Trust DevOps
                          </div>
                          <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '11px', color: 'var(--color-graphite)' }}>
                            Multi-region Kubernetes & Terraform
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/services#ai-automation"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: '16px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(167, 252, 205, 0.35)',
                            color: '#0b5930',
                          }}
                        >
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '16px', color: 'var(--color-off-black)' }}>
                            AI & Agentic Workflows
                          </div>
                          <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '11px', color: 'var(--color-graphite)' }}>
                            Vector RAG & deterministic guardrails
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/services#web-mobile-apps"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: '16px',
                          transition: 'background 0.2s',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(255, 148, 115, 0.25)',
                            color: '#9e2d0f',
                          }}
                        >
                          <Layers size={16} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '16px', color: 'var(--color-off-black)' }}>
                            High-Performance Web Apps
                          </div>
                          <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '11px', color: 'var(--color-graphite)' }}>
                            Next.js React Server Components & Edge
                          </div>
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
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.025em',
                  color: isActive ? 'var(--color-lake-blue)' : 'var(--color-off-black)',
                  padding: '6px 0',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      backgroundColor: 'var(--color-lake-blue)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: Ghost Pill (Login) + Lake Blue Pill (Get a Demo ▸) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <Link
            href="/security"
            className="btn-ghost"
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              display: 'none',
            }}
          >
            Trust Center
          </Link>

          {/* Single saturated primary action button per screen */}
          <Link
            href="/contact"
            className="btn-primary navbar-cta"
            style={{
              padding: '11px 24px',
              fontSize: '13px',
            }}
          >
            <span>Get a Demo</span>
            <span className="arrow-glyph" aria-hidden="true">▸</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--color-off-black)',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-trigger"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: 'var(--navbar-offset, 80px)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-parchment)',
            borderTop: '1px solid var(--color-ash)',
            padding: '32px 24px',
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
                fontFamily: 'var(--font-abc-diatype-mono)',
                fontSize: '16px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: pathname === link.href ? 'var(--color-lake-blue)' : 'var(--color-off-black)',
                padding: '12px 0',
                borderBottom: '1px solid var(--color-ash)',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ marginTop: '24px' }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <span>Get a Demo</span>
              <span className="arrow-glyph">▸</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
