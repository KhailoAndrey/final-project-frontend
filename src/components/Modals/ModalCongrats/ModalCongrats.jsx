import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  BtnClose,
  BtnCongrats,
  ModalWindow,
  Overlay,
  TextCongrats,
  TitleCongrats,
} from './ModalCongrats.styled';

const ModalCongrats = () => {
  const { t } = useTranslation();

  // const navigate = useNavigate();

  const [isOpenCongratsModal, setIsOpenCongratsModal] = useState(true);

  const onClose = useCallback(() => {
    setIsOpenCongratsModal(false);
    // navigate('/notices');
  }, [setIsOpenCongratsModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpenCongratsModal && (
        <Overlay onClick={handleBackdropClick}>
          <ModalWindow>
            <BtnClose onClick={onClose}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-cross`} width={24} height={24} />
              </svg>
            </BtnClose>
            <TitleCongrats>{t('congrasts')}</TitleCongrats>
            <TextCongrats>{t('success')}</TextCongrats>
            <BtnCongrats onClick={onClose}>
              {t('to_profile')}
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-paw`}
                  style={{ fill: '#fff' }}
                  width={24}
                  height={24}
                />
              </svg>
            </BtnCongrats>
          </ModalWindow>
        </Overlay>
      )}
    </>
  );
};

export default ModalCongrats;
