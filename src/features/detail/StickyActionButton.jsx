import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';
import { useChallengeStore } from '../../store/useChallengeStore';

/**
 * 화면 하단에 고정되는 CTA 버튼
 */
export default function StickyActionButton({ activeTab, challengeId, isJoined }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const { joinChallenge, leaveChallenge, checkAttendance, getAttendanceCount } = useChallengeStore();

  const isAttendanceTab = activeTab === "출석체크";
  
  const handleAction = () => {
    // 1. 로그인 여부 체크
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    // 2. 참여 상태에 따른 동작 분기
    if (isJoined) {
      if (isAttendanceTab) {
        // 출석체크 수행
        const currentCount = getAttendanceCount(challengeId);
        checkAttendance(challengeId, currentCount + 1);
      } else {
        // 탈퇴하기
        if (window.confirm('정말 이 챌린지에서 탈퇴하시겠습니까?')) {
          leaveChallenge(challengeId);
        }
      }
    } else {
      // 미참여 상태라면 어느 탭에서든 "참여하기" 수행
      joinChallenge(challengeId);
      alert('챌린지에 참여되었습니다!');
    }
  };

  const getButtonText = () => {
    if (isJoined) {
      return isAttendanceTab ? "출석하기" : "탈퇴하기";
    }
    // 미참여 상태일 때는 항상 "참여하기" 표시
    return "참여하기";
  };

  // 버튼 배경색 결정 로직
  const getButtonBgColor = () => {
    // 탈퇴하기 버튼일 때만 bg-text-dark 적용
    if (isJoined && !isAttendanceTab) {
      return "bg-text-dark";
    }
    // 참여하기, 출석하기는 bg-primary-dark 적용
    return "bg-primary-dark";
  };

  // 비로그인 상태이면서 출석체크 탭이라면 하단 버튼을 노출하지 않음 (중앙 EmptyState로 로그인 유도)
  if (!isLoggedIn && isAttendanceTab) return null;
  
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile px-layout-x pb-6 bg-white pt-2 z-50">
      <button 
        onClick={handleAction}
        className={cn(
          "w-full h-[60px] rounded-btn text-white text-[16px] font-medium flex items-center justify-center transition-opacity active:opacity-80",
          getButtonBgColor()
        )}
      >
        {getButtonText()}
      </button>
    </div>
  );
}
