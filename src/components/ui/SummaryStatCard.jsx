import React from 'react';
import Icon from './Icon';

/**
 * 마이페이지 상단 통계 카드 컴포넌트
 * 참여 중인 챌린지 수와 출석 포인트를 세로 레이아웃으로 보여줍니다.
 */
export default function SummaryStatCard({ activeChallenges, attendancePoints }) {
  return (
    <div className="w-full bg-bg-subtle rounded-box-lg flex flex-col items-center p-6 gap-6 tracking-tight">
      
      {/* 1. 참여중인 챌린지 */}
      <div className="flex items-center justify-between w-full px-2">
        <span className="text-base font-medium text-text-secondary">
          참여중인 챌린지
        </span>
        <span className="text-lg font-bold text-primary-mint leading-none">
          {activeChallenges}개
        </span>
      </div>

      {/* 구분선 */}
      <div className="w-full h-[1px] bg-border-divider" />

      {/* 2. 출석 포인트 */}
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-1">
          <span className="text-base font-medium text-text-secondary">
            출석 포인트
          </span>
          {/* 도움말 아이콘 */}
          <div className="relative group flex items-center justify-center cursor-help">
            <Icon name="action-help" />
            <div className="absolute bottom-[calc(100%+12px)] right-[-10px] px-[14px] py-[10px] bg-[#1f1f1f] text-white text-sm font-semibold rounded-[10px] shadow-[0_6px_16px_rgba(0,0,0,0.2)] whitespace-nowrap opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out pointer-events-none z-50 after:content-[''] after:absolute after:bottom-[-4px] after:right-[14px] after:w-[8px] after:h-[8px] after:bg-[#1f1f1f] after:rotate-45">
              출석 체크를 통해 획득한 포인트입니다.
            </div>
          </div>
        </div>
        
        <span className="text-lg font-bold text-primary-mint leading-none">
          {attendancePoints}P
        </span>
      </div>
    </div>
  );
}
