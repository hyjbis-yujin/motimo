import Icon from '../../components/ui/Icon';

/**
 * 챌린지의 정원, 기간, 상세 본문을 포함하는 정보 카드 (디자인 정밀 수정 반영)
 */
export default function ChallengeInfoCard({ info }) {
  return (
    <div className="mx-layout-x mb-8 py-6 px-[32px] bg-white border-[5px] border-[#f8f8f8] rounded-[24px]">
      {/* 1. 상단 정보 섹션 */}
      <h3 className="text-[16px] font-bold text-text-dark mb-4">챌린지 설명</h3>
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Icon name="status-capacity" />
          <span className="text-text-secondary text-[14px]">{info.capacity}</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="status-period" />
          <span className="text-text-secondary text-[14px]">{info.period}</span>
        </div>
      </div>
      
      {/* 구분선 */}
      <div className="h-[1px] bg-[#ececec] w-full mb-6" />
      
      {/* 2. 상세 본문 섹션 */}
      <h3 className="text-[16px] font-bold text-text-dark mb-3">챌린지 설명</h3>
      <p className="text-text-secondary text-[14px] leading-[1.6]">
        {info.detailBody}
      </p>
    </div>
  );
}
