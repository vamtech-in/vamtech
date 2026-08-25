'use client';

import React, { useState } from 'react';
import ContactSection from '@/components/ContactSection';
import { 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Code2, 
  FileCheck 
} from 'lucide-react';

const faqs = [
  {
    q: 'What is your typical project kickoff timeline?',
    a: 'Following our initial technical discovery call and architecture scope sign-off, we typically assemble and deploy our dedicated engineering pod within 5 to 7 business days.',
  },
  {
    q: 'Do you provide full source code and IP ownership?',
    a: 'Yes, 100%. Upon completion and invoice settlement of each sprint milestone, all repositories, custom codebases, design files, and cloud infrastructure scripts belong entirely to your company.',
  },
  {
    q: 'How do you handle project communication and tracking?',
    a: 'We establish a direct Slack/Teams shared channel for daily collaboration and conduct weekly live sprint demos. All tasks are transparently tracked on Jira or Linear with real-time GitHub visibility.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'We offer Dedicated Engineering Pods for ongoing product scaling, Fixed-Scope Milestones for defined MVPs/refactors, and Architecture Retainers for CTO-level oversight.',
  },
  {
    q: 'Can you work with our existing in-house team?',
    a: 'Absolutely. Our senior developers seamlessly integrate with existing Git workflows, CI/CD pipelines, and design systems to augment your team velocity.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Contact Hero Header */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '72px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="tech-grid-pattern"
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <div className="section-badge">Direct Access</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Start a Conversation with Our Technical Leads
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            Connect directly with senior engineers and architects. We respond within 1 business day with an honest technical feasibility assessment.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* FAQ Accordion Section */}
      <section className="section-py" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <div className="section-badge">Frequently Asked Questions</div>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-subtitle">
              Common questions about our engineering sprints, contracts, IP ownership, and communication workflows.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'var(--text-main)',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: 'var(--color-brand-blue)',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
