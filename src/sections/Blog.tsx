import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BlogCard } from '../components/BlogCard';
import { BlogReaderModal } from '../components/BlogReaderModal';
import { blogPosts } from '../data/blogData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  // Collect all unique topics from blog posts
  const allTopics = ['All', ...Array.from(new Set(blogPosts.flatMap((post) => post.topics)))];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedTopic === 'All') return true;
    return post.topics.includes(selectedTopic);
  });

  // Check URL hash for direct article opening (e.g. #post-understanding-apis-and-web-apis)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#post-')) {
        const slug = hash.replace('#post-', '');
        const found = blogPosts.find((p) => p.slug === slug);
        if (found) {
          setSelectedPost(found);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.history.pushState(null, '', `#post-${post.slug}`);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    window.history.pushState(null, '', '#blog');
  };

  return (
    <section id="blog" className="py-20 sm:py-28 bg-surface/30 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            category="03 / TECHNICAL WRITING"
            title="Engineering Insights & Mental Models"
            subtitle="In-depth explorations, architecture guides, and practical engineering mental models written from frontend production experience."
          />

          {/* Topic filter chips */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-surface rounded-2xl border border-hairline w-fit">
            {allTopics.slice(0, 5).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedTopic === topic
                    ? 'bg-accent/15 text-accent border border-accent/40 font-semibold shadow-glow'
                    : 'text-graphite hover:text-ink hover:bg-paper/60 border border-transparent'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onRead={handleOpenPost} />
          ))}
        </div>

        {/* Note on upcoming writings + Medium link */}
        <div className="mt-10 p-6 rounded-3xl bg-surface border border-hairline shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-graphite">
          <div className="space-y-1">
            <span className="font-semibold text-ink block sm:inline">
              Active Writing & Thought Leadership:
            </span>{' '}
            Deep dives on React 19 compiler internals, Zustand real-time synchronization, and WebSocket architectures.
          </div>
          <a
            href="https://medium.com/@asmita.kafle67"
            target="_blank"
            rel="noopener noreferrer"
            className="chip font-mono text-[11px] uppercase tracking-[0.08em] text-accent bg-accent/10 border-accent/30 py-1.5 px-3.5 hover:bg-accent/20 transition-all shrink-0 font-semibold"
          >
            Read on Medium →
          </a>
        </div>
      </div>

      {/* Reader Modal */}
      <BlogReaderModal post={selectedPost} onClose={handleClosePost} />
    </section>
  );
};

