import React, { useState } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';

interface SupportItem {
  id: string;
  name: string;
  label: string;
  sublabel: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  shadowColor: string;
}

const supportChannels: SupportItem[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    label: 'Chat on WhatsApp',
    sublabel: '+251 916 604 254',
    href: 'https://wa.me/251916604254',
    icon: <FaWhatsapp size={24} className="text-white drop-shadow" />,
    bgColor: 'bg-[#25D366]',
    hoverColor: 'hover:bg-[#20bd5a]',
    shadowColor: 'shadow-[#25D366]/40',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    label: 'Telegram Support',
    sublabel: '@Luwa307',
    href: 'https://t.me/Luwa307',
    icon: <FaTelegramPlane size={22} className="text-white drop-shadow -translate-x-0.5 translate-y-0.5" />,
    bgColor: 'bg-[#229ED9]',
    hoverColor: 'hover:bg-[#1d8bc0]',
    shadowColor: 'shadow-[#229ED9]/40',
  },
  {
    id: 'phone',
    name: 'Phone Call',
    label: 'Direct Phone Call',
    sublabel: '+251 916 604 254',
    href: 'tel:+251916604254',
    icon: <FaPhoneAlt size={19} className="text-white drop-shadow" />,
    bgColor: 'bg-[#EA580C]',
    hoverColor: 'hover:bg-[#c2410c]',
    shadowColor: 'shadow-[#EA580C]/40',
  },
];

const FloatingSupport: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <aside 
      aria-label="Direct 24/7 Support Channels"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3.5 select-none"
    >
      {supportChannels.map((channel, index) => {
        const isHovered = hoveredId === channel.id;

        return (
          <div
            key={channel.id}
            className="relative flex items-center justify-end group"
            onMouseEnter={() => setHoveredId(channel.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Interactive Tooltip Card on Left */}
            <div
              className={`absolute right-14 sm:right-16 whitespace-nowrap transition-all duration-300 pointer-events-none ${
                isHovered
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 translate-x-2 scale-95'
              }`}
            >
              <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 px-3.5 py-1.5 rounded-xl shadow-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <div className="text-right">
                  <p className="text-xs font-bold text-white">{channel.label}</p>
                  <p className="text-[10px] text-cyan-300 font-mono">{channel.sublabel}</p>
                </div>
              </div>
            </div>

            {/* Circular Floating Action Button */}
            <a
              href={channel.href}
              target={channel.href.startsWith('tel:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={`${channel.name}: ${channel.sublabel}`}
              className={`relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center ${channel.bgColor} ${channel.hoverColor} shadow-lg ${channel.shadowColor} transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50`}
            >
              {/* Subtle Breathing Ring for WhatsApp */}
              {index === 0 && (
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
              )}

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center">
                {channel.icon}
              </div>
            </a>
          </div>
        );
      })}
    </aside>
  );
};

export default FloatingSupport;
