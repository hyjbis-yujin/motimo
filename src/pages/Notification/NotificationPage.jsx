import React from 'react';
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

  return (
    <MobileContainer
      showHeader={false}
      showTabBar={true}
      className="bg-[#fcfcfc]"
      mainClassName="pt-0 pb-10 flex flex-col"
    >
      {/* 1. Header (독립 서브페이지 형태) */}
      <header className="sticky top-0 z-30 bg-white h-header flex items-center px-layout-x border-none shadow-none flex-shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text-dark active:opacity-50 transition-opacity cursor-pointer"
          aria-label="뒤로가기"
        >
          <Icon name="header-back" className="!w-[10px] !h-[22px]" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-bold text-text-dark tracking-tight">
          알림
        </h1>
      </header>

      {/* 2. Notification List */}
      <div className={cn(
        "px-layout-x pt-6 flex flex-col gap-4",
        (!isLoggedIn || notifications.length === 0) ? "flex-1" : ""
      )}>
        {!isLoggedIn ? (
          /* 로그인 전 빈 상태 - 공통 컴포넌트 적용 */
          <EmptyState 
            title="로그인이 필요해요"
            description="로그인 후 알림을 확인할 수 있어요."
            actionLabel="로그인하러 가기"
            actionTo="/login"
            className="flex-1 pb-20"
          />
        ) : notifications.length > 0 ? (
          /* 로그인 후 리스트 */
          notifications.map((notif) => (
            <NotificationCard key={notif.id} notif={notif} />
          ))
        ) : (
          /* 데이터 없을 시 - 공통 컴포넌트 적용 */
          <EmptyState 
            title="알림창이 비어있어요"
            description={`중요한 소식이나 새로운 챌린지 알림을\n가장 먼저 보내드릴게요`}
            className="flex-1 pb-20"
          />
        )}
      </div>
    </MobileContainer>
  );
}

function NotificationCard({ notif }) {
  const markAsRead = useNotificationStore(state => state.markAsRead);

  return (
    <div
      className={cn(
        "bg-white rounded-recommend py-6 px-5 flex gap-4 transition-all active:scale-[0.98] shadow-card-subtle cursor-pointer",
        notif.isUnread ? "" : ""
      )}
      onClick={() => markAsRead(notif.id)}
    >
      {/* 좌측: 아이콘 영역 */}
      <div className="flex-shrink-0">
        <div className={cn(
          "w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors shadow-none",
          notif.isUnread ? "bg-primary-mint/10 border-none" : "bg-[#f9f9f9] border border-[#f0f0f0]"
        )}>
          <Icon
            name="notif-item"
            active={notif.isUnread}
            className="w-[18px] h-[18px]"
          />
        </div>
      </div>

      {/* 중앙: 텍스트 정보 */}
      <div className="flex-1 flex flex-col gap-1 min-w-0 pr-2">
        <div className="flex justify-between items-start gap-2">
          <h4 className={cn(
            "text-[15px] leading-tight tracking-tight mt-0.5",
            notif.isUnread ? "font-bold text-text-dark" : "font-semibold text-text-secondary"
          )}>
            {notif.title}
          </h4>
          <span className="text-[11px] text-text-muted font-medium whitespace-nowrap mt-1">
            {notif.time}
          </span>
        </div>
        <p className={cn(
          "text-[13px] leading-relaxed break-keep tracking-tight",
          notif.isUnread ? "text-[#555555] font-medium" : "text-[#999999] font-normal"
        )}>
          {notif.message}
        </p>
      </div>
    </div>
  );
}
