import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
  MapPinIcon,
  ArrowUpRightIcon,
  ChevronRightIcon,
} from "lucide-react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const socialLinks = [
  { icon: MailIcon, label: "Email", href: "mailto:agyarebismark6@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/bismark-agyare-10371a1bb/" },
  { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com/jay_kharlly" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/bismark66" },
];

const stats = [
  { label: "Years Experience", value: "4+", suffix: "" },
  { label: "Projects Delivered", value: "20+", suffix: "" },
  { label: "Companies Served", value: "5+", suffix: "" },
  { label: "Users Impacted", value: "10K+", suffix: "" },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "Redux", "React Query", "Mantine UI", "Ant Design", "PWA"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "Python", "REST APIs", "WebSocket", "WebRTC", "CRON jobs", "Event-driven Architecture"],
  },
  {
    label: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "AWS", "Google Cloud", "Docker"],
  },
  {
    label: "AI/ML & Tools",
    skills: ["AI/ML", "LLM Integration", "Langchain", "System Design", "RBAC", "CI/CD", "Git", "Figma", "Testing & Debugging", "Logging & Observability"],
  },
];

const experienceCompanies = [
  { name: "ESOKO", short: "ESOKO" },
  { name: "Smile At School", short: "Smile" },
  { name: "Relu Interactives", short: "Relu" },
  { name: "Dropin Ghana", short: "Dropin" },
  { name: "DigitalxBoost", short: "DxB" },
];

const experienceDetails = [
  {
    title: "Full Stack Software Engineer",
    company: "ESOKO",
    type: "Remote",
    period: "Feb 2025 – Present",
    responsibilities: [
      "Built the DigiMakt internal admin dashboards in React covering agents, farmers, finance, warehouse, recruitment, training, and marketplace operations; developed agent-facing web forms including KYC document upload (Ghana Card, profile photo) and inventory assignment/return workflows",
      "Built the marketing landing page for ESOKO's Push messaging platform (SMS & Voice API) — including pricing, feature highlights, and multi-language SDK code examples; integrated CopilotKit AI popup assistant for on-site customer engagement, scoped to answer product queries and route unknowns to support",
      "Built the agronomic advisory AI chat frontend in React — featuring a session sidebar for multi-turn conversation management, image upload support, and real-time LLM responses; implemented with Mantine UI and TanStack Query for data fetching and state management",
      "Developed a RAG-based internal documentation tool that auto-indexes codebases on CI/CD events using tree-sitter (AST chunking), Ollama embeddings, and Pinecone vector search — reducing engineering onboarding time by 50%",
      "Developed the ESOKO marketplace React frontend covering full buyer, seller, and agent flows — product listings, cart & Paystack checkout, seller analytics dashboard, agent registration/inventory management, and order tracking",
    ],
  },
  {
    title: "IT Lead",
    company: "Smile At School (NGO)",
    type: "Remote",
    period: "Feb 2023 – Present",
    responsibilities: [
      "Redesigned and built the Smile at School NGO website in Next.js — full multi-page site (home, about, programs, gallery, blog, volunteer, contact) with Contentful CMS integration for dynamic blog and programs content",
      "Implemented Incremental Static Regeneration (ISR) with hourly revalidation, social sharing, and complete SEO metadata (Open Graph, Twitter cards, canonical URLs) to boost organic reach",
      "Built animated UI components including scroll-triggered counters, testimonials carousel, and parallax scroll backgrounds to strengthen donor and volunteer engagement",
      "Coordinated Virtual Exchange Program connecting 200+ students across 4 countries, and standardized digital collaboration tools across global teams",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Relu Interactives",
    type: "Remote",
    period: "Feb 2021 – Present",
    responsibilities: [
      "Built the Draco fuel station management REST API in NestJS — JWT-based auth with role-based access, TypeORM + PostgreSQL data layer, Redis caching, and 20+ resource modules covering stations, pumps, tanks, fuel inventory, replenishment, transactions, promotions, and company management",
      "Contributed to the Relu notification service NestJS backend — a multi-provider SMS & email dispatch system supporting Arkesel, Hubtel, Hellio, and BigMsgBox, with webhook delivery, analytics, cron scheduling, and per-app API key management",
      "Built the Draco transactors mobile app using Framework7 and React — covering fuel transaction recording, pump totalizer tracking, vehicle management, promotions, and onboarding flows",
      "Contributed to the Relu Spatial browser-based 3D/AR editor (React Three Fiber, @react-three/xr) — scene inspection panel, module views, phone/web preview modes, and AWS S3 asset management",
      "Contributed to the notification service admin dashboard with SMS & email activity monitoring, analytics/KPI charts, multi-app API key management, and CopilotKit AI assistant integration",
      "Delivered responsive Next.js applications across multiple products with shared design systems, role-based route guards, and atomic component architecture",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Dropin Ghana",
    type: "Freelance",
    period: "Sep 2022 – Sep 2023",
    responsibilities: [
      "Led the design and development of admin web dashboard, supporting 10k+ monthly users",
      "Introduced Role Based Access Control with OAuth2/JWT, reducing unauthorized access by 40+ incidents/month",
      "Streamlined CI/CD for frontend by adding automated testing and build previews",
      "Collaborated with backend teams to integrate real-time ride updates via WebSocket",
    ],
  },
  {
    title: "Front End Engineer",
    company: "DigitalxBoost",
    type: "Freelance",
    period: "May 2023 – Aug 2023",
    responsibilities: [
      "Modernized marketing web application with ReactJS and headless CMS",
      "Built user-friendly content workflows, saving the team 15–20 hours each month",
      "Implemented code-splitting and lazy loading, decreasing initial page load time by 35%",
      "Enhanced content strategy through real-time SEO metadata control",
    ],
  },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  accentColor: string;
  hasGithub: boolean;
  fullDescription?: string;
  features?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const featuredProjects: Project[] = [
  {
    title: "AI-Powered Agronomic Platform",
    description: "Deployed AI chatbots delivering 1.2M+ messages and built comprehensive dashboards for farmer engagement analytics at ESOKO.",
    tech: ["React", "AI/ML", "TypeScript", "Analytics"],
    accentColor: "#6EE7B7",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/agronomic-chatbot",
    fullDescription: "Enterprise-scale agronomic platform at ESOKO delivering AI-powered chatbots that have sent over 1.2M+ messages to farmers. Built comprehensive dashboards for tracking sales, farmer engagement, and business intelligence with data-rich visualizations.",
    features: ["AI-powered chatbot delivering agronomic advice", "Real-time farmer engagement analytics", "5 interactive dashboards for decision-making", "Reduced call center inquiries by 8k/month"],
    highlights: ["1.2M+ AI messages delivered", "8k/month call reduction", "50% faster onboarding"],
  },
  {
    title: "Competitor Pricing Scraper",
    description: "Production-grade Node.js CLI with dual extraction modes, Puppeteer fallback, Google Sheets auto-export, and cron scheduling.",
    tech: ["Node.js", "Puppeteer", "Google Sheets API", "Cheerio"],
    accentColor: "#A78BFA",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/competitor-pricing-scraper",
    fullDescription: "Professional-grade CLI tool for competitor price monitoring. Features dual extraction modes, Puppeteer fallback for bot-protected sites, automatic Google Sheets export, and cron-based scheduling.",
    features: ["Dual extraction modes (table & card layouts)", "Puppeteer fallback for Cloudflare protection", "Google Sheets auto-export with formatting", "Cron-based automated scheduling", "Winston logging with file rotation"],
    highlights: ["2,400+ lines of code", "7+ competitor integrations", "Automated scheduling"],
  },
  {
    title: "Truckly – Logistics Platform Backend",
    description: "Full-stack logistics backend with NestJS featuring real-time driver tracking, WebSocket chat, WebRTC audio calls, and JWT RBAC.",
    tech: ["NestJS", "PostgreSQL", "Redis", "Socket.IO", "WebRTC"],
    accentColor: "#60A5FA",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/truckly-backend",
    fullDescription: "Complete logistics platform backend connecting customers with drivers. Features real-time driver tracking using Redis geospatial queries, WebSocket-based chat, WebRTC audio calls, and multi-role authentication.",
    features: ["Real-time driver tracking with Redis GEO", "WebSocket chat with Redis pub/sub", "WebRTC signaling for audio calls", "Multi-role RBAC (Customer, Driver, Fleet Owner)", "Paystack payment integration"],
    highlights: ["Geospatial search", "Real-time tracking", "WebRTC audio calls"],
  },
  {
    title: "VR-Integrated PWA Platform",
    description: "High-performance PWAs integrated with VR environments at Relu Interactives, boosting user engagement by 30% with 99.9% API uptime.",
    tech: ["React", "PWA", "RESTful APIs", "VR"],
    accentColor: "#34D399",
    hasGithub: false,
    fullDescription: "High-performance Progressive Web Applications integrated with VR environments. Improved RESTful APIs linking VR environments to real-time data with 99.9% uptime.",
    features: ["PWA with offline capability", "VR environment integration", "RESTful API development", "99.9% uptime guarantee"],
    highlights: ["30% boost in engagement", "99.9% API uptime", "VR integration"],
  },
  {
    title: "Ride Hailing Management System",
    description: "Admin dashboard and public site for Dropin Ghana supporting 10k+ monthly users with RBAC, real-time rides, and automated CI/CD.",
    tech: ["Next.js", "TypeScript", "OAuth2/JWT", "WebSocket"],
    accentColor: "#F472B6",
    hasGithub: false,
    fullDescription: "Comprehensive admin dashboard and public-facing website for Dropin Ghana. Implemented role-based access control, real-time ride tracking via WebSocket, and streamlined CI/CD.",
    features: ["Admin dashboard supporting 10k+ monthly users", "Role-Based Access Control with OAuth2/JWT", "Real-time ride updates via WebSocket", "Automated testing and build previews"],
    highlights: ["10k+ monthly users", "40+ security incidents prevented", "Real-time tracking"],
  },
  {
    title: "IVR Flow Builder Platform",
    description: "AI-powered IVR platform with multi-provider LLM integration, 6-stage NLU pipeline, and visual drag-and-drop flow builder.",
    tech: ["Next.js", "React Flow", "Redux", "Firebase", "Groq AI"],
    accentColor: "#FBBF24",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/ivr-platform",
    fullDescription: "AI-powered Interactive Voice Response platform featuring multi-provider LLM integration with automatic fallback. Includes a 6-stage NLU pipeline and a visual drag-and-drop flow builder.",
    features: ["Multi-provider AI (Groq, OpenAI, Anthropic)", "6-stage NLU processing pipeline", "Visual drag-and-drop flow builder", "Real-time sentiment analysis", "Firebase Firestore persistence"],
    highlights: ["70% AI cost reduction", "99.9% uptime", "No-code flow building"],
  },
];

const moreProjects: Project[] = [
  {
    title: "AgroChem Inventory System",
    description: "Full-stack inventory management for agrochemical shops with role-based auth, real-time stock tracking, and sales reporting.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI"],
    accentColor: "#6EE7B7",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/agrochem-inventory",
    fullDescription: "Full-stack inventory management system built with Next.js 14 App Router. Features role-based authentication, real-time stock tracking with low-stock alerts, and dynamic reporting.",
    features: ["Role-based access (Admin/Shopkeeper)", "Real-time stock tracking & alerts", "Sales reporting with date filtering", "Credit tracking system", "Mobile-first responsive design"],
    highlights: ["Multi-role RBAC", "Custom date filtering", "In-app bug reporting"],
  },
  {
    title: "G-Client Learner – E-Learning Platform",
    description: "Modern e-learning platform with React 19, JWT auth, course enrollment, learner dashboard, and invoice management.",
    tech: ["React 19", "TypeScript", "Mantine UI", "React Query"],
    accentColor: "#A78BFA",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/g_client_admin",
    fullDescription: "Comprehensive online learning management system with secure JWT auth, checkout, invoicing, and personalized learner dashboard using React Query and atomic design patterns.",
    features: ["JWT auth with token refresh", "Course enrollment & checkout", "Invoice management system", "Learner dashboard with progress tracking", "Google OAuth integration ready"],
    highlights: ["React 19 + TypeScript", "Mantine UI v8", "Atomic design architecture"],
  },
  {
    title: "Digital Collaboration Tools",
    description: "Digital tools for Smile At School NGO reducing communication delays by 45% and enabling 200+ students across 4 countries.",
    tech: ["Digital Tools", "Communication", "NGO Tech"],
    accentColor: "#60A5FA",
    hasGithub: false,
    fullDescription: "Digital collaboration suite for Smile At School NGO enabling seamless communication across global teams. Coordinated Virtual Exchange Programs connecting 200+ students from 4 countries.",
    features: ["Cross-country collaboration tools", "Virtual Exchange Program coordination", "Global team communication", "Digital resource standardization"],
    highlights: ["45% faster communication", "200+ students connected", "4 countries"],
  },
  {
    title: "Fault-Tolerant Notification System",
    description: "Microservices-based notification system using circuit breaker pattern ensuring 99% delivery rate with auto-recovery.",
    tech: ["Node.js", "NestJS", "Circuit Breaker", "Microservices"],
    accentColor: "#F472B6",
    hasGithub: true,
    fullDescription: "Microservices-based notification system with circuit breaker pattern for fault tolerance. Handles high throughput with graceful degradation and automatic recovery.",
    features: ["Circuit breaker pattern for fault tolerance", "Multi-channel notifications (Email, SMS, Push)", "Automatic retry with exponential backoff", "Health monitoring and alerting"],
    highlights: ["99% delivery rate", "Fault-tolerant architecture", "Auto-recovery"],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Section Wrapper ──────────────────────────────────────────────────────────

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={`relative py-24 px-4 md:px-8 z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = ({ label, title }: { label: string; title: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="mb-14">
    <div className="flex items-center gap-3 mb-4">
      <div className="section-line" />
      <span className="text-xs font-mono font-semibold tracking-widest text-[#6EE7B7] uppercase">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] leading-tight">{title}</h2>
  </motion.div>
);

// ─── Project Modal ────────────────────────────────────────────────────────────

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-white/8 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Accent top bar */}
            <div className="h-1 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#f5f5f5] leading-tight mb-1">{project.title}</h2>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-[#9ca3af] border border-white/6">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/6"
              >
                <XIcon className="w-4 h-4 text-[#6b7280]" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <p className="text-[#9ca3af] leading-relaxed mb-6 text-sm">
                {project.fullDescription || project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs rounded-lg border text-[#d1d5db]" style={{ borderColor: `${project.accentColor}30`, background: `${project.accentColor}08` }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-white/6">
                {project.hasGithub && project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 transition-colors text-sm text-[#d1d5db]">
                    <GithubIcon className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 transition-colors text-sm text-[#d1d5db]">
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Main Portfolio ───────────────────────────────────────────────────────────

export const Portfolio = (): JSX.Element => {
  const [activeCompany, setActiveCompany] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen text-[#f5f5f5] overflow-x-hidden" style={{ backgroundColor: "#080808" }}>
      {/* Background: noise + glow */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="glow-blob" aria-hidden="true" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">

            {/* Left – Text */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 mb-8">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6EE7B7]" />
                  </span>
                  <span className="text-xs font-medium text-[#9ca3af]">Available for new projects</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tight leading-none">
                  <span className="text-[#f5f5f5]">Bismark</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#6EE7B7] via-[#A78BFA] to-[#6EE7B7] bg-clip-text text-transparent bg-[length:200%] animate-gradient-text">
                    Agyare
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-3 mb-7"
              >
                <span className="text-base text-[#6b7280] font-light tracking-wide">Full Stack Engineer</span>
                <span className="w-px h-4 bg-white/10" />
                <span className="flex items-center gap-1.5 text-base text-[#6b7280] font-light">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#6EE7B7]" />
                  Accra, Ghana
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-base text-[#9ca3af] leading-relaxed mb-10 max-w-md"
              >
                4+ years building production-grade web applications and backend systems. I specialise in{" "}
                <span className="text-[#6EE7B7]">AI/ML integration</span>,{" "}
                <span className="text-[#A78BFA]">React & Next.js</span>, and{" "}
                <span className="text-[#60A5FA]">scalable architectures</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="mailto:agyarebismark6@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-[#6EE7B7] text-[#080808] hover:bg-[#5dd4a6] transition-colors"
                >
                  <MailIcon className="w-4 h-4" />
                  Say Hello
                </a>
                {socialLinks.slice(1).map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/8 bg-white/3 text-[#9ca3af] hover:text-[#f5f5f5] hover:bg-white/6 transition-all"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right – Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Outer glow ring */}
                <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[#6EE7B7]/30 via-[#A78BFA]/20 to-transparent blur-sm" />
                {/* Photo wrapper with float */}
                <div className="relative photo-float">
                  <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#6EE7B7]/10 to-[#A78BFA]/10 blur-xl" />
                  <img
                    src="/bismark-profile.jpg"
                    alt="Bismark Agyare"
                    className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[24px] object-cover border border-white/8 shadow-2xl"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[#080808]/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-5 -left-6 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#111111] border border-white/8 shadow-xl backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#6EE7B7]/10 flex items-center justify-center">
                    <span className="text-sm">🤖</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#f5f5f5]">1.2M+ AI Messages</div>
                    <div className="text-[10px] text-[#6b7280]">Delivered to farmers</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 bg-[#080808] hover:bg-[#0f0f0f] transition-colors">
                <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#6EE7B7] to-[#A78BFA] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-[#6b7280] text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────────── */}
      <Section id="about">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Expertise" title="Tech Stack" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, gi) => (
              <motion.div key={gi} variants={fadeUp} custom={gi * 0.5}>
                <h3 className="text-xs font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      variants={fadeUp}
                      custom={si * 0.3}
                      className="skill-pill px-3 py-1.5 text-sm rounded-lg border border-white/8 bg-white/3 text-[#9ca3af] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Community ─────────────────────────────────────────────────────── */}
      {/* Drop your Python community photo at: public/python-community.jpg   */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-72 md:h-96 overflow-hidden"
      >
        <img
          src="/python-community.jpeg"
          alt="Bismark at Python Ghana community meetup"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-transparent" />
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-md"
            >
              <span className="text-xs font-mono font-semibold tracking-widest text-[#6EE7B7] uppercase mb-3 block">Community</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                Proud member of the<br />
                <span className="text-[#6EE7B7]">Python Ghana</span> community
              </h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Connecting with developers, sharing knowledge, and growing the local tech ecosystem — one meetup at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Experience ────────────────────────────────────────────────────── */}
      <Section id="experience">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Career" title="Experience" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tab list */}
            <motion.div variants={fadeUp} className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {experienceCompanies.map((co, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCompany(i)}
                  className={`flex-shrink-0 lg:flex-shrink text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCompany === i
                      ? "bg-[#6EE7B7]/10 text-[#6EE7B7] border border-[#6EE7B7]/20"
                      : "text-[#6b7280] hover:text-[#9ca3af] hover:bg-white/3 border border-transparent"
                  }`}
                >
                  <span className="lg:hidden">{co.short}</span>
                  <span className="hidden lg:block">{co.name}</span>
                </button>
              ))}
            </motion.div>

            {/* Tab content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCompany}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/6 bg-[#0f0f0f] p-6"
                >
                  {(() => {
                    const exp = experienceDetails[activeCompany];
                    return (
                      <>
                        <div className="mb-5">
                          <h3 className="text-lg font-bold text-[#f5f5f5] mb-1">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[#6EE7B7] text-sm font-medium">{exp.company}</span>
                            <span className="text-white/20">·</span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-[#9ca3af] border border-white/6">{exp.type}</span>
                            <span className="text-white/20">·</span>
                            <span className="text-xs text-[#6b7280] font-mono">{exp.period}</span>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#9ca3af] leading-relaxed">
                              <ChevronRightIcon className="w-3.5 h-3.5 text-[#6EE7B7] mt-0.5 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Section id="projects">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Work" title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                onClick={() => setSelectedProject(project)}
                className="project-card group relative rounded-2xl border border-white/6 bg-[#0f0f0f] overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Accent bar */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accentColor}80, transparent)` }} />

                <div className="p-5">
                  {/* Icon + title row */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-[#f5f5f5] leading-snug pr-4">{project.title}</h3>
                    <ArrowUpRightIcon
                      className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: project.accentColor }}
                    />
                  </div>

                  <p className="text-sm text-[#6b7280] leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech, ti) => (
                      <span key={ti} className="px-2 py-1 text-xs rounded-md bg-white/4 text-[#9ca3af] border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                    {project.hasGithub && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#f5f5f5] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#f5f5f5] transition-colors"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                    <span className="ml-auto text-xs text-[#6b7280]/60">Click for details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── More Projects ─────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="More" title="Other Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreProjects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                onClick={() => setSelectedProject(project)}
                className="project-card group flex items-start gap-4 p-4 rounded-xl border border-white/6 bg-[#0f0f0f] cursor-pointer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: `${project.accentColor}15` }}>
                  <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: project.accentColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-bold text-[#f5f5f5] leading-snug">{project.title}</h3>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 flex-shrink-0 ml-2 mt-0.5 text-[#4b5563] group-hover:text-[#9ca3af] transition-colors" />
                  </div>
                  <p className="text-xs text-[#6b7280] leading-relaxed mb-2.5 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, ti) => (
                      <span key={ti} className="px-2 py-0.5 text-[10px] rounded bg-white/4 text-[#9ca3af]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <Section id="contact">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-line" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#6EE7B7] uppercase">Contact</span>
              <div className="section-line" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#6EE7B7] to-[#A78BFA] bg-clip-text text-transparent">
                Build
              </span>{" "}
              Something
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed mb-10">
              Open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:agyarebismark6@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#6EE7B7] text-[#080808] font-semibold text-sm hover:bg-[#5dd4a6] transition-colors shadow-lg shadow-[#6EE7B7]/10"
              >
                <MailIcon className="w-4 h-4" />
                agyarebismark6@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#4b5563]">© {new Date().getFullYear()} Bismark Agyare · All rights reserved</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#4b5563] hover:text-[#6EE7B7] transition-colors"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Project Modal ─────────────────────────────────────────────────── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
