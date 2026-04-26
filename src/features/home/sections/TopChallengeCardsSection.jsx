import React from 'react';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import SectionTitle from '../../../components/ui/SectionTitle';
import { TOP_CARDS, FEED_CHALLENGES } from '../../../data/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';
import { useAuthStore } from '../../../store/useAuthStore';
import { useChallengeStore } from '../../../store/useChallengeStore';

/**
 * 홈 상단 챌린지 카드 섹션
 * 로그인 여부와 관계없이 참여 중인 챌린지가 없으면 추천 챌린지를 노출하고,
 * 참여 중인 유효 챌린지가 있을 때만 '진행 중인 챌린지'로 전환합니다.
 */
export default function TopChallengeCardsSection() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const joinedChallengeIds = useChallengeStore(state => state.joinedChallenges || []);

  // 실제 렌더링 가능한 참여 데이터가 있는지 확인
  const joinedData = isLoggedIn 
    ? joinedChallengeIds
        .map(id => FEED_CHALLENGES.find(c => String(c.id) === String(id)))
        .filter(Boolean)
    : [];

  // 참여 중인 유효 챌린지가 있는 경우에만 '진행 중인 챌린지' 타이틀 사용
  const hasJoined = joinedData.length > 0;
  const sectionTitle = hasJoined ? "진행 중인 챌린지" : "오늘 추천 챌린지";

  return (
    <section className="mt-8">
      {/* 타이틀 영역 */}
      <div className="px-layout-x mb-5">
        <SectionTitle title={sectionTitle} />
      </div>

      {/* 컨텐츠 렌더링 영역 */}
      {hasJoined ? (
        // 1. 진행 중인 챌린지가 있는 경우: 실제 참여 리스트 노출
        <HorizontalScrollRow>
          <div className="flex items-center gap-[14px]">
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
        // 2. 진행 중인 챌린지가 없는 경우 (로그아웃 포함): 추천 챌린지 노출
        <HorizontalScrollRow>
          <div className="flex items-center gap-[14px]">
            <ChallengeCard variant="top-left" {...TOP_CARDS.left} />
            <ChallengeCard variant="top-right" {...TOP_CARDS.right} />
          </div>
        </HorizontalScrollRow>
      )}
    </section>
  );
}
