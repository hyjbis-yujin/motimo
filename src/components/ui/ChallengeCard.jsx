import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Badge from './Badge';
import Icon from './Icon';
import { useAuthStore } from '../../store/useAuthStore';
import { useChallengeStore } from '../../store/useChallengeStore';

// 기본 폴백 이미지 임포트
import defaultCardImg from '../../assets/images/default-card.png';

/**
 * 챌린지 카드 오버레이 (가독성 향상 그라디언트)
 */
const CardOverlay = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
);

/**
 * 카드 상단 영역 (찜하기 버튼, 참여자 수, 뱃지)
 */
const CardHeader = ({ id, isLiked, onLikeToggle, isTopVariant, participants, badge }) => (
  <div className="relative z-10 w-full px-layout-x pt-layout-x flex justify-between items-start">
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
          <span className="text-sm text-white font-semibold whitespace-nowrap">
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
 * 카드 하단 영역 (제목, 설명, 참여자 수)
 */
const CardFooter = ({ title, desc, participants, variant, isTopVariant, isFeedStyle }) => (
  <div className="relative z-10 w-full px-layout-x pb-5 flex flex-col justify-end">
    <h4 className="text-white font-bold text-base leading-tight line-clamp-1">{title}</h4>
    
    <div className="flex items-center justify-between mt-1">
      {desc && (
        <p className="text-white/85 font-medium line-clamp-1 text-sm">
          {desc}
        </p>
      )}

      {!isTopVariant && variant !== 'popular' && participants && (
        <div className="flex items-center gap-1 ml-auto flex-shrink-0">
           <Icon name="status-participants" className="brightness-[2] opacity-80" />
           <span className={cn(
            "font-semibold text-sm",
            isFeedStyle ? "text-white" : "text-white/95"
          )}>
            {variant === 'mypage' ? participants : `${participants}명 참여 중`}
          </span>
        </div>
      )}
    </div>

    {variant === 'popular' && participants && (
      <div className="flex items-center gap-1 text-white/80 font-semibold text-sm mt-3.5">
        <Icon name="status-participants" className="brightness-[2] opacity-80" />
        <span>{participants}명 참여 중</span>
      </div>
    )}
  </div>
);

/**
 * 챌린지 카드 공통 컴포넌트
 * 피드, 인기, 마이페이지 등 다양한 레이아웃 옵션을 지원합니다.
 */
export default function ChallengeCard({
  className,
  id,
  title,
  desc,
  badge,
  participants,
  imageUrl,
  variant = 'feed'
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const { likedChallenges, toggleLike } = useChallengeStore();
  
  const isLiked = isLoggedIn && likedChallenges.includes(String(id));

  const handleLikeToggle = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
    toggleLike(id);
  };

  const handleCardClick = () => {
    navigate(`/challenge/${id || 1}`);
  };

  const baseCardStyles = "relative flex flex-col justify-between rounded-card overflow-hidden bg-bg-gray select-none group cursor-pointer shadow-card-subtle tracking-tight";
  const variantsStyles = {
    'top-left': "w-[280px] h-[160px] flex-shrink-0",
    'top-right': "w-[280px] h-[160px] flex-shrink-0",
    'feed': "w-full h-[142px]",
    'popular': "w-[184px] h-[260px] flex-shrink-0",
    'mypage': "w-full h-[142px] rounded-box-lg", 
  };

  const isTopVariant = variant === 'top-left' || variant === 'top-right';
  const isFeedStyle = variant === 'feed' || variant === 'mypage';

  return (
    <div className={cn(baseCardStyles, variantsStyles[variant], className)} onClick={handleCardClick}>
      <img 
        src={imageUrl || defaultCardImg} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
        onError={(e) => {
          e.currentTarget.src = defaultCardImg;
          e.currentTarget.onerror = null; 
        }}
      />

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
