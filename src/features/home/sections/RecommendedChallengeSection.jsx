import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { RECOMMENDED_CHALLENGE } from '../../../data/homeData';
import { useAuthStore } from '../../../store/useAuthStore';

/**
 * 홈페이지 하단 추천 챌린지 섹션
 * 유저의 이름을 동적으로 노출하며, 개인화된 추천 느낌을 제공합니다.
 */
export default function RecommendedChallengeSection() {
  const navigate = useNavigate();
  const { title, currentInfo, buttonText, id } = RECOMMENDED_CHALLENGE;
  
  const user = useAuthStore(state => state.user);
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  
  const displayName = isLoggedIn && user?.name ? user.name : "게스트";

  return (
    <section className="bg-bg-gray py-8 mt-6 mb-12">
      <div className="px-layout-x">
        {/* 가이드 메시지 영역 */}
        <h4 className="text-sm font-medium text-text-info mb-3 ml-1 tracking-tight">
          {displayName}님 이런 챌린지는 어떠세요?
        </h4>

        {/* 찜한 챌린지 카드 배경 (White) */}
        <div className="w-full h-recommend bg-white rounded-recommend px-5 flex items-center justify-between mt-2.5">

          <div className="flex items-center gap-4">
            {/* 카테고리 아이콘 박스 (Subtle Gray) */}
            <div className="w-[50px] h-[50px] rounded-box overflow-hidden flex-shrink-0 flex items-center justify-center bg-bg-subtle border border-border-light">
              <Icon name="category-hobby" />
            </div>

            <div className="flex flex-col gap-0.5 tracking-tight">
              <div className="text-base font-bold text-primary-mint leading-snug">{title}</div>
              <div className="text-sm font-medium text-text-secondary mt-0.5">{currentInfo}</div>
            </div>
          </div>

          {/* 이동 버튼 */}
          <Button 
            variant="small" 
            onClick={() => navigate(`/challenge/${id || 1}`)}
            className="h-btn-sm px-3.5 text-sm font-semibold shrink-0 rounded-btn-sm bg-btn-dark text-white"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
