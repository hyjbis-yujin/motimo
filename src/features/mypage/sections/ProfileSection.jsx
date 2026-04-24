import Icon from '../../../components/ui/Icon';
import { USER_INFO } from '../../../constants/homeData';
import { cn } from '../../../utils/cn';

export default function ProfileSection({ className }) {
  return (
    <section className={cn("flex flex-col items-center pt-[28px] mb-[4px]", className)}>
      {/* 사용자명 + 수정 아이콘 (한 줄 중앙 정렬, 더 단정하게) */}
      <div className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-text-dark tracking-tight">
          {USER_INFO.name}
        </h2>
      </div>
    </section>
  );
}
