import AddPetBtn from 'helpers/AddPetButton/AddPetBtn';
import {
  UserInfo,
  Container,
  ProfileTitle,
  UserContainer,
  PetsContainer,
  UserPageContainer,
} from './UserPage.styled';
import { UserData } from 'components/UserData/UserData';
import { useAuth } from 'redux/auth/selectors';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import PetsList from 'components/Pets/PetList/PetList';

const UserPage = () => {
  const { newUser } = useAuth();
  const pets = [
    {
      _id: '64c275b0f60jj99962e6c91359',
      name: ' bnbnv',
      birthday: '07.07.2023',
      breed: 'vbnvnvn',
      comments: 'vbbnvbn',
      avatarURL:
        'https://res.cloudinary.com/ddvlfjdje/image/upload/v1690465711/nefgbawvh0gxj0ozwdbd.png',
    },
    {
      _id: '64c275b0f6099962e6c91359',
      name: ' bnbnv',
      birthday: '07.07.2023',
      breed: 'vbnvnvn',
      comments: 'vbbnvbn',
      avatarURL:
        'https://res.cloudinary.com/ddvlfjdje/image/upload/v1690465711/nefgbawvh0gxj0ozwdbd.png',
    },
  ];

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
          <PetsList pets={pets} />
        </PetsContainer>
      </UserPageContainer>
      {/* {user.newUser && <ModalCongrats />} */}
      {/* {user.newUser && <AttentionModal />} */}
    </>
  );
};

export default UserPage;
