import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import CategoryMenuItem from '../../../components/ui/CategoryMenuItem';
import { CATEGORIES } from '../../../constants/common';

export default function CategorySection({ activeCategoryType, onCategoryChange }) {
  return (
    <section className="mt-10">
      <div className="px-layout-x mb-5">
        <SectionTitle title="원하는 챌린지를 골라보세요" />
      </div>
      
      <div className="flex items-center gap-3.5 w-full overflow-x-auto hide-native-scrollbar px-layout-x pb-4 -mb-4">
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
