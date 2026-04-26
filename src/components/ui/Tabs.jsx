import React from 'react';
import { cn } from '../../utils/cn';

/**
 * 프로젝트 공통 탭 메뉴 컴포넌트
 * 전달된 탭 배열(tabs)을 기반으로 메뉴를 생성하고 활성화 상태를 관리합니다.
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
              className="flex-1 flex flex-col items-center pt-3 cursor-pointer group relative z-10"
            >
              <span className={cn(
                "text-base font-semibold",
                !isStatic && "transition-colors",
                isActive ? "text-primary-mint" : "text-text-secondary"
              )}>
                {tab}
              </span>
              {/* 활성 상태 하단 바 */}
              <div className={cn(
                "w-full h-[3px] mt-3.5 rounded-full",
                !isStatic && "transition-all",
                isActive ? "bg-primary-mint opacity-100" : "bg-transparent opacity-0"
              )} />
            </button>
          );
        })}
      </div>
      {/* 바닥 베이스라인 */}
      <div className={cn(
        "absolute bottom-0 h-[1px] bg-border-divider -z-0",
        hideBaselineFullWidth ? "left-layout-x right-layout-x" : "left-0 right-0"
      )} />
    </div>
  );
}
