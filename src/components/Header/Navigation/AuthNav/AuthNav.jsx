import { AuthBox } from './AuthNav.styled';
import { LoginBtn } from './Login/loginBtn';
import { RegistrationBtn } from './Registration/registrBtn';

const AuthNav = ({ closeModal }) => {
  return (
    <>
      <AuthBox>
        <LoginBtn closeModal={closeModal}></LoginBtn>
        <RegistrationBtn closeModal={closeModal}></RegistrationBtn>
      </AuthBox>
    </>
  );
};

export default AuthNav;
