import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface NavbarProps {
  onOpenResume?: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#recommendations', label: 'Endorsements' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'recommendations', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            L
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Luwa Tesemma
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase -mt-1 font-mono">
              Senior Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all relative py-1 ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/liyu-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
            title="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-700/60 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-500 transition-all shadow-sm"
            >
              <FiFileText size={14} />
              <span>Resume</span>
            </button>
          )}

          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 rounded-lg transition-all shadow-md shadow-cyan-500/20 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-cyan-950/60 border border-cyan-800 rounded-lg text-xs"
              title="Resume"
            >
              <FiFileText size={16} />
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1120]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-slate-300 hover:text-cyan-400 font-medium text-base transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-600 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex space-x-4 text-slate-400">
                <a
                  href="https://github.com/liyu-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-xs font-semibold px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
