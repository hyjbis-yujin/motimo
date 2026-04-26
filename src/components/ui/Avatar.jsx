import React from 'react';
import Icon from './Icon';
import { cn } from '../../utils/cn';

/**
 * 공통 아바타(프로필 이미지) 컴포넌트
 * @param {string} src - 프로필 이미지 URL
 * @param {boolean} isLoggedIn - 로그인 여부
 * @param {number} size - 컨테이너 크기 (기본 60px)
 * @param {string} className - 추가 컨테이너 클래스
 * @param {number} iconSize - 내부 아이콘/이미지 크기
 */
export default function Avatar({ src, isLoggedIn, size = 60, className, iconSize }) {
  const containerClasses = cn(
    "flex-shrink-0 rounded-avatar bg-white border border-border-subtle flex items-center justify-center overflow-hidden",
    className
  );

  // 내부 아이콘/이미지 크기 결정 (전달되지 않으면 컨테이너의 약 50%)
  const internalSize = iconSize || (size * 0.5);

  return (
    <div 
      className={containerClasses}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {isLoggedIn && src ? (
        <img 
          src={src} 
          alt="프로필" 
          className="object-contain"
          style={{ width: `${internalSize}px`, height: `${internalSize}px` }}
        />
      ) : (
        <Icon 
          name="profile-default" 
          className="object-contain"
          width={internalSize}
          height={internalSize}
        />
      )}
    </div>
  );
}
