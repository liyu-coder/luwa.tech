import React from 'react';
import { FiX, FiDownload, FiMail, FiMapPin, FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <h2 className="text-xl font-bold text-white">Curriculum Vitae — Luwa Tesemma</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 rounded-lg hover:bg-cyan-900/60 transition-colors"
              title="Print or Save as PDF"
            >
              <FiDownload size={15} />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-sm md:text-base leading-relaxed">
          {/* Header Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">Luwa Tesemma</h1>
              <p className="text-cyan-400 font-semibold text-lg">Senior Software Engineer & FinTech Architect</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs md:text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><FiMapPin className="text-cyan-400" /> Addis Ababa, Ethiopia</span>
                <span className="flex items-center gap-1.5"><FiMail className="text-cyan-400" /> luwatesemma@gmail.com</span>
                <a href="https://wa.me/251916604254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <FaWhatsapp className="text-emerald-400" /> +251 916 604 254
                </a>
                <a href="https://t.me/Luwa307" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                  <FaTelegramPlane className="text-sky-400" /> @Luwa307
                </a>
                <span className="flex items-center gap-1.5"><FaGithub className="text-cyan-400" /> github.com/liyu-coder</span>
              </div>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs md:text-sm text-slate-300">
              <p><strong className="text-white">Experience:</strong> 4+ Years</p>
              <p><strong className="text-white">Specialization:</strong> Full Stack & FinTech Systems</p>
              <p><strong className="text-white">Current:</strong> Sidama Bank</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <FiBriefcase className="text-cyan-400" /> Professional Summary
            </h3>
            <p className="text-slate-300">
              Results-driven Senior Software Engineer with proven expertise in designing, developing, and scaling mission-critical banking architectures and high-traffic web applications. Experienced in spearheading modern full-stack engineering initiatives at Sidama Bank and Siinqee Bank, ensuring high throughput, rigorous transaction security, and clean code principles. Mentored engineering teams, led microservice transitions, and delivered resilient financial software.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FiBriefcase className="text-cyan-400" /> Work Experience
            </h3>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Senior Software Engineer</h4>
                  <p className="text-cyan-400 text-sm">Sidama Bank &bull; Full-Time</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-950 text-cyan-300 rounded-full w-fit">
                  Present
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1.5 text-xs md:text-sm pl-1">
                <li>Architected scalable microservices and payment gateways for core banking operations, processing over 500,000+ daily transactions safely.</li>
                <li>Engineered high-security RESTful APIs adhering to strict financial industry compliance and PCI-DSS best practices.</li>
                <li>Mentored and coached 8+ junior and mid-level software engineers through structured code reviews and system design workshops.</li>
                <li>Reduced legacy system bottleneck latencies by 38% through optimized caching tiers (Redis) and database query redesigns.</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Junior Software Engineer Officer</h4>
                  <p className="text-cyan-400 text-sm">Siinqee Bank &bull; Full-Time</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full w-fit">
                  Past
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1.5 text-xs md:text-sm pl-1">
                <li>Developed and maintained core banking user interfaces and back-office administrative portals using modern web stacks.</li>
                <li>Collaborated closely with cross-functional product, QA, and security departments to iterate and deploy bank products.</li>
                <li>Authored automated unit tests and integration tests, elevating regression test coverage by 30%.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
              <FiCheckCircle className="text-cyan-400" /> Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-semibold block mb-1">Frontend Engineering:</span>
                <span className="text-slate-300">React.js, TypeScript, Next.js, Tailwind CSS, JavaScript (ES6+), Redux, HTML5, CSS3</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-semibold block mb-1">Backend & Systems:</span>
                <span className="text-slate-300">Node.js, Express.js, C++, REST APIs, Microservices, System Architecture, JWT Auth</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-semibold block mb-1">Databases & Caching:</span>
                <span className="text-slate-300">MongoDB, PostgreSQL, MySQL, Redis, Mongoose, SQL Optimization</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-cyan-400 font-semibold block mb-1">DevOps & Tooling:</span>
                <span className="text-slate-300">Docker, Git & GitHub, Linux Server Admin, CI/CD Pipelines, Postman, Vite</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <FiAward className="text-cyan-400" /> Education & Certifications
            </h3>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
              <h4 className="font-bold text-white">Bachelor of Science in Computer Science / Software Engineering</h4>
              <p className="text-slate-400 text-xs md:text-sm">Top-tier academic foundation in Algorithms, Data Structures, Distributed Computing, and Database Systems.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-800/80 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
