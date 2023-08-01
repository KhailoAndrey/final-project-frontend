import PropTypes from 'prop-types';
import {
  CategoryInput,
  CategoryTextDiv,
  CategoryLabel,
} from './NoticesDropFilter.styled';

const FilterBySex = ({ sex, setSex }) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    setSex(value);
  };
  // console.log('sex :>> ', sex);

  return (
    <CategoryTextDiv>
      <CategoryInput
        type="radio"
        value="male"
        id="male"
        checked={sex === 'male'}
        onChange={handleFilterChange}
      />
      <CategoryLabel htmlFor="male">male</CategoryLabel>
      <CategoryInput
        type="radio"
        value="female"
        id="female"
        checked={sex === 'female'}
        onChange={handleFilterChange}
      />
      <CategoryLabel htmlFor="female">female</CategoryLabel>
    </CategoryTextDiv>
  );
};

export default FilterBySex;

FilterBySex.propTypes = {
  sex: PropTypes.string.isRequired,
  setSex: PropTypes.func.isRequired,
};
