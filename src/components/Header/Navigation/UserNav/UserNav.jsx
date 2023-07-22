import { useAuth } from 'redux/auth/selectors';
import Logout from './Logout/Logout';
import UserNavBlock from './UserNavBlock/UserNavBlock';

const UserNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && <Logout />}
      <UserNavBlock />
    </>
  );
};

export default UserNav;
