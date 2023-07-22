// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  // после тестов ниже строку удалить а вверху раскомментировать
  // const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
