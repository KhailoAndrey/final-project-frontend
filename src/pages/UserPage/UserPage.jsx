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

const UserPage = () => {
  return (
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
  );
};

export default UserPage;
