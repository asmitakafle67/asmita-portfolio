import React from 'react';
import { Code2, Server, Cpu, Compass } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-charcoal-200/60 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="About Me"
          title="Building high-performance software with deliberate craftsmanship."
          subtitle="A 5-year journey combining deep frontend engineering with practical full-stack capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative text */}
          <div className="lg:col-span-7 space-y-5 text-charcoal-700 leading-relaxed text-base sm:text-lg">
            <p>
              I am a Software Developer based in Kathmandu, Nepal, with over 5 years of professional experience turning complex business needs into clean, reliable, and engaging digital products.
            </p>
            <p>
              My primary expertise is concentrated in the modern frontend ecosystem — specifically <strong className="text-charcoal-900 font-semibold">React, Next.js, and TypeScript</strong>. Over the years, I have architected and shipped mission-critical user interfaces: from enterprise manufacturing schedulers handling live WebSocket feeds at <span className="text-charcoal-900 font-medium">Qsystems AI</span>, to generative AI fintech dashboards and cross-platform desktop applications at <span className="text-charcoal-900 font-medium">Genese Solution</span>.
            </p>
            <p>
              Beyond the client side, I continuously broaden my backend and infrastructure repertoire. I have hands-on experience and developing skills in <strong className="text-charcoal-900 font-semibold">Python, FastAPI, Django, PostgreSQL, and AWS serverless primitives</strong>. This holistic perspective enables me to collaborate seamlessly with backend teams, design resilient API contracts, and understand the full lifecycle of a feature from database query to browser paint.
            </p>
            <p className="text-charcoal-600 text-sm italic pt-1">
              Currently pursuing an MBA to complement my Computer Engineering foundation with strategic business insight, team leadership, and product strategy.
            </p>
          </div>

          {/* Pillars / Feature cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-background border border-charcoal-200/80 shadow-subtle hover:border-charcoal-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-50 text-accent-700 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Modern Frontend Mastery</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-normal">
                    Deep expertise in React 18+, Next.js App & Pages Router, strict TypeScript, Tailwind CSS, and scalable state stores (Zustand, Redux, React Query).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-background border border-charcoal-200/80 shadow-subtle hover:border-charcoal-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Enterprise AI & Dashboards</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-normal">
                    Experience delivering complex scheduling systems, live Gantt/Kanban views, real-time WebSocket communication, and generative AI data exploration tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-background border border-charcoal-200/80 shadow-subtle hover:border-charcoal-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Full-Stack Awareness</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-normal">
                    Practical competencies in Python, FastAPI, relational schema design with PostgreSQL, AWS cloud integrations (Amplify, Lambda, S3), and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-background border border-charcoal-200/80 shadow-subtle hover:border-charcoal-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Engineering + Product Mindset</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-normal">
                    Computer Engineering graduate bridging technical execution with customer empathy and strategic business perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
