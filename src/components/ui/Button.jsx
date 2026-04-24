import React from 'react';
import { cn } from '../../utils/cn';

export default function Button({ children, className, variant = 'primary', ...props }) {
  const baseStyles = "inline-flex items-center justify-center tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-mint text-white hover:bg-primary-mint/90 font-semibold",
    dark: "bg-btn-dark text-white hover:bg-btn-dark/90 shadow-sm font-semibold",
    outline: "border border-border-light text-text-dark bg-white shadow-sm font-medium",
    pill: "rounded-pill border border-[#ececec] bg-white text-[#878787] hover:bg-bg-outer text-[11px] px-[14px] font-semibold h-[30px]", 
    small: "bg-btn-dark text-white font-medium text-[12px] rounded-[12px] h-[34px] px-3.5",
  };
  
  const sizes = {
    md: "w-full px-5 rounded-btn h-[48px] text-[13.5px]",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], (variant !== 'pill' && variant !== 'small') ? sizes.md : "", className)} 
      {...props}
    >
      {children}
    </button>
  );
}
