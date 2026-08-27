'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

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
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.25s ease',
        backgroundColor: isScrolled ? 'rgba(215, 226, 230, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '84px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '36px',
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
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--color-brand-blue)' : '#0a192f',
                    transition: 'all 0.2s ease',
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
                        top: '-3px',
                        right: '-8px',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-brand-blue)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop "Hire Us Now" Pill Button */}
          <div style={{ display: 'none', alignItems: 'center' }} className="desktop-nav">
            <Link href="/contact" className="btn-hire-now">
              <span className="status-dot" />
              <span>Hire Us Now</span>
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
              borderRadius: '50%',
              border: '1px solid rgba(0, 30, 80, 0.12)',
              backgroundColor: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
            className="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #cbd5e1',
            boxShadow: '0 20px 30px rgba(0, 20, 60, 0.12)',
            padding: '24px',
            animation: 'fadeIn 0.2s ease-out',
          }}
          className="mobile-drawer-container"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link
              href="/"
              style={{
                fontSize: '16px',
                fontWeight: pathname === '/' ? 800 : 600,
                color: pathname === '/' ? 'var(--color-brand-blue)' : 'var(--text-main)',
                padding: '8px 12px',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '16px',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? 'var(--color-brand-blue)' : 'var(--text-main)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(0, 85, 255, 0.08)' : 'transparent',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div style={{ paddingTop: '16px', borderTop: '1px solid #edf2f5' }}>
              <Link
                href="/contact"
                className="btn-hire-now"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="status-dot" />
                <span>Hire Us Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
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

