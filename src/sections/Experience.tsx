import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Career Path"
          title="Professional Experience"
          subtitle="Over 5 years of engineering software across fast-paced AI platforms, fintech platforms, and enterprise solutions."
        />

        <div className="relative border-l-2 border-charcoal-200/90 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline indicator node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'bg-accent-600 border-white ring-4 ring-accent-100'
                    : 'bg-white border-charcoal-400 group-hover:border-accent-600'
                }`}
              />

              <div className="rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle p-6 sm:p-7 hover:shadow-card hover:border-charcoal-300 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-charcoal-100">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-charcoal-300">@</span>
                      <span className="text-lg font-semibold text-accent-700">
                        {exp.company}
                      </span>

                      {exp.isCurrent && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Current Role
                        </span>
                      )}

                      {exp.type === 'internship' && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-600 border border-charcoal-200">
                          Internship
                        </span>
                      )}
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-charcoal-600 bg-charcoal-100/70 px-3 py-1.5 rounded-lg border border-charcoal-200/50 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-charcoal-700 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Bullet items */}
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 pt-4 border-t border-charcoal-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono font-semibold text-charcoal-500 mr-1">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-charcoal-100/80 text-charcoal-700 border border-charcoal-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
