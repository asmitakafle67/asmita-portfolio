import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ExperienceSection } from './sections/Experience';
import { ProjectsSection } from './sections/Projects';
import { SkillsSection } from './sections/Skills';
import { BlogSection } from './sections/Blog';
import { EducationSection } from './sections/Education';
import { ContactSection } from './sections/Contact';
import { Footer } from './components/Footer';
import { personalInfo } from './data/portfolioData';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#080c09] text-[#eaf0eb] relative overflow-hidden selection:bg-accent/25 selection:text-accent-light">
        <Helmet>
          <title>{personalInfo.name} — {personalInfo.title}</title>
          <meta
            name="description"
            content={`Portfolio of ${personalInfo.name}, a Frontend Developer with 4 years of experience specializing in React, Next.js, TypeScript, and modern enterprise web platforms.`}
          />
          <meta
            name="keywords"
            content="Asmita Kafle, Frontend Developer, React, Next.js, TypeScript, JavaScript, WebSockets, UI Engineer, Kathmandu, Nepal"
          />
          <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.title}`} />
          <meta property="og:description" content={personalInfo.tagline} />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://asmitakafle.com" />
        </Helmet>

        {/* Atmospheric Ambient Glowing Orbs (rosan.me signature) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[140px] animate-ambient-1" />
          <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-emerald-500/6 rounded-full blur-[150px] animate-ambient-2" />
          <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-accent/7 rounded-full blur-[140px] animate-ambient-1" />
          <div className="absolute -bottom-20 right-1/3 w-[650px] h-[650px] bg-emerald-400/5 rounded-full blur-[160px] animate-ambient-2" />
        </div>

        {/* Global Floating Cosmic Navigation */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="relative z-10">
          <Hero />
          <About />
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
