import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { POPULAR_CHALLENGES } from '../../../data/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';

/**
 * 홈페이지 인기 챌린지 TOP 10 섹션
 * 가로 스크롤을 지원하며, 순위별 카드들을 보여줍니다.
 */
export default function PopularChallengeSection() {
  return (
    <section>
      {/* 섹션 간의 선명한 구분을 위한 영역 */}
      <div className="w-full h-3 bg-bg-divider shadow-inner" />

      <div className="px-layout-x mb-6 mt-10">
        <SectionTitle 
          title="인기 챌린지 TOP 10" 
          icon="section-hot"
        />
      </div>

      <HorizontalScrollRow>
        <div className="flex items-center gap-3.5 w-max">
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
