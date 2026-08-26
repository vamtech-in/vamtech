import React from 'react';
import { whyUsData } from '@/data/whyUs';
import { 
  Sparkles, 
  Layers, 
  Code2, 
  ShieldCheck, 
  MessageSquare, 
  Handshake, 
  CheckCircle2 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={22} />,
  Layers: <Layers size={22} />,
  Code2: <Code2 size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  Handshake: <Handshake size={22} />,
};

export default function WhyVamTech() {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-dark)', color: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge section-badge-dark">Engineering Standards</div>
          <h2 className="section-title section-title-dark">Why High-Growth Companies Choose VAMTech</h2>
          <p className="section-subtitle section-subtitle-dark">
            We operate as your dedicated technical arm, delivering enterprise-grade code craftsmanship, scalable cloud architectures, and transparent communication.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {whyUsData.map((pillar) => (
            <div
              key={pillar.id}
              className="corporate-card-dark"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                {/* Header Icon + Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(37, 99, 235, 0.15)',
                      color: 'var(--color-brand-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[pillar.icon] || <Sparkles size={22} />}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: '#94a3b8',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {pillar.accentBadge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#94a3b8',
                    marginBottom: '20px',
                  }}
                >
                  {pillar.shortDescription}
                </p>
              </div>

              {/* Bullet Points */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {pillar.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12.5px',
                      color: '#cbd5e1',
                    }}
                  >
                    <CheckCircle2 size={13} color="var(--color-brand-cyan)" style={{ flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
