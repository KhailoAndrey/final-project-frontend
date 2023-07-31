import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { googleAuth } from '../../redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token))
        .unwrap()
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [dispatch, token]);

  return <LoginForm />;
};

export default LoginPage;
