import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, skillsData, experienceData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
===================================================================
SAFA YASMIN - FRONTEND DEVELOPER
===================================================================
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

-------------------------------------------------------------------
PROFILE
-------------------------------------------------------------------
${personalInfo.bio}

-------------------------------------------------------------------
SKILLS
-------------------------------------------------------------------
• Frontend: HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind CSS, TanStack Query
• Backend: Python, Django
• Programming: Data Structures and Algorithms (DSA)
• Tools: Git, GitHub, VS Code
• Soft Skills: Adaptability, Problem Solving, Quick Learner, Time Management, Team Collaboration

-------------------------------------------------------------------
EDUCATION
-------------------------------------------------------------------
Higher Secondary Education
DUHSS Thootha
Computer Science (01/2023 - 01/2025)

-------------------------------------------------------------------
WORK EXPERIENCE
-------------------------------------------------------------------
Frontend Developer Intern
Bridgeon Solutions LLP, Calicut (01/2026 - Present)
• Built responsive web applications using React.js and Tailwind CSS.
• Developed reusable UI components and managed state using Redux Toolkit.
• Integrated RESTful APIs for seamless data communication.
• Implemented TanStack Query for API fetching and caching.

-------------------------------------------------------------------
PROJECTS
-------------------------------------------------------------------
BloomCraft – Flower & Crochet E-commerce Website
• Developed a responsive e-commerce website using React.js, JavaScript, Tailwind CSS, Redux Toolkit, and React Router.
• Built features like product listing, search, filtering, cart, wishlist, and checkout.
• Implemented global state management using Redux Toolkit.
• Integrated REST APIs using Axios and JSON Server.
• Developed authentication and protected routes.
• Optimized performance using React Hooks (useMemo, useCallback).
• Designed a fully responsive UI across devices.
===================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Safa_Yasmin_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#0D0F18] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar (Action Buttons) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A0C14] border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Safa Yasmin – Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-600/20 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Printable Area */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-[#0B0D15] text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/[0.08] print:border-black/20 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-purple-400 print:text-slate-800">
              {personalInfo.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 print:text-slate-700 font-mono pt-1">
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-purple-300 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-purple-300 hover:underline">
                {personalInfo.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase border-b border-white/[0.08] pb-1 print:text-black print:border-black/20">
              PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase border-b border-white/[0.08] pb-1 print:text-black print:border-black/20">
              SKILLS
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 print:text-slate-800 space-y-1.5">
              <div>
                <span className="font-semibold text-white print:text-black">• Frontend: </span>
                HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind CSS, TanStack Query
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Backend: </span>
                Python, Django
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Programming: </span>
                Data Structures and Algorithms (DSA)
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Tools: </span>
                Git, GitHub, VS Code
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">• Soft Skills: </span>
                Adaptability, Problem Solving, Quick Learner, Time Management, Team Collaboration
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase border-b border-white/[0.08] pb-1 print:text-black print:border-black/20">
              EDUCATION
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-white print:text-black">{edu.qualification}</div>
                  <div className="text-slate-400 print:text-slate-700">{edu.institution}</div>
                  <div className="text-slate-400 print:text-slate-700">{edu.stream}</div>
                </div>
                <div className="font-mono text-purple-300 print:text-slate-700 text-xs shrink-0">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase border-b border-white/[0.08] pb-1 print:text-black print:border-black/20">
              WORK EXPERIENCE
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-white print:text-black">{exp.role}</div>
                    <div className="text-purple-300 print:text-slate-700 font-medium">{exp.company}, {exp.location}</div>
                  </div>
                  <div className="font-mono text-purple-300 print:text-slate-700 text-xs shrink-0">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800 list-disc list-inside">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase border-b border-white/[0.08] pb-1 print:text-black print:border-black/20">
              PROJECTS
            </h2>
            {projectsData.map((proj, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-bold text-white print:text-black text-xs sm:text-sm">
                  {proj.title} – {proj.subtitle}
                </div>
                <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800 list-disc list-inside">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#0A0C14] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Source: Official Resume of Safa Yasmin</span>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
}
