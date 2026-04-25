import React, { useState, useMemo } from 'react';
import ProfileSummarySection from '../../features/home/sections/ProfileSummarySection';
import TopChallengeCardsSection from '../../features/home/sections/TopChallengeCardsSection';
import EventBannerSection from '../../features/home/sections/EventBannerSection';
import CategorySection from '../../features/home/sections/CategorySection';
import ChallengeFeedSection from '../../features/home/sections/ChallengeFeedSection';
import PopularChallengeSection from '../../features/home/sections/PopularChallengeSection';
import RecommendedChallengeSection from '../../features/home/sections/RecommendedChallengeSection';
import MobileContainer from '../../components/layout/MobileContainer';
import { FEED_CHALLENGES } from '../../data/homeData';

export default function HomePage() {
  // 상태 관리: 선택된 카테고리 (기본값 'study')
  const [selectedCategory, setSelectedCategory] = useState('study');
  
  // 더보기 버튼 상태 관리: 처음에 3개만 보여주고, 클릭 시 3개씩 추가
  const [visibleCount, setVisibleCount] = useState(3);

  // 카테고리에 맞는 챌린지 필터링
  const filteredCards = useMemo(() => {
    return FEED_CHALLENGES.filter(card => card.category === selectedCategory);
  }, [selectedCategory]);

  // 카테고리 변경 시 보이기 개수 초기화
  const handleCategoryChange = (categoryType) => {
    setSelectedCategory(categoryType);
    setVisibleCount(3); 
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleCollapse = () => {
    setVisibleCount(3);
  };

  // 실제로 렌더링할 카드 리스트 (slice)
  const visibleCards = filteredCards.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCards.length;

  return (
    <MobileContainer>
        <div className="flex flex-col">
            {/* 1. 새로운 로그인 유도 섹션 */}
            <ProfileSummarySection />
        
            {/* 2. 상단 추천 챌린지 2개 */}
            <TopChallengeCardsSection />
        
            {/* 3. 이벤트 배너 */}
            <EventBannerSection />
        
            {/* 4. 카테고리 선택 영역 (6개) */}
            <CategorySection 
              activeCategoryType={selectedCategory} 
              onCategoryChange={handleCategoryChange} 
            />
        
            {/* 5. 카테고리별 챌린지 피드 리스트 (더보기 버튼 포함) */}
            <ChallengeFeedSection 
              cards={visibleCards} 
              onLoadMore={handleLoadMore}
              onCollapse={handleCollapse}
              hasMore={hasMore}
            />
        
            {/* 6. 인기 챌린지 TOP 10 (가로스크롤) */}
            <PopularChallengeSection />
        
            {/* 7. 맞춤 챌린지 추천 + 하단 안내 */}
            <RecommendedChallengeSection />
        </div>
    </MobileContainer>
  );
}
