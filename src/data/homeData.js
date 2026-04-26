export const TOP_CARDS = {
  left: {
    id: 't1',
    imageUrl: 'https://images.unsplash.com/photo-1516321312425-f53830df5274?q=80&w=1080&fit=crop',
    title: '나만의 기상 시간 루틴',
    desc: '아침 7시의 기적 기록',
    badge: 'D-3',
    participants: 45,
    totalDays: 30,
    info: {
      capacity: '인원 100명',
      period: '기간 30일간',
      detailBody: '매일 아침 7시 이전에 기상하여 활기찬 하루를 시작하는 습관을 만듭니다.'
    }
  },
  right: {
    id: 't2',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1080&fit=crop',
    title: '하루 한 권, 독서 습관',
    desc: '사소한 독서의 힘',
    badge: 'D-7',
    participants: 32,
    totalDays: 60,
    info: {
      capacity: '인원 80명',
      period: '기간 60일간',
      detailBody: '바쁜 일상 속에서 책 한 페이지를 읽는 여유를 가집니다.'
    }
  }
};

export const FEED_CHALLENGES = [
  // 공부 (study) - 5개
  { id: 'f1', category: 'study', title: '토익 만점 도전!', desc: '매일 단어 50개 암기', badge: 'D-15', participants: 42, imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 50명', period: '기간 30일간', detailBody: '토익 필수 단어를 매일 50개씩 학습합니다.' } },
  { id: 'f2', category: 'study', title: '하루 한 시간 코딩', desc: '알고리즘 1일 1문제', badge: 'D-5', participants: 65, imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&fit=crop', totalDays: 15, info: { capacity: '인원 100명', period: '기간 15일간', detailBody: '매일 알고리즘 문제를 해결합니다.' } },
  { id: 'f3', category: 'study', title: '경제 신문 읽기', desc: '세상의 흐름 파악', badge: 'D-10', participants: 53, imageUrl: 'https://images.unsplash.com/photo-1504711484919-48a9a0ea3b00?q=80&w=800&fit=crop', totalDays: 60, info: { capacity: '인원 60명', period: '기간 60일간', detailBody: '경제 기사를 읽고 요약합니다.' } },
  { id: 'f19', category: 'study', title: '영문 기사 필사', desc: '고급 영어 표현 익히기', badge: 'D-3', participants: 24, imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&fit=crop', totalDays: 14, info: { capacity: '인원 30명', period: '기간 14일간', detailBody: '해외 주요 뉴스를 필사하며 실력을 키웁니다.' } },
  { id: 'f20', category: 'study', title: '자격증 뽀개기', desc: '목표 달성을 위한 전력질주', badge: 'D-22', participants: 37, imageUrl: 'https://images.unsplash.com/photo-1454165833767-1234b125f121?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 50명', period: '기간 30일간', detailBody: '계획대로 하루 공부량을 채우고 인증합니다.' } },

  // 운동 (exercise) - 5개
  { id: 'f7', category: 'exercise', title: '매일 아침 조깅', desc: '3km 달리기 인증', badge: 'D-2', participants: 88, imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&fit=crop', totalDays: 14, info: { capacity: '인원 100명', period: '기간 14일간', detailBody: '상쾌한 아침 공기를 마시며 달립니다.' } },
  { id: 'f8', category: 'exercise', title: '홈트 30분 챌린지', desc: '전신 근력 강화하기', badge: 'D-8', participants: 120, imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&fit=crop', totalDays: 20, info: { capacity: '인원 100명', period: '기간 20일간', detailBody: '집에서 전신 운동을 진행합니다.' } },
  { id: 'f9', category: 'exercise', title: '저녁 스트레칭', desc: '유연한 몸을 위해서', badge: 'D-1', participants: 45, imageUrl: 'https://images.unsplash.com/photo-1518611012118-2960c8bad94a?q=80&w=800&fit=crop', totalDays: 10, info: { capacity: '인원 60명', period: '기간 10일간', detailBody: '하루의 피로를 푸는 스트레칭을 합니다.' } },
  { id: 'f21', category: 'exercise', title: '스쿼트 100개', desc: '탄탄한 하체를 위해', badge: 'D-14', participants: 72, imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 80명', period: '기간 30일간', detailBody: '매일 스쿼트 100개를 실천합니다.' } },
  { id: 'f22', category: 'exercise', title: '플랭크 3분 버티기', desc: '코어 근력의 완성', badge: 'D-6', participants: 50, imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&fit=crop', totalDays: 15, info: { capacity: '인원 50명', period: '기간 15일간', detailBody: '강력한 코어를 위해 플랭크에 도전합니다.' } },

  // 습관 (habit) - 5개
  { id: 'f10', category: 'habit', title: '물 2L 마시기', desc: '건강을 위한 수분 충전', badge: 'D-12', participants: 92, imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf3d?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '충분한 수분 섭취를 습관화합니다.' } },
  { id: 'f11', category: 'habit', title: '미라클 모닝 6시', desc: '아침 시간을 내 것으로', badge: 'D-3', participants: 55, imageUrl: 'https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=800&fit=crop', totalDays: 21, info: { capacity: '인원 80명', period: '기간 21일간', detailBody: '이른 아침 시간을 효율적으로 사용합니다.' } },
  { id: 'f12', category: 'habit', title: '감사 일기 쓰기', desc: '매일 3가지 기록', badge: 'D-9', participants: 38, imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&fit=crop', totalDays: 50, info: { capacity: '인원 40명', period: '기간 50일간', detailBody: '감사한 마음을 기록하며 긍정 에너지를 채웁니다.' } },
  { id: 'f23', category: 'habit', title: '영양제 챙겨먹기', desc: '내 몸을 위한 작은 약속', badge: 'D-Day', participants: 64, imageUrl: 'https://images.unsplash.com/photo-1550573104-4eb0429398d2?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '깜빡하기 쉬운 영양제 섭취를 인증합니다.' } },
  { id: 'f24', category: 'habit', title: '하루 1km 걷기', desc: '걷기의 즐거움', badge: 'D-5', participants: 110, imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 150명', period: '기간 30일간', detailBody: '가까운 거리는 걸어 다니며 건강을 챙깁니다.' } },

  // 취미 (hobby) - 5개
  { id: 'f13', category: 'hobby', title: '하루 한 장 드로잉', desc: '나만의 그림 기록', badge: 'D-5', participants: 24, imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 30명', period: '기간 30일간', detailBody: '사물을 스케치하며 예술 감각을 키웁니다.' } },
  { id: 'f14', category: 'hobby', title: '요리 레시피 도전', desc: '새로운 요리 배우기', badge: 'D-11', participants: 15, imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&fit=crop', totalDays: 7, info: { capacity: '인원 20명', period: '기간 7일간', detailBody: '새로운 요리를 시도하고 기록합니다.' } },
  { id: 'f25', category: 'hobby', title: '우쿨렐레 연주', desc: '음악이 있는 일상', badge: 'D-20', participants: 10, imageUrl: 'https://images.unsplash.com/photo-1549421263-ce20516629ec?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 15명', period: '기간 30일간', detailBody: '한 곡을 완주하기 위해 매일 연습합니다.' } },
  { id: 'f26', category: 'hobby', title: '필름 사진 일기', desc: '찰나의 순간 기록', badge: 'D-8', participants: 18, imageUrl: 'https://images.unsplash.com/photo-1495121553079-4c61bb69cf31?q=80&w=800&fit=crop', totalDays: 14, info: { capacity: '인원 20명', period: '기간 14일간', detailBody: '필름 카메라로 담은 풍경을 공유합니다.' } },
  { id: 'f27', category: 'hobby', title: '카페 투어 기록', desc: '맛과 감성 찾기', badge: 'D-2', participants: 35, imageUrl: 'https://images.unsplash.com/photo-1501339819358-ee83afe5bb66?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 50명', period: '기간 30일간', detailBody: '멋진 공간과 맛있는 커피를 기록합니다.' } },

  // 독서 (reading) - 5개
  { id: 'f15', category: 'reading', title: '베스트셀러 정독', desc: '한 달에 두 권 읽기', badge: 'D-Day', participants: 48, imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '화제의 책을 읽고 생각을 나눕니다.' } },
  { id: 'f16', category: 'reading', title: '시 한 편 필사하기', desc: '문학의 향기 만끽', badge: 'D-6', participants: 12, imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&fit=crop', totalDays: 14, info: { capacity: '인원 40명', period: '기간 14일간', detailBody: '시를 손으로 쓰며 여유를 찾습니다.' } },
  { id: 'f28', category: 'reading', title: '인문학 깊게 읽기', desc: '나를 돌아보는 시간', badge: 'D-15', participants: 25, imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&fit=crop', totalDays: 60, info: { capacity: '인원 30명', period: '기간 60일간', detailBody: '어려운 인문학 서적을 함께 읽어갑니다.' } },
  { id: 'f29', category: 'reading', title: '북클럽 토론 참여', desc: '함께 읽고 평점 주기', badge: 'D-4', participants: 15, imageUrl: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 15명', period: '기간 30일간', detailBody: '매주 한 번 온라인으로 독서 토론을 합니다.' } },
  { id: 'f30', category: 'reading', title: '전자책 뽀개기', desc: '언제 어디서나 독서', badge: 'D-10', participants: 40, imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&fit=crop', totalDays: 20, info: { capacity: '인원 50명', period: '기간 20일간', detailBody: '스마트폰이나 리더기로 독서를 완성합니다.' } },

  // 기타 (etc) - 5개
  { id: 'f17', category: 'etc', title: '식물 물 주기', desc: '반려 식물 키우기', badge: 'D-1', participants: 33, imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&fit=crop', totalDays: 60, info: { capacity: '인원 100명', period: '기간 60일간', detailBody: '식물이 건강하게 자라도록 돌봅니다.' } },
  { id: 'f18', category: 'etc', title: '하루 10분 명상', desc: '마음의 평화 찾기', badge: 'D-9', participants: 50, imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '명상으로 현재에 집중하는 습관을 들입니다.' } },
  { id: 'f31', category: 'etc', title: '하루 한 번 하늘 보기', desc: '일상의 작은 쉼표', badge: 'D-3', participants: 85, imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&fit=crop', totalDays: 10, info: { capacity: '인원 200명', period: '기간 10일간', detailBody: '바쁜 하늘을 잠시 올려다보는 여유를 가집니다.' } },
  { id: 'f32', category: 'etc', title: '디지털 디톡스', desc: '스마트폰 멀리하기', badge: 'D-Day', participants: 28, imageUrl: 'https://images.unsplash.com/photo-1511296265581-c245004440b4?q=80&w=800&fit=crop', totalDays: 7, info: { capacity: '인원 30명', period: '기간 7일간', detailBody: '취침 1시간 전 스마트폰 사용을 제한합니다.' } },
  { id: 'f33', category: 'etc', title: '분리수거 철저히', desc: '지구를 위한 한 걸음', badge: 'D-5', participants: 55, imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&fit=crop', totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '환경 보호를 위해 올바른 배출을 인증합니다.' } }
];

export const POPULAR_CHALLENGES = [
  { id: 'p1', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1080&fit=crop', title: '나만의 명상 시간', desc: '마음 챙김 습관', badge: 'D-12', participants: 90, totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '매일 10분간 명상을 진행합니다.' } },
  { id: 'p2', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1080&fit=crop', title: '매일 아침 요가', desc: '유연한 하루 시작', badge: 'D-5', participants: 120, totalDays: 20, info: { capacity: '인원 100명', period: '기간 20일간', detailBody: '가벼운 동작으로 몸을 깨웁니다.' } },
  { id: 'p3', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1080&fit=crop', title: '균형 잡힌 식단', desc: '건강 식단 기록', badge: 'D-20', participants: 75, totalDays: 60, info: { capacity: '인원 100명', period: '기간 60일간', detailBody: '건강한 식사를 기록합니다.' } },
  { id: 'p4', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1080&fit=crop', title: '주말 자원봉사', desc: '의미 있는 활동', badge: 'D-2', participants: 30, totalDays: 14, info: { capacity: '인원 100명', period: '기간 14일간', detailBody: '주말 봉사활동에 참여합니다.' } },
  { id: 'p5', imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1080&fit=crop', title: '미니멀 라이프', desc: '하루 하나 비우기', badge: 'D-15', participants: 60, totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '필요 없는 물건을 비웁니다.' } },
  { id: 'p6', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1080&fit=crop', title: '하루 물 2L', desc: '건강한 수분 보충', badge: 'D-10', participants: 40, totalDays: 30, info: { capacity: '인원 100명', period: '기간 30일간', detailBody: '충분한 수분 섭취를 인증합니다.' } }
];

export const RECOMMENDED_CHALLENGE = {
  id: 'r1',
  title: '매일 영어 한 문장 외우기',
  currentInfo: '참여인원 5/6',
  buttonText: '참여하기',
  imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1080&fit=crop',
  totalDays: 14,
  info: {
    capacity: '인원 6명',
    period: '기간 14일간',
    detailBody: '원어민이 자주 쓰는 필수 영어 회화 문장을 매일 하나씩 완벽하게 암송합니다.'
  }
};
