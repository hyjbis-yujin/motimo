import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';
import { useChallengeStore } from '../../store/useChallengeStore';
import { useNotificationStore } from '../../store/useNotificationStore';

/**
 * 화면 하단 고정 액션 버튼 컴포넌트
 * 로그인 여부, 참여 상태, 출석 여부에 따라 동적으로 색상과 텍스트가 변경됩니다.
 */
export default function StickyActionButton({ activeTab, challengeId, challengeTitle, totalDays }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  
  const joinedChallenges = useChallengeStore(state => state.joinedChallenges || []);
  const joinChallenge = useChallengeStore(state => state.joinChallenge);
  const leaveChallenge = useChallengeStore(state => state.leaveChallenge);
  const checkAttendance = useChallengeStore(state => state.checkAttendance);
  const hasCheckedToday = useChallengeStore(state => state.hasCheckedToday);

  const addNotification = useNotificationStore(state => state.addNotification);

  const isAttendanceTab = activeTab === "출석체크";
  const isJoined = isLoggedIn && joinedChallenges.includes(String(challengeId));
  const checkedToday = isLoggedIn && isJoined && hasCheckedToday(challengeId);

  const handleAction = () => {
    try {
      if (!isLoggedIn) {
        navigate('/login', { state: { from: location.pathname } });
        return;
      }

      if (isJoined) {
        if (isAttendanceTab) {
          if (checkedToday) {
            alert('이미 오늘의 출석체크가 완료되었습니다! 🎉');
            return;
          }
          
          checkAttendance(challengeId);
          addNotification(
            '출석 체크 완료!', 
            `[${challengeTitle}] 오늘도 한 걸음 성장하셨네요. 꾸준함이 무기입니다!`,
            'attendance'
          );
          alert('출석체크가 성실하게 완료되었습니다! 🎉');
        } else {
          // iOS Safari에서 confirm 다이얼로그 호출 시 setTimeout으로 래핑하여
          // 터치 이벤트 사이클 완료 후 실행되도록 보장
          setTimeout(() => {
            const confirmed = window.confirm('정말로 이 챌린지에서 탈퇴하시겠습니까?');
            if (confirmed) {
              leaveChallenge(challengeId);
              addNotification(
                '챌린지 탈퇴 처리', 
                `[${challengeTitle}] 탈퇴 처리가 완료되었습니다. 새로운 도전을 기다릴게요.`,
                'leave'
              );
              alert('챌린지 탈퇴가 완료되었습니다.');
            }
          }, 100);
        }
      } else {
        joinChallenge(challengeId, totalDays);
        addNotification(
          '새로운 시작!', 
          `[${challengeTitle}] 참여 완료! 첫 발걸음을 응원합니다. 화이팅! 💪`,
          'join'
        );
        alert('챌린지에 참여하였습니다! 출석체크 탭으로 이동하여 첫 인증을 시작해보세요! 🚀');
      }
    } catch (error) {
      console.error('StickyActionButton Error:', error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const getButtonText = () => {
    if (!isLoggedIn) return "참여하기";
    if (isJoined) {
      return isAttendanceTab ? (checkedToday ? "출석 완료" : "출석하기") : "탈퇴하기";
    }
    return "참여하기";
  };

  const getButtonBgColor = () => {
    if (isJoined) {
      if (isAttendanceTab) {
        return checkedToday ? "bg-primary-dark/60" : "bg-primary-dark";
      }
      return "bg-text-dark/70";
    }
    return "bg-primary-dark";
  };

  if (!isLoggedIn && isAttendanceTab) return null;
  
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile px-layout-x pb-6 bg-white pt-2 z-50">
      <button 
        type="button"
        onClick={handleAction}
        className={cn(
          "w-full h-[64px] rounded-btn text-white text-md font-medium flex items-center justify-center transition-all active:scale-[0.97]",
          getButtonBgColor()
        )}
      >
        {getButtonText()}
      </button>
    </div>
  );
}
