import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 40px;
  background: var(--main-clr-blue);
  display: flex;
  min-width: 129px;
  height: 35px;
  justify-content: center;
  align-items: center;
  /* gap: 8px; */
  border: 0;
  outline: 0;
  text-decoration: none;
  svg {
    stroke: var(--btn-clr-fon);
  }
  padding: 8px 0;
  color: var(--btn-clr-fon);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 16px;
    height: 40px;
  }

  &:hover,
  &:focus {
    background: var(--main-clr-gr_blue);
  }
`;
