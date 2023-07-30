import LoaderPaws from 'components/Loader/LoaderPaws';
import PetsItem from '../PetItem/PetItem';
import { List } from './PetList.styled';
import { useAuth } from 'redux/auth/selectors';

const PetsList = () => {
  const { user, isLoading } = useAuth();

  const { pets } = user;

  return (
    <>
      {isLoading && <LoaderPaws />}
      <List>
        {pets &&
          pets.length > 0 &&
          pets.map(pet => <PetsItem key={pet._id} pet={pet} />)}
      </List>
    </>
  );
};

export default PetsList;
