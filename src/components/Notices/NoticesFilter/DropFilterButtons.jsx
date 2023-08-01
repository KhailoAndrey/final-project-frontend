import PropTypes from 'prop-types';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  ClearFilterBtn,
  DeleteBtn,
  FilterBtnContainer,
} from './NoticesDropFilter.styled';

const DropFilterButtons = ({
  petsSex,
  petsAge,
  setRerender,
  setPetsSex,
  setPetsAge,
}) => {
  const filter = petsSex ? [...petsAge, petsSex] : [...petsAge];

  const onFilterDeleteBtn = e => {
    const { value } = e.currentTarget;
    if (value === 'male' || value === 'female') {
      setPetsSex('');
      setRerender(true);
    } else {
      const newAgeFilter = petsAge.filter(age => age !== value);
      setPetsAge(newAgeFilter);
      setRerender(true);
    }
  };

  const clearFilter = () => {
    setPetsAge([]);
    setPetsSex('');
    setRerender(true);
  };

  return (
    <FilterBtnContainer>
      {filter.map(btn => {
        return (
          <DeleteBtn
            type="button"
            key={btn}
            value={btn}
            onClick={onFilterDeleteBtn}
          >
            {btn}
            <svg width={16} height={16}>
              <use href={`${svg}#icon-cross-small`} width={16} height={16} />
            </svg>
          </DeleteBtn>
        );
      })}
      {filter.length > 1 && (
        <ClearFilterBtn type="button" onClick={clearFilter}>
          <svg width={20} height={20}>
            <use href={`${svg}#icon-cross`} width={20} height={20} />
          </svg>
        </ClearFilterBtn>
      )}
    </FilterBtnContainer>
  );
};

export default DropFilterButtons;

DropFilterButtons.propTypes = {
  petsSex: PropTypes.string.isRequired,
  petsAge:PropTypes.array.isRequired,
  setPetsSex: PropTypes.func.isRequired,
  setPetsAge: PropTypes.func.isRequired,
  setRerender: PropTypes.func.isRequired,
};