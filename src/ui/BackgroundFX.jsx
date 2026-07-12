import React from 'react';

export default function BackgroundFX() {
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