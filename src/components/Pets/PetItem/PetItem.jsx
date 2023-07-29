import {
  PetItem,
  ImgContainer,
  ListPets,
  Title,
  Content,
  DeleteButton,
  PetPhoto,
  Span,
} from './PetItem.styled';

import svg from '../../../images/Icons/symbol-defs.svg';
// import { useDispatch } from 'react-redux';
// import { deletePet } from 'redux/pets/operations';

const PetsItem = ({ pet }) => {
  //   const dispatch = useDispatch();
  console.log('the pet :>> ', pet);
  const { _id, file, name, date, type, comments } = pet;
  return (
    <>
      <PetItem key={_id}>
        <ImgContainer>
          <PetPhoto src={`${file}`} alt="pretty pet" />
        </ImgContainer>
        <Content>
          <ListPets>
            <Title>
              Name: <Span>{name}</Span>
            </Title>
            <Title>
              Date of birth: <Span> {date} </Span>
            </Title>
            <Title>
              Breed:<Span> {type} </Span>
            </Title>
            <Title>
              Comments: <Span>{comments} </Span>
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
