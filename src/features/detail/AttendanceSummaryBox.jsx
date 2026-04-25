import React from 'react';
import Icon from '../../components/ui/Icon';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 나의 출석 인증 현황 요약 박스
 */
export default function AttendanceSummaryBox({ challengeId, total }) {
  // 방어 코드 추가: attendanceData가 없거나 challengeId에 해당하는 데이터가 없는 경우를 고려
  const current = useChallengeStore(state => {
    const allAttendance = state.attendanceData;
    if (!allAttendance) return 0;
    const currentAttendance = allAttendance[String(challengeId)];
    return currentAttendance ? currentAttendance.length : 0;
  });

  return (
    <div className="flex items-center justify-between bg-white border-4 border-[#f0f0f0] h-[70px] rounded-full px-8">
      <div className="flex items-center gap-3">
        <Icon name="attendance-summary" className="mb-1" />
        <span className="text-text-dark font-semibold text-[15px]">나의 출석인증 수</span>
      </div>
      
      <div className="text-text-secondary text-[15px] font-medium">
        <span className="text-primary-mint font-bold text-[18px]">{current}회</span> / {total}회
      </div>
    </div>
  );
}
