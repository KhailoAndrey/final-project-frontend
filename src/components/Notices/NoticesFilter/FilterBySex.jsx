import { useState } from 'react';
import {
  CategoryDiv,
  CategoryInput,
  CategoryTitle,
} from './NoticesDropFilter.styled';

const FilterBySex = ({ sex, setSex }) => {
  // const [sex, setSex] = useState([]);

  const handleFilterChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setSex(prevFilters => [...prevFilters, value]);
    } else {
      setSex(prevFilters => prevFilters.filter(filter => filter !== value));
    }
  };
  console.log('sex :>> ', sex);

  return (
    <CategoryDiv>
      <CategoryTitle>By age</CategoryTitle>
      <CategoryInput
        type="checkbox"
        value="3-12m"
        id="3-12m"
        checked={sex.includes('3-12m')}
        onChange={handleFilterChange}
      />
      <label htmlFor="3-12m">0-12 month</label>
      <CategoryInput
        type="checkbox"
        value="1-2y"
        id="1-2y"
        checked={sex.includes('1-2y')}
        onChange={handleFilterChange}
      />
      <label htmlFor="1-2y">ut to 1 year</label>
      <CategoryInput
        type="checkbox"
        value=">2y"
        id=">2y"
        checked={sex.includes('>2y')}
        onChange={handleFilterChange}
      />
      <label htmlFor=">2y">up to 2 year</label>
    </CategoryDiv>
  );
};

export default FilterBySex;
