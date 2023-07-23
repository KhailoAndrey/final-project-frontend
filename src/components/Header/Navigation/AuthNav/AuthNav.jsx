import { AuthBox } from './AuthNav.styled';
import { LoginBtn } from './Login/loginBtn';
import { RegistrationBtn } from './Registration/registrBtn';

const AuthNav = () => {
  return (
    <>
      <AuthBox>
        <LoginBtn></LoginBtn>
        <RegistrationBtn></RegistrationBtn>
      </AuthBox>
    </>
  );
};

export default AuthNav;
