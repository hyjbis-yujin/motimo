/**
 * 챌린지 상세페이지의 목업 데이터
 */
export const CHALLENGE_DETAIL = {
  id: 1,
  title: "퇴근 후 홈트 한시간 실천🏃‍♂️",
  description: "매일 출석하셔야 합니다! 아니면 강퇴거든요",
  heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e51fb9?q=80&w=1470&auto=format&fit=crop",
  participants: {
    total: 20,
    avatars: [
      "https://i.pravatar.cc/150?u=1",
      "https://i.pravatar.cc/150?u=2",
      "https://i.pravatar.cc/150?u=3",
      "https://i.pravatar.cc/150?u=4",
      "https://i.pravatar.cc/150?u=5",
    ]
  },
  info: {
    capacity: "정원 300명",
    period: "기간 26.05.15(월) ~ 08.15(금)",
    detailBody: "아침 6시에 모여 5km 러닝 인증하는 모임입니다. 페이스는 자유롭고, 거리를 채우면 인증 가능합니다. 출석률 80% 이상이면 성공으로 인정해요."
  },
  attendance: {
    myStatus: [
      { day: 1, isCompleted: true, label: "1회차" },
      { day: 2, isCompleted: false, label: "2회차" },
      { day: 3, isCompleted: false, label: "3회차" },
      { day: 4, isCompleted: false, label: "4회차" },
      { day: 5, isCompleted: false, label: "5회차" },
    ],
    summary: {
      current: 10,
      total: 20
    },
    history: [
      { id: 1, user: "모래시계 빵야", date: "2026-03-01", avatar: "https://i.pravatar.cc/150?u=11" },
      { id: 2, user: "공부방 토끼", date: "2026-03-01", avatar: "https://i.pravatar.cc/150?u=12" },
      { id: 3, user: "새벽의 시간", date: "2026-02-28", avatar: "https://i.pravatar.cc/150?u=13" },
      { id: 4, user: "지치지 않는 체력", date: "2026-02-28", avatar: "https://i.pravatar.cc/150?u=14" },
    ]
  }
};
