import React from 'react';
import { FiX, FiExternalLink, FiLayers, FiCheck, FiCpu } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            {project.badge && (
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                {project.badge}
              </span>
            )}
            <h3 className="text-lg md:text-xl font-bold text-white truncate max-w-md">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Project Image Banner */}
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden border border-slate-800">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
            {project.impactMetric && (
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                ⭐ {project.impactMetric}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Project Overview</h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
                <FiCheck className="text-cyan-400" /> Key Features & Capabilities
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture / Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h4 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
                <FiCpu className="text-cyan-400" /> Architecture Highlights
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-800">
                    <FiLayers className="text-cyan-400 flex-shrink-0" size={14} />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Tag Cloud */}
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-slate-800 border border-slate-700 text-cyan-300 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
              >
                <FaGithub size={16} />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg transition-colors font-semibold"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
