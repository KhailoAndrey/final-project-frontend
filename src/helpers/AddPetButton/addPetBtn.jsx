import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';
import svg from '../../images/Icons/symbol-defs.svg';
import { Button } from './AddPetBtn.styled';

export const AddPetBtn = ({ setAlertShowModal = null }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onClick = () => {
    if (isLoggedIn) {
      navigate('/add-pet');
    } else {
      setAlertShowModal(true);
    }
  };

  return (
    <>
      <Button type="button" onClick={() => onClick()}>
        Add Pet
        <svg width={24} height={24}>
          <use href={`${svg}#icon-plus-small`} width={24} height={24} />
        </svg>
      </Button>
    </>
  );
};

AddPetBtn.propTypes = {
  setShowModal: PropTypes.func,
};