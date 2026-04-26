import React from 'react';
import Badge from '../../components/ui/Badge';
import { cn } from '../../utils/cn';

// 아바타 이미지 임포트 (1.svg ~ 5.svg)
import avatar1 from '../../assets/images/profiles/avatar-1.svg';
import avatar2 from '../../assets/images/profiles/avatar-2.svg';
import avatar3 from '../../assets/images/profiles/avatar-3.svg';
import avatar4 from '../../assets/images/profiles/avatar-4.svg';
import avatar5 from '../../assets/images/profiles/avatar-5.svg';

const STATIC_AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];

/**
 * 참여 인원을 보여주는 최근 Pill 버튼 형태의 컴포넌트
 */
export function ParticipantSummaryPill({ total }) {
  return (
    <div className="flex flex-wrap items-center justify-center bg-primary-light min-h-[60px] rounded-full px-6 py-3 gap-3 self-center">
      {/* 아바타 스택 (1.svg ~ 5.svg 적용) */}
      <div className="flex -space-x-3 flex-shrink-0">
        {STATIC_AVATARS.map((src, i) => (
          <div 
            key={i}
            className="w-[40px] h-[40px] rounded-full bg-white border-[2px] border-primary-light flex items-center justify-center overflow-hidden shadow-sm"
          >
            <img 
              src={src} 
              alt="Participant" 
              className="w-[21px] h-[21px] object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* 텍스트 정보 */}
      <p className="text-text-dark text-[14px] font-medium leading-tight">
        총 <span className="text-primary-mint font-bold">{total}명</span>이 함께 하고 있어요
      </p>
    </div>
  );
}

/**
 * 챌린지의 기본 타이틀과 요약 정보를 제공하는 섹션
 */
export default function ChallengeOverview({ title, description, participants, badge }) {
  return (
    <div className="flex flex-col text-center px-layout-x gap-3 mb-6">
      {badge && (
        <div className="flex justify-center mb-1">
          <Badge className="px-4 py-2 text-[13px] !shadow-none flex-shrink-0" variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="text-[20px] font-bold text-text-dark leading-tight">
        {title}
      </h2>
      <p className="text-text-secondary text-[14px]">
        {description}
      </p>
      
      <div className="mt-2 flex justify-center">
        <ParticipantSummaryPill 
          total={participants?.total || 0} 
        />
      </div>
    </div>
  );
}
