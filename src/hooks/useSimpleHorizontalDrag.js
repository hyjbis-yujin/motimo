import { useRef, useState, useCallback } from 'react';

/**
 * 단순한 마우스 드래그 가로 스크롤 훅
 * @returns {Object} { scrollRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, isDragging }
 */
export default function useSimpleHorizontalDrag() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    // 클릭한 위치의 X 좌표와 현재 스크롤 위치 저장
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    
    // 텍스트 선택 방지
    document.body.style.userSelect = 'none';
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 드래그 가중치 (필요에 따라 조절)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  return {
    scrollRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    isDragging
  };
}
