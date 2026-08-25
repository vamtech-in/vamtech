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
  MessageSquare
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
  const [submitted, setSubmitted] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 2:00 PM EST');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti using Monad palette
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#2b59d1', '#a0b5eb', '#ff9473', '#a7fccd', '#242424'],
        });
      } catch (err) {
        // Fallback
      }
    }, 800);
  };

  const handleBookMeeting = () => {
    setShowCalendarModal(false);
    alert(`Meeting scheduled with Vamtech Principal Architect for: ${selectedDate}! An invitation has been dispatched.`);
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

          <h3
            style={{
              fontFamily: 'var(--font-untitled-serif)',
              fontSize: '32px',
              fontWeight: 400,
              color: 'var(--color-off-black)',
              marginBottom: '12px',
            }}
          >
            Architecture Scope Received
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-abc-diatype-mono)',
              fontSize: '15px',
              color: 'var(--color-graphite)',
              maxWidth: '520px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            Thank you, <strong>{formData.name || 'Partner'}</strong>. A Principal Systems Architect is reviewing your requirements and will reply within 4 business hours.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowCalendarModal(true)}
              className="btn-primary"
              style={{ fontSize: '13px' }}
            >
              <span>Instant Schedule Discovery Call</span>
              <span className="arrow-glyph">▸</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-ghost"
              style={{ fontSize: '13px' }}
            >
              Submit Another Scope
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
            <label className="monad-label">System Architecture Brief or Bottleneck Description *</label>
            <textarea
              required
              rows={4}
              placeholder="Describe your current tech stack, concurrency goals, latency bottlenecks, or target deadlines..."
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
              <span>Strict NDA Protected • Zero Junior Handoffs</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ fontSize: '14px', padding: '14px 32px' }}
            >
              <span>{isSubmitting ? 'Transmitting Scope...' : 'Transmit Architecture Scope'}</span>
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
            backgroundColor: 'rgba(36, 36, 36, 0.5)',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Calendar size={20} color="var(--color-lake-blue)" />
              <h4 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '22px', fontWeight: 400 }}>
                Select Architecture Discovery Slot
              </h4>
            </div>

            <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-graphite)', marginBottom: '20px' }}>
              Select a 30-minute window for a technical consultation with our Principal Distributed Systems Architect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {[
                'Tomorrow, 10:00 AM EST',
                'Tomorrow, 2:00 PM EST',
                'Thursday, 11:30 AM EST',
                'Thursday, 4:00 PM EST',
              ].map((slot) => (
                <button
                  key={slot}
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
          </div>
        </div>
      )}
    </div>
  );
}
