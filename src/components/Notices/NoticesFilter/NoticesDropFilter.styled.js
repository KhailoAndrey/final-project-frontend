import styled from 'styled-components';
// import svg from '../../../images/Icons/symbol-defs.svg';

export const CategoryDiv = styled.div`
  width: 136px;
  background-color: var(--main-clr-blue-light);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 14px;
  gap: 14px;
`;

export const CategoryTitle = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: var(--main-clr-blue);
`;

export const CategoryInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid var(--main-clr-blue);
    border-radius: 5px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + label::before {
    background-color: black;
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='54ADFF' d='M20.0001 7L9.0001 18L4 13'/%3e%3c/svg%3e");
  fill: red; */
  }
`;

export const CategoryContent = styled.span``;

// main button-----------------------

export const FilterBtn = styled.button`
  border-radius: 40px;
  background: var(--btn-clr-fon);
  display: flex;
  min-width: 110px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--main-clr-blue);
  outline: none;
  text-decoration: none;
  svg {
    stroke: var(--main-clr-blue);
  }
  padding: 8px 0;
  color: var(--main-clr-blue);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 16px;
    height: 40px;
    min-width: 152px;
  }

  &:hover,
  &:focus {
    background: var(--main-clr-gr_blue);
    color: var(--btn-clr-fon);

    svg {
      stroke: var(--btn-clr-fon);
    }
  }
`;

export const Thumb = styled.div`
  /* background-color: red; */
  position: relative;
`;

// filters category----------------

export const FilterContent = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  top: 40px;
  width: 152px;
  background-color: aqua;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  color: var(--main-clr-blue);
  background-color: var(--white-bckg-clr);
  border-radius: 20px;
`;

export const FilterCategoryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 32px;
  border-radius: 20px;
  background: var(--main-clr-blue-light);
  padding: 4px 12px;
  border: 0;
  outline: none;
  text-decoration: none;
  color: var(--main-clr-blue);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;

  svg {
    stroke: var(--main-clr-blue);
  }
`;

/* export const FilterBackdrop = styled.div``; */
