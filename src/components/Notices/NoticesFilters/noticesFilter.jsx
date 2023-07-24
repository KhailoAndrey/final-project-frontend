import svg from '../../../images/Icons/symbol-defs.svg';
import { FormButton, FormInput, SearchForm } from './noticesFilter.styled';

const NoticesFilter = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.queryInput.value;
    if (query.trim() === '' || query.length < 3) {
      console.log('Enter correct query');
    } else {
      console.log('query :>> ', query);
      // setSearchQuery({ query: form.queryInput.value });
      form.reset();
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput type="text" name="queryInput" placeholder='Search' />
        <FormButton type="submit">
          <svg width={24} height={24}>
            <use href={`${svg}#icon-search`} width={24} height={24} />
          </svg>
        </FormButton>
      </SearchForm>{' '}
    </>
  );
};

export default NoticesFilter;
