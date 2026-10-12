import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';
import { FiCheckCircle, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Sidama Bank',
    period: 'Present',
    location: 'Addis Ababa, Ethiopia',
    type: 'work',
    badge: 'Current Position',
    impactMetric: 'Scaled services handling 500k+ daily transactions with 99.9% uptime',
    description: [
      'Lead engineering architecture and implementation for core banking digital services and inter-bank APIs.',
      'Designed and deployed scalable microservices with fault-tolerant messaging and automated retry mechanisms.',
      'Mentored and coached 8+ junior and mid-level software engineers; established peer review and automated testing protocols.',
      'Optimized backend queries and introduced Redis caching, cutting average transaction API latency by 38%.',
      'Collaborate with enterprise cybersecurity and compliance teams to ensure PCI-DSS and banking security standards.',
    ],
    technologies: ['TypeScript', 'Node.js', 'React', 'Microservices', 'PostgreSQL', 'Redis', 'Docker', 'Linux'],
  },
  {
    role: 'Junior Software Engineer Officer',
    company: 'Siinqee Bank',
    period: 'Past',
    location: 'Addis Ababa, Ethiopia',
    type: 'work',
    badge: 'Career Foundation',
    impactMetric: 'Automated 12+ manual operational banking workflows',
    description: [
      'Developed and maintained features for internal banking operations software and back-office portals.',
      'Collaborated closely with cross-functional product and operations teams to ship secure bank features on schedule.',
      'Deepened expertise in system design, database transaction rollback strategies, and software development lifecycles.',
      'Implemented automated unit and integration tests, reducing production defect reports by 25%.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'Git', 'REST APIs'],
  },
  {
    role: 'B.Sc. in Computer Science / Software Engineering',
    company: 'University Graduate Degree',
    period: 'Graduated with Honors',
    location: 'Ethiopia',
    type: 'education',
    badge: 'Academic Distinction',
    impactMetric: 'Top Academic Honors & Capstone System Project',
    description: [
      'Comprehensive study in Data Structures & Algorithms, Distributed Systems, Database Management Systems, and Software Engineering Methodologies.',
      'Built a complete distributed inventory & transaction management platform as final capstone project.',
      'Participated in competitive programming challenges and open-source software clubs.',
    ],
    technologies: ['C++', 'Data Structures', 'Algorithms', 'System Design', 'Database Architecture', 'OOP'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Career Path
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
          A track record of engineering leadership and continuous impact across premier banking and academic institutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Continuous Center-Left Timeline Line */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isWork = exp.type === 'work';
            return (
              <div key={index} className="relative flex items-start pl-14 md:pl-20 group">
                {/* Node Icon on Timeline */}
                <div className="absolute left-2.5 md:left-4 -translate-x-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 z-10">
                  {isWork ? <MdWork size={20} /> : <MdSchool size={20} />}
                </div>

                {/* Experience Card */}
                <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl w-full border border-slate-800">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium text-base mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400">
                      <span className="flex items-center gap-1 font-mono text-slate-300">
                        <FiCalendar size={13} className="text-cyan-400" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 mt-1 text-slate-500">
                          <FiMapPin size={12} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact Metric Banner */}
                  {exp.impactMetric && (
                    <div className="bg-slate-800/70 border border-cyan-500/30 rounded-xl p-3 my-4 flex items-center gap-2.5 text-xs md:text-sm text-cyan-300">
                      <FiAward className="text-cyan-400 flex-shrink-0" size={18} />
                      <span><strong>Key Metric:</strong> {exp.impactMetric}</span>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-slate-300 text-sm md:text-base mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-cyan-400/80 flex-shrink-0 mt-1" size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-slate-500 font-mono mr-1">
                        Stack:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
