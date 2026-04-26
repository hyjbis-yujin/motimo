import React from 'react';
import { cn } from '../../utils/cn';
import Icon from '../../components/ui/Icon';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 출석 현황의 개별 회차 아이템
 */
export function AttendanceItem({ label, isActive }) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0 animate-in fade-in duration-500">
      {/* 아이콘 배경 및 체크 아이콘 */}
      <div className="relative w-[66px] h-[66px] flex items-center justify-center transition-all">
        <Icon 
          name="attendance-bg" 
          active={isActive} 
          className="absolute inset-0 w-full h-full" 
        />
        <Icon 
          name="attendance-check" 
          active={isActive} 
          className="relative z-10 w-[24px] h-auto" 
        />
      </div>
      
      {/* 하단 회차 레이블 */}
      <div className={cn(
        "px-3 py-1.5 rounded-full flex justify-center items-center min-w-[54px] transition-all",
        isActive ? "bg-primary-mint" : "bg-bg-gray"
      )}>
        <span className={cn(
          "text-sm font-semibold whitespace-nowrap text-center",
          isActive ? "text-white" : "text-text-muted"
        )}>
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * 출석 현황 가로 스크롤 섹션 컴포넌트
 */
export default function AttendanceStatusRow({ challengeId, statusList }) {
  const attendanceCount = useChallengeStore(state => {
    const data = state.attendanceData && state.attendanceData[String(challengeId)];
    return data?.checkedDates?.length || 0;
  });

  const groupIndex = Math.floor(attendanceCount / 5);
  const startIndex = groupIndex * 5;
  const visibleList = Array.isArray(statusList) 
    ? statusList.slice(startIndex, startIndex + 5)
    : [];

  const finalVisibleList = (visibleList.length === 0 && Array.isArray(statusList) && statusList.length > 0)
    ? statusList.slice(-5)
    : visibleList;

  return (
    <div className="w-full flex items-center justify-around px-layout-x py-4 gap-2 transition-all">
      {finalVisibleList.length > 0 ? (
        finalVisibleList.map((item) => (
          <AttendanceItem 
            key={item.id}
            label={`${item.session}회차`}
            isActive={attendanceCount >= item.session}
          />
        ))
      ) : (
        <p className="text-base text-text-muted py-6">진행 가능한 회차가 없습니다.</p>
      )}
    </div>
  );
}
