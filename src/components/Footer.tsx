import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MediumIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080e] border-t border-[#1e2638] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-[#1e2638]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent text-[#06080e] flex items-center justify-center text-xs font-bold font-mono shadow-sm shrink-0">
              AK
            </span>
            <div>
              <span className="text-sm sm:text-base font-bold text-[#f8fafc] tracking-tight block font-display">
                {personalInfo.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#94a3b8] font-mono block">
                Frontend Developer • Kathmandu, Nepal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[#94a3b8]">
            <a
              href="https://medium.com/@asmita.kafle67"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl border border-[#1e2638] bg-[#0e121e] hover:text-[#f8fafc] hover:border-accent/40 transition-colors"
              title="Medium Articles"
              aria-label="Medium"
            >
              <MediumIcon className="w-4 h-4 text-accent" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl border border-[#1e2638] bg-[#0e121e] hover:text-[#f8fafc] hover:border-accent/40 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-accent" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl border border-[#1e2638] bg-[#0e121e] hover:text-[#f8fafc] hover:border-accent/40 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-accent" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 sm:p-2.5 rounded-xl border border-[#1e2638] bg-[#0e121e] hover:text-[#f8fafc] hover:border-accent/40 transition-colors"
              title="Send Direct Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-accent" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl border border-[#1e2638] bg-[#0e121e] hover:bg-[#161c2e] hover:border-accent/40 text-[#f8fafc] transition-colors flex items-center gap-1.5 text-xs font-mono ml-1 sm:ml-2 group"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-[#94a3b8] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
            <span>React • Next.js • TypeScript • Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
