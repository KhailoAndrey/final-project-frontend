import svg from '../../../../../images/Icons/symbol-defs.svg';
import { LogoutBtn } from './Logout.styled';


const Logout = () => {
  return (
    <>
      <LogoutBtn type='button'>
        Log out
        <svg width={24} height={24}>
          <use href={`${svg}#icon-logout`} width={24} height={24} />
        </svg>
      </LogoutBtn>
    </>
  );
};

export default Logout;
