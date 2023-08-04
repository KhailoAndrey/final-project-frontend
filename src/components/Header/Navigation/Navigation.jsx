import { useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import AuthNav from './AuthNav/AuthNav';
import Nav from './Nav/Nav';
import UserNav from './UserNav/UserNav';
import BurgerMenu from 'helpers/BurgerMenu/BurgerMenu';
import ModalBurger from 'components/Modals/ModalBurger/ModalBurger';
import LangBtn from 'helpers/LangButton/LangBtn';
import { NavDesk } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavDesk>
        <Nav />
      </NavDesk>
      <LangBtn />
      {isLoggedIn ? (
        <UserNav closeModal={closeModal} />
      ) : (
        <AuthNav closeModal={closeModal} />
      )}
      <BurgerMenu openModal={openModal} />
      {showModal && (
        <ModalBurger closeModal={closeModal} showModal={showModal} />
      )}
    </>
  );
};

export default Navigation;
