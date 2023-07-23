import React, { useEffect} from 'react';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  BtnClose,
  BtnCongrats,
  ModalWindow,
  Overlay,
  TextCongrats,
  TitleCongrats,QuestioBtnWrap,
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
            <BtnClose onClick={onClose}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-cross`} width={24} height={24} />
              </svg>
            </BtnClose>
            <TitleCongrats>Delete adverstiment?</TitleCongrats>

            <TextCongrats>Are you sure you want to delete <b> “{"витягуєм з data."}”</b>?<br/> You can`t undo this action.</TextCongrats>
            <QuestioBtnWrap>
            <BtnCongrats onClick={onClose} isHovered={true}>
              Cancel              
            </BtnCongrats>
            <BtnCongrats onClick={handleDelete} isHovered={false}>
              Yes
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-trash`}
                  width={24}
                  height={24}
                />
              </svg>
            </BtnCongrats>
            </QuestioBtnWrap>
           
          </ModalWindow>
        </Overlay>
      
    </>
  );
};

export default DeleteModal;
