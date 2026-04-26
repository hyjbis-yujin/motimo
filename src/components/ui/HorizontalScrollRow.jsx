import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { cn } from '../../utils/cn';
import useSimpleHorizontalDrag from '../../hooks/useSimpleHorizontalDrag';

/**
 * 전역 공통 가로 스크롤 컴포넌트
 * 반응형 대응: 터치 슬라이드 최적화 및 마지막 카드 패딩 보정 (스페이서 활용)
 */
export default function HorizontalScrollRow({ children, className, contentClassName }) {
  const { 
    scrollRef, 
    onMouseDown, 
    onMouseLeave, 
    onMouseUp, 
    onMouseMove, 
    isDragging 
  } = useSimpleHorizontalDrag();

  const [scrollState, setScrollState] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0
  });

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      scrollLeft: el.scrollLeft,
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth
    });
  }, [scrollRef]);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      updateScrollState();
    });
    
    observer.observe(el);
    const contents = el.querySelector('.contents-wrapper');
    if (contents) observer.observe(contents);

    return () => observer.disconnect();
  }, [updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const canScrollLeft = el.scrollLeft > 0;
      const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      
      const isScrollingLeft = delta < 0;
      const isScrollingRight = delta > 0;

      if ((isScrollingRight && canScrollRight) || (isScrollingLeft && canScrollLeft)) {
        e.preventDefault();
        el.scrollBy({
          left: delta * 2,
          behavior: 'smooth'
        });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('scroll', updateScrollState);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('scroll', updateScrollState);
    };
  }, [updateScrollState]);

  const [isHovered, setIsHovered] = useState(false);

  const { thumbWidthPercent, thumbLeftPercent, isScrollable } = useMemo(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollState;
    if (scrollWidth <= clientWidth) {
      return { thumbWidthPercent: 0, thumbLeftPercent: 0, isScrollable: false };
    }

    const ratio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(ratio * 100, 10);
    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / (maxScroll || 1);
    const thumbLeft = progress * (100 - thumbWidth);

    return { thumbWidthPercent: thumbWidth, thumbLeftPercent: thumbLeft, isScrollable: true };
  }, [scrollState]);

  const isVisible = isHovered || isDragging;

  return (
    <div 
      className={cn("relative w-full overflow-hidden flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={cn(
          "overflow-x-auto select-none hide-native-scrollbar drag-scroll-row pb-1 cursor-grab active:cursor-grabbing", 
          isDragging ? "is-dragging" : ""
        )}
        style={{ 
          touchAction: 'pan-x',
          WebkitOverflowScrolling: 'touch' 
        }}
      >
        {/* 
          반응형 수정: 
          inline-flex 구조에서 padding-right가 무시되는 문제를 해결하기 위해 
          마지막에 spacer div를 추가하여 여백을 확보함 
        */}
        <div className={cn("inline-flex items-center contents-wrapper [&_img]:pointer-events-none pl-layout-x", contentClassName)}>
          {children}
          {/* 마지막 카드 뒤 여백 */}
          <div className="w-layout-x flex-shrink-0 h-1" aria-hidden="true" />
        </div>
      </div>

      {isScrollable && (
        <div className={cn(
          "px-layout-x mt-2 mb-2 transition-opacity duration-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="relative w-full h-[7px] bg-border-divider rounded-full overflow-hidden">
            <div 
              className="absolute top-0 h-full bg-tab-inactive rounded-full transition-transform duration-75 ease-out"
              style={{ 
                width: `${thumbWidthPercent}%`,
                transform: `translateX(${thumbLeftPercent * (100 / thumbWidthPercent)}%)`
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
