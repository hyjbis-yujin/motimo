import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Badge from './Badge';
import Icon from './Icon';
import { useAuthStore } from '../../store/useAuthStore';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 챌린지 카드 오버레이 (가독성 향상 그라데이션)
 */
const CardOverlay = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
);

/**
 * 카드 상단 영역 (찜하기 버튼, 인원수, 뱃지)
 */
const CardHeader = ({ id, isLiked, onLikeToggle, isTopVariant, participants, badge }) => (
  <div className="relative z-10 w-full px-4 pt-4 flex justify-between items-start">
    <div className="flex items-center gap-2">
      <button 
        onClick={onLikeToggle}
        className="p-1 -ml-1 transition-transform active:scale-90 cursor-pointer"
        aria-label="찜하기"
      >
        <Icon name="action-heart" active={isLiked} />
      </button>
      
      {isTopVariant && participants && (
        <div className="flex items-center gap-1">
          <Icon name="status-participants" className="brightness-[2] opacity-80" />
          <span className="text-[12px] text-white font-semibold whitespace-nowrap">
            {participants}명 참여 중
          </span>
        </div>
      )}
    </div>

    {badge && (
      <Badge className="h-[26px] px-3 flex-shrink-0" variant="primary">{badge}</Badge>
    )}
  </div>
);

/**
 * 카드 하단 영역 (제목, 설명, 인원수)
 */
const CardFooter = ({ title, desc, participants, variant, isTopVariant, isFeedStyle }) => (
  <div className="relative z-10 w-full p-5 pt-0 flex flex-col justify-end">
    <h4 className="text-white font-bold text-[15px] leading-tight line-clamp-1">{title}</h4>
    
    <div className="flex items-center justify-between mt-1">
      {desc && (
        <p className="text-[rgba(255,255,255,0.85)] font-medium line-clamp-1 text-[12px]">
          {desc}
        </p>
      )}

      {!isTopVariant && variant !== 'popular' && participants && (
        <div className="flex items-center gap-1 ml-auto flex-shrink-0">
           <Icon name="status-participants" className="brightness-[2] opacity-80" />
           <span className={cn(
            "font-semibold text-[12px]",
            isFeedStyle ? "text-white" : "text-[rgba(255,255,255,0.95)]"
          )}>
            {variant === 'mypage' ? participants : `${participants}명 참여 중`}
          </span>
        </div>
      )}
    </div>

    {variant === 'popular' && participants && (
      <div className="flex items-center gap-1 text-[rgba(255,255,255,0.8)] font-semibold text-[12px] mt-[14px]">
        <Icon name="status-participants" className="brightness-[2] opacity-80" />
        <span>{participants}명 참여 중</span>
      </div>
    )}
  </div>
);

/**
 * 프로젝트 전체에서 공용으로 사용하는 챌린지 카드 컴포넌트
 */
export default function ChallengeCard({
  className,
  id,
  title,
  desc,
  badge,
  participants,
  imageUrl,
  variant = 'feed' // 'top-left', 'top-right', 'feed', 'popular', 'mypage'
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const { likedChallenges, toggleLike } = useChallengeStore();
  
  const isLiked = likedChallenges.includes(id);

  const handleLikeToggle = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      // 로그인 전 하트 클릭 시 로그인 페이지로 이동 (리다이렉트 경로 포함)
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
    toggleLike(id);
  };

  const handleCardClick = () => {
    navigate(`/challenge/${id || 1}`);
  };

  const baseCardStyles = "relative flex flex-col justify-between rounded-[20px] overflow-hidden bg-[#e8e8e8] select-none group cursor-pointer shadow-card-subtle tracking-tight";
  const variantsStyles = {
    'top-left': "w-[280px] h-[160px] flex-shrink-0",
    'top-right': "w-[280px] h-[160px] flex-shrink-0",
    'feed': "w-full h-[142px]",
    'popular': "w-[184px] h-[260px] flex-shrink-0",
    'mypage': "w-full h-[142px] rounded-[24px]", 
  };

  const isTopVariant = variant === 'top-left' || variant === 'top-right';
  const isFeedStyle = variant === 'feed' || variant === 'mypage';

  return (
    <div className={cn(baseCardStyles, variantsStyles[variant], className)} onClick={handleCardClick}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
      ) : (
        <div className="absolute inset-0 bg-[#8c8d91] mix-blend-multiply opacity-60" />
      )}

      <CardOverlay />
      
      <CardHeader 
        id={id}
        isLiked={isLiked} 
        onLikeToggle={handleLikeToggle}
        isTopVariant={isTopVariant}
        participants={participants}
        badge={badge}
      />

      <CardFooter 
        title={title}
        desc={desc}
        participants={participants}
        variant={variant}
        isTopVariant={isTopVariant}
        isFeedStyle={isFeedStyle}
      />
    </div>
  );
}
