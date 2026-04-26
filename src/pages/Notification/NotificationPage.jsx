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

  // 페이지 진입 시 모든 알림을 "확인 완료" 처리하여 뱃지를 제거합니다.
  useEffect(() => {
    if (isLoggedIn && notifications.length > 0) {
      markAllAsRead();
    }
  }, [isLoggedIn, markAllAsRead]);

  return (
    <MobileContainer
      showHeader={false}
      showTabBar={true}
      className="bg-[#fcfcfc]"
      mainClassName="pt-0 pb-10 flex flex-col"
    >
      {/* 1. Header */}
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
          <EmptyState 
            iconName="notif-login"
            title="로그인이 필요해요"
            description="로그인 후 알림을 확인할 수 있어요."
            actionLabel="로그인하러 가기"
            actionTo="/login"
            className="flex-1 pb-20"
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
            className="flex-1 pb-20"
          />
        )}
      </div>
    </MobileContainer>
  );
}

/**
 * 알림 카드 컴포넌트
 * (읽음 여부가 아닌 '24시간 이내 생성' 여부에 따라 아이콘 활성화를 결정합니다)
 */
function NotificationCard({ notif }) {
  // 24시간 이내 알림인지 판별 (밀리초 단위 계산)
  const HOURS_24 = 24 * 60 * 60 * 1000;
  const isRecent = notif.createdAt 
    ? (new Date() - new Date(notif.createdAt)) < HOURS_24 
    : true; // createdAt 데이터가 없는 기존 데이터는 활성 상태로 간주

  // 시간 표시 텍스트 계산 (선택 사항: 더욱 정확한 시간 표시 가능)
  // 여기서는 디자인 유지 및 사용자 요청에 따라 기본 표시 사용

  return (
    <div className="bg-white rounded-recommend py-6 px-5 flex gap-4 transition-all active:scale-[0.98] shadow-card-subtle">
      {/* 좌측: 아이콘 영역 - 24시간 이내(isRecent)라면 활성화 아이콘 노출 */}
      <div className="flex-shrink-0">
        <div className={cn(
          "w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors",
          isRecent ? "bg-primary-mint/10" : "bg-[#f9f9f9] border border-[#f0f0f0]"
        )}>
          <Icon
            name="notif-item"
            active={isRecent}
            className="w-[18px] h-[18px]"
          />
        </div>
      </div>

      {/* 중앙: 텍스트 정보 */}
      <div className="flex-1 flex flex-col gap-1 min-w-0 pr-2">
        <div className="flex justify-between items-start gap-2">
          <h4 className={cn(
            "text-[15px] leading-tight tracking-tight mt-0.5",
            isRecent ? "font-bold text-text-dark" : "font-semibold text-text-secondary"
          )}>
            {notif.title}
          </h4>
          <span className="text-[11px] text-text-muted font-medium whitespace-nowrap mt-1">
            {notif.time}
          </span>
        </div>
        <p className={cn(
          "text-[13px] leading-relaxed break-keep tracking-tight",
          isRecent ? "text-[#555555] font-medium" : "text-[#999999] font-normal"
        )}>
          {notif.message}
        </p>
      </div>
    </div>
  );
}
