import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from 'redux/auth/authOperations';
import clearAllCookies from 'utils/clearCookies';
import svg from '../../images/Icons/symbol-defs.svg';
import DeleteModal from 'components/Modals/ModalApproveAction/DeleteModal';
import { LogoutButton } from './UserButtons.styled';

export const CameraIcon = () => {
  return (
    <svg width={24} height={24} stroke={'var(--main-clr-blue)'}>
      <use href={`${svg}#icon-camera`} />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg width={24} height={24} stroke={'var(--menu-clr-green)'}>
      <use href={`${svg}#icon-check`} />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg width={24} height={24} stroke={'var(--main-clr-blue)'}>
      <use href={`${svg}#icon-cross`} width={24} height={24} />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-edit`} />
    </svg>
  );
};

export const LogoutUser = ({ showButton }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  const closeModal = () => {
    setShowModal(false);
  };

  const data = {
    title: t('leaving'),
    text: '',
    icon: 'icon-logout',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleLogoutUser = () => {
    clearAllCookies();
    dispatch(logOut());
    closeModal();
  };

  return (
    <>
      <LogoutButton
        type="button"
        onClick={handleLogout}
        showButton={showButton}
      >
        <svg width={24} height={24} stroke={'var(--main-clr-blue)'}>
          <use href={`${svg}#icon-logout`} />
        </svg>

        {t('logout')}
      </LogoutButton>
      {isModalOpen && (
        <DeleteModal
          onClose={setIsModalOpen}
          handleDelete={handleLogoutUser}
          data={data}
        />
      )}
    </>
  );
};

export const RemoveIcon = () => {
  return (
    <svg width={20} height={20} stroke={'var(--form-error-red)'}>
      <use href={`${svg}#icon-cross`} />
    </svg>
  );
};
