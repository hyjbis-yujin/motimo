import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 챌린지 참여 및 출석 데이터를 관리하는 스토어
 */
export const useChallengeStore = create(
  persist(
    (set, get) => ({
      joinedChallenges: [], 
      likedChallenges: [],
      completedChallenges: [],
      attendanceData: {},

      /**
       * 챌린지 참여
       * 참여하기와 출석체크를 분리하기 위해, 참여 시에는 출석 데이터를 초기화하거나 기존 데이터를 유지하지 않도록 보장합니다.
       */
      joinChallenge: (challengeId, totalDays = 20) => set((state) => {
        const id = String(challengeId);
        // 이미 참여 중이라면 상태 변경 없음
        if (state.joinedChallenges.includes(id)) return state;

        return {
          joinedChallenges: [...state.joinedChallenges, id],
          attendanceData: {
            ...state.attendanceData,
            // 참여 시 해당 챌린지의 출석 기록을 항상 빈 상태로 시작 (참여와 출석 분리)
            [id]: { checkedDates: [], totalDays }
          }
        };
      }),

      /**
       * 챌린지 탈퇴
       */
      leaveChallenge: (challengeId) => set((state) => {
        const id = String(challengeId);
        const nextJoined = (state.joinedChallenges || []).filter(item => item !== id);
        
        // 탈퇴 시 해당 챌린지의 출석 데이터도 함께 삭제하여 다음 참여 시 깨끗한 상태로 시작할 수 있게 함
        const nextAttendance = { ...state.attendanceData };
        delete nextAttendance[id];

        return {
          joinedChallenges: nextJoined,
          attendanceData: nextAttendance
        };
      }),

      toggleLike: (challengeId) => set((state) => {
        const id = String(challengeId);
        const likedChallenges = state.likedChallenges || [];
        const isLiked = likedChallenges.includes(id);
        return {
          likedChallenges: isLiked 
            ? likedChallenges.filter(i => i !== id)
            : [...likedChallenges, id]
        };
      }),

      /**
       * 출석 체크
       */
      checkAttendance: (challengeId) => set((state) => {
        const id = String(challengeId);
        const today = new Date().toISOString().split('T')[0];
        const allAttendance = state.attendanceData || {};
        const challengeData = allAttendance[id] || { checkedDates: [], totalDays: 20 };
        
        if (challengeData.checkedDates.includes(today)) {
          return state;
        }

        return {
          attendanceData: {
            ...allAttendance,
            [id]: {
              ...challengeData,
              checkedDates: [...challengeData.checkedDates, today]
            }
          }
        };
      }),

      isJoined: (challengeId) => (get().joinedChallenges || []).includes(String(challengeId)),
      isLiked: (challengeId) => (get().likedChallenges || []).includes(String(challengeId)),

      getAttendanceCount: (challengeId) => {
        const id = String(challengeId);
        const allAttendance = get().attendanceData || {};
        const challengeData = allAttendance[id];
        if (!challengeData) return 0;
        return Array.isArray(challengeData.checkedDates) ? challengeData.checkedDates.length : 0;
      },

      hasCheckedToday: (challengeId) => {
        const id = String(challengeId);
        const today = new Date().toISOString().split('T')[0];
        const allAttendance = get().attendanceData || {};
        const challengeData = allAttendance[id];
        return challengeData?.checkedDates?.includes(today) || false;
      }
    }),
    {
      name: 'motimo-challenge-storage',
    }
  )
);
