import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoginBtn } from 'components/Header/Navigation/AuthNav/Login/loginBtn';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  ModalContent,
  ModalBackdrop,
  ModalBtn,
  ModalHeader,
  BtnContainer,
  UserBlock,
} from './ModalBurger.styled';
import { RegistrationBtn } from 'components/Header/Navigation/AuthNav/Registration/registrBtn';
import Logo from 'components/Header/Logo/Logo';
import Nav from 'components/Header/Navigation/Nav/Nav';
import { useAuth } from 'redux/auth/selectors';
import UserNavBlock from 'components/Header/Navigation/UserNav/UserNavBlock/UserNavBlock';

const ModalBurger = ({ setShowModal = null }) => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    const handleKeyDown = e => {
      setShowModal(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowModal]);

  return (
    <ModalBackdrop onClick={() => setShowModal(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Logo />
          <ModalBtn onClick={() => setShowModal(false)}>
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
            <LoginBtn />
            <RegistrationBtn />
          </BtnContainer>
        )}
        <Nav onClick={() => setShowModal(false)} />
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalBurger;

ModalBurger.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
