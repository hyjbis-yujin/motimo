import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../../components/layout/MobileContainer';
import Icon from '../../components/ui/Icon';
import ChallengeCard from '../../components/ui/ChallengeCard';
import { cn } from '../../utils/cn';
import { FEED_CHALLENGES } from '../../data/homeData';
import { RECOMMENDED_KEYWORDS } from '../../data/searchData';
import { useSearchStore } from '../../store/useSearchStore';

const EMPTY_ARRAY = [];

/**
 * 챌린지 검색 페이지
 */
export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const recentSearches = useSearchStore(state => state.recentSearches || EMPTY_ARRAY);
  const { addSearch, removeSearch, clearAll } = useSearchStore();

  // 검색 필터링 로직
  useEffect(() => {
    if (!query.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    const filtered = FEED_CHALLENGES.filter(c =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  }, [query]);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      addSearch(query.trim());
    }
  };

  const handleTagClick = (term) => {
    setQuery(term);
    addSearch(term);
  };

  return (
    <MobileContainer
      showHeader={false}
      showTabBar={true}
      mainClassName="pt-0 pb-tabbar"
    >
      {/* 1. 검색 헤더 */}
      <header className="sticky top-0 z-30 bg-white h-header flex items-center px-layout-x gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1 -ml-1 text-text-dark cursor-pointer transition-opacity active:opacity-50"
          aria-label="뒤로가기"
        >
          <Icon name="header-back" className="!w-[10px] !h-[22px]" />
        </button>

        <div className="flex-1 relative flex items-center">
          <Icon
            name="header-search"
            className="absolute left-[18px] !w-[16px] !h-[16.5px] opacity-35 z-10"
          />
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="w-full h-[46px] bg-bg-subtle rounded-full pl-11 pr-10 text-base text-text-dark border-none outline-none focus:bg-bg-gray transition-all placeholder:text-[#a4a4a4]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 p-1 flex items-center justify-center"
              aria-label="지우기"
            >
              <div className="w-[18px] h-[18px] rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors">
                <Icon name="action-close" className="!w-[8px] !h-[8px] opacity-80" />
              </div>
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 px-layout-x pt-6 pb-12">
        {!isSearching ? (
          /* A. 기본 상태: 최근/추천 검색어 */
          <div className="flex flex-col gap-9 animate-fade-in text-base">
            {/* 최근 검색어 섹션 */}
            <section className="flex flex-col gap-3.5">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-text-dark">최근검색어</h3>
                {recentSearches.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-sm text-text-muted font-medium py-1 px-1 hover:text-text-secondary"
                  >
                    전체삭제
                  </button>
                )}
              </div>
              
              {recentSearches.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map(term => (
                    <SearchTag
                      key={term}
                      label={term}
                      onDelete={() => removeSearch(term)}
                      onClick={() => handleTagClick(term)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-[13px] text-text-muted py-2">최근 검색한 내용이 없어요.</p>
              )}
            </section>

            {/* 추천 검색어 섹션 */}
            <section className="flex flex-col gap-3.5">
              <h3 className="text-base font-bold text-text-dark">추천검색어</h3>
              <div className="flex flex-wrap gap-2">
                {RECOMMENDED_KEYWORDS.map(term => (
                  <SearchTag
                    key={term}
                    label={term}
                    variant="recommended"
                    onClick={() => handleTagClick(term)}
                  />
                ))}
              </div>
            </section>

            {/* 추천 챌린지 섹션 */}
            <section className="flex flex-col gap-4 pt-4">
              <h3 className="text-base font-bold text-text-dark">추천챌린지</h3>
              <div className="flex flex-col gap-4">
                {FEED_CHALLENGES.slice(0, 3).map(item => (
                  <ChallengeCard
                    key={item.id}
                    variant="feed"
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    imageUrl={item.imageUrl}
                    participants={item.participants}
                    badge={item.badge}
                  />
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* B. 검색 결과 리스트 */
          <div className="animate-fade-in">
            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-6">
                <p className="text-[13px] text-text-muted font-medium mb-1">
                  총 <span className="text-primary-mint font-bold">{searchResults.length}</span>개의 챌린지가 검색되었습니다.
                </p>
                <div className="flex flex-col gap-4">
                  {searchResults.map(item => (
                    <ChallengeCard
                      key={item.id}
                      variant="feed"
                      id={item.id}
                      title={item.title}
                      desc={item.desc}
                      imageUrl={item.imageUrl}
                      participants={item.participants}
                      badge={item.badge}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <EmptyResults />
            )}
          </div>
        )}
      </main>
    </MobileContainer>
  );
}

function SearchTag({ label, onDelete, onClick, variant = 'recent' }) {
  return (
    <div
      className={cn(
        "h-[38px] px-4 rounded-full flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 text-[13px] font-medium border",
        variant === 'recommended'
          ? "bg-primary-light text-primary-mint border-transparent"
          : "bg-transparent border-border-light text-text-secondary"
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="w-4 h-4 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center mt-0.5 ml-0.5 transition-colors"
        >
          <Icon name="action-close" className="w-[7px] h-[7px] opacity-80" />
        </button>
      )}
    </div>
  );
}

function EmptyResults() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 text-center px-10">
      <div className="w-[80px] h-[80px] bg-bg-subtle rounded-[30px] flex items-center justify-center mb-6">
        <Icon name="header-search" className="w-[32px] h-[32px] opacity-10" />
      </div>
      <h3 className="text-lg font-bold text-text-dark mb-2">검색 결과가 없어요</h3>
      <p className="text-base text-text-muted leading-relaxed">
        다른 검색어나 비슷한 키워드로<br />입력해 보시는 건 어떨까요?
      </p>
    </div>
  );
}
