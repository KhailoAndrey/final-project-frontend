import { useNavigate } from 'react-router-dom';
import { ButtonReg } from './registrBtn.styled';

export const RegistrationBtn = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/register');
  };

  return (
    <>
      <ButtonReg type="button" onClick={() => onClick()}>
        Registration
      </ButtonReg>
    </>
  );
};
