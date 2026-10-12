import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Luwa's architectural foresight and disciplined approach to core banking microservices ensured our systems handled peak transaction volumes effortlessly. He pairs technical excellence with outstanding team mentorship.",
    author: "Senior Engineering Director",
    role: "Core Banking Systems",
    company: "Sidama Bank",
    highlight: "Banking Architecture & High Throughput",
  },
  {
    quote: "During his time at Siinqee Bank, Luwa demonstrated extraordinary problem-solving capabilities. His ability to untangle legacy code, modernize internal banking portals, and implement automated tests made him invaluable.",
    author: "Lead Tech Officer",
    role: "Digital Banking Services",
    company: "Siinqee Bank",
    highlight: "Legacy Modernization & Reliability",
  },
  {
    quote: "Luwa delivered our commercial web application with incredible speed, clean code, and zero bugs. He took full ownership from database design all the way to deployment. An exceptional engineer to work with.",
    author: "Tech Product Lead",
    role: "Commercial Enterprise Projects",
    company: "Addis Solutions",
    highlight: "Full-Stack Ownership & Velocity",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="recommendations" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Endorsements
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          Recommendations & Impact
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
          What engineering managers, colleagues, and collaborators have said about my code quality, work ethic, and leadership.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between relative group"
          >
            {/* Quote Icon */}
            <div className="text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors mb-4">
              <FaQuoteLeft size={36} />
            </div>

            {/* Stars */}
            <div className="flex text-amber-400 gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            {/* Highlight Tag */}
            <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-1 rounded-md w-fit mb-3">
              {item.highlight}
            </span>

            {/* Quote Content */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 italic flex-grow">
              "{item.quote}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">{item.author}</h4>
                <p className="text-xs text-slate-400">{item.role}</p>
                <p className="text-xs text-cyan-400 font-medium">{item.company}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md">
                {item.company.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
