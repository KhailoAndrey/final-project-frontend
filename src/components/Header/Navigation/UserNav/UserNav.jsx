import { useAuth } from 'redux/auth/selectors';
import Logout from './Logout/Logout';
import UserNavBlock from './UserNavBlock/UserNavBlock';

const UserNav = ({ closeModal }) => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && <Logout closeModal={closeModal} />}
      <UserNavBlock />
    </>
  );
};

export default UserNav;
