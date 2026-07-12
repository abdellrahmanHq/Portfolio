import React from 'react';
import Reveal from '../ui/Reveal';

export default function Contact() {
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