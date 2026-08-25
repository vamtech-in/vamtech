import React from 'react';
import ContactForm from '@/components/ContactForm';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  CheckCircle 
} from 'lucide-react';

export const metadata = {
  title: 'Contact Engineering & Get a Project Quote | Vamtech',
  description: 'Submit your software engineering requirements, book an architecture review, or get an initial feasibility assessment from Vamtech.',
};

export default function ContactPage() {
  return (
    <div style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="glow-orb orb-pink" style={{ top: '80px', left: '-120px' }} />
      <div className="glow-orb orb-blue" style={{ top: '650px', right: '-120px' }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge-pill brand" style={{ marginBottom: '16px' }}>
            <MessageSquare size={14} />
            <span>Direct Engineering Consultation</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
            Let&apos;s Build <span className="text-gradient">Something Exceptional</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            Whether you need a full-stack MVP sprint, cloud re-architecture, or senior engineering horsepower, our technical leads are ready.
          </p>
        </div>

        {/* 2-Column Layout: Left Direct Info, Right Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '48px',
            alignItems: 'flex-start',
          }}
          className="contact-layout-grid"
        >
          {/* Direct Contacts & SLA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '36px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '20px' }}>
                Engineering Headquarters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#94A3B8', fontSize: '0.94rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={20} color="#FF5E3A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Main Office:</strong><br />
                    Tech Innovation Center, 400 Howard Street<br />
                    San Francisco, CA 94105
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Mail size={20} color="#E01A8A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Direct Inquiry:</strong><br />
                    <a href="mailto:contact@vamtech.io" style={{ color: '#38BDF8' }}>contact@vamtech.io</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Phone size={20} color="#0066FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Telephone:</strong><br />
                    +1 (800) 582-VAMTECH
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={20} color="#4ADE80" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Response Window:</strong><br />
                    Guaranteed within 4 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px',
                padding: '28px',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '14px', fontWeight: 600 }}>
                What happens after you reach out:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={16} color="#00D2FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>We sign a mutual non-disclosure agreement (NDA).</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={16} color="#00D2FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>A Technical Lead assesses architectural feasibility and tech stack options.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={16} color="#00D2FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>You receive a granular milestone blueprint and budget estimate.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Component */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

    </div>
  );
}
