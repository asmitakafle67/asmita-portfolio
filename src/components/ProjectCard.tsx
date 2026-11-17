import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group rounded-3xl bg-surface border border-hairline shadow-subtle hover:shadow-card-hover hover:border-accent/60 transition-all duration-300 flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* Screenshot Column (Left side on desktop rows) */}
      <div className="lg:w-[44%] shrink-0 relative border-b lg:border-b-0 lg:border-r border-hairline bg-[#0a0d17] overflow-hidden flex flex-col min-h-[200px] sm:min-h-[280px]">
        {/* Browser Mockup Top Bar */}
        <div className="h-7 bg-[#0b0e1a]/95 backdrop-blur-md border-b border-white/10 px-3.5 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] sm:text-[11px] text-white/50 font-mono tracking-tight truncate max-w-[180px] sm:max-w-[200px]">
            {project.liveUrl.replace('https://', '')}
          </div>
          <div className="w-6 flex justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* Captured Screenshot Image */}
        <div className="flex-1 w-full relative bg-[#0a0d17] overflow-hidden flex items-center justify-center">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center font-mono text-xs text-white/60">
              <span className="text-accent text-sm font-bold mb-1">{project.title}</span>
              <span className="text-[11px] text-white/40">{project.liveUrl}</span>
            </div>
          )}
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content Column (Right side on desktop rows) */}
      <div className="flex-1 p-4 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4 sm:space-y-5">
        <div>
          {/* Top metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="chip font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-accent bg-accent/10 border-accent/25 py-0.5 px-2.5">
                {project.category}
              </span>
              {project.status && (
                <span className="chip font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.08em] text-graphite bg-paper/60 py-0.5 px-2">
                  {project.status}
                </span>
              )}
            </div>

            <span className="font-mono text-[11px] sm:text-xs text-faint">
              PROJECT #{String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-3xl font-bold text-ink tracking-tight group-hover:text-accent transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-graphite leading-relaxed">
            {project.description}
          </p>

          {/* Technology badges */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-hairline flex flex-wrap gap-1 sm:gap-1.5 items-center">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="chip text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.08em] text-graphite py-0.5 px-2 sm:px-2.5 bg-paper/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="pt-3 sm:pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-mono text-faint truncate max-w-[280px]">
            {project.liveUrl}
          </span>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} (opens in new tab)`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-accent text-[#06080e] font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-light transition-all shadow-glow hover:scale-105 active:scale-95 shrink-0 w-full sm:w-auto"
          >
            <span>Explore Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
