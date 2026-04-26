import React from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import Button from '../../../components/ui/Button';

/**
 * 홈페이지 챌린지 피드 섹션
 * 카테고리에 맞는 챌린지 리스트를 보여줍니다.
 */
export default function ChallengeFeedSection({ cards, onLoadMore, onCollapse, hasMore }) {
  return (
    <section className="px-layout-x mt-10 flex flex-col gap-3.5">
      {cards.map(item => (
        <ChallengeCard
          key={item.id}
          variant="feed"
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          desc={item.desc}
          badge={item.badge}
          participants={item.participants}
        />
      ))}

      <Button 
        variant="dark" 
        className="w-full h-pill mt-4 mb-12"
        onClick={hasMore ? onLoadMore : onCollapse}
      >
        {hasMore ? "더 많은 챌린지 검색하기 +" : "챌린지 목록 접기 -"}
      </Button>
    </section>
  );
}
