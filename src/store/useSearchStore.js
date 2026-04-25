import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 최근 검색어를 관리하는 스토어
 * persist 미들웨어를 적용합니다.
 */
export const useSearchStore = create(
  persist(
    (set) => ({
      recentSearches: [],

      // 검색어 추가
      addSearch: (term) => set((state) => {
        const filtered = state.recentSearches.filter(t => t !== term);
        return {
          recentSearches: [term, ...filtered].slice(0, 10)
        };
      }),

      // 특정 검색어 삭제
      removeSearch: (term) => set((state) => ({
        recentSearches: state.recentSearches.filter(t => t !== term)
      })),

      // 전체 삭제
      clearAll: () => set({ recentSearches: [] }),
    }),
    {
      name: 'motimo-search-storage',
    }
  )
);
