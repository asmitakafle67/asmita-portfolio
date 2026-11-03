import React from 'react';
import { Layers, Database, Cloud, Activity, Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-accent-600" />;
      case 1:
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 3:
        return <Cloud className="w-5 h-5 text-sky-600" />;
      default:
        return <Layers className="w-5 h-5 text-accent-600" />;
    }
  };

  const getLevelBadge = (level: 'Advanced' | 'Proficient' | 'Developing') => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-accent-700 border border-blue-200">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            Proficient
          </span>
        );
      case 'Developing':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
            Developing
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-background border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Capabilities"
          title="Technical Skills & Competencies"
          subtitle="Honest, transparent overview of technologies I build with daily versus areas of ongoing exploration."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-charcoal-600 bg-surface px-4 py-3 rounded-xl border border-charcoal-200/70 w-fit">
          <span className="font-semibold text-charcoal-700">Proficiency Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-600" />
            <span><strong>Advanced:</strong> Core daily specialization (5+ yrs)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span><strong>Proficient:</strong> Production-tested & comfortable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span><strong>Developing:</strong> Active learning & hands-on application</span>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle p-6 hover:shadow-card hover:border-charcoal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-charcoal-50 border border-charcoal-200/60">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="mt-5 space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                        skill.highlight
                          ? 'bg-charcoal-50/70 border-charcoal-200/80 hover:bg-white'
                          : 'bg-white border-charcoal-100 hover:bg-charcoal-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <Check className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                        )}
                        <span className={`text-sm ${skill.highlight ? 'font-semibold text-charcoal-900' : 'text-charcoal-700'}`}>
                          {skill.name}
                        </span>
                      </div>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between text-[11px] text-charcoal-400 font-mono">
                <span>{category.skills.length} skills</span>
                <span>Type-checked & tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

