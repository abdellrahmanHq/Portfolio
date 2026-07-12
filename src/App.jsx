import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const ROLES = [
  'Intelligent Systems Engineer',
  'Machine Learning Engineer',
  'Computer Vision Developer',
  'Full-Stack Web Developer',
];

const STATS = [
  { label: 'Built & Deployed', number: 8, prefix: '+', suffix: ' Projects', accent: 'cyan' },
  { label: 'Academic Standing', text: '93.38% GPA', accent: 'amber' },
  { label: 'Based In', text: 'Amman, Jordan', accent: 'violet' },
  { label: 'Experience', number: 2, suffix: ' Key Roles', accent: 'cyan' },
];

const PROJECTS = [
  { id: '01', tag: 'Robotics', title: 'Monitoring Submarine Robot (MSR)', description: 'An autonomous underwater vehicle (AUV) integration utilizing a YOLOv11 computer vision model to detect and classify real-time coral health metrics in marine environments.', link: 'https://github.com/abdellrahmanHq/Monitoring-Submarine-Robot-MSR-' },
  { id: '02', tag: 'Web', title: 'Vnews Website', description: 'A full-stack production news application built with a responsive React frontend ecosystem powered by a structured Ruby on Rails REST API.', link: 'https://github.com/abdellrahmanHq/Vnews' },
  { id: '03', tag: 'AI', title: 'Gemini Chatbot', description: 'An AI-powered conversational application designed with Streamlit, leveraging the Gemini API for highly optimized contextual question-answering systems.', link: 'https://github.com/abdellrahmanHq/gemini-chatbot' },
  { id: '04', tag: 'Web', title: 'E-Commerce Platform', description: 'A scalable web shop application featuring full product lifecycle management, cart states, safe routing protocols, and custom database lookups.', link: 'https://github.com/abdellrahmanHq/E-commerce' },
  { id: '05', tag: 'Web', title: 'School Website Portal', description: 'A multi-user portal tailored for academic structures, simplifying grade registers, tracking dynamic student dashboards, and organizing administration access blocks.', link: 'https://github.com/abdellrahmanHq/school_api' },
  { id: '06', tag: 'Web', title: 'My Blog', description: 'A high-performance personal publishing canvas configured for ultra-fast content loading, structured layouts, and fluid Markdown integration.', link: 'https://github.com/abdellrahmanHq/My-Blog-' },
  { id: '07', tag: 'Web', title: 'Responsive Web App', description: 'A modern framework project targeting mobile-first optimization loops, dynamic fluid columns, and flexible layouts across all screen viewport sizes.', link: 'https://github.com/abdellrahmanHq/responsive-web-app' },
  { id: '08', tag: 'AI', title: 'IMDB Clone App', description: 'A modular cinematic database explorer that consumes public movie APIs to handle lighting-fast client-side sorting, search filters, and detail modals.', link: 'https://github.com/abdellrahmanHq/IMDB-Clone-App' },
];

const FILTERS = ['All', 'AI', 'Robotics', 'Web'];

const SKILL_GROUPS = [
  { category: 'Languages', accent: 'cyan', skills: ['Python', 'Ruby', 'C', 'C++', 'C#', 'JavaScript', 'HTML5', 'CSS'] },
  { category: 'Full Stack Development', accent: 'emerald', skills: ['React', 'Ruby on Rails', 'Node.js', '.NET', 'SQL', 'NoSQL', 'Bootstrap', 'Ajax', 'Git/GitHub'] },
  { category: 'AI', accent: 'violet', skills: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'OpenCV', 'YOLO'] },
  { category: 'Robotics & Hardware', accent: 'amber', skills: ['ROS2', 'Arduino', 'Jetson Nano', 'LEGO Mindstorms', 'MATLAB', 'Linux'] },
];

const SECTIONS = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function useTypewriter(words, typeSpeed = 65, deleteSpeed = 35, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentWord = words[index % words.length];

  useEffect(() => {
    let timeout;
    if (!deleting && sub === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setSub((s) => s + (deleting ? -1 : 1));
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, currentWord, typeSpeed, deleteSpeed, pause]);

  return currentWord.substring(0, sub);
}

function BackgroundFX() {
  return (
    <>
      <div className="bg-base" />
      <div className="bg-grid" />
      <svg className="bg-traces" viewBox="0 0 1440 1400" preserveAspectRatio="none" aria-hidden="true">
        <path className="trace trace-1" d="M-100 220 L 320 220 L 380 280 L 780 280 L 840 340 L 1500 340" />
        <path className="trace trace-2" d="M-100 620 L 240 620 L 300 560 L 700 560 L 760 500 L 1200 500 L 1260 560 L 1600 560" />
        <path className="trace trace-3" d="M1540 900 L 1120 900 L 1060 960 L 660 960 L 600 1020 L -100 1020" />
        <path className="trace trace-4" d="M-100 1240 L 380 1240 L 440 1180 L 900 1180 L 960 1120 L 1540 1120" />
        <circle className="node node-1" cx="380" cy="280" r="4" />
        <circle className="node node-2" cx="760" cy="500" r="4" />
        <circle className="node node-3" cx="600" cy="1020" r="4" />
        <circle className="node node-4" cx="960" cy="1120" r="4" />
      </svg>
      <div className="bg-glow" />
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollHeight - h.clientHeight;
      setProgress(scrolled > 0 ? (h.scrollTop / scrolled) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-prompt">Abdellrahman AlHanaqtah</span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {SECTIONS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`nav-link ${active === item ? 'nav-link-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
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
              src="./src/Personal-image.png"
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

function StatCard({ stat, delay }) {
  const [ref, visible] = useReveal(0.4);
  const count = useCountUp(stat.number ?? 0, visible);
  return (
    <div ref={ref} className={`stat-card reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <p className="stat-label">{stat.label}</p>
      <p className={`stat-value accent-${stat.accent}`}>
        {stat.text ? stat.text : `${stat.prefix || ''}${count}${stat.suffix || ''}`}
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="section-inner">
        <div className="stat-grid">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
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

function Projects() {
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

function Experience() {
  const items = [
    { role: 'Teacher Assistant', company: 'Tafilah Technical University', duration: '1 March 2026 – 1 June 2026', buttonText: 'View Certificate', certLink: 'https://drive.google.com/file/d/16Gd24zZrLPsDxFWytTJw3xJxrMVNq4-W/view?usp=sharing' },
    { role: 'Full Stack Developer Intern', company: 'Vertex Solutions', duration: 'June 2026 – Present', buttonText: 'View Website', certLink: 'https://www.facebook.com/profile.php?id=61584941754895' },
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

function Skills() {
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

function Education() {
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

function Contact() {
  const channels = [
    { label: 'Email', value: 'hanaqtahabdellrahman@gmail.com', href: 'mailto:hanaqtahabdellrahman@gmail.com', external: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ) },
    { label: 'Phone', value: '+962 772 647 298', href: 'tel:+962772647298', external: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.54 2.22a1 1 0 01-.25.84l-1.25 1.25a15.91 15.91 0 006.75 6.75l1.25-1.25a1 1 0 01.84-.25l2.22.54a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    ) },
    { label: 'LinkedIn', value: 'Abdellrahman Al-Hanaqtah', href: 'https://www.linkedin.com/in/abdellrahman-al-hanaqtah-2b34b8242/', external: true, icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    ) },
    { label: 'GitHub', value: 'abdellrahmanHq', href: 'https://github.com/abdellrahmanHq', external: true, icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
    ) },
  ];

  return (
    <section id="Contact" className="contact">
      <div className="section-inner narrow">
        <div className="section-heading">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's discuss system design, integration positions, or technical partnerships.</p>
        </div>
        <div className="contact-grid">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className="contact-item-wrap">
              <a href={c.href} target={c.external ? '_blank' : undefined} rel="noreferrer" className="contact-item">
                <span className="contact-icon">{c.icon}</span>
                <span>
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="status-dot" />
        <span>STATUS: ONLINE</span>
        <span className="footer-sep">·</span>
        <span>© {new Date().getFullYear()} Abdellrahman Abdullah AlHanaqtah</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState('About');

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar active={active} />
      <main>
        <Hero />
        <Dashboard />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}