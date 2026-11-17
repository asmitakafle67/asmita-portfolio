import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowUpRight, BookOpen, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={() => onRead(post)}
      className="group cursor-pointer rounded-3xl bg-surface border border-hairline shadow-subtle hover:shadow-card-hover hover:border-accent/60 transition-all duration-300 flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* Left Column / Metadata Showcase */}
      <div className="lg:w-[32%] shrink-0 p-6 sm:p-8 bg-[#0a0d17] border-b lg:border-b-0 lg:border-r border-hairline flex flex-col justify-between space-y-5">
        <div>
          {/* Category Chip */}
          <div className="flex items-center gap-2 mb-4">
            <span className="chip font-mono text-[10px] uppercase tracking-[0.12em] text-accent bg-accent/10 border-accent/25 py-0.5 px-2.5">
              <BookOpen className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Reading Time & Date */}
          <div className="space-y-2 text-xs font-mono text-graphite">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Published {post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Topics Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.topics.map((topic) => (
              <span
                key={topic}
                className="chip text-[10px] font-mono uppercase tracking-[0.08em] text-graphite bg-paper/60 py-0.5 px-2"
              >
                <Tag className="w-2.5 h-2.5 text-accent" />
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Author indicator */}
        <div className="pt-4 border-t border-hairline flex items-center gap-2.5 text-xs font-mono">
          <div className="w-7 h-7 rounded-xl bg-accent text-[#06080e] text-[10px] font-bold flex items-center justify-center shadow-sm">
            AK
          </div>
          <div>
            <span className="font-semibold text-ink text-[11px] block">
              {post.author}
            </span>
            <span className="text-[10px] text-faint">Frontend Developer</span>
          </div>
        </div>
      </div>

      {/* Right Column / Content & Action */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-faint mb-2">
            <span>TECHNICAL ARTICLE</span>
            <span className="text-accent">INTERACTIVE READER AVAILABLE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight group-hover:text-accent transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-graphite leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-faint">
            10 Detailed Sections with Code Examples & Architecture Diagrams
          </span>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-[#06080e] font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-accent-light transition-all shadow-glow group-hover:scale-105 active:scale-95 shrink-0">
            <span>Read Full Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
