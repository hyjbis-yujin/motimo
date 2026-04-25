import React, { useMemo } from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { TOP_CARDS, FEED_CHALLENGES } from '../../../data/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';
import { useAuthStore } from '../../../store/useAuthStore';
import { useChallengeStore } from '../../../store/useChallengeStore';

export default function TopChallengeCardsSection() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const joinedChallengeIds = useChallengeStore(state => state.joinedChallenges);

  const displayCards = useMemo(() => {
    // 1. 로그인 전이거나 참여 중인 챌린지가 없을 경우 -> 기본 추천 카드(TOP_CARDS) 노출
    if (!isLoggedIn || joinedChallengeIds.length === 0) {
      return [TOP_CARDS.left, TOP_CARDS.right];
    }

    // 2. 로그인 후 참여 중인 챌린지가 있을 경우 -> 참여 중인 챌린지 데이터 매칭
    const joinedData = joinedChallengeIds
      .map(id => FEED_CHALLENGES.find(c => c.id === id))
      .filter(Boolean)
      .slice(0, 2); // 최대 2개만 표시

    // 만약 참여 챌린지가 1개면 추천 카드 1개를 섞어서 2개를 맞춤 (UI 유지)
    if (joinedData.length === 1) {
      return [joinedData[0], TOP_CARDS.right];
    }

    return joinedData.length >= 2 ? joinedData : [TOP_CARDS.left, TOP_CARDS.right];
  }, [isLoggedIn, joinedChallengeIds]);

  return (
    <HorizontalScrollRow className="mt-7" contentClassName="pr-0">
      <div className="flex items-center gap-[14px]">
        {displayCards.map((card, index) => (
          <ChallengeCard 
            key={card.id || index}
            variant={index === 0 ? "top-left" : "top-right"}
            id={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            desc={card.desc}
            badge={card.badge}
            participants={card.participants}
          />
        ))}
      </div>
    </HorizontalScrollRow>
  );
}
