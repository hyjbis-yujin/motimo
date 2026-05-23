import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../../../store/useAuthStore";
import Avatar from "../../../components/ui/Avatar";

/**
 * 홈 상단 프로필 요약 섹션
 */
export default function ProfileSummarySection() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuthStore();

  const title = isLoggedIn ? `${user?.name}님 환영해요!` : "로그인이 필요해요";
  const subTitle = isLoggedIn ? "오늘의 즐거운 챌린지 하세요!" : "나만의 멋진 챌린지를 시작해보세요";
  const buttonLabel = isLoggedIn ? "로그아웃" : "시작하기";
  const handleAction = isLoggedIn ? () => logout() : () => navigate("/login");

  return (
    <section className="px-layout-x mt-8 mb-4">
      <div className="bg-bg-subtle rounded-sheet p-5 flex items-center gap-layout-x border border-border-card shadow-card-subtle">
        {/* 1. 프로필 이미지 박스 (로그인 여부에 따라 아바타 교체) */}
        <Avatar isLoggedIn={isLoggedIn} src={user?.profileImage} iconSize={28} className="shadow-inner" />

        {/* 2. 텍스트 영역 */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-[clamp(13px,3.48vw,16px)] font-bold text-text-dark leading-tight tracking-tight break-keep">
            {title}
          </h3>
          <p className="text-[clamp(11px,2.6vw,12px)] leading-5 text-text-secondary font-medium tracking-tight mt-1 break-keep">
            {subTitle}
          </p>
        </div>

        {/* 3. 액션 버튼 */}
        <Button
          variant="small"
          className="shrink-0 px-4 h-btn-sm bg-btn-dark rounded-btn-sm text-[13px]"
          onClick={handleAction}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
