import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'navy' | 'gold' | 'crimson' | 'lotus' | 'ivory' | 'slate';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wider uppercase',
  };

  const variantStyles = {
    teal: 'bg-teal-50 text-teal-800 border border-teal-800/20',
    navy: 'bg-navy-900/5 text-navy-900 border border-navy-900/15',
    gold: 'bg-gold-50 text-gold-800 border border-gold-500/30',
    crimson: 'bg-crimson-50 text-crimson-700 border border-crimson-600/25',
    lotus: 'bg-lotus-50 text-lotus-600 border border-lotus-500/25',
    ivory: 'bg-ivory-100 text-slate-700 border border-ivory-300',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  const dotColors = {
    teal: 'bg-teal-700',
    navy: 'bg-navy-900',
    gold: 'bg-gold-600',
    crimson: 'bg-crimson-600 animate-pulse',
    lotus: 'bg-lotus-500',
    ivory: 'bg-slate-500',
    slate: 'bg-slate-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
