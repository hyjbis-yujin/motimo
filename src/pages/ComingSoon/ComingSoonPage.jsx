import React from 'react';
import MobileContainer from '../../components/layout/MobileContainer';
import EmptyState from '../../components/ui/EmptyState';

/**
 * 서비스 준비 중 안내 페이지
 */
export default function ComingSoonPage() {
  return (
    <MobileContainer 
      showHeader={false} 
      showTabBar={true} 
      className="bg-[#fcfcfc]"
    >
      <div className="flex flex-col items-center justify-center min-h-[80dvh] px-layout-x">
        <EmptyState 
          title="서비스를 준비중입니다"
          description={`더욱 멋진 기능을 위해 열심히 만들고 있어요\n조금만 더 기다려 주시면 감사하겠습니다`}
          actionLabel="홈으로 돌아가기"
          actionTo="/"
        />
      </div>
    </MobileContainer>
  );
}
