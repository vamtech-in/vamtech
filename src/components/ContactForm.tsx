'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle, 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  Mail, 
  Building2, 
  MessageSquare,
  ShieldCheck
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

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5E3A', '#E01A8A', '#7B2CBF', '#0066FF'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 900);
  };

  const handleBookMeeting = () => {
    setShowCalendarModal(false);
    alert(`Meeting scheduled with Vamtech Principal Architect for: ${selectedDate}! An invitation has been dispatched.`);
  };

  return (
    <div style={{ position: 'relative' }}>
      {submitted ? (
        <div
          className="glass-card"
          style={{
            padding: '48px',
            textAlign: 'center',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)',
            border: '1px solid rgba(74, 222, 128, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(74, 222, 128, 0.15)',
              color: '#4ADE80',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: '2px solid rgba(74, 222, 128, 0.4)',
            }}
          >
            <CheckCircle size={38} />
          </div>
          <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '12px' }}>
            Inquiry Dispatched Successfully!
          </h3>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 28px', lineHeight: '1.7' }}>
            Thank you, <strong style={{ color: '#F472B6' }}>{formData.name || 'there'}</strong>. A Principal Engineer at Vamtech will review your architecture requirements and reply within <strong>4 business hours</strong>.
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '540px',
              margin: '0 auto 32px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94A3B8' }}>Service Target:</span>
              <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{formData.serviceInterest}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94A3B8' }}>Budget Tier:</span>
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>{formData.budgetRange}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94A3B8' }}>Delivery Timeline:</span>
              <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{formData.timeline}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowCalendarModal(true)}
              className="btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <Calendar size={18} />
              <span>Directly Book 30-Min Architecture Discovery</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
              style={{ padding: '12px 24px' }}
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="glass-card"
          style={{
            padding: '40px',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(14, 20, 36, 0.85) 0%, rgba(8, 12, 22, 0.95) 100%)',
            border: '1px solid rgba(224, 26, 138, 0.3)',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <div className="badge-pill brand" style={{ marginBottom: '10px' }}>
              <Sparkles size={14} />
              <span>Guaranteed 4-Hour Response Window</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Start Your Engineering Engagement
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem' }}>
              Fill in your project details. We will execute an initial architectural feasibility assessment free of charge.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-grid">
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                <User size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                Work Email *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                <Mail size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
              </div>
            </div>

            {/* Company */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                Company / Organization
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
                <Building2 size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
              </div>
            </div>

            {/* Primary Service */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                Area of Interest
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#0E1424',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
              >
                <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                <option value="Cloud Modernization & DevOps">Cloud Modernization & DevOps</option>
                <option value="AI & Agentic Automation">AI & Agentic Automation</option>
                <option value="High-Performance Web & Mobile Apps">High-Performance Web & Mobile Apps</option>
                <option value="Fractional CTO & Advisory">Fractional CTO & Architecture Retainer</option>
              </select>
            </div>
          </div>

          {/* Budget Range Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '8px' }}>
              Estimated Project Budget Range
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }} className="budget-grid">
              {['< $20k', '$20k – $50k', '$50k – $100k', '$100k+'].map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setFormData({ ...formData, budgetRange: tier })}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: formData.budgetRange === tier ? 'rgba(224, 26, 138, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    border: formData.budgetRange === tier ? '1px solid #E01A8A' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: formData.budgetRange === tier ? '#FFFFFF' : '#94A3B8',
                    transition: 'all 0.2s',
                  }}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
              Project Summary & Technical Requirements
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell us what you're looking to build or optimize (e.g. tech stack, current bottlenecks, launch timeline)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '0.92rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} color="#4ADE80" />
              <span>Strict NDA Protected • Zero spam</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ padding: '13px 32px', minWidth: '200px' }}
            >
              {isSubmitting ? (
                <span>Transmitting Spec...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Calendar Booking Simulation Modal */}
      {showCalendarModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3, 6, 15, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            padding: '20px',
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '520px',
              padding: '36px',
              borderRadius: '24px',
              background: '#0B101E',
              border: '1px solid rgba(0, 102, 255, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(0, 102, 255, 0.15)', color: '#38BDF8' }}>
                <Calendar size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF' }}>Schedule 30-Min Discovery</h3>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '24px' }}>
              Select a preferred time slot with our Senior Engineering Lead for your architecture review.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                'Tomorrow, 10:00 AM EST',
                'Tomorrow, 2:00 PM EST',
                'Thursday, 11:30 AM EST',
                'Friday, 3:00 PM EST',
              ].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedDate(slot)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    textAlign: 'left',
                    background: selectedDate === slot ? 'rgba(0, 102, 255, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    border: selectedDate === slot ? '1px solid #0066FF' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: selectedDate === slot ? '#FFFFFF' : '#94A3B8',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.9rem',
                  }}
                >
                  <span>{slot}</span>
                  {selectedDate === slot && <CheckCircle size={16} color="#00D2FF" />}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={handleBookMeeting}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                Confirm Video Call
              </button>
              <button
                type="button"
                onClick={() => setShowCalendarModal(false)}
                className="btn-secondary"
                style={{ padding: '10px 18px' }}
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
