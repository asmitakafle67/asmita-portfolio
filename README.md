# Asmita Kafle — Personal Portfolio

A modern, minimalist personal portfolio website built from scratch with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed with inspiration from Linear and Vercel: light aesthetic with warm off-white tones (`#FAF9F6`), dark charcoal typography (`#121316`), and sophisticated royal blue accents.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
├── public/
│   ├── favicon.svg             # Custom vector logo icon
│   ├── Asmita-Kafle-CV.pdf     # Downloadable CV document
│   └── images/                 # Screenshot assets folder
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── SectionHeading.tsx  # Consistent typography and category tags
│   │   ├── ProjectCard.tsx     # Card with UI mockups, tech pills & live links
│   │   └── Footer.tsx          # Minimalist footer with quick navigation
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for projects, skills & bio
│   ├── sections/
│   │   ├── Hero.tsx            # Intro, stats, terminal config card & CTAs
│   │   ├── About.tsx           # Narrative bio and core engineering pillars
│   │   ├── Experience.tsx      # Chronological career timeline
│   │   ├── Projects.tsx        # Filterable commercial & AI project grid
│   │   ├── Skills.tsx          # Categorized competencies with proficiency indicators
│   │   ├── Education.tsx       # B.E. Computer Engineering & MBA credentials
│   │   └── Contact.tsx         # Functional email link, copy button & mailto form
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root component with SEO Helmet
│   ├── index.css               # Tailwind directives & base styling
│   └── main.tsx                # React DOM entry point
├── tailwind.config.js          # Tailored color palette & typography
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite bundling & alias configuration
```

---

## 🛠️ Personalization Guide

1. **LinkedIn & GitHub URLs**:
   Update `github` and `linkedin` fields in [`src/data/portfolioData.ts`](file:///c:/Github%20project/Asmita%20Kafle%20Portfolio/src/data/portfolioData.ts).

2. **Custom CV**:
   Replace [`public/Asmita-Kafle-CV.pdf`](file:///c:/Github%20project/Asmita%20Kafle%20Portfolio/public/Asmita-Kafle-CV.pdf) with your updated resume PDF.

3. **Project Screenshots**:
   Place screenshots in `public/images/` and easily embed them in [`src/components/ProjectCard.tsx`](file:///c:/Github%20project/Asmita%20Kafle%20Portfolio/src/components/ProjectCard.tsx).

