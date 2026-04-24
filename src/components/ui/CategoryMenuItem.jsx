import React from 'react';
import Icon from './Icon';
import { cn } from '../../utils/cn';

export default function CategoryMenuItem({ label, type, isActive, onClick }) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer group w-full" 
      onClick={onClick}
    >
      <div
        className={cn(
          "w-full aspect-square rounded-[15px] flex items-center justify-center transition-all shadow-[0_1px_4px_rgba(0,0,0,0.015)]",
          isActive
            ? "bg-white border-[2px] border-primary-mint shadow-[0_2px_8px_rgba(41,216,181,0.15)]"
            : "bg-[#f8f8f8] border-none group-hover:bg-[#f2f2f2]"
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
        "text-[12px] mt-[8px] tracking-tight whitespace-nowrap transition-colors", 
        isActive ? "font-bold text-primary-mint" : "font-medium text-text-secondary"
      )}>
        {label}
      </span>
    </div>
  );
}
