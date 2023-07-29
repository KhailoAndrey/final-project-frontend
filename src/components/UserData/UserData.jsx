import 'react-toastify/dist/ReactToastify.css';

import { UserCard, DataWrapper } from './UserData.styled';
import { UserForm } from 'components/UserForm/UserForm';

export const UserData = () => {
  return (
    <>
      <UserCard>
        <DataWrapper>
          <UserForm />
        </DataWrapper>
      </UserCard>
    </>
  );
};
