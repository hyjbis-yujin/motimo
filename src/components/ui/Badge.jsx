import React from 'react';
import { cn } from '../../utils/cn';

export default function Badge({ children, className, variant = 'primary' }) {
  const baseStyles = "inline-flex items-center justify-center rounded-pill px-3 py-1.5 font-semibold text-[12px] tracking-tight leading-none";

  const variants = {
    primary: "bg-primary-mint text-white shadow-sm",
    secondary: "bg-white text-text-dark border border-border-light shadow-sm",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
