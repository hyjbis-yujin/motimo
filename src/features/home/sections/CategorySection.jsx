import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import CategoryMenuItem from '../../../components/ui/CategoryMenuItem';
import { CATEGORIES } from '../../../constants/common';

export default function CategorySection({ activeCategoryType, onCategoryChange }) {
  return (
    <section className="px-layout-x mt-10">
      <SectionTitle title="원하는 챌린지를 골라보세요" className="mb-[20px]" />
      <div className="grid grid-cols-6 gap-[14px] w-full pb-2">
        {CATEGORIES.map((cat) => (
          <CategoryMenuItem 
            key={cat.id} 
            label={cat.label} 
            type={cat.type}
            isActive={cat.type === activeCategoryType} 
            onClick={() => onCategoryChange(cat.type)}
          />
        ))}
      </div>
    </section>
  );
}
