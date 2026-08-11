import React from 'react';
import Reveal from '../ui/Reveal';

export default function Experience() {
  const items = [
    { role: 'Teacher Assistant', company: 'Tafilah Technical University', duration: '1 March 2026 – 1 June 2026', buttonText: 'View Certificate', certLink: 'https://drive.google.com/file/d/16Gd24zZrLPsDxFWytTJw3xJxrMVNq4-W/view?usp=sharing' },
    { role: 'Full Stack Developer Intern', company: 'Vertex Solutions', duration: 'June 2026 – Present', buttonText: 'View Website', certLink: 'https://www.facebook.com/profile.php?id=61584941754895' },
    {role:'IT & Infrastructure Technical Support intern', company:'DC Technology', duration: 'July 2026 – Present', buttonText: 'View Website', certLink: 'https://dc-technologies.net/'},
  ];

  return (
    <section id="Experience" className="experience">
      <div className="section-inner narrow">
        <div className="section-heading">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {items.map((item, i) => (
            <Reveal key={item.role} delay={i * 120} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-duration">{item.duration}</p>
                <a href={item.certLink} target="_blank" rel="noreferrer" className="btn-outline">
                  {item.buttonText}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}