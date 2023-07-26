import { useState } from 'react';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  BtnContainer,
  FormButton,
  FormInput,
  SearchForm,
  ClearButton,
} from './NoticesSearch.styled';

const NoticesFilter = ({ setQuery }) => {
  const [localInput, setLocalInput] = useState('');

  const inputChange = ({ target: { value } }) => {
    setLocalInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = localInput;
    if (query.trim() === '' || query.length < 3) {
      console.log('Enter correct query');
    } else {
      console.log('query :>> ', query);
      setQuery(query);
    }
  };

  const onClear = e => {
    e.preventDefault();
    setLocalInput('');
    setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="localInput"
          value={localInput}
          onChange={inputChange}
          placeholder="Search"
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
      </SearchForm>{' '}
    </>
  );
};

export default NoticesFilter;
