import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import { RECOMMENDED_CHALLENGE, USER_INFO } from '../../../constants/homeData';

export default function RecommendedChallengeSection() {
  const { title, currentInfo, buttonText } = RECOMMENDED_CHALLENGE;

  return (
    <section className="bg-[#f8f8f8] py-8 mt-6 mb-12">
      <div className="px-layout-x">
        <h4 className="text-[12px] font-medium text-[#9c9c9c] mb-3 ml-1 tracking-tight">
          {USER_INFO.name}님 이런 챌린지는 어떠세요?
        </h4>

        <div className="w-full h-[86px] bg-white rounded-recommend px-[20px] flex items-center justify-between mt-[10px]">

          <div className="flex items-center gap-[16px] ">
            <div className="w-[50px] h-[50px] rounded-[14px] overflow-hidden flex-shrink-0 border border-border-light flex items-center justify-center bg-[#f8f8f8]">
              <Icon name="category-hobby" className="opacity-40" />
            </div>

            <div className="flex flex-col gap-[2px] tracking-tight ">
              <div className="text-[15px] font-bold text-primary-mint leading-snug">{title}</div>
              <div className="text-[12px] font-medium text-text-secondary mt-0.5">{currentInfo}</div>
            </div>
          </div>

          <Button variant="small" className="h-[34px] px-[14px] text-[12px] font-semibold shrink-0 rounded-[10px] bg-[#2f2f31] text-white">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
