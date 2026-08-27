'use client';

import React, { useState } from 'react';
import { ChevronDown, Send, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is the cost of custom software or MVP development at VAMTech?',
    a: 'We offer fixed-scope MVP sprint packages starting at ₹24,999 for startups and growing businesses. For enterprise software, custom platforms, and dedicated full-stack engineering pods (₹49,999/mo / $3,500/mo for global engagements), we provide clear milestone-based pricing with zero hidden fees.',
  },
  {
    q: 'How fast can VAMTech deliver our web app, mobile app, or MVP?',
    a: 'Our rapid MVP sprint timeline is typically 2 to 4 weeks from architecture design to production release. Dedicated engineering pods can be assembled and deployed within 3 to 5 business days.',
  },
  {
    q: 'Do you provide full source code and 100% intellectual property (IP) ownership?',
    a: 'Yes, 100%. Upon milestone completion, all GitHub repositories, source code, database architectures, Figma UI designs, and cloud infrastructure scripts belong entirely to your company under mutual NDA protection.',
  },
  {
    q: 'Is VAMTech based in Lucknow, and do you work with remote/global clients?',
    a: 'Yes! VAMTech is headquartered in Tiwariganj, Lucknow (Uttar Pradesh, India). We work directly with founders and companies across Lucknow, Delhi NCR, Bengaluru, Mumbai, as well as global clients in the US, UK, Middle East, and beyond with seamless async and live sync.',
  },
  {
    q: 'What technologies and frameworks do your developers specialize in?',
    a: 'Our core stack includes Next.js 15, React, React Native, TypeScript, Node.js, Python, FastAPI, PostgreSQL, Redis, Docker, AWS Cloud, LangChain, and OpenAI/Anthropic AI integrations.',
  },
  {
    q: 'How do you handle communication and milestone tracking during development?',
    a: 'You get direct access to senior developers via dedicated WhatsApp and Slack channels. We conduct weekly live sprint demos, maintain clear Kanban boards on Jira/Linear, and provide real-time GitHub commit visibility.',
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quickEmail, setQuickEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail.trim()) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Quick Deck Inquirer',
          email: quickEmail.trim(),
          serviceInterest: 'Capability Deck & Architecture Inquiry',
          message: 'Requested tailored capability deck and technical overview via FAQ Quick Inquiry widget.',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send inquiry.');
      }
      setSent(true);
      setQuickEmail('');
      setTimeout(() => setSent(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setTimeout(() => setError(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-py" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <span className="section-kicker">COMMON QUESTIONS</span>
          <h2 className="section-title-ref">
            Community&apos;s <span className="highlight-pill">questions</span>
          </h2>
          <p className="faq-subtitle">
            Answers to common questions regarding our engineering sprints, IP ownership, and technical workflows.
          </p>
        </div>

        {/* 2-Column Split: Character Graphic & Inquire Box vs Dark Accordion */}
        <div className="faq-split-grid">
          {/* Left Column: Graphic & Quick Ask Box */}
          <div className="faq-left-col">
            {/* 3D Character Illustration Mockup from Reference */}
            <div className="faq-character-card">
              <div className="character-bubble">
                <span className="char-badge">💡 Got questions?</span>
                <p>Our lead architects are ready to answer your technical questions.</p>
              </div>
              <div className="character-avatar-circle">
                <div className="avatar-art">👨‍💻</div>
                <div className="floating-question-mark q-1">?</div>
                <div className="floating-question-mark q-2">?</div>
              </div>
            </div>

            {/* Dark Quick Inquire Card from Reference */}
            <div className="quick-inquire-box">
              <h4>Quick Technical Inquiry</h4>
              <p>Leave your email and our lead team will send you our capability deck and blueprint.</p>

              {sent ? (
                <div className="sent-badge">
                  <CheckCircle size={16} />
                  <span>Inquiry received! We&apos;ll be in touch within 1 business day.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="quick-form">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    className="quick-input"
                  />
                  <button type="submit" disabled={isSubmitting} className="btn-orange quick-submit-btn">
                    <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
              {error && (
                <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>{error}</p>
              )}
            </div>
          </div>

          {/* Right Column: Dark Accordion FAQ List from Reference */}
          <div className="faq-accordion-col">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-accordion-item ${isOpen ? 'item-open' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="faq-toggle-btn"
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <div className="faq-chevron-icon">
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .faq-subtitle {
          font-size: 16px;
          color: #556375;
          max-width: 520px;
          line-height: 1.55;
        }

        .faq-split-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
        }

        .faq-left-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-character-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(10, 25, 45, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .char-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          color: #0055ff;
          margin-bottom: 4px;
        }

        .character-bubble p {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.45;
          max-width: 190px;
        }

        .character-avatar-circle {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #edf4ff, #d8e5ff);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-art {
          font-size: 40px;
        }

        .floating-question-mark {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #0055ff;
          color: #ffffff;
          font-size: 13px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 85, 255, 0.4);
        }

        .q-1 {
          top: -4px;
          right: -4px;
        }

        .q-2 {
          bottom: 0px;
          left: -4px;
          background-color: #00b4d8;
        }

        .quick-inquire-box {
          background-color: #060e1d;
          color: #ffffff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(0, 85, 255, 0.2);
          box-shadow: 0 16px 40px rgba(0, 20, 60, 0.35);
        }

        .quick-inquire-box h4 {
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .quick-inquire-box p {
          font-size: 13px;
          color: #9aa8b8;
          margin-bottom: 18px;
          line-height: 1.45;
        }

        .quick-form {
          display: flex;
          gap: 8px;
        }

        .quick-input {
          flex: 1;
          background: #0f1c34;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 10px 14px;
          color: #ffffff;
          font-size: 13px;
          outline: none;
        }

        .quick-input:focus {
          border-color: #0055ff;
          box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.2);
        }

        .quick-submit-btn {
          padding: 10px 18px;
          font-size: 13px;
          border-radius: 10px;
        }

        .sent-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 13px;
          font-weight: 600;
        }

        /* Right Accordion */
        .faq-accordion-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-accordion-item {
          background-color: #060e1d;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: all 0.22s ease;
        }

        .faq-accordion-item:hover {
          border-color: rgba(0, 85, 255, 0.35);
        }

        .faq-accordion-item.item-open {
          border-color: rgba(0, 85, 255, 0.5);
          background-color: #0c182f;
        }

        .faq-toggle-btn {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-question-text {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .faq-chevron-icon {
          color: #0055ff;
          flex-shrink: 0;
        }

        .faq-answer-content {
          padding: 0 24px 22px;
          font-size: 14px;
          line-height: 1.6;
          color: #a4b3c4;
        }

        @media (max-width: 900px) {
          .faq-split-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
