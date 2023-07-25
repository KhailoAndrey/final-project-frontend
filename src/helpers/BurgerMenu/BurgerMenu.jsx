import PropTypes from 'prop-types';
import svg from '../../images/Icons/symbol-defs.svg';
import { BurgerBox } from './BurgerMenu.styled';

const BurgerMenu = ({ openModal = null }) => {
  return (
    <>
      <BurgerBox type="button" onClick={() => openModal(true)}>
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

export default BurgerMenu;

BurgerMenu.propTypes = {
  setShowModal: PropTypes.func,
};