import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import { STATS } from '../constants/portfolioData';

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

export default function Dashboard() {
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