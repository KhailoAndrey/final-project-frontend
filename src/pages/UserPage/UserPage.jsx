import { useTranslation } from 'react-i18next';
import { useAuth } from 'redux/auth/selectors';
import AddPetBtn from 'helpers/AddPetButton/AddPetBtn';
import { UserData } from 'components/UserData/UserData';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import PetsList from 'components/Pets/PetList/PetList';
import {
  UserInfo,
  TitleContainer,
  ProfileTitle,
  UserContainer,
  PetsContainer,
  UserPageContainer,
  UserLoaderDiv,
} from './UserPage.styled';
import LoaderPaws from 'components/Loader/LoaderPaws';

const UserPage = () => {
  const { newUser, user, isLoading } = useAuth();

  const { t } = useTranslation();

  const pets = user.pets;

  return (
    <>
      {newUser && <ModalCongrats />}

      <UserPageContainer>
        <UserContainer>
          <div>
            <ProfileTitle>{t('my_info')}</ProfileTitle>
          </div>
          <UserInfo>
            <UserData />
          </UserInfo>
        </UserContainer>

        <PetsContainer>
          <TitleContainer>
            <ProfileTitle>{t('my_pets')}</ProfileTitle>
            <AddPetBtn />
          </TitleContainer>
          {pets && <PetsList pets={pets} />}
        </PetsContainer>
      </UserPageContainer>

      <UserLoaderDiv>{isLoading && <LoaderPaws />}</UserLoaderDiv>
    </>
  );
};

export default UserPage;
