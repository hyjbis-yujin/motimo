import React from 'react';
import { cn } from '../../utils/cn';

/**
 * 탭 메뉴 컴포넌트
 */
export default function Tabs({ tabs, activeTab, onTabChange, isStatic = false, hideBaselineFullWidth = false }) {
  return (
    <div className={cn("w-full relative", hideBaselineFullWidth && "px-layout-x")}>
      <div className="flex w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className="flex-1 flex flex-col items-center pt-[12px] cursor-pointer group relative z-10"
            >
              <span className={cn(
                "text-[15px] font-semibold",
                !isStatic && "transition-colors",
                isActive ? "text-primary-mint" : "text-text-secondary"
              )}>
                {tab}
              </span>
              {/* 활성 시 언더라인 */}
              <div className={cn(
                "w-full h-[3px] mt-[15px] rounded-full",
                !isStatic && "transition-all",
                isActive ? "bg-primary-mint opacity-100" : "bg-transparent opacity-0"
              )} />
            </button>
          );
        })}
      </div>
      {/* 바닥 구분선 */}
      <div className={cn(
        "absolute bottom-0 h-[1px] bg-[#ededed] -z-0",
        hideBaselineFullWidth ? "left-layout-x right-layout-x" : "left-0 right-0"
      )} />
    </div>
  );
}
