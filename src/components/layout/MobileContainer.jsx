import React from 'react';
import { cn } from '../../utils/cn';
import Header from './Header';
import TabBar from './TabBar';
import { useUIStore } from '../../store/useUIStore';

/**
 * 앱의 모바일 규격(460px)과 전역 레이아웃을 담당하는 컨테이너
 * showHeader, showTabBar 프로퍼티를 통해 특정 페이지에서 레이아웃을 조정할 수 있습니다.
 */
export default function MobileContainer({ 
  children, 
  className,
  showHeader = true,
  showTabBar = true,
  mainClassName
}) {
  return (
    <div className="min-h-screen bg-[#efefef] flex justify-center selection:bg-primary-mint/20">
      <div 
        className={cn(
          "relative w-full max-w-mobile bg-bg-app min-h-screen flex flex-col overflow-x-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)]",
          className
        )}
      >
        {showHeader && <Header />}
        
        <main className={cn(
          "flex-1 overflow-y-auto hide-native-scrollbar",
          showHeader && "pt-[60px]",
          showTabBar && "pb-[80px]",
          mainClassName
        )}>
          {children}
        </main>
        
        {showTabBar && <TabBar />}
      </div>
    </div>
  );
}
