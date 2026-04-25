import { create } from 'zustand';

/**
 * 전역 UI 상태 관리를 담당하는 스토어
 * - 탭바 활성화/비활성화
 * - 전역 모달/토스트 상태
 */
export const useUIStore = create((set) => ({
  isTabBarVisible: true,
  setTabBarVisible: (visible) => set({ isTabBarVisible: visible }),
}));
