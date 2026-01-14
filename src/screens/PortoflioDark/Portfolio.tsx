"use client";

import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FolderIcon,
  XIcon,
} from "lucide-react";

// Twitter/X Icon component
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import React, { Suspense } from "react";
import { useTheme } from "../../contexts/ThemeContext";

// Magic UI Components
import { BlurFade } from "../../components/magicui/blur-fade";
import { AnimatedGradientText } from "../../components/magicui/animated-gradient-text";
import { MagicCard } from "../../components/magicui/magic-card";
import { ShimmerButton } from "../../components/magicui/shimmer-button";
import { Meteors } from "../../components/magicui/meteors";
import { Particles } from "../../components/magicui/particles";
import { IconCloud } from "../../components/magicui/icon-cloud";

// Three.js Background
import { ParticleBackground } from "../../components/three/ParticleBackground";

const contactButtons = [
  {
    icon: MailIcon,
    label: "Email",
    href: "mailto:agyarebismark6@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bismark-agyare-10371a1bb/",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    href: "https://twitter.com/jay_kharlly",
  },
  {
    icon: GithubIcon,
    label: "Github",
    href: "https://github.com/bismark66",
  },
];

const experienceCompanies = [
  { name: "ESOKO" },
  { name: "Smile At School" },
  { name: "Relu Interactives" },
  { name: "Dropin Ghana" },
  { name: "DigitalxBoost" },
];

const experienceDetails = [
  {
    title: "Full Stack Software Engineer",
    company: "ESOKO",
    type: "Remote",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Designed five dashboards to track sales and farmer engagement, delivering data-rich visuals for decision-making and business intelligence",
      "Deployed AI-powered chatbots delivering 1.2M+ agronomic messages, reducing call center inquiries by 8k/month through real-time updates",
      "Partnered with product managers to design an AI-driven GitHub documentation system, reducing onboarding time by 50%",
      "Configured monitoring and alerting systems to enhance reliability and reduce downtime",
    ],
  },
  {
    title: "IT Lead",
    company: "Smile At School (NGO)",
    type: "Remote",
    period: "Feb 2023 - Present",
    responsibilities: [
      "Conceptualized and rolled out digital collaboration tools, reducing communication delays by 45% across global teams",
      "Coordinated Virtual Exchange Program, enabling 200+ students from 4 countries in annual cross-cultural sessions",
      "Standardized digital resources and platforms, cutting global team communication delays by 40%",
      "Collaborate with a global team to align digital tools with organizational goals",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Relu Interactives",
    type: "Remote",
    period: "Feb 2021 - Present",
    responsibilities: [
      "Integrated semantic search with Langchain, Superbase vector store and custom embeddings",
      "Improved RESTful APIs linking VR environments to real-time data, ensuring 99.9% uptime",
      "Developed high-performance PWAs with React, boosting user engagement by 30%",
      "Proposed and led a fault-tolerant notification system using circuit breaker pattern",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Dropin Ghana",
    type: "Freelance",
    period: "Sep 2022 - Sep 2023",
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
    period: "May 2023 - Aug 2023",
    responsibilities: [
      "Modernized marketing web application with ReactJS and headless CMS",
      "Built user-friendly content workflows, saving the team 15-20 hours each month",
      "Implemented code-splitting and lazy loading, decreasing initial page load time by 35%",
      "Enhanced content strategy through real-time SEO metadata control",
    ],
  },
];

// Project type definition
interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient?: string;
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
    description:
      "Deployed AI chatbots delivering 1.2M+ messages and built comprehensive dashboards for farmer engagement analytics at ESOKO",
    tech: ["React", "AI/ML", "TypeScript", "Analytics"],
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/agronomic-chatbot",
    fullDescription:
      "Enterprise-scale agronomic platform at ESOKO delivering AI-powered chatbots that have sent over 1.2M+ messages to farmers. Built comprehensive dashboards for tracking sales, farmer engagement, and business intelligence with data-rich visualizations.",
    features: [
      "AI-powered chatbot delivering agronomic advice",
      "Real-time farmer engagement analytics",
      "5 interactive dashboards for decision-making",
      "Reduced call center inquiries by 8k/month",
    ],
    highlights: [
      "1.2M+ AI messages delivered",
      "8k/month call reduction",
      "50% faster onboarding",
    ],
  },
  {
    title: "Competitor Pricing Scraper",
    description:
      "Production-grade Node.js CLI tool with dual extraction modes, Puppeteer fallback for bot-protected sites, Google Sheets auto-export, and cron-based scheduling for market intelligence",
    tech: ["Node.js", "Puppeteer", "Google Sheets API", "Cheerio"],
    gradient: "from-rose-500 via-red-500 to-orange-500",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/competitive-pricing-scraper",
    fullDescription:
      "Professional-grade CLI tool for competitor price monitoring. Features dual extraction modes (table/card layouts), Puppeteer fallback for bot-protected sites, automatic Google Sheets export, and cron-based scheduling.",
    features: [
      "Dual extraction modes (table & card layouts)",
      "Puppeteer fallback for Cloudflare protection",
      "Google Sheets auto-export with formatting",
      "Cron-based automated scheduling",
      "Winston logging with file rotation",
    ],
    highlights: [
      "2,400+ lines of code",
      "7+ competitor integrations",
      "Automated scheduling",
    ],
  },

  {
    title: "Truckly - Logistics Platform Backend",
    description:
      "Full-stack logistics backend with NestJS featuring real-time driver tracking via Redis geospatial queries, WebSocket chat, WebRTC audio calls, and JWT auth with multi-role RBAC",
    tech: ["NestJS", "PostgreSQL", "Redis", "Socket.IO", "WebRTC"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/truckly-backend",
    fullDescription:
      "Complete logistics platform backend connecting customers with drivers for cargo transportation. Features real-time driver tracking using Redis geospatial queries (GEOADD/GEOSEARCH), WebSocket-based chat, WebRTC audio calls, and multi-role authentication.",
    features: [
      "Real-time driver tracking with Redis GEO",
      "WebSocket chat with Redis pub/sub",
      "WebRTC signaling for audio calls",
      "Multi-role RBAC (Customer, Driver, Fleet Owner)",
      "Paystack payment integration",
    ],
    highlights: [
      "Geospatial search",
      "Real-time tracking",
      "WebRTC audio calls",
    ],
  },
  {
    title: "VR-Integrated PWA Platform",
    description:
      "Developed high-performance PWAs with React at Relu Interactives, boosting user engagement by 30%",
    tech: ["React", "PWA", "RESTful APIs", "VR"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    hasGithub: false,
    fullDescription:
      "High-performance Progressive Web Applications integrated with VR environments at Relu Interactives. Improved RESTful APIs linking VR environments to real-time data with 99.9% uptime.",
    features: [
      "PWA with offline capability",
      "VR environment integration",
      "RESTful API development",
      "99.9% uptime guarantee",
    ],
    highlights: [
      "30% boost in user engagement",
      "99.9% API uptime",
      "VR integration",
    ],
  },
  {
    title: "Marketing Web Application",
    description:
      "Modernized marketing platform with ReactJS and headless CMS, reducing content publishing time from days to hours",
    tech: ["React.js", "Headless CMS", "SEO", "Performance"],
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    hasGithub: false,
    fullDescription:
      "Complete modernization of a marketing web application using ReactJS and headless CMS integration. Implemented code-splitting, lazy loading, and real-time SEO metadata control.",
    features: [
      "Headless CMS integration",
      "Code-splitting & lazy loading",
      "Real-time SEO metadata control",
      "User-friendly content workflows",
    ],
    highlights: [
      "35% faster page load",
      "15-20 hours saved monthly",
      "Instant publishing",
    ],
  },
  {
    title: "Ride Hailing Management System",
    description:
      "Led development of admin dashboard and public website for Dropin Ghana, supporting 10k+ monthly users with RBAC",
    tech: ["Next.js", "TypeScript", "OAuth2/JWT", "WebSocket"],
    gradient: "from-orange-500 via-pink-500 to-rose-500",
    hasGithub: false,
    fullDescription:
      "Comprehensive admin dashboard and public-facing website for Dropin Ghana, a ride-hailing service. Implemented role-based access control, real-time ride tracking via WebSocket, and streamlined CI/CD with automated testing.",
    features: [
      "Admin dashboard supporting 10k+ monthly users",
      "Role-Based Access Control with OAuth2/JWT",
      "Real-time ride updates via WebSocket",
      "Automated testing and build previews",
    ],
    highlights: [
      "10k+ monthly active users",
      "40+ unauthorized access incidents prevented",
      "Real-time tracking",
    ],
  },

  {
    title: "Fault-Tolerant Notification System",
    description:
      "Proposed and led notification system using circuit breaker pattern, ensuring 99% delivery rate",
    tech: ["Node.js", "Circuit Breaker", "NestJS", "Microservices"],
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    hasGithub: true,
    fullDescription:
      "Microservices-based notification system with circuit breaker pattern for fault tolerance. Designed to handle high throughput with graceful degradation and automatic recovery.",
    features: [
      "Circuit breaker pattern for fault tolerance",
      "Multi-channel notifications (Email, SMS, Push)",
      "Automatic retry with exponential backoff",
      "Health monitoring and alerting",
    ],
    highlights: [
      "99% delivery rate",
      "Fault-tolerant architecture",
      "Auto-recovery",
    ],
  },
];

const moreProjects: Project[] = [
  {
    title: "IVR Flow Builder Platform",
    description:
      "AI-powered IVR platform with multi-provider LLM integration (Groq, OpenAI, Anthropic), 6-stage NLU pipeline for intent classification, entity extraction & sentiment analysis, and visual drag-and-drop flow builder for non-technical users",
    tech: ["Next.js", "React Flow", "Redux", "Firebase", "Groq AI", "NLU"],
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/ivr-platform",
    fullDescription: "AI-powered Interactive Voice Response platform featuring multi-provider LLM integration with automatic fallback for 99.9% uptime. Includes a 6-stage NLU pipeline (preprocessing, intent classification, entity extraction, sentiment analysis, context enrichment, confidence scoring) and a visual drag-and-drop flow builder.",
    features: ["Multi-provider AI (Groq, OpenAI, Anthropic)", "6-stage NLU processing pipeline", "Visual drag-and-drop flow builder", "Real-time sentiment analysis", "Firebase Firestore persistence"],
    highlights: ["70% AI cost reduction", "99.9% uptime", "No-code flow building"],
  },
  {
    title: "Digital Collaboration Tools",
    description:
      "Conceptualized and rolled out digital tools for Smile At School NGO, reducing communication delays by 45%",
    tech: ["Digital Tools", "Communication", "NGO Tech"],
    hasGithub: false,
    fullDescription: "Digital collaboration suite for Smile At School NGO enabling seamless communication across global teams. Coordinated Virtual Exchange Programs connecting 200+ students from 4 countries.",
    features: ["Cross-country collaboration tools", "Virtual Exchange Program coordination", "Global team communication", "Digital resource standardization"],
    highlights: ["45% faster communication", "200+ students connected", "4 countries"],
  },
  {
    title: "AgroChem Inventory System",
    description:
      "Full-stack inventory management for agrochemical shops with role-based auth (Admin/Shopkeeper), real-time stock tracking, sales reporting with custom date filtering, and responsive mobile-first design",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI"],
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/agrochem-inventory",
    fullDescription: "Full-stack inventory management system for agrochemical shops built with Next.js 14 App Router. Features role-based authentication, real-time stock tracking with low-stock alerts, sales & credit tracking, and dynamic reporting with custom date ranges.",
    features: ["Role-based access (Admin/Shopkeeper)", "Real-time stock tracking & alerts", "Sales reporting with date filtering", "Credit tracking system", "Mobile-first responsive design"],
    highlights: ["Multi-role RBAC", "Custom date filtering", "In-app bug reporting"],
  },
  {
    title: "G-Client Learner - E-Learning Platform",
    description:
      "Modern e-learning platform with React 19 and TypeScript featuring JWT authentication, course enrollment, learner dashboard, and invoice management",
    tech: ["React 19", "TypeScript", "Mantine UI", "React Query", "Vite"],
    hasGithub: true,
    githubUrl: "https://github.com/bismark66/g_client_admin",
    fullDescription: "Comprehensive online learning management system for learners to discover and enroll in professional development tracks. Features secure JWT authentication with automatic token refresh, checkout and invoicing system, and personalized learner dashboard using React Query for server state and atomic design patterns.",
    features: ["JWT auth with token refresh", "Course enrollment & checkout", "Invoice management system", "Learner dashboard with progress tracking", "Google OAuth integration ready"],
    highlights: ["React 19 + TypeScript", "Mantine UI v8", "Atomic design architecture"],
  },
];

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "AI Messages Sent", value: "1.2M+" },
  { label: "Users Impacted", value: "10K+" },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Python",
  "AI/ML",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Figma",
  "Tailwind CSS",
  "Redux",
  "Firebase",
  "Cypress",
  "Javascript",
  "React Native",
  "React Query",
  "MySQL",
  "Axios",
  "ExpressJS",
  "WebSocket",
  "Firebase",
  "Langchain",
  "Discord Apps",
  "Content Management Systems",
  "Asana",
  "ClickUp",
  "WebRTC",
  "PWA",
  "Google Cloud",
  "System Design",
  "RESTful APIs",
  "Documentation",
  "Testing & Debugging",
  "Ant Design",
  "LLM Integration",
  "CRON jobs",
  "Data normalization & validation",
  "Logging & Observability",
  "Design Patterns",
  "NodeJs",
  "Role-Based Access Control",
  "Event-driven Architecture",
  "API Integration", 
  "SaaS"
];

// Project Modal Component
const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a1a] border border-white/10 shadow-2xl">
        {/* Header with gradient */}
        <div className={`h-32 bg-gradient-to-br ${project.gradient || 'from-purple-600 to-pink-600'} relative`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          >
            <XIcon className="w-5 h-5 text-white" />
          </button>
          <div className="absolute -bottom-8 left-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0a0a1a] border border-white/20 flex items-center justify-center">
              <FolderIcon className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-12">
          <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <p className="text-white/70 leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 text-white/80"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            {project.hasGithub && project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = (): JSX.Element => {
  const { theme } = useTheme();
  const [activeCompany, setActiveCompany] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <div className="bg-[#030014] min-h-screen text-white overflow-x-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          staticity={30}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] z-0" />
        <Meteors number={15} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1">
              <BlurFade delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    Available for new projects
                  </span>
                </div>
              </BlurFade>

              <BlurFade delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
                  <span className="text-white">Bismark</span>{" "}
                  <AnimatedGradientText className="text-5xl md:text-7xl lg:text-8xl font-bold">
                    Agyare
                  </AnimatedGradientText>
                </h1>
              </BlurFade>

              <BlurFade delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="text-xl md:text-2xl text-white/60 font-light">
                    Software Engineer
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xl md:text-2xl text-white/60 font-light">
                    Accra, Ghana
                  </span>
                </div>
              </BlurFade>

              <BlurFade delay={0.5}>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                  Full Stack Engineer with 4+ years of experience delivering web
                  applications and backend systems. Expertise in{" "}
                  <span className="text-purple-400">AI/ML integration</span>,{" "}
                  <span className="text-cyan-400">React & Next.js</span>, and{" "}
                  <span className="text-pink-400">scalable architectures</span>.
                </p>
              </BlurFade>

              <BlurFade delay={0.6}>
                <div className="flex flex-wrap gap-3">
                  {contactButtons.map((button, index) => (
                    <a key={index} href={button.href} target="_blank" rel="noopener noreferrer">
                      <ShimmerButton
                        className="text-sm"
                        background="rgba(255, 255, 255, 0.05)"
                        shimmerColor="rgba(255, 255, 255, 0.3)"
                      >
                        <button.icon className="w-4 h-4 mr-2" />
                        {button.label}
                      </ShimmerButton>
                    </a>
                  ))}
                </div>
              </BlurFade>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <BlurFade delay={0.3}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative">
                    <img
                      src="/bismark-profile.jpg"
                      alt="Bismark Agyare"
                      className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                  </div>

                  {/* Floating badges */}
                  {/* <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl px-4 py-2 backdrop-blur-md animate-float">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🚀</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        1.2M+ Messages
                      </span>
                    </div>
                  </div> */}

                  {/* <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl px-4 py-2 backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        AI Pioneer
                      </span>
                      <span className="text-lg animate-pulse">🤖</span>
                    </div>
                  </div> */}
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Stats */}
          <BlurFade delay={0.8}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Skills Section with Icon Cloud */}
      <section id="about" className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-sm font-semibold text-white/50 tracking-wider uppercase">
                Tech Stack
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <IconCloud
              icons={[
                <svg key="ts" viewBox="0 0 128 128" className="w-full h-full"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a6.27 6.27 0 00-5.17-2.75c-3.35-.12-5.54 1.55-5.54 4.2a3.85 3.85 0 00.45 2.05c.58 1.15 1.73 1.88 5.64 3.56 7.22 3.09 10.31 5.12 12.48 8.19a15.77 15.77 0 011.38 11.55 15.59 15.59 0 01-6.53 8.67c-2.54 1.52-5.92 2.42-10.31 2.74-2.33.17-8.39-.2-10.15-.62a22.74 22.74 0 01-9.31-5.58 22.31 22.31 0 01-3.87-5.44 1.52 1.52 0 01.35-.21c.17-.1 2-.56 4.06-1s3.94-.76 4.17-.81l.42-.08.62 1a15.79 15.79 0 006.28 4.8 8.41 8.41 0 009.17-1.11 4.15 4.15 0 00.5-5.41c-.67-.91-2.07-1.67-6.31-3.43-4.86-2-6.94-3.2-8.83-5a13.81 13.81 0 01-3.72-7c-.4-1.92-.43-6.52-.06-8.38a14.18 14.18 0 0112.37-11.22c2.52-.36 8.11.09 10.45.84zM52.33 56.4l.05 5H36.69V115H24.77V61.41H9.13v-4.86a45.62 45.62 0 01.14-5.08c.08-.06 9.74-.08 21.47-.06l21.3.05z"/></svg>,
                <svg key="react" viewBox="0 0 128 128" className="w-full h-full"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>,
                <svg key="node" viewBox="0 0 128 128" className="w-full h-full"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.206 1.27 1.206h5.731c.349 0 .882-.269 1.12-.581.238-.313.299-.747.227-1.141-1.317-9.588-7.934-14.055-22.189-14.055-12.68 0-20.231 5.349-20.231 14.321 0 9.74 7.521 12.426 19.669 13.622 14.545 1.42 15.57 3.533 15.57 6.382 0 4.933-3.96 7.028-13.262 7.028z"/></svg>,
                <svg key="nextjs" viewBox="0 0 128 128" className="w-full h-full"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="#fff"/></svg>,
                <svg key="python" viewBox="0 0 128 128" className="w-full h-full"><linearGradient id="a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>,
                <svg key="nestjs" viewBox="0 0 128 128" className="w-full h-full"><path fill="#DF234F" d="M75.567 19.357c-1.394 0-2.637.453-3.703 1.164a6.021 6.021 0 014.062 5.744 6.022 6.022 0 01-1.598 4.094c.246.039.492.059.742.059 3.395 0 6.148-2.785 6.148-6.22 0-2.836-1.868-5.22-4.407-5.962a6.15 6.15 0 00-1.244-.879zM74.77 27.35a.66.66 0 00-.207 0 .7.7 0 00-.156.031.556.556 0 00-.11.039 6.73 6.73 0 01-1.066.39c-.324.087-.652.16-.988.212a6.802 6.802 0 01-2.82-.074 7.587 7.587 0 01-.637-.191 9.14 9.14 0 01-.403-.153 4.078 4.078 0 00-.273-.102c-.09-.03-.184-.05-.277-.074a1.66 1.66 0 00-.277-.043 1.324 1.324 0 00-.281-.004 1.175 1.175 0 00-.278.043c-.094.023-.184.058-.27.101s-.171.094-.25.149a1.426 1.426 0 00-.414.441c-.047.086-.09.172-.125.266a1.504 1.504 0 00-.082.281 1.869 1.869 0 00-.035.29c-.004.097 0 .194.012.292.012.093.031.184.055.277.027.094.058.184.094.27.039.089.082.175.133.261.05.086.105.168.164.246.059.078.121.152.187.223a2.1 2.1 0 00.215.199c.074.062.152.117.234.168.082.051.168.094.254.133.086.039.176.074.266.102l.168.05c-.14.02-.277.052-.41.094-.129.043-.254.098-.375.16a2.073 2.073 0 00-.344.215 2.011 2.011 0 00-.309.27 2.03 2.03 0 00-.262.316 1.964 1.964 0 00-.203.36 1.98 1.98 0 00-.14.39 2.006 2.006 0 00-.063.41 2.012 2.012 0 00.015.415c.02.136.054.27.101.398a2.002 2.002 0 00.184.375 2.013 2.013 0 00.254.332c.094.102.199.196.312.278a2.058 2.058 0 00.36.219c.128.062.262.114.398.152a2.054 2.054 0 00.422.074 2.078 2.078 0 00.422-.016 2.072 2.072 0 00.41-.101 2.077 2.077 0 00.379-.184 2.026 2.026 0 00.336-.254 2.04 2.04 0 00.281-.309 2.006 2.006 0 00.223-.356 2.01 2.01 0 00.156-.39 2.016 2.016 0 00.078-.407 2.016 2.016 0 00-.012-.418 2.03 2.03 0 00-.098-.406 4.413 4.413 0 00-.175-.394c2.128-.098 4.183-.633 6.063-1.562v.004c.05.062.109.12.168.172.23.207.52.348.832.402a1.584 1.584 0 00.938-.117 1.6 1.6 0 00.738-.684 1.57 1.57 0 00.004-1.527 1.566 1.566 0 00-.707-.711 1.556 1.556 0 00-.973-.137zM64 32.773c-.273 0-.539.032-.8.078a1.71 1.71 0 00-.27.067 8.226 8.226 0 01-.683.187c-.203.047-.41.086-.617.117a7.652 7.652 0 01-3.133-.074 8.316 8.316 0 01-.703-.211 10.24 10.24 0 01-.449-.168 5.196 5.196 0 00-.3-.114c-.101-.031-.207-.055-.313-.082a1.833 1.833 0 00-.316-.047 1.5 1.5 0 00-.316-.004 1.326 1.326 0 00-.313.047 1.264 1.264 0 00-.305.117c-.098.047-.192.105-.28.172a1.617 1.617 0 00-.465.496 1.585 1.585 0 00-.145.3 1.695 1.695 0 00-.094.317 2.08 2.08 0 00-.035.328c-.004.11 0 .219.012.328.012.106.035.21.062.313.031.105.066.207.106.304.043.102.094.2.152.293.059.097.12.191.188.281a2.354 2.354 0 00.215.25 2.386 2.386 0 00.246.226c.086.07.175.133.266.188.094.059.191.11.29.153.097.043.198.082.3.113l.192.055c-.156.024-.309.059-.457.11a2.351 2.351 0 00-.422.179 2.306 2.306 0 00-.386.243 2.243 2.243 0 00-.344.3 2.276 2.276 0 00-.293.355 2.204 2.204 0 00-.227.406 2.215 2.215 0 00-.156.44 2.243 2.243 0 00-.071.46 2.252 2.252 0 00.016.465c.023.156.063.305.117.449.054.144.121.281.2.41.082.129.175.25.277.364a2.278 2.278 0 00.855.558c.148.066.3.117.457.152a2.302 2.302 0 00.473.082 2.32 2.32 0 00.473-.016 2.313 2.313 0 00.46-.117 2.32 2.32 0 00.426-.203 2.269 2.269 0 00.375-.285 2.27 2.27 0 00.316-.348 2.24 2.24 0 00.25-.402 2.265 2.265 0 00.175-.441 2.253 2.253 0 00-.024-.926 4.963 4.963 0 00-.192-.442c4.105-.207 7.945-1.586 11.148-3.914a2.3 2.3 0 002.176.703 2.305 2.305 0 001.648-1.258 2.304 2.304 0 00-1.238-3.106 2.311 2.311 0 00-2.047.215 2.293 2.293 0 00-.984 1.637 2.3 2.3 0 00.067.824c-2.367 1.984-5.285 3.274-8.437 3.653a2.245 2.245 0 00-.879-.54 2.264 2.264 0 00-.988-.101z"/></svg>,
                <svg key="mongodb" viewBox="0 0 128 128" className="w-full h-full"><path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M90.491 57.282c-.37-4.79-1.896-9.266-4.582-13.271-2.686-4.006-6.177-7.311-10.439-10.135-4.261-2.825-8.757-4.79-13.676-5.93-4.057-.826-7.934-1.113-11.59-.874a44.857 44.857 0 00-9.474 1.42c-2.685.75-5.37 1.87-8.055 3.334-2.686 1.463-5.192 3.24-7.519 5.304-2.326 2.063-4.262 4.307-5.807 6.737-1.545 2.43-2.596 4.937-3.154 7.52-.558 2.583-.558 5.165 0 7.748.559 2.583 1.501 5.058 2.829 7.44 1.328 2.382 2.954 4.546 4.877 6.492 1.924 1.946 3.995 3.51 6.216 4.69 2.221 1.18 4.515 2.032 6.883 2.556 2.367.524 4.879.72 7.534.594 2.655-.126 5.254-.65 7.797-1.57 2.542-.921 5.105-2.194 7.686-3.816 2.581-1.623 4.926-3.498 7.034-5.628 2.107-2.13 3.834-4.443 5.18-6.94 1.346-2.496 2.113-5.091 2.302-7.787.19-2.696-.113-5.491-.906-8.385z"/></svg>,
                <svg key="docker" viewBox="0 0 128 128" className="w-full h-full"><path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/></svg>,
                <svg key="aws" viewBox="0 0 128 128" className="w-full h-full"><path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-28.703 5.359V42.43l15.149 6.121V26.515l-15.149-6.121zm34.276 0l-15.149 5.738V42.43l15.149-6.121V20.394z"/></svg>,
                <svg key="git" viewBox="0 0 128 128" className="w-full h-full"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>,
                <svg key="vscode" viewBox="0 0 128 128" className="w-full h-full"><path fill="#0065A9" d="M95.678 24.686l-31.372 29.467L34.609 29.449 17.322 39.22l27.277 24.758-27.277 24.77 17.287 9.771 29.697-24.696 31.372 29.467L112.678 92.14V35.86z"/></svg>,
                <svg key="postgresql" viewBox="0 0 128 128" className="w-full h-full"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985" fill="#336791"/></svg>,
                <svg key="redis" viewBox="0 0 128 128" className="w-full h-full"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78.2s48-10.5 55.8-13.3c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.3z"/></svg>,
                <svg key="figma" viewBox="0 0 128 128" className="w-full h-full"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67V0z"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/></svg>,
                <svg key="tailwind" viewBox="0 0 128 128" className="w-full h-full"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#38bdf8"/></svg>,
              ]}
            />
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-24 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-sm font-semibold text-white/50 tracking-wider uppercase">
                Experience
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            {/* Company Tabs */}
            <BlurFade delay={0.2}>
              <div className="relative">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-cyan-500/50" />
                <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 pl-0 lg:pl-6">
                  {experienceCompanies.map((company, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCompany(index)}
                      className={`relative font-medium text-sm lg:text-base whitespace-nowrap transition-all duration-300 text-left px-4 py-3 rounded-xl ${
                        activeCompany === index
                          ? "text-white bg-white/10 border border-white/20"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {company.name}
                      {activeCompany === index && (
                        <div className="hidden lg:block absolute left-[-25px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Experience Details */}
            <BlurFade delay={0.3}>
              <MagicCard className="p-8" gradientColor="#1a1a2e">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {experienceDetails[activeCompany].title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
                    {experienceDetails[activeCompany].period}
                  </span>
                </div>

                <div className="text-lg font-medium text-cyan-400 mb-6">
                  {experienceDetails[activeCompany].company} •{" "}
                  {experienceDetails[activeCompany].type}
                </div>

                <div className="space-y-4">
                  {experienceDetails[activeCompany].responsibilities.map(
                    (resp, index) => (
                      <p key={index} className="flex gap-3 text-white/70">
                        <span className="text-purple-400 mt-1.5">▸</span>
                        <span>{resp}</span>
                      </p>
                    )
                  )}
                </div>
              </MagicCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-sm font-semibold text-white/50 tracking-wider uppercase">
                Featured Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.05}>
                <MagicCard
                  className="h-full overflow-hidden cursor-pointer group"
                  gradientFrom="#8b5cf6"
                  gradientTo="#22d3d3"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <FolderIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <ExternalLinkIcon className="w-4 h-4 text-white/70" />
                      </button>
                      {project.hasGithub && (
                        <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <GithubIcon className="w-4 h-4 text-white/70" />
                        </button>
                      )}
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-sm font-semibold text-white/50 tracking-wider uppercase">
                More Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreProjects.map((project, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.05}>
                <MagicCard 
                  className="p-6 h-full cursor-pointer hover:border-purple-500/30 transition-colors" 
                  gradientColor="#1a1a2e"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10">
                      <FolderIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <ExternalLinkIcon className="w-4 h-4 text-white/50 hover:text-white" />
                      </button>
                      {project.hasGithub && (
                        <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <GithubIcon className="w-4 h-4 text-white/50 hover:text-white" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedGradientText>Let's Work Together</AnimatedGradientText>
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:agyarebismark6@gmail.com">
                <ShimmerButton
                  className="px-8 py-4 text-base"
                  shimmerColor="rgba(139, 92, 246, 0.5)"
                  background="linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Say Hello
                </ShimmerButton>
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <div className="max-w-6xl mx-auto mt-24 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} Bismark Agyare. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {contactButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    aria-label={button.label}
                  >
                    <button.icon className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};
