'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { companyData } from '@/data/company';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#ffffff',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Logo size="md" inverted={true} />
            </Link>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '24px' }}>
              {companyData.shortDescription}
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={companyData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={companyData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/services#software-development" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#web-mobile-development" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Web &amp; Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux-design" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  UI/UX &amp; Product Design
                </Link>
              </li>
              <li>
                <Link href="/services#digital-transformation" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Resources */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Company &amp; Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/about" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  About VAM|Tech
                </Link>
              </li>
              <li>
                <Link href="/solutions" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Careers &amp; Culture
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ fontSize: '14px', color: '#94a3b8' }} className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={16} color="var(--color-brand-cyan)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <a href={`mailto:${companyData.contact.email}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                  {companyData.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-brand-cyan)" style={{ flexShrink: 0 }} />
                <span>{companyData.contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-brand-cyan)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{companyData.contact.address}</span>
              </div>

              <div style={{ marginTop: '12px' }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ width: '100%', padding: '10px', fontSize: '13px', justifyContent: 'center' }}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} {companyData.legalName} All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy" style={{ color: '#94a3b8' }} className="footer-link">
              Privacy
            </Link>
            <Link href="/terms" style={{ color: '#94a3b8' }} className="footer-link">
              Terms
            </Link>
            <Link href="/contact" style={{ color: '#94a3b8' }} className="footer-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #ffffff !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </footer>
  );
}
