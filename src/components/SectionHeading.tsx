import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 sm:mb-12 lg:mb-14 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#161c2e] text-accent text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase mb-2.5 sm:mb-3.5 border border-accent/25 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>{category}</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8fafc] leading-tight font-display">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base lg:text-lg text-[#94a3b8] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
