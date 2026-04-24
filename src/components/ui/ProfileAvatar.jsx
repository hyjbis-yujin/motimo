import Icon from './Icon';
import { cn } from '../../utils/cn';

export default function ProfileAvatar({ className }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative w-[70px] h-[70px] rounded-[28px] flex-shrink-0 flex items-center justify-center bg-white ring-[3px] ring-primary-mint ring-offset-[2.2px] ring-offset-bg-app shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="w-[64px] h-[64px] rounded-[28px] bg-[#f2f2f2] flex items-center justify-center">
          <Icon name="tab-my-active" className="w-[32px] h-[32px] opacity-20" />
        </div>
      </div>
    </div>
  );
}
