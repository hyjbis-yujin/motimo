// 메인 페이지 구성에 필요한 mock 데이터 모음

export const CATEGORIES = [
  { id: 'c1', label: '공부', type: 'study' },
  { id: 'c2', label: '운동', type: 'exercise' },
  { id: 'c3', label: '습관', type: 'habit' },
  { id: 'c4', label: '취미', type: 'hobby' },
  { id: 'c5', label: '독서', type: 'reading' },
  { id: 'c6', label: '기타', type: 'etc' }
];

export const TOP_CARDS = {
  left: {
    id: 't1',
    title: '퇴근 후 스터디 1시간 하실 분',
    desc: '하루 1시간 꾸준한 습관 만들기',
    badge: 'D-12',
    participants: 50
  },
  right: {
    id: 't2',
    title: '6시 러닝 같이해요!',
    desc: '매주 2회 한강 러닝팟',
    badge: 'D-12',
    participants: 50
  }
};

export const FEED_CHALLENGES = [
  // 공부 (study)
  { id: 'f1', category: 'study', title: '매일 영단어 50개 외우기', desc: '어휘력 쑥쑥 습관', badge: 'D-12', participants: 34 },
  { id: 'f2', category: 'study', title: '코딩 문제 1일 1솔', desc: '꾸준한 알고리즘 공부', badge: '마감 2일전', participants: 12 },
  { id: 'f3', category: 'study', title: '자격증 기출 풀기', desc: '합격을 향한 매일 한 걸음', badge: 'D-30', participants: 45 },
  { id: 'f4', category: 'study', title: '경제 신문 읽고 요약', desc: '세상 돌아가는 눈 기르기', badge: '∞', participants: 88 },
  { id: 'f5', category: 'study', title: '하루 30분 일본어', desc: '가볍게 시작하는 외국어', badge: 'D-5', participants: 21 },
  { id: 'f6', category: 'study', title: '전공 서적 정독하기', desc: '깊이 있는 학습 시간', badge: '마감 임박', participants: 9 },
  { id: 'f7', category: 'study', title: '스터디 플래너 작성', desc: '계획적인 학습 습관', badge: '∞', participants: 156 },

  // 운동 (exercise)
  { id: 'f8', category: 'exercise', title: '매일 아침 7시 기상 러닝', desc: '상쾌한 공기 마시며 달리기', badge: 'D-10', participants: 50 },
  { id: 'f9', category: 'exercise', title: '스쿼트 100개 인증', desc: '탄탄한 하체 만들기', badge: '마감 1일전', participants: 120 },
  { id: 'f10', category: 'exercise', title: '식단 조절 & 몸무게 공유', desc: '함께하는 건강한 다이어트', badge: '∞', participants: 231 },
  { id: 'f11', category: 'exercise', title: '요가 20분 챌린지', desc: '유연한 몸과 마음', badge: 'D-7', participants: 42 },
  { id: 'f12', category: 'exercise', title: '플랭크 3분 버티기', desc: '코어 근육 강화 습관', badge: 'D-15', participants: 67 },
  { id: 'f13', category: 'exercise', title: '계단 오르기 인증', desc: '일상 속 작은 운동', badge: '∞', participants: 89 },

  // 습관 (habit)
  { id: 'f14', category: 'habit', title: '하루 물 2L 마시기', desc: '건강한 데일리 수분 섭취', badge: '∞', participants: 120 },
  { id: 'f15', category: 'habit', title: '미라클 모닝 6시 기상', desc: '남들보다 이른 하루 시작', badge: 'D-3', participants: 340 },
  { id: 'f16', category: 'habit', title: '이부자리 정리하기', desc: '성공하는 사람들의 작은 습관', badge: '∞', participants: 512 },
  { id: 'f17', category: 'habit', title: '영양제 챙겨 먹기', desc: '나를 아끼는 매일 루틴', badge: 'D-20', participants: 95 },
  { id: 'f18', category: 'habit', title: '감사 일기 3줄 쓰기', desc: '긍정적인 마음 가지기', badge: '∞', participants: 187 },
  { id: 'f19', category: 'habit', title: '스마트폰 사용 줄이기', desc: '디지털 디톡스 실천', badge: 'D-14', participants: 46 },

  // 취미 (hobby)
  { id: 'f20', category: 'hobby', title: '드로잉 한 컷 공유', desc: '일상의 순간을 그림으로', badge: '∞', participants: 15 },
  { id: 'f21', category: 'hobby', title: '필사 한 페이지', desc: '마음이 차분해지는 필사', badge: 'D-10', participants: 28 },
  { id: 'f22', category: 'hobby', title: '식물 물 주기 인증', desc: '반려식물과 함께하는 삶', badge: 'D-5', participants: 63 },
  { id: 'f23', category: 'hobby', title: '홈카페 레시피 시도', desc: '나만의 작은 공간 아틀리에', badge: '∞', participants: 41 },
  { id: 'f25', category: 'hobby', title: '매주 영화 한 편 감상', desc: '기록으로 남기는 취향', badge: 'D-40', participants: 72 },
  { id: 'f26', category: 'hobby', title: '수공예 작품 만들기', desc: '손 끝에서 탄생하는 힐링', badge: '마감 직전', participants: 8 },

  // 독서 (reading)
  { id: 'f27', category: 'reading', title: '자기 전 책 10페이지', desc: '차분한 밤 독서 습관', badge: 'D-5', participants: 15 },
  { id: 'f28', category: 'reading', title: '베스트셀러 독파', desc: '이 달의 화제 도서 읽기', badge: '∞', participants: 300 },
  { id: 'f29', category: 'reading', title: '독찰 노트 작성하기', desc: '생각을 정리하는 기록법', badge: 'D-12', participants: 24 },
  { id: 'f30', category: 'reading', title: '고전 문학 읽기', desc: '시대를 관통하는 지혜', badge: '마감 5일전', participants: 11 },
  { id: 'f31', category: 'reading', title: '오디오북 청취 인증', desc: '바쁜 일상 속의 지식', badge: '∞', participants: 150 },
  { id: 'f32', category: 'reading', title: '독서 모임 후기 공유', desc: '함께 나누는 독서의 즐거움', badge: 'D-2', participants: 5 },

  // 기타 (etc)
  { id: 'f33', category: 'etc', title: '가계부 쓰기', desc: '똑똑한 소비 생활', badge: '∞', participants: 210 },
  { id: 'f34', category: 'etc', title: '플로깅 실천하기', desc: '지구를 위한 작은 실천', badge: 'D-8', participants: 18 },
  { id: 'f35', category: 'etc', title: '반려견 산책 인증', desc: '소중한 가족과 함께', badge: '∞', participants: 420 },
  { id: 'f36', category: 'etc', title: '불필요한 메일 삭제', desc: '탄소 배출 줄이기', badge: 'D-1', participants: 56 },
  { id: 'f37', category: 'etc', title: '재활용 분리배출', desc: '환경을 지키는 올바른 습관', badge: '∞', participants: 332 },
  { id: 'f38', category: 'etc', title: '로또 희망 회로 돌리기', desc: '일주일의 소소한 즐거움', badge: 'D-7', participants: 999 }
];

export const POPULAR_CHALLENGES = [
  {
    id: 'p1',
    title: '6시 러닝 같이해요!',
    desc: '성실한 러너 모집',
    badge: 'D-12',
    participants: 50
  },
  {
    id: 'p2',
    title: '퇴근 후 블로그 쓰기',
    desc: '주 3회 IT 블로그',
    badge: '마감 임박',
    participants: 80
  },
  {
    id: 'p3',
    title: '자기 전 책 10페이지',
    desc: '차분한 밤 독서',
    badge: 'D-5',
    participants: 15
  }
];

export const RECOMMENDED_CHALLENGE = {
  id: 'r1',
  title: '매일 영어 한 문장 쓰기',
  currentInfo: '참여인원 5/6',
  buttonText: '참여하기'
};

export const USER_INFO = {
  name: '호박구고마님',
  challengesCount: 5
};
