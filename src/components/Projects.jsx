import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Globe } from 'lucide-react';

export default function Projects({ projects }) {
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' or 'web'

  const currentProjects = activeTab === 'ai' ? projects.aiAndRobotics : projects.fullStackWeb;

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of intelligent system models, robotics architectures, and responsive full-stack applications.
        </p>
      </div>

      {/* Tab Switcher Buttons */}
      <div className="flex justify-center">
        <div className="flex p-1 rounded-xl bg-[#161F30] border border-gray-800">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-[#00F5FF] to-blue-600 text-[#0B0F19] shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Cpu size={16} /> AI & Robotics
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-[#00F5FF] to-blue-600 text-[#0B0F19] shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Globe size={16} /> Full Stack Web
          </button>
        </div>
      </div>

      {/* Projects Grid Container */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {currentProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#161F30]/50 border border-gray-800 hover:border-gray-700 transition-colors shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00F5FF] transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Simulated Project Description Context */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.title === "Monitoring Submarine Robot (MSR)" 
                    ? "Real-time automated systems project built for oceanographic tracking, edge calculations, and environmental mapping."
                    : `Engineered code architectures utilizing optimization protocols, built with clean logic pipelines for the ${project.title}.`}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#0B0F19] text-cyan-400 border border-cyan-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}