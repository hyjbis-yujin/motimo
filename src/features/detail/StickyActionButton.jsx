import React from 'react';
import { cn } from '../../utils/cn';

/**
 * 화면 하단에 고정되는 CTA 버튼
 * 디자인 정밀 수정: 높이 60px, 폰트 16px, 라운드 16px, 차분한 민트(#39b79d), 모든 모션 제거
 */
export default function StickyActionButton({ activeTab }) {
  const isDetailTab = activeTab === "상세내용";
  
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile px-layout-x pb-6 bg-white pt-2 z-50">
      <button 
        className={cn(
          "w-full h-[60px] rounded-[14px] text-white text-[16px] font-bold flex items-center justify-center",
          isDetailTab ? "bg-[#333333]" : "bg-[#39b79d]"
        )}
      >
        {isDetailTab ? "참여하기" : "출석하기"}
      </button>
    </div>
  );
}
