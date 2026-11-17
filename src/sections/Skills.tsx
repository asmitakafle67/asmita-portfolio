import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Palette, Wrench, Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-accent" />;
      case 1:
        return <Activity className="w-5 h-5 text-accent" />;
      case 2:
        return <Palette className="w-5 h-5 text-accent" />;
      case 3:
        return <Wrench className="w-5 h-5 text-accent" />;
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-24 lg:py-28 bg-paper border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="04 / CAPABILITIES"
          title="Frontend Technical Skills"
          subtitle="Modern frontend technologies, real-time architectures, component libraries, and client tooling."
        />

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-surface border border-hairline shadow-subtle p-4 sm:p-7 hover:border-accent/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-paper border border-hairline text-accent shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight font-display">
                      {category.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-graphite font-mono mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Small skill cards: multiple per row */}
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-paper/60 border border-hairline hover:border-accent/50 hover:bg-[#161c2e] transition-all text-xs sm:text-sm font-medium text-ink shadow-sm"
                    >
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 sm:mt-6 pt-3 border-t border-hairline flex items-center justify-between text-[10px] sm:text-[11px] text-faint font-mono">
                <span>{category.skills.length} skills in this domain</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
