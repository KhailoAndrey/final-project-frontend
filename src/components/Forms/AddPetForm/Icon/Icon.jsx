import icons from '../../../../images/Icons/sprite.svg';
import { SvgSexIcon, SvgPlusIcon } from '../AddPetForm.styled';
import PropTypes from 'prop-types';

export const SexIcon = ({ iconName, index, selected, sex }) => {
  return (
    <SvgSexIcon
      width={22}
      height={22}
      index={index}
      selected={selected}
      sex={sex}
    >
      <use href={icons + `${iconName}`}></use>
    </SvgSexIcon>
  );
};

export const PlusIcon = ({ iconName }) => {
  return (
    <SvgPlusIcon width={50} height={50}>
      <use href={icons + `${iconName}`} width="50px" height="50px"></use>
    </SvgPlusIcon>
  );
};

SexIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
};

PlusIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
