import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { USER_INFO } from '../../../constants/homeData';

export default function ProfileSummarySection() {
  const navigate = useNavigate();

  return (
    <section className="px-layout-x flex items-center justify-between mt-10 mb-4">
      <div className="flex items-center gap-[16px]">
        {/* 그라데이션 프로필 테두리 (중첩 구조로 복구 - 선 굵기 4px로 상향) */}
        <div className="flex-shrink-0 w-[82.4px] h-[82.4px] p-[4px] bg-gradient-to-br from-[#17C99F] to-[#60C6C9] rounded-[34px] flex items-center justify-center">
          <div className="w-full h-full bg-bg-app rounded-[31px] flex items-center justify-center p-[2.2px]">
            <div className="relative w-[70px] h-[70px] rounded-[28px] flex items-center justify-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">
               <Icon name="tab-my-active" className="w-[48px] h-[48px] opacity-20" />
            </div>
          </div>
        </div>

        {/* 중앙 텍스트 영역 */}
        <div className="flex flex-col tracking-tight">
          <div className="text-[16px] font-medium text-text-dark">{USER_INFO.name}님의</div>
          <div className="text-[16px] font-bold text-text-dark leading-tight mt-0.5">참여 중인 챌린지</div>
          <div className="text-[14px] font-semibold text-primary-mint mt-2">
            현재 {USER_INFO.challengesCount}개의 챌린지로 진행 중이에요!
          </div>
        </div>
      </div>

      {/* 우측 버튼 */}
      <Button variant="pill" className="shrink-0 mt-2" onClick={() => navigate('/my')}>
        모두보기
      </Button>
    </section>
  );
}
