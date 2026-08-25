'use client';

import React, { useState } from 'react';
import { JobPosition } from '@/data/careers';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareerApplyModalProps {
  position: JobPosition | null;
  onClose: () => void;
}

export default function CareerApplyModal({ position, onClose }: CareerApplyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    linkedinUrl: '',
    coverNote: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!position) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        {/* Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-brand-blue)', fontWeight: 600, textTransform: 'uppercase' }}>
              {position.department} • {position.type}
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
              Apply for {position.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '28px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '28px 16px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <CheckCircle2 size={28} />
              </div>

              <h4 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                Application Dispatched
              </h4>

              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px' }}>
                Thank you, <strong>{formData.name}</strong>. Our engineering leads will review your portfolio and reach out via email within 2 business days.
              </p>

              <button onClick={onClose} className="btn-primary" style={{ padding: '10px 24px' }}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label className="corporate-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="corporate-input"
                  />
                </div>

                <div>
                  <label className="corporate-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="corporate-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label className="corporate-label">GitHub / Portfolio URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/username"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="corporate-input"
                  />
                </div>

                <div>
                  <label className="corporate-label">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="corporate-input"
                  />
                </div>
              </div>

              <div>
                <label className="corporate-label">Why VAM|Tech? (Short Note) *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about a technical challenge you solved and why you'd like to build with VAM|Tech..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="corporate-textarea"
                />
              </div>

              {error && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontSize: '13px' }}>
                  <AlertCircle size={15} />
                  <span>{error}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={onClose} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ padding: '10px 24px', fontSize: '14px' }}
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
