import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { cn } from '../../utils/cn';
import useSimpleHorizontalDrag from '../../hooks/useSimpleHorizontalDrag';

/**
 * 전역 공통 가로 스크롤 컴포넌트
 * 마우스 드래그 이벤트를 지원하며 커스텀 스크롤바를 별도 제공합니다.
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

  // 스크롤바 상태 관리
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

  // 초기 로드 및 리사이즈 대응
  useEffect(() => {
    updateScrollState();
    
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      updateScrollState();
    });
    
    observer.observe(el);
    // 컨텐츠가 추가될 수 있으므로 자식 요소도 감시
    const contents = el.querySelector('.contents-wrapper');
    if (contents) observer.observe(contents);

    return () => observer.disconnect();
  }, [updateScrollState]);

  // 마우스 스크롤 연동 보정
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
          left: delta * 2.5, // 감도 조절
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

  // 커스텀 스크롤바 계산
  const { thumbWidthPercent, thumbLeftPercent, isScrollable } = useMemo(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollState;
    if (scrollWidth <= clientWidth) {
      return { thumbWidthPercent: 0, thumbLeftPercent: 0, isScrollable: false };
    }

    const ratio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(ratio * 100, 10); // 최소 너비 10%
    
    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / (maxScroll || 1);
    const thumbLeft = progress * (100 - thumbWidth);

    return { 
      thumbWidthPercent: thumbWidth, 
      thumbLeftPercent: thumbLeft,
      isScrollable: true 
    };
  }, [scrollState]);

  // 가시성 조건: 호버 중이거나 드래그 중인 경우
  const isVisible = isHovered || isDragging;

  return (
    <div 
      className={cn("relative w-full overflow-hidden flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. 실제 스크롤 컨테이너 */}
      <div 
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={cn(
          "overflow-x-auto select-none hide-native-scrollbar drag-scroll-row pb-1", 
          isDragging ? "is-dragging" : ""
        )}
        style={{ touchAction: 'pan-y' }}
      >
        <div className={cn("w-max contents-wrapper [&_img]:pointer-events-none px-layout-x", contentClassName)}>
          {children}
        </div>
      </div>

      {/* 2. 커스텀 스크롤바 */}
      {isScrollable && (
        <div className={cn(
          "px-layout-x mt-2 mb-2 transition-opacity duration-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="relative w-full h-[7px] bg-[#ededed] rounded-full overflow-hidden">
            <div 
              className="absolute top-0 h-full bg-[#c4c4c4] rounded-full transition-transform duration-75 ease-out"
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
