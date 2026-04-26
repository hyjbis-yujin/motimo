import React from 'react';
import Icon from '../../components/ui/Icon';

/**
 * 챌린지 상세 - 정원, 기간, 상세 본문을 포함하는 정보 카드
 */
export default function ChallengeInfoCard({ info }) {
  if (!info) return null;

  const splitCapacity = info.capacity?.split(' ') || [];
  const capLabel = '인원'; // '정원'에서 '인원'으로 변경
  const capValue = splitCapacity.slice(1).join(' ');

  const splitPeriod = info.period?.split(' ') || [];
  const periodLabel = splitPeriod[0] || '기간';
  const periodValue = splitPeriod.slice(1).join(' ');

  return (
    <div className="mx-layout-x mb-8 py-6 px-[32px] bg-white border-[5px] border-bg-subtle rounded-[24px]">
      {/* 1. 상단 정보 섹션 - 타이틀 컬러 primary-mint로 변경 */}
      <h3 className="text-[16px] font-bold text-primary-mint mb-5 tracking-tight">참여정보</h3>
      <div className="flex flex-col gap-4 mb-7">
        <div className="flex items-center gap-2">
          <Icon name="status-capacity" />
          <div className="text-[14px] flex items-center gap-2">
            <span className="text-text-secondary font-medium">{capLabel}</span>
            <span className="text-text-dark font-medium">{capValue}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="status-period" />
          <div className="text-[14px] flex items-center gap-2">
            <span className="text-text-secondary font-medium">{periodLabel}</span>
            <span className="text-text-dark font-medium">{periodValue}</span>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-[1px] bg-[#ececec] w-full mb-6" />

      {/* 2. 상세 본문 섹션 - 타이틀 컬러 primary-mint로 변경 */}
      <h3 className="text-[16px] font-bold text-primary-mint mb-3 tracking-tight">챌린지 설명</h3>
      <p className="text-text-secondary text-[14px] leading-[1.65] break-keep">
        {info.detailBody}
      </p>
    </div>
  );
}
