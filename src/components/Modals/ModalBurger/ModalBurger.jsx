import { useState } from 'react';
import svg from '../../../images/Icons/symbol-defs.svg';
import { BurgerBox } from './ModalBurger.styled';

const ModalBurger = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <>
      <BurgerBox onClick={() => setisModalOpen(isModalOpen)}>
        <svg width={24} height={24}>
          <use
            href={`${svg}#icon-burger`}
            style={{ stroke: 'var(--main-clr-yellow)' }}
            width={24}
            height={24}
          />
        </svg>
      </BurgerBox>
    </>
  );
};

export default ModalBurger;
