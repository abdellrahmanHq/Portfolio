import React, { useState } from 'react';
import { SECTIONS } from '../constants/portfolioData';

export default function Navbar({ active }) {
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