import styled from 'styled-components';

export const CategoryTextDiv = styled.div`
  width: 136px;
  background-color: var(--main-clr-blue-light);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 7px 14px 14px 14px;
  gap: 14px;
`;

export const CategoryTitle = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: var(--main-clr-blue);
`;

export const CategoryLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
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
    background-color: var(--main-clr-blue);
  }
`;

export const CategoryContent = styled.span``;

// main button @filter@-------------------

export const FilterBtn = styled.button`
  border-radius: 40px;
  background: var(--btn-clr-fon);
  display: flex;
  min-width: 110px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--main-clr-blue);
  outline: 0;
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

  &:hover {
    background: var(--main-clr-gr_blue);
    color: var(--btn-clr-fon);

    svg {
      stroke: var(--btn-clr-fon);
    }
  }
`;

export const Thumb = styled.div`
  position: relative;
`;

// filters category----------------

export const FilterContent = styled.div`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 35px;
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

  @media screen and (min-width: 768px) {
    left: 0;
    top: 40px;
  }

  @media screen and (min-width: 1280px) {
    left: 0;
    top: 40px;
  }
`;

export const FilterCategoryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 32px;
  min-width: 136px;
  border-radius: 20px;
  background: var(--main-clr-blue-light);
  padding: 4px 12px;
  border: 0;
  outline: none;
  text-decoration: none;
  color: var(--main-clr-blue);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  svg {
    stroke: var(--main-clr-blue);
  }
`;

export const FilterApplyBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
  min-width: 136px;
  border-radius: 20px;
  background: var(--main-clr-blue-light);
  padding: 4px 14px;
  border: 0;
  outline: 0;
  text-decoration: none;
  color: var(--main-clr-blue);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  svg {
    fill: var(--main-clr-blue);
  }

  &:hover {
    background: var(--main-clr-gr_blue);
    color: var(--btn-clr-fon);

    svg {
      fill: var(--btn-clr-fon);
    }
  }
`;

// one filters category---------------------
export const CategorytDiv = styled.div`
  width: 136px;
  background-color: var(--main-clr-blue-light);
  border-radius: 20px;
`;

// delete buttons--------------------
export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  max-height: 32px;
  border-radius: 20px;
  background: var(--white-bckg-clr);
  padding: 8px 12px;
  border: 0;
  outline: 0;
  text-decoration: none;
  color: var(--main-clr-blue);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  box-shadow: 3px 8px 14px 0px var(--small-shadow);

  svg {
    stroke: var(--main-clr-blue);
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }
`;

export const FilterBtnContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 390px;
    position: absolute;
    top: 40px;
    right: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 390px;
    top: -4px;
    right: 295px;
  }
`;

export const ClearFilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: var(--white-bckg-clr);
  outline: 0;
  text-decoration: none;
  border: 1px solid var(--main-clr-blue-light);
  box-shadow: 3px 8px 14px 0px var(--small-shadow);

  svg {
    stroke: var(--main-clr-blue);
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }
`;
