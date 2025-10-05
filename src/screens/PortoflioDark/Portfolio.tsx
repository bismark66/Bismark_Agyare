import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useTheme } from "../../contexts/ThemeContext";

// Custom styles for animations
const customStyles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
`;

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
    icon: ExternalLinkIcon,
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
      "Partnered with product managers to design an AI-driven GitHub documentation system, reducing onboarding time by 50% and improving developer productivity",
      "Configured monitoring and alerting systems to enhance reliability and reduce downtime through comprehensive logging, metrics, and alerts implementation",
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
      "Collaborate with a global team to align digital tools with organizational goals, improving operational efficiency and communication",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Relu Interactives",
    type: "Remote",
    period: "Feb 2021 - Present",
    responsibilities: [
      "Integrated semantic search with Langchain, Superbase vector store and custom embeddings, enabling advanced context retrieval and showcasing AI/ML expertise",
      "Improved RESTful APIs linking VR environments to real-time data, ensuring 99.9% uptime and lower latency",
      "Developed high-performance PWAs with React, boosting user engagement by 30% through optimized mobile-first designs and seamless offline functionality",
      "Proposed and led a fault-tolerant notification system (Email, SMS, Push) using circuit breaker pattern, ensuring 99% delivery and seamless integration",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Dropin Ghana",
    type: "Freelance",
    period: "Sep 2022 - Sep 2023",
    responsibilities: [
      "Led the design and development of admin web dashboard and public-facing website using modern React-based tooling (Next.js, TypeScript, Valtio), supporting 10k+ monthly users",
      "Introduced Role Based Access Control (RBAC) with OAuth2/JWT into ride hailing management system, reducing unauthorized access attempts by 40+ incidents/month",
      "Streamlined CI/CD for frontend by adding automated testing, build previews and linting, reducing release cycles and production bugs",
      "Collaborated closely with backend teams to integrate real-time ride updates via WebSocket and event driven architecture handling 50k+ trips",
    ],
  },
  {
    title: "Front End Engineer",
    company: "DigitalxBoost",
    type: "Freelance",
    period: "May 2023 - Aug 2023",
    responsibilities: [
      "Modernized marketing web application with ReactJS and headless CMS, cutting content publishing time from days to hours",
      "Built user-friendly content workflows, allowing marketing stakeholders to edit and publish blog entries and service pages with preview and versioning support saving the team 15-20 hours each month",
      "Implemented code-splitting and lazy loading techniques across the marketing web application, decreasing initial page load time by 35% and increased retention",
      "Enhanced content strategy performance through real-time SEO metadata control and responsive layouts, resulting in increased organic traffic by over 300+ monthly visits",
    ],
  },
];

const featuredProjects = [
  {
    title: "AI-Powered Agronomic Platform",
    description:
      "Deployed AI chatbots delivering 1.2M+ messages and built comprehensive dashboards for farmer engagement analytics at ESOKO",
    tech: ["React", "AI/ML", "TypeScript", "Dashboard Analytics"],
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600",
    hasGithub: false,
  },
  {
    title: "Ride Hailing Management System",
    description:
      "Led development of admin dashboard and public website for Dropin Ghana, supporting 10k+ monthly users with RBAC and real-time updates",
    tech: ["Next.js", "TypeScript", "OAuth2/JWT", "WebSocket"],
    gradient: "bg-gradient-to-br from-orange-400 to-pink-600",
    hasGithub: false,
  },
  {
    title: "VR-Integrated PWA Platform",
    description:
      "Developed high-performance PWAs with React at Relu Interactives, boosting user engagement by 30% through mobile-first designs and VR integration",
    tech: ["React", "PWA", "RESTful APIs", "VR Integration"],
    gradient: "bg-gradient-to-br from-emerald-400 to-teal-600",
    hasGithub: false,
  },
  {
    title: "Marketing Web Application",
    description:
      "Modernized marketing platform with ReactJS and headless CMS at DigitalxBoost, reducing content publishing time from days to hours",
    tech: ["React.js", "Headless CMS", "SEO Optimization", "Performance"],
    gradient: "bg-gradient-to-br from-violet-400 to-purple-600",
    hasGithub: false,
  },
  {
    title: "Semantic Search System",
    description:
      "Integrated advanced semantic search using Langchain and Superbase vector store, enabling context-aware retrieval with custom embeddings",
    tech: ["Langchain", "Vector Store", "AI/ML", "Embeddings"],
    gradient: "bg-gradient-to-br from-rose-400 to-red-600",
    hasGithub: true,
  },
  {
    title: "Fault-Tolerant Notification System",
    description:
      "Proposed and led notification system using circuit breaker pattern, ensuring 99% delivery rate across Email, SMS, and Push notifications",
    tech: ["Node.js", "Circuit Breaker", "Microservices", "NestJS"],
    gradient: "bg-gradient-to-br from-amber-400 to-orange-600",
    hasGithub: true,
  },
];

const moreProjects = [
  {
    title: "IVR Flow Builder Platform",
    description:
      "Interactive Voice Response flow builder web application using React Flow, Redux, and Firebase. Features drag-and-drop interface for creating IVR systems with audio, menu, transfer call, and voice recording nodes",
    tech: ["Next.js", "React Flow", "Redux", "Firebase", "Ant Design"],
    hasGithub: true,
  },
  {
    title: "Digital Collaboration Tools",
    description:
      "Conceptualized and rolled out digital tools for Smile At School NGO, reducing communication delays by 45% across global teams",
    tech: ["Digital Tools", "Communication Systems", "NGO Tech"],
    hasGithub: false,
  },
  {
    title: "React Calculator",
    description:
      "Interactive calculator application demonstrating component-based architecture, state management, and modern React patterns",
    tech: ["React", "JavaScript", "Component Architecture"],
    hasGithub: true,
  },
  {
    title: "Random Questions Platform",
    description:
      "Knowledge acquisition platform with frontend-backend integration, MySQL database, and dynamic question management system",
    tech: ["Full-Stack", "MySQL", "Knowledge Management"],
    hasGithub: true,
  },
];

export const Portfolio = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const [activeCompany, setActiveCompany] = React.useState(0);

  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/60 supports-[backdrop-filter]:bg-background/50">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 flex items-center justify-between">
          <div className="font-semibold text-foreground text-xl md:text-2xl tracking-tight">
            BA
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <a
              href="#projects"
              className="hidden md:block font-medium text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hidden md:block font-medium text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hidden md:block font-medium text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-foreground" />
              ) : (
                <MoonIcon className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground/80">
                  Available for new projects
                </span>
              </div>

              <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight leading-[1.1]">
                Bismark Agyare
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground/60 font-light">
                  Software Engineer
                </span>
                <span className="text-foreground/30">•</span>
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground/60 font-light">
                  Accra, Ghana
                </span>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 font-light">
                Full Stack Software Engineer with 4+ years of experience
                delivering web applications and backend systems used by
                thousands of users. Proficient in JavaScript, TypeScript, React,
                Next.js, Node.js, and NestJS with expertise in AI/ML
                integration, performance optimization, and DevOps practices.
              </p>

              <div className="flex flex-wrap gap-3">
                {contactButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card hover:bg-muted border border-border/50 hover:border-border transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                  >
                    <button.icon className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                    <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                      {button.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-emerald-400/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-2xl p-2 border border-border/50 hover:border-border/70 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/5">
                  <img
                    src="/bismark-profile.jpg"
                    alt="Bismark Agyare - Software Engineer"
                    className="w-full h-auto max-w-[350px] lg:max-w-[400px] rounded-xl object-cover shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
                </div>

                {/* Floating achievement badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm animate-bounce">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-sm">🚀</span>
                    <span className="text-xs font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                      1.2M+ Messages
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      AI Pioneer
                    </span>
                    <span className="text-purple-400 text-sm animate-pulse">
                      🤖
                    </span>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full p-2 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform">
                  <div className="flex items-center justify-center">
                    <span className="text-orange-400 text-lg animate-spin-slow">
                      ⚡
                    </span>
                  </div>
                </div>

                <div className="absolute top-8 right-16 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-lg px-2 py-1 shadow-lg backdrop-blur-sm">
                  <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    99.9% Uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
            <h2 className="text-sm font-semibold text-foreground/50 tracking-wider uppercase">
              Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent"></div>

              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                {experienceCompanies.map((company, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCompany(index)}
                    className={`relative font-medium text-sm lg:text-base whitespace-nowrap lg:whitespace-normal transition-all duration-200 text-left px-4 py-2 lg:py-3 rounded-lg ${
                      activeCompany === index
                        ? "text-foreground bg-card border border-border shadow-sm lg:ml-[-1px]"
                        : "text-foreground/50 hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {company.name}
                    {activeCompany === index && (
                      <div className="hidden lg:block absolute left-[-5px] top-1/2 -translate-y-1/2 w-1 h-8 bg-foreground rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {experienceDetails[activeCompany].title}
                  </h3>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted/50 border border-border/50 text-sm text-foreground/60 font-medium">
                    {experienceDetails[activeCompany].period}
                  </span>
                </div>
                <div className="text-base font-medium text-blue-600 dark:text-blue-400 mb-6">
                  {experienceDetails[activeCompany].company} •{" "}
                  {experienceDetails[activeCompany].type}
                </div>
                <div className="space-y-3 text-foreground/70 leading-relaxed">
                  {experienceDetails[activeCompany].responsibilities.map(
                    (responsibility, index) => (
                      <p key={index} className="flex gap-3">
                        <span className="text-foreground/40 mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
            <h2 className="text-sm font-semibold text-foreground/50 tracking-wider uppercase">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-foreground/20 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-foreground/5"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-full aspect-[4/3] ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="p-2 rounded-lg bg-white/90 hover:bg-white backdrop-blur-sm transition-colors">
                        <ExternalLinkIcon className="w-4 h-4 text-gray-900" />
                      </button>
                      {project.hasGithub && (
                        <button className="p-2 rounded-lg bg-white/90 hover:bg-white backdrop-blur-sm transition-colors">
                          <GithubIcon className="w-4 h-4 text-gray-900" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-foreground/70 border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
            <h2 className="text-sm font-semibold text-foreground/50 tracking-wider uppercase">
              More Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                      <ExternalLinkIcon className="w-5 h-5 text-foreground/70" />
                    </div>
                    {project.hasGithub && (
                      <button className="p-2 rounded-lg hover:bg-muted/80 transition-colors">
                        <GithubIcon className="w-5 h-5 text-foreground/70 hover:text-foreground" />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/50 text-foreground/70 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Bismark Agyare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {contactButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="p-2 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label={button.label}
              >
                <button.icon className="w-5 h-5 text-foreground/50 hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
