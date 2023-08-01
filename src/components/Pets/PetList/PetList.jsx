// import LoaderPaws from 'components/Loader/LoaderPaws';
import PetsItem from '../PetItem/PetItem';
import { List } from './PetList.styled';
// import { useAuth } from 'redux/auth/selectors';

const PetsList = ({pets}) => {
  // const { user, isLoading } = useAuth();

  return (
    <>
      {/* {isLoading && <LoaderPaws />} */}
      <List>
        {pets &&
          pets.length > 0 &&
          pets.map(pet => <PetsItem key={pet._id} pet={pet} />)}
      </List>
    </>
  );
};

export default PetsList;
