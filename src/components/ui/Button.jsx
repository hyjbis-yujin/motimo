import React from 'react';
import { cn } from '../../utils/cn';

/**
 * 프로젝트 공통 버튼 컴포넌트
 * 다양한 스타일(primary, dark, outline, pill, small)과 상태를 지원합니다.
 */
export default function Button({ children, className, variant = 'primary', ...props }) {
  const baseStyles = "inline-flex items-center justify-center tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-mint text-white hover:bg-primary-mint/90 font-semibold",
    dark: "bg-btn-dark text-white hover:bg-btn-dark/90 shadow-sm font-semibold",
    outline: "border border-border-light text-text-dark bg-white shadow-sm font-medium",
    // 알약 형태의 작은 버튼 (필터 등에서 사용)
    pill: "rounded-pill border border-border-divider bg-white text-[#878787] hover:bg-bg-gray text-xs px-[14px] font-semibold h-[30px]", 
    // 헤더나 작은 액션에 사용되는 버튼
    small: "bg-btn-dark text-white font-medium text-sm rounded-btn-sm h-[34px] px-3.5",
  };
  
  const sizes = {
    md: "w-full px-5 rounded-btn h-pill text-md font-semibold",
  };

  return (
    <button 
      className={cn(
        baseStyles, 
        variants[variant], 
        (variant !== 'pill' && variant !== 'small') ? sizes.md : "", 
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
}
