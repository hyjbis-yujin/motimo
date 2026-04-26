import React from 'react';

// 아바타 이미지 임포트 (1.svg ~ 5.svg)
import avatar1 from '../../assets/images/profiles/avatar-1.svg';
import avatar2 from '../../assets/images/profiles/avatar-2.svg';
import avatar3 from '../../assets/images/profiles/avatar-3.svg';
import avatar4 from '../../assets/images/profiles/avatar-4.svg';
import avatar5 from '../../assets/images/profiles/avatar-5.svg';

const STATIC_AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5];

/**
 * 개별 출석 히스토리 아이템
 */
function HistoryItem({ avatar, user, date, index }) {
  // 아이템별로 랜덤 또는 순차적으로 아바타 할당 (고정된 느낌을 위해 index 활용)
  const displayAvatar = STATIC_AVATARS[index % STATIC_AVATARS.length];

  return (
    <div className="flex items-center gap-4 bg-bg-subtle p-4 rounded-card h-[78px]">
      <div className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center shadow-inner overflow-hidden">
        <img src={displayAvatar} alt="User" className="w-[28px] h-[28px] object-contain" />
      </div>
      <p className="text-base text-text-dark leading-tight">
        <span className="font-bold">{user}</span>님이 <br/>
        <span className="text-text-secondary text-sm">{date} 출석하셨습니다</span>
      </p>
    </div>
  );
}

/**
 * 실시간 출석 현황 리스트 섹션
 */
export default function AttendanceHistoryList({ history }) {
  return (
    <div className="flex flex-col gap-[14px] mt-6 pb-20">
      {history?.map((item, index) => (
        <HistoryItem 
          key={item.id}
          avatar={item.avatar}
          user={item.user}
          date={item.date}
          index={index}
        />
      ))}
    </div>
  );
}
