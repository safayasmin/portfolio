import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { personalInfo, skillsData, experienceData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDirectDownload = () => {
    // Downloads the resume file created in /public
    const link = document.createElement('a');
    link.href = '/Safa_Yasmin_Resume.txt';
    link.download = 'Safa_Yasmin_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0D0F18] border border-slate-200 dark:border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-[#0A0C14] border-b border-slate-200 dark:border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDirectDownload}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all flex items-center gap-2 text-xs font-semibold shadow-md shadow-purple-600/25 cursor-pointer"
              title="Download File"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-rose-100 dark:hover:bg-rose-500/20 text-slate-500 dark:text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0B0D17] text-slate-800 dark:text-slate-200 selection:bg-purple-500/20">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-white/[0.1] pb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">
              {personalInfo.role}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mt-3">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-500" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Profile Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.bio}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend Engineering:</span>
                <span className="text-slate-600 dark:text-slate-400">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, TanStack Query</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">State & Routing:</span>
                <span className="text-slate-600 dark:text-slate-400">Redux Toolkit, Context API, React Hooks (useMemo, useCallback)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & Foundations:</span>
                <span className="text-slate-600 dark:text-slate-400">Python, Django, RESTful APIs, Data Structures & Algorithms (DSA)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Tools & Methodology:</span>
                <span className="text-slate-600 dark:text-slate-400">Git, GitHub, VS Code, Responsive UI Design, Cross-Browser Compatibility</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-purple-500/50 pl-4 py-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {exp.company} • {exp.location}
                </div>
                <ul className="space-y-1.5 pt-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Featured Projects
            </h2>
            {projectsData.map((proj, pIdx) => (
              <div key={pIdx} className="border-l-2 border-indigo-500/50 pl-4 py-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {proj.title} – {proj.subtitle}
                  </h3>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                    React & Redux Ecosystem
                  </span>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {proj.features.map((f, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-500 mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Education
            </h2>
            {educationData.map((edu, eIdx) => (
              <div key={eIdx} className="border-l-2 border-emerald-500/50 pl-4 py-1 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {edu.qualification} – {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Stream: {edu.stream}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-[#0A0C14] border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500">
          <span>File format: UTF-8 formatted Plaintext & Printable PDF</span>
          <button 
            onClick={handleDirectDownload}
            className="text-purple-600 dark:text-purple-400 hover:underline font-semibold cursor-pointer"
          >
            Direct download (Safa_Yasmin_Resume.txt)
          </button>
        </div>

      </div>
    </div>
  );
}
