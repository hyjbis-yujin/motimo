import React from 'react';
import Icon from '../../../components/ui/Icon';

/**
 * 홈페이지 중앙 이벤트/안내 배너 섹션
 */
export default function EventBannerSection() {
  return (
    <section className="px-layout-x mt-6">
      <div className="w-full h-banner bg-primary-light rounded-banner px-7 flex items-center justify-between">
        <div className="flex flex-col gap-1 tracking-tight">
          <div className="text-primary-mint font-bold text-[16px]">
            새로운 일상을 만들어보세요
          </div>
          <div className="text-text-secondary text-sm font-medium">
            매일 조금씩 성장하는 모티모
          </div>
        </div>

        {/* 배너 장식용 아이콘 박스 */}
        <div className="relative w-[50px] h-[50px] bg-white rounded-box flex items-center justify-center shrink-0 shadow-banner border border-primary-mint/10">
          <Icon name="category-habit" />
        </div>
      </div>
    </section>
  );
}
