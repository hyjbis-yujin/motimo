import React, { useState, useMemo } from 'react';
import Tabs from '../../../components/ui/Tabs';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { MY_CHALLENGE_TABS } from '../../../data/myPageData';
import { useChallengeStore } from '../../../store/useChallengeStore';
import { FEED_CHALLENGES } from '../../../data/homeData';

export default function ChallengeListSection() {
  const [activeTab, setActiveTab] = useState(MY_CHALLENGE_TABS[0]);
  
  const { joinedChallenges, likedChallenges, completedChallenges } = useChallengeStore();

  const filteredChallenges = useMemo(() => {
    let ids = [];
    if (activeTab === "참여챌린지") ids = joinedChallenges;
    else if (activeTab === "완료챌린지") ids = completedChallenges;
    else if (activeTab === "찜한 챌린지") ids = likedChallenges;

    return FEED_CHALLENGES.filter(c => ids.includes(c.id));
  }, [activeTab, joinedChallenges, likedChallenges, completedChallenges]);

  const getEmptyMessage = () => {
    if (activeTab === "참여챌린지") return "참여 중인 챌린지가 없어요.";
    if (activeTab === "완료챌린지") return "완료한 챌린지가 없어요.";
    if (activeTab === "찜한 챌린지") return "찜한 챌린지가 없어요.";
    return "";
  };

  return (
    <section className="flex flex-col">
      {/* 탭 메뉴 */}
      <div className="px-layout-x mb-[28px]">
        <Tabs 
          tabs={MY_CHALLENGE_TABS} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      </div>

      {/* 챌린지 리스트 */}
      <div className="px-layout-x flex flex-col gap-[18px] pb-[50px]">
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
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[14px] text-text-muted font-medium">
              {getEmptyMessage()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
