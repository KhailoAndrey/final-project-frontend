// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
