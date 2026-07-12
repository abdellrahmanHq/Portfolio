import React from 'react';
import Reveal from '../ui/Reveal';
import { SKILL_GROUPS } from '../constants/portfolioData';

export default function Skills() {
  return (
    <section id="Skills" className="skills">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 90} className="skill-card-wrap">
              <div className={`skill-card accent-border-${group.accent}`}>
                <div className={`skill-category accent-${group.accent}`}>{group.category}</div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}