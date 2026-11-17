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
      className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16201a] text-accent text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 border border-accent/25 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>{category}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#eaf0eb] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#8d9e91] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
