import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from 'lucide-react';
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onRead(post)}
      className="group cursor-pointer rounded-3xl bg-surface border border-hairline shadow-subtle hover:shadow-card-hover hover:border-accent/60 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-8 relative"
    >
      <div>
        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-hairline text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="chip font-mono text-[10px] uppercase tracking-[0.12em] text-accent bg-accent/10 border-accent/25 py-0.5 px-2.5">
              <BookOpen className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-3 text-graphite text-[11px] uppercase tracking-[0.08em]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-faint" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mt-5 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-sm sm:text-base text-graphite leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Topic tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {post.topics.map((topic) => (
            <span
              key={topic}
              className="chip text-[10px] font-mono uppercase tracking-[0.08em] text-graphite bg-paper/60 py-0.5 px-2"
            >
              <Tag className="w-2.5 h-2.5 text-faint" />
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Read button */}
      <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between font-mono">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-6 h-6 rounded-full bg-ink text-paper text-[10px] font-bold flex items-center justify-center">
            AK
          </div>
          <span className="font-semibold text-ink text-[11px] uppercase tracking-[0.06em]">
            {post.author}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-[0.1em] group-hover:translate-x-1 transition-transform">
          <span>Read Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.article>
  );
};
