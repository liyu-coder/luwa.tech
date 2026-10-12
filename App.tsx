import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';
import FloatingSupport from './components/FloatingSupport';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 relative overflow-x-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb-1"></div>
        <div className="ambient-orb-2"></div>
        <div className="ambient-orb-3"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40"></div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main className="container mx-auto px-6 md:px-12 flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects onSelectProject={(p) => setSelectedProject(p)} />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Modals & Floating Components */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
      <BackToTop />
      <FloatingSupport />
    </div>
  );
};

export default App;
