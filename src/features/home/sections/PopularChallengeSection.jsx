import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { POPULAR_CHALLENGES } from '../../../data/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';

export default function PopularChallengeSection() {
  return (
    <section>
      {/* 섹션 간 구분 영역 */}
      <div className="w-full h-[11px] bg-[#fbfbfb] shadow-inner" />

      <div className="px-layout-x mb-[24px] mt-10">
        <SectionTitle 
          title="인기 챌린지 TOP 10" 
          icon="section-hot"
        />
      </div>

      <HorizontalScrollRow>
        <div className="flex items-center gap-[14px] w-max">
          {POPULAR_CHALLENGES.map((item) => (
            <ChallengeCard
              key={item.id}
              variant="popular"
              id={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              desc={item.desc}
              badge={item.badge}
              participants={item.participants}
            />
          ))}
        </div>
      </HorizontalScrollRow>
    </section>
  );
}
