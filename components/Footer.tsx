
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
            <SocialLink href="https://github.com/liyu-coder" icon={<FaGithub size={24} />} />
            
      
        </div>
        <p>&copy; {new Date().getFullYear()} Luwa Tesemma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
