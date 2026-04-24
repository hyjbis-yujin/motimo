import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import MobileContainer from '../components/layout/MobileContainer';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';
import ChallengeDetailPage from '../pages/ChallengeDetailPage';
import WritePlaceholderPage from '../pages/WritePlaceholderPage';
import LoginPage from '../pages/LoginPage';

/**
 * 전역 레이아웃 래퍼
 */
const AppLayout = () => {
  return (
    <MobileContainer>
      <Outlet />
    </MobileContainer>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'explore',
        element: <div className="p-4 text-center text-text-muted mt-10">탐색 페이지 준비중</div>,
      },
      {
        path: 'write',
        element: <WritePlaceholderPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      }
    ]
  },
  {
    path: 'challenge/:id',
    element: <ChallengeDetailPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  }
]);
