
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';
import image3 from '../components/image3.png';
import image2 from '../components/image2.png';
import image4 from '../components/image4.png';

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, user authentication, and a Stripe-integrated checkout process. Built with a robust MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: image3,
    
  },
  {
    title: 'Mikita Coffee & Ice Cream Café',
    description: 'A sleek web app for a local café featuring menu, orders, gallery, and story pages. Built with React, Node.js, and Tailwind CSS for a smooth user experience.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    imageUrl: image2,
    
  },
  {
    title: 'Tsidu Solid Waste Management System',
    description: 'A smart platform for efficient waste collection and tracking.Enables real-time monitoring and data-driven management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: image4,
    
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-cyan-500/20 flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-end space-x-4">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaExternalLinkAlt size={22} />
          </a>
        )}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
