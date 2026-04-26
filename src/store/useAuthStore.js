import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 랜덤 프로필 아이콘을 위한 이미지 에셋 임포트
import avatar1 from '../assets/images/profiles/avatar-1.svg';
import avatar2 from '../assets/images/profiles/avatar-2.svg';
import avatar3 from '../assets/images/profiles/avatar-3.svg';
import avatar4 from '../assets/images/profiles/avatar-4.svg';
import avatar5 from '../assets/images/profiles/avatar-5.svg';

const AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];

/**
 * 로그인 상태 및 사용자 정보를 관리하는 스토어
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      /**
       * 로그인 처리
       * 사용자가 로그인할 때마다 랜덤하게 아바타 아이콘을 부여합니다.
       */
      login: (userData) => {
        const randomAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
        
        set({ 
          isLoggedIn: true, 
          user: {
            ...(userData || { name: '단박구고마님' }),
            profileImage: randomAvatar // 랜덤 아바타 할당
          }
        });
      },

      // 로그아웃 처리
      logout: () => set({ 
        isLoggedIn: false, 
        user: null 
      }),
    }),
    {
      name: 'motimo-auth-storage',
    }
  )
);
