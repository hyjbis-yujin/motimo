import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { useAuthStore } from '../../../store/useAuthStore';

export default function ProfileSummarySection() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuthStore();

  return (
    <section className="px-layout-x mt-8 mb-4">
      {/* 로그인 유도 또는 프로필 카드 컨테이너 */}
      <div className="bg-[#fcfcfc] rounded-sheet p-[20px] flex items-center gap-[18px] border border-[#f3f3f3] shadow-card-subtle">
        
        {/* 1. 프로필 이미지 박스 */}
        <div className="flex-shrink-0 w-[60px] h-[60px] rounded-[22px] bg-white border border-[#eeeeee] flex items-center justify-center shadow-inner">
          <Icon name="tab-my-active" className={cn("w-[30px] h-[30px]", isLoggedIn ? "opacity-100" : "opacity-25")} />
        </div>

        {/* 2. 중앙 텍스트 영역 */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-[16px] font-bold text-text-dark leading-tight tracking-tight">
            {isLoggedIn ? `${user?.name}님, 환영해요!` : '로그인이 필요해요'}
          </h3>
          <p className="text-[12.5px] text-text-secondary font-medium tracking-tight mt-1 line-clamp-1">
            {isLoggedIn ? '오늘도 즐거운 챌린지 되세요' : '나만의 멋진 챌린지를 시작해보세요'}
          </p>
        </div>

        {/* 3. 우측 버튼 */}
        {isLoggedIn ? (
          <button 
            className="text-[12px] text-text-muted hover:text-text-dark underline decoration-[#eee] underline-offset-4"
            onClick={() => logout()}
          >
            로그아웃
          </button>
        ) : (
          <Button 
            variant="small" 
            className="shrink-0 px-4 h-[36px] bg-btn-dark rounded-[12px] text-[13px]" 
            onClick={() => navigate('/login')}
          >
            시작하기
          </Button>
        )}
      </div>
    </section>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
