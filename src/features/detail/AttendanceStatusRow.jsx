import React from 'react';
import { cn } from '../../utils/cn';
import Icon from '../../components/ui/Icon';
import { useChallengeStore } from '../../store/useChallengeStore';

const EMPTY_ARRAY = [];

/**
 * 출석 현황의 개별 일자 아이템
 */
export function AttendanceItem({ label, isActive }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* 커스텀 백그라운드 아이콘 영역 (66px) */}
      <div className="relative w-[66px] h-[66px] flex items-center justify-center transition-all">
        <Icon name="attendance-bg" active={isActive} className="absolute inset-0 w-full h-full" />
        <Icon name="attendance-check" active={isActive} className="relative z-10" />
      </div>
      
      {/* 하단 Pill 라벨 */}
      <div className={cn(
        "px-4 py-1.5 rounded-full flex justify-center items-center min-w-[64px] transition-all",
        isActive ? "bg-primary-mint" : "bg-[#f5f5f5]"
      )}>
        <span className={cn(
          "text-[12px] font-semibold whitespace-nowrap text-center",
          isActive ? "text-white" : "text-[#989898]"
        )}>
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * 출석 현황판 컴포넌트
 */
export default function AttendanceStatusRow({ challengeId, statusList }) {
  // 방어 코드 및 ID 기반 데이터 매핑
  const completedDays = useChallengeStore(state => {
    const allAttendance = state.attendanceData;
    if (!allAttendance) return EMPTY_ARRAY;
    return allAttendance[String(challengeId)] || EMPTY_ARRAY;
  });

  return (
    <div className="w-full flex items-center justify-between px-3">
      {Array.isArray(statusList) ? statusList.map((item) => (
        <AttendanceItem 
          key={item.day}
          label={item.label}
          isActive={completedDays.includes(item.day)}
        />
      )) : (
        <p className="text-[13px] text-text-muted py-4">출석 데이터가 없습니다.</p>
      )}
    </div>
  );
}
