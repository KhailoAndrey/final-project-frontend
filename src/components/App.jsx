import { Navigate, Route, Routes } from 'react-router';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import PublicRoute from 'utils/PublicRoute';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { PrivateRoute } from 'utils/PrivateRoute';
import UserPage from 'pages/UserPage/UserPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import FriendsPage from 'pages/FriendsPage/FriendsPage';

const HomePage = lazy(() => import('../pages/MainPage/MainPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/main"
                component={<RegisterPage />}
              ></PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo="/main"
                component={<LoginPage />}
              ></PublicRoute>
            }
          />
          <Route path="news" element={<NewsPage />} />
          <Route path="/notices/">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route path="friends" element={<FriendsPage />} />
          <Route
            path="user"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<UserPage />}
              ></PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
