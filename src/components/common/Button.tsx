import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'emergency' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-teal-800 text-white hover:bg-teal-700 active:bg-teal-900 focus:ring-teal-700 shadow-sm hover:shadow-teal-glow',
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 focus:ring-navy-700 shadow-sm',
    gold: 'bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 active:bg-gold-600 focus:ring-gold-400 shadow-sm hover:shadow-gold-glow',
    emergency: 'bg-crimson-600 text-white font-semibold hover:bg-crimson-700 active:bg-crimson-800 focus:ring-crimson-500 shadow-sm hover:shadow-md',
    outline: 'border border-navy-900/30 text-navy-900 hover:bg-navy-900/5 active:bg-navy-900/10 focus:ring-navy-800',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-navy-900 focus:ring-slate-400',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
};
