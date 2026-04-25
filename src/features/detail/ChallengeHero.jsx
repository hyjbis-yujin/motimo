import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Icon from '../../components/ui/Icon';

/**
 * 챌린지 상세페이지 상단 히어로 영역 (디자인 정밀 수정 반영)
 */
export default function ChallengeHero({ imageUrl }) {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-[158px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 상단 액션바 */}
      <div className="absolute top-0 left-0 w-full flex items-center px-layout-x pt-6 z-10">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-white cursor-pointer active:opacity-50 transition-opacity -ml-1"
          aria-label="Back"
        >
          <Icon name="header-back" className="!w-[11px] !h-auto brightness-0 invert" />
        </button>
      </div>
    </section>
  );
}
