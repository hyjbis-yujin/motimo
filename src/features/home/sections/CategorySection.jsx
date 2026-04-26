import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import CategoryMenuItem from '../../../components/ui/CategoryMenuItem';
import { CATEGORIES } from '../../../constants/common';

export default function CategorySection({ activeCategoryType, onCategoryChange }) {
  return (
    /* 상하단 간격 및 레이아웃 유지 */
    <section className="mt-10">
      <div className="px-layout-x mb-[20px]">
        <SectionTitle title="원하는 챌린지를 골라보세요" />
      </div>
      
      {/* 
        반응형 디자인 개선: 
        기존 grid-cols-6 대신 flex + overflow-x-auto를 적용하여 
        화면이 좁아져도 버튼 크기가 작아지지 않고 가로 스크롤되도록 수정 
      */}
      <div className="flex items-center gap-[14px] w-full overflow-x-auto hide-native-scrollbar px-layout-x pb-4 -mb-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex-shrink-0 w-[58px]">
            <CategoryMenuItem 
              label={cat.label} 
              type={cat.type}
              isActive={cat.type === activeCategoryType} 
              onClick={() => onCategoryChange(cat.type)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
