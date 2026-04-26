import React from 'react';
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';
import ChallengeDetailPage from '../pages/ChallengeDetail';
import LoginPage from '../pages/Login';
import NotificationPage from '../pages/Notification';
import SearchPage from '../pages/Search';
import ComingSoonPage from '../pages/ComingSoon';
import { useAuthStore } from '../store/useAuthStore';

/**
 * 로그인 체크를 위한 보호 라우트 Wrapper
 */
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  
  if (!isLoggedIn) {
    // 로그인 페이지로 보내되, 이전 위치를 기억하도록 state 전달
    return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
  }
  
  return children;
};

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
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'write',
        element: <ComingSoonPage />,
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
