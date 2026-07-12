import React from 'react';
import Reveal from '../ui/Reveal';

export default function Education() {
  const items = [
    { degree: 'Bachelor in Intelligent Systems Engineering', school: 'Tafilah Technical University', detail: '2021 – 2026 · Excellent Grade (93%)', certLink: 'https://drive.google.com/file/d/1czU134_mtFbc0ltI1iJI2ZNnJ2pvS7WZ/view?usp=sharing' },
    { degree: 'Erasmus+ Global Exchange Program', school: 'Technical University of Ostrava', detail: 'International Mobility Semester', certLink: 'https://drive.google.com/file/d/1fiC7v6-onJ-xlUf_MfxqIlCggl6aYkoR/view?usp=sharing' },
    { degree: 'English for Business Interviews', school: 'Berlitz Language Center, Jordan', detail: 'Professional Workshop Certification', certLink: 'https://drive.google.com/file/d/1siFfDkY1LDN6o-r-V5zarV6aLasUnxkT/view?usp=sharing' },
  ];

  return (
    <section id="Education" className="education">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-grid">
          {items.map((item, i) => (
            <Reveal key={item.degree} delay={i * 100} className="education-card-wrap">
              <div className="education-card">
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p className="education-detail">{item.detail}</p>
                <a href={item.certLink} target="_blank" rel="noreferrer" className="btn-outline">
                  View Certificate
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}