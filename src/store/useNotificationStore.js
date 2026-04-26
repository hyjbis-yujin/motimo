import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useAuthStore } from './useAuthStore';

/**
 * 알림 데이터를 관리하는 스토어
 * persist 미들웨어를 통해 로컬 스토리지에 저장됩니다.
 */
export const useNotificationStore = create(
  persist(
    (set, get) => ({
      notifications: [], // 초기값은 빈 배열

      /**
       * 알림 추가 액션
       * 1. 로그인 상태 확인 (isLoggedIn === true일 때만 실행)
       * 2. 최대 50개 유지 (초과 시 오래된 알림 제거)
       */
      addNotification: (title, message, type = 'info') => {
        // 로그인 상태 조건 추가
        const isLoggedIn = useAuthStore.getState().isLoggedIn;
        if (!isLoggedIn) return;

        set((state) => {
          const newNotification = {
            id: Date.now(),
            title,
            message,
            type,
            isUnread: true,
            createdAt: new Date().toISOString(), // 정확한 시간 판별을 위한 시각 기록
            time: '방금 전', // 화면 표시용 초기값
          };

          const updatedNotifications = [newNotification, ...state.notifications];
          // 최대 50개 유지 로직
          return {
            notifications: updatedNotifications.slice(0, 50)
          };
        });
      },

      /**
       * 전체 알림 읽음 처리
       * NotificationPage 진입 시 실행됩니다.
       */
      markAllAsRead: () => set((state) => ({
        notifications: state.notifications.map(n => ({ ...n, isUnread: false }))
      })),

      // 개별 알림 읽음 처리
      markAsRead: (id) => set((state) => ({
        notifications: state.notifications.map(n => 
          n.id === id ? { ...n, isUnread: false } : n
        )
      })),

      // 알림 삭제
      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })),
    }),
    {
      name: 'motimo-notification-storage', // 로컬 스토리지 키
    }
  )
);
