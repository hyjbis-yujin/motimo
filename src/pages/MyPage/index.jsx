import React from 'react';
import ProfileSection from '../../features/mypage/sections/ProfileSection';
import SummarySection from '../../features/mypage/sections/SummarySection';
import ChallengeListSection from '../../features/mypage/sections/ChallengeListSection';

export default function MyPage() {
  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* 프로필 정보 (사용자명, 수정, 아바타) */}
      <ProfileSection />
      
      {/* 요약 통계 카드 */}
      <SummarySection />
      
      {/* 탭 및 챌린지 리스트 리스트 */}
      <ChallengeListSection />
    </div>
  );
}
