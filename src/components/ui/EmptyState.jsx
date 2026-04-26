import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { cn } from '../../utils/cn';

/**
 * 프로젝트 공통 빈 상태(Empty State) 표시 컴포넌트
 * 알림 없음, 로그인 필요, 데이터 없음 등의 상황에서 사용합니다.
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
      {/* 아이콘 박스 - (82x82, 30px rounded, primary-light bg, mb-5) */}
      <div className="w-[82px] h-[82px] bg-primary-light rounded-[30px] flex items-center justify-center mb-5">
        <Icon name={iconName} />
      </div>

      {/* 텍스트 정보 - 타이틀 22px, 서브타이틀 15px 사양 적용 */}
      <h3 className="text-[18px] font-bold text-text-dark mb-3 tracking-tight">{title}</h3>
      <p className="text-[15px] text-text-secondary leading-relaxed mb-10 whitespace-pre-wrap break-keep font-medium">
        {description}
      </p>

      {/* 선택적 액션 버튼 (어두운 스타일 적용) */}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          state={{ from: window.location.pathname }}
          className="w-full max-w-[200px] h-[54px] bg-btn-dark text-white rounded-btn flex items-center justify-center text-[15px] font-semibold transition-all active:scale-[0.98] hover:bg-btn-dark/90"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
