'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Notch Tab: "● Available for New Projects" */}
      <div className="top-notch-wrap">
        <div className="top-notch">
          <span className="notch-green-dot" />
          <span>Available for New Projects</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`morfikos-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="editorial-container">
          <div className="morfikos-nav-inner">
            {/* Left: VAMTech Brand Logo */}
            <Link href="/" className="morfikos-brand" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/vamtech-logo-new.png"
                alt="VAMTech"
                style={{
                  height: '34px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>

            {/* Center Navigation Links */}
            <nav className="morfikos-nav-center">
              <Link href="#works" className="morfikos-nav-link">
                Works
              </Link>
              <Link href="#services" className="morfikos-nav-link">
                Services
              </Link>
              <Link href="#about" className="morfikos-nav-link">
                About
              </Link>
              <Link href="#contact" className="morfikos-nav-link">
                Contact
              </Link>
            </nav>

            {/* Right: Pill Button 'Let's Connect' */}
            <div className="morfikos-nav-right">
              <Link href="#contact" className="btn-morfikos-connect">
                Let&apos;s Connect
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                className={`morfikos-hamburger ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span className="morfikos-hamburger-bar" />
                <span className="morfikos-hamburger-bar" />
                <span className="morfikos-hamburger-bar" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link href="#works" className="mobile-nav-item" onClick={closeMenu}>
              Works
            </Link>
          </li>
          <li>
            <Link href="#services" className="mobile-nav-item" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#about" className="mobile-nav-item" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="mobile-nav-item" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link
            href="#contact"
            className="btn-morfikos-connect"
            style={{ textAlign: 'center', width: '100%', padding: '16px' }}
            onClick={closeMenu}
          >
            Let&apos;s Connect
          </Link>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            VAMTech · Software for Growing Businesses
          </p>
        </div>
      </div>
    </>
  );
}
