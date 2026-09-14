'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { companyDetails } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <div className="footer-brand-title" style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <img
                src="/images/vamtech-logo-white.png"
                alt="VAMTech"
                style={{ height: '34px', width: 'auto', display: 'block' }}
              />
            </div>
            <p className="footer-tagline-text">
              Custom software development company focused on helping growing businesses build, launch and maintain digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="#works" className="footer-link-item">Works</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">Services</Link>
              </li>
              <li>
                <Link href="#about" className="footer-link-item">About</Link>
              </li>
              <li>
                <Link href="#team" className="footer-link-item">Team</Link>
              </li>
              <li>
                <Link href="#pricing" className="footer-link-item">Pricing</Link>
              </li>
              <li>
                <Link href="#contact" className="footer-link-item">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="#services" className="footer-link-item">Web & Commerce</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">Mobile Apps</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">CRM Systems</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">ERP Software</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">AI Solutions</Link>
              </li>
              <li>
                <Link href="#services" className="footer-link-item">Hosting & SLA</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="footer-col-title">Direct Contact</h4>
            <ul className="footer-links-list" style={{ marginBottom: '24px' }}>
              <li>
                <a href={`mailto:${companyDetails.email}`} className="footer-link-item">
                  {companyDetails.email}
                </a>
              </li>
              <li>
                <a href={companyDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link-item">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="footer-link-item">
                {companyDetails.address}
              </li>
            </ul>

            <h4 className="footer-col-title">Social</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href={companyDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                LinkedIn ↗
              </a>
              <a
                href={companyDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                Instagram ↗
              </a>
              <a
                href={companyDetails.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                X ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {companyDetails.year} VAMTech Technologies. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link href="/privacy" className="footer-link-item">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link-item">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
