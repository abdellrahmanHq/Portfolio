import React from 'react';
import { Code2, Wrench } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive breakdown of programming systems, deep learning toolkits, and web frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages Category */}
        <div className="p-8 rounded-2xl bg-[#161F30]/30 border border-gray-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-[#00F5FF]">
              <Code2 size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">Core Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.languages.map((lang) => (
              <span
                key={lang}
                className="px-3.5 py-1.5 bg-[#161F30] text-gray-200 text-sm rounded-xl border border-gray-800 font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies & Core Toolsets Category */}
        <div className="p-8 rounded-2xl bg-[#161F30]/30 border border-gray-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <Wrench size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">Frameworks & Developer Infrastructure</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-[#161F30] text-cyan-400/90 text-sm rounded-xl border border-cyan-500/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}