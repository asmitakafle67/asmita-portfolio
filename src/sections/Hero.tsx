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
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MediumIcon } from '../components/Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* rosan.me style subtle ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[380px] bg-accent/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-accent/8 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none" />

      {/* Subtle architectural dark grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Available for new projects Status Pill on top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] sm:text-xs text-emerald-400 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-semibold">Available for new projects</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0e121e] border border-[#1e2638] shadow-sm font-mono text-[11px] sm:text-xs text-[#94a3b8]">
                <span>Frontend Developer</span>
                <span className="text-faint">•</span>
                <span className="flex items-center gap-1 text-[#f8fafc]">
                  <MapPin className="w-3 h-3 text-accent" />
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8fafc] leading-[1.18] sm:leading-[1.14]">
                Hi, I'm <span className="text-[#f8fafc]">{personalInfo.name}</span>.
                <br />
                <span className="text-accent font-semibold text-lg sm:text-3xl lg:text-4xl inline-flex items-center gap-2 mt-1 sm:mt-1.5 flex-wrap">
                  <span>{personalInfo.title}</span>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse inline shrink-0" />
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed pt-1 sm:pt-2">
                4+ years engineering high-performance web applications, enterprise dashboards, and AI-driven platforms with <strong className="text-[#f8fafc] font-semibold">React, Next.js, TypeScript, and modern UI architectures</strong>.
              </p>
            </motion.div>

            {/* Metric Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 text-xs font-mono text-[#94a3b8]"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-[#f8fafc] bg-[#0e121e] border border-[#1e2638] px-2.5 py-0.5 rounded-md shadow-sm">4+</span>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-[#f8fafc] bg-[#0e121e] border border-[#1e2638] px-2.5 py-0.5 rounded-md shadow-sm">6+</span>
                <span>Production Platforms</span>
              </div>
            </motion.div>

            {/* Action Buttons: Responsive full width on small mobile, row on tablet/desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3 w-full"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-[#06080e] font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent-light transition-all shadow-glow hover:scale-105 active:scale-95 group w-full sm:w-auto"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#1e2638] bg-[#0e121e] text-[#94a3b8] font-mono text-xs uppercase tracking-wider hover:text-[#f8fafc] hover:border-accent/40 transition-all shadow-subtle hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span>Technical Blog</span>
                <span className="text-accent">→</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="Asmita-Kafle-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[#1e2638] bg-[#0e121e]/70 text-[#94a3b8] font-mono text-xs uppercase tracking-wider hover:text-[#f8fafc] hover:border-accent/40 transition-all shadow-subtle hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>CV</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-[#94a3b8] text-xs font-mono"
            >
              <span className="uppercase tracking-wider text-faint">CONNECT:</span>
              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-[#1e2638] bg-[#0e121e] text-[#94a3b8] hover:text-[#f8fafc] hover:border-accent/40 hover:scale-110 transition-all"
                title="Read my articles on Medium (@asmita.kafle67)"
              >
                <MediumIcon className="w-4 h-4 text-accent" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-[#1e2638] bg-[#0e121e] text-[#94a3b8] hover:text-[#f8fafc] hover:border-accent/40 hover:scale-110 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-[#1e2638] bg-[#0e121e] text-[#94a3b8] hover:text-[#f8fafc] hover:border-accent/40 hover:scale-110 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 sm:p-2.5 rounded-full border border-[#1e2638] bg-[#0e121e] text-[#94a3b8] hover:text-[#f8fafc] hover:border-accent/40 hover:scale-110 transition-all"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Floating Frontend Config Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            className="lg:col-span-5 glow-card w-full"
          >
            <div className="rounded-3xl bg-[#0e121e] border border-[#1e2638] shadow-card p-4 sm:p-7 space-y-4 sm:space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#1e2638] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#f8fafc]">frontend.config.ts</span>
                </div>
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  client-active
                </span>
              </div>

              <div className="space-y-2 font-mono text-[11px] sm:text-xs relative z-10 break-all sm:break-normal">
                <div>
                  <span className="text-faint">export const</span>{' '}
                  <span className="text-accent font-semibold">frontendEngineer</span> = &#123;
                </div>
                <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-1.5 text-[#94a3b8]">
                  <div>
                    <span className="text-faint">name:</span>{' '}
                    <span className="text-[#f8fafc]">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-faint">specialization:</span>{' '}
                    <span className="text-[#f8fafc]">"React & Next.js Ecosystem"</span>,
                  </div>
                  <div>
                    <span className="text-faint">experience:</span>{' '}
                    <span className="text-accent">"4+ years"</span>,
                  </div>
                  <div>
                    <span className="text-faint">coreStack:</span> [
                    <span className="text-[#f8fafc]">"TypeScript"</span>,{' '}
                    <span className="text-[#f8fafc]">"Tailwind"</span>,{' '}
                    <span className="text-[#f8fafc]">"Zustand"</span>],
                  </div>
                  <div>
                    <span className="text-faint">realtime:</span>{' '}
                    <span className="text-[#f8fafc]">"WebSockets & Live UIs"</span>,
                  </div>
                  <div>
                    <span className="text-faint">articles:</span>{' '}
                    <a
                      href={personalInfo.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      "medium.com/@asmita.kafle67"
                    </a>,
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              <div className="pt-3 border-t border-[#1e2638] space-y-2 text-[11px] sm:text-xs relative z-10">
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Real-time WebSocket Scheduling UIs</span>
                </div>
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Enterprise Dashboards & AI Interfaces</span>
                </div>
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Component Systems with Mantine & shadcn</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
