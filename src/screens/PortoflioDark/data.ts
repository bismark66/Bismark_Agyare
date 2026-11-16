// ─── Portfolio content ────────────────────────────────────────────────────────
// All site copy lives here so it can be updated without touching layout code.

export interface Project {
  title: string;
  /** Where the work was done, e.g. "ESOKO", "Personal", "Open source". */
  context?: string;
  /** Optional badge, e.g. "In progress". */
  status?: string;
  description: string;
  tech: string[];
  accentColor: string;
  fullDescription?: string;
  features?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Several labelled links (e.g. one per app in a multi-app project); shown in the modal instead of githubUrl/liveUrl. */
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "repo" | "docs";
}

export interface Experience {
  company: string;
  short: string;
  title: string;
  type: string;
  period: string;
  responsibilities: string[];
}

export interface CommunityItem {
  title: string;
  kind: "Guest Lecture" | "Workshop" | "Training" | "Founder" | "Attended";
  org: string;
  date: string;
  description: string;
  accentColor: string;
  link?: { label: string; href: string };
}

export interface EventPhoto {
  src: string;
  alt: string;
  /** Short mono label above the caption, e.g. "Workshop · Oct 2026". */
  label: string;
  caption: string;
  /** CSS object-position so the crop keeps the subject in frame. */
  focus?: string;
}

export interface Recognition {
  title: string;
  issuer: string;
  date: string;
  detail?: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Companies Served", value: "5+" },
  { label: "Users Impacted", value: "10K+" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "Next.js", "Angular", "React Native", "Redux Toolkit / RTK Query", "TanStack Query", "Mantine UI", "Tailwind CSS", "Ant Design", "Framework7", "Capacitor", "PWA / Offline-first", "React Three Fiber"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "WebSockets / Socket.IO", "WebRTC", "Event-driven Architecture", "Multi-tenancy"],
  },
  {
    label: "Data & Messaging",
    skills: ["PostgreSQL", "PostGIS", "MongoDB", "MySQL", "Redis", "BullMQ", "Prisma", "TypeORM", "IndexedDB", "MQTT", "Firebase", "Supabase"],
  },
  {
    label: "AI & LLM",
    skills: ["LLM Integration", "Agentic Tool Design", "LangChain", "LangGraph", "Pi Agent SDK", "RAG & Vector Search", "Pinecone", "Ollama", "CopilotKit", "Remotion"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Docker", "GitHub Actions CI/CD", "AWS", "Google Cloud", "Railway", "Upstash", "Hetzner / Coolify", "Nginx", "Grafana", "Logging & Observability"],
  },
  {
    label: "Integrations & Tooling",
    skills: ["Paystack", "Contentful", "Node-RED", "FFmpeg", "Playwright", "Jest", "Git", "Figma", "System Design", "RBAC"],
  },
  {
    label: "Mechanical Engineering",
    skills: ["MATLAB", "Siemens NX", "Fusion 360", "AutoCAD", "FreeCAD", "CNC Programming", "Maintenance Planning"],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: "ESOKO",
    short: "ESOKO",
    title: "Full Stack Software Engineer",
    type: "Remote",
    period: "Feb 2025 – Present",
    responsibilities: [
      "Built an AI prompt-to-form generator for Insyt Forms — a server-side relay on the Pi agent SDK (DeepSeek, with Anthropic/OpenAI fallback) that exposes one typed tool per field type (21 types, from GIS polygons to signatures and sub-forms), with guardrails that lock the agent to those tools, keep model keys off the client, and validate every draft against the form builder's rules",
      "Built AgriInfo, the client dashboard for ESOKO's agronomic and market-price data SaaS (Next.js, Mantine, RTK Query, Recharts) — markets, weather and advisory dashboards, SMS/voice broadcasts, API-key management, Paystack subscriptions and plan-based feature gating; hardened the NestJS content API with subscriptions, pagination, response interceptors and Paystack signature verification",
      "Built the Agronomic Advisory headless-CMS interface in ESOKO's eCloud console — content-model builder, rich-text entry studio, media library, delivery-API inspector and a voice/SMS dispatcher",
      "Developed the ESOKO marketplace frontend end to end — buyer, seller and agent flows, OTP + Ghana Card agent onboarding, a pluggable Paystack/manual checkout, order requests, offline support via service worker, and a full Mantine UI rewrite",
      "Built DigiMakt, the operations dashboard for non-technical staff — agents, farmers (Google Maps cluster analytics), warehouses and stock transfers, terminal POS sales, commissions with Excel export, KYC recruitment and granular RBAC",
      "Extended Push, ESOKO's SMS & voice platform for agricultural extension — contacts and groups with bulk import and GPS fields, market-price SMS fed by the content API, in-browser voice recording re-encoded to 8 kHz WAV, and a mobile layout; also built its marketing site with a CopilotKit AI assistant",
      "Built the agronomic advisory AI chat frontend (multi-turn sessions, image upload, real-time LLM responses) and a RAG documentation tool that indexes codebases on CI/CD events (tree-sitter AST chunking, Ollama embeddings, Pinecone) — cutting engineering onboarding time by 50%",
    ],
  },
  {
    company: "Fastrack",
    short: "Fastrack",
    title: "Full Stack Software Engineer",
    type: "Freelance",
    period: "Aug 2026 – Present",
    responsibilities: [
      "Designed and built Fastrack EduSuite end to end — a multi-tenant school ERP for Ghanaian basic and secondary schools, live at fastrackgh.com (NestJS, PostgreSQL, BullMQ, Next.js, Mantine)",
      "Isolated tenants with request-scoped context (AsyncLocalStorage) and school-scoped repositories; enforced access with a role × permission matrix across six school roles, per-school paid modules and field-level audit logs",
      "Engineered an offline-first staff portal — per-user IndexedDB stores, an outbox sync engine with idempotency keys, a change feed and a review tray for conflicts — so schools keep taking payments and admissions when the internet drops",
      "Shipped fees & billing (queued batch invoicing, cash/MoMo receipts, arrears and credits) and Paystack online payments with webhooks plus a 15-minute reconciliation job for missed callbacks",
      "Delivered results and report cards (grading presets, class positions, approval and publishing), attendance, admissions and promotions, a parent PWA, and a sandboxed Liquid template designer for bills and reports",
      "Kept it shippable with ~1,300 unit and e2e tests, contract tests that freeze every route's guards, Playwright tours for every role, and single-image Docker deploys with automatic rollback",
    ],
  },
  {
    company: "Relu Interactives",
    short: "Relu",
    title: "Full Stack Software Engineer",
    type: "Remote",
    period: "Sep 2020 – Present",
    responsibilities: [
      "Played an integral role in building Relu Spatial, an AI-native platform for creating, publishing and remixing AR/VR/3D experiences — integrated semantic retrieval (LangChain, Supabase vector store), contributed to the browser-based 3D/AR editor (React Three Fiber, @react-three/xr), and built reluspatial.com's download, pricing and solutions pages plus its Docusaurus docs",
      "Designed and implemented the backend for Vivat, an oil & gas VR training platform — NestJS, Prisma and PostgreSQL REST APIs deployed on Railway",
      "Built the Draco fuel-station management API in NestJS — JWT auth with role-based access, TypeORM + PostgreSQL, Redis caching and 20+ resource modules (stations, pumps, tanks, inventory, transactions, promotions) — and its Framework7/React operator app for dispensing and pump-totalizer tracking",
      "Contributed to Relu's multi-provider notification service (Arkesel, Hubtel, Hellio, BigMsgBox) and built its admin dashboard — app & API-key management, email/SMS activity logs, failure alerts, analytics and a CopilotKit assistant",
      "Rebuilt reluinteractives.com in Next.js with React Three Fiber and GSAP — Entertainment, Education and Careers (Contentful job board) pages with Discord-routed form submissions",
      "Delivered geospatial features with PostGIS, and REST APIs linking VR environments to real-time data at 99.9% uptime",
    ],
  },
  {
    company: "Smile At School Foundation",
    short: "Smile",
    title: "IT Lead (Volunteer)",
    type: "Volunteer",
    period: "Feb 2023 – Present",
    responsibilities: [
      "Redesigned and built smileatschool.org in Next.js with Contentful — programs, gallery, blog, volunteer and sponsor pages, ISR with hourly revalidation, and full SEO/social metadata to grow donor and volunteer reach",
      "Built animated UI — scroll-triggered counters, a testimonials carousel and parallax backgrounds — to strengthen donor and volunteer engagement",
      "Standardised the foundation's digital tools across global teams, cutting team communication delays by 40%",
      "Coordinated a Virtual Exchange Program connecting 200+ students across 4 countries",
      "Led the Digital Bridge Training Workshop (Oct 2026) — two days of hands-on website design and online security for university students",
    ],
  },
  {
    company: "McKenzie Brown Engineering (LMI Holdings)",
    short: "McKenzie",
    title: "CNC & Maintenance Engineer",
    type: "National Service",
    period: "Oct 2024 – Oct 2025",
    responsibilities: [
      "Set up and ran CNC cutting and machining at McKenzie Brown Engineering, LMI Shamrock's structural-steel arm at the Dawa Industrial Zone, producing beams, columns, rafters, plates and connection parts from shop drawings in both standard profiles and custom specifications",
      "Supported the DTRT textile factory build in Tema, a 59.4 m × 296 m steel structure of roughly 442 tonnes, through CNC machining, fabrication and finishing ahead of on-site erection",
      "Worked across the full fabrication flow (detailing, cutting, welding, finishing, transport and on-site erection) on group projects in Dawa, Saglemi and Tema, including water-treatment service tanks, gatehouses and the Saglemi city sign",
      "Supported production of insulated sandwich panels for roofing, cladding, cold rooms and factory buildings, alongside roofing sheets, purlins and pre-engineered building components",
      "Checked cut and fabricated parts against shop drawings before welding and dispatch, feeding fit-up issues back to detailing",
      "Carried out preventive and corrective maintenance on CNC and production machinery, scheduling servicing around production and keeping a spare-parts inventory to cut unplanned downtime",
    ],
  },
  {
    company: "Dropin Ghana",
    short: "Dropin",
    title: "Front End Engineer",
    type: "Freelance",
    period: "Sep 2022 – Sep 2023",
    responsibilities: [
      "Owned the frontend and mobile apps for the ride-hailing platform within a cross-functional team",
      "Led the design and development of the admin web dashboard, supporting 10k+ monthly users",
      "Introduced Role Based Access Control with OAuth2/JWT, reducing unauthorized access by 40+ incidents/month",
      "Streamlined CI/CD for frontend by adding automated testing and build previews",
      "Collaborated with backend teams to integrate real-time ride updates via WebSocket",
    ],
  },
  {
    company: "DigitalxBoost",
    short: "DxB",
    title: "Front End Engineer",
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

// ─── Featured projects ────────────────────────────────────────────────────────

export const featuredProjects: Project[] = [
  {
    title: "Fastrack EduSuite – Multi-Tenant School ERP",
    context: "Freelance · Fastrack",
    description: "Cloud school-management system for Ghanaian schools — fees, Paystack payments, results, attendance and a parent PWA — with an offline-first staff portal that keeps working when the internet drops.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "BullMQ", "Redis", "IndexedDB", "Mantine", "Docker"],
    accentColor: "#22D3EE",
    liveUrl: "https://fastrackgh.com",
    fullDescription: "Fastrack EduSuite puts pupils, attendance, fees, results and report cards in one place for basic and secondary schools in Ghana. One deployment serves many schools: a Super Admin onboards each school and toggles its paid modules, while Principals, Academic Heads, Teachers, Account Officers, Secretaries and Parents each get a tailored workspace. I designed and built the platform end to end — the NestJS API and BullMQ worker, the Next.js staff portal and parent PWA, and the CI/CD that ships it.",
    features: [
      "Tenant isolation via AsyncLocalStorage request context and school-scoped repositories",
      "Offline-first staff portal: per-user IndexedDB, outbox sync engine, idempotency keys and a conflict review tray",
      "Fees & billing: fee structures, discounts, queued batch invoicing, cash/MoMo receipts, arrears and credits",
      "Paystack online payments with webhooks and a 15-minute reconciliation job for missed callbacks",
      "Results & report cards: grading presets, mark sheets, class positions, approval and publishing, mock exams",
      "Parent PWA: children, bills, payments, receipts, attendance and report cards",
      "Sandboxed Liquid template designer for bills and reports, with versioned drafts",
      "Role × permission matrix, per-school module guards and field-level audit logs",
      "Background email/SMS notifications with per-school channel selection",
    ],
    highlights: ["~1,300 automated tests", "45 pages · 360+ API routes", "Live in production"],
  },
  {
    title: "Truckly – Truck-Hailing & Fleet Marketplace",
    context: "Personal · Solo build",
    description: "Solo-built logistics marketplace for customers, drivers and fleet owners — real-time socket dispatch with PostGIS proximity matching, Paystack payments and a Next.js PWA.",
    tech: ["NestJS", "Next.js", "PostgreSQL / PostGIS", "Redis", "BullMQ", "Socket.IO", "Paystack", "Docker"],
    accentColor: "#60A5FA",
    liveUrl: "https://truckly-client-81z1.vercel.app",
    fullDescription: "A complete truck-hailing and fleet platform I designed and deployed solo, serving three roles: customers, drivers and fleet owners. It is three apps — a NestJS REST + WebSocket backend, a Next.js PWA client (Ionic React, Leaflet maps) and a Next.js admin dashboard. Dispatch runs in real time over sockets with PostGIS proximity matching and driver accept/reject flows; payments go through Paystack with verified webhooks behind a BFF proxy using httpOnly-cookie auth. It's containerised and runs in production on Supabase PostgreSQL and Upstash Redis, and I produced its launch promo films in code with Remotion.",
    features: [
      "Real-time socket dispatch with PostGIS proximity matching and driver accept/reject flows",
      "Multi-role access: Customer, Driver, Fleet Owner, Admin",
      "Paystack payments with secure webhook handling and a BFF proxy (httpOnly-cookie auth)",
      "Live driver tracking on Leaflet maps and in-app WebSocket chat",
      "BullMQ queues for notifications and payment processing",
      "Firebase + web-push notifications on an installable PWA",
      "Driver earnings, payouts and trip history; fleet vehicles, shipments and reports",
      "Containerised production deploy on Supabase PostgreSQL + Upstash Redis (solved ARM/amd64 build and TLS issues)",
      "Prometheus/Grafana monitoring and Swagger API docs",
      "Launch promo films rendered with Remotion",
    ],
    highlights: ["Solo: design → production", "PostGIS dispatch", "900+ commits"],
  },
  {
    title: "Insyt Forms – AI Form Generator",
    context: "ESOKO",
    description: "Agentic prompt-to-form generator: describe a survey in plain language and an LLM agent builds a valid, structured form through typed tools and guardrails.",
    tech: ["Pi Agent SDK", "LLM Tool Calling", "TypeBox", "Node.js", "Express", "React"],
    accentColor: "#FBBF24",
    fullDescription: "Insyt Forms lets organisations build data-collection surveys for field agents. I added AI-powered form generation so non-technical users can describe the survey they need and get a ready-to-edit draft. A server-side relay runs a Pi agent session (DeepSeek by default, with Anthropic and OpenAI fallbacks) that can only act through custom tools — read or replace the draft, set metadata, add pages and add questions — with one typed tool per field type. Every generation passes through the form builder's own validation, so the output is always a structurally valid form.",
    features: [
      "One typed tool per field type — 21 types including GIS points & polygons, signatures, fingerprints, option trees, calculations and sub-forms",
      "Guardrails: built-in agent tools disabled, model keys kept server-side, rules to preserve existing content and reference returned IDs",
      "Builder-level validation (e.g. rejecting questions on sub-form pages) so every draft is a valid form definition",
      "One-shot generation and multi-turn refinement sessions",
      "Multi-provider fallback across DeepSeek, Anthropic and OpenAI",
      "\"Generate with AI\" flow integrated into the survey builder",
    ],
    highlights: ["21 field-type tools", "Validated output", "Multi-provider LLM"],
  },
  {
    title: "AgriInfo – Agri-Data SaaS Dashboard",
    context: "ESOKO",
    description: "Client dashboard for ESOKO's agronomic and market-price data platform — markets, weather and advisories, SMS/voice broadcasts, API keys and Paystack subscriptions with plan-based feature gating.",
    tech: ["Next.js", "Mantine", "RTK Query", "Recharts", "NestJS", "Prisma", "Paystack"],
    accentColor: "#34D399",
    fullDescription: "AgriInfo lets organisations subscribe to ESOKO's agronomic and market-price data and integrate it into their own platforms. I built the client dashboard (360+ commits) and hardened the NestJS content API behind it. I also built the Agronomic Advisory headless-CMS interface in ESOKO's internal eCloud console, which feeds advisory content to clients through a delivery API.",
    features: [
      "Markets, weather and advisory dashboards with charts",
      "SMS & voice broadcasts with phone preview, contacts and groups",
      "API-key management for clients integrating the data",
      "Pricing, billing and subscriptions with Paystack verification",
      "Plan-based feature gating via a central feature registry",
      "Guided product tours, SSO middleware and cookie-based auth",
      "Headless CMS UI: content-model builder, rich-text entry studio, media library, delivery-API inspector",
      "Content API hardening: subscriptions, pagination, response interceptors, Paystack signature checks",
    ],
    highlights: ["360+ commits", "Headless CMS delivery", "Plan-based gating"],
  },
  {
    title: "AI-Powered Agronomic Platform",
    context: "ESOKO",
    description: "Deployed AI chatbots delivering 1.2M+ messages and built comprehensive dashboards for farmer engagement analytics at ESOKO.",
    tech: ["React", "AI/ML", "TypeScript", "Mantine", "TanStack Query"],
    accentColor: "#6EE7B7",
    githubUrl: "https://github.com/bismark66/agronomic-chatbot",
    liveUrl: "https://agronomic-chatbot.vercel.app",
    fullDescription: "Enterprise-scale agronomic platform at ESOKO delivering AI-powered chatbots that have sent over 1.2M+ messages to farmers. Built comprehensive dashboards for tracking sales, farmer engagement, and business intelligence with data-rich visualizations.",
    features: ["AI-powered chatbot delivering agronomic advice", "Session-based multi-turn chat with image upload", "Real-time farmer engagement analytics", "5 interactive dashboards for decision-making", "Reduced call center inquiries by 8k/month"],
    highlights: ["1.2M+ AI messages delivered", "8k/month call reduction", "50% faster onboarding"],
  },
  {
    title: "Relu Spatial – AI-Native AR/VR Platform",
    context: "Relu Interactives",
    description: "Platform for creating, publishing and remixing AR/VR/3D experiences via prompt, desktop editor and marketplace. I worked across semantic retrieval, the 3D editor, the product site and docs.",
    tech: ["Next.js", "React Three Fiber", "WebXR", "LangChain", "Supabase", "Contentful", "Docusaurus"],
    accentColor: "#A78BFA",
    liveUrl: "https://reluspatial.com",
    fullDescription: "Relu Spatial is Relu Interactives' AI-native platform for building immersive AR/VR/3D experiences. I played an integral role across the product: integrating semantic retrieval with LangChain, a Supabase vector store and custom embeddings so the platform can pull relevant context; contributing scene inspection, module views and phone/web preview modes to the browser-based editor; and building the public site's download, pricing and solutions experience along with the developer docs.",
    features: [
      "Semantic search with LangChain, a Supabase vector store and custom embeddings",
      "Browser 3D/AR editor work: scene inspector, module views, phone/web preview, S3 asset management",
      "Download page with Contentful-driven releases and GA4 download tracking",
      "Redesigned pricing, navigation and a filterable solutions catalogue",
      "Docusaurus documentation site with Algolia search",
    ],
    highlights: ["AI-native 3D creation", "WebXR", "Live product"],
  },
  {
    title: "Medimanual – AI Manual-to-Video Generator",
    context: "Health-tech",
    status: "In progress",
    description: "Pipeline for a health-instrument manufacturer that turns PDF instrument manuals into video tutorials, orchestrated with LangGraph and local LLMs.",
    tech: ["NestJS", "BullMQ", "LangGraph", "Python", "Ollama", "PyMuPDF", "WebSockets", "FFmpeg"],
    accentColor: "#F472B6",
    fullDescription: "Medimanual turns text-heavy PDF manuals for medical instruments into short training videos. Uploads go through a NestJS API onto a BullMQ queue, where a worker drives three LangGraph graphs: document understanding, video planning and media production. The understanding stage extracts text with PyMuPDF (with an OCR fallback) and detects procedures, warnings and tables; a local LLM via Ollama then writes the script, storyboard and image prompts, with progress streamed back over WebSockets. The media-production stage (narration and FFmpeg assembly) is in active development.",
    features: [
      "Staged pipeline: PDF ingestion → LLM structuring into sections, procedures and warnings → scene planning → video",
      "PyMuPDF extraction with OCR fallback and table/warning/procedure detection",
      "Local LLMs via Ollama for scripts, storyboards and image prompts",
      "Queue-driven processing (NestJS + BullMQ) with live progress over WebSockets",
      "Three LangGraph graphs orchestrating understanding, planning and production",
    ],
    highlights: ["3-stage LangGraph pipeline", "Local LLMs", "Queue-driven"],
  },
  {
    title: "Powate – Open-Source Headless CMS",
    context: "Open source",
    description: "Headless CMS where users define their own content models and deliver content to any frontend through a REST API and TypeScript SDK.",
    tech: ["NestJS", "Prisma", "PostgreSQL JSONB", "Next.js", "Mantine", "TipTap", "Turborepo", "Angular"],
    accentColor: "#F87171",
    githubUrl: "https://github.com/bismark66/powate",
    fullDescription: "Powate is an MIT-licensed headless CMS with no hard-coded content types. Users build their own content models from typed fields, create entries against them, and fetch content over REST or the official TypeScript SDK. Entry values live in a PostgreSQL JSONB column with GIN indexing, giving dynamic schemas with fast queries. It's a Turborepo monorepo with a NestJS API and a Next.js admin, with an Angular Material admin in progress.",
    features: [
      "Visual content-model builder with 10 field types (text, rich text, number, boolean, date, media, reference, JSON, URL, select)",
      "Dynamic schemas stored in PostgreSQL JSONB with GIN indexes",
      "JWT auth for admins, API keys for public reads, role-based access",
      "Draft / published / archived workflow",
      "Pluggable media storage: local disk, Cloudinary or UploadThing",
      "Typed TypeScript SDK and Swagger API docs",
      "Admin dashboard in Next.js + Mantine + TipTap; Angular Material admin in progress",
    ],
    highlights: ["MIT licensed", "Dynamic JSONB schemas", "TypeScript SDK"],
  },
];

// ─── Other projects ───────────────────────────────────────────────────────────

export const moreProjects: Project[] = [
  {
    title: "IVR Flow Builder Platform",
    context: "Personal",
    description: "AI-powered IVR platform with multi-provider LLM integration, 6-stage NLU pipeline, Google Cloud Speech-to-Text/TTS, and visual drag-and-drop flow builder.",
    tech: ["Next.js", "React Flow", "Redux", "Firebase", "Groq AI", "Google Cloud STT/TTS", "TensorFlow.js"],
    accentColor: "#FBBF24",
    githubUrl: "https://github.com/bismark66/ivr-platform",
    liveUrl: "https://ivr-platform.vercel.app",
    fullDescription: "AI-powered Interactive Voice Response platform with multi-provider LLM support (Groq, OpenAI, Anthropic) and automatic fallback. Features a 6-stage NLU pipeline (preprocessing, intent classification, entity extraction, sentiment analysis, context enrichment, confidence scoring), Google Cloud Speech-to-Text/TTS for voice I/O, TensorFlow.js for on-device inference, and a visual drag-and-drop flow builder with Firebase persistence.",
    features: ["Multi-provider AI (Groq, OpenAI, Anthropic) with automatic fallback", "6-stage NLU pipeline with 1-hour result caching", "Google Cloud Speech-to-Text & Text-to-Speech", "TensorFlow.js for on-device AI inference", "Visual drag-and-drop IVR flow builder", "Voice recording, menu, audio & call transfer nodes", "Firebase Firestore persistence"],
    highlights: ["6-stage NLU pipeline", "Google Cloud STT/TTS", "No-code flow building"],
  },
  {
    title: "Joy USSD Engine (TypeScript)",
    context: "Library",
    description: "TypeScript rewrite of a Ruby USSD gem for building USSD, WhatsApp and Telegram menu flows, with Hubtel/Arkesel adapters and Redis-backed sessions.",
    tech: ["TypeScript", "Node.js", "Redis", "Vitest"],
    accentColor: "#22D3EE",
    fullDescription: "A TypeScript port of the Ruby joy_ussd_engine gem for building text-based apps quickly. Define menus with lifecycle hooks, route between them, paginate long lists, and target multiple channels and gateways through adapters — rebuilt around async/await, named menu registries and pluggable session storage.",
    features: ["Menu registry with lifecycle hooks and routing", "Paginated menus for long lists", "Hubtel and Arkesel gateway adapters", "In-memory or Redis session storage", "joy-ussd CLI for scaffolding", "Vitest test suite"],
    highlights: ["USSD · WhatsApp · Telegram", "Pluggable sessions", "CLI scaffolding"],
  },
  {
    title: "Shop OS – Offline-First Inventory",
    context: "Personal",
    description: "Inventory and sales app for market vendors and micro-enterprises that keeps working through network blackouts, syncing IndexedDB data to the cloud in the background.",
    tech: ["Next.js", "IndexedDB", "Firebase", "Offline Sync"],
    accentColor: "#34D399",
    fullDescription: "Built for informal vendors in markets where connectivity is unreliable. All reads and writes hit IndexedDB first, and a background sync queue reconciles changes with Firestore whenever the network returns, so sales never stop.",
    features: ["IndexedDB client-side persistence", "Background sync queue with reconciliation", "Admin and Attendant roles", "Sales, stock, credit ledger and dashboard views"],
    highlights: ["Works offline", "Background sync", "Role-based access"],
  },
  {
    title: "Agentic Task Manager",
    context: "Teaching",
    description: "Kanban board you can drive by chatting with an AI agent running on local models — the live-build project from my Academic City University lecture on AI agents.",
    tech: ["Next.js", "Pi Agent SDK", "Ollama", "SQLite"],
    accentColor: "#A78BFA",
    githubUrl: "https://github.com/bismark66/agentic-task-management",
    fullDescription: "A task-management app with an agent built in: ask it to create, move or summarise tasks and it acts through typed tools. Designed so students could run it entirely on local models and extend the agent's tools during a 90-minute live build.",
    features: ["Natural-language task management via an AI agent", "Local models via Ollama — no API keys required", "Streamed agent responses", "SQLite persistence"],
    highlights: ["Used in a university lecture", "Runs on local models"],
  },
  {
    title: "Multi-Tenant SaaS Backend",
    context: "Personal",
    description: "NestJS backend implementing schema-per-tenant isolation, so each tenant's data lives in its own PostgreSQL schema.",
    tech: ["NestJS", "TypeORM", "PostgreSQL"],
    accentColor: "#60A5FA",
    githubUrl: "https://github.com/bismark66/multi-tenancy",
    fullDescription: "A reference backend for SaaS multi-tenancy using one PostgreSQL schema per tenant, with tenant resolution per request and TypeORM connections scoped to the right schema.",
    features: ["Schema-per-tenant data isolation", "Per-request tenant resolution", "TypeORM with PostgreSQL"],
    highlights: ["Schema-per-tenant", "NestJS"],
  },
  {
    title: "AgroChem Inventory System",
    context: "Personal",
    description: "Point-of-sale and inventory system for agricultural input dealers, with customer credit ledgers, stock alerts and sales reporting.",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "Neon Postgres", "Radix UI"],
    accentColor: "#6EE7B7",
    liveUrl: "https://agrochem-inventory.vercel.app",
    fullDescription: "Retail and inventory management for agricultural input dealers in emerging markets such as Ghana. Features point-of-sale checkout, customer credit ledger tracking, role-based authentication, stock tracking with low-stock alerts, and dynamic reporting.",
    features: ["Role-based access (Admin/Shopkeeper)", "Point-of-sale checkout", "Stock tracking & low-stock alerts", "Sales reporting with date filtering", "Customer credit tracking", "Mobile-first responsive design"],
    highlights: ["Multi-role RBAC", "Credit ledger", "In-app bug reporting"],
  },
  {
    title: "G-Client – E-Learning Platform (Admin · API · Learner)",
    context: "Personal · 3 apps",
    description: "E-learning ecosystem of three apps: an admin console for courses, learners and invoices; a documented REST backend; and a React 19 learner platform with enrollment, checkout and analytics.",
    tech: ["React 19", "TypeScript", "Node.js", "REST API", "Mantine UI", "React Query", "Recharts", "Swagger"],
    accentColor: "#A78BFA",
    fullDescription: "One platform, three products. The Admin console lets internal teams manage learners, tracks, courses and invoices from a dashboard. The Backend exposes the documented REST contracts both clients consume, with shared auth and business logic. The Learner app covers the journey from onboarding to course completion: discovery, enrollment and checkout, invoices, and a progress dashboard with Recharts analytics.",
    features: [
      "Admin: role-based auth; learner, track and course management; invoice and reporting views",
      "Backend: documented REST APIs (Swagger) with shared auth and business logic for both clients",
      "Learner: JWT auth with token refresh and password-reset flow",
      "Learner: course and track enrollment with checkout and invoices",
      "Learner: progress dashboard and analytics charts with Recharts",
      "Responsive on desktop and mobile; atomic-design component architecture",
    ],
    highlights: ["3 connected apps", "React 19 + TypeScript", "Documented API"],
    links: [
      { label: "Learner app", href: "https://g-client-learner-one.vercel.app/", kind: "live" },
      { label: "Admin console", href: "https://g-client-admin-hazel.vercel.app/", kind: "live" },
      { label: "API docs", href: "https://g-client-backend.onrender.com/api/docs", kind: "docs" },
      { label: "Learner repo", href: "https://github.com/bismark66/g-client-learner", kind: "repo" },
      { label: "Admin repo", href: "https://github.com/bismark66/g_client_admin", kind: "repo" },
      { label: "Backend repo", href: "https://github.com/bismark66/g_client_backend", kind: "repo" },
    ],
  },
  {
    title: "Smile At School Website & Digital Tools",
    context: "Volunteer",
    description: "Website and digital collaboration tools for an education nonprofit — cutting communication delays by 40% and supporting 200+ students across 4 countries.",
    tech: ["Next.js", "Contentful", "Tailwind CSS", "SEO"],
    accentColor: "#60A5FA",
    liveUrl: "https://smileatschool.org",
    fullDescription: "Built smileatschool.org for an education nonprofit serving underserved communities — a Contentful-powered Next.js site with programs, gallery, blog, volunteer and sponsor pages — and standardised the digital collaboration suite used by its global teams, including Virtual Exchange Programs connecting 200+ students from 4 countries.",
    features: ["Contentful CMS for blog and programs", "ISR with hourly revalidation and full SEO metadata", "Cross-country collaboration tools", "Virtual Exchange Program coordination"],
    highlights: ["40% faster communication", "200+ students connected", "4 countries"],
  },
  {
    title: "Ride Hailing Management System",
    context: "Dropin Ghana",
    description: "Admin dashboard and public site for Dropin Ghana supporting 10k+ monthly users with RBAC, real-time rides, and automated CI/CD.",
    tech: ["Next.js", "TypeScript", "OAuth2/JWT", "WebSocket"],
    accentColor: "#F472B6",
    fullDescription: "Comprehensive admin dashboard and public-facing website for Dropin Ghana. Implemented role-based access control, real-time ride tracking via WebSocket, and streamlined CI/CD.",
    features: ["Admin dashboard supporting 10k+ monthly users", "Role-Based Access Control with OAuth2/JWT", "Real-time ride updates via WebSocket", "Automated testing and build previews"],
    highlights: ["10k+ monthly users", "40+ security incidents prevented", "Real-time tracking"],
  },
  {
    title: "Competitor Pricing Scraper",
    context: "ESOKO",
    description: "Production-grade Node.js CLI with dual extraction modes, Puppeteer fallback, Google Sheets auto-export, and cron scheduling.",
    tech: ["Node.js", "Puppeteer", "Google Sheets API", "Cheerio"],
    accentColor: "#A78BFA",
    githubUrl: "https://github.com/bismark66/competitor-pricing-scraper",
    fullDescription: "Professional-grade CLI tool for competitor price monitoring. Features dual extraction modes, Puppeteer fallback for bot-protected sites, automatic Google Sheets export, and cron-based scheduling.",
    features: ["Dual extraction modes (table & card layouts)", "Puppeteer fallback for Cloudflare protection", "Google Sheets auto-export with formatting", "Cron-based automated scheduling", "Winston logging with file rotation"],
    highlights: ["2,400+ lines of code", "7+ competitor integrations", "Automated scheduling"],
  },
  {
    title: "VR-Integrated PWA Platform",
    context: "Relu Interactives",
    description: "High-performance PWAs integrated with VR environments at Relu Interactives, boosting user engagement by 30% with 99.9% API uptime.",
    tech: ["React", "PWA", "RESTful APIs", "VR"],
    accentColor: "#34D399",
    fullDescription: "High-performance Progressive Web Applications integrated with VR environments. Improved RESTful APIs linking VR environments to real-time data with 99.9% uptime.",
    features: ["PWA with offline capability", "VR environment integration", "RESTful API development", "99.9% uptime guarantee"],
    highlights: ["30% boost in engagement", "99.9% API uptime", "VR integration"],
  },
  {
    title: "Track Together – Group Location App",
    context: "Personal",
    description: "Cross-platform Capacitor mobile app for real-time group location sharing with room-based tracking, Leaflet maps, and Socket.IO.",
    tech: ["React", "Capacitor", "Socket.IO", "Leaflet", "Radix UI", "Zod"],
    accentColor: "#34D399",
    fullDescription: "Cross-platform mobile app (iOS, Android, web) built with Capacitor and React for real-time group location sharing. Users create or join rooms, share live GPS coordinates via Socket.IO, and view all members on an interactive Leaflet map. Features native device geolocation, network awareness, and push notifications.",
    features: ["Room-based group tracking (create/join rooms)", "Real-time GPS sharing via Socket.IO", "Interactive Leaflet map with user markers", "Capacitor geolocation & device APIs (iOS + Android)", "Authentication with onboarding flow", "Network-aware with offline handling"],
    highlights: ["Cross-platform mobile", "Real-time Socket.IO", "Native GPS via Capacitor"],
  },
  {
    title: "Fault-Tolerant Notification System",
    context: "Relu Interactives",
    description: "Microservices-based notification system using circuit breaker pattern ensuring 99% delivery rate with auto-recovery.",
    tech: ["Node.js", "NestJS", "Circuit Breaker", "Microservices"],
    accentColor: "#F472B6",
    fullDescription: "Microservices-based notification system with circuit breaker pattern for fault tolerance. Handles high throughput with graceful degradation and automatic recovery.",
    features: ["Circuit breaker pattern for fault tolerance", "Multi-channel notifications (Email, SMS, Push)", "Automatic retry with exponential backoff", "Health monitoring and alerting"],
    highlights: ["99% delivery rate", "Fault-tolerant architecture", "Auto-recovery"],
  },
  {
    title: "Design Patterns in TypeScript",
    context: "Open source",
    description: "Runnable, well-documented TypeScript implementations of classic design patterns, explained with real-world Ghanaian examples like MoMo and Hubtel.",
    tech: ["TypeScript", "Design Patterns", "Node.js"],
    accentColor: "#FBBF24",
    githubUrl: "https://github.com/bismark66/design-principles",
    fullDescription: "A learning resource that makes Gang of Four and resilience patterns practical: each pattern ships as a minimal, runnable example with documentation and real-world analogies drawn from local payment and messaging services.",
    features: ["Factory, Adapter and Chain of Responsibility patterns", "Circuit Breaker for resilient integrations", "Runnable examples with npm start", "Real-world analogies (MoMo, Hubtel)"],
    highlights: ["Runnable examples", "Beginner-friendly docs"],
  },
  {
    title: "Polished Stones Website",
    context: "Client",
    description: "Marketing website for an office-supplies company, with content managed in Prismic so the team can update products and pages without code.",
    tech: ["Next.js", "Prismic CMS", "Ant Design"],
    accentColor: "#22D3EE",
    liveUrl: "https://polishedstones-website.vercel.app",
    fullDescription: "Client website built with Next.js and Prismic slices, giving a non-technical team full control of products, pages and copy.",
    features: ["Prismic slice-based content modelling", "Editable product and page content", "Responsive Ant Design UI"],
    highlights: ["Headless CMS", "Client delivery"],
  },
];

// ─── Speaking, teaching & events ──────────────────────────────────────────────

export const communityItems: CommunityItem[] = [
  {
    title: "Website Design & Online Security — Digital Bridge Training Workshop",
    kind: "Workshop",
    org: "Smile At School Foundation",
    date: "Oct 2026",
    description: "Two-day, hands-on workshop for university students across Ghana: \"AI can build it. Can you break it? Can you secure it?\" Students generated sites with AI, hunted for flaws in a deliberately vulnerable practice site, then learned to fix them and secure their own accounts.",
    accentColor: "#60A5FA",
    link: { label: "Practice site", href: "https://smileworkshop1flawed.vercel.app" },
  },
  {
    title: "AI Agents: From Chatbots to Systems That Act",
    kind: "Guest Lecture",
    org: "Academic City University, Accra",
    date: "2026",
    description: "Taught 60 first-year \"Emerging Technologies\" students how autonomous agents differ from chatbots, then led a 90-minute live build where student teams, running local models, extended my agentic task-management platform.",
    accentColor: "#A78BFA",
    link: { label: "Workshop repo", href: "https://github.com/bismark66/agentic-task-management" },
  },
  {
    title: "AI-Assisted Data Analysis",
    kind: "Training",
    org: "Thrive Africa Data Analyst Programme",
    date: "2026",
    description: "Substitute trainer for beginner analysts — taught data analysis through natural-language interfaces (Ollama, PandasAI, Streamlit), guiding them live from a blank environment to a working tool.",
    accentColor: "#34D399",
  },
  {
    title: "DevFoundation",
    kind: "Founder",
    org: "Ghana",
    date: "2026",
    description: "Founded and ran a three-month, weekend software-development programme for beginner university students — project-based, small-cohort and online, with cohort selection and curriculum shaped by 75 interest-form responses.",
    accentColor: "#FBBF24",
  },
  {
    title: "ISO 27001 & ISO 42001 Strategic Refresher Workshop",
    kind: "Attended",
    org: "Information security & AI governance",
    date: "Nov 2025",
    description: "Workshop on information-security and AI management-system standards, ahead of earning my ISO/IEC 42001 Lead Implementer certification.",
    accentColor: "#F472B6",
  },
  {
    title: "PyCon Ghana 2025",
    kind: "Attended",
    org: "Python Software Community Ghana · Accra",
    date: "Sep 2025",
    description: "Joined Ghana's national Python conference and worked through hands-on sessions on data analysis with pandas (Humble Data) and web crawling with Crawlee.",
    accentColor: "#6EE7B7",
  },
];

/** The first photo is shown large; the rest are thumbnails. All open full-size in the lightbox. */
export const eventPhotos: EventPhoto[] = [
  {
    src: "/lecture_images/digital-bridge-workshop-room.jpeg",
    alt: "Bismark presenting \"Website Design & Online Security\" to university students at the Digital Bridge Training Workshop",
    label: "Workshop · Oct 2026",
    caption: "Website Design & Online Security — Digital Bridge Training Workshop",
    focus: "50% 40%",
  },
  {
    src: "/lecture_images/digital-bridge-workshop-speaking.jpeg",
    alt: "Bismark speaking into a microphone at a lectern during the Digital Bridge Training Workshop",
    label: "Workshop · Oct 2026",
    caption: "On stage at Digital Bridge",
    focus: "50% 45%",
  },
  {
    src: "/lecture_images/smile-at-school-team.jpeg",
    alt: "Six members of the Smile At School Foundation team in branded T-shirts outside a school",
    label: "Volunteer · Smile At School",
    caption: "With the Smile At School team",
    focus: "50% 30%",
  },
  {
    src: "/lecture_images/relu-vr-demo.jpeg",
    alt: "A live virtual-reality headset demo on stage, presenter in a Relu Interactives shirt",
    label: "Relu Interactives",
    caption: "Live VR demo",
    focus: "50% 37%",
  },
  {
    src: "/python-community.jpeg",
    alt: "Group photo of PyCon Africa attendees on a balcony",
    label: "Python community",
    caption: "PyCon Africa",
    focus: "50% 50%",
  },
];

// ─── Education & recognition ──────────────────────────────────────────────────

export const education = {
  degree: "BSc Mechanical Engineering",
  classification: "Second Class Upper",
  school: "Kwame Nkrumah University of Science and Technology (KNUST)",
  location: "Kumasi, Ghana",
  year: "2024",
  specialization: "Design & Production and Facilities Design",
  thesis: {
    title: "Advanced Metering Infrastructure for a Solar PV Electric Cooker",
    summary: "Instrumented a solar PV electric cooker (heat stored in copper coils buried in sea sand) with IoT sensors for real-time energy monitoring, replacing manual on-site tracking. Designed the pipeline from sensor to dashboard — readings over an MQTT broker, routed through Node-RED into MySQL and visualised in a React/Node.js web and mobile dashboard — later extended into a containerised Mosquitto, Node-RED and Grafana test bed. Aligned to UN SDG 9.",
    tags: ["IoT", "MQTT", "Node-RED", "MySQL", "React", "Grafana"],
  },
  attachment: "Industrial attachment — Maxmass Mining Company, Chirano Gold Mines (Oct–Dec 2023): hydraulic systems, diaphragm pumps, auto-lubrication and bulldozer maintenance.",
};

export const awards: Recognition[] = [
  { title: "Most Innovative Student", issuer: "Kwame Nkrumah University of Science and Technology", date: "2024" },
  { title: "AR/VR Africa Award", issuer: "AR/VR Africa", date: "2021" },
];

export const certifications: Recognition[] = [
  {
    title: "ISO/IEC 42001:2023 Lead Implementer",
    issuer: "International Cybersecurity and Digital Forensics Academy",
    date: "Feb 2026",
    detail: "AI management systems — governing how organisations build and run AI responsibly.",
  },
];
