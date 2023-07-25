import React, { useEffect} from 'react';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  BtnClose,
  BtnDelete,
  ModalWindow,
  Overlay,
  TextDelete,
  TitleDelete,QuestioBtnWrap,
} from './DaleteModal.styled';

const DeleteModal = ({ onClose, handleDelete, data }) => {
  
   const handleBackdropClick = event => {
      if (event.target === event.currentTarget) {
        onClose(false);
      }
    };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <BtnClose onClick={() => onClose(false)}>
            <svg width={24} height={24}>
              <use href={`${svg}#icon-cross`} width={24} height={24} />
            </svg>
          </BtnClose>
          <TitleDelete>{data.title}</TitleDelete>

          <TextDelete>{data.text}
          </TextDelete>
          <QuestioBtnWrap>
            <BtnDelete onClick={() => onClose(false)} isHovered={true}>
              Cancel
            </BtnDelete>
            <BtnDelete onClick={handleDelete} isHovered={false}>
              Yes
              <svg width={24} height={24}>
                <use href={`${svg}#${data.icon}`} width={24} height={24} />
              </svg>
            </BtnDelete>
          </QuestioBtnWrap>
        </ModalWindow>
      </Overlay>
    </>
  );
};

export default DeleteModal;
