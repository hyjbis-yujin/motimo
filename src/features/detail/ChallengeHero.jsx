import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/ui/Icon';
import defaultHeroImg from '../../assets/images/default-card.png';

/**
 * 챌린지 상세페이지 상단 히어로 영역
 * 이미지 로딩 실패 시 폴백 이미지를 표시하도록 개선했습니다.
 */
export default function ChallengeHero({ imageUrl }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  // 이미지가 없거나 로딩 중 에러가 발생한 경우 폴백 이미지 사용
  const finalImageUrl = (!imageUrl || imgError) ? defaultHeroImg : imageUrl;

  return (
    <section
      className="relative w-full h-[140px] bg-center bg-cover bg-no-repeat transition-all duration-300"
      style={{ backgroundImage: `url(${finalImageUrl})` }}
    >
      {/* 백그라운드 이미지 로딩 체크를 위한 히든 이미지 태그 */}
      {imageUrl && !imgError && (
        <img 
          src={imageUrl} 
          alt="" 
          className="hidden" 
          onError={() => setImgError(true)} 
        />
      )}

      {/* 가독성 오버레이 (투명도 조정) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 상단 액션바 */}
      <div className="absolute top-0 left-0 w-full flex items-center px-layout-x pt-6 z-10">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-white cursor-pointer active:opacity-50 transition-opacity -ml-1 h-10 w-10"
          aria-label="Back"
        >
          <Icon name="header-back" className="!w-[11px] !h-auto brightness-0 invert" />
        </button>
      </div>
    </section>
  );
}
