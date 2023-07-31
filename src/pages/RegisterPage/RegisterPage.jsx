import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import LoaderPaws from 'components/Loader/LoaderPaws';
import { useAuth } from 'redux/auth/selectors';

const RegisterPage = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <LoaderPaws/>
  ) : (<RegisterForm />);
};

export default RegisterPage;
