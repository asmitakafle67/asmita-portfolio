import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ExperienceSection } from './sections/Experience';
import { ProjectsSection } from './sections/Projects';
import { SkillsSection } from './sections/Skills';
import { EducationSection } from './sections/Education';
import { ContactSection } from './sections/Contact';
import { Footer } from './components/Footer';
import { personalInfo } from './data/portfolioData';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-charcoal-900 selection:bg-accent-100 selection:text-accent-800">
        <Helmet>
          <title>{personalInfo.name} — {personalInfo.title}</title>
          <meta
            name="description"
            content={`Portfolio of ${personalInfo.name}, a Software Developer with 5+ years of experience specializing in React, Next.js, TypeScript, and modern frontend application development.`}
          />
          <meta
            name="keywords"
            content="Asmita Kafle, Software Developer, Full Stack Developer, React, Next.js, TypeScript, Python, FastAPI, Frontend Engineer, Kathmandu, Nepal"
          />
          <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.title}`} />
          <meta
            property="og:description"
            content={personalInfo.tagline}
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://asmitakafle.com" />
        </Helmet>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Layout */}
        <main>
          <Hero />
          <About />
          <ExperienceSection />
          <ProjectsSection />
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

