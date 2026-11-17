import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Clock } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-24 lg:py-28 bg-paper border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="05 / CREDENTIALS"
          title="Education & Academic Background"
          subtitle="Grounding engineering excellence in rigorous computer science principles and strategic business leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-surface border border-hairline shadow-subtle p-4 sm:p-8 hover:border-accent/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-paper border border-hairline text-accent shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  {edu.isOngoing ? (
                    <span className="chip font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-accent bg-accent/10 border-accent/25 py-0.5 px-2.5">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  ) : (
                    <span className="chip font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-emerald-400 bg-emerald-500/10 border-emerald-500/25 py-0.5 px-2.5">
                      <Award className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-ink tracking-tight">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-accent mt-1 sm:mt-1.5 font-display">
                  {edu.institution}
                </p>

                <div className="mt-2.5 sm:mt-3 flex items-center gap-2.5 text-xs font-mono text-graphite">
                  <span>{edu.period}</span>
                  {edu.grade && (
                    <>
                      <span>•</span>
                      <span className="chip py-0 px-2 text-[10px] uppercase bg-paper border-hairline font-bold text-ink">
                        {edu.grade}
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-graphite leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-hairline flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-faint">
                <span>Field: {edu.field}</span>
                <span className="text-accent">{edu.isOngoing ? 'Pursuing' : 'Graduated'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
