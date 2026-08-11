import React from 'react';
import Reveal from '../ui/Reveal';
import { useTypewriter } from '../hooks/useTypewriter';
import { ROLES } from '../constants/portfolioData';

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <Reveal delay={80}>
            <h1 className="hero-name">Abdellrahman Abdullah AlHanaqtah</h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="hero-role">
              <span>{typed}</span>
              <span className="caret">_</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-desc">
              Dedicated and driven Intelligent Systems Engineer with a strong foundation in machine learning,
              data science, computer vision, robotics, and full-stack web development. I thrive on bridging the
              gap between hardware intelligence and modern web architectures.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <a
                href="https://docs.google.com/uc?export=download&id=1hrvaxDOQVPAzkx7KVSDeGvQbPw_azr09"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <span>Download CV</span>
              </a>
              <a href="#Projects" className="btn btn-ghost">
                <span>View Projects</span>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="hero-portrait-wrap">
          <div className="hero-portrait">
            <span className="bracket bracket-tl" />
            <span className="bracket bracket-tr" />
            <span className="bracket bracket-bl" />
            <span className="bracket bracket-br" />
            <img
              src="/Personal-image2.png"
              alt="Abdellrahman AlHanaqtah"
              referrerPolicy="no-referrer"
            />
            <div className="scan-line" />
          </div>
          <div className="hero-tag">Personal Photo</div>
        </Reveal>
      </div>
    </section>
  );
}