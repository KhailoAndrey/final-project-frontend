// import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import { AddPetBtn } from 'helpers/AddPetButton/addPetBtn';
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

const UserPage = () => {

  return (
<<<<<<< Updated upstream
    <>
      <UserPageContainer>
        <UserContainer>
          <ProfileTitle> My information: </ProfileTitle>
          <UserInfo />
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
=======
    <UserPageContainer>
      <UserContainer>
        <ProfileTitle> My information: </ProfileTitle>
        <UserInfo />
        <UserData />
      </UserContainer>
      <PetsContainer>
        <Container>
          <ProfileTitle>My pets:</ProfileTitle>
          <AddPetBtn />
        </Container>
        <PetsInfo />
      </PetsContainer>
    </UserPageContainer>
>>>>>>> Stashed changes
  );
};

export default UserPage;
