import React from 'react';
import { Link } from 'react-router-dom';
import MobileContainer from '../../components/layout/MobileContainer';
import LoginForm from '../../features/auth/LoginForm';
import Icon from '../../components/ui/Icon';

/**
 * 로그인 페이지 메인 컴포넌트
 */
export default function LoginPage() {
  return (
    <MobileContainer 
      showHeader={false} 
      showTabBar={false} 
      mainClassName="bg-white"
    >
      <div className="flex flex-col items-center justify-center px-layout-x min-h-[100dvh] pb-10">
        
        {/* 상단 로고 영역 */}
        <div className="mb-[36px] flex flex-col items-center w-full">
          <Link to="/" className="mb-8 cursor-pointer">
            <Icon name="header-logo" />
          </Link>
          <h1 className="text-[20px] font-bold text-text-dark tracking-tight mb-[6px] text-center">
            오늘의 챌린지를 시작해볼까요?
          </h1>
          <p className="text-[14px] text-text-secondary font-medium tracking-tight text-center">
            로그인하고 나만의 일상을 열어가보세요
          </p>
        </div>

        {/* 폼 영역 */}
        <div className="w-full max-w-[340px]">
          <LoginForm />
        </div>
      </div>
    </MobileContainer>
  );
}
