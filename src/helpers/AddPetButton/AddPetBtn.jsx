import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'redux/auth/selectors';
// import PropTypes from 'prop-types';
import svg from '../../images/Icons/symbol-defs.svg';
import { Button } from './AddPetBtn.styled';

const AddPetBtn = ({ setAlertShowModal = null }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {t('add_pet')}
        <svg width={24} height={24}>
          <use href={`${svg}#icon-plus-small`} width={24} height={24} />
        </svg>
      </Button>
    </>
  );
};

export default AddPetBtn;

// AddPetBtn.propTypes = {
//   setAlertShowModal: PropTypes.func,
// };
