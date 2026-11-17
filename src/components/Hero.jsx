import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  ExternalLink,
  CheckCircle2,
  Briefcase,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-purple-300 tracking-wide uppercase">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm md:text-base font-mono">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="text-gradient">SAFA</span>{' '}
                <span className="text-gradient-purple">YASMIN</span>
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
                  {personalInfo.role}
                </span>
                <span className="hidden sm:inline-block h-6 w-[2px] bg-purple-500/40" />
                <span className="hidden sm:inline-block text-sm md:text-base text-slate-400 font-mono">
                  React.js & Modern Web Systems
                </span>
              </div>
            </div>

            {/* Impressive Resume-Based Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Redux Toolkit', 'Tailwind CSS', 'TanStack Query', 'RESTful APIs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 hover:bg-right shadow-xl shadow-purple-600/25 transition-all duration-300 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#0F111C] hover:bg-[#161928] border border-white/[0.1] hover:border-purple-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-purple-400 transition-transform group-hover:translate-x-1" />
              </a>

              {/* View Experience Link */}
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience Details</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">React.js</div>
                <div className="text-xs text-slate-400">Core Specialization</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">Bridgeon</div>
                <div className="text-xs text-slate-400">Solutions LLP Intern</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">Redux & TanStack</div>
                <div className="text-xs text-slate-400">State & Data Fetching</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Profile Badge / Dev Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            {/* Profile & Code Showcase Card */}
            <div className="w-full max-w-md bg-[#0D0F18]/90 border border-white/[0.1] rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              
              {/* Header decorative bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">safa-profile.jsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Frontend Dev</span>
                </div>
              </div>

              {/* Developer Avatar & Details */}
              <div className="py-6 flex flex-col items-center text-center">
                
                {/* Stylized Avatar Placeholder with Glow */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2.5px] shadow-xl shadow-purple-900/30">
                    <div className="w-full h-full bg-[#0A0C14] rounded-[14px] flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-1">
                        <Code2 className="w-6 h-6 text-purple-300" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300">SY</span>
                    </div>
                  </div>
                  
                  {/* Floating verification badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#0E111C] border border-white/[0.15] p-1.5 rounded-full shadow-md text-purple-400" title="Verified Profile">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">Safa Yasmin</h3>
                <p className="text-xs font-mono text-purple-300 mt-0.5">Frontend Developer Intern</p>
                <p className="text-xs text-slate-400 mt-1">Bridgeon Solutions LLP, Calicut</p>

                {/* Quick stats mini-grid */}
                <div className="w-full grid grid-cols-2 gap-2 mt-5">
                  <div className="bg-[#121524] border border-white/[0.06] rounded-xl p-2.5 text-left">
                    <div className="text-[11px] text-slate-400">Primary Focus</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      React & Redux
                    </div>
                  </div>
                  <div className="bg-[#121524] border border-white/[0.06] rounded-xl p-2.5 text-left">
                    <div className="text-[11px] text-slate-400">Data & Caching</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      TanStack Query
                    </div>
                  </div>
                </div>

                {/* Code snapshot box */}
                <div className="w-full mt-4 bg-[#080A10] border border-white/[0.06] rounded-xl p-3 text-left font-mono text-[11px] text-slate-400 leading-relaxed overflow-x-auto">
                  <div className="text-purple-400">const <span className="text-indigo-300">developer</span> = {'{'}</div>
                  <div className="pl-4">name: <span className="text-emerald-300">"Safa Yasmin"</span>,</div>
                  <div className="pl-4">role: <span className="text-emerald-300">"Frontend Developer"</span>,</div>
                  <div className="pl-4">skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Redux"</span>, <span className="text-amber-300">"Tailwind"</span>],</div>
                  <div className="pl-4">practices: <span className="text-cyan-300">"Clean & Scalable Code"</span></div>
                  <div className="text-purple-400">{'}'};</div>
                </div>

              </div>

              {/* Bottom footer link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available for opportunities
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
