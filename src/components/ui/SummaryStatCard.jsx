import React, { useState } from "react";
import Icon from "./Icon";

/**
 * 마이페이지 상단 통계 카드 컴포넌트
 * 참여 중인 챌린지 수와 출석 포인트를 세로 레이아웃으로 보여줍니다.
 */
export default function SummaryStatCard({ activeChallenges, attendancePoints }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = (e) => {
    e.stopPropagation();
    setShowTooltip((prev) => !prev);
  };

  return (
    <div
      className="w-full bg-bg-subtle rounded-box-lg flex flex-col items-center p-6 gap-6 tracking-tight"
      onClick={() => setShowTooltip(false)}
    >
      {/* 1. 참여중인 챌린지 */}
      <div className="flex items-center justify-between w-full px-2">
        <span className="text-base font-medium text-text-secondary">참여중인 챌린지</span>
        <span className="text-lg font-bold text-primary-mint leading-none">{activeChallenges}개</span>
      </div>

      {/* 구분선 */}
      <div className="w-full h-[1px] bg-border-divider" />

      {/* 2. 출석 포인트 */}
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-1">
          <span className="text-base font-medium text-text-secondary">출석 포인트</span>
          {/* 도움말 아이콘 — 터치/클릭으로 토글 */}
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={handleTooltipToggle}
              className="flex items-center justify-center cursor-help p-1"
              aria-label="출석 포인트 안내"
            >
              <Icon name="action-help" />
            </button>
            {showTooltip && (
              <div className="absolute bottom-[calc(100%+12px)] left-[-5px] px-[14px] py-[10px] bg-[#1f1f1f] text-white text-sm font-semibold rounded-[10px] shadow-[0_6px_16px_rgba(0,0,0,0.2)] whitespace-nowrap z-50 after:content-[''] after:absolute after:bottom-[-4px] after:left-[14px] after:w-[8px] after:h-[8px] after:bg-[#1f1f1f] after:rotate-45">
                출석 체크를 통해 획득한 포인트입니다.
              </div>
            )}
          </div>
        </div>

        <span className="text-lg font-bold text-primary-mint leading-none">{attendancePoints}P</span>
      </div>
    </div>
  );
}
