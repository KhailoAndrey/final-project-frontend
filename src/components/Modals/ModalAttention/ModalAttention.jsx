import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { LoginBtn } from 'components/Header/Navigation/AuthNav/Login/loginBtn';
import { RegistrationBtn } from 'components/Header/Navigation/AuthNav/Registration/registrBtn';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  ModalContent,
  ModalBackdrop,
  ModalBtn,
  ModalTitle,
  ModalText,
  BtnContainer,
} from './ModalAttention.styled';

export const AttentionModal = ({ setAlertShowModal }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = e => {
      setAlertShowModal(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setAlertShowModal]);

  return (
    <ModalBackdrop onClick={() => setAlertShowModal(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalBtn onClick={() => setAlertShowModal(false)}>
          <svg width={24} height={24}>
            <use
              href={`${svg}#icon-cross`}
              width={24}
              height={24}
            />
          </svg>
        </ModalBtn>
        <ModalTitle>{t('attention')}</ModalTitle>
        <ModalText>{t('attention_text')}</ModalText>
        <BtnContainer>
          <LoginBtn closeModal={setAlertShowModal} />
          <RegistrationBtn closeModal={setAlertShowModal} />
        </BtnContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

AttentionModal.propTypes = {
  setAlertShowModal: PropTypes.func.isRequired,
};
