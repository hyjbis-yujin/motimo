import React from 'react';
import { cn } from '../../utils/cn';
import Icon from './Icon';

export default function SectionTitle({ title, hasMintDot = false, icon, className }) {
  return (
    <h3 className={cn("font-bold text-[18px] text-text-dark flex items-center gap-1.5", className)}>
      {icon ? (
        <Icon name={icon} />
      ) : hasMintDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary-mint inline-block shrink-0 shadow-[0_0_6px_rgba(41,216,181,0.5)]" />
      )}
      {title}
    </h3>
  );
}
