import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import MobileContainer from '../components/layout/MobileContainer';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';
import ChallengeDetailPage from '../pages/ChallengeDetailPage';
import LoginPage from '../pages/LoginPage';
import NotificationPage from '../pages/NotificationPage';
import SearchPage from '../pages/SearchPage';

/**
 * 전역 레이아웃 래퍼
 */
const AppLayout = () => {
  return <Outlet />;
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
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
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
