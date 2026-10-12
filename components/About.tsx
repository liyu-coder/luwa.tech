import React from 'react';
import { FiShield, FiCpu, FiCode, FiUsers, FiCheckCircle } from 'react-icons/fi';

const pillars = [
  {
    icon: FiShield,
    title: 'FinTech & Banking Security',
    description: 'Deep adherence to transaction integrity, strict access control, compliance standards, and resilient audit logging.',
  },
  {
    icon: FiCpu,
    title: 'Distributed Microservices',
    description: 'Decoupled system architecture, high-throughput REST APIs, message queuing, and caching strategies for sub-second latencies.',
  },
  {
    icon: FiCode,
    title: 'Full-Stack Craftsmanship',
    description: 'Writing clean, idiomatic TypeScript, React, and Node.js code with maintainability and high test coverage.',
  },
  {
    icon: FiUsers,
    title: 'Mentorship & Engineering Culture',
    description: 'Championing code quality, mentoring junior and mid-level engineers, and fostering knowledge-sharing across departments.',
  },
];

const highlights = [
  'Proven track record handling 500,000+ daily financial transactions',
  'Experienced in both legacy modernization and greenfield architectures',
  'Passion for clean design patterns, SOLID principles, and DRY methodology',
  'Committed to performance profiling, memory optimization, and security audits',
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Background
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          About Me & My Journey
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Narrative Box */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
            <p>
              I began my engineering journey at <strong className="text-white font-semibold">Siinqee Bank</strong> as a Junior Software Engineer Officer. In that high-stakes environment, I mastered the fundamental rigor of banking software — where every single byte, transaction, and state change matters. I developed core banking interfaces, automated routine back-office workflows, and learned to write code that prioritizes correctness and fault resilience.
            </p>
            <p>
              Today, as a <strong className="text-cyan-400 font-semibold">Senior Software Engineer at Sidama Bank</strong>, I lead system architecture for digital banking initiatives, design microservices capable of handling hundreds of thousands of daily operations, and mentor junior engineers. My work sits at the intersection of robust backend infrastructure and seamless, intuitive user experiences.
            </p>
            <p>
              Beyond enterprise banking, I am deeply committed to open source and modern full-stack web applications. Whether building dynamic e-commerce platforms, IoT-driven waste management systems, or high-performance APIs, my mission remains the same: <span className="text-white font-semibold">deliver reliable, elegant software that solves real human problems at scale.</span>
            </p>
          </div>

          {/* Quick Check Highlights */}
          <div className="grid sm:grid-cols-2 gap-3 mt-8 pt-8 border-t border-slate-800">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                <FiCheckCircle className="text-cyan-400 flex-shrink-0" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Engineering Pillars & Focus Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
