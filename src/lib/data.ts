export const personal = {
  name: "Adrian Valdes",
  title: "Software Engineer",
  tagline:
    "I love building all kinds of software. I work solving business problems, and change the tools and fields I work in according to what the solution needs.",
  email: "adrian@adrianvaldes.com",
  linkedin: "https://www.linkedin.com/in/adrian-valdes-diaz/",
  github: "https://github.com/redeemedscp",
  resumeUrl: "/resume.pdf",
  location: "Miami, FL",
  bio: `I love building all kinds of software. I work solving business problems, and I
change the tools and fields I work in according to what the solution needs — from
building internal front-end desktop tools at Hogarth Worldwide, to automating end-to-end
cloud testing infrastructure at Oracle Cloud Infrastructure, to designing a
domain-specific language and editor at SAS Institute. I studied Computer Science at Rice
University, where I also served as Vice President of the MMA Club. Outside of full-time
work, I've built Consistente, an attendance tracking system for MMA gyms, and Reservao, a
booking system similar to Booksy.`,
};

// Headline numbers shown in hero/stat areas. Sourced from the YourAccidentPro
// role below — keep the two in sync if those bullets change.
export const stats = [
  { value: "170K+", label: "lines of code across the platform I lead" },
  { value: "450+", label: "REST API endpoints in production" },
  { value: "77×", label: "faster client search (11s → 143ms)" },
  { value: "3", label: "apps shipped: API, web CRM, iOS/Android" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "YourAccidentPro",
    role: "Lead Developer",
    location: "Miami, FL",
    dates: "Apr 2026 – Present",
    bullets: [
      "Lead development of a three-app personal-injury lead and case-management platform (170K+ lines): a Node.js/Express/MongoDB REST API with 450+ endpoints and 65 data models, a Next.js 16 / React 19 back-office CRM, and an Expo/React Native app shipped to the App Store and Google Play",
      "Replaced the company's Monday.com board with an in-house case-management CRM covering intake, legal and medical placement, vendor and treatment-facility management, visit tracking, and document handling, turning the back office into the daily system of record for operations staff",
      "Built an event-driven workflow engine with 20+ automated task types that opens, routes, and auto-closes work for staff as cases progress, with permission-based routing, scheduled background sweeps, stale-case guard rails, duplicate-lead detection and merging, and push/in-app notifications",
      "Integrated DocuSign eSignature end to end (JWT Grant auth, per-state retainer templates, real-time webhooks plus a polling safety net) and automated generation of filled intake-form PDFs and attorney-ready case-file packages delivered by email",
      "Hardened platform security: audited the API and closed dozens of unauthenticated endpoints, added layered role- and action-level permissions, AES-256-GCM field encryption for SSNs and bank details, token-refresh validation, and removed committed credentials in favor of environment secrets",
      "Cut the core client-search endpoint from 11s to 143ms through query profiling and restructuring, and added multi-select filtering, URL-synced views, bulk actions, and Excel/CSV export on top of it",
      "Own mobile release engineering: GitHub Actions and EAS pipelines for over-the-air updates, native builds, and App Store / Play Store releases, custom Expo config plugins, and a bilingual (English/Spanish) experience with deep-linked push notifications and biometric sign-in",
      "Run an AI-agent-assisted development workflow with Claude Code across all three codebases: maintain the repo guidance and architecture docs the agents work from, direct them through scoped tasks, and review and verify their output before it ships",
      "Designed a read-only, API-key-authenticated reporting API with rate limiting and zero-downtime key rotation for an AI assistant integration, plus geocoded nearest-facility search for placing clients with treatment providers",
    ],
  },
  {
    company: "Hogarth Worldwide",
    role: "Mid-Level Developer",
    location: "Miami, FL",
    dates: "Feb 2025 – Apr 2026",
    bullets: [
      "Worked as part of a Geo-Localization team for a global tech manufacturing client, Apple Inc.",
      "Maintained and built 100+ web marketing pages using multiple front-end technologies",
      "Created an Electron-React desktop application to improve visualization of internal ticket management software, boosting productivity by 25% for Program Managers",
      "Built an Electron-React desktop application for QA Engineers that simplified work distribution by 50%",
    ],
  },
  {
    company: "Oracle Cloud Infrastructure",
    role: "Software Engineering Intern (2x)",
    location: "Austin, TX",
    dates: "May 2024 – Aug 2024 / May 2025 – Aug 2025",
    bullets: [
      "Leveraged the Java TestNG framework to build Windows Canary, an end-to-end testing program ensuring Oracle's Windows compute instances remain reliable after new feature rollouts",
      "Used Terraform to automate infrastructure deployments for Block Storage's Canary Flocks, making DevOps testing operations 25% faster",
      "Built a dynamic dashboard to track running Canary tests, significantly improving test status visualization",
    ],
  },
  {
    company: "SAS Institute",
    role: "Software Development Intern",
    location: "Cary, SC (Remote)",
    dates: "May 2023 – Aug 2023",
    bullets: [
      "Developed CirrusScript, a domain-specific scripting language replacing a block-coding interface, boosting UI builder developer productivity by ~50%",
      "Designed and implemented CirrusScript's lexer and parser using Java's ANTLR package",
      "Built a custom code editor based on VS Code's Monaco editor, with syntax/semantic error checking, autocompletion, hover documentation, and inlay parameters",
      "Integrated the code editor into the UI Builder as a React component, enabling seamless interaction with Redux",
    ],
  },
  {
    company: "Self-employed",
    role: "Freelance Full-Stack Developer",
    location: "Miami, FL",
    dates: "May 2021 – Feb 2022",
    bullets: [
      "Independently developed fully custom e-commerce sites, blogs, and landing pages for small businesses in the Miami area, frequently boosting client sales by more than 50%",
      "Built full-stack solutions on a Django REST Framework API with PostgreSQL, deployed on AWS Elastic Beanstalk, paired with a Next.js client hosted on Vercel",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  description: string;
  highlights: string[];
  stack: string[];
  visibility: "private";
};

export const projects: Project[] = [
  {
    name: "Consistente",
    org: "Diaz Combat Software",
    description:
      "Attendance tracking system built for Midtown MMA Houston, part of a small product suite (web app, marketing site, and mobile app) for martial arts gyms.",
    highlights: [
      "Class scheduling, attendance, and member management for gym staff",
      "Stripe-based billing integration and CSV export for reporting",
      "Companion Next.js marketing site and an Expo/React Native mobile app for the same product line",
    ],
    stack: ["React", "Material UI", "Firebase", "Stripe", "Next.js", "React Native / Expo"],
    visibility: "private",
  },
  {
    name: "Reservao",
    org: "Criollos Tech",
    description:
      "Appointment booking and scheduling platform with dual payment providers, timezone-aware scheduling, and automated post-appointment review emails.",
    highlights: [
      "Stripe and PayPal payment links with webhook-driven order completion",
      "Timezone-aware appointment scheduling with Google OAuth sign-in",
      "Automated review-request emails triggered after appointment completion",
    ],
    stack: ["Next.js", "Material UI", "Express", "TypeScript", "Supabase", "Sequelize"],
    visibility: "private",
  },
  {
    name: "Cuba Diving",
    org: "Criollos Tech",
    description:
      "Booking platform for a dive-tour business, handling reservations, payments, and reporting for a small tourism operation.",
    highlights: [
      "Stripe checkout for dive trip reservations",
      "Image galleries and booking flows built with Next.js and MUI",
      "CSV export and reporting for the business owner",
    ],
    stack: ["Next.js", "Material UI", "Express", "MongoDB", "Sequelize", "Stripe"],
    visibility: "private",
  },
  {
    name: "MKL Payments",
    org: "Criollos Tech",
    description:
      "QR-based point-of-sale and payments platform, with a structured NestJS backend and a merchant-facing analytics dashboard.",
    highlights: [
      "QR-code checkout flow for in-person payments",
      "NestJS backend with Sequelize/MySQL, built around modular, dependency-injected services",
      "Merchant analytics dashboard for transaction reporting",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Sequelize", "MySQL", "shadcn/ui"],
    visibility: "private",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript / TypeScript", "Java", "C", "HCL", "HTML", "CSS"],
  "Frameworks & Libraries": [
    "React",
    "React Native",
    "Next.js",
    "Express",
    "Django",
    "Electron",
    "Material UI",
    "TestNG",
  ],
  "Tools & Platforms": [
    "Git / GitHub",
    "SVN",
    "Docker",
    "AWS",
    "Google Cloud Platform",
    "Terraform",
    "Firebase",
    "Figma",
    "Claude Code / AI agents",
  ],
};

export const education = {
  school: "Rice University",
  location: "Houston, TX",
  degree: "Bachelor of Science in Computer Science",
  dates: "Aug 2022 – May 2024",
  coursework: [
    "Computer Systems",
    "Algorithms",
    "Object-Oriented Design",
    "Multivariate Calculus",
    "Linear Algebra",
  ],
  certifications: [
    "Oracle Cloud Infrastructure Certified Foundations Associate",
    "Google Cloud Platform Certified Cloud Digital Leader",
    "Google IT Automation with Python Professional Certificate",
  ],
};

export const activities = [
  {
    org: "Criollos Tech",
    role: "Freelancing Business Owner",
    dates: "Jan 2023 – Present",
    detail: "Small business building affordable software for Hispanic business owners.",
  },
  {
    org: "Rice University MMA Club",
    role: "Vice President & Brazilian Jiu-Jitsu Coach",
    dates: "Aug 2022 – May 2024",
    detail: "Led weekly BJJ practices and organized club social events.",
  },
  {
    org: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow & Recruiting Captain",
    dates: "Present",
    detail: "Selective 18-month professional development program for high-achieving diverse talent.",
  },
];
