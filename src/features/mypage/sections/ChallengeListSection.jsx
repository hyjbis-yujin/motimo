import React, { useState } from 'react';
import Tabs from '../../../components/ui/Tabs';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { MY_CHALLENGE_TABS, MY_CHALLENGE_LIST } from '../../../constants/myPageData';

export default function ChallengeListSection() {
  const [activeTab, setActiveTab] = useState(MY_CHALLENGE_TABS[0]);

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
        {MY_CHALLENGE_LIST.map((item) => (
          <ChallengeCard
            key={item.id}
            variant="mypage"
            title={item.title}
            desc={item.desc}
            badge={item.badge}
            participants={item.participants}
          />
        ))}
      </div>
    </section>
  );
}
