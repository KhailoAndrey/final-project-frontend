import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from 'redux/auth/authOperations';
import DeleteModal from 'components/Modals/ModalApproveAction/DeleteModal';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { LogoutBtn } from './Logout.styled';

const data = {
  title: 'Already leaving?',
  text: '',
  icon: 'icon-logout',
};

const Logout = ({ showButton }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleLogoutUser = () => {
    dispatch(logOut());
  };

  return (
    <>
      <LogoutBtn type="button" onClick={handleLogout} showButton={showButton}>
        {t('logout')}
        <svg width={24} height={24}>
          <use href={`${svg}#icon-logout`} width={24} height={24} />
        </svg>
      </LogoutBtn>
      {isModalOpen && (
        <DeleteModal
          onClose={setIsModalOpen}
          handleDelete={handleLogoutUser}
          data={data}
        />
      )}
      {/* <DeleteModal/> */}
    </>
  );
};

export default Logout;
