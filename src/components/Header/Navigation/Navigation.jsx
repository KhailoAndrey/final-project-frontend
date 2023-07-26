import { useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import AuthNav from './AuthNav/AuthNav';
import Nav from './Nav/Nav';
import UserNav from './UserNav/UserNav';
import BurgerMenu from 'helpers/BurgerMenu/BurgerMenu';
import ModalBurger from 'components/Modals/ModalBurger/ModalBurger';
import { NavDesk } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavDesk>
        <Nav />
      </NavDesk>
      {isLoggedIn ? <UserNav /> : <AuthNav closeModal={closeModal} />}
      <BurgerMenu openModal={openModal} />
      {showModal && (
        <ModalBurger closeModal={closeModal} showModal={showModal} />
      )}
    </>
  );
};

export default Navigation;
