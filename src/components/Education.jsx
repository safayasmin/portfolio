import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  BrainCircuit 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#090A11]/60 transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[350px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Educational <span className="text-gradient-purple">Qualifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal education foundation in Computer Science and analytical problem solving.
          </p>
        </div>

        {/* Education Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#0F111C]/90 hover:bg-slate-50 dark:hover:bg-[#121526] border border-slate-200 dark:border-white/[0.08] hover:border-purple-300 dark:hover:border-purple-500/40 rounded-3xl p-6 sm:p-9 shadow-sm dark:shadow-2xl transition-all duration-300 relative group overflow-hidden">
            
            {/* Top corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-100 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium">
                    Stream: {edu.stream}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {edu.qualification}
                  </h3>
                  <div className="text-base font-semibold text-purple-700 dark:text-purple-300 mt-1">
                    {edu.institution}
                  </div>
                </div>
              </div>

              {/* Duration badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono text-xs sm:text-sm self-start">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-6 leading-relaxed">
              {edu.description}
            </p>

            {/* Key Academic Focus Points */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Core Coursework & Learning Focus
              </h4>
              <ul className="space-y-2.5">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Skill Foundations Pills */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.07] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-500" />
                Academic Pillars:
              </span>
              {['Computer Science', 'Data Structures & Algorithms', 'Logic & Problem Solving', 'Programming Fundamentals'].map((pillar, pIdx) => (
                <span
                  key={pIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
                >
                  {pillar}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
