import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 40px;
  background: var(--main-clr-blue);
  display: flex;
  width: 129px;
  justify-content: center;
  align-items: center;
  gap: 8px;
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

  &:hover,
  &:focus {
    background: var(--main-clr-gr_blue);
  }
`;
