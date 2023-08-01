import 'react-toastify/dist/ReactToastify.css';

import { UserCard, DataWrapper } from './UserData.styled';
import { UserForm } from 'components/UserForm/UserForm';
// import { useAuth } from 'redux/auth/selectors';
// import LoaderPaws from 'components/Loader/LoaderPaws';

export const UserData = () => {
  // const { isLoading } = useAuth();
  return (
    <>
      {/* {isLoading && <LoaderPaws />} */}
      <UserCard>
        <DataWrapper>
          <UserForm />
        </DataWrapper>
      </UserCard>
    </>
  );
};
