'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { problemSolutionsData } from '@/data/siteData';

export default function ProblemSolutionSection() {
  return (
    <section className="problem-solution-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="editorial-badge" style={{ marginBottom: '16px' }}>
            Problem Framework
          </span>
          <h2 className="section-title">
            We turn business bottlenecks
            <br />
            into better systems.
          </h2>
        </div>

        {/* 3-Column Table Container */}
        <div className="problem-table-container">
          {/* Header Row */}
          <div className="problem-table-header">
            <div>Problem</div>
            <div>What VAMTech Does</div>
            <div>Result</div>
          </div>

          {/* Data Rows */}
          {problemSolutionsData.map((item) => (
            <div key={item.id} className="problem-table-row">
              {/* Problem Col */}
              <div className="col-problem">
                <span className="col-problem-num">{item.number}</span>
                <span className="col-problem-text">{item.problem}</span>
              </div>

              {/* Solution Col */}
              <div className="col-solution-text">
                {item.solution}
              </div>

              {/* Result Col */}
              <div>
                <span className="col-result-badge">
                  <CheckCircle2 size={15} color="#10B981" />
                  <span>{item.result}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
