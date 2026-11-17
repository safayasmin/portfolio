import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Sparkles, 
  Layers, 
  Cpu, 
  GitBranch, 
  CheckCircle2,
  BrainCircuit,
  FileCode2,
  Palette,
  Server
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Skill icon mapper based on skill name
const getSkillIcon = (name) => {
  switch (name) {
    case 'React.js':
      return <Layers className="w-5 h-5 text-cyan-400" />;
    case 'JavaScript':
      return <Code2 className="w-5 h-5 text-amber-400" />;
    case 'Redux Toolkit':
      return <Cpu className="w-5 h-5 text-purple-400" />;
    case 'Tailwind CSS':
      return <Palette className="w-5 h-5 text-teal-400" />;
    case 'TanStack Query':
      return <Sparkles className="w-5 h-5 text-rose-400" />;
    case 'HTML5':
      return <FileCode2 className="w-5 h-5 text-orange-400" />;
    case 'CSS3':
      return <Palette className="w-5 h-5 text-blue-400" />;
    case 'Python':
      return <Terminal className="w-5 h-5 text-yellow-300" />;
    case 'Django':
      return <Server className="w-5 h-5 text-emerald-400" />;
    case 'Data Structures & Algorithms (DSA)':
      return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
    case 'Git':
      return <GitBranch className="w-5 h-5 text-rose-400" />;
    case 'GitHub':
      return <GitBranch className="w-5 h-5 text-slate-300" />;
    case 'VS Code':
      return <Code2 className="w-5 h-5 text-blue-400" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical <span className="text-gradient-purple">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All skills and tools strictly from my verified profile, organized by domain and proficiency.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-[#0F111C] text-slate-400 hover:text-white hover:bg-[#161928] border border-white/[0.07]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0D0F18]/80 hover:bg-[#121524] border border-white/[0.07] hover:border-purple-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-900/20 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top corner gradient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-40" />

              <div>
                {/* Header: Icon & Badges */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-purple-500/15 group-hover:border-purple-500/30 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300">
                      {skill.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Category indicator pill */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="capitalize">{skill.category}</span>
                <span className="group-hover:text-purple-400 transition-colors font-medium">Verified in Resume ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary Banner */}
        <div className="mt-14 bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-purple-950/40 border border-purple-500/20 rounded-2xl p-6 text-center max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-around gap-6">
            <div>
              <div className="text-2xl font-bold font-mono text-purple-300">7</div>
              <div className="text-xs text-slate-400 mt-0.5">Frontend Technologies</div>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/[0.1]" />
            <div>
              <div className="text-2xl font-bold font-mono text-indigo-300">2</div>
              <div className="text-xs text-slate-400 mt-0.5">Backend Frameworks (Python/Django)</div>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/[0.1]" />
            <div>
              <div className="text-2xl font-bold font-mono text-cyan-300">DSA</div>
              <div className="text-xs text-slate-400 mt-0.5">Data Structures & Algorithms</div>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/[0.1]" />
            <div>
              <div className="text-2xl font-bold font-mono text-emerald-300">3</div>
              <div className="text-xs text-slate-400 mt-0.5">Industry Tools (Git, GitHub, VS Code)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
