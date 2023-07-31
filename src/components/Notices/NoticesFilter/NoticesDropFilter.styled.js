import styled from "styled-components";
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


export const CategoryContent = styled.span`

`;

// main button

export const FilterBtn = styled.button`
  border-radius: 40px;
  background: var(--main-clr-blue);
  display: flex;
  min-width: 110px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  text-decoration: none;
  svg {
    stroke: var(--btn-clr-fon);
  }
  padding: 8px 0;
  color: var(--btn-clr-fon);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
`;