import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { USER_INFO } from '../../../constants/homeData';

export default function ProfileSummarySection() {
  const navigate = useNavigate();

  return (
    <section className="px-layout-x mt-8 mb-4">
      {/* 로그인 유도 카드형 컨테이너 */}
      <div className="bg-[#fcfcfc] rounded-[28px] p-[20px] flex items-center gap-[18px] border border-[#f3f3f3] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        
        {/* 1. 프로필 아이콘 (가독성 보강된 박스형 프로필) */}
        <div className="flex-shrink-0 w-[60px] h-[60px] rounded-[22px] bg-white border border-[#eeeeee] flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)]">
          <Icon name="tab-my-active" className="w-[30px] h-[30px] opacity-25" />
        </div>

        {/* 2. 중앙 텍스트 영역 (시계성 상향) */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-[16px] font-bold text-text-dark leading-tight tracking-tight">
            로그인이 필요해요
          </h3>
          <p className="text-[12.5px] text-text-secondary font-medium tracking-tight mt-1 line-clamp-1">
            나만의 습관과 챌린지를 시작해보세요
          </p>
        </div>

        {/* 3. 우측 버튼 (텍스트 길이에 맞는 중간 사이즈) */}
        <Button 
          variant="small" 
          className="shrink-0 px-4 h-[36px] bg-btn-dark rounded-[12px] text-[13px]" 
          onClick={() => navigate('/login')}
        >
          시작하기
        </Button>
      </div>
    </section>
  );
}
