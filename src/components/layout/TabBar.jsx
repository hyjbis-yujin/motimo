import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Icon from '../ui/Icon';

export default function TabBar() {
  const tabs = [
    { name: '홈', path: '/', icon: 'tab-home' },
    { name: '글쓰기', path: '/login', icon: 'tab-write' },
    { name: '마이', path: '/login', icon: 'tab-my' }
  ];

  return (
    <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center px-layout-x pointer-events-none">
      <nav className="w-full max-w-[340px] h-[72px] bg-white rounded-pill shadow-tabbar px-10 flex items-center border border-border-light/40 pointer-events-auto">
        <ul className="flex items-center justify-between w-full">
          {tabs.map((tab) => (
            <li key={tab.name} className="flex-1 flex justify-center">
              <NavLink 
                to={tab.path}
                className={({ isActive }) => cn(
                  "flex flex-col items-center gap-1.5 transition-colors",
                  isActive ? "text-primary-mint" : "text-tab-inactive"
                )}
              >
                {({ isActive }) => (
                  <>
                    <Icon 
                      name={tab.icon}
                      active={isActive}
                    />
                    <span className="text-[11px] font-semibold tracking-tight">{tab.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
