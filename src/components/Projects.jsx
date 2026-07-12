import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { PROJECTS, FILTERS } from '../constants/portfolioData';

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay} className="project-card-wrap">
      <div className="project-card">
        <span className="bracket bracket-tl small" />
        <span className="bracket bracket-br small" />
        <div className="project-top">
          <span className="project-id">{project.id}</span>
          <span className={`project-tag tag-${project.tag.toLowerCase()}`}>{project.tag}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          GitHub Repository
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="Projects" className="projects">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A deep dive into platforms I have constructed, bridging automated hardware intelligence, deep neural networks, and modern web architectures.</p>
        </div>
        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip ${filter === f ? 'filter-chip-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={(i % 4) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}