import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs tracking-widest font-semibold uppercase ${
          dark ? 'text-gold-400' : 'text-teal-800'
        }`}>
          <span className="w-6 h-px bg-current opacity-60" />
          <span>{eyebrow}</span>
          <span className="w-6 h-px bg-current opacity-60" />
        </div>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-4 ${
        dark ? 'text-ivory-50' : 'text-navy-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-ivory-200/80' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
