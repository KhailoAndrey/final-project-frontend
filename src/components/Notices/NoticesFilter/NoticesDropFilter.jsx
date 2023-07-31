import { useState } from 'react';
// import FilterBySex from './FilterBySex';
import svg from '../../../images/Icons/symbol-defs.svg'
import { FilterBtn } from './NoticesDropFilter.styled';

const NoticesDropFilter = ({ setPetsSex, setPetsAge }) => {
  const [showFilters, setShowFilters] = useState(false);

  const onBtnClick = () => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
    console.log('showFilters :>> ', showFilters);
  };

  return (
    <>
      <FilterBtn type="button" onClick={() => onBtnClick()}>
        Filter
        <svg width={24} height={24}>
          <use href={`${svg}#icon-filter`} width={24} height={24} />
        </svg>
      </FilterBtn>

      {/* <FilterBySex /> */}
    </>
  );
};

export default NoticesDropFilter;
