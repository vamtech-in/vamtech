'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.25s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(250, 253, 255, 0.76)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid #dfe7f2' : '1px solid rgba(223, 231, 242, 0.64)',
        boxShadow: isScrolled ? '0 10px 28px rgba(8, 27, 58, 0.06)' : 'none',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '27px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '14.5px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-brand-blue)' : '#3f526d',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                  className="nav-link-item"
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-brand-blue)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '14px',
                borderRadius: '10px',
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid #dbe6f3',
              backgroundColor: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
            className="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            animation: 'fadeIn 0.2s ease-out',
          }}
          className="mobile-drawer-container"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '16px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-brand-blue)' : 'var(--text-main)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-brand-blue)' }} />}
                </Link>
              );
            })}

            <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
          .mobile-drawer-container {
            display: none !important;
          }
        }
        .nav-link-item:hover {
          color: var(--color-brand-blue) !important;
        }
      `}</style>
    </header>
  );
}
