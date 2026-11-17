import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Sparkles, 
  CheckCircle, 
  Zap, 
  Layers, 
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightCards = [
    {
      icon: <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "Reusable Component Architecture",
      desc: "Creating scalable, clean, modular UI components in React.js with optimized hooks (useMemo, useCallback) for maximum performance."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Global State & API Caching",
      desc: "Proficient in centralized state handling using Redux Toolkit slices and implementing TanStack Query for caching and server-state sync."
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Responsive & Modern Design",
      desc: "Engineering pixel-perfect, mobile-first user interfaces using Tailwind CSS with seamless animations and cross-device consistency."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Solid CS & DSA Foundation",
      desc: "Higher Secondary Computer Science background from DUHSS Thootha, with a structured approach to Data Structures and Algorithms."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#090A11]/60 transition-colors duration-300">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Frontend developer dedicated to crafting clean, scalable, and high-performance user interfaces with modern web standards.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Sections */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Introduction Card */}
            <div className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-md dark:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Professional Introduction</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-300 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Active Frontend Developer Intern at Bridgeon Solutions LLP, Calicut</span>
              </div>
            </div>

            {/* Development Interests & Objectives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 shadow-sm dark:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Development Interests</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Building clean, modular, scalable React components, managing global state seamlessly with Redux Toolkit, and implementing TanStack Query for optimal server data synchronization.
                </p>
              </div>

              <div className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 shadow-sm dark:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Career Trajectory</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Deepening frontend expertise with modern React architecture, expanding Python & Django backend knowledge, and solving challenging algorithmic problems.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Key Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {highlightCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] hover:border-purple-300 dark:hover:border-purple-500/35 rounded-2xl p-4.5 sm:p-5 shadow-sm dark:shadow-xl transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
