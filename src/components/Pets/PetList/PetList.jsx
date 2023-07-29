import PetsItem from '../PetItem/PetItem';
import { List } from './PetList.styled';
import { useAuth } from 'redux/auth/selectors';

const PetsList = () => {
  const { user } = useAuth();

  const { pets } = user;
  console.log(pets);
  return (
    <>
      <List>
        {pets.length >= 1 &&
          pets.map(pet => <PetsItem key={pet._id} pet={pet} />)}
      </List>
    </>
  );
};

export default PetsList;
