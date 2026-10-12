import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to Top"
      className="fixed bottom-52 right-4 sm:right-6 z-40 w-11 h-11 bg-slate-800/90 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 font-bold rounded-full shadow-lg border border-slate-700/80 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
