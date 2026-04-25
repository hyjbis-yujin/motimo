import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 로그인 상태 및 사용자 정보를 관리하는 스토어
 * persist 미들웨어를 사용하여 새로고침 시에도 상태를 유지합니다.
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      // 로그인 처리
      login: (userData) => set({ 
        isLoggedIn: true, 
        user: userData || { name: '한박구고마님' } 
      }),

      // 로그아웃 처리
      logout: () => set({ 
        isLoggedIn: false, 
        user: null 
      }),
    }),
    {
      name: 'motimo-auth-storage', // localStorage 키 이름
    }
  )
);
