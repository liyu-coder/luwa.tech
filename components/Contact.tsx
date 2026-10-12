import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiCheck, FiCopy, FiMessageSquare } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('luwatesemma@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          Let's Build Something Exceptional
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
          Whether you need a senior software engineer for full-stack systems, core banking consultation, or a high-velocity project, I'd love to connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 md:p-8 rounded-2xl space-y-6 border border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FiMessageSquare className="text-cyan-400" />
              <span>Direct Channels</span>
            </h3>

            {/* Email Card with Copy Button */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FiMail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400">Email Address</p>
                  <a
                    href="mailto:luwatesemma@gmail.com"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    luwatesemma@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
                title="Copy email address"
              >
                {copied ? <FiCheck className="text-emerald-400" size={18} /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <FiMapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location & Availability</p>
                <p className="text-sm font-semibold text-white">
                  Addis Ababa, Ethiopia (Open to Remote Worldwide)
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-slate-400 mb-3">Professional Profiles</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/liyu-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-sm font-medium"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-sm font-medium"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

            {status === 'success' && (
              <div className="p-4 bg-emerald-950/70 border border-emerald-500/50 rounded-xl text-emerald-300 text-sm flex items-center gap-2 animate-fadeIn">
                <FiCheck className="text-emerald-400 flex-shrink-0" size={18} />
                <span>Thank you! Your message has been received. I will respond to you shortly.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Dawit Bekele"
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity / Architecture Consultation"
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Luwa, I'd like to discuss an opportunity..."
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
