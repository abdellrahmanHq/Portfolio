import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, MapPin } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section id="about" className="pt-8 md:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Text Block */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#00F5FF] text-xs font-mono"
          >
            <Terminal size={14} /> Ready to Build
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-blue-500">{profile.name}</span> {/*[cite: 1] */}
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-gray-300"
          >
            {profile.title} {/*[cite: 1] */}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <MapPin size={16} className="text-cyan-400" />
            {profile.location} {/*[cite: 1] */}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {profile.summary} {/*[cite: 1] */}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F5FF] to-blue-600 text-[#0B0F19] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="inline-flex items-center justify-center border border-gray-700 bg-[#161F30]/50 text-white font-medium px-6 py-3 rounded-lg hover:bg-[#161F30] hover:border-gray-600 transition-colors"
            >
              Let's Chat
            </a>
          </motion.div>
        </div>

        {/* Visual Graphic Element Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[360px] mx-auto bg-gradient-to-tr from-[#00F5FF]/10 to-blue-500/5 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5FF]/10 blur-[50px] rounded-full" />
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> System Active
            </div>
            <div className="space-y-2 font-mono text-xs text-cyan-400/80">
              <p>&gt; Core: Neural Networks initialized</p>
              <p>&gt; Environment: React + Vite online</p>
              <p>&gt; Modules: Computer Vision & Full Stack loaded</p> {/*[cite: 1] */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}