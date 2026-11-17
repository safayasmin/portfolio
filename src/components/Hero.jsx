import React from 'react';
import { 
  Download, 
  ArrowRight, 
  ExternalLink,
  Code2,
  FileDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300 tracking-wide uppercase">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-mono">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="text-gradient">SAFA</span>{' '}
                <span className="text-gradient-purple">YASMIN</span>
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                  {personalInfo.role}
                </span>
                <span className="hidden sm:inline-block h-6 w-[2px] bg-purple-400/50" />
                <span className="hidden sm:inline-block text-sm md:text-base text-slate-600 dark:text-slate-400 font-mono">
                  React.js & Modern Web Systems
                </span>
              </div>
            </div>

            {/* Resume-Based Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Redux Toolkit', 'Tailwind CSS', 'TanStack Query', 'RESTful APIs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
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
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 shadow-xl shadow-purple-600/20 hover:shadow-purple-600/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-[#0F111C] dark:hover:bg-[#161928] border border-slate-200 dark:border-white/[0.1] hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-4">
              <span>📍 {personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 dark:hover:text-purple-300 underline">
                {personalInfo.email}
              </a>
            </div>

          </div>

          {/* Right Column: Clean Interactive Code / Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white dark:bg-[#0F111C] border border-slate-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
              
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">developer.config.js</span>
                <span className="w-4 h-4 text-purple-600 dark:text-purple-400 font-mono text-xs">⚛</span>
              </div>

              {/* Code Snippet */}
              <div className="pt-4 font-mono text-xs space-y-2 leading-relaxed text-slate-700 dark:text-slate-300">
                <p><span className="text-purple-600 dark:text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.name}"</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.role}"</span>,</p>
                <p className="pl-4">currentCompany: <span className="text-emerald-600 dark:text-emerald-400">"Bridgeon Solutions LLP"</span>,</p>
                <p className="pl-4">primaryStack: [</p>
                <p className="pl-8 text-amber-600 dark:text-amber-300">"React.js", "Redux Toolkit", "Tailwind CSS"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">passion: <span className="text-emerald-600 dark:text-emerald-400">"Building clean, performant web apps"</span>,</p>
                <p className="pl-4">availableForHire: <span className="text-indigo-600 dark:text-indigo-400">true</span></p>
                <p>&#125;;</p>
              </div>

              {/* Quick Resume Direct Download CTA Inside Card */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Curriculum Vitae</span>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-600/30 transition-colors cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Get Resume</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
