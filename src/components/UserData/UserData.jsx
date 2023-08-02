import 'react-toastify/dist/ReactToastify.css';
import { UserForm } from 'components/UserForm/UserForm';
import { UserCard, DataWrapper } from './UserData.styled';

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
