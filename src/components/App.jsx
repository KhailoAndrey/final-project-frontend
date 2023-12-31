import { Navigate, Route, Routes } from 'react-router';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';
import { useAuth } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/authOperations';
import { LanguageProvider } from 'utils/LanguageContext';
import LoaderPaws from './Loader/LoaderPaws';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const FriendsPage = lazy(() => import('../pages/FriendsPage/FriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderPaws/>
  ) : (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/user"
                component={<RegisterPage />}
              ></PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo="/user"
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
            path="add-pet"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<AddPetPage />}
              ></PrivateRoute>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<UserPage />}
              ></PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
};
