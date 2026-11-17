import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Enterprise & AI' | 'Fintech & Intelligence' | 'Operations'>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Enterprise & AI') {
      return project.id === 'sun-chemical' || project.id === 'qsystems-ai' || project.id === 'prospect-ai';
    }
    if (activeFilter === 'Fintech & Intelligence') {
      return project.id === 'gandalf-insight' || project.id === 'knowitall';
    }
    if (activeFilter === 'Operations') {
      return project.id === 'popal' || project.id === 'sun-chemical';
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#080c09] border-t border-[#1d2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <SectionHeading
            category="01 / SELECTED WORK"
            title="Featured Projects & Production Platforms"
            subtitle="Commercial platforms, enterprise schedulers, and AI applications engineered with modern frontend architectures."
          />

          {/* Filter Pills with Motion Layout */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#0f1511] rounded-full border border-[#1d2820] w-fit shadow-sm">
            {(['All', 'Enterprise & AI', 'Fintech & Intelligence', 'Operations'] as const).map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
                    isSelected
                      ? 'text-[#080c09] font-bold'
                      : 'text-[#8d9e91] hover:text-[#eaf0eb]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectFilter"
                      className="absolute inset-0 bg-accent rounded-full -z-10 shadow-glow"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid with layout animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Transparency note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#0f1511] border border-[#1d2820] text-xs font-mono text-[#8d9e91] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-subtle"
        >
          <p>
            <strong className="text-[#eaf0eb] font-semibold uppercase tracking-wider">[Integrity Note]:</strong> Work depicted highlights contributions as Frontend Developer within cross-functional teams at Qsystems AI and Genese Solution.
          </p>
          <span className="text-faint shrink-0">Updated 2026</span>
        </motion.div>
      </div>
    </section>
  );
};
