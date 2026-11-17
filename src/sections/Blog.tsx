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
    <section id="blog" className="py-20 sm:py-28 bg-background border-t border-charcoal-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            category="Technical Writing"
            title="Knowledge & Engineering Notes"
            subtitle="In-depth explorations, mental models, and practical guides on frontend engineering and full-stack systems."
          />

          {/* Topic filter chips */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-charcoal-100 rounded-xl border border-charcoal-200/80 w-fit">
            {allTopics.slice(0, 5).map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTopic === topic
                    ? 'bg-white text-charcoal-900 shadow-subtle font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/50'
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

        {/* Note on upcoming writings */}
        <div className="mt-10 p-5 rounded-2xl bg-surface border border-charcoal-200/80 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-charcoal-600">
          <div>
            <span className="font-semibold text-charcoal-900 block sm:inline">
              Writing in Progress:
            </span>{' '}
            More deep dives on React concurrency, Zustand state architecture, and FastAPI microservices coming soon.
          </div>
          <span className="font-mono text-accent-700 bg-accent-50 px-2.5 py-1 rounded-md border border-accent-100 shrink-0 font-medium">
            Active Publication
          </span>
        </div>
      </div>

      {/* Reader Modal */}
      <BlogReaderModal post={selectedPost} onClose={handleClosePost} />
    </section>
  );
};

