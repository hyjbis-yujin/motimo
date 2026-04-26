import React from 'react';
import SummaryStatCard from '../../../components/ui/SummaryStatCard';
import { useChallengeStore } from '../../../store/useChallengeStore';
import { useAuthStore } from '../../../store/useAuthStore';

/**
 * 마이페이지 통계 요약 섹션
 * 프로필 아바타를 ProfileSection으로 이동하여 통계 카드에 집중하도록 수정했습니다.
 */
export default function SummarySection() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const joinedCount = useChallengeStore(state => state.joinedChallenges?.length || 0);
  
  // 포인트는 로그인 시 500P (목업)
  const points = isLoggedIn ? 500 : 0;

  return (
    <section className="px-layout-x mb-10">
      <SummaryStatCard 
        activeChallenges={isLoggedIn ? joinedCount : 0} 
        attendancePoints={points} 
      />
    </section>
  );
}
