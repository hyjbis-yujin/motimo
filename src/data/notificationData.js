/**
 * 알림 페이지의 목업 데이터
 */
export const NOTIFICATIONS = [
  {
    id: 1,
    type: 'alert',
    title: '챌린지 시작 안내',
    message: '내일 아침 6시 러닝 챌린지가 시작됩니다. 준비되셨나요?',
    time: '2시간 전',
    isUnread: true,
  },
  {
    id: 2,
    type: 'info',
    title: '새 추천 챌린지',
    message: '관심사에 맞는 새로운 독서 챌린지가 등록되었어요.',
    time: '5시간 전',
    isUnread: true,
  },
  {
    id: 3,
    type: 'praise',
    title: '참여 완료!',
    message: '오늘 하루 물 2L 마시기 성공! 10포인트가 적립되었습니다.',
    time: '어제',
    isUnread: false,
  },
  {
    id: 4,
    type: 'alert',
    title: '챌린지 마감 임박',
    message: '함께하는 미라클 모닝 챌린지 신청이 오늘 마감됩니다.',
    time: '2일 전',
    isUnread: false,
  }
];
