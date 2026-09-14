'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/siteData';

export default function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalProjects = projectsData.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalProjects ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalProjects - 1 : prev - 1));
  };

  const formatNumber = (num: number) => {
    const formatted = num + 1;
    return formatted < 10 ? `0${formatted}` : `${formatted}`;
  };

  return (
    <section className="featured-works-section" id="works">
      <div className="editorial-container">
        {/* Header with 01 / 07 Slider Controls */}
        <div className="works-header-nav">
          <div>
            <span className="editorial-badge" style={{ marginBottom: '16px' }}>
              Portfolio & Case Studies
            </span>
            <h2 className="section-title">Recent Works</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {/* 01 / 07 Counter Indicator */}
            <div className="works-counter">
              <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                {formatNumber(currentIndex)}
              </span>
              <span> / 0{totalProjects}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="works-nav-buttons">
              <button
                className="works-nav-btn"
                onClick={handlePrev}
                aria-label="Previous Project"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="works-nav-btn"
                onClick={handleNext}
                aria-label="Next Project"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Project Slider Track */}
        <div style={{ overflow: 'hidden', paddingBottom: '16px' }}>
          <div
            className="works-cards-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (50% + 20px)))`,
            }}
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="project-editorial-card"
                data-cursor="project"
              >
                {/* Project Image Box with Hover Zoom & Badge */}
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-element"
                    loading="lazy"
                  />
                  {project.stats && (
                    <div className="project-image-badge">{project.stats}</div>
                  )}
                </div>

                {/* Project Metadata */}
                <div className="project-meta-row">
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-year">{project.year}</span>
                </div>

                <p className="project-card-category">{project.category}</p>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '18px',
                  }}
                >
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="project-services-tags">
                  {project.services.map((svc, idx) => (
                    <span key={idx} className="project-service-tag">
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
