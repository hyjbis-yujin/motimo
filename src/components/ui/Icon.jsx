import React from 'react';

// Profile Icons
import avatarDefault from '../../assets/images/profiles/avatar-default.svg';

// 1. Action Icons
import iconActionBack from '../../assets/icons/action-back.svg';
import iconActionClose from '../../assets/icons/action-close.svg';
import actionHeart from '../../assets/icons/action-heart.svg';
import actionHeartActive from '../../assets/icons/action-heart-active.svg';
import actionHelp from '../../assets/icons/action-help.svg';

// 2. Header Icons
import headerBack from '../../assets/icons/header-back.svg';
import headerNotification from '../../assets/icons/header-notification.svg';
import headerLogo from '../../assets/icons/header-logo.svg';
import iconHeaderSearch from '../../assets/icons/header-search.svg';

// 3. Notification & Status Icons
import notifItem from '../../assets/icons/notif-item.svg';
import notifItemActive from '../../assets/icons/notif-item-active.svg';
import notifEmpty from '../../assets/icons/notif-empty.svg';
import notifNotJoined from '../../assets/icons/notif-notjoined.svg';
import notifLogin from '../../assets/icons/notif-login.svg';
import serviceSoon from '../../assets/icons/service-soon.svg';
import sectionHot from '../../assets/icons/section-hot.svg';

// 4. Attendance Icons
import attendanceBg from '../../assets/icons/attendance-bg-inactive.svg';
import attendanceBgActive from '../../assets/icons/attendance-bg-active.svg';
import attendanceCheck from '../../assets/icons/attendance-check-inactive.svg';
import attendanceCheckActive from '../../assets/icons/attendance-check-active.svg';
import attendanceSummary from '../../assets/icons/attendance-summary.svg';

// 5. Navigation Icons
import tabHome from '../../assets/icons/tab-home.svg';
import tabHomeActive from '../../assets/icons/tab-home-active.svg';
import tabWrite from '../../assets/icons/tab-write.svg';
import tabWriteActive from '../../assets/icons/tab-write-active.svg';
import tabMy from '../../assets/icons/tab-my.svg';
import tabMyActive from '../../assets/icons/tab-my-active.svg';

// 6. Challenge Status Icons
import statusCheck from '../../assets/icons/status-check.svg';
import statusCheckActive from '../../assets/icons/status-check-active.svg';
import statusParticipants from '../../assets/icons/status-participants.svg';
import statusFlag from '../../assets/icons/status-flag.svg';
import statusCapacity from '../../assets/icons/status-capacity.svg';
import statusPeriod from '../../assets/icons/status-period.svg';

// 7. Category Icons
import categoryStudy from '../../assets/icons/category-study.svg';
import categoryExercise from '../../assets/icons/category-exercise.svg';
import categoryHabit from '../../assets/icons/category-habit.svg';
import categoryReading from '../../assets/icons/category-reading.svg';
import categoryHobby from '../../assets/icons/category-hobby.svg';
import categoryEtc from '../../assets/icons/category-etc.svg';

/**
 * 아이콘 식별자와 실제 에셋 파일을 매핑합니다.
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
  'profile-default': avatarDefault,

  // Notification & Feedback
  'notif-bell': headerNotification,
  'notif-item': notifItem,
  'notif-item-active': notifItemActive,
  'notif-empty': notifEmpty,
  'notif-notjoined': notifNotJoined,
  'notif-login': notifLogin,
  'service-soon': serviceSoon,
  'section-hot': sectionHot,

  // Attendance
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

  // Status & Detail
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
 * 아이콘별 기본 가시성 사이즈를 정의합니다.
 */
const ICON_SIZE = {
  'header-logo': { w: 120, h: 20 },
  'header-search': { w: 20, h: 'auto' },
  'header-notification': { w: 20, h: 'auto' },
  'header-back': { w: 20, h: 20 },
  'notif-login': { w: 30, h: 32 },
  'notif-notjoined': { w: 30, h: 34 },
  'notif-empty': { w: 32, h: 32 },
  'service-soon': { w: 30, h: 31 },
  'action-heart': { w: 19, h: 17 },
  'action-help': { w: 16, h: 16 },
  'status-participants': { w: 18, h: 13 },
  'category-exercise': { w: 23, h: 23 },
  'attendance-bg': { w: 66, h: 66 },
};

/**
 * 범용 아이콘 컴포넌트
 */
export default function Icon({ name, src, active = false, className, width, height, style }) {
  const iconName = active ? `${name}-active` : name;
  const SvgIcon = src || ICON_MAP[iconName] || ICON_MAP[name];

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
