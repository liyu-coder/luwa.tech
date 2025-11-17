
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { Skill } from '../types';


const skills: Skill[] = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
  { name: 'C++', icon: CgCPlusPlus, color: '#00599C' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
      <Icon size={50} style={{ color: skill.color }} className="mb-4" />
      <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
