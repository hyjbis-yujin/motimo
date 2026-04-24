import Icon from '../../components/ui/Icon';

/**
 * 나의 출석 인증 수 요약 박스 (디자인 정밀 수정 반영)
 */
export default function AttendanceSummaryBox({ current, total }) {
  return (
    <div className="flex items-center justify-between bg-[#F5F9F8] h-[68px] rounded-[20px] px-6 mt-8">
      <div className="flex items-center gap-3">
        <Icon name="status-flag" />
        <span className="text-text-dark font-semibold text-[15px]">나의 출석인증 수</span>
      </div>
      
      <div className="text-text-secondary text-[15px] font-medium">
        <span className="text-[#39b79d] font-bold">{current}일</span> / {total}일
      </div>
    </div>
  );
}
