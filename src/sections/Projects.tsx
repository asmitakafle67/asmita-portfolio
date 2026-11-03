import React, { useState } from 'react';
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
    <section id="projects" className="py-20 sm:py-28 bg-surface border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            category="Selected Work"
            title="Featured Projects & Platforms"
            subtitle="Commercial platforms, enterprise schedulers, and AI applications I've developed and contributed to."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-charcoal-100 rounded-xl border border-charcoal-200/80 w-fit">
            {(['All', 'Enterprise & AI', 'Fintech & Intelligence', 'Operations'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-charcoal-900 shadow-subtle font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 p-4 rounded-xl bg-background border border-charcoal-200/80 text-xs text-charcoal-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <strong className="text-charcoal-700 font-semibold">Integrity Note:</strong> Work depicted highlights my contributions as Frontend Developer / Software Engineer within cross-functional teams at Qsystems AI and Genese Solution.
          </p>
          <span className="font-mono text-charcoal-400 shrink-0">Updated 2026</span>
        </div>
      </div>
    </section>
  );
};

