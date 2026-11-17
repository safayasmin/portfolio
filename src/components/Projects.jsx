import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ShoppingBag, 
  Code2,
  Mail,
  Layers,
  Cpu,
  Zap,
  Lock
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('overview');
  const project = projectsData[0]; // BloomCraft

  // Safe fallback in case data is somehow missing
  if (!project) {
    return null;
  }

  // Map keyFeatures icons
  const featureIcons = [
    <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    <Lock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
  ];

  const sampleProducts = [
    { id: 1, name: "Handmade Crochet Sunflower Bouquet", category: "Crochet", price: "₹899",   tag: "Best Seller" },
    { id: 2, name: "Fresh Lavender & Rose Arrangement",   category: "Flowers", price: "₹1,249", tag: "Seasonal"   },
    { id: 3, name: "Crochet Tulip Blossom Keepsake",      category: "Crochet", price: "₹649",   tag: "Trending"   },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[550px] h-[400px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Frontend projects built with modern React architecture, global state management, and optimized performance.
          </p>
        </div>

        {/* Project Card Container */}
        <div className="bg-white dark:bg-[#0F111C]/90 border border-slate-200 dark:border-white/[0.09] rounded-3xl p-6 sm:p-9 shadow-md dark:shadow-2xl relative overflow-hidden">
          
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/[0.08]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  React.js Ecosystem
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
                <span className="text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 ml-3">
                  – {project.subtitle}
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-50 dark:bg-purple-600/20 hover:bg-purple-100 dark:hover:bg-purple-600/30 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Discuss Project</span>
              </a>
            </div>
          </div>

          {/* Project Tagline */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base my-6 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            {['overview', 'prototype'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'overview' ? 'Architecture & Features' : 'Interactive Preview'}
              </button>
            ))}
          </div>

          {/* Tab: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">

              {/* Key Feature Points from highlights[] */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {(project.highlights || []).map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090A13] border border-slate-100 dark:border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features Cards from keyFeatures[] */}
              {(project.keyFeatures || []).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.keyFeatures.map((kf, kIdx) => (
                    <div
                      key={kIdx}
                      className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-500/20 flex items-start gap-3"
                    >
                      <div className="mt-0.5 shrink-0">
                        {featureIcons[kIdx % featureIcons.length]}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block mb-0.5">
                          {kf.title}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {kf.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture Breakdown */}
              {project.architecture && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(project.architecture).map(([key, val]) => (
                    <div key={key} className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-500/20">
                      <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 uppercase block mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{val}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* Tab: Interactive Prototype */}
          {activeTab === 'prototype' && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0A0C14] border border-slate-200 dark:border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                    BloomCraft Storefront Preview
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                  Mock Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {sampleProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-white dark:bg-[#0F111C] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-purple-600 dark:text-purple-400 mb-1">
                        <span>{p.category}</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400">
                          {p.tag}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{p.name}</h4>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                      <span className="font-bold text-sm text-slate-900 dark:text-white font-mono">{p.price}</span>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">In Stock</span>
                    </div>
                  </div>
                ))}
              </div>

              {project.statusNotice && (
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center pt-2 italic">
                  {project.statusNotice}
                </p>
              )}
            </div>
          )}

          {/* Tech Badges Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-purple-500" />
              Built With:
            </span>
            {(project.technologies || []).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
