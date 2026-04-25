/**
 * 프로젝트 전역에서 공통으로 사용하는 상수 정의
 */

export const CATEGORIES = [
  { id: 'c1', label: '공부', type: 'study' },
  { id: 'c2', label: '운동', type: 'exercise' },
  { id: 'c3', label: '습관', type: 'habit' },
  { id: 'c4', label: '취미', type: 'hobby' },
  { id: 'c5', label: '독서', type: 'reading' },
  { id: 'c6', label: '기타', type: 'etc' }
];

export const TABS = [
  { name: '홈', path: '/', icon: 'tab-home' },
  { name: '글쓰기', path: '/write', icon: 'tab-write' },
  { name: '마이', path: '/my', icon: 'tab-my' }
];
