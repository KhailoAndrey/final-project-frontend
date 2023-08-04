import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  BtnContainer,
  FormButton,
  FormInput,
  SearchForm,
  ClearButton,
} from './NoticesSearch.styled';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '15px',
  timeout: 3000,
  opacity: 1,
  warning: {
    background: 'var(--main-clr-blue)',
    textColor: 'var(--main-accent-text-clr)',
    notiflixIconColor: 'var(--main-clr-yellow)',
  },
});

const NoticesFilter = ({ setQuery, setPage, setRerender }) => {
  const [localInput, setLocalInput] = useState('');
  const { t } = useTranslation();

  const inputChange = ({ target: { value } }) => {
    setLocalInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = localInput;
    if (query.trim() === '' || query.length < 2) {
    Notiflix.Notify.warning(t('search_min'));
    } else {
      setPage(1);
      setQuery(query);
      setRerender(true);
    }
  };

  const onClear = e => {
    e.preventDefault();
    setLocalInput('');
    setQuery('');
    setRerender(true);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="localInput"
          value={localInput}
          onChange={inputChange}
          placeholder={t('search')}
        />
        <BtnContainer>
          <FormButton type="submit">
            <svg width={24} height={24}>
              <use href={`${svg}#icon-search`} width={24} height={24} />
            </svg>
          </FormButton>
          {localInput.length > 0 && (
            <ClearButton type="button" onClick={onClear}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-cross`} width={24} height={24} />
              </svg>
            </ClearButton>
          )}
        </BtnContainer>
      </SearchForm>
    </>
  );
};

export default NoticesFilter;

NoticesFilter.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setRerender: PropTypes.func.isRequired,
};
