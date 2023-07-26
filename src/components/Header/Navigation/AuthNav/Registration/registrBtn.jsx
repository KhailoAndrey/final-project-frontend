import { useNavigate } from 'react-router-dom';
import { ButtonReg } from './registrBtn.styled';

export const RegistrationBtn = ({ closeModal }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/register');
    closeModal();
  };

  return (
    <>
      <ButtonReg type="button" onClick={() => onClick()}>
        Registration
      </ButtonReg>
    </>
  );
};
