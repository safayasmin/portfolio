import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } bg-white/90 text-purple-700 hover:text-purple-900 border border-purple-200/60 shadow-purple-950/5 hover:scale-110 hover:shadow-2xl dark:bg-[#121526]/90 dark:text-purple-300 dark:border-white/10 dark:shadow-purple-950/50 dark:hover:text-white dark:hover:border-purple-500/50`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  );
}
