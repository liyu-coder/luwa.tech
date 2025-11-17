
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <p className="text-lg text-gray-300 leading-relaxed">
          I began my journey in tech as a Junior Software Engineer at Siinqee Bank, where I cultivated a strong foundation in software engineering principles and system design. My passion for building elegant and effective solutions drove me to continuously learn and grow.
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          Now, as a Senior Software Engineer at Sidama Bank, I leverage my experience to tackle more complex challenges, mentor team members, and contribute to the architecture of high-impact systems. I thrive on turning complex problems into simple, beautiful, and intuitive designs.
        </p>
      </div>
    </section>
  );
};

export default About;
