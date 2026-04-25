import { create } from 'zustand';
import { NOTIFICATIONS } from '../data/notificationData';

/**
 * 알림 데이터를 관리하는 스토어
 */
export const useNotificationStore = create((set) => ({
  notifications: NOTIFICATIONS, // 목업 데이터로 초기화

  // 알림 읽음 처리
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, isUnread: false } : n
    )
  })),

  // 알림 삭제
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
}));
