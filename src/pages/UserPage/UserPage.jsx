import AddPetBtn from 'helpers/AddPetButton/AddPetBtn';
import {
  UserInfo,
  PetsInfo,
  Container,
  ProfileTitle,
  UserContainer,
  PetsContainer,
  UserPageContainer,
} from './UserPage.styled';
import { UserData } from 'components/UserData/UserData';
import { useAuth } from 'redux/auth/selectors';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';

const UserPage = () => {
  const { newUser } = useAuth();

  return (
    <>
      {newUser && <ModalCongrats />}
      <UserPageContainer>
        <UserContainer>
          <ProfileTitle> My information: </ProfileTitle>
          <UserInfo>
            <UserData />
          </UserInfo>
        </UserContainer>
        <PetsContainer>
          <Container>
            <ProfileTitle>My pets:</ProfileTitle>
            <AddPetBtn />
          </Container>
          <PetsInfo />
        </PetsContainer>
      </UserPageContainer>
      {/* {user.newUser && <ModalCongrats />} */}
      {/* {user.newUser && <AttentionModal />} */}
    </>
  );
};

export default UserPage;
