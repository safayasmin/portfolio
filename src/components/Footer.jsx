import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles, 
  ExternalLink,
  MapPin,
  FileDown
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#05060A] border-t border-slate-200 dark:border-white/[0.08] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          
          {/* Brand & bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-purple-600/20">
                <div className="w-full h-full bg-white dark:bg-[#0B0D17] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 text-sm">
                    SY
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-mono text-purple-600 dark:text-purple-400">
                  {personalInfo.role}
                </span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Crafting scalable, high-performance, and responsive user interfaces with React.js, Tailwind CSS, Redux Toolkit, and modern web best practices.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-blue-50 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-purple-50 dark:hover:bg-purple-600/20 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 shadow-sm transition-colors"
                title="Email Me"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold transition-colors cursor-pointer"
                title="Download Resume"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navigationLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-purple-500 font-mono">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
              <button
                onClick={onOpenResume}
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 transition-colors py-1 flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span className="text-purple-500 font-mono">›</span>
                <span>Resume File</span>
              </button>
            </div>
          </div>

          {/* Current Experience Spotlight */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-bold">
              Current Role
            </h4>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0E101A] border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-1.5">
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Frontend Developer Intern</span>
              </div>
              <div className="text-xs font-medium text-purple-700 dark:text-purple-300">Bridgeon Solutions LLP</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Calicut, Kerala • 01/2026 - Present</div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-500 dark:text-slate-400">
              Built with React.js & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-[#0F111C] hover:bg-purple-50 dark:hover:bg-purple-600/20 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
