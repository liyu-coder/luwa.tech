import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md">
                L
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Luwa Tesemma</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Senior Software Engineer passionate about designing resilient banking systems, microservices architectures, and modern web applications.
            </p>
            <div className="flex items-center space-x-3 text-slate-400">
              <a
                href="https://wa.me/251916604254"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp Support (+251916604254)"
                title="WhatsApp: +251 916 604 254"
              >
                <FaWhatsapp size={19} />
              </a>
              <a
                href="https://t.me/Luwa307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                aria-label="Telegram Support (@Luwa307)"
                title="Telegram: @Luwa307"
              >
                <FaTelegramPlane size={18} />
              </a>
              <a
                href="https://github.com/liyu-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:luwatesemma@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="Email"
                title="Email: luwatesemma@gmail.com"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-mono">Navigation</p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-mono">Portfolio</p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="#recommendations" className="hover:text-cyan-400 transition-colors">Endorsements</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Back to Top Quick Link */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Luwa Tesemma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
