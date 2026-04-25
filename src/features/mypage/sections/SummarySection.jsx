import React from 'react';
import ProfileAvatar from '../../../components/ui/ProfileAvatar';
import SummaryStatCard from '../../../components/ui/SummaryStatCard';
import { useChallengeStore } from '../../../store/useChallengeStore';
import { useAuthStore } from '../../../store/useAuthStore';

export default function SummarySection() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const joinedCount = useChallengeStore(state => state.joinedChallenges.length);
  
  // 포인트는 목업 데이터 유지 (추후 챌린지 성공 시 증가 로직 추가 가능)
  const points = isLoggedIn ? 500 : 0;

  return (
    <section className="px-layout-x mb-[48px] relative pt-[34px]">
      {/* 프로필 이미지 (카드 상단 중앙에 오버레이) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <ProfileAvatar />
      </div>
      
      <SummaryStatCard 
        activeChallenges={isLoggedIn ? joinedCount : 0} 
        attendancePoints={points} 
      />
    </section>
  );
}
