import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="scroll-mt-24 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Industry Work Experience Timeline Block */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="text-[#00F5FF]" size={24} />
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-6 border-l-2 border-gray-800 pl-6 ml-3">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Timeline node icon bubble indicator */}
                <span className={`absolute -left-[35px] top-1.5 w-4 h-4 rounded-full border-4 border-[#0B0F19] ${
                  exp.isCurrent ? 'bg-[#00F5FF]' : 'bg-gray-700'
                }`} />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-cyan-400">{exp.company}</p>
                {exp.hasCertificate && (
                  <span className="inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                    Verified Credential Secure
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Profile Block */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-white">Education & Honors</h2>
          </div>
          <div className="space-y-6 border-l-2 border-gray-800 pl-6 ml-3">
            {education.map((edu, idx) => (
              <div key={idx} className="relative space-y-2">
                <span className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full border-4 border-[#0B0F19] bg-gray-700" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  {edu.period && <span className="text-xs font-mono text-gray-500">{edu.period}</span>}
                </div>
                <p className="text-sm font-medium text-gray-400">{edu.institution}</p>
                {edu.grade && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono mt-1">
                    <Award size={14} /> Cumulative Rank Evaluation: {edu.grade}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}