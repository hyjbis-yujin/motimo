import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { cn } from '../../utils/cn';

/**
 * 프로젝트 공통 빈 상태(Empty State) 표시 컴포넌트
 */
export default function EmptyState({
  iconName = 'notif-empty',
  title,
  description,
  actionLabel,
  actionTo,
  className
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center px-10", className)}>
      {/* 아이콘 박스 */}
      <div className="w-[82px] h-[82px] bg-primary-light rounded-[30px] flex items-center justify-center mb-5">
        <Icon name={iconName} />
      </div>

      {/* 텍스트 정보 */}
      <h3 className="text-lg font-bold text-text-dark mb-3 tracking-tight">{title}</h3>
      <p className="text-base text-text-secondary leading-relaxed mb-10 whitespace-pre-wrap break-keep font-medium">
        {description}
      </p>

      {/* 선택적 액션 버튼 */}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          state={{ from: window.location.pathname }}
          className="w-full max-w-[200px] h-[54px] bg-btn-dark text-white rounded-btn flex items-center justify-center text-base font-semibold transition-all active:scale-[0.98] hover:bg-btn-dark/90"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
