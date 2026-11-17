import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-surface/40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="02 / CAREER PATH"
          title="Professional Experience"
          subtitle="4+ years of engineering software across fast-paced AI platforms, fintech platforms, and enterprise solutions."
        />

        <div className="relative border-l border-hairline ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline indicator node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${exp.isCurrent
                    ? 'bg-accent border-[#06080e] shadow-[0_0_12px_#38bdf8]'
                    : 'bg-[#06080e] border-[#1e2638] group-hover:border-accent'
                  }`}
              >
                {exp.isCurrent && (
                  <span className="absolute -inset-1 rounded-full bg-accent/40 animate-ping opacity-75" />
                )}
              </div>

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-surface border border-hairline shadow-subtle p-6 sm:p-8 hover:border-accent/60 transition-all hover:shadow-card-hover"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-hairline">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight font-display">
                        {exp.role}
                      </h3>
                      <span className="text-faint">@</span>
                      <span className="text-lg font-semibold text-accent font-display">
                        {exp.company}
                      </span>

                      {exp.isCurrent && (
                        <span className="chip text-[10px] font-mono uppercase tracking-[0.08em] bg-emerald-500/10 text-emerald-500 border-emerald-500/25 py-0.5 px-2">
                          Current Role
                        </span>
                      )}

                      {exp.type === 'internship' && (
                        <span className="chip text-[10px] font-mono uppercase tracking-[0.08em] text-faint border-hairline py-0.5 px-2">
                          Internship
                        </span>
                      )}
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-graphite mt-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="chip font-mono text-[11px] uppercase tracking-[0.08em] text-graphite bg-paper/60 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-ink leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Bullet items */}
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 pt-4 border-t border-hairline flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.08em] text-faint mr-1">
                    FRONTEND STACK:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="chip text-[10px] font-mono uppercase tracking-[0.08em] text-graphite bg-paper/60 py-0.5 px-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
