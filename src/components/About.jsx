import React from 'react';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <section id="About" className="about">
      <div className="section-inner about-grid">
        <Reveal className="about-diagram-wrap">
          <svg className="about-diagram" viewBox="0 0 300 300" aria-hidden="true">
            <circle cx="150" cy="150" r="120" className="ring ring-1" />
            <circle cx="150" cy="150" r="86" className="ring ring-2" />
            <circle cx="150" cy="150" r="50" className="ring ring-3" />
            <circle cx="150" cy="30" r="5" className="node-dot" />
            <circle cx="270" cy="150" r="5" className="node-dot" />
            <circle cx="150" cy="270" r="5" className="node-dot" />
            <circle cx="30" cy="150" r="5" className="node-dot" />
            <circle cx="150" cy="150" r="7" className="node-core" />
          </svg>
        </Reveal>
        <Reveal delay={120}>
          <div className="section-heading">
            <h2 className="section-title">About</h2>
          </div>
          <p className="about-text">
            I am an Intelligent Systems Engineer with a primary focus on engineering smart, scalable <span className="hl">full-stack web applications</span>. 
            While my daily drive is building robust web platforms from frontend to backend, my background allows me to seamlessly integrate advanced capabilities like <span className="hl">Artificial Intelligence</span>, 
            <span className="hl">computer vision models</span>, standalone <span className="hl">robotic frameworks</span>, and secure <span className="hl">networking architectures</span> into cohesive digital solutions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}