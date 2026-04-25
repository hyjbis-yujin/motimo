import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../components/layout/MobileContainer';
import Icon from '../components/ui/Icon';
import { cn } from '../utils/cn';
import { NOTIFICATIONS } from '../constants/notificationData';

export default function NotificationPage() {
  const navigate = useNavigate();

  return (
    <MobileContainer
      showHeader={false}
      showTabBar={true}
      className="bg-[#fcfcfc]" // 배경 톤 소폭 상향
      mainClassName="pt-0 pb-10"
    >
      {/* 1. Header (독립 서브페이지 스타일) */}
      <header className="sticky top-0 z-30 bg-white h-[64px] flex items-center px-layout-x border-none shadow-none">
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
      <div className="px-layout-x pt-6 flex flex-col gap-4">
        {NOTIFICATIONS.length > 0 ? (
          NOTIFICATIONS.map((notif) => (
            <NotificationCard key={notif.id} notif={notif} />
          ))
        ) : (
          <EmptyNotifications />
        )}
      </div>
    </MobileContainer>
  );
}

function NotificationCard({ notif }) {
  return (
    <div
      className={cn(
        "bg-white rounded-[18px] py-6 px-5 flex gap-4 transition-all active:scale-[0.98] shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
        notif.isUnread ? "" : ""
      )}
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

function EmptyNotifications() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-24 text-center px-10">
      <div className="w-[100px] h-[100px] bg-white rounded-[40px] flex items-center justify-center mb-8 border border-[#f0f0f0]">
        <Icon name="notif-item" className="w-[36px] h-[36px] opacity-10" />
      </div>
      <h3 className="text-[18px] font-bold text-text-dark mb-2">알림함이 비어있어요</h3>
      <p className="text-[14px] text-text-muted leading-relaxed">
        중요한 소식이나 새로운 챌린지 알림을<br />가장 먼저 보내드려요.
      </p>
    </div>
  );
}
