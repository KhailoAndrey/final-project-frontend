import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const FormInput = styled.input`
  width: 280px;
  height: 44px;
  border-radius: 24px;
  background: var(--white-bckg-clr);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  box-shadow: 3px 8px 14px 0px var(--small-shadow);
  border: 0;
  outline: none;
  padding-left: 20px;
  padding-right: 62px;

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 244px;
  border: 0;
  outline: none;
  background: inherit;
  svg {
    fill: var(--main-clr-blue);
  }

  &:hover {
    svg {
      fill: var(--main-clr-yellow);
    }
  }
`;

export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 244px;
  border: 0;
  outline: none;
  background: inherit;

  svg {
    stroke: var(--main-clr-yellow);
  }

  &:hover {
    svg {
      stroke: var(--main-clr-blue);
    }
  }
`;
