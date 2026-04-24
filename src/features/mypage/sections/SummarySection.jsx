import React from 'react';
import ProfileAvatar from '../../../components/ui/ProfileAvatar';
import SummaryStatCard from '../../../components/ui/SummaryStatCard';
import { MY_STATS } from '../../../constants/myPageData';

export default function SummarySection() {
  return (
    <section className="px-layout-x mb-[48px] relative pt-[34px]">
      {/* 프로필 이미지 (카드 상단 중앙에 오버랩) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <ProfileAvatar />
      </div>
      
      <SummaryStatCard 
        activeChallenges={MY_STATS.activeChallenges} 
        attendancePoints={MY_STATS.attendancePoints} 
      />
    </section>
  );
}
