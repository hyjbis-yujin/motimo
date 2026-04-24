import React from 'react';
import { cn } from '../../utils/cn';

// 아이콘 자산 임포트
import headerLogo from '../../assets/icons/header-logo.svg';
import headerSearch from '../../assets/icons/header-search.svg';
import headerNotification from '../../assets/icons/header-notification.svg';

import tabHome from '../../assets/icons/tab-home.svg';
import tabHomeActive from '../../assets/icons/tab-home-active.svg';
import tabWrite from '../../assets/icons/tab-write.svg';
import tabWriteActive from '../../assets/icons/tab-write-active.svg';
import tabMy from '../../assets/icons/tab-my.svg';
import tabMyActive from '../../assets/icons/tab-my-active.svg';

import categoryStudy from '../../assets/icons/category-study.svg';
import categoryExercise from '../../assets/icons/category-exercise.svg';
import categoryHabit from '../../assets/icons/category-habit.svg';
import categoryHobby from '../../assets/icons/category-hobby.svg';
import categoryReading from '../../assets/icons/category-reading.svg';
import categoryEtc from '../../assets/icons/category-etc.svg';

import actionBack from '../../assets/icons/action-back.svg';
import actionHeart from '../../assets/icons/action-heart.svg';
import actionHeartActive from '../../assets/icons/action-heart-active.svg';

import statusParticipants from '../../assets/icons/status-participants.svg';
import statusCheck from '../../assets/icons/status-check.svg';
import statusCheckActive from '../../assets/icons/status-check-active.svg';
import statusFlag from '../../assets/icons/status-flag.svg';
import statusCapacity from '../../assets/icons/status-capacity.svg';
import statusPeriod from '../../assets/icons/status-period.svg';
import actionHelp from '../../assets/icons/action-help.svg';

import sectionHot from '../../assets/icons/section-hot.svg';

const ICON_MAP = {
  // Header
  'header-logo': headerLogo,
  'header-search': headerSearch,
  'header-notification': headerNotification,
  
  // Tab Bar
  'tab-home': tabHome,
  'tab-home-active': tabHomeActive,
  'tab-write': tabWrite,
  'tab-write-active': tabWriteActive,
  'tab-my': tabMy,
  'tab-my-active': tabMyActive,
  
  // Categories
  'category-study': categoryStudy,
  'category-exercise': categoryExercise,
  'category-habit': categoryHabit,
  'category-hobby': categoryHobby,
  'category-reading': categoryReading,
  'category-etc': categoryEtc,
  
  // Actions
  'action-back': actionBack,
  'action-heart': actionHeart,
  'action-heart-active': actionHeartActive,
  'action-help': actionHelp,
  
  // Status
  'status-participants': statusParticipants,
  'status-check': statusCheck,
  'status-check-active': statusCheckActive,
  'status-flag': statusFlag,
  'status-capacity': statusCapacity,
  'status-period': statusPeriod,

  // Sections
  'section-hot': sectionHot,
};

// 아이콘별 원본 디자인 사이즈 (SVG 기준)
const NATURAL_SIZES = {
  'header-logo': { w: 120, h: 20 },
  'header-search': { w: 20, h: 21 },
  'header-notification': { w: 19, h: 23 },
  'tab-home': { w: 17, h: 20 },
  'tab-write': { w: 20, h: 20 },
  'tab-my': { w: 18, h: 20 },
  'action-back': { w: 14, h: 24 },
  'action-heart': { w: 19, h: 17 },
  'action-help': { w: 16, h: 16 },
  'status-participants': { w: 18, h: 13 },
  'category-study': { w: 20, h: 20 },
  'category-exercise': { w: 26, h: 20 },
  'category-habit': { w: 22, h: 22 },
  'category-hobby': { w: 21, h: 21 },
  'category-reading': { w: 18, h: 20 },
  'category-etc': { w: 20, h: 20 },
  'section-hot': { w: 18, h: 21 },
  'status-check': { w: 26, h: 26 },
  'status-flag': { w: 23, h: 23 },
  'status-capacity': { w: 16, h: 16 },
  'status-period': { w: 16, h: 16 },
};

/**
 * 프로젝트 공통 아이콘 컴포넌트
 * @param {string} name - 아이콘 식별자
 * @param {string} className - 추가 스타일
 * @param {boolean} active - 활성화 상태 여부
 */
export default function Icon({ name, className, active = false, ariaHidden = true }) {
  const iconName = active && ICON_MAP[`${name}-active`] ? `${name}-active` : name;
  const src = ICON_MAP[iconName];

  // 활성/비활성 상태와 상관없이 동일한 사이즈 적용을 위해 원본 이름 추출
  const baseName = name.replace('-active', '');
  const naturalSize = NATURAL_SIZES[baseName] || NATURAL_SIZES[name];

  const style = naturalSize ? {
    width: `${naturalSize.w}px`,
    height: `${naturalSize.h}px`,
  } : undefined;

  if (!src) {
    console.warn(`Icon "${iconName}" not found in ICON_MAP`);
    return <div className={cn("bg-gray-200 rounded-sm", className)} style={style} />;
  }

  return (
    <img 
      src={src} 
      alt="" 
      aria-hidden={ariaHidden}
      className={cn("select-none object-contain flex-shrink-0", className)}
      style={style}
      draggable={false}
    />
  );
}
