import { useEffect } from 'react';
import { useAuth } from 'redux/auth/selectors';
import AddPetBtn from 'helpers/AddPetButton/AddPetBtn';
import { UserData } from 'components/UserData/UserData';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import PetsList from 'components/Pets/PetList/PetList';
import {
  UserInfo,
  Container,
  ProfileTitle,
  UserContainer,
  PetsContainer,
  UserPageContainer,
} from './UserPage.styled';

const UserPage = () => {
  const { newUser, user } = useAuth();

  const pets = user.pets;

  useEffect(() => {
    // console.log('оновлення петсів у сторі');
  }, [pets]);

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
          {pets.length > 0 && <PetsList pets={pets} />}
        </PetsContainer>
      </UserPageContainer>
      {/* {user.newUser && <ModalCongrats />} */}
      {/* {user.newUser && <AttentionModal />} */}
    </>
  );
};

export default UserPage;
