'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-ref-shell">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Logo size="md" inverted={true} />
            </Link>
            <p className="footer-brand-desc">
              Building scalable digital products, cloud platforms, and intelligent software solutions for forward-thinking companies.
            </p>

            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com/vamtech.in" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://github.com/vivekmaddy16" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="footer-nav-col">
            <h4>Capabilities</h4>
            <ul>
              <li><Link href="/services">Full-Stack Development</Link></li>
              <li><Link href="/services">AI &amp; Automation</Link></li>
              <li><Link href="/services">Cloud &amp; DevOps</Link></li>
              <li><Link href="/services">UI/UX Product Design</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Portfolio Case Studies</Link></li>
              <li><Link href="/pricing">Pricing &amp; Engagement</Link></li>
              <li><Link href="/contact">Contact Lead Team</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Direct Channels</h4>
            <div className="footer-contact-items">
              <div>
                <span>Email:</span>
                <a href="mailto:contactvamtech@gmail.com">contactvamtech@gmail.com</a>
              </div>
              <div>
                <span>Phone:</span>
                <p>
                  <a href="tel:+917237900686" style={{ color: 'inherit' }}>(+91) 72379 00686</a><br />
                  <a href="tel:+917307386706" style={{ color: 'inherit' }}>(+91) 73073 86706</a><br />
                  <a href="tel:+919170601664" style={{ color: 'inherit' }}>(+91) 9170601664</a><br />
                  <a href="tel:+916394770500" style={{ color: 'inherit' }}>(+91) 63947 70500</a>

                </p>
              </div>
              <div>
                <span>Location:</span>
                <p>Tiwariganj, Lucknow (226028)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exact Bottom Copyright Bar from Reference */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © All Rights Reserved By <strong>VAMTech LLC</strong> 2024-2026 | Design under justt.production By <em>Justt</em>
          </p>

          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
            <span>•</span>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-ref-shell {
          background-color: #07090d;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 0 36px;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr 0.9fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }

        .footer-brand-col {
          max-width: 320px;
        }

        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 24px;
        }

        .footer-social-row {
          display: flex;
          gap: 12px;
        }

        .footer-social-row a {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s ease;
        }

        .footer-social-row a:hover {
          background: #ff5722;
          border-color: #ff5722;
          transform: translateY(-2px);
        }

        .footer-nav-col h4 {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-bottom: 20px;
        }

        .footer-nav-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-col ul li a {
          font-size: 14px;
          color: #8c9ba8;
          transition: color 0.2s ease;
        }

        .footer-nav-col ul li a:hover {
          color: #ff5722;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13.5px;
          color: #8c9ba8;
        }

        .footer-contact-items span {
          display: block;
          font-size: 11px;
          font-family: var(--font-mono);
          color: #64748b;
          text-transform: uppercase;
        }

        .footer-contact-items a {
          color: #ff5722;
        }

        .footer-contact-items p {
          color: #c0cad6;
          margin: 0;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13px;
          color: #718096;
        }

        .copyright-text strong {
          color: #ffffff;
        }

        .copyright-text em {
          font-style: italic;
          color: #ff5722;
          font-weight: 700;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-legal-links a {
          color: #8c9ba8;
          transition: color 0.2s ease;
        }

        .footer-legal-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

