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
        return <Activity className="w-5 h-5 text-emerald-500" />;
      case 2:
        return <Palette className="w-5 h-5 text-accent" />;
      case 3:
        return <Wrench className="w-5 h-5 text-accent" />;
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  const getLevelBadge = (level: 'Advanced' | 'Proficient' | 'Developing') => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="chip text-[10px] font-mono uppercase tracking-[0.08em] bg-accent/10 text-accent border-accent/25 py-0.5 px-2">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="chip text-[10px] font-mono uppercase tracking-[0.08em] bg-emerald-500/10 text-emerald-500 border-emerald-500/25 py-0.5 px-2">
            Proficient
          </span>
        );
      case 'Developing':
        return (
          <span className="chip text-[10px] font-mono uppercase tracking-[0.08em] bg-amber-500/10 text-amber-500 border-amber-500/25 py-0.5 px-2">
            Developing
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-paper border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="04 / CAPABILITIES"
          title="Frontend Technical Skills"
          subtitle="Honest, transparent overview of frontend technologies, design systems, and state architectures I engineer daily."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-10 text-xs font-mono text-graphite bg-surface px-5 py-3 rounded-2xl border border-hairline w-fit">
          <span className="font-semibold text-ink uppercase tracking-[0.08em]">Proficiency Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Advanced (Core Daily Stack 4 yrs)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Proficient (Production Tested)</span>
          </div>
        </div>

        {/* Category Cards Grid with Motion Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-surface border border-hairline shadow-subtle p-6 sm:p-7 hover:border-accent/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-2.5 rounded-xl bg-paper border border-hairline">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-graphite font-mono mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="mt-5 space-y-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        skill.highlight
                          ? 'bg-paper/70 border-hairline hover:border-accent/40 hover:bg-[#161c2e]/60'
                          : 'bg-paper/30 border-hairline/60 hover:border-hairline hover:bg-paper/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {skill.highlight && (
                          <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        )}
                        <span className={`text-sm ${skill.highlight ? 'font-semibold text-ink' : 'text-graphite'}`}>
                          {skill.name}
                        </span>
                      </div>
                      {getLevelBadge(skill.level)}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-faint font-mono">
                <span>{category.skills.length} specialized frontend skills</span>
                <span className="text-accent">verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
