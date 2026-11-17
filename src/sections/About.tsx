import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 border-t border-hairline bg-surface/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="rounded-3xl bg-surface border border-hairline p-6 sm:p-8 space-y-4 shadow-subtle"
        >
          <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
            Software Developer based in Kathmandu, Nepal, with <span className="text-accent font-semibold">4 years of specialized experience</span> in client-side engineering, enterprise dashboards, and modern component systems.
          </p>

          <p className="text-sm sm:text-base text-graphite leading-relaxed">
            Core expertise centers on <strong className="text-ink font-semibold">React, Next.js, and TypeScript</strong> — shipping mission-critical interfaces from real-time manufacturing schedulers with WebSockets at <span className="text-ink font-semibold">Qsystems AI</span> to generative AI fintech dashboards and desktop applications at <span className="text-ink font-semibold">Genese Solution</span>.
          </p>

          <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="chip py-1 px-3 bg-paper/70 text-accent font-semibold border-accent/30">
              React 18+ & Next.js
            </span>
            <span className="chip py-1 px-3 bg-paper/50 text-ink">
              TypeScript & Modern State (Zustand, React Query)
            </span>
            <span className="chip py-1 px-3 bg-paper/50 text-ink">
              Tailwind CSS, Mantine & shadcn/ui
            </span>
            <span className="chip py-1 px-3 bg-paper/50 text-graphite">
              B.E. Computer Engineering + MBA (In Progress)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
