import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
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
  ChevronLeftIcon,
  ChevronDownIcon,
  GraduationCapIcon,
  AwardIcon,
  BadgeCheckIcon,
  CalendarDaysIcon,
} from "lucide-react";
import {
  stats,
  skillGroups,
  experiences,
  featuredProjects,
  moreProjects,
  communityItems,
  eventPhotos,
  education,
  awards,
  certifications,
  type Project,
  type ProjectLink,
  type EventPhoto,
} from "./data";

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

const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Stack" },
  { id: "community", label: "Speaking" },
  // Hidden on phones so the remaining links fit in one row without scrolling.
  { id: "education", label: "Education", hideOnPhone: true },
  { id: "contact", label: "Contact" },
];
// "top" (the hero) is observed too, so no link is highlighted while it's on screen.
const observedSectionIds = ["top", ...navLinks.map((l) => l.id)];

const projectTabs = [
  { key: "featured", label: "Featured", count: featuredProjects.length },
  { key: "more", label: "More", count: moreProjects.length },
] as const;
type ProjectTab = (typeof projectTabs)[number]["key"];

const leadCommunityItems = communityItems.filter((item) => item.kind !== "Attended");
const attendedCommunityItems = communityItems.filter((item) => item.kind === "Attended");


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
      className={`relative py-16 md:py-20 px-4 md:px-8 z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = ({
  label,
  title,
  className = "mb-10 md:mb-12",
}: {
  label: string;
  title: React.ReactNode;
  /** Spacing below the header; override when something sits directly under it. */
  className?: string;
}) => (
  <motion.div variants={fadeUp} className={className}>
    <div className="flex items-center gap-3 mb-4">
      <div className="section-line" />
      <span className="text-xs font-mono font-semibold tracking-widest text-[#6EE7B7] uppercase">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] leading-tight">{title}</h2>
  </motion.div>
);

// ─── Status Badge ─────────────────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: string }) => (
  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest border border-[#FBBF24]/30 bg-[#FBBF24]/10 text-[#FBBF24]">
    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
    {status}
  </span>
);

// ─── Project Modal ────────────────────────────────────────────────────────────

/** Explicit `links` win; otherwise fall back to the single repo / live URLs. */
const modalLinks = (project: Project): ProjectLink[] =>
  project.links ?? [
    ...(project.githubUrl ? [{ label: "View Code", href: project.githubUrl, kind: "repo" as const }] : []),
    ...(project.liveUrl ? [{ label: "Live Demo", href: project.liveUrl, kind: "live" as const }] : []),
  ];

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
                {(project.context || project.status) && (
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {project.context && (
                      <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: project.accentColor }}>{project.context}</span>
                    )}
                    {project.status && <StatusBadge status={project.status} />}
                  </div>
                )}
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

              {modalLinks(project).length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/6">
                  {modalLinks(project).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 transition-colors text-sm text-[#d1d5db]"
                    >
                      {link.kind === "repo" ? <GithubIcon className="w-4 h-4" /> : <ExternalLinkIcon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Section Nav ──────────────────────────────────────────────────────────────

/** Id of the section crossing the middle of the viewport. */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
};

const NavBar = () => {
  const active = useActiveSection(observedSectionIds);
  return (
    <nav aria-label="Sections" className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#080808]/75 backdrop-blur-md">
      <div className="max-w-5xl mx-auto h-12 md:h-14 px-4 md:px-8 flex items-center gap-6">
        <a href="#top" className="hidden sm:block flex-shrink-0 text-sm font-bold tracking-tight text-[#f5f5f5]">
          Bismark<span className="text-[#6EE7B7]">.</span>
        </a>
        <div className="flex items-center gap-0.5 md:gap-1 sm:ml-auto overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex-shrink-0 px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm transition-colors ${
                  "hideOnPhone" in link ? "hidden sm:block" : ""
                } ${isActive ? "text-[#6EE7B7] bg-[#6EE7B7]/10" : "text-[#6b7280] hover:text-[#f5f5f5]"}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

// ─── Event Photo Mosaic ───────────────────────────────────────────────────────
// First photo large, the next four as thumbnails; any beyond that are reachable
// through the lightbox via a "+N" overlay on the last thumbnail.

const MAX_THUMBNAILS = 4;

const PhotoTile = ({
  photo,
  onClick,
  large = false,
  hiddenCount = 0,
  className = "",
}: {
  photo: EventPhoto;
  onClick: () => void;
  large?: boolean;
  hiddenCount?: number;
  className?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`View photo: ${photo.caption}`}
    className={`group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/6 bg-[#0f0f0f] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6EE7B7]/60 ${className}`}
  >
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      style={{ objectPosition: photo.focus ?? "center" }}
    />
    {/* Thumbnails are too small for captions on phones; the lightbox shows them. */}
    <div
      className={`absolute inset-0 bg-gradient-to-t to-transparent ${
        large ? "from-[#080808]/95 via-[#080808]/25" : "hidden md:block from-[#080808]/85 via-transparent"
      }`}
    />
    <div className={`absolute inset-x-0 bottom-0 ${large ? "p-4" : "hidden md:block p-3"}`}>
      {large && <span className="block text-[10px] font-mono uppercase tracking-widest text-[#6EE7B7] mb-1">{photo.label}</span>}
      <span className={`block font-semibold text-[#f5f5f5] leading-snug ${large ? "text-sm" : "text-xs"}`}>{photo.caption}</span>
    </div>
    {hiddenCount > 0 && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm font-semibold text-[#f5f5f5]">
        +{hiddenCount}
      </div>
    )}
  </button>
);

const PhotoMosaic = ({ photos, onOpen }: { photos: EventPhoto[]; onOpen: (index: number) => void }) => {
  if (photos.length === 0) return null;
  const [lead, ...rest] = photos;
  const thumbnails = rest.slice(0, MAX_THUMBNAILS);
  const hiddenCount = rest.length - thumbnails.length;

  return (
    <motion.div variants={fadeUp} className="grid grid-cols-4 md:grid-rows-2 gap-2 md:gap-3 md:h-[340px] mb-10">
      <PhotoTile
        photo={lead}
        onClick={() => onOpen(0)}
        large
        className={`col-span-4 aspect-[3/2] md:aspect-auto md:row-span-2 ${thumbnails.length > 0 ? "md:col-span-2" : ""}`}
      />
      {thumbnails.map((photo, i) => (
        <PhotoTile
          key={photo.src}
          photo={photo}
          onClick={() => onOpen(i + 1)}
          hiddenCount={i === thumbnails.length - 1 ? hiddenCount : 0}
          className="aspect-square md:aspect-auto"
        />
      ))}
    </motion.div>
  );
};

// ─── Photo Lightbox ───────────────────────────────────────────────────────────

const PhotoLightbox = ({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: EventPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) => {
  const photo = index !== null ? photos[index] : null;
  const prev = index !== null ? (index - 1 + photos.length) % photos.length : 0;
  const next = index !== null ? (index + 1) % photos.length : 0;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNavigate(prev);
      else if (e.key === "ArrowRight") onNavigate(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, prev, next, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

          <figure className="relative flex flex-col items-center max-w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="max-h-[75vh] max-w-full w-auto rounded-xl border border-white/8 object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            <figcaption className="mt-4 text-center max-w-md">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#6EE7B7] mb-1">{photo.label}</span>
              <span className="block text-sm text-[#d1d5db]">{photo.caption}</span>
              <span className="block mt-1.5 text-xs font-mono text-[#6b7280]">
                {index! + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={onClose}
            aria-label="Close photo"
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/8"
          >
            <XIcon className="w-4 h-4 text-[#9ca3af]" />
          </button>
          {photos.length > 1 && (
            <>
              <button
                onClick={() => onNavigate(prev)}
                aria-label="Previous photo"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-white/10 transition-colors border border-white/10"
              >
                <ChevronLeftIcon className="w-5 h-5 text-[#d1d5db]" />
              </button>
              <button
                onClick={() => onNavigate(next)}
                aria-label="Next photo"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-white/10 transition-colors border border-white/10"
              >
                <ChevronRightIcon className="w-5 h-5 text-[#d1d5db]" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Main Portfolio ───────────────────────────────────────────────────────────

export const Portfolio = (): JSX.Element => {
  const [activeCompany, setActiveCompany] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectTab, setProjectTab] = useState<ProjectTab>("featured");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const INITIAL_OTHER_PROJECTS = 8;
  const visibleMoreProjects = showAllProjects ? moreProjects : moreProjects.slice(0, INITIAL_OTHER_PROJECTS);

  return (
    <div className="relative min-h-screen text-[#f5f5f5] overflow-x-hidden" style={{ backgroundColor: "#080808" }}>
      {/* Background: noise + glow */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="glow-blob" aria-hidden="true" />

      <NavBar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section id="top" className="relative min-h-screen flex items-center px-4 md:px-8 z-10">
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
                <span className="text-base text-[#6b7280] font-light tracking-wide">Full Stack & AI Systems Engineer</span>
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
                4+ years building production web, mobile and AI-powered platforms. I specialise in{" "}
                <span className="text-[#6EE7B7]">AI agents & LLM integration</span>,{" "}
                <span className="text-[#A78BFA]">React, Next.js & NestJS</span>, and{" "}
                <span className="text-[#60A5FA]">offline-first, real-time systems</span> — with a Mechanical
                Engineering background that shapes how I build for resource-constrained environments.
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

      {/* ── Experience ────────────────────────────────────────────────────── */}
      <Section id="experience">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Career" title="Experience" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tab list */}
            <motion.div variants={fadeUp} className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {experiences.map((co, i) => (
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
                  <span className="hidden lg:block">{co.company}</span>
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
                    const exp = experiences[activeCompany];
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

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <Section id="projects">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 md:mb-12">
            <SectionHeader label="Work" title="Projects" className="" />
            <motion.div
              variants={fadeUp}
              role="tablist"
              aria-label="Project lists"
              className="inline-flex self-start sm:self-auto p-1 rounded-xl border border-white/8 bg-white/3"
            >
              {projectTabs.map((tab) => {
                const isActive = projectTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setProjectTab(tab.key)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "bg-[#6EE7B7]/10 text-[#6EE7B7]" : "text-[#6b7280] hover:text-[#9ca3af]"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-1.5 text-xs font-mono opacity-70">{tab.count}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {projectTab === "featured" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
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
                    {/* Context + status row */}
                    {(project.context || project.status) && (
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {project.context && (
                          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: project.accentColor }}>
                            {project.context}
                          </span>
                        )}
                        {project.status && <StatusBadge status={project.status} />}
                      </div>
                    )}

                    {/* Title row */}
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
                      {project.githubUrl && (
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
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleMoreProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
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
                      {project.context && (
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-[#6b7280] mb-1">{project.context}</span>
                      )}
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

              {moreProjects.length > INITIAL_OTHER_PROJECTS && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllProjects((v) => !v)}
                    aria-expanded={showAllProjects}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/8 bg-white/3 text-[#9ca3af] hover:text-[#f5f5f5] hover:bg-white/6 transition-all"
                  >
                    {showAllProjects ? "Show fewer" : `Show all ${moreProjects.length} projects`}
                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${showAllProjects ? "rotate-180" : ""}`} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </Section>

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <Section id="skills">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Expertise" title="Tech Stack" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
            {skillGroups.map((group, gi) => (
              <motion.div key={group.label} variants={fadeUp} custom={gi * 0.5}>
                <h3 className="text-[11px] font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill px-2.5 py-1 text-xs rounded-md border border-white/8 bg-white/3 text-[#9ca3af] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Speaking, Teaching & Events ───────────────────────────────────── */}
      <Section id="community">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Community" title="Speaking, Teaching & Events" className="mb-4" />
          <motion.p variants={fadeUp} className="text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-2xl mb-8">
            Teaching, mentoring and showing up for Ghana's developer ecosystem — from university lecture halls to
            community meetups. Proud member of the <span className="text-[#6EE7B7]">Python Ghana</span> community.
          </motion.p>

          <PhotoMosaic photos={eventPhotos} onOpen={setLightboxIndex} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadCommunityItems.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-white/6 bg-[#0f0f0f] p-5 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: `linear-gradient(180deg, ${item.accentColor}, transparent)` }} />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest border"
                    style={{ color: item.accentColor, borderColor: `${item.accentColor}40`, background: `${item.accentColor}10` }}
                  >
                    {item.kind}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#6b7280] font-mono">
                    <CalendarDaysIcon className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f5f5f5] leading-snug mb-1">{item.title}</h3>
                <p className="text-xs text-[#9ca3af] mb-3">{item.org}</p>
                <p className="text-sm text-[#6b7280] leading-relaxed">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs text-[#9ca3af] hover:text-[#f5f5f5] transition-colors"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    {item.link.label}
                  </a>
                )}
              </motion.article>
            ))}
          </div>

          {attendedCommunityItems.length > 0 && (
            <motion.div variants={fadeUp} className="mt-4 rounded-2xl border border-white/6 bg-[#0f0f0f] px-5 py-4">
              <h3 className="text-[11px] font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Also attended</h3>
              <ul className="divide-y divide-white/5">
                {attendedCommunityItems.map((item) => (
                  <li key={item.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 py-3 first:pt-0 last:pb-0">
                    <span className="flex-shrink-0 sm:w-20 text-xs text-[#6b7280] font-mono">{item.date}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#f5f5f5] leading-snug">
                        {item.title} <span className="font-normal text-[#6b7280]">· {item.org}</span>
                      </p>
                      <p className="text-xs text-[#6b7280] leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </Section>

      {/* ── Education & Recognition ───────────────────────────────────────── */}
      <Section id="education">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Background" title="Education & Recognition" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Degree */}
            <motion.div variants={fadeUp} className="lg:col-span-3 rounded-2xl border border-white/6 bg-[#0f0f0f] overflow-hidden">
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #6EE7B7, transparent)" }} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[#6EE7B7]/10 border border-[#6EE7B7]/20">
                    <GraduationCapIcon className="w-5 h-5 text-[#6EE7B7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#f5f5f5] leading-snug">{education.degree}</h3>
                    <p className="text-sm text-[#9ca3af]">{education.school}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-[#9ca3af] border border-white/6">{education.classification}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs text-[#6b7280] font-mono">{education.location} · {education.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6b7280] mb-5">
                  <span className="text-[#9ca3af]">Specialisation:</span> {education.specialization}
                </p>

                <div className="rounded-xl border border-white/8 bg-[#0d0d0d] p-4 mb-4">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#6b7280] mb-2">Thesis</p>
                  <h4 className="text-sm font-semibold text-[#f5f5f5] mb-2">{education.thesis.title}</h4>
                  <p className="text-sm text-[#9ca3af] leading-relaxed mb-3">{education.thesis.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.thesis.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] rounded bg-white/4 text-[#9ca3af]">{tag}</span>
                    ))}
                  </div>
                </div>

                <p className="flex items-start gap-2.5 text-xs text-[#6b7280] leading-relaxed">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-[#6EE7B7] mt-0.5 flex-shrink-0" />
                  {education.attachment}
                </p>
              </div>
            </motion.div>

            {/* Awards + certifications */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/6 bg-[#0f0f0f] p-6">
                <h3 className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-4">
                  <AwardIcon className="w-4 h-4 text-[#FBBF24]" />
                  Honours & Awards
                </h3>
                <ul className="space-y-4">
                  {awards.map((award) => (
                    <li key={award.title}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-[#f5f5f5]">{award.title}</span>
                        <span className="text-xs text-[#6b7280] font-mono">{award.date}</span>
                      </div>
                      <p className="text-xs text-[#9ca3af] mt-0.5">{award.issuer}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-white/6 bg-[#0f0f0f] p-6">
                <h3 className="flex items-center gap-2 text-xs font-mono font-semibold text-[#6b7280] uppercase tracking-widest mb-4">
                  <BadgeCheckIcon className="w-4 h-4 text-[#60A5FA]" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert.title}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-[#f5f5f5]">{cert.title}</span>
                        <span className="text-xs text-[#6b7280] font-mono flex-shrink-0">{cert.date}</span>
                      </div>
                      <p className="text-xs text-[#9ca3af] mt-0.5">{cert.issuer}</p>
                      {cert.detail && <p className="text-xs text-[#6b7280] mt-1.5 leading-relaxed">{cert.detail}</p>}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
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

      {/* ── Photo Lightbox ────────────────────────────────────────────────── */}
      <PhotoLightbox
        photos={eventPhotos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};
