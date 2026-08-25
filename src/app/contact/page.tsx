import React from 'react';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphericWash from '@/components/AtmosphericWash';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const metadata = {
  title: 'Direct Engineering Line & Sizing Intake — Vamtech Journal',
  description: 'Initiate a direct architectural discovery call with Vamtech Principal Engineers. Transparent scope, zero junior handoffs, and rapid sprint execution.',
};

export default function ContactPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <AtmosphericWash variant="coral-sky" size={560} top="-80px" left="-120px" opacity={0.45} />
      <AtmosphericWash variant="sky-mint" size={600} top="650px" right="-120px" opacity={0.4} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-periwinkle-mist)',
                  color: 'var(--color-lake-blue)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-abc-diatype-mono)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Sprint Intake & Discovery Line
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-untitled-serif)',
                fontSize: 'clamp(36px, 5.2vw, 64px)',
                fontWeight: 400,
                color: 'var(--color-off-black)',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Start an Architectural Consultation
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-abc-diatype-mono)',
                color: 'var(--color-graphite)',
                fontSize: '17px',
                maxWidth: '720px',
                margin: '0 auto',
                lineHeight: 1.5,
              }}
            >
              Connect directly with our team. We respond within 1 business day with an honest technical feasibility assessment.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Form + Trust/Direct Contact Info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-layout-grid"
        >
          {/* Left: Contact Form */}
          <ScrollReveal animation="fade-up">
            <ContactForm />
          </ScrollReveal>

          {/* Right: Direct Information & Commitments */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Direct Line Card */}
              <div
                className="monad-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '36px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '20px',
                  }}
                >
                  Direct Engineering Desk
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', color: 'var(--color-graphite)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <MapPin size={18} color="var(--color-lake-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Tech Innovation Park, Suite 400<br />San Francisco, CA & Global Remote Pods</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} color="var(--color-lake-blue)" style={{ flexShrink: 0 }} />
                    <a href="mailto:contact@vamtech.io" style={{ color: 'var(--color-off-black)', textDecoration: 'underline' }}>
                      contact@vamtech.io
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} color="var(--color-lake-blue)" style={{ flexShrink: 0 }} />
                    <span>+1 (800) VAM-TECH</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Clock size={18} color="var(--color-lake-blue)" style={{ flexShrink: 0 }} />
                    <span>Response Time: Within 1 Business Day</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box (Periwinkle Mist #cfdaf5) */}
              <div
                className="monad-card-periwinkle"
                style={{
                  padding: '36px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-untitled-serif)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: 'var(--color-off-black)',
                    marginBottom: '16px',
                  }}
                >
                  What Happens Next?
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Mutual NDA exchanged prior to deep discovery',
                    '30-minute technical scope & bottleneck review',
                    'Formal Sprint Milestone & Sizing breakdown delivered in 48h',
                    'Zero pressure, zero junior sales account reps',
                  ].map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--color-lake-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-off-black)' }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
