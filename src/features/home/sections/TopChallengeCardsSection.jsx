import React from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import SectionTitle from '../../../components/ui/SectionTitle';
import { TOP_CARDS, FEED_CHALLENGES } from '../../../data/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';
import { useAuthStore } from '../../../store/useAuthStore';
import { useChallengeStore } from '../../../store/useChallengeStore';

/**
 * 홈페이지 상단 챌린지 카드 섹션
 * 진행 중인 챌린지가 있으면 해당 데이터를, 없으면 추천 챌린지를 노출합니다.
 */
export default function TopChallengeCardsSection() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const joinedChallengeIds = useChallengeStore(state => state.joinedChallenges || []);

  const joinedData = isLoggedIn 
    ? joinedChallengeIds
        .map(id => FEED_CHALLENGES.find(c => String(c.id) === String(id)))
        .filter(Boolean)
    : [];

  const hasJoined = joinedData.length > 0;
  const sectionTitle = hasJoined ? "진행 중인 챌린지" : "오늘 추천 챌린지";

  return (
    <section className="mt-8">
      {/* 섹션 타이틀 */}
      <div className="px-layout-x mb-5">
        <SectionTitle title={sectionTitle} />
      </div>

      {hasJoined ? (
        /* 진행 중인 챌린지 리스트 */
        <HorizontalScrollRow>
          <div className="flex items-center gap-3.5">
            {joinedData.map((card, index) => (
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
      ) : (
        /* 기본 추천 챌린지 리스트 */
        <HorizontalScrollRow>
          <div className="flex items-center gap-3.5">
            <ChallengeCard variant="top-left" {...TOP_CARDS.left} />
            <ChallengeCard variant="top-right" {...TOP_CARDS.right} />
          </div>
        </HorizontalScrollRow>
      )}
    </section>
  );
}
