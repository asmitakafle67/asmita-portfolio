import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MediumIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c09] border-t border-[#1d2820] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1d2820]">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-accent text-[#080c09] flex items-center justify-center text-xs font-bold font-mono shadow-sm">
              AK
            </span>
            <div>
              <span className="text-base font-bold text-[#eaf0eb] tracking-tight block font-display">
                {personalInfo.name}
              </span>
              <span className="text-xs text-[#8d9e91] font-mono">
                {personalInfo.title} • {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#8d9e91]">
            <a
              href="https://medium.com/@asmita.kafle67"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#1d2820] bg-[#0f1511] hover:text-[#eaf0eb] hover:border-accent/40 transition-colors"
              title="Medium Articles"
              aria-label="Medium"
            >
              <MediumIcon className="w-4 h-4 text-accent" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#1d2820] bg-[#0f1511] hover:text-[#eaf0eb] hover:border-accent/40 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-accent" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#1d2820] bg-[#0f1511] hover:text-[#eaf0eb] hover:border-accent/40 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-accent" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-[#1d2820] bg-[#0f1511] hover:text-[#eaf0eb] hover:border-accent/40 transition-colors"
              title="Send Direct Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-accent" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[#1d2820] bg-[#0f1511] hover:bg-[#16201a] hover:border-accent/40 text-[#eaf0eb] transition-colors flex items-center gap-1.5 text-xs font-mono ml-2 group"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8d9e91]">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
