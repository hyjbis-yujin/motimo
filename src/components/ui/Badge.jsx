import React from 'react';
import { cn } from '../../utils/cn';

/**
 * 범용 배지 컴포넌트
 * 상태 표시나 라벨링에 사용됩니다. (예: D-Day, 카테고리 등)
 */
export default function Badge({ children, className, variant = 'primary' }) {
  const baseStyles = "inline-flex items-center justify-center rounded-pill px-3 py-1.5 font-semibold text-sm tracking-tight leading-none";

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
