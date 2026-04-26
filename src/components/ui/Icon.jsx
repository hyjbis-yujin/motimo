import React from 'react';
import iconActionBack from '../../assets/icons/action-back.svg';
import iconActionClose from '../../assets/icons/action-close.svg';
import iconHeaderSearch from '../../assets/icons/header-search.svg';
import headerBack from '../../assets/icons/header-back.svg';
import headerNotification from '../../assets/icons/header-notification.svg';
import headerLogo from '../../assets/icons/header-logo.svg';

import notifItem from '../../assets/icons/notif-item.svg';
import notifItemActive from '../../assets/icons/notif-item-active.svg';
import notifEmpty from '../../assets/icons/notif-empty.svg';
import notifNotJoined from '../../assets/icons/notif-notjoined.svg';
import notifLogin from '../../assets/icons/notif-login.svg';
import serviceSoon from '../../assets/icons/service-soon.svg';

import attendanceBg from '../../assets/icons/attendance-bg-inactive.svg';
import attendanceBgActive from '../../assets/icons/attendance-bg-active.svg';
import attendanceCheck from '../../assets/icons/attendance-check-inactive.svg';
import attendanceCheckActive from '../../assets/icons/attendance-check-active.svg';
import attendanceSummary from '../../assets/icons/attendance-summary.svg';

import tabHome from '../../assets/icons/tab-home.svg';
import tabHomeActive from '../../assets/icons/tab-home-active.svg';
import tabWrite from '../../assets/icons/tab-write.svg';
import tabWriteActive from '../../assets/icons/tab-write-active.svg';
import tabMy from '../../assets/icons/tab-my.svg';
import tabMyActive from '../../assets/icons/tab-my-active.svg';

import statusCheck from '../../assets/icons/status-check.svg';
import statusCheckActive from '../../assets/icons/status-check-active.svg';
import statusParticipants from '../../assets/icons/status-participants.svg';
import statusFlag from '../../assets/icons/status-flag.svg';
import statusCapacity from '../../assets/icons/status-capacity.svg';
import statusPeriod from '../../assets/icons/status-period.svg';

import categoryStudy from '../../assets/icons/category-study.svg';
import categoryExercise from '../../assets/icons/category-exercise.svg';
import categoryHabit from '../../assets/icons/category-habit.svg';
import categoryReading from '../../assets/icons/category-reading.svg';
import categoryHobby from '../../assets/icons/category-hobby.svg';
import categoryEtc from '../../assets/icons/category-etc.svg';

import actionHeart from '../../assets/icons/action-heart.svg';
import actionHeartActive from '../../assets/icons/action-heart-active.svg';
import actionHelp from '../../assets/icons/action-help.svg';

/**
 * 아이콘 맵 - 실제 에셋 파일명과 1:1 매핑
 */
const ICON_MAP = {
  'arrow-left': iconActionBack,
  'header-back': headerBack,
  'header-logo': headerLogo,
  'header-search': iconHeaderSearch,
  'header-notification': headerNotification,
  'close': iconActionClose,
  'action-close': iconActionClose,
  'search': iconHeaderSearch,

  // Notification & Empty State
  'notif-bell': headerNotification,
  'notif-item': notifItem,
  'notif-item-active': notifItemActive,
  'notif-empty': notifEmpty,
  'notif-notjoined': notifNotJoined,
  'notif-login': notifLogin,
  'service-soon': serviceSoon,

  'attendance-bg': attendanceBg,
  'attendance-bg-active': attendanceBgActive,
  'attendance-check': attendanceCheck,
  'attendance-check-active': attendanceCheckActive,
  'attendance-summary': attendanceSummary,

  // Tab Bar
  'tab-home': tabHome,
  'tab-home-active': tabHomeActive,
  'tab-search': iconHeaderSearch,
  'tab-write': tabWrite,
  'tab-write-active': tabWriteActive,
  'tab-notif': headerNotification,
  'tab-my': tabMy,
  'tab-my-active': tabMyActive,

  // Status & Info
  'status-check': statusCheck,
  'status-check-active': statusCheckActive,
  'status-participants': statusParticipants,
  'status-flag': statusFlag,
  'status-capacity': statusCapacity,
  'status-period': statusPeriod,

  // Category
  'category-study': categoryStudy,
  'category-exercise': categoryExercise,
  'category-habit': categoryHabit,
  'category-reading': categoryReading,
  'category-hobby': categoryHobby,
  'category-etc': categoryEtc,

  // Action
  'action-heart': actionHeart,
  'action-heart-active': actionHeartActive,
  'action-help': actionHelp,
};

/**
 * 아이콘별 권장 사이즈 정의 (원본 사이즈 유지)
 */
const ICON_SIZE = {
  'arrow-left': { w: 24, h: 24 },
  'header-logo': { w: 120, h: 20 },
  'header-search': { w: 20, h: 'auto' },
  'header-notification': { w: 20, h: 'auto' },
  'close': { w: 24, h: 24 },
  'header-back': { w: 20, h: 20 },
  
  // Notification & Empty States (사용자 제공 원본 사이즈)
  'notif-login': { w: 30, h: 32 },
  'notif-notjoined': { w: 30, h: 34 },
  'notif-empty': { w: 32, h: 32 },
  'service-soon': { w: 30, h: 31 },

  'notif-item': { w: 40, h: 40 },
  'notif-item-active': { w: 40, h: 40 },
  'action-heart': { w: 19, h: 17 },
  'action-help': { w: 16, h: 16 },
  'status-participants': { w: 18, h: 13 },
  'attendance-bg': { w: 66, h: 66 },
  'attendance-check': { w: 20, h: 16 },
  'attendance-summary': { w: 22, h: 22 },
  
  // Category
  'category-study': { w: 20, h: 20 },
  'category-exercise': { w: 26, h: 20 },
  'category-habit': { w: 22, h: 22 },
  'category-reading': { w: 20, h: 20 },
  'category-hobby': { w: 22, h: 22 },
  'category-etc': { w: 22, h: 22 },
  
  // Status
  'status-check': { w: 20, h: 20 },
  'status-flag': { w: 20, h: 20 },
  'status-capacity': { w: 18, h: 18 },
  'status-period': { w: 18, h: 18 },

  // Tab Bar
  'tab-home': { w: 20, h: 'auto' },
  'tab-write': { w: 20, h: 20 },
  'tab-my': { w: 20, h: 20 },
};

export default function Icon({ name, active = false, className, width, height, style }) {
  const iconName = active ? `${name}-active` : name;
  const SvgIcon = ICON_MAP[iconName] || ICON_MAP[name];

  if (!SvgIcon) return null;

  const defaultSize = ICON_SIZE[name] || { w: 20, h: 20 };

  const hasWidthClass = className && /\bw-/.test(className);
  const hasHeightClass = className && /\bh-/.test(className);

  const w = width || (hasWidthClass ? undefined : defaultSize.w);
  const h = height || (hasHeightClass ? undefined : defaultSize.h);

  return (
    <img
      src={SvgIcon}
      alt=""
      className={className}
      style={{
        width: typeof w === 'number' ? `${w}px` : w,
        height: typeof h === 'number' ? `${h}px` : h,
        ...style
      }}
    />
  );
}
