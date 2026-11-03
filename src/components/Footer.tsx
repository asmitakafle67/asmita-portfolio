import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-charcoal-200/90 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal-100">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-charcoal-900 text-white flex items-center justify-center text-xs font-bold font-mono">
              AK
            </span>
            <div>
              <span className="text-base font-bold text-charcoal-900 tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-charcoal-500">
                {personalInfo.title} • Kathmandu, Nepal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-charcoal-600">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-charcoal-200 hover:bg-charcoal-100 text-charcoal-700 transition-colors flex items-center gap-1.5 text-xs font-medium ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

