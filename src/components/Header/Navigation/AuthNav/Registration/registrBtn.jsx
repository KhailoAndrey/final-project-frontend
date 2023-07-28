import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ButtonReg } from './registrBtn.styled';

export const RegistrationBtn = ({ closeModal }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate('/register');
    closeModal();
  };

  return (
    <>
      <ButtonReg type="button" onClick={() => onClick()}>
        {t('registration')}
      </ButtonReg>
    </>
  );
};
