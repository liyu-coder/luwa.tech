
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 md:py-32 bg-gray-800/50 rounded-lg my-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Interested in a more detailed look at my professional background? Download my full CV for a comprehensive overview of my skills and experience.
        </p>
        <a
          href="/Luwa_Tesemma_CV.pdf" // Placeholder link
          download
          className="inline-flex items-center gap-3 bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          <FaDownload />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
