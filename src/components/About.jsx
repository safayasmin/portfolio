import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Target, 
  Sparkles, 
  CheckCircle, 
  Zap, 
  Layers, 
  Cpu, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightCards = [
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Reusable Component Architecture",
      desc: "Creating scalable, clean, modular UI components in React.js with optimized hooks (useMemo, useCallback) for maximum performance."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Global State & API Caching",
      desc: "Proficient in centralized state handling using Redux Toolkit slices and implementing TanStack Query for caching and server-state sync."
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      title: "Responsive & Modern Design",
      desc: "Engineering pixel-perfect, mobile-first user interfaces using Tailwind CSS with seamless animations and cross-device consistency."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Solid CS & DSA Foundation",
      desc: "Higher Secondary Computer Science background from DUHSS Thootha, with a structured approach to Data Structures and Algorithms."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090A11]/60">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer dedicated to crafting clean, scalable, and high-performance user interfaces with modern web standards.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Sections */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Introduction Card */}
            <div className="bg-[#0F111C]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Professional Introduction</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-purple-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Active Frontend Developer Intern at Bridgeon Solutions LLP, Calicut</span>
              </div>
            </div>

            {/* Development Interests & Career Objectives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Development Interests */}
              <div className="bg-[#0F111C]/90 border border-white/[0.08] rounded-2xl p-5 shadow-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">Development Interests</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Building clean, modular, scalable React components, managing global state seamlessly with Redux Toolkit, and implementing TanStack Query for optimal server-side data synchronization and caching.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-indigo-300 font-mono">
                  <span>Focus: Scalability & Performance</span>
                </div>
              </div>

              {/* Career Objectives */}
              <div className="bg-[#0F111C]/90 border border-white/[0.08] rounded-2xl p-5 shadow-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">Career Objectives</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Dedicated to contributing to production-grade web applications, mastering frontend systems, collaborating with dynamic development teams, and delivering impactful digital experiences.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-blue-300 font-mono">
                  <span>Goal: Engineering Excellence</span>
                </div>
              </div>

            </div>

            {/* Education Highlight Strip */}
            <div className="bg-[#0F111C]/90 border border-white/[0.08] rounded-2xl p-5 shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-300 uppercase tracking-wider">Educational Background</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">Higher Secondary Education – Computer Science</div>
                  <div className="text-xs text-slate-400">DUHSS Thootha • 01/2023 - 01/2025</div>
                </div>
              </div>
              <a
                href="#education"
                className="hidden sm:inline-flex text-xs font-mono text-slate-300 hover:text-purple-300 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] transition-colors"
              >
                View Details →
              </a>
            </div>

          </div>

          {/* Right Column: 4 Feature Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#0F111C]/80 border border-white/[0.07] hover:border-purple-500/35 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:bg-purple-500/15 group-hover:border-purple-500/30 transition-colors shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
