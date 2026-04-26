import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useNotificationStore } from '../../store/useNotificationStore';
import { useAuthStore } from '../../store/useAuthStore';

/**
 * 전역 헤더 컴포넌트
 * 로고, 검색, 알림 아이콘을 포함하며 상단에 고정됩니다.
 */
export default function Header() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const notifications = useNotificationStore(state => state.notifications || []);
  const hasUnread = isLoggedIn && notifications.some(n => n.isUnread);

  return (
    <header className="absolute top-0 left-0 w-full bg-bg-app/80 backdrop-blur-md z-40 flex items-center justify-between px-layout-x pt-layout-x pb-3">
      <Link to="/" className="cursor-pointer">
        <Icon name="header-logo" />
      </Link>
      
      <div className="flex items-center gap-3 mt-0.5">
        <div className="flex items-center gap-5">
          <Link to="/search" className="outline-none">
            <Icon 
              name="header-search" 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </Link>
          
          <Link to="/notifications" className="outline-none relative">
            {/* 읽지 않은 알림이 있을 때만 민트색 원형 뱃지 노출 */}
            {hasUnread && (
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-mint rounded-full z-10" />
            )}
            <Icon 
              name="header-notification" 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
