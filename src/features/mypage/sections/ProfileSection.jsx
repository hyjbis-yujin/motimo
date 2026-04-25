import React from 'react';
import { cn } from '../../../utils/cn';
import { useAuthStore } from '../../../store/useAuthStore';

export default function ProfileSection({ className }) {
  const { isLoggedIn, user } = useAuthStore();
  
  const displayName = isLoggedIn ? user?.name : "박구고마님";

  return (
    <section className={cn("flex flex-col items-center pt-[28px] mb-[4px]", className)}>
      <div className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-text-dark tracking-tight">
          {displayName}
        </h2>
      </div>
    </section>
  );
}
