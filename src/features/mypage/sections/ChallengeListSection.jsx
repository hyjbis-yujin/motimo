import React, { useState, useMemo } from 'react';
import Tabs from '../../../components/ui/Tabs';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { MY_CHALLENGE_TABS } from '../../../data/myPageData';
import { useChallengeStore } from '../../../store/useChallengeStore';
import { useAuthStore } from '../../../store/useAuthStore';
import { FEED_CHALLENGES, POPULAR_CHALLENGES, TOP_CARDS, RECOMMENDED_CHALLENGE } from '../../../data/homeData';

/**
 * 마이페이지 나의 챌린지 리스트 섹션
 * 탭(참여, 완료, 찜)에 따라 필터링된 챌린지 카드들을 보여줍니다.
 */
export default function ChallengeListSection() {
  const [activeTab, setActiveTab] = useState(MY_CHALLENGE_TABS[0]);
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const { joinedChallenges, likedChallenges, completedChallenges } = useChallengeStore();

  const filteredChallenges = useMemo(() => {
    // 로그아웃 상태면 탭과 상관없이 빈 리스트 반환 (찜한 챌린지는 유지할 수도 있지만 요청에 따라 로그아웃 시 UI 비활성화 고려)
    // 단, 참여 챌린지는 반드시 로그인 후에만 표시되어야 함
    if (!isLoggedIn) return [];

    let ids = [];
    if (activeTab === "참여챌린지") ids = joinedChallenges;
    else if (activeTab === "완료챌린지") ids = completedChallenges;
    else if (activeTab === "찜한 챌린지") ids = likedChallenges;

    // 모든 챌린지 데이터를 통합 검색 대상으로 설정
    const allChallenges = [
      ...FEED_CHALLENGES,
      ...POPULAR_CHALLENGES,
      TOP_CARDS.left,
      TOP_CARDS.right,
      RECOMMENDED_CHALLENGE
    ];

    // ID 타입 불일치 방지를 위해 String으로 변환하여 비교
    return allChallenges.filter(c => ids.map(String).includes(String(c.id)));
  }, [isLoggedIn, activeTab, joinedChallenges, likedChallenges, completedChallenges]);

  const getEmptyMessage = () => {
    if (activeTab === "참여챌린지") return "진행 중인 챌린지가 없어요.";
    if (activeTab === "완료챌린지") return "완료한 챌린지가 없어요.";
    if (activeTab === "찜한 챌린지") return "찜한 챌린지가 없어요.";
    return "";
  };

  return (
    <section className="flex flex-col">
      {/* 탭 메뉴 */}
      <div className="px-layout-x mb-7">
        <Tabs 
          tabs={MY_CHALLENGE_TABS} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>

      {/* 챌린지 리스트 */}
      <div className="px-layout-x flex flex-col gap-layout-x pb-tabbar">
        {filteredChallenges.length > 0 ? (
          filteredChallenges.map((item) => (
            <ChallengeCard
              key={item.id}
              variant="mypage"
              id={item.id}
              title={item.title}
              desc={item.desc}
              imageUrl={item.imageUrl}
              badge={item.badge}
              participants={item.participants}
            />
          ))
        ) : (
          /* 빈 상태 문구 */
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
            <p className="text-base text-text-muted font-medium">
              {getEmptyMessage()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
