import PetsItem from '../PetItem/PetItem';
import { List } from './PetList.styled';

const PetsList = ({ pets }) => {
  console.log('PetsList  pets:', pets);
  return (
    <List>
      {pets &&
        pets.map(({ _id, avatarURL, title, birthday, breed, comments }) => {
          return (
            <PetsItem
              key={_id}
              _id={_id}
              name={title}
              photo={avatarURL}
              birthday={birthday}
              breed={breed}
              comments={comments}
            />
          );
        })}
    </List>
  );
};

export default PetsList;
