'use client';

import React, { useState } from 'react';
import { companyData } from '@/data/company';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Software Development',
    budget: '$10k – $25k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call API route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          serviceInterest: formData.projectType,
          budgetRange: formData.budget,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-py" id="contact" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Build Your Next Digital Solution</h2>
          <p className="section-subtitle">
            Share your project requirements with our engineering team for an honest technical assessment, architectural recommendation, and estimate.
          </p>
        </div>

        {/* 2-Col Layout: Info Sidebar & Live Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Company Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="corporate-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>
                Direct Communication Channels
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>PROJECT INQUIRIES</div>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-brand-blue)' }}
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>CALL OUR TEAM</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>
                      {companyData.contact.phone}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>GLOBAL LOCATIONS</div>
                    <div style={{ fontSize: '14.5px', color: 'var(--text-main)' }}>
                      {companyData.contact.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--color-brand-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>WORKING HOURS</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                      {companyData.contact.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise Card */}
            <div
              style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <ShieldCheck size={28} color="#10b981" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '2px' }}>
                  100% Confidentiality &amp; Fast Response
                </strong>
                We review every technical brief within 1 business day under standard commercial trade confidentiality.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="corporate-card" style={{ padding: '36px' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '10px', color: 'var(--text-main)' }}>
                  Message Received
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our engineering team has received your project details and will be in touch within 1 business day.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      projectType: 'Software Development',
                      budget: '$10k – $25k',
                      message: '',
                    });
                  }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="corporate-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="corporate-input"
                    />
                  </div>

                  <div>
                    <label className="corporate-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="corporate-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="corporate-label">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="corporate-input"
                    />
                  </div>

                  <div>
                    <label className="corporate-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="corporate-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="corporate-label">Project Type *</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="corporate-select"
                    >
                      <option value="Software Development">Software Development</option>
                      <option value="Web & Mobile Development">Web &amp; Mobile Development</option>
                      <option value="AI & Automation">AI &amp; Automation</option>
                      <option value="Cloud & DevOps">Cloud &amp; DevOps</option>
                      <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="corporate-label">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="corporate-select"
                    >
                      <option value="Under $10k">Under $10k (MVP Sprint)</option>
                      <option value="$10k – $25k">$10k – $25k (Standard Build)</option>
                      <option value="$25k – $50k">$25k – $50k (Scalable Platform)</option>
                      <option value="$50k+">$50k+ (Enterprise Solution)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="corporate-label">Project Overview &amp; Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your product goals, timeline, current tech stack, and key deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="corporate-textarea"
                  />
                </div>

                {error && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      color: '#ef4444',
                      fontSize: '13px',
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '15px', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
