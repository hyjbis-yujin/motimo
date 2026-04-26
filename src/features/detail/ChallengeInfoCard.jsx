import React from 'react';
import Icon from '../../components/ui/Icon';

/**
 * 챌린지 상세 - 참여 정보 카드 (인원, 기간, 설명 등)
 */
export default function ChallengeInfoCard({ info }) {
  if (!info) return null;

  const splitCapacity = info.capacity?.split(' ') || [];
  const capLabel = '인원';
  const capValue = splitCapacity.slice(1).join(' ');

  const splitPeriod = info.period?.split(' ') || [];
  const periodLabel = splitPeriod[0] || '기간';
  const periodValue = splitPeriod.slice(1).join(' ');

  return (
    <div className="mx-layout-x mb-8 py-6 px-8 bg-white border-[5px] border-bg-gray rounded-box-lg">
      {/* 1. 상단 정보 섹션 */}
      <h3 className="text-md font-bold text-primary-mint mb-5 tracking-tight">참여정보</h3>
      <div className="flex flex-col gap-4 mb-7">
        <div className="flex items-center gap-2">
          <Icon name="status-capacity" />
          <div className="text-base flex items-center gap-2">
            <span className="text-text-secondary font-medium">{capLabel}</span>
            <span className="text-text-dark font-medium">{capValue}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="status-period" />
          <div className="text-base flex items-center gap-2">
            <span className="text-text-secondary font-medium">{periodLabel}</span>
            <span className="text-text-dark font-medium">{periodValue}</span>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-[1px] bg-border-divider w-full mb-6" />

      {/* 2. 상세 본문 섹션 */}
      <h3 className="text-md font-bold text-primary-mint mb-3 tracking-tight">챌린지 설명</h3>
      <p className="text-text-secondary text-base leading-relaxed break-keep">
        {info.detailBody}
      </p>
    </div>
  );
}
