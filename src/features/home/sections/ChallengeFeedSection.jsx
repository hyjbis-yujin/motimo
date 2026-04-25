import React from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import Button from '../../../components/ui/Button';

export default function ChallengeFeedSection({ cards, onLoadMore, onCollapse, hasMore }) {
  return (
    <section className="px-layout-x mt-10 flex flex-col gap-[14px]">
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
        className="w-full h-[48px] mt-[16px] mb-[48px]"
        onClick={hasMore ? onLoadMore : onCollapse}
      >
        {hasMore ? "더 많은 챌린지 탐색하기 +" : "챌린지 목록 접기 -"}
      </Button>
    </section>
  );
}
