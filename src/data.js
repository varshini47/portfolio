// Edit this file to fill in your own info — everything below is placeholder content.

export const profile = {
  name: "Varshini Pandiri",
  role: "Software Development Engineer",
  tagline: "Building fast, thoughtful software products.",
  bio: "I'm a software engineer who enjoys building things end-to-end, from designing clean, scalable APIs to crafting polished, responsive interfaces. I care about writing maintainable code, solid system design, and the small details that make a product feel great to use. I'm always looking to learn new tools and approaches, and I enjoy collaborating with teams to turn ideas into real, working software.",
  location: "Bengaluru, India",
  resumeUrl: "/varsh_resume.pdf",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "National Institute of Technology, Calicut",
    period: "Nov 2022 – Jun 2026",
    score: "CGPA: 9.62 / 10.0",
  },
};

export const socials = {
  github: "https://github.com/varshini47",
  linkedin: "https://www.linkedin.com/in/varshini-pandiri-5b6495257/",
  leetcode: "https://leetcode.com/u/Varshini4/",
  email: "varshini.pandiri04@gmail.com",
  phone: "+91 7075035815",
};

// Group your skills under whatever headings fit you (add/rename/remove categories freely).
// Each skill key must match an entry in the iconMap in Skills.jsx.
export const skillCategories = [
  {
    category: "Languages",
    skills: ["c", "cpp", "python", "javascript", "typescript", "sql"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["react", "reactnative", "html", "css", "tailwind", "bootstrap"],
  },
  {
    category: "Backend",
    skills: ["node", "express", "springboot"],
  },
  {
    category: "Databases & Cloud",
    skills: ["mongodb", "postgresql", "mysql"],
  },
  {
    category: "Machine Learning",
    skills: ["scikitlearn", "pandas", "numpy"],
  },
];

export const projects = [
  {
    title: "Alumni Network Platform",
    description:
      "A responsive full-stack alumni networking platform serving 500+ users, with professional connections, job opportunity sharing, and collaborative engagement. Includes secure auth, profile management, real-time private messaging, group chat, and automated email invitations.",
    tags: ["Spring Boot", "React.js", "Tailwind CSS"],
    liveUrl: "https://alumni-frontend-bger.onrender.com/",
    repoUrl: "https://github.com/varshini47/Alumni-back",
    screenshot: "/project-screenshots/alumni.png",
  },
  {
    title: "MERN Stack Blog Application",
    description:
      "A full-featured responsive blog platform built with the MERN stack, with JWT and Google OAuth authentication, an interactive comment system, and real-time post engagement features like likes and shares.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "https://mern-blog-yvlv.onrender.com/",
    repoUrl: "https://github.com/varshini47/mern-blog",
    screenshot: "/project-screenshots/mern-blog.png",
  },
];

// Add a `logoUrl` field (e.g. "/logos/company.png", image placed in public/logos/)
// to show a real company logo in the timeline marker. Without it, initials are used.
export const experience = [
  {
    role: "Software Development Engineer - 1",
    company: "Flipkart",
    period: "Jul 2026 – Present",
    logoUrl: "/logos/flipkart.png",
    highlights: [],
  },
  {
    role: "SDE Winter Intern",
    company: "Flipkart",
    period: "Jan 2026 – Jun 2026",
    logoUrl: "/logos/flipkart.png",
    highlights: [
      "Build cross-platform mobile features in React Native and TypeScript for Flipkart Minutes, a new standalone quick-commerce app currently in internal pre-launch testing, spanning Homepage, Product, Account, and Cart.",
      "Built reusable Atlas design system widgets and integrated backend APIs to create scalable, server-driven UI components across multiple application modules.",
      "Optimize interactive components and animations (bottom sheets, modals, custom tab headers) using React Native's animation and gesture APIs, improving perceived load and interaction latency.",
    ],
  },
  {
    role: "AMTS Intern",
    company: "Salesforce",
    period: "May 2025 – Jul 2025",
    logoUrl: "/logos/salesforce.png",
    highlights: [
      "Developed an enterprise-grade Retrieval-Augmented Generation (RAG) system using Salesforce Einstein AI as the LLM with PostgreSQL vector embeddings, processing 10,000+ knowledge base entries from GUS, Confluence, GitHub, and public documentation.",
      "Designed and implemented automated data pipelines with document processing, chunking, and embedding capabilities, improving knowledge retrieval accuracy by 40%.",
      "Developed the Ensure Refunds workflow and functional test suites, securing DRB and CX approval for production deployment.",
    ],
  },
];
