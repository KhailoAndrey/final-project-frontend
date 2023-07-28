import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { ButtonLog } from './loginBth.styled';

export const LoginBtn = ({ closeModal }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate('/login');
    closeModal();
  };

  return (
    <>
      <ButtonLog type="button" onClick={() => onClick()}>
        {t('login')}
        <svg width={24} height={24}>
          <use href={`${svg}#icon-paw`} width={24} height={24} />
        </svg>
      </ButtonLog>
    </>
  );
};
