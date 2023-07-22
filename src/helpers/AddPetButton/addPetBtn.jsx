import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';
import { Button } from './addPetBtn.styled';

export const AddPetBtn = ({ setShowModal = null }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onClick = () => {
    if (isLoggedIn) {
      navigate('/add-pet');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <Button type="button" onClick={() => onClick()}>
        Add Pet
      </Button>
    </>
  );
};

AddPetBtn.propTypes = {
  setShowModal: PropTypes.func,
};