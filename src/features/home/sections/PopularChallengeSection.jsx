import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import ChallengeCard from '../../../components/ui/ChallengeCard';
import { POPULAR_CHALLENGES } from '../../../constants/homeData';
import HorizontalScrollRow from '../../../components/ui/HorizontalScrollRow';

export default function PopularChallengeSection() {
  return (
    <section>
      {/* 아주 연한 구분 영역 (높이 11px로 수정) */}
      <div className="w-full h-[11px] bg-[#fbfbfb] shadow-[inset_0_1px_8px_rgba(0,0,0,0.04)]" />

      <div className="px-layout-x mb-[24px] mt-10">
        <SectionTitle 
          title="인기 챌린지 TOP 10" 
          icon="section-hot"
        />
      </div>

      <HorizontalScrollRow>
        <div className="flex items-center gap-[14px] w-max">
          {POPULAR_CHALLENGES.map((item, index) => {
            // 노을/도시/러닝 느낌을 모방하기 위한 카드 배경색 톤다운 (placeholder 용)
            const bgTones = [
              "bg-[#8e9096]", // 러닝 톤
              "bg-[#9c8273]", // 노을 톤
              "bg-[#6c7886]"  // 새벽 도시 톤
            ];

            return (
              <div key={item.id} className="relative rounded-[20px] overflow-hidden shadow-card-light">
                <div className={`absolute inset-0 ${bgTones[index % 3]} mix-blend-multiply opacity-50`}></div>
                <ChallengeCard
                  variant="popular"
                  title={item.title}
                  desc={item.desc}
                  badge={item.badge}
                  participants={item.participants}
                />
              </div>
            );
          })}
        </div>
      </HorizontalScrollRow>
    </section>
  );
}
