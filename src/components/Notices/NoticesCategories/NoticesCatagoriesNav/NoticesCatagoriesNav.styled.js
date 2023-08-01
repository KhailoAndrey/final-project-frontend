import styled from 'styled-components';

export const CatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  max-width: 150px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
    width: 100%;
    max-width: 700px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  border: 0;
  border-radius: 40px;
  background-color: var(--main-clr-blue-light);
  color: var(--main-clr-blue);

  @media screen and (min-width: 768px){
    height: 35px;
  }

  &:hover,
  &:focus {
    background: var(--main-clr-gr_blue);
    color: var(--btn-clr-fon);
  }
`;

export const Input = styled.input`
  display: none;

  &[type='radio']:checked + label {
    background-color: var(--main-clr-blue);
    color: var(--btn-clr-fon);
  }
`;
