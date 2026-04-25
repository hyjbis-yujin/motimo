import React from 'react';
import MobileContainer from '../../components/layout/MobileContainer';
import ProfileSection from '../../features/mypage/sections/ProfileSection';
import SummarySection from '../../features/mypage/sections/SummarySection';
import ChallengeListSection from '../../features/mypage/sections/ChallengeListSection';

/**
 * 마이페이지 메인 컴포넌트
 */
export default function MyPage() {
  return (
    <MobileContainer>
      <div className="flex flex-col min-h-full bg-white">
        {/* 프로필 정보 (이름, 설정 등) */}
        <ProfileSection />
        
        {/* 요약 통계 카드 (참여수, 포인트) */}
        <SummarySection />
        
        {/* 참여 챌린지 탭 리스트 */}
        <ChallengeListSection />
      </div>
    </MobileContainer>
  );
}
