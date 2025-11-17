
import React from 'react';
import logo from './image1.png';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Luwa Tesemma
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
            I build robust, scalable, and efficient software solutions. Passionate about system design, clean code, and creating impactful technology.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Get In Touch
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-800 border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20">
            <img 
              src={logo} 
              alt="Luwa Tesemma" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
