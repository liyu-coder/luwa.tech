import React, { useState } from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const FloatingSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start select-none">
      {/* Expanded Quick Support Menu */}
      {isOpen && (
        <div className="mb-3 p-3 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col gap-2.5 animate-fadeIn min-w-[210px]">
          <div className="px-1.5 py-0.5 border-b border-slate-800 pb-2">
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Instant Support</span>
            </p>
            <p className="text-[11px] text-slate-400">Available on mobile & chat</p>
          </div>

          <a
            href="https://wa.me/251916604254"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all group"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <FaWhatsapp size={16} />
            </div>
            <div>
              <p className="text-white text-xs font-bold">WhatsApp</p>
              <p className="text-[10px] text-emerald-400">+251 916 604 254</p>
            </div>
          </a>

          <a
            href="https://t.me/Luwa307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-sky-950/70 hover:bg-sky-900/80 border border-sky-500/40 text-sky-300 text-xs font-semibold transition-all group"
          >
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <FaTelegramPlane size={15} />
            </div>
            <div>
              <p className="text-white text-xs font-bold">Telegram</p>
              <p className="text-[10px] text-sky-400">@Luwa307</p>
            </div>
          </a>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct Support Contact"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-cyan-500/40 text-cyan-300 shadow-xl shadow-cyan-500/15 text-xs font-bold transition-all duration-300 transform hover:scale-105 group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
        <span className="text-slate-200 group-hover:text-cyan-300 transition-colors">
          Support / Chat
        </span>
        {isOpen ? <FiX size={15} className="text-slate-400" /> : <FiMessageCircle size={15} className="text-cyan-400" />}
      </button>
    </div>
  );
};

export default FloatingSupport;
