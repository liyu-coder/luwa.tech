import React, { useState } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaLinux, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis, 
  SiNextdotjs, 
  SiPostman 
} from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { MdOutlineArchitecture, MdSecurity } from 'react-icons/md';
import { Skill, SkillCategory } from '../types';

const skillsData: Skill[] = [
  // Frontend
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'frontend', level: 'Expert', featured: true },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend', level: 'Expert', featured: true },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'frontend', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', icon: FaJsSquare, color: '#F7DF1E', category: 'frontend', level: 'Expert' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend', level: 'Expert' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'frontend', level: 'Expert' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'frontend', level: 'Expert' },

  // Backend & Systems
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'backend', level: 'Expert', featured: true },
  { name: 'Express.js', icon: FaNodeJs, color: '#90cdf4', category: 'backend', level: 'Expert' },
  { name: 'C++', icon: CgCPlusPlus, color: '#00599C', category: 'backend', level: 'Advanced' },
  { name: 'RESTful APIs', icon: SiPostman, color: '#FF6C37', category: 'backend', level: 'Expert', featured: true },
  
  // Database & Cache
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'database', level: 'Advanced' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'database', level: 'Advanced' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'database', level: 'Advanced' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'database', level: 'Proficient' },

  // DevOps & Tooling
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'devops', level: 'Proficient' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624', category: 'devops', level: 'Advanced' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032', category: 'devops', level: 'Expert', featured: true },
  { name: 'Postman API', icon: SiPostman, color: '#FF6C37', category: 'devops', level: 'Advanced' },

  // Architecture & Banking
  { name: 'Microservices Architecture', icon: MdOutlineArchitecture, color: '#38BDF8', category: 'architecture', level: 'Expert', featured: true },
  { name: 'FinTech & Core Banking', icon: MdSecurity, color: '#10B981', category: 'architecture', level: 'Expert', featured: true },
];

const categoryTabs: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'database', label: 'Databases & Storage' },
  { id: 'devops', label: 'DevOps & Tooling' },
  { id: 'architecture', label: 'Architecture & FinTech' },
];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Stack & Tools
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
          Technologies and tools I leverage every day to engineer resilient banking platforms and responsive web systems.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {categoryTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const count = tab.id === 'all' 
            ? skillsData.length 
            : skillsData.filter((s) => s.category === tab.id).length;

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                isActive ? 'bg-slate-950/30 text-slate-900' : 'bg-slate-700 text-slate-300'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
            >
              {skill.featured && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" title="Key Competency" />
              )}
              
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300"
              >
                <Icon size={32} style={{ color: skill.color }} />
              </div>

              <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>

              {skill.level && (
                <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-300/80 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40 mt-1">
                  {skill.level}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
