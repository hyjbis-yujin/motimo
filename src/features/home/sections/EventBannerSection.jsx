import Icon from '../../../components/ui/Icon';

export default function EventBannerSection() {
  return (
    <section className="px-layout-x mt-[26px]">
      <div className="w-full h-[100px] bg-primary-light rounded-[16px] px-[28px] flex items-center justify-between">
        <div className="flex flex-col gap-1 tracking-tight">
          <div className="text-primary-mint font-bold text-[16px]">
            새로운 습관을 만들어보세요
          </div>
          <div className="text-text-secondary text-[12px] font-medium">
            매일 조금씩 성장하는 모티모
          </div>
        </div>

        {/* 달력 느낌이 나는 구조로 보정된 placeholder 블록 */}
        <div className="relative w-[50px] h-[50px] bg-white rounded-box flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(41,216,181,0.15)] border border-primary-mint/10">
          <Icon name="category-habit" />
        </div>
      </div>
    </section>
  );
}
