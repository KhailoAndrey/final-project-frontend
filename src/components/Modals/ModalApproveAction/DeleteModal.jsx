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
            <BtnClose onClick={onClose}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-cross`} width={24} height={24} />
              </svg>
            </BtnClose>
            <TitleDelete>Delete adverstiment?</TitleDelete>

            <TextDelete>Are you sure you want to delete <b> “{"витягуєм з data."}”</b>?<br/> You can`t undo this action.</TextDelete>
            <QuestioBtnWrap>
            <BtnDelete onClick={onClose} isHovered={true}>
              Cancel              
            </BtnDelete>
            <BtnDelete onClick={handleDelete} isHovered={false}>
              Yes
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-trash`}
                  width={24}
                  height={24}
                />
              </svg>
            </BtnDelete>
            </QuestioBtnWrap>
           
          </ModalWindow>
        </Overlay>
      
    </>
  );
};

export default DeleteModal;
