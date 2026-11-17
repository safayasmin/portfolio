import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  ShoppingBag, 
  Heart, 
  Search, 
  Filter, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ArrowRight,
  Code2,
  Lock,
  Eye,
  SlidersHorizontal,
  Mail
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [demoCartCount, setDemoCartCount] = useState(2);
  const [demoWishlistCount, setDemoWishlistCount] = useState(1);
  const [demoFilter, setDemoFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const project = projectsData[0]; // BloomCraft

  // Sample items for the live interactive UI prototype mockup
  const sampleProducts = [
    { id: 1, name: "Handmade Crochet Sunflower Bouquet", category: "crochet", price: "₹899", tag: "Best Seller" },
    { id: 2, name: "Fresh Lavender & Rose Arrangement", category: "flower", price: "₹1,249", tag: "Seasonal" },
    { id: 3, name: "Crochet Tulip Blossom Keepsake", category: "crochet", price: "₹649", tag: "Trending" },
    { id: 4, name: "Pastel Lily Garden Vase", category: "flower", price: "₹1,499", tag: "Fresh Pick" }
  ];

  const filteredProducts = sampleProducts.filter(item => {
    const matchesFilter = demoFilter === 'all' || item.category === demoFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[550px] h-[400px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack & frontend projects built with modern React architecture, global state management, and optimized performance.
          </p>
        </div>

        {/* Project Card Container */}
        <div className="bg-[#0F111C]/90 border border-white/[0.09] rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
          
          {/* Top Decorative Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300">
                  Featured E-Commerce Application
                </span>
                <span className="text-xs font-mono text-slate-400">
                  React.js Ecosystem
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                {project.title}
                <span className="text-base sm:text-lg font-normal text-slate-400">
                  – {project.subtitle}
                </span>
              </h3>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Code / Demo</span>
              </a>
            </div>
          </div>

          {/* Interactive Navigation Tabs for Project Breakdown */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 border-b border-white/[0.06]">
            {[
              { id: 'overview', label: 'Project Overview' },
              { id: 'features', label: 'Features & Capabilities' },
              { id: 'architecture', label: 'Architecture & State (Redux)' },
              { id: 'prototype', label: 'Interactive UI Prototype' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="py-8">
            
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    {project.tagline}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
                      Key Highlights from Resume
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Private Repo Notice adherence */}
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-start gap-3 text-xs text-slate-300">
                    <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-purple-300">Repository & Demo Availability: </span>
                      {project.statusNotice}
                    </div>
                  </div>
                </div>

                {/* Right Column: Tech Stack & Architecture Card */}
                <div className="lg:col-span-5 bg-[#0A0C14] border border-white/[0.07] rounded-2xl p-6 space-y-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.07] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Core Pattern:</span>
                      <span className="font-mono text-slate-200">Component Driven (React)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">State Management:</span>
                      <span className="font-mono text-purple-300">Redux Toolkit</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Data Layer:</span>
                      <span className="font-mono text-slate-200">Axios + JSON Server REST</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Performance:</span>
                      <span className="font-mono text-cyan-300">useMemo & useCallback</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Navigation:</span>
                      <span className="font-mono text-slate-200">React Router (Protected Routes)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. FEATURES TAB */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0A0C14] border border-white/[0.07] rounded-2xl p-5 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300 font-mono text-xs font-bold">
                        0{idx + 1}
                      </div>
                      <h4 className="font-bold text-white text-sm">{feat.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 3. ARCHITECTURE TAB */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-[#0A0C14] border border-white/[0.07] rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>Redux Toolkit State Flow</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.stateManagement}
                    </p>
                    <div className="bg-[#121524] rounded-xl p-3 font-mono text-[11px] text-slate-300 border border-white/[0.05]">
                      // Redux slice architecture<br/>
                      store = configureStore({'{'}<br/>
                      &nbsp;&nbsp;reducer: {'{'} cart: cartReducer, wishlist: wishlistReducer {'}'}<br/>
                      {'}'})
                    </div>
                  </div>

                  <div className="bg-[#0A0C14] border border-white/[0.07] rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Protected Routes & Authentication</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.routing}
                    </p>
                    <div className="bg-[#121524] rounded-xl p-3 font-mono text-[11px] text-slate-300 border border-white/[0.05]">
                      &lt;Route path="/checkout" element={'{\n'}
                      &nbsp;&nbsp;&lt;ProtectedRoute isAuth={'{isAuth}'}&gt;...&lt;/ProtectedRoute&gt;{'\n'}
                      {'}'} /&gt;
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A0C14] border border-white/[0.07] rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Optimization with React Hooks (useMemo, useCallback)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.architecture.performance}
                  </p>
                </div>
              </div>
            )}

            {/* 4. PROTOTYPE TAB (Live interactive preview right inside the portfolio!) */}
            {activeTab === 'prototype' && (
              <div className="bg-[#07090F] border border-purple-500/20 rounded-2xl p-5 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white">BloomCraft Live Simulated UI</span>
                  </div>

                  {/* Interactive Cart & Wishlist counters */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span>Wishlist: {demoWishlistCount}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                      <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                      <span>Cart: {demoCartCount}</span>
                    </div>
                  </div>
                </div>

                {/* Filter and search controls demo */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search flowers or crochet creations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#0F111C] border border-white/[0.08] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="flex gap-1.5">
                    {[
                      { id: 'all', label: 'All Items' },
                      { id: 'crochet', label: 'Crochet' },
                      { id: 'flower', label: 'Flowers' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setDemoFilter(f.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                          demoFilter === f.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-[#0F111C] text-slate-400 hover:text-white border border-white/[0.08]'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated product cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {filteredProducts.map(prod => (
                    <div key={prod.id} className="bg-[#0F111C] border border-white/[0.06] rounded-xl p-3.5 space-y-2.5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                          <span className="text-purple-400 capitalize">{prod.category}</span>
                          <span className="bg-purple-500/10 text-purple-300 px-1.5 py-0.5 rounded">{prod.tag}</span>
                        </div>
                        <h5 className="text-xs font-bold text-white line-clamp-2">{prod.name}</h5>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                        <span className="text-xs font-bold font-mono text-emerald-400">{prod.price}</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => setDemoWishlistCount(prev => prev + 1)}
                            className="p-1 rounded bg-white/[0.05] hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Add to Wishlist"
                          >
                            <Heart className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDemoCartCount(prev => prev + 1)}
                            className="p-1 rounded bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white transition-colors"
                            title="Add to Cart"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  ⚡ Interactive demonstration of Redux cart actions, client-side filtering, and memoized search handlers.
                </div>
              </div>
            )}

          </div>

          {/* Bottom Footer Notice */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-slate-400">
              BloomCraft • Architected with React.js, Tailwind CSS & Redux Toolkit
            </span>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
              >
                <span>Discuss Project Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
