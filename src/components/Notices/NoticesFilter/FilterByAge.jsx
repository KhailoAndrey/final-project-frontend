import PropTypes from 'prop-types';
import {
  CategoryInput,
  CategoryTextDiv,
  CategoryLabel,
} from './NoticesDropFilter.styled';

const FilterByAge = ({ age, setAge }) => {
  const handleFilterChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setAge(prevFilters => [...prevFilters, value]);
    } else {
      setAge(prevFilters => prevFilters.filter(filter => filter !== value));
    }
  };

  return (
    <CategoryTextDiv>
      <CategoryInput
        type="checkbox"
        value="3-12m"
        id="3-12m"
        checked={age.includes('3-12m')}
        onChange={handleFilterChange}
      />
      <CategoryLabel htmlFor="3-12m">3-12 month</CategoryLabel>
      <CategoryInput
        type="checkbox"
        value="1-2y"
        id="1-2y"
        checked={age.includes('1-2y')}
        onChange={handleFilterChange}
      />
      <CategoryLabel htmlFor="1-2y">up to 1 year</CategoryLabel>
      <CategoryInput
        type="checkbox"
        value=">2y"
        id=">2y"
        checked={age.includes('>2y')}
        onChange={handleFilterChange}
      />
      <CategoryLabel htmlFor=">2y">up to 2 year</CategoryLabel>
    </CategoryTextDiv>
  );
};

export default FilterByAge;

FilterByAge.propTypes = {
  age: PropTypes.array.isRequired,
  setAge: PropTypes.func.isRequired,
};