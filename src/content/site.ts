// ============================================================================
// SITE CONTENT — SINGLE SOURCE OF TRUTH
// ============================================================================
// Edit this file to change almost everything on the website: name, bio,
// projects, skills, experience, education, links, resume path, images.
// See CUSTOMIZATION.md at the project root for a full walkthrough.
// ============================================================================

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  number: string;
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
};

export type TimelineStep = {
  number: string;
  label: string;
};

export type EmbeddedProject = {
  title: string;
  description: string;
  tags: string[];
};

export const siteConfig = {
  person: {
    name: "Aboobaker Siddique",
    firstName: "Aboobaker",
    titles: [
      "AI Application Developer",
      "Python Backend Developer",
      "Aspiring AI Engineer",
    ],
    tagline:
      "Building intelligent applications with Python, APIs, LLMs and modern backend systems.",
    location: "Trivandrum, Kerala, India",
    locationShort: "Trivandrum, India",
    email: "aboobakersiddique2004@gmail.com",
    phone: "+91 9567830686",
    eyebrowLeft: "ELECTRONICS & AI DEVELOPER",
    eyebrowRight: "TRIVANDRUM, INDIA",
  },

  social: {
    github: "https://github.com/AboobakerSiddique",
    linkedin: "https://www.linkedin.com/in/aboobaker-siddique-ba4a66333",
    email: "mailto:aboobakersiddique2004@gmail.com",
  },

  seo: {
    title: "Aboobaker Siddique — AI Application Developer & Python Backend Developer",
    description:
      "Aboobaker Siddique is a Python backend and AI application developer building intelligent applications with FastAPI, APIs, LLMs and modern software systems.",
    keywords: [
      "Aboobaker Siddique",
      "AI Application Developer",
      "Python Developer",
      "Backend Developer",
      "FastAPI Developer",
      "Generative AI",
      "LLM Developer",
      "AI Engineer",
      "Python FastAPI",
      "AI Applications",
    ],
    canonicalUrl: "https://aboobakersiddique.dev",
  },

  hero: {
    eyebrow: "AVAILABLE FOR OPPORTUNITIES",
    headline: "PORTFOLIO",
    leftHeadline: "I BUILD BACKEND SYSTEMS & AI-POWERED APPLICATIONS",
    rightDescription:
      "ECE graduate building modern backend systems and AI applications with Python, FastAPI, APIs, databases and LLMs.",
    signature: "Aboobaker Siddique",
    portrait: "/images/profile.png",
  },

  metrics: [
    { number: "01", label: "PYTHON" },
    { number: "02", label: "FASTAPI" },
    { number: "03", label: "GENERATIVE AI" },
    { number: "04", label: "FULL-STACK AI" },
  ],

  brandLine: "FROM HARDWARE TO INTELLIGENCE.",

  about: {
    heading: "FROM HARDWARE TO INTELLIGENCE",
    paragraphs: [
      "I started with electronics and embedded systems — working with microcontrollers, sensors, circuits and physical systems.",
      "My focus gradually moved toward software.",
      "Python introduced me to programming at a deeper level.",
      "FastAPI taught me how backend systems are structured.",
      "Generative AI showed me how software can become intelligent.",
      "Now I'm building at the intersection of backend engineering and AI.",
    ],
  },

  evolution: [
    { number: "01", label: "ECE ENGINEERING" },
    { number: "02", label: "PYTHON" },
    { number: "03", label: "BACKEND DEVELOPMENT" },
    { number: "04", label: "AUTHENTICATION & SECURITY" },
    { number: "05", label: "GENERATIVE AI" },
    { number: "06", label: "AI APPLICATION DEVELOPMENT" },
    { number: "07", label: "AI ENGINEERING" },
  ] satisfies TimelineStep[],
  evolutionCurrent: "AI APPLICATION DEVELOPMENT",
  evolutionFuture: "AI ENGINEER",

  projects: [
    {
      id: "siddique-ai",
      number: "01",
      title: "SIDDIQUE-AI",
      category: "PERSONAL AI COMPANION",
      description:
        "A full-stack, high-performance personal AI companion featuring real-time SSE streaming, persistent SQLite memory, safe local system tool execution, and an ultra-minimal dark luxury interface.",
      image: "/images/projects/siddique-ai.png",
      technologies: ["PYTHON", "AI", "SSE", "SQLITE", "SYSTEM TOOLS"],
      highlights: [
        "Real-time SSE streaming",
        "Persistent SQLite memory",
        "AI conversation system",
        "Local system tool execution",
        "Full-stack architecture",
        "Dark luxury interface",
      ],
      github: "https://github.com/AboobakerSiddique/Siddique-AI",
      live: "https://siddique-ai-frontend.onrender.com/",
      featured: true,
    },
    {
      id: "dripvault",
      number: "02",
      title: "dripVault",
      category: "AI WARDROBE INTELLIGENCE",
      description:
        "An AI-powered wardrobe and outfit intelligence platform that analyzes clothing, generates outfits, incorporates weather and personal preferences, and provides a structured digital wardrobe.",
      image: "/images/projects/dripvault.png",
      technologies: [
        "NEXT.JS",
        "TYPESCRIPT",
        "SUPABASE",
        "GEMINI",
        "AI",
        "POSTGRESQL",
      ],
      highlights: [
        "AI clothing analysis",
        "AI outfit generation & modification",
        "Weather-aware styling",
        "Compatibility scoring engine",
        "Outfit planner, history & favourites",
        "Mobile-first interface",
      ],
      github: "https://github.com/AboobakerSiddique/dripVault",
      live: "",
      featured: true,
    },
    {
      id: "student-management-system",
      number: "03",
      title: "STUDENT MANAGEMENT SYSTEM",
      category: "PYTHON BACKEND",
      description:
        "A modern Student Management System built with FastAPI, SQLite, SQLAlchemy, and a Tkinter Desktop GUI. This project demonstrates full-stack Python development by combining a REST API backend with a desktop frontend for complete CRUD",
      image: "/images/projects/student-managment-system.png",
      technologies: ["PYTHON", "FASTAPI", "SQLALCHEMY", "SQLITE", "Tkinter"],
      highlights: [
        "Add,View,Update,Delete,Search Students",
        "SQLite Database Storage",
        "SQLAlchemy ORM",
        "Full CRUD with input validation",
        "Desktop GUI built with Tkinter",
        "Swagger / OpenAPI docs",
      ],
      github: "https://github.com/AboobakerSiddique/Student-Management-System",
      live: "https://drip-vault-drip-vault1.vercel.app/",
      featured: false,
    },
    {
      id: "aI-resume-extractor",
      number: "04",
      title: "AI Resume Extractor",
      category: "AI RESUME PROCESSING",
      description:
        "An AI-powered resume parsing and analysis tool that extracts relevant information from resumes and provides structured data for easier management and evaluation.",
      image: "/images/projects/ai-resume-extractor.png",
      technologies: [
        "PYTHON",
        "Google Gemini API",
        "Google GenAI SDK",
        "Pydantic",
        "AI",
        "JSON",
      ],
      highlights: [
        "AI resume parsing",
        "AI data extraction",
        "Structured data output",
        "Extract Resume and Saved Profile tabs",
        " Save extracted profiles as JSON",
        
      ],
      github: "https://github.com/AboobakerSiddique/AI-Resume-Extractor",
      live: "",
      featured: false,
    },
  ] satisfies Project[],

  architectures: {
    "siddique-ai": [
      "USER",
      "AI INTERFACE",
      "BACKEND",
      "├── LLM",
      "├── MEMORY",
      "├── STREAMING",
      "└── SYSTEM TOOLS",
      "RESPONSE",
    ],
    dripvault: [
      "USER",
      "NEXT.JS",
      "SUPABASE",
      "├── AUTH",
      "├── DATABASE",
      "└── STORAGE",
      "GEMINI",
      "CLOTHING ANALYSIS",
      "COMPATIBILITY ENGINE",
      "OUTFIT",
    ],
  },

  featuredCaseStudies: [
    {
      projectId: "siddique-ai",
      problem:
        "Most AI chat tools reset context on every session and can't act on the local system. There was no lightweight, self-hosted companion that remembered conversations and could safely execute local tasks.",
      approach:
        "Built a full-stack Python application with a streaming-first architecture — every response is delivered token-by-token over Server-Sent Events, backed by a persistent SQLite memory layer.",
      architecture:
        "The backend routes requests to an LLM layer, a memory store, and a set of guarded local system tools, then streams the combined response back to a minimal dark interface.",
      result:
        "A working personal AI companion with real memory across sessions, live streaming responses, and controlled local tool execution — running entirely on Python.",
    },
    {
      projectId: "dripvault",
      problem:
        "People struggle to efficiently organize and style their existing wardrobe while accounting for personal aesthetics, occasions, weather, travel, and outfit variety.",
      approach:
        "Built an intelligent digital wardrobe that analyzes clothing with AI and generates context-aware outfits, while adding wardrobe analytics, weather-aware trip planning with smart packing, and complementary couple styling.",
      architecture:
        "Next.js + TypeScript frontend with Supabase Auth, PostgreSQL, RLS, and Storage, Gemini for AI-powered image analysis, and a custom compatibility engine for color theory, aesthetics, weather, outfit scoring, diversity, trip planning, and couple coordination.",
      result:
        "A production-oriented full-stack AI wardrobe platform featuring secure multi-user architecture, configurable AI usage credits, rate limiting, duplicate-request protection, admin monitoring, analytics, smart travel planning, and personalized outfit generation.",
    },
  ],
  

  skills: {
    languages: ["Python", "SQL", "HTML", "CSS"],
    backend: ["FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "SQLite"],
    authentication: [
      "JWT",
      "bcrypt",
      "Password Hashing",
      "Protected Routes",
      "Environment Variables",
    ],
    ai: [
      "LLM Fundamentals",
      "Gemini API",
      "Prompt Engineering",
      "Structured Outputs",
      "LLM Evaluation",
    ],
    aiApplications: [
      "LLM Integration",
      "AI APIs",
      "RAG",
      "AI Agents",
      "AI Application Architecture",
    ],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Arduino IDE"],
    embedded: ["ESP32", "Arduino", "Sensors", "Firmware", "Hardware Prototyping"],
  },

  skillLevels: [
    { name: "PYTHON", level: "BUILDING" },
    { name: "FASTAPI", level: "BUILDING" },
    { name: "GENERATIVE AI", level: "BUILDING" },
    { name: "LLM APPLICATIONS", level: "BUILDING" },
    { name: "AUTHENTICATION & SECURITY", level: "WORKING KNOWLEDGE" },
    { name: "EMBEDDED SYSTEMS", level: "FOUNDATION" },
    { name: "AI AGENTS / RAG", level: "EXPLORING" },
  ],

  experience: [
    {
      number: "01",
      role: "UI Designer",
      company: "Lofilute",
      period: "Jan 2024 — Nov 2024",
      description:
        "Designed responsive web and mobile interfaces, wireframes and high-fidelity prototypes using Figma.",
    },
    {
      number: "02",
      role: "Graphic Designer",
      company: "Divegrid",
      period: "Dec 2024 — Feb 2025",
      description:
        "Designed digital marketing and branding assets while collaborating with cross-functional teams.",
    },
    {
      number: "03",
      role: "Sales Staff",
      company: "Planet Jewel",
      period: "Jul 2024 — Sep 2024",
      description: "Handled sales operations and customer interactions.",
    },
  ] satisfies ExperienceItem[],

  education: {
    degree: "B.TECH",
    field: "Electronics & Communication Engineering",
    institution: "University College of Engineering, Kariavattom",
    period: "2022 — 2026",
    location: "Kerala, India",
  },

  embeddedHeading: "BEFORE AI, THERE WAS HARDWARE.",
  embeddedProjects: [
    {
      title: "Hazard Guardian & Rescue Bot",
      description:
        "Embedded fire and gas-leak detection system with sensor-driven emergency alerts, built around a microcontroller-based robotics platform.",
      tags: ["Embedded Systems", "Sensors", "Robotics", "Fire Detection", "Gas Leak Detection", "Emergency Alerts", "Microcontroller"],
    },
    {
      title: "Breathomicser",
      description:
        "ESP32-based embedded monitoring device using gas sensors and an OLED display for real-time hardware prototyping and diagnostics.",
      tags: ["ESP32", "Gas Sensors", "OLED", "Embedded Monitoring", "Hardware Prototyping"],
    },
  ] satisfies EmbeddedProject[],

  buildTimeline: [
    "Embedded Systems",
    "Python",
    "Backend APIs",
    "Authentication",
    "Generative AI",
    "Siddique-AI",
    "dripVault",
    "AI Engineering",
  ],

  currentFocus: {
    heading: "CURRENTLY BUILDING",
    items: [
      "PYTHON",
      "FASTAPI",
      "LLM APPLICATIONS",
      "AI SYSTEMS",
      "BACKEND ARCHITECTURE",
      "PRODUCTION SOFTWARE",
    ],
    status: "ACTIVE",
  },

  roadmap: {
    heading: "THE NEXT CHAPTER",
    completed: [
      "Python",
      "Backend fundamentals",
      "FastAPI",
      "SQLAlchemy",
      "REST APIs",
      "Authentication",
      "JWT",
      "Generative AI fundamentals",
      "Gemini API",
      "LLM applications",
    ],
    upcoming: ["RAG", "AI Agents", "Production AI", "Advanced AI Engineering"],
  },

  github: {
    heading: "CODE IS THE RECEIPT.",
    subheading: "My GitHub contains the actual implementation behind the portfolio.",
    repos: [
      {
        name: "Siddique-AI",
        description: "Full-stack personal AI companion with streaming and memory.",
        url: "https://github.com/AboobakerSiddique/Siddique-AI",
      },
      {
        name: "dripVault",
        description: "AI-powered wardrobe and outfit intelligence platform.",
        url: "https://github.com/AboobakerSiddique/dripVault",
      },
      {
        name: "AI Developer Roadmap",
        description: "A structured roadmap tracking the path to AI engineering.",
        url: "https://github.com/AboobakerSiddique/AI-Developer-Roadmap",
      },
    ],
  },

  resume: {
    path: "/resume/Aboobaker-Siddique-Resume.pdf",
  },

  contactCTA: {
    lines: ["LET'S BUILD", "SOMETHING", "INTELLIGENT."],
    script: "Impactful.",
    description:
      "Currently open to opportunities in backend development, AI application development and software engineering.",
  },

  footer: {
    thankYou: "THANK YOU FOR VISITING",
  },
} as const;

export type SiteConfig = typeof siteConfig;
