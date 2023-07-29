import PetsItem from '../PetItem/PetItem';
import { List } from './PetList.styled';

const PetsList = ({ pets }) => {
  return (
    <>
      <List>
        {pets.length > 1 &&
          pets.map(pet => <PetsItem key={pet._id} pet={pet} />)}
      </List>
    </>
  );
};

export default PetsList;
