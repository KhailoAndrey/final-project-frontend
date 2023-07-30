import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { AddPetTitle } from './Title.styled';

export const Title = ({ picked, stage }) => {
  const { t } = useTranslation();

  let title = t('add_pet_form');
  if (stage !== 1) {
    switch (picked) {
      case 'sell':
        title = t('add_pet_sell');
        break;
      case 'lost/found':
        title = t('add_pet_lost');
        break;
      default:
        title = t('add_my_pet');
    }
  }
  return (
    <AddPetTitle data-category={picked} data-stage={stage}>
      {title}
    </AddPetTitle>
  );
};

Title.propTypes = {
  picked: PropTypes.string.isRequired,
  stage: PropTypes.number.isRequired,
};
