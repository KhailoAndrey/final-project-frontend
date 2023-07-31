import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import LoaderPaws from 'components/Loader/LoaderPaws';
import { googleAuth } from '../../redux/auth/authOperations';
import { useAuth } from 'redux/auth/selectors';


const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading } = useAuth();

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

  return isLoading ? (
    <LoaderPaws/>
  ) : (<LoginForm />);
};

export default LoginPage;
