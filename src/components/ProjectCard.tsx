import React from 'react';
import { ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Visual mockups tailored for each project to serve as elegant placeholders
  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'sun-chemical':
        return (
          <div className="w-full h-full bg-slate-900 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-950/40 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-200">Sun Chemical • Smart Scheduler</span>
              </div>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30">WebSocket Connected</span>
            </div>
            <div className="my-3 space-y-2 relative z-10">
              <div className="bg-slate-800/80 p-2 rounded border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-slate-300">Production Line A — Batch #4892</span>
                </div>
                <span className="text-emerald-400 font-bold">Active • 94%</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {['Staging', 'Mixing', 'Quality Test', 'Packaging'].map((stage, i) => (
                  <div key={stage} className={`p-1.5 rounded text-[10px] text-center border ${i === 2 ? 'bg-blue-600/40 border-blue-400 text-blue-200' : 'bg-slate-800/60 border-slate-700/40 text-slate-400'}`}>
                    {stage}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-2 relative z-10">
              <span>Timeline: Automated Scheduling</span>
              <span className="text-slate-500">Live Gantt & Kanban</span>
            </div>
          </div>
        );

      case 'qsystems-ai':
        return (
          <div className="w-full h-full bg-zinc-900 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 to-slate-900 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 relative z-10">
              <span className="text-[11px] font-semibold text-zinc-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded bg-sky-500" />
                Qsystems AI • Enterprise Workspace
              </span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">RBAC Secure</span>
            </div>
            <div className="my-2 grid grid-cols-3 gap-2 relative z-10">
              <div className="bg-zinc-800/70 p-2 rounded border border-zinc-700/50">
                <div className="text-[9px] text-zinc-400 uppercase">Agents</div>
                <div className="text-base font-bold text-sky-400 mt-0.5">24 Active</div>
              </div>
              <div className="bg-zinc-800/70 p-2 rounded border border-zinc-700/50">
                <div className="text-[9px] text-zinc-400 uppercase">Tasks</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5">1,420</div>
              </div>
              <div className="bg-zinc-800/70 p-2 rounded border border-zinc-700/50">
                <div className="text-[9px] text-zinc-400 uppercase">Latency</div>
                <div className="text-base font-bold text-zinc-200 mt-0.5">142ms</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-zinc-400 border-t border-zinc-800 pt-2 relative z-10">
              <span>Next.js • React • TypeScript</span>
              <span className="text-sky-400">app.qsystems.ai</span>
            </div>
          </div>
        );

      case 'prospect-ai':
        return (
          <div className="w-full h-full bg-slate-900 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-semibold text-blue-200">Prospect AI • Intelligence Matrix</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">Scoring: On</span>
            </div>
            <div className="my-2 space-y-1.5">
              <div className="bg-slate-800/60 p-1.5 rounded flex items-center justify-between text-[10px]">
                <span className="text-slate-300">Enterprise Cloud Lead</span>
                <span className="text-emerald-400 font-bold">98/100 Score</span>
              </div>
              <div className="bg-slate-800/60 p-1.5 rounded flex items-center justify-between text-[10px]">
                <span className="text-slate-300">SaaS Logistics Account</span>
                <span className="text-emerald-400 font-bold">91/100 Score</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800 pt-2">
              <span>Zustand State • High-density Data Grids</span>
              <span className="text-blue-400">prospect.qsystems.ai</span>
            </div>
          </div>
        );

      case 'gandalf-insight':
        return (
          <div className="w-full h-full bg-indigo-950 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="flex items-center justify-between border-b border-indigo-900 pb-2">
              <span className="text-[11px] font-semibold text-indigo-200">Gandalf Insight • Fintech AI</span>
              <span className="text-[10px] bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded">Electron & Next.js</span>
            </div>
            <div className="my-2 bg-indigo-900/40 p-2 rounded border border-indigo-800/50 space-y-1">
              <div className="text-[10px] text-indigo-300">Market Signals & Automated Reports</div>
              <div className="h-6 flex items-end gap-1 pt-1">
                <span className="w-1/6 bg-indigo-500 h-2 rounded-t" />
                <span className="w-1/6 bg-indigo-400 h-3 rounded-t" />
                <span className="w-1/6 bg-indigo-500 h-4 rounded-t" />
                <span className="w-1/6 bg-sky-400 h-6 rounded-t" />
                <span className="w-1/6 bg-indigo-400 h-3.5 rounded-t" />
                <span className="w-1/6 bg-indigo-300 h-5 rounded-t" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-indigo-400 border-t border-indigo-900 pt-2">
              <span>GraphQL • Redux • High-Frequency Feeds</span>
              <span className="text-indigo-300">gandalfinsights.com</span>
            </div>
          </div>
        );

      case 'knowitall':
        return (
          <div className="w-full h-full bg-teal-950 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="flex items-center justify-between border-b border-teal-900 pb-2">
              <span className="text-[11px] font-semibold text-teal-200">Knowitall • Knowledge Base</span>
              <span className="text-[10px] bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded">Fast Search</span>
            </div>
            <div className="my-2 space-y-1.5">
              <div className="bg-teal-900/40 p-1.5 rounded text-[10px] border border-teal-800/40 flex items-center gap-2">
                <span className="text-teal-400">🔍</span>
                <span className="text-teal-200">Semantic Query & Doc Classification</span>
              </div>
              <div className="bg-teal-900/20 p-1.5 rounded text-[10px] text-teal-300">
                AWS Cloud Storage • React Query Cache
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-teal-400 border-t border-teal-900 pt-2">
              <span>Genese Solution Product</span>
              <span className="text-teal-300">knowitall.genesesolution.com</span>
            </div>
          </div>
        );

      case 'popal':
        return (
          <div className="w-full h-full bg-emerald-950 text-white p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
            <div className="flex items-center justify-between border-b border-emerald-900 pb-2">
              <span className="text-[11px] font-semibold text-emerald-200">POPal • POS & Retail Pro</span>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">Order Flow</span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-emerald-900/40 p-2 rounded border border-emerald-800/40">
                <div className="text-emerald-400 font-bold">Inventory Sync</div>
                <div className="text-emerald-200 mt-0.5">Low-stock alerts</div>
              </div>
              <div className="bg-emerald-900/40 p-2 rounded border border-emerald-800/40">
                <div className="text-emerald-400 font-bold">Fast Checkout</div>
                <div className="text-emerald-200 mt-0.5">Instant receipts</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-emerald-400 border-t border-emerald-900 pt-2">
              <span>Zustand • REST • Responsive POS</span>
              <span className="text-emerald-300">popalpro.com</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-charcoal-900 text-white p-4 font-mono text-xs flex items-center justify-center">
            <span>{project.title} Preview</span>
          </div>
        );
    }
  };

  return (
    <div className="group rounded-2xl bg-surface border border-charcoal-200/90 shadow-card hover:shadow-card-hover hover:border-charcoal-300 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Visual Header / Mockup Preview Container */}
      <div className="relative h-48 w-full border-b border-charcoal-200/80 bg-charcoal-900 overflow-hidden">
        {/* Browser Mockup Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-charcoal-900/90 border-b border-charcoal-800/80 px-3 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] text-charcoal-400 font-mono tracking-tight truncate max-w-[200px]">
            {project.liveUrl.replace('https://', '')}
          </div>
          <div className="w-6" />
        </div>

        {/* Mockup Canvas */}
        <div className="pt-6 h-full w-full">
          {renderVisualMockup(project.id)}
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="absolute bottom-2.5 right-2.5 z-20">
            <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-charcoal-900/90 text-charcoal-200 border border-charcoal-700 backdrop-blur shadow-sm">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-xs font-semibold text-accent-700 font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 tracking-tight mt-0.5 group-hover:text-accent-600 transition-colors">
                {project.title}
              </h3>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} (opens in new tab)`}
              className="p-2 rounded-lg text-charcoal-500 hover:text-accent-700 hover:bg-accent-50 transition-colors shrink-0"
              title="Visit live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Role Highlights */}
          <div className="mb-5 space-y-1.5">
            <div className="text-xs font-semibold text-charcoal-700 flex items-center gap-1.5 mb-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-600" />
              <span>Key Contributions:</span>
            </div>
            {project.roleHighlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-charcoal-600 leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="pt-4 border-t border-charcoal-100 flex flex-wrap gap-1.5 items-center">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium font-mono px-2 py-0.5 rounded-md bg-charcoal-100 text-charcoal-700 border border-charcoal-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="mt-4 pt-3 flex items-center justify-between text-xs">
            <span className="text-charcoal-400 font-mono">#{String(index + 1).padStart(2, '0')}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent-700 hover:text-accent-800 group/link"
            >
              <span>Explore Platform</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

