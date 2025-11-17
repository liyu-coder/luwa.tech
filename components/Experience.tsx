
import React from 'react';
import { MdWork } from 'react-icons/md';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Sidama Bank',
    period: 'Present',
    description: [
      'Lead the development of new features for core banking applications.',
      'Design and implement scalable microservices architecture.',
      'Mentor junior engineers and conduct code reviews to maintain code quality.',
    ],
  },
  {
    role: 'Junior Software Engineer Officer',
    company: 'Siinqee Bank',
    period: 'Past',
    description: [
      'Developed and maintained features for internal banking software.',
      'Collaborated with cross-functional teams to define and ship new features.',
      'Gained foundational knowledge in system design and software development lifecycle.',
    ],
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem, isLast: boolean }> = ({ experience, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full text-white">
                <MdWork size={24} />
            </div>
            {!isLast && <div className="w-px h-full bg-gray-600"></div>}
        </div>
        <div className="pb-8">
            <p className="mb-2 text-xl font-bold text-gray-100">{experience.role}</p>
            <p className="text-gray-400 mb-3">
                {experience.company} &bull; {experience.period}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);


const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
