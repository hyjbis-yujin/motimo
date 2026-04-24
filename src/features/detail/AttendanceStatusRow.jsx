import React from 'react';
import { cn } from '../../utils/cn';
import Icon from '../../components/ui/Icon';

/**
 * 출석 현황의 개별 일자 아이템 (원형 아이콘 + 하단 pill 라벨)
 * 디자인 정밀 수정: 원형 테두리 강화 및 특정 일차 스타일 반영
 */
export function AttendanceItem({ label, isActive, day }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* 원형 아이콘 영역 (72px) - 활성은 선 없음, 비활성은 3px #f0f0f0 선 */}
      <div 
        className={cn(
          "w-[72px] h-[72px] rounded-full flex items-center justify-center",
          isActive 
            ? "bg-[#eef8f5]" 
            : "bg-white border-[3px] border-[#f0f0f0]"
        )}
      >
        <Icon name="status-check" active={isActive} />
      </div>
      
      {/* 하단 Pill 라벨 - 폰트 크기 및 패딩 조정 */}
      <div className="px-4 py-1.5 rounded-full bg-[#f5f5f5] flex justify-center items-center min-w-[64px]">
        <span className="text-[12px] font-semibold whitespace-nowrap text-[#989898] text-center">
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * 출석 현황 한 줄 행 (총 5개 아이템)
 */
export default function AttendanceStatusRow({ statusList }) {
  return (
    <div className="w-full flex items-center justify-between pb-8">
      {statusList?.map((item) => (
        <AttendanceItem 
          key={item.day}
          label={item.label}
          day={item.day}
          isActive={item.isCompleted}
        />
      ))}
    </div>
  );
}
