import { useState } from 'react';
// import FilterBySex from './FilterBySex';
import PropTypes from 'prop-types';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  FilterBtn,
  Thumb,
  // FilterBackdrop,
  FilterContent,
  FilterCategoryBtn,
} from './NoticesDropFilter.styled';

const NoticesDropFilter = ({ setPetsSex, setPetsAge, setRerender }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showAgeFilters, setShowAgeFilters] = useState(false);
  const [showSexFilters, setShowSexFilters] = useState(false);
  // const [sex, setSex] = useState([]);
  // const [age, setAge] = useState();

  const onBtnClick = () => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
    // console.log('showFilters :>> ', showFilters);
  };

  const toggle = (title, method) => {
    title ? method(false) : method(true);
    // console.log('title :>> ', title);
    // console.log('showAgeFilters Age:>> ', showAgeFilters);
    // console.log('showSexFilters Sex:>> ', showSexFilters);
  };

  return (
    <>
      <Thumb>
        <FilterBtn type="button" onClick={() => onBtnClick()}>
          Filter
          <svg width={24} height={24}>
            <use href={`${svg}#icon-filter`} width={24} height={24} />
          </svg>
        </FilterBtn>
      </Thumb>

      {
        showFilters && (
          // <FilterBackdrop>
          <FilterContent>
            <p>Filters</p>
            <FilterCategoryBtn
              type="button"
              onClick={() => {
                toggle(showAgeFilters, setShowAgeFilters);
              }}
            >
              {!showAgeFilters && (
                <svg width={24} height={24}>
                  <use
                    href={`${svg}#icon-chevron-down`}
                    width={24}
                    height={24}
                  />
                </svg>
              )}
              By age
            </FilterCategoryBtn>
            <FilterCategoryBtn
              type="button"
              onClick={() => {
                toggle(showSexFilters, setShowSexFilters);
              }}
            >
              {!showSexFilters && (
                <svg width={24} height={24}>
                  <use
                    href={`${svg}#icon-chevron-down`}
                    width={24}
                    height={24}
                  />
                </svg>
              )}
              By gender
            </FilterCategoryBtn>
          </FilterContent>
        )
        // </FilterBackdrop>
      }
    </>
  );
};

export default NoticesDropFilter;

NoticesDropFilter.propTypes = {
  setPetsSex: PropTypes.func.isRequired,
  setPetsAge: PropTypes.func.isRequired,
  setRerender: PropTypes.func.isRequired,
};
