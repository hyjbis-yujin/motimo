import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 챌린지 참여, 찜, 출석 데이터를 관리하는 스토어
 * persist 미들웨어를 사용하여 로컬 스토리지에 데이터를 보존합니다.
 */
export const useChallengeStore = create(
  persist(
    (set, get) => ({
      // 내가 참여 중인 챌린지 ID 목록
      joinedChallenges: ['m1', 'm2', 'm3'], 
      
      // 내가 찜한 챌린지 ID 목록
      likedChallenges: [],
      
      // 완료된 챌린지 ID 목록
      completedChallenges: [],

      // 챌린지별 출석 현황: { [challengeId]: [completedDays] }
      attendanceData: {
        'm1': [1], // m1 챌린지 1회차 출석 완료
      },

      // 챌린지 참여
      joinChallenge: (challengeId) => set((state) => ({
        joinedChallenges: [...new Set([...(state.joinedChallenges || []), String(challengeId)])]
      })),

      // 챌린지 탈퇴
      leaveChallenge: (challengeId) => set((state) => ({
        joinedChallenges: (state.joinedChallenges || []).filter(id => id !== String(challengeId))
      })),

      // 찜하기 토글
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

      // 출석 체크 (중복 및 undefined 방지)
      checkAttendance: (challengeId, day) => set((state) => {
        const id = String(challengeId);
        const allAttendance = state.attendanceData || {};
        const currentAttendance = allAttendance[id] || [];
        
        if (currentAttendance.includes(day)) return state;

        return {
          attendanceData: {
            ...allAttendance,
            [id]: [...currentAttendance, day]
          }
        };
      }),

      // 특정 챌린지 참여 여부 확인 (Safe)
      isJoined: (challengeId) => (get().joinedChallenges || []).includes(String(challengeId)),
      
      // 특정 챌린지 찜 여부 확인 (Safe)
      isLiked: (challengeId) => (get().likedChallenges || []).includes(String(challengeId)),

      // 특정 챌린지 출석 횟수 확인 (Safe)
      getAttendanceCount: (challengeId) => {
        const id = String(challengeId);
        const allAttendance = get().attendanceData || {};
        return (allAttendance[id] || []).length;
      },
    }),
    {
      name: 'motimo-challenge-storage',
    }
  )
);
