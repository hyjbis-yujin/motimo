import React from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { TOP_CARDS } from '../../../constants/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';

export default function TopChallengeCardsSection() {
  const { left, right } = TOP_CARDS;

  return (
    <HorizontalScrollRow className="mt-7" contentClassName="pr-0">
      <div className="flex items-center gap-[14px]">
        <ChallengeCard 
          variant="top-left"
          title={left.title}
          desc={left.desc}
          badge={left.badge}
          participants={left.participants}
        />
        <ChallengeCard 
          variant="top-right"
          title={right.title}
          desc={right.desc}
          badge={right.badge}
          participants={right.participants}
        />
      </div>
    </HorizontalScrollRow>
  );
}
