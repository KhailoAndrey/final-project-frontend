// import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import { AddPetBtn } from '../../helpers/AddPetButton/AddPetBtn';
import {
  UserInfo,
  PetsInfo,
  Container,
  ProfileTitle,
  UserContainer,
  PetsContainer,
  UserPageContainer,
} from './UserPage.styled';

const UserPage = () => {
  return (
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
  );
};

export default UserPage;
