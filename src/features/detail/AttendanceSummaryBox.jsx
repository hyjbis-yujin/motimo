import React from 'react';
import Icon from '../../components/ui/Icon';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 활성화된 참여 중인 챌린지의 현재 출석 현황 요약 (현재 출석일 / 전체 일수)
 */
export default function AttendanceSummaryBox({ challengeId, total = 20 }) {
  const attendanceInfo = useChallengeStore(state => {
    const allAttendance = state.attendanceData;
    return allAttendance ? allAttendance[String(challengeId)] : null;
  });

  const currentCount = attendanceInfo?.checkedDates?.length || 0;
  // 스토어에 보관된 totalDays가 있으면 우선 사용, 없으면 props로 전달받은 값 사용
  const displayTotal = attendanceInfo?.totalDays || total;

  return (
    <div className="flex items-center justify-between bg-white border-4 border-[#f0f0f0] h-[70px] rounded-full px-8">
      <div className="flex items-center gap-3">
        <Icon name="attendance-summary" className="mb-1" />
        <span className="text-text-dark font-semibold text-[15px]">나의 출석인증 수</span>
      </div>
      
      <div className="text-text-secondary text-[15px] font-medium">
        <span className="text-primary-mint font-bold text-[18px]">{currentCount}회</span> / {displayTotal}회
      </div>
    </div>
  );
}
