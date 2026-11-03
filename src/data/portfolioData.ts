import { Project, Experience, SkillCategory, Education } from '../types';

export const personalInfo = {
  name: 'Asmita Kafle',
  title: 'Software Developer | Full Stack Developer',
  experienceYears: '5+ years',
  location: 'Kathmandu, Nepal',
  email: 'asmita.kafle67@gmail.com',
  github: 'https://github.com/placeholder-asmita', // Placeholder: easily update with actual URL
  linkedin: 'https://linkedin.com/in/placeholder-asmita', // Placeholder: easily update with actual URL
  cvPath: '/Asmita-Kafle-CV.pdf',
  tagline: 'Engineering scalable, intuitive web applications and high-performance digital interfaces with React, Next.js, and TypeScript.',
  about: `I am a Software Developer with over 5 years of professional experience building responsive web platforms, AI-assisted dashboards, and enterprise tools. My primary focus and deepest expertise lie in the modern frontend ecosystem — React, Next.js, TypeScript, JavaScript, and sophisticated UI architecture.

In addition to frontend engineering, I have strong hands-on experience and continuously expanding skills across the full stack, including Python, FastAPI, PostgreSQL, REST/GraphQL API design, and AWS cloud integration. I value clean architecture, pixel precision, accessible design, and maintainable software that delivers measurable business value.`,
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'My core strength: engineering responsive, type-safe, accessible interfaces and scalable design systems.',
    skills: [
      { name: 'React', level: 'Advanced', highlight: true },
      { name: 'Next.js', level: 'Advanced', highlight: true },
      { name: 'TypeScript', level: 'Advanced', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'Mantine UI', level: 'Proficient' },
      { name: 'shadcn/ui', level: 'Proficient' },
      { name: 'Bootstrap', level: 'Proficient' },
    ],
  },
  {
    title: 'State Management & Data Fetching',
    description: 'Optimizing application state, real-time caches, and asynchronous server synchronization.',
    skills: [
      { name: 'Zustand', level: 'Advanced', highlight: true },
      { name: 'Redux / Redux Toolkit', level: 'Advanced', highlight: true },
      { name: 'React Query (TanStack)', level: 'Advanced', highlight: true },
      { name: 'SWR', level: 'Proficient' },
      { name: 'WebSockets', level: 'Proficient' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Practical backend services, data pipelines, and API integrations.',
    skills: [
      { name: 'Python', level: 'Proficient', highlight: true },
      { name: 'FastAPI', level: 'Developing', highlight: true },
      { name: 'Django', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced', highlight: true },
      { name: 'GraphQL', level: 'Proficient' },
    ],
  },
  {
    title: 'Database & Cloud Ecosystem',
    description: 'Reliable persistence, managed cloud primitives, and DevOps workflows.',
    skills: [
      { name: 'PostgreSQL', level: 'Developing', highlight: true },
      { name: 'SQL', level: 'Proficient' },
      { name: 'AWS (Lambda, S3, Cognito)', level: 'Developing' },
      { name: 'AWS Amplify', level: 'Proficient' },
      { name: 'CI/CD Pipelines', level: 'Proficient' },
      { name: 'Git & GitHub / Bitbucket', level: 'Advanced', highlight: true },
      { name: 'Jira & Confluence', level: 'Proficient' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Qsystems AI',
    role: 'Frontend Developer',
    period: 'September 2024 – Present',
    location: 'Kathmandu, Nepal (Hybrid / Remote)',
    isCurrent: true,
    type: 'full-time',
    description: 'Developing enterprise applications and AI-powered software platforms, delivering high-performance UI systems for demanding operational workflows.',
    bullets: [
      'Contributing to Sun Chemical Smart Scheduler, an enterprise manufacturing and production scheduling system.',
      'Engineering high-density dashboards, production monitoring views, timelines, Kanban boards, and complex data visualizations.',
      'Integrating REST APIs, live WebSockets for real-time synchronization, secure authentication, and role-based access control (RBAC).',
      'Leveraging React, Next.js, TypeScript, Tailwind CSS, Mantine, Zustand, and AWS Amplify to ensure predictable performance.',
      'Collaborating actively with cross-functional backend developers, AI engineers, and product leadership.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Mantine', 'Zustand', 'AWS Amplify', 'WebSockets', 'REST APIs'],
  },
  {
    company: 'Genese Solution',
    role: 'Software Engineer',
    period: 'May 2022 – October 2024',
    location: 'Kathmandu, Nepal',
    isCurrent: false,
    type: 'full-time',
    description: 'Delivered web and desktop solutions across fintech, digital banking, enterprise analytics, and generative AI initiatives.',
    bullets: [
      'Developed and maintained production client applications utilizing React, Next.js, TypeScript, and JavaScript.',
      'Contributed to Gandalf Insight, a generative AI-powered fintech data engineering platform.',
      'Architected cross-platform desktop interfaces using Electron and Next.js for high-fidelity data views.',
      'Integrated resilient REST and GraphQL APIs with robust caching, error handling, and offline fallbacks.',
      'Implemented centralized state management architectures using Redux, Zustand, and React Query.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Electron', 'Redux', 'Zustand', 'React Query', 'GraphQL', 'REST APIs'],
  },
  {
    company: 'Genese Solution',
    role: 'Full Stack Development Intern',
    period: 'January 2022 – April 2022',
    location: 'Kathmandu, Nepal',
    isCurrent: false,
    type: 'internship',
    description: 'Immersive engineering internship focused on modern JavaScript full-stack workflows and AWS cloud integrations.',
    bullets: [
      'Engineered responsive web modules using React, Next.js, and Redux.',
      'Gained hands-on experience with AWS serverless services and frontend-backend data contracts.',
      'Participated in code reviews, automated unit testing, and agile sprint delivery cycles.',
    ],
    technologies: ['React', 'Next.js', 'Redux', 'AWS Serverless', 'JavaScript', 'HTML5/CSS3'],
  },
  {
    company: '10 Orbits',
    role: 'Python Development Intern',
    period: 'June 2021 – September 2021',
    location: 'Kathmandu, Nepal',
    isCurrent: false,
    type: 'internship',
    description: 'Backend engineering internship developing Python web applications and relational database solutions.',
    bullets: [
      'Built a full-featured bookstore web application utilizing Python, Django, HTML, CSS, and Bootstrap.',
      'Managed data models, query optimization, and administrative workflows in relational databases.',
      'Employed Git for version control and worked extensively within Linux server environments.',
    ],
    technologies: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'Linux', 'Git'],
  },
];

export const projects: Project[] = [
  {
    id: 'sun-chemical',
    title: 'Sun Chemical Smart Scheduler',
    category: 'Enterprise Production & AI Scheduling',
    description: 'A sophisticated manufacturing and production scheduling platform engineered for enterprise industrial operations. Features real-time state synchronization, granular shift planning, and live equipment telemetry.',
    roleHighlights: [
      'Engineered interactive Gantt-style production timelines and dynamic drag-and-drop Kanban boards.',
      'Integrated real-time WebSockets to coordinate concurrent multi-user schedule edits without collision.',
      'Implemented role-based access control and responsive interfaces for shop-floor operators and production managers.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Mantine', 'Zustand', 'AWS Amplify', 'WebSockets'],
    liveUrl: 'https://sunchemical-dev.qsystems.ai',
    status: 'Enterprise Dev Environment',
    accentColor: '#1D4ED8',
  },
  {
    id: 'qsystems-ai',
    title: 'Qsystems AI',
    category: 'Enterprise AI Workspace',
    description: 'The core flagship platform and AI orchestration workspace powering enterprise automation, intelligent agent interactions, and organizational workflows.',
    roleHighlights: [
      'Constructed responsive analytical dashboards with fluid navigation and intuitive model configuration controls.',
      'Implemented enterprise-grade authentication flows and user permission management.',
      'Built scalable layout structures handling high data volume with minimal browser overhead.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'RBAC', 'Zustand'],
    liveUrl: 'https://app.qsystems.ai/',
    status: 'Live Platform',
    accentColor: '#0284C7',
  },
  {
    id: 'prospect-ai',
    title: 'Prospect AI',
    category: 'Sales Intelligence & Analytics',
    description: 'An AI-powered sales intelligence and prospecting dashboard facilitating customer discovery, lead scoring, and actionable pipeline insights for revenue teams.',
    roleHighlights: [
      'Engineered high-density tabular data grids with multi-parameter filtering, sorting, and inline editing.',
      'Integrated asynchronous data pipelines and predictive lead metrics with visual progress indicators.',
      'Designed responsive dashboard cards and summary telemetry widgets.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'REST APIs', 'Data Visualizations'],
    liveUrl: 'https://prospect.qsystems.ai/dashboard',
    status: 'Live Application',
    accentColor: '#2563EB',
  },
  {
    id: 'gandalf-insight',
    title: 'Gandalf Insight',
    category: 'Fintech Data Engineering & GenAI',
    description: 'A generative AI-powered financial data engineering platform translating complex market and corporate datasets into actionable intelligence and automated executive reports.',
    roleHighlights: [
      'Developed interactive financial charting views and automated generative insight delivery modules.',
      'Bridged web and desktop experiences through Electron and Next.js integration.',
      'Wired GraphQL and REST endpoints with resilient client-side caching for high-frequency market data.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Electron', 'Redux', 'GraphQL', 'REST APIs'],
    liveUrl: 'https://www.gandalfinsights.com/',
    status: 'Live Platform',
    accentColor: '#4338CA',
  },
  {
    id: 'knowitall',
    title: 'Knowitall',
    category: 'Knowledge Discovery & Management',
    description: 'An enterprise knowledge discovery system providing rapid semantic document search, classification, and centralized collaborative knowledge bases for distributed teams.',
    roleHighlights: [
      'Engineered high-speed search exploration views with contextual previews and highlighted query terms.',
      'Integrated cloud-backed storage contracts and document categorization metadata via AWS.',
      'Optimized query performance and cache revalidation with React Query.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'React Query', 'Tailwind CSS', 'AWS'],
    liveUrl: 'https://knowitall.genesesolution.com/',
    status: 'Enterprise System',
    accentColor: '#0D9488',
  },
  {
    id: 'popal',
    title: 'POPal',
    category: 'Point-of-Sale & Retail Operations',
    description: 'A modern, streamlined point-of-sale and retail operations management platform tailored for swift point-of-sale transactions, inventory control, and live merchant reporting.',
    roleHighlights: [
      'Built a frictionless checkout and order entry flow optimized for touch screens and keyboard shortcuts.',
      'Created real-time inventory tracking interfaces with threshold alerts and reorder logs.',
      'Structured modular state management with Zustand for rapid receipt generation and transaction history.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'REST APIs'],
    liveUrl: 'https://popalpro.com/',
    status: 'Live Product',
    accentColor: '#059669',
  },
];

export const educationList: Education[] = [
  {
    degree: 'Master of Business Administration (MBA)',
    field: 'Business Administration & Strategic Leadership',
    institution: 'KFA Business School, affiliated with Lincoln University College, Malaysia',
    period: 'Currently Pursuing',
    details: 'Developing strategic managerial perspective, business operations understanding, and cross-functional technology leadership capabilities.',
    isOngoing: true,
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    field: 'Computer Engineering',
    institution: 'Nepal College of Information Technology, Pokhara University',
    period: 'Graduated 2020',
    grade: 'CGPA: 3.26',
    details: 'Rigorous foundation in computer systems, algorithms, software engineering principles, databases, object-oriented design, and computing architectures.',
    isOngoing: false,
  },
];

