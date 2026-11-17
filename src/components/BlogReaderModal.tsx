import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-[#080c09]/95 backdrop-blur-xl"
      >
        {/* Top Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-[#1d2820] z-50">
          <div
            className="h-full bg-accent shadow-[0_0_10px_#76d39c] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Sticky Header Nav */}
        <header className="sticky top-0 z-40 bg-[#0f1511]/90 backdrop-blur border-b border-[#1d2820] px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.08em] text-[#eaf0eb] hover:text-accent px-3 py-1.5 rounded-xl border border-[#1d2820] bg-[#080c09] hover:border-accent/40 transition-colors shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.08em] text-[#8d9e91] hover:text-[#eaf0eb] px-3 py-1.5 rounded-xl border border-[#1d2820] bg-[#080c09] hover:border-accent/40 transition-colors"
              title="Share article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-accent" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#8d9e91] hover:text-[#eaf0eb] hover:bg-[#16201a] border border-transparent hover:border-[#1d2820] transition-colors"
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
            <div className="pb-8 border-b border-[#1d2820] mb-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono font-semibold uppercase text-xs border border-accent/25">
                  <BookOpen className="w-3.5 h-3.5" />
                  {post.category}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono text-[#8d9e91]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-9 h-9 rounded-xl bg-accent text-[#080c09] flex items-center justify-center font-mono font-bold text-xs shadow-subtle">
                  AK
                </div>
                <div>
                  <div className="text-sm font-bold text-[#eaf0eb] flex items-center gap-1.5">
                    <span>{post.author}</span>
                  </div>
                  <div className="text-xs text-[#8d9e91]">
                    Software Developer • Frontend Specialist
                  </div>
                </div>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#0f1511] text-[#8d9e91] border border-[#1d2820]"
                  >
                    <Tag className="w-2.5 h-2.5 text-accent" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Markdown Body */}
            <article className="prose prose-invert max-w-none text-[#c2d1c6] leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Custom headings
                  h1: ({ children }) => (
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#eaf0eb] tracking-tight mb-8 leading-tight font-display">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-[#eaf0eb] tracking-tight mt-12 mb-4 pt-6 border-t border-[#1d2820] font-display flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-bold text-[#eaf0eb] tracking-tight mt-6 mb-3 font-display">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base text-[#c2d1c6] leading-relaxed my-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside pl-6 my-4 space-y-1.5 text-[#c2d1c6]">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside pl-6 my-4 space-y-1.5 text-[#c2d1c6]">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-accent bg-[#0f1511] p-4 rounded-r-2xl my-6 text-[#eaf0eb] italic border-t border-b border-r border-[#1d2820]">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 rounded-2xl border border-[#1d2820] shadow-subtle">
                      <table className="w-full text-left text-sm border-collapse bg-[#0f1511]">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-[#16201a] text-accent font-mono text-xs uppercase border-b border-[#1d2820]">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-y divide-[#1d2820]">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="hover:bg-[#16201a]/50 transition-colors">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-3 font-semibold text-[#eaf0eb]">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 text-[#c2d1c6] text-xs sm:text-sm font-mono">
                      {children}
                    </td>
                  ),
                  code: ({ inline, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const codeString = String(children).replace(/\n$/, '');
                    
                    if (inline) {
                      return (
                        <code className="bg-[#0f1511] text-accent font-mono text-xs px-2 py-0.5 rounded-md border border-[#1d2820] font-semibold" {...props}>
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
            <div className="mt-16 pt-8 border-t border-[#1d2820]">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0f1511] border border-[#1d2820] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-[#080c09] flex items-center justify-center font-mono font-bold text-base shadow-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#eaf0eb]">
                      Written by {post.author}
                    </h4>
                    <p className="text-xs text-[#8d9e91] mt-0.5">
                      Software Developer specializing in React, Next.js, TypeScript, and modern web architectures.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://medium.com/@asmita.kafle67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-accent/40 bg-accent/10 text-accent text-xs font-mono uppercase tracking-[0.08em] hover:bg-accent/20 transition-colors"
                  >
                    <span>Follow on Medium</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-[#080c09] text-xs font-semibold hover:bg-[#8ee4b1] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Reusable CodeBlock with copy action and dark terminal styling
const CodeBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-[#1d2820] bg-[#0a0e0b] text-[#eaf0eb] shadow-card">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1511] border-b border-[#1d2820] text-xs font-mono text-[#8d9e91]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1d2820]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1d2820]" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-accent ml-2">
            {language || 'code'}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#8d9e91] hover:text-[#eaf0eb] transition-colors px-2.5 py-1 rounded-lg hover:bg-[#16201a] border border-transparent hover:border-[#1d2820]"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-mono text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-[#eaf0eb] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
