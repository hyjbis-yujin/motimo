import React from 'react';
import Icon from './Icon';

export default function SummaryStatCard({ activeChallenges, attendancePoints }) {
  return (
    <div className="w-full h-[120px] bg-bg-subtle rounded-[24px] flex items-center justify-around px-[10px] tracking-tight">
      {/* 참여중인 챌린지 */}
      <div className="flex flex-col items-center flex-1">
        <span className="text-[18px] font-bold text-primary-mint leading-none">
          {activeChallenges}개
        </span>
        <span className="text-[14px] font-medium text-text-secondary mt-[8px]">
          참여중인 챌린지
        </span>
      </div>


      {/* 출석 포인트 */}
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center gap-[4px] leading-none">
          <span className="text-[18px] font-bold text-primary-mint">
            {attendancePoints}P
          </span>
        </div>
        <div className="flex items-center gap-[4px] mt-[8px]">
          <span className="text-[14px] font-medium text-text-secondary">
            출석 포인트
          </span>
          {/* 도움말 아이콘 */}
          <div className="relative group flex items-center justify-center cursor-help">
            <Icon name="action-help" />
            <div className="absolute top-[calc(100%+12px)] right-[-10px] px-[14px] py-[10px] bg-[#1f1f1f] text-white text-[12px] font-semibold rounded-[10px] shadow-[0_6px_16px_rgba(0,0,0,0.2)] whitespace-nowrap opacity-0 -translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out pointer-events-none z-50 after:content-[''] after:absolute after:top-[-4px] after:right-[14px] after:w-[8px] after:h-[8px] after:bg-[#1f1f1f] after:rotate-45">
              출석 체크를 통해 획득한 포인트입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
