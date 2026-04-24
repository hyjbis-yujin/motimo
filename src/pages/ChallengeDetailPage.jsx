import React, { useState } from 'react';
import MobileContainer from '../components/layout/MobileContainer';
import Tabs from '../components/ui/Tabs';
import ChallengeHero from '../features/detail/ChallengeHero';
import ChallengeOverview from '../features/detail/ChallengeOverview';
import ChallengeInfoCard from '../features/detail/ChallengeInfoCard';
import AttendanceStatusRow from '../features/detail/AttendanceStatusRow';
import AttendanceSummaryBox from '../features/detail/AttendanceSummaryBox';
import AttendanceHistoryList from '../features/detail/AttendanceHistoryList';
import StickyActionButton from '../features/detail/StickyActionButton';
import { CHALLENGE_DETAIL } from '../constants/challengeDetailData';

/**
 * 챌린지 상세페이지 메인 컨포넌트
 */
export default function ChallengeDetailPage() {
  const [activeTab, setActiveTab] = useState("상세내용");
  const tabs = ["상세내용", "출석체크"];

  return (
    <MobileContainer 
      showHeader={false} 
      showTabBar={false}
      mainClassName="pt-0"
    >
      {/* 1. 하이라이트 히어로 영역 (240px) */}
      <ChallengeHero imageUrl={CHALLENGE_DETAIL.heroImage} />

      {/* 2. 상세 컨텐츠 시트 (상단 radius 28px 고정, 오버랩 -32px) */}
      {/* 모든 애니메이션 및 트랜지션 제거 (isStatic) */}
      <div className="relative -mt-[32px] bg-white rounded-t-[26px] min-h-[600px] z-20 overflow-hidden">
        
        {/* 탭 메뉴 (정격 디자인 반영: baseline 너비 조절 및 정적 모드) */}
        <div className="pt-2">
          <Tabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            isStatic={true}
            hideBaselineFullWidth={true}
          />
        </div>

        {/* 탭별 컨텐츠 컨테이너 (트랜지션 제거) */}
        <div className="pt-8">
          {activeTab === "상세내용" ? (
            <div>
              {/* [탭 1: 상세내용] - 애니메이션 제거 */}
              <ChallengeOverview 
                title={CHALLENGE_DETAIL.title}
                description={CHALLENGE_DETAIL.description}
                participants={CHALLENGE_DETAIL.participants}
              />
              <ChallengeInfoCard info={CHALLENGE_DETAIL.info} />
            </div>
          ) : (
            <div className="px-layout-x">
              {/* [탭 2: 출석체크] - 애니메이션 제거 */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-[18px] font-bold text-text-dark mb-6">나의 출석현황</h3>
                <AttendanceStatusRow statusList={CHALLENGE_DETAIL.attendance.myStatus} />
              </div>

              <AttendanceSummaryBox 
                current={CHALLENGE_DETAIL.attendance.summary.current}
                total={CHALLENGE_DETAIL.attendance.summary.total}
              />

              <div className="mt-8">
                <h3 className="text-[16px] font-bold text-text-dark mb-1">실시간 출석현황</h3>
                <AttendanceHistoryList history={CHALLENGE_DETAIL.attendance.history} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <StickyActionButton activeTab={activeTab} />
    </MobileContainer>
  );
}
