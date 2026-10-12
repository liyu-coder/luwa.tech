import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiEye, FiCheck } from 'react-icons/fi';
import { Project, ProjectCategory } from '../types';

import shebaGoodsImg from './sheba-goods.png';
import faydaJobsImg from './fayda-jobs.png';
import mikitaFoundationImg from './mikita-foundation.png';
import mikitaCafeImg from './mikita-cafe.png';
import smhHotelImg from './smh-hotel.jpg';
import tsiduWasteImg from './image4.png';
import coreBankingImg from './image3.png';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

const projectsData: Project[] = [
  {
    id: 'sheba-goods',
    title: 'Sheba Goods - Ethiopian Specialty Marketplace',
    category: 'ecommerce',
    badge: 'Featured Marketplace',
    description: 'Premier e-commerce platform exporting Ethiopian specialty coffee, traditional garments (Habesha Kemis, Netela), spices, and leather goods globally.',
    longDescription: 'Sheba Goods is an international digital marketplace designed to connect Ethiopian artisans, coffee growers, and cultural product manufacturers directly with diaspora and global consumers. Built with a responsive frontend, resilient checkout flows, multi-currency support, and live customer messaging.',
    tags: ['React', 'Node.js', 'E-Commerce', 'Payment Gateway', 'Tailwind CSS'],
    imageUrl: shebaGoodsImg,
    liveUrl: 'https://shebagoods.com/',
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Global Ethiopian goods marketplace with thousands of monthly active shoppers',
    features: [
      'Multi-category catalog (Coffee, Spices, Habesha Kemis, Netela, Leather)',
      'Flexible international payment integrations & currency conversion',
      'Real-time customer assistance widget and responsive product filtering',
      'Vendor management portal and automated order status tracking'
    ],
    architecture: [
      'Microservices-oriented catalog and inventory synchronizer',
      'Responsive React frontend optimized for fast mobile conversions',
      'Secure tokenized checkout and fraud verification pipeline'
    ]
  },
  {
    id: 'fayda-jobs',
    title: 'Fayda Jobs - Career & Employment Portal',
    category: 'web',
    badge: 'National Job Portal',
    description: 'A comprehensive career discovery platform connecting Ethiopian professionals with verified job opportunities across companies, NGOs, and government institutions.',
    longDescription: 'Fayda Jobs tackles unemployment friction by aggregating verified vacancies across Ethiopia into an accessible, searchable portal with automated Telegram notifications and candidate matching.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Telegram Bot API', 'Tailwind CSS'],
    imageUrl: faydaJobsImg,
    liveUrl: 'https://www.faydajobs.com/',
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Connecting thousands of Ethiopian job seekers with verified employers',
    features: [
      'Keyword, category, and regional location search filters',
      'Integrated Telegram bot broadcasting real-time job alerts',
      'Candidate resume builder and profile management portal',
      'Employer recruitment dashboard with applicant tracking'
    ],
    architecture: [
      'Server-side rendered Next.js architecture for high SEO discoverability',
      'Automated background scraper and verification queue',
      'High-throughput Telegram webhook publisher for instant push alerts'
    ]
  },
  {
    id: 'mikita-foundation',
    title: 'Mikita Foundation - Pediatric Cancer Support',
    category: 'web',
    badge: 'Charity & Non-Profit',
    description: 'A compassionate non-profit web platform dedicated to supporting children diagnosed with brain cancer (DIPG) and their families through active donor campaigns.',
    longDescription: 'Built in memory of Mikita, a girl with a big heart who inspired millions. The platform shares Mikita\'s story, organizes medical relief campaigns, and enables transparent donor contributions for pediatric cancer patients.',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Donations API', 'Responsive UI'],
    imageUrl: mikitaFoundationImg,
    liveUrl: 'https://mikita-foundation.vercel.app/',
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Funding medical relief and care campaigns for vulnerable children',
    features: [
      'Active fundraising campaign trackers with real-time progress',
      'Heartwarming multimedia story archive and tribute gallery',
      'Streamlined donation checkout with one-click payment options',
      'Automated donor receipt generation and transparency reporting'
    ],
    architecture: [
      'Zero-latency static generation deployed on Vercel Edge network',
      'Accessible, mobile-first design with high-contrast typography',
      'Webhook integration for donation reconciliation and receipt dispatch'
    ]
  },
  {
    id: 'mikita-cafe-connect',
    title: 'Mikita Café & Ice Cream - Digital Ordering App',
    category: 'ecommerce',
    badge: 'Food & Hospitality SaaS',
    description: 'A sleek digital café experience featuring specialty coffee menus, table reservations, birthday/ceremony event bookings, and instant multi-channel ordering.',
    longDescription: 'Mikita Café Connect modernizes the café experience with real-time discount campaigns, handcrafted coffee menus, online table booking, and one-tap ordering via WhatsApp, Telegram, and direct calls.',
    tags: ['React', 'Tailwind CSS', 'Lovable', 'Order Management', 'Mobile First'],
    imageUrl: mikitaCafeImg,
    liveUrl: 'https://mikita-cafe-connect.vercel.app/',
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Streamlined online café orders and table reservations',
    features: [
      'Interactive menu showcase with promotional discount codes (MIKITA20)',
      'Table reservation and private ceremony/event booking engine',
      'Omnichannel direct ordering via WhatsApp, Telegram, and phone',
      'Customer review carousel and real-time announcement ticker'
    ],
    architecture: [
      'Component-driven modern React architecture with Tailwind styling',
      'Optimized asset loading for rapid mobile load times under 1 second',
      'Deep link routing for instant messaging checkout initiation'
    ]
  },
  {
    id: 'smh-hotel-system',
    title: 'SMH Hotel Management System',
    category: 'fullstack',
    badge: 'Enterprise SaaS',
    description: 'An enterprise hospitality management solution with interactive room booking calendars, guest check-in/out workflows, and automated revenue analytics.',
    longDescription: 'SMH Hotel Management System centralizes hospitality operations from front-desk reception to management analytics. Features visual room status tracking, guest billing, and occupancy forecasting.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'System Architecture'],
    imageUrl: smhHotelImg,
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Centralizing hotel operations, bookings, and revenue tracking',
    features: [
      'Visual interactive room booking grid and calendar timeline',
      'Guest check-in/check-out status monitor with arrival alerts',
      'Occupancy rate analytics, revenue forecasting, and KPI cards',
      'Housekeeping coordination and role-based staff permissions'
    ],
    architecture: [
      'RESTful backend architecture built on Node.js and Express',
      'Relational state machine preventing double-booking race conditions',
      'Secure role-based access control (Admin, Reception, Housekeeping)'
    ]
  },
  {
    id: 'tsidu-waste',
    title: 'Tsidu Solid Waste Management System',
    category: 'fullstack',
    badge: 'Smart City & Telemetry',
    description: 'A smart municipal platform for efficient waste collection, route tracking, and civic environmental monitoring with data-driven scheduling.',
    longDescription: 'Tsidu Solid Waste Management platform empowers city administrations and waste contractors to optimize collection routes, monitor dump sites, and resolve citizen disposal complaints in real time.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Route Optimization'],
    imageUrl: tsiduWasteImg,
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: 'Optimizing municipal collection routes and environmental tracking',
    features: [
      'Dynamic collection route planning and vehicle dispatching',
      'Citizen reporting dashboard with photo uploads and geolocation',
      'Waste generation trend analysis and environmental reporting',
      'Real-time collection vehicle status tracking'
    ],
    architecture: [
      'Full-stack MERN platform with geospatial indexing in MongoDB',
      'RESTful API architecture with real-time status updates',
      'Responsive interface for field workers on mobile tablets'
    ]
  },
  {
    id: 'core-banking-gateway',
    title: 'Core Banking Transaction Microservices Gateway',
    category: 'fintech',
    badge: 'FinTech & Core Banking',
    description: 'High-throughput financial transaction processing engine engineered for enterprise banking with atomic ledger operations and strict audit trails.',
    longDescription: 'Engineered as part of bank modernization initiatives to decouple core legacy systems from customer-facing APIs. Handles secure inter-bank transactions, account debits/credits, and fraud anomaly detection.',
    tags: ['TypeScript', 'Node.js', 'Microservices', 'PostgreSQL', 'Redis'],
    imageUrl: coreBankingImg,
    repoUrl: 'https://github.com/liyu-coder',
    impactMetric: '500,000+ daily transactions with 99.9% uptime',
    features: [
      'Two-phase commit transaction processing ensuring atomic consistency',
      'Sub-50ms latency response achieved via Redis caching tier',
      'PCI-DSS compliant tamper-proof audit trails and cryptographic logging',
      'Automated reconciliation pipelines and instant dispute flagging'
    ],
    architecture: [
      'Event-driven microservices architecture communicating via message brokers',
      'Database connection pooling with automatic failover and read replicas',
      'Zero-trust API gateway with JWT validation and rate limiting'
    ]
  }
];

const categoryTabs: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'web', label: 'Web Applications & Portals' },
  { id: 'fullstack', label: 'Full-Stack & SaaS' },
  { id: 'fintech', label: 'FinTech & Banking' },
];

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-white">
          Production Projects & Systems
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
          A collection of real-world platforms I have engineered, ranging from global e-commerce and national job portals to charity systems and enterprise banking microservices.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {categoryTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const count = tab.id === 'all' 
            ? projectsData.length 
            : projectsData.filter((p) => p.category === tab.id).length;

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                isActive ? 'bg-slate-950/30 text-slate-900' : 'bg-slate-700 text-slate-300'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-slate-800"
          >
            {/* Thumbnail Header */}
            <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

              {project.badge && (
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-sm">
                  {project.badge}
                </span>
              )}

              {project.impactMetric && (
                <div className="absolute bottom-2 left-3 right-3 text-[11px] text-cyan-300 font-medium truncate">
                  ⭐ {project.impactMetric}
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800/90 text-slate-300 border border-slate-700/60 text-[11px] font-mono px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[11px] text-slate-500 font-mono self-center">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FiEye size={14} />
                  <span>View Details</span>
                </button>

                <div className="flex items-center space-x-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                      title="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm"
                      title="Open Live Website"
                    >
                      <span>Live Site</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
