import React from 'react';

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
    <div className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-semibold tracking-wide uppercase font-mono mb-3 border border-accent-100">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-600 animate-pulse" />
        {category}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-charcoal-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-charcoal-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

