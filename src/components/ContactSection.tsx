'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Web & Mobile App',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.subject,
          serviceInterest: formData.projectType,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry.');

      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 90,
          spread: 75,
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
    <section className="section-py" id="contact" style={{ position: 'relative' }}>
      <div className="container">
        {/* Exact 2-Card Layout from Reference Image 1 */}
        <div className="contact-reference-grid">
          {/* LEFT SIDE: White Card with Orange Accent Border + Social Doodle */}
          <div className="contact-left-wrapper">
            <div className="contact-white-card">
              <h2 className="contact-card-title">
                Contact <span className="highlight-pill">us</span>
              </h2>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <div className="contact-icon">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:contactvamtech@gmail.com" className="contact-detail-text">
                    contactvamtech@gmail.com
                  </a>
                </div>

                <div className="contact-detail-row" style={{ alignItems: 'flex-start' }}>
                  <div className="contact-icon" style={{ marginTop: '2px' }}>
                    <Phone size={16} />
                  </div>
                  <div className="contact-detail-text" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href="tel:+917237900686" style={{ color: 'inherit' }}>(+91) 72379 00686</a>
                    <a href="tel:+917307386706" style={{ color: 'inherit' }}>(+91) 73073 86706</a>
                    <a href="tel:+919170601664" style={{ color: 'inherit' }}>(+91) 9170601664</a>
                    <a href="tel:+916394770500" style={{ color: 'inherit' }}>(+91) 63947 70500</a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon">
                    <MapPin size={16} />
                  </div>
                  <span className="contact-detail-text">
                  Tiwariganj, Lucknow, Uttar Pradesh (226028), India 
                  </span>
                </div>
              </div>

              {/* Bottom Orange Line Accent from Reference Image 1 */}
              <div className="contact-bottom-orange-line" />
            </div>

            {/* Social Follow Doodle Area from Reference Image 1 */}
            <div className="social-connect-area">
              <div className="social-connect-copy">
                <strong>To connect with us</strong>
                <p>Don&apos;t forget to follow us on</p>
              </div>

              {/* Hand-drawn Curved Arrow SVG */}
              <div className="doodle-arrow-container">
                <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 10C25 35 45 35 60 12"
                    stroke="#1e242c"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="1 0"
                  />
                  <path
                    d="M52 14L60 12L58 20"
                    stroke="#1e242c"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Social Icons Stack */}
              <div className="social-icons-stack">
                <a href="https://linkedin.com/company/vamtech" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://twitter.com/vamtech_io" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://instagram.com/vamtech.in" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Deep Black Card with Outlined Fieldsets from Reference Image 1 */}
          <div className="contact-dark-card-wrapper">
            <div className="contact-dark-card">
              {/* Top Right Decorative White Brush Strokes from Reference */}
              <div className="brush-strokes-decor">
                <span />
                <span />
                <span />
              </div>

              <h3 className="dark-card-title">Let&apos;s discuss your project</h3>

              {isSubmitted ? (
                <div className="contact-success-state">
                  <CheckCircle2 size={48} color="#0055ff" />
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>Our lead technical team will review your brief and get back within 1 business day.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-orange" style={{ marginTop: '16px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-fieldset-form">
                  {/* Row 1: Full Name & E-Mail */}
                  <div className="form-row-2col">
                    <fieldset className="fieldset-field">
                      <legend>Full Name</legend>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="fieldset-input"
                      />
                    </fieldset>

                    <fieldset className="fieldset-field">
                      <legend>E-Mail</legend>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="fieldset-input"
                      />
                    </fieldset>
                  </div>

                  {/* Row 2: Subject & Type of the Project */}
                  <div className="form-row-2col">
                    <fieldset className="fieldset-field">
                      <legend>Subject</legend>
                      <input
                        type="text"
                        required
                        placeholder="New SaaS Platform"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="fieldset-input"
                      />
                    </fieldset>

                    <fieldset className="fieldset-field">
                      <legend>Type of the Project</legend>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="fieldset-select"
                      >
                        <option value="Web & Mobile App">Web &amp; Mobile App</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="AI & Automation Workflow">AI &amp; Automation Workflow</option>
                        <option value="Cloud Architecture & DevOps">Cloud &amp; DevOps</option>
                        <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                      </select>
                    </fieldset>
                  </div>

                  {/* Row 3: Describe your Project */}
                  <fieldset className="fieldset-field">
                    <legend>Describe your Project</legend>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your product goals, timeline, and key requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="fieldset-textarea"
                    />
                  </fieldset>

                  {error && (
                    <div className="form-error-banner">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button type="submit" disabled={isSubmitting} className="btn-orange contact-btn">
                      <span>{isSubmitting ? 'Sending Brief...' : 'Contact Us'}</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}

              <div className="bottom-orange-particles">
                <span />
                <span />
                <span />
              </div>

              <div className="badge-100-position">
                <div className="badge-circle-100">
                  <span>100%</span>
                  <span style={{ fontSize: '10px', fontWeight: 700 }}>IP OWN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-reference-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 36px;
          align-items: flex-start;
        }

        .contact-left-wrapper {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .contact-white-card {
          position: relative;
          background-color: #ffffff;
          border-radius: 20px;
          padding: clamp(32px, 4vw, 48px);
          box-shadow: 0 14px 40px rgba(10, 25, 45, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.9);
          overflow: hidden;
        }

        .contact-card-title {
          font-size: clamp(34px, 4vw, 44px);
          font-weight: 900;
          color: #0c0e12;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-detail-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-icon {
          color: #1e242c;
          flex-shrink: 0;
        }

        .contact-detail-text {
          font-size: 14.5px;
          font-weight: 600;
          color: #2b3542;
          line-height: 1.45;
        }

        .contact-bottom-orange-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 6px;
          background-color: #0055ff;
        }

        .social-connect-area {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          gap: 16px;
        }

        .social-connect-copy strong {
          display: block;
          font-size: 16px;
          font-weight: 800;
          color: #0c0e12;
          letter-spacing: -0.02em;
        }

        .social-connect-copy p {
          font-size: 13.5px;
          color: #556375;
          margin: 0;
        }

        .doodle-arrow-container {
          display: flex;
          align-items: center;
        }

        .social-icons-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: #0c0e12;
        }

        .social-icons-stack a {
          color: #0c0e12;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .social-icons-stack a:hover {
          color: #0055ff;
          transform: translateX(2px);
        }

        .contact-dark-card-wrapper {
          position: relative;
        }

        .contact-dark-card {
          position: relative;
          background-color: #060e1d;
          color: #ffffff;
          border-radius: 24px;
          padding: clamp(36px, 4.5vw, 54px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
          overflow: hidden;
        }

        .brush-strokes-decor {
          position: absolute;
          top: 18px;
          right: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transform: rotate(45deg);
        }

        .brush-strokes-decor span {
          height: 3px;
          background-color: #ffffff;
          border-radius: 2px;
          opacity: 0.85;
        }

        .brush-strokes-decor span:nth-child(1) { width: 28px; }
        .brush-strokes-decor span:nth-child(2) { width: 36px; }
        .brush-strokes-decor span:nth-child(3) { width: 20px; }

        .dark-card-title {
          font-size: clamp(24px, 2.8vw, 32px);
          font-weight: 900;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin-bottom: 28px;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 8px;
          background-color: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .form-submit-row {
          margin-top: 10px;
        }

        .contact-btn {
          padding: 14px 30px;
          font-size: 14.5px;
          border-radius: 10px;
        }

        .bottom-orange-particles {
          position: absolute;
          bottom: 16px;
          left: 24px;
          display: flex;
          gap: 6px;
        }

        .bottom-orange-particles span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #0055ff;
        }

        .badge-100-position {
          position: absolute;
          bottom: -28px;
          right: -16px;
          z-index: 10;
        }

        .contact-success-state {
          text-align: center;
          padding: 40px 16px;
        }

        .contact-success-state h4 {
          font-size: 22px;
          font-weight: 800;
          margin: 16px 0 8px;
        }

        .contact-success-state p {
          color: #9aa8b8;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .contact-reference-grid {
            grid-template-columns: 1fr;
          }
          .form-row-2col {
            grid-template-columns: 1fr;
          }
          .badge-100-position {
            bottom: -16px;
            right: 16px;
          }
        }
      `}</style>
    </section>
  );
}
