import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { 
  Shield, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-parchment)',
        borderTop: '1px solid var(--color-ash)',
        paddingTop: '80px',
        paddingBottom: '48px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand & Editorial Mission */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Logo size="md" showTagline={true} />
            </Link>
            <p
              style={{
                color: 'var(--color-graphite)',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '24px',
                maxWidth: '340px',
              }}
            >
              VAM|Tech builds reliable software, intelligent digital products, and scalable technology solutions for ambitious teams.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                border: '1px solid var(--color-ash)',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                color: 'var(--color-off-black)',
                fontFamily: 'var(--font-abc-diatype-mono)',
                textTransform: 'uppercase',
              }}
            >
              <Shield size={13} color="var(--color-lake-blue)" />
              <span>Technology partners for what is next</span>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '20px',
              }}
            >
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/services#custom-software" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  AI & RAG Pipelines
                </Link>
              </li>
              <li>
                <Link href="/services#web-mobile-apps" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Web Platforms
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Engagement Models
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '20px',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/about" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  About VAM|Tech
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-link-arrow" style={{ fontSize: '13px' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Line & Inquiries */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '20px',
              }}
            >
              Engineering Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', color: 'var(--color-graphite)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="var(--color-lake-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>San Francisco, CA & Global Pods</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--color-lake-blue)" style={{ flexShrink: 0 }} />
                <a href="mailto:contact@vamtech.io" style={{ color: 'var(--color-off-black)', textDecoration: 'underline' }}>
                  contact@vamtech.io
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--color-lake-blue)" style={{ flexShrink: 0 }} />
                <span>+1 (800) 582-VAMTECH</span>
              </div>
              <div style={{ marginTop: '10px' }}>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', fontSize: '12px', padding: '10px 18px' }}>
                  <span>Request Architecture Sizing</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar separated by hairline Ash border */}
        <div
          style={{
            borderTop: '1px solid var(--color-ash)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            fontFamily: 'var(--font-abc-diatype-mono)',
            color: 'var(--color-smoke)',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          <div>
            © {new Date().getFullYear()} Vamtech Technologies Inc. Typeset in Untitled Serif & Diatype Mono.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/privacy" style={{ color: 'var(--color-smoke)' }}>Privacy</Link>
            <span>•</span>
            <Link href="/terms" style={{ color: 'var(--color-smoke)' }}>Terms</Link>
            <span>•</span>
            <Link href="/security" style={{ color: 'var(--color-smoke)' }}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
