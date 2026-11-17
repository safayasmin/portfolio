import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090A11]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on professional experience delivering modern frontend applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500/40 to-transparent" />

          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-12 sm:pl-20 pb-12 last:pb-0">
              
              {/* Timeline Marker Dot */}
              <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px]">
                    <span className="w-full h-full bg-[#07080D] rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                    </span>
                  </span>
                </span>
              </div>

              {/* Experience Card */}
              <div className="bg-[#0F111C]/90 hover:bg-[#121526] border border-white/[0.08] hover:border-purple-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 group">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 border-b border-white/[0.07]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-medium mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.current ? "Active Role" : "Completed"}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-1 font-medium">
                      <span className="flex items-center gap-1.5 text-purple-300">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        {item.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs sm:text-sm shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Brief Narrative */}
                <p className="text-slate-300 text-sm mt-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Responsibilities list strictly from Resume */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Responsibilities & Core Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used Strip */}
                <div className="mt-6 pt-5 border-t border-white/[0.07] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    Stack:
                  </span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-purple-200 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
