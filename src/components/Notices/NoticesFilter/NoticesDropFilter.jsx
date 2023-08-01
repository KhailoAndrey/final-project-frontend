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
  CategorytDiv,
  FilterApplyBtn,
} from './NoticesDropFilter.styled';
import FilterBySex from './FilterBySex';
import FilterByAge from './FilterByAge';

const NoticesDropFilter = ({ setPetsSex, setPetsAge, setRerender }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showAgeFilters, setShowAgeFilters] = useState(false);
  const [showSexFilters, setShowSexFilters] = useState(false);
  const [sex, setSex] = useState('');
  const [age, setAge] = useState([]);

  const onBtnClick = () => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
    // console.log('showFilters :>> ', showFilters);
  };

  const toggle = (state, method) => {
    state ? method(false) : method(true);
    // console.log('state :>> ', state);
    // console.log('showAgeFilters Age:>> ', showAgeFilters);
    // console.log('showSexFilters Sex:>> ', showSexFilters);
  };

  const onApplyFilter = () => {
    console.log('sex :>> ', sex);
    console.log('age :>> ', age);
    setPetsSex(sex);
    setPetsAge(age);
    setAge([]);
    setSex('');
    setRerender(true);
    setShowFilters(false);
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

            <CategorytDiv>
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
              {showAgeFilters && <FilterByAge age={age} setAge={setAge} />}
            </CategorytDiv>

            <CategorytDiv>
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
              {showSexFilters && <FilterBySex sex={sex} setSex={setSex} />}
            </CategorytDiv>

            {(sex || age.length > 0) && (
              <FilterApplyBtn
                type="button"
                onClick={onApplyFilter}
                // onClick={() => {
                //   onApplyFilter};
                // }}
              >
                <svg width={20} height={20}>
                  <use href={`${svg}#icon-paw`} width={20} height={20} />
                </svg>
                Apply
              </FilterApplyBtn>
            )}
            {/* <FilterApplyBtn
              type="button"
              // onClick={() => {
              //   toggle(showSexFilters, setShowSexFilters);
              // }}
            >
              <svg width={24} height={24}>
                <use href={`${svg}#icon-paw`} width={20} height={20} />
              </svg>
              Apply
            </FilterApplyBtn> */}
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