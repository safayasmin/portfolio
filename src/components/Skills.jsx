import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
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

const levelToPercent = (level) => {
  switch (level) {
    case 'Advanced':    return 90;
    case 'Proficient':  return 78;
    case 'Intermediate':return 60;
    case 'Foundation':  return 50;
    case 'High':        return 88;
    default:            return 65;
  }
};

const getSkillIcon = (name) => {
  switch (name) {
    case 'React.js':
      return <Layers className="w-5 h-5 text-cyan-500" />;
    case 'JavaScript':
      return <Code2 className="w-5 h-5 text-amber-500" />;
    case 'Redux Toolkit':
      return <Cpu className="w-5 h-5 text-purple-500" />;
    case 'Tailwind CSS':
      return <Palette className="w-5 h-5 text-teal-500" />;
    case 'TanStack Query':
      return <Sparkles className="w-5 h-5 text-rose-500" />;
    case 'HTML5':
      return <FileCode2 className="w-5 h-5 text-orange-500" />;
    case 'CSS3':
      return <Palette className="w-5 h-5 text-blue-500" />;
    case 'Python':
      return <Terminal className="w-5 h-5 text-yellow-500" />;
    case 'Django':
      return <Server className="w-5 h-5 text-emerald-500" />;
    case 'Data Structures & Algorithms (DSA)':
      return <BrainCircuit className="w-5 h-5 text-indigo-500" />;
    case 'Git':
      return <GitBranch className="w-5 h-5 text-rose-500" />;
    case 'GitHub':
      return <GitBranch className="w-5 h-5 text-slate-600 dark:text-slate-300" />;
    case 'VS Code':
      return <Code2 className="w-5 h-5 text-blue-500" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-purple-500" />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Split items into technical skills and soft skills
  const technicalItems = skillsData.items.filter(item => item.category !== 'soft');
  const softItems = skillsData.items.filter(item => item.category === 'soft');

  const filteredSkills = activeCategory === 'all'
    ? technicalItems
    : activeCategory === 'soft'
    ? []
    : technicalItems.filter(item => item.category === activeCategory);

  // Categories excluding 'soft' from the filter bar (shown separately below)
  const filterCategories = skillsData.categories.filter(c => c.id !== 'soft');

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-gradient-purple">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            All skills and tools from my verified profile, organized by domain and proficiency.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/25 scale-105'
                  : 'bg-white dark:bg-[#0F111C] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#161928] border border-slate-200 dark:border-white/[0.08]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const pct = levelToPercent(skill.level);
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] hover:border-purple-300 dark:hover:border-purple-500/40 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08]">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 capitalize">
                        {skill.badge}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 shrink-0">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Soft / Professional Skills Section */}
        {softItems.length > 0 && (
          <div className="mt-12 bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Professional & Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {softItems.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] flex items-center gap-2 hover:border-purple-300 dark:hover:border-purple-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
