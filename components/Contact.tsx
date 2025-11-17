
import React from 'react';
import { FiMail } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <a
          href="mailto:luwatesemma@gmail.com"
          className="inline-flex items-center gap-3 text-xl font-medium text-cyan-400 border border-cyan-400 py-3 px-8 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
        >
          <FiMail />
          luwatesemma@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
