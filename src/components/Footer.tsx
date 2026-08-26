'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

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
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
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
                <a href="mailto:vamtech.in@gmail.com">vamtech.in@gmail.com</a>
              </div>
              <div>
                <span>Phone:</span>
                <p>(+91) 72379 00686</p>
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

