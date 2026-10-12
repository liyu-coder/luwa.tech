import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from './image1.png';

interface HeroProps {
  onOpenResume?: () => void;
}

const stats = [
  { value: '4+', label: 'Years Experience', sub: 'FinTech & Full Stack' },
  { value: '2', label: 'Top Banks', sub: 'Sidama & Siinqee' },
  { value: '15+', label: 'Shipped Systems', sub: 'Microservices & Apps' },
  { value: '99.9%', label: 'Uptime & Security', sub: 'Enterprise Reliability' },
];

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            <span>Available for Senior Engineering Roles & Tech Consulting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Luwa Tesemma</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 h-10 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Senior Software Engineer',
                2200,
                'FinTech & Banking Systems Architect',
                2200,
                'Full Stack Developer (React & Node.js)',
                2200,
                'Distributed Systems & Cloud Specialist',
                2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Specializing in high-throughput enterprise systems, core banking microservices, and modern web architectures. Transforming intricate business logic into resilient, bulletproof, and human-centric software.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
              <FiMapPin className="text-cyan-400" /> Addis Ababa, Ethiopia (Open to Remote Worldwide)
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 px-7 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25"
            >
              <span>Explore My Work</span>
              <FiArrowDown size={16} />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold py-3.5 px-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <FiDownload size={16} className="text-cyan-400" />
                <span>View CV / Resume</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-cyan-950/40 text-cyan-400 font-semibold py-3.5 px-6 rounded-xl border border-cyan-500/40 transition-all duration-300"
            >
              <FiMail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center lg:justify-start gap-5 mt-8 text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
            <a
              href="https://github.com/liyu-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Avatar & Interactive Tech Badges */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            {/* Profile Avatar Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-slate-800 border-2 border-cyan-500/50 shadow-2xl p-2.5">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={logo}
                  alt="Luwa Tesemma - Senior Software Engineer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Floating Tech Badges */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-400">Current Role</p>
                <p className="text-xs font-bold text-white">Sr. Engineer @ Sidama Bank</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold text-cyan-300">
              <span>⚡ Full Stack & Microservices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-20 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl text-center group hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
