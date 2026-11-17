import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, Compass } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-hairline bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="00 / OVERVIEW"
          title="Building high-performance user interfaces with deliberate craftsmanship."
          subtitle="A 4-year journey dedicated to frontend engineering, modern design systems, and responsive web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-graphite leading-relaxed text-base sm:text-lg"
          >
            <p>
              I am a Software Developer based in Kathmandu, Nepal, with 4 years of professional experience specializing in client-side engineering, design systems, and complex enterprise web applications.
            </p>
            <p>
              My expertise is centered on <strong className="text-ink font-semibold">React, Next.js, and TypeScript</strong>. Over the years, I have architected and shipped mission-critical user interfaces: from enterprise manufacturing schedulers handling live WebSocket streams at <span className="text-ink font-semibold">Qsystems AI</span>, to generative AI fintech dashboards and cross-platform desktop applications with Electron at <span className="text-ink font-semibold">Genese Solution</span>.
            </p>
            <p>
              I specialize in translating sophisticated design systems into resilient component architectures, integrating real-time state management with Zustand and Redux, and ensuring pixel-perfect responsiveness with Tailwind CSS, Mantine, and shadcn/ui.
            </p>
            <p className="text-sm font-mono text-faint border-l-2 border-accent pl-4 py-1 italic">
              Currently pursuing an MBA to complement my Computer Engineering foundation with strategic business insight, product leadership, and systems thinking.
            </p>
          </motion.div>

          {/* Pillars / Feature cards with subtle hover lift */}
          <div className="lg:col-span-5 space-y-3.5">
            {[
              {
                icon: <Code2 className="w-5 h-5" />,
                title: 'Modern Frontend Mastery',
                desc: 'Deep expertise in React 18+, Next.js App & Pages Router, TypeScript, Tailwind CSS, and scalable state stores (Zustand, Redux, React Query).',
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: 'Enterprise AI & Dashboards',
                desc: 'Experience delivering complex scheduling systems, live Gantt/Kanban views, real-time WebSocket communication, and generative AI interfaces.',
              },
              {
                icon: <Layout className="w-5 h-5" />,
                title: 'Design Systems & UI Engineering',
                desc: 'Component architecture with Mantine UI, shadcn/ui, responsive breakpoints, accessible markup (WCAG), and smooth micro-interactions.',
              },
              {
                icon: <Compass className="w-5 h-5" />,
                title: 'Engineering + Product Mindset',
                desc: 'Computer Engineering graduate bridging technical execution with strategic user empathy and business execution.',
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-paper border border-hairline hover:border-accent/60 transition-all shadow-subtle"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface border border-hairline text-accent shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-graphite mt-1 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
