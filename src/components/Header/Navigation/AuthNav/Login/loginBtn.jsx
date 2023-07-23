import { useNavigate } from 'react-router-dom';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { ButtonLog } from './loginBth.styled';

export const LoginBtn = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <>
      <ButtonLog type="button" onClick={() => onClick()}>
        Log IN
        <svg width={24} height={24}>
          <use href={`${svg}#icon-paw`} width={24} height={24} />
        </svg>
      </ButtonLog>
    </>
  );
};
