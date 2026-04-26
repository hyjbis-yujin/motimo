import React from 'react';
import Icon from './Icon';
import { cn } from '../../utils/cn';

/**
 * 카테고리 메뉴 아이템 컴포넌트
 * 아이콘과 라벨로 구성되며, 활성화 상태에 따라 스타일이 변경됩니다.
 */
export default function CategoryMenuItem({ label, type, isActive, onClick }) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer group w-full" 
      onClick={onClick}
    >
      <div
        className={cn(
          "w-full aspect-square rounded-box flex items-center justify-center transition-all shadow-[0_1px_4px_rgba(0,0,0,0.015)]",
          isActive
            ? "bg-white border-2 border-primary-mint shadow-[0_2px_8px_rgba(61,185,175,0.15)]"
            : "bg-bg-subtle border-none group-hover:bg-[#f2f2f2]"
        )}
      >
        <Icon 
          name={`category-${type}`}
          className={cn(
            "transition-all", 
            isActive ? "opacity-100" : "opacity-60"
          )} 
        />
      </div>
      <span className={cn(
        "text-sm mt-2 tracking-tight whitespace-nowrap transition-colors", 
        isActive ? "font-bold text-primary-mint" : "font-medium text-text-secondary"
      )}>
        {label}
      </span>
    </div>
  );
}
