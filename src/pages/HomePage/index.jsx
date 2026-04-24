import React, { useState, useMemo } from 'react';
import ProfileSummarySection from '../../features/home/sections/ProfileSummarySection';
import TopChallengeCardsSection from '../../features/home/sections/TopChallengeCardsSection';
import EventBannerSection from '../../features/home/sections/EventBannerSection';
import CategorySection from '../../features/home/sections/CategorySection';
import ChallengeFeedSection from '../../features/home/sections/ChallengeFeedSection';
import PopularChallengeSection from '../../features/home/sections/PopularChallengeSection';
import RecommendedChallengeSection from '../../features/home/sections/RecommendedChallengeSection';
import { FEED_CHALLENGES } from '../../constants/homeData';

export default function HomePage() {
  // 상태 관리: 선택된 카테고리 (기본값: 'study' 고정)
  const [selectedCategory, setSelectedCategory] = useState('study');
  
  // 상태 관리: 노출할 카드 개수 (기본값: 3)
  const [visibleCount, setVisibleCount] = useState(3);

  // 카테고리에 따른 필터링된 카드 목록
  const filteredCards = useMemo(() => {
    return FEED_CHALLENGES.filter(card => card.category === selectedCategory);
  }, [selectedCategory]);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (categoryType) => {
    setSelectedCategory(categoryType);
    setVisibleCount(3); // 카테고리 변경 시 노출 개수 초기화
  };

  // 더보기 버튼 핸들러
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  // 상단으로 접기 핸들러
  const handleCollapse = () => {
    setVisibleCount(3);
  };

  // 현재 화면에 노출할 카드 목록 (slice)
  const visibleCards = filteredCards.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCards.length;

  return (
    <div className="flex flex-col">
      {/* 1. 프로필 / 참여 중 챌린지 영역 */}
      <ProfileSummarySection />
      
      {/* 2. 상단 가로 카드 2개 */}
      <TopChallengeCardsSection />
      
      {/* 3. 민트 배너 */}
      <EventBannerSection />
      
      {/* 4. 카테고리 메뉴 6개 */}
      <CategorySection 
        activeCategoryType={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      
      {/* 5. 세로형 챌린지 리스트 (필터링 + 더보기/접기) */}
      <ChallengeFeedSection 
        cards={visibleCards} 
        onLoadMore={handleLoadMore}
        onCollapse={handleCollapse}
        hasMore={hasMore}
      />
      
      {/* 6. 인기 챌린지 TOP 10 (가로 스크롤) */}
      <PopularChallengeSection />
      
      {/* 7. 추천 챌린지 안내 + 추천 카드 */}
      <RecommendedChallengeSection />
    </div>
  );
}
