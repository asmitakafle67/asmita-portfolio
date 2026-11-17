import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 border-t border-hairline bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="00 / OVERVIEW"
          title="Focused Frontend Engineering"
          subtitle="Delivering resilient client architectures, modern design systems, and responsive web applications."
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-surface border border-hairline p-4 sm:p-8 space-y-3 sm:space-y-4 shadow-subtle"
        >
          <p className="text-sm sm:text-lg text-ink font-medium leading-relaxed">
            Frontend Developer based in Kathmandu, Nepal, with <span className="text-accent font-semibold">4+ years of software development experience</span> building scalable, responsive, and data-intensive enterprise web applications using React, Next.js, TypeScript, and JavaScript.
          </p>

          <p className="text-xs sm:text-base text-graphite leading-relaxed">
            Specialized in frontend architecture, reusable component design, state management (Zustand, Redux Toolkit, React Query), and data visualization — delivering production-grade platforms from real-time WebSocket manufacturing schedulers at <span className="text-ink font-semibold">Qsystems AI</span> to generative AI fintech platforms showcased at AWS re:Invent 2023 at <span className="text-ink font-semibold">Genese Solution</span>.
          </p>

          <div className="pt-3 sm:pt-4 border-t border-hairline flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
            <span className="chip py-1 px-2.5 sm:px-3 bg-paper/70 text-accent font-semibold border-accent/30">
              React 18+ & Next.js
            </span>
            <span className="chip py-1 px-2.5 sm:px-3 bg-paper/50 text-ink">
              TypeScript & Modern State (Zustand, React Query)
            </span>
            <span className="chip py-1 px-2.5 sm:px-3 bg-paper/50 text-ink">
              Tailwind CSS, Mantine & shadcn/ui
            </span>
            <span className="chip py-1 px-2.5 sm:px-3 bg-paper/50 text-graphite">
              B.E. Computer Engineering + MBA (In Progress)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
