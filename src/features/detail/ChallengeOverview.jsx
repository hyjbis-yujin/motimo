import React from 'react';

/**
 * 참여 인원을 보여주는 둥근 Pill 버튼 형태의 컴포넌트 (디자인 정밀 수정 반영)
 */
export function ParticipantSummaryPill({ total, avatars }) {
  return (
    <div className="flex items-center justify-center bg-[#f3fbf8] h-[64px] rounded-full px-6 gap-3 self-center">
      {/* 아바타 스택 (그림자 제거, 테두리 색상을 배경색과 통일) */}
      <div className="flex -space-x-3">
        {avatars?.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt="Participant" 
            className="w-10 h-10 rounded-full border-2 border-[#f3fbf8] object-cover"
          />
        ))}
      </div>
      
      {/* 텍스트 정보 */}
      <p className="text-text-dark text-[14px] font-medium">
        총 <span className="text-primary-mint font-bold">{total}명</span>이 함께 하고 있어요!
      </p>
    </div>
  );
}

/**
 * 챌린지의 기본 타이틀과 요약 정보를 제공하는 섹션
 */
export default function ChallengeOverview({ title, description, participants }) {
  return (
    <div className="flex flex-col text-center px-layout-x gap-3 mb-6">
      <h2 className="text-[20px] font-bold text-text-dark leading-tight mt-1">
        {title}
      </h2>
      <p className="text-text-secondary text-[14px]">
        {description}
      </p>
      
      <div className="mt-2">
        <ParticipantSummaryPill 
          total={participants.total} 
          avatars={participants.avatars} 
        />
      </div>
    </div>
  );
}
