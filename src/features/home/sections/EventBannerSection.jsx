import React from "react";
import bannerIllustration from "../../../assets/images/banner-illustration.png";

/**
 * 홈페이지 중앙 이벤트/안내 배너 섹션
 */
export default function EventBannerSection() {
  return (
    <section className="px-layout-x mt-6">
      <div className="w-full h-banner bg-primary-light rounded-banner pl-5 pr-0 sm:pl-7 flex items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-1.5 tracking-tight z-10 flex-1 min-w-0 pr-2">
          <div className="text-primary-mint font-bold text-[clamp(13px,3.48vw,16px)] break-keep leading-tight">
            새로운 일상을 만들어보세요
          </div>
          <div className="text-text-secondary font-medium text-[clamp(11px,2.6vw,12px)] break-keep leading-tight">
            매일 조금씩 성장하는 모티모
          </div>
        </div>

        {/* 배너 장식용 아이콘 */}
        <img
          src={bannerIllustration}
          alt="banner illustration"
          className="h-auto w-auto max-w-[clamp(120px,40vw,200px)] object-contain shrink-0 overflow-hidden"
        />
      </div>
    </section>
  );
}
