'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Mail, 
  User, 
  Building2, 
  MessageSquare,
  AlertCircle,
  Check
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    serviceInterest: 'Custom Enterprise Software',
    budgetRange: '$20k – $50k',
    timeline: 'Within 1–2 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [leadRefId, setLeadRefId] = useState<string>('');
  
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 2:00 PM EST');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to transmit architecture scope.');
      }

      setLeadRefId(data.leadId || `LEAD-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);

      // Trigger celebratory confetti using Monad palette
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2b59d1', '#a0b5eb', '#ff9473', '#a7fccd', '#242424'],
        });
      } catch (err) {
        // Fallback
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookMeeting = () => {
    setBookingConfirmed(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#2b59d1', '#a7fccd'],
      });
    } catch (e) {}
  };

  return (
    <div
      className="monad-card"
      style={{
        backgroundColor: '#ffffff',
        padding: '48px 40px',
      }}
    >
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(167, 252, 205, 0.3)',
              color: '#0b5930',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <CheckCircle2 size={32} />
          </div>

          <span
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-parchment)',
              border: '1px solid var(--color-ash)',
              fontSize: '11px',
              fontFamily: 'var(--font-abc-diatype-mono)',
              color: 'var(--color-lake-blue)',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Ref: {leadRefId} • Inquiry Submitted
          </span>

          <h3
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: '32px',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              marginBottom: '12px',
            }}
          >
            Project Inquiry Received
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '15px',
              color: 'var(--color-graphite)',
              maxWidth: '540px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            Thank you, <strong>{formData.name || 'Partner'}</strong>. Our team is reviewing your project details and will respond within 1 business day with an honest feasibility assessment.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setBookingConfirmed(false);
                setShowCalendarModal(true);
              }}
              className="btn-primary"
              style={{ fontSize: '13px' }}
            >
              <span>Instant Schedule Discovery Call</span>
              <span className="arrow-glyph">▸</span>
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  role: '',
                  serviceInterest: 'Custom Enterprise Software',
                  budgetRange: '$20k – $50k',
                  timeline: 'Within 1–2 Months',
                  message: '',
                });
              }}
              className="btn-ghost"
              style={{ fontSize: '13px' }}
            >
              Submit Another Scope
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {errorMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                backgroundColor: 'rgba(243, 122, 10, 0.12)',
                border: '1px solid var(--color-crimson)',
                color: '#993a00',
                fontSize: '13px',
                fontFamily: 'var(--font-abc-diatype-mono)',
              }}
            >
              <AlertCircle size={18} color="var(--color-crimson)" style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
            <div>
              <label className="monad-label">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Elena Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="monad-input"
              />
            </div>

            <div>
              <label className="monad-label">Work Email *</label>
              <input
                type="email"
                required
                placeholder="elena@enterprise.io"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="monad-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
            <div>
              <label className="monad-label">Company / Organization</label>
              <input
                type="text"
                placeholder="Vance Logistics"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="monad-input"
              />
            </div>

            <div>
              <label className="monad-label">Your Role / Title</label>
              <input
                type="text"
                placeholder="VP of Engineering / Founder"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="monad-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
            <div>
              <label className="monad-label">Primary Capability Area</label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="monad-select"
              >
                <option value="Custom Enterprise Software">Custom Enterprise Software (Go / Microservices)</option>
                <option value="Cloud Modernization & DevOps">Cloud Modernization & Kubernetes</option>
                <option value="AI Engineering & RAG">AI Engineering & Vector RAG</option>
                <option value="Next.js Web Applications">Next.js Web Applications</option>
                <option value="Fractional CTO & Architecture Audit">Fractional CTO & Architecture Audit</option>
              </select>
            </div>

            <div>
              <label className="monad-label">Estimated Budget Tier</label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="monad-select"
              >
                <option value="Under $20k">Under $20k (Sprint Audit)</option>
                <option value="$20k – $50k">$20k – $50k (MVP Sprint)</option>
                <option value="$50k – $150k">$50k – $150k (Dedicated Squad)</option>
                <option value="$150k+">$150k+ (Enterprise Overhaul)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="monad-label">Preferred Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="monad-select"
            >
              <option value="ASAP">ASAP</option>
              <option value="Within 1–2 Months">Within 1–2 Months</option>
              <option value="Within 3–6 Months">Within 3–6 Months</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>
          </div>

          <div>
            <label className="monad-label">Tell us about your project *</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project, goals, current tech stack, and any key deadlines..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="monad-textarea"
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-smoke)', fontSize: '12px' }}>
              <ShieldCheck size={14} color="var(--color-lake-blue)" />
              <span>Protected & Confidential</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ fontSize: '14px', padding: '14px 32px' }}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Project Inquiry'}</span>
              <span className="arrow-glyph">▸</span>
            </button>
          </div>
        </form>
      )}

      {/* Calendar Discovery Modal */}
      {showCalendarModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(36, 36, 36, 0.55)',
            backdropFilter: 'blur(8px)',
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setShowCalendarModal(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-ash)',
              borderRadius: '28px',
              padding: '36px',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {bookingConfirmed ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(167, 252, 205, 0.3)',
                    color: '#0b5930',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <Check size={28} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '24px', fontWeight: 400, marginBottom: '8px' }}>
                  Discovery Call Confirmed
                </h4>
                <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.5 }}>
                  We&apos;ll follow up to schedule your call for <strong>{selectedDate}</strong>. Check your email for confirmation details.
                </p>
                <button
                  onClick={() => setShowCalendarModal(false)}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Calendar size={20} color="var(--color-lake-blue)" />
                  <h4 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400 }}>
                    Select Architecture Discovery Slot
                  </h4>
                </div>

                <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-graphite)', marginBottom: '20px' }}>
                  Select a preferred 30-minute window and we&apos;ll confirm via email.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {[
                    'Tomorrow, 10:00 AM',
                    'Tomorrow, 2:00 PM',
                    'Day after tomorrow, 11:30 AM',
                    'Day after tomorrow, 4:00 PM',
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className="pipeline-node-tag"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        backgroundColor: selectedDate === slot ? 'var(--color-off-black)' : 'var(--color-parchment)',
                        color: selectedDate === slot ? '#ffffff' : 'var(--color-off-black)',
                        borderColor: selectedDate === slot ? 'var(--color-off-black)' : 'var(--color-ash)',
                        cursor: 'pointer',
                        padding: '12px 18px',
                        fontSize: '13px',
                      }}
                    >
                      <span>{slot}</span>
                      {selectedDate === slot && <span style={{ color: 'var(--color-mint)' }}>✓</span>}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleBookMeeting}
                    className="btn-primary"
                    style={{ flex: 1, fontSize: '13px' }}
                  >
                    <span>Confirm Invitation</span>
                    <span className="arrow-glyph">▸</span>
                  </button>
                  <button
                    onClick={() => setShowCalendarModal(false)}
                    className="btn-ghost"
                    style={{ fontSize: '13px' }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
