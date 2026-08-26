'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Zap, Globe, Cpu } from 'lucide-react';

const clientLogos = [
  { name: 'Amazon', symbol: 'amazon' },
  { name: 'Google', symbol: 'google' },
  { name: 'Microsoft', symbol: 'microsoft' },
  { name: 'Spotify', symbol: 'spotify' },
  { name: 'Shopify', symbol: 'shopify' },
  { name: 'Apple', symbol: 'apple' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Vibrant Background Orange Orb from Reference */}
      <div className="hero-orange-orb" />
      <div className="hero-blue-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Display Typography */}
        <div className="hero-typography-container">
          <h1 className="hero-main-title">
            <span className="hero-word">Software</span>
            <span className="hero-word">Transform</span>
            <span className="hero-word">Accelerate</span>
          </h1>

          <p className="hero-subtitle">
            Empower your business with cutting-edge digital solutions &amp; high-performance software engineering.
          </p>

          {/* Client Logos / Tech Strip */}
          <div className="hero-clients-strip">
            {clientLogos.map((client) => (
              <div key={client.name} className="hero-client-item">
                <span className="client-dot" />
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Rounded Visual Showcase Card from Reference */}
        <div className="hero-showcase-frame">
          <div className="hero-image-backdrop">
            {/* Architectural Cityscape / Office View Silhouette Graphic */}
            <div className="cityscape-overlay">
              <div className="window-frame-lines">
                <div className="window-pillar" />
                <div className="window-pillar" />
                <div className="window-pillar" />
              </div>
            </div>

            {/* Floating Glassmorphic Mission Card Overlay */}
            <div className="hero-overlay-card">
              <div className="overlay-badge">
                <span className="badge-pulse" />
                <span>INNOVATION SQUAD</span>
              </div>
              <h3 className="overlay-title">
                Architecting high-scale digital solutions for global industry leaders.
              </h3>
              <p className="overlay-desc">
                From high-throughput cloud backends to immersive mobile interfaces, we build software products that scale effortlessly.
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link href="/projects" className="btn-white-pill">
                  <span>Explore Work</span>
                  <ArrowRight size={15} color="#ff5722" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          padding-top: 30px;
          padding-bottom: 90px;
          overflow: hidden;
        }

        /* Large Glowing Orange Sphere from Reference */
        .hero-orange-orb {
          position: absolute;
          top: -40px;
          right: 5%;
          width: clamp(280px, 32vw, 420px);
          height: clamp(280px, 32vw, 420px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ff784e 0%, #ff5722 55%, #e64a19 90%);
          box-shadow: 0 20px 70px rgba(255, 87, 34, 0.45);
          z-index: 1;
          pointer-events: none;
        }

        .hero-blue-glow {
          position: absolute;
          top: 120px;
          left: -100px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47, 84, 235, 0.16) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-typography-container {
          max-width: 780px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .hero-main-title {
          font-size: clamp(48px, 6.8vw, 84px);
          font-weight: 900;
          letter-spacing: -0.045em;
          line-height: 0.96;
          color: #0c0e12;
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }

        .hero-word {
          display: block;
        }

        .hero-subtitle {
          font-size: clamp(16px, 1.8vw, 19px);
          line-height: 1.55;
          color: #505d6e;
          max-width: 540px;
          margin-bottom: 36px;
          font-weight: 500;
        }

        .hero-clients-strip {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px 32px;
        }

        .hero-client-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 700;
          color: #424d5b;
          letter-spacing: 0.04em;
          text-transform: capitalize;
        }

        .client-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-orange);
        }

        /* Large Frame */
        .hero-showcase-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background-color: #0d0f14;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-image-backdrop {
          position: relative;
          min-height: 440px;
          background: linear-gradient(135deg, #121620 0%, #0a0c10 100%);
          display: flex;
          align-items: flex-end;
          padding: clamp(24px, 4vw, 48px);
          overflow: hidden;
        }

        .cityscape-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to top, rgba(10, 12, 16, 0.95) 10%, rgba(10, 12, 16, 0.4) 100%);
          background-size: 24px 24px, 100% 100%;
          opacity: 0.9;
        }

        .window-frame-lines {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: space-evenly;
        }

        .window-pillar {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.2) 100%);
        }

        .hero-overlay-card {
          position: relative;
          z-index: 2;
          max-width: 560px;
          background: rgba(18, 22, 30, 0.78);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 20px;
          padding: clamp(24px, 3.5vw, 36px);
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 999px;
          background-color: rgba(255, 87, 34, 0.15);
          border: 1px solid rgba(255, 87, 34, 0.3);
          color: #ff7043;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ff5722;
        }

        .overlay-title {
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .overlay-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #a4b3c4;
        }

        @media (max-width: 768px) {
          .hero-orange-orb {
            top: 20px;
            right: -60px;
            width: 220px;
            height: 220px;
          }
          .hero-main-title {
            font-size: 46px;
          }
          .hero-image-backdrop {
            min-height: 380px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}

