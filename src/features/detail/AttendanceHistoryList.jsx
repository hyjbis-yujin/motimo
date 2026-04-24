import React from 'react';

/**
 * 개별 출석 히스토리 카드 항목
 */
function HistoryItem({ avatar, user, date }) {
  return (
    <div className="flex items-center gap-4 bg-[#f7f7f7] p-4 rounded-[20px] h-[78px]">
      <img src={avatar} alt="User" className="w-12 h-12 rounded-full object-cover" />
      <p className="text-[14px] text-text-dark leading-tight">
        <span className="font-bold">{user}</span>님이 <br/>
        <span className="text-text-secondary text-[12px]">{date} 출석하셨습니다.</span>
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
      {history?.map((item) => (
        <HistoryItem 
          key={item.id}
          avatar={item.avatar}
          user={item.user}
          date={item.date}
        />
      ))}
    </div>
  );
}
