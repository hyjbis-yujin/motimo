import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import MobileContainer from '../../components/layout/MobileContainer';
import Tabs from '../../components/ui/Tabs';
import ChallengeHero from '../../features/detail/ChallengeHero';
import ChallengeOverview from '../../features/detail/ChallengeOverview';
import ChallengeInfoCard from '../../features/detail/ChallengeInfoCard';
import AttendanceStatusRow from '../../features/detail/AttendanceStatusRow';
import AttendanceSummaryBox from '../../features/detail/AttendanceSummaryBox';
import AttendanceHistoryList from '../../features/detail/AttendanceHistoryList';
import StickyActionButton from '../../features/detail/StickyActionButton';
import EmptyState from '../../components/ui/EmptyState';
import { CHALLENGE_DETAIL } from '../../data/challengeDetailData';
import { FEED_CHALLENGES, POPULAR_CHALLENGES, TOP_CARDS } from '../../data/homeData';
import { useAuthStore } from '../../store/useAuthStore';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 챌린지 상세페이지 메인 컴포넌트
 */
const EMPTY_ARRAY = [];

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  
  const joinedChallenges = useChallengeStore(state => state.joinedChallenges || EMPTY_ARRAY);
  const isJoined = useMemo(() => joinedChallenges.includes(String(id)), [joinedChallenges, id]);

  const availableTabs = ["상세내용", "출석체크"];
  const [activeTab, setActiveTab] = useState("상세내용");

  const detailData = useMemo(() => {
    const allChallenges = [
      ...FEED_CHALLENGES,
      ...POPULAR_CHALLENGES,
      TOP_CARDS.left,
      TOP_CARDS.right
    ];
    
    const found = allChallenges.find(c => String(c.id) === String(id));
    
    const baseDetail = {
      ...CHALLENGE_DETAIL,
      badge: "D-10",
      attendance: CHALLENGE_DETAIL.attendance || { myStatus: [], summary: { current: 0, total: 20 }, history: [] }
    };

    if (found) {
      return {
        ...baseDetail,
        title: found.title,
        description: found.desc,
        heroImage: found.imageUrl,
        badge: found.badge || baseDetail.badge,
        participants: {
          ...baseDetail.participants,
          total: found.participants || baseDetail.participants.total
        }
      };
    }
    
    return baseDetail;
  }, [id]);

  return (
    <MobileContainer 
      showHeader={false} 
      showTabBar={false}
      mainClassName="pt-0 pb-10"
    >
      {/* 1. 히어로 영역 */}
      <ChallengeHero imageUrl={detailData.heroImage} />

      {/* 2. 상세 컨텐츠 시트 */}
      <div className="relative -mt-[32px] bg-white rounded-t-sheet min-h-[600px] z-20 overflow-hidden">
        
        {/* 탭 메뉴 */}
        <div className="pt-2">
          <Tabs 
            tabs={availableTabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            isStatic={true}
            hideBaselineFullWidth={true}
          />
        </div>

        {/* 탭 컨텐츠 컨테이너 */}
        <div className="pt-8">
          {activeTab === "상세내용" ? (
            <div>
              <ChallengeOverview 
                challengeId={id}
                title={detailData.title}
                description={detailData.description}
                participants={detailData.participants}
                badge={detailData.badge}
                isJoined={isJoined}
              />
              <ChallengeInfoCard info={detailData.info} />
            </div>
          ) : (
            <div className="px-layout-x min-h-[450px] flex flex-col justify-center">
              {!isLoggedIn ? (
                <EmptyState 
                  title="로그인이 필요해요"
                  description="로그인 후 출석 현황을 확인할 수 있어요."
                  actionLabel="로그인하러 가기"
                  actionTo="/login"
                  className="py-10"
                />
              ) : !isJoined ? (
                <EmptyState 
                  iconName="notif-notjoined"
                  title="참여 중인 챌린지가 아니에요"
                  description="챌린지 참여 후 출석체크를 할 수 있어요."
                  className="py-10"
                />
              ) : (
                /* 출석 체크 탭 - 참여 중인 경우 */
                <>
                  {/* A. 나의 출석현황 섹션 */}
                  <div className="flex flex-col items-center mb-8">
                    <h3 className="text-[18px] font-bold text-text-dark mb-6 text-center w-full">나의 출석현황</h3>
                    <AttendanceStatusRow challengeId={id} statusList={detailData.attendance?.myStatus || []} />
                  </div>

                  <AttendanceSummaryBox 
                    challengeId={id}
                    total={detailData.attendance?.summary?.total || 20}
                  />

                  {/* B. 실시간 출석 현황 목록 */}
                  <div className="mt-5">
                    <AttendanceHistoryList history={detailData.attendance?.history || []} />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <StickyActionButton activeTab={activeTab} challengeId={id} isJoined={isJoined} />
    </MobileContainer>
  );
}
