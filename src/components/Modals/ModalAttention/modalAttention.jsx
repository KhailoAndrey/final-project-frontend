import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoginBtn } from 'components/Header/Navigation/AuthNav/Login/loginBtn';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  ModalContent,
  ModalBackdrop,
  ModalBtn,
  ModalTitle,
  ModalText,
  BtnContainer,
} from './modalAttention.styled';
import { RegistrationBtn } from 'components/Header/Navigation/AuthNav/Registration/registrBtn';

export const AttentionModal = ({ setShowModal }) => {

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
        <ModalBtn onClick={() => setShowModal(false)}>
          <svg width={24} height={24}>
            <use
              href={`${svg}#icon-cross`}
              style={{ stroke: '#54ADFF' }}
              width={24}
              height={24}
            />
          </svg>
        </ModalBtn>
        <ModalTitle>Attention</ModalTitle>
        <ModalText>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </ModalText>
        <BtnContainer>
          <LoginBtn />
          <RegistrationBtn />
        </BtnContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

AttentionModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};