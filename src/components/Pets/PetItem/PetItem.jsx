import {
  PetItem,
  PetImage,
  ListPets,
  Title,
  Content,
  DeleteButton,
} from './PetItem.styled';

import svg from '../../../images/Icons/symbol-defs.svg';
// import { useDispatch } from 'react-redux';
// import { deletePet } from 'redux/pets/operations';

const PetsItem = ({ _id, photo, name, birthday, breed, comments }) => {
  //   const dispatch = useDispatch();

  return (
    <>
      <PetItem key={_id}>
        <PetImage src={photo} />
        <Content>
          <ListPets>
            <Title>
              <b>Name:</b> {name}
            </Title>
            <Title>
              <b>Date of birth:</b> {birthday}
            </Title>
            <Title>
              <b>Breed:</b> {breed}
            </Title>
            <Title>
              <b>Comments:</b> {comments}
            </Title>
          </ListPets>

          <DeleteButton>
            <svg width={24} height={24}>
              <use
                href={`${svg}#icon-trash`}
                style={{ stroke: '#54ADFF' }}
                width={24}
                height={24}
              />
            </svg>
          </DeleteButton>
        </Content>
      </PetItem>
    </>
  );
};

export default PetsItem;
