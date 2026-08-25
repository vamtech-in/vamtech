import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  Lock 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #060913 0%, #03050A 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          background: 'radial-gradient(ellipse, rgba(224, 26, 138, 0.12) 0%, rgba(0, 102, 255, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Logo size="md" showTagline={true} />
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '24px', maxWidth: '340px' }}>
              Architecting high-concurrency enterprise software, autonomous AI systems, and cloud foundations for modern tech leaders and high-growth ventures.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#38BDF8', fontSize: '0.85rem', fontWeight: 600 }}>
              <Shield size={16} />
              <span>SOC 2 Type II Aligned • Zero-Trust Engineering</span>
            </div>
          </div>

          {/* Engineering & Services */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.5px' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/services#custom-software" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
                  Cloud Modernization & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
                  AI & Agentic Automation
                </Link>
              </li>
              <li>
                <Link href="/services#web-mobile-apps" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
                  High-Performance Web & Mobile
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
                  Engagement Models & Sizing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Trust */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.5px' }}>
              Company & Proof
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/about" style={{ color: '#94A3B8', fontSize: '0.9rem' }} className="footer-link">
                  About & Engineering Story
                </Link>
              </li>
              <li>
                <Link href="/case-studies" style={{ color: '#94A3B8', fontSize: '0.9rem' }} className="footer-link">
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link href="/security" style={{ color: '#94A3B8', fontSize: '0.9rem' }} className="footer-link">
                  Security & Compliance Hub
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: '#94A3B8', fontSize: '0.9rem' }} className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: '#94A3B8', fontSize: '0.9rem' }} className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Physical Address (Trust requirement in strategy doc) */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.5px' }}>
              Direct Engineering Line
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#FF5E3A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Tech Innovation Park, Suite 400<br />San Francisco, CA & Global Remote Pods</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#E01A8A" style={{ flexShrink: 0 }} />
                <a href="mailto:contact@vamtech.io" style={{ color: '#F8FAFC' }}>contact@vamtech.io</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#0066FF" style={{ flexShrink: 0 }} />
                <span>+1 (800) 582-VAMTECH</span>
              </div>
              <div style={{ marginTop: '10px' }}>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', fontSize: '0.86rem', padding: '10px 18px' }}>
                  <span>Request Custom Architecture Quote</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Vamtech Technologies Inc. All rights reserved. Built for mission-critical software.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/privacy" style={{ color: '#64748B' }} className="footer-link">Privacy</Link>
            <span>•</span>
            <Link href="/terms" style={{ color: '#64748B' }} className="footer-link">Terms</Link>
            <span>•</span>
            <Link href="/security" style={{ color: '#64748B' }} className="footer-link">Security</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
