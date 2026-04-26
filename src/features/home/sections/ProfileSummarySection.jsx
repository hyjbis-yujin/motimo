import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { useAuthStore } from '../../../store/useAuthStore';
import { cn } from '../../../utils/cn';

// 로그인 전 기본 아바타 이미지 임포트
import defaultAvatar from '../../../assets/images/profiles/avatar-default.svg';

/**
 * 홈 상단 프로필 요약 섹션
 */
export default function ProfileSummarySection() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuthStore();

  const title = isLoggedIn ? `${user?.name}님 환영해요!` : '로그인이 필요해요';
  const subTitle = isLoggedIn ? '오늘의 즐거운 챌린지 하세요!' : '나만의 멋진 챌린지를 시작해보세요';
  const buttonLabel = isLoggedIn ? '로그아웃' : '시작하기';
  const handleAction = isLoggedIn ? () => logout() : () => navigate('/login');

  return (
    <section className="px-layout-x mt-8 mb-4">
      <div className="bg-bg-subtle rounded-sheet p-5 flex items-center gap-layout-x border border-border-card shadow-card-subtle">
        
        {/* 1. 프로필 이미지 박스 (로그인 여부에 따라 아바타 교체) */}
        <div className="flex-shrink-0 w-[60px] h-[60px] rounded-avatar bg-white border border-border-subtle flex items-center justify-center shadow-inner overflow-hidden">
          {isLoggedIn && user?.profileImage ? (
            <img src={user.profileImage} alt="프로필" className="w-[32px] h-[32px] object-contain" />
          ) : (
            <img src={defaultAvatar} alt="로그인 전 프로필" className="w-[32px] h-[32px] object-contain" />
          )}
        </div>

        {/* 2. 텍스트 영역 */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-[16px] font-bold text-text-dark leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-text-secondary font-medium tracking-tight mt-1 line-clamp-1">
            {subTitle}
          </p>
        </div>

        {/* 3. 액션 버튼 */}
        <Button 
          variant="small" 
          className="shrink-0 px-4 h-btn-sm bg-btn-dark rounded-btn-sm text-[13px]" 
          onClick={handleAction}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
