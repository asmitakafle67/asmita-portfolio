import React from 'react';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-surface border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Academic Background"
          title="Education & Credentials"
          subtitle="Grounding engineering excellence in rigorous computer science principles and strategic business thinking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-background border border-charcoal-200/90 shadow-subtle p-6 sm:p-7 hover:border-charcoal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white border border-charcoal-200/70 shadow-sm text-accent-700">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.isOngoing ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-blue-50 text-accent-700 border border-blue-200">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Award className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-accent-700 mt-1">
                  {edu.institution}
                </p>

                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-charcoal-500">
                  <span>{edu.period}</span>
                  {edu.grade && (
                    <>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-charcoal-100 font-bold text-charcoal-800">
                        {edu.grade}
                      </span>
                    </>
                  )}
                </div>

                {edu.details && (
                  <p className="mt-4 text-sm text-charcoal-600 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-200/60 flex items-center gap-2 text-xs text-charcoal-500">
                <BookOpen className="w-4 h-4 text-charcoal-400" />
                <span>Field: {edu.field}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

