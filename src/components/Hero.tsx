'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, CircleCheck, Cloud, Cpu, Database, Sparkles } from 'lucide-react';

const capabilities = [
  { label: 'Product engineering', icon: <Cpu size={15} /> },
  { label: 'AI & automation', icon: <Sparkles size={15} /> },
  { label: 'Cloud at scale', icon: <Cloud size={15} /> },
];

export default function Hero() {
  const [activeView, setActiveView] = useState<'build' | 'automate' | 'scale'>('build');

  const content = {
    build: { label: 'PRODUCT BUILD', metric: '02 weeks', detail: 'from discovery to a tested product direction', color: '#65b7ff' },
    automate: { label: 'AI AUTOMATION', metric: '42%', detail: 'less time spent on repetitive operations', color: '#a99cff' },
    scale: { label: 'CLOUD SYSTEMS', metric: '99.9%', detail: 'uptime-ready architecture and observability', color: '#49e0c2' },
  }[activeView];

  return (
    <section className="hero-shell tech-grid-pattern">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-container">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="pulse-dot" /> Technology partner for ambitious teams</div>
          <h1>From big ideas to <span>digital products that perform.</span></h1>
          <p className="hero-description">
            VAMTech designs, builds and scales custom software, AI workflows and cloud systems that help businesses move with confidence.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary hero-primary"><span>Start a project</span><ArrowRight size={17} /></Link>
            <Link href="/projects" className="hero-text-link">See our work <ChevronRight size={16} /></Link>
          </div>
          <div className="hero-proof">
            <span><CircleCheck size={16} /> Clear communication</span>
            <span><CircleCheck size={16} /> Built for scale</span>
            <span><CircleCheck size={16} /> Full IP ownership</span>
          </div>
        </div>

        <div className="hero-product" aria-label="VAMTech delivery capabilities">
          <div className="hero-product-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>vamtech / delivery-os</span>
            <span className="hero-status"><b /> ONLINE</span>
          </div>
          <div className="hero-product-body">
            <div className="hero-product-heading">
              <div><span className="hero-product-kicker">YOUR DIGITAL BUILD</span><h2>One team. Every capability.</h2></div>
              <div className="hero-mark">V</div>
            </div>
            <div className="hero-view-tabs" role="tablist" aria-label="Capabilities">
              {(['build', 'automate', 'scale'] as const).map((view) => (
                <button key={view} onClick={() => setActiveView(view)} className={activeView === view ? 'active' : ''} role="tab" aria-selected={activeView === view}>
                  {view === 'build' ? 'Build' : view === 'automate' ? 'Automate' : 'Scale'}
                </button>
              ))}
            </div>
            <div className="hero-metric-card">
              <span className="hero-metric-label">{content.label}</span>
              <strong style={{ color: content.color }}>{content.metric}</strong>
              <p>{content.detail}</p>
              <div className="hero-chart"><span /><span /><span /><span /><span className="highest" /><span /><span /></div>
            </div>
            <div className="hero-capabilities">
              {capabilities.map((capability) => <div key={capability.label}><span>{capability.icon}</span>{capability.label}<Check size={14} /></div>)}
            </div>
            <div className="hero-activity"><Database size={15} /><span>Architecture, UX and engineering in one transparent workflow.</span></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-shell { position: relative; overflow: hidden; padding: 86px 0 104px; background: linear-gradient(145deg, #fafdff 0%, #edf5ff 62%, #f8fbff 100%); }
        .hero-container { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); align-items: center; gap: clamp(42px, 7vw, 96px); }
        .hero-orb { position: absolute; border-radius: 999px; pointer-events: none; filter: blur(2px); }
        .hero-orb-one { width: 510px; height: 510px; top: -290px; right: -170px; background: radial-gradient(circle, rgba(42,136,255,.19), rgba(42,136,255,0) 68%); }
        .hero-orb-two { width: 420px; height: 420px; bottom: -280px; left: -130px; background: radial-gradient(circle, rgba(101,174,255,.16), rgba(101,174,255,0) 69%); }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 24px; padding: 7px 12px; border: 1px solid rgba(18,100,232,.16); border-radius: 999px; background: rgba(255,255,255,.77); color: #0751c7; font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .hero-copy h1 { max-width: 700px; margin-bottom: 24px; font-size: clamp(46px, 5.3vw, 70px); font-weight: 800; letter-spacing: -.065em; line-height: .99; }
        .hero-copy h1 span { background: linear-gradient(120deg, #0762df, #3199fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-description { max-width: 590px; margin-bottom: 34px; font-size: clamp(17px, 1.65vw, 20px); line-height: 1.62; }
        .hero-actions { display: flex; align-items: center; gap: 26px; flex-wrap: wrap; margin-bottom: 32px; }
        .hero-primary { min-height: 53px; padding-inline: 23px; font-size: 15px; }
        .hero-text-link { display: inline-flex; align-items: center; gap: 3px; color: #0a4eaf; font-size: 14px; font-weight: 750; }
        .hero-text-link:hover { color: #073f8e; }
        .hero-proof { display: flex; flex-wrap: wrap; gap: 12px 21px; color: #53657d; font-size: 12px; font-weight: 600; }
        .hero-proof span { display: inline-flex; align-items: center; gap: 6px; }.hero-proof :global(svg) { color: #0f75e8; }
        .hero-product { overflow: hidden; border: 1px solid rgba(116,176,255,.34); border-radius: 22px; background: linear-gradient(145deg, #061b40, #082657); box-shadow: 0 32px 72px rgba(7,38,87,.28), 0 0 0 9px rgba(255,255,255,.45); color: #fff; }
        .hero-product-topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 46px; padding: 0 16px; border-bottom: 1px solid rgba(191,221,255,.12); background: rgba(1,13,34,.22); color: #8da8cc; font-family: var(--font-mono); font-size: 10px; }
        .window-dots { display: flex; gap: 5px; }.window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #49719e; }.window-dots i:first-child { background: #ee6c69; }.window-dots i:nth-child(2) { background: #f4bd63; }.window-dots i:last-child { background: #54d59a; }
        .hero-status { display: inline-flex; align-items: center; gap: 6px; color: #71e0b5; }.hero-status b { width: 6px; height: 6px; border-radius: 50%; background: #71e0b5; box-shadow: 0 0 0 4px rgba(113,224,181,.1); }
        .hero-product-body { padding: clamp(21px, 3vw, 31px); }.hero-product-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }.hero-product-kicker, .hero-metric-label { color: #8eafd8; font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: .12em; }.hero-product-heading h2 { margin-top: 7px; color: #fff; font-size: clamp(22px, 2.3vw, 30px); letter-spacing: -.045em; }.hero-mark { display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid rgba(146,202,255,.34); border-radius: 12px; background: linear-gradient(145deg, #1777ee, #51aaff); color: #fff; font-size: 21px; font-weight: 900; }
        .hero-view-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin: 28px 0 16px; padding: 4px; border-radius: 10px; background: rgba(0,11,33,.36); }.hero-view-tabs button { min-height: 34px; border: 0; border-radius: 7px; background: transparent; color: #8ba6cc; cursor: pointer; font-size: 12px; font-weight: 700; transition: .2s ease; }.hero-view-tabs button.active { background: rgba(93,164,255,.19); color: #fff; box-shadow: inset 0 0 0 1px rgba(124,183,255,.17); }
        .hero-metric-card { padding: 20px; border: 1px solid rgba(146,202,255,.16); border-radius: 14px; background: linear-gradient(135deg, rgba(21,70,139,.56), rgba(7,33,77,.3)); }.hero-metric-card strong { display: block; margin: 8px 0 3px; font-size: 34px; letter-spacing: -.06em; }.hero-metric-card p { color: #a9bedc; font-size: 12px; }.hero-chart { display: flex; align-items: end; gap: 6px; height: 40px; margin-top: 14px; }.hero-chart span { width: 100%; border-radius: 3px 3px 1px 1px; background: linear-gradient(#3d96ff, rgba(61,150,255,.19)); }.hero-chart span:nth-child(1) { height: 37%; }.hero-chart span:nth-child(2) { height: 53%; }.hero-chart span:nth-child(3) { height: 45%; }.hero-chart span:nth-child(4) { height: 72%; }.hero-chart span.highest { height: 100%; background: linear-gradient(#76c0ff, rgba(61,150,255,.23)); }.hero-chart span:nth-child(6) { height: 68%; }.hero-chart span:nth-child(7) { height: 86%; }
        .hero-capabilities { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-top: 16px; }.hero-capabilities div { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 6px; min-width: 0; padding: 10px 7px; border: 1px solid rgba(146,202,255,.11); border-radius: 9px; color: #c6d8f0; font-size: 10px; line-height: 1.25; }.hero-capabilities div > span { color: #68b3ff; }.hero-capabilities :global(svg:last-child) { color: #51d1aa; }
        .hero-activity { display: flex; align-items: center; gap: 8px; margin-top: 16px; color: #91add2; font-size: 11px; }.hero-activity :global(svg) { color: #73b8ff; }
        @media (max-width: 900px) { .hero-shell { padding-block: 66px 78px; }.hero-container { grid-template-columns: 1fr; }.hero-copy { text-align: center; }.hero-copy h1, .hero-description { margin-left: auto; margin-right: auto; }.hero-actions, .hero-proof { justify-content: center; }.hero-product { width: min(100%, 600px); margin-inline: auto; } }
        @media (max-width: 500px) { .hero-shell { padding-top: 52px; }.hero-copy h1 { font-size: 43px; }.hero-actions { gap: 15px; }.hero-primary { width: 100%; }.hero-product-body { padding: 18px; }.hero-product-topbar span:not(.hero-status) { display: none; }.hero-capabilities { grid-template-columns: 1fr; }.hero-capabilities div { padding: 9px 11px; }.hero-proof { display: grid; justify-content: start; text-align: left; } }
      `}</style>
    </section>
  );
}
