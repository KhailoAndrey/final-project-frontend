import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  FilterBtn,
  Thumb,
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

  const { t } = useTranslation();

  const onBtnClick = () => {
    showFilters ? setShowFilters(false) : setShowFilters(true);
  };

  const toggle = (state, method) => {
    state ? method(false) : method(true);
  };

  const onApplyFilter = () => {
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
          {t('filter')}
          <svg width={24} height={24}>
            <use href={`${svg}#icon-filter`} width={24} height={24} />
          </svg>
        </FilterBtn>
      </Thumb>

      {showFilters && (
        <FilterContent>
          <p>{t('filters')}</p>

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
              {t('by_age')}
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
              {t('by_gender')}
            </FilterCategoryBtn>
            {showSexFilters && <FilterBySex sex={sex} setSex={setSex} />}
          </CategorytDiv>

          {(sex || age.length > 0) && (
            <FilterApplyBtn type="button" onClick={onApplyFilter}>
              <svg width={20} height={20}>
                <use href={`${svg}#icon-paw`} width={20} height={20} />
              </svg>
              {t('apply')}
            </FilterApplyBtn>
          )}
        </FilterContent>
      )}
    </>
  );
};

export default NoticesDropFilter;

NoticesDropFilter.propTypes = {
  setPetsSex: PropTypes.func.isRequired,
  setPetsAge: PropTypes.func.isRequired,
  setRerender: PropTypes.func.isRequired,
};
