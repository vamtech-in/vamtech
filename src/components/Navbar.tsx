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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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
        transition: 'all 0.25s var(--ease-default)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
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
                    color: isActive ? 'var(--color-accent-500)' : 'var(--color-primary-900)',
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
                        backgroundColor: 'var(--color-accent-500)',
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

          {/* Mobile Hamburger Button — 44×44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 30, 80, 0.12)',
              backgroundColor: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            className="mobile-hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop — click outside to close */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            top: '72px',
            backgroundColor: 'rgba(5, 14, 31, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: -1,
            animation: 'fadeIn 0.2s ease-out',
          }}
          className="mobile-backdrop mobile-drawer-container"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #cbd5e1',
            boxShadow: '0 20px 30px rgba(0, 20, 60, 0.12)',
            padding: '16px 20px 20px',
            animation: 'fadeInDown 0.2s ease-out',
            maxHeight: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
          className="mobile-drawer-container"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Link
              href="/"
              style={{
                fontSize: '16px',
                fontWeight: pathname === '/' ? 800 : 600,
                color: pathname === '/' ? 'var(--color-brand-blue)' : 'var(--text-main)',
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: pathname === '/' ? 'rgba(0, 85, 255, 0.06)' : 'transparent',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
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
                    padding: '12px',
                    borderRadius: '10px',
                    backgroundColor: isActive ? 'rgba(0, 85, 255, 0.08)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '44px',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div style={{ paddingTop: '12px', borderTop: '1px solid #edf2f5', marginTop: '8px' }}>
              <Link
                href="/contact"
                className="btn-hire-now"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', minHeight: '48px' }}
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
          .mobile-backdrop {
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

