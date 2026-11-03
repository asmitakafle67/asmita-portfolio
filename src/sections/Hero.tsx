import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  FileDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#121316 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-charcoal-200/90 shadow-subtle text-xs font-medium text-charcoal-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full Stack & Frontend Roles</span>
              <span className="text-charcoal-300">•</span>
              <span className="flex items-center gap-1 text-charcoal-500">
                <MapPin className="w-3 h-3 text-accent-600" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.12]">
                Hi, I'm <span className="text-charcoal-900">{personalInfo.name}</span>.
                <br />
                <span className="text-charcoal-600 font-bold text-3xl sm:text-4xl lg:text-5xl">
                  {personalInfo.title}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-600 max-w-2xl leading-relaxed pt-2">
                Specialized in building high-performance web applications, enterprise dashboards, and AI-driven platforms with <span className="text-charcoal-900 font-semibold">React</span>, <span className="text-charcoal-900 font-semibold">Next.js</span>, and <span className="text-charcoal-900 font-semibold">TypeScript</span>, backed by developing full-stack expertise in <span className="text-charcoal-900 font-semibold">Python</span> and <span className="text-charcoal-900 font-semibold">AWS</span>.
              </p>
            </div>

            {/* Metric / Highlights Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-charcoal-700">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-accent-50 text-accent-700 flex items-center justify-center font-bold text-xs">
                  5+
                </div>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  6+
                </div>
                <span>Enterprise & AI Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <span>Type-Safe UI Architecture</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal-900 text-white font-medium text-sm hover:bg-accent-700 transition-all shadow-subtle hover:shadow group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Asmita-Kafle-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-charcoal-300 text-charcoal-800 bg-white font-medium text-sm hover:bg-charcoal-100 hover:border-charcoal-400 transition-all shadow-subtle"
              >
                <FileDown className="w-4 h-4 text-charcoal-600" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-charcoal-200 text-charcoal-700 bg-white/70 font-medium text-sm hover:bg-white transition-all shadow-subtle"
              >
                <Mail className="w-4 h-4 text-accent-600" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social links row */}
            <div className="pt-2 flex items-center gap-4 text-charcoal-500">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
                title="GitHub Profile (Placeholder URL)"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
                title="LinkedIn Profile (Placeholder URL)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-1.5 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Card / Interactive Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl bg-white border border-charcoal-200/90 shadow-card p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-100">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-accent-50 text-accent-700">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-charcoal-800">developer.config</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  active
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-charcoal-400">const</span>{' '}
                  <span className="text-accent-700 font-semibold">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1.5 text-charcoal-700">
                  <div>
                    <span className="text-charcoal-400">name:</span>{' '}
                    <span className="text-emerald-700">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-charcoal-400">focus:</span>{' '}
                    <span className="text-emerald-700">"React & Next.js"</span>,
                  </div>
                  <div>
                    <span className="text-charcoal-400">experience:</span>{' '}
                    <span className="text-amber-700">"5+ years"</span>,
                  </div>
                  <div>
                    <span className="text-charcoal-400">currentRole:</span>{' '}
                    <span className="text-emerald-700">"Frontend Developer @ Qsystems AI"</span>,
                  </div>
                  <div>
                    <span className="text-charcoal-400">backendSkills:</span> [
                    <span className="text-charcoal-600">"Python"</span>,{' '}
                    <span className="text-charcoal-600">"FastAPI"</span>,{' '}
                    <span className="text-charcoal-600">"PostgreSQL"</span>],
                  </div>
                  <div>
                    <span className="text-charcoal-400">cloud:</span> [
                    <span className="text-charcoal-600">"AWS"</span>,{' '}
                    <span className="text-charcoal-600">"Amplify"</span>],
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              <div className="pt-3 border-t border-charcoal-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-charcoal-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Real-time WebSocket Scheduling UIs</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Enterprise Dashboards & AI Interfaces</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Modern, Maintainable Component Systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
