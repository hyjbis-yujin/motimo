import Icon from '../components/ui/Icon';

/**
 * 글쓰기 기능 준비 중 안내 페이지
 */
export default function WritePlaceholderPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-layout-x text-center bg-white">
      {/* 1. 심볼 영역 */}
      <div className="w-[120px] h-[120px] bg-primary-light rounded-[40px] flex items-center justify-center mb-8">
        <Icon 
          name="tab-write-active" 
          className="w-[64px] h-[64px] opacity-80" 
        />
      </div>

      {/* 2. 메인 타이틀 */}
      <h2 className="text-[24px] font-bold text-text-dark mb-4 tracking-tight">
        서비스를 준비 중입니다
      </h2>

      {/* 3. 설명 문구 */}
      <p className="text-[15px] text-text-secondary leading-relaxed mb-10">
        더 나은 글쓰기 기능으로 찾아올 예정이에요.<br />
        조금만 기다려 주세요!
      </p>

      {/* 4. 보조 안내 카드 */}
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F9F8] rounded-full border border-primary-mint/10">
        <div className="w-1.5 h-1.5 bg-primary-mint rounded-full animate-pulse" />
        <span className="text-[13px] font-semibold text-[#42b79f]">
          업데이트 소식을 기다려주세요
        </span>
      </div>
    </section>
  );
}
