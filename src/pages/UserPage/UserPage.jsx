import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const pets = user.pets;

  useEffect(() => {
    // console.log('оновлення петсів у сторі');
  }, [pets]);

  useEffect(() => {
    // console.log('оновлення юзера у сторі');
  }, [user]);

  return (
    <>
      {newUser && <ModalCongrats />}
      <UserPageContainer>
        <UserContainer>
          <ProfileTitle>{t('my_info')}</ProfileTitle>
          <UserInfo>
            <UserData />
          </UserInfo>
        </UserContainer>

        <PetsContainer>
          <Container>
            <ProfileTitle>{t('my_pets')}</ProfileTitle>
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
