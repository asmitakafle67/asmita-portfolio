import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  X,
  Clock,
  Calendar,
  Share2,
  Check,
  ArrowLeft,
  Copy,
  BookOpen,
  Tag,
} from 'lucide-react';
import { BlogPost } from '../types';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and prevent body scroll
  useEffect(() => {
    if (!post) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [post, onClose]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-background/95 backdrop-blur-md">
        {/* Top Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-charcoal-200/50 z-50">
          <div
            className="h-full bg-accent-600 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Sticky Header Nav */}
        <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-charcoal-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-700 hover:text-charcoal-900 px-3 py-1.5 rounded-lg border border-charcoal-300/80 bg-white hover:bg-charcoal-100 transition-colors shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent-600" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-lg border border-charcoal-200 bg-surface hover:bg-charcoal-100 transition-colors"
              title="Share article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-charcoal-500" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
        >
          <div className="max-w-3xl mx-auto">
            {/* Header Meta */}
            <div className="pb-8 border-b border-charcoal-200/80 mb-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-50 text-accent-700 font-mono font-semibold uppercase text-xs border border-accent-100">
                  <BookOpen className="w-3.5 h-3.5" />
                  {post.category}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono text-charcoal-500">
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

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-9 h-9 rounded-xl bg-charcoal-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-subtle">
                  AK
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal-900 flex items-center gap-1.5">
                    <span>{post.author}</span>
                  </div>
                  <div className="text-xs text-charcoal-500">
                    Software Developer • Frontend & Full Stack
                  </div>
                </div>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-charcoal-100 text-charcoal-700 border border-charcoal-200/70"
                  >
                    <Tag className="w-2.5 h-2.5 text-charcoal-400" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Markdown Body */}
            <article className="prose prose-slate max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-headings:text-charcoal-900 prose-p:text-charcoal-700 prose-p:leading-relaxed prose-li:text-charcoal-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Skip top level h1 if it duplicates title
                  h1: ({ children }) => (
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-8 leading-tight">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-charcoal-900 tracking-tight mt-12 mb-4 pt-6 border-t border-charcoal-200/60">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-bold text-charcoal-900 tracking-tight mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base text-charcoal-700 leading-relaxed my-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside pl-6 my-4 space-y-1.5 text-charcoal-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside pl-6 my-4 space-y-1.5 text-charcoal-700">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-accent-600 bg-accent-50/50 p-4 rounded-r-xl my-6 text-charcoal-800 italic">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 rounded-xl border border-charcoal-200 shadow-subtle">
                      <table className="w-full text-left text-sm border-collapse bg-white">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-charcoal-100 text-charcoal-900 font-mono text-xs uppercase border-b border-charcoal-200">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-y divide-charcoal-100">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="hover:bg-charcoal-50/70 transition-colors">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-3 font-semibold text-charcoal-900">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 text-charcoal-700 text-xs sm:text-sm">
                      {children}
                    </td>
                  ),
                  code: ({ inline, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const codeString = String(children).replace(/\n$/, '');
                    
                    if (inline) {
                      return (
                        <code className="bg-charcoal-100 text-accent-700 font-mono text-xs px-1.5 py-0.5 rounded border border-charcoal-200/60 font-semibold" {...props}>
                          {children}
                        </code>
                      );
                    }

                    return (
                      <CodeBlock language={match ? match[1] : ''} code={codeString} />
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* Author Footer Card */}
            <div className="mt-16 pt-8 border-t border-charcoal-200/80">
              <div className="p-6 rounded-2xl bg-surface border border-charcoal-200 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-900 text-white flex items-center justify-center font-mono font-bold text-base shadow-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-charcoal-900">
                      Written by {post.author}
                    </h4>
                    <p className="text-xs text-charcoal-600 mt-0.5">
                      Software Developer specializing in React, Next.js, TypeScript, and modern web architectures.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-semibold hover:bg-accent-700 transition-colors shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

// Reusable CodeBlock with copy action
const CodeBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-charcoal-800 bg-charcoal-900 text-charcoal-100 shadow-card">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-charcoal-950/80 border-b border-charcoal-800 text-xs font-mono text-charcoal-400">
        <span>{language || 'code'}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-charcoal-800"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-charcoal-100 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
