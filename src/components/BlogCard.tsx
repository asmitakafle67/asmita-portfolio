import React from 'react';
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
  return (
    <article
      onClick={() => onRead(post)}
      className="group cursor-pointer rounded-2xl bg-surface border border-charcoal-200/90 shadow-subtle hover:shadow-card-hover hover:border-charcoal-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-charcoal-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 font-mono font-semibold uppercase text-[11px] border border-accent-100">
              <BookOpen className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-3 text-charcoal-500 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent-600" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight mt-4 group-hover:text-accent-600 transition-colors leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-sm text-charcoal-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Topic tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-charcoal-100/80 text-charcoal-700 border border-charcoal-200/60"
            >
              <Tag className="w-2.5 h-2.5 text-charcoal-400" />
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Read button */}
      <div className="mt-6 pt-4 border-t border-charcoal-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-charcoal-900 text-white text-[10px] font-mono font-bold flex items-center justify-center">
            AK
          </div>
          <span className="text-xs font-semibold text-charcoal-800">
            {post.author}
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-700 group-hover:text-accent-800 transition-colors">
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
};

