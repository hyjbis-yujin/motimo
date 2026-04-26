import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../../components/layout/MobileContainer';
import Icon from '../../components/ui/Icon';
import EmptyState from '../../components/ui/EmptyState';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';
import { useNotificationStore } from '../../store/useNotificationStore';

const EMPTY_ARRAY = [];

/**
 * 알림 페이지 메인 컴포넌트
 */
export default function NotificationPage() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const notifications = useNotificationStore(state => state.notifications || EMPTY_ARRAY);
  const markAllAsRead = useNotificationStore(state => state.markAllAsRead);

  // 페이지 진입 시 모든 알림을 "확인 완료" 처리
  useEffect(() => {
    if (isLoggedIn && notifications.length > 0) {
      markAllAsRead();
    }
  }, [isLoggedIn, markAllAsRead]);

  return (
    <MobileContainer
      showHeader={false}
      showTabBar={true}
      className="bg-bg-subtle"
      /* 최상위 여백을 제거하고 flex 구조로 변경, 내부 스크롤을 위해 overflow-hidden 적용 */
      mainClassName="pt-0 pb-0 flex flex-col h-full overflow-hidden"
    >
      {/* 1. 고정 헤더 (flex-shrink-0) */}
      <header className="bg-white h-header flex items-center px-layout-x border-none shadow-none flex-shrink-0 z-30">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text-dark active:opacity-50 transition-opacity cursor-pointer"
          aria-label="뒤로가기"
        >
          <Icon name="header-back" className="!w-[10px] !h-[22px]" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-text-dark tracking-tight">
          알림
        </h1>
      </header>

      {/* 2. 내부 스크롤 알림 리스트 영역 (flex-1 overflow-y-auto) */}
      <div className={cn(
        "flex-1 overflow-y-auto hide-native-scrollbar px-layout-x pt-6 flex flex-col gap-4 pb-32",
        (!isLoggedIn || notifications.length === 0) ? "justify-center pt-0 pb-0" : ""
      )}>
        {!isLoggedIn ? (
          <EmptyState 
            iconName="notif-login"
            title="로그인이 필요해요"
            description="로그인 후 알림을 확인할 수 있어요."
            actionLabel="로그인하러 가기"
            actionTo="/login"
            className="pb-10"
          />
        ) : notifications.length > 0 ? (
          notifications.map((notif) => (
            <NotificationCard key={notif.id} notif={notif} />
          ))
        ) : (
          <EmptyState 
            iconName="notif-empty"
            title="알림창이 비어있어요"
            description={`중요한 소식이나 새로운 챌린지 알림을\n가장 먼저 보내드릴게요`}
            className="pb-10"
          />
        )}
      </div>
    </MobileContainer>
  );
}

/**
 * 알림 카드 컴포넌트
 */
function NotificationCard({ notif }) {
  const HOURS_24 = 24 * 60 * 60 * 1000;
  const isRecent = notif.createdAt 
    ? (new Date() - new Date(notif.createdAt)) < HOURS_24 
    : true;

  return (
    <div className="bg-white rounded-recommend py-6 px-5 flex gap-4 transition-all active:scale-[0.98] shadow-card-subtle last:mb-0">
      {/* 아이콘 영역 */}
      <div className="flex-shrink-0">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
          isRecent ? "bg-primary-mint/10" : "bg-bg-gray border border-border-light"
        )}>
          <Icon
            name="notif-item"
            active={isRecent}
            className="w-[18px] h-[18px]"
          />
        </div>
      </div>

      {/* 텍스트 정보 */}
      <div className="flex-1 flex flex-col gap-1 min-w-0 pr-2">
        <div className="flex justify-between items-start gap-2">
          <h4 className={cn(
            "text-base leading-tight tracking-tight mt-0.5",
            isRecent ? "font-bold text-text-dark" : "font-semibold text-text-secondary"
          )}>
            {notif.title}
          </h4>
          <span className="text-xs text-text-muted font-medium whitespace-nowrap mt-1">
            {notif.time}
          </span>
        </div>
        <p className={cn(
          "text-[13px] leading-relaxed break-keep tracking-tight",
          isRecent ? "text-text-dark/80 font-medium" : "text-text-muted font-normal"
        )}>
          {notif.message}
        </p>
      </div>
    </div>
  );
}
