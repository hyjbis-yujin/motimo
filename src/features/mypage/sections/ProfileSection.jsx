import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { useAuthStore } from '../../../store/useAuthStore';
import Icon from '../../../components/ui/Icon';
import Button from '../../../components/ui/Button';

// 로그인 전 기본 아바타 이미지 임포트
import defaultAvatar from '../../../assets/images/profiles/avatar-default.svg';

/**
 * 마이페이지 상단 프로필 섹션
 * 가로 레이아웃을 기반으로 하며, 메인 페이지와 동일한 아바타 및 버튼 스타일을 공유합니다.
 */
export default function ProfileSection({ className }) {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuthStore();
  
  const displayName = isLoggedIn ? user?.name : "로그인이 필요해요";
  const buttonLabel = isLoggedIn ? '로그아웃' : '시작하기';
  const handleAction = isLoggedIn ? () => logout() : () => navigate('/login');

  return (
    <section className={cn("flex items-center pt-10 pb-8 px-7 gap-4", className)}>
      
      {/* 1. 프로필 이미지 박스 (메인 스타일 재사용) */}
      <div className="flex-shrink-0 w-[60px] h-[60px] rounded-avatar bg-white border border-border-subtle flex items-center justify-center overflow-hidden">
        {isLoggedIn && user?.profileImage ? (
          <img src={user.profileImage} alt="프로필" className="w-[32px] h-[32px] object-contain" />
        ) : (
          <img src={defaultAvatar} alt="로그인 전 프로필" className="w-[32px] h-[32px] object-contain" />
        )}
      </div>

      {/* 2. 닉네임 영역 */}
      <div className="flex flex-col flex-1 min-w-0">
        <h2 className="text-lg font-bold text-text-dark tracking-tight leading-tight truncate">
          {displayName}
        </h2>
        <p className="text-sm text-text-secondary font-medium mt-1 tracking-tight truncate">
          {isLoggedIn ? "오늘도 멋진 챌린지를 응원해요!" : "나만의 도전을 시작해보세요"}
        </p>
      </div>

      {/* 3. 액션 버튼 (메인 페이지와 동일한 스타일 적용) */}
      <Button 
        variant="small" 
        className="shrink-0 px-4 h-btn-sm bg-btn-dark rounded-btn-sm text-[13px]" 
        onClick={handleAction}
      >
        {buttonLabel}
      </Button>
    </section>
  );
}
