import { useEffect } from 'react';
import { useAuth } from 'redux/auth/selectors';
// import PropTypes from 'prop-types';
import svg from '../../../images/Icons/symbol-defs.svg';
import { LoginBtn } from 'components/Header/Navigation/AuthNav/Login/loginBtn';
import { RegistrationBtn } from 'components/Header/Navigation/AuthNav/Registration/registrBtn';
import Logo from 'components/Header/Logo/Logo';
import Nav from 'components/Header/Navigation/Nav/Nav';
import UserNavBlock from 'components/Header/Navigation/UserNav/UserNavBlock/UserNavBlock';
import Logout from 'components/Header/Navigation/UserNav/Logout/Logout';
import {
  ModalContent,
  ModalBackdrop,
  ModalBtn,
  ModalHeader,
  BtnContainer,
  UserBlock,
} from './ModalBurger.styled';

const ModalBurger = ({ closeModal, showModal }) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalContent open={showModal}>
        <ModalHeader>
          <Logo />
          {isLoggedIn && <Logout showButton={true}></Logout>}
          <ModalBtn onClick={closeModal}>
            <svg width={24} height={24}>
              <use href={`${svg}#icon-cross`} width={24} height={24} />
            </svg>
          </ModalBtn>
        </ModalHeader>
        {isLoggedIn ? (
          <UserBlock>
            <UserNavBlock showName={true} />
          </UserBlock>
        ) : (
          <BtnContainer>
            <LoginBtn onClick={closeModal} />
            <RegistrationBtn onClick={closeModal} />
          </BtnContainer>
        )}
        <Nav onClick={closeModal} />
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalBurger;

// ModalBurger.propTypes = {
//   setShowModal: PropTypes.func.isRequired,
// };
