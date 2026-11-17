import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#07080D] dark:text-slate-200 selection:bg-purple-600/30 selection:text-purple-900 dark:selection:text-purple-200 relative overflow-hidden transition-colors duration-300">
        
        {/* Top Navbar */}
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects onOpenContact={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }} />
          <Education />
          <Contact />
        </main>

        {/* Proper Footer */}
        <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Floating Bottom-to-Top Scroll Button */}
        <ScrollToTop />

        {/* Resume View & Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
