import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group rounded-3xl bg-surface border border-hairline shadow-subtle hover:shadow-card-hover hover:border-accent/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Visual Header / Captured Front Page Screenshot */}
      <div className="relative h-56 sm:h-60 w-full border-b border-hairline bg-[#0c120e] overflow-hidden">
        {/* Browser Mockup Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#0a0e0b]/90 backdrop-blur-md border-b border-white/10 px-3.5 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[11px] text-white/50 font-mono tracking-tight truncate max-w-[220px]">
            {project.liveUrl.replace('https://', '')}
          </div>
          <div className="w-8 flex justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* Captured Screenshot Image */}
        <div className="pt-7 h-full w-full bg-[#0c120e] relative overflow-hidden flex items-center justify-center">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full p-4 flex flex-col justify-center items-center text-center font-mono text-xs text-white/60">
              <span className="text-accent text-sm font-bold mb-1">{project.title}</span>
              <span className="text-[11px] text-white/40">{project.liveUrl}</span>
            </div>
          )}
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e0b]/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="absolute bottom-2.5 right-2.5 z-20">
            <span className="text-[10px] font-semibold font-mono px-2.5 py-0.5 rounded-full bg-[#080d0a]/90 text-white/80 border border-white/20 backdrop-blur shadow-sm">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Content Body without Key Contributions */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div>
              <span className="text-xs font-semibold text-accent font-mono uppercase tracking-wider block mb-1">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight group-hover:text-accent transition-colors leading-snug">
                {project.title}
              </h3>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in new tab)`}
              className="p-2.5 rounded-full border border-hairline text-graphite hover:text-accent hover:border-accent hover:scale-110 transition-all shrink-0"
              title="Visit live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-graphite leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="pt-4 border-t border-hairline flex flex-wrap gap-1.5 items-center">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="chip text-[10px] font-mono uppercase tracking-[0.08em] text-graphite py-0.5 px-2 bg-paper/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="mt-5 pt-3 border-t border-hairline flex items-center justify-between text-xs font-mono">
            <span className="text-faint">#{String(index + 1).padStart(2, '0')}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline group/link uppercase tracking-wider"
            >
              <span>Explore Platform</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
