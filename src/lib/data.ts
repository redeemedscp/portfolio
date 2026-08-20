export const personal = {
  name: "Adrian Valdes Diaz",
  title: "Software Engineer",
  tagline:
    "I love building all kinds of software. I work solving business problems, and change the tools and fields I work in according to what the solution needs.",
  email: "adrianvaldes1439@gmail.com",
  linkedin: "https://www.linkedin.com/in/adrian-valdes-diaz/",
  github: "https://github.com/redeemedscp",
  resumeUrl: "/resume.pdf",
  bio: `I love building all kinds of software. I work solving business problems, and I
change the tools and fields I work in according to what the solution needs — from
building internal front-end desktop tools at Hogarth Worldwide, to automating end-to-end
cloud testing infrastructure at Oracle Cloud Infrastructure, to designing a
domain-specific language and editor at SAS Institute. I studied Computer Science at Rice
University, where I also served as Vice President of the MMA Club. Outside of full-time
work, I've built Consistente, an attendance tracking system for MMA gyms, and Reservao, a
booking system similar to Booksy. I'm currently open to new full-time software
engineering roles.`,
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
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
    dates: "Aug 2022 – Dec 2024",
    detail: "Led weekly BJJ practices and organized club social events.",
  },
  {
    org: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow & Recruiting Captain",
    dates: "Present",
    detail: "Selective 18-month professional development program for high-achieving diverse talent.",
  },
];
