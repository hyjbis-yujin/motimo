import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useNotificationStore } from '../../store/useNotificationStore';

export default function Header() {
  const notifications = useNotificationStore(state => state.notifications || []);
  const hasUnread = notifications.some(n => n.isUnread);

  return (
    <header className="absolute top-0 left-0 w-full bg-bg-app/80 backdrop-blur-md z-40 flex items-center justify-between px-layout-x pt-[18px] pb-[11px]">
      <Link to="/" className="cursor-pointer">
        <Icon name="header-logo" />
      </Link>
      <div className="flex items-center gap-[12px] mt-0.5">
        <div className="flex items-center gap-[20px]">
          <Link to="/search" className="outline-none">
            <Icon name="header-search" className="cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          
          <Link to="/notifications" className="outline-none relative">
            {/* 읽지 않은 알림이 있을 때만 민트색 원형 뱃지 노출 */}
            {hasUnread && (
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-mint rounded-full z-10"></div>
            )}
            <Icon name="header-notification" className="cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </header>
  );
}
