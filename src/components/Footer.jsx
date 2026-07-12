import React from 'react';

export default function Footer() {
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