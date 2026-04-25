import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Badge from './Badge';
import Icon from './Icon';

export default function ChallengeCard({
  className,
  id,
  title,
  desc,
  badge,
  participants,
  hasPoint,
  imageUrl,
  variant = 'feed' // 'top-left', 'top-right', 'feed', 'popular'
}) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const baseCardStyles = "relative flex flex-col justify-between rounded-[20px] overflow-hidden bg-[#e8e8e8] select-none group cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.02)] tracking-tight";

  const variantsStyles = {
    'top-left': "w-[280px] h-[160px] flex-shrink-0",
    'top-right': "w-[280px] h-[160px] flex-shrink-0",
    'feed': "w-full h-[142px]",
    'popular': "w-[184px] h-[260px] flex-shrink-0",
    'mypage': "w-full h-[142px] rounded-[24px]", 
  };

  const bgPlaceholderClass = "absolute inset-0 bg-[#8c8d91] mix-blend-multiply opacity-60";
  const isFeedStyle = variant === 'feed' || variant === 'mypage';

  const handleLikeToggle = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트와 분리
    setIsLiked(!isLiked);
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/challenge/${id}`);
    } else {
      // Fallback detail page
      navigate(`/challenge/1`);
    }
  };

  const isTopVariant = variant === 'top-left' || variant === 'top-right';

  return (
    <div className={cn(baseCardStyles, variantsStyles[variant], className)} onClick={handleCardClick}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
      ) : (
        <div className={bgPlaceholderClass}></div>
      )}

      {/* 가독성을 위한 강화된 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

      {/* Top Area: 좌상단 하트와 우상단 뱃지는 공통, 인원수 배치는 상단 전용(isTopVariant) */}
      <div className="relative z-10 w-full px-4 pt-4 flex justify-between items-start">
        <div className="flex items-center gap-2">
          {/* 모든 카드 공통: 찜하기 버튼 */}
          <button 
            onClick={handleLikeToggle}
            className="p-1 -ml-1 transition-transform active:scale-90 cursor-pointer"
            aria-label="찜하기"
          >
            <Icon 
              name="action-heart" 
              active={isLiked}
            />
          </button>
          
          {/* [Spotlight 전용] 카드 상단 인원수 표시 */}
          {isTopVariant && participants && (
            <div className="flex items-center gap-1">
              <Icon 
                name="status-participants" 
                className="brightness-[2] opacity-80" 
              />
              <span className="text-[12px] text-white font-semibold whitespace-nowrap">
                {participants}명 참여 중
              </span>
            </div>
          )}
        </div>

        {/* 모든 카드 공통: 우상단 D-day badge */}
        {badge && (
          <Badge className="h-[26px] px-3 flex-shrink-0" variant="primary">{badge}</Badge>
        )}
      </div>

      {/* Bottom Area */}
      <div className="relative z-10 w-full p-5 pt-0 flex flex-col justify-end">
        <h4 className="text-white font-bold text-[15px] leading-tight line-clamp-1">{title}</h4>
        
        <div className="flex items-center justify-between mt-1">
          {desc && (
            <p className="text-[rgba(255,255,255,0.85)] font-medium line-clamp-1 text-[12px]">
              {desc}
            </p>
          )}

          {/* [Feed/MyPage용] 하단 우측 인원수 복구 */}
          {!isTopVariant && variant !== 'popular' && participants && (
            <div className="flex items-center gap-1 ml-auto flex-shrink-0">
               <Icon 
                 name="status-participants" 
                 className="brightness-[2] opacity-80" 
               />
               <span className={cn(
                "font-semibold text-[12px]",
                isFeedStyle ? "text-white" : "text-[rgba(255,255,255,0.95)]"
              )}>
                {variant === 'mypage' ? participants : `${participants}명 참여 중`}
              </span>
            </div>
          )}
        </div>

        {/* [Popular용] 제목 아래 인원수 복구 */}
        {variant === 'popular' && participants && (
          <div className="flex items-center gap-1 text-[rgba(255,255,255,0.8)] font-semibold text-[12px] mt-[14px]">
            <Icon 
              name="status-participants" 
              className="brightness-[2] opacity-80" 
            />
            <span>{participants}명 참여 중</span>
          </div>
        )}
      </div>
    </div>
  );
}
