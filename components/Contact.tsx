import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiCheck, FiCopy, FiMessageSquare, FiPhoneCall } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
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
          Whether you need a senior software engineer for full-stack systems, core banking consultation, or immediate project support, connect directly with me anytime.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* Left Column: Direct Contact & Instant Support Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 md:p-8 rounded-2xl space-y-5 border border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FiMessageSquare className="text-cyan-400" />
              <span>Direct Support & Channels</span>
            </h3>

            {/* WhatsApp Support Card */}
            <div className="bg-slate-800/60 hover:bg-slate-800/90 transition-colors p-4 rounded-xl border border-emerald-500/30 flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FaWhatsapp size={22} />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">WhatsApp Support</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <a
                    href="https://wa.me/251916604254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors truncate block"
                  >
                    +251 916 604 254
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                <button
                  onClick={() => handleCopy('+251916604254', 'whatsapp')}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-700/60 rounded-lg transition-colors"
                  title="Copy WhatsApp number"
                >
                  {copiedType === 'whatsapp' ? <FiCheck className="text-emerald-400" size={17} /> : <FiCopy size={17} />}
                </button>
                <a
                  href="https://wa.me/251916604254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                >
                  Chat
                </a>
              </div>
            </div>

            {/* Telegram Support Card */}
            <div className="bg-slate-800/60 hover:bg-slate-800/90 transition-colors p-4 rounded-xl border border-sky-500/30 flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FaTelegramPlane size={20} />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider">Telegram Support</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  </div>
                  <a
                    href="https://t.me/Luwa307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-sky-400 transition-colors truncate block"
                  >
                    @Luwa307
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                <button
                  onClick={() => handleCopy('@Luwa307', 'telegram')}
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-700/60 rounded-lg transition-colors"
                  title="Copy Telegram username"
                >
                  {copiedType === 'telegram' ? <FiCheck className="text-emerald-400" size={17} /> : <FiCopy size={17} />}
                </button>
                <a
                  href="https://t.me/Luwa307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors"
                >
                  Open
                </a>
              </div>
            </div>

            {/* Email Card with Copy Button */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 flex-shrink-0">
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
                onClick={() => handleCopy('luwatesemma@gmail.com', 'email')}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/60 rounded-lg transition-colors flex-shrink-0"
                title="Copy email address"
              >
                {copiedType === 'email' ? <FiCheck className="text-emerald-400" size={18} /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* Location & Direct Phone */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-white">
                    Addis Ababa, Ethiopia (Remote Worldwide)
                  </p>
                </div>
              </div>
              <a
                href="tel:+251916604254"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/60 rounded-lg transition-colors"
                title="Direct phone call"
              >
                <FiPhoneCall size={18} />
              </a>
            </div>

            {/* Socials & Profiles */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-3">Other Profiles</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/liyu-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <FaLinkedin size={16} />
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
