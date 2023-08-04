import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOwnPet } from 'redux/auth/authOperations';
import convertDateFormat from 'utils/formatDate';
import svg from '../../../images/Icons/symbol-defs.svg';
import DeleteModal from 'components/Modals/ModalApproveAction/DeleteModal';
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

const PetsItem = ({ pet }) => {
  const [showDelModal, setShowDelModal] = useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { _id, file, name, date, type, comments } = pet;
  const formattedDate = convertDateFormat(date);

  const data = {
    title: t('delete'),
    text: `${t('del_text_1')}"${name}"${t('del_text_2')}`,
    icon: 'icon-trash',
  };

  const onDelBtnClick = () => {
    dispatch(deleteOwnPet(_id));
    setShowDelModal(false);
  };

  return (
    <>
      <PetItem key={_id}>
        <ImgContainer>
          <PetPhoto src={`${file}`} alt="pretty pet" />
        </ImgContainer>
        <Content>
          <ListPets>
            <Title>
              {t('name')}: <Span>{name}</Span>
            </Title>
            <Title>
              {t('date_of_birth')}: <Span> {formattedDate} </Span>
            </Title>
            <Title>
              {t('breed')}:<Span> {type} </Span>
            </Title>
            <Title>
              {t('comment')}: <Span>{comments} </Span>
            </Title>
          </ListPets>

          <DeleteButton type="button" onClick={() => setShowDelModal(true)}>
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
        {showDelModal && (
          <DeleteModal
            onClose={setShowDelModal}
            handleDelete={onDelBtnClick}
            data={data}
          />
        )}
      </PetItem>
    </>
  );
};

export default PetsItem;
