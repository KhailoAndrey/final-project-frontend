import { useAuth } from 'redux/auth/selectors';
import AuthNav from './AuthNav/AuthNav';
import Nav from './Nav/Nav';
import UserNav from './UserNav/UserNav';
import ModalBurger from 'components/Modals/ModalBurger/ModalBurger';
import { NavDesk } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavDesk>
        <Nav />
      </NavDesk>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
      <ModalBurger />
    </>
  );
};

export default Navigation;
